console.time("VersaoComRepeticao");
function gerarComRepeticao(quantidade) {
  const numerosGerados = [];
  let tentativas = 0;

  while (numerosGerados.length < quantidade) {
    const numero = Math.floor(Math.random() * 60) + 1;
    tentativas++;
    if (!numerosGerados.includes(numero)) {
      numerosGerados.push(numero);
    }
  }

  return { numerosGerados, tentativas };
}
const resultadoComRepeticao = gerarComRepeticao(6);
console.timeEnd("VersaoComRepeticao");

console.time("VersaoOtimizacao");
const resultadoOtimizacao = gerarNumerosUnicos(6);
console.timeEnd("VersaoOtimizacao");
