const users = [
  {
    username: "Dansmith09",
    email: "dansmith_09@hotmail.com",
    // thoughts: ["1"],
    // friends: ["1","2","3"]
  },
  {
    username: "Dansmyth09",
    email: "dansmyth_09@hotmail.com",
    // thoughts: ["2"],
    // friends: ["1"]
  },
  {
    username: "Dansmeeth09",
    email: "dansmeeth_09@hotmail.com",
    // thoughts: ["3"],
    // friends: ["1"]
  },
];

const appDescriptions = [
  {
  "thoughtText": "You will never be as young as you are again...",
  "username": "Dansmith09",
  "userId": "5edff358a0fcb779aa7b118b"
  }
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random assignments that we can add to student object.
const getRandomAssignments = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      assignmentName: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomAssignments };
