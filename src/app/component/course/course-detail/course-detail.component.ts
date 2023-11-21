import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
  constructor(private router: Router) {
    
  }

  courses = [
    { id: 1, name: 'Ngữ văn 1', details: '', action: '', selected: false },
    { id: 2, name: 'Ngữ văn 1', details: '', action: '', selected: false },
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

  onSetupLesson(id: any) {
    this.router.navigate(['/course/detail/setup-lesson', id], { queryParams: { type: 1 } });
  }
}
