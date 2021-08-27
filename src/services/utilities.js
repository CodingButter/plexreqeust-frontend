export const numberWithCommas = (x) => {
  const rounded = Math.round(x * 100) / 100;
  const number = rounded.toString();
  if (number.includes(".")) {
    const splitNumber = number.split(".");
    return (
      splitNumber[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      "." +
      splitNumber[1]
    );
  } else {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

export const kbConversion = (bytes) => {
  //console.log(bytes);
  if (bytes < 1024) return ["B/s", numberWithCommas(bytes)];
  if (bytes / 1024 < 1024)
    return ["KB/s", numberWithCommas(parseFloat(bytes / 1024))];
  if (bytes / 1024 / 1024 < 1024)
    return ["MB/s", numberWithCommas(parseFloat(bytes / 1024 / 1024))];
};

Element.prototype.addMultiEventListener = function (events, callback) {
  return events.map((event) => this.addEventListener(event, callback));
};
Element.prototype.removeMultiEventListener = function (events, eventResponses) {
  events.map((event, index) =>
    this.removeEventListener(event, eventResponses[index])
  );
};
