import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvaService {
 persone = [
  {nome: 'Luca', cognome: 'Rossi', isOnline: true},
  {nome: 'Marco', cognome: 'Verdi', isOnline: true},
  {nome: 'Anna', cognome: 'Neri', isOnline: false},
  {nome: 'Paolo', cognome: 'Gialli', isOnline: true},
 ]
 constructor() { }
  
  getPersone(){
    return this.persone;
  }
  getPersona(index: number){
    return this.persone[index];
  }
  
}
