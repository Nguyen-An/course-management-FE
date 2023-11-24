import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
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
    private route: ActivatedRoute
  ){
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
  }

  questions: any[] = [];

  selectAll(event: any): void {
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
    this.getAllData();
  }


}
