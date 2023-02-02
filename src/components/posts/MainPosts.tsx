import { Component, ReactNode } from "react";
import Posts from "@/components/posts/Posts";
import Stories from "@/components/stories/Stories";
import styles from "@/styles/MainPosts.module.css"

class MainPosts extends Component {
    render(): ReactNode {
        return (
            <div className={styles.mainPostsContainer}>
                <Stories/>
                <Posts/>
            </div>
        );
    }
}

export default MainPosts;