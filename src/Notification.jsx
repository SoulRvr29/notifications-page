const Notification = ({ notificationData }) => {
  return (
    <div className="notifications">
      {notificationData.map((item) => (
        <figure
          style={
            item.new
              ? { backgroundColor: "var(--Very-light-grayish-blue)" }
              : { backgroundColor: "unset" }
          }
        >
          <div className="avatar">
            <img src={item.avatar} alt="avatar"></img>
          </div>
          <figcaption>
            <div className="data">
              <div className={`spanContainer ${item.new && "redDot"}`}>
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
