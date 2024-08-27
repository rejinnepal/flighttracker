import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AirlineDetailsComponent} from './airline-details/airline-details.component';
// import {AirplanemodeActiveIcon} from '@mui/icons-material/AirplanemodeActive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AirlineDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flighttracker';
}
