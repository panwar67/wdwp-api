import React from 'react';
import HorizontalForm from './HorizontalForm'
import firebase from '../../firebase';

const Login = () => (
    <div>
        <div className="row">
            <div className="col-md-6" style={{justifyContent:'center',alignItems:'center'}}>
                <HorizontalForm onSubmit={submitForm}
                    /* onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} *//>
            </div>
        </div>

    </div>
);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

    } else {
        // No user is signed in.

    }
});


const submitForm = values => {
    firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then((user) => {
           alert('done')
        })
        .catch((error) => {
            alert(error);
        });
}

export default Login;