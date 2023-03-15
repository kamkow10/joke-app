import {JokeCategory} from "./joke-category.model";

export interface Joke {
  id: string;
  category: JokeCategory;
  content: string;
}
