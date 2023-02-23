import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { NAVBAR_MENU } from './navbar-menu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private router: Router, private scrollToService: ScrollToService) { }

  ngOnInit(): void {
    this.menuItems = NAVBAR_MENU;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToService.scrollTo({
          target: '#main-top',
          duration: 1000,
          easing: 'easeInOutQuad'
        });
      }
    });


  }

}
