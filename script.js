$(".card-body").on("click", (e) => {
  const $btn = $(e.target);
  if ($btn.text() === "C") {
    $(".screen").text("0");
  } else if ($btn.hasClass("btn")) {
    $(".screen").text($(".screen").text() + $btn.text());
  }
});
