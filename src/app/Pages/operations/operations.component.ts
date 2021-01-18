import { Component, OnInit } from '@angular/core';
import { OperationsService } from "../../Services/operations.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  quesArr: object;

  constructor(private operationsService: OperationsService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  onAddClicked(qno: Number, question: String, option1: String, option2: String, option3: String, option4: String) {
    this.operationsService.addQues(qno, question, option1, option2, option3, option4).subscribe((res: any) => {
      console.log("create from operations.component.ts");
      console.log(res);
    });
  }
  onDeleteClicked(qno: Number) {
    this.operationsService.deleteQues(qno).subscribe((res: any) => {
      console.log("delete function from operations.component.ts");
      console.log(res);
    });
  }
  onUpdateClicked(qno: Number, question: String, option1: String, option2: String, option3: String, option4: String) {
    this.operationsService.updateQues(qno, question, option1, option2, option3, option4).subscribe((res: any) => {
      console.log("update from operations.component.ts");
      console.log(res);
    });
  }
  onDisplayClicked() {
    this.operationsService.dispQues().subscribe((res: any) => {
      console.log(res);
      this.quesArr = res;
      console.log(this.quesArr[0]['qno']);
    })
  }
}
