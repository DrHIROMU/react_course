const userObj = {
  name: "Tommy",
  age: 34,
};

const extendUserObj = {
  ...userObj,
  gender: "Male",
};

console.log(extendUserObj);
