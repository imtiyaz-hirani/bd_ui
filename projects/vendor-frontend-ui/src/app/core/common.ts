export class Common {
  /**
  function which we can use for getting dynamic messages and url like sprintf function of php
  for example sprintf('Latitude: %s, Longitude: %s, [Count: %d', 41.847, -87.661, 'two'])
  we can use %s or %d to pass as an argument to be appended
   **/
  static sprintf(str, argsArr) {
    let args = argsArr,
      i = 0;
    return str.replace(/%((%)|s|d)/g, function (m) {
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

  static getFormattedDate(dateStr) {
    let formattedDate = '';
    if (dateStr) {
      const dateObj = new Date(dateStr);
      if (!isNaN(dateObj.getTime())) {
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1;
        const monthStr = month < 10 ? `0${month}` : month.toString();
        const date = dateObj.getDate();
        const hour = dateObj.getHours();
        const mins = dateObj.getMinutes();

        formattedDate = `${date}/${monthStr}/${year} ${hour}:${mins}`;
      }
    }
    return formattedDate;
  }
}
