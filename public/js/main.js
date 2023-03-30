

console.log("test");
document.querySelectorAll("[data-toggle]").forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("active")
        document.querySelector(element.getAttribute("data-target")).classList.toggle("active")
    })
});

document.querySelectorAll(".menu-item a").forEach(element => {
    element.addEventListener("click", () => {
        document.querySelector("#menu-toggle").classList.remove("active")
        document.querySelector("#menu").classList.remove("active")
    })
})


// if(document.querySelector("#message")){
//     document.querySelector("#message").classList.add("active")

//     setTimeout(() => {
//         document.querySelector("#message").classList.remove("active")
//     }, 5000);
// }


// window.onload = function() {
//     setTimeout(() => {
//         console.log(document.querySelector(".animation-bounce-letter"));

//     if(document.querySelector(".animation.animation-bounce-letter")){
        
//         const bounceLetter = new BounceLetter(".animation.animation-bounce-letter", 20, 0)
//     }
//     }, 100);
//   };

// $( document ).ready(function() {
//         console.log(document.querySelector(".animation-bounce-letter"));

//     if(document.querySelector(".animation.animation-bounce-letter")){
        
//         const bounceLetter = new BounceLetter(".animation.animation-bounce-letter", 20, 0)
//     }
// });


// if(document.querySelector(".animation.animation-word-carousel")){
//     const wordCarousel = new WordCarousel(".animation.animation-word-carousel")
// }


// const cursor = new Cursor({
//     mode: "round",
//     distance: -15
// })



// // Fonction curseur
// function cursor(){
    
//     // Si le curseur bouge on appel la fonction onMouseMove()

//     document.body.addEventListener('mousemove', onMouseMove);

//     // Pour chaque element ayant une class 'hoverable', on va appeler les fonctions onMouseHover() et onMouseHoverOut()
//     for (let i = 0; i < $(".hoverable").length; i++) {
//         $(".hoverable").eq(i).mouseenter(onMouseHover)
//         $(".hoverable").eq(i).mouseleave(onMouseHoverOut)
//     }

//     for (let i = 0; i < $(".image-animate").length; i++) {
//         $(".image-animate").eq(i).mouseenter(onMouseHoverImage(i))
//         $(".image-animate").eq(i).mouseleave(onMouseOutImage)
//     }
// }

// // Move the cursor = quand le curseur bouge le petit curseur personnalisé et le grand curseur personnalisé vont se déplacer chacun après un delay (delay), vont se positionner avec translateX() et translateY() (x, y) 
// // pageX et pageY = propriété javascript pour avoir les coordonnées en x et en y du curseur (il faut l'utiliser avec un parametre d'une fonction, cherche pas à comprendre)
// // - window.scrollY = quand on scroll on retire le nombre de pixel scroller pour que les curseur personnalisé suive bien les meme coordonnées de la souris
// function onMouseMove(e) {
//     gsap.to($(".cursor-cercle-big"), {delay: .2, x: e.pageX - 20, y: e.pageY  - (window.scrollY + 20)});
//     $(".cursor-cercle-small").css({"top": e.pageY - window.scrollY, "left": e.pageX});
// }

// // Hover an element = si on survole un element on va agrandir l'element choisie avec scale
// function onMouseHover() {
//     gsap.to($(".cursor-cercle-big"), {delay: .3, scale: 3});
// }
// function onMouseHoverImage(i) {
//     gsap.to($(".cursor-cercle-big"), {delay: .3, scale: 3});
//     // $(".cursor-cercle-big").css("border-color", $(".image-animate").eq(i).data("color")) 
//     // console.log($(".image-animate").eq(i).data("color"));
//     $(".cursor").addClass("projet-cursor")
// }

// function onMouseOutImage() {
//     gsap.to($(".cursor-cercle-big"), {delay: .3, scale: 1});
//     $(".cursor").removeClass("projet-cursor")
// }

// // Hover out an element = si ne survole plus un element on va diminuer l'element choisie avec scale
// function onMouseHoverOut() {
//     gsap.to($(".cursor-cercle-big"), {delay: .3, scale: 1});
//     $(".cursor").removeClass("projet-cursor")
// }

// cursor()