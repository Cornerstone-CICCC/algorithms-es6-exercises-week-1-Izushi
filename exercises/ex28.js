/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  yourName: "Daz",
  numOfFriends: 2,
  posts: ["array", "object", "method"],
  postMessage: function (newMessage) {
    this.posts.push(newMessage);
  },
  deleteMessage: function (index) {
    this.posts.splice(index, 1);
  },
  addFriend: function () {
    ++this.numOfFriends;
  },
  removeFriend: function () {
    if (this.numOfFriends) {
      --this.numOfFriends;
    }
  }
};

facebookProfile.postMessage("react");
facebookProfile.deleteMessage(0);
facebookProfile.addFriend();
facebookProfile.removeFriend();

console.log(facebookProfile);