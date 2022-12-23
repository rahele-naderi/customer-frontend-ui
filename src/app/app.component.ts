import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from './models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-frontend-ui';

  menuItems: MenuItem[];

  constructor(private readonly translateService: TranslateService,
    private readonly router: Router) {
    this.menuItems = [];
    this.menuItems.push({ title: "APP.SIDEBAR.HOME", url: "home", icon: "" });
    this.menuItems.push({ title: "APP.SIDEBAR.ABOUT", url: "about", icon: "" });
  }

  setLang(lang: string) {
    this.translateService.use(lang);
  }

  itemClick(url: string, drawer: MatSidenav) {
    this.router.navigateByUrl(url);
    drawer.close();
  }
}
