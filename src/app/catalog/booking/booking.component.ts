import { Component, OnInit } from '@angular/core';
import {Artist} from "../models/artist.interface";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, Subscriber, Subscription, switchMap, tap} from "rxjs";
import {ArtistsStateManagementService} from "../catalog-services/artists-state-management.service";
import {UserApiService} from "../../users/services/user-api.service";
import {ArtistDataAccessService} from "../catalog-services/artist-data-access.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  label = "Booking";
  // artistId$!: Observable<string>;
  artist$!: Observable<Artist>;
  name?:string = "asdadfgs";
  nameSub: any;
  artistSub?: Subscription;

  bookingForm: FormGroup = this.formBuilder.group({
    artistName: [''],
    date: ['']
  })


  constructor(private formBuilder:FormBuilder, private route:ActivatedRoute, private artistsStateManagementService:ArtistsStateManagementService, private artistDataAccessService:ArtistDataAccessService) {

  }


  ngOnInit(): void {
    this.artistSub = this.route.queryParams.pipe(switchMap(
      (params) => {
        return this.artistDataAccessService.getArtistById(params['id'])
      }
    )).subscribe(artist => this.bookingForm.setValue({
      artistName: artist.name,
      date: this.bookingForm.value.date

    }))
    // this.artist$ = this.artistsStateManagementService.setCurrentArtist(this.artistId$)
    // this.nameSub = this.artist$.pipe(map(artist=> artist.name)).subscribe(value => {this.name = value})
  }



  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

}
