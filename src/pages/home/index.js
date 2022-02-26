import React from 'react'
import Typography from '@mui/material/Typography'
import colors from 'constants/colors'

const Home = () => {
    return (<div style={{ backgroundColor: 'blue', display: 'flex', minHeight: '100%' }}>
        <Typography styles={{ color: colors.primary }}>
            HOME
        </Typography>
    </div>
    )
}

export default Home
