import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { AuthResponse } from '@auth/interfaces/auth-response.interface';
import { User } from '@auth/interfaces/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

type AuthStatus = 'checking' | 'autenticated' | 'not-autenticate';
const baseUrl = environment.baseUrl;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(localStorage.getItem('token'));

  private http = inject(HttpClient);

  authStatus = computed<AuthStatus>(() => {
    if (this.checkStatusResource.isLoading()) return 'checking';
    if (this._authStatus() === 'checking') return 'checking';
    if (this._user()) {
      return 'autenticated';
    }
    return 'not-autenticate';
  });

  checkStatusResource = rxResource({
    stream: () => this.checkStatus(),
  });



  user = computed<User | null>(() => this._user());
  token = computed<string | null>(() => this._token());

  login(email: string, password: string): Observable<boolean> {
    return this.http
      .post<AuthResponse>(`${baseUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        map((resp) => this.handlerAuthSuccess(resp)),
        catchError((error: any) => this.handlerAuthError(error)),
      );
  }
  checkStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return of(false);
    }

    return this.http
      .get<AuthResponse>(`${baseUrl}/auth/check-status`, {})
      .pipe(
        map((resp) => this.handlerAuthSuccess(resp)),
        catchError((error: any) => this.handlerAuthError(error)),
      );
  }

  logout() {
    this._user.set(null);
    this._token.set(null);
    this._authStatus.set('not-autenticate');
    localStorage.removeItem('token');
  }

  private handlerAuthSuccess({ token, user }: AuthResponse) {
    this._user.set(user);
    this._authStatus.set('autenticated');
    this._token.set(token);
    localStorage.setItem('token', token);

    return true;
  }

  private handlerAuthError(error: any) {
    this.logout();
    return of(false);
  }
}
