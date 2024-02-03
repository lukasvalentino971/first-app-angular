import { Housinglocation } from './../housinglocation';
import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  @Input() housingLocation! : Housinglocation;
}
