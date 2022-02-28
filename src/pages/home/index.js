import React from 'react'
import Typography from '@mui/material/Typography'
import colors from 'constants/colors'
import ScreenContainer from 'components/elements/screenContainer'
import Grid from '@mui/material/Grid'
const Home = () => {
    return (
        <ScreenContainer>
            <Grid style={{ height: '100vh', width: '100%', backgroundColor: '#DFFF' }}>
                <Typography styles={{ color: colors.primary }}>
                    HOME
                </Typography>
            </Grid>
        </ScreenContainer>
    )
}

export default Home
