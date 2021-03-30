import { Injectable } from '@angular/core';
import Twitter, { TwitterOptions } from 'twitter-lite';
@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  protected apiKey = 'LXpX4neZULnbJwVhRuay33jR2';
  protected apiSecretKey = 'Lbgjn95BnwVXFEXR48h8OgereUoDa5uKqeUqY36siTUSGtSik1';
  protected bearerToken = 'AAAAAAAAAAAAAAAAAAAAALEmOAEAAAAA%2FbrPvU2NID9AutRj7yT0c%2FTDGO8%3DEhKhyVEWhvgruW7fFplarqIZ5JJ1ECotLj23YqurW55OOVkRxD';
  constructor() { }
}
