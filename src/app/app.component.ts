import { Component } from '@angular/core';

import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Suraj ToDo App:)';

  todoValue:string;
  list :Todo[];

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.list=[];
    this.todoValue="";
  }

  addItem(){
    if(this.todoValue !== ""){
      const newItem : Todo ={
        id: Date.now(),
        values:this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue= "";
  }

  deleteItem(id:number){
    this.list=this.list.filter(item => item.id!==id);  
  }
}
