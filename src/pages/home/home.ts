import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable }        from 'rxjs/Observable';

import { Todo } from '../../shared/Todo';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  quehaceres: Todo[] = [
    {
      description:"Lavar los platos",
      done:true
    },
    {
      description:"Trapear la sala",
      done: false
    },
    {
      description:"Quitar el polvo de los libros",
      done:true
    },
    {
      description:"Tender las camas",
      done:false
    }
  ];
  buttons = [
    {
      type: 'done',
      class: ''
    }, {
      type: 'pending',
      class: ''
    }, {
      type: 'all',
      class: ''
    }
  ];

  constructor(
    public navCtrl: NavController,
    private todoService: TodoService) {}

  ngOnInit() {
    // cdigo al iniciar el componente
    this.agregarQuehacer("Limpiar la cocina",false);
    this.agregarQuehacer("Estudiar",false);
    this.agregarQuehacer("Encontrar el libro de Albert Camus",true);
  }

  agregarQuehacer(nuevoQuehacer: string , terminado: boolean) {
    if (nuevoQuehacer !==""){
      this.quehaceres.push({
        description: nuevoQuehacer,
        done:terminado
      });
    }
  }

  addTodo(todo: string) {
    // codigo para agregar TODO
  }

  updateTodo(todo: any) {
    // codigo para actualizar TODO
  }

  showDone() {
    // mostrar los TODOs terminados
  }

  showPending() {
    // mostrar los TODOs pendientes
  }

  showAll() {
    // mostrar todos los TODOs
  }

  private remapButtons(type: string) {
    return this.buttons.map(b => {
      if (b.type === type) {
        b.class = 'button-large-md';
      } else {
        b.class = '';
      }
      return b;
    });
  }

  buttonClass(type: string) {
    return this.buttons.filter(b => b.type === type)[0].class;
  }

}
