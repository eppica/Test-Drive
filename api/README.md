# :oncoming_automobile: Test Drive API

This is a Node API that queries from a MongoDB database to get questions for the APP.

## Requirements

Install the dependencies:

```terminal
npm install
```

Create `.env` file in the root folder, filling the blank variables or changing the default ones:

```env
## API
HOST=localhost
PORT=3333

## Database
DB_URL=
```

## How to Run

Run the following command:

```terminal
npm start
```

And this will start the server.

## How to Test

### Hot Reload

In order to improve the development of API, you can also run using `nodemon`. First install it locally:

```terminal
npm install nodemon
```

### Rest Client

To test the routes of the API, there's `client.http` file with some examples of requests. To make requests on VSCode, install [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension.
