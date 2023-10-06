import { Component } from "@angular/core";
import { LoginForm } from "../Models/LoginForm.model";

@Component({
    selector:'app-login',
    template:`<div class="container" style="display:flex;justify-content:center">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    Login Form
                                </div>
                                <form #loginForm="ngForm">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="username">UserName</label>
                                            <input type="text" class="form-control" name="username" [(ngModel)]="login.username">
                                        </div>
                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="text" class="form-control" name="password" [(ngModel)]="login.password">
                                        </div>
                                    </div>
                                    <div class="card-footer text-center">
                                        <div class="btn btn-success">submit</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                `,
    styles:[]
})

export class LoginComponent{
login = new LoginForm("","")
}