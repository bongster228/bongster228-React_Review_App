import React, { Component } from 'react'

class GoogleAuth extends Component {

    state = { isSignedIn: null };

    componentDidMount() {

        //  initialize the gapi library
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "387593332585-qeonkkn9o5nh3529ojl393o0ljj3hej7.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                //  get the GoogleAuth object
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })

                //  adding an event listener so that login status change shows.
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui blue goole button">
                    <i className="google icon" />
                    Sign In
                </button>
            )
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;