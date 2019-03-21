import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public obj: any;
  constructor(private authservice: AuthService, private router: Router) {
    this.getAllDetails();
  }

  message: string;



  ngOnInit() {

  }


  public getveiwList: any;
  public getAllDetails() {
    this.authservice.getvalues().subscribe(data => {
      console.log("backend", data)
      this.getveiwList = data;
    });

  }
  delete(data: any) {
    let obj = { phone: data }
    console.log("phone", obj);

    this.authservice.deleterecord(obj).subscribe(data => {
      console.log("ssss", data)
      if (data == 'delated sucesfuly') {
        this.getAllDetails();
      }
    })
  }
  edit(data: any) {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", data.id.toString());
    this.authservice.changeMessage(data)
    this.router.navigate(['edituser']);
  }

}
