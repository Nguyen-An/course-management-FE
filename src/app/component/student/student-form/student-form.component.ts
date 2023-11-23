import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  @Input() data: any;
  @Input() isOpen: boolean = true;
  @Output() closeModal = new EventEmitter<void>();
  
  userData: any;
  error: string = '';

  constructor(private courseService: CourseService) {}

  name: string = '';
  address: string = '';
  phone: string = '';
  email: string = '';
  courseCategory: string = 'programming';

  categories: string[] = ['programming', 'design', 'business'];

  onSubmit() {
    // Thực hiện các thao tác lưu trữ dữ liệu ở đây
    console.log(
      'Đã submit:',
      this.name,
      this.address,
      this.phone,
      this.email,
      this.courseCategory
    );
  }

  ngOnChanges() {
    
    if (this.data?.type == 'UPDATE') {

      // this.name = this.data.record.name;
      // this.price = this.data.record.price;
    }
  }

  ngOnInit() {
;
  }

  onCloseModal() {
    this.name= '';
    this.address = '';
    this.phone= '';
    this.email = '';
    this.courseCategory= 'programming';
    this.closeModal.emit();
  }
}
