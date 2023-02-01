

export interface Widget {
  id: string;
  name: string;
  type: string;
  summaryText?: string;
  details: KPIData;
}

export interface KPIData {
  count?: number;
  total?: number;
  matched?: number;
  unmatched?: number;
  status?: string;
  percent?: number;
}
