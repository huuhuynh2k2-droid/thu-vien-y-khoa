// Dữ liệu danh mục thư viện. Claude cập nhật file này mỗi khi có bài mới.
// status: 2 = Đã hoàn thành (đã có bản dịch), 1 = Đang biên soạn, 0 = Chưa soạn / cần cập nhật
//
// "topic" = chủ đề bệnh/nhóm bệnh dùng để GOM NHÓM các bài trong cùng 1 chuyên khoa
// (ví dụ trong "nt" có các topic "Đái tháo đường", "Tuyến giáp", "Tuyến thượng thận";
// trong "tq" có topic "Rối loạn điện giải"...). Khi thêm 1 bài thuộc chủ đề CHƯA có
// trong chuyên khoa đó (ví dụ bài Viêm phổi đầu tiên trong "hh"), tự đặt tên topic mới
// hợp lý (ví dụ "Nhiễm trùng hô hấp") — không cần hỏi lại, trang sẽ tự tạo nhóm mới.
window.LIBRARY = {
  updated: "2026-09-27",
  dashboardUrl: "https://huuhuynh2k2-droid.github.io/on-thi-dashboard/",
  // "topic" mới trong "tm" (Tim mạch): "Kháng kết tập tiểu cầu" — nhóm này chưa từng có bài
  // nào trước đó nên tự tạo mới theo hướng dẫn ở trên.
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
    { id: "tm-dyslipidemia-2026-p1", sp: "tm", topic: "Rối loạn lipid máu", title: "2026 ACC/AHA Guideline Quản lý Rối loạn lipid máu — Phần 1: Đánh giá, chẩn đoán & lối sống",
      org: "ACC/AHA (Circulation 2026;153:e1154–e1276)", year: 2026, doi: "https://doi.org/10.1161/CIR.0000000000001423", status: 1,
      cat: "Phần 1/3 · Đang biên soạn tiếp",
      note: "10 thông điệp chính, khung phân loại COR/LOE, định nghĩa CKM/ASCVD, sàng lọc, đo TC/LDL-C/HDL-C/TG/non-HDL-C (công thức Martin/Hopkins, Sampson/NIH), đo ApoB, đo Lp(a) (kèm bảng nguy cơ), theo dõi & bảng mục tiêu lipoprotein đầy đủ theo 6 nhóm bệnh nhân, quản lý lối sống (dinh dưỡng LDL-C và TG, cân nặng, vận động, TPCN, khi nào chuyển chuyên gia dinh dưỡng). Phần 2–3 (điều trị dược lý, PREVENT-ASCVD, LDL-C rất cao/FH, đái tháo đường, phòng ngừa thứ phát, TG cao, Lp(a) cao, tác dụng phụ statin) sẽ cập nhật tiếp vào cùng bài này.",
      updated: "2026-09-27", url: "docs/dyslipidemia-2026-phan1.html" },

    { id: "tm-aspirin-lam-sang-hien-dai", sp: "tm", topic: "Kháng kết tập tiểu cầu", title: "Vị thế của Aspirin trong dòng chảy Tim mạch hiện đại — Tổng hợp lâm sàng",
      org: "Bài giảng BS. Trần Tuấn Anh — tổng hợp từ các RCT và khuyến cáo 2026", year: 2026, doi: "", status: 2,
      cat: "Aspirin & DAPT",
      note: "Từ vỏ liễu đến cơ chế phân tử; 3 RCT bản lề 2018 đã đổi hướng dự phòng tiên phát; so sánh Aspirin/Clopidogrel/Ticagrelor/Prasugrel, CYP2C19 và \"nghịch lý Đông Á\"; DAPT sau ACS/PCI, xu hướng rút ngắn và xuống thang; PREMIUM (bỏ Aspirin từ đầu trong STEMI cấp?), A-CLOSE (duy trì Aspirin hay Clopidogrel sau 12 tháng); thuật toán quyết định kháng kết tập tiểu cầu theo mốc thời gian sau PCI.",
      updated: "2026-09-27", url: "https://huuhuynh2k2-droid.github.io/aspirin-trong-lam-sang-hien-dai/" },

    { id: "hour1-sepsis-bundle", sp: "hscc", topic: "Sepsis và sốc nhiễm khuẩn", title: "Hour-1 Sepsis Bundle: cập nhật bằng chứng (Gói can thiệp Hour-1 trong sepsis)",
      org: "J. Clin. Med. (bài tổng quan về hướng dẫn SSC 2026)", year: 2026, doi: "https://doi.org/10.3390/jcm15156049", status: 2,
      cat: "Bài tổng quan",
      note: "Điểm lại 5 thành phần của Hour-1 Bundle theo hướng dẫn SSC 2026: đo lactate, cấy máu trước kháng sinh, kháng sinh phổ rộng, dịch tinh thể (30 mL/kg chỉ là điểm khởi đầu), thuốc vận mạch (norepinephrine sớm, MAP khoảng 65 mmHg).",
      updated: "2026-09-27", url: "docs/hour1-sepsis-bundle.html" },

    { id: "ada-2026-muc-tieu-duong-huyet", sp: "nt", topic: "Đái tháo đường", title: "Mục tiêu đường huyết, hạ đường huyết và cơn tăng đường huyết cấp",
      org: "ADA Standards of Care — Chương 6", year: 2026, doi: "https://doi.org/10.2337/dc26-S006", status: 2,
      cat: "",
      note: "Mục tiêu A1C/TIR cá thể hóa, đánh giá và phòng ngừa hạ đường huyết, xử trí DKA/HHS.",
      updated: "2026-09-16", url: "https://huuhuynh2k2-droid.github.io/muc-tieu-duong-huyet/" },

    { id: "ada-2026-quan-ly-dh-noi-vien", sp: "nt", topic: "Đái tháo đường", title: "Quản lý đường huyết nội viện",
      org: "ADA Standards of Care — Chương 16", year: 2026, doi: "", status: 2,
      cat: "Nội viện",
      note: "Mục tiêu đường huyết ICU/ngoài ICU, phác đồ insulin theo bối cảnh (hồi sức, nuôi ăn qua sonde, dùng corticoid), xử trí quanh phẫu thuật.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/ki-m-so-t-ng-huy-t/" },

    { id: "nt-tang-duong-huyet-noi-tru", sp: "nt", topic: "Đái tháo đường", title: "Quản lý tăng đường huyết ở bệnh nhân nội trú",
      org: "Annals of Internal Medicine — In the Clinic", year: 2024, doi: "https://doi.org/10.7326/ANNALS-24-02754", status: 2,
      cat: "Nội viện",
      note: "Bài In the Clinic đầy đủ: định nghĩa và mục tiêu đường huyết nội trú, 3 bước khởi động insulin dưới da (kèm sơ đồ gốc), thang hiệu chỉnh, DPP4i/SGLT2i/GLP-1RA, xử trí hạ đường huyết, tăng đường huyết do glucocorticoid (kèm sơ đồ liều NPH), chu phẫu, nuôi ăn qua sonde/PN, CGM, bơm insulin, và danh mục xuất viện — kèm 4 ví dụ ca lâm sàng tính liều insulin.",
      updated: "2026-09-27", url: "docs/hyperglycemia-hospitalized.html" },

    { id: "nt-cuong-giap-ata", sp: "nt", topic: "Tuyến giáp", title: "Chẩn đoán và xử trí cường giáp",
      org: "ATA", year: 2016, doi: "", status: 2,
      cat: "Basedow / cường giáp",
      note: "124 khuyến cáo dựa trên bằng chứng, chia 5 phần: nền tảng chẩn đoán, điều trị Basedow (RAI/ATD/phẫu thuật), bướu giáp đa nhân độc, cường giáp trẻ em, cường giáp dưới lâm sàng và thai kỳ, bệnh mắt Basedow.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/Tuyen-giap-ATA-2026/" },

    { id: "nt-cuong-giap-2018", sp: "nt", topic: "Tuyến giáp", title: "Xử trí cường giáp Basedow",
      org: "ETA", year: 2018, doi: "", status: 2,
      cat: "Basedow / cường giáp",
      note: "Hướng dẫn của Hiệp hội Giáp châu Âu (ETA) 2018, 50 khuyến cáo theo hệ GRADE: xét nghiệm, chẩn đoán hình ảnh, kháng giáp tổng hợp, I-131, phẫu thuật, và các nhóm đặc biệt (thai kỳ, cao tuổi, trẻ em).",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/C-ng-Gi-p-ATA-2018/" },

    { id: "nt-suy-thuong-than-gc", sp: "nt", topic: "Tuyến thượng thận", title: "Suy thượng thận do Glucocorticoid — Chẩn đoán và Điều trị",
      org: "ESE / Endocrine Society", year: 2024, doi: "https://doi.org/10.1210/clinem/dgae250", status: 2,
      cat: "",
      note: "Hướng dẫn phối hợp ESE/Endocrine Society 2024: tư vấn khi dùng glucocorticoid kéo dài, giảm liều và chẩn đoán suy thượng thận do GC, xử trí cơn suy thượng thận cấp.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/chot-suy/" },

    { id: "tq-tang-kali-mau-cap", sp: "tq", topic: "Rối loạn điện giải", title: "Chẩn đoán và xử trí tăng kali máu cấp",
      org: "BMJ / KDIGO / ERC", year: 2026, doi: "https://doi.org/10.1136/bmj-2026-100287", status: 2,
      cat: "Tăng kali máu · Cấp cứu",
      note: "Chiến lược 3 bước cấp cứu: ổn định màng cơ tim (Calcium IV), đưa K+ vào nội bào (Insulin+Glucose, Salbutamol), tăng thải K+ (lợi tiểu, resin, lọc máu).",
      updated: "2026-09-16", url: "https://huuhuynh2k2-droid.github.io/tangkali/" },

    { id: "tq-kali-nen-ecg", sp: "tq", topic: "Rối loạn điện giải", title: "Kali máu nền và biến đổi ECG trong tăng kali máu",
      org: "Nakayama 2025", year: 2025, doi: "https://doi.org/10.1111/nep.70100", status: 2,
      cat: "Tăng kali máu · ECG",
      note: "Bệnh nhân có kali nền thấp có nguy cơ biến đổi ECG cao hơn khi tăng kali máu; mức thay đổi kali (ΔK) dự đoán tốt hơn giá trị tuyệt đối.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/ecg-kalinen-tang-kalimau/" },

    { id: "tq-tuong-quan-kali-ecg", sp: "tq", topic: "Rối loạn điện giải", title: "ECG và tăng kali máu — Tổng hợp 34 năm nghiên cứu (1991–2025)",
      org: "", year: null, doi: "", status: 2,
      cat: "Tăng kali máu · ECG",
      note: "Dòng thời gian 11 nghiên cứu mốc, 4 giai đoạn (1991–2025) về tương quan mức tăng kali máu và biến đổi ECG. ECG có độ nhạy thấp (19–74%); QRS giãn rộng và nhịp chậm dự đoán tốt hơn sóng T nhọn kinh điển.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/ecg-tangkali-mau/" },

    { id: "tq-dieu-tri-ha-kali", sp: "tq", topic: "Rối loạn điện giải", title: "Điều trị hạ kali máu",
      org: "Oxford University Hospitals NHS", year: 2022, doi: "", status: 2,
      cat: "Hạ kali máu",
      note: "Định nghĩa, nguyên nhân, đường uống và tĩnh mạch, liều dùng và theo dõi, giới hạn an toàn khi bù kali.",
      updated: "", url: "https://huuhuynh2k2-droid.github.io/ha-kali-mau/" }
  ]
};
