import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private rs:RouterService) { }

  ngOnInit(): void {
  }
  onBtn(){
    this.rs.routeToInput()
  }
}
