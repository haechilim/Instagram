import { Component } from "react";
import styles from "@/styles/Posts.module.css";
import Post, { PostDirection, PostType } from "@/components/posts/Post";

class Posts extends Component {
    render() {
        //const { handleIdState, handlePostState } = this.props;
        const posts: PostType[] = [
            {
                id: "yangazi025",
                time: 1674093599896,
                images: [ "contents3" ],
                likes: 2855,
                commentsCount: 59,
                mainComment: "오빠한테 선물받음🍅"
            },
            {
                id: "winter.aespa",
                time: 1674013599896,
                images: [ "contents2" ],
                likes: 27000,
                commentsCount: 58,
                mainComment: "[230118] 11:31AM KST: ⭐️"
            }
        ];

        return (
            <ul className={styles.postListContainer}>
                {posts.map((post, index) => (
                    <Post 
                        key={"post" + index}
                        direction={PostDirection.COLUMN}
                        post={post}
                    />
                ))}
            </ul>
        );
    }
}

export default Posts;