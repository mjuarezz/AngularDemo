import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>
        <button (click)="acumula( -base );"> - {{ base }} </button>
        <span> {{ numero }} </span>
        <button (click)="acumula(base);"> + {{ base }} </button>

    `
})
export class ContadorComponent {
    public title = 'Contador APP';
    public numero:number = 10;
    public base = 5;
    
    acumula (valor : number) {
      this.numero += valor;
    }
}