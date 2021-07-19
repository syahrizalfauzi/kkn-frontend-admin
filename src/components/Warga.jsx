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
  required,
} from "react-admin";
import wargaExporter from "../utils/exporters/wargaExporter";

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
const validator = [required()];

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
      <TextInput validate={validator} source="nik" label="NIK" />
      <TextInput validate={validator} source="nama" />
      <TextInput validate={validator} source="jabatan" />
      <SelectInput
        validate={validator}
        source="jenis_kelamin"
        choices={kelaminChoices}
        label="Jenis Kelamin"
      />
      <TextInput
        validate={validator}
        source="tempat_lahir"
        label="Tempat Lahir"
      />
      <DateInput
        validate={validator}
        source="tanggal_lahir"
        label="Tanggal Lahir"
        options={{ format: "DD/MM/YYYY" }}
      />
      <SelectInput
        validate={validator}
        source="status_perkawinan"
        choices={perkawinanChoices}
        label="Status Perkawinan"
      />
      <TextInput validate={validator} source="agama" />
      <TextInput validate={validator} source="alamat" />
      <TextInput validate={validator} source="pendidikan" />
      <TextInput validate={validator} source="pekerjaan" />
    </SimpleForm>
  </Edit>
);

export const WargaCreate = (props) => (
  <Create {...props} title="Buat Data Warga">
    <SimpleForm>
      <TextInput validate={validator} source="nik" label="NIK" />
      <TextInput validate={validator} source="nama" />
      <TextInput validate={validator} source="jabatan" />
      <SelectInput
        validate={validator}
        source="jenis_kelamin"
        choices={kelaminChoices}
        label="Jenis Kelamin"
      />
      <TextInput
        validate={validator}
        source="tempat_lahir"
        label="Tempat Lahir"
      />
      <DateInput
        validate={validator}
        source="tanggal_lahir"
        label="Tanggal Lahir"
        options={{ format: "DD/MM/YYYY" }}
      />
      <SelectInput
        validate={validator}
        source="status_perkawinan"
        choices={perkawinanChoices}
        label="Status Perkawinan"
      />
      <TextInput validate={validator} source="agama" />
      <TextInput validate={validator} source="alamat" />
      <TextInput validate={validator} source="pendidikan" />
      <TextInput validate={validator} source="pekerjaan" />
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
