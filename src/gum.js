import { Stack } from "./core/Stack"
import { getElementStyle } from "./util/get_element_style"
import { Extension } from "./core/Extension"

class Gum {
    constructor(selector) {
        this.selector = selector
        this.elements = []
        this.init()
    }

    init() {
        if (this.selector instanceof HTMLElement) {
            this.elements.push(this.selector)
        } else if (typeof this.selector === "string") {
            this.elements = Array.from(document.querySelectorAll(this.selector))
        } else if (this.selector instanceof Array) {
            this.elements = this.selector
        }
    }

    get(index) {
        return new Gum(this.elements[index])
    }

    append(html) {
        if (html instanceof HTMLElement) {
            this.elements.forEach(el => el.appendChild(html))
        } else if (typeof html === "string") {
            this.elements.forEach(el => el.innerHTML += html)
        } else if (html instanceof Gum) {
            this.elements.forEach(el => el.appendChild(html.elements[0]))
        }
        return this
    }

    prepend(html) {
        if (html instanceof HTMLElement) {
            this.elements.forEach(el => el.insertBefore(html, el.firstChild))
        } else if (typeof html === "string") {
            this.elements.forEach(el => el.innerHTML = html + el.innerHTML)
        } else if (html instanceof Gum) {
            this.elements.forEach(el => el.insertBefore(html.elements[0], el.firstChild))
        }
        return this
    }

    addClass(className) {
        for (let element of this.elements) {
            element.classList.add(className)
        }
        return this
    }

    removeClass(className) {
        for (let element of this.elements) {
            element.classList.remove(className)
        }
        return this
    }

    toggleClass(className) {
        for (let element of this.elements) {
            element.classList.toggle(className)
        }
        return this
    }

    hasClass(className) {
        let el = this.elements[0]
        return el.classList.contains(className)
    }

    /* perform a querySelector inside the element */
    find(selector) {
        let elements = []
        for (let element of this.elements) {
            elements = elements.concat(Array.from(element.querySelectorAll(selector)))
        }
        return new Gum(elements)
    }

    /* returns element that can be matched with given selector */
    filter(selector) {
        let elements = []
        for (let el in this.elements) {
            let box = document.createElement("div")
            box.appendChild(this.elements[el])
            let matches = box.querySelector(selector)
            if (matches) {
                elements.push(matches)
            }
        }
        return new Gum(elements)
    }


    on(event, callback) {
        let events = event.split(" ")
        for (let element of this.elements) {
            for (let event of events) {
                element.addEventListener(event, callback)
                Stack.events.push({ element, event, callback })
            }
        }
        return this
    }

    off(event) {
        let events = event.split(" ")
        for (let element of this.elements) {
            for (let event of events) {
                let e = Stack.events.find(e => e.element === element && e.event === event)
                if (e) {
                    element.removeEventListener(event, e.callback)
                    Stack.events.splice(Stack.events.indexOf(e), 1)
                }
            }
        }
        return this
    }

    clear() {
        for (let element of this.elements) {
            let e = Stack.events.find(e => e.element === element)
            if (e) {
                element.removeEventListener(e.event, e.callback)
                Stack.events.splice(Stack.events.indexOf(e), 1)
            }
        }
    }

    children() {
        let elements = []
        let el = this.elements[0]
        if (el) {
            elements = Array.from(el.children)
        }
        return new Gum(elements)
    }

    parent() {
        return new Gum(this.elements[0].parentElement)
    }

    html(html) {
        if (html === undefined) {
            return this.elements[0].innerHTML
        }
        for (let element of this.elements) {
            element.innerHTML = html
        }
        return this
    }

    text(text) {
        if (text === undefined) {
            return this.elements[0].innerText
        }
        for (let element of this.elements) {
            element.innerText = text
        }
        return this
    }

    val(value) {
        if (value === undefined) {
            return this.elements[0].value
        }
        for (let element of this.elements) {
            element.value = value
        }
        return this
    }

    attr(name, value) {
        if (value === undefined) {
            return this.elements[0].getAttribute(name)
        }
        for (let element of this.elements) {
            element.setAttribute(name, value)
        }
        return this
    }

    removeAttr(name) {
        for (let element of this.elements) {
            element.removeAttribute(name)
        }
        return this
    }

    remove() {
        for (let element of this.elements) {
            element.remove()
        }
        return this
    }

    css(name, value) {
        if (value === undefined) {
            if (name instanceof Object) {
                for (let element of this.elements) {
                    for (let key in name) {
                        element.style[key] = name[key]
                    }
                }
            } else {
                return getElementStyle(this.elements[0], name)
            }
        }
        for (let element of this.elements) {
            element.style[name] = value
        }
        return this
    }

    each(callback) {
        for (let element of this.elements) {
            callback(element)
        }
        return this
    }

    enable() {
        for (let element of this.elements) {
            element.disabled = false
        }
        return this
    }

    disable() {
        for (let element of this.elements) {
            element.disabled = true
        }
        return this
    }

    extend(selector) {
        let gum = new Gum(selector)
        for (let element of gum.elements) {
            if (this.elements.indexOf(element) === -1) {
                this.elements.push(element)
            }
        }
    }

    first() {
        return new Gum(this.elements[0])
    }

    last() {
        return new Gum(this.elements[this.elements.length - 1])
    }

    hide() {
        for (let element of this.elements) {
            element.style.display = "none"
        }
        return this
    }

    show() {
        for (let element of this.elements) {
            element.style.display = "block"
        }
        return this
    }

    height(value) {
        if (value === undefined) {
            return this.elements[0].offsetHeight
        }
        for (let element of this.elements) {
            element.style.height = value
        }
        return this
    }

    width(value) {
        if (value === undefined) {
            return this.elements[0].offsetWidth
        }
        for (let element of this.elements) {
            element.style.width = value
        }
        return this
    }

    innerWidth() {
        return this.elements[0].clientWidth
    }

    innerHeight() {
        return this.elements[0].clientHeight
    }

    disabled() {
        return this.elements[0].disabled
    }

    offset() {
        let rect = this.elements[0].getBoundingClientRect()
        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        }
    }

    position() {
        let rect = this.elements[0].getBoundingClientRect()
        return {
            top: rect.top,
            left: rect.left
        }
    }

    scrollTop(value) {
        if (value === undefined) {
            return this.elements[0].scrollTop
        }
        for (let element of this.elements) {
            element.scrollTop = value
        }
        return this
    }

    scrollLeft(value) {
        if (value === undefined) {
            return this.elements[0].scrollLeft
        }
        for (let element of this.elements) {
            element.scrollLeft = value
        }
        return this
    }

    scrollWidth() {
        return this.elements[0].scrollWidth
    }

    scrollHeight() {
        return this.elements[0].scrollHeight
    }

    offsetParent() {
        return new Gum(this.elements[0].offsetParent)
    }

    siblings() {
        let elements = []
        let el = this.elements[0]
        let parent = el.parentElement
        for (let child of parent.children) {
            if (child !== el) {
                elements.push(child)
            }
        }
        return new Gum(elements)
    }
}


window._ = Extension.prototype

window.$ = selector => {
    return new Gum(selector)
}

window.$.__proto__.fetch = ({ url, params, headers }) => {
    let _params = ""
    for (let key in params) {
        _params += `${key}=${params[key]}&`
    }
    _params = _params.slice(0, -1)
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", url + "?" + _params, true)
        for (let key in headers) {
            xhr.setRequestHeader(key, headers[key])
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr.status)
                }
            }
        }
        xhr.send()
    })
}
