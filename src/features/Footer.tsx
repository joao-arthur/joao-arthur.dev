import type { JSX } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Layout } from "../components/Layout";
import { cl } from "../lib/cl";

export function Footer(): JSX.Element {
    return (
        <div className="w-full flex flex-col">
            <div className="w-full h-3 bg-prm-40 dark:bg-prm-15" />
            <div
                className={cl(
                    "w-full h-24",
                    "flex justify-center items-center gap-x-5",
                    "bg-prm-50 dark:bg-prm-20",
                )}
            >
                <Layout.Button>
                    <a
                        href="http://github.com/joao-arthur"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithubAlt size={30} className="w-16 h-16 p-4" color="#fecdd3" />
                    </a>
                </Layout.Button>
                <Layout.Button>
                    <a
                        href="https://www.linkedin.com/in/joao-lothamer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn size={30} className="w-16 h-16 p-4" color="#fecdd3" />
                    </a>
                </Layout.Button>
                <Layout.Button>
                    <a
                        href="mailto://joao.lothamer@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdEmail size={30} className="w-16 h-16 p-4" color="#fecdd3" />
                    </a>
                </Layout.Button>
            </div>
        </div>
    );
}
