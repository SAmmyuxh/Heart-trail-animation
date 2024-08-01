$("body").on("mousemove", function(event) {
    const xPos = event.clientX;
    const yPos = event.clientY;
    const spanEl = $("<span>Sry Arpita</span>");
    const size = Math.random() * 100;
    spanEl.css({
      left: xPos + "px",
      top: yPos + "px",
      width:  size + "px",
      height: size + "px",
      fontsize: size-80 +"px",
      position: "absolute"
    });
    $("body").append(spanEl);
    setTimeout(() => {
      spanEl.remove();
    }, 3000);
  });
  let audioPlayed = false;

    $('#overlay').on('click', function() {
        var audio = new Audio('Arpitamaaf.mp3');
        audio.play().then(() => {
            audioPlayed = true;
            $('#overlay').hide();
        }).catch(error => {
            console.error("Audio playback failed:", error);
        });
  });
