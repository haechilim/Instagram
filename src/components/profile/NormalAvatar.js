import { Component } from "react";
import Avatar from "./Avatar";

class NormalAvatar extends Component {
    render() {
        return (
            <Avatar type="nomal" id={this.props.id}/>
        );
    }
}

export default NormalAvatar;