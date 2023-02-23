import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

/**
 * Signin Component
 */
export class SigninComponent implements OnInit {

  fieldTextType!: boolean;
  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  constructor(private formBuilder: UntypedFormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
     /**
     * Bootstrap validation form data
     */
      this.validationform = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });

    document.body.classList.add('bg-secondary');
  }

  /**
   * Password Hide/Show
   */
   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  /**
  * Bootsrap validation form submit method
  */
   validSubmit() {
    this.submit = true;
    this.authService.login(this.validationform.value.email, this.validationform.value.password).subscribe(console.log);
  }

  /**
 * Returns form
 */
  get form() {
    return this.validationform.controls;
  }

}
