#!/usr/bin/env node

const https = require('https');

// Messaging configuration
const messaging_host = 'messaging';
const messaging_user = process.env.MSG_USER;
const messaging_pass = process.env.MSG_PASS;
const queue = 'requests';
const messaging_url = `amqp://${messaging_user}:${messaging_pass}@${messaging_host}`;
const amqp = require('amqplib/callback_api');

// Database configuration
const db_host = 'db';
const db_user = process.env.POSTGRES_USER;
const db_pass = process.env.POSTGRES_PASSWORD;
const db_database = process.env.POSTGRES_DB;
const postgres = require('pg');
const Pool = postgres.Pool;
const db_pool = new Pool ({host: db_host, user: db_user,
  password: db_pass, database: db_database});



function send_response(channel, msg, response) {
  channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
    correlationId: msg.properties.correlationId
  });
  channel.ack(msg);
}

amqp.connect(messaging_url, function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    channel.assertQueue(queue, {
      durable: false
    });
    channel.prefetch(1);
    console.log('Listening for requests...');
    channel.consume(queue, function reply(msg) {
      console.log(`Received: ${msg.content}`);
      send_response(channel, msg, {'status': 'OK', 'data': data});

      var received_json = JSON.parse(msg.content);

      // Read and write to db


      const getUser = (request, response) => {
        const id = parseInt(request.params.id)

        db_pool.query('SELECT * FROM users WHERE id = $1', [id], (err, res) => {
          if (err) {
            throw err
          }
          response.status(200).json(res.rows);
          db_pool.end();
        })
      }

      const createUser = (request, response) => {
        const { name, email } = request.body

        db_pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (err, res) => {
          if (err) {
            throw err
          }
          response.status(201).send(`User added with ID: ${res.insertId}`)
        })
      }


    });
  });
});
