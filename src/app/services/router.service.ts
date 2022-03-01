import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  routeToHome(){
    this.router.navigate(['/home'])
  }

  routeToInput(){
    this.router.navigate(['/input'])
  }

  routeToLogin(){
    this.router.navigate(['/login'])
  }
}
