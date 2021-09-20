import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';



const listUsuarios: Usuario[] = [
  {us: "hectogfhdfrl2", nombre: 'Hector', apellido: "Lopez", sexo: "m"},
  {us: "hectorlzv0fdzv2", nombre: 'jaime', apellido: "pastas", sexo: "m"},
  {us: "hectzcxvvorl02", nombre: 'rocio', apellido: "rosero", sexo: "m"},
  {us: "hectofczcxvrl02", nombre: 'lucy', apellido: "bedoya", sexo: "m"},
  {us: "hectorlq  w02", nombre: 'andres', apellido: "arango", sexo: "m"},
  {us: "hectowq dQrl02", nombre: 'monica', apellido: "perez", sexo: "m"},
  {us: "hec Qtorlvb 02", nombre: 'aleja', apellido: "masrea", sexo: "m"},
  
];


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['us', 'nombre', 'apellido', 'sexo', "acciones"];
  dataSource = listUsuarios;

  constructor() { }

  ngOnInit(): void {
  }

}
