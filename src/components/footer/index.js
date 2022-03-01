import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import colors from 'constants/colors'

const Footer = ({ children }) => {
    return (
        <Grid style={{
            position: 'relative',
            bottom: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundColor: colors.secondary,
            flexDirection: 'column',
            height: '55px'
        }}>
            <Typography style={{ fontSize: '14px', fontweight: 400, lineHeight: '16px', color: colors.white }}>
                Copyright © 2022
            </Typography>
            <Typography style={{ fontSize: '18px', fontweight: 700, lineHeight: '21px', color: colors.white }}
                variant="h6">
                Ayupí Hormigones
            </Typography>
        </Grid>
    )
}

Footer.propTypes = {
    children: PropTypes.element,
};

export default Footer
