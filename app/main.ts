import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { provideNglConfig } from 'ng-lightning/ng-lightning';

bootstrap(AppComponent, [provideNglConfig()]);