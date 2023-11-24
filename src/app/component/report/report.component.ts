import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';
import { ReportService } from 'src/app/service/report.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  students: any[] = [];
  courses: any[] = [];
  enrollments: any[] = [];
  paging: any = {};
  page = 1;
  name: string = '';
  keySearch: string = '';

  isModalOpen = false;
  modalData: any;

  option = 'option1';

  topic = [
    {id: 1, title: 'Báo cáo học viên'},
    {id: 2, title: 'Báo cáo khóa học'},
    {id: 3, title: 'Báo cáo đăng ký khóa học'}
  ]
  topicId = 1;

  changeTopicId(e: any){
    this.topicId = Number(e.target.value);
    this.getAllData();
  } 

  constructor(
    private alertSrv: AlertService,
    private reportSrv: ReportService,
    private router: Router,
    private datePipe: DatePipe
  ){}

  cntStudent = 0;
  cntCourse = 0;
  cntRevenue = 0; 

  ngOnInit() {
    this.getAllData();
    //handle abstract data
    this.reportSrv.student({}, (res: any) => {
      if(res){
        this.cntStudent = res.elements.length;
        res.elements.forEach((item: any) => {
          this.cntCourse += item.totalCourse;
          this.cntRevenue += item.totalPay;
        })
      }
    });
  }

  getAllData(){
    let option = {sortDir: 'desc', page: this.page, userName: this.keySearch};
    switch(this.topicId){
      case 1:{
        option = Object.assign({size: 10}, option);
        this.reportSrv.student(option, (res: any) => {
          if(res){
            this.students = res.elements;
            this.paging = res.paging;
          }
        });
        break;
      }
      case 2:{
        this.reportSrv.course(option, (res: any) => {
          if(res){
            this.courses = res.elements;
            this.paging = res.paging;
          }
        });
        break;
      }
      case 3:{
        option = Object.assign({size: 10}, option);
        this.reportSrv.class(option, (res: any) => {
          if(res){
            this.enrollments = res.elements;
            this.paging = res.paging;
            this.enrollments.forEach(item => {
              if(item.status == 1) item.showStatus = 'Đã tham gia';
              if(item.status == 1) item.showStatus = 'Đã hủy';
              if(item.status == 1) item.showStatus = 'Chờ thanh toán';
              item.showTime = this.datePipe.transform(item.created, 'dd/MM/yyyy', 'Asia/Ho_Chi_Minh');
            })
          }
        });
        break;
      }
    }
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

  selectAll(event: any): void {
    const checked = event.target.checked;
    this.students.forEach(student => student.selected = checked);
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
