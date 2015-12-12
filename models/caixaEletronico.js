
var CaixaEletronico = function() {
	var self = {};
	var notasValidas = [100, 50, 20, 10, 5, 2];

	var descrescente = function(a, b){
		return b-a;
	};

	self.sacar = function(valor) {
		var notasDoSaque = [];

		var ehImpar = (valor % 2) != 0;
		var naoEhDivisivelPor5 = (valor % 5) != 0;
		var nota2 = 2;

		while( valor >= nota2 && ehImpar && naoEhDivisivelPor5 ) {
			valor -= nota2;
			notasDoSaque.push(nota2);

			ehImpar = (valor % 2) != 0;
			naoEhDivisivelPor5 = (valor % 5) != 0;
		}

		notasValidas.forEach(function(nota){
			var quantidadeDeNotas = parseInt(valor / nota);
			valor -= nota * quantidadeDeNotas;

			for(var i=0; i < quantidadeDeNotas; i++)
				notasDoSaque.push(nota);
		});


		if(valor > 0)
			throw new Error('Não é possível sacar esse valor');

		return notasDoSaque.sort(descrescente);
	};

	return self;
};

module.exports = CaixaEletronico;