import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DocumentService } from 'src/app/service/document.service';
import { LessonService } from 'src/app/service/lesson.service';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-course-detail-lesson-detail',
  templateUrl: './course-detail-lesson-detail.component.html',
  styleUrls: ['./course-detail-lesson-detail.component.scss']
})
export class CourseDetailLessonDetailComponent {

  typeId: any;
  lessonId: any;

  constructor(
    private lessonSrv: LessonService,
    private questionSrv: QuestionService,
    private route: ActivatedRoute,
    private documentService: DocumentService,

  ) {
    this.lessonId = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(params => this.typeId = params['type']);
  }

  ngOnInit() {

    this.lessonSrv.getDetail(this.lessonId, (res: any) => {
      if (res) {

      }
    })

    this.documentService.getAll(this.lessonId, (res: any) => {
      this.documents = res.documents;
      console.log(this.documents);
    })
  }

  questions = [
    { id: 1, question: 'Câu hỏi 1', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
    { id: 2, question: 'Câu hỏi 2', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
    { id: 3, question: 'Câu hỏi 3', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
    { id: 4, question: 'Câu hỏi 4', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
    { id: 5, question: 'Câu hỏi 5', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
    { id: 6, question: 'Câu hỏi 6', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correctAnswer: 'Câu trả lời', action: '', selected: false },
  ];

  documents = [
    {
      documentId: 1,
      documentLink: "google.com",
      documentTitle: "Tài liệu tìm hiểu sâu",
    }
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

  openModalDocument(record?: any) {
    if (record) {
      this.modalData = {
        record: record,
        title: 'Chỉnh sửa thông tin',
        type: 'UPDATE'
      };
    } else {
      this.modalData = {
        title: 'Thêm bài tài liệu mới',
        type: 'CREATE'
      };
    }

    this.isModalOpen = true;
  }


  onCloseModal() {
    this.isModalOpen = false;
  }


}
