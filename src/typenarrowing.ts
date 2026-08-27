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

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving ${item} chai`;
}

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; pods: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(ordrer: Chai) {
  switch (ordrer.type) {
    case "masala":
      return `Making masala chai with spice level ${ordrer.spiceLevel}`;
      break;
    case "ginger":
      return `Making ginger chai with amount ${ordrer.amount}`;
      break;
    case "elaichi":
      return `Making elaichi chai with pods ${ordrer.pods}`;
      break;
    default:
      const _exhaustiveCheck: never = ordrer;
      return _exhaustiveCheck;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if ("spiceLevel" in order) {
    return `Brewing masala chai with spice level ${order.spiceLevel}`;
  }
}

// function isStringArray(arr: unknown[]): arr is string[] {}
