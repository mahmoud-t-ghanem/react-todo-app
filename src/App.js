import "./App.css";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";
import TodoList from "./components/TodoList";

const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[500],
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Alexandria"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          height: "100vh",
        }}
      >
        <div
          className="App"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TodoList />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
