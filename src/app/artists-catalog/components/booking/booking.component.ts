import {Component, OnInit} from '@angular/core';
import {Artist} from "../../models/artist.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, Subscriber, Subscription, switchMap, tap} from "rxjs";
import {ArtistsStoreService} from "../../services/artists-store.service";
import {UserApiService} from "../../../users/services/user-api.service";
import {ArtistsApiService} from "../../services/artists-api.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  label = "Booking";
  artist$!: Observable<Artist>;
  name?: string = "asdadfgs";
  nameSub: any;
  artistSub?: Subscription;

  bookingForm: FormGroup = this.formBuilder.group({
    artistName: ['',Validators.required],
    date: ['',Validators.required],
    venue: ['',Validators.required]
  })


  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private artistsStateManagementService: ArtistsStoreService,
              private artistDataAccessService: ArtistsApiService) {

  }


  ngOnInit(): void {
    this.artistSub = this.route.queryParams.pipe(switchMap(
      (params) => {
        return this.artistDataAccessService.getArtistById(params['id'])
      }
    )).subscribe(artist => this.bookingForm.setValue({
      artistName: artist.name,
      date: this.bookingForm.value.date,
      venue: this.bookingForm.value.venue
    }))
  }


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  onSubmit() {
    console.log(this.bookingForm.value)
  }
}
