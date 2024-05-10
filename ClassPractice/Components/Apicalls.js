axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United Arab Emirates&method=8