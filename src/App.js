import './App.css';
import { Grid, Box } from '@mui/material';
import Paper from '@mui/material/Paper'
import Kai from './images/kai.png'
import Logo from './images/logo.png'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
const darkTheme = createTheme({ palette: { mode: 'dark' } });

function App(props) {

  const [hint,setHint] = useState("")
  const [word,setWord] = useState("")

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    setHint(params.hint)
    setWord(params.word)
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        className='AppContainer'
        sx={{
          p: 2,
          bgcolor: '#202124',
          display: 'grid',
          gridTemplateColumns: { md: '1fr 1fr' },
          gap: 2,
        }}
      >
        <Grid item className='Header'>
          <img src={Logo} width={70} />
          <h2 className='HeaderTitle'> Scavenger Hunt </h2>
        </Grid>
        <Paper style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "133px" }}>
          <Grid style={{ padding: "10px" }} item xs={12} sm={12} lg={12} md={12}>
            <small> Your Word: </small>
            <div>
              <h1 className='Word'> "{word}" </h1>
            </div>

            <div style={{ textAlign: "right" }}>
              - Kai
            </div>
          </Grid>

        </Paper>

        <Grid item xs={12} sm={12} lg={12} md={12} className="KaisCorner">
          <img src={Kai} width={200} />
        </Grid>
        <div style={{ textAlign: "left", textAlign: "center", color: "white" }}>
          <small>Hint: "{hint}"</small>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
