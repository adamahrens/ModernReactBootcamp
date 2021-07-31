import Link from 'next/link'

const Navbar = () => {

    const styles = {
        display: "flex",
        background: "grey",
        alignItems: "space-between"
    }
    return (
        <div styles={styles}>
            <navbar>
                <Link href="/">
                    <a>Home</a>
                </Link>

                <span> | </span>

                <Link href="/about">
                    <a>About</a>
                </Link>
            </navbar>
        </div>
    )
}

export default Navbar