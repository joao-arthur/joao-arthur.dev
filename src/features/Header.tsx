"use client";

import type { JSX } from "react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { Alert, Menu, MenuItem, useColorScheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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

    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton onClick={openHamburger}>
                            <MenuIcon />
                        </IconButton>
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
            <Drawer anchor="left" open={hamburgerIsOpen} onClose={closeHamburger}>
                <Box sx={{ p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
                    <Box>
                        <Link href="/" onClick={closeHamburger}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </Link>
                        <Link href="/portfolio" onClick={closeHamburger}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Computer />
                                </ListItemIcon>
                                <ListItemText primary="Portfolio" />
                            </ListItemButton>
                        </Link>
                        <Link href="/blog" onClick={closeHamburger}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <RssFeed />
                                </ListItemIcon>
                                <ListItemText primary="Blog" />
                            </ListItemButton>
                        </Link>
                    </Box>
                    <div className="grow" />
                    <Box sx={{ display: "flex", columnGap: 2 }}>
                        <a
                            href="http://github.com/joao-arthur"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton>
                                <GitHub fontSize="large" />
                            </IconButton>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joao-lothamer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton>
                                <LinkedIn fontSize="large" />
                            </IconButton>
                        </a>
                        <a
                            href="mailto://joao.lothamer@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton>
                                <Email fontSize="large" />
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
