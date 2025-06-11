const user = {
  firstName: "Pang",
  lastName: "KaNomPang",
};
const userText = '{"firstName":"Pang","lastName":"KaNomPang"}';

const arrays = ["A", "B", "C", "D"];
const animals = [
  { name: "Ant" },
  { name: "Bird" },
  { name: "Cat" },
  { name: "Dog" },
];

let emojis = [
  "🍺",
  "🍻",
  "🍶",
  "🍵",
  "☕️",
  "🍼",
  "💻",
  "👙",
  "🐶",
  "🐶",
  "🎮",
  "💪",
];

const show = () => {
  const keyName = "firstName";

  //   Dot notation
  console.log("user.firstName ->", user.firstName);
  console.log("user.lastName ->", user.lastName);

  // Bracket notation
  console.log("user.firstName ->", user[keyName]);
  console.log("user.lastName ->", user["lastName"]);

  //print key ออกมาให้เราดูได้
  console.log("Object.keys -> ", Object.keys(user));
  //print value ออกมาให้เราดูได้
  console.log("Object.values -> ", Object.values(user));

  // แปลง object หรือ บางอย่างเป็น String
  console.log(JSON.stringify(user));
  // แปลงจาก String เป็น Object
  console.log(JSON.parse(userText));

  //   Template literals (Template literals)
  console.log(`FirstName -> ${user.firstName}`);
};

const usersArray = () => {
  console.log("arrays :>> ", arrays);

  console.log("animal -> ", animals[2].name);
  console.log("animal -> ", animals[2]["name"]);
};

usersArray();
show();
