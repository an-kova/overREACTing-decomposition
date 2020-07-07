import React from 'react'
import PropTypes from 'prop-types'

function AdBanner(props) {
  return (
    <div
      className="bg-info border border-secondary 
       my-3 d-flex row
       justify-content-center align-items-center"
      style={{ width: '74%', height: '6rem' }}>
      <a href="#" className="text-white">
        Banner
      </a>
    </div>
  )
}

AdBanner.propTypes = {}

export default AdBanner
