import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_LINKS_FULL_PATH } from '@app/core/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.redirectToLandingModule();
  }

  redirectToLandingModule() {
    const landingPage = '';
    if (landingPage) {
      this.router.navigate(landingPage);
    } else {
      this.router.navigate([ROUTER_LINKS_FULL_PATH.dashboard1]);
    }
  }
}
