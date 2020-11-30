import PropTypes from 'prop-types';
import React, { PureComponent } from 'react'
import {
    StyleSheet,
} from 'react-native';

import {
    demoAction
} from '../Action/TEMPNAMEAction'
import { connect } from 'react-redux';

class TEMPNAME extends PureComponent {
    static contextTypes = {
        router: PropTypes.object,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <View style={styles.container} >
            </View>
        )
    }

}

export default connect((state) => {
    let TEMPNAMEReducer = state.TEMPNAMEReducer
    return ({
        loading: TEMPNAMEReducer.loading,
        error: TEMPNAMEReducer.error,
        errorCode: TEMPNAMEReducer.errorCode,
        errorMsg: TEMPNAMEReducer.errorMsg,
    });
},
    {
        //TODO 引入Action 方法 
        demoAction: demoAction,
    },
    null,
    { withRef: true }
)(TEMPNAME);

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16,
        color: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },

})