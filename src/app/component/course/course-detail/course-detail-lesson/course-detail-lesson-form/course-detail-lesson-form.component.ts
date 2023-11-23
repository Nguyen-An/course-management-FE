import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-detail-lesson-form',
  templateUrl: './course-detail-lesson-form.component.html',
  styleUrls: ['./course-detail-lesson-form.component.scss']
})
export class CourseDetailLessonFormComponent {
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
    
  }
}
