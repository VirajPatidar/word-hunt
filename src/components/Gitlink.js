import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Gitlink = ({ theme }) => {
    const classes = useStyles();
    return (
        <>
            <ThemeProvider theme={theme}>
                <Link href="https://github.com/VirajPatidar" target="_blank" rel="noreferrer">
                    <Button
                        variant="outlined"
                        display="inline"
                        className={classes.button}
                        startIcon={<GitHubIcon />}
                    >
                        Viraj Patidar
                    </Button>
                </Link>
            </ThemeProvider>
        </>
    );
}

export default Gitlink;