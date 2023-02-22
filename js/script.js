const iconShare = document.querySelector(".icon-share");
const tooltipShare = document.querySelector(".tooltip-share");

iconShare.addEventListener("click", () => {
  tooltipShare.classList.toggle("show");
});
