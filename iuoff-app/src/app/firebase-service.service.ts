import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  db: AngularFireDatabase;
  packages: FirebaseListObservable<any>;
  
  constructor(db: AngularFireDatabase) {
    this.db = db;
   }

  getPackages(){
   this.packages =  this.db.list('/packages'); 
   return this.packages;
  }
  addPackage(task: any) {  
    task.done = false;   
    this.packages.push(task);
  }
 
  updatePackage(task: any) {
    // Atualizando o item na lista.
    // Para isso passamos por parametro qual é o id do item no Firebase
    // e quais são os novos valores.
    this.packages.update(task.$key, task);
  }
 
  savePackage(task: any) {
    // Metodo criado para facilitar a inclusão/alteração e um item.
    // Verifico se o item tem o Id para saber se é uma inclusão ou alteração.
    if (task.$key == null) {
      this.addPackage(task);
    } else {
      this.updatePackage(task);
    }
  }
 
  removePackage(task: any) {
    this.packages.remove(task.$key);
  }
 

  
}
