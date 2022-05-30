export interface Gig {
  "date": string,
  "venue": string
}

export interface ArtistGigs {
  "id": string,
  "gigs": Gig[]
}
