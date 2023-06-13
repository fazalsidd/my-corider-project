import "../App.css";

const Message = ({ sender, message, photo }) => {
  console.log(message);
  const messageClass = sender ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="image">
          <img src={photo} />
        </div>
        <div className="description">
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Message;