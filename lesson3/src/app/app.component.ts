import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['hola'],
      lastName: [''],
      age: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{1,}$')])
    });
  }

  save() {
    console.log(this.form.value)
  }
}
