class Carro {
    cor: string = ''
    marca: string = ''
    modelo: string = ''
    ano: number = 0
    potencia: number = 0
}
const fusca = new Carro()
fusca.ano = 1970
fusca.cor = 'Preto'
fusca.marca = 'Volkswagem'
fusca.modelo = 'Fusca'
fusca.potencia = 90

const fusca2 = new Carro()
fusca2.ano = 1970
fusca2.cor = 'Branco'
fusca2.marca = 'Volkswagem'
fusca2.modelo = 'Fusca'
fusca2.potencia = 100

console.log(fusca, fusca2);
