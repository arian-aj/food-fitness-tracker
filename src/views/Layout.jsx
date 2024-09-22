import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
export default function Layout() {

    return(
        <>
            <header>
                <h1>Fitness & Food</h1>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Project made by Arian-AJ  &copy; {new Date().getFullYear()}</p>
            </footer>
        </>
    )
}