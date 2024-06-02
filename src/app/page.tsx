import type { JSX } from "react";
import { Metadata } from "next";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { SubTitle } from "../components/SubTitle";
import { Footer } from "../features/Footer";
import { Progress } from "../components/Progress";
import { LayoutContainer } from "../components/LayoutContainer";
import { Text } from "../components/Text";

export const metadata: Metadata = {
    title: "About | João Arthur",
};

export default function About(): JSX.Element {
    return (
        <LayoutContainer>
            <div className="flex flex-col w-full max-w-200 p-5">
                <div className="grow-1 shrink-1 max-w-200 min-w-0">
                    <Card>
                        <div className="flex flex-col gap-y-5 h-96 w-full">
                            <Title label="Languages" />
                            <Text label="I know Object Orientation, Structured Programming and a little bit of Functional Programming" />
                            <div>
                                <SubTitle label="TypeScript" />
                                <Progress percentual={100} />
                            </div>
                            <div>
                                <SubTitle label="Java" />
                                <Progress percentual={50} />
                            </div>
                            <div>
                                <SubTitle label="Rust" />
                                <Progress percentual={25} />
                            </div>
                            <div>
                                <SubTitle label="C" />
                                <Progress percentual={25} />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col w-full max-w-200 p-5">
                <div className="grow-1 shrink-1 max-w-200 min-w-0">
                    <Card>
                        <div className="flex flex-col gap-y-5 h-96 w-full">
                            <Title label="Frontend" />
                            <Text label="I create websites that run on every device, using JSX, flat and material design, data integration with https requests and websockets" />
                            <div>
                                <SubTitle label="React" />
                                <Progress percentual={100} />
                            </div>
                            <div>
                                <SubTitle label="Next" />
                                <Progress percentual={50} />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col w-full max-w-200 p-5">
                <div className="grow-1 shrink-1 max-w-200 min-w-0">
                    <Card>
                        <div className="flex flex-col gap-y-5 h-96 w-full">
                            <Title label="Backend" />
                            <Text label="I create services with database integration and queue systems" />
                            <div>
                                <SubTitle label="NestJS" />
                                <Progress percentual={50} />
                            </div>
                            <div>
                                <SubTitle label="Spring" />
                                <Progress percentual={50} />
                            </div>
                            <div>
                                <SubTitle label="Microservices" />
                                <Progress percentual={25} />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col w-full max-w-200 p-5">
                <div className="grow-1 shrink-1 max-w-200 min-w-0">
                    <Card>
                        <div className="flex flex-col gap-y-5 h-96 w-full">
                            <Title label="Mobile" />
                            <Text label="I create native apps can can run on every device and android native apps" />
                            <div>
                                <SubTitle label="React native" />
                                <Progress percentual={100} />
                            </div>
                            <div>
                                <SubTitle label="Expo" />
                                <Progress percentual={50} />
                            </div>
                            <div>
                                <SubTitle label="Flutter" />
                                <Progress percentual={25} />
                            </div>
                            <div>
                                <SubTitle label="Kotlin" />
                                <Progress percentual={25} />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col w-full max-w-200 p-5">
                <div className="grow-1 shrink-1 max-w-200 min-w-0">
                    <Card>
                        <div className="flex flex-col gap-y-5 h-96 w-full">
                            <Title label="Interests" />
                            <Text label="I apply techniques to make my projects easy to enhance, fix and adapt" />
                            <SubTitle label="Unit Testing" />
                            <SubTitle label="Clean Code" />
                            <SubTitle label="Clean Architecture" />
                            <SubTitle label="Design Patterns" />
                            <SubTitle label="Data Structures" />
                        </div>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col w-full max-w-200 p-5">
                <div className="grow-1 shrink-1 max-w-200 min-w-0">
                    <Card>
                        <div className="flex flex-col gap-y-5 h-96 w-full">
                            <Title label="OS" />
                            <Text label="I know how to use, configure and manage UNIX-Like systems" />
                            <SubTitle label="Linux" />
                            <SubTitle label="FOSS" />
                        </div>
                    </Card>
                </div>
            </div>
            <Footer />
        </LayoutContainer>
    );
}
