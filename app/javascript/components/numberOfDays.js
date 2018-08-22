function numberOfDays() {
  const dates = document.querySelectorAll(".date-picker");
  const startDate = document.querySelector(".date-first");
  const endDate = document.querySelector(".date-end");
  const pricePerDay = parseInt(document.querySelector(".price-per-day").innerText);
  console.log(pricePerDay);
  let days = 0;
  let price = 0;
  let totalPrice = 0;
  dates.forEach((date) => {
    date.addEventListener("blur", (event) => {
      days = datediff(new Date(startDate.value), new Date(endDate.value));
      const numberOfDays = document.querySelector(".test-of-days");
      console.log(endDate.value);
      if (endDate.value != "") {
        numberOfDays.insertAdjacentHTML("beforeend", `${days} jours`);
        const price = document.querySelector(".price");
        totalPrice = days * pricePerDay;
        price.insertAdjacentHTML("beforeend", `${totalPrice}€`);
      }
    });
  });
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

export { numberOfDays };
