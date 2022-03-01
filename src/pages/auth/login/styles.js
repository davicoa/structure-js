import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#F0F0F0',
    },
    containerSecundary: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'content-box'
    },
    main: {
        marginTop: '6rem',
        marginBottom: '5rem',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        paddingLeft: 0,
        paddingRight: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        maxWidth: '500px',
        boxSizing: 'border-box'
    }
});

export default useStyles;
