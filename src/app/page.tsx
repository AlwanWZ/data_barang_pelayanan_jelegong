
const dataBarang = [
  {
    nama: "Meja Pelayanan",
    kode: "BRG-001",
    lokasi: "Ruang Pelayanan",
    kondisi: "Baik",
    tahun: 2022,
  },
  {
    nama: "Kursi Tunggu",
    kode: "BRG-002",
    lokasi: "Ruang Pelayanan",
    kondisi: "Baik",
    tahun: 2021,
  },
  {
    nama: "Komputer",
    kode: "BRG-003",
    lokasi: "Ruang Pelayanan",
    kondisi: "Cukup",
    tahun: 2020,
  },
  {
    nama: "Printer",
    kode: "BRG-004",
    lokasi: "Ruang Pelayanan",
    kondisi: "Baik",
    tahun: 2021,
  },
  {
    nama: "Lemari Arsip",
    kode: "BRG-005",
    lokasi: "Ruang Pelayanan",
    kondisi: "Baik",
    tahun: 2019,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-10 px-4 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#2563eb] relative overflow-hidden">
      {/* Efek glow di background */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-500 opacity-30 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-400 opacity-20 rounded-full blur-2xl z-0 animate-pulse" />
      <h1 className="relative z-10 text-3xl sm:text-4xl font-extrabold mb-8 text-white drop-shadow-xl text-center tracking-tight">Data Barang Ruangan Pelayanan Desa</h1>
      <div className="relative z-10 overflow-x-auto w-full max-w-4xl rounded-2xl bg-white/10 backdrop-blur-xl border border-blue-200/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]">
        <table className="min-w-full text-sm sm:text-base text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600/80 to-blue-400/80 text-white">
              <th className="py-3 px-4 rounded-tl-2xl">No</th>
              <th className="py-3 px-4">Nama Barang</th>
              <th className="py-3 px-4">Kode</th>
              <th className="py-3 px-4">Lokasi</th>
              <th className="py-3 px-4">Kondisi</th>
              <th className="py-3 px-4 rounded-tr-2xl">Tahun</th>
            </tr>
          </thead>
          <tbody>
            {dataBarang.map((barang, idx) => (
              <tr
                key={barang.kode}
                className="hover:bg-blue-400/20 transition-colors border-b border-blue-200/30 last:border-b-0"
              >
                <td className="py-2 px-4 font-semibold text-center text-white/90">{idx + 1}</td>
                <td className="py-2 px-4 text-white/90">{barang.nama}</td>
                <td className="py-2 px-4 text-white/90">{barang.kode}</td>
                <td className="py-2 px-4 text-white/90">{barang.lokasi}</td>
                <td className="py-2 px-4">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-bold shadow-sm ${
                      barang.kondisi === "Baik"
                        ? "bg-green-400/80 text-white"
                        : barang.kondisi === "Cukup"
                        ? "bg-yellow-400/80 text-white"
                        : "bg-red-400/80 text-white"
                    }`}
                  >
                    {barang.kondisi}
                  </span>
                </td>
                <td className="py-2 px-4 text-center text-white/90">{barang.tahun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="relative z-10 mt-10 text-xs text-blue-100 text-center drop-shadow">&copy; {new Date().getFullYear()} Desa Pelayanan. All rights reserved.</footer>
    </div>
  );
}
