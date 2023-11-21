import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-detail-chaper-form',
  templateUrl: './course-detail-chaper-form.component.html',
  styleUrls: ['./course-detail-chaper-form.component.scss']
})
export class CourseDetailChaperFormComponent {
  @Input() data: any;
  @Input() isOpen: boolean = true;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }

  onSubmit() {
    // Thực hiện các thao tác lưu trữ dữ liệu ở đây
    console.log(
      'Đã submit:',
      this.courseName,
      this.coursePrice,
    );
  }

  courseName: string = '';
  coursePrice: string = '';
}
