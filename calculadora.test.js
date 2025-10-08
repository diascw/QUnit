QUnit.module("calculadora - testes de Soma", function () {
  QUnit.test("deve somar dois numeros positivos", function (assert) {
    assert.equal(somar(5, 3), 8, "5 + 3 deve ser 8");
  });

  QUnit.test("deve somar um numero positivo e um negativo", function (assert) {
    assert.equal(somar(10, -2), 8, "10 + (-2) deve ser 8");
  });
});

QUnit.module("calculadora - testes de subtracao", function () {
  QUnit.test("deve subtrair dois numeros positivos", function (assert) {
    assert.equal(subtrair(10, 2), 8, "10 - 2 deve ser 8");
  });

  QUnit.test("deve retornar um numero negativo", function (assert) {
    assert.equal(subtrair(5, 10), -5, "5 - 10 deve ser -5");
  });
});

QUnit.module("calculadora - testes de multiplicacao", function () {
  QUnit.test("deve multiplicar dois numeros positivos", function (assert) {
    assert.equal(multiplicar(4, 5), 20, "4 * 5 deve ser 20");
  });

  QUnit.test("deve multiplicar por zero", function (assert) {
    assert.equal(
      multiplicar(100, 0),
      0,
      "qualquer num multiplicado por 0 deve ser 0"
    );
  });
});

QUnit.module("calculadora - testes de divisao", function () {
  QUnit.test("deve dividir dois numeros positivos", function (assert) {
    assert.equal(dividir(10, 2), 5, "10 / 2 deve ser 5");
  });

  QUnit.test("deve lancar um erro ao dividir por zero", function (assert) {
    // assert.throws verifica se a função lança um erro.

    assert.throws(
      function () {
        dividir(5, 0);
      },
      new Error("nao eh possivel dividir por zero."),
      "dividir por zero deve lançar um erro."
    );
  });
});
