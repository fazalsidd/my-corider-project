import '../App.css';

const Message=({sender,message,photo})=>{
  console.log(message);
    const messageClass =sender ? 'sent' : 'received';
    
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photo} />
        <p>{message}</p>
      </div>
    </>)
  }

  export default Message;