const axios = require('axios').default;

exports.getProducts = async () => {
  try {
    const response = await axios.get('https://connect.squareup.com/v2/locations/<LOCATION_ID>/products', {
      headers: {
        Authorization: `Bearer <ACCESS_TOKEN>`,
      },
    });

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};