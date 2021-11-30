import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {viewProfileAction} from '../redux/actions/authActions';

const ViewProfile = ({
  viewProfileAction,
  viewprofileState,

}) => {

  const [fechedData, setFechedData] = useState({});
 
  useEffect(() => {
   //console.log('=======FETCHING USER PROFILE=====:: ON SUCCESS', viewprofileState.viewProfileSuccess);
   viewProfileAction();
   //console.log('=======FETCHING USER PROFILE=====:: ON ERROR', viewprofileState. viewProfileError);
   if(viewprofileState.viewProfileSuccess.status === 200){
     setFechedData(viewprofileState.viewProfileSuccess.data);
   }
   console.log('_________fechedData______:', fechedData);
  },[
   fechedData,
   viewprofileState.viewProfileSuccess.data?.userName
  ]);

  return(<>
     <h1> User's Profile Screen</h1>
     {fechedData&&Object.keys(fechedData).length!== 0?
      <div>
        <img 
          style={{
            borderRadius: '50%',
            height: '200px',
            width:'200px'
          }}
         src={fechedData.userImage}
        />
        <p>
         <b> UserName </b>: {fechedData.userName}
          </p> 
        <p> 
          <b> Phone: </b> {fechedData.phone}</p> 
      </div>
     :
     <h3>Loading...</h3>
    }
    </>)

}

const mapStateToProps = (state) => {
  return { viewprofileState: state.auth.viewProfile };
};

const mapDispatchToProps = { viewProfileAction };


export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
