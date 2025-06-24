# /users/register Endpoint Documentation

## `/users/register` Endpoint

### HTTP Method

`POST`

## Description

This endpoint registers a new user. It validates the input data, creates a user record, and returns an authentication token along with the created user details.

## Request Data Format

The request body should be a JSON object with the following properties:

- **fullname**: an object containing:
  - **firstname** (string, required): Minimum 3 characters.
  - **lastname** (string, optional): Minimum 3 characters.
- **email** (string, required): Must be a valid email and at least 5 characters long.
- **password** (string, required): Minimum 6 characters.

**Example:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
```

#Example Response

- `user` (object).
   - `firstname` (string): User's first name (Minimum 3 characters.)
   - `lastname` (string): User's last name (Minimum 3 characters.)
  - `email` (string): Must be a valid email and at least 5 characters long.
  - `password` (string): users' password (Minimum 6 characters.).
-`token` (String): JWT Token

## Error Responses

- `401 Unauthorized`: Invalid email or password.
- `400 Bad Request`: Validation errors (e.g., invalid email format, password too short).

**Example:**

```json
{
  "message": "Invalid email or password"
}
```
## `/users/profile` Endpoint

### HTTP Method
`GET`

### Description
Returns the authenticated user's profile information.  
Requires a valid JWT token in the `Authorization` header or as a cookie.

### Authentication
- **Required:** Yes (JWT token)

### Request Headers
- `Authorization: Bearer <token>` (or token cookie)

### Example Response
```json
{
  "_id": "60c72b2f9b1e8e001c8e4b8a",
  "email": "johndoe@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

### Error Responses
- `401 Unauthorized`: If the token is missing, invalid, or blacklisted.

---

## `/users/logout` Endpoint

### HTTP Method
`GET`

### Description
Logs out the authenticated user by blacklisting the current JWT token and clearing the token cookie.

### Authentication
- **Required:** Yes (JWT token)

### Request Headers
- `Authorization: Bearer <token>` (or token cookie)

### Example Response
```json
{
  "message": "logged out"
}
```

### Error Responses
- `401 Unauthorized`: If the token is missing, invalid, or already blacklisted.