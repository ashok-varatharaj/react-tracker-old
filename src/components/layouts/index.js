import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
//  import useStyles from '../Styles';

const Index = ({children}) => {
    //  const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xs" /* className={classes.root} */>
                {children}
            </Container>
        </React.Fragment>
    )
}

export default Index
