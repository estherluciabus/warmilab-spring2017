import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

nombre:string = "Esther Bustamante";
ocupacion:string ="Estudiante";
edad:number = 15;

datos: any = {
  nombre:"Esther Bustamante",
  ocupacion:"Estudiante",
  edad:15
};

origen1:any ={
   titulo_origen:"Origen",
   origen:"Lima,Peru",
   titulo_Email:"E-mail",
   email:"estherluciabus@gmail.com",
   titulo_telefono:"Telefono",
   telefono:937825848

};

  constructor(public navCtrl: NavController) {

  }

}
