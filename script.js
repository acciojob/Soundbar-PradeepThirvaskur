//your JS code here. If required.

  <script>
    let currentAudio;


    function stopSound() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }
  </script>