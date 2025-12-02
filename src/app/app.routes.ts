import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'songs',
    loadComponent: () => import('./songs/songs.page').then(m => m.SongsPage)
  },
  {
    path: 'song-detail/:id',
    loadComponent: () => import('./song-detail/song-detail.page').then(m => m.SongDetailPage)
  },
];
