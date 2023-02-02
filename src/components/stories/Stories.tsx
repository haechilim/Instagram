import { Component, ReactNode } from "react";
import Story from "@/components/stories/Story";
import styles from "@/styles/Stories.module.css";

class Stories extends Component {
    render(): ReactNode {
        return (
            <ul className={styles.storyListContainer}>
                <Story id="friendshiping94"/>
                <Story id="winter.aespa"/>
                <Story id="i_am_young22"/>
            </ul>
        );
    }
}

export default Stories;