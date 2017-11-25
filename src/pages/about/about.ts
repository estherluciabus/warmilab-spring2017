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

informacion: any[] =[
 {
   titulo:"Origen",
   dato:"Lima,Peru",
   icono:"flag"
 },
 {
  titulo:"E-mail",
  dato:"estherluciabus@gmail.com",
  icono:"mail"
 },
 {
   titulo:"Telefono",
   dato:"937825848",
   icono:"call"
 },
];




  constructor(public navCtrl: NavController) {

  }

}
