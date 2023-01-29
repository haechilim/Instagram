import { Component } from "react";
import "../../css/Profile.css";
import Avatar from "./Avatar";
import LargeAvatar from "./LargeAvatar";

class Profile extends Component {
    onMouseOver = e => {
        const { id, handleIdState } = this.props;

        clearTimeout(this.mouseLeaveTimeoutId);
        this.mouseOverTimeoutId = setInterval(() => {
            handleIdState(id);
            this.updateStyleMouseOver(e);
            clearTimeout(this.mouseOverTimeoutId);
        }, 500);
    }

    onMouseLeave = e => {
        clearTimeout(this.mouseOverTimeoutId);
        this.mouseLeaveTimeoutId = setInterval(() => {
            this.updateStyleMouseLeave(e);
            clearTimeout(this.mouseLeaveTimeoutId);
        }, 500);
    }
    
    render() {
        const { idOnly, isMyId, additionalInfo, id } = this.props;

        return (
            <div id={id} className="profileContainer">
                {idOnly || (isMyId ? <LargeAvatar id={id}/> : 
                    <Avatar
                        id={id}
                        onMouseOver={this.onMouseOver}
                        onMouseLeave={this.onMouseLeave}
                    />
                )}
                <div className={"info" + (idOnly ? "" : (" marginLeft" + (isMyId ? " padding" : "")))}>
                    <div 
                        className="id"
                        onMouseOver={!isMyId ? this.onMouseOver : null}
                        onMouseLeave={!isMyId ? this.onMouseLeave : null}
                    >{id}</div>
                    {additionalInfo !== undefined &&
                        <div className={"additionalInfo" + (isMyId ? " name" : "")}>
                            {additionalInfo}
                        </div>
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.detail = document.querySelector(".homeWorkspaceContainer .detailContainer");
    }

    updateStyleMouseOver(e) {
        this.detail.style.display = "flex";
        this.detail.style.top = (e.target.offsetHeight + e.target.offsetTop) + "px";
        this.detail.style.left = e.target.offsetLeft + "px";
    }

    updateStyleMouseLeave(e) {
        this.detail.style.display = "none";
    }
}

export default Profile;