<h1 style={{ font-weight:"bold" }}>Memora - Flashcard-Based Learning App</h1>

<h3>Executive Summary</h3>

This project is done as a required coursework under the ECE528 Cloud Computing graduate course at the University of Michigan-Dearborn
Contributors: Siddhesh Rajan Chaubal & Tejashree Gayakwad

<h3>Overview</h3>
Memora is an innovative flashcard-based application designed to enhance tech learning through spaced repetition. It offers users access to pre-made and customizable flashcards on various technical topics, facilitating effective knowledge retention. With secure user authentication and an intuitive interface, Memora aims to support students and professionals in mastering complex concepts efficiently.


<h3>Technical Details</h3>
<h4>Tech stack</h4>
* Frontend: React.js, HTML, CSS
* Backend: Python (serverside operations)
* Database: AWS DynamoDB
* Serverless tool: AWS Lambda
* Authentication: AWS Cognito
* Deployment and Hosting: AWS Amplify
* API Testing: Postman

Cloud Services/Technologies Used:
i. AWS Cognito: A user pool is set up dynamically by configuring AWS Amplify for the project. Cognito is used for user authentication, user pool management, and setting policies around authentication such as password policy. We are also planning to utilize federation sign in, so that users can sign in to Memora using their Google or social media accounts.
ii. AWS Amplify: Set up the hosting on Amplify. We though that for more front-end focused application such as Memora, using Beanstalk, EC2, or any combination of
those two would be an overkill. Hence, Amplify was selected for its light-weight design, more suitable for front-end focused applications
iii. AWS API Gateway: REST API connects the React.js client with the backend (Lambda and DynamoDB). Various HTTP requests are used such as GET, PUT, and DELETE are used that perform actions such as fetching, creating, and deleting flashcards. 
iv. AWS DynamoDB: No-SQL database is used for storing the flashcards data in JSON format. DynamoDB was selected for this purpose as it is fully managed, highly scalable, and high availability.
v. AWS Lambda: API requests are processed by serverless functions. All the operations such as fetching, creating, and deleting flashcards are done through Lambda functions.
