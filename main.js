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

function HTMLElementInput(a, b, ...arg) {
    mySuper(HTMLElement, this, arg);
    this.a = a;
    this.b = b;
}

HTMLElementInput.prototype.__proto__ = HTMLElement.prototype;

HTMLElementInput.prototype.sumOfNumbers = function (a, b) {
    a = a || this.a;
    b = b || this.b;
    if (typeof a === 'number' && typeof b === 'number') {
        console.log('Sum of numers : ', a + b);
    } else {
        console.log('Oops... Something wrong :)')
    }
}

const userInput = new HTMLElementInput(3, 22, 'input', 'sum', 12);

console.log(userInput);

userInput.render();
userInput.rotate();
userInput.sumOfNumbers(3, 4);
userInput.sumOfNumbers();
// userInput.redirect('asdasd');