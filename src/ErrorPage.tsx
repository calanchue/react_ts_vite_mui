import { Typography, Box } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Box display="flex" justifyContent="center">
        <div>
        <Typography variant="h1">Oops!</Typography>
        <Typography variant="body1">Sorry, an unexpected error has occurred.</Typography>
        <p>
        <i>{error.statusText || error.message}</i>    
        </p>
        </div>
    </Box>
  );
}