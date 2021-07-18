import { utils, writeFile } from "xlsx";
import moment from "moment";

export const wargaExporter = (records) => {
  const wargas = records.map((record) => {
    const {
      nik,
      nama,
      jabatan,
      jenis_kelamin,
      tempat_lahir,
      tanggal_lahir,
      status_perkawinan,
      agama,
      alamat,
      pendidikan,
      pekerjaan,
    } = record;

    const tanggal = moment(tanggal_lahir).format("DD/MM/YYYY");

    return {
      NIK: nik.toString(),
      Nama: nama,
      Jabatan: jabatan,
      "Jenis Kelamin": jenis_kelamin,
      "Tempat Lahir": tempat_lahir,
      "Tanggal Lahir": tanggal,
      "Status Perkawinan": status_perkawinan,
      Agama: agama,
      Alamat: alamat,
      Pendidikan: pendidikan,
      Pekerjaan: pekerjaan,
    };
  });
  const worksheet = utils.json_to_sheet(wargas);
  const date = new Date();
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Warga");
  writeFile(workbook, `Daftar Warga PTSB RT 01 ${date}.xlsx`);
};
