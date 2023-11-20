import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
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
}
