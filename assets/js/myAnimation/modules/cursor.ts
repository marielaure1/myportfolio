import $ from "jquery"
import gsap from "gsap";

interface Options {
    el: string;
    mode: string;
    speed: number;
    text: string;
    sizebase: number;
    sizesecond: number;
    delay: number;
    distance: number;
    textRoundContent: string;
}


type PropsType = Partial<Options>

export default class Cursor {
    

    cursor: any
    cursorBase: any
    cursorSecond: any
    cursorBaseWidth: any
    cursorBaseHeight: any
    cursorSecondWidth: any
    cursorSecondHeight: any
    cursorModeList = ["difference", "round", "square", "text", "text-round", "normal", "size"]

    el 
    mode
    speed
    text
    sizebase
    sizesecond
    delay
    distance
    textRoundContent

    constructor(options: PropsType) {
        this.el = options.el || ".cursor"
        this.mode = options.mode || "difference"
        this.speed = options.speed || false
        this.text = options.text || false
        this.sizebase = options.sizebase || false
        this.sizesecond = options.sizesecond || false
        this.delay = options.delay || 0.2
        this.distance = options.distance || 20
        this.textRoundContent = options.textRoundContent || "Exemple de texte";
        

        this.createCursor();
    }

    createCursor() {

        let div = document.createElement("div");
        div.classList.add("cursor");

        div.innerHTML = `<div class="cursor-part cursor-base"></div>
                            <div class="cursor-part cursor-second"></div>`;

        document.body.appendChild(div);
        this.initCursor("add")
        this.onMouseMove();
    }

    onMouseMove() {
        document.body.addEventListener("mousemove", (e) => {
            this.cursorBaseWidth = this.cursorBase.offsetWidth / 2;
            this.cursorBaseHeight = this.cursorBase.offsetHeight / 2;

            this.cursorBase.style.left = `${e.pageX - this.cursorBaseWidth}px`
            this.cursorBase.style.top = `${e.pageY - this.cursorBaseHeight - window.scrollY}px`

            gsap.to($(".cursor-second"), {
                delay: this.delay,
                x: e.pageX - this.cursorBaseWidth + this.distance,
                y: e.pageY - this.cursorBaseHeight - window.scrollY + this.distance,
            });

        });
        
        this.hover();
    }

    hover() {
      
        this.cursorModeList.forEach((element, index) => {
            document.querySelectorAll(`.hoverable-${element}`).forEach((e, i) => {
                e.classList.add(`hoverable-${element}-${i}`)
                e.addEventListener("mouseenter", () => {
                    this.initCursor("remove")
                    this.cursor.classList.add(`cursor-${element}`)

                    if(e.getAttribute("data-text")){
                        this.cursorBase.innerHTML = `<div class="text">
                                                        <p>${e.getAttribute("data-text")}</p>
                                                     </div>`;
                    } 

                    // if(element == "size"){

                    //      document.querySelectorAll(`.cursor.cursor-size .cursor-second`)[0].style.width = `${(e.clientWidth || 30) + 20}px`;
                    //      document.querySelectorAll(`.cursor.cursor-size .cursor-second`)[0].style.height = `${(e.clientHeight || 30) + 20}px`;
                        
                    //     console.log(e.clientWidth);
                    // }
                })

                e.addEventListener("mouseleave", () => {
                    this.cursor.classList.remove(`cursor-${element}`)
                    this.cursorBase.innerHTML = ""
                    this.initCursor("add")
                })
            });
        })
    }

    initCursor(action = "add"){
        this.cursor = document.querySelector(".cursor")
        

       if(action == "add"){
            this.cursor.classList.add(`cursor-${this.mode}`);

            
        } else if(action == "remove"){
            this.cursor.classList.remove(`cursor-${this.mode}`);
        }

        this.cursorBase = document.querySelectorAll(".cursor-base")[0];
        this.cursorSecond = document.querySelectorAll(".cursor-second")[0];

        if (this.text && this.mode != "text") {
        this.cursorBase.innerHTML = `<div class="text">
                                                <p>${this.text}</p>
                                            </div>`;
        }

        if (this.mode == "text") {
                this.cursor.innerHTML = `<div class="cursor-part cursor-base"></div>`;
        }

        if (this.mode == "text-round") {
        this.cursorSecond.innerHTML = ` <div class="text-round-content">${this.textRoundContent}</div>`;
        }

        // if (this.mode == "size") {
        //     this.cursorSecond.innerHTML = ` <span class="size-border"></span>
        //                                     <span class="size-border"></span>
        //                                     <span class="size-border"></span>
        //                                     <span class="size-border"></span>
        //                                   `;
        //     }

        if(this.mode != "normal"){
            document.body.style.cursor = "none";
            this.cursor.style.display = "block"
        } else {
            document.body.style.cursor = "auto";
            this.cursor.style.display = "none"
        }
    }
}
