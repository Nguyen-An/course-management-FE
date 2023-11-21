import { Component } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
  courses = [
    { id: 1, name: 'Ngữ văn 1', details: '', action: '', selected: false },
    { id: 1, name: 'Ngữ văn 1', details: '', action: '', selected: false },
  ];

  isModalOpen = false;
  modalData: any;

  openModal() {
    this.isModalOpen = true;
    this.modalData = { /* Your data here */ };
  }
  onCloseModal() {
    this.isModalOpen = false;
  }
}
