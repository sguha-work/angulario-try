import { Component } from '@angular/core';

@Component({
  selector: 'student-display',
  templateUrl: 'app/components/templates/student.display.template.html',
})
export class StudentDisplay  { 
    
    constructor() {

    }

    getStudents():Students {
        return Students.names;
    }


 }