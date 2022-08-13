import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-progress-bars';
  color ='#60E8B6';
  progress='50';

  resetCounter(){
    this.progress='0'
    this.color ='#7160E8'
  
  }
  addFivePercent(){
    if (Number(this.progress)+5 <= 100){
    this.progress = (Number(this.progress) + 5).toString();
    this.color = this.getColor(Number(this.progress))
    }else alert('La valeur maximale est 100');
  
  }

  addTenPercent(){
    if (Number(this.progress)+ 10 <= 100){
      this.progress = (Number(this.progress) + 10).toString();
      this.color = this.getColor(Number(this.progress))
      }else alert('La valeur maximale est 100');
  
  }

  getColor(progress:number):string{
    if(progress >=0 && progress < 25) return '#7160E8'
    else if (progress >=25 && progress < 50) return '#60ADE8'
    else if (progress >= 50 && progress < 75) return '#60E8B6'
    else  return '#30DB63'

  }
  
}

