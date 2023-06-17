//1
function calcPct (x, y) {
    return (y / x) * 100
}


let x = 50;
let y = 20;
let pct = calcPct(x, y);
console.log(pct + '% de ' + x + ' é ' + y)

//2
function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }

    return preco;
} 

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log('A casa custa R$' + preco);

//3
function validar(usuario, senha) {
    if (usuario === 'Thais' && senha === '123') {
    return true
    }

    else {
    return false
    }
}

let usuario = 'Thais';
let senha = '150';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log ('Acesso concedido')
}
else {
    console.log ('Acesso Negado');
}

















