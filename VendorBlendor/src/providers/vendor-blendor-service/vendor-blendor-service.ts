import { Injectable } from '@angular/core';


/*
  Generated class for the VendorBlendorServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VendorBlendorServiceProvider {

  vendors = [
    {
      vendorName: "Beachbody",
      providedBy: "Kerry Faine",
      email: "kerry.faine@outlook.com",
      phone: "(701) 306 - 5100",
      website: "www.KerryFaine.com",
      image: "/assets/imgs/profilepic2.jpg"
    },
    {
      vendorName: "Su Joing's Jewelry Boutique",
      providedBy: "Su Sollers",
      email: "sue.sollers@yahoo.com",
      phone: "(202) 852 - 6549 ",
      website: "https://www.picuki.com/profile/su_joingsjewelry",
      image: "/assets/imgs/suProfile.jpg"
    },
    {
      vendorName: "Younique",
      providedBy: "Shanna Jacobs",
      email: "shanna.jacobs@gmail.com" ,
      phone: "(469) 659 - 7845",
      website: "https://www.youniqueproducts.com/shannajacobs",
      image: "/assets/imgs/shannaProfile.jpg"
    }
  ];

  events = [
    {
      eventName: "Gigantic Rummage Sale",
      eventdate: "Saturday, April 27th",
      eventAddr1: "Veterans Memorial Arena",
      eventAddr2: "1207 7th Ave E, West Fargo ND",
      startTime: "7:00am",
      endTime: "1:00pm",
      vendorList: [
        {
          vendorName: "Younique",
          image: "/assets/imgs/shannaProfile.jpg"
        },
        {
          vendorName: "Su Joing's Jewelry Boutique",
          image: "/assets/imgs/suProfile.jpg"
        },
      ],
    },
    {
      eventName: "Casselton Summerfest 2020",
      eventdate: "Saturday, July 25th",
      eventAddr1: "Main Street",
      eventAddr2: "Downtown Casselton ND",
      startTime: "9:00am",
      endTime: "9:00pm",
      vendorList: [
        {
          vendorName: "Younique",
          image: "/assets/imgs/shannaProfile.jpg"
        },
        {
          vendorName: "Su Joing's Jewelry Boutique",
          image: "/assets/imgs/suProfile.jpg"
        },
      ],
    },
    {
    eventName: "Potato Days",
    eventdate: "Saturday, Aug 28th",
    eventAddr1: "Main Ave",
    eventAddr2: "Downtown Barnesville",
    startTime: "9:00am",
    endTime: "4:00pm",
    vendorList: [
      {
        vendorName: "Younique",
        image: "/assets/imgs/shannaProfile.jpg"
      },
      {
        vendorName: "Su Joing's Jewelry Boutique",
        image: "/assets/imgs/suProfile.jpg"
      },
    ],
    },
  ];


  myVendorProfile = [
    {
      vendorName: "Beachbody",
      image: "/assets/imgs/profilepic2.jpg"
    }
  ];

  constructor() {
    console.log('Hello VendorBlendorServiceProvider Provider');
  }

  addVendor(newVendor){
    this.vendors.push(newVendor);
  }  

  //Event Methods  

  /* To Do: In a future version, enable a login and 
    dynamically set this to the currently logged in user */ 
  addMyProfile(thisEvent)
  {
    thisEvent.vendorList.push(this.myVendorProfile);
    console.log("My Vendor Profile: ", this.myVendorProfile);
  }

  addNewEvent(newEvent)
  {
    this.events.push(newEvent);
    console.log("New Event: ", newEvent);
  }



}
