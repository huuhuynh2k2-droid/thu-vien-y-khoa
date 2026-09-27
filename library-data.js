// Dữ liệu danh mục thư viện. Claude cập nhật file này mỗi khi có bài mới.
// status: 2 = Đã hoàn thành (đã có bản dịch), 1 = Đang biên soạn, 0 = Chưa soạn / cần cập nhật
window.LIBRARY = {
  updated: "2026-09-27",
  dashboardUrl: "https://huuhuynh2k2-droid.github.io/on-thi-dashboard/",
  specialties: [
    { id: "tm",  name: "Tim mạch",             en: "Cardiology" },
    { id: "hh",  name: "Hô hấp",               en: "Pulmonology" },
    { id: "th",  name: "Tiêu hóa",             en: "Gastroenterology" },
    { id: "than",name: "Thận",                 en: "Nephrology" },
    { id: "cxk", name: "Cơ xương khớp",        en: "Rheumatology" },
    { id: "nt",  name: "Nội tiết",             en: "Endocrinology" },
    { id: "tk",  name: "Thần kinh",            en: "Neurology" },
    { id: "tq",  name: "Tổng quát",            en: "General Internal Medicine" },
    { id: "hscc",name: "Hồi sức – Cấp cứu",    en: "Critical Care & Emergency" }
  ],
  items: [
    { id: "hour1-sepsis-bundle", sp: "hscc", title: "Hour-1 Sepsis Bundle: cập nhật bằng chứng (Gói can thiệp Hour-1 trong sepsis)",
      org: "J. Clin. Med. (bài tổng quan về hướng dẫn SSC 2026)", year: 2026, doi: "https://doi.org/10.3390/jcm15156049", status: 2,
      cat: "Sepsis và sốc nhiễm khuẩn · Bài tổng quan",
      note: "Điểm lại 5 thành phần của Hour-1 Bundle theo hướng dẫn SSC 2026: đo lactate, cấy máu trước kháng sinh, kháng sinh phổ rộng, dịch tinh thể (30 mL/kg chỉ là điểm khởi đầu, không phải chỉ tiêu bắt buộc), thuốc vận mạch (norepinephrine sớm, MAP khoảng 65 mmHg). Tuân thủ bundle liên quan kết cục tốt hơn trong nghiên cứu quan sát nhưng bằng chứng ngẫu nhiên chưa nhất quán.",
      updated: "2026-09-27", url: "docs/hour1-sepsis-bundle.html" },

    // ---- nhập từ ảnh chụp Google Sheet "Khuyến cáo Y khoa Cập nhật" (ghi chú lâm sàng và link bản dịch sẽ bổ sung) ----
    { id: "ada-2026-muc-tieu-duong-huyet", sp: "nt", title: "Mục tiêu đường huyết, hạ đường huyết và cơn tăng đường huyết cấp",
      org: "ADA", year: 2026, doi: "https://doi.org/10.2337/dc26-S006", status: 2, cat: "Đái tháo đường", note: "", updated: "2026-09-16", url: "" },
    { id: "nt-quan-ly-dh-noi-vien", sp: "nt", title: "Quản lý đường huyết nội viện", org: "", year: 2026, doi: "", status: 0, cat: "", note: "", updated: "", url: "" },
    { id: "nt-cuong-giap-ata-2026", sp: "nt", title: "Chẩn đoán và xử trí cường giáp", org: "ATA", year: 2026, doi: "", status: 0, cat: "", note: "", updated: "", url: "" },
    { id: "nt-cuong-giap-ata-2018", sp: "nt", title: "Xử trí cường giáp", org: "ATA", year: 2018, doi: "", status: 0, cat: "", note: "", updated: "", url: "" },
    { id: "nt-suy-thuong-than-gc", sp: "nt", title: "Chẩn đoán và xử trí suy thượng thận do GC", org: "", year: 2024, doi: "", status: 0, cat: "", note: "", updated: "", url: "" },

    { id: "tq-tang-kali-mau-cap", sp: "tq", title: "Chẩn đoán và xử trí tăng kali máu cấp", org: "BMJ / KDIGO / ERC", year: 2026,
      doi: "https://doi.org/10.1136/bmj-2026-100287", status: 2, cat: "Rối loạn điện giải · Cấp cứu nội khoa", note: "", updated: "2026-09-16", url: "" },
    { id: "tq-kali-nen-ecg", sp: "tq", title: "Kali máu nền và biến đổi ECG trong tăng kali máu", org: "", year: null,
      doi: "https://doi.org/10.1111/nep.70100", status: 2, cat: "", note: "", updated: "", url: "" },
    { id: "tq-tuong-quan-kali-ecg", sp: "tq", title: "Tương quan mức tăng kali máu và biến đổi ECG", org: "", year: null, doi: "", status: 0, cat: "", note: "", updated: "", url: "" },
    { id: "tq-dieu-tri-ha-kali", sp: "tq", title: "Điều trị hạ kali máu", org: "", year: null, doi: "", status: 0, cat: "", note: "", updated: "", url: "" }
  ]
};
