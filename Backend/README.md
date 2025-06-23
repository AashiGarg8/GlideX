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
