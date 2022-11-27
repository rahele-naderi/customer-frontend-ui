import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from './material-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContainerComponent } from './container/container.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const componets = [ContainerComponent]


@NgModule({
  declarations: [
    ...componets,
  ],
  imports: [
    CommonModule,
    ...materialModules,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: "en-us",
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })

  ],
  exports: [
    ...materialModules,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule,
    ...componets,
  ]
})
export class SharedModule { }
