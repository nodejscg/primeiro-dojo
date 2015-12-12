var path = require('path');
var should = require('should');
var CaixaEletronico = require(path.resolve('./models/caixaEletronico'));

describe('Caixa eletrônico', function(){

	var caixa;
	var notasExistentes = [100, 50, 20, 10, 5, 2];

	beforeEach(function(){
		caixa = new CaixaEletronico();
	});

	it('Deve retornar as notas existentes quando sacar', function(){
		notasExistentes.forEach(function(valorASacar){
			var resultado = caixa.sacar(valorASacar);
			resultado.should.have.length(1);
			resultado.should.containDeepOrdered([valorASacar]);
		});
	});

	it('Deve retornar uma nota de cada quando sacar 187', function() {
		var resultado = caixa.sacar(187);

		resultado.should.have.length(6);
		resultado.should.containDeepOrdered(notasExistentes);
	});

	it('Deve retornar 2 notas de 100 quando sacar 200', function(){
		var resultado = caixa.sacar(200);

		resultado.should.have.length(2);
		resultado.should.containDeepOrdered([100,100]);
	});

	it('Deve sacar com 2 tipos de nota', function(){
		var resultado = caixa.sacar(30);

		resultado.should.have.length(2);
		resultado.should.containDeepOrdered([20,10]);
	});

	it('Deve retornar uma exceção quando tentar sacar um valor que não é possivel', function(){
		(function(){
			caixa.sacar(3);
		}).should.throw('Não é possível sacar esse valor');
	});

	it('Deve sacar com 3 tipos de nota', function(){
		var resultado = caixa.sacar(201);

		resultado.should.have.length(8);
		resultado.should.containDeepOrdered([100,50,20,20,5,2,2,2]);
	});
});