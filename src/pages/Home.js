import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from '../store/actions';
import { DEFAULT_LANG } from '../utils/app.constants';

const Home = (props) => {
    const dispatch =  useDispatch();

    useEffect( () => { 
        /* load initial state */
        dispatch(Actions.changeLanguage(DEFAULT_LANG));  
    }, [dispatch]);

    return(
        <main >{ props.children }</main>
    );
}

export default Home;