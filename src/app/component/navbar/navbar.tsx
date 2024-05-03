"use client";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

// const navItems = ["About", "Experience", "Projects", "Contact"];

const navItems = [{ title: 'About', link: '/#about' }, { title: 'Experience', link: '/#experience' }, { title: 'Projects', link: '/#projects' }, { title: 'Contact', link: '/#contact' }];

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuId = "primary-search-account-menu";
    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {navItems.map((item, index) => (
                <MenuItem key={index} onClick={handleMenuClose}>{item.title}</MenuItem>
            ))}
        </Menu>
    );
    return (
        <AppBar component="nav" sx={{ bgcolor: "#04152d", boxShadow: 0, mt: 5, position: 'relative', zIndex: 1 }}>
            <Toolbar sx={{ mx: 20 }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, display: { sm: "none" } }}
                    onClick={() => {
                        setIsMenuOpen(true);
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    fontSize={"30px"}
                    fontWeight={"600"}
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                    Portfolio
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <Stack spacing={2} direction={'row'}>
                        {navItems.map((item) => (

                            <Button key={item.title} sx={{ color: "#fff" }} onClick={() => { window.location.replace(item.link) }}>
                                <Typography fontSize={"25px"} fontWeight={"400"}>
                                    {item.title}
                                </Typography>
                            </Button>
                        ))}
                    </Stack>
                </Box>
            </Toolbar>
            {renderMenu}
        </AppBar>

    );
}
