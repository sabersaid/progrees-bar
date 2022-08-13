import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() color = '#60E8B6';
  @Input() progress = '50';

  constructor() { }

  ngOnInit(): void {
  }

}
