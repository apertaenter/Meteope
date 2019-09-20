export class Expediente {
    private momentoSugerido: string;

    constructor() {
        this.momentoSugerido = '00:00';
    }

    public getMomentoSugerido() {
        return this.momentoSugerido;
    }
}
