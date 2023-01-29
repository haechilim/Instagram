import { Component } from "react";
import "../../css/Detail.css";
import Button from "../buttons/Button";
import CoverImage from "../workspace/explore/CoverImage";
import Activity from "./Activity";
import Avatar from "./Avatar";

class Detail extends Component {
    onMouseOver = e => {
        this.clearTimeoutAll();
        this.mouseOverTimeoutId = setInterval(() => {
            this.detail.style.display = "flex";
            clearTimeout(this.mouseOverTimeoutId);
        }, 500);
    }

    onMouseLeave = e => {
        clearTimeout(this.mouseOverTimeoutId);
        this.mouseLeaveTimeoutId = setInterval(() => {
            this.detail.style.display = "none";
            clearTimeout(this.mouseLeaveTimeoutId);
        }, 500);
    }

    clearTimeoutAll() {
        for (let i = 0 ; i < this.mouseOverTimeoutId + 1; i++) {
            clearInterval(i);
        }
    }

    render() {
        const { id } = this.props;
        const users = {
            "haechilim": {
                name: "임준형",
                recentPosts: [ "image1", "image2", "image3" ],
                postCount: 747,
                follow: 364000,
                follower: 16
            },
            "mintistration_04": {
                name: "김규원",
                recentPosts: [ "image1", "image2", "image3" ],
                postCount: 747,
                follow: 364000,
                follower: 16
            },
            "sketcherysk": {
                name: "김연서",
                recentPosts: [ "image1", "image2", "image3" ],
                postCount: 747,
                follow: 364000,
                follower: 16
            },
            "jaehuggiesmagickpanty": {
                name: "이재하",
                recentPosts: [ "image1", "image2", "image3" ],
                postCount: 747,
                follow: 364000,
                follower: 16
            },
            "lilyiu_": {
                name: "",
                recentPosts: [ "image1", "image2", "image3" ],
                postCount: 747,
                follow: 364000,
                follower: 16
            },
            "i_am_young22": {
                name: "",
                recentPosts: [ "image1", "image2", "image3" ],
                postCount: 747,
                follow: 364000,
                follower: 16
            },
            "coolkidnoname_": {
                name: "COOMO",
                recentPosts: [ "image1", "image2", "image3" ],
                postCount: 747,
                follow: 364000,
                follower: 16
            },
            "winter.aespa": {
                name: "aespa 에스파 WINTER 윈터",
                link: "https://youtube.com/watch?v=likYKQXBLbw",
                recentPosts: [ "image1", "image2", "image3" ],
                postCount: 747,
                follow: 364699,
                follower: 16
            },
            "friendshiping94": {
                name: "우정잉",
                recentPosts: [ "image1", "image2", "image3" ],
                postCount: 747,
                follow: 364000,
                follower: 16
            },
            "yangazi025": {
                name: "양아지",
                link: "https://youtube.com/channel/UCmMxEFwIOMGGoThkmtZZOvQ",
                recentPosts: [ "image4", "image5", "image6" ],
                postCount: 29,
                follow: 84999,
                follower: 73
            }
        };
        const { name, link, recentPosts, postCount, follow, follower } = users[id];

        return (
            <div className="detailContainer" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                <div className="profile">
                    <Avatar id={id} type="large" border={false}/>
                    <div className="info">
                        <div className="main">
                            <div className="id">{id}</div>
                            <div className="name">{name}</div>
                        </div>
                        <div className="additionalInfo">
                            <div className="link">{link || ""}</div>
                            <div className="message">flo.pin59님 외 2명이 팔로우합니다</div>{/* db쓸때 처리 */}
                        </div>
                    </div>
                </div>
                <Activity postCount={postCount} follow={follow} follower={follower}/>
                <div className="images">
                    {recentPosts.map((post, index) => (
                        <div key={"recentPost" + index} className="image">
                            <CoverImage image={post} type="small"/>
                            <div className="mask"/>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <Button name="메시지 보내기" marginRight={true}/>
                    <Button name="팔로잉"/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.detail = document.querySelector(".homeWorkspaceContainer .detailContainer");
    }
}

export default Detail;