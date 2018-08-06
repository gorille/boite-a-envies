import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarCollapsed=true;
  images = [  'http://res.cloudinary.com/dgtsw7ufe/image/upload/c_scale,w_1200/c_crop,h_571,w_1200/v1533575072/divers/La_boite_a_envie.jpg',
              'http://res.cloudinary.com/dgtsw7ufe/image/upload/c_crop,h_571,w_1200/v1533574043/divers/La_boite_a_envies_porte_monnaie.jpg',
              'http://res.cloudinary.com/dgtsw7ufe/image/upload/c_crop,h_571,w_1200/v1533574042/divers/La_boite_a_envies_bracelet.jpg',
              'http://res.cloudinary.com/dgtsw7ufe/image/upload/c_crop,h_571,w_1200/v1533574041/divers/La-boite-a-envies-Bracelet-bleu-coeur.jpg',
              'http://res.cloudinary.com/dgtsw7ufe/image/upload/c_crop,h_571,w_1200/v1533574041/divers/La-boite-a-envies-Bracelet-etoile.jpg',
              'http://res.cloudinary.com/dgtsw7ufe/image/upload/c_crop,h_571,w_1200/v1533574040/divers/La-boite-a-envies-aumoniere-bleu.jpg'
           ]
}
