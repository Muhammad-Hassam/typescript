let subs: number | string = "1M";
let apiResponse: "pending" | "success" | "error" = "pending";
apiResponse = "success"; // valid assignment

// apiResponse = "done"; // inValid assignment

const orders = ["12", "20", "28", "42"];

let currentorder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentorder = order;
    break;
  }
  currentorder = undefined;
}

console.log(currentorder);
