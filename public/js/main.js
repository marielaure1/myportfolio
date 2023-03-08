

document.querySelectorAll("[data-toggle]").forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("active")
        document.querySelector(element.getAttribute("data-target")).classList.toggle("active")
    })
});

document.querySelectorAll(".menu-item a").forEach(element => {
    element.addEventListener("click", () => {
        document.querySelector("#menu").classList.remove("active")
    })
})


if(document.querySelector("#message")){
    document.querySelector("#message").classList.add("active")

    setTimeout(() => {
        document.querySelector("#message").classList.remove("active")
    }, 5000);
}


