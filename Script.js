// Get form and song list elements
const songForm = document.getElementById('songRequestForm');
const songList = document.getElementById('songs');

// Handle form submit
songForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const songName = document.getElementById('songName').value;
    
    if (songName !== '') {
        const li = document.createElement('li');
        li.textContent = songName;
        songList.appendChild(li);

        // Clear the input field
        document.getElementById('songName').value = '';
    }
});
const fetch = require('node-fetch');

// Replace with your own YouTube API key
const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY'; 

async function searchSong(songName) {
  // Constructing the API request URL
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=songName   type=video   key={YOUTUBE_API_KEY}`;
    
  // Making the API request
  const response = await fetch(url);
  const data = await response.json();

  // Return the search results
  return data.items;
}

// Example: Searching for a song
searchSong('Shape of You').then(videos => {
  videos.forEach(video => {
    console.log('Song Title: ', video.snippet.title);
    console.log('Video URL: ', `https://www.youtube.com/watch?v=${video.id.videoId}`);
      );
);
“
const songForm = document.getElementById("songForm");
const songList = document.getElementById("songList");

songForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const songName = document.getElementById("songName").value;
  const songItem = document.createElement("p");
  songItem.textContent = `Requested Song: ${songName}`;
  
  songList.appendChild(songItem);
  document.getElementById("songName").value = ""; // Clear input field
});

