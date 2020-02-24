//	PACKAGES
import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

//	STYLES
import useStyles from '../components/Styles';

//	COMPONENTS
import Layout from '../components/layouts';

//	ACTION
import {login,logout} from '../actions/authActions';

const Calendar = (props) => {

	let {loggedIn,userData,currentTheme} = props;

	const classes = useStyles();

	useEffect(() =>{
		//	props.login();
	},[]);

	const switchThemeFunc = () => {
		//  props.switchTheme();
	}

	return (
		<React.Fragment>
			<Layout>
				<Box className={classes.newBox}>
                    <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
				</Box>
			</Layout>
	  	</React.Fragment>
	)
}

const mapStateToProps = (state) => ({
	loggedIn:state.authReducer.loggedIn,
	userData:state.authReducer.userData,
	currentTheme:state.themeModeReducer.theme
});

export default connect(mapStateToProps,{login,logout})(Calendar);