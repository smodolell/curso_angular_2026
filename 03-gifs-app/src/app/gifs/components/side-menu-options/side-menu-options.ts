import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '../../services/gifs.service';

interface MenuOption {
  label: string;
  subLabel: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {

  gifService = inject(GifsService);


  menuOptions: MenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs Pupulares',
      icon: 'fa-solid fa-chart-line',
      route: '/dashboard/trending',
    },
    {
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      icon: 'fa-solid fa-magnifying-glass',
      route: '/dashboard/search',
    },
  ];
}
