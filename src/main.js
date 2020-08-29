var campo = document.getElementById('campo');
var botao_play = document.getElementById('botao_play');

var componente = new View(20, 20, campo);
var tabuleiro = new Campo(20, 20);
var controller = new Controller(componente, tabuleiro);

campo.addEventListener('mouseover', controller.clica_pixel, false); //arrastar
campo.addEventListener('mousedown', controller.clica_pixel, false); //cliar 1 a 1
botao_play.addEventListener('click', () => controller.itera(), false); //botao de iteração
