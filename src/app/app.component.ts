import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import * as Aos from 'aos';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'sms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('modalContent', {static: true}) modalContent: TemplateRef<any>
  title = 'Sure Marketing Solutions';
  modalRef: BsModalRef;
  isLoading: boolean = false;
  mobileMenuOpen = false;
  searchPanelOpen = false;
  navStart: any;


  constructor(private modal: BsModalService, private router: Router) {
    setTheme('bs3');
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleSearchPanel() {
    this.searchPanelOpen = !this.searchPanelOpen;
  }


  ngOnInit() {
    // this.isLoading = true;

    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1500)
    this.navStart.subscribe(e => {
      this.isLoading = true;
      this.backToTop();
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    });

    Aos.init({
      duration: 900,
      useClassNames: true,
      easing: 'ease-in-out-back',
      anchorPlacement: 'bottom-center'
    })
  }
}

