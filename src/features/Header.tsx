"use client";

import type { JSX } from "react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { useColorScheme } from "@mui/material";
import Menu from "@mui/material/Menu";
import Alert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import Computer from "@mui/icons-material/Computer";
import Person from "@mui/icons-material/Person";
import RssFeed from "@mui/icons-material/RssFeed";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import Translate from "@mui/icons-material/Translate";
import Close from "@mui/icons-material/Close";
import ArrowBack from "@mui/icons-material/ArrowBack";

export function Header(): JSX.Element {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const pathname = usePathname();
    const colorScheme = useColorScheme();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function openHamburger() {
        setHamburgerIsOpen(true);
    }

    function closeHamburger() {
        setHamburgerIsOpen(false);
    }

    function toggleDarkMode() {
        if (colorScheme?.mode === "dark") {
            colorScheme.setMode("light");
        } else {
            colorScheme.setMode("dark");
        }
    }

    function goBack() {
        window.history.back();
    }

    return (
        <>
            <AppBar position="sticky">
                <Container>
                    <Toolbar>
                        <IconButton onClick={openHamburger}>
                            <MenuIcon />
                        </IconButton>
                        {pathname.includes("/post/")
                            ? (
                                <IconButton onClick={goBack}>
                                    <ArrowBack />
                                </IconButton>
                            )
                            : null}
                        <div className="grow" />
                        <IconButton onClick={toggleDarkMode}>
                            {colorScheme?.mode === "dark" ? <DarkMode /> : <LightMode />}
                        </IconButton>
                        <IconButton onClick={handleClick}>
                            <Translate />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                anchor="left"
                open={hamburgerIsOpen}
                onClose={closeHamburger}
                sx={(theme) => ({ textAlign: "left" })}
            >
                <Box
                    sx={(theme) => ({
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        [theme.breakpoints.down("sm")]: { width: "100vw" },
                    })}
                >
                    <div className="flex justify-end">
                        <IconButton sx={{ transition: "color 1s" }} onClick={closeHamburger}>
                            <Close fontSize="large" sx={{ fontSize: 40 }} />
                        </IconButton>
                    </div>
                    <div className="flex flex-col gap-y-4 pt-6">
                        <Link href="/" onClick={closeHamburger}>
                            <div className="flex pl-2 gap-x-6">
                                <Person sx={{ color: "black", fontSize: 35 }} />
                                <Typography variant="h4">About</Typography>
                            </div>
                        </Link>
                        <Link href="/portfolio" onClick={closeHamburger}>
                            <div className="flex pl-2 gap-x-6">
                                <Computer sx={{ color: "gray", fontSize: 35 }} />
                                <Typography variant="h4">Portfolio</Typography>
                            </div>
                        </Link>
                        <Link href="/blog" onClick={closeHamburger}>
                            <div className="flex pl-2 gap-x-6">
                                <RssFeed sx={{ color: "#f78422", fontSize: 35 }} />
                                <Typography variant="h4">Blog</Typography>
                            </div>
                        </Link>
                    </div>
                    <div className="grow" />
                    <Box sx={{ display: "flex", columnGap: 2, justifyContent: "center" }}>
                        <a
                            href="http://github.com/joao-arthur"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton>
                                <GitHub sx={{ color: "black", fontSize: 50 }} />
                            </IconButton>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joao-lothamer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton>
                                <LinkedIn
                                    fontSize="large"
                                    sx={{ color: "#0073b2", fontSize: 50 }}
                                />
                            </IconButton>
                        </a>
                        <a
                            href="mailto://joao.lothamer@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton>
                                <Email fontSize="large" sx={{ color: "#f74343", fontSize: 50 }} />
                            </IconButton>
                        </a>
                    </Box>
                </Box>
            </Drawer>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <Alert severity="warning">Under construction</Alert>
                <MenuItem onClick={() => {}}>🇧🇷 Português</MenuItem>
                <MenuItem onClick={() => {}}>🇦🇷 Castellano</MenuItem>
                <MenuItem onClick={() => {}}>🇺🇸 English</MenuItem>
            </Menu>
        </>
    );
}
