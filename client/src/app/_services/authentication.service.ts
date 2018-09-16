import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }
    readonly URL_API ='http://localhost:3000/api/user/signin';
    login(email: string, password: string) {
        const User={
            email: email,
            password: password
        }
        
       // console.log(User);
        return this.http.post<any>(this.URL_API,  User )
            .pipe(map(usuario => {
                if (usuario) {
                    usuario.authdata = window.btoa(email + ':' + password);
                  localStorage.setItem('currentUser', JSON.stringify(email));
                }

               return usuario;
            }
            ))
            ;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}