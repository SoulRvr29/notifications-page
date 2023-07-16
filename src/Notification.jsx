const Notification = () => {
  const notificationData = [
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
  ];
  return (
    <div className="notifications">
      {notificationData.map((item) => (
        <figure
          style={
            item.new == true
              ? { backgroundColor: "var(--Very-light-grayish-blue)" }
              : { backgroundColor: "unset" }
          }
        >
          <div className="avatar">
            <img src={item.avatar} alt="avatar"></img>
          </div>
          <figcaption>
            <div className="data">
              <div className="spanContainer">
                <span className="name">
                  <a href="#">{item.name}</a>{" "}
                </span>
                <span className="action">{item.action}</span>
                <span className="reference">
                  <a href="#">{item.reference}</a>
                </span>
              </div>
              {item.picture && (
                <div className="image">
                  <img src={item.picture} alt="image"></img>
                </div>
              )}
            </div>
            <div className="time">{item.time}</div>
            {item.message && <div className="message">{item.message}</div>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Notification;
