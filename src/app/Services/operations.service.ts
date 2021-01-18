import { Injectable } from '@angular/core';
import { WebReqService } from "../Services/web-req.service";

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private webReqService: WebReqService) { }

  login(username: String, password: String) {
    return this.webReqService.post('login', {'username': username, 'password': password});
  }
  addQues(qno: Number, question: String, option1: String, option2: String, option3: String, option4: String){
    return this.webReqService.post('createQuestion', {'qno':qno, 'question': question, 'option1': option1, 'option2': option2, 'option3': option3, 'option4': option4});
  }

  deleteQues(qno: Number){
    return this.webReqService.delete(qno);
  }

  updateQues(qno: Number, question: String, option1: String, option2: String, option3: String, option4: String) {
    return this.webReqService.patch(qno, question, option1, option2, option3, option4);
  }  
  saveAnswer(username: String, qno: Number, ans: String, question: String) {
    console.log("ques: ",question);
    return this.webReqService.post('postAnswer',{'username':username, 'qno': qno, 'ans': ans, 'question': question});
  }



  dispQues() {
    return this.webReqService.get('getQuestion');
  }

  dispQuesRes(_id: any) {
    console.log("question clicked");
    return this.webReqService.getques(_id);
  }

  dispUserRes(username: String) {
    return this.webReqService.getUserRes(username);
  }

  getuser() {
    return this.webReqService.get('getuser');
  }
}
