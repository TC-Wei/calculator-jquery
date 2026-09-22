$(".card-body").on("click", (e) => {
  const $btn = $(e.target);
  const $screen = $(".screen");
  if ($btn.text() === "C") {
    $screen.text("0");
  } else if ($btn.text() === "⌫") {
    $screen.text($screen.text().slice(0, -1));
  } else if ($btn.text() === "+/-") {
    $screen.text($screen.text() * -1);
  } else if ($btn.text() === "%") {
    $screen.text($screen.text() * 0.01);
  } else if ($btn.hasClass("btn")) {
    if ($screen.text() === "0") {
      $screen.text($btn.text());
    } else {
      $screen.text($screen.text() + $btn.text());
    }
  }
});
