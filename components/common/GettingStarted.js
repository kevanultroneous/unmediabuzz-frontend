import ContainerWrraper from "./ContainerWrraper"
import {Row,Col,Image,Button} from "react-bootstrap"
import styles from "@/styles/common/GettingStarted.module.css"
import ToggleUiButton from "./ToggleUiButton"
import { ButtonsList } from "utils/ButtonsList"

const GettingStarted  = () =>{

    

    return (
            <ContainerWrraper customClass={`${styles.ContainerWrraperSpaces}`}>
                <Row className={styles.GettingStartedCard}>
                        <Col xs={12} md={8} lg={8} xl={8} >
                           
                            <div className={styles.LeftSideMainWrraper}>
                                <div>
                                    <Image src="/assets/icons/right-curve.svg" alt="right-curve" className={styles.RightCurve} fluid/>
                                </div>
                                <div className={styles.DiscriptionWrapper}>
                                    <p className={styles.SimpleHeading}>Ready To Start Getting</p>
                                    <p className={styles.GradiantHeading}>Media Coverage</p>
                                    <p className={styles.SimpleHeading}>in all over the World ?</p>
                                </div>
                            </div>

                            <div className={styles.ButtonsMainWrraper}>
                                {
                                    ButtonsList.GettingStartedButtonList.map((button,index)=>
                                        <div className={styles.ButtonCover} key={index+1}>
                                            <ToggleUiButton 
                                                text={button.source}/>
                                        </div>    
                                    )
                                }
                            </div>
                        </Col>
                       
                        <Col xs={12} md={4} lg={4} xl={4}>
                            <div>
                                {/* <Image src="/assets/images/world.svg" alt="world" fluid/> */}
                            </div>
                        </Col>
                </Row>
            </ContainerWrraper>
    )
}
export default GettingStarted