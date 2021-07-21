import * as React from "react";
import { Admin, Resource } from "react-admin";
import { fetchUtils } from "ra-core";
import simpleRestProvider from "ra-data-simple-rest";
import indonesianMessages from "ra-language-indonesian-new";
import polyglotI18nProvider from "ra-i18n-polyglot";
import {
  WargaList,
  WargaEdit,
  WargaCreate,
  WargaShow,
} from "./components/Warga";
import {
  IuranList,
  IuranEdit,
  IuranCreate,
  IuranShow,
} from "./components/Iuran";
import {
  SuratList,
  SuratEdit,
  SuratCreate,
  SuratShow,
} from "./components/Surat";
import {
  KejadianList,
  KejadianEdit,
  KejadianCreate,
  KejadianShow,
} from "./components/Kejadian";
import {
  KasList,
  KasEdit,
  KasCreate,
  KasShow,
} from "./components/Kas";
import WargaIcon from "@material-ui/icons/People";
import IuranIcon from "@material-ui/icons/AttachMoney";
import SuratIcon from "@material-ui/icons/Mail";
import KejadianIcon from "@material-ui/icons/Event";
import KasIcon from '@material-ui/icons/Book';
import { apiUrl, authProvider } from "./utils/authProvider";

const i18nProvider = polyglotI18nProvider(() => indonesianMessages, "id");

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  apiUrl,
  httpClient,
  "X-Total-Count"
);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} i18nProvider={i18nProvider}>
    <Resource
      name="daftar_warga"
      list={WargaList}
      edit={WargaEdit}
      create={WargaCreate}
      show={WargaShow}
      options={{ label: "Warga" }}
      icon={WargaIcon}
    />
    <Resource
      name="daftar_iuran"
      list={IuranList}
      edit={IuranEdit}
      create={IuranCreate}
      show={IuranShow}
      options={{ label: "Iuran" }}
      icon={IuranIcon}
    />
    <Resource
      name="daftar_surat"
      list={SuratList}
      edit={SuratEdit}
      create={SuratCreate}
      show={SuratShow}
      options={{ label: "Surat" }}
      icon={SuratIcon}
    />
    <Resource
      name="daftar_kejadian"
      list={KejadianList}
      edit={KejadianEdit}
      create={KejadianCreate}
      show={KejadianShow}
      options={{ label: "Kejadian" }}
      icon={KejadianIcon}
    />
    <Resource
      name="daftar_kas"
      list={KasList}
      edit={KasEdit}
      create={KasCreate}
      show={KasShow}
      options={{ label: "Kas" }}
      icon={KasIcon}
    />
  </Admin>
);

export default App;
