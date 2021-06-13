import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {
  form: FormGroup;
  @Output() parentFunction: EventEmitter<any> = new EventEmitter()

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    // console.log("# form", this.form);
    console.log("# this.form.valid", this.form.valid);
    console.log("# send", this.form.get("user.name").value);

    if (this.form.valid) {
      const data = {
        valid: true,
        name: this.form.get("user.name").value,
        email: this.form.get("user.email").value
      }
      this.parentFunction.emit(data);
    }

  }

  private createForm() {
    this.form = this.fb.group({
      user: this.fb.group({
        name: [null, [Validators.pattern("[A-Z,a-z]*"), Validators.required]],
        email: [null, [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required]],
      })
    });

    console.log("# form", this.form);
  }

}
