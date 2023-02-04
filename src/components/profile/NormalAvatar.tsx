import { Component, ReactNode } from "react"
import Avatar, { AvatarSize } from "@/components/profile/Avatar"

interface Props {
    id: string
}

class NormalAvatar extends Component<Props> {
    render(): ReactNode {
        return (
            <Avatar size={AvatarSize.SIZE_32} id={this.props.id}/>
        );
    }
}

export default NormalAvatar;