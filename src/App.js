import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import common_en from "./locales/en/translation.json";
import common_pt from "./locales/pt/translation.json";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Alert, Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const numeros = {
    "portugues":
      ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
      "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove",
      "vinte", "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro", "vinte e cinco", "vinte e seis", "vinte e sete", "vinte e oito", "vinte e nove",
      "trinta", "trinta e um", "trinta e dois", "trinta e três", "trinta e quatro", "trinta e cinco", "trinta e seis", "trinta e sete", "trinta e oito", "trinta e nove",
      "quarenta", "quarenta e um", "quarenta e dois", "quarenta e três", "quarenta e quatro", "quarenta e cinco", "quarenta e seis", "quarenta e sete", "quarenta e oito", "quarenta e nove",
      "cinquenta", "cinquenta e um", "cinquenta e dois", "cinquenta e três", "cinquenta e quatro", "cinquenta e cinco", "cinquenta e seis", "cinquenta e sete", "cinquenta e oito", "cinquenta e nove",
      "sessenta", "sessenta e um", "sessenta e dois", "sessenta e três", "sessenta e quatro", "sessenta e cinco", "sessenta e seis", "sessenta e sete", "sessenta e oito", "sessenta e nove",
      "setenta", "setenta e um", "setenta e dois", "setenta e três", "setenta e quatro", "setenta e cinco", "setenta e seis", "setenta e sete", "setenta e oito", "setenta e nove",
      "oitenta", "oitenta e um", "oitenta e dois", "oitenta e três", "oitenta e quatro", "oitenta e cinco", "oitenta e seis", "oitenta e sete", "oitenta e oito", "oitenta e nove",
      "noventa", "noventa e um", "noventa e dois", "noventa e três", "noventa e quatro", "noventa e cinco", "noventa e seis", "noventa e sete", "noventa e oito", "noventa e nove",
      "cem"
    ],
    "russo":
      ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять",
      "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать",
      "двадцать", "двадцать один", "двадцать два", "двадцать три", "двадцать четыре", "двадцать пять", "двадцать шесть", "двадцать семь", "двадцать восемь", "двадцать девять",
      "тридцать", "тридцать один", "тридцать два", "тридцать три", "тридцать четыре", "тридцать пять", "тридцать шесть", "тридцать семь", "тридцать восемь", "тридцать девять",
      "сорок", "сорок один", "сорок два", "сорок три", "сорок четыре", "сорок пять", "сорок шесть", "сорок семь", "сорок восемь", "сорок девять",
      "пятьдесят", "пятьдесят один", "пятьдесят два", "пятьдесят три", "пятьдесят четыре", "пятьдесят пять", "пятьдесят шесть", "пятьдесят семь", "пятьдесят восемь", "пятьдесят девять",
      "шестьдесят", "шестьдесят один", "шестьдесят два", "шестьдесят три", "шестьдесят четыре", "шестьдесят пять", "шестьдесят шесть", "шестьдесят семь", "шестьдесят восемь", "шестьдесят девять",
      "семьдесят", "семьдесят один", "семьдесят два", "семьдесят три", "семьдесят четыре", "семьдесят пять", "семьдесят шесть", "семьдесят семь", "семьдесят восемь", "семьдесят девять",
      "восемьдесят", "восемьдесят один", "восемьдесят два", "восемьдесят три", "восемьдесят четыре", "восемьдесят пять", "восемьдесят шесть", "восемьдесят семь", "восемьдесят восемь", "восемьдесят девять",
      "девяносто", "девяносто один", "девяносто два", "девяносто три", "девяносто четыре", "девяносто пять", "девяносто шесть", "девяносто семь", "девяносто восемь", "девяносто девять",
      "сто",
    ],
  }

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "pt", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    resources: {
      en: {
          common: common_en // 'common' is our custom namespace
      },
      pt: {
          common: common_pt
      },
    },
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {
  const { t } = useTranslation("common");
  const [lang, setLang] = useState(t(i18n.language));

  const [numeroAleatorio, setNumeroAleatorio] = useState(Math.floor(Math.random() * 101));
  const [numeroDigitado, setNumeroDigitado] = useState("");
  const [statusNumero, setStatusNumero] = useState("");
  const [modoDeJogo, setModoDeJogo] = useState("russo");
  const [labelNum, setLabelNum] = useState(t('numbers.in_russian', { num: numeroAleatorio }));

  function handleInputChange(event) {
    setNumeroDigitado(event.target.value.toLowerCase());
  }

  function handleRadioChange(event) {
    let novoModo = event.target.value;
    setModoDeJogo(novoModo);
    novoNumero(novoModo);
  }

  function checaResposta(event) {
    if (modoDeJogo == "russo") {
      if (numeroDigitado == numeros["russo"][numeroAleatorio]) {
        setStatusNumero("success");
        setTimeout(_ => {
          novoNumero();
        }, 1000);

      } else {
        setStatusNumero("error");
        console.log("É " + numeros["russo"][numeroAleatorio] + " e não " + numeroDigitado);
      }
    } else {
      if (numeroAleatorio == numeros["russo"][numeroDigitado]) {
        setStatusNumero("success");
        setTimeout(_ => {
          novoNumero();
        }, 1000);

      } else {
        setStatusNumero("error");
        console.log(numeroAleatorio + " não é " + numeros["russo"][numeroDigitado]);
      }
    }

    event.preventDefault();
  }

  function novoNumero(modo) {
    let m = (modo == undefined) ? modoDeJogo : modo;
    if (m == "russo") {
      let novoNum = Math.floor(Math.random() * 101);
      setNumeroAleatorio(novoNum);
      setLabelNum(t('numbers.in_russian', {num: novoNum }));
      setNumeroDigitado("");
      setStatusNumero("");
    } else {
      let novoNum = numeros["russo"][Math.floor(Math.random() * 101)];
      setNumeroAleatorio(novoNum);
      setLabelNum(t('numbers.what_is_the_number', {num: novoNum }));
      setNumeroDigitado("");
      setStatusNumero("");
    }
  }

  function handleLangChange(event) {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
    if (modoDeJogo == "russo") {
      setLabelNum(t('numbers.in_russian', {num: numeroAleatorio }));
    } else {
      setLabelNum(t('numbers.what_is_the_number', {num: numeroAleatorio }));
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("title")}
          </Typography>
          <InputLabel id="demo-simple-select-label">{t("lang")}: </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label={t(i18n.language)}
              placeholder={t("lang")}
              onChange={handleLangChange}
                          >
              <MenuItem value='en'>{t("english")}</MenuItem>
              <MenuItem value='pt'>{t("portuguese")}</MenuItem>
            </Select>
        </Toolbar>
      </AppBar>
      <Box id="App" component="form" display="flex" alignItems="center" justifyContent="center" height="100vh" onSubmit={checaResposta} sx={{ p: 2, border: '1px grey' }}>
        <Stack spacing={2}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{t("numbers.gamemode")}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="russo"
              name="radio-buttons-group"
              value={modoDeJogo}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="russo" control={<Radio />} label={t('numbers.show_number')} />
              <FormControlLabel value="numero" control={<Radio />} label={t('numbers.show_russian')} />
            </RadioGroup>
          </FormControl>
          <Divider orientation="horizontal" flexItem />
          <Box id="numAleatorio">
            <Alert variant='filled' severity={statusNumero} sx={{ display: "flex", justifyContent: "center" }}>
              <h2>{numeroAleatorio}{"\n"}</h2>
            </Alert>
          </Box>
          <Divider orientation="horizontal" flexItem />
          <TextField id="outlined-basic" label={labelNum} variant="outlined" onChange={handleInputChange} autoComplete='off' value={numeroDigitado} />
          <Button type="submit">{t('numbers.check')}</Button>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
