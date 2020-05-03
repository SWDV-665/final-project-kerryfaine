import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { VendorBlendorServiceProvider } from '../../providers/vendor-blendor-service/vendor-blendor-service';
import { SocialSharing } from '@ionic-native/social-sharing';

/*
  Generated class for the DialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DialogServiceProvider {

  constructor(public alertCtrl: AlertController, public toastCtrl: ToastController, public dataService: VendorBlendorServiceProvider, public socialSharing: SocialSharing) {
    console.log('Hello DialogServiceProvider Provider');
  }

  displayEventDialog() {
    console.log("New event dialog service called.")
    const prompt = this.alertCtrl.create({
      title: 'Add New Event',
      message: "Add your event details below ...",
      inputs: [
        {
          name: 'eventName',
          placeholder: 'Event Name'
        },
        {
          name: 'eventdate',
          placeholder: 'Event Date'
        },
        {
          name: 'eventAddr1',
          placeholder: 'Event Address Line 1'
        },
        {
          name: 'eventAddr2',
          placeholder: 'Event Address Line 2'
        },
        {
          name: 'startTime',
          placeholder: 'Event Start Time'
        },
        {
          name: 'endTime',
          placeholder: 'Event End Time'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
            text: 'Save',
            handler: newEvent => {
              console.log('Saved clicked', newEvent);
              this.dataService.addNewEvent(newEvent); 
            }
        },
      ]
    });
    prompt.present(); 
  }

  displayVendorDialog() {

    const prompt = this.alertCtrl.create({
      title: 'Add New Event',
      message: "Add your event details below ...",
      inputs: [
        {
          name: 'vendorName',
          placeholder: 'Vendor Name'
        },
        {
          name: 'providedBy',
          placeholder: 'Name of Service Provider'
        },
        {
          name: 'email',
          placeholder: 'Email'
        },
        {
          name: 'phone',
          placeholder: 'Phone Number'
        },
        {
          name: 'website',
          placeholder: 'Website'
        },
        {
          name: 'image',
          placeholder: 'Image to Upload'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
            text: 'Save',
            handler: newVendor => {
              console.log('Saved clicked', newVendor);
              this.dataService.addVendor(newVendor);
            }
        },
      ]
    });
    prompt.present(); 
  }

  //To Do:  Make this a dynamic list in a future version. 
  displayVendorListAlert(thisEvent)
  {
    const alert = this.alertCtrl.create({
      title: thisEvent.eventName + " - Vendors:", 
      message: "Younique, <br> Beachbody",  //To Do:  dynamically build this list in future version.
      buttons: ['OK']
    });
    alert.present();
  }

  displayToastMessage(theMessage) {
    const toast = this.toastCtrl.create({
      message: theMessage,
      duration: 4000
    });

    toast.present(); 
  }

  //shared method that uses the "socialSharing" Cordova plug in to share information from the app
  share(message, subject){

    this.socialSharing.share(message, subject).then(() => {
      //sharing via email is possible
      console.log("Shared successfully!")
    }).catch((error) => {
      //sharing via email is not possible
      console.error("Error while sharing ", error);
    });

  }

}
