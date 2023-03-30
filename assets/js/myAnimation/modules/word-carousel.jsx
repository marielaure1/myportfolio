export default class WordCarousel{

    constructor(className){
        this.className = className;

        if(this.className == ".animation.animation-word-carousel"){
            this.size()
        }
    }

    size(){
        document.querySelectorAll(this.className).forEach((element, index) => {
            const flips = element.childNodes;
            for (let a = 0; a < flips.length; a++) {
                const childOne = flips[a].childNodes;
                const sizeChild = getComputedStyle(childOne[0]).height

                console.log(sizeChild);

                element.style.height = sizeChild
                this.animation(element, flips[a])
            }
        })
    }

    animation(element, flip){
        let timeinterval = 4000

        if(element.dataset.animationDuration){
            timeinterval = element.dataset.animationDuration * 1000
        }

        const children = flip.childNodes
        const nbSlide = children.length
        const flipHeight = flip.offsetHeight

        let size = - nbSlide * flipHeight + flipHeight
        flip.style.marginTop = `${size - flipHeight}px`

        let keyframes = []
        let percent = 0
        let percentStart = Math.floor(100 / nbSlide) - 5
        let percentStay = 5

        for (let c = 0; c < nbSlide + 2 ; c++) {
            if(c == 0){
                keyframes.push({ marginTop: `${size - flipHeight}px`, offset: 0})
                percent += percentStay
            } else if(size == 0 ){
                keyframes.push({ marginTop: `${size}px`, offset: percent * 0.01})
                keyframes.push({ marginTop: `${size}px`, offset: 0.9999})
                keyframes.push({ marginTop: `${- nbSlide * flipHeight }px`, offset: 1})
                
                break;
            } else{
                keyframes.push({ marginTop: `${size}px`, offset: percent * 0.01})
                percent += percentStart

                keyframes.push({ marginTop: `${size}px`, offset: percent * 0.01})
                size += flipHeight
                percent += percentStay
            }
        }
        
        const options = {
            duration: timeinterval,
            iterations: Infinity,
            easing: "cubic-bezier(0.23, 1, 0.32, 1.2)"
        }

        flip.animate(keyframes, options);

        console.log(flip.animate(keyframes, options));
    }
}