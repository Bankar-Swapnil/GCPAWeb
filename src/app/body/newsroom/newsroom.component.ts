import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/newsroom/news-service.service';

@Component({
  selector: 'app-newsroom',
  templateUrl: './newsroom.component.html',
  styleUrls: ['./newsroom.component.css']
})
export class NewsroomComponent implements OnInit {

  content=[
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
    {
      src:'../../../assets/news1.webp',
      link:'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-girl-namya-joshi-gets-global-child-prodigy-award-101639592198033.html'
    },
  ]
  
  constructor(public newsService:NewsServiceService) { }

  ngOnInit(): void {
 this.newsService.getnews()
  }

}
