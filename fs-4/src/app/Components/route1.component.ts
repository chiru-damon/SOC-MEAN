import { Component ,OnInit} from "@angular/core";

@Component({
    selector:'arr-route1',
    template:`<div *ngFor="let i of  keys" >
                    <h4>{{i}}--{{arr[i]}}</h4>
                </div>`,
    styles:[]
})

export class Route1Component implements OnInit{
    arr :any={
        1:'one',
        2:'two'
    }
    ngOnInit(){
        console.log(this.arr[1])
    }
    keys=Object.keys(this.arr)
}