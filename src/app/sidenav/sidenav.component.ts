import { Component,Output, EventEmitter, OnInit, HostListener, PLATFORM_ID } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, AnimationOptions, keyframes, style, transition, trigger } from '@angular/animations';
import { Transform } from 'stream';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',

  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
          style({opacity:1})
        )
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',
          style({opacity:0})
        )])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
          keyframes([
            style({transform:'rotate(0deg)',offset:'0'}),
            style({transform:'rotate(2turn)',offset:'1'}),
          ])
        )
      ])
    ])
    
  ]
})
export class SidenavComponent implements OnInit{
  
  @Output() onTogglerSideNav: EventEmitter<SideNavToggle> = new EventEmitter ();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onTogglerSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth});

    }
  }


  ngOnInit(): void{
   
  }

  toggleCollapsed():void{
    this.collapsed =!this.collapsed;
    this.onTogglerSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth});

  }
 
  closeSidenav():void {
    this.collapsed = false
    this.onTogglerSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth});

  }

}

