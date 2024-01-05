import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from '../models/media';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private apiUrl = `${environment.apiUrl}/medias`;

  constructor(private http: HttpClient) {}




  getMedias(): Observable<Media[]> {
    return this.http.get<Media[]>(this.apiUrl + '/all');
  }

  getMediaById(id: number): Observable<Media> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Media>(url);
  }

  addMedia(media: Media): Observable<Media> {
    return this.http.post<Media>(this.apiUrl + '/create', media);
  }

  updateMedia(media: Media): Observable<Media> {
    const url = `${this.apiUrl}/${media.id}`;
    return this.http.put<Media>(url, media);
  }

  deleteMedia(id: number): Observable<Media> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Media>(url);
  }

}
