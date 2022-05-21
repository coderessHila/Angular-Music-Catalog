import { Component, OnInit, Input } from '@angular/core';
import {IArtist} from "../../artists-data/artist.interface";
import {GetArtistsDataService} from "../../get-artists-data.service";
// import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-preview-artist',
  templateUrl: './preview-artist.component.html',
  styleUrls: ['./preview-artist.component.scss']
})
export class PreviewArtistComponent implements OnInit {

  public get current():IArtist{
    return this.getArtistsDataService.artistToPreview as IArtist;
  }

  constructor(private getArtistsDataService:GetArtistsDataService) { }

  ngOnInit(): void {

  }



}
