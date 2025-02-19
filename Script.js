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

