import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  clickMenu(menuName: string) {
    switch (menuName) {
      case 'HOME': this.router.navigate(['/main/landing-page']); break;
      case 'PRODUCT': this.router.navigate(['/manage-product/list-product']); break;
    }
  }

}
