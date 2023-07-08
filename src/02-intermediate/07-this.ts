const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};

// Хотим работать с обыкновенной кнопкой через this <button onClick="myClickHandler>Click me!</button>">
function myClickHandler(
    this: HTMLButtonElement, // Конкретизируем this (это может быть любой элемент), иначе движок не поймет с чем мы работаем
    event: Event,
    ) {
    this.disabled = true;
}