function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai`;
  }
  return `chai orders: ${kind}`;
}

// exhaustive checks

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `Small cutting chai`;
  }
  if (size === "medium" || size === "large") {
    return `Making extra chai`;
  }
  return "chai orders: " + size;
}

class kulhadChai {
  serve() {
    return "Serving kulhad chai";
  }
}

class cutting {
  serve() {
    return "Cutting kulhad chai";
  }
}

function serve(chai: kulhadChai | cutting) {
  if (chai instanceof kulhadChai) {
    return chai.serve();
  }
}

type chaiOrder = {
  type: string;
  sugar: number;
};
