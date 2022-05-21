import { Component, OnInit } from '@angular/core';
import {GetArtistsDataService} from "../get-artists-data.service";
import {IArtist} from "../artists-data/artist.interface";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  artists: IArtist[] = this.getArtistsDataService.getAllArtists();

  constructor(private getArtistsDataService:GetArtistsDataService) { }

  ngOnInit(): void {
  }



}
