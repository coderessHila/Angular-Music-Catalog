import {Component, Input, OnInit} from '@angular/core';
import {Artist} from "../../models/artist.interface";
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.component.html',
  styleUrls: ['./new-artist.component.scss']
})
export class NewArtistComponent implements OnInit {
  // for initializing value in the form, if editing existing artist
  @Input() artist?: Artist
  @Input() title?: string

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

  }

  newArtistForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    imgUrl: ['', Validators.required],
    genres: this.formBuilder.array([]),
    origin: this.formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
    })
  })

  get genres(): FormArray {
    return this.newArtistForm.get("genres") as FormArray
  }
}
