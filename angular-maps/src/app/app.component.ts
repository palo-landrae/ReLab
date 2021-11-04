import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center: any;
  position: any;
  position2: any;
  label: string;
  circleOptions: {};
  rectangleOptions: { };
  markerOptions: google.maps.MarkerOptions;
  markerOptions2: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[];
  vertices2: google.maps.LatLngLiteral[];

  constructor() {
    this.position = { lat: 45.506738, lng: 9.190766 };
    this.position2 = { lat: 45.5068, lng: 9.1868 };
    this.center = this.position;
    this.label = 'ciao';
    this.circleOptions = { fillColor: 'red' };
    this.rectangleOptions = { fillColor: 'yellow' };
    let iconData: google.maps.Icon = {
      url: './assets/img/cat_acrobat.ico',
      scaledSize: new google.maps.Size(60, 60),
    };

    let iconData2: google.maps.Icon = {
      url: './assets/img/rick.gif',
      scaledSize: new google.maps.Size(69, 69),
    };

    this.markerOptions = { icon: iconData };
    this.markerOptions2 = { icon: iconData2 };

    this.vertices = [
      { lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      { lat: this.center.lat, lng: this.center.lng },
      { lat: this.center.lat - 0.001, lng: this.center.lng - 0.002 },
    ];

    this.vertices2 = [
      { lat: this.center.lat + 0.001, lng: this.center.lng + 0.002},
      { lat: this.center.lat + 0.001, lng: this.center.lng + 0.001 },
      { lat: this.center.lat - 0.001, lng: this.center.lng + 0.001 },
      { lat: this.center.lat - 0.001, lng: this.center.lng + 0.002 },
    ];
  }

  cambiaColore() {
    if (this.circleOptions['fillColor'] == 'red') {
      this.circleOptions = { fillColor: 'yellow' };
    } else if (this.circleOptions['fillColor'] == 'yellow') {
      this.circleOptions = { fillColor: 'green' };
    } else {
      this.circleOptions = { fillColor: 'red' };
    }
  }

  cambiaColoreRettangolo() {
    if (this.rectangleOptions['fillColor'] == 'red') {
      this.rectangleOptions = { fillColor: 'yellow' };
    } else if (this.rectangleOptions['fillColor'] == 'yellow') {
      this.rectangleOptions = { fillColor: 'green' };
    } else {
      this.rectangleOptions = { fillColor: 'red' };
    }
  }
}
