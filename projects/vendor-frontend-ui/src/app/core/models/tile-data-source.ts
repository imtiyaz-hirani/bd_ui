export class TileDataSource {
  index: number;
  fileType: string;
  processStatus: string[];
  fileFormat: string;
  pastDays: number;
  chartType: string;
  state: boolean;
  count: number;
  kpiType: string;

  constructor(
    index: number,
    fileType: string,
    processStatus: string[],
    fileFormat: string,
    pastDays: number,
    chartType: string,
    state: boolean,
    count: number,
    kpiType: string
  ) {
    this.index = index;
    this.fileType = fileType;
    this.processStatus = processStatus;
    this.fileFormat = fileType;
    this.pastDays = pastDays;
    this.chartType = chartType;
    this.state = state;
    this.count = count;
    this.kpiType = kpiType;
  }
}
