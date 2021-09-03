function u(selector) {

    this.first = () => {
        return this;
    }

    this.css = () => {

        return this;
    }

    this.append = () => {
        let div = document.createElement("span")
        div.append("Hello")
        this.element = div;
        
        return this;
    }

    this.value = () =>
    {
        return "hello";
    }

    return this;
}