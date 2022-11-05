class Button {
    constructor (height, width, type, color){
        this.height = height;
        this.width = width;
        this.type = type;
        this.color = color;
    }
    onClick() {
        console.log(this.height, this.width, this.type, this.color);
    }
    
}

let myButton = new Button (2, 4, "button", "green");
myButton.onClick();


function testButton (typeButton, colorButton){
    if (myButton.type == typeButton && myButton.color == colorButton) {
        console.log("Кнопка соответствует требованиям.")
    } else {
        console.log("Кнопка не соответствует требованям.")
    }
}

testButton("button", "green");

