import Link from 'next/link'

const navLink = { width: 80, backgroundColor: 'rgba(244,68,68,.9)', borderRadius: 2, padding: '6px 8px', color: '#f7f7f7', fontSize: '1.2rem', fontWeight: 600,  }

const links = [
  { href: '/', label: 'Home', style: navLink },
  { href: '/About', label: 'About', style: navLink }
].map(link => {
  link.key = `label`
  return link
})

const Nav = () => (
  <nav>
    
      <ul>
        {links.map(
          ({ href, label, style }) => (
            <li key={label}>
              <Link href={href}>
                <a style={style}>{label}</a>
              </Link>
            </li>
          )
        )}
      </ul>

    <style jsx>{`
      ul {
        display: flex;
        justify-content: left;
        align-items: center;
      }
      nav > ul {
        padding: 10px 0 0;
      }
      li {
        display: flex;
        margin-right: 10px;
      }
      a {
        color: #96999b;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 12px;
        text-align: center;
      }
    `}</style>
  </nav>
)

export default Nav
