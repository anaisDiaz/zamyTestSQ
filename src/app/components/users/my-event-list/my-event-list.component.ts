import { Component, OnInit } from '@angular/core';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-my-event-list',
  templateUrl: './my-event-list.component.html',
  styleUrls: ['./my-event-list.component.css']
})
export class MyEventListComponent implements OnInit {

  myEvents = [new Event('EventA1', 'asas', 'asasa', new Date(), 0,
    new Date(), 'http://s2.subirimagenes.com/otros/previo/thump_9855489il570xn.jpg'),
  new Event('EventA2', 'asasass', 'asasasasa', new Date(), 0, new Date(),
    'http://s2.subirimagenes.com/otros/previo/thump_9855489il570xn.jpg'),
  new Event('EventA3', 'asas', 'asasa', new Date(), 0, new Date(),
    'http://s2.subirimagenes.com/otros/previo/thump_9855489il570xn.jpg'), new Event('EventA4', 'asasass', 'asasasasa',
      new Date(), 0, new Date(), 'http://s2.subirimagenes.com/otros/previo/thump_9855489il570xn.jpg')];

  constructor() { }

  ngOnInit() {
  }

}

