export interface Book {
  id: number;
  title: string;
  coverImageUrl: string;
  summary: string;
}

export interface NewsEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  mapQuery: string;
}

export interface PressItem {
  id: number;
  imageUrl: string;
  title: string;
  source: string;
}
