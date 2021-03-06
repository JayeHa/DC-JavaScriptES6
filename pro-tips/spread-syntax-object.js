// Spread Syntax - Object
const item = { type: "π", size: "M" };
const detail = { price: 20, made: "Korea", gender: "M" };

// β Bad Code π©
item["price"] = detail.price;

// β Bad Code π©
const newObject = new Object();
newObject["type"] = item.type;
newObject["size"] = item.size;
newObject["price"] = detail.price;
newObject["made"] = detail.made;
newObject["gender"] = detail.gender;

// β Bad Code π©
const newObject2 = {
  type: item.type,
  size: item.size,
  price: detail.prise,
  made: detail.made,
  gender: detail.gender,
};

// β Good Code β¨
const shirt0 = Object.assign(item, detail);

// β Better! Code β¨
// κ°μ μλ°μ΄νΈν  μλ μμ :)
const shirt = { ...item, ...detail, price: 40 };
