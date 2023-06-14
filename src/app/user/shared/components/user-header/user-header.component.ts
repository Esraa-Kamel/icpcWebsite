import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  public sponserList: any; 
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.fetchData()
  }
  fetchData(){
    
  }


}
