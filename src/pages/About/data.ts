import SuluKehinde from "../../assets/imgs/DSC_3160.jpg";
import SuluKehindeSmall from "../../assets/imgs/DSC_3160-small.jpg";
import AwolesiOluwakemi from "../../assets/imgs/DSC_3176.jpg";
import AwolesiOluwakemiSmall from "../../assets/imgs/DSC_3176-small.jpg";
import LanreSotunde from "../../assets/imgs/lanre.jpeg";
import LanreSotundeSmall from "../../assets/imgs/lanre-small.jpeg";
import OlufemiAllen from "../../assets/imgs/otunba_olufemi.jpeg";
import OlufemiAllenSmall from "../../assets/imgs/otunba_olufemi-small.jpeg";
import AdekunleAdeniyi from "../../assets/imgs/DSC_3165.jpg";
import AdekunleAdeniyiSmall from "../../assets/imgs/DSC_3165-small.jpg";
import GbolahanAdenuga from "../../assets/imgs/DSC_3171.jpg";
import GbolahanAdenugaSmall from "../../assets/imgs/DSC_3171-small.jpg";
import OluwatoyinRufus from "../../assets/imgs/DSC_3188.jpg";
import OluwatoyinRufusSmall from "../../assets/imgs/DSC_3188-small.jpg";
import OyegunwaOluwabunmi from "../../assets/imgs/DSC_3236.jpg";
import OyegunwaOluwabunmiSmall from "../../assets/imgs/DSC_3236-small.jpg";
import AllenRemi from "../../assets/imgs/DSC_3208.jpg";
import AllenRemiSmall from "../../assets/imgs/DSC_3208-small.jpg";
import AdenugaAdeleke from "../../assets/imgs/barr_adenuga.jpeg";
import AdenugaAdelekeSmall from "../../assets/imgs/barr_adenuga-small.jpeg";

export const BODData = [
  {
    id: 1,
    img: SuluKehinde,
    smallImg: SuluKehindeSmall,
    name: "Matthew Kehinde Sulu",
    description:
      "Matthew Kehinde Sulu is a seasoned accountant with over 35 years of experience in the Nigerian public sector. He played a key role in managing the salaries and wages of government employees nationwide and was involved in budget planning and implementation at the Nigerian National Petroleum Corporation. He holds a Bachelor of Science in Accounting from Howard University and previously served as an Assistant Director of Revenue at the Department of Petroleum Resources. Sulu is a highly qualified professional with a strong background in financial management, budget implementation, and revenue generation.",
  },
  {
    id: 2,
    img: LanreSotunde,
    smallImg: LanreSotundeSmall,
    name: "Sotunde Olanrewaju Olumuyiwa (FCA)",
    description:
      "Sotunde Olanrewaju Olumuyiwa (FCA) is a results-oriented finance professional with a strong track record in financial management and strategic planning. With over 10 years of experience in the energy sector, he excels at leading and motivating teams to achieve organizational goals. He is a team player with a strong business acumen and a commitment to personal and professional development. Olumuyiwa has extensive experience in financial management, including budget development, cost analysis, and financial reporting.",
  },
  {
    id: 3,
    img: GbolahanAdenuga,
    smallImg: GbolahanAdenugaSmall,
    name: "Gbolahan Adenuga",
    description:
      "Gbolahan Adenuga is a results-oriented and service-driven professional with a passion for leading dynamic teams and achieving meaningful objectives. He has over a decade of experience in managing business operations and has a proven track record of success in both team leadership and profit-oriented cost control. He is a Nigerian lawyer with over 20 years of experience in the legal field. He holds a Bachelor of Laws (LLB) from the Ogun State University and was called to the Nigerian Bar in 2000. With a strong background in telecommunications law, he possesses excellent communication, organizational, and management skills.",
  },
  {
    id: 4,
    img: AdekunleAdeniyi,
    smallImg: AdekunleAdeniyiSmall,
    name: "Adeniyi Adekunle",
    description:
      "Adeniyi Adekunle is a multi-faceted professional with a diverse skillset spanning law, finance, and accounting. He holds an LLM in Law from the University of Lagos and an MBA in Finance from Lagos State University. He is a Fellow of the Institute of Chartered Accountants of Nigeria (FCA) and a Fellow of the Chartered Tax Institute of Nigeria (FCTI). He has over 20 years of experience working in various roles at reputable organizations in Nigeria. Currently, he serves as a Principal at Kunle Adeniyi & Co (Chartered Accountants), where he provides audit and consultancy services. He is also a Consultant at Towobola Adeniyi Chambers, offering legal services.",
  },
  {
    id: 5,
    img: AwolesiOluwakemi,
    smallImg: AwolesiOluwakemiSmall,
    name: "Awolesi Oluwakemi Funmilayo",
    description:
      "Awolesi Oluwakemi Funmilayo is a highly experienced banking professional with over 20 years of experience in various roles at Ikenne Micro-Finance Bank Nig. Ltd. She has a strong background in credit management, risk management, marketing, and operations. Currently, she serves as the Managing Director/CEO of the bank, overseeing its operations and driving its strategic objectives. She works in an organization that is committed to a business strategy which focuses on excellence and offers outstanding challenges as well as prospects for career growth and development.",
  },
];

export const boardOfDirectors = [
  {
    img: SuluKehinde,
    smallImg: SuluKehindeSmall,
    name: "Mr. Sulu Kehinde",
    position: "Chairman",
    to: 1,
  },
  {
    img: OlufemiAllen,
    smallImg: OlufemiAllenSmall,
    name: "Otunba Olufemi Allen",
    position: "Director",
  },
  {
    img: LanreSotunde,
    smallImg: LanreSotundeSmall,
    name: "Mr. Lanre Sotunde",
    position: "Director",
    to: 2,
  },
  {
    img: AdekunleAdeniyi,
    smallImg: AdekunleAdeniyiSmall,
    name: "Barr, Adekunle Adeniyi",
    position: "Director",
    to: 4,
  },
  {
    img: GbolahanAdenuga,
    smallImg: GbolahanAdenugaSmall,
    name: "Mr. Gbolahan Adenuga",
    position: "Director",
    to: 3,
  },
  {
    img: AwolesiOluwakemi,
    smallImg: AwolesiOluwakemiSmall,
    name: "Mrs Awolesi Oluwakemi",
    position: "Managing Director",
    to: 5,
  },
  {
    img: AdenugaAdeleke,
    smallImg: AdenugaAdelekeSmall,
    name: "Barr. Adenuga Adeleke",
    position: "Company secretary",
  },
];

export const management = [
  {
    img: AwolesiOluwakemi,
    smallImg: AwolesiOluwakemiSmall,
    name: "Mrs Awolesi Oluwakemi",
    position: "Managing Director",
    to: 5,
  },

  {
    img: OluwatoyinRufus,
    smallImg: OluwatoyinRufusSmall,
    name: "Pastor Oluwatoyin Rufus Patrick",
    position: "Internal Auditor",
  },
  {
    img: OyegunwaOluwabunmi,
    smallImg: OyegunwaOluwabunmiSmall,
    name: "Mrs. Oyegunwa Oluwabunmi Margaret",
    position: "Head of Operations",
  },
  {
    img: AllenRemi,
    smallImg: AllenRemiSmall,
    name: "Mrs. Allen Remi",
    position: "Head Risk Management/Recovery",
  },
];
