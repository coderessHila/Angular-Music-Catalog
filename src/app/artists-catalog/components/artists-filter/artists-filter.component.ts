import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ArtistsApiService} from "../../services/artists-api.service";
import {ArtistsQuery} from "../../artists-state/artists.query";
import {FormControl} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";
import {Artist} from "../../models/artist.interface";

@Component({
  selector: 'app-artists-filter',
  templateUrl: './artists-filter.component.html',
  styleUrls: ['./artists-filter.component.scss']
})
export class ArtistsFilterComponent implements OnInit{
  // this component lets you select artists and outputs an Observable Artist[] of the selected artists
  @Output() onCompare = new EventEmitter<Artist[]>()

  allArtists$ = this.artistsQuery.selectAllArtists$;

  constructor(private artistsApiService:ArtistsApiService,
              private artistsQuery:ArtistsQuery) { }

  ngOnInit(): void {

  }

  artistsToCompare = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  selectChange(event:MatSelectChange): void {
    console.log(event.value)
    console.log(this.artistsToCompare.value)
  }

  onCompareClick():void {
    console.log(this.artistsToCompare.value)
    this.onCompare.emit(this.artistsToCompare.value)
  }

}
