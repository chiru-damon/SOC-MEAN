import { Component } from "@angular/core";

@Component({
    styleUrls:[],
    selector:'app-route2',
    template:`
    <div class="container " style="display: flex;justify-content:center">
        <div class="row">
            <div class="card" style="width: 500px;">
                <div class="card-header">
                    Registration Form
                </div>
                <div class="card-body">
                    <form >
                        <div class="form-group">
                            <label for='name' >Name : </label>
                            <input type="text" class="form-control" #name/>
                        </div>
                        <div class="form-group">
                            <label for='roll' >Roll num : </label>
                            <input type="text" class="form-control" #roll/>
                        </div>
                        <div class="form-group">
                            <label for='phone' >Phone num : </label>
                            <input type="text" class="form-control" #phone/>
                        </div>
                        <div class="form-group">                    
                            <label for='mail' >Email : </label>
                            <input type="mail" class="form-control" #mail/>
                        </div>
                        <div class="form-group">                    
                            <label for='pass' >Password : </label>
                            <input type="password" class="form-control" #pass/>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-center">
                    <div class="btn btn-success" (click)="display(name,roll,phone,mail)">submit</div>
                </div>
            </div>
        </div>
       
    </div>
    `
})

export class Regis2Component{
    display(...a:any){
        for (let i of a) {
            console.log(i.value)
        }
    }

}