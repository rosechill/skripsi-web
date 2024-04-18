export interface TourDetails {
  id_tour_package: number;
  main_image: string;
  harga: string;
  nama_paket: string;
  quotes: string;
  images: string[];
  itineraries?: {
    day: number | undefined;
    isi_itinerary: string | undefined;
    images: { [key: string]: string } | undefined;
  }[];
  sdgs: { path_logo: string }[];
  include: string;
  exclude: string;
  what_you_get: string;
  other_information: string;
}
