

let parola = "osso"
console.log(parola)

let parolaDivisa = parola.split('')
console.log(parolaDivisa)


let parolainvertita = parolaDivisa.reverse()
console.log(parolainvertita)

let parolaRicomposta = parolainvertita.join()
console.log (parolaRicomposta)


if (parolaDivisa === parolaRicomposta) {
    console.log ('questo è un palindromo')
} else {
    console.log ('questo non è un palindromo')
}
