export const checkoutCalculator = (priceList, cart, specials) => {
  let total = 0;
  let newList = [];

  priceList.forEach((x) => {
    const res = cart.filter((y) => y === x.type);
    if (res.length > 0) {
      newList.push({
        type: x.type,
        amount: res.length,
        unitPrice: x.unitPrice,
      });
    }
  });

  let filteredSpecials = [];
  const temp = specials.forEach((i) => {
    newList.forEach((y) =>
      y.amount === i.amount && y.type === i.type ? filteredSpecials.push(y) : ""
    );
  });

  var index = newList.findIndex((p) =>
    filteredSpecials.length === 1 ? p.type === filteredSpecials[0].type : ""
  );
  filteredSpecials.length !== 0 ? newList.splice(index, 1) : "";

  newList.map((f) => {
    let calc = f.amount * f.unitPrice;
    total += calc;
  });

  specials.forEach((h) => {
    filteredSpecials.filter((j) => {
      j.type === h.type ? (total += h.special) : "";
    });
  });

  console.log("index: ", index);
  console.log(newList);
  console.log(filteredSpecials);
  console.log("total: ", total);

  return total;
};
