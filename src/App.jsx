import * as React from "react";
import { Admin, Resource } from "react-admin";
import { fetchUtils } from "ra-core";
import simpleRestProvider from "ra-data-simple-rest";
import { WargaList, WargaEdit, WargaCreate } from "./components/Warga";

const dataProvider = simpleRestProvider(
  "http://localhost:3000",
  fetchUtils.fetchJson,
  "X-Total-Count"
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="daftar_warga"
      list={WargaList}
      edit={WargaEdit}
      create={WargaCreate}
    />
  </Admin>
);

export default App;
