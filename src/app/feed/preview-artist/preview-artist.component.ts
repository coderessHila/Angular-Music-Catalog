import {Component, OnInit, Input} from '@angular/core';
import {IArtist} from "../../artists-data/artist.interface";
import {GetArtistsDataService} from "../../get-artists-data.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-preview-artist',
  templateUrl: './preview-artist.component.html',
  styleUrls: ['./preview-artist.component.scss']
})
export class PreviewArtistComponent implements OnInit {

  public get current(): IArtist {
    return this.getArtistsDataService.artistToPreview as IArtist;
  }

  constructor(private getArtistsDataService: GetArtistsDataService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  navigateTo(navigateTo: string) {
    this.router.navigate([navigateTo], {relativeTo: this.route.parent, queryParams: {artistName: this.current.name, id: this.current.id}})
  }

}
