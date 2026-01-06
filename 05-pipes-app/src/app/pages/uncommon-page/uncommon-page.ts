import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nPluralPipe, I18nSelectPipe, SlicePipe ,JsonPipe} from '@angular/common';
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
  imports: [Card, I18nSelectPipe,I18nPluralPipe,SlicePipe,JsonPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
    } else {
      this.client.set(client1);
    }
  }

  //Plural

  clients = signal(['Maria', 'Pedro', 'Fernando','Sergio','Pedro','Carolina','Federico','Olivia','Romina','Sofia']);
  clientsMap = signal({
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenesmos # clientes esperando',
  });
  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }


}
