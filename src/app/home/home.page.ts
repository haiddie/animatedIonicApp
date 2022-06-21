import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts={
    centeredSlides:false,
    initialSlide:0,
    slidesPerView: 2.1,
    spaceBetween:0
  }
  constructor(public router:Router) {}

  slides:any[]=[
    {
      icon:'/assets/icons/brain.svg',
      name:'Mind',
      backgroundColor:'#ff4133',
      count:3
    },
    { icon:'/assets/icons/happy.svg',
      name:'Body',
      backgroundColor:'#ffb580',
      count:5
    },
    {
      icon:'/assets/icons/home.svg',
      name:'Relationships',
      backgroundColor:'#9780ff',
      count:2

    },
    {
      icon:'/assets/icons/email.svg',
      name:'Wealth',
      backgroundColor:'#80b7ff',
      count:1
    },
    {
      icon:'/assets/icons/email.svg',
      name:'Work',
      backgroundColor:'#d5d5d5',
      count:1
    }

  ]

  CalledR(name:string,up:any,degree:any,down:any){
   console.log(name)
   let navigationExtras: NavigationExtras = {
    state: {
      name: name,
      up:up,
      degrees:degree,
      down:down
    }
  };
  this.router.navigate(['tabs/details'], navigationExtras);
  }
}
