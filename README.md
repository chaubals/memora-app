<h1 style={{ font-weight:"bold" }}>Memora - Flashcard-Based Learning App</h1>

<h3>Executive Summary</h3>

This project is done as a required coursework under the ECE528 Cloud Computing graduate course at the University of Michigan-Dearborn
Contributors: Siddhesh Rajan Chaubal & Tejashree Gayakwad

<h3>Overview</h3>
Memora is an innovative flashcard-based application designed to enhance tech learning through spaced repetition. It offers users access to pre-made and customizable flashcards on various technical topics, facilitating effective knowledge retention. With secure user authentication and an intuitive interface, Memora aims to support students and professionals in mastering complex concepts efficiently.


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

Cloud Services/Technologies Used:
<ol>
<li>AWS Cognito: A user pool is set up dynamically by configuring AWS Amplify for the project. Cognito is used for user authentication, user pool management, and setting policies around authentication such as password policy</li>
<li>AWS Amplify: Set up the hosting on Amplify. Amplify was selected for its light-weight design, more suitable for front-end focused applications</li>
<li>AWS API Gateway: REST API connects the React.js client with the backend (Lambda and DynamoDB). Various HTTP requests are used such as GET, PUT, and DELETE are used that perform actions such as fetching, creating, and deleting flashcards. </li>
<li>AWS DynamoDB: No-SQL database is used for storing the flashcards data in JSON format. DynamoDB was selected for this purpose as it is fully managed, highly scalable, and high availability.</li>
<li>AWS Lambda: API requests are processed by serverless functions. All the operations such as fetching, creating, and deleting flashcards are done through Lambda functions.</li>
</ol>
