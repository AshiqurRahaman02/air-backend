# Air Ticket Booking




## User API Documentation 

This documentation provides details about the User API endpoints for user registration and login.

### POST /user/api/register

Description: This endpoint allows users to register by providing their name, email, and password. The password is securely hashed before being stored in the database.

Request Method: POST

Request Body: <br/>
name: User's name (string, required)
email: User's email address (string, required)
password: User's password (string, required)

Response: <br/>
Status Code: 201 Created <br/>
Response Body: <br/>

        {
        "isError": false,
        "message": "User registered successfully"
        }

### POST /user/api/login

Description: This endpoint allows users to log in using their email and password. It returns a JWT token on successful login.

Request Method: POST

Request Body: <br/>
email: User's email address (string, required)
password: User's password (string, required)

Response: <br/>
Status Code: 201 Created <br/>
Response Body:<br>

        {
        "isError": false,
        "message": "User login successful",
        "token": "JWT_TOKEN"
        }

