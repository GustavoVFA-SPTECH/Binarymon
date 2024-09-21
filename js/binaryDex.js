// function entrada() {
//   let binario = document.getElementById("binario").value;
//   let octal = document.getElementById("octal").value;
//   let decimal = document.getElementById("decimal").value;
//   let hexadecimal = document.getElementById("hexadecimal").value;

//   return {
//     binario,
//     octal,
//     decimal,
//     hexadecimal,
//   };
// }

let contador = 0;
function subir() {
  const inputs = document.querySelectorAll(".numeros");
  const bolinhas = document.querySelectorAll(".bolinha");
  if (contador < 3) contador++;

  inputs.forEach((input) => {
    input.style.border = "black 1px solid";
  });
  bolinhas.forEach((bolinha) => {
    bolinha.style.display = "none";
  });

  bolinhas[contador].style.display = "block";

  inputs[contador].style.border = "red 1px solid";
}

function descer() {
  const inputs = document.querySelectorAll(".numeros");
  const bolinhas = document.querySelectorAll(".bolinha");
  if (contador > 0) contador--;

  inputs.forEach((input) => {
    input.style.border = "black 1px solid";
  });
  bolinhas.forEach((bolinha) => {
    bolinha.style.display = "none";
  });
  bolinhas[contador].style.display = "block";
  inputs[contador].style.border = "red 1px solid";
}

function validar(entrada, caracteresValidos) {
  const entradaArray = entrada.split("");

  for (let i = 0; i < entradaArray.length; i++) {
    if (caracteresValidos.includes(entradaArray[i])) return true;
    else return false;
  }
}

function inserir(valor) {
  const inputs = document.querySelectorAll(".numeros");

  if (contador == 0 && validar(valor, "01")) {
    inputs[contador].value += valor;
  } else if (contador == 1 && validar(valor, "01234567")) {
    inputs[contador].value += valor;
  } else if (contador == 2 && validar(valor, "0123456789")) {
    inputs[contador].value += valor;
  } else if (contador == 3 && validar(valor, "0123456789ABCDEF")) {
    inputs[contador].value += valor;
  }
}

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    inserir(button.innerHTML);
  });
});

let buttonDelete = document.querySelector(".button-delete");

buttonDelete.addEventListener("click", () => {
  apagar();
});

function apagar() {
  const inputs = document.querySelectorAll(".numeros");

  let arrayInput = inputs[contador].value.split("");
  arrayInput.pop();

  inputs[contador].value = arrayInput.toString().replace(/,/g, "");
}

function converter() {
  let base = 10;

  if (contador == 0) base = 2;
  else if (contador == 1) base = 8;
  else if (contador == 3) base = 16;

  const inputs = document.querySelectorAll(".numeros");

  const numero = inputs[contador].value;
  const decimal = parseInt(numero, base);
  const octal = decimal.toString(8);
  const hexadecimal = decimal.toString(16).toUpperCase();
  const binario = decimal.toString(2);

  document.getElementById("octal").value = octal;
  document.getElementById("decimal").value = decimal;
  document.getElementById("hexadecimal").value = hexadecimal;
  document.getElementById("binario").value = binario;
}

function limpar() {
  document.getElementById("octal").value = "";
  document.getElementById("decimal").value = "";
  document.getElementById("hexadecimal").value = "";
  document.getElementById("binario").value = "";
}
