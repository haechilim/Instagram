import { Component, ReactNode } from "react";
import { PageName } from "./MainNavigation";
import MainMenuItem from "./MainNavigationItem";

interface Props {
    selected: boolean,
    onClick: () => void
}

class HamburgerMenu extends Component<Props> {
    render(): ReactNode {
        const { selected, onClick } = this.props;

        return (
            <div className="hamburgerMenuContainer">
                <MainMenuItem
                    key="hamburger"
                    name={PageName.HAMBURGER}
                    text="더 보기"
                    path=""
                    selected={selected}
                    onClick={onClick}
                />
            </div>
        );
    }
}

export default HamburgerMenu;