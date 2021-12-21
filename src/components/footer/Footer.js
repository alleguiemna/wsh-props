import React from 'react'

const Footer = ({children}) => {

          return (
                    <div>
                              {children}
                              <h2>{total}</h2>
                    </div>
          )
}
// Footer.defaultProps = {
//           total:"1000$"
// }
export default Footer
