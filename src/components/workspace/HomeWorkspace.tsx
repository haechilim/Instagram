import { Component, ReactNode } from "react";
import Detail from "@/components/popup/Detail";
import MainPosts from "@/components/posts/MainPosts";
import UserRecommends from "@/components/recommend/UserRecommends";
import styles from "@/styles/HomeWorkspace.module.css";
import FullScreenPopup from "@/components/popup/FullScreenPopup";
import Post, { PostDirection } from "@/components/posts/Post";

class HomeWorkspace extends Component {
    render(): ReactNode {
        return (
            <div className={styles.homeWorkspaceContainer}>
                <MainPosts/>
                <UserRecommends/>
                <Detail/>
                <FullScreenPopup>
                    <Post direction={PostDirection.ROW}/>
                </FullScreenPopup>
            </div>
        );
    }
}

export default HomeWorkspace;