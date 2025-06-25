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

## `/captain/register` Endpoint

### HTTP Method

`POST`

### Description

Registers a new captain (driver) with vehicle details. Validates the input data, creates a captain record, and returns the created captain details.

### Request Data Format

The request body should be a JSON object with the following properties:

- **fullname** (object, required):
  - **firstname** (string, required): Captain's first name (minimum 3 characters).
  - **lastname** (string, required): Captain's last name (minimum 3 characters).
- **email** (string, required): Captain's email address (must be a valid email).
- **password** (string, required): Captain's password (minimum 6 characters).
- **vehicle** (object, required):
  - **color** (string, required): Vehicle color (minimum 3 characters).
  - **plate** (string, required): Vehicle plate number (minimum 3 characters).
  - **capacity** (number, required): Vehicle passenger capacity (minimum 1).
  - **vehicleType** (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto').

**Example:**

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "janesmith@example.com",
  "password": "securePass123",
  "vehicle": {
    "color": "blue",
    "plate": "XYZ987",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response

```json
{
  "captain": {
    "_id": "60c72b2f9b1e8e001c8e4b8b",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "janesmith@example.com",
    "vehicle": {
      "color": "blue",
      "plate": "XYZ987",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}

token (String): JWT Token
```

### Error Responses

- `400 Bad Request`: Validation errors (e.g., invalid email, password too short, missing fields).
- `400 Bad Request`: Captain with this email already exists.

**Example:**

```json
{
  "errors": [
    {
      "type": "field",
      "msg": "Password must be at least 6 characters long",
      "path": "password",
      "location": "body"
    }
  ]
}
```
or
```json
{
  "message": "Captain with this email already exists"
}
```