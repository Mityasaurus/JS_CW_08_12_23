const friends = [
  { name: "Olga", online: false },
  { name: "Nick", online: true },
  { name: "Pablo", online: true },
  { name: "Svitlana", online: true },
];

console.table(friends);

function findFriendByName(friends, name) {
  for (const friend of friends) {
    if (friend.name === name) {
      return true;
    }
  }
  return false;
}

console.log(findFriendByName(friends, "Nick"));

function getAllNames(friends) {
  const names = [];
  for (const friend of friends) {
    names.push(friend.name);
  }
  return names;
}

console.log(getAllNames(friends));

function getAllOnlineFriends(friends) {
  const result = [];
  for (const friend of friends) {
    if (friend.online) {
      result.push(friend);
    }
  }
  return result;
}

console.log(getAllOnlineFriends(friends));
