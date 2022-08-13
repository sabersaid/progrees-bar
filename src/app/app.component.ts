import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-progress-bars';
  progressBars = [{
    "title": 'Initialisation du test technique',
    "color": '#60E8B6',
    "progress": '50'
  },
  {
    "title": 'Avancement de la phase de développement',
    "color": '#60ADE8',
    "progress": '25'
  }
  ]

  resetCounter() {
    this.progressBars.forEach((element, index) => {
      this.progressBars[index].progress = '0';
      this.progressBars[index].color = '#7160E8';
    });

  }
  addFivePercent() {
    this.progressBars.forEach((element, index) => {
     
      if (Number(this.progressBars[index].progress) + 5 <= 100) {
        this.progressBars[index].progress = (Number(this.progressBars[index].progress) + 5).toString();
        this.progressBars[index].color = this.getColor(Number(this.progressBars[index].progress))
  
      } else alert('La valeur maximale est 100');
    });


  }

  addTenPercent() {
    this.progressBars.forEach((element, index) => {
     
      if (Number(this.progressBars[index].progress) + 10 <= 100) {
        this.progressBars[index].progress = (Number(this.progressBars[index].progress) + 10).toString();
        this.progressBars[index].color = this.getColor(Number(this.progressBars[index].progress))
  
      } else alert('La valeur maximale est 100');
    });

  }

  getColor(progress: number): string {
    if (progress >= 0 && progress < 25) return '#7160E8'
    else if (progress >= 25 && progress < 50) return '#60ADE8'
    else if (progress >= 50 && progress < 75) return '#60E8B6'
    else return '#30DB63'

  }

}

