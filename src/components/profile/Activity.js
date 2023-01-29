import { Component } from "react";
import "../../css/Activity.css";
import Util from "../../util";

class Activity extends Component {
    render() {
        const { postCount, follow, follower } = this.props;

        return (
            <div className="activityContainer">
                <div className="activity">
                    <div>게시물</div>
                    <div className="count">{Util.getCountToString(postCount)}</div>
                </div>
                <div className="activity">
                    <div>팔로워</div>
                    <div className="count">{Util.getCountToString(follow)}</div>
                </div>
                <div className="activity">
                    <div>팔로우</div>
                    <div className="count">{Util.getCountToString(follower)}</div>
                </div>
            </div>
        );
    }
}

export default Activity;