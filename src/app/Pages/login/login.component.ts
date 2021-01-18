import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/Services/operations.service';
import { OperationsComponent } from "../operations/operations.component";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginRes: String;
  constructor(private operationsService: OperationsService, private router: Router) { }

  ngOnInit(): void {
  }
  onLoginClicked(userName: String, password: String) {
    this.operationsService.login(userName, password).subscribe((res: any) => {
      console.log(res);
      this.loginRes = res;
      if(this.loginRes['message'] === "200" && this.loginRes['userData']['username'] != "admin") {
        console.log("proceed");
        console.log(this.loginRes['userData']['username']);
        localStorage.setItem("username", this.loginRes['userData']['username']);
        this.router.navigate(['/poll']);
      } else if(this.loginRes['message'] === "200") {
        this.router.navigate(['/operations']);
      }
    });
  }
}