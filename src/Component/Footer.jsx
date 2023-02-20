import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
    return (
        <> <footer className="footer">
        <div>
          <span>About</span>
          <span>Accessibility</span>
          <span>Help Center</span>
        </div>
        <div>
          <span>
            Privacy & Terms{" "}
            {<FontAwesomeIcon className="downArrow" icon={faAngleDown} />}
          </span>
          <span>Ad Choices</span>
        </div>
        <div>
          <span>Advertising </span>
          <span>
            Business Services{" "}
            {<FontAwesomeIcon className="downArrow" icon={faAngleDown} />}
          </span>
        </div>
        <div>
          <span>Get the LinkedIn app</span>
          <span>More</span>
        </div>
        <div className="corporation">
          <span className="linked">
            Linked <span className="in">in</span>
          </span>
          <span>Prakhar Gupta © 2023</span>
        </div>
      </footer></>
    )
}

export default Footer
