import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VendorBlendorServiceProvider } from '../../providers/vendor-blendor-service/vendor-blendor-service';
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {    

  constructor(public navCtrl: NavController, public dataService: VendorBlendorServiceProvider, public programDialogService: DialogServiceProvider) {

  }

  loadEvents(){
    return this.dataService.events; 
  }

  viewVendors(thisEvent){
    console.log("event = ", thisEvent.eventName);
    console.log("vendorList = ", thisEvent.vendorList);

     this.programDialogService.displayVendorListAlert(thisEvent);
  }


  addMe(thisEvent){
    console.log("event = ", thisEvent.eventName);

    this.dataService.addMyProfile(thisEvent);    
    console.log("Updated Vendor List: ", thisEvent);

    this.programDialogService.displayToastMessage('Your registration has been sent to the event orgainizer.  You will be notified once your registration has been approved.');
  }

  shareEvent(thisEvent){
    console.log("event to share: ", thisEvent.eventName);
    
    let message = "Here is an event I thought you might be interested in " + thisEvent.eventName + " on " + thisEvent.eventdate + " at " + thisEvent.startTime;
    let subject = "Shared via Vendor Blendor app";
    console.log(message);

    this.programDialogService.share(message, subject); 
    

    this.programDialogService.displayToastMessage('The event has been shared.  Thank you for helping to make this event a success!');
  }

  addEvent()
  {
    console.log("Add new event to the list.")
    this.programDialogService.displayEventDialog(); 
  }
  
}