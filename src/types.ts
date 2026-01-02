export enum Wheather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  windy = "windy",
  Stormy = "stormy",
}

export enum Visibility {
  Good = "good",
  Poor = "poor",
  Ok = "ok",
  Great = "great",
}

export interface DiaryEntries {
  id: number;
  date: string;
  wheather: Wheather;
  visibility: Visibility;
  comment: string;
}

export type NonSensitiveInfoDiaryEntry = Pick<
  DiaryEntries,
  "id" | "date" | "wheather" | "visibility"
>;

export type NewDiaryEntry = Omit<DiaryEntries, "id">;
