import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex space-x-4">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-yellow-500' : 'text-white'
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/weekplan"
                        className={({ isActive }) =>
                            isActive ? 'text-yellow-500' : 'text-white'
                        }
                    >
                        Week Plan
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/search"
                        className={({ isActive }) =>
                            isActive ? 'text-yellow-500' : 'text-white'
                        }
                    >
                        Search Food
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/nutrients"
                        className={({ isActive }) =>
                            isActive ? 'text-yellow-500' : 'text-white'
                        }
                    >
                        Nutrients
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
