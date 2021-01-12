

let index = 0;


const frase = "HELLO FRIEND                  ";


function writeText() {
    document.body.innerText = frase.slice(0, index);

    index++;

    if (index > frase.length) {
        index = 0;
    }
}

setInterval(writeText, 100);


