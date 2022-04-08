import React from 'react';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './author-uploadcamerapage.styles.css'

const AuthorUploadCameraPage = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='cameracopy-container'>
                <p><b>Congratulations!</b> Your paper was reviewed and accepted by the chair!</p>
                <br></br>
                <p>Please upload the camera-ready copy below:</p>
                <div className='upload-image-button'>
                    <button className='bigger'>Upload copy</button>
                </div>
                <br></br><br></br><br></br> <br></br> <br></br><br></br>
                <p>You will present this paper in <b>*SessionName*</b> from <b>*hour*</b>.</p>
            </div>
        </>
    )
}

export default AuthorUploadCameraPage;