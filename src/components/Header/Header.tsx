import React from "react"
import "./Header.css"
import Link from "next/link";

const Header = () => {
    
    return (
        <>
            <header className="header">
                <div className="g-container">
                    <nav className="header__nav">
                        <Link href="/">
                            <div className="logo">
                                <span className="logo__text">Logo</span>
                            </div>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
}

export { Header };