// Code your solutions in this file
const names = []

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
   return messages;
}

function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count--);
    }
}