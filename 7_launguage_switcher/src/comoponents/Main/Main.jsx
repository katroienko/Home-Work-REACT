import Text from "../Text/Text";
import Button from "../Button/Button";
import styles from "./Main.module.css"
const Main = () => {
    return (
        <>
            <div className={styles.wrapperMain}>
                <Text />
                <Button />
            </div>
        </>
    )
}
export default Main;


