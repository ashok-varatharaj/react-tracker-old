//  PACKAGES
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
//  COLORS
import { orange } from '@material-ui/core/colors';

const imp = '!important';
const successBtnColor = `#43A047 ${imp}`;
const subscribeBtnColor = `#289de0 ${imp}`;
const whiteColor = `#FAFAFA ${imp}`;
const dangerColor = `red ${imp}`;
const blackColor = `#000000 ${imp}`;
const greyColor  = `#424242 ${imp}`;

const commonText = {
    fontSize:`16px ${imp}`,
    fontWeight:`100 ${imp}`,
    color:greyColor
};

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow:1,
        backgroundColor: theme.palette.background.default,
        maxHeight:`500px ${imp}`,
        '&$selected': {
            color: blackColor,
        },
    },
    newBox:{
        minHeight:`66px ${imp}`,
        maxHeight:`100% ${imp}`,
    }
}));

export default useStyles;