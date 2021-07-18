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
  BooleanField,
  BooleanInput,
  required,
} from "react-admin";
import { iuranExporter } from "../exporters";

const validator = [required()];

export const IuranList = (props) => (
  <List {...props} title="Daftar Iuran" exporter={iuranExporter}>
    <Datagrid rowClick="edit">
      <TextField source="nik" label="NIK" />
      <TextField source="nama" />
      <TextField source="nama_iuran" />
      <NumberField source="nominal" />
      <DateField source="tanggal" locales="id-ID" />
      <BooleanField source="status" />
      <TextField source="keterangan" />
    </Datagrid>
  </List>
);

export const IuranEdit = (props) => (
  <Edit {...props} title="Ubah Data Iuran">
    <SimpleForm>
      <TextInput validate={validator} source="nik" label="NIK" />
      <TextInput validate={validator} source="nama" />
      <TextInput validate={validator} source="nama_iuran" label="Nama Iuran" />
      <NumberInput validate={validator} source="nominal" />
      <DateInput
        validate={validator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
      <BooleanInput
        source="status"
        label="Status Pembayaran"
        defaultValue={false}
      />
      <TextInput source="keterangan" multiline />
    </SimpleForm>
  </Edit>
);

export const IuranCreate = (props) => (
  <Create {...props} title="Buat Data Iuran">
    <SimpleForm>
      <TextInput validate={validator} source="nik" label="NIK" />
      <TextInput validate={validator} source="nama" />
      <TextInput validate={validator} source="nama_iuran" label="Nama Iuran" />
      <NumberInput validate={validator} source="nominal" />
      <DateInput
        validate={validator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
      <BooleanInput
        source="status"
        label="Status Pembayaran"
        defaultValue={false}
      />
      <TextInput source="keterangan" multiline />
    </SimpleForm>
  </Create>
);

export const IuranShow = (props) => (
  <Show {...props} title="Detail Data Iuran">
    <SimpleShowLayout>
      <TextField source="nik" label="NIK" />
      <TextField source="nama" />
      <TextField source="nama_iuran" />
      <NumberField source="nominal" />
      <DateField source="tanggal" locales="id-ID" />
      <BooleanField source="status" />
      <TextField source="keterangan" />
    </SimpleShowLayout>
  </Show>
);
