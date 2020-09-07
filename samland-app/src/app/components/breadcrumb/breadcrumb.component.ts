import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input()
  public deliminator = '>';

  breadcrumbs: Array<{ label: string; url: string }> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)).subscribe(event => {
          this.breadcrumbs = [];
          let currentRoute: ActivatedRoute | undefined | null = this.activatedRoute.root;
          console.log(currentRoute);
          let url = '';
          do {
            const childrenRoutes = currentRoute.children;
            currentRoute = null;
            childrenRoutes.forEach(route => {
              if (route.outlet === 'primary') {
                const routeSnapshot = route.snapshot;
                url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                this.breadcrumbs.push({
                  label: route.snapshot.data.label,
                  url
                });
                currentRoute = route;
                console.log(url);
              }
            });
          } while (currentRoute);
        });
  }

}
