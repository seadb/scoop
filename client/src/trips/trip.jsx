import React from 'react'

const Trip = (props) => (
  <div className="trip">
    <div className="trip__date">
      <i className="fa fa-calendar base02" aria-hidden="true"></i>
      {props.date}
    </div>
    <div>
     <i className="fa fa-clock-o grey-four" aria-hidden="true"></i>
      {props.time}
    </div>
    <div className="trip__location">
      <i className="fa fa-map-marker red" aria-hidden="true"></i>
      {props.origin}
    </div>
    <div className="trip__location">
      <i className="fa fa-map-marker green" aria-hidden="true"></i>
      {props.destination}
    </div>
  </div>
)

export default Trip
