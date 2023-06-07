function HTMLElement(tagName, className, id) {
    this.tagName = tagName;
    this.className = className;
    this.id = id;
}

HTMLElement.prototype.rotate = function () {
    console.log("rotating from HTMLElement", this.tagName);
};

HTMLElement.prototype.render = function () {
    console.log("rendering ...", this.id);
};

const mySuper = (parent, context, arg) => parent.apply(context, arg);

function HTMLAnchor(href, ...arg) {
    mySuper(HTMLElement, this, arg);
    this.href = href;
}

HTMLAnchor.prototype.__proto__ = HTMLElement.prototype;

HTMLAnchor.prototype.redirect = function () {
    console.log(this.href, "is redirecting");
};

//------------------------ Home work --------------------

function HTMLElementInput(value, ...arg) {
    mySuper(HTMLElement, this, arg);
    this.value = value;
}

HTMLElementInput.prototype.__proto__ = HTMLElement.prototype;

HTMLElementInput.prototype.typeOfValue = function (value) {
    value = value || this.value
    console.log(typeof value);
}

const userInput = new HTMLElementInput(true, 'input', 'checkValue', 12);

console.log(userInput);

// userInput.render();
// userInput.rotate();
userInput.typeOfValue(' ');
userInput.typeOfValue('');
// userInput.redirect('asdasd');