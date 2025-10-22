import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <h1 className="h3-bold">Snapgram</h1>
        </Link>

        <div className="flex gap-4">
          <Link to="/create-post">
            <Button className="shad-button_primary">
              Create Post
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
