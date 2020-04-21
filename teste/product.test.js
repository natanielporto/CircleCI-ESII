import Product from '../src/model/product'
import sell from '../src/service/sellProduct'

test('deve validar a baixa de estoque da venda de uma unidade', () => {
  let produto = new Product('Celular', 500, 900, 10)
  sell(produto, 1)
  expect(produto.stock).toBe(9)
})

test('deve aceitar a venda de + de uma unidade', () => {
  let produto = new Product('Celular', 500, 900, 10)
  sell(produto, 3)
  expect(produto.stock).toBe(7)
})