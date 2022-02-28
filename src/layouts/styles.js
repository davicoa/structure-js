import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        flexDirection: ' column',
        boxSizing: 'content-box'
    },
    main: {
        flexGrow: 1,
        p: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'gray',
        boxSizing: 'border-box'
    }
});

export default useStyles;
