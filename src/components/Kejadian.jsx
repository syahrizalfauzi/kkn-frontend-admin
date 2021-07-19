import * as React from "react";
import {
  List,
  Edit,
  Create,
  Show,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  SimpleShowLayout,
  DateInput,
  DateField,
  required,
} from "react-admin";
import kejadianExporter from "../utils/exporters/kejadianExporter";

const validator = [required()];

export const KejadianList = (props) => (
  <List {...props} title="Daftar Kejadian" exporter={kejadianExporter}>
    <Datagrid rowClick="edit">
      <TextField source="nama" />
      <TextField source="deskripsi" />
      <DateField source="tanggal" locales="id-ID" />
    </Datagrid>
  </List>
);

export const KejadianEdit = (props) => (
  <Edit {...props} title="Ubah Data Kejadian">
    <SimpleForm>
      <TextInput validate={validator} source="nama" />
      <TextInput validate={validator} source="deskripsi" />
      <DateInput
        validate={validator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
    </SimpleForm>
  </Edit>
);

export const KejadianCreate = (props) => (
  <Create {...props} title="Buat Data Kejadian">
    <SimpleForm>
      <TextInput validate={validator} source="nama" />
      <TextInput validate={validator} source="deskripsi" />
      <DateInput
        validate={validator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
    </SimpleForm>
  </Create>
);

export const KejadianShow = (props) => (
  <Show {...props} title="Detail Data Kejadian">
    <SimpleShowLayout>
      <TextField source="nama" />
      <TextField source="deskripsi" />
      <DateField source="tanggal" locales="id-ID" />
    </SimpleShowLayout>
  </Show>
);
