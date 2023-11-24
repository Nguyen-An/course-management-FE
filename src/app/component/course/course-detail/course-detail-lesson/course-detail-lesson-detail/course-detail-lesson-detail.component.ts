import { Component } from '@angular/core';

@Component({
  selector: 'app-course-detail-lesson-detail',
  templateUrl: './course-detail-lesson-detail.component.html',
  styleUrls: ['./course-detail-lesson-detail.component.scss']
})
export class CourseDetailLessonDetailComponent {


  questions = [
    { id: 1, question: 'Câu hỏi 1', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
    { id: 2, question: 'Câu hỏi 2', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
    { id: 3, question: 'Câu hỏi 3', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
    { id: 4, question: 'Câu hỏi 4', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
    { id: 5, question: 'Câu hỏi 5', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
    { id: 6, question: 'Câu hỏi 6', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
  ];

  documents = [
    { id: 1, name: 'tài liệu 1', nameFile: 'google', selected: false },
    { id: 2, name: 'tài liệu 2', nameFile: 'google', selected: false },
    { id: 3, name: 'tài liệu 3', nameFile: 'google', selected: false },
    { id: 4, name: 'tài liệu 4', nameFile: 'google', selected: false },
  ]

  selectAll(event: any): void {
    const checked = event.target.checked;
    this.questions.forEach(student => student.selected = checked);
  }

  selectAll2(event: any): void {
    const checked = event.target.checked;
    this.questions.forEach(student => student.selected = checked);
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


}
