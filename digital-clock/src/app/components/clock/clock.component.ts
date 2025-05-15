import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit {
  time: string = '';

  ngOnInit(): void {
      this.updateTime();
      setInterval(() => {
        this.updateTime();
      }, 1000)
  }

  updateTime(): void {
    const now = new Date();
    const hours = this.addZero(now.getHours());
    const minutes = this.addZero(now.getMinutes());
    const seconds = this.addZero(now.getSeconds());
    this.time = `${hours}:${minutes}:${seconds}`;

  }
  addZero(num: number): string {
      return num < 10 ? '0' + num : num.toString();
    }

}
