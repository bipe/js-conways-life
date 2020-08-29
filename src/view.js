class View { //classe do componente HTML e funções de renderização e exibição no frontend

	constructor(largura, altura, elemento_pai) { //construtor da classe
		this.grid = this.cria_view(largura, altura, elemento_pai);
		this.desenha = this.desenha.bind(this);
	}


	criaPx(x, y, tipo_html) { //cria pixel a pixel, será aplicada a todo o "grid" usando funções da biblio array2d
		let pixel = document.createElement(tipo_html);
		pixel.className = 'pixel';
		pixel.dataset.x = x;
		pixel.dataset.y = y;
		return pixel;
	}

	cria_view(largura, altura, elemento_pai) { //a view é composta pelo campo de pixels. Essa função cria um a um e faz o append no html
		return Array2D.buildWith(largura, altura, (linha, coluna) => {
			let this_pixel = this.criaPx(coluna, linha, 'div');
			elemento_pai.appendChild(this_pixel); //adiciona a "div" do pixel abaixo do "elemento pai"
			return this_pixel;
		});
	}

	muda_cor(y, x, cor) {
		this.grid[x][y].style.background = cor;
	}

	desenha(modelGrid) { //função que "pinta" ou "apaga" os pixels no grid de acordo com sua vida definida no backend
		Array2D.eachCell(modelGrid, (pixel, linha, coluna) => { //novamente, aplica a função de mudar cor para todas as "celulas" do grid
			if (pixel.vivo) this.muda_cor(coluna, linha, 'lime');
			else if (pixel.vivo === false) this.muda_cor(coluna, linha, 'white');
		});
	}
}
