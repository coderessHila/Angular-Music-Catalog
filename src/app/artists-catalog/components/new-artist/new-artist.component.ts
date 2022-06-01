import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artist} from "../../models/artist.interface";
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";
import {setValue} from "@datorama/akita";
import {ArtistsApiService} from "../../services/artists-api.service";
import {ArtistsStoreService} from "../../services/artists-store.service";
import {take} from "rxjs";

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.component.html',
  styleUrls: ['./new-artist.component.scss']
})
// this component is both for adding a new artist and for editing an existing one.
// the initial values are for adding a new artist mode.
// if isEdit is true, on init the function setEditMode will be called.
export class NewArtistComponent implements OnInit {
  // for initializing value in the form, if editing existing artist
  @Input() isEdit: boolean = false;
  @Input() artist?: Artist
  title: string = 'Add a new artist';
  buttonText = {
    edit: 'Confirm Changes',
    add: 'Add Artist'
  }
  confirmBtnText = this.buttonText.add
  @Output() onCancelPopUp = new EventEmitter<boolean>()

  constructor(private formBuilder: FormBuilder,
              private artistsApiService:ArtistsApiService,
              private artistsStoreService:ArtistsStoreService) {
  }

  ngOnInit(): void {
    if (this.isEdit) {
      this.setEditMode()
    }
  }

  newArtistForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    imgUrl: ['', Validators.required],
    genres: ['', Validators.required],
    origin: this.formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required]
    })
  })

  onCancel(): void {
    this.onCancelPopUp.emit(true)
  }

  //  temporary code to convert genres from string to array
  // I want to use form array
  getGenresAsArray(): string[] {
    if (typeof(this.newArtistForm.value.genres) === 'string') {
      const genresArr: string[] = this.newArtistForm.value.genres.split(',')
      return genresArr.map(genre=>genre.trim())
    } else {
      return this.newArtistForm.value.genres
    }
  }

  onSubmit(): void {
    //  temporary code to convert genres from string to array
    this.newArtistForm.patchValue({
      genres: this.getGenresAsArray()
    })
    console.log("form value", this.newArtistForm.value)

    //change to ternary
    if (!this.isEdit){
    //  server add artist
      console.log("add artist")

      // this.artistsApiService.addArtist(this.newArtistForm.value).pipe(take(1)).subscribe((artist:Artist)=> {
      //   console.log(artist)

              // real stupid, i don't need this reference
              // every update you want to get all artists from server? it doesn't sound like a good idea
              // this.artistsStoreService.setAllArtists()

        // this.artistsStoreService.addArtist(artist)
        // }
    // )

      // this service is already updating the server, too
      this.artistsStoreService.addArtist(this.newArtistForm.value)

    } else {
    //  servet update artist
      console.log("update artist")
      // this.artistsApiService.updateArtist(this.newArtistForm.value, this.artist?.id).subscribe(artist=> {
      //   console.log(artist)
      //   this.artistsStoreService.updateArtist(artist)
      // })
      this.artistsStoreService.updateArtist(this.newArtistForm.value, this.artist?.id)
    }
    this.onCancel()
  }

  setEditMode(): void {
    //init form with artist data
    console.log(this.artist)
    if (this.artist) {
      this.newArtistForm.setValue({
        name: this.artist.name,
        imgUrl: this.artist.imgUrl,
        genres: this.artist.genres,
        origin: {
          country: this.artist.origin.country,
          city: this.artist.origin.city
        }
      })
      //  set title
      this.title = `Edit ${this.artist.name} details`
      this.confirmBtnText = this.buttonText.edit
    }
  }
}
