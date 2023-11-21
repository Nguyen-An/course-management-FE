// student-modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  @Input() data: any;
  @Input() isOpen: boolean = true;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }
  
  userData: any;
  error: string = '';



  constructor(private courseService: CourseService) {}

  courseName: string = '';
  coursePrice: number = 0;
  courseCategory: string = 'programming';

  categories: string[] = ['programming', 'design', 'business'];

  onSubmit() {
    // Thực hiện các thao tác lưu trữ dữ liệu ở đây
    console.log(
      'Đã submit:',
      this.courseName,
      this.coursePrice,
      this.courseCategory
    );
  }

  ngOnInit() {
    this.courseService.getUserData().subscribe(
      (data) => {
        this.userData = data;
        console.log('userData:', this.userData);
      },
      (error) => {
        this.error = 'Error loading user data.';
      }
    );
  }
}
