import ContainerWrraper from "../common/ContainerWrraper"
import styles from "@/styles/home/WhyWeAreDifferent.module.css"
import { Col, Image, Row } from "react-bootstrap"

const WhyWeAreDifferent = () =>{
    return (
        <ContainerWrraper customClass={`${styles.ContainerWrraperCustom}`}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className={styles.MainIntroAndDiscription}>
                            <p className={styles.MainTitle}>
                                Why we are  Different?
                                <span className={styles.SpanImageWrraper}>
                                    <Image src="/assets/images/brush-3.svg" alt="brush"/>
                                </span>
                            </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry. Lorem Ipsum has been the industry&apos;s standard 
                                dummy text ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. It has survived not only 
                                five centuries, but also the leap into electronic typesetting, remaining essentially 
                                unchanged.
                            </p>
                            <p>Pick the Best choice for Media Distribution</p>
                    </Col> 
                </Row>
        </ContainerWrraper>
    )
}

export default WhyWeAreDifferent