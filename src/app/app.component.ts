import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faHome, faLocationArrow, faBell, faMapPin, faCogs, faShareAlt,faBars, faCloudSun, faCloudRain, 
  faCloud, faCloudMoon, faUmbrella, faSun, faWind, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1';
  public dataAvailablity = false; 
  faHome = faHome;
  faLocationArrow = faLocationArrow;
  faBell = faBell;
  faMapPin = faMapPin;
  faCogs = faCogs;
  faShareAlt = faShareAlt;
  faBars = faBars;
  faCloudSun = faCloudSun;
  faCloudRain = faCloudRain;
  faCloud = faCloud;
  faCloudMoon = faCloudMoon;
  faUmbrella = faUmbrella;
  faSun = faSun;
  faWind = faWind;
  faThermometerHalf = faThermometerHalf;

  showSideNavBar = false;

  constructor(private httpClient: HttpClient) {
    var constructorObj = this;
    
    setTimeout(function(){
      constructorObj.dataAvailablity = true;
    },5000);
  }

  ngOnInit(){
  }

  openSideBar = function(){
    this.showSideNavBar = !this.showSideNavBar;
  }
}


