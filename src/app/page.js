import { Box, Button, Grid, Grid2, TextField } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" sx={{
            height: '100%'
          }}>Add ToDo</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
