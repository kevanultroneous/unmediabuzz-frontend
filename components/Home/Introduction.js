import { Col, Image, Row } from "react-bootstrap"
import ContainerWrraper from "../common/ContainerWrraper"
import styles from "@/styles/home/Introduction.module.css"
import ToggleUiButton from "../common/ToggleUiButton"
import { ButtonsList } from "utils/ButtonsList"
import { ProcessList } from "utils/Anonymous"

// Process card component
const Process = ({ProcessList,title,icon,desc ,index}) =>{
    return (
        <div className="d-flex">
            <div  className={styles.ProcessCover}>
                <div className={styles.ProcessImage}>
                    <Image src={icon} alt="edit-desk"/>
                </div>
                <h6 className={styles.ProcessTitle}>{title}</h6>
                <p className={styles.ProcessDesc}>{desc}</p>
            </div>
            {
                !(ProcessList.indexOf(ProcessList[ProcessList.length-1]) === index ) &&
                    <div className={index % 2 == 0 ? styles.ArrowWrraper : styles.ArrowWrraperUp}>
                        <Image src={index % 2 == 0 ?  "/assets/icons/up-brown.svg" : "/assets/icons/down-brown.svg"} alt="arrow" />
                    </div>
            }
        </div>
    )
}

// Full introduction component
const Introduction = () =>{
    return (
     <ContainerWrraper>
        <Row>
            <Col xs={12} sm={12}  md={12} lg={12} xl={12} className={styles.MainIntroductionWrraper}>

                <div> 
                        <p className={styles.TitleText}>
                            Start, Raise & Grow
                        </p>
                        <p className={`${styles.TitleText} ${styles.TitleTextWithBrush}`}>faster with 
                            <span className={styles.TitleSpan}>
                                <Image src="/assets/images/brush-2.svg" alt="span-text" className={styles.BrushImage}/>
                                &nbsp;&nbsp;&nbsp;UNmediaBuzz
                            </span>
                        </p>
                </div>

                <div>
                    <p className={styles.TitleIntro}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                       has been the industry&apos;s standard dummy text ever since the 1500s
                    </p>
                </div>

                <div className={styles.ButtonsWrraper}>
                    {
                        ButtonsList.IntroButtonList.map((button,index)=>
                            <div className={styles.ButtonSpaces} key={index+1}>
                                <ToggleUiButton 
                                    dark
                                    text={button.source} />
                            </div>
                        )
                    }
                </div>

            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={styles.ProcessWrraper}>
                    {
                        ProcessList.map((process,index)=>
                            <Process 
                                key={index+1}
                                index={index}
                                icon={process.icon}
                                title={process.title}
                                desc={process.desc}
                                ProcessList={ProcessList}
                            />
                        )
                    }
                </div>
            </Col>
        </Row>
     </ContainerWrraper>
    )
}
export default Introduction