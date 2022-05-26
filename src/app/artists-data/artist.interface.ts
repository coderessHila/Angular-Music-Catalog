export interface IOrigin {
  country: string;
  city: string;
}

export interface Artist {
  id?: string;
  name: string;
  imgUrl: string;
  genres: Array<string>,
  origin: IOrigin
}
