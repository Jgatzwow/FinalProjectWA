import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profileReducer";
import {useMatch} from "react-router";



class ProfileContainer extends React.Component {


    refreshProfile() {
        let userId = this.props.match;
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate = (prevProps, prevState) => {
        this.refreshProfile()
    }


    render() {

        /* if (!this.props.isAuth ) return <Navigate to={"/Login"} />;*/
        return <Profile  {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         users={this.props.users}
                         savePhoto={this.props.savePhoto}
        />

    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    users: state.usersPage.users,
})

let UrlDataContainerComponent = (props) => {
    let match = useMatch('/Profile/:userId').params.userId

    return (
        <ProfileContainer {...props} match={match}/>
    )
}


export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto})(UrlDataContainerComponent)




