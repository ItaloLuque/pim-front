import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dataAPIBusca: any;
  public dataAPIBuscaPorId: any;

  constructor(private service: AppService) {}

  ngOnInit() {
  }

  public buscarMedicos(){
    this.service.buscarMedicos().subscribe((data: any) => {
      this.dataAPIBusca = data._embedded.medicoVOList;
      console.log(this.dataAPIBusca);
    });
  }
  
  public buscarMedicoPorId(id: number){
    this.service.buscarMedicoPorId(id).subscribe((data: any) => {
      this.dataAPIBuscaPorId = data;
      console.log(this.dataAPIBuscaPorId.nome);
    });
  }

  //todo: continuar com a criacao dos demais metodos

}
