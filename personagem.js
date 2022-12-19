// Variaveis personagem
let xPergonagem = 350;
let yPersonagem = 455;
let larguraPersonagem = 40;
let comprimentoPersonagem = 45;
let colisão = false;
let pontos = 0;

// Para mostrar o personagem na tela
function mostraPersonagem() {
  image(imagemDoPersonagem, xPergonagem, yPersonagem, comprimentoPersonagem, larguraPersonagem);
}

// Para movimentar o personagem
function movimentaPersonagem() {
  if (keyIsDown(UP_ARROW)) {
     yPersonagem -= 4; 
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeMover()) {
      yPersonagem += 3;
    } 
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xPergonagem += 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xPergonagem -= 3;
  }
}

// Colisão
function podeMover() {
  return yPersonagem < 455;
}

function verificaColisaoBaixo(){
  //collideRectRect(x, y, width, height, x2, y2, width2, height2)
  for (let i = 0; i < imagemCarrinhosBaixo.length; i++){
    voltaInicio = collideRectRect(xCarrinhosEsquerda[i], yCarrinhosEsquerda[i], comprimentoCarrinho, larguraCarrinho, xPergonagem, yPersonagem, larguraPersonagem, comprimentoPersonagem)
    if (voltaInicio){
      buzina.play();
      voltaParaInicio();
      if (pontos > 0) {
        pontos -= 1;
      }
    }
  }
}

function verificaColisaoCima(){
  //collideRectRect(x, y, width, height, x2, y2, width2, height2)
  for (let i = 0; i < imagemCarrinhosCima.length; i++){
    voltaInicio = collideRectRect(xCarrinhosDireita[i], yCarrinhosDireita[i], comprimentoCarrinho, larguraCarrinho, xPergonagem, yPersonagem, larguraPersonagem, comprimentoPersonagem)
    if (voltaInicio){
      buzina.play();
      voltaParaInicio();
      if (pontos > 0) {
        pontos -= 1;
      }
    }
  }
}

function voltaParaInicio() {
  yPersonagem = 455;
}

// Pontos

function meusPontos() {
  textAlign (CENTER);
  textSize (30);
  fill (255,255,0);
  text (pontos, 350, 260);
}

function marcaPonto() {
  if (yPersonagem < 10) {
    ponto.play();
    pontos += 1;
    voltaParaInicio();
  }
}