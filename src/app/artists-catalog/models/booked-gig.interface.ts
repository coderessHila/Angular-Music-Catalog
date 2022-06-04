// not needed
// export interface Gig {
//   "date": Date,
//   "venue": string
// }

// not needed
// export interface ArtistGigs {
//   "id": string,
//   "gigs": Gig[]
// }

export interface BookedGig {
  artistId: string,
  userId: string,
  date: string,
  venue: string
}
