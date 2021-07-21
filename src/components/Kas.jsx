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
} from "react-admin";
import { numberValidator, requiredValidator } from '../utils/validators';
import kasExporter from "../utils/exporters/kasExporter";

export const KasList = (props) => (
  <List {...props} title="Daftar Kas" exporter={kasExporter}>
    <Datagrid rowClick="edit">
      <TextField source="no" label="No." />
      <DateField source="tanggal" locales="id-ID" />
      <TextField source="ref" />
      <NumberField source="debit" label="Pemasukan" />
      <NumberField source="kredit" label="Pengeluaran" />
      <TextField source="rincian" />
    </Datagrid>
  </List>
);

export const KasEdit = (props) => (
  <Edit {...props} title="Ubah Data Kas">
    <SimpleForm>
      <NumberInput validate={numberValidator} source="no" label="No." />
      <DateInput
        validate={requiredValidator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
      <TextInput validate={requiredValidator} source="ref" />
      <NumberInput validate={numberValidator} source="debit" label="Pemasukan" defaultValue={0} />
      <NumberInput validate={numberValidator} source="kredit" label="Pengeluaran" defaultValue={0} />
      <TextInput source="rincian" multiline />
    </SimpleForm>
  </Edit>
);

export const KasCreate = (props) => (
  <Create {...props} title="Buat Data Kas">
    <SimpleForm>
      <NumberInput validate={numberValidator} source="no" label="No." />
      <DateInput
        validate={requiredValidator}
        source="tanggal"
        options={{ format: "DD/MM/YYYY" }}
      />
      <TextInput validate={requiredValidator} source="ref" />
      <NumberInput validate={numberValidator} source="debit" label="Pemasukan" defaultValue={0} />
      <NumberInput validate={numberValidator} source="kredit" label="Pengeluaran" defaultValue={0} />
      <TextInput source="rincian" multiline />
    </SimpleForm>
  </Create>
);

export const KasShow = (props) => (
  <Show {...props} title="Detail Data Kas">
    <SimpleShowLayout>
      <TextField source="no" label="No." />
      <DateField source="tanggal" locales="id-ID" />
      <TextField source="ref" />
      <NumberField source="debit" label="Pemasukan" />
      <NumberField source="kredit" label="Pengeluaran" />
      <TextField source="rincian" />
    </SimpleShowLayout>
  </Show>
);
