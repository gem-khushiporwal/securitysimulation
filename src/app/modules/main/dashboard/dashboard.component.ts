import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MainService } from '../service/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
isShow = true;
campaigns:any=[];
  constructor(private _main:MainService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllCampaigns();
  }
  routeView(id:any){
    this.router.navigate(['main/view',id]);
  }
 
 
  getAllCampaigns(){
    this._main.getAllCampaigns(localStorage.getItem('email')).subscribe((data)=>{
      if(data){
        this.campaigns=data;
      }
    },err=>{
      this.toastr.error("Error in loading data");
    })
  }

}
