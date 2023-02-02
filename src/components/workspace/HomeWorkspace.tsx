import { Component, ReactNode } from "react";
//import Detail from "../profile/Detail";
import MainPosts from "../posts/MainPosts";
import UserRecommends from "@/components/recommend/UserRecommends";
import styles from "@/styles/HomeWorkspace.module.css";

class HomeWorkspace extends Component {
    render(): ReactNode {
        return (
            <div className={styles.homeWorkspaceContainer}>
                <MainPosts/>
                {/* <UserRecommends/> */}
                {/* <Detail id={id}/> */}
            </div>
        );
    }
}

export default HomeWorkspace;