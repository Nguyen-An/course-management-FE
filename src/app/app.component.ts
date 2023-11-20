import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthentication = false;
  
  // xử lý đăng nhập
  login() {
    this.isAuthentication = true;
  }
}
