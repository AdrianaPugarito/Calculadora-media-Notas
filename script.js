/*
var primerBimestre = ?;
var segundoBimestre = ?
var tercerBimestre = ?;
var quatroBimestre =?

var notaFinal = (primerBimestre + segundoBimestre + tercerBimestre + quatroBimestre) /4

Para não ter que usar todas essas variáveis e ter uma calculadora que todo mundo possa usar, criamos uma caixa de texto que pregunte total de Bimestres e depois as notas dessa forma não temos que estar sempre trocando o código */


var totalBimestres = parseInt(prompt("Quantidade de bimestres?")); //prompt é para exibir uma caixa de texto junto com parseInt cuando a caixa de texto recebe numeros
//var numero = 1;
var totalNotas = 0;

/*while(numero <= totalBimestres){
    var notas = parseInt(prompt("Informe notas por bimestre")); //ja o programa entende que vai pegar todas as notas que seram informadas e fara a suma delas
    totalNotas = totalNotas + notas;
    numero++; //numero = numero + 1
}*/

for(var numero = 1; numero <= totalBimestres; totalNotas = totalNotas + notas){
  var notas = parseInt(prompt("Informe notas por bimestre")); //ja o programa entende que vai pegar todas as notas que seram informadas e fara a suma delas.
    numero++; //numero = numero + 1
}

var mediaTotalNota = totalNotas/totalBimestres;
var notaFixada = mediaTotalNota.toFixed(0);
console.log("A media de nota de todas as provas é " + notaFixada);

if(mediaTotalNota >= 5) {
        document.write("Parabéns, voce foi aprovado sua media de notas é " + notaFixada);
        }
if(mediaTotalNota <= 4) {
        document.write("Infelizmente voce não foi aprovado, continue estudando sua media total de nota é " + notaFixada);
    }

