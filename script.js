//your JS code here. If required.

  
    let currentAudio;

function stopSound() {
    document.getElementById('applause').pause();
    document.getElementById('applause').currentTime = 0;

    document.getElementById('boo').pause();
    document.getElementById('boo').currentTime = 0;

    document.getElementById('gasp').pause();
    document.getElementById('gasp').currentTime = 0;

    document.getElementById('tada').pause();
    document.getElementById('tada').currentTime = 0;

    document.getElementById('victory').pause();
    document.getElementById('victory').currentTime = 0;

    document.getElementById('wrong').pause();
    document.getElementById('wrong').currentTime = 0;
  }
    
