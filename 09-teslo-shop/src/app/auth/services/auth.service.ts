import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '@auth/interfaces/user.interface';

type AuthStatus = 'checking' | 'autenticated' | 'not-autenticate';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(null);

  private http = inject(HttpClient);

  authStatus = computed<AuthStatus>(() => {
    if (this.authStatus() === 'checking') return 'checking';
    if (this._user()) {
      return 'autenticated';
    }
    return 'not-autenticate';
  });

  user = computed<User | null>(() => this._user());
  token = computed<string | null>(() => this._token());
}
