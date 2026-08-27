let response: any = "42";
let numericLength = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name": "The Great Gatsby"}';
let bookObject: Book = JSON.parse(bookString) as Book;

console.log(bookObject.name); // Output: The Great Gatsby

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "chai";
value = [2, 3, 4];
value = 42;
value.upperCase(); // Error: Property 'upperCase' does not exist on type 'number'.

let newValue: unknown;

newValue = "chai";
newValue = [2, 3, 4];
newValue = 42;
// newValue.upperCase(); // Error: Property 'upperCase' does not exist on type 'unknown'.
if (typeof newValue === "string") {
  newValue.toUpperCase(); // Now it's safe to call string methods
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message); // Now it's safe to access the message property
  }
  console.log(error); // Error is of type unknown, so we can't access its properties directly
}

const data: unknown = "hello";
const strData: string = data as string; // Type assertion to string

type Role = "admin" | "user";

function redirectToPage(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user homepage");
    return;
  }
  role;
}

function neverReturns(): never {
  while (true) {}
}
