import { Component } from '@angular/core';
import{Chart,registerables}from 'node_modules/chart.js'
Chart.register(...registerables)
@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent {

}
