import { Component, OnInit } from '@angular/core';
import { Support } from 'src/app/Interfaces/SupportInterfaces';
import { SupportServiceService } from 'src/app/services/support/support-service.service';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { PopupHandlerService } from 'src/app/services/popup-handler-service/popup-handler.service';
import { ToolsService } from 'src/app/services/tool/tools.service';

@Component({
  selector: 'app-support-popup',
  templateUrl: './support-popup.component.html',
  styleUrls: ['./support-popup.component.css']
})
export class SupportPopupComponent implements OnInit {

showSupportPopup=false;
  name=''
  contactEmail=''
  supportType='Select Request Type from below'
  message=''
  support:Support={UserUid:"",Name:"",SupportType:"",Message:"",ContactEmail:"",TicketId:"", NumberOfActivity:0,Date:"", Time:"",Show:false, State:"", AssignedTo:""}
  
  constructor(public dateService:ToolsService, public supportService:SupportServiceService, public authService:AuthServiceService,public popupService:PopupHandlerService) { }

  ngOnInit(): void {
    this.contactEmail=this.authService.loggedInUser.Email
    
  }

  isFormEmpty(Name:any, contactEmail:any, message:any, supportType:any){
    if(Name == "" || contactEmail == "" || message == ""){
      alert("Kindly fill all the fields !!")
      return false;
    }else{
      return true;
    }
}
  submit(){
    if (!this.authService.user) {
      this.popupService.loginPopup=true;
    }
    else if(this.isFormEmpty(this.name, this.contactEmail, this.message, this.supportType)){
    this.showSupportPopup=false;
    this.support.ContactEmail=this.contactEmail
    this.support.Message=this.message
    this.support.Name=this.name
    this.support.SupportType=this.supportType
    this.support.UserUid='';
    this.support.Date=this.dateService.date();
    this.support.Time=this.dateService.time();
    this.support.State = 'New';
    this.support.AssignedTo = '';
    this.supportService.createNewSupport(this.support);

    
  }
}
  closePopup(){
    this.showSupportPopup=false;
  }
}
