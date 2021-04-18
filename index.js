let acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];
let balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

function getAccountNumber(user, sortBy, sortDirection = "asc") {
  let result = [...acctData];

  // filter based on user name
  if (user) {
    result = result.filter(
      accountHolder => accountHolder.user.toLowerCase() === user.toLowerCase()
    );
  }

  // sorting based on sortBy parameter
  if (sortBy) {
    // sort by acctNum
    if (sortBy === "acctNum") {
      result.sort((a, b) =>
        sortDirection === "asc"
          ? a.acctNum.localeCompare(b.acctNum)
          : b.acctNum.localeCompare(a.acctNum)
      );
    } else {
      // sort by balance
      if (sortBy === "balance") {
        result.sort((a, b) =>
          sortDirection === "asc"
            ? balance[a.acctNum] - balance[b.acctNum]
            : balance[b.acctNum] - balance[a.acctNum]
        );
      }
    }
  }

  return result.map(accountHolder => accountHolder.acctNum);
}

console.log(getAccountNumber("Bob"));
console.log(getAccountNumber("Charlie"));
console.log(getAccountNumber(undefined, "acctNum"));
console.log(getAccountNumber("Alice", "balance", "desc"));
