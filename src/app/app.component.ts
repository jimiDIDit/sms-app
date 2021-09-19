import { Component, OnInit, AfterViewInit, TemplateRef, ViewChild, AfterViewChecked } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import Aos from 'aos';
import $ from 'jquery';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataService } from './core/services/data.service';


@Component({
  selector: 'sms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  @ViewChild('modalContent', {static: true}) modalContent: TemplateRef<any>
  title = 'Sure Marketing Solutions';
  modalRef: BsModalRef;
  isLoading: boolean = false;
  mobileMenuOpen = false;
  searchPanelOpen = false;
  navStart: any;
  subscriberModel: any = {};


  constructor(private modal: BsModalService, private router: Router, private dataService: DataService) {
    setTheme('bs4');
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;

  }

  async addSubscriber(email: string, form?: any) {
    if (!email) return;
    const data = {
      timestamp: new Date(),
      email
    }
    await this.dataService.addSubscriber(data)
    form.reset();
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

  ngAfterViewChecked() {}
  ngOnInit() {
    // this.isLoading = true;

    // setTimeout(() => {

    // }, 0)
    this.navStart.subscribe((e: Event) => {
      // console.log(e)
      this.isLoading = true;
      this.mobileMenuOpen = false;
      setTimeout(() => {
        this.backToTop();
        setTimeout(() => {
          this.isLoading = false;
        }, 1500);
      }, 0)
    });

    Aos.init({
      duration: 800,
      useClassNames: true,
      easing: 'ease-in-out-back',
      anchorPlacement: 'bottom-top'
    })
  }
}

