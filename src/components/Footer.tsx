import type { ReactElement } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Footer(): ReactElement {
    return (
        <footer className="flex justify-center pb-2 items-center">
            <a
                className="mx-3"
                href="http://github.com/joao-arthur"
                target="_blank"
                rel="noopener noreferrer"
            >
                <AiFillGithub size={30} />
            </a>
            <a
                className="mx-3"
                href="https://www.linkedin.com/in/joao-lothamer"
                target="_blank"
                rel="noopener noreferrer"
            >
                <AiFillLinkedin size={30} />
            </a>
            <span className="mx-3 select-none">João Arthur</span>
        </footer>
    );
}
