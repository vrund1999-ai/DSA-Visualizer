export const CODE = [
  "function angleClock(hour, minutes) {", //                  0
  "  const minAngle = minutes * 6;         // 360/60", //     1
  "  const hrAngle = (hour % 12) * 30      // 360/12", //     2
  "                + minutes * 0.5;        // hour drifts", // 3
  "  let diff = Math.abs(hrAngle - minAngle);", //            4
  "  return Math.min(diff, 360 - diff);   // smaller arc", // 5
  "}", //                                                     6
];
