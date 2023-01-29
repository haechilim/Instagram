import { Component, ReactNode } from "react"
import Avatar, { AvatarSize } from "@/components/profile/Avatar"

interface Props {
    id: string
    selected: boolean
}

class SmallAvatar extends Component<Props> {
    render(): ReactNode {
        const { id, selected } = this.props;

        return (
            <Avatar size={AvatarSize.SIZE_24} id={id} selected={selected}/>
        );
    }
}

export default SmallAvatar;