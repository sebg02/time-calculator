const btn = document.getElementById("btn");

const milisecondsToUnits = {
  miliToYears: function (miliseconds) {
    return miliseconds / 31536000000;
  },
  miliToMonths: function (miliseconds) {
    return miliseconds / 2629800000;
  },
  miliToWeeks: function (miliseconds) {
    return miliseconds / 604800000;
  },
  miliToDays: function (miliseconds) {
    return miliseconds / 86400000;
  },
  miliToHours: function (miliseconds) {
    return miliseconds / 3600000;
  },
  miliToMinutes: function (miliseconds) {
    return miliseconds / 60000;
  }
};

btn.addEventListener("click", () => {
  let date1 = new Date(document.getElementById("date1").value);
  let date2 = new Date(document.getElementById("date2").value);

  let years = document.getElementById("years");
  let months = document.getElementById("months");
  let weeks = document.getElementById("weeks");
  let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");

  date1 = Date.parse(date1);
  date2 = Date.parse(date2);

  let result = date2 - date1;

  years.innerHTML = Math.round(milisecondsToUnits.miliToYears(result));
  months.innerHTML = Math.round(
    milisecondsToUnits.miliToMonths(result)
  ).toLocaleString("en-US");
  weeks.innerHTML = Math.round(
    milisecondsToUnits.miliToWeeks(result)
  ).toLocaleString("en-US");
  days.innerHTML = milisecondsToUnits
    .miliToDays(result)
    .toLocaleString("en-US");
  hours.innerHTML = milisecondsToUnits
    .miliToHours(result)
    .toLocaleString("en-US");
  minutes.innerHTML = milisecondsToUnits
    .miliToMinutes(result)
    .toLocaleString("en-US");
});
