import { FaEye } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";

import "./index.css";
import BlogComments from "../BlogComments";

const BlogDetailedView = () => {
  let content = `
    ఒక సంవత్సరము పనిమీద వెళ్ళిన గాంధీ, దక్షిణాఫ్రికాలో 21 సంవత్సరాలు (1893 నుండి 1914 వరకు) గడిపాడు. కేవలం తెల్లవాడు కానందువల్ల రైలు బండి మొదటి తరగతి లోంచి నెట్టివేయడం, హోటళ్ళలోకి రానివ్వకపోవడం వంటి జాతి వివక్షతలు అతనికి సమాజంలోని అన్యాయాలను కళ్ళకు కట్టినట్లు చూపాయి. వాటిని ఎదుర్కోవలసిన బాధ్యతను గ్రహించి, ఎదుర్కొని పోరాడే పటిమను అతను నిదానంగా పెంచుకొన్నాడు. గాంధీ నాయకత్వ పటిమ వృద్ధి చెందడానికీ, అతని ఆలోచనా సరళి పరిపక్వము కావడానికీ, రాజకీయ విధివిధానాలు రూపు దిద్దుకోవడానికీ ఇది చాలా ముఖ్యమైన సమయము. ఒక విధముగా భారతదేశంలో నాయకత్వానికి ఇక్కడే బీజాలు మొలకెత్తాయి. భారతీయుల అభిప్రాయాలను కూడగట్టటమూ, అన్యాయాల పట్ల వారిని జాగరూకులను చేయడమూ అతను చేసిన మొదటి పని. 1894లో భారతీయుల ఓటు హక్కులను కాలరాచే ఒక బిల్లును అతను తీవ్రంగా వ్యతిరేకించాడు. బిల్లు ఆగలేదుగానీ, అతను బాగా జనాదరణ సంపాదించాడు.


గాంధీ దక్షిణాఫ్రికాలో ప్రారంభించిన ఇండియన్ ఒపీనియన్ పత్రిక ప్రకటన
ఇండియన్ ఒపీనియన్ అనే పత్రికను అతను ప్రచురించాడు. సత్యాగ్రహం అనే పోరాట విధానాన్ని ఈ కాలంలోనే అతను అమలు చేశాడు. ఇది అతనికి కేవలం పని సాధించుకొనే ఆయుధం కాదు. నిజాయితీ, అహింస, సౌభ్రాతృత్వము అనే సుగుణాలతో కూడిన జీవితం గడపడంలో ఇది ఒక పరిపూర్ణ భాగము. గనులలోని భారతీయ కార్మికులకు జరుగుతున్న అన్యాయాలను ప్రతిఘటించడానికి అతను మొదలుపెట్టిన సత్యాగ్రహము 7 సంవత్సరాలు సాగింది. 1913లో వేలాది కార్మికులు చెరసాలలకు వెళ్ళారు. కష్టనష్టాలకు తట్టుకొని నిలచారు. చివరకు దక్షిణాఫ్రికా ప్రభుత్వము కొన్ని ముఖ్యమైన సంస్కరణలు చేపట్టింది. కానీ గాంధీకి బ్రిటిష్ వారిపై ద్వేషం లేదు. వారి న్యాయమైన విధానాలను అతను సమర్థించాడు. బోయర్ యుద్ధకాలం లో (1899–1902) అతను తన పోరాటాన్ని ఆపి, వైద్యసేవా కార్యక్రమాలలో నిమగ్నుడైనాడు. ప్రభుత్వము అతని సేవలను గుర్తించి, పతకంతో సత్కరించింది. ఈ కాలంలో అనేక గ్రంథాలు చదవడం వలన, సమాజాన్ని అధ్యయనం చేయడం వలన అతని తత్వము ఎంతో పరిణతి చెందింది. లియో టాల్‌స్టాయ్ రాసిన ది కింగ్డమ్ ఆఫ్ గాడ్ ఈజ్ వితిన్ యు (The Kingdom of God is Within You), జాన్ రస్కిన్ రాసిన అన్టూ దిలాస్ట్ (Unto the Last) అనే గ్రంథాలు అతన్ని బాగా ప్రభావితం చేశాయి. కాని, అన్నిటికంటే అతని ఆలోచనపై అత్యధిక ప్రభావం చూపిన గ్రంథము భగవద్గీత. గీతా పఠనం వల్ల అతనికి ఆత్మజ్ఞానము ప్రాముఖ్యతా, నిష్కామ కర్మ విధానమూ వంటబట్టాయి. అన్ని మతాలూ దాదాపు ఒకే విషయాన్ని బోధిస్తున్నాయని కూడా అతను గ్రహించాడు. దక్షిణాఫ్రికాలో "ఫీనిక్స్ ఫార్మ్", "టాల్ స్టాయ్ ఫార్మ్" లలో అతను సామాజిక జీవనాన్నీ, సౌభ్రాతృత్వాన్నీ ప్రయోగాత్మకంగా అమలు చేశాడు. ఇక్కడ వ్యక్తులు స్వచ్ఛందంగా సీదా సాదా జీవితం గడిపేవారు - కోరికలకు కళ్ళెం వేయడమూ, ఉన్నదేదో నలుగురూ పంచుకోవడమూ, ప్రతి ఒక్కరూ శ్రమించడమూ, సేవా దృక్పథమూ, ఆధ్యాత్మిక దృక్కోణమూ ఈ జీవితంలో ప్రధానాంశాలు. గాంధీ స్వయంగా పంతులుగా, వంటవాడిగా, పాకీవాడిగా ఈ సహజీవన విధానంలో పాలు పంచుకొన్నాడు.

గాంధీ, అతని అనుచరులు ఉప్పు సత్యాగ్రహంలో దండికి కవాతు చేస్తున్న ఒరిజినల్ ఫుటేజీ
ఈ సమయంలోనే అతను అస్పృశ్యతకూ, కులవివక్షతకూ, మతవిద్వేషాలకూ ఎదురు నిలవడం బోధించాడు. క్లుప్తంగా చెప్పాలంటే సంపూర్ణమైన జీవితం గడపడం అతని మార్గము. పోరాటాలూ, సంస్కరణలూ ఆ జీవితంలో ఒక భాగము. ఒక అన్యాయాన్ని వ్యతిరేకించి, మరొక అన్యాయాన్ని సహించడం అతని దృష్టిలో నేరము. 1914లో గాంధీ భారతదేశానికి తిరిగి వచ్చాడు. భారతదేశంలో స్వాతంత్ర్యోద్యమం అప్పుడే చిగురు వేస్తున్నది.`;

  const paragraphs = content
    .split("\n\n")
    .filter((paragraph) => paragraph.trim() !== "");

  return (
    <div className="py-2 py-lg-5 minHeight">
     <div className="bg-white p-3 rounded-3 col-12 col-lg-10 m-auto">
  <div className="row col-10 col-md-9 col-lg-8 m-auto rounded-2">
      <img
        src="https://th.bing.com/th/id/OIP.12iheflP9TjWhxxsagSfCwAAAA?rs=1&pid=ImgDetMain"
        alt="gandhi"
        className="w-100 blogImage"
        style={{ maxHeight: "40vh" }}
      />
  
  </div>

  <div className="row text-dark bg-white">
    <h3 className="text-center fw-bold fs-2 my-3">Short Story Of Gandhi</h3>
    <div
  className="mt-3 text-dark-emphasis fw-light"
>
  <p className="mb-0">date: 24-08-2024</p>
  <p className="mb-0 d-flex align-items-center flex-wrap gap-2">
    Written by:{" "}
    <div className="d-flex align-items-center mb-0">
      <p className="mb-0">Veera venkata narasimha rajulu</p>
      <p className="mb-0 mx-2">
        <span className="fw-medium fs-5">12k</span> Followers
      </p>
    </div>{" "}
    <button className="btn btn-dark border">Follow</button>
  </p>
</div>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-dark bg-transparent">
        <FaEye className="fs-5" /> 1k views &nbsp;{" "}
        <button className="btn border">Share <IoMdShareAlt /></button>
      </span>
      <span className="aligin-items-center">
        <AiOutlineLike className="text-primary fs-3" role="button" /> 800 Likes
      </span>
    </div>
    <div className="text-wrap">
      {paragraphs.map((paragraph, index) => (
        <p className="fw-medium text-dark-emphasis lh-lg" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
    <div className="bg-white mb-3">tags: #mahathma #gandi #indipendenceday</div>
  </div>
  <div>
    <BlogComments/>
  </div>

  
</div>

    </div>
  );
};

export default BlogDetailedView;
