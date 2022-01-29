//TROCANDO O VALOR MINI PROJETO 1
/*let a = "vermelho";
let b = "azul";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);*/

//CONNDICIONAIS
//IF
//SE A HORA ESTIVER ENTRE AS 06:00 ATE 12:00 : BOM DIA!
//SE ESTIVER ENTRE 12:00 ATE AS 18:00 : BOA TARDE
//SE ESTIVER MAIS DE 18:00 : BOA NOITE
/*const hora = 18

if (hora > 6 && hora < 12) {
    console.log('bom dia')
    //codigo a ser executado
}
else if (hora > 12 && hora < 18) {
    console.log('boa tarde')
    //codigo a ser executado
}
else {
    console.log('boa noite')
    //codigo a ser executado 
}

//ELSE*/

//SWITCH CASE
// usuario comum, gerente, diretor
/*let permissao;
permissao = 'diretor'
switch (permissao) {
    case 'comum':
    console.log('usuario comum')
    break;

    case 'gerente':
    console.log('usuario gerente')
    break;

    case 'diretor':
    console.log('usuario diretor')
    break;

    default:
        console.log('usuario nao reconhecido')
}*/

//LACO/LOOP FOR
//ESCREVER ESTOU APRENNDENDO 5 VEZES
// FOR

/*for(let i = 5; i >= 1; i--) {
    //console.log('estou apredendo', i);
   if(i % 2 !==0) {
       console.log(i);
   } // i modules 2, o restante da divisao do primeiro 
   //valor com o segundo for diferente de zero
}*/

// WHILE

/*let i = 5;

while (i >= 1) {
    if(i % 2 !==0){
        console.log(i);    
    }
    i--;    
}*/

// DO WHILE
/*let i = 0;
do {
  console.log("digitando", i);
  i++;
} while (i < 10);*/

//FOR.. IN

/*const pessoa = {
    nome: 'lucas',
    idade: 32
};
//chave = key-value , chave e valor nome=chave lucas=valor
for(let chave in pessoa){
    console.log(chave, pessoa['nome']);
}

const cores = ['Vermelho', 'azul', 'verde'];

for (let indice in cores) {
    console.log(indice, cores[indice])
}*/


//FOR.. OF
/*const cores = ['Vermelho', 'azul', 'verde'];
for (let cor of cores)
    console.log(cor);*/

/*const tempo = ['sol', 'chuva', 'neblina'];
for (let clima of tempo)
    console.log(clima);*/

/*let clima;
clima = 'neblina'
switch (clima) {
    case 'sol':
    console.log('esta sol')
    break;

    case 'chuva':
    console.log('esta chuvoso')
    break;

    case 'neblina':
    console.log('esta neblinando')
    break;

    default:
        console.log('tempo indefinido')
}*/