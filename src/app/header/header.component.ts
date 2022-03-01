import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email=""
  constructor(private rs:RouterService) { 
    this.email = localStorage.getItem('email') as string
  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    this.rs.routeToLogin();
  }
}
