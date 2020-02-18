class OptParam extends HTMLElement{
    constructor(){
        super()
        let shadow = this.attachShadow({mode: 'open'});

        let div = document.createElement("div")
        div.style.display = "inline-block"
        div.style.backgroundColor = "#eee"
        div.style.padding = "2px"
        div.innerHTML = "optional"

        shadow.appendChild(div)
    }
}


customElements.define('opt-param', OptParam)