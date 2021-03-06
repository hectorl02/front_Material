import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {us: "hectogfhdfrl2", nombre: 'Hector', apellido: "Lopez", sexo: "m"},
    {us: "hectorlzv0fdzv2", nombre: 'jaime', apellido: "pastas", sexo: "m"},
    {us: "hectzcxvvorl02", nombre: 'rocio', apellido: "rosero", sexo: "m"},
    {us: "hectofczcxvrl02", nombre: 'lucy', apellido: "bedoya", sexo: "m"},
    {us: "hectorlq  w02", nombre: 'andres', apellido: "arango", sexo: "m"},
    {us: "hectowq dQrl02", nombre: 'monica', apellido: "perez", sexo: "m"},
    {us: "hec Qtorlvb 02", nombre: 'aleja', apellido: "masrea", sexo: "m"},
    
  ];

  constructor() { }
  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsua(index: number){
    this.listUsuarios.splice(index,1);
  }

  agregarUs(usua: Usuario){
    this.listUsuarios.unshift(usua);
  }
}
