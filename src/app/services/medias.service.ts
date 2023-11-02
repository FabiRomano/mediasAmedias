import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from '../models/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private apiUrl = 'http://localhost:8080/api/medias/all'; // Asegúrate de reemplazar con la URL correcta de tu API

  constructor(private http: HttpClient) {}

  getMedias(): Observable<Media[]> {
    return this.http.get<Media[]>(this.apiUrl);
  }

  getMediaById(id: number): Observable<Media> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Media>(url);
  }

  addMedia(media: Media): Observable<Media> {
    return this.http.post<Media>(this.apiUrl, media);
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
