import React from "react";
import { Box, colors, Stack, Typography } from "@mui/joy";
import { IMAGES } from "../../constant";

const Header: React.FC = () => {
    return (
        <Stack
            px={'2vw'}
            py={'0.5vw'}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            bgcolor={'white'}
            sx={{
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
        >
            {/* Logo projet */}
            <Box
                component="img"
                src={IMAGES.logo}
                alt="Logo SIMRO Cameroun"
                sx={{ height: '5vw', width: "auto" }}
            />

            {/* Titre du projet */}
            <Stack spacing={0} sx={{ textAlign: "center" }}>
                {/* <Typography level="h4" fontWeight="lg" fontSize={'1.2vw'}>
                  
                </Typography> */}
                <Typography level="body-md" fontWeight="md" fontSize={'1.5vw'}>
                    Système d'Information sur les Marchés du Riz et de l'Oignon <span style={{ fontWeight: "bold", color:"#1b5e20" }}> (SIMRO Cameroun)</span>
                </Typography>
            </Stack>

            {/* Logos bailleurs / partenaires */}
            <Stack direction="row" spacing={2}>
                <Box component="img" src={IMAGES.logo_padfa} alt="Bailleur 1" sx={{ height: '5vw', width: "auto" }} />
                <Box component="img" src={IMAGES.partenaire7} alt="Bailleur 2" sx={{ height: '5vw', width: "auto" }} />
                {/* Ajouter d'autres bailleurs si nécessaire */}
            </Stack>
        </Stack>
    );
};

export default Header;
