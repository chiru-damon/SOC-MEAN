import {Component, ViewChild} from "@angular/core"

@Component({
    selector:'app-example',
     template:`<h1>Hello Inline Template<h1>
          <div [class]="c1" (mouseover)="Change()">Click Me</div>  
               <div [class]="c1" (click)="Change()">Click Me</div> 
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
    c1='hello'
    Change(){
        if (this.c1=='bye'){
            this.c1='hello'
        }else{
            this.c1='bye'
        }
    }   
    set(){
        console.log(this.inp.nativeElement.value)
    }
    
}