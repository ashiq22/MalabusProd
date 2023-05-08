import { Routes } from "@angular/router";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { GestionUtilisateurComponent } from "src/app/pages/gestion-utilisateur/gestion-utilisateur.component";
import { GestionAgenceComponent } from "src/app/pages/gestion-agence/gestion-agence.component";
import { VerifieAgenceComponent } from "src/app/pages/verifie-agence/verifie-agence.component";
import { ForumComponent } from "src/app/pages/forum/forum.component";
import { HistoriqueComponent } from "src/app/pages/historique/historique.component";
import { RapportVenteComponent } from "src/app/pages/rapport-vente/rapport-vente.component";
import { ContactComponent } from "src/app/pages/contact/contact.component";
import { StatComponent } from "src/app/stat/stat.component";

export const AdminLayoutRoutes: Routes = [
  
  { path: "historique", component: HistoriqueComponent },
  { path: "rapport", component: RapportVenteComponent },
  { path: "forum", component: ForumComponent },
  { path: "stat", component: StatComponent },
  { path: "contact", component: ContactComponent },
  {path : "agence" , component : GestionAgenceComponent, pathMatch: 'full'},
  {path : "agence-verifier" , component: VerifieAgenceComponent},
  {path : "gestion-utilisateur" , component : GestionUtilisateurComponent}
];
