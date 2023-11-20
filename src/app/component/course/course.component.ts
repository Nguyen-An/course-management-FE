import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  students = [
    { id: 1, name: 'Ngữ văn 1', price: '1000000.0', type: 'Khoá video', details: '', action: '', selected: false },
    { id: 2, name: 'Ngữ văn 2', price: '1000000.0', type: 'Khoá video', details: '', action: '', selected: false },
    { id: 3, name: 'Ngữ văn 3', price: '1000000.0', type: 'Khoá video', details: '', action: '', selected: false },
    { id: 4, name: 'Ngữ văn 4', price: '1000000.0', type: 'Khoá video', details: '', action: '', selected: false },
    { id: 5, name: 'Ngữ văn 5', price: '1000000.0', type: 'Khoá video', details: '', action: '', selected: false },
    { id: 6, name: 'Ngữ văn 6', price: '1000000.0', type: 'Khoá video', details: '', action: '', selected: false },
    { id: 7, name: 'Ngữ văn 7', price: '1000000.0', type: 'Khoá video', details: '', action: '', selected: false },
    { id: 8, name: 'Ngữ văn 8', price: '1000000.0', type: 'Khoá video', details: '', action: '', selected: false },
  ];

  selectAll(event: any): void {
    const checked = event.target.checked;
    this.students.forEach(student => student.selected = checked);
  }

  isModalOpen = false;
  modalData: any;

  openStudentModal() {
    this.isModalOpen = true;
    this.modalData = { /* Your data here */ };
  }

  onCloseModal() {
    this.isModalOpen = false;
  }
}
