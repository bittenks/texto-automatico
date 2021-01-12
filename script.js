



const frase = "HELLO FRIEND                  ";
index = 0 ;
function writeText() {
    document.body.innerText = frase.slice(0, index);

    index++;

    if (index > frase.length) {
        index = 0;
    }
}

setInterval(writeText, 100);


