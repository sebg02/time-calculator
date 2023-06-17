const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const fecha1 = moment(document.getElementById("date1").value);
  const fecha2 = moment(document.getElementById("date2").value);

  const years = document.getElementById("years");
  const months = document.getElementById("months");
  const weeks = document.getElementById("weeks");
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const errorField = document.getElementById("error-field");

  if (!fecha1.isValid() || !fecha2.isValid()) {
    errorField.textContent = "Error: Fecha inválida.";
    years.textContent = "-";
    months.textContent = "-";
    weeks.textContent = "-";
    days.textContent = "-";
    hours.textContent = "-";
    minutes.textContent = "-";
    return;
  }

  if (fecha2.isBefore(fecha1)) {
    errorField.textContent = "Error: Las fechas están invertidas.";
    years.textContent = "-";
    months.textContent = "-";
    weeks.textContent = "-";
    days.textContent = "-";
    hours.textContent = "-";
    minutes.textContent = "-";
    return;
  }

  const diffYears = fecha2.diff(fecha1, "years");
  const diffMonths = fecha2.diff(fecha1, "months");
  const diffWeeks = fecha2.diff(fecha1, "weeks");
  const diffDays = fecha2.diff(fecha1, "days");
  const diffHours = fecha2.diff(fecha1, "hours");
  const diffMinutes = fecha2.diff(fecha1, "minutes");

  years.textContent = diffYears;
  months.textContent = diffMonths;
  weeks.textContent = diffWeeks;
  days.textContent = diffDays;
  hours.textContent = diffHours;
  minutes.textContent = diffMinutes;
  errorField.textContent = "";
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
  themeBtn.innerHTML == "🌞"
    ? (themeBtn.innerHTML = "🌒")
    : (themeBtn.innerHTML = "🌞");
});
