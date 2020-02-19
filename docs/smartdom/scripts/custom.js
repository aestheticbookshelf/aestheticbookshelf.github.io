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

class PropsOpt extends HTMLElement{
    constructor(){
        super()
        let shadow = this.attachShadow({mode: 'open'});

        let div = document.createElement("div")
        div.style.display = "inline-block"        
        div.style.padding = "2px"
        div.style.fontStyle = "italic"
        div.innerHTML = "props when defined is a dictionary with optional members"

        shadow.appendChild(div)
    }
}

customElements.define('props-opt', PropsOpt)
