import { Component, AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements AfterViewInit {

  constructor(private analytics: AnalyticsService) { }


  ngAfterViewInit() {
    this.analytics.refreshFB()
 }

  ngOnInit() {
    this.analytics.updateCard('La boîte à envies', 
                              'Vous trouverez sur ce site des exemples de mes dernières créations. Explorez, profitez et surtout n\'hésitez pas me contacter !. Je réalise pour vous des bijoux et accessoires en cuir et sur mesure.',
                              'divers/La_boite_a_envie.jpg')
  }
}
