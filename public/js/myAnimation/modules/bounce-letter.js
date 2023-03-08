export default class BounceLetter{

    constructor(className, duration, delay){
        this.className = className;
        this.duration = duration;
        this.delay = delay;

        if(this.className == ".animation.animation-bounce-letter"){
            this.explodeWord()
        }

    }

    explodeWord(){
        document.querySelectorAll(this.className).forEach((element, index) => {
            
            element.setAttribute("data-animation-id", `${index}`)
            let string = element.textContent.split(' ')
            const styleElement = getComputedStyle(element)
            
            let spanHeight = styleElement.fontSize
            element.innerText= ""

            for (var i = 0; i < string.length; i++) {
                
                let span = document.createElement("span")
                span.classList.add("animation-explode-word")
                span.style.height = `${spanHeight}`
                span.dataset.scroll = ''
                span.classList.add("hoverable")

                if(string[i].includes("-")){
                    let stringTiret = string[i].split("-")

                    for (let tiret = 0; tiret < stringTiret.length; tiret++) {
                        let spanb = document.createElement("span")
                        spanb.classList.add("animation-explode-word")
                        
                        spanb.innerHTML = `${stringTiret[tiret]}`
                        element.appendChild(spanb)
                        
                        if(tiret  < string.length - 1){
                            let spanTiret = document.createElement("span")
                            spanTiret.classList.add("animation-explode-word")
                            spanTiret.innerHTML = `<span>-</span>`
                            element.appendChild(spanTiret)
                        }
                    }

                } else{
                    
                    span.innerText = `${string[i]}`
                    element.appendChild(span)

                    if(i  < string.length - 1){
                        let spanSpace = document.createElement("span")
                        spanSpace.classList.add("animation-explode-word")
                        spanSpace.innerHTML = `<span>&nbsp;</span>`
                        element.appendChild(spanSpace)
                    }
                }
            }

            // this.bounce(element)
            this.explodeLetter(element)
        });
    }

    explodeLetter(element){
        let words = element.childNodes

        for (let index = 0; index < words.length; index++) {
            if(index < words.length){             
                
                let string = words[index].textContent
                words[index].innerText= ""
                
                for (var i = 0; i < string.length; i++) {
                    let spanSpace = document.createElement("span")
                    spanSpace.classList.add("animation-explode-letter")
                    spanSpace.dataset.scroll = ''
                    spanSpace.dataset.scrollSpeed = `4`
                    spanSpace.innerText = `${string.charAt(i)}`
                    words[index].appendChild(spanSpace)
                }

                index++
            }
            
        }

        this.bounce(element)

    }

    bounce(element){

        element.style.display = "flex"
        element.style.visibility = "visible"

        let word = document.querySelector(`[data-animation-id="${element.getAttribute("data-animation-id")}"]`)
        let letters = word.querySelectorAll(".animation-explode-letter")

        let duration = this.duration * 0.01
        let d = duration

        let top = letters[0].offsetTop
        let statue = 0

        for (let c = 0; c < letters.length; c++) {

            if(top < letters[c].offsetTop && statue == 0){
                d = duration
                top = letters[c].offsetTop
            }
            
            letters[c].style.transitionDelay = `${d}s`
            // letters[c].style.marginTop = `0px`

            d += duration
        }

        setTimeout(() => {
            for (let c = 0; c < letters.length; c++) {
                letters[c].style.marginTop = `0px`
            }
        }, this.delay);

    }
}