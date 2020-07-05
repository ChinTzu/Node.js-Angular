# Project Description
A web application to store and display the data of freelancers.

# Technologies
Node.js, express.js, angular 10, MongoDb

# Project Organization
The solution is organized in two parts, the first one is the server side that consists of a collection of  web APIs that access mongoDb through mongoose.
The second part is an Angular 10 single page application that manages all the user interactions.

# Getting Started
1. Install nodejs\
   Go on [official Node.js website](https://nodejs.org/) and download the installer.
   After the installation is completed, open a command prompt (or PowerShell), and enter the following command\
   node –v\
   npm –v\
   The system should display the Node.js and npm version installed on your system.
   
2. Install mongoDB\
   Go on [official mongoDb website](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/).
   Follow the instruction to install mongoDb on your local machine
   
3. After getting the code execute the following commands for each project\
   run command 'npm install' for '/server' and '/client' to install dependencies. 

# Application Walkthrough
Open a command prompt, enter the following command for project "server" and "client" \
\server> node index \
\client> ng serve

Open the web browers with http://localhost:4200/ 

Fill in the form then click SUBMIT to register a new user\
Use  delete and edit buttons to delete and edit the user details.

![image](https://user-images.githubusercontent.com/16623796/86535172-f213fe80-bf10-11ea-9834-efdd7609cf1f.png)
