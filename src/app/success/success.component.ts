import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  
  price:string | null ='0';

  constructor(    private route: ActivatedRoute

    ) { }

  ngOnInit(): void {
    this.price=this.route.snapshot.paramMap.get('price');

  }

}
