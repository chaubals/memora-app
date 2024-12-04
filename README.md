<h1 style={{ font-weight:"bold" }}>Memora - Flashcard-Based Learning App</h1>

<h3>Executive Summary</h3>

This project was develped as a part of the required coursework for the ECE528 Cloud Computing graduate course at the University of Michigan-Dearborn.
Contributors: Siddhesh Rajan Chaubal & Tejashree Gayakwad

<h3>Overview</h3>
Memora is an innovative flashcard-based application designed to enhance tech learning through spaced repetition. It offers users access to pre-made and customizable flashcards on various technical topics, facilitating effective knowledge retention. With secure user authentication and an intuitive interface, Memora aims to support students and professionals in mastering complex concepts efficiently.

<h3>Functional Overview</h3>
<ol>
  <li><strong>Authentication:</strong> Users log in to the portal using their email ID and password.</li>
  <li><strong>Homepage:</strong> The homepage displays a list of tech topics such as DSA, OOP, Python, Java, etc.</li>
  <li><strong>Flashcards:</strong> Clicking on a topic leads to the flashcards page for that specific topic.</li>
  <li><strong>Premade Flashcards:</strong> Clicking on a premade flashcard opens a modal with all flashcards for the selected topic. Users can navigate through the flashcards using the "Next" and "Previous" buttons.</li>
  <li><strong>Create Flashcards:</strong> Opens a modal where users can input a custom question and answer for a new flashcard.</li>
  <li><strong>View Custom Cards:</strong> User-created flashcards are stored in a separate deck called "User-Created Flashcards," which can be accessed and reviewed.</li>
  <li><strong>Delete Custom Cards:</strong> Unlike premade flashcards, custom flashcards can be deleted using a delete button.</li>
</ol>

<h3>Technical Details</h3>
<ul>
<li>Frontend: React.js, HTML, CSS</li>
<li>Backend: Python (serverside operations)</li>
<li>Database: AWS DynamoDB</li>
<li>Serverless tool: AWS Lambda</li>
<li>Authentication: AWS Cognito</li>
<li>Deployment and Hosting: AWS Amplify</li>
<li>API Testing: Postman</li>
</ul>

<h3>Cloud Services/Technologies Used</h3>
<ol>
<li>AWS Cognito: A user pool is set up dynamically by configuring AWS Amplify for the project. Cognito is used for user authentication, user pool management, and setting policies around authentication such as password policy</li>
<li>AWS Amplify: Set up the hosting on Amplify. Amplify was selected for its light-weight design, more suitable for front-end focused applications</li>
<li>AWS API Gateway: REST API connects the React.js client with the backend (Lambda and DynamoDB). Various HTTP requests are used such as GET, PUT, and DELETE are used that perform actions such as fetching, creating, and deleting flashcards. </li>
<li>AWS DynamoDB: No-SQL database is used for storing the flashcards data in JSON format. DynamoDB was selected for this purpose as it is fully managed, highly scalable, and high availability.</li>
<li>AWS Lambda: API requests are processed by serverless functions. All the operations such as fetching, creating, and deleting flashcards are done through Lambda functions.</li>
</ol>
