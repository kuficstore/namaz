import React from "react"
import { Link } from "gatsby"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginBottom: `40px`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="logo">
          <Link to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className="container">
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © Товары для молитвы
          {` `}
          <a href="http://kufic.store">Kufic.Store</a>
        </footer>
      </div>
    )
  }
}

export default Layout
