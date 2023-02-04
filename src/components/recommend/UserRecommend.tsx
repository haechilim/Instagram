import { Component, ReactNode } from "react"
import styles from "@/styles/UserRecommend.module.css"
import Profile from "@/components/profile/Profile"
import NormalAvatar from "@/components/profile/NormalAvatar"

interface Props {
    id: string,
    name: string
}

class RecommendItem extends Component<Props> {
    render(): ReactNode {
        const { id, name } = this.props;
        const myId: string = "haechilim"; //임시 코드
        const isMyId: boolean = myId === id;

        return (
            <div className={`${styles.recommendItem} ${isMyId || styles.recommendItemPadding}`}>
                <Profile id={id} idOnly={false} additionalInfo={isMyId ? name : "회원님을 위한 추천"}/>
                {/* <NormalAvatar id={id}/>
                <div className={styles.nameDiv}>
                    <div className={styles.userId}>{id}</div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.message}>회원님을 팔로우합니다</div>
                </div> */}
                <button className={styles.button}>{isMyId ? "전환" : "팔로우"}</button>
            </div>
        );
    }
}

export default RecommendItem;