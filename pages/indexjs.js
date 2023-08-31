document.addEventListener("DOMContentLoaded", () => {
  let video = document.getElementById("vVideo");
  video.addEventListener("ended", () => {
    document.body.classList.add("transicionJS");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000); 
  });
});
