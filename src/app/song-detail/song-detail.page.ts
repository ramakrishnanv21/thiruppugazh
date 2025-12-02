import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonNote
} from '@ionic/angular/standalone';
import { SongService, Song } from '../services/song.service';
import { addIcons } from 'ionicons';
import { musicalNotesOutline, bookOutline, bulbOutline } from 'ionicons/icons';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.page.html',
  styleUrls: ['./song-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    CommonModule,
    FormsModule,
    IonNote
  ]
})
export class SongDetailPage implements OnInit {
  song: Song | undefined;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService
  ) {
    // Register icons
    addIcons({
      'musical-notes-outline': musicalNotesOutline,
      'book-outline': bookOutline,
      'bulb-outline': bulbOutline
    });
  }

  ngOnInit() {
    const songId = Number(this.route.snapshot.paramMap.get('id'));
    if (songId) {
      this.song = this.songService.getSongById(songId);
    }
  }

}
