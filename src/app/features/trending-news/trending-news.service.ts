import { Injectable } from "@angular/core";

export interface TrendingNews {
  id: number;
  description: string;
  youtubeVideoUrl: string;
  videoId: string;
  topic: string;
  createdOn: string;
}

@Injectable({
  providedIn: "root"
})
export class TrendingNewsService {

private trendingNewsList = [
  {
    id: 1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=qDuKsiwS5xw",
    videoId: "qDuKsiwS5xw",
    topic: "Topic 1",
    createdOn: "The Wire  September 14, 2016"
  },
  {
    id: 2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=qDuKsiwS5xw",
    videoId: "qDuKsiwS5xw",
    topic: "Topic 2",
    createdOn: "The Wire  September 14, 2017"
  },
  {
    id: 3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=qDuKsiwS5xw",
    videoId: "qDuKsiwS5xw",
    topic: "Topic 3",
    createdOn: "The Wire  Jan 14, 2018"
  },
  {
    id: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=qDuKsiwS5xw",
    videoId: "qDuKsiwS5xw",
    topic: "Topic 4",
    createdOn: "The Wire  Jan 14, 2019"
  }
];

getTrendingNewsList() {
  return this.trendingNewsList;
}

addTrendingNews(trendingNewsData: TrendingNews) {
  this.trendingNewsList.push(trendingNewsData);
}

deleteTrendingNews(index: number) {
  this.trendingNewsList.splice(index, 1);
}

getTrendingNewsById(id: number) {
  return this.trendingNewsList.find((trendingNewsData) => trendingNewsData.id === id);
}

updateTrendingNews(trendingNewsDataInfo: TrendingNews) {
 const index =  this.trendingNewsList.findIndex((trendingNewsData) => trendingNewsData.id === trendingNewsDataInfo.id);
 this.trendingNewsList.splice(index, 1, trendingNewsDataInfo);
}

constructor() { }

}
