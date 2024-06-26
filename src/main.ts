import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig, initializeFaLibrary } from './app/app.config';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

bootstrapApplication(AppComponent, appConfig)
  .then(ref => {
    const library = ref.injector.get(FaIconLibrary);
    initializeFaLibrary(library);
  })
  .catch(err => console.error(err));

