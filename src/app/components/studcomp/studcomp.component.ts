import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student'

@Component({
  selector: 'app-studcomp',
  templateUrl: './studcomp.component.html',
  styleUrls: ['./studcomp.component.css']
})
export class StudcompComponent {
  showflag = true;
  showedit=true;

  nstd: Student = new Student("", 100, 15)
  estd: Student = new Student("", 100, 15)
  stds: Student[] = [
    new Student("omar", 1, 23),
    new Student("ali", 2, 25),
    new Student("ahmed", 3, 24)
  ]
  show() {
    if (this.showflag == true) { this.showflag = false; }
    else { this.showflag = true }

  }
  addstud() {
    this.stds.push(new Student(this.nstd.name, this.nstd.id, this.nstd.age));
  }
  deletestud(id: number) {
    if (confirm("are you sure?")) {
      for (let i = 0; i < this.stds.length; i++) {
        if (this.stds[i].id == id) {
          this.stds.splice(i, 1);
        }
      }
    } }
    
    editstud(){
    for (let i = 0; i < this.stds.length; i++) {
      if (this.stds[i].id == this.estd.id) {
        this.stds[i].name=this.estd.name;
        this.stds[i].age=this.estd.age;

      }}}
      showeditf(id:number) {
        for (let i = 0; i < this.stds.length; i++) {
          if (this.stds[i].id == id) {
            this.estd.id=this.stds[i].id;
            this.estd.name=this.stds[i].name;
            this.estd.age=this.stds[i].age;
            
          
           
         
    
          }}

        if (this.showedit == true) { this.showedit = false; }
        else { this.showedit = true }
    
      }

 





}
