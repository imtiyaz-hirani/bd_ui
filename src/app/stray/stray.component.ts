import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { griddata } from './data/data';
import { StrayQuery } from './model/model';
import { StrayService } from './service/stray-service';

@Component({
  selector: 'app-stray',
  templateUrl: './stray.component.html',
  styleUrls: ['./stray.component.scss']
})
export class StrayComponent implements OnInit{

  strayData : any [] = [];

  constructor(private strayService: StrayService,private router: Router){}

  ngOnInit(): void {
   
    const strayQuery:StrayQuery = JSON.parse(localStorage.getItem("strayQuery"));

      if(strayQuery){
        //this.onQueryChange(strayQuery)
      }

      this.strayData = griddata;
  }

onQueryChange(event){
    this.strayService.getStrayDate(event).subscribe(data=>{
     this.strayData = [];
       this.strayData = data;
       console.log(this.strayData);
    });
 }



}
