import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuario: Usuario[] =[];
  displayedColumns: string[] = ['us', 'nombre', 'apellido', 'sexo', "acciones"];
  dataSource! :MatTableDataSource<any>

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private snackB:MatSnackBar,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.listUsuario = this.usuarioService.getUsuario();
    this.dataSource= new MatTableDataSource(this.listUsuario)
  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUs(index: number){
    this.usuarioService.eliminarUsua(index);
    this.cargarUsuario();
    this.snackB.open('Usuario eliminado','',{
      duration:500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

}
