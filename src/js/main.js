const btnCalc = document.querySelector('.btn-calcular');
const elValorHora = document.querySelector('.valor-hora');

var elvalorTotalProjeto = document.querySelector('#valorTotalProjeto');

btnCalc.addEventListener('click', (e) => {
  e.preventDefault();
  
  let elvalorTotalProjeto = document.querySelector('#valorTotalProjeto');
  var elhoraDia = document.querySelector('#horaDia');
  var eldiasTrabalhados = document.querySelector('#diasTrabalhados');
  var eldiasFeriasProjeto = document.querySelector('#diasFeriasProjeto');

  valorTotalProjeto = parseFloat(elvalorTotalProjeto.value.replace(',', '.'));
  horaDia = parseInt(elhoraDia.value);
  diasTrabalhados = parseInt(eldiasTrabalhados.value);
  diasFeriasProjeto = parseInt(eldiasFeriasProjeto.value);

  modal.classList.add('active');

  
  elvalorTotalProjeto.value = '';
  elhoraDia.value = '';
  eldiasTrabalhados.value = '';
  eldiasFeriasProjeto.value = '';

  let valorHora = calcularHora(valorTotalProjeto, horaDia, diasTrabalhados, diasFeriasProjeto);

  elValorHora.innerHTML = `R$ ${valorHora.toFixed(2)}`;
});

function calcularHora(valorProjeto, horasDia, diasTrabalhados, feriasProjeto){
  return (valorProjeto / (diasTrabalhados * 4 * horasDia)) + ((feriasProjeto * diasTrabalhados * horaDia))
}

elvalorTotalProjeto.addEventListener('input', function () {
  console.log(this.value);
});
