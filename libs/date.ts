export function convertDateFormat(inputDate: string) {
  const parts = inputDate.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  const inputDateTime = new Date(year, month - 1, day);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const outputDate = `${
    months[inputDateTime.getMonth()]
  } ${inputDateTime.getDate()}, ${inputDateTime.getFullYear()}`;

  return outputDate;
}
