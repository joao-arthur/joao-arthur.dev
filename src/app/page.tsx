import type { JSX } from "react";
import { Metadata } from "next";
import { Layout } from "../components/Layout";
import { Card, CardContent, Typography } from "@mui/material";

export const metadata: Metadata = {
    title: "About | João Arthur",
};

export default function About(): JSX.Element {
    return (
        <Layout.Content>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-5 min-h-96 w-full">
                        <Typography variant="h4">Languages</Typography>
                        <Typography>
                            I have knowledge in Object Orientation and Structured Programming. The
                            languages I know the most are the following:
                        </Typography>
                        <div>
                            <Typography variant="h6">TypeScript</Typography>
                            <Layout.Progress percentual={100} />
                            <Typography>
                                Experience in web, server and mobile applications, and all its
                                ecossystems
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6">Java</Typography>
                            <Layout.Progress percentual={50} />
                            <Typography>
                                I have experience in server environments, creating scalable backend
                                applications
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6">Rust</Typography>
                            <Layout.Progress percentual={40} />
                            <Typography>
                                Basic experience creating server and web applications with Web
                                Assembly
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-5 h-96 w-full">
                        <Typography variant="h4">Frontend</Typography>
                        <Typography>
                            I create websites that run on every device, using JSX, flat and material
                            design, data integration with https requests and websockets
                        </Typography>
                        <div>
                            <Typography variant="h6">React</Typography>
                            <Layout.Progress percentual={90} />
                        </div>
                        <div>
                            <Typography variant="h6">Next</Typography>
                            <Layout.Progress percentual={50} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-5 h-96 w-full">
                        <Typography variant="h4">Backend</Typography>
                        <Typography>
                            I create services with database integration and queue systems
                        </Typography>
                        <div>
                            <Typography variant="h6">Spring</Typography>
                            <Layout.Progress percentual={50} />
                        </div>
                        <div>
                            <Typography variant="h6">Microservices</Typography>
                            <Layout.Progress percentual={40} />
                        </div>
                        <div>
                            <Typography variant="h6">NestJS</Typography>
                            <Layout.Progress percentual={30} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-5 h-96 w-full">
                        <Typography variant="h4">Mobile</Typography>
                        <Typography>
                            I create native apps can can run on every device and android native apps
                        </Typography>
                        <div>
                            <Typography variant="h6">React native</Typography>
                            <Layout.Progress percentual={90} />
                        </div>
                        <div>
                            <Typography variant="h6">Expo</Typography>
                            <Layout.Progress percentual={60} />
                        </div>
                        <div>
                            <Typography variant="h6">Kotlin</Typography>
                            <Layout.Progress percentual={40} />
                        </div>
                        <div>
                            <Typography variant="h6">Flutter</Typography>
                            <Layout.Progress percentual={20} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-5 h-96 w-full">
                        <Typography variant="h4">Interests</Typography>
                        <Typography>
                            I apply techniques to make my projects easy to enhance, fix and adapt
                        </Typography>
                        <Typography variant="h6">Unit Testing</Typography>
                        <Typography variant="h6">Clean Code</Typography>
                        <Typography variant="h6">Clean Architecture</Typography>
                        <Typography variant="h6">Design Patterns</Typography>
                        <Typography variant="h6">Data Structures</Typography>
                    </div>
                </CardContent>
            </Card>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-5 h-96 w-full">
                        <Typography variant="h4">OS</Typography>
                        <Typography>
                            I know how to use, configure and manage Linux systems. I have solid
                            knowledge in Arch and Debian based distributions.
                        </Typography>
                        <Typography variant="h6">FOSS</Typography>
                    </div>
                </CardContent>
            </Card>
        </Layout.Content>
    );
}
