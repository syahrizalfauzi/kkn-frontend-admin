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

export const WargaList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nik" />
      <TextField source="nama" />
      <TextField source="jabatan" />
      <TextField source="jenis_kelamin" />
      <TextField source="tempat_lahir" />
      <DateField source="tanggal_lahir" />
      <TextField source="status_perkawinan" />
      <TextField source="agama" />
      <TextField source="alamat" />
      <TextField source="pendidikan" />
      <TextField source="pekerjaan" />
    </Datagrid>
  </List>
);

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
export const WargaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput required source="nik" />
      <TextInput required source="nama" />
      <TextInput required source="jabatan" />
      <SelectInput required source="jenis_kelamin" choices={kelaminChoices} />
      <TextInput required source="tempat_lahir" />
      <DateInput required source="tanggal_lahir" />
      <SelectInput
        required
        source="status_perkawinan"
        choices={perkawinanChoices}
      />
      <TextInput required source="agama" />
      <TextInput required source="alamat" />
      <TextInput required source="pendidikan" />
      <TextInput required source="pekerjaan" />
    </SimpleForm>
  </Edit>
);
export const WargaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput required source="nik" />
      <TextInput required source="nama" />
      <TextInput required source="jabatan" />
      <SelectInput required source="jenis_kelamin" choices={kelaminChoices} />
      <TextInput required source="tempat_lahir" />
      <DateInput required source="tanggal_lahir" />
      <SelectInput
        required
        source="status_perkawinan"
        choices={perkawinanChoices}
      />
      <TextInput required source="agama" />
      <TextInput required source="alamat" />
      <TextInput required source="pendidikan" />
      <TextInput required source="pekerjaan" />
    </SimpleForm>
  </Create>
);

export const WargaShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="nik" />
      <TextField source="nama" />
      <TextField source="jabatan" />
      <TextField source="jenis_kelamin" />
      <TextField source="tempat_lahir" />
      <DateField source="tanggal_lahir" />
      <TextField source="status_perkawinan" />
      <TextField source="agama" />
      <TextField source="alamat" />
      <TextField source="pendidikan" />
      <TextField source="pekerjaan" />
    </SimpleShowLayout>
  </Show>
);
