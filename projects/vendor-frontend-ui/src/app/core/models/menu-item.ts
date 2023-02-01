export interface MenuItem {
  href: string;
  id: number;
  items: MenuItem[];
  name: string;
  routerLink: string;
  scope: string;
  bookmarked: boolean;
}
