import { Link } from "react-router-dom";
import { multiFormatDateString } from "@/lib/utils";
import { IPost } from "@/types";

type PostCardProps = {
  post: IPost;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <img
            src={post.creator.imageUrl}
            alt="creator"
            className="w-12 lg:h-12 rounded-full"
          />
          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.creator.name}
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular ">
                {multiFormatDateString(post.createdAt)}
              </p>
              {post.location && (
                <>
                  •
                  <p className="subtle-semibold lg:small-regular">
                    {post.location}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="small-medium lg:base-medium py-5">
        <p>{post.caption}</p>
        {post.tags && (
          <ul className="flex gap-1 mt-2">
            {post.tags.split(",").map((tag: string, index: string) => (
              <li key={`${tag}${index}`} className="text-light-3 small-regular">
                #{tag.trim()}
              </li>
            ))}
          </ul>
        )}
      </div>

      <img
        src={post.imageUrl}
        alt="post image"
        className="post-card_img"
      />
    </div>
  );
};

export default PostCard;
