import { Component } from "@angular/core";

@Component({
    styleUrls:[],
    selector:'app-route3',
    template:`
    <div class="container " style="display: flex;justify-content:center">
        <div class="row">
            <div class="card" style="width: 500px;">
                <div class="card-header">
                    Registration Form
                </div>
                <form #SignUpForm="ngForm">
                    <div class="card-body">
                        <div class="form-group">
                            <label for='name' >Name : </label>
                            <input type="text" class="form-control"ngModel name='name'/>
                        </div>
                        <div class="form-group">
                            <label for='roll' >Roll num : </label>
                            <input type="text" class="form-control"ngModel name='roll'/>
                        </div>
                        <div class="form-group">
                            <label for='phone' >Phone num : </label>
                            <input type="text" class="form-control"ngModel name='phone'/>
                        </div>
                        <div class="form-group">                    
                            <label for='mail' >Email : </label>
                            <input type="mail" class="form-control"ngModel name='mail'/>
                        </div>
                        <div class="form-group">                    
                            <label for='pass' >Password : </label>
                            <input type="password" class="form-control"ngModel name='pass'/>
                        </div>
                    </div>
                    <div class="card-footer text-center">
                        <div class="btn btn-success">submit</div>
                    </div>
                </form>
            </div>
        </div>
       
    </div>
    `
})

export class Route3Component{
    

}