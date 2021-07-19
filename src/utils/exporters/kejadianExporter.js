import { utils, writeFile } from "xlsx";
import moment from "moment";

export default (records) => {
  const kejadians = records.map((record) => {
    const { nama, deskripsi, tanggal } = record;

    const date = moment(tanggal).format("DD/MM/YYYY");

    return {
      Nama: nama,
      Deskripsi: deskripsi,
      Tanggal: date,
    };
  });
  const worksheet = utils.json_to_sheet(kejadians);
  const date = new Date();
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Kejadian");
  writeFile(workbook, `Daftar Kejadian PTSB RT 01 ${date}.xlsx`);
};
