import { Component, ReactNode } from "react"
import Util from "@/util"

interface Props {
    time: number
}

class Time extends Component<Props> {
    render(): ReactNode {
        return (
            <div>{Util.timeToString(this.props.time)}</div>
        );
    }
}

export default Time;