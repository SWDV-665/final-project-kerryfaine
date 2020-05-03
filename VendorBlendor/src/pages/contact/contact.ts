import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VendorBlendorServiceProvider } from '../../providers/vendor-blendor-service/vendor-blendor-service';
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

   constructor(public navCtrl: NavController, public programDialogService: DialogServiceProvider, public dataService: VendorBlendorServiceProvider) {

  }

  loadVendors() {
    return this.dataService.vendors; 
  }

  addVendor() {
    console.log("Add new vendor to the list.");

    this.programDialogService.displayVendorDialog(); 
  }

  shareVendor(thisVendor){
    console.log("Vendor Shared - ", thisVendor.vendorName);

    let message = "Here is a business I thought you might be interested in " + thisVendor.vendorName + ". Shop with " + thisVendor.providedBy + " at " + thisVendor.website;
    let subject = "Shared via Vendor Blendor app";
    console.log(message);

    this.programDialogService.share(message, subject); 
    

    this.programDialogService.displayToastMessage('The business has been shared.  Thank you for helping to support this small business!');
  }

}
