export const GRID_ACTION_REQUEST_TYPES = {
  beginEdit: 'beginEdit',
  add: 'add',
  save: 'save',
  update: 'update',
  columnstate: 'columnstate',
};

export const GRID_SELECTION_MODES = {
  row: 'Row',
  cell: 'Cell',
  both: 'Both',
};

export const GRID_SELECTION_TYPES = {
  single: 'Single',
  multiple: 'Multiple',
};

export const GRID_SORTING_DIRECTION = {
  ascending: 'ASCENDING',
  descending: 'DESCENDING',
};

export const GRID_SETTINGS_MODES = {
  normal: 'Normal',
  batch: 'Batch',
};

export const GRID_FILTER_SETTINGS_MODES = {
  immediate: 'Immediate',
  onEnter: 'OnEnter',
};

export const COLUMN_MENU_ITEMS = [
  'AutoFitAll',
  'AutoFit',
  'SortAscending',
  'SortDescending',
];

export const COLUMN_MENU = [
  'AutoFit',
  'SortAscending',
  'SortDescending',
  { text: 'Clear Sorting', id: 'gridclearsorting' },
];

export const COLUMN_MENU_SORTING = [
  'SortAscending',
  'SortDescending',
  { text: 'Clear Sorting', id: 'gridclearsorting' },
];
