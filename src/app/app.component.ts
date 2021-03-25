import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import * as Aos from 'aos';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'sms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('modalContent', {static: true}) modalContent: TemplateRef<any>
  title = 'sms-app';
  modalRef: BsModalRef;
  isLoading: boolean = false;
  mobileMenuOpen = false;
  searchPanelOpen = false;

  progressBars = [
    { title: 'web design', percent: new BehaviorSubject(0), limit: 75 },
    { title: 'programming', percent: new BehaviorSubject(0), limit: 90 },
    { title: 'marketing', percent: new BehaviorSubject(0), limit: 55 },
    {title: 'content', percent: new BehaviorSubject(0), limit: 85},
  ]


  constructor(private modal: BsModalService, public gallery: Gallery, public lightbox: Lightbox) {
    setTheme('bs3');
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleSearchPanel() {
    this.searchPanelOpen = !this.searchPanelOpen;
  }


  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 1500)

    Aos.init({
      duration: 900,
      useClassNames: true,
      easing: 'ease-in-out-cubic',
      anchorPlacement: 'top-center'
    })
  }
}

