// script.js

// Create an Audio object with the path to your audio file
var audio = new Audio('rain.mp3');

// Play the audio when the page loads
window.addEventListener('load', function() {
    // Play the audio
    audio.play().catch(function(error) {
        console.log('Playback prevented:', error);
        // Handle error or provide fallback here
    });
});
