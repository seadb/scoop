import React from 'react'
import Trip from '../trips/trip'

const Profile = (props) => {
  console.log(props.user)
  return (
  <div className="profile">
    <div className="profile__banner">
      <img src="img/icon.jpg" className="profile__icon"/>
      <button className="button profile__add-friend">
        <i className="fa fa-plus" aria-hidden="true"></i>
        Add Friend
    </button>
    </div>
    <div className="profile__content">
      <div className="profile__name">
        {props.user.firstName} {props.user.lastName}
      </div>
      <p className="profile__username base00">
        @seashore
      </p>
      <p className="profile__bio">
        {props.user.bio}
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
