const date = new Date().toLocaleDateString("fa-IR", {
  month: "long",
  weekday: "long",
  year: "numeric",
});
function perfectDate() {
  console.log(date);
}
perfectDate();
