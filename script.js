// 1. Soma de 1 a 13
function calcularSoma() {
    let indice = 13, soma = 0, k = 0;
    while (k < indice) {
      k++;
      soma += k;
    }
    document.getElementById("output1").innerText = `A soma de 1 a 13 é: ${soma}`;
  }
  
  // 2. Verificar Fibonacci
  function verificarFibonacci() {
    const n = parseInt(document.getElementById("numeroFibonacci").value);
    let a = 0, b = 1;
    while (a < n) {
      const temp = a;
      a = b;
      b = temp + b;
    }
    const resultado = a === n ? "pertence" : "NÃO pertence";
    document.getElementById("output2").innerText = `O número ${n} ${resultado} à sequência de Fibonacci.`;
  }
  
  // 3. Faturamento Diário
  function calcularFaturamento() {
    const faturamento = [100, 200, 0, 300, 400, 0, 500, 100, 0, 250];
    const diasValidos = faturamento.filter(valor => valor > 0);
    const menorValor = Math.min(...diasValidos);
    const maiorValor = Math.max(...diasValidos);
    const media = diasValidos.reduce((acc, val) => acc + val, 0) / diasValidos.length;
    const diasAcimaMedia = diasValidos.filter(valor => valor > media).length;
  
    document.getElementById("output3").innerText = `
      Menor valor: ${menorValor}
      Maior valor: ${maiorValor}
      Dias acima da média: ${diasAcimaMedia}
    `;
  }
  
  // 4. Percentual de Faturamento
  function calcularPercentuais() {
    // Valores de faturamento
    const faturamento = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53,
    };
  
    // Cálculo do faturamento total
    const faturamentoTotal =
      faturamento.SP +
      faturamento.RJ +
      faturamento.MG +
      faturamento.ES +
      faturamento.Outros;
  
    // Cálculo dos percentuais
    const percentuais = {
      SP: ((faturamento.SP / faturamentoTotal) * 100).toFixed(2),
      RJ: ((faturamento.RJ / faturamentoTotal) * 100).toFixed(2),
      MG: ((faturamento.MG / faturamentoTotal) * 100).toFixed(2),
      ES: ((faturamento.ES / faturamentoTotal) * 100).toFixed(2),
      Outros: ((faturamento.Outros / faturamentoTotal) * 100).toFixed(2),
    };
  
    // Exibindo os percentuais na tabela
    document.getElementById("percentualSP").innerText = `${percentuais.SP}%`;
    document.getElementById("percentualRJ").innerText = `${percentuais.RJ}%`;
    document.getElementById("percentualMG").innerText = `${percentuais.MG}%`;
    document.getElementById("percentualES").innerText = `${percentuais.ES}%`;
    document.getElementById("percentualOutros").innerText = `${percentuais.Outros}%`;
  
    // Exibindo o faturamento total no output
    document.getElementById(
      "outputPercentuais"
    ).innerText = `Faturamento Total: R$ ${faturamentoTotal.toFixed(2)}`;
  }
  
  
// 5. Inverter String
function inverterString() {
  const texto = document.getElementById("stringInvertida").value.trim();
  if (texto === "") {
    document.getElementById("output5").innerText = "Por favor, insira um valor antes de inverter a string.";
    return;
  }
  
  let invertida = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertida += texto[i];
  }
  document.getElementById("output5").innerText = `String invertida: ${invertida}`;
}
