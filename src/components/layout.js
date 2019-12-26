import React from "react"
import { Link } from "gatsby"
import './layout.css';


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="logo">
          <Link className="logo__link" to={`/`}>
            نماز
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="logo">
          <Link to={`/`}>
            نماز
          </Link>
        </h3>
      )
    }
    return (
      <div className="layout">
        <div className="layout__container">
          <header className="layout__header">{header}</header>
          <main className="layout__main">{children}</main>
          <footer className="layout__footer">
            © Товары для молитвы
            {` `}
            <a href="http://kufic.store">Kufic.Store</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
