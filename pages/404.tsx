import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Typography, useTheme, css } from '@mui/material';
import Link from 'next/link';
import Button from 'components/Button.component';
import { Box } from '@mui/system';

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home", 'block']))
        }
    }
}

export default function Error404() {
    const { t } = useTranslation()
    const theme = useTheme()

    return (
        <div css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: calc(100vh - 130px);
        `}>
            <Head>
                <title>Chica</title>
                {/* PWA primary color */}
                <meta name="theme-color" content={theme.palette.primary.main} />
                <meta name="title" content="Chica Kitchen, café de especialidad, cocina vegana y vegetariana, cócteles de autor." />
                <meta name="description" content="Cantina moderna que ofrece comida, cafetería y coctelería vegetariana, vegana y sin TACC. Rosario, Santa Fe, Argentina." />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <Box display={'flex'} gap={'10px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant='h2' textAlign={'center'} letterSpacing={'3px'}>404</Typography>
                <Typography variant='h5' textAlign={'center'}>Oops! No encontramos la página que estas buscando.</Typography>
                <Link href='/' css={css`
                    margin: 10px auto;
                `} >
                    <Button>Volver</Button>
                </Link>
            </Box>
        </div>

    )
}

