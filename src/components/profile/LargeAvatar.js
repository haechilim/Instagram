import { Component } from "react";
import Avatar from "./Avatar";

class LargeAvatar extends Component {
    render() {
        const { checked } = this.props;
        
        return (
            <Avatar type="large" id={this.props.id} checked={checked}/>
        );
    }
}

export default LargeAvatar;