import "./index.css";
import "./prosemirror.css";
import { Button } from "./components/ui/button";
import { Link } from "@tanstack/react-router";
import { signOut } from "./api/user/signOut";

function App() {
  return (
    <>
      this is Landing Page
      <Button variant={"link"}>
        <Link to="/login">Login</Link>
      </Button>
      <Button variant={"link"}>
        <Link to="/daily">daily</Link>
      </Button>
      <Button variant={"link"} onClick={() => signOut()}>
        signout
      </Button>
    </>
  );
}

export default App;
