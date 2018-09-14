import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        const User={
            email: email,
            password: password
        }
        console.log(User);
        return this.http.post('http://localhost:3000/api/user/signin',  User )
            .pipe(map(usuario => {
                if (usuario) {
              
                  localStorage.setItem('currentUser', JSON.stringify(User));
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