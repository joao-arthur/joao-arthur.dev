import type { JSX } from "react";
import { Metadata } from "next";
import { Layout } from "../components/Layout";
import { Typo } from "../components/Typo";

export const metadata: Metadata = {
    title: "About | João Arthur",
};

export default function About(): JSX.Element {
    return (
        <Layout.Content>
            <Layout.Card>
                <div className="flex flex-col gap-y-5 min-h-96 w-full">
                    <Typo.Title label="Languages" />
                    <Typo.Text label="I have knowledge in Object Orientation and Structured Programming. The languages I know the most are the following:" />
                    <div>
                        <Typo.SubTitle label="TypeScript" />
                        <Layout.Progress percentual={100} />
                        <Typo.Text label="Experience in web, server and mobile applications, and all its ecossystems" />
                    </div>
                    <div>
                        <Typo.SubTitle label="Java" />
                        <Layout.Progress percentual={50} />
                        <Typo.Text label="I have experience in server environments, creating scalable backend applications" />
                    </div>
                    <div>
                        <Typo.SubTitle label="Rust" />
                        <Layout.Progress percentual={40} />
                        <Typo.Text label="Basic experience creating server and web applications with Web Assembly" />
                    </div>
                </div>
            </Layout.Card>
            <Layout.Card>
                <div className="flex flex-col gap-y-5 h-96 w-full">
                    <Typo.Title label="Frontend" />
                    <Typo.Text label="I create websites that run on every device, using JSX, flat and material design, data integration with https requests and websockets" />
                    <div>
                        <Typo.SubTitle label="React" />
                        <Layout.Progress percentual={90} />
                    </div>
                    <div>
                        <Typo.SubTitle label="Next" />
                        <Layout.Progress percentual={50} />
                    </div>
                </div>
            </Layout.Card>
            <Layout.Card>
                <div className="flex flex-col gap-y-5 h-96 w-full">
                    <Typo.Title label="Backend" />
                    <Typo.Text label="I create services with database integration and queue systems" />
                    <div>
                        <Typo.SubTitle label="Spring" />
                        <Layout.Progress percentual={50} />
                    </div>
                    <div>
                        <Typo.SubTitle label="Microservices" />
                        <Layout.Progress percentual={40} />
                    </div>
                    <div>
                        <Typo.SubTitle label="NestJS" />
                        <Layout.Progress percentual={30} />
                    </div>
                </div>
            </Layout.Card>
            <Layout.Card>
                <div className="flex flex-col gap-y-5 h-96 w-full">
                    <Typo.Title label="Mobile" />
                    <Typo.Text label="I create native apps can can run on every device and android native apps" />
                    <div>
                        <Typo.SubTitle label="React native" />
                        <Layout.Progress percentual={90} />
                    </div>
                    <div>
                        <Typo.SubTitle label="Expo" />
                        <Layout.Progress percentual={60} />
                    </div>
                    <div>
                        <Typo.SubTitle label="Kotlin" />
                        <Layout.Progress percentual={40} />
                    </div>
                    <div>
                        <Typo.SubTitle label="Flutter" />
                        <Layout.Progress percentual={20} />
                    </div>
                </div>
            </Layout.Card>
            <Layout.Card>
                <div className="flex flex-col gap-y-5 h-96 w-full">
                    <Typo.Title label="Interests" />
                    <Typo.Text label="I apply techniques to make my projects easy to enhance, fix and adapt" />
                    <Typo.SubTitle label="Unit Testing" />
                    <Typo.SubTitle label="Clean Code" />
                    <Typo.SubTitle label="Clean Architecture" />
                    <Typo.SubTitle label="Design Patterns" />
                    <Typo.SubTitle label="Data Structures" />
                </div>
            </Layout.Card>
            <Layout.Card>
                <div className="flex flex-col gap-y-5 h-96 w-full">
                    <Typo.Title label="OS" />
                    <Typo.Text label="I know how to use, configure and manage Linux systems. I have solid knowledge in Arch and Debian based distributions." />
                    <Typo.SubTitle label="FOSS" />
                </div>
            </Layout.Card>
        </Layout.Content>
    );
}
