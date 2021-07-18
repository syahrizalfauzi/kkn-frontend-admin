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
import WargaIcon from "@material-ui/icons/People";
import IuranIcon from "@material-ui/icons/AttachMoney";

const i18nProvider = polyglotI18nProvider(() => indonesianMessages, "id");

const dataProvider = simpleRestProvider(
  "http://localhost:3000",
  fetchUtils.fetchJson,
  "X-Total-Count"
);

const App = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
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
  </Admin>
);

export default App;
