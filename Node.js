// Required libraries
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Spotify API credentials (client ID and secret)
const CLIENT_ID = 'your-client-id';
const CLIENT_SECRET = 'your-client-secret';

// Endpoint to get the access token
async function getAccessToken() {
  const authString = `CLIENT_ID:{CLIENT_SECRET}`;
  const encodedAuth = Buffer.from(authString).toString('base64');

  const response = await axios.post('https://accounts.spotify.com/api/token', 
    new URLSearchParams({
      'grant_type': 'client_credentials'

      
}).toString(), {
      headers: {
        'Authorization': `Basic encodedAuth`,
        'Content-Type': 'application/x-www-form-urlencoded'
      );

  return response.data.access_token;


// Song search route
app.get('/search-song', async (req, res) => 
  const  songName  = req.query;

  try 
    const token = await getAccessToken();

    const searchResponse = await axios.get(`https://api.spotify.com/v1/search`, 
      params: 
        q: songName,
        type: 'track',
        limit: 10
      ,
      headers: 
        'Authorization': `Bearer{token}`
      }
    });

    const songs = searchResponse.data.tracks.items;
    res.json(songs);
  } catch (error) {
    res.status(500).send('Error searching song');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
