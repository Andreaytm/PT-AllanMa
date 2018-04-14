/*taken from Stack Overflow -Nathan Long
https://stackoverflow.com/questions/20719550/play-one-html-audio-element-at-a-time
https://stackoverflow.com/users/4376/nathan-long*/

function oneAudio(container) {
  container.addEventListener("play", function(event) {
  audio_player = container.getElementsByTagName("audio")
    for(i=0; i < audio_player.length; i++) {
      audio_player = audio_player[i];
      if (audio_player !== event.target) {
        audio_player.pause();
      }
    }
  }, true);
}

document.addEventListener("DOMContentLoaded", function() {
  oneAudio(document.body);
});
