import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  deleteflag=false;
  editflag=false
  deptdelete:Department= new Department(0, " ",-1); 
  deptedit:Department= new Department(0, " ",-1); 
dept1:Department= new Department(0, " ",-1);
  depts:Department[]=[
    new Department(1,"PD",50),
    new Department(2,"ML",60),
    new Department(3,"AI",70),
    new Department(4,"EL",80),

  ]
  showcreateflag=true;
  showcreate(){
    if(this.showcreateflag==true){
      this.showcreateflag=false
    }else {this.showcreateflag=true}
    
  }
  add( d:Department){
    this.depts.push(new Department(d.id,d.name,d.cap));

  }
  showdelete(id:Number){
    this.deleteflag=true;
  for (let i = 0; i < this.depts.length; i++) {
    if(this.depts[i].id==id){
      this.deptdelete.id=this.depts[i].id
      this.deptdelete.name=this.depts[i].name
      this.deptdelete.cap=this.depts[i].cap
      break;
    }
  }
}

delete(id:Number){
  
for (let i = 0; i < this.depts.length; i++) {
  if(this.depts[i].id==id){
    this.depts.splice(i,1);
    this.deleteflag=false
    break
  }}}
  showedit(id:Number){
    this.editflag=true
    for (let i = 0; i < this.depts.length; i++) {
      if(this.depts[i].id==id){
        this.deptedit.id=this.depts[i].id
      this.deptedit.name=this.depts[i].name
      this.deptedit.cap=this.depts[i].cap
      break

      }}
    


  }
  edit(d:Department){
    for (let i = 0; i < this.depts.length; i++) {
      if(this.depts[i].id==d.id){
        this.depts[i].name=d.name
       this.depts[i].cap=d.cap
        this.editflag=false
        break
      }}

  }
  ngOnInit(): void {
  }

}
