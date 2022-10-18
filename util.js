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
  filteredSpecials.length === 1 ? newList.splice(index, 1) : "";
  filteredSpecials.length > 1 ? console.log(filteredSpecials) : "";

  newList.forEach((k, i) => {
    filteredSpecials.forEach((j) => {
      j.type === k.type ? newList.splice(i, 1) : "";
    });
  });

  newList.map((f) => {
    let calc = f.amount * f.unitPrice;
    total += calc;
  });

  specials.forEach((h) => {
    filteredSpecials.filter((j) => {
      j.type === h.type ? (total += h.special) : "";
    });
  });

  ///
  specials.forEach((h) => {
    filteredSpecials.forEach((j) => {
      j.amount === h.type ? (total += h.special) : "";
    });
  });

  //   console.log("index: ", index);
  console.log("NNN: ", newList);
  console.log(filteredSpecials);
  //   console.log("total: ", total);

  return total;
};
