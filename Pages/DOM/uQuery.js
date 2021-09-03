function u(selector) {

    this.element = document.getElementsByTagName(selector);

    this.first = () => {

        if( this.element.children.length > 0 )
        {
            this.element = this.element[0].children[0];
        }
        return this;
    }

    this.append = () => {
        let div = document.createElement("span");
        div.append("Hello");
        this.element.appendChild( div );
        this.element = div;        
        return this;
    }

    return this;
}