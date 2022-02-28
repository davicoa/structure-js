import React from 'react'
import Typography from '@mui/material/Typography'
import colors from 'constants/colors'
import ScreenContainer from 'components/elements/screenContainer'

const Home = () => {
    return (
        <ScreenContainer>
            <div style={{ height: '100vh' }}>
            <Typography styles={{ color: colors.primary }}>
                HOME
            </Typography>
            </div>
        </ScreenContainer>
    )
}

export default Home
