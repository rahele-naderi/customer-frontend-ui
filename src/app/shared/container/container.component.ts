import { Component, Input, OnInit } from '@angular/core';
import { DateAdapter } from "@angular/material/core";
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'src/app/models/menu-item.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  @Input() menuItems: MenuItem[] = [];

  constructor(private readonly translateService: TranslateService,
    private readonly adapter: DateAdapter<any>,
    private readonly router: Router) {
  }

  setLang(lang: string) {
    this.translateService.use(lang);
    this.adapter.setLocale(lang);
  }

  itemClick(url: string, drawer: MatSidenav) {
    this.router.navigateByUrl(url);
    drawer.close();
  }

}
