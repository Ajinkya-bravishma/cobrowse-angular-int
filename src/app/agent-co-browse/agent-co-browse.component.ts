import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JwttokensService } from '../jwttokens.service';
@Component({
  selector: 'app-agent-co-browse',
  templateUrl: './agent-co-browse.component.html',
  styleUrls: ['./agent-co-browse.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AgentCoBrowseComponent implements OnInit {
  constructor(private http: JwttokensService) {}
  ngOnInit(): void {
    this.http.getJwtToken().subscribe({
      next: (res: any) => {
        console.log(res.token);
        // this.finalurl = this.url + '?token=' + res.token;
        // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
        //   this.finalurl
        // );
        console.log(res);
        // this.divtxt = true;
        // alert(this.urlSafe+ "    Getdatafun") ;
      },
      error: (err: { error: { message: any } }) => {
        //  alert('ERROR');
      },
    });
  }
}
