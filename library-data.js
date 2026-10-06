// Dữ liệu danh mục thư viện. Claude cập nhật file này mỗi khi có bài mới.
// status: 2 = Đã hoàn thành (đã có bản dịch), 1 = Đang biên soạn, 0 = Chưa soạn / cần cập nhật
//
// "topic" = chủ đề bệnh/nhóm bệnh dùng để GOM NHÓM các bài trong cùng 1 chuyên khoa
// (ví dụ trong "nt" có các topic "Đái tháo đường", "Tuyến giáp", "Tuyến thượng thận";
// trong "tq" có topic "Rối loạn điện giải"...). Khi thêm 1 bài thuộc chủ đề CHƯA có
// trong chuyên khoa đó (ví dụ bài Viêm phổi đầu tiên trong "hh"), tự đặt tên topic mới
// hợp lý (ví dụ "Nhiễm trùng hô hấp") — không cần hỏi lại, trang sẽ tự tạo nhóm mới.
window.LIBRARY = {
  updated: "2026-10-06",
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
    { id: "hscc",name: "Hồi sức – Cấp cứu",    en: "Critical Care & Emergency" },
    { id: "cls", name: "Cận lâm sàng",         en: "Laboratory & Diagnostics" }
  ],
  items: [
    // "topic" mới trong "th" (Tiêu hóa): "Xơ gan" — chuyên khoa "th" chưa có bài nào trước đó, tự tạo mới theo hướng dẫn ở trên.
    { id: "th-bang-bung-xo-gan-bsg2020", sp: "th", topic: "Xơ gan",
      title: "Báng bụng ở bệnh nhân xơ gan — Chẩn đoán, kỹ thuật chọc tháo dịch báng và điều trị",
      org: "BSG 2020 (Gut 2021) · slide BS Trần Tuấn Anh · bổ sung AASLD 2021/EASL 2018/Baveno VII", year: 2021,
      doi: "https://doi.org/10.1136/gutjnl-2020-321790", status: 2,
      cat: "Guideline · Thủ thuật · Bản tổng hợp/biên soạn lại · Hình gốc + 2 sơ đồ tự vẽ",
      note: "Cơ chế giữ muối nước (RAAS/giao cảm/ADH), phân độ báng ICA và tiêu chí báng kháng trị; chọc dò chẩn đoán (ống mẫu, SAAG × protein, ADA/BNP/TG/bilirubin dịch); đọc đại thể dịch báng (trong, vàng rơm, vàng chanh, đục, dưỡng chấp, máu, nâu mật) kèm hình thật; kỹ thuật chọc tháo: không ngưỡng INR/tiểu cầu, vị trí an toàn hố chậu trái cách đường giữa ≥ 8 cm & trên khớp mu ≥ 5 cm, Z-track, biến chứng, albumin 8 g/L khi > 5 L; SBP (PMN > 250, kháng sinh, albumin 1,5 → 1 g/kg, dự phòng); muối – lợi tiểu 100:40 – hạ Na; báng kháng trị (TIPS, NSBB, alfapump, giảm nhẹ); HRS-AKI; thoát vị rốn, tràn dịch màng phổi do gan; bảng so sánh BSG/AASLD/EASL và bẫy MCQ.",
      updated: "2026-10-05", url: "docs/bang-bung-xo-gan-choc-thao-dich-bang.html" },
    // "topic" mới trong "than" (Thận): "Tổn thương thận cấp" — chuyên khoa "than" chưa có bài nào trước đó, tự tạo mới theo hướng dẫn ở trên.
    { id: "than-kdigo2026-akiakd-ch1", sp: "than", topic: "Tổn thương thận cấp",
      title: "KDIGO 2026 AKI/AKD — Chương 1: Định nghĩa, Nhận diện, Phân loại (+ trẻ em, sơ sinh)",
      org: "KDIGO Clinical Practice Guideline (Public Review Draft, 3/2026)", year: 2026,
      doi: "https://kdigo.org/wp-content/uploads/2026/03/KDIGO-2026-AKI-AKD-Guideline-Public-Review-Draft-March-2026.pdf", status: 1,
      cat: "Guideline dự thảo (chưa chính thức) · Bản tổng hợp/viết lại (không dịch nguyên văn) · Sơ đồ tự vẽ",
      note: "Định nghĩa AKI (tiêu chí chức năng + cấu trúc, Bảng 1), hạn chế của creatinin/thể tích nước tiểu (Bảng 2), cách chọn creatinin nền phân cấp (Hình 1 tự vẽ), vai trò biomarker tổn thương (TIMP-2×IGFBP7, NGAL — Bảng 3-4), Khuyến cáo 1.1.1 (cystatin C, Grade 2B), phân độ 3 trục C/U/B (Bảng 6), AKI tạm thời/kéo dài (Bảng 7), định nghĩa AKD lấp khoảng trống AKI-CKD (Bảng 9, Hình 2 tự vẽ), tiêu chí phục hồi (Bảng 10), AKI tái phát, và toàn bộ phần trẻ em/sơ sinh (baseline phân cấp riêng — Hình 3 tự vẽ, tiêu chí AKI sơ sinh do vắng hiện tượng giảm SCr sinh lý — Bảng 12-13). Đây là bản DỰ THẢO lấy ý kiến công khai, ngưỡng có thể thay đổi trước khi ban hành chính thức — KDIGO 2012 vẫn là chuẩn hiện hành cho đến khi có bản cuối.",
      updated: "2026-09-29", url: "docs/kdigo-2026-aki-akd-chuong1.html" },

    // "topic" mới trong "tm": "Suy tim" — nhóm này chưa từng có bài nào trước đó nên tự tạo mới theo hướng dẫn ở trên.
    { id: "tm-hfpef-chau-a-2026", sp: "tm", topic: "Suy tim", title: "HFpEF tại châu Á — Đặc điểm lâm sàng và Chiến lược điều trị",
      org: "Tromp J, et al. JACC: Asia 2026 (State-of-the-Art Review)", year: 2026, doi: "https://doi.org/10.1016/j.jacasi.2026.08.009", status: 2,
      cat: "Suy tim phân suất tống máu bảo tồn · Tổng quan",
      note: "Bản dịch đầy đủ kèm Central Illustration (hình gốc): chẩn đoán HFpEF tại châu Á (HFA-PEFF/H2FPEF kém nhạy ở người châu Á, Bảng 1 so sánh 7 hướng dẫn quốc tế/khu vực, AI-ECG và siêu âm tim hỗ trợ AI); 3 phân nhóm chính (cao tuổi/rung nhĩ/tăng huyết áp, béo phì, \"gầy-đái tháo đường\" đặc thù châu Á với béo bụng ở BMI thấp); kết cục và tử vong theo vùng (Đông Nam Á vs Đông Bắc Á); điều trị: thất bại của ACEi/ARB/MRA cổ điển, bước đột phá SGLT2i (EMPEROR-Preserved, DELIVER), ns-MRA (FINEARTS-HF), GLP-1RA (STEP-HFpEF, SUMMIT) và giới hạn ngưỡng BMI phương Tây khi áp dụng cho người châu Á, khoảng trống chi phí-hiệu quả.",
      updated: "2026-09-28", url: "docs/hfpef-chau-a-2026.html" },

    { id: "tm-hfpef-nejm-2025", sp: "tm", topic: "Suy tim", title: "Suy tim phân suất tống máu bảo tồn (HFpEF) — Clinical Practice",
      org: "Cannata A, McDonagh TA. N Engl J Med 2025;392:173-84 (bản dịch: CLB Nội khoa ĐHYD TP.HCM)", year: 2025, doi: "https://doi.org/10.1056/NEJMcp2305181", status: 2,
      cat: "Suy tim phân suất tống máu bảo tồn · Clinical Practice",
      note: "Bản dịch đầy đủ (CLB Nội khoa – ĐH Y Dược TP.HCM: Minh Khôi Y20, Thiên Nhi Y21, Minh Quang Y22, Hoàng Phúc Y24) kèm 2 hình gốc: Hình 1 — lưu đồ thực hành chẩn đoán HFpEF (loại trừ các bệnh lý giả dạng: bệnh tim thoái hóa dạng bột, sarcoidosis, phì đại, bẩm sinh...; bảng chỉ điểm bất thường tim mạch lúc nghỉ/gắng sức); Hình 2 — forest plot hiệu quả SGLT2i/RAS-i/MRA trên 8 thử nghiệm (DELIVER, EMPEROR-Preserved, SOLOIST-WHF, PARAGON, CHARM, TOPCAT, FINEARTS-HF). Nội dung: dịch tễ và tiên lượng, chẩn đoán (NT-proBNP, loại trừ bệnh giả dạng, CMR/đo huyết động xâm lấn), điều trị bằng thuốc (RAS-i, ARNI — PARAGON-HF/PARAGLIDE-HF/PARALLAX, MRA — TOPCAT/FINEARTS-HF, chẹn beta, lợi tiểu, SGLT2i — EMPEROR-Preserved/DELIVER, GLP-1RA — STEP-HFpEF/SUMMIT), thiết bị (CardioMEMS, shunt liên nhĩ), Bảng 1 so sánh khuyến cáo liều dùng theo 5 guideline quốc tế (ACC/AHA, ESC, CCS-CCFS, JCS/JHFS, NHFA-CSANZ), và hướng dẫn thực hành lâm sàng quay lại ca bệnh mở đầu.",
      updated: "2026-09-28", url: "docs/hfpef-nejm-2025-clb-noikhoa.html" },

    { id: "tm-esc2026-suytim", sp: "tm", topic: "Suy tim", title: "ESC 2026 Guideline Suy tim — Bản tổng hợp/viết lại đầy đủ (5 phần)",
      org: "ESC Guidelines (Køber L, Adamo M, et al. Eur Heart J 2026)", year: 2026, doi: "https://doi.org/10.1093/eurheartj/ehag100", status: 2,
      cat: "Guideline mới nhất · Bản tổng hợp/viết lại (không dịch nguyên văn) · Trang chỉ mục 5 phần",
      note: "Trang chỉ mục dẫn vào bản tổng hợp và viết lại (kèm giải thích cơ chế, so sánh, bẫy thi MCQ, sơ đồ tự vẽ — không dịch nguyên văn) toàn bộ khuyến cáo ESC 2026 về suy tim, chia 5 phần: Phần 1 — định nghĩa/dịch tễ/phân loại/dự phòng/chẩn đoán (chương 1–5, gồm khung Class/Level mới, bỏ HFmrEF, đổi 'suy tim cấp' → 'suy tim mất bù', khung FMT/AMT/GDIT). Phần 2 — điều trị dược lý & can thiệp thiết bị suy tim mạn (chương 6: FMT/AMT theo kiểu hình LVEF, ICD/CRT, tạo nhịp hệ dẫn truyền). Phần 3 — suy tim mất bù (chương 7: 4 thể lâm sàng, SCAI A-E, thuật toán lợi tiểu uNa+-guided, hỗ trợ tuần hoàn cơ học tạm thời). Phần 4 — suy tim nặng/giai đoạn D (chương 8: tiêu chuẩn chẩn đoán, sàng lọc 'Rule of three'/'I NEED HELP', INTERMACS, LVAD BTT/BTC/BTR/liệu pháp đích, ghép tim, chăm sóc cuối đời). Phần 5 — bệnh đồng mắc tim mạch & ngoài tim mạch (chương 9–10: rung nhĩ/CHA2DS2-VA, bệnh mạch vành, bệnh van tim/TEER, tăng huyết áp, béo phì, đái tháo đường — bảng an toàn thuốc, bệnh thận mạn, thiếu sắt — định nghĩa mới TSAT<20%, rối loạn thở khi ngủ — ASV chống chỉ định ở ngưng thở trung ương, trầm cảm, suy yếu). Mỗi phần có sơ đồ SVG tự vẽ minh họa và bảng bẫy thi MCQ riêng.",
      updated: "2026-09-28", url: "docs/esc-2026-suy-tim-index.html" },

    { id: "tm-dyslipidemia-2026-p1", sp: "tm", topic: "Rối loạn lipid máu", title: "2026 ACC/AHA Guideline Quản lý Rối loạn lipid máu — Bản dịch đầy đủ",
      org: "ACC/AHA (Circulation 2026;153:e1154–e1276)", year: 2026, doi: "https://doi.org/10.1161/CIR.0000000000001423", status: 2,
      cat: "Đầy đủ · Guideline thay thế 2018",
      note: "Bản dịch đầy đủ, chia 3 phần đọc liền trong 1 trang: (1) Tóm tắt/10 thông điệp, khung COR/LOE, định nghĩa CKM/ASCVD, sàng lọc, đo TC/LDL-C/HDL-C/TG/non-HDL-C/ApoB/Lp(a), theo dõi & bảng mục tiêu lipoprotein, quản lý lối sống. (2) Điều trị dược lý (statin & không statin), PREVENT-ASCVD & khung CPR, yếu tố tăng nguy cơ/nguy cơ sinh sản/điểm đa gen, chỉ định CAC, tăng cholesterol máu nặng & FH/HoFH, đái tháo đường, phòng ngừa thứ phát, quản lý xơ vữa dưới lâm sàng, trẻ em/người trẻ/người cao tuổi. (3) Thai kỳ/cho con bú, chủng tộc/sắc tộc, suy tim, bệnh viêm mạn, CKD, HIV, ung thư, tăng triglyceride máu, tiếp cận Lp(a) cao, hội chứng cơ do statin, an toàn thuốc & tương tác thuốc, khoảng trống bằng chứng. 15 sơ đồ/thuật toán gốc được nhúng dạng ảnh; các bảng số liệu dựng lại thành HTML tiếng Việt.",
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

    { id: "cls-marker-viem-bc-crp-pct", sp: "cls", topic: "Marker viêm – nhiễm khuẩn", title: "Vai trò các marker phản ứng viêm trong bệnh nội khoa: Bạch cầu, CRP, Procalcitonin",
      org: "Chuyên đề tổng hợp: ADLM/AACC PCT guidance · SSC 2021 · IDSA/ATS 2019 · NICE · Sager BMC Med 2017 · AFP 2015 · CCJM 2019 · ProHOSP, PRORATA, SAPS, ProACT, ADAPT-Sepsis 2025", year: 2026,
      doi: "https://doi.org/10.1186/s12916-017-0795-7", status: 2,
      cat: "Chuyên đề cận lâm sàng · Tổng hợp nhiều nguồn · 4 sơ đồ tự vẽ · 18 bẫy MCQ",
      note: "Bản chất từng marker (BC: phân bố lại/demargination; CRP: gan–IL-6, gấp đôi mỗi 8 giờ, đỉnh 36–50 giờ, t½ 19 giờ; PCT: CALC-1 ngoài tuyến giáp, IFN-γ ức chế, t½ ~24 giờ), sơ đồ động học theo giờ; ngưỡng (hs-CRP, NICE CRP tại chỗ <20/20–100/>100; PCT <0,1/0,25/0,5), hiệu chỉnh suy thận; bảng nhạy/đặc hiệu theo bệnh cảnh (nhiễm khuẩn huyết, viêm màng não, CAP, COPD, sốt giảm BCTT, nội tâm mạc, tiết niệu, gout/viêm khớp NK, viêm tụy, xơ gan, lupus, sau mổ, COVID); dương tính/âm tính giả (tocilizumab, suy gan, lupus, corticoid, mổ lớn, sốc tim, suy thận, ổ khu trú); đọc phối hợp CRP–PCT; thuật toán PCT ngừng kháng sinh; ADAPT-Sepsis (PCT giảm, CRP không giảm ngày kháng sinh); kế hoạch theo dõi theo 11 bệnh cảnh; tiếp cận tăng bạch cầu.",
      updated: "2026-10-06", url: "docs/marker-viem-bach-cau-crp-procalcitonin.html" },

    { id: "nt-ada-easd-2026-dtd-tip2", sp: "nt", topic: "Đái tháo đường", title: "Đồng thuận ADA/EASD 2026 — Quản lý đái tháo đường típ 2 (bản dịch đầy đủ)",
      org: "ADA/EASD Consensus Report (Davies MJ, …, Buse JB). Diabetologia & Diabetes Care 2026", year: 2026,
      doi: "https://doi.org/10.1007/s00125-026-06855-7", status: 2,
      cat: "Đồng thuận mới nhất · Dịch đầy đủ từ PDF gốc (CC BY 4.0) · 6 hình gốc có giải thích · Bảng 1 dựng lại",
      note: "Dịch toàn văn kèm 6 hình gốc (Hình 1 chăm sóc tích hợp; Hình 2 mô hình ăn uống + bảng tác động; Hình 3a/3b năm chữ S và cách “kê đơn” vận động 24 giờ; Hình 4 sơ đồ chọn thuốc theo glucose/cân nặng/ASCVD/CKD/HF/MASLD; Hình 5 SGLT2i vs GLP-1 theo kiểu hình; Hình 6 hệ thống y tế học hỏi), Bảng 1 (8 nhóm thuốc × 12 thông số) dựng lại HTML, đủ 70 khuyến cáo đồng thuận. Điểm chính: SGLT2i và/hoặc liệu pháp dựa trên GLP-1 sớm có thể từ lúc chẩn đoán; phối hợp sớm khi CVD+CKD+suy tim; finerenone (eGFR >25, UACR >30 mg/g); semaglutide/tirzepatide trong HFpEF béo phì, MASH (ESSENCE, SYNERGY-NASH), OSA (SURMOUNT-OSA), PAD (STRIDE, SOUL); orforglipron, icodec, efsitora; phẫu thuật chuyển hóa BMI ≥27,5/32,5 ở người châu Á; sàng lọc tăng cortisol máu khi kháng trị; insulin nền sau GLP-1, ngừng sulfonylurea; DSMES 4 thời điểm; khoảng trống kiến thức và phụ lục bẫy MCQ.",
      updated: "2026-10-05", url: "docs/dong-thuan-ada-easd-2026-dtd-tip-2.html" },

    { id: "nt-ada2026-ch16-dh-noi-vien-dka", sp: "nt", topic: "Đái tháo đường", title: "Kiểm soát đường huyết nội viện theo ADA 2026: từ insulin nền–bữa ăn đến DKA/HHS",
      org: "ADA Standards of Care 2026 — Chương 16 (+ Chương 9) · slide BS Trần Tuấn Anh · bổ sung nghiên cứu gốc", year: 2026,
      doi: "https://doi.org/10.2337/dc26-S016", status: 2,
      cat: "Nội viện · DKA/HHS · Bản tổng hợp/biên soạn lại · 27 hình gốc + 1 sơ đồ tự vẽ",
      note: "Khung theo slide BS Trần Tuấn Anh: sinh lý và dược động học insulin (bảng Petznick), HbA1c khi nhập viện (16.1), mục tiêu ICU 140–180/ngoài ICU 100–180 (16.4–16.5) kèm NICE-SUGAR; basal-bolus vs sliding scale (16.8–16.10), tính TDD 0,3–0,6 UI/kg, chuyển TM → dưới da 60–80%, thang hiệu chỉnh và quy tắc 1800; Bellido 2015 (trộn sẵn hạ ĐH 64% vs 24%); nuôi ăn sonde/PN; hạ ĐH và sai sót liều U-500; corticoid; SGLT2i trong suy tim (16.11), DPP-4i, GLP-1RA; chu phẫu (16.15); thuốc tiêm ĐTĐ típ 2 (9.20–9.23), quá liều nền, trộn 2–3 mũi, Mixtard, Dawn/Somogyi, IDegAsp (chuyển 1:1, chỉnh liều hàng tuần), tái sử dụng kim và loạn dưỡng mỡ; DKA/HHS (16.16–16.17): tiêu chuẩn đồng thuận 2024, phân độ, ceton niệu, sơ đồ ADA 2026 Việt hóa, RL vs NaCl (Trifi 2026), insulin nền sớm (Thammakosol 2023, Lim 2022), kali, Na hiệu chỉnh 2,4; theo dõi ĐH/CGM nội viện, phác đồ ra viện theo HbA1c, bảng 25 bẫy MCQ.",
      updated: "2026-10-05", url: "docs/kiem-soat-duong-huyet-noi-vien-ada-2026.html" },

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
