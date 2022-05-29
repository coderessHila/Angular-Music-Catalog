import {Component, OnInit, Input } from '@angular/core';
import {Artist} from "../../artists-data/artist.interface";
import {GetArtistsDataService} from "../../get-artists-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ArtistsStateManagementService} from "../../catalog/catalog-services/artists-state-management.service";

@Component({
  selector: 'app-feed-artist',
  templateUrl: './feed-artist.component.html',
  styleUrls: ['./feed-artist.component.scss']
})
export class FeedArtistComponent implements OnInit {

  @Input() artist?: Artist;

  constructor(private getArtistsDataService: GetArtistsDataService,
              private router: Router,
              private route: ActivatedRoute,
              private artistsStateManagementService: ArtistsStateManagementService) {
  }

  ngOnInit(): void {
  }

  navigateToArtistPage() {
    this.router.navigate(['artist'], {
      relativeTo: this.route.parent,
      queryParams: {artistName: this.artist?.name, id: this.artist?.id}
    })
  }

  navigateToBookingPage() {
    this.router.navigate(['booking'], {
      relativeTo: this.route.parent,
      queryParams: {artistName: this.artist?.name, id: this.artist?.id}
    })
  }

  clickFavorites(event: any) {
    event.target.checked ? console.log("add to favorites", this.artist?.id) : console.log("remove from favorites");
  }
}
