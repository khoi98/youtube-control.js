function onYouTubeIframeAPIReady() {
  var players = document.querySelectorAll('.youtube-video');

  for (var i = 0; i < players.length; i++) {
    var player = new YT.Player(players[i], {
      events: {
        'onStateChange': function (event) {
          if (event.data === YT.PlayerState.PLAYING) {
            var playerFrame = event.target.a;
            var playerRect = playerFrame.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
            var isMoreThanHalfVisible = playerRect.bottom < windowHeight / 2 || playerRect.top > windowHeight / 2;

            if (isMoreThanHalfVisible) {
              event.target.pauseVideo();
            }
          }
        }
      }
    });
  }
}
