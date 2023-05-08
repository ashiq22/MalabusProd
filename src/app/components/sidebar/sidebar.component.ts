import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "agence",
    title: "Gestionnaire agences",
    icon: "icon-tag",
    class: ""
  },

  {
    path: "agence-verifier",
    title: "Verifier agence",
    icon: "icon-badge",
    class: ""
  },

  {
    path: "gestion-utilisateur",
    title: "Gestionnaire des utilisateurs",
    icon: "icon-single-02",
    class: ""
  },
  
/*
 

  


  {
    path: "stat",
    title: "Statestique",
    icon: "icon-chart-bar-32",
    class: ""
  },
  */
 /*
  {
    path: "rapport",
    title: "Rapport des ventes client",
    icon: "icon-coins",
    class: ""
  },
  

  {
    path: "forum",
    title: "Forum",
    icon: "icon-chat-33",
    class: ""
  },

 
*/
  {
    path: "contact",
    title: "Contacts",
    icon: "icon-email-85",
    class: ""
  },
  /*
  
  {
    path: "historique",
    title: "Rapport des ventes Agence",
    icon: "icon-chart-bar-32",
    class: ""
  },
  
  */
 
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
