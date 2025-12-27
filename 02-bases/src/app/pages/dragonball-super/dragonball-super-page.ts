import { Component, inject, signal } from '@angular/core';
import { CraracterList } from '../../components/dragonball/craracter-list/craracter-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonBallService } from '../../services/dragonball.service';

@Component({
  imports: [CraracterList, CharacterAdd],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {

  public dragoBallService = inject(DragonBallService);


}
