import jquery from "https://cdn.skypack.dev/jquery@~3.5.1";

export default class Cursor {
    cursor = "";
    cursorBase = "";
    cursorSecond = "";
    cursorBaseWidth = "";
    cursorBaseHeight = "";
    cursorSecondWidth = "";
    cursorSecondHeight = "";

    cursorModeList = ["difference", "round", "square", "text", "text-round", "normal"]

    constructor(options = {}) {
        this.el = options.el || ".cursor";
        this.mode = options.mode || "difference";
        this.speed = options.speed || false;
        this.text = options.text || false;
        this.sizebase = options.sizebase || false;
        this.sizesecond = options.sizesecond || false;
        this.delay = options.delay || 0.2;
        this.distance = options.distance || 20;
        this.textRoundContent = options.textRoundContent || "Exemple de texte";

        this.createCursor();
    }

    createCursor() {

        
            let cursorBase = this.cursorBase;

            console.log(cursorBase);

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

        
        });this.hover();
    }

    hover() {

      
        this.cursorModeList.forEach((element, index) => {
            $(`.hoverable-${element}`).each((i, e) => {
                $(e).addClass(`.hoverable-${element}-${i}`)
                console.log($(e));
                $(e)
                    .mouseenter(() => {
                        this.initCursor("remove")
                        this.cursor.classList.add(`cursor-${element}`)

                        if($(e).attr("data-text")){
                            this.cursorBase.innerHTML = `<div class="text">
                                                            <p>${$(e).attr("data-text")}</p>
                                                         </div>`;
                        } 
                    });

                $(e)
                    .mouseleave(() => {
                        this.cursor.classList.remove(`cursor-${element}`)
                        this.cursorBase.innerHTML = ""
                        this.initCursor("add")
                        
                        
                    });
            })
        })
    }

    initCursor(action = "add"){
        this.cursor = document.querySelector(".cursor")

       if(action == "add"){
            this.cursor.classList.add(`cursor-${this.mode}`);

            
        } else if(action == "remove"){
            this.cursor.classList.remove(`cursor-${this.mode}`);
        }

        this.cursorBase = document.querySelector(".cursor-base");
        this.cursorSecond = document.querySelector(".cursor-second");

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

        if(this.mode != "normal"){
            document.body.style.cursor = "none";
            this.cursor.style.display = "block"
        } else {
            document.body.style.cursor = "auto";
            this.cursor.style.display = "none"
        }
    }
}

export { Cursor };
