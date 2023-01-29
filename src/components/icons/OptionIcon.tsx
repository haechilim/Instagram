import { Component, ReactNode } from "react";

interface Props {
    seleced: boolean
}

class OptionIcon extends Component<Props> {
    render(): ReactNode {
        return (
            <svg color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24">
                <circle cx="12" cy="12" r="1.5"/>
                <circle cx="6" cy="12" r="1.5"/>
                <circle cx="18" cy="12" r="1.5"/>
            </svg>
        );
    }
}

export default OptionIcon;