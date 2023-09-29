import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor() {
  }
 ngOnInit(): void {

 }
toDoList:any[]=[];

isActive:any = false;

onAdd(todoTask:any){
  console.log(todoTask);
  this.toDoList.push({id:this.toDoList.length,name:todoTask});
 }

 onRemove(id:number){
  console.log(id);
this.toDoList = this.toDoList.filter(item=>item.id!==id)
 }
}
