const addDays = require("date-fns/addDays");
const getdays = (d) => {
  const date = addDays(new Date(2020, 7, 22), d);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
module.exports = getdays;
console.log(getdays(5));
