<h1>IT490 GROUP PROJECT</h1>

<h4>Often times people struggle with choosing a restaurant to eat at, this is a fun way for people to find new restaurants and make their decisions of eating out easier.
</h4>

<p>The is project is designed as a restaurant search/suggestion application using the Zomato api (https://developers.zomato.com/api). This app will feature a roulette style search that will allow users to search for restaurants based on location, name, cuisine and rating. Based on the users search criteria a matching restaurant will be selected, the user can then view details/menu of that restaurant. If they do not like the restaurant they can refresh and another restaurant will appear. They can repeat the roulette process until they find a restaurant that they would like to eat at. 
</p>

<h4>Our application will also incorporate login system which will allow each user to:
</h4>
<ul><li>Have their own page</li> 
<li>Be able to provide rating to restaurant 
</li>
<li>
If  visited?
<ul> <li>Will have it stored in their personal page 
 </li>
 <li>The rating will display on the personal page as well as public page </li>
 
 </ul>
<li> 
The application will also store the data on if the user has visited the restaurant before or not and when selecting (visit) it will take them to there personal room page where they can see information about their last visit or they have provided a rating 

</li>


</ul>

**GROUP MEMBER**  
    <ul>
    <li> Anjali Kumari</li>
    <li>Thomas Semiz</li>
    <li>Krishna Bhagat</li>
    <li>Steven Rodrigues</li>
     </ul> 
    
   
    



<h2> Overall Concept Of How The App Works </h2>

<h3>Front-end:</h3>
<h4>Port:3000</h4>
<p>Python (Flask) is utilized to present the html pages as per the content being present to the user. </p>
<p> The goal is to interacts with the user via HTTP and communicates with Messaging via a messaging library. /p>

<h3>Back-end:</h3>
<h4>Written in: Python - rabbitmq library</h4>

**Goals of the Back End:**
     <ul><li>Handles authentication</li>
     <li>Scrape information from the web: 
     <ul><li> Connects to the rest api
     </li>
     
           
 </ul>
     </li>
      <li>Retrieve and stores data to and from the database </li>
      
   </ul>
     





<h3>Database:</h3>
<h4>Postgres</h4>
<h3> port: 8080 </h3>
<li>Utilized to store user authentication data as well as the user's personalized data</li>

<h3>Messaging:</h3>
<h4>RabbitMQ</h4>
<p>RabbitMQ is mainly utilized to allow components to use a common medium to exchange information
</p>
<ul><li>Run command docker compose up </li>
<li>Once everything is up and running utilize localhost:15672 to acress the Front-end UI for RabbitMQ</li>
<li>Logging into the rabbitMQ will provide a detailed overview on the queues sent between the frontend and backend</li>
</ul>

<h3>App Structure</h3>
   <ul><li> Front-end and Messaging works back and forth as per sending and receiving data/request</li> 
   <li>Likewise messaging and backend works back and forth</li>
   <li>Database and backend works together making the overall app component connected to each other.</li>
   
   </ul>
   
   <h2> Getting the App to run on the local machine:</h2>
   
   <ul> <li> Pre Requirenment: Docker </li>
   <li>Clone Project: git clone https://github.com/ak2254/IT490-groupproject.git </li>
   <li> Run comand: docker compose Build</li>
   <li> Run comand: docker-compose up to have the project running</li>
      
   
   </ul>
   
