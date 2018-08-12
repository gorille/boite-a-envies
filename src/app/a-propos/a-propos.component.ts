import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent {
  schema = {
  	"@context": "http://schema.org",
  	"@type": "LocalBusiness",
  	"address": {
    "@type": "PostalAddress",
    "addressLocality": "Badevel",
    "postalCode":"25490",
    "streetAddress": "1a rue rue du mavuron"
  	},
  	"description": "Création de bijoux, bracelets et d'accessoires de petite maroquinerie sur mesure. Je réalise pour vous des bijoux personnalisés selon vos envies.'",
  	"name": "La boîte à envies",
  	"telephone": "06 86 18 14 91",
    "sameAs" : [ "https://www.facebook.com/laboiteaenvies",
                ],
    "image": "https://res.cloudinary.com/dgtsw7ufe/image/upload/divers/La_boite_a_envie.jpg",
    "url": "https://la-boite-a-envies.fr",
    "priceRange": "Entre 3 et 25 Euros",
	}
}
