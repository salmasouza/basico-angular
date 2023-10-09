import { Component} from '@angular/core'


@Component({

    selector: 'hello',
    templateUrl: './hello.component.html'

    
})
export class HelloComponent {

    nome : string;
    clientes: Cliente[];

    constructor(){

      

        let fulano = new Cliente('Fulano',30);
        let cicrano = new Cliente('Cicrano',30);
        let beltrano = new Cliente('Beltrano',30);
        this.clientes = [fulano, cicrano, beltrano];
        
    }

}


class Cliente {

    constructor(

        public nome : string,
        public idade : number

    ){}


  
}