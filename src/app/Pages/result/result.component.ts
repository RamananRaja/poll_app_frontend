import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/Services/operations.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  quesArr: any;
  userArr: any;
  quesStat: any;
  userStat: any;
  constructor(private operationService: OperationsService) { }

  ngOnInit(): void {
    this.operationService.dispQues().subscribe((res: any) => {
      this.quesArr = res;
    });
    this.operationService.getuser().subscribe((ress: any) => {
      this.userArr = ress;
    });
  }

  onQuestionClicked(_id: any) {
    console.log(_id);
    this.operationService.dispQuesRes(_id).subscribe((res: any) => {
      this.quesStat = res;
      console.log(this.quesStat);
    });
  }
  onUserClicked(username: String) {
    console.log(username, " from result.ts");
    this.operationService.dispUserRes(username).subscribe((ress: any) => {
      this.userStat = ress;
      console.log(this.userStat);
      console.log(this.userStat[0]['ans']);
    });
  }

}
