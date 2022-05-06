import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselLibConfig, Image } from '@ks89/angular-modal-gallery';


@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent implements OnInit {
  images: Image[] = [ new Image(
    0,
    {
      img: '/assets/terra1.jpg',
      description: 'Description 1'
    }
  ),
  new Image(
    1,
    {
      img: '/assets/terra2.jpg',
      description: 'Description 2'
    }
  ),
  new Image(
    2,
    {
      img: '/assets/terra3.jpg',
      description: 'Description 3'
    }
  ),
  new Image(
    3,
    {
      img: '/assets/terra4.jpg',
      description: 'Description 4'
    }
  ),
  new Image(
    4,
    {
      img: '/assets/terra5.jpg',
      description: 'Description 5'
    }
  ),
  new Image(
    5,
    {
      img: '/assets/terra6.jpg',
      description: 'Description 6'
    }
  ),

]; 
  libConfigCarouselFixed: CarouselLibConfig = {
    carouselPreviewsConfig: {
      visible: true,
      number: 5,
      width: 'auto',
      maxHeight: '100px'
    },
    carouselConfig: {
      maxWidth: '550px',
      maxHeight: '550px',
      showArrows: true,
      objectFit: 'cover',
      keyboardEnable: true,
      modalGalleryEnable: true
    }
  };


  constructor(  private router: Router) { }

  ngOnInit(): void {
  }
  redirectForm(){
    this.router.navigate(['/form']);

  }
}
