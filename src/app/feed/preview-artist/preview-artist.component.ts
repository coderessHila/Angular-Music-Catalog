import { Component, OnInit, Input } from '@angular/core';
import {IArtist} from "../../artists-data/artist.interface";

@Component({
  selector: 'app-preview-artist',
  templateUrl: './preview-artist.component.html',
  styleUrls: ['./preview-artist.component.scss']
})
export class PreviewArtistComponent implements OnInit {
  @Input() artist?: IArtist;

  constructor() { }

  ngOnInit(): void {
  }

}
