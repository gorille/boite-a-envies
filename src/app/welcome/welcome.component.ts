import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements AfterViewInit {

  constructor(private analytics: AnalyticsService) { }


  ngAfterViewInit() {
    if ((<any>window).FB !== undefined) {
     (<any>window).FB.XFBML.parse();
   }
 }

  ngOnInit() {
    this.analytics.updateCard('La boîte à envies', 
                              'Vous trouverez sur ce site des exemples de mes dernières créations. Explorez, profitez et surtout n\'hésitez pas me contacter !. Je réalise pour vous des bijoux et accessoires en cuir et sur mesure.',
                              'http://res.cloudinary.com/dgtsw7ufe/image/upload/v1533575072/divers/La_boite_a_envie.jpg')
  }
}
