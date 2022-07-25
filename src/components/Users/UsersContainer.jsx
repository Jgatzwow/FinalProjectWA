import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            <div>
                {this.props.isFetching ? <Preloader/> : null}
            </div>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   portionSize={this.props.portionSize}

            />
        </>
    }
}

let
    mapStateToProps = (state) => {
        return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followingInProgress: state.usersPage.followingInProgress,
            portionSize: state.usersPage.portionSize
        }
    }



export default connect(mapStateToProps,
    {follow, unfollow,setCurrentPage, toggleFollowingProgress,getUsers})(UsersContainer);
