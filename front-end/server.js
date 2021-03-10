const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

// Messaging configuration
const messaging_host = 'messaging';
const messaging_user = process.env.RABBITMQ_USER;
const messaging_pass = process.env.RABBITMQ_PASS;
const queue = 'requests';
const messaging_url = `amqp://${messaging_user}:${messaging_pass}@${messaging_host}`;
const amqp = require('amqplib/callback_api');

const app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index.html');
});
app.get('/login.html', (req, res) => {
    res.render('login.html');
});
app.get('/register.html', (req, res) => {
    res.render('register.html');
});

app.post('/login', (req,res) => {
    // gets email and password from form
    let email = req.body.email;
    let pass = req.body.pswd;
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
            console.log(' [x] Awaiting RPC requests');
            channel.consume(queue, function reply(msg) {
                channel.sendToQueue(queue,
                    Buffer.from(msg));
                channel.ack(msg);
            });
        });
    });

    // send it out
    // get your response and act on it
    // if it is valid load page. If it is invalid display an error
});

app.post('/register', async(req,res) => {
    let email = req.body.email;
    let pass = req.body.pswd;
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
            console.log(' [x] Awaiting RPC requests');
            channel.consume(queue, function reply(msg) {


                channel.sendToQueue(msg.properties.replyTo,
                    Buffer.from(), {
                        correlationId: msg.properties.correlationId
                    });

                channel.ack(msg);
            });
        });
    });

});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

