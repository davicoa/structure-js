import React from 'react'
import Typography from '@mui/material/Typography'
import colors from 'constants/colors'
import ScreenContainer from 'components/elements/screenContainer'

const Home = () => {
    return (
        <ScreenContainer>
            <Typography styles={{ color: colors.primary }}>
                HOME
            </Typography>
        </ScreenContainer>
    )
}

export default Home
