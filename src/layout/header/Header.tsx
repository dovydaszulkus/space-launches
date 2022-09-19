import { Link, NavLink } from 'react-router-dom'
import { navigationRoutes } from '@/config/navigationRoutes'
import { HeaderStyled } from './styles'

export default function Header() {
  return (
    <HeaderStyled>
      <Link to="/">SpaceLaunches</Link>
      <nav>
        <ul>
          {navigationRoutes.map((route) => {
            const { to, text, end } = route
            return (
              <li key={text}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? 'link-active' : 'link'
                  }
                  end={end || undefined}
                >
                  {text}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </HeaderStyled>
  )
}
