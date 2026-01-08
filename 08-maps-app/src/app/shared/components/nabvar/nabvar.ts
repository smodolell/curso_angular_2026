import { Component, inject } from '@angular/core';
import { routes } from '../../../app.routes';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nabvar',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './nabvar.html',
})
export class Nabvar {
  router = inject(Router);

  routers = routes
    .map((route) => ({
      path: route.path,
      title: `${route.title ?? 'Maps en Angular'}`,
    }))
    .filter((route) => route.path !== '**');

  pageTitle = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      // tap((event) => console.log(event)),
      map((event) => event.url),
      map((url) => routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas')
    )
  );
  pageTitle$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    // tap((event) => console.log(event)),
    map((event) => event.url),
    map((url) => routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas')
  );
}
