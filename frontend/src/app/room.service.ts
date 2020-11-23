import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from 'src/interfaces/RoomsInterface';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "http://ec2-3-23-106-145.us-east-2.compute.amazonaws.com:3001/room"
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl)
  }

  createRoom(room: Room){
    return this.http.post<Room>(this.apiUrl, room);
  }

  editRoom(room: Room) {
    return this.http.patch<Room>(`${this.apiUrl}/${room._id}`, room);
  }

}
