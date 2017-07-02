import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as template from '12g-env-template';
import * as api from 'marvel-api';
import * as md5 from 'js-md5';
import 'rxjs/add/operator/map';

@Injectable()
export class GetCharactersService {

  marvel = api.createClient({
    publicKey: '8e3b4a83e46e3ab0261617f4bd5058de',
    privateKey: 'c33b19b197c8a856602c358bfb03477c4e85f168'
  });
  MARVEL_PUBLIC_KEY='8e3b4a83e46e3ab0261617f4bd5058de';
  MARVEL_PRIVATE_KEY='c33b19b197c8a856602c358bfb03477c4e85f168';
  ts = new Date().getTime();
  hash = this.ts + this.MARVEL_PRIVATE_KEY + this.MARVEL_PUBLIC_KEY;
  crypt = md5(this.hash);
  url = 'https://gateway.marvel.com:443/v1/public/characters?limit=18&ts='+this.ts+'&apikey='+this.MARVEL_PUBLIC_KEY+'&hash='+this.crypt;

  constructor(private http: Http) { }
  i = 0;
  getNew(){
    this.url = this.url + '&offset=';
    let link = this.url.split("&offset");
    this.i++;
    this.url = link[0] + '&offset=' + (18*this.i);
    return this.http.get(this.url).map(res => res.json());
  }

  getHeroes(){
    return this.http.get(this.url).map(res => res.json());
  }

}
