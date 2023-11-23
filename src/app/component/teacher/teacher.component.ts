import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  isModalOpen = false;
  modalData: any;

  constructor(private router: Router) {
    
  }

  students = [
    { id: 1, name: 'Vũ Hà Nhi', address: 'Ngõ 224, Nguyễn Trãi, Hà Nôi', contact: '', details: '', action: '', selected: false },
    { id: 2, name: 'Vũ Hà Nhi', address: 'Ngõ 224, Nguyễn Trãi, Hà Nôi', contact: '', details: '', action: '', selected: false },
    { id: 3, name: 'Vũ Hà Nhi', address: 'Ngõ 224, Nguyễn Trãi, Hà Nôi', contact: '', details: '', action: '', selected: false },
    { id: 4, name: 'Vũ Hà Nhi', address: 'Ngõ 224, Nguyễn Trãi, Hà Nôi', contact: '', details: '', action: '', selected: false },
    { id: 5, name: 'Vũ Hà Nhi', address: 'Ngõ 224, Nguyễn Trãi, Hà Nôi', contact: '', details: '', action: '', selected: false },
    { id: 6, name: 'Vũ Hà Nhi', address: 'Ngõ 224, Nguyễn Trãi, Hà Nôi', contact: '', details: '', action: '', selected: false },
    { id: 7, name: 'Vũ Hà Nhi', address: 'Ngõ 224, Nguyễn Trãi, Hà Nôi', contact: '', details: '', action: '', selected: false },
    { id: 8, name: 'Vũ Hà Nhi', address: 'Ngõ 224, Nguyễn Trãi, Hà Nôi', contact: '', details: '', action: '', selected: false },
    { id: 9, name: 'Vũ Hà Nhi', address: 'Ngõ 224, Nguyễn Trãi, Hà Nôi', contact: '', details: '', action: '', selected: false },
  ];

  selectAll(event: any): void {
    const checked = event.target.checked;
    this.students.forEach(student => student.selected = checked);
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
        title: 'Thêm khoá giáo viên mới',
        type: 'CREATE'
      };
    }

    this.isModalOpen = true;
  }

  onCloseModal() {
    this.isModalOpen = false;
  }

  onDetail(id: any) {
    this.router.navigate(['/teacher/detail/', id], { queryParams: { type: 1 } });
  }
}
