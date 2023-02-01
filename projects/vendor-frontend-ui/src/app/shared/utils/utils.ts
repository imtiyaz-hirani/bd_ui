import calculateTextWidth from '../calculate-text-width';
import {
  AnomalyCells,
  ChartOrientation,
  Constants,
} from '../../core/constants';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import { OpenCloseMenuEventArgs } from '@syncfusion/ej2-angular-navigations';

export class Utils {
  constructor(private translateService: TranslateService) {}
  static stopPropogation(e: Event) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  static trimTrailingWhiteSpaces(obj: { [x: string]: any }) {
    if (!Array.isArray(obj) && typeof obj !== 'object') {
      return obj;
    }
    return Object.keys(obj).reduce(
      (acc, key) => {
        obj[key] = obj[key] === null ? '' : obj[key];
        acc[key.trim()] =
          typeof obj[key] === 'string'
            ? obj[key].trim()
            : Utils.trimTrailingWhiteSpaces(obj[key]);
        return acc;
      },
      Array.isArray(obj) ? [] : {}
    );
  }

  static changeTextCase(data, convert) {
    if (typeof data === 'string') {
      if (convert === 'upper') {
        return data.toLocaleUpperCase();
      } else {
        return data.toLocaleLowerCase();
      }
    }
  }
  static findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  static findIndexInArray(arr, obj) {
    if (obj && obj.id) {
      return arr.findIndex((curr) => curr.id === obj.id);
    }
  }
  static emptyObject(obj) {
    Object.keys(obj).forEach((k) => delete obj[k]);
    obj = {};
    return obj;
  }

