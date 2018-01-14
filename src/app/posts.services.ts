import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostsService {
    path: string = "";
    audioFolder: string = "";
    videoFolder: string = "";
    startPath: string = "http://localhost:17442/";
    handShakeComplete: boolean = false;

    constructor(private http: Http){
        console.log('PostsService Initialized...');
    }

    startHandshake(): Observable<string>
    {
        return this.http.get(this.startPath + "url")
            .map(res => res.json());
    }

    getVideoFolder(): Observable<string>
    {
        return this.http.get(this.startPath + "videofolder")
            .map(res => res.json());
    }

    getAudioFolder(): Observable<string>
    {
        return this.http.get(this.startPath + "audiofolder")
            .map(res => res.json());
    }

    makeMP3(url: string): Observable<string>
    {
        return this.http.post(this.path + "tomp3",{url: url})
            .map(res => res.json());
    }

    makeMP4(url: string): Observable<string>
    {
        return this.http.post(this.path + "tomp4",{url: url})
            .map(res => res.json());
    }

    getFileStatusMp3(name: string): Observable<string> {
        return this.http.post(this.path + "mp3fileexists",{name: name})
            .map(res => res.json());
    }

    getFileStatusMp4(name: string): Observable<string> {
        return this.http.post(this.path + "mp4fileexists",{name: name})
            .map(res => res.json());
    }
}


