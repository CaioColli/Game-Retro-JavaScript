// Variaveis posicão x dos carrinhos
// Cima
let xCarrinhosDireita = [0, 160, 300];
// Baixo
let xCarrinhosEsquerda = [100, 500, 600];

// Variaveis posicão y dos carrinhos
// Cima
let yCarrinhosDireita = [45, 105, 168];
// Baixo
let yCarrinhosEsquerda = [280, 340, 400];

// Variaveis altura e largura carrinhos
let comprimentoCarrinho = 90;
let larguraCarrinho = 50;


// Função para mostrar os carrinhos na tela
// Carrinhos de cima

function mostraCarrinhoCima() {
  for (let i = 0; i < imagemCarrinhosCima.length; i = i + 1) { 
  image(imagemCarrinhosCima [i], xCarrinhosDireita [i], yCarrinhosDireita [i], comprimentoCarrinho, larguraCarrinho);
  } 
}

function mostraCarrinhosBaixo() { 
  for (let i = 0; i < imagemCarrinhosBaixo.length; i = i + 1) {
  image(imagemCarrinhosBaixo [i], xCarrinhosEsquerda [i], yCarrinhosEsquerda [i], comprimentoCarrinho, larguraCarrinho);
  }
}


// Função para movimentar o carrinho

let velocidadeCarrinhoCima = [6, 6, 5,]; 
let velocidadeCarrinhoBaixo = [6, 5, 3];

function movimentaCarrinhoCima() {
  for (let i = 0; i < velocidadeCarrinhoCima.length; i = i + 1) {
  xCarrinhosDireita [i] += velocidadeCarrinhoCima [i];
  } 
}  

function movimentaCarrinhoBaixo() {
  for (let i = 0; i < velocidadeCarrinhoBaixo.length; i = i + 1) {
    xCarrinhosEsquerda [i] -= velocidadeCarrinhoBaixo [i];
  }
}


// Função de loop

function voltarDoInicioCima() {
  if (xCarrinhosDireita [0] > 750) {
    xCarrinhosDireita [0] = 0
  }
  if (xCarrinhosDireita [1] > 750) {
    xCarrinhosDireita [1] = 0
  }
  if (xCarrinhosDireita [2] > 750) {
    xCarrinhosDireita [2] = 0
  }
}

function voltarDoInicioBaixo() {
  if (xCarrinhosEsquerda [0] < -70) {
    xCarrinhosEsquerda [0] = 700
  }
  if (xCarrinhosEsquerda [1] < -70) {
    xCarrinhosEsquerda [1] = 700
  }
  if (xCarrinhosEsquerda [2] < -70) {
    xCarrinhosEsquerda [2] = 700
  }
}