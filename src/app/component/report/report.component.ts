import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  students: any[] = [
    {name: 'Vũ Hà Nhi', address: 'Ngõ 224, Nguyễn Trãi, Hà Nô', date: '03/09/2023', status: 'Đang chờ', selected: false},
    {name: 'Phạm Ngọc Bảo Châu', address: 'Ngõ 224, Nguyễn Trãi, Hà Nô', date: '03/09/2023', status: 'Đang chờ', selected: false},
  ];
  paging: any = {};
  page = 1;
  name: string = '';
  keySearch: string = '';

  isModalOpen = false;
  modalData: any;

  option = 'option1';

  constructor(
    private alertSrv: AlertService,
    private userSrv: UserService,
    private router: Router
  ){}

  ngOnInit() {
  }

  openModal(record?: any) {
    if (record) {
      this.modalData = {
        record: record,
        title: 'Chỉnh sửa thông tin',
        type: 'UPDATE'
      };
    } else {
      this.modalData = {
        title: 'Thêm khoá học mới',
        type: 'CREATE'
      };
    }

    this.isModalOpen = true;
  }

  getAllData(){
   
  }

  selectAll(event: any): void {
    const checked = event.target.checked;
    this.students.forEach(student => student.selected = checked);
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

  onDetail(id: any) {
    this.router.navigate(['/student/detail/', id], { queryParams: { type: 1 } });
  }

  onCloseModal() {
    this.isModalOpen = false;
  }
}
