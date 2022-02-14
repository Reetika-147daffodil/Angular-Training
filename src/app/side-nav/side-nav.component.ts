
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  

  fillerNav = Array.from({ length: 20 }, (_, i) => `Nav Item ${i + 1}`);



  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public auth:AuthServiceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  check_Login()
  {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    else{
      return false;
    }
  }
  logout()
  {
    this.auth.logout();
  }
  
}
