import {Component, ViewChild} from "@angular/core"

@Component({
    selector:'app-example',
     template:`<h1>Hello Inline Template<h1>
          <div [class]="color" (mouseover)="Change()">Click Me</div>  
               <div [class]="color" (click)="Change()">Click Me</div> 
               <input type='text' #v >
               <button (click)="set()"></button>  `,
    styles:[`h1{
                color:red;
                text-align:center;
            }
            div{
                font-size:30px;
                
            }
            .hello{
                color:green;
            }
            .bye{
                color:red
            }`,
        ]
})

export class ExampleComponent{

    @ViewChild('v') inp: any |undefined;
    color='hello'
    Change(){
        if (this.color=='bye'){
            this.color='hello'
        }else{
            this.color='bye'
        }
    }   
    set(){
        console.log(this.inp.nativeElement.value)
    }
    
}