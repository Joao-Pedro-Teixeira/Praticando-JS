//BAIXA COMPLEXIDADE

//EX-1
function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}
console.log(parOuImpar(7));  
console.log(parOuImpar(10)); 
//EX-2
function maiorDeIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return (anoAtual - anoNascimento) >= 18 ? "Maior de idade" : "Menor de idade";
}
console.log(maiorDeIdade(2005)); 
console.log(maiorDeIdade(2000)); 

//EX-3
function mediaAprovacao(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    return media >= 7 ? "Aprovado" : "Reprovado";
}

console.log(mediaAprovacao(8, 7));  
console.log(mediaAprovacao(5, 6));  

//EX-4
function podeVotar(idade) {
    return idade >= 16 ? "Pode votar" : "Não pode votar";
}

console.log(podeVotar(15)); 
console.log(podeVotar(18)); 
//EX-5
function maiorNumero(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(maiorNumero(10, 5));  
console.log(maiorNumero(3, 8));   

//EX-6
function verificaHoraExtra(horasTrabalhadas) {
    return horasTrabalhadas > 40 ? "Fez hora extra" : "Não fez hora extra";
}

console.log(verificaHoraExtra(45)); 
console.log(verificaHoraExtra(38)); 

//EX-7
function numeroNoIntervalo(numero) {
    return numero >= 10 && numero <= 50 ? "Dentro do intervalo" : "Fora do intervalo";
}

console.log(numeroNoIntervalo(20));  
console.log(numeroNoIntervalo(5));   

//EX-8
function tipoLetra(letra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return vogais.includes(letra.toLowerCase()) ? "Vogal" : "Consoante";
}

console.log(tipoLetra("a")); 
console.log(tipoLetra("b")); 

//EX-9
function mesDeFerias(mes) {
    const mesesDeFerias = ['dezembro', 'janeiro', 'julho'];
    return mesesDeFerias.includes(mes.toLowerCase()) ? "Mês de férias" : "Não é mês de férias";
}

console.log(mesDeFerias("dezembro")); 
console.log(mesDeFerias("agosto"));   

//EX-10
function avaliarNota(nota) {
    if (nota >= 9) return "A";
    if (nota >= 7) return "B";
    if (nota >= 5) return "C";
    if (nota >= 3) return "D";
    return "F";
}

console.log(avaliarNota(9.5));
console.log(avaliarNota(6.5)); 
console.log(avaliarNota(4));   
console.log(avaliarNota(2)); 

//MÉDIA COMPLEXIDADE

//EX1
function maiorDeTres(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a);
    } else if (b >= a && b >= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
maiorDeTres(10, 20, 15);

//EX2
function verificarPrimeiroCaractere(str) {
    if (!str || str.length === 0) {
        console.log("String vazia");
        return;
    }
    const char = str.charAt(0);
    if (char >= 'A' && char <= 'Z') {
        console.log("Maiúscula");
    } else if (char >= 'a' && char <= 'z') {
        console.log("Minúscula");
    } else {
        console.log("Não é uma letra");
    }
}
verificarPrimeiroCaractere("Casa");
verificarPrimeiroCaractere("casa");

//EX3
function verificarTemperatura(temp) {
    if (temp < 15) {
        console.log("Frio");
    } else if (temp <= 30) {
        console.log("Moderado");
    } else {
        console.log("Quente");
    }
}
verificarTemperatura(10);
verificarTemperatura(25);
verificarTemperatura(35);

//EX4
function anoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log("Bissexto");
    } else {
        console.log("Não é bissexto");
    }
}
anoBissexto(2024);
anoBissexto(1900);

//EX5
function divisivelPor5(a, b) {
    if (a % 5 === 0 && b % 5 === 0) {
        console.log("Ambos são divisíveis por 5");
    } else {
        console.log("Pelo menos um não é divisível por 5");
    }
}
divisivelPor5(10, 15);
divisivelPor5(10, 14);

//EX6
function semaforo(cor) {
    if (cor === "verde") {
        console.log("Seguir");
    } else if (cor === "amarelo") {
        console.log("Esperar");
    } else if (cor === "vermelho") {
        console.log("Parar");
    } else {
        console.log("Cor inválida");
    }
}
semaforo("verde");
semaforo("amarelo");
semaforo("vermelho");

//EX7
function numeroPrimoAte100(num) {
    const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    if (primos.includes(num)) {
        console.log("É primo até 100");
    } else {
        console.log("Não é primo até 100");
    }
}
numeroPrimoAte100(23);
numeroPrimoAte100(50);

//EX8
function numeroPerfeito(num) {
    let soma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            soma += i;
        }
    }
    if (soma === num) {
        console.log("É um número perfeito");
    } else {
        console.log("Não é um número perfeito");
    }
}
numeroPerfeito(6);
numeroPerfeito(28);
numeroPerfeito(10);

//EX9
function quadradoPerfeito(num) {
    const raiz = Math.sqrt(num);
    if (raiz === Math.floor(raiz)) {
        console.log("É um quadrado perfeito");
    } else {
        console.log("Não é um quadrado perfeito");
    }
}
quadradoPerfeito(16);
quadradoPerfeito(20);

//EX10
function verificarPalindromo(palavra) {
    const invertida = palavra.split("").reverse().join("");
    if (palavra === invertida) {
        console.log("É um palíndromo");
    } else {
        console.log("Não é um palíndromo");
    }
}
verificarPalindromo("ana");
verificarPalindromo("casa");

//ALTA COMPLEXIDADE

//EX1
function situacaoAluno(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    if (media >= 7) {
        console.log("Aprovado");
    } else if (media >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}
situacaoAluno(7, 8, 6);
situacaoAluno(5, 6, 4);

//EX2
function classificarTriangulo(a, b, c) {
    if (a === b && b === c) {
        console.log("Equilátero");
    } else if (a === b || b === c || a === c) {
        console.log("Isósceles");
    } else {
        console.log("Escaleno");
    }
}
classificarTriangulo(3, 3, 3);
classificarTriangulo(3, 3, 4);

//EX3
function classificarIdade(idade) {
    if (idade < 12) {
        console.log("Criança");
    } else if (idade < 18) {
        console.log("Adolescente");
    } else if (idade < 60) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }
}
classificarIdade(10);
classificarIdade(17);
classificarIdade(30);

//EX4
function verificarTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        classificarTriangulo(a, b, c);
    } else {
        console.log("Não forma um triângulo");
    }
}
verificarTriangulo(3, 4, 5);
verificarTriangulo(1, 2, 3);

//EX5
function mediaPonderada(nota1, peso1, nota2, peso2, nota3, peso3) {
    const somaPesos = peso1 + peso2 + peso3;
    const media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPesos;
    console.log(media.toFixed(2));
}
mediaPonderada(7, 3, 8, 4, 6, 3);

