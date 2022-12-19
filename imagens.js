// Variaveis Imagens 
let imagemDaEstrada;
let imagemDoPersonagem;
let imagemCarrinhoDireita1;
let imagemCarrinhoDireita2;
let imagemCarrinhoDireita3;
let imagemCarrinhoEsquerda1;
let imagemCarrinhoEsquerda2;
let imagemCarrinhoEsquerda3;

// Variaveis Sons
let buzina;
let ponto;
let trilhaSonora;

// Carregando imagem
function preload() {
  imagemDaEstrada = loadImage("imagens/cenario.png");
  imagemDoPersonagem = loadImage("imagens/personagem.png");
  imagemCarrinhoDireita1 = loadImage("imagens/carrinho1direita.png");
  imagemCarrinhoDireita2 = loadImage("imagens/carrinho2direita.png");
  imagemCarrinhoDireita3 = loadImage("imagens/carrinho3direita.png");
  imagemCarrinhoEsquerda1 = loadImage("imagens/carrinho1esquerda.png");
  imagemCarrinhoEsquerda2 = loadImage("imagens/carrinho2esquerda.png");
  imagemCarrinhoEsquerda3 = loadImage("imagens/carrinho3esquerda.png");
  // Lista de carrinhos
  imagemCarrinhosCima = [imagemCarrinhoDireita1, imagemCarrinhoDireita2, imagemCarrinhoDireita3];
  imagemCarrinhosBaixo = [imagemCarrinhoEsquerda1, imagemCarrinhoEsquerda2, imagemCarrinhoEsquerda3];
  
  buzina = loadSound("sons/buzina.wav");
  ponto = loadSound("sons/ponto.mp3");
  trillha = loadSound("sons/trilha.wav");
}
