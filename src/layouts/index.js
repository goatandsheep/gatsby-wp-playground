import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const containerStyle = {
    maxWidth: 700,
    margin: `0 auto`,
    padding: rhythm(3 / 4),
}

class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <div css={containerStyle}>{this.props.children}</div>
            </div>
        )
    }
}

DefaultLayout.propTypes = {
    children: PropTypes.object.isRequired,
}

export default DefaultLayout
