import type { JSX } from "react";
import { Metadata } from "next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Card } from "../components/Card";
import { cl } from "../lib/cl";

export const metadata: Metadata = {
    title: "About | João Arthur",
};

export default function About(): JSX.Element {
    return (
        <>
            <div className="flex flex-wrap gap-2">
                <Card>
                    <div className="w-52 h-52">
                        <h2 className="text-xl text-teal-900">Languages</h2>
                        <div className="flex flex-row gap-x-2 py-1">
                            <h2 className="text-teal-900">TypeScript</h2>
                            <h2 className="text-teal-900">Advanced</h2>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <h2 className="text-teal-900">Java</h2>
                            <h2 className="text-teal-900">Intermediate</h2>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <h2 className="text-teal-900">Rust</h2>
                            <h2 className="text-teal-900">Basics</h2>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <h2 className="text-teal-900">C</h2>
                            <h2 className="text-teal-900">Basics</h2>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="w-52 h-52">
                        <h2 className="text-xl text-teal-900">Frontend</h2>
                        <div className="flex flex-row gap-x-2 py-1">
                            <h2 className="text-teal-900">React</h2>
                            <h2 className="text-teal-900">Advanced</h2>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <h2 className="text-teal-900">Next</h2>
                            <h2 className="text-teal-900">Basics</h2>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="w-52 h-52">
                        <h2 className="text-xl text-teal-900">Backend</h2>
                        <div className="flex flex-row gap-x-2 py-1">
                            <h2 className="text-teal-900">NestJS</h2>
                            <h2 className="text-teal-900">Intermediate</h2>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <h2 className="text-teal-900">Spring</h2>
                            <h2 className="text-teal-900">Intermediate</h2>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="w-52 h-52">
                        <h2 className="text-xl text-teal-900">Mobile</h2>
                        <div className="flex flex-row gap-x-2 py-1">
                            <h2 className="text-teal-900">React Native</h2>
                            <h2 className="text-teal-900">Advanced</h2>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <h2 className="text-teal-900">Flutter</h2>
                            <h2 className="text-teal-900">Basics</h2>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <h2 className="text-teal-900">Kotlin</h2>
                            <h2 className="text-teal-900">Basics</h2>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="w-52 h-52">
                        <h2 className="text-xl text-teal-900">Interests</h2>
                        <h2 className="px-3 py-1 mx-1 inline-block text-teal-900">Unit Testing</h2>
                        <h2 className="px-3 py-1 mx-1 inline-block text-teal-900">Clean Code</h2>
                        <h2 className="px-3 py-1 mx-1 inline-block text-teal-900">
                            Clean Architecture
                        </h2>
                        <h2 className="px-3 py-1 mx-1 inline-block text-teal-900">
                            Design Patterns
                        </h2>
                        <h2 className="px-3 py-1 mx-1 inline-block text-teal-900">
                            Data Structures
                        </h2>
                        <h2 className="px-3 py-1 mx-1 inline-block text-teal-900">Linux</h2>
                        <h2 className="px-3 py-1 mx-1 inline-block text-teal-900">FOSS</h2>
                    </div>
                </Card>
            </div>
            <footer className="flex justify-center pt-2 pb-2 items-center">
                <h2 className="text-xl text-teal-900">Contact me</h2>
                {
                    /*<a
                    className="mx-3"
                    href="http://github.com/joao-arthur"
                    target="_blank"
                    rel="noopener noreferrer"
    >*/
                }
                <div className="flex items-center justify-center bg-teal-800 w-20 h-20 rounded-2xl shadow-md">
                    <div className="bg-teal-700 w-14 h-14 rounded-full flex items-center justify-center">
                        <AiFillGithub color="white" size={30} />
                    </div>
                </div>
                {/*</a>*/}
                <div>
                    <a
                        className="mx-3"
                        href="https://www.linkedin.com/in/joao-lothamer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillLinkedin size={30} color="white"/>
                    </a>
                </div>
                <div
                    className={cl(
                        "w-20 h-20",
                         "flex items-center justify-center",
                          "rounded-3xl")}
                    style={{
                        boxShadow: "0px 2px 10px 0px #070606",
                        background: "linear-gradient(135deg, #0f766e, #134e4a)",
                    }}
                >
                    <div
                        className={cl(
                            "w-14 h-14",
                            "flex items-center justify-center",
                            "rounded-full",
                        )}
                        style={{
                            background: "linear-gradient(315deg, #0f766e, #134e4a)",
                        }}
                    >
                        <AiFillLinkedin size={30} color="white"/>
                    </div>
                </div>
            </footer>
        </>
    );
}
