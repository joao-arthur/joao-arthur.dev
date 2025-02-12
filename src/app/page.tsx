import type { JSX } from "react";
import { Metadata } from "next";
import { Layout } from "../components/Layout";
import { Card, CardContent, Chip, LinearProgress, Typography } from "@mui/material";

export const metadata: Metadata = {
    title: "About | João Arthur",
};

export default function About(): JSX.Element {
    return (
        <Layout.Content>
            <img
                style={{ borderRadius: "35%", width: 300 }}
                className="self-center"
                src="/images/myself.jpg"
            />
            <Typography variant="h2" sx={{ textAlign: "center" }}>Hi, I'm João Arthur</Typography>
            <Typography variant="h5" sx={{ textAlign: "justify" }}>
                I'm a 24 years old developer based in Brazil. I love solving problems with code. I
                have 6 years of experience in web development with JavaScript, TypeScript and
                NodeJS. I try to apply clean code, clean architecture and unit tests in my projects.
            </Typography>
            <a
                href="https://github.com/joao-arthur/aboutme.md/releases/latest/download/curriculum-joao-arthur-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Typography variant="h5">
                    <b>Download my cv</b>
                </Typography>
            </a>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-4">
                        <Typography variant="h4">Programming languages</Typography>
                        <Typography>
                            I have knowledge in <i>Object Orientation</i> and{" "}
                            <i>Structured Programming</i>
                        </Typography>
                        <div>
                            <Typography variant="h6">TypeScript</Typography>
                            <Typography>
                                <b>Web</b>, <b>server</b>, <b>desktop</b> and <b>mobile</b>{" "}
                                applications, and all its ecossystems
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
                                Basic experience creating <b>server</b> and <b>desktop</b>{" "}
                                applications, and <b>web</b> applications with <i>Web Assembly</i>
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-4">
                        <Typography variant="h4">Frontend</Typography>
                        <Typography>
                            I create websites that run on every device, using JSX, flat and material
                            design, data integration with https requests and websockets
                        </Typography>
                        <div className="flex flex-wrap gap-3">
                            <Chip color="primary" label="React" sx={{ fontSize: 20 }} />
                            <Chip color="primary" label="Next.js" sx={{ fontSize: 20 }} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-4">
                        <Typography variant="h4">Backend</Typography>
                        <Typography>
                            I create services with database integration and queue systems
                        </Typography>
                        <div className="flex flex-wrap gap-3">
                            <Chip color="primary" label="Spring" sx={{ fontSize: 20 }} />
                            <Chip color="primary" label="NestJS" sx={{ fontSize: 20 }} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-4">
                        <Typography variant="h4">Desktop</Typography>
                        <Typography>
                            I create desktop applications for <i>Linux</i>
                        </Typography>
                        <div className="flex flex-wrap gap-3">
                            <Chip color="primary" label="GTK" sx={{ fontSize: 20 }} />
                            <Chip color="primary" label="Electron" sx={{ fontSize: 20 }} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-4">
                        <Typography variant="h4">Mobile</Typography>
                        <Typography>
                            I create native apps can can run on every device and <i>Android</i>{" "}
                            native apps
                        </Typography>
                        <div className="flex flex-wrap gap-3">
                            <Chip color="primary" label="React native" sx={{ fontSize: 20 }} />
                            <Chip color="primary" label="Expo" sx={{ fontSize: 20 }} />
                            <Chip color="primary" label="Flutter" sx={{ fontSize: 20 }} />
                            <Chip color="primary" label="Android (Kotlin)" sx={{ fontSize: 20 }} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card variant="elevation">
                <CardContent>
                    <div className="flex flex-col gap-y-4">
                        <Typography variant="h4">OS</Typography>
                        <Typography>
                            I know how to use, configure and manage <i>Linux</i>{" "}
                            systems. based on I have solid knowledge in Arch and Debian based
                            distributions.
                        </Typography>
                        <div className="flex flex-wrap gap-3">
                            <Chip color="primary" label="Arch" sx={{ fontSize: 20 }} />
                            <Chip color="primary" label="Debian" sx={{ fontSize: 20 }} />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Layout.Content>
    );
}
