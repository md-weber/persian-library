export const convertNumbers = {
  persian: {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  },
  english: {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  },
  toPersian(text) {
    if (!text) return "";
    return text
      .toString()
      .replace(/[0-9]/g, (digit) => this.persian[digit] || digit);
  },
  toEnglish(text) {
    if (!text) return "";
    return text
      .toString()
      .replace(/[۰-۹]/g, (digit) => this.english[digit] || digit);
  },
};

export const validateAgeInput = (input) => {
  // Remove any non-numeric characters (both English and Persian)
  const cleanInput = input.replace(/[^0-9۰-۹]/g, "");
  return cleanInput;
};
