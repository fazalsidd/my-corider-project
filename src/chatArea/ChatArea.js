import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import useFetch from "../hooks/useFetch";
import Message from "./Message";
import pic from "../assets/pic.jpg";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const ChatArea = () => {
  const dummy = useRef();
  let { isLoading, data, serverError } = useFetch(
    "https://qa.corider.in/assignment/chat?page=0"
  );
  const [msg, setMsg] = useState([]);
  //console.log(data);

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    setMsg((current) => [...current, formValue]);
    setFormValue("");
    //console.log(msg);
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <main>
        {data?.chats.map((msg) => (
          <Message
            key={msg?.id}
            sender={false}
            message={msg?.message}
            photo={msg?.sender?.image}
          />
        ))}
        {msg.map((item) => (
          <Message key={Date.now} sender={true} message={item} photo={pic} />
        ))}

        <span ref={dummy}></span>
      </main>
      <div className="chatform">
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Type Here"
          />
          <lable>
            <InsertLinkOutlinedIcon />
            <button type="submit" disabled={!formValue}>
              <SendOutlinedIcon />
            </button>
          </lable>
        </form>
      </div>
    </>
  );
};

export default ChatArea;
