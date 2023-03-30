document.querySelectorAll("[data-toggle]").forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("active")
        document.  querySelector(element.getAttribute("data-target")).classList.toggle("active")
    })
});

document.querySelectorAll(".menu-item a").forEach(element => {
    element.addEventListener("click", () => {
        document.querySelector("#menu").classList.remove("active")
    })
})

const textarea = document.getElementById("description");

textarea.addEventListener("input", function (e) {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});


