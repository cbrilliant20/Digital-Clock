window.addEventListener("load", getTime)

function getTime() {
  let date = new Date()

  // console.log(date)
  let dayNumber = date.getDay()
  // console.log(dayNumber)
  let hour = date.getHours()
  // console.log(hour)
  let minute = date.getMinutes()
  // console.log(minute)
  let ampm = hour >= 12 ? "PM" : "AM"
  // console.log(ampm)
  let dayNames = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT", "SUN"]

  hour = hour % 12
  hour = hour ? 12 : "12"
  hour = hour < 10 ? "0" + hour : hour
  minute = minute < 10 ? "0" + minute : minute

  document.getElementById("day").innerHTML = dayNames[dayNumber]
  document.getElementById("hour").innerHTML = hour
  document.getElementById("minute").innerHTML = minute
  document.getElementById("ampm").innerHTML = ampm

  setTimeout(getTime, 200)
}
