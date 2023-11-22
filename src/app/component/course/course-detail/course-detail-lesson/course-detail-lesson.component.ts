import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-detail-lesson',
  templateUrl: './course-detail-lesson.component.html',
  styleUrls: ['./course-detail-lesson.component.scss']
})
export class CourseDetailLessonComponent {


  students = [
    { id: 1, name: 'Tên bài 1', link: 'Link video 1', describeLesson: 'Miêu tả 1', details: '', action: '', selected: false },
    { id: 2, name: 'Tên bài 2', link: 'Link video 2', describeLesson: 'Miêu tả 2', details: '', action: '', selected: false },
    { id: 3, name: 'Tên bài 3', link: 'Link video 3', describeLesson: 'Miêu tả 3', details: '', action: '', selected: false },
    { id: 4, name: 'Tên bài 4', link: 'Link video 4', describeLesson: 'Miêu tả 4', details: '', action: '', selected: false },
    { id: 5, name: 'Tên bài 5', link: 'Link video 5', describeLesson: 'Miêu tả 5', details: '', action: '', selected: false },
    { id: 6, name: 'Tên bài 6', link: 'Link video 6', describeLesson: 'Miêu tả 6', details: '', action: '', selected: false },
    { id: 7, name: 'Tên bài 7', link: 'Link video 7', describeLesson: 'Miêu tả 7', details: '', action: '', selected: false },
  ];

  selectAll(event: any): void {
    const checked = event.target.checked;
    this.students.forEach(student => student.selected = checked);
  }

  isModalOpen = false;
  modalData: any;

  openModal(record?: any) {
    if (record) {
      this.modalData = {
        record: record,
        title: 'Chỉnh sửa thông tin',
        type: 'UPDATE'
      };
    } else {
      this.modalData = {
        title: 'Thêm bài học mới',
        type: 'CREATE'
      };
    }

    this.isModalOpen = true;
  }
  onCloseModal() {
    this.isModalOpen = false;
  }

  onDetail() {
    
  }

}
