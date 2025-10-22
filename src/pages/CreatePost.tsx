import PostForm from "@/components/PostForm";
import Topbar from "@/components/Topbar";

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <Topbar />
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/add-post.svg"
            width={36}
            height={36}
            alt="add"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Create Post</h2>
        </div>

        <PostForm />
      </div>
    </div>
  );
};

export default CreatePost;
