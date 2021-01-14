console.log("fui carregado de um arquivo externo");
//para salvar o conteudo do texto podemos salvar o document como um variavel
//para exibir somente o conteudo do texto do elemento envolto ao document usamos o textContet
//podemos alterar este conteudo passando um novo valor utilizando a variavel do document.textContent = "passando o novo texto / valor"
//e indicado que utilze uma classe ou id para buscar por um elemento na DOM
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


//pegamos o conteudo do paciente e passamos para a variavel de mesmo nome "paciente e uma tr"
//criamos uma variavel tdPeso passando paciente.querySelector com uma informação do conteudo de uma td de paciente que e o peso
//criamos uma variavel peso para receber o conteudo de tdPeso.textContent para pegarmos o valor real do conteudo
//criamos uma variavel chamada imc para fazer o calculo de imc entre as duas variaveis peso e altura

// para iterar por todos os elementos de uma tag utilizamos a função querySelectorAll
//iterando por todos os pacientes utilizando o laço for, passando a quantidade de elementos de paciente
// utilizando o pacientes.length para quantidade de elementos e iterar sobre ele
// atribuindo a variavel pacientes[i] para paciente

// aplicando estilo na validação utilizando paciente.classList.add("uma classe")
// criando um classe no css chamada paciente-invalido e importando na validação para mudar a cor caso a condição seja comprida
// imc.toFixed("para setar o numero de casas decimais de um numero float")
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    //aplicando validação
    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso invalido");
        pesoEhValido = false;
        tdImc.textContent = "Peso invalido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura invalida");
        alturaEhValida = false;
        tdImc.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 25
        tdImc.textContent = imc.toFixed(2);
    }
}


// criando e atrelando eventos a objetos da pagina
// pode ser feita com uma função nomeada ou anonima

// event.preventDefault e uma função que previne o pre carregamento da pagina
// para pegar dados do paciente de um formulario e necessario, pegar o elemento pai do formulario com seu id/class
// atribuindo variaveis para pegar o valor dos campos preenchidos.
// createElement serve para criar uma tag de uma pagina com js, no exemplo uma tr com td dentro dela.
// appendChild serve para associar elemetos dentro do outro como se fosse filhos desses elementos
var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona"); //pegando o elemento da pagina
    // pegando o valor do form dentro do campo nome, peso e etc
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // criando elementos
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // passando os valores das variaveis para os elementos
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // colocando os elementos td como filhos do pacienteTr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    paciente.appendChild(imcTd);

    // pegando elementos dentro da tabela
    var tabela = document.querySelector("#tabela-pacientes");

    // adicionando o pacienteTr como filho da tabela
    tabela.appendChild(pacienteTr);
})