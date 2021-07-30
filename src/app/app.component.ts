import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HEROES } from './heroes';
import { ASTRAUNAUTS } from './astronauts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'DirectiveDemo';
  showIt = true;
  fullName = 'Cirilla Fiona Ellen Riannon';
  alertType = 'primary';
  heroes = HEROES;
  astroList = ASTRAUNAUTS;
  astro1 = this.astroList[0];

  canSave = true;
  isUnchanged = false;
  isSpecial = true;
  isRoyalty = true;
  isBlackListed = false;
  isRedacted = true;
  goForLaunch = true;
  toggleIfElse = true;

  height = '200px';

  currentStyles = {
    'font-style': this.canSave ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold' : 'normal',
    'font-size': this.isSpecial ? '40px' : '12px',
  };

  sampleTexts = [
    { text: 'This text changes color 1' },
    { text: 'This text changes color 2' },
    { text: 'This text changes color 3' },
    { text: 'This text changes color 4' }
  ]

  updateStyles() {
    this.currentStyles = Object.assign({},
      {
        'font-style': this.canSave ? 'italic' : 'normal',
        'font-weight': !this.isUnchanged ? 'bold' : 'normal',
        'font-size': this.isSpecial ? '40px' : '12px',
      }); 
  }

  TrackAstroID(index: number, atro: any): string {
    return atro.id;
  }
  trackByHeroID(index: number, hero: any) {
    return hero.id;
  }

  updateAstroList() {
    this.astroList = ASTRAUNAUTS;
  }

  updateHeroList () {
    this.heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' }
    ];
  }

  resetHeroList () {
    this.heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
  }

  hasBeenRedacted() {
    return this.isRedacted ? 'redacted' : ''
  }
}
