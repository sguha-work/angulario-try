import {Component} from '@angular/core';
import {Student} from './student';


@Component({
    selector: "student-add",
    templateUrl: "app/components/templates/student.add.template.html",
})
export class StudentAdd {
    students: Array<Student>;
    public studentName: String;
    constructor() {
        this.studentName="";
    }
    public setStudent():void {alert(this.studentName);
        let student: Student;
        student = new Student(this.studentName);
        this.students.push(student);
    }
}