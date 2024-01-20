window.addEventListener("resize", () => {
  const innerAbout = document.getElementById("inner-about");
  if (window.innerWidth <= 768) {
    innerAbout.removeAttribute("data-aos");
    innerAbout.removeAttribute("data-aos-anchor-placement");
  } else {
    // Optionally add the attributes back for larger screens
    innerAbout.setAttribute("data-aos", "fade-up");
    innerAbout.setAttribute("data-aos-anchor-placement", "bottom-bottom");
  }
});
