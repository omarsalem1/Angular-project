import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
@Input() dept:Department=new Department(-1," ",-4);
@Output() ondeptedit:EventEmitter<Department>=new EventEmitter<Department>();
  constructor() { }
  save(){
    this.ondeptedit.emit(this.dept);
  }

  ngOnInit(): void {
  }

}
