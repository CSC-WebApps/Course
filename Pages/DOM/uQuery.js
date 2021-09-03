function u(selector) {

    this.first = () => {
        this.element = document.getElementById("first");
        return this;
    }

    this.css = () => {

        return this;
    }

    this.append = () => {
        let div = document.createElement("span");
        div.append("Hello");
        this.element.appendChild( div );
        this.element = div;        
        return this;
    }

    this.value = () =>
    {
        return "hello";
    }

    return this;
}