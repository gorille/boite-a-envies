import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarCollapsed=true;
  images = [  'https://res.cloudinary.com/dgtsw7ufe/image/upload/c_scale,w_1200/c_crop,h_571,w_1200/v1533575072/divers/La_boite_a_envie.jpg',
              'https://res.cloudinary.com/dgtsw7ufe/image/upload/c_crop,h_571,w_1200/v1533574043/divers/La_boite_a_envies_porte_monnaie.jpg',
              'https://res.cloudinary.com/dgtsw7ufe/image/upload/c_crop,h_571,w_1200/v1533574042/divers/La_boite_a_envies_bracelet.jpg',
              'https://res.cloudinary.com/dgtsw7ufe/image/upload/c_crop,h_571,w_1200/v1533574041/divers/La-boite-a-envies-Bracelet-bleu-coeur.jpg',
              'https://res.cloudinary.com/dgtsw7ufe/image/upload/c_crop,h_571,w_1200/v1533574041/divers/La-boite-a-envies-Bracelet-etoile.jpg',
              'https://res.cloudinary.com/dgtsw7ufe/image/upload/c_crop,h_571,w_1200/v1533574040/divers/La-boite-a-envies-aumoniere-bleu.jpg'
           ]
}
