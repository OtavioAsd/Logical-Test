// Valida se o número é da sequência fibonacci

function fibonacciValidation(n) {
  if (n < 0) {
    console.log("Não pertence a sequência de fibonacci");
  }

  let a = 0;
  let b = 1;
  let c = 0;

  while (a < n) {
    c = a + b;
    a = b;
    b = c;
  }

  return a == n;
}

console.log(fibonacciValidation(21));

// Cria uma sequência fibonacci dado ao tamanho da variável num

var num = 11;

function fibonacci() {
  let n1 = 0;
  let n2 = 1;
  let nextNum = "";

  for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
  }
}

fibonacci();

// Cria um loop for que reverte qualquer string escrita dentro da variável string

var string = "";
function reversed(string) {
  for (let i = string.length; i > 0; i--) {
    let reverse = string[i - 1];

    console.log(reverse);
  }
}

reversed("fruta");
