import { useAuth0 } from "@auth0/auth0-react"
import style from './userProfile.module.css';

type Props = {
    userName: string | undefined
}

const UserProfile = ({ userName }: Props) => {

    const { logout } = useAuth0();

    return (
        <>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className={`nav-link dropdown-toggle ${style.logout}`} href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hi {userName}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item cursor-pointer" onClick={() => logout()}>Log Out</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default UserProfile;
