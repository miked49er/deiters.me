import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  index = 0;
  img = "assets/img/";

  projectFeatures = [
    {
      name: "GGC Maps",
      state: 'show',
      featureImage: this.img + "ggcmaps/ggcmaps.png"
    },
    {
      name: "Chem Reality",
      state: 'hide',
      featureImage: this.img + "chem_reality/chemreality.png"
    },
    {
      name: "Motorris",
      state: 'hide',
      featureImage: this.img + "motorris/motorris.jpg"
    },
    {
      name: "Is It Expired",
      state: 'hide',
      featureImage: this.img + "isitexpired/isitexpired.png"
    },
    {
      name: "Blackwing Sy_ths",
      state: 'hide',
      featureImage: this.img + "blackwing_syths/syths.jpg"
    }
  ];

  @HostListener('wheel', ['$event'])
    checkScroll3(e) {
      if (e.deltaY > 0 && this.index < this.projectFeatures.length - 1) {
        this.index += 1;
        this.projectFeatures[this.index].state = 'show';
      }
      else if (e.deltaY < 0 && this.index > 0){
        this.projectFeatures[this.index].state = 'hide';
        this.index -= 1;
      }
    }
}
