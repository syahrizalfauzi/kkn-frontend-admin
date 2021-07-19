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
  required,
} from "react-admin";
import kegiatanExporter from "../utils/exporters/kegiatanExporter";

const validator = [required()];

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
      <TextInput validate={validator} source="nama" />
      <TextInput validate={validator} source="deskripsi" />
      <DateInput
        validate={validator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
      <TextInput validate={validator} source="tempat" />
      <NumberInput
        validate={validator}
        source="jumlah_peserta"
        label="Jumlah Peserta"
      />
    </SimpleForm>
  </Edit>
);

export const KegiatanCreate = (props) => (
  <Create {...props} title="Buat Data Kegiatan">
    <SimpleForm>
      <TextInput validate={validator} source="nama" />
      <TextInput validate={validator} source="deskripsi" />
      <DateInput
        validate={validator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
      <TextInput validate={validator} source="tempat" />
      <NumberInput
        validate={validator}
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
