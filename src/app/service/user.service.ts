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

  getAll(option: any, callBack: Function): any {
    let param = {};
    param = Object.assign({size: 10}, option);

    this.http.get(baseUrl + 'user', { observe: 'response', params: param }).subscribe(
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
