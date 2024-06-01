import type { JSX } from "react";
import { Metadata } from "next";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { SubTitle } from "../components/SubTitle";

export const metadata: Metadata = {
    title: "About | João Arthur",
};

export default function About(): JSX.Element {
    return (
        <>
            <div className="flex flex-wrap gap-5 pt-5 justify-center">
                <Card>
                    <div className="w-52 h-52">
                        <Title label="Languages" />
                        <div className="flex flex-row gap-x-2 py-1">
                            <SubTitle label="TypeScript" />
                            <SubTitle label="Advanced" />
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <SubTitle label="Java" />
                            <SubTitle label="Intermediate" />
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <SubTitle label="Rust" />
                            <SubTitle label="Basics" />
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <SubTitle label="C" />
                            <SubTitle label="Basics" />
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="w-52 h-52">
                        <Title label="Frontend" />
                        <div className="flex flex-row gap-x-2 py-1">
                            <SubTitle label="React" />
                            <SubTitle label="Advanced" />
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <SubTitle label="Next" />
                            <SubTitle label="Basics" />
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="w-52 h-52">
                        <Title label="Backend" />
                        <div className="flex flex-row gap-x-2 py-1">
                            <SubTitle label="NestJS" />
                            <SubTitle label="Intermediate" />
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <SubTitle label="Spring" />
                            <SubTitle label="Intermediate" />
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="w-52 h-52">
                        <Title label="Mobile" />
                        <div className="flex flex-row gap-x-2 py-1">
                            <SubTitle label="React" />
                            <SubTitle label="Advanced" />
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <SubTitle label="Flutter" />
                            <SubTitle label="Basics" />
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <SubTitle label="Kotlin" />
                            <SubTitle label="Basics" />
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="w-52 h-52">
                        <Title label="Interests" />
                        <SubTitle label="Unit Testing" />
                        <SubTitle label="Clean Code" />
                        <SubTitle label="Clean Architecture" />
                        <SubTitle label="Design Patterns" />
                        <SubTitle label="Data Structures" />
                        <SubTitle label="Linux" />
                        <SubTitle label="FOSS" />
                    </div>
                </Card>
            </div>
            <footer className="flex justify-center pt-2 pb-2 items-center">
                <Title label="Contact" />
                <div className="mx-3">
                    <a
                        href="http://github.com/joao-arthur"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>
                            <FaGithubAlt color="white" size={30} />
                        </Button>
                    </a>
                </div>
                <div className="mx-3">
                    <a
                        href="https://www.linkedin.com/in/joao-lothamer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>
                            <FaLinkedinIn size={30} color="white" />
                        </Button>
                    </a>
                </div>
            </footer>
        </>
    );
}
