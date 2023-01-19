import { useEffect, useState } from 'react';
import styles from 'styles/Block.module.scss'
import Typography from '@mui/material/Typography';
import { LazyMotion, m, domAnimation, AnimatePresence, Variants } from 'framer-motion';
import { wrap } from 'popmotion'

export interface BlockProps {
    title?: string,
    subtitle?: string,
    text?: string,
    images?: string[]
    alt?: string
}

const Block = ({ title, subtitle, text, images, alt }: BlockProps) => {
    const [pagination, setPagination] = useState(0)
    const imageIndex = wrap(0, images.length, pagination)
    
    const variants: Variants = {
        initial: {
            opacity: 0.6,
            x: -500
        },
        animate: {
            zIndex: 1,
            opacity: 1,
            x: 0
        },
        exit: {
            zIndex: 0,
            opacity: 0.3,
            x: 500
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPagination(pagination => pagination + 1)
        }, 5000)
      return () => {
          clearInterval(intervalId)
      }
    }, [])
    

    return (
        <LazyMotion features={domAnimation}>
            <div className={styles.root} >
                <div className={styles.imgContainer}>
                    <div className={styles.img}>
                        <AnimatePresence initial={false}>
                            <m.img 
                                key={pagination}
                                src={images[imageIndex]}
                                alt={alt}
                                variants={variants}
                                initial='initial'
                                animate='animate'
                                exit='exit'
                                transition={{
                                    x: { duration: 0.4, type: 'keyframes', ease: 'easeInOut' },
                                    opacity: { duration: 0.2, type: 'keyframes' }
                                }}
                                onClick={(): void => setPagination(pagination + 1)}
                            />
                        </AnimatePresence>
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
        </LazyMotion>

    )
}

export default Block
