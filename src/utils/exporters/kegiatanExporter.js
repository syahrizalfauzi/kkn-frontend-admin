import { utils, writeFile } from "xlsx";
import moment from "moment";

export default (records) => {
  const kegiatans = records.map((record) => {
    const { nama, deskripsi, tanggal, tempat, jumlah_peserta } = record;

    const date = moment(tanggal).format("DD/MM/YYYY");

    return {
      Nama: nama,
      Deskripsi: deskripsi,
      Tanggal: date,
      Tempat: tempat,
      "Jumlah Peserta": jumlah_peserta,
    };
  });
  const worksheet = utils.json_to_sheet(kegiatans);
  const date = new Date();
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Kegiatan");
  writeFile(workbook, `Daftar Kegiatan PTSB RT 01 ${date}.xlsx`);
};
