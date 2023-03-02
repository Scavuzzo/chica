import styles from 'styles/Block.module.scss'
import Typography from '@mui/material/Typography';
import Slider from './Slider.compoment';

export interface BlockProps {
    title?: string,
    subtitle?: string,
    text?: string,
    images?: string[]
    alt?: string
}

const Block = ({ title, subtitle, text, images, alt }: BlockProps) => {
    
    return (
        <>
            <div className={styles.root} >
                <div className={styles.imgContainer}>
                    <Slider images={images} alt={alt} />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.titlebox}>
                        <Typography className={styles.title} variant='h2' >{title}</Typography>
                        {subtitle && <Typography className={styles.subtitle} variant='h5' >{subtitle} </Typography>}
                    </div>                    {/* <Typography variant='body2' > De especialidad</Typography> */}
                    <div className={styles.paragraph}>
                        {
                            text.split("/").map((p, i) => {
                                return <Typography key={i} variant='body1'>{p}</Typography>
                            })
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Block
