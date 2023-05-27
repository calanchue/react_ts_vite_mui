import { Stack, TextField, Drawer, List, ListItem, Box, Divider } from '@mui/material';
import React from 'react';

export default function ChatPort() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return(
  <Stack spacing={2} direction={"row"}>
    <Box sx={{height:"80vh"}}>
      <p 
    </Box>    
    
    <TextField id="result-area" label="result area" variant="standard" />
  </Stack>
  )
}x``