class Lampada {
    private potencia: number
    private estado: boolean
    constructor(watts: number) {
        this.potencia = watts
        this.estado = false
    }
    public ligar(): void {
        this.estado = true
    }
    public desligar(): void {
        this.estado = false
    }
    medirPotencia(): number {
        return this.potencia
    }
}
const lampadaLed= new Lampada(50)       
console.log(lampadaLed);
console.log(lampadaLed.medirPotencia());
lampadaLed.ligar();
console.log(lampadaLed);
lampadaLed.desligar();
console.log(lampadaLed);