//EX6
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        console.log("CPF inválido");
        return;
    }
    const calcularDigito = (fatores) =>
        (fatores.reduce((soma, fator, i) => soma + cpf[i] * fator, 0) * 10) % 11 % 10;
    const digito1 = calcularDigito([10, 9, 8, 7, 6, 5, 4, 3, 2]);
    const digito2 = calcularDigito([11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
    console.log(digito1 === +cpf[9] && digito2 === +cpf[10] ? "CPF válido" : "CPF inválido");
}
validarCPF("123.456.789-09");
validarCPF("111.444.777-35");

//EX7
function calcularHorasExtras(entrada, saida) {
    const horasTrabalhadas = saida - entrada;
    if (horasTrabalhadas > 8) {
        console.log(`Horas extras: ${horasTrabalhadas - 8}`);
    } else {
        console.log("Sem horas extras");
    }
}
calcularHorasExtras(8, 17);
calcularHorasExtras(8, 19);

//EX8
function calcularPontuacao(jogo1, jogo2, jogo3) {
    const media = (jogo1 + jogo2 + jogo3) / 3;
    console.log(media >= 80 ? "Subiu de nível" : "Não subiu de nível");
}
calcularPontuacao(85, 90, 80);
calcularPontuacao(70, 60, 75);

//EX9
function aplicarDesconto(total) {
    let desconto = 0;
    if (total > 200) {
        desconto = total * 0.1;
    } else if (total >= 100) {
        desconto = total * 0.05;
    }
    console.log(`Valor final: ${(total - desconto).toFixed(2)}`);
}
aplicarDesconto(150);
aplicarDesconto(250);

//EX10
function classificarAtleta(idade) {
    if (idade < 12) {
        console.log("Infantil");
    } else if (idade < 18) {
        console.log("Juvenil");
    } else if (idade < 40) {
        console.log("Adulto");
    } else {
        console.log("Master");
    }
}
classificarAtleta(10);
classificarAtleta(17);
classificarAtleta(25);
classificarAtleta(50);

//BAIXA COMPLEXIDADE COM ARRAYS

//EX1
function maiorValor(array) {
    console.log(Math.max(...array));
}
maiorValor([1, 2, 3, 4, 5]);

//EX2
function valorPresente(array, valor) {
    console.log(array.includes(valor));
}
valorPresente([1, 2, 3, 4, 5], 3);
valorPresente([1, 2, 3, 4, 5], 6);

//EX3
function inverterArray(array) {
    console.log(array.reverse());
}
inverterArray([1, 2, 3, 4, 5]);

//EX4
function ultimoElemento(array) {
    console.log(array.pop());
}
ultimoElemento([1, 2, 3, 4, 5]);

//EX5
function adicionarInicio(array, elemento) {
    array.unshift(elemento);
    console.log(array);
}
adicionarInicio([2, 3, 4], 1);

//EX6
function removerPrimeiro(array) {
    console.log(array.shift());
}
removerPrimeiro([1, 2, 3, 4, 5]);

//EX7
function numerosPares(array) {
    console.log(array.filter(num => num % 2 === 0));
}
numerosPares([1, 2, 3, 4, 5, 6]);

//EX8
function somarElementos(array) {
    console.log(array.reduce((soma, num) => soma + num, 0));
}
somarElementos([1, 2, 3, 4, 5]);

//EX9
function multiplicarPorDois(array) {
    console.log(array.map(num => num * 2));
}
multiplicarPorDois([1, 2, 3, 4, 5]);

//EX10
function todosMaioresQueDez(array) {
    console.log(array.every(num => num > 10));
}
todosMaioresQueDez([11, 12, 13]);
todosMaioresQueDez([10, 12, 15]);


//MÉDIA COMPLEXIDADE COM ARRAYS

//EX-1
function nomesComA(nomes) {
    console.log(nomes.filter(nome => nome.startsWith('A')));
}
nomesComA(["Ana", "João", "Alice", "Arthur"]);


//EX-2
function combinarArrays(array1, array2) {
    console.log([...new Set(array1.concat(array2))]);
}
combinarArrays([1, 2, 3], [3, 4, 5]);

//EX-3
function somaImpares(numeros) {
    console.log(numeros
        .filter(num => num % 2 !== 0)
        .reduce((soma, num) => soma + num, 0)
    );
}
somaImpares([1, 2, 3, 4, 5]);

//EX-4
function maiorComprimento(strings) {
    console.log(Math.max(...strings.map(str => str.length)));
}
maiorComprimento(["casa", "carro", "aeronave"]);

//EX-5
function removerNegativos(numeros) {
    console.log(numeros.filter(num => num >= 0));
}

removerNegativos([-5, 3, -1, 8, 0]);

//EX-6
function dividirParesImpares(numeros) {
    const pares = numeros.filter(num => num % 2 === 0);
    const impares = numeros.filter(num => num % 2 !== 0);
    console.log({ pares, impares });
}
dividirParesImpares([1, 2, 3, 4, 5, 6]);


//EX-7
function ordenarCrescente(numeros) {
    console.log(numeros.sort((a, b) => a - b));
}
ordenarCrescente([5, 2, 9, 1, 7]);


//EX-8
function numerosPrimos(numeros) {
    function ehPrimo(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    console.log(numeros.filter(ehPrimo));
}
numerosPrimos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//EX-9
function dividirEmSubarrays(array, n) {
    const resultado = [];
    for (let i = 0; i < array.length; i += n) {
        resultado.push(array.slice(i, i + n));
    }
    console.log(resultado);
}
dividirEmSubarrays([1, 2, 3, 4, 5, 6, 7], 3);

//EX-10
function removerFalsy(array) {
    console.log(array.filter(Boolean));
}
removerFalsy([0, 1, false, 2, "", 3, null, undefined, NaN]);

//ALTA COMPLEXIDADE COM ARRAYS

//EX1
function agruparPor(array, criterio) {
    console.log(array.reduce((grupo, elemento) => {
        const chave = criterio(elemento);
        if (!grupo[chave]) {
            grupo[chave] = [];
        }
        grupo[chave].push(elemento);
        return grupo;
    }, {}));
}
agruparPor([1, 2, 3, 4, 5, 6], num => (num % 2 === 0 ? "par" : "ímpar"));

//EX2
function produtoImpares(array) {
    console.log(
        array
            .filter(num => num % 2 !== 0)
            .reduce((produto, num) => produto * num, 1)
    );
}
produtoImpares([1, 2, 3, 4, 5]);

//EX3
function somaMatriz(matriz) {
    console.log(
        matriz.reduce(
            (somaTotal, array) => somaTotal + array.reduce((soma, num) => soma + num, 0),
            0
        )
    );
}
somaMatriz([[1, 2], [3, 4], [5, 6]]);

//EX4
function segundoMaior(array) {
    const ordenado = [...array].sort((a, b) => b - a);
    console.log(ordenado[1]);
}
segundoMaior([10, 5, 20, 15]);

//EX5
function rotacionarDireita(array, k) {
    const tamanho = array.length;
    const rotacionado = array.slice(-k % tamanho).concat(array.slice(0, -k % tamanho));
    console.log(rotacionado);
}
rotacionarDireita([1, 2, 3, 4, 5], 2);

//EX6
function pessoaMaisVelha(array) {
    console.log(
        array.reduce((maisVelha, pessoa) =>
            pessoa.idade > maisVelha.idade ? pessoa : maisVelha
        ).nome
    );
}
pessoaMaisVelha([
    { nome: "Bia", idade: 15 },
    { nome: "João", idade: 16 },
    { nome: "Vinicius", idade: 17 },
]);

//EX7
function intersecao(array1, array2) {
    console.log(array1.filter(elemento => array2.includes(elemento)));
}
intersecao([1, 2, 3, 4], [3, 4, 5, 6]);

//EX8
function removerDuplicatas(array) {
    const resultado = [];
    for (const elemento of array) {
        if (!resultado.includes(elemento)) {
            resultado.push(elemento);
        }
    }
    console.log(resultado);
}
removerDuplicatas([1, 2, 2, 3, 4, 4, 5]);

//EX9
function achatar(array) {
    const resultado = array.reduce((achatado, elemento) => {
        return Array.isArray(elemento)
            ? achatado.concat(achatar(elemento))
            : achatado.concat(elemento);
    }, []);
    console.log(resultado);
}
achatar([1, [2, 3], [4, [5, 6]], 7]);

//EX10
function eSubconjunto(array1, array2) {
    console.log(array1.every(elemento => array2.includes(elemento)));
}
eSubconjunto([1, 2], [1, 2, 3, 4]);
eSubconjunto([1, 5], [1, 2, 3, 4]);

//BAIXA COMPLEXIDADE COM OBJETOS 

//EX1
const carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 };

function exibirCarroInfo() {
    console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}`);
}
exibirCarroInfo();

//EX2
function adicionarCor(cor) {
    carro.cor = cor;
    console.log(carro);
}
adicionarCor("Prata");

//EX3
function removerAno() {
    delete carro.ano;
    console.log(carro);
}
removerAno();

//EX4
function alterarModelo(novoModelo) {
    carro.modelo = novoModelo;
    console.log(carro);
}
alterarModelo("Camry");

//EX5
function verificarMarca() {
    console.log("marca" in carro);
}
verificarMarca();

//EX6
const aluno = { nome: "João", idade: 16, notas: [8, 9, 7] };

function mediaNotas() {
    const media = aluno.notas.reduce((soma, nota) => soma + nota, 0) / aluno.notas.length;
    console.log(media);
}
mediaNotas();

//EX7
function listarChaves(objeto) {
    console.log(Object.keys(objeto));
}
listarChaves(carro);

//EX8
function listarValores(objeto) {
    console.log(Object.values(objeto));
}
listarValores(carro);

//EX9
function clonarCarro() {
    const carroClonado = Object.assign({}, carro);
    console.log(carroClonado);
}
clonarCarro();

//EX10
function contarPropriedades(objeto) {
    console.log(Object.keys(objeto).length);
}
contarPropriedades(carro);

//MÉDIA COMPLEXIDADE COM OBJETOS 

//EX1
function arrayParaObjeto(array) {
    return array.reduce((objeto, item) => {
        return { ...objeto, ...item };
    }, {});
}
const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
console.log(arrayParaObjeto(arr));

//EX2
function maiorNumero(objeto) {
    return Math.max(...Object.values(objeto));
}
const numeros = { a: 1, b: 5, c: 3 };
console.log(maiorNumero(numeros));

//EX3
function arraysParaObjeto(chaves, valores) {
    return chaves.reduce((objeto, chave, index) => {
        objeto[chave] = valores[index];
        return objeto;
    }, {});
}
const chaves = ['nome', 'idade', 'cidade'];
const valores = ['João', 16, 'São Paulo'];
console.log(arraysParaObjeto(chaves, valores));

//EX4
function adicionarMetodo(objeto) {
    objeto.exibirPropriedades = function() {
        for (let chave in this) {
            if (this.hasOwnProperty(chave)) {
                console.log(`${chave}: ${this[chave]}`);
            }
        }
    };
}   
const Pessoa = { nome: 'Bia', idade: 17 };
adicionarMetodo(Pessoa);
Pessoa.exibirPropriedades();

//EX5
const contaBancaria = {
    saldo: 0,
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor}. Saldo atual: R$${this.saldo}`);
    },
    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente!');
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor}. Saldo atual: R$${this.saldo}`);
        }
    }
};
contaBancaria.depositar(100);
contaBancaria.sacar(50);
contaBancaria.sacar(60);

//EX6
function chavesMaiusculas(objeto) {
    const novoObjeto = {};
    for (let chave in objeto) {
        if (objeto.hasOwnProperty(chave)) {
            novoObjeto[chave.toUpperCase()] = objeto[chave];
        }
    }
    return novoObjeto;
}
const pessoa = { nome: 'Thiago', idade: 17 };
console.log(chavesMaiusculas(pessoa));

//EX7
function inverterChavesValores(objeto) {
    const novoObjeto = {};
    for (let chave in objeto) {
        if (objeto.hasOwnProperty(chave)) {
            novoObjeto[objeto[chave]] = chave;
        }
    }
    return novoObjeto;
}
const PESSOA = { nome: 'Carlos', idade: 35 };
console.log(inverterChavesValores(PESSOA));

//EX8
function temPropriedadeEmComum(objeto1, objeto2) {
    for (let chave in objeto1) {
        if (objeto2.hasOwnProperty(chave)) {
            return true;
        }
    }
    return false;
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(temPropriedadeEmComum(obj1, obj2)); 

//EX9
function filtrarNumeros(objeto) {
    const novoObjeto = {};
    for (let chave in objeto) {
        if (typeof objeto[chave] === 'number') {
            novoObjeto[chave] = objeto[chave];
        }
    }
    return novoObjeto;
}
const individuo = { nome: 'João', idade: 16, cidade: 'São Paulo' };
console.log(filtrarNumeros(individuo));

//ALTA COMPLEXIDADE COM OBJETO 

//EX1
function mergeObjetos(obej1, obej2) {
    for (let chave in obej2) {
        if (obej2.hasOwnProperty(chave)) {
            if (typeof obej2[chave] === 'object' && obej2[chave] !== null && !Array.isArray(obej2[chave])) {
                if (!obej1[chave]) {
                    obej1[chave] = {};
                }
                mergeObjetos(obej1[chave], obej2[chave]);
            } else {
                obej1[chave] = obej2[chave];
            }
        }
    }
    return obej1;
}
const obej1 = { a: 1, b: { x: 2 } };
const obej2 = { b: { y: 3 }, c: 4 };
console.log(mergeObjetos(obej1, obej2));

//EX2
let alunos = [];

function adicionarAluno(nome, idade, notas) {
    alunos.push({ nome, idade, notas });
}

function removerAluno(nome) {
    alunos = alunos.filter(aluno => aluno.nome !== nome);
}

function atualizarAluno(nome, novaIdade, novasNotas) {
    const aluno = alunos.find(aluno => aluno.nome === nome);
    if (aluno) {
        aluno.idade = novaIdade;
        aluno.notas = novasNotas;
    }
}
adicionarAluno('João', 20, [8, 9, 7]);
adicionarAluno('Vinicius', 22, [9, 10, 8]);
atualizarAluno('João', 21, [9, 8, 9]);
removerAluno('Vinicius');
console.log(alunos);

//EX3
function gerarRelatorioProdutos(produtos) {
    let totalVendas = 0;
    let produtoMaisVendido = null;
    let maxVendas = 0;

    produtos.forEach(produto => {
        totalVendas += produto.vendas;
        if (produto.vendas > maxVendas) {
            maxVendas = produto.vendas;
            produtoMaisVendido = produto.nome;
        }
    });

    console.log(`Total de vendas: R$${totalVendas}`);
    console.log(`Produto mais vendido: ${produtoMaisVendido}`);
}
const produtos = [
    { nome: 'Produto A', vendas: 200 },
    { nome: 'Produto B', vendas: 150 },
    { nome: 'Produto C', vendas: 300 }
];
gerarRelatorioProdutos(produtos);

//EX4
function calcularMediaSalarial(empresa) {
    const salarios = empresa.funcionarios.map(funcionario => funcionario.salario);
    const somaSalarios = salarios.reduce((soma, salario) => soma + salario, 0);
    return somaSalarios / salarios.length;
}
const empresa = {
    funcionarios: [
        { nome: 'Alice', salario: 2500 },
        { nome: 'Bob', salario: 3500 },
        { nome: 'Carlos', salario: 3000 }
    ]
};
console.log(calcularMediaSalarial(empresa));

//EX5
function obterPropriedade(objeto, caminho) {
    const partes = caminho.split('.');
    let resultado = objeto;
    for (let parte of partes) {
        if (resultado[parte] !== undefined) {
            resultado = resultado[parte];
        } else {
            return undefined;
        }
    }
    return resultado;
}
const obj = { a: { b: { c: 10 } } };
console.log(obterPropriedade(obj, 'a.b.c')); 
console.log(obterPropriedade(obj, 'a.b.d')); 

//EX6
let inventario = [];

function adicionarProduto(nome, quantidade, preco) {
    inventario.push({ nome, quantidade, preco });
}

function removerProduto(nome) {
    inventario = inventario.filter(produto => produto.nome !== nome);
}

function alterarProduto(nome, novaQuantidade, novoPreco) {
    const produto = inventario.find(prod => prod.nome === nome);
    if (produto) {
        produto.quantidade = novaQuantidade;
        produto.preco = novoPreco;
    }
}
adicionarProduto('Produto A', 10, 50);
adicionarProduto('Produto B', 5, 30);
alterarProduto('Produto A', 15, 55);
removerProduto('Produto B');
console.log(inventario);

//EX7
function clonarObjetoProfundamente(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}
const objOriginal = { a: { b: 2 }, c: 3 };
const objClonado = clonarObjetoProfundamente(objOriginal);
console.log(objClonado);

//EX8
function validarObjeto(objeto, esquema) {
    for (let chave in esquema) {
        const tipoEsperado = esquema[chave];
        if (typeof objeto[chave] !== tipoEsperado) {
            console.log(`A propriedade ${chave} deve ser do tipo ${tipoEsperado}`);
            return false;
        }
    }
    return true;
}
const esquema = { nome: 'string', idade: 'number' };
const INDIVIDUO = { nome: 'João', idade: 16 };
console.log(validarObjeto(pessoa, esquema)); 

//EX9
function parametrosParaObjeto(parametros) {
    const objeto = {};
    const pares = parametros.split('&');
    pares.forEach(par => {
        const [chave, valor] = par.split('=');
        objeto[decodeURIComponent(chave)] = decodeURIComponent(valor);
    });
    return objeto;
}
const parametros = 'nome=João&idade=16';
console.log(parametrosParaObjeto(parametros));

//EX10
function caminhoMaisCurto(grafico, inicio, fim) {
    const visitados = new Set();
    const fila = [[inicio]];

    while (fila.length > 0) {
        const caminho = fila.shift();
        const ultimoNo = caminho[caminho.length - 1];

        if (ultimoNo === fim) {
            return caminho;
        }

        if (!visitados.has(ultimoNo)) {
            visitados.add(ultimoNo);
            const vizinhos = grafico[ultimoNo];
            vizinhos.forEach(vizinho => {
                fila.push([...caminho, vizinho]);
            });
        }
    }

    return null; 
}
const grafico = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
};
console.log(caminhoMaisCurto(grafico, 'A', 'D')); 
