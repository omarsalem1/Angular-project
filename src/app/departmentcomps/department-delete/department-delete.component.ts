import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnInit {
  @Output() ondeptdelete:EventEmitter<Number>=new EventEmitter<Number>()
@Input() dept:Department=new Department(-1," ",-1)
  constructor() { }
confirm(id:Number){
  this.ondeptdelete.emit(id)
}
  ngOnInit(): void {
  }

}
