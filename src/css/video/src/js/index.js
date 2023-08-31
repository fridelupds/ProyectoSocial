document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("vVideo");
  video.addEventListener("ended", () => {
    document.body.classList.add("transicionJS");
    setTimeout(() => {
      window.location.href = "otro.html";
    }, 1000); 
  });
});
