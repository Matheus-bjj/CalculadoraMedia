function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
  
    if (!peso || !altura || altura <= 0) {
      resultado.textContent = "Por favor, insira valores válidos.";
      return;
    }
  
    const imc = peso / (altura * altura);
    let classificacao = "";
  
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else if (imc < 35) {
      classificacao = "Obesidade grau I";
    } else if (imc < 40) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III (mórbida)";
    }
  
    resultado.textContent = `IMC: ${imc.toFixed(1)} - ${classificacao}`;
  }

