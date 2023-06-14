import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-brochure',
  templateUrl: './user-brochure.component.html',
  styleUrls: ['./user-brochure.component.css']
})
export class UserBrochureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.open("https://drive.google.com/file/d/13FnC5uyoD1LczhVJAzotnWHpCt07YCB6/view?usp=share_link");

  }

}
