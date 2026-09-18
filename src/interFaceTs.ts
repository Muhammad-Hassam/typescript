type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: "small" | "medium";
}

class chai implements CupSize {
  size: "small" | "medium" = "small";
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaaChai = BaseChai & Extra;

const cup: MasalaaChai = {
  teaLeaves: 5,
  masala: 2
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Kashan" };
const u2: User = { username: "Kashan", bio: "I love chai!" };

type Config = {
  readonly appName: string;
  version: string;
};

const config: Config = { appName: "ChaiApp", version: "1.0.0" };
// config.appName = "NewChaiApp"; // Error: Cannot assign to 'appName' because it is a read-only property.

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = { name: "Masala Chai", price: 2.5, isHot: true };

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 3.0,
  ingredients: ["tea leaves", "ginger"]
};
