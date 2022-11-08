

let parola = "osso"
console.log(parola)

let parolaDivisa = parola.split('')
console.log("parola divisa" + " " + parolaDivisa)


let parolainvertita = parolaDivisa.reverse()
console.log("parola invertita" + " " + parolainvertita)

let parolaRicomposta = parolainvertita.join('')
console.log ("parola ricomposta" + " " + parolaRicomposta)


if (parola === parolaRicomposta) {
    console.log ('questo è un palindromo')
} else {
    console.log ('questo non è un palindromo')
}