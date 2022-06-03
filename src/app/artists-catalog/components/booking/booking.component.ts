import {Component, OnInit} from '@angular/core';
import {Artist} from "../../models/artist.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, Subscription, switchMap, take} from "rxjs";
import {ArtistsStoreService} from "../../services/artists-store.service";
import {ArtistsApiService} from "../../services/artists-api.service";
import {ArtistsQuery} from "../../artists-state/artists.query";
import {UsersQuery} from "../../../users/user-state/user.query";
import {BookedGig} from "../../models/booked-gig.interface";
import {BookedGigsApiService} from "../../services/booked-gigs-api.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  label = "Booking";
  artist$!: Observable<Artist>;
  name?: string;
  nameSub: any;
  artistSub?: Subscription;
  allArtists$: Observable<Artist[]>;
  userId!: string;
  artistGigsDates: Date[] = [];

  isAfterSubmit: boolean = false;

  venueValidators = [Validators.required]
  bookingForm: FormGroup = this.formBuilder.group({
    artistId: ['', Validators.required],
    date: ['', Validators.required],
    venue: ['', this.venueValidators]
  })


  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private artistsStateManagementService: ArtistsStoreService,
              private artistDataAccessService: ArtistsApiService,
              private artistsQuery: ArtistsQuery,
              private usersQuery: UsersQuery,
              private bookedGigsApiService: BookedGigsApiService) {
    this.allArtists$ = this.artistsQuery.selectAllArtists$;
    this.usersQuery.selectUserId$.subscribe(id => {
      this.userId = id
    })
  }


  ngOnInit(): void {
    this.artistSub = this.route.queryParams.pipe(switchMap(
      (params) => {
        return this.artistDataAccessService.getArtistById(params['id'])
      }
    )).subscribe(artist => {
      this.bookingForm.patchValue({
        artistId: artist.id
      })
      this.getArtistBookedDates(artist.id)
    })
  }

  // myFilter = (d: Date | null): boolean => {
  //   const day = (d || new Date()).getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // };

  getArtistBookedDates(artistId: string): void {
    this.bookedGigsApiService.getArtistGigs(artistId).pipe(map(
      (gigs: BookedGig[]): Date[] => gigs.map((gig: BookedGig) => gig.date)
    )).pipe(take(1)).subscribe(
      artistGigsDates => {
        console.log("artistGigsDates", artistGigsDates)
        this.artistGigsDates = artistGigsDates
      }
    )
  }

  // know how to explain this one real well, and change the types, not Date[] but string[]
  artistBookedDatesFilter = (d: Date | null): boolean => {
    console.log("filter")
    const day = (d?.toDateString() || new Date().toDateString())
    console.log(day)
     // @ts-ignore
    if (this.artistGigsDates.indexOf(day) !== -1) {
       console.log("date booked")
       return false
     }
    console.log("date free")
     return true;
  }

  onSubmit() {
    // add if valid
    if (this.bookingForm.valid) {
    console.log(this.bookingForm.value)
    const bookedGig: BookedGig = {
      artistId: this.bookingForm.value.artistId,
      userId: this.userId,
      date: this.bookingForm.value.date.toDateString(),
      venue: this.bookingForm.value.venue
    }
    this.bookedGigsApiService.bookGig(bookedGig).subscribe(res => console.log("booked gig for artist id: ", this.bookingForm.value.artistId))
    // shows template with message of booked, we'll get back to you, and link back to home page
    this.isAfterSubmit = true;
    }
  }
}