  static hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    }
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }

  static addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else if (!Utils.hasClass(el, className)) {
      el.className += ' ' + className;
    }
  }

  static removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else if (Utils.hasClass(el, className)) {
      const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  }

  static bindLookupData(lookup, idx) {
    if (lookup && lookup.instance) {
      lookup.instance.option('value', idx.toString());
    }
  }

  static removeEmptyList = (obj) => {
    Object.entries(obj).forEach(
      ([key, val]) =>
        (val && typeof val === 'object' && Utils.removeEmptyList(val)) ||
        ((val === null || val === '') && delete obj[key])
    );
    return obj;
  };

  static sanitizeObj(obj) {
    Object.entries(obj).forEach(([key, v]: any) => {
      if (v && typeof v === 'object') {
        Utils.sanitizeObj(v);
      }
      if (
        (v && typeof v === 'object' && !Object.keys(v).length) ||
        v === null ||
        v === undefined ||
        v === ''
      ) {
        if (Array.isArray(obj)) {
          obj.splice(key, 1);
        } else {
          delete obj[key];
        }
      }
    });
    return obj;
  }

  static isEmptyObject(obj) {
    return !obj || Object.keys(obj).length === 0;
  }

  /**
   * Function for getting value of nested property value
   *
   * @param o: object
   * @param s: string
   */
  static getNestedPropertyValue(o: { [x: string]: any }, s: string): any {
    try {
      const a = s.split('.');
      for (let i = 0, n = a.length; i < n; ++i) {
        const k = a[i];
        // If k is not defined
        if (k && k in o) {
          o = o[k];
        } else {
          return;
        }
      }
      return o;
    } catch (err) {
      return undefined;
    }
  }

  static calculateWidthOfField(value: string, font) {
    return calculateTextWidth(value, font);
  }

  /**
   *  Compare two objects
   */
  static compareObjects(object1: object, object2: object): boolean {
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);
    let isEqual = true;
    if (objKeys1.length !== objKeys2.length) {
      isEqual = false;
      return isEqual;
    }
    objKeys1.forEach((key) => {
      if (!(object2.hasOwnProperty(key) && object1[key] === object2[key])) {
        isEqual = false;
      }
    });
    return isEqual;
  }

  /**
   *  method for setting date in perticular format
   */
  static convertDateIntoSpecificFormat(dateStr, type, separator = '/') {
    let dd;
    let MM;
    let yy;
    const newDate = new Date();
    if (type === Constants.DATETYPE.datetime) {
      const [date, time] = dateStr.split(' ');
      [dd, MM, yy] = date.split(separator);
      const [hh, mm, ss] = time.split(':');
      newDate.setHours(hh);
      newDate.setMinutes(mm);
      newDate.setSeconds(ss);
    } else {
      [dd, MM, yy] = dateStr.split(separator);
    }
    newDate.setFullYear(yy, MM - 1, dd);
    return newDate;
  }

  /**
   * Get current date string to current date object like [Thu Nov 26 2020 00:00:00 GMT+0530 (India Standard Time)]
   *
   * @param {string} strDate
   */
  static getMidnightDateTimeObj(strDate: string) {
    const date = new Date(strDate);
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    const n = date.getTimezoneOffset();
    const timezone = n / -60;
    if (timezone > 0) {
      date.setTime(date.getTime() - userTimezoneOffset);
    } else {
      date.setTime(date.getTime() + userTimezoneOffset);
    }
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }

  /**
   * Get Current passed date object with converting to 12:00 am time with UTC timezone offset remove or add accordingly
   * for example:
   *
   * @param {Date} strDate
   */
  static getUTCMidnightDateTimeObj(dateObj: Date) {
    const userTimezoneOffset = dateObj.getTimezoneOffset() * 60000;
    const n = dateObj.getTimezoneOffset();
    const timezone = n / -60;
    if (timezone > 0) {
      dateObj.setTime(dateObj.getTime() - userTimezoneOffset);
    } else {
      dateObj.setTime(dateObj.getTime() + userTimezoneOffset);
    }
    return dateObj;
  }

  /**
   * Method for joining fields value by separator
   *
   * @param fields
   * @param separator
   */
  static joinFieldsValueBySeparator(fields, separator = ' ') {
    return fields.filter((val) => val).join(separator);
  }

  /**
   * To convert parameter value into Locale Upper case
   *
   * @param str:any
   */
  static covertToLocaleUpperCase(str: any) {
    return str ? str.toString().toLocaleUpperCase() : null;
  }
  static customiseCell(args, hasAnomaly) {
    const tempData = args.data;
    let anomaly = hasAnomaly;
    if (tempData['anomalous']) {
      args.cell.classList.add('e-row-anomalies');
      if (
        args.column.field === AnomalyCells.PartnerName ||
        args.column.field === AnomalyCells.Currency ||
        args.column.field === AnomalyCells.Amount
      ) {
        args.cell.classList.add('e-cell-anomalies');
        if (!anomaly) {
          // condition to apply class only one time
          const elem = document.getElementById(AnomalyCells.PartnerName);
          elem.classList.add('e-column-anomalies');

          const elem2 = document.getElementById(AnomalyCells.Currency);
          elem2.classList.add('e-column-anomalies');

          const elem3 = document.getElementById(AnomalyCells.Amount);
          elem3.classList.add('e-column-anomalies');
          anomaly = true;
        }
      }
    }
    return anomaly;
  }

  /**
   * Return Dropdown array values with localized text
   *
   * @param translatorService instance of Translator Service
   * @param dropdownObjArr Array of Objects defined as dropdown values and text
   * @param textKeyName as String if different textKeyName is given
   *
   */
  static getLocalizedDropdownArr(
    translatorService,
    dropdownObjArr,
    textKeyName = 'text'
  ) {
    const tempArr = [];
    dropdownObjArr.forEach((element) => {
      if (element[textKeyName]) {
        element[textKeyName] = translatorService.instant(element[textKeyName]);
      }
      tempArr.push(element);
    });
    return tempArr;
  }

  /**
   * Get Grid height to set as client height
   *
   * @param decraseHeightBy as number
   */
  static getGridHeight(decraseHeightBy = 200): number {
    let gridHeight;
    gridHeight = document.documentElement.clientHeight - decraseHeightBy;
    if (gridHeight < 600) {
      gridHeight = 600;
    }
    return gridHeight;
  }

  /**
  function which we can use for getting dynamic messages and url like sprintf function of php
  for example sprintf('Latitude: %s, Longitude: %s, [Count: %d', 41.847, -87.661, 'two'])
  we can use %s or %d to pass as an argument to be appended
   **/
  static sprintf(string, argsArr) {
    let args = argsArr,
      i = 0;
    return string.replace(/%((%)|s|d)/g, function (m) {
      // m is the matched format, e.g. %s, %d
      let val = null;
      if (m[2]) {
        val = m[2];
      } else {
        val = args[i];
        // A switch statement so that the formatter can be extended. Default is %s
        switch (m) {
          case '%d':
            val = parseFloat(val);
            if (isNaN(val)) {
              val = 0;
            }
            break;
        }
        i++;
      }
      return val;
    });
  }

  /**
   * Method for compare two dates
   *
   * @param slaReceivedTimeStamp : timestamp
   * @param receivedTimeStamp : timestamp
   */
  static compareDates(
    slaReceivedTimeStamp: string,
    receivedTimeStamp: Date
  ): boolean {
    if (slaReceivedTimeStamp && receivedTimeStamp) {
      if (+slaReceivedTimeStamp >= +receivedTimeStamp) {
        return true;
      } else {
        return false;
      }
    }
  }
  /**
   * Formats numbers
   *
   * @param args;
   * @returns;
   * refer link for notion linting issue
   * https://github.com/microsoft/TypeScript/issues/36533#issuecomment-607081387
   */
  static formatNumbers(data) {
    const args = data;
    if (
      args.axis.orientation === ChartOrientation.Horizontal ||
      args.axis.orientation === ChartOrientation.Vertical
    ) {
      if (parseInt(args.text, 10)) {
        args.text = new Intl.NumberFormat('en-EN', {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          notation: 'compact',
          compactDisplay: 'short',
        }).format(+args.text);
      }
    }
    return args;
  }

  /**
   * Start of Grid Common functionality methods
   */
  static dataBound(grid, translateService): void {
    const filterbar = grid.element.querySelector('.e-filterbar');
    if (filterbar) {
      [].slice.call(filterbar.children).forEach((item) => {
        const element = item.querySelector('input.e-input');
        if (element) {
          item.querySelector(
            'input.e-input'
          ).placeholder = translateService.instant('SHARED.ACTIONS.SEARCH');
        }
      });
    }
  }

  /**
   * @description Common method to Export pdf only visible columns
   * @param grid {Object instance of grid}
   * @param fileName {string}
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static exportPdf(grid, fileName: string): void {
    const colLength: number = grid.getColumns().length;
    const cols = grid.getColumns();
    const hiddenColumns = [];
    for (let i = 0; i < colLength; i++) {
      if (!cols[i].field) {
        cols[i].visible = false;
        hiddenColumns.push(i);
      }
    }
    const pdfExportProperties = {
      fileName,
    };
    const exportPdf = grid.pdfExport(pdfExportProperties);
    if (exportPdf) {
      exportPdf.then(() => {
        hiddenColumns.forEach((elementIndex) => {
          cols[elementIndex].visible = true;
        });
      });
    }
  }

  /**
   * @description Common method to Export Excel only visible columns
   * @param grid {Object instance of grid}
   * @param fileName {string}
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static exportExcel(grid, fileName: string) {
    const colLength: number = grid.getColumns().length;
    const cols = grid.getColumns();
    const hiddenColumns = [];
    for (let i = 0; i < colLength; i++) {
      if (!cols[i].field) {
        cols[i].visible = false;
        hiddenColumns.push(i);
      }
    }
    const excelExportProperties = {
      fileName,
    };
    const exportExel = grid.excelExport(excelExportProperties);
    if (exportExel) {
      exportExel.then(() => {
        hiddenColumns.forEach((elementIndex) => {
          cols[elementIndex].visible = true;
        });
      });
    }
  }

  /**
   * @description Method to set datepicker popup position
   * @param  {OpenCloseMenuEventArgs} args
   * @param  {string} datePickerElement
   * @returns void
   */
  static setDatePickerPopupPosition(
    args: OpenCloseMenuEventArgs,
    datePickerElement: string
  ): void {
    setTimeout(() => {
      /*
       *  with a time of 0 or empty ms, the function is not invoked right away.
       *  Instead, it is placed on a queue to be invoked “as soon as possible” after any currently pending event handlers finish running.
       *  Hence, It is been added into set time out, so that open event will execute & pop up will be reedernd in DOM.
       *  After it's rendering, we are shifting pop up to the right position.
       *  Due to settimeout, Changing of Position is not visible.
       */
      const popupWidth = args[`popup`].element.offsetWidth;
      const popUpleftPos = args[`popup`].element.style.left.split('px')[0];
      const dynamicWidth =
        document.getElementById(datePickerElement).offsetWidth - popupWidth;
      const newLeftPos = +popUpleftPos + dynamicWidth;
      args[`popup`].element.style.left = newLeftPos + 'px';
    });
  }

  /**
   * Record Save Failed Function
   *
   * @static
   * @param {HttpErrorResponse} errorResp
   * @param {string} id: Record ID
   * @param {TranslateService} [translateService]
   * @return {*}  {string}
   * @memberof Utils
   */
  static onRecordSaveFail(
    errorResp: HttpErrorResponse,
    id: string,
    translateService?: TranslateService
  ): string {
    let msgStr = '';
    if (errorResp.error) {
      const errorObj = errorResp.error;
      if (Array.isArray(errorObj.errors)) {
        errorObj.errors.forEach((errorMsg) => {
          msgStr += errorMsg + '  ';
        });
      } else {
        msgStr = errorResp.error.message;
      }
    } else {
      const message = id
        ? 'SHARED.MESSAGES.RECORD_UPDATE_ERROR'
        : 'SHARED.MESSAGES.RECORD_ADD_ERROR';
      msgStr = translateService.instant(message);
    }
    return msgStr;
  }

  /**
   * Locale number conversion for 1000 seperator
   * Locale: de-German
   *
   * @static
   * @param {Number} num
   * @return {*}  {string}
   * @memberof Utils
   */
  static convertNumberToLocale(num: number): string {
    const amount = Number(num).toFixed(2);
    return Number(amount).toLocaleString('de');
  }

  /**
   * Method to convert enum to array
   *
   * @param  {} enumme
   * @returns string
   */
  static enumToArray(enumme): string[] {
    return Object.keys(enumme).map((key) => enumme[key]);
  }

  /**
   * Attaches onclick event handler with browse link
   */
  static attachDialogBrowseClickHandler() {
    document.getElementById('browseLink').onclick = () => {
      document
        .getElementsByClassName('e-file-select-wrap')[0]
        .querySelector('button')
        .click();
      return false;
    };
  }
}
