import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';
import { SongService, Song } from '../services/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonBackButton,
    IonButtons,
    CommonModule,
    FormsModule
  ]
})
export class SongsPage implements OnInit {
  songs: Song[] = [];

  constructor(
    private songService: SongService,
    private router: Router
  ) { }

  ngOnInit() {
    this.songs = this.songService.getAllSongs();
  }

  openSongDetail(songId: number) {
    this.router.navigate(['/song-detail', songId]);
  }

}
