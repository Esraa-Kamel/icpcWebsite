import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-mainbody',
  templateUrl: './user-mainbody.component.html',
  styleUrls: ['./user-mainbody.component.css']
})
export class UserMainbodyComponent implements OnInit {
  public mainVideosList: any; 
  safeSrc: SafeResourceUrl = '';
  public List: any;
   constructor (private sanitizer: DomSanitizer, public router: Router ) { 
    // this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
  }
  
  // url:any;
  ngOnInit(): void {
    this.fetchData();
  }

  checkUrl(url : string){
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}`)
return this.safeSrc;
  }
  fetchData(){
  }

  contestDetails(id: any) {
    this.router.navigate(['contestDetails', id]);
  }
}
