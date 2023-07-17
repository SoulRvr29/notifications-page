import "./index.css";
import Header from "./Header";
import Notification from "./Notification";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [notifyNr, setNotifyNr] = useState("3");

  const [notificationData, setNotificationData] = useState([
    {
      avatar: "./images/avatar-mark-webber.webp",
      name: "Mark Webber",
      action: "reacted to your recent post",
      reference: "My first tournament today",
      time: "1m ago",
      new: true,
    },
    {
      avatar: "./images/avatar-angela-gray.webp",
      name: "Angela Gray",
      action: "followed you",
      time: "5m ago",
      new: true,
    },
    {
      avatar: "./images/avatar-jacob-thompson.webp",
      name: "Jacob Thompson",
      action: "has joined your group",
      reference: "Chess Club",
      time: "1 day ago",
      new: true,
    },
    {
      avatar: "./images/avatar-rizky-hasanuddin.webp",
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      time: "5 days ago",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      new: false,
    },
    {
      avatar: "./images/avatar-kimberly-smith.webp",
      name: "Kimberly Smith",
      action: "commened on your picture",
      time: "1 week ago",
      picture: "./images/image-chess.webp",
      new: false,
    },
    {
      avatar: "./images/avatar-nathan-peterson.webp",
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      reference: "end-game strategies to increase your win rate",
      time: "2 weeks ago",
      new: false,
    },
    {
      avatar: "./images/avatar-anna-kim.webp",
      name: "Anna Kim",
      action: "left the group",
      reference: "Chess Club",
      time: "2 weeks ago",
      new: false,
    },
  ]);

  const clickHandler = () => {
    setNotifyNr("0");
    const newState = notificationData.map((obj) => {
      if (obj.new == true) {
        return { ...obj, new: false };
      }
      return obj;
    });
    setNotificationData(newState);
  };

  return (
    <main>
      <Header notifyNr={notifyNr} clickHandler={clickHandler} />
      <Notification notifyNr={notifyNr} notificationData={notificationData} />
      <Footer />
    </main>
  );
}

export default App;
