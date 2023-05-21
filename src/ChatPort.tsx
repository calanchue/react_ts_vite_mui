import {Stack, TextField} from '@mui/material';


export default function ChatPort(){
    return <Stack spacing={2} direction={"row"}>
        <TextField id="work-area" label="work area" variant="standard" />
        <TextField id="result-area" label="result area" variant="standard" />
    </Stack>

}