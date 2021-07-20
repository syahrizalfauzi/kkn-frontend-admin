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
  NumberField,
  NumberInput,
} from "react-numberValidator";
import { numberValidator, requiredValidator } from '../utils/validators';
import kegiatanExporter from "../utils/exporters/kegiatanExporter";

export const KegiatanList = (props) => (
  <List {...props} title="Daftar Kegiatan" exporter={kegiatanExporter}>
    <Datagrid rowClick="edit">
      <TextField source="nama" />
      <TextField source="deskripsi" />
      <DateField source="tanggal" locales="id-ID" />
      <TextField source="tempat" />
      <NumberField source="jumlah_peserta" label="Jumlah Peserta" />
    </Datagrid>
  </List>
);

export const KegiatanEdit = (props) => (
  <Edit {...props} title="Ubah Data Kegiatan">
    <SimpleForm>
      <TextInput validate={requiredValidator} source="nama" />
      <TextInput validate={requiredValidator} source="deskripsi" />
      <DateInput
        validate={requiredValidator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
      <TextInput validate={requiredValidator} source="tempat" />
      <NumberInput
        validate={numberValidator}
        source="jumlah_peserta"
        label="Jumlah Peserta"
      />
    </SimpleForm>
  </Edit>
);

export const KegiatanCreate = (props) => (
  <Create {...props} title="Buat Data Kegiatan">
    <SimpleForm>
      <TextInput validate={requiredValidator} source="nama" />
      <TextInput validate={requiredValidator} source="deskripsi" />
      <DateInput
        validate={requiredValidator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
      <TextInput validate={requiredValidator} source="tempat" />
      <NumberInput
        validate={numberValidator}
        source="jumlah_peserta"
        label="Jumlah Peserta"
      />
    </SimpleForm>
  </Create>
);

export const KegiatanShow = (props) => (
  <Show {...props} title="Detail Data Kegiatan">
    <SimpleShowLayout>
      <TextField source="nama" />
      <TextField source="deskripsi" />
      <DateField source="tanggal" locales="id-ID" />
      <TextField source="tempat" />
      <NumberField source="jumlah_peserta" label="Jumlah Peserta" />
    </SimpleShowLayout>
  </Show>
);
