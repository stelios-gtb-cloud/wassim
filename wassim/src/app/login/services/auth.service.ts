import {Injectable} from "@angular/core";
import {FirebaseClientBase} from "../../../clients/base/firebase.client.base";
import {CredentialsForCreationDto} from "../../create-user/dtos/credentials-for-creation.dto";
import {BehaviorSubject} from "rxjs";
import {User} from "@firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$ = new BehaviorSubject<User | null>(null);

  constructor(private firebaseClient: FirebaseClientBase) {
  }

  public async registerUserWithEmailAndPassword(email: string, password: string): Promise<void> {
    await this.firebaseClient.createUserWithCredentials(new CredentialsForCreationDto({
      email,
      password
    }));
    await this.refreshUser();
  }

  public async signInWithEmailAndPassword(email: string, password: string): Promise<void> {
    await this.firebaseClient.signInWithEmailAndPassword(email, password)
    await this.refreshUser();
  }

  public async signOutUser(): Promise<void> {
    await this.firebaseClient.signOutUser();
    await this.refreshUser();
  }

  public async refreshUser() {
    try {
      const user = await this.firebaseClient.getCurrentUser()
      this.user$.next(user);
    } catch (e) {
      this.user$.next(null);
    }
  }

}
