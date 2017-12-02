import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

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
 },{
   titulo :"Hobby",
   dato :"Ver peliculas & series",
   icono:"alarm"
 }
];




  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.agregarDato("Mascota","Perro");
    this.agregarDato("Colegio","Corazón de Jesús");
    this.agregarDato("Cantante favorito","Sam Smith");
  }
  agregarDato(nuevoTitulo:string, nuevoDato:string) {
    this.informacion.push({
      titulo:nuevoTitulo,
      dato:nuevoDato,
      icono:"heart"
    });
  }







}
