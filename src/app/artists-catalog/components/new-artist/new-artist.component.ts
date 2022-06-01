import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artist} from "../../models/artist.interface";
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";
import {setValue} from "@datorama/akita";

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

  constructor(private formBuilder: FormBuilder) {
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

  onSubmit(): void {
    console.log(this.newArtistForm.value)
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
