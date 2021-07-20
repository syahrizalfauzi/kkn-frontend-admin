import { utils, writeFile } from "xlsx";
import moment from "moment";

export default (records) => {
  const kases = records.map((record) => {
    const { no, tanggal, ref, debit, kredit, rincian } = record;

    const date = moment(tanggal).format("DD/MM/YYYY");

    return {
      "No.": no,
      Tanggal: date,
      Ref: ref,
      Debit : debit,
      Kredit: kredit,
      Rincian: rincian,
    };
  });
  const worksheet = utils.json_to_sheet(kases);
  const date = new Date();
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Kas");
  writeFile(workbook, `Buku Kas PTSB RT 01 ${date}.xlsx`);
};
