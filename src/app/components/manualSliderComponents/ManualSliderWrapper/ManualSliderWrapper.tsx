
import ManualSlider from '../ManualSlider/ManualSlider'
import ManualSliderMobile from '../ManualSliderMobile/ManualSliderMobile'
import styles from './ManualSliderWrapper.module.css'

interface SliderProps {
    className?: string,
    slides: React.ReactNode[]
}


const ManualSliderWrapper = (props: SliderProps) => {

    return (
        <>
            <div className={styles.invisibleInMobile}>
                <ManualSlider className={props.className} slides={props.slides} />
            </div>
            <div className={styles.visibleInMobile}>
                <ManualSliderMobile slides={props.slides} />
            </div>
        </>
    )
}

export default ManualSliderWrapper