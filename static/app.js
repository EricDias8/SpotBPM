document.getElementById('musicFile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = url;

    // Prepare the audio context and nodes for Web Audio API
    const audioContext = new AudioContext();
    const track = audioContext.createMediaElementSource(audioPlayer);
    const gainNode = audioContext.createGain();
    track.connect(gainNode).connect(audioContext.destination);

    // Slider controls the playback rate
    document.getElementById('bpmSlider').addEventListener('input', function(e) {
        const playbackRate = e.target.value;
        const bpmDisplay = document.getElementById('bpmValue');
        bpmDisplay.textContent = playbackRate + 'x'; // Update the display
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.playbackRate = playbackRate;
    });
});


