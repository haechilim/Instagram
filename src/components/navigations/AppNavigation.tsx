import { Component, ReactNode } from "react"
import Logo from "@/components/icons/Logo"
import MainNavigation from "@/components/navigations/MainNavigation"
import HamburgerMenu from "@/components/navigations/HamburgerMenu"
import styles from "@/styles/AppNavigation.module.css"

export enum PageName {
    HOME = 0,
    EXPLORE = 2,
    REELS = 3,
    MESSAGE = 4,
    PROFILE = 7,
}

interface Props {
    currentPage: PageName
}

class AppNavigation extends Component<Props> {
    render(): ReactNode {
        return (
            <div className={styles.container}>
                <Logo/>
                <MainNavigation currentPage={this.props.currentPage}/>
                <HamburgerMenu/>
            </div>
        );
    }
}

export default AppNavigation;