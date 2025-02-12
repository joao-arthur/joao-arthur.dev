import type { JSX } from "react";
import { Metadata } from "next";
import { Layout } from "../components/Layout";
import { Card, CardContent, LinearProgress, Typography } from "@mui/material";

export const metadata: Metadata = {
    title: "About | João Arthur",
};

export default function About(): JSX.Element {
    return (
        <Layout.Content>
            <img style={{ alignSelf: "center", borderRadius: "7rem", width: 320 }} className="radius-md" src="/images/myself.jpg" />
            <Typography variant="h2" sx={{ textAlign: "center"}}>Hi, I'm João Arthur</Typography>
            <Typography variant="h5" sx={{ textAlign: "justify"}}>I'm a 24 years old developer based in Brazil. I love solving problems with code. I have 6 years of experience in web development with JavaScript, TypeScript and NodeJS. I try to apply  clean
            code, clean architecture and unit tests in my projects.</Typography>
            <a>
            <Typography variant="h5">You can download my cv here.</Typography>
            </a>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-5 min-h-96 w-full">
                        <Typography variant="h4">Programming languages</Typography>
                        <Typography>
                            I have knowledge in <i>Object Orientation</i> and <i>Structured Programming</i>
                        </Typography>
                        <div>
                            <Typography variant="h6">TypeScript</Typography>
                            <Typography>
                                <b>Web</b>, <b>server</b>, <b>desktop</b> and <b>mobile</b> applications, and all its
                                ecossystems
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6">Java</Typography>
                            <Typography>
                                <b>Server</b> environments, creating scalable backend applications
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6">Rust</Typography>
                            <Typography>
                                Basic experience creating <b>server</b> and <b>desktop</b> applications, and <b>web</b> applications with <i>Web Assembly</i>
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
                            <LinearProgress variant="determinate" value={90} />
                        </div>
                        <div>
                            <Typography variant="h6">Next</Typography>
                            <LinearProgress variant="determinate" value={50} />
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
                            <LinearProgress variant="determinate" value={50} />
                        </div>
                        <div>
                            <Typography variant="h6">Microservices</Typography>
                            <LinearProgress variant="determinate" value={40} />
                        </div>
                        <div>
                            <Typography variant="h6">NestJS</Typography>
                            <LinearProgress variant="determinate" value={30} />
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
                            <LinearProgress variant="determinate" value={90} />
                        </div>
                        <div>
                            <Typography variant="h6">Expo</Typography>
                            <LinearProgress variant="determinate" value={60} />
                        </div>
                        <div>
                            <Typography variant="h6">Kotlin</Typography>
                            <LinearProgress variant="determinate" value={40} />
                        </div>
                        <div>
                            <Typography variant="h6">Flutter</Typography>
                            <LinearProgress variant="determinate" value={20} />
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
