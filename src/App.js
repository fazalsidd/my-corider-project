import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import useFetch from "./hooks/useFetch";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import ChatArea from "./chatArea/ChatArea";
function App() {
  let { isLoading } = useFetch("https://qa.corider.in/assignment/chat?page=0");

  if (isLoading)
    return (
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
      </Stack>
    );
  return (
    <div className="App">
      <Header />
      <section>
        <ChatArea />
      </section>
    </div>
  );
}

export default App;
