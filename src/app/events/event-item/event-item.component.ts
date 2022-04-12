import { Component, Input, OnInit } from '@angular/core';
import { Decision } from '../models/event-item.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})
export class EventItemComponent implements OnInit {
  @Input() name!: string;
  @Input() address!: string;
  @Input() startDate!: Date;
  @Input() startTime!: Date;
  @Input() decision!: Decision;
  constructor() {}

  ngOnInit(): void {}
}
