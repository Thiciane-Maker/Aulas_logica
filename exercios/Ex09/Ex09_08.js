function gerarSenha(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let senha = ''
    for (let i = 0; i < tamanho; i++) {
        const aleatórios = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[aleatórios];
    }
    return senha;
}
console.log(gerarSenha(10));