//	PACKAGES
import React,{useEffect} from 'react';
import {connect} from 'react-redux';

const Theme = (props) => {
    let {currentTheme} = props;	
    
	return {currentTheme};
}

const mapStateToProps = (state) => ({
	currentTheme:state.themeModeReducer.theme
});

export default connect(mapStateToProps,{})(Theme);