import React from 'react';

function HomePage() {
    return (
       <>    
              <nav class="local">
                <a href="#mongo">MongoDB</a>
                <a href="#restapi">Rest API</a>
                <a href="#react">React</a>         
            </nav>
            
<h2>Home Page</h2>
    <p>
    My career goals after graduation include full-stack engineering work. This particular project reflects some of the work that I would like to do. Having a server like MongoDB and Express on the backend to develop web services. I particularly enjoy creating microservices utilizing representational state transfer application programming interface (Rest API). On the frontend, I would like to become more proficient with JavaScript, React, and Node.js. The ultimate goal is to develop microservices for companies and incorporate technologies such as artificial intelligence and cloud technology to enhance web services.
    </p>

    <p>
    I created ChowTrackr to initially as a way to maintain family recipes and easily share them amongst friends and strangers alike. ChowTrackr has now grown into my personal project to display my strengths and skills.
    </p>
    <article>
    <h3>
    TECHNOLOGIES USED:
    </h3>

    <p>
    LOGGING RECIPES: MERN - MongoDB, Express, React, Node.js
    </p>

    <p>
    CHOWTRACKR ORDER TRACKR - React, JavaScript
    </p>
    </article>

    <article id="mongo">
                <h3><strong>MongoDB</strong></h3>
                <p>MongoDB is a system that is used to store large amounts of information in document-like structures. This information can be pulled and used in microservices and web applications. This information that is stored in JSON format and can interact with Express framework in a server. These JSON documents pulled by the server can be utilized by React to update web pages. MongoDB is flexible because it can store information with various structures. MongoDB is also scalable in that it can be utilized across multiple servers. Lastly, MongoDB has an extensive query system, meaning that data can be pulled and manipulated easily. </p>
    </article>
    <article id="restapi">
                <h3><strong>Rest API</strong></h3>
                <p>Representational state transfer application programming interface (Rest API) are utilized in creating web-applications. Rest API's can be used to facilitate communication between servers and web applications. Requests and responses can be sent back and forth between servers and web applications to create many of the applications we see on the web today. Rest API's utilize HTTP methods (Get, Post, Put, Delete) to alter information and request data from a server. Common languages that can be used are Node,js, Python, Java, Golang, .NET, and the various frameworks for creating these API's. For the purpose of this site, Node.js with Express.js framework was used on the backend. </p>

    </article>

    <article id="react">
                <h3><strong>React</strong></h3>
                <p>React is a JavaScript library utilized on the frontend to create web applications. React uses JSX to allow for use of HTML elements within JavaScript code. It also uses component-based data that moves in one direction (parent to child hierarchy). This type of structure allows for consistency and maintains the organization of the data. These components can be utilized by various ideas such as state hook and properties. State hook is key because when a component's data needs to be changed, the state hook variables are used to create these changes across the frontend components. Properties are also a vital idea used in components because it allows for information to be passed from parent to child components. </p>
    </article>




</>
    );
}

export default HomePage;  