//arrays
const friends = ["jomir", "arman", "yousuf", "safa"]; //literal syntax
const years = new Array(1992, 1993, 1994, 1994);
console.log(years);
console.log(friends);
// finding elemens in array
console.log(friends[2]);
console.log(years.length);

const ageCalc = function (birthYear) {
  return 2000 - birthYear;
};
const age1 = ageCalc(years[2]);
console.log(age1);

//push

const animals = ["cow", "goat", "horse"];
animals.push("hen", "duck", "tiger");
animals.unshift("elefent");
//animals.pop();
animals.shift();

console.log(animals);
console.log(animals.length);
//findings index by element name

console.log(animals.indexOf("goat"));
console.log(animals.includes("fish"));
console.log(animals.includes("cow"));

if (animals.includes("tiger")) {
  console.log("tiger is king of forest");
} else {
  console.log("unknown");
}

//exercise

const scoreLions = (14 + 13 + 17 + 15 + 16) / 5;
console.log(scoreLions);
const dragonScore = (14 + 13 + 17 + 15 + 16) / 5;
console.log(dragonScore);

/*if (scoreLions === dragonScore && scoreLions >= 15 && dragonScore >= 15) {
  console.log("darw!");
} else if (scoreLions > dragonScore && scoreLions >= 15) {
  console.log("Winner is lions");
} else if (dragonScore > scoreLions && dragonScore >= 15) {
  console.log("Winner is dragon");
}*/

//curring function

function multi(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          return a * b * c * d * e;
        };
      };
    };
  };
}
console.log(multi(10)(5)(6)(8)(8));

const multiPro = (a) => (b) => (c) => (d) => (e) => a * b * c * d * e;
console.log(multiPro(10)(5)(6)(8)(8));

//Objects
const student = {
  firstName: "Arafat",
  lastName: "rahman",
  age: 2022 - 1995,
  job: "sceintist",
  friendsC: ["rahim", "karim", "mina"],
};

console.log(student);
console.log(student.job);
