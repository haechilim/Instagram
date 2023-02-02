import { Component, ReactNode } from "react";
import Avatar, { AvatarSize } from "@/components/profile/Avatar";

interface Props {
    id: string,
    checked?: boolean
}

class LargeAvatar extends Component<Props> {
    render(): ReactNode {
        const { id, checked } = this.props;
        
        return (
            <Avatar size={AvatarSize.SIZE_56} id={id} story={checked}/>
        );
    }
}

export default LargeAvatar;