import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ScheduleComponent} from "@syncfusion/ej2-angular-schedule";

@Component({
  selector: 'company-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, AfterViewInit {

  @ViewChild('scheduleObj') scheduleObj!: ScheduleComponent;
  constructor() { }

  ngOnInit(): void {
    document.getElementById('js-licensing')?.remove();
  }

  ngAfterViewInit(): void {
    this.scheduleObj.views = ['Week'];
    this.scheduleObj.timeScale = {enable: true, interval: 30, slotCount: 1};
    this.scheduleObj.showTimeIndicator = false;
    this.scheduleObj.startHour = '10:00';
    this.scheduleObj.endHour = '22:00';
    this.scheduleObj.rowAutoHeight = true;
  }
}
