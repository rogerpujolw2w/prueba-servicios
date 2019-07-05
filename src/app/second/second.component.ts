import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
  //providers: [CounterService]
})
export class SecondComponent implements OnInit {

  constructor(private counter: CounterService) { }

  ngOnInit() {
  }

  incrementCounter() {
    this.counter.increment();
  }

}
