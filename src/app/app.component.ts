import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeCrafters-Frontend';

  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);    
    document.documentElement.lang = language; // Change the lang attribute of <html> element
    document.body.className = language; // Toggle CSS class for RTL
  }
}
