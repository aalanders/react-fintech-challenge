export const calculateMultiple = (impliedValue, cost) => {
  return Math.floor(impliedValue / cost);
};

export const convertToPercent = (decimal) => {
  return Math.floor(decimal * 100);
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const formatToUSD = (number) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(number);
};
