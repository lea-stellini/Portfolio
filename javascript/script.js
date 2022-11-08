class CssPropControl {
    constructor(element){
        this.element = element
    }
    get(varName){
        return getComputedStyle(this.element).getPropertyValue(varName)
    }
    set(varName, val){
        return this.element.style.setProperty(varName, val)
    }
}

const bodyCssProps = new CssPropControl(document.body);

let toggle = document.querySelector('#dark-mode-toggle');


toggle.addEventListener('click', () => {
   let mode = toggle.checked ? 'dark' :'light'
   bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`))
   bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`))
   bodyCssProps.set('--secondary', bodyCssProps.get(`--${mode}-secondary`))
   bodyCssProps.set('--tertiary', bodyCssProps.get(`--${mode}-tertiary`))
   bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`))
   bodyCssProps.set('--header', bodyCssProps.get(`--${mode}-header`))
})





