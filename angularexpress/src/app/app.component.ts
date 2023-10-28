import { Component ,OnInit} from '@angular/core';
import  { ActivatedRoute,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  hide: boolean = false;
  constructor(private router: Router,private ActivatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.router.navigate(['/login']);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        this.hide = currentUrl === '/login';
      }       
  });
  }
  logout(){
    this.router.navigate(['/login']);
  }
  
  }



