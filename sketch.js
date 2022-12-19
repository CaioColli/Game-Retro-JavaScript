// Definir altura e comprimento da tela
function setup() {
  createCanvas(700, 500);
  trillha.loop();
}

// Desenhando na tela
function draw() {
  background(imagemDaEstrada);
  mostraPersonagem();
  mostraCarrinhoCima();
  mostraCarrinhosBaixo();
  movimentaCarrinhoCima();
  movimentaCarrinhoBaixo();
  voltarDoInicioCima();
  voltarDoInicioBaixo()
  movimentaPersonagem();
  verificaColisaoBaixo()
  verificaColisaoCima();
  meusPontos();
  marcaPonto();
}