import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
  animations: [SharedAnimations]
})
export class ContactFormComponent implements OnInit {
  private formValues = {
    'email': null,
    'name': null,
    'subject': null,
    'message': null,

  };
  staticAlertClosed: true;
  error = null;
  success: any = null;
  constructor(public http: HttpClient) { }
  responseMessage: string; // the response message to show to the user

  ngOnInit() {
    console.log("Hello");
  }

  submitForm(form: NgForm) {
    this.formValues.email = form.value.email;
    this.formValues.name = form.value.name;
    this.formValues.subject = form.value.subject;
    this.formValues.message = form.value.message;
    var formTest = this.formValues;
    console.log("Message", this.formValues.message);
    // this.http.post('https://mailthis.to/jp', {
    //   formTest
    // }).then(function () {
    //   location.href = 'https://mailthis.to/confirm'
    // });
    this.http.post("https://mailthis.to/jp", formTest).subscribe(
      (response) => {
        // choose the response message
        if (response["result"] == "success") {
          this.responseMessage = "Thanks for the message! I'll get back to you soon!";
        } else {
           this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
        }
        // this.form.enable(); // re enable the form after a success
        // this.submitted = true; // show the response message
        // this.isLoading = false; // re enable the submit button
        console.log(this.responseMessage);
      })
    this.success = true;



  }
}
