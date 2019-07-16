import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-news-list',
  templateUrl: './trending-news-list.component.html',
  styleUrls: ['./trending-news-list.component.scss']
})
export class TrendingNewsListComponent implements OnInit {

  trendingNewsList: any = [
    {
      id : 1,
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      createdOn : 'The Wire  September 14, 2016'
    },
    {
      id : 2,
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      createdOn : 'The Wire  September 14, 2017'
    },
    {
      id : 3,
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      createdOn : 'The Wire  Jan 14, 2018'
    },
    {
      id : 4,
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      createdOn : 'The Wire  Jan 14, 2019'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
