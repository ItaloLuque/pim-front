import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  private baseURL: string;

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'http://localhost:8888/api/medico/v1';
  }

  public buscarMedicos(): Observable<any> {
    return this.httpClient.get<any>(this.baseURL);
  }

  public buscarMedicoPorId(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  public cadastrarMedico(id: number){
   //todo: cadastrar medico
  }

  public atualizarLimiteMedico(id: number, limite: number){
   //todo: atualizar medico
    
  }

  public deletarMedicoPorId(id: number){
   //todo: deletar medico
  }

}
