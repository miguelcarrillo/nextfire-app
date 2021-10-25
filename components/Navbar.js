import Link from 'next/link';

export default function Navbar () {
    const user = null;
    const username = null;

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/" passHref>
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>

                {/* user is signed-in and has username */}
                {username && (
                    <>
                        <li className="push-left">
                            <Link href="/admin" passHref>
                                <button className="btn-blue">Write posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`} passHref>
                                <img src={user?.photoURL} />
                            </Link>
                        </li>
                    </>
                )}
                {/* user is not signed-in OR has not created a username */}
                {!username && (
                    <li>
                        <Link href="/enter" passHref>
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}