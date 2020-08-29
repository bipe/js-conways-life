class Pixel {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.vivo = false;
		this.vivo_prox_round = false;
		this.getVizinhos = this.getVizinhos.bind(this);
	}


	getVizinhos(campo, altura_campo, largura_campo) {
		let norte, sul, leste, oeste;

		leste = this.x + 1;
		oeste = this.x - 1;
		sul = this.y + 1;
		norte = this.y - 1;

		//definindo pontos "extremos" para que "continue" do outro lado do campo
		if (this.y == 0) norte = altura_campo - 1;
		else if (this.y == altura_campo - 1) sul = 0;
		
		if (this.x == 0) oeste = largura_campo - 1;
		else if (this.x == largura_campo - 1) leste = 0;

		return [this,
			campo[norte][this.x],
			campo[norte][leste],
			campo[norte][oeste],
			campo[sul][this.x],
			campo[sul][leste],
			campo[sul][oeste],
			campo[this.y][leste],
			campo[this.y][oeste]
		];
	}

	analisa_vizinhos(campo, altura_campo, largura_campo) { //analisa pixels vizinhos e seu estado (vivo ou morto)
		let vizinhos = this.getVizinhos(campo, altura_campo, largura_campo);
		let vizinho_status = vizinhos.map(estado => { //checamos se o vizinho esta vivo
			if (estado && estado.constructor.name === 'Pixel') {
				if (estado.vivo) return 1;
				else return 0;
			} 
			else return 0;
		});

		return vizinho_status.reduce((acum, atual) => {
			return acum + atual;
		}, 0);
	}

	julgamento(campo, altura_campo, largura_campo) { //julga quem vive e morre proximo round
		let num_vizinhos = this.analisa_vizinhos(campo, altura_campo, largura_campo);

		//condições de sobrevivência para proximo round
		if (num_vizinhos === 3) this.vivo_prox_round = true;
		else if (num_vizinhos === 4) this.vivo_prox_round = this.vivo;
		else this.vivo_prox_round = false;
	}

	itera() {
		this.vivo = this.vivo_prox_round;
	}
}

