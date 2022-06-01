import {Injectable} from '@angular/core';
import {ArtistsStore} from "../artists-state/aritsts.store";
import {ArtistsApiService} from "./artists-api.service";
import {Observable, switchMap, take, tap} from "rxjs";
import {Artist} from "../models/artist.interface";

@Injectable({
  providedIn: 'root'
})
export class ArtistsStoreService {

  constructor(private store: ArtistsStore, private artistsApiService: ArtistsApiService) {

  }

  setAllArtists() {
    console.log("setAllArtists is actually setting the state")
    this.artistsApiService.getArtists().subscribe((artists) => {
      console.log("in subscribe", artists);
      this.store.loadArtists(artists)
    })
  }

  addArtist(artist: Artist) {
    this.artistsApiService.addArtist(artist).pipe(take(1)).subscribe(
      artist => this.store.addArtist(artist))
  }

  updateArtist(artist: Artist, artistId: string | undefined): void {
    this.artistsApiService.updateArtist(artist, artistId).pipe(take(1)).subscribe(
      artist => this.store.updateArtist(artist)
    )
  }

  deleteArtist(id:string): void {
    this.artistsApiService.deleteArtist(id).pipe(take(1)).subscribe(
      ()=> this.store.deleteArtist(id)
    )
  }

  setCurrentArtist(id$: Observable<string>): Observable<Artist> {
    // the functions of the store service (state-management-service), need to return the values they set in the store
    // this way the component that calls the function could get the value from it
    return id$.pipe(
      // The switchMap operator creates an inner observable, subscribes to it and emits its value as observable.
      switchMap(id =>
        // this is the new inner observable.
        // switchMap switched from the id$ observable to the Observable<Artist> that's returned from the dataAccess service.
        this.artistsApiService.getArtistById(id).pipe(
          // tap() operator is a utility operator that returns an observable output that is identical to the source observable
          // It does not modify the stream in any way.
          // but performs a side effect for every emission on the source observable.
          // useful for logging the value, debugging the stream for the correct values, or perform any other side effects.
          tap(
            // the store is updated with a value(!), not an Observable.
            currentArtist => this.store.setCurrentArtist(currentArtist)
          )
        )
      )
    )
  }
}

// examples from https://github.dev/sarindufit/angular-akita-example/tree/master/akita-crud-app/src/app/course
// learning to work with akita
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
