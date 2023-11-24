import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthentication = false;
  username = '';
  password = '';
  token: any;

  constructor(
    private authSrv: AuthService
  ){}

  ngOnInit(){
    this.authSrv.isAuthentication.subscribe(value => this.isAuthentication = value);
    // this.authSrv.isAuthentication.next(true);
  }
  
  // xử lý đăng nhập
  login() {
    this.authSrv.login(
      {username: this.username, password: this.password},
      (res: any) => {
        if(res){
          this.isAuthentication = true;
          this.authSrv.isAuthentication.next(true);
        }
      }
    )
  }
}
