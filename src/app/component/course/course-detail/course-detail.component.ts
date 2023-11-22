import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
  type: number = 0;

  courses = [
    { id: 1, name: 'Ngữ văn 1', details: '', action: '', selected: false },
    { id: 2, name: 'Ngữ văn 1', details: '', action: '', selected: false },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // Sử dụng paramMap để lấy giá trị của 'type' từ queryParams
    this.route.queryParams.subscribe(params => {
      this.type = params['type'];
      console.log('Type ID:', this.type);
    });
  }


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
