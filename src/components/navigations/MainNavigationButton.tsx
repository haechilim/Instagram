import { Component, ReactNode } from "react"
import Link from "next/link"
import AlarmIcon from "@/components/icons/AlarmIcon"
import CreateIcon from "@/components/icons/CreateIcon"
import ExploreIcon from "@/components/icons/ExploreIcon"
import HomeIcon from "@/components/icons/HomeIcon"
import MessageIcon from "@/components/icons/MessageIcon"
import ReelsIcon from "@/components/icons/ReelsIcon"
import SearchIcon from "@/components/icons/SearchIcon"
import { MainNavigationItem } from "@/components/navigations/MainNavigation"
import HamburgerMenuIcon from "@/components/icons/HamburgerIcon"
import SmallAvatar from "@/components/profile/SmallAvatar"
import styles from "@/styles/MainNavigationButton.module.css"

interface Props {
    item: MainNavigationItem
}

class MainNavigationButton extends Component<Props> {
    render(): ReactNode {
        const { name, text, path, selected, onClick } = this.props.item || {};
        const icons: JSX.Element[] = [
            <HomeIcon key="homeIcon" selected={selected}/>,
            <SearchIcon key="searchIcon" selected={selected}/>,
            <ExploreIcon key="exploreIcon" selected={selected}/>,
            <ReelsIcon key="reelsIcon" selected={selected}/>,
            <MessageIcon key="messageIcon" selected={selected}/>,
            <AlarmIcon key="alarmIcon" selected={selected}/>,
            <CreateIcon key="createIcon" selected={selected}/>,
            <SmallAvatar key="profile" id="haechilim" selected={selected}/>,
            <HamburgerMenuIcon key="hamburger" selected={selected}/>
        ];
        const button: JSX.Element = (
            <>
                {icons[name]}
                <div className={`${styles.text} ${selected && styles.bold}`}>{text}</div>
            </>
        );
        

        return (
            <>
                {path !== undefined ?
                    <Link id="mainNavigationButton" href={path} className={styles.button} onClick={onClick}>{button}</Link> :
                    <div id="mainNavigationButton" className={styles.button} onClick={onClick}>{button}</div>
                }
            </>
        );
    }
}

export default MainNavigationButton;