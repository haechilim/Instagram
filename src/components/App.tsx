import MainNevigation from "@/components/navigations/MainNavigation";
import styles from "@/styles/App.module.css";
import { Component, ReactNode } from "react";
import Progress from "./Progress";

interface Props {
    selectedIndex: number,
    children?: JSX.Element
};

class App extends Component<Props> {
    render(): ReactNode {
        const { selectedIndex, children } = this.props;

        return (
            <div className={styles.container}>
                <Progress/>
                <div className={styles.navigationContainer}>
                    <MainNevigation selectedIndex={selectedIndex}/>
                    <div className={styles.workspaceContainer}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;