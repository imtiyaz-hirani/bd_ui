export interface FrontendSetting {
  id?: number;
  tenantId?: number;
  userKey?: string;
  key?: string;
  type?: string;
  application?: string;
  component?: string;
  frontendVersion?: string;
  // tslint:disable-next-line:no-any
  payload?: { [key: string]: any };
}
