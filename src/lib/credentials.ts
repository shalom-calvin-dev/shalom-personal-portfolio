export type Certification = {
  id: string;
  issuer: string;
  /** Full official title, e.g. "Microsoft Certified: ... (PL-600)". */
  title: string;
  /** Exam / certification code. */
  code: string;
  credentialUrl: string;
};

export type EducationEntry = {
  id: string;
  qualification: string;
  institution: string;
  period: string;
  start: string;
  end: string;
};

export const credentialsSection = {
  eyebrow: "Certifications & Education",
  heading: "Credentials and academic background",
} as const;

export const certifications: readonly Certification[] = [
  {
    id: "pl-600",
    issuer: "Microsoft",
    title: "Microsoft Certified: Power Platform Solution Architect Expert (PL-600)",
    code: "PL-600",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/ShalomCalvin-1053/DCB066A53C5A7924?sharingId=A1A8C1A328FC867C",
  },
  {
    id: "pl-400",
    issuer: "Microsoft",
    title: "Microsoft Certified: Power Platform Developer Associate (PL-400)",
    code: "PL-400",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/ShalomCalvin-1053/42E896ACBD44F080?sharingId=A1A8C1A328FC867C",
  },
];

export const education: readonly EducationEntry[] = [
  {
    id: "diploma-mechatronics",
    qualification: "Diploma in Mechatronics Engineering",
    institution: "Dr. T.M.A. Pai Polytechnic, Manipal",
    period: "2016 – 2019",
    start: "2016",
    end: "2019",
  },
];
