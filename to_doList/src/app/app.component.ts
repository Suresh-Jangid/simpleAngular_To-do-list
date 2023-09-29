import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To_Do List with Angular14';

  List:any[]=[];

  addTask(item:any){
    this.List.push({id:this.List.length,name:item});
    console.warn(this.List);
  }

  removeTask(id:number){
    console.warn(id);
    debugger
    this.List=this.List.filter(item=>item.id!==id);
  }
}
