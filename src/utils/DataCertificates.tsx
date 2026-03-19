export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  category: string;
  credentialUrl: string;
  skills: string[];
}



export const DataCertificates: Certificate[] = [
  {
    title: "Kelas Python Lengkap 2025: Pemula sampai Mahir",
    issuer: "Kelas.work by Kelas.com",
    date: "Diterbitkan Sep 2025",
    category: "Fundamental",
    credentialUrl: "https://drive.google.com/file/d/1-BM7R6U0AsTfPOYHp1Hx9S4fo59nxBrA/view?pli=1",
    skills: ["Python (Programming Language)"],
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Diterbitkan Sep 2025",
    category: "AI/ML",
    credentialUrl: "https://www.dicoding.com/certificates/RVZKGL1EQXD5",
    skills: ["Artificial Intelligence (AI)", "Machine Learning", "Deep Learning"],
  },
  {
    title: "Introduction to Machine Learning on AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "Diterbitkan Des 2025",
    category: "AI/ML",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/MN325211TLF1",
    skills: ["Machine Learning", "AWS"],
  },
  {
    title: "Supervised Machine Learning: Regression and Classification ",
    issuer: "DeepLearning.AI",
    date: "Diterbitkan Des 2025",
    category: "AI/ML",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/MLLEFGCMECWG",
    skills: ["Machine Learning", "Artificial Intelligence (AI)", "Feature Engineering"],
  },
];
