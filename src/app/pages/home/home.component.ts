import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'sms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  progressBars = [
    { title: 'web design', percent: new BehaviorSubject(0), limit: 75 },
    { title: 'programming', percent: new BehaviorSubject(0), limit: 90 },
    { title: 'marketing', percent: new BehaviorSubject(0), limit: 55 },
    { title: 'content', percent: new BehaviorSubject(0), limit: 85 },
  ];

  reviewsSlides = [
    {
      src: 'review-img1.jpg',
      name: 'James H. Ken',
      company: 'Oscend Creative Inc.',
      review: `Lorem ipsum dolor sit amet consecteur adipiscing elit sed eiusmod tempor ncididue labore
                  etor dolore magna aliqua. Ut enim ad minim veniam qu nostrud exercitat ullamco laboris
                  nisi ut aliquip ex ea commodo consequat duis autes irure dolor rep.`
    },
    {
      src: 'review-img2.jpg',
      name: 'James H. Ken',
      company: 'Oscend Creative Inc.',
      review: `Lorem ipsum dolor sit amet consecteur adipiscing elit sed eiusmod tempor ncididue labore
                  etor dolore magna aliqua. Ut enim ad minim veniam qu nostrud exercitat ullamco laboris
                  nisi ut aliquip ex ea commodo consequat duis autes irure dolor rep.`
    },
    {
      src: 'review-img3.jpg',
      name: 'James H. Ken',
      company: 'Oscend Creative Inc.',
      review: `Lorem ipsum dolor sit amet consecteur adipiscing elit sed eiusmod tempor ncididue labore
                  etor dolore magna aliqua. Ut enim ad minim veniam qu nostrud exercitat ullamco laboris
                  nisi ut aliquip ex ea commodo consequat duis autes irure dolor rep.`
    }
  ];

  portfolio = [
    1,2,3,1,2,3,1,2,3,1,2,3,1,2,3
  ]

  reviewsSliderOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
  }

  contactModel: any = {};
  subscriberModel: any = {};
  constructor(private dataService: DataService) { }

  async addSubscriber(email: string, form: any) {
    const data: any = {
      email,
      timestamp: new Date(),
    };
    await this.dataService.addSubscriber(data);
    form.reset();
  }

  async addContact(data: any, form?: any) {
    if (!data) return;
    const timestamp = new Date();
    data.timestamp = timestamp;
    await this.dataService.addContact(data);
    form.reset();
  }

  ngOnInit(): void {
    // this.successModal.openModal();
  }

}
