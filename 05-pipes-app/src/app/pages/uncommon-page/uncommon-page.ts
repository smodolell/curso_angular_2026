import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe } from '@angular/common';
const client1 = {
  name: 'Sergio',
  gender: 'male',
  age: 41,
  address: '9 de julio 4545',
};
const client2 = {
  name: 'Maria',
  gender: 'female',
  age: 45,
  address: 'Toronto, Candad',
};
@Component({
  selector: 'app-uncommon-page',
  imports: [Card,I18nSelectPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  client = signal(client1);

  invitationMap ={
    male:'invitarlo',
    female:'invitarla'
  }
  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
    } else {
      this.client.set(client1);
    }
  }
}
