/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styles from 'styles/Block.module.scss'
import Typography from '@mui/material/Typography';
import { LazyMotion, m, domAnimation, AnimatePresence, Variants } from 'framer-motion';
import { wrap } from 'popmotion'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Image from 'next/image';

export interface BlockProps {
    title?: string,
    subtitle?: string,
    text?: string,
    images?: string[]
    alt?: string
}

const Block = ({ title, subtitle, text, images, alt }: BlockProps) => {
    const [[page, direction], setPagination] = useState([0, 0])
    const imageIndex = wrap(0, images.length, page)
    const [intervalId, setIntervalId] = useState(null);
    
    const paginate = (newDirection: number) => {
        setPagination([page + newDirection, newDirection]);
    };

    const variants: Variants = {
        initial: (direction: number) => {
            return {
                opacity: 0.6,
                x: direction > 0 ? 500 : -500
            }
        },
        animate: {
            zIndex: 1,
            opacity: 1,
            x: 0
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                opacity: 0.3,
                x: direction < 0 ? 500 : -500
            }
        }
    }

    useEffect(() => {
        intervalId && clearInterval(intervalId);
        const newIntervalId = setInterval(() => {
            paginate(1);
        }, 5000);
        setIntervalId(newIntervalId);
        return () => clearInterval(newIntervalId);
    }, [page]);
    

    return (
        <LazyMotion features={domAnimation}>
            <div className={styles.root} >
                <div className={styles.imgContainer}>
                    <div className={styles.img}>
                        <AnimatePresence initial={false} custom={direction}>
                            <m.div 
                                key={page}
                                variants={variants}
                                custom={direction}
                                initial='initial'
                                animate='animate'
                                exit='exit'
                                transition={{
                                    x: { duration: 0.4, type: 'keyframes', ease: 'easeInOut' },
                                    opacity: { duration: 0.2, type: 'keyframes' }
                                }}
                            >
                                <Image src={images[imageIndex]} alt={alt} width={600} height={600} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </m.div>
                        </AnimatePresence>
                        <div className={`${styles.btn} ${styles.btnLeft}`} onClick={(): void => paginate(-1)} >
                            <KeyboardArrowLeftIcon/>
                        </div>
                        <div className={`${styles.btn} ${styles.btnRight}`} onClick={(): void => paginate(1)} >
                            <KeyboardArrowRightIcon/>
                        </div>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <Typography className={styles.title} variant='h2' >{title}</Typography>
                    {/* <Typography variant='body2' > De especialidad</Typography> */}
                    <div className={styles.paragraph}>
                        {
                            text.split("/").map((p, i) => {
                                return <Typography key={i} variant='body1'>{p}</Typography>
                            })
                        }
                    </div>
                </div>
            </div>
            <div style={{display: 'none'}}>
                {
                    images.map((img, i) => {
                        return <Image key={i} src={img} alt={alt} width={600} height={600} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    })
                }
            </div>
        </LazyMotion>

    )
}

export default Block
