import { Component, ReactNode } from "react";
import Detail from "@/components/popup/Detail";
import MainPosts from "@/components/posts/MainPosts";
import UserRecommends from "@/components/recommend/UserRecommends";
import styles from "@/styles/HomeWorkspace.module.css";

class HomeWorkspace extends Component {
    render(): ReactNode {
        return (
            <div className={styles.homeWorkspaceContainer}>
                <MainPosts/>
                <UserRecommends/>
            </div>
        );
    }
}

export default HomeWorkspace;