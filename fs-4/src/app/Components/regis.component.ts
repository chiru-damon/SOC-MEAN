import { Component } from "@angular/core";
import { SignUpForm } from "../Models/SignUpForm.model";

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
                    {{SignUpForm.value |json}}
                    <br/>
                    {{signup | json}}
                    <div class="card-body">
                        <div class="form-group">
                            <label for='name' >Name : </label>
                            <input type="text" class="form-control" [(ngModel)]="signup.name" name='name'/>
                        </div>
                        <div class="form-group">
                            <label for='username' >Roll num : </label>
                            <input type="text" class="form-control" [(ngModel)]="signup.user" name='user'/>
                        </div>
                        <div class="form-group">
                            <label for='phone' >Phone num : </label>
                            <input type="tel" class="form-control"[(ngModel)]="signup.phone" name='phone'/>
                        </div>
                        <div class="form-group">                    
                            <label for='mail' >Email : </label>
                            <input type="mail" class="form-control"[(ngModel)]="signup.mail" name='mail'/>
                        </div>
                        <div class="form-group">                    
                            <label for='pass' >Password : </label>
                            <input type="password" class="form-control"[(ngModel)]="signup.pass" name='pass'/>
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

export class RegisComponent{
    signup = new SignUpForm("","","","","")
}