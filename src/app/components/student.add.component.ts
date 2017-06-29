import {Component} from '@angular/core';

@Component({
    selector: "student-add",
    templateUrl: "app/components/templates/student.add.template.html",
})
export class StudentAdd {
    studentName: String;
    setStudent(name: String):void {
        this.studentName = name;
    }
}