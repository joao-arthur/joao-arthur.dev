import type { JSX } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Button } from "../components/Button";

export function Footer(): JSX.Element {
    return (
        <div className="w-full bg-rose-800 h-32 flex items-end">
            <div className="w-full h-24 bg-rose-700 flex justify-center items-center gap-x-5">
                <Button>
                    <a
                        href="http://github.com/joao-arthur"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithubAlt size={30} className="w-16 h-16 p-4" color="#fecdd3" />
                    </a>
                </Button>
                <Button>
                    <a
                        href="https://www.linkedin.com/in/joao-lothamer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn size={30} className="w-16 h-16 p-4" color="#fecdd3" />
                    </a>
                </Button>
                <Button>
                    <a
                        href="mailto://joao.lothamer@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdEmail size={30} className="w-16 h-16 p-4" color="#fecdd3" />
                    </a>
                </Button>
            </div>
        </div>
    );
}
