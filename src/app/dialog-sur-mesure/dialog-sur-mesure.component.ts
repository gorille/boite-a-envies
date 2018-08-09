import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dialog-sur-mesure',
  templateUrl: './dialog-sur-mesure.component.html',
  styleUrls: ['./dialog-sur-mesure.component.css']
})
export class DialogSurMesureComponent implements OnInit, OnDestroy {

  ALL = [
            {type: 'user', messages: ['Bonjour la boîte à envies !']},
            {type: 'bot',  messages: ['Bonjour !', 'Que puis-je faire pour vous aider ?']},
            {type: 'user', messages: ["J'aurais besoin d'un bracelet dans les tons rose et noir pour aller avec ma robe", 
                                      "je l'ai trouvée sur internet à cet endroit"]},
            {type: 'bot',  messages: ["Pas de soucis, je vais regarder et vous envoyer des propositions."]},
            {type: 'user', messages: ["Merci !", "Vous auriez déja une idée du prix ?"]},
            {type: 'bot',  messages: ["Cela varie entre 15 et 25 euros en fonction de la largeur du bracelet et de vos envies"]},
          ]      

  dialog = []   
  position = 1
  interval: any

  constructor() { }

  ngOnInit() {
    this.interval = setInterval( () => this.incrementDialog(), 3000)
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private incrementDialog() {
    this.dialog = this.ALL.slice(0, this.position)
    this.position += 1
    if (this.position > this.ALL.length) {
      clearInterval(this.interval)
    }
  }

  isBotMessage(type: string): boolean {
    return type === 'bot'
  }
}
