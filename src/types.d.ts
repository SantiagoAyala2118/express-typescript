export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "good" | "poor" | "ok" | "great";

export interface DiaryEntries {
  id: number;
  date: string;
  wheather: Weather;
  visibility: Visibility;
  comment: string;
}
