import * as React from "react";
import {
  List,
  Edit,
  Create,
  Show,
  Datagrid,
  TextField,
  SimpleForm,
  SelectInput,
  TextInput,
  SimpleShowLayout,
  DateInput,
  DateField,
} from "react-admin";
import { wargaExporter } from "../exporters";

const kelaminChoices = [
  { id: "Pria", name: "Pria" },
  { id: "Wanita", name: "Wanita" },
];
const perkawinanChoices = [
  { id: "Belum Kawin", name: "Belum Kawin" },
  { id: "Kawin", name: "Kawin" },
  { id: "Cerai Hidup", name: "Cerai Hidup" },
  { id: "Cerai Mati", name: "Cerai Mati" },
];

export const WargaList = (props) => (
  <List {...props} title="Daftar Warga" exporter={wargaExporter}>
    <Datagrid rowClick="edit">
      <TextField source="nik" label="NIK" />
      <TextField source="nama" />
      <TextField source="jabatan" />
      <TextField source="jenis_kelamin" label="Jenis Kelamin" />
      <TextField source="tempat_lahir" label="Tempat Lahir" />
      <DateField source="tanggal_lahir" label="Tanggal Lahir" locales="id-ID" />
      <TextField source="status_perkawinan" label="Status Perkawinan" />
      <TextField source="agama" />
      <TextField source="alamat" />
      <TextField source="pendidikan" />
      <TextField source="pekerjaan" />
    </Datagrid>
  </List>
);

export const WargaEdit = (props) => (
  <Edit {...props} title="Ubah Data Warga">
    <SimpleForm>
      <TextInput required source="nik" label="NIK" />
      <TextInput required source="nama" />
      <TextInput required source="jabatan" />
      <SelectInput
        required
        source="jenis_kelamin"
        choices={kelaminChoices}
        label="Jenis Kelamin"
      />
      <TextInput required source="tempat_lahir" label="Tempat Lahir" />
      <DateInput
        required
        source="tanggal_lahir"
        label="Tanggal Lahir"
        options={{ format: "DD/MM/YYYY" }}
      />
      <SelectInput
        required
        source="status_perkawinan"
        choices={perkawinanChoices}
        label="Status Perkawinan"
      />
      <TextInput required source="agama" />
      <TextInput required source="alamat" />
      <TextInput required source="pendidikan" />
      <TextInput required source="pekerjaan" />
    </SimpleForm>
  </Edit>
);

export const WargaCreate = (props) => (
  <Create {...props} title="Buat Data Warga">
    <SimpleForm>
      <TextInput required source="nik" label="NIK" />
      <TextInput required source="nama" />
      <TextInput required source="jabatan" />
      <SelectInput
        required
        source="jenis_kelamin"
        choices={kelaminChoices}
        label="Jenis Kelamin"
      />
      <TextInput required source="tempat_lahir" label="Tempat Lahir" />
      <DateInput
        required
        source="tanggal_lahir"
        label="Tanggal Lahir"
        options={{ format: "DD/MM/YYYY" }}
      />
      <SelectInput
        required
        source="status_perkawinan"
        choices={perkawinanChoices}
        label="Status Perkawinan"
      />
      <TextInput required source="agama" />
      <TextInput required source="alamat" />
      <TextInput required source="pendidikan" />
      <TextInput required source="pekerjaan" />
    </SimpleForm>
  </Create>
);

export const WargaShow = (props) => (
  <Show {...props} title="Detail Data Warga">
    <SimpleShowLayout>
      <TextField source="nik" label="NIK" />
      <TextField source="nama" />
      <TextField source="jabatan" />
      <TextField source="jenis_kelamin" label="Jenis Kelamin" />
      <TextField source="tempat_lahir" label="Tempat Lahir" />
      <DateField source="tanggal_lahir" label="Tanggal Lahir" locales="id-ID" />
      <TextField source="status_perkawinan" label="Status Perkawinan" />
      <TextField source="agama" />
      <TextField source="alamat" />
      <TextField source="pendidikan" />
      <TextField source="pekerjaan" />
    </SimpleShowLayout>
  </Show>
);
