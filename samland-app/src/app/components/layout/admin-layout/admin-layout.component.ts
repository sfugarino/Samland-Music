import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { routes } from '../../../app-routing.module';
import { Event, Router, RoutesRecognized, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Route, Routes } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  title = 'Samland';
  routes = routes?.filter(this.routeHasData);
  routeData: any = {};

  color: ThemePalette = 'primary';
  value = 50;
  displayProgressSpinner = false;

  @ViewChild('routerOutletContainer') container?: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {

    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.displayProgressSpinner = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.displayProgressSpinner = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routeData = data.state?.root?.firstChild?.data;
      }
    });
  }

  ngAfterViewInit(): void {

  }

  routeHasData(route: Route, index: number, arr: Routes): boolean {
    return (arr && route && route.data && route.data.showInSidebar);
  }
}
