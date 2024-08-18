const { Client, APIException } = require('@square/client');

// Create a Square client instance with the base URL and access token
const client = new Client({
  accessToken: 'YOUR_ACCESS_TOKEN',
});

app.get('/products', async (req, res) => {
  try {
    const response = await client.restGET('https://connect.squareup.com/v2/catalog/list');
    // process products data here
    return res.json(response.json());
  } catch (error) {
    if (error instanceof APIException) {
      console.error(error.message);
      return res.status(500).send('Error fetching products data');
    }
    throw error;
  }
});