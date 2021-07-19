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
import suratExporter from "../utils/exporters/suratExporter";

const validator = [required()];

export const SuratList = (props) => (
  <List {...props} title="Daftar Surat" exporter={suratExporter}>
    <Datagrid rowClick="edit">
      <TextField source="no" label="No." />
      <TextField source="perihal" />
      <TextField source="isi" />
      <DateField source="tanggal" locales="id-ID" />
      <TextField source="pengirim" />
      <TextField source="keterangan" />
    </Datagrid>
  </List>
);

export const SuratEdit = (props) => (
  <Edit {...props} title="Ubah Data Surat">
    <SimpleForm>
      <TextInput validate={validator} source="no" label="No." />
      <TextInput validate={validator} source="perihal" />
      <TextInput validate={validator} source="isi" />
      <DateInput
        validate={validator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
      <TextInput validate={validator} source="pengirim" />
      <TextInput source="keterangan" multiline />
    </SimpleForm>
  </Edit>
);

export const SuratCreate = (props) => (
  <Create {...props} title="Buat Data Surat">
    <SimpleForm>
      <TextInput validate={validator} source="no" label="No." />
      <TextInput validate={validator} source="perihal" />
      <TextInput validate={validator} source="isi" />
      <DateInput
        validate={validator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
      <TextInput validate={validator} source="pengirim" />
      <TextInput source="keterangan" multiline />
    </SimpleForm>
  </Create>
);

export const SuratShow = (props) => (
  <Show {...props} title="Detail Data Surat">
    <SimpleShowLayout>
      <TextField source="no" label="No." />
      <TextField source="perihal" />
      <TextField source="isi" />
      <DateField source="tanggal" locales="id-ID" />
      <TextField source="pengirim" />
      <TextField source="keterangan" />
    </SimpleShowLayout>
  </Show>
);
