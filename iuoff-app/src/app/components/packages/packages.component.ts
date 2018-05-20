import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
// import { Observable } from 'rxjs';
import { FirebaseServiceService } from './../../firebase-service.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})


export class PackagesComponent implements OnInit {
  public packages: FirebaseListObservable<any>;
  firebaseService: any;

  constructor(firebaseService: FirebaseServiceService) {
    this.packages = firebaseService.getPackages();
    this.firebaseService =  firebaseService;
  }

  ngOnInit() {
    let packagesList = this.firebaseService.getPackages();
  }

}
