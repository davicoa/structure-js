import * as React from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const BasicButton = ({ onClick, tittle, disabled = false, style }) => {
    return (
        <Stack spacing={2}>
            <Button
                onClick={onClick}
                variant="contained"
                disabled={disabled}
                style={style}
            >
                {tittle}
            </Button>
        </Stack>
    );
}

BasicButton.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    tittle: PropTypes.string,
    customStyle: PropTypes.object,
}

export default BasicButton
