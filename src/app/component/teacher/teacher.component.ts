import { Component } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  teachers: any[] = [];
  paging: any = {};
  page = 1;
  name: string = '';
  keySearch: string = '';

  constructor(
    private alertSrv: AlertService,
    private userSrv:UserService
  ){}

  ngOnInit() {
    this.getAllData();
  }

  getAllData(){
    let option = {roleId: 2, sortDir: 'asc', page: this.page, userName: this.keySearch};
    this.userSrv.getAll(option, (res: any) => {
      this.teachers = res.elements;
      this.paging = res.paging;
    })
  }

  selectAll(event: any): void {
    const checked = event.target.checked;
    this.teachers.forEach(teacher => teacher.selected = checked);
  }

  refreshData(){
    this.getAllData();
    this.alertSrv.showSuccess('Tải lại danh sách thành công', 'Thành công!');
  }
  onSearch(){
    this.keySearch = this.name;
    this.getAllData();
  }
  nextPage(){
    if (this.paging.page == this.paging.totalPage){
      this.alertSrv.showError('Không thể mở page tiếp theo', 'Lỗi!')
    }else{
      this.page++;
      this.getAllData();
    }
  }

  previousPage(){
    if (this.paging.page == 1){
      this.alertSrv.showError('Không thể mở page trước đó', 'Lỗi!')
    }else{
      this.page--;
      this.getAllData();
    }
  }
}
