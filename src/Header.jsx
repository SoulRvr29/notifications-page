const Header = ({ notifyNr, clickHandler }) => {
  return (
    <header>
      <div className="notifyContainer">
        <h1>Notifications</h1>
        <div className="notifyNr">{notifyNr}</div>
      </div>
      <button onClick={() => clickHandler()}>Mark all as read</button>
    </header>
  );
};

export default Header;
