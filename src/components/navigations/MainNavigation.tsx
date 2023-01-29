import { Component, ReactNode } from "react"
import Logo from "@/components/icons/Logo"
import HamburgerMenu from "@/components/navigations/HamburgerMenu"
import MainNavigationItem from "@/components/navigations/MainNavigationItem"
import styles from "@/styles/MainNavigation.module.css"

export enum MainNavigationItemName {
    HOME,
    SEARCH,
    EXPLORE,
    REELS,
    MESSAGE,
    ALARM,
    CREATE,
    PROFILE,
    HAMBURGER
}

interface Props {
    selectedIndex: MainNavigationItemName
}

interface State {
    selectedIndex: MainNavigationItemName,
    selectedHamburger: boolean
}

interface MainNavigationItemObject {
    name: MainNavigationItemName,
    text: string,
    path: string,
    selected: boolean,
    onClick: () => void
}

class MainNevigation extends Component<Props, State> {
    state: State = {
        selectedIndex: this.props.selectedIndex,
        selectedHamburger: false
    };

    setInitState = (): void => {
        this.setState({
            selectedIndex: MainNavigationItemName.HOME,
            selectedHamburger: false
        })
    }

    render(): ReactNode {
        const { selectedIndex, selectedHamburger } = this.state;
        const { HOME, SEARCH, EXPLORE, REELS, MESSAGE, ALARM, CREATE, PROFILE } = MainNavigationItemName;
        const MainNavigationItems: MainNavigationItemObject[] = [
            {
                name: HOME,
                text: "홈",
                path: "/",
                selected: selectedIndex === HOME,
                onClick: this.setInitState
            },
            {
                name: SEARCH,
                text: "검색",
                path: "",
                selected: selectedIndex === SEARCH,
                onClick: (): void => {
                    this.setState({
                        selectedIndex: SEARCH,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: EXPLORE,
                text: "탐색 탭",
                path: "/explore",
                selected: selectedIndex === EXPLORE,
                onClick: (): void => {
                    this.setState({
                        selectedIndex: EXPLORE,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: REELS,
                text: "릴스",
                path: "/reels",
                selected: selectedIndex === REELS,
                onClick: (): void => {
                    this.setState({
                        selectedIndex: REELS,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: MESSAGE,
                text: "메시지",
                path: "/message",
                selected: selectedIndex === MESSAGE,
                onClick: (): void => {
                    this.setState({
                        selectedIndex: MESSAGE,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: ALARM,
                text: "알림",
                path: "",
                selected: selectedIndex === ALARM,
                onClick: (): void => {
                    this.setState({
                        selectedIndex: ALARM,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: CREATE,
                text: "만들기",
                path: "",
                selected: selectedIndex === CREATE,
                onClick: (): void => {
                    this.setState({
                        selectedIndex: CREATE,
                        selectedHamburger: false
                    })
                }
            },
            {
                name: PROFILE,
                text: "프로필",
                path: "/haechilim",
                selected: selectedIndex === PROFILE,
                onClick: (): void => {
                    this.setState({
                        selectedIndex: PROFILE,
                        selectedHamburger: false
                    })
                }
            },
        ];

        return (
            <div className={styles.mainMenuContainer}>
                <Logo onClick={this.setInitState}/>
                <div className={styles.menuList}>
                    {MainNavigationItems.map((item: MainNavigationItemObject, index: number) => (
                        <MainNavigationItem
                            key={"MainNavigationItem" + index}
                            name={item.name}
                            text={item.text}
                            path={item.path}
                            selected={item.selected}
                            onClick={item.onClick}
                        />
                    ))}
                </div>
                <HamburgerMenu
                    selected={selectedHamburger}
                    onClick={(): void => this.setState({ selectedHamburger: true })}
                />
            </div>
        );
    }
}

export default MainNevigation;