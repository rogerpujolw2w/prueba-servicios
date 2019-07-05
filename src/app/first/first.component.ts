import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
  //providers: [CounterService]
})
export class FirstComponent implements OnInit {

  constructor(private counter: CounterService) { }

  ngOnInit() {
  }

  incrementCounter() {
    this.counter.increment();
  }

}
