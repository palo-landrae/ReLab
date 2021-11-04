import { AfterViewInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { GEOJSON, GeoFeatureCollection } from './models/geojson.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center: google.maps.LatLngLiteral = { lat: 45.506738, lng: 9.190766 };
  geoJsonObject: GeoFeatureCollection;
  fillColor: string = '#FF0000'; //Colore delle zone catastali
  markerList: google.maps.MarkerOptions[];

  zoom = 8;

  constructor() {
    //Questi dati dovremmo scaricarli dal server, per ora li abbiamo copiati nel file     gojson.model.ts
    this.geoJsonObject = GEOJSON;
    console.log(this.geoJsonObject); //stampo l'oggetto geoJsonObject sulla console
    this.markerGenerator();
  }

  @ViewChild('mapRef') mapRef: GoogleMap;
  ngAfterViewInit() {
    this.mapRef.data.addGeoJson(this.geoJsonObject);
    this.mapRef.data.setStyle(this.styleFunc);
  }

  styleFunc = (feature: any) => {
    console.log(feature.i.id);
    let newColor = '#FF0000'; //RED
    if (feature.i.id == 0) newColor = '#00FF00';
    //GREEN
    else newColor = '#0000FF'; //BLUE
    return {
      clickable: false,
      fillColor: newColor,
      strokeWeight: 1,
    };
  };

  markerGenerator() {
    this.markerList = new Array<google.maps.MarkerOptions>();
    for (let feature of this.geoJsonObject.features) {
      let marker = {
        position: {
          lng : feature.geometry.coordinates[0][0][0],
          lat : feature.geometry.coordinates[0][0][1],
        },
        label: String(feature.properties.id)
      };
      this.markerList.push(marker);
      console.log(this.markerList)
    }
  }
}
