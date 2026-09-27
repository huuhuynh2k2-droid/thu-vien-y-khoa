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
      note: "Điểm lại 5 thành phần của Hour-1 Bundle theo hướng dẫn SSC 2026: đo lactate, cấy máu trước kháng sinh, kháng sinh phổ rộng, dịch tinh thể (30 mL/kg chỉ là điểm khởi đầu), thuốc vận mạch (norepinephrine sớm, MAP khoảng 65 mmHg).",
      updated: "2026-09-27", url: "docs/hour1-sepsis-bundle.html" },

    { id: "ada-2026-muc-tieu-duong-huyet", sp: "nt", title: "Mục tiêu đường huyết, hạ đường huyết và cơn tăng đường huyết cấp",
      org: "ADA Standards of Care — Chương 6", year: 2026, doi: "https://doi.org/10.2337/dc26-S006", status: 2,
      cat: "Đái tháo đường",
      note: "Mục tiêu A1C/TIR cá thể hóa, đánh giá và phòng ngừa hạ đường huyết, xử trí DKA/HHS.",
      updated: "2026-09-16", url: "https://huuhuynh2k2-droid.github.io/muc-tieu-duong-huyet/" },

    { id: "ada-2026-quan-ly-dh-noi-vien", sp: "nt", title: "Quản lý đường huyết nội viện",
      org: "ADA Standards of Care — Chương 16", year: 2026, doi: "", status: 2,
      cat: "Đái tháo đường · Nội viện",
      note: "Mục tiêu đường huyết ICU/ngoài ICU, phác đồ insulin theo bối cảnh (hồi sức, nuôi ăn qua sonde, dùng corticoid), xử trí quanh phẫu thuật.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/ki-m-so-t-ng-huy-t/" },

    { id: "nt-cuong-giap-ata", sp: "nt", title: "Chẩn đoán và xử trí cường giáp",
      org: "ATA", year: 2016, doi: "", status: 2,
      cat: "Tuyến giáp",
      note: "Trang ghi \"ATA 2016\" (124 khuyến cáo, 5 phần) — sheet gốc ghi năm 2026, cần bạn xác nhận lại năm đúng.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/Tuyen-giap-ATA-2026/" },

    { id: "nt-cuong-giap-2018", sp: "nt", title: "Xử trí cường giáp",
      org: "ETA", year: 2018, doi: "", status: 2,
      cat: "Tuyến giáp · Basedow",
      note: "Trang ghi \"ETA 2018\" (Hiệp hội Giáp châu Âu) — sheet gốc ghi \"ATA\", cần bạn xác nhận lại tổ chức ban hành.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/C-ng-Gi-p-ATA-2018/" },

    { id: "nt-suy-thuong-than-gc", sp: "nt", title: "Chẩn đoán và xử trí suy thượng thận do GC",
      org: "", year: 2024, doi: "", status: 0,
      cat: "",
      note: "Chưa tìm thấy bản dịch khớp trong các repo GitHub hiện có — gửi lại link/PDF nếu đã soạn, hoặc để Claude soạn mới.",
      updated: "", url: "" },

    { id: "tq-tang-kali-mau-cap", sp: "tq", title: "Chẩn đoán và xử trí tăng kali máu cấp",
      org: "BMJ / KDIGO / ERC", year: 2026, doi: "https://doi.org/10.1136/bmj-2026-100287", status: 2,
      cat: "Rối loạn điện giải · Cấp cứu nội khoa",
      note: "Chiến lược 3 bước cấp cứu: ổn định màng cơ tim (Calcium IV), đưa K+ vào nội bào (Insulin+Glucose, Salbutamol), tăng thải K+ (lợi tiểu, resin, lọc máu).",
      updated: "2026-09-16", url: "https://huuhuynh2k2-droid.github.io/tangkali/" },

    { id: "tq-kali-nen-ecg", sp: "tq", title: "Kali máu nền và biến đổi ECG trong tăng kali máu",
      org: "Nakayama 2025", year: 2025, doi: "https://doi.org/10.1111/nep.70100", status: 2,
      cat: "Rối loạn điện giải · ECG",
      note: "Bệnh nhân có kali nền thấp có nguy cơ biến đổi ECG cao hơn khi tăng kali máu; mức thay đổi kali (ΔK) dự đoán tốt hơn giá trị tuyệt đối.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/ecg-kalinen-tang-kalimau/" },

    { id: "tq-tuong-quan-kali-ecg", sp: "tq", title: "Tương quan mức tăng kali máu và biến đổi ECG",
      org: "", year: null, doi: "", status: 2,
      cat: "Rối loạn điện giải · ECG",
      note: "Khớp tạm với bài \"ECG và tăng kali máu — tổng hợp 34 năm nghiên cứu (1991–2025)\": ECG có độ nhạy thấp (19–74%), QRS giãn rộng và nhịp chậm có giá trị dự đoán hơn sóng T nhọn kinh điển. Cần bạn xác nhận đúng bài.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/ecg-tangkali-mau/" },

    { id: "tq-dieu-tri-ha-kali", sp: "tq", title: "Điều trị hạ kali máu",
      org: "Oxford University Hospitals NHS", year: 2022, doi: "", status: 2,
      cat: "Rối loạn điện giải",
      note: "Định nghĩa, nguyên nhân, đường uống và tĩnh mạch, liều dùng và theo dõi, giới hạn an toàn khi bù kali.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/ha-kali-mau/" }
  ]
};
