import { utils, writeFile } from "xlsx";
import moment from "moment";

export default (records) => {
  const iurans = records.map((record) => {
    const { nik, nama, nama_iuran, nominal, tanggal, status, keterangan } =
      record;

    const date = moment(tanggal).format("DD/MM/YYYY");

    return {
      NIK: nik.toString(),
      Nama: nama,
      "Nama Iuran": nama_iuran,
      Nominal: nominal,
      Tanggal: date,
      "Status Pembayaran": status ? "Sudah Lunas" : "Belum Lunas",
      Keterangan: keterangan,
    };
  });
  const worksheet = utils.json_to_sheet(iurans);
  const date = new Date();
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Iuran");
  writeFile(workbook, `Daftar Iuran PTSB RT 01 ${date}.xlsx`);
};
