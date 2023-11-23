import { Component } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {
  students = [
    { id: 1, digitalTransactions: '#1234', implementationDate: '11/11/2023', nameCourse: 'Khoá ngữ văn 1', money: '1000000.0', status: 'Thành công'},
    { id: 2, digitalTransactions: '#1234', implementationDate: '11/11/2023', nameCourse: 'Khoá ngữ văn 1', money: '1000000.0', status: 'Thành công'},
    { id: 3, digitalTransactions: '#1234', implementationDate: '11/11/2023', nameCourse: 'Khoá ngữ văn 1', money: '1000000.0', status: 'Thành công'},
    { id: 4, digitalTransactions: '#1234', implementationDate: '11/11/2023', nameCourse: 'Khoá ngữ văn 1', money: '1000000.0', status: 'Thành công'},
    { id: 5, digitalTransactions: '#1234', implementationDate: '11/11/2023', nameCourse: 'Khoá ngữ văn 1', money: '1000000.0', status: 'Thành công'},
    { id: 6, digitalTransactions: '#1234', implementationDate: '11/11/2023', nameCourse: 'Khoá ngữ văn 1', money: '1000000.0', status: 'Thành công'},
    { id: 7, digitalTransactions: '#1234', implementationDate: '11/11/2023', nameCourse: 'Khoá ngữ văn 1', money: '1000000.0', status: 'Thành công'},
    { id: 8, digitalTransactions: '#1234', implementationDate: '11/11/2023', nameCourse: 'Khoá ngữ văn 1', money: '1000000.0', status: 'Thành công'},
  ];
}
