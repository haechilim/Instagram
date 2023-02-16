import { Component, ReactNode } from "react"

interface Props {
    selected: boolean
}

class HomeIcon extends Component<Props> {
    render(): ReactNode {
        const { selected } = this.props;

        return (
            <svg className="icon" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24">
                {selected ? 
                    <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"/> :
                    <path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/>
                }
            </svg>
        );
    }
}

export default HomeIcon;