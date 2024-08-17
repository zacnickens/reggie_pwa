const { Client, Environment } = require('square');

// Remember to keep your access token secure, preferably in an environment variable
const accessToken = process.env.SQUARE_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN_HERE';

const client = new Client({
  accessToken: accessToken,
  environment: Environment.Production, // Use Environment.Production for live data
});

exports.getProducts = async () => {
  try {
    const response = await client.catalogApi.listCatalog();
    return response.result;
  } catch (error) {
    console.error('Error fetching catalog:', error);
    throw error;
  }
};