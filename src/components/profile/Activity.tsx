import { Component, ReactNode } from "react"
import styles from "@/styles/Activity.module.css"
import Util from "@/util"

interface Props {
    postCount: number,
    follow: number,
    follower: number
}

class Activity extends Component<Props> {
    render(): ReactNode {
        const { postCount, follow, follower } = this.props;

        return (
            <div className={styles.activityContainer}>
                <div className={styles.activity}>
                    <div>게시물</div>
                    <div className={styles.count}>{Util.getCountToString(postCount)}</div>
                </div>
                <div className={styles.activity}>
                    <div>팔로워</div>
                    <div className={styles.count}>{Util.getCountToString(follow)}</div>
                </div>
                <div className={styles.activity}>
                    <div>팔로우</div>
                    <div className={styles.count}>{Util.getCountToString(follower)}</div>
                </div>
            </div>
        );
    }
}

export default Activity;