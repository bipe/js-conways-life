class Campo {
	constructor(largura, altura) {
		this.grid = Array2D.buildWith(largura, altura, this.renderiza_grid); //cria um grid para usar funções da lib Array2D
		this.largura = largura;
		this.altura = altura;
	}


	renderiza_grid(linha, coluna) { //coloca os pixels no grid do HTML
		return new Pixel(coluna, linha);
	}

	julgamento() { //define quem vive e quem morre
		Array2D.eachCell(this.grid, pixel => { //essa função aplica uma função qualquer a todas as "celulas" do nosso grid
			pixel.julgamento(this.grid, this.altura, this.largura); //no caso, foi aplicada a func julgamento em todos os pixels
		});
	}

	itera() { // faz um round propagando mudanças
		Array2D.eachCell(this.grid, pixel => {
			pixel.itera();
		});
	}

	setVivo(x, y) {
		this.grid[y][x].vivo = true;
	}
}