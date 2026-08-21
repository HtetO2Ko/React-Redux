import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "../state/posts/postsApiSlice";
import type { Post } from "../types/posts";

const PostsLists = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPostsQuery({ limit: 10, offset: 0 });

  const [createPostMutation, { isLoading: isCreatingPost }] =
    useCreatePostMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error....</div>;
  }

  return (
    <div>
      <button
        onClick={() => {
          const post = { title: "My New Post" };
          createPostMutation(post);
        }}
      >
        {isCreatingPost ? "Creating..." : "Create Post"}
      </button>
      <ul>
        {posts?.map((post: Post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostsLists;
