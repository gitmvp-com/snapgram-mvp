import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import Topbar from "@/components/Topbar";
import { mockPosts } from "@/lib/mockData";
import { useState } from "react";
import { IPost } from "@/types";

const Home = () => {
  const [posts] = useState<IPost[]>(mockPosts);

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <Topbar />
        <div className="home-posts">
          <div className="flex-between w-full max-w-screen-sm mb-7">
            <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          </div>

          {posts.length === 0 ? (
            <p className="text-light-4 mt-10 text-center w-full">No posts yet</p>
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts.map((post) => (
                <li key={post.id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
