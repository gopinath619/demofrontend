import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
public employess = [];
  message:any;
  constructor(private formBuilder: FormBuilder,private router: Router,private authservice: AuthService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      check: ['', Validators.required],
      check1: ['', Validators.required],
      gender: ['', Validators.required],
    });
    this.authservice.currentMessage.subscribe(message => 
      this.message = message

      );
     let test = this.authservice.data;
     this.employess = this.authservice.getdetails();
      console.log("llll",this.message)
      console.log("restt",test)
      console.log("tesr",this.employess)

//resttt
let userId = localStorage.getItem("editUserId");
if(!userId) {
  alert("Invalid action.")
  this.router.navigate(['crud']);
  return;
}

this.authservice.getUserById(+userId)
  .subscribe( data => {
    console.log(data[0]);
    console.log(data);
    this.editForm.patchValue(data[0]);
  });


  }

  onSubmit() {
    this.authservice.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['crud']);
        },
        error => {
          alert(error);
        });
  }

}
