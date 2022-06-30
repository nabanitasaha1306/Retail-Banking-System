# Retail-Banking-System
RBS offers banking products & services to individual customers such as tracking transactions & account details. The objective is to optimize the services effectively through digital mode. All the important data will be stored in the database. 
The project is developed in spring framework.
Controller (Interacts with database using REST-API)
REST-api – used to establish connection with the database using postmapping, getmapping, putmapping.
Repository (Extends JPArepository),
Service (all methods to handle the banking works like withdraw, create account, find account etc),
Model (Stores the account and transaction object which will later be stored in database),
Collection used to store multiple objects into the DB.
Application.properties connects with database and creates the database with the tables
