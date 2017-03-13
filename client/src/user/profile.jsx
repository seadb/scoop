import React from 'react'
import Trip from '../trips/trip'

const Profile = (props) => {
  const addFriend = (
    <div>
      <button
        onClick={props.addFriend} 
        className="button button--light top-right mobile"
      >
        <i className="fa fa-plus no-margin-right" aria-hidden="true"></i>
        <i className="fa fa-user no-margin-left" aria-hidden="true"></i>
      </button>
      <button
        onClick={props.addFriend}
        className="button button--light top-right non-mobile"
      >
          <i className="fa fa-plus" aria-hidden="true"></i>
          Add Friend
      </button>
    </div>
  )
  const unfriend = (
    <div>
      <button
        onClick={props.deleteFriend} 
        className="button button--light top-right mobile"
      >
        <i className="fa fa-minus no-margin-right" aria-hidden="true"></i>
        <i className="fa fa-user no-margin-left" aria-hidden="true"></i>
      </button>
      <button
        onClick={props.deleteFriend}
        className="button button--light top-right non-mobile"
      >
        <i className="fa fa-times" aria-hidden="true"></i>
        Unfriend
      </button>
    </div>
  )
  const edit = (
    <button onClick={props.deleteFriend} className="button button--light top-right">
      <i className="fa fa-pencil" aria-hidden="true"></i>
      Edit
    </button>
  )
  let button;
  if(props.auth.user.id === props.user.data.id) { //this is 'my' profile
    button = edit 
  }
  else if (props.auth.user && props.friends && props.friends.auth.data) {
    const ids = props.friends.auth.data.map( (friend) => {
      return friend.id
    })
    button = ids.includes(props.user.data.id) ? unfriend : addFriend
  }
  else {
    button = addFriend
  }
  
  return (
  <div className="profile">
    <div className="profile__banner">
      <img src="img/icon.jpg" className="profile__icon"/>
      {button}
    </div>
    <div className="profile__content">
      <div className="profile__name">
        {props.user.data.firstName} {props.user.data.lastName}
      </div>
      <p className="profile__username base00">
        @seashore
      </p>
      <p className="profile__bio">
        {props.user.data.bio}
        I enjoy making new friends by providing rides
        around town.  I typically visit the grocery store
        every Saturday and work 9-5 Monday through
        Friday, with some exceptions.  Feel free to add
        yourself as a rider to any of my planned trips!
      </p>
      <div className="trips">
        <h4 className="trips__title">
          Planned Trips
        </h4>
        <Trip
          date="Sat April 1, 2017"
          time="11:00 AM"
          origin="321 Elm Street, Busytown, 12345"
          destination="Johnson’s Grocery Market, East Busytown 12346"
        />
      </div>
    </div>
  </div>
  )
}

export default Profile
