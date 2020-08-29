class Controller {
	constructor(view, tabuleiro) {
		this.view = view;
		this.tabuleiro = tabuleiro;
		this.clica_pixel = this.clica_pixel.bind(this);
	}

	
	clica_pixel(event) { //interação usuario com pixel
		if (event.target.className === 'pixel' && (event.type === 'click' || event.buttons === 1 )) { //clicar ou arrastar
			let x = event.target.dataset.y;
			let y = event.target.dataset.x;
			this.tabuleiro.setVivo(y, x);
			this.view.muda_cor(y, x, 'lime');
		}
	}

	itera() { //processo de um round (uma geração)
		this.tabuleiro.julgamento();
		this.tabuleiro.itera();
		this.view.desenha(this.tabuleiro.grid);
	}

}