import { friends } from "../model/friends.model.js";
export const home = (req, res) => {
  res.send("Welcome home");
};
const checkNameExists = (name) => {
  const fiteredNameArray = friends.filter((friend) => friend.name === name);
  if (fiteredNameArray.length === 0) {
    return true;
  } else {
    return false;
  }
};
export const addFriend = (req, res) => {
  const clientName = req.body.name;
  if (!clientName) {
    return res.status(400).json({
      error: "no name provided",
    });
  } else if (!checkNameExists(clientName)) {
    return res.status(400).json({
      error: `${clientName} is already present.Add other name`,
    });
  }
  const newFriend = {
    id: friends.length + 1,
    name: clientName,
  };
  friends.push(newFriend);
  res.status(200).json({
    message: `${clientName} added`,
  });
};
export const getFriends = (req, res) => {
  res.status(200).json(friends);
};
export const getSingleFriend = (req, res) => {
  const id = Number(req.params.id);
  const friend = friends.filter((item) => item.id === id)[0];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Invalid id",
    });
  }
};
