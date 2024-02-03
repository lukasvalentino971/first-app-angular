import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from '../app/housing-location/housing-location.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HousingLocationComponent],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'homes';
}
