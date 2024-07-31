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
