import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  name:any;
  up:any;
  degrees:any
  down:any;
   img:any

   button1:boolean=false;
   button2:boolean=false;
   button3:boolean=false;
   button4:boolean=false; 
   button5:boolean=false;
   myCustomIcon = "/assets/icons/brain.svg";
   myCustomIcon2 = "/assets/icons/happy.svg";
   steps:any[]=[
     {
       no:1,
       checked:true
     },
     {
      no:2,
      checked:true
    },
    {
      no:3,
      checked:true
    },
    {
      no:4,
      checked:false
    },
    {
      no:5,
      checked:false
    }

   ]

   

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.up = this.router.getCurrentNavigation().extras.state.up;
        this.down = this.router.getCurrentNavigation().extras.state.down;
        this.degrees = this.router.getCurrentNavigation().extras.state.degrees;
        console.log('up',this.up)
       console.log('degrees',this.degrees)
        console.log('down',this.down)
        this.rotateImage()
        
        if(this.name == 'mind'){
          this.button1 = true;
          this.button2 = false;
          this.button3 = false;
          this.button4 = false;
          this.button5 = false;
        }
        else  if(this.name == 'body'){
          this.button2 = true;
          this.button1 = false;
          this.button3 = false;
          this.button4 = false;
          this.button5=false;
        }
        else  if(this.name == 'Relationships'){
          this.button3 = true;
          this.button2 = false;
          this.button1 = false;
          this.button4 = false;
          this.button5 = false;
        }
        else  if(this.name == 'wealth'){
          this.button4 = true;
          this.button2 = false;
          this.button3 = false;
          this.button1 = false;
          this.button5 = false;
        }
        else  if(this.name == 'work'){
          this.button4 = false;
          this.button2 = false;
          this.button3 = false;
          this.button1 = false;
          this.button5 = true;
        }
       
      }
    });
   }

  ngOnInit() {
  }

  rotateImage2(num:any){
   
   
    this.degrees = (num + 90) % 360;
   
    console.log(this.degrees)
    if(this.degrees == 180){
      
      this.up = 360
      this.down =180
      this.button1 = false;
      this.button2 = true;
      this.button3 = false;
      this.button4 = false;
      this.button5 = false;
    }
    else if(this.degrees == 90){
     
      this.up = 45
      this.down = 90
      this.button2 = false;
      this.button1 = false;
      this.button3 = false;
      this.button4 = true;
      this.button5 = false;
    }
    else if(this.degrees == 135){
      this.up = 270
      this.down = 360
      this.button5 = true;
      this.button2 = false;
      this.button3 = false;
      this.button1 = false;
      this.button4 = false;
    }
    else if(this.degrees == 0){
      this.up = 180
      this.down = 45
      this.button3 = true;
      this.button4 = false;
      this.button5 = false;
      this.button2= false;
      this.button1 = false;
    }
    else if(this.degrees == 270){
      
      this.up = 90
      this.down = 270
      this.button1 = true;
      this.button2 = false;
      this.button3 = false;
      this.button4 = false;
      this.button5 = false;
    }

    // console.log('up',this.up)
    // console.log('degree',this.degrees)
    // console.log('down',this.down)
    this.img.className = "rotate" + this.degrees;
  }
  rotateImage(){
    this.img  = document.getElementById('container');
    this.degrees = (this.degrees + 90) % 360;
   
    this.img.className = "rotate" + this.degrees;
  }
  segmentChanged(event:any){
    console.log('ye call hwa')
  
   this.name = event.target.value;
    if(event.target.value == 'mind'){
      this.button1 = true;
      this.button2 = false;
      this.button3 = false;
      this.button4 = false;
      this.button5 = false;
      this.up = 90
      this.down = 270
      this.degrees =180
     this.rotateImage()
    }
    else  if(event.target.value == 'body'){
      this.button2 = true;
      this.button1 = false;
      this.button3 = false;
      this.button4 = false;
      this.button5 = false;
      this.up=360
      this.degrees = 90
      this.down = 180
      this.rotateImage()
    }
    else  if(event.target.value == 'Relationships'){
      this.button3 = true;
      this.button2 = false;
      this.button1 = false;
      this.button4 = false;
      this.button5 = false;
      this.up =180
      this.degrees = 270
      this.down =45
      this.rotateImage()
    }
    else  if(event.target.value == 'wealth'){
      this.button4 = true;
      this.button2 = false;
      this.button3 = false;
      this.button1 = false;
      this.button5 = false;
      this.up =45
      this.degrees = 360
      this.down = 90
      this.rotateImage()
    }

    else  if(event.target.value == 'work'){
      this.button5 = true;
      this.button4 = false;
      this.button2 = false;
      this.button3 = false;
      this.button1 = false;
      this.up= 270
      this.degrees = 45
      this.down = 360
      this.rotateImage()
    }
  }
  

}
