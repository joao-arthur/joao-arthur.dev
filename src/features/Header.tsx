"use client";

import type { JSX } from "react";
import { usePathname } from "next/navigation";
import { useColorScheme } from "@mui/material";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Layout } from "../components/Layout";
import { Computer, Person, RssFeed } from "@mui/icons-material";

export function Header(): JSX.Element {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const colorScheme = useColorScheme();

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <IconButton
                        onClick={() => {
                            setOpen(true);
                        }}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            if (colorScheme?.mode === "dark") {
                                colorScheme.setMode("light");
                            } else {
                                colorScheme.setMode("dark");
                            }
                        }}
                        sx={{ mr: 2 }}
                    >
                        {colorScheme?.mode === "dark" ? <DarkMode /> : <LightMode />}
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={open}
                        onClose={() => {
                            setOpen(false);
                        }}
                    >
                        <Box
                            sx={{
                                p: 2,
                                height: 1,
                            }}
                        >
                            <Box sx={{ mb: 2 }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Person />
                                    </ListItemIcon>
                                    <ListItemText primary="About" />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Computer />
                                    </ListItemIcon>
                                    <ListItemText primary="Portfolio" />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <RssFeed />
                                    </ListItemIcon>
                                    <ListItemText primary="Blog" />
                                </ListItemButton>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Layout.Button>
                                    <a
                                        href="http://github.com/joao-arthur"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithubAlt
                                            size={30}
                                            className="w-16 h-16 p-4"
                                            color="white"
                                        />
                                    </a>
                                </Layout.Button>
                                <Layout.Button>
                                    <a
                                        href="https://www.linkedin.com/in/joao-lothamer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedinIn
                                            size={30}
                                            className="w-16 h-16 p-4"
                                            color="white"
                                        />
                                    </a>
                                </Layout.Button>
                                <Layout.Button>
                                    <a
                                        href="mailto://joao.lothamer@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MdEmail
                                            size={30}
                                            className="w-16 h-16 p-4"
                                            color="white"
                                        />
                                    </a>
                                </Layout.Button>
                            </Box>
                        </Box>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
