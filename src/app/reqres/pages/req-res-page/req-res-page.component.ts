import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqResResponse } from '../../req-res';
import { ReqResService } from '../../services/req-res.service';

@Component({
  selector: 'app-req-res-page',
  templateUrl: './req-res-page.component.html',
  styleUrls: ['./req-res-page.component.css']
})
export class ReqResPageComponent {
  data: Observable<ReqResResponse> | undefined = undefined;
  constructor(private service: ReqResService) {
    this.data = service.getData();
   }


}
