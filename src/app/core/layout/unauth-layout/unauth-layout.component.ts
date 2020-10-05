import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauth-layout',
  templateUrl: './unauth-layout.component.html',
  styleUrls: ['./unauth-layout.component.scss']
})
export class UnauthLayoutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
