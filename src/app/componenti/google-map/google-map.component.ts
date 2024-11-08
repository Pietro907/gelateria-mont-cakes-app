import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMap],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})
export class GoogleMapComponent {
  options: google.maps.MapOptions = {
    center: {lat: 41.942672, lng: 12.421121},
    zoom: 17,
  };
}
