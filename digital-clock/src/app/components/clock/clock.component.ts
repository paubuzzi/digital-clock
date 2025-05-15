import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.component.html',
styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: string = '';
  errorMessage: string = '';

  ngOnInit(): void {
      this.updateTime();
      setInterval(() => {
        this.updateTime();
      }, 1000)
  }

  updateTime(): void {
    try{
       const now = new Date();
    const hours = this.addZero(now.getHours());
    const minutes = this.addZero(now.getMinutes());
    const seconds = this.addZero(now.getSeconds());
    this.time = `${hours}:${minutes}:${seconds}`;
 }catch(error){
  this.errorMessage = 'error al gargar la hora';
  console.error('error al cargar la hora', error);
 }
  }


  addZero(num: number): string {
    try{
        return num < 10 ? '0' + num : num.toString();
    }catch (error){
      this.errorMessage = 'error al agregar el cero';
      console.error('error al agregar el cero', error);
      return num.toString();
    }
    }


}
