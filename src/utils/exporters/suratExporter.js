import { utils, writeFile } from "xlsx";
import moment from "moment";

export default (records) => {
  const surats = records.map((record) => {
    const { no, perihal, isi, tanggal, pengirim, keterangan } = record;

    const date = moment(tanggal).format("DD/MM/YYYY");

    return {
      "No.": no,
      Perihal: perihal,
      Isi: isi,
      Tanggal: date,
      Pengirim: pengirim,
      Keterangan: keterangan,
    };
  });
  const worksheet = utils.json_to_sheet(surats);
  const date = new Date();
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Surat");
  writeFile(workbook, `Daftar Surat PTSB RT 01 ${date}.xlsx`);
};
