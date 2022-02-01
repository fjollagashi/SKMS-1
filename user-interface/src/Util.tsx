export const GetDate = (date: string | undefined): string => {
  if (!date) return "";
  let strs = date.split("-");
  strs[2] = strs[2].substring(0, 2);
  if (strs[1].charAt(0) === "0") strs[1] = strs[1].charAt(1);
  if (strs[2].charAt(0) === "0") strs[2] = strs[2].charAt(1);
  let month = strs[1];
  let year = strs[0];
  let day = strs[2];
  let retdate = day + " ";

  switch (Number.parseInt(month)) {
    case 1:
      retdate += "Janar";
      break;
    case 2:
      retdate += "Shkurt";
      break;
    case 3:
      retdate += "Mars";
      break;
    case 4:
      retdate += "Prill";
      break;
    case 5:
      retdate += "Maj";
      break;
    case 6:
      retdate += "Qershor";
      break;
    case 7:
      retdate += "Korrik";
      break;
    case 8:
      retdate += "Gusht";
      break;
    case 9:
      retdate += "Shtator";
      break;
    case 10:
      retdate += "Tetor";
      break;
    case 11:
      retdate += "Nëntor";
      break;
    case 12:
      retdate += "Dhjetor";
      break;
    default:
  }
  return retdate + ",  " + year;
};

export const GetDayOfWeek = () => {
  const days = [
    "E Hënë",
    "E Martë",
    "E Mërkurë",
    "E Enjte",
    "E Premte",
    "E Shtunë",
    "E Dielë",
  ];
  return days[Math.floor(Math.random() * days.length)];
};
