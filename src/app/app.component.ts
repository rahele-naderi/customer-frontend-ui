import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-frontend-ui';

  constructor(private readonly translateService: TranslateService) {
  }

  setLang(lang: string) {
    this.translateService.use(lang);
  }
}
