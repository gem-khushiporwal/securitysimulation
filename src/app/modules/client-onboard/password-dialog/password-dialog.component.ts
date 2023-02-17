import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientOnboardService } from '../Services/client-onboard.service';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent implements OnInit {
  onboardform:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private toastr:ToastrService,
    private shared: ClientOnboardService) { 
    this.onboardform = this.formBuilder.group({})
  }

  ngOnInit(): void {
    this.onboardform = this.formBuilder.group({
      createpass:['',[Validators.required]],
      confirmpass:['',[Validators.required]]
  });
  }
  routeto(){
    if(this.onboardform.value.password == "" ||  this.onboardform.value.confirmpass == "")
    {
      this.toastr.error("Please create your password", undefined, {
        positionClass: 'toast-top-center'
   })
      return
    }
    if(this.onboardform.value.createpass != this.onboardform.value.confirmpass)
    {
      this.toastr.error("Password not matched", undefined, {
        positionClass: 'toast-top-center'
      });
      return
    }
    else
    {
    let req = {
      'password': this.onboardform.value.createpass
    }
    this.shared.setpassword(req)
    this.router.navigate(['client-onboard/official-details'])
  }
}

}
