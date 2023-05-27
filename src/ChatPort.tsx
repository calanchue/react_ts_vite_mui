import { Stack, TextField, Drawer, List, ListItem, Box, Divider } from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';
import React from 'react';

export default function ChatPort() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return(
  <Stack spacing={2} direction={"row"}>
    <Box sx={{height:"80vh"}}>
      <CodeEditor
        value={code}
        language="markup"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </Box>    
    
    <TextField id="result-area" label="result area" variant="standard" />
  </Stack>
  )
}