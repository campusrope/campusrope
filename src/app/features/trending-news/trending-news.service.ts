import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TrendingNewsService {

private trendingNewsList = [
  {
    id: 1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdOn: "The Wire  September 14, 2016"
  },
  {
    id: 2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdOn: "The Wire  September 14, 2017"
  },
  {
    id: 3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdOn: "The Wire  Jan 14, 2018"
  },
  {
    id: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdOn: "The Wire  Jan 14, 2019"
  }
];

getTrendingNewsList() {
  return this.trendingNewsList;
}

addTrendingNews(trendingNewsData: { id: number; description: string; createdOn: string; }) {
  this.trendingNewsList.push(trendingNewsData);
}

constructor() { }

}
