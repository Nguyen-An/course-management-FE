import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { StudentComponent } from './component/student/student.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { CourseComponent } from './component/course/course.component';
import { ReportComponent } from './component/report/report.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CourseFormComponent } from './component/course/course-form/course-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailComponent } from './component/course/course-detail/course-detail.component';
import { CourseDetailChaperFormComponent } from './component/course/course-detail/course-detail-chaper-form/course-detail-chaper-form.component';
import { CourseDetailLessonComponent } from './component/course/course-detail/course-detail-lesson/course-detail-lesson.component';
import { CourseDetailLessonFormComponent } from './component/course/course-detail/course-detail-lesson/course-detail-lesson-form/course-detail-lesson-form.component';
import { CourseDetailLessonDetailComponent } from './component/course/course-detail/course-detail-lesson/course-detail-lesson-detail/course-detail-lesson-detail.component';
import { CourseDetailLessonDetailFormComponent } from './component/course/course-detail/course-detail-lesson/course-detail-lesson-detail/course-detail-lesson-detail-form/course-detail-lesson-detail-form.component';
import { StudentFormComponent } from './component/student/student-form/student-form.component';
import { StudentDetailComponent } from './component/student/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    TeacherComponent,
    CourseComponent,
    ReportComponent,
    CourseFormComponent,
    CourseDetailComponent,
    CourseDetailChaperFormComponent,
    CourseDetailLessonComponent,
    CourseDetailLessonFormComponent,
    CourseDetailLessonDetailComponent,
    CourseDetailLessonDetailFormComponent,
    StudentFormComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
