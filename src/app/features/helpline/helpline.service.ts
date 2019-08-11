import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HelplineService {

helplineList = [
  {
    id: 1,
    headline: "Consumer Protection",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Ratione fugiat debitis temporibus eius eveniet sit deleniti culpa? Explicabo
    pariatur quibusdam eaque consectetur accusamus architecto totam deserunt, doloribus
    nostrum esse culpa.`,
    headlineNumber: "1800-234-534",
    websiteLink: "https://gama.gov",
    twitterLink: "https://twitter.com",
    facebookLink: "https://facebook.com",
    fileOnlineComplaintLink: "https://gama.gov",
    instagramLink: "https://instagram.com",
    whatsappLink: "https://web.whatsapp.com"
  },
  {
    id: 2,
    headline: "Advertising Standards Council",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Ratione fugiat debitis temporibus eius eveniet sit deleniti culpa? Explicabo
    pariatur quibusdam eaque consectetur accusamus architecto totam deserunt, doloribus
    nostrum esse culpa.`,
    headlineNumber: "1800-234-534",
    websiteLink: "https://gama.gov",
    twitterLink: "https://twitter.com",
    facebookLink: "https://facebook.com",
    fileOnlineComplaintLink: "https://gama.gov",
    instagramLink: "https://instagram.com",
    whatsappLink: "https://web.whatsapp.com"
  },
  {
    id: 3,
    headline: "All in one Emergency Number",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Ratione fugiat debitis temporibus eius eveniet sit deleniti culpa? Explicabo
    pariatur quibusdam eaque consectetur accusamus architecto totam deserunt, doloribus
    nostrum esse culpa.`,
    headlineNumber: "1800-234-534",
    websiteLink: "https://gama.gov",
    twitterLink: "https://twitter.com",
    facebookLink: "https://facebook.com",
    fileOnlineComplaintLink: "https://gama.gov",
    instagramLink: "https://instagram.com",
    whatsappLink: "https://web.whatsapp.com"
  },
  {
    id: 4,
    headline: "Women's Helpline",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Ratione fugiat debitis temporibus eius eveniet sit deleniti culpa? Explicabo
    pariatur quibusdam eaque consectetur accusamus architecto totam deserunt, doloribus
    nostrum esse culpa.`,
    headlineNumber: "1800-234-534",
    websiteLink: "https://gama.gov",
    twitterLink: "https://twitter.com",
    facebookLink: "https://facebook.com",
    fileOnlineComplaintLink: "https://gama.gov",
    instagramLink: "https://instagram.com",
    whatsappLink: "https://web.whatsapp.com"
  },
  {
    id: 5,
    headline: "Indian Railway",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Ratione fugiat debitis temporibus eius eveniet sit deleniti culpa? Explicabo
    pariatur quibusdam eaque consectetur accusamus architecto totam deserunt, doloribus
    nostrum esse culpa.`,
    headlineNumber: "1800-234-534",
    websiteLink: "https://gama.gov",
    twitterLink: "https://twitter.com",
    facebookLink: "https://facebook.com",
    fileOnlineComplaintLink: "https://gama.gov",
    instagramLink: "https://instagram.com",
    whatsappLink: "https://web.whatsapp.com"
  }
];

getHelplineList() {
  return this.helplineList;
}

deleteHelpline(index: number) {
  this.helplineList.splice(index, 1);
}

constructor() { }

}
