import { Component } from "react";
import RecommendItem from "./UserRecommendItem";

class UserRecommend extends Component {
    render() {
        const { handleIdState } = this.props;
        this.users = [
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
                <div className="recommendContainer">
                    <RecommendItem
                        id="haechilim"
                        name="임준형"
                    />
                    <div className="recommendTitle">
                        <h4 className="text">회원님을 위한 추천</h4>
                        <button className="showAll">모두 보기</button>
                    </div>
                    <div className="recommendList">
                        {this.users.map((user, index) => (
                            <RecommendItem
                                key={"recommendItem" + index}
                                id={user.id}
                                name={user.name}
                                handleIdState={handleIdState}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default UserRecommend;