import { Component } from "react";
import "../../css/RecommendItem.css";
import Profile from "../profile/Profile";

class RecommendItem extends Component {
    render() {
        const { id, name, handleIdState } = this.props;
        const myId = "haechilim";
        const isMyId = myId === id;

        return (
            <div className={"recommendItem" + (!isMyId ? " recommendItemPadding" : "")}>
                <Profile id={id} isMyId={isMyId} additionalInfo={isMyId ? name : "회원님을 위한 추천"} handleIdState={handleIdState}/>
                {/* <NormalAvatar id={id}/>
                <div className="nameDiv">
                    <div className="userId">{id}</div>
                    {/* <div className="name">{name}</div>
                    <div className="message">회원님을 팔로우합니다</div>
                </div> */}
                <button className="button">{isMyId ? "전한" : "팔로우"}</button>
            </div>
        );
    }
}

export default RecommendItem;