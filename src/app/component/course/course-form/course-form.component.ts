// student-modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
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


  
  userData: any;
  error: string = '';

  constructor(
    private courseService: CourseService,
    private alertSrv: AlertService
  ) {}

  name: string = '';
  price: number = 0;
  courseCategory: string = 'programming';

  categories: string[] = ['programming', 'design', 'business'];

  onSubmit() {
    // Thực hiện các thao tác lưu trữ dữ liệu ở đây
    console.log(
      'Đã submit:',
      this.name,
      this.price,
      this.courseCategory
    );
    this.alertSrv.showSuccess('Thêm mới thành công', 'Thành công!');
  }

  ngOnChanges() {
    
    if (this.data?.type == 'UPDATE') {

      this.name = this.data.record.name;
      this.price = this.data.record.price;
    }
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

  onCloseModal() {
    this.name= '';
    this.price = 0;
    this.courseCategory= 'programming';
    this.closeModal.emit();
  }
}
