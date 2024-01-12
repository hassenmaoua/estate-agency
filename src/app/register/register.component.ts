import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    }
  )

  reset() {
    this.registerForm.reset()
  }



  formBuilder: any

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formBuilder = this.fb.group({
      fn: [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')],
      ln: [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')],
      email: [Validators.required, Validators.email],
      pswd: [Validators.required, Validators.minLength(6)]
    })
  }


}
