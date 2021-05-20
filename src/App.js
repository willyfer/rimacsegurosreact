
import Router from "./Router"
import {
  useTheme,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50'
    }
  },
  custom: {
    myOwnComponent: {
      margin: "10px 10px",
      backgroundColor: "lightgreen"
    }
  }
});


const App = props => {
  return (
    <MuiThemeProvider theme={theme}><Router /></MuiThemeProvider>)
}
export default App;
