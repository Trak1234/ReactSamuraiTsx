import React from 'react';
import profInfo from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={profInfo.Profmain}>
            <div>
                <img className={profInfo.img1} src="https://travelinlife.ru/uploads/666/f55a5caf829219ce190db57b7c7dc763.jpg"/>
            </div>
            <div className={profInfo.ava}>ava+desr</div>
        </div>
    );
};

export default ProfileInfo;