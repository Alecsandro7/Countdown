let Newyear = new Date("June 7,2023 00:00").getTime()

let days, hours, minutes, seconds

setInterval(() => {
  let currentDate = new Date().getTime()

  let totalSeconds = (Newyear - currentDate) / 1000

  days = parseInt(totalSeconds / 86400)
  totalSeconds = totalSeconds % 86400 // totalSeconds esta pegando os valores em horas agora

  hours = parseInt(totalSeconds / 3600)
  totalSeconds = totalSeconds % 3600 //totalSeconds esta pegando os valores em minutos agora

  minutes = parseInt(totalSeconds / 60)

  seconds = parseInt(totalSeconds % 60)

  document.getElementById("days").innerHTML = formatTime(days)
  document.getElementById("hours").innerHTML = formatTime(hours)
  document.getElementById("minutes").innerHTML = formatTime(minutes)
  document.getElementById("seconds").innerHTML = formatTime(seconds)
}, 1000)

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}
