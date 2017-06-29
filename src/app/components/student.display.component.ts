import { Component } from '@angular/core';

@Component({
  selector: 'student-display',
  templateUrl: 'app/components/templates/student.display.template.html',
})
export class StudentDisplay  { 
    students: Array<String>;
    constructor() {

    }

    setStudents(studentDataArray:Array<String>):void {
        this.students = studentDataArray;
    }

    getStudents():Array<String> {
        return this.students;
    }


 }