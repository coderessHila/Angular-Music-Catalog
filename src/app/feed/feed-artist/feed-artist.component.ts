import { Component, OnInit,Input } from '@angular/core';
import {IArtist} from "../../artists-data/artist.interface";

@Component({
  selector: 'app-feed-artist',
  templateUrl: './feed-artist.component.html',
  styleUrls: ['./feed-artist.component.scss']
})
export class FeedArtistComponent implements OnInit {

  @Input() artist?: IArtist;

  constructor() { }

  ngOnInit(): void {
  }

}
