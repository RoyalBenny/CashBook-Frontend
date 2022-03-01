import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { RouterService } from './services/router.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {
  token=''
  constructor(private rs:RouterService,private auth:AuthService){
    this.auth.getToken().subscribe(
      data=>this.token = data.getItem('token') as string
    )
  }
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):
     boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise<boolean>((resolve,rejects)=>{
      if(this.token!=null && this.token.length>0)
      resolve(true)
      else{
        rejects(false);
        this.rs.routeToLogin();
      }
    })
  }
}
