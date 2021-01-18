import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { OperationsService } from 'src/app/Services/operations.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  username: string;
  quesArr: any;
  qno: number;
  ques: string;
  op1: string;
  op2: string;
  op3: string;
  op4: string;
  ans: string;
  length: Number;
  time: any;
  i = 0;
  timerSec;
  answered = 0;

  constructor(private operationService: OperationsService, private route: Router) { 
    this.quesArr = Array();
    this.ans = null;
    this.timerSec = 10;
  }

  timerFun() {
    let source = timer(1000, 1000);
    this.timerSec = 10;
    this.time = null;
    this.time = source.subscribe((val) => {
      console.log(val);
        if (this.timerSec <=0) {
          if (this.i < this.quesArr.length - 1) {
            this.onNextClicked();
            this.time.unsubscribe();
          } else {
            this.onSubmit();
            this.time.unsubscribe();
          }
        }
        this.timerSec -= 1;
    });
  }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.operationService.dispQues().subscribe((res: []) => {
      //console.log(res);
      this.quesArr = res;
      this.qno = 0;
      console.log(res);
      this.length = Object.keys(this.quesArr).length; 
      //finding length of an object
      if(this.length === 0) {
        console.log("no questions posted;")
      } else if(this.i >= this.length) {
        console.log("end");
      } else if(this.length != 0) { 
          //console.log("display ques");
          //console.log("i = ",this.i);
          this.qno = this.quesArr[this.i]['qno'];
          this.ques = this.quesArr[this.i]['question'];
          this.op1 = this.quesArr[this.i]['option1'];
          this.op2 = this.quesArr[this.i]['option2'];
          this.op3 = this.quesArr[this.i]['option3'];
          this.op4 = this.quesArr[this.i]['option4'];
          /*console.log(this.qno);
          console.log(this.ques);
          console.log(this.op1);
          console.log(this.op2);
          console.log(this.op3);
          console.log(this.op4);*/

          this.i = 0;
          //this.timerFun();
      }
    })
  }
  
  onOptionSelected(opt)
 {
  this.ans = opt;
 }  
  onNextClicked() {
    //next question
    if (this.ans === null) {
      this.i += 1;
      this.qno = this.quesArr[this.i]['qno'];
      this.ques = this.quesArr[this.i]['question'];
      this.op1 = this.quesArr[this.i]['option1'];
      this.op2 = this.quesArr[this.i]['option2'];
      this.op3 = this.quesArr[this.i]['option3'];
      this.op4 = this.quesArr[this.i]['option4'];
    } else {
      this.time.unsubscribe();
      this.time = null;
      this.answered+=1;
      console.log(this.ans);
      console.log("ques: ",this.quesArr[this.i]['question']);
      this.operationService.saveAnswer(this.username, this.quesArr[this.i]['_id'], this.ans, this.quesArr[this.i]['question']).subscribe((res: any) => {
        if(res.success) {
          this.ans = null;
          this.i += 1;
          this.qno = this.quesArr[this.i]['qno'];
          this.ques = this.quesArr[this.i]['question'];
          this.op1 = this.quesArr[this.i]['option1'];
          this.op2 = this.quesArr[this.i]['option2'];
          this.op3 = this.quesArr[this.i]['option3'];
          this.op4 = this.quesArr[this.i]['option4'];
          console.log(this.i);
        }
      });
    }
    this.timerFun();
        
        /*console.log(this.qno);
        console.log(this.ques);
        console.log(this.op1);
        console.log(this.op2);
        console.log(this.op3);
        console.log(this.op4);*/
      
  }

  onSubmit() {
    if (this.ans !== null) {
      this.operationService.saveAnswer(this.username, this.quesArr[this.i]['_id'], this.ans, this.quesArr[this.i]['question']).subscribe((res: any) => {
        if(res.success) {
          this.route.navigate(['login']);
        }
      });
    } else {
        this.time.unsubscribe();
        this.route.navigate(['login']);
    }
  }
}
