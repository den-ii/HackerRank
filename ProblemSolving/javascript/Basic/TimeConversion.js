function timeConversion(s) {
  // Write your code here
  const clock = s.slice(8);
  let time = s.slice(0, 8).split(":");
  if (time[0] == "12" && clock == "AM") {
    time[0] = "00";
  }
  if (time[0] != "12" && clock == "PM") {
    time[0] = +time[0] + 12;
    time[0] = time[0].toString();
  }
  time = time.join(":");
  return time;
}
