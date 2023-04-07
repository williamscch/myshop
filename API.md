# API Documentation

This is the API documentation for MyShop project. This API allows for various operations to be performed through several endpoints.

## Base URL

The base URL for all requests is:

> http://localhost:3050/auth/v1


## Endpoints

### `/users`

The `/users` endpoint allows for operations related to the system's users.


#### `GET /users`

Gets a list of all the system's users.

**NOTE**: This endpoint is protected with api key.

#### `GET /users/{id}`

Gets information for a specific user identified by `{id}`.

#### `POST /users`

Creates a new user with the information provided in the request body.

#### `PUT /users/{id}`

Updates an existing user identified by `{id}` with the information provided in the request body.

#### `DELETE /users/{id}`

Deletes an existing user identified by `{id}`.

### `/customers`

The `/customers` endpoint allows for operations related to the system's customers.

#### `GET /customers`

Gets a list of all the system's customers.

**NOTE**: This endpoint is protected with api key.

#### `GET /customers/{id}`

Gets information for a specific customer identified by `{id}`.

#### `POST /customers`

Creates a new customer with the information provided in the request body.

#### `PUT /customers/{id}`

Updates an existing customer identified by `{id}` with the information provided in the request body.

#### `DELETE /customers/{id}`

Deletes an existing customer identified by `{id}`.

### `/products`

The `/products` endpoint allows for operations related to the system's products.

#### `GET /products`

Gets a list of all the system's products.

#### `GET /products/{id}`

Gets information for a specific product identified by `{id}`.

#### `POST /products`

Creates a new product with the information provided in the request body.

**NOTE**: This endpoint is only available to users with an admin role and requires authentication with a Bearer JWT.

#### `PUT /products/{id}`

Updates an existing product identified by `{id}` with the information provided in the request body.

**NOTE**: This endpoint is only available to users with an admin role and requires authentication with a Bearer JWT.

#### `DELETE /products/{id}`

Deletes an existing product identified by `{id}`.

**NOTE**: This endpoint is only available to users with an admin role and requires authentication with a Bearer JWT.


### `/categories`

The `/categories` endpoint allows for operations related to the system's product categories.

#### `GET /categories`

Gets a list of all the system's product categories.

#### `GET /categories/{id}`

Gets information for a specific product category identified by `{id}`.

#### `POST /categories`

Creates a new product category with the information provided in the request body.

**NOTE**: This endpoint is only available to users with an admin role and requires authentication with a Bearer JWT.

#### `PUT /categories/{id}`

Updates an existing product category identified by `{id}` with the information provided in the request body.

**NOTE**: This endpoint is only available to users with an admin role and requires authentication with a Bearer JWT.

#### `DELETE /categories/{id}`

Deletes an existing product category identified by `{id}`.

**NOTE**: This endpoint is only available to users with an admin role and requires authentication with a Bearer JWT.

#### `POST /auth/login`

Handle post method to authenticate a user.

#### `GET /profile/my-orders`

Shows information about all orders made by a specific user

