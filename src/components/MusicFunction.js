export function togglePlayPause(audioElement) {
    if (audioElement.paused) {
      audioElement.play()
        .then(() => {
          console.log('Music is playing');
        })
        .catch(error => {
          console.error('Error playing music:', error);
        });
    } else {
      audioElement.pause();
      console.log('Music is paused');
    }
  }

  export default togglePlayPause;