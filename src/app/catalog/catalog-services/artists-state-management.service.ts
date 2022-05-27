import { Injectable } from '@angular/core';
import {ArtistsStore} from "../artists-state/aritsts.store";
import {ArtistDataAccessService} from "./artist-data-access.service";
import {Observable, switchMap, tap} from "rxjs";
import {Artist} from "../models/artist.interface";

@Injectable({
  providedIn: 'root'
})
export class ArtistsStateManagementService {



  constructor(private store: ArtistsStore, private artistDataAccessService:ArtistDataAccessService ) {

  }

  setAllArtists() {
    console.log("setAllArtists is actually setting the state")
    this.artistDataAccessService.getArtists().subscribe((artists)=> {
      console.log("in subscribe", artists);
      this.store.loadArtists(artists)
    })
  }

  // getAllCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>('/api/courses').pipe(
  //     tap(courses => {
  //       this.store.loadCourses(courses, true);
  //     })
  //   );
  // }

  setCurrentArtist(id: Observable<string>): Observable<Artist> {

    return id.pipe(
      switchMap(id=>
        this.artistDataAccessService.getArtistById(id).pipe(
          tap(
            currentArtist => this.store.setCurrentArtist(currentArtist)
          )
        )
      )
    )

    // this.store.setCurrentArtist(artist$)

    // this.artistDataAccessService.getArtistById(id).subscribe(artist=>{
    //   console.log("in artist state manage servics: ", artist);
    //   this.store.setCurrentArtist(artist)
    // })
  }
}

  // getAllCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>('/api/courses').pipe(
  //     tap(courses => {
  //       this.store.loadCourses(courses, true);
  //     })
  //   );
  // }

  // updateCourse(courseId: string, course: Course): Observable<any> {
  //   return this.http.put('/api/courses/' + courseId, course).pipe(
  //     tap(result => {
  //       this.store.update(courseId, course);
  //     })
  //   );
  // }

