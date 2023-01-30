import { Component } from '@angular/core';
import{Chart,registerables}from 'node_modules/chart.js'
Chart.register(...registerables)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myhealth';
}
