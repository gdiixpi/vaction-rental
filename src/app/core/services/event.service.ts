import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface Event {
  type: string;
  payload?: any;
}

type EventCallback = (payload: any) => void;

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private handler = new Subject<Event>();
  constructor(private http: HttpClient) {}

  /**
   * Broadcast the event
   * @param type type of event
   * @param payload payload
   */
  broadcast(type: string, payload = {}) {
    this.handler.next({ type, payload });
  }

  /**
   * Subscribe to event
   * @param type type of event
   * @param callback call back function
   */
  subscribe(type: string, callback: EventCallback): Subscription {
    return this.handler
      .pipe(filter((event) => event.type === type))
      .pipe(map((event) => event.payload))
      .subscribe(callback);
  }

  getPublic(url: any): Observable<any> {
    return this.http.get(environment.apiUrl + url);
  }

  postPublic(url: any, data_: any): Observable<any> {
    return this.http.post(environment.apiUrl + url, data_);
  }
}
