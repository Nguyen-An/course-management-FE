import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../envirments/envirment.const';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected http: HttpClient;
  constructor(
    private injector: Injector,
    private alertSrv: AlertService
  ) {
    this.http = injector.get(HttpClient);
  }

  token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwMDc0NzA2NiwiZXhwIjoxNzAwODMzNDY2fQ.r0hsv0a0zhnIuSlqG65dj6d0dQlLdD0tE6MptNK6XEs';
  headers = {
    Authorization: this.token
  };
  getAll(option: any, callBack: Function): any {
    let param = {};
    param = Object.assign({size: 10}, option);

    this.http.get(baseUrl + 'user', { observe: 'response', params: param, headers: this.headers }).subscribe(
      (response) => {
        if (response.body) {
          callBack(response.body);
        }
      },
      (error) => {
        if (callBack) {
          callBack(null);
          this.alertSrv.showError('Something went wrong', 'Lỗi!');
        }
      }
    )
  }

  create(option: any, data: any, callBack: Function): any {
    this.http.post(baseUrl + `user/role/${option}`, data, { observe: 'response', headers: this.headers}).subscribe(
      (response) => {
        if (response.body) {
          callBack(response.body);
        }
      },
      (error) => {
        if (callBack) {
          callBack(null);
          this.alertSrv.showError('Something went wrong', 'Lỗi!');
        }
      }
    )
  }
}
