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
        <h3
          style={{
            fontFamily: `Prata, serif`,
            marginTop: 0,
            color: `red`
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          marginTop: `72px`,
          marginbottom: `72px`,
          maxWidth: '960px'
        }}
      >
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
