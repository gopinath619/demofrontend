import { Router } from  '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Component, ElementRef, ViewChild, OnInit, Inject, OnDestroy } from '@angular/core';
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   @ViewChild('bidedpopupView') bidedpopupView: ElementRef;
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
gender = null; 
  constructor(private authService: AuthService, private router: Router) { 
    }

  ngOnInit() {
  }
  countries = ['USA', 'Canada', 'Uk']
  states = [
  {name: 'Arizona', code: 'AZ'},
  {name: 'California', code: 'CA'},
  {name: 'Colorado', code: 'CO'}
];
keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      alert('ddd');
      event.preventDefault();
    }
  }
   model: any = {};
   selectedCountry
 hes: any ;
onSubmit(data): void {

  console.log(data)
  this.authService.createContact(data).subscribe(data => {
     console.log("backend",data)
      if (data == "sucesssfully") {
        // this.router.navigate(['crud']);
       $(this.bidedpopupView.nativeElement).modal('show');
      }
    });
}

Bidalloted_popup(){
  this.router.navigate(['crud']);
       $(this.bidedpopupView.nativeElement).modal('hide');

}

}
