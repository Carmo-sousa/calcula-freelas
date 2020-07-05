const btnCalc = document.querySelector('.btn-calcular');
const elValorHora = document.querySelector('.valor-hora');

// valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )

btnCalc.addEventListener('click', (e) => {
  e.preventDefault();
  
  var elvalorTotalProjeto = document.querySelector('#valorTotalProjeto');
  var elhoraDia = document.querySelector('#horaDia');
  var eldiasTrabalhados = document.querySelector('#diasTrabalhados');
  var eldiasFeriasProjeto = document.querySelector('#diasFeriasProjeto');

  valorTotalProjeto = parseFloat(elvalorTotalProjeto.value.replace(',', '.'));
  horaDia = parseInt(elhoraDia.value);
  diasTrabalhados = parseInt(eldiasTrabalhados.value);
  diasFeriasProjeto = parseInt(eldiasFeriasProjeto.value);

  modal.classList.add('active');

  let valorHora = (valorTotalProjeto / (diasTrabalhados * 4 * horaDia)) + ((diasFeriasProjeto * diasTrabalhados * horaDia));

  elvalorTotalProjeto.value = '';
  elhoraDia.value = '';
  eldiasTrabalhados.value = '';
  eldiasFeriasProjeto.value = '';

  elValorHora.innerHTML = `R$ ${valorHora.toFixed(2)}`;
});
