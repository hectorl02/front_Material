import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  
listUsuarios: Usuario[] = [
  {us: "hectogfhdfrl2", nombre: 'Hector', apellido: "Lopez", sexo: "m"},
  {us: "hectorlzv0fdzv2", nombre: 'jaime', apellido: "pastas", sexo: "m"},
  {us: "hectzcxvvorl02", nombre: 'rocio', apellido: "rosero", sexo: "m"},
  {us: "hectofczcxvrl02", nombre: 'lucy', apellido: "bedoya", sexo: "m"},
  {us: "hectorlq  w02", nombre: 'andres', apellido: "arango", sexo: "m"},
  {us: "hectowq dQrl02", nombre: 'monica', apellido: "perez", sexo: "m"},
  {us: "hec Qtorlvb 02", nombre: 'aleja', apellido: "masrea", sexo: "m"},
  
];

  displayedColumns: string[] = ['us', 'nombre', 'apellido', 'sexo', "acciones"];
  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
