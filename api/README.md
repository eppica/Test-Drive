# :oncoming_automobile: Test Drive API

This is a Node API that queries from a MongoDB database to get questions for the APP. It is hosted at [Netlify](https://www.netlify.com) with a free plan.

[![Netlify Status](https://api.netlify.com/api/v1/badges/3ea892ee-dc51-4096-a36c-19d158deb6bb/deploy-status)](https://app.netlify.com/sites/test-drive-api/deploys)

## Requirements

Install the dependencies:

```terminal
npm install
```

Create `.env` file in the root folder, filling the blank variables:

```env
## Database
DB_URL=
```

## How to Run

Run the following command:

```terminal
npm start
```

And this will start the server.  
You can access it at: [http://localhost:9000/.netlify/functions/api](http://localhost:9000/.netlify/functions/api)

### How to test

To test the routes of the API, there's `client.http` file with some examples of requests. To make requests on VSCode, install [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension.
