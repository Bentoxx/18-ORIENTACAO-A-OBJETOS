type TCarro = {
    cor: string
    marca: string
    modelo: string
    ano: number
    potencia?: number
}
class Carro {
    cor: string 
    marca: string 
    modelo: string 
    ano: number
    potencia: number
    constructor( carro: TCarro) {
        this.cor = carro.cor
        this.marca = carro.marca
        this.modelo = carro.modelo
        this.ano = carro.ano
        this.potencia = carro.potencia ?? 90
    }
    
}
const novoCarro = {
    cor: 'Preto',
    ano: 1970,
    marca: 'Volkswagem',
    modelo: 'Fusca',
    potencia: 120
}
const fusca = new Carro(novoCarro)
// fusca.ano = 1970
// fusca.cor = 'Preto'
// fusca.marca = 'Volkswagem'
// fusca.modelo = 'Fusca'
// fusca.potencia = 90
console.log(fusca);
fusca.cor = 'Branco'
console.log(fusca);
