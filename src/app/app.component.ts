import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angulartable';

  input1: any;
  input2: any;
  input3: any;
  input4: any;
  input5: any;
  input6: any;
  input7: any;
  input8: any;

  information = { first: " ", middle: " ", last: " ", mobno: " ", address: " ", city: " ", state: " ", country: " " };

  records: any = [];

  ngOnInit(): void {
    this.records = JSON.parse(localStorage.getItem("Records") || "[]")
  }

  clickedsubmit() {
    // alert("PLZ FILLED ALL THE INFORMATION")

    this.information = { first: this.input1, middle: this.input2, last: this.input3, mobno: this.input4, address: this.input5, city: this.input6, state: this.input7, country: this.input8 };


    if (this.input1 == null) {
      alert("PLZ ENTER FIRST NAME");

    }
    else if (this.input2 == null) {
      alert("PLZ ENTER MIDDLE NAME");

    }
    else if (this.input3 == null) {
      alert("PLZ ENTER LAST NAME");

    }
    else if (this.input4 == null) {
      alert("PLZ ENTER MOB NO");

    }
    else if (this.input5 == null) {
      alert("PLZ ENTER ADDRESS");

    }
    else if (this.input6 == null) {
      alert("PLZ ENTER CITY");

    }
    else if (this.input7 == null) {
      alert("PLZ ENTER STATE");

    }
    else if (this.input8 == null) {
      alert("PLZ ENTER COUNTRY");

    }
    else {
      alert("SUBMITTED SUCCESFULLY")
      
      this.records.push(this.information)
      this.input1 = " ";
      this.input2 = " ";
      this.input3 = " ";
      this.input4 = " ";
      this.input5 = " ";
      this.input6 = " ";
      this.input7 = " ";
      this.input8 = " ";
      localStorage.setItem("Records", JSON.stringify(this.records))

    }



    //this.records.push(this.information)
  }

  resetall() {

    if (this.input1, this.input2, this.input3, this.input4, this.input5, this.input6, this.input7, this.input8 != null) {
      this.input1 = " ";
      this.input2 = " ";
      this.input3 = " ";
      this.input4 = " ";
      this.input5 = " ";
      this.input6 = " ";
      this.input7 = " ";
      this.input8 = " ";

    }

  }
}
