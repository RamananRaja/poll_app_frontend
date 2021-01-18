import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebReqService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: String) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  getques(_id: String) {
    return this.http.get(`${this.ROOT_URL}/fetchques/anlys/${_id}`)
  }
  getUserRes(username: String) {
    return this.http.get(`${this.ROOT_URL}/getuserans/${username}`);
  }
  post(uri: String, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  patch(qno: Number, question: String, option1: String, option2: String, option3: String, option4: String) {
    return this.http.patch(`${this.ROOT_URL}/updateQuestion`,{qno, question, option1, option2, option3, option4});
  }
  delete(qno: Number) {
   return this.http.post(`${this.ROOT_URL}/deleteQuestion`, {qno} );
 }
}
