
const prompt = require('prompt-sync')();

function gerarSenha(tamanho) {
    const caracteres = 'SHDJSHDIASHDIJSADJADNSJDKBHSIXYZabcdefghijklmaddfdsfddddfdfsstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.!!!1!!<>?';
    let senha = ''
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indiceAleatorio];
    }
    return senha;
}
console.log(gerarSenha(10));


