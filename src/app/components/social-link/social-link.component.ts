import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'deiters-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss']
})
export class SocialLinkComponent implements OnInit, AfterContentInit {

  // Icons
  iconDir: string = "assets/icons/social/";
  emailIcon: string = this.iconDir + "Email.svg";
  githubIcon: string = this.iconDir + "GitHub circle.svg";
  linkedinIcon: string = this.iconDir + "Linked in.svg";

  // Links
  emailLink: string = "mailto:mike@deiters.me"
  githubLink: string = "https://www.github.com/miked49er"
  linkedinLink: string = "https://www.linkedin.com/in/mikedeiters"

  @Input() social: string = "email";
  @Input() primary: boolean = false;
  icon: string = this.emailIcon;
  link: string = this.emailLink;

  constructor() { }

  ngOnInit() {}

  ngAfterContentInit() {
    if (this.social !== 'null' || this.social !== undefined) {

      switch(this.social.toLowerCase()) {
        case "email":
          this.icon = this.emailIcon;
          this.link = this.emailLink;
          break;
        case "github":
          this.icon = this.githubIcon;
          this.link = this.githubLink;
          break;
        case "linkedin":
          this.icon = this.linkedinIcon;
          this.link = this.linkedinLink;
          break;
      }
    }
  }

}
