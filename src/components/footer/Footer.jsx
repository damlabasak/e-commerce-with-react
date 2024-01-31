import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
const Footer = () => {
  return (
    <Box
        sx={{
        backgroundColor: (theme) =>
            theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[800],
        p: 6,
        marginTop: 10,
        }}
        component="footer"
    >
    <Container maxWidth="sm">
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="/">
            Shopperia
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  </Box>
  )
}

export default Footer