import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from  '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 APIEndpoint = environment.APIEndpoint;
 public data:any
 constructor(private  httpClient:  HttpClient) {}
 private messageSource = new BehaviorSubject('default message');
 currentMessage = this.messageSource.asObservable();
 changeMessage(message:any) {
	
console.log(this.data);
this.data = message;
	 this.messageSource.next(message)
 }
 createContact(userInfo:any){
 	 console.log("hiiii",userInfo)
    return  this.httpClient.post(`${this.APIEndpoint}/registration/`,userInfo);
}
getvalues(){
    return  this.httpClient.get(`${this.APIEndpoint}/getvalues/`);
}
 
deleterecord(data:any){
	let url:string = `${this.APIEndpoint}/deleterecords/`
	return this.httpClient.post(url,data);
}

getdetails(){
	return this.data;

}
getUserById(id: number) {
	console.log(id,'iddddd');
	return this.httpClient.post<any>(this.APIEndpoint + '/getuser/',id);
}



updateUser(user:any) {
	console.log(user)
	return this.httpClient.post(this.APIEndpoint+ '/updateuser/', user);
}


}
