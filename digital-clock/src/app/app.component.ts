import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockComponent } from "./components/clock/clock.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digital-clock';
}
