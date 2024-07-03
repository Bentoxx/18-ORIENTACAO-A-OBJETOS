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
const fusca = new Carro({
    cor: 'Preto',
    marca: 'Volkswagem',
    modelo: 'Fusca',
    ano: 1970,
    potencia: 120
})
// fusca.ano = 1970
// fusca.cor = 'Preto'
// fusca.marca = 'Volkswagem'
// fusca.modelo = 'Fusca'
// fusca.potencia = 90

console.log(fusca);
