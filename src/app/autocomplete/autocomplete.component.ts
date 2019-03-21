import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SelectService } from '../select.service';
import { Country } from '../country';
import { State } from '../state';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  myControl = new FormControl();
  myControl1 = new FormControl();
  options: string[] = [];
  data : any;
  options1: string[] = [];
  data1 : any;
   countries:any[];
  states: State[];

  constructor(private formBuilder: FormBuilder,private selectService: SelectService) { }
ngOnInit() {
  	this.countries = this.selectService.getCountries();
  	console.log(this.countries);
      this.loginForm = this.formBuilder.group({
      countr: ['', Validators.required],
      stat: ['', Validators.required]
    });
  }
  public updated() {
    this.options = [];
    if (this.myControl.value.length > 0) {
      let all = this.countries;
      console.log("heloooooooooo",all)
      let searchedWord = this.myControl.value
      // for(let key in all) {
      	 for(let i=0;i<all.length;i++){
      	console.log("hii",all[i]);
        let r = all[i].name.search(new RegExp(searchedWord, "i"));
        if (r != -1) {
          this.options.push(all[i])
        }
      }
    } else {
      this.options = []
    }
  }

 get f() { return this.loginForm.controls; }

  loginForm: FormGroup;
public selected(event:any) {
	console.log('kk',event);
 	 this.states = this.selectService.getStates().filter((item) => item.countryid == event);
 	 console.log("stattta",this.states);
  }
 	
login(loginForm:any): void {
  console.log(loginForm.value)
}
}
