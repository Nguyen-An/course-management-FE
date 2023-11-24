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
  lessonData: any;

  constructor(
    private lessonSrv: LessonService,
    private questionSrv: QuestionService,
    private route: ActivatedRoute,
    private documentService: DocumentService,

  ) {
    this.lessonId = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(params => this.typeId = params['type']);
  }

  ngOnInit(){
    this.getAllData();
  }

  getAllData(){
    this.lessonSrv.getDetail(this.lessonId, (res: any) => {
      if(res){
        this.lessonData = res;
        this.questions = res.questions;
      }
    })

    this.documentService.getAll(this.lessonId, (res: any) => {
      this.documents = res.documents;
      console.log(this.documents);
    })
  }

  questions: any[] = [];

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
    this.getAllData();
  }


}
