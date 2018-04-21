/*taken from Stack Overflow -Nathan Long
https://stackoverflow.com/questions/20719550/play-one-html-audio-element-at-a-time
https://stackoverflow.com/users/4376/nathan-long*/

function onlyPlayOneIn(container) {
  container.addEventListener("play", function(event) {
  audio_elements = container.getElementsByTagName("audio")
    for(i=0; i < audio_elements.length; i++) {
      audio_element = audio_elements[i];
      if (audio_element !== event.target) {
        audio_element.pause();
      }
    }
  }, true);
}

document.addEventListener("DOMContentLoaded", function() {
  onlyPlayOneIn(document.body);
});

