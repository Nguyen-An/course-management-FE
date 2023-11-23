import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-detail-lesson-detail-form',
  templateUrl: './course-detail-lesson-detail-form.component.html',
  styleUrls: ['./course-detail-lesson-detail-form.component.scss']
})
export class CourseDetailLessonDetailFormComponent {
  @Input() data: any;
  @Input() isOpen: boolean = true;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }
  
  userData: any;
  error: string = '';

  constructor(private courseService: CourseService) {}

  question: string = '';
  answer1: string = '';
  answer2: string = '';
  answer3: string = '';
  answer4: string = '';
  correctAnswer: string = '';

  categories: string[] = ['programming', 'design', 'business'];

  onSubmit() {
    // Thực hiện các thao tác lưu trữ dữ liệu ở đây
    console.log( 'Đã submit:', this.question, this.answer1, this.answer2, this.answer3, this.answer4, this.correctAnswer,);
  }

  ngOnInit() {
    
  }
}
