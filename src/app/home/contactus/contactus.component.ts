import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from  '@angular/router';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
	conctusForm:FormGroup;
	isSubmitted  =  false;
  	constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { 
  	this.createForm()}

  ngOnInit() {
  }
  createForm() {
    this.conctusForm = this.formBuilder.group({
       firstName: ['', [Validators.required,Validators.minLength(12) ,Validators.maxLength(12)]],
        emailAddress: ['', [Validators.required,
        Validators.pattern(this.emailpattern)]],
     
      Messages:['',[Validators.required,Validators.minLength(150) ,Validators.maxLength(150)]],
    });
}
get formControls() {
 return this.conctusForm.controls; 
}
 emailpattern=/^[a-zA-Z]+[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/;
 contactus(){
    alert("message")
    this.isSubmitted = true;
    if(this.conctusForm.invalid){
      return;
    }
    // this.authService.contactus(this.conctusForm.value);
    this.router.navigateByUrl('/contactus');
  }
// conctusForm = new FormGroup ({
//     firstName: new FormControl(),
//     emailAddress: new FormControl(),
//      Messages: new FormControl(),

//   });
}
