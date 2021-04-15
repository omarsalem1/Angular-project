import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
@Output()  ondeptadd:EventEmitter<Department>=new EventEmitter<Department>()
newdept:Department=new Department(-1," ",-1)
  constructor() { }
createdept(){
  this.ondeptadd.emit(this.newdept)
}
  ngOnInit(): void {
  }

}
