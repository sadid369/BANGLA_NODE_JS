const fs = require("fs");

const testObj = {
  name: "Sadid",
  email: "sadid.jones@gmail.com",
  address: {
    city: "Dhaka",
    country: "BD",
  },
};

const data = JSON.stringify(testObj);

fs.writeFile("test.json", data, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File Write Successfully");
  }
});
