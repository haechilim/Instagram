import { Component } from "react"
import RecommendItem from "@/components/recommend/UserRecommend"
import styles from "@/styles/UserRecommends.module.css"

interface User {
    id: string,
    name: string
}

class UserRecommends extends Component {
    render() {
        const users: User[] = [
            {
                id: "sketcherysk",
                name: "김연서"
            },
            {
                id: "mintistration_04",
                name: "김규원"
            },
            {
                id: "jaehuggiesmagickpanty",
                name: "이재하"
            }
        ];

        return (
            <div style={{ width: "319px" }}>
                <div className={styles.recommendContainer}>
                    <RecommendItem
                        id="haechilim"
                        name="임준형"
                    />
                    <div className={styles.recommendTitle}>
                        <h4 className={styles.text}>회원님을 위한 추천</h4>
                        <button className={styles.showAll}>모두 보기</button>
                    </div>
                    <div className={styles.recommendList}>
                        {users.map((user: User, index: number) => (
                            <RecommendItem
                                key={"recommendItem" + index}
                                id={user.id}
                                name={user.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default UserRecommends;