import { Component, ReactNode } from "react";
import styles from "@/styles/ActionPanel.module.css";
import Util from "@/util";
import AlarmIcon from "@/components/icons/AlarmIcon";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import MessageIcon from "@/components/icons/MessageIcon";

interface Props {
    likes: number
}

class ActionPanel extends Component<Props> {
    render(): ReactNode {
        const { likes } = this.props;

        return (
            <div className={styles.actionPanelContainer}>
                <div className={styles.icons}>
                    <div className={styles.left}>
                        <button className={styles.button}><AlarmIcon/></button>
                        <button className={styles.button}><CommentIcon/></button>
                        <button className={styles.button}><MessageIcon/></button>
                    </div>
                    <button className={`${styles.bookmark} ${styles.button}`}><BookmarkIcon/></button>
                </div>
                <div className={styles.likeCount}>좋아요&nbsp;<div>{Util.getCountToString(likes)}</div>개</div>
            </div>
        );
    }
}

export default ActionPanel;