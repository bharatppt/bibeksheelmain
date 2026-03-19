export interface Section {
  title: string;
  content: string | string[];
}

/* ─── POLITICAL INTRO ─── */
export const POLITICAL_INTRO = {
  en: `Our political point of departure is participatory democracy, republic state, federalism, inclusion and secularism. Nepal Bibeksheel Party accepts these topics and shall move forward by bringing improvements on them. We accept them as the political foundation and are committed to safeguard them.

We believe in implementing and thereby improving the constitution. We adopt republicanism — monarchy is our history, not the future. We accept secularism and believe it is wrong to do politics in the name of religion. Many issues can be improved by bringing changes in the current electoral system and existing laws.

In the 21st Century, political parties must be dynamic. Besides ideological clarity, agenda-based timely flexibility and innovation are of utmost importance. Implementation must be realistic and practical — romanticism or idealism cannot bring sustainable transformation. Thus, our politics is agenda-based and value-based.`,
  ne: `हाम्रो राजनीतिक प्रस्थानबिन्दु सहभागितामूलक लोकतन्त्र, गणतन्त्र, संघीयता, समावेशिता र धर्मनिरपेक्षता हो। नेपाल विवेकशील पार्टीले यी विषयहरू स्वीकार गर्दछ र तिनमा सुधार ल्याउँदै अघि बढ्नेछ। हामी यिनलाई राजनीतिक आधारको रूपमा स्वीकार गर्छौँ र तिनको रक्षा गर्न प्रतिबद्ध छौँ।

हामी संविधान कार्यान्वयन गर्दै सुधार गर्नमा विश्वास राख्छौँ। हामीले गणतन्त्र अपनाएका छौँ — राजतन्त्र हाम्रो इतिहास हो, भविष्य होइन। हामी धर्मनिरपेक्षता स्वीकार गर्छौँ र धर्मको नाममा राजनीति गर्नु गलत ठान्छौँ। वर्तमान निर्वाचन प्रणाली र कानूनमा परिवर्तन ल्याएर धेरै समस्या समाधान गर्न सकिन्छ।

२१औँ शताब्दीमा राजनीतिक दलहरू गतिशील हुनुपर्छ। वैचारिक स्पष्टताका साथै एजेन्डा-आधारित लचकता र नवप्रवर्तन पनि उत्तिकै महत्त्वपूर्ण छ। कार्यान्वयन यथार्थपरक र व्यावहारिक हुनुपर्छ — स्वप्नवाद वा आदर्शवादले दिगो रूपान्तरण ल्याउन सक्दैन। त्यसैले हाम्रो राजनीति एजेन्डा-आधारित र मूल्य-आधारित छ।`,
};

/* ─── FOUR PILLARS ─── */
export const FOUR_PILLARS: { en: Section[]; ne: Section[] } = {
  en: [
    {
      title: '1. Judicious Citizen',
      content: `To make Nepal an able country, ordinary citizens must have strong ethical and moral values. When the majority of Nepalis develop the consciousness and tolerance to differentiate right from wrong, there will be significant positive effects on the whole society, economy and governance. Only when citizens fulfil civic responsibility does the country become as envisioned. A country does not develop on its own — it must be built together.`,
    },
    {
      title: '2. Entrepreneurial Society',
      content: `Today's Nepali society thriving on dependency and short-term gain has been suffocating the nation. A society dominated by bad culture must adhere to values embracing independence, entrepreneurship, creativity, courage, perseverance and self-reliance. Nepal needs an entrepreneurial, productive and service-oriented society that adopts merit-based culture and transforms society using state-of-the-art knowledge.`,
    },
    {
      title: '3. Sustainable Economy',
      content: `The economy is the backbone of the country's prosperity. Efficiency and productivity must be increased using science and technology, while visionary long-term decisions are necessary to avoid damaging the environment. Areas of economic benefit — financial institutions, tourism, service sectors, IT — need to be identified and invested in. Financial freedom is the only way that helps a person live a dignified life; such an environment must be built.`,
    },
    {
      title: '4. Equitable Policies',
      content: [
        '(a) Social Policy — Laws must not discriminate on the basis of caste, religion, gender, colour, thoughts or region. Everyone should have equal access to opportunities. The state must provide special measures to those oppressed for centuries. Policies must be community-based — for example, preserving community languages and cultural heritage. At schools in Bagmati Province, besides Nepali, there must be provision to teach Tamang and Newari.',
        "(b) Defence Policy — Maintaining good relations with neighbours, we shall not allow our land to be used for others' interests. Security forces shall be efficient, modern and fully equipped to defend the country's integrity, territory and strategic interests.",
        "(c) Foreign Policy — The country's foreign policy shall be based on Panchsheel and a policy of neutrality and military non-alignment. Foreign aid shall be accepted only when it is in Nepal's interest, in a proper manner and for a certain period.",
        '(d) Justice — Our work shall focus on providing equal access to justice and ensuring timely decisions. Prisons shall be more like rehabilitation centres — including libraries and possibilities to study and develop skills.',
      ],
    },
  ],
  ne: [
    {
      title: '१. विवेकी नागरिक',
      content: `नेपाललाई सक्षम देश बनाउन सामान्य नागरिकले बलियो नैतिक मूल्य राख्नुपर्छ। अधिकांश नेपालीले सही-गलत छुट्याउने चेतना र सहनशीलता विकास गरेमा समाज, अर्थतन्त्र र शासन प्रणालीमा सकारात्मक प्रभाव पर्नेछ। नागरिकले नागरिक जिम्मेवारी पूरा गर्दा मात्र देश कल्पनाअनुसार बन्छ। देश आफैँ विकसित हुँदैन — मिलेर बनाउनुपर्छ।`,
    },
    {
      title: '२. उद्यमशील समाज',
      content: `परनिर्भरता र अल्पकालीन फाइदामा आधारित आजको नेपाली समाजले राष्ट्रलाई श्वासरुद्ध पारिरहेको छ। खराब संस्कारले ग्रस्त समाजले स्वतन्त्रता, उद्यमशीलता, सिर्जनशीलता, साहस, लगनशीलता र आत्मनिर्भरता अँगाल्नुपर्छ। नेपाललाई कर्म र योग्यतामा आधारित उत्पादनशील संस्कार अपनाउने उद्यमशील र सेवामुखी समाज चाहिन्छ।`,
    },
    {
      title: '३. दिगो अर्थतन्त्र',
      content: `अर्थतन्त्र देशको समृद्धिको मेरुदण्ड हो। विज्ञान र प्रविधिको प्रयोगले दक्षता र उत्पादकत्व बढाउनुपर्छ, तर वातावरण नोक्सान नहोस् भन्ने दूरदर्शी निर्णय पनि आवश्यक छ। वित्तीय संस्था, पर्यटन, सेवा क्षेत्र, सूचना प्रविधि जस्ता आर्थिक लाभका क्षेत्रहरू पहिचान गरी लगानी गर्नुपर्छ। आर्थिक स्वतन्त्रता नै व्यक्तिलाई स्वाभिमानपूर्ण जीवन जिउन सक्षम बनाउने एकमात्र उपाय हो।`,
    },
    {
      title: '४. न्यायोचित नीतिहरू',
      content: [
        '(क) सामाजिक नीति — कानूनले जाति, धर्म, लिंग, रंग, विचार वा क्षेत्रका आधारमा कसैसँग भेदभाव गर्नु हुँदैन। सबैलाई अवसरमा समान पहुँच हुनुपर्छ। शताब्दीयौँदेखि उत्पीडित समुदायका लागि राज्यले विशेष उपायहरू अवलम्बन गर्नुपर्छ। नीतिहरू समुदाय-आधारित हुनुपर्छ — जस्तै, बागमती प्रदेशका विद्यालयमा नेपालीसँगै तामाङ र नेवारी भाषा सिकाउने व्यवस्था।',
        '(ख) रक्षा नीति — छिमेकी राष्ट्रहरूसँग राम्रो सम्बन्ध राखी आफ्नो भूमि अरूको हितका लागि प्रयोग हुन नदिने। सुरक्षा बलहरूलाई देशको अखण्डता, भूभाग र रणनीतिक हित जोगाउन सक्षम, आधुनिक र सुसज्जित बनाउने।',
        '(ग) परराष्ट्र नीति — देशको परराष्ट्र नीति पंचशीलमा आधारित हुनेछ र तटस्थता तथा सैन्य असंलग्नताको नीति कायम राखिनेछ। नेपालको हितमा भए मात्र उचित ढंगले र निश्चित अवधिका लागि वैदेशिक सहायता स्वीकार गरिनेछ।',
        '(घ) न्याय — न्यायमा समान पहुँच र समयमा निर्णय सुनिश्चित गर्नेतर्फ काम केन्द्रित गरिनेछ। कारागारहरूलाई पुनर्स्थापना केन्द्रको रूपमा विकास गरिनेछ — जसमा पुस्तकालय र सीप विकासका अवसरहरू समावेश हुनेछन्।',
      ],
    },
  ],
};

/* ─── SOCIAL PRINCIPLES ─── */
export const SOCIAL_PRINCIPLES: { en: Section[]; ne: Section[] } = {
  en: [
    {
      title: 'Humanity',
      content: `First of all, a person is a human, then a citizen! Humanity is the most important factor in relationships. No matter which country we belong to, we live on the same earth. Climate change and viruses do not differentiate between countries. Fraternity exists not only between Nepalis but between all living creatures on earth. While treating each other, not country, religion or race but humanity should be the primary factor.`,
    },
    {
      title: 'Equality',
      content: `Equality has two facets: First, all fundamental rights — freedom of expression, voting rights — apply equally to all citizens without discrimination on the basis of gender, caste, creed, region or ideas. Second, inequality created by decades of patriarchal thinking and caste-based untouchability must be eliminated. Representation of such groups is not enough — participation is a must.`,
    },
    {
      title: 'Liberty',
      content: `In politics, liberty has several meanings — individual freedom and country's sovereignty are important. In democracy, freedom is always attached to responsibility. Individual freedom must be a part of life, not just a slogan. It is universally accepted that one has the right to live according to one's wishes but without affecting others. While asking for one's rights, one must take care not to hinder other people's rights.`,
    },
    {
      title: 'Dignity',
      content: `Despite existing diversity in nature, language, religion, culture and ethnicity, respect and tolerance should exist among all Nepalis so that each can live a dignified life. All Nepalis should be able to be proud of being Nepali without losing their own ethnic identity. Let unity in diversity be our flagship!`,
    },
  ],
  ne: [
    {
      title: 'मानवता',
      content: `सबैभन्दा पहिले एक व्यक्ति मानव हो, त्यसपछि नागरिक! दुई मानिसबीचको सम्बन्धमा मानवता सबभन्दा महत्त्वपूर्ण छ। हामी जुनसुकै देशका भए पनि एउटै पृथ्वीमा बसेका छौँ। जलवायु परिवर्तन र भाइरसले देशहरूबीच भेद गर्दैन। बन्धुत्व केवल नेपालीबीच मात्र होइन, पृथ्वीका सम्पूर्ण जीवित प्राणीबीच हुन्छ। एकअर्कासँग व्यवहार गर्दा देश, धर्म वा जातिभन्दा मानवता नै प्राथमिक कारक हुनुपर्छ।`,
    },
    {
      title: 'समानता',
      content: `समानताका दुई पक्ष छन्: पहिलो, संविधानले दिएका सम्पूर्ण आधारभूत अधिकारहरू — अभिव्यक्ति स्वतन्त्रता होस् वा मतदान अधिकार — सम्पूर्ण नेपाली नागरिकमा लिंग, जाति, धर्म, क्षेत्र वा विचारका आधारमा भेदभावविना समान रूपमा लागू हुन्छन्। दोस्रो, पितृसत्तावादी सोच र जातीय छुवाछूत जस्ता दशकौँ लामो सामाजिक विकृतिले सिर्जना गरेको असमानता अन्त्य गर्नुपर्छ। त्यस्ता समूहको प्रतिनिधित्व मात्र पर्याप्त छैन — सहभागिता अनिवार्य छ।`,
    },
    {
      title: 'स्वतन्त्रता',
      content: `राजनीतिमा स्वतन्त्रताका धेरै अर्थ हुन्छन् — व्यक्तिगत स्वतन्त्रता र देशको सार्वभौमसत्ता प्रमुख हुन्। लोकतन्त्रमा स्वतन्त्रता सधैँ जिम्मेवारीसँग जोडिएको हुन्छ। व्यक्तिगत स्वतन्त्रता जीवनको अंश बन्नुपर्छ, केवल नारा होइन। अरूलाई असर नगरी आफ्नो इच्छाअनुसार जीवन जिउने अधिकार सार्वभौमिक रूपमा मान्यता प्राप्त छ। आफ्नो अधिकार खोज्दा अरूको अधिकारमा बाधा नपर्ने ध्यान राख्नुपर्छ।`,
    },
    {
      title: 'गरिमा',
      content: `प्रकृति, भाषा, धर्म, संस्कृति र जातीयतामा विद्यमान विविधताका बाबजुद सम्पूर्ण नेपालीबीच सम्मान र सहिष्णुता हुनुपर्छ ताकि प्रत्येक नेपाली स्वाभिमानपूर्ण जीवन जिउन सकोस्। सम्पूर्ण नेपाली आफ्नो जातीय पहिचान नगुमाई नेपाली हुनमा गर्व गर्न सक्नुपर्छ। विविधतामा एकता नै हाम्रो पहिचान होस्!`,
    },
  ],
};

/* ─── ECONOMIC SECTIONS ─── */
export const ECONOMIC_SECTIONS: { en: Section[]; ne: Section[] } = {
  en: [
    {
      title: 'Coordinated Capitalism',
      content: `Capitalism is an economic system related to production and distribution handled by individuals and private companies. No country has pure capitalism or socialism today — there is always a mixture. We have adopted coordinated capitalism: the state intervenes positively on the basis of national interest, ensuring equal access to basic needs (food, shelter, clothing, education, healthcare, security, environment), while the rest of the economy follows market principles. To stop uncontrolled profit-making through monopoly, the state manages via suitable rules and regulations.`,
    },
    {
      title: 'Science, Technology & Production',
      content: `Our economic system shall be based on science and technology. Our policies shall increase domestic production and export, and focus on knowledge- and skills-based services. Vocational training shall be prioritised. Strict legal punishment shall mitigate rent-seeking, nepotism, clientelism, extortion and crony capitalism. Ease of doing business shall be improved. NGOs/INGOs will only be allowed to work under specified criteria.`,
    },
    {
      title: 'Empowering Nepali Citizens',
      content: `The main pillar of our economic system will be Nepali citizens. Programs to enhance skills and knowledge shall be conducted. To promote innovation and entrepreneurship, the state shall provide assistance and facilitate. Companies that create new jobs shall be given tax relief. Business processes — company registration, tax payment — shall be made efficient and hassle-free. Foreign investment and aid shall be approved only after assessing whether they are for the long-term benefit of Nepal.`,
    },
  ],
  ne: [
    {
      title: 'समन्वित पुँजीवाद',
      content: `पुँजीवाद उत्पादन र वितरणसँग सम्बन्धित आर्थिक प्रणाली हो जसमा व्यवसाय र उद्योग व्यक्ति र निजी समूहको हातमा हुन्छन्। आज कुनै पनि देशमा शुद्ध पुँजीवाद वा समाजवाद छैन — सधैँ मिश्रण हुन्छ। हामीले समन्वित पुँजीवाद अपनाएका छौँ: राज्यले राष्ट्रिय हितका आधारमा खाना, आवास, लुगा, शिक्षा, स्वास्थ्य, सुरक्षा र वातावरणजस्ता आधारभूत आवश्यकतामा समान पहुँच सुनिश्चित गर्ने सकारात्मक हस्तक्षेप गर्नेछ, र बाँकी अर्थतन्त्र बजार सिद्धान्तअनुसार चल्नेछ। एकाधिकारको माध्यमले अनियन्त्रित नाफा रोक्न राज्यले उपयुक्त नियमहरूको माध्यमले नियमन गर्नेछ।`,
    },
    {
      title: 'विज्ञान, प्रविधि र उत्पादन',
      content: `हाम्रो आर्थिक प्रणाली विज्ञान र प्रविधिमा आधारित हुनेछ। हाम्रो नीतिले आन्तरिक उत्पादन र निर्यात बढाउनेछ र ज्ञान तथा सीप-आधारित सेवामा ध्यान केन्द्रित गर्नेछ। व्यावसायिक तालिमलाई प्राथमिकता दिइनेछ। भाडाखोरी, भाइभतिजावाद, ग्राहकवाद, जबरजस्ती र क्रोनी पुँजीवाद न्यूनीकरणका लागि कडा कानुनी दण्डको व्यवस्था गरिनेछ। व्यवसाय गर्न सहज बनाइनेछ। NGO/INGOहरूलाई निर्दिष्ट मापदण्डमा मात्र काम गर्न अनुमति दिइनेछ।`,
    },
    {
      title: 'नेपाली नागरिकको सशक्तिकरण',
      content: `हाम्रो आर्थिक प्रणालीको मुख्य आधार नेपाली नागरिक नै हुनेछन्। सीप र ज्ञान अभिवृद्धिका विभिन्न कार्यक्रमहरू सञ्चालन गरिनेछन्। नवप्रवर्तन र उद्यमशीलता प्रवर्धनका लागि राज्यले सहयोग र सहजीकरण गर्नेछ। नयाँ रोजगार सिर्जना गर्ने कम्पनीहरूलाई करमा छुट दिइनेछ। कम्पनी दर्ता, कर भुक्तानी जस्ता कारोबारी प्रक्रियाहरू दक्ष र झन्झटरहित बनाइनेछन्। वैदेशिक लगानी र सहायता नेपालको दीर्घकालीन हितका लागि हो भनी मूल्यांकन गरेपछि मात्र स्वीकार गरिनेछ।`,
    },
  ],
};

/* ─── PERSONAL VALUES ─── */
export const PERSONAL_VALUES: { en: Section[]; ne: Section[] } = {
  en: [
    { title: '1. Integrity', content: `We need to transform our social trend that motivates individual goals while disregarding collective interests. Citizens must have integrity — those who do not compromise it are honest towards their work and can speak truth under any condition. People with integrity do what they say and say what they do. Only such citizens can help clean a corrupt society. Leaders with integrity work for long-term benefit of citizens and the nation rather than short-term personal gains.` },
    { title: '2. Transparency', content: `One of the strongest weapons to fight corruption is establishing a culture of transparency. If we can establish the habit of being transparent in our activities and demanding the same from others, corruption will not be able to spread. Such positive habits also help to identify factors leading to corruption. Bibeksheel citizens are always transparent in their actions.` },
    { title: '3. Courage', content: `Without courage, even the most intellectual person will not dare to utilise their knowledge. We see and endure so much injustice in Nepal but still keep quiet. Individually excellent Nepali people fail collectively because we don't have enough courage to use our common sense. Only those who dare to establish truth shall be Bibeksheel citizens.` },
    { title: '4. Empathy', content: `Nepal is a diverse country with different communities from various geographical and cultural backgrounds. To make this country peaceful and prosperous, a sympathetic, tolerant and inclusive culture is required. Following the motto of 'unity in diversity', only Bibeksheel citizens who are able to sympathise with each other can unite this diverse society.` },
    { title: '5. Humility', content: `To overcome the egoistic "I know it all" mentality, we need humble citizens and leaders who think more of others than themselves, and who know that success is only possible through combined efforts. Only by practising humility can a selfish society be changed into a tolerant and patriotic one.` },
    { title: '6. Excellence', content: `Nepali citizens who work hard to be excellent in their fields and respect excellence in others will bring self-esteem, tolerance and prosperity to Nepal. We must establish a system where only merit-based work is respected, uprooting nepotism, cronyism and caste-based favouritism. We shall always do our best to be excellent in our respective fields.` },
  ],
  ne: [
    { title: '१. निष्ठा (Integrity)', content: `सामूहिक हितलाई बेवास्ता गरी व्यक्तिगत लक्ष्यलाई मात्र प्रोत्साहित गर्ने सामाजिक प्रवृत्ति परिवर्तन गर्नुपर्छ। नागरिकमा निष्ठा हुनुपर्छ — जो निष्ठामा सम्झौता गर्दैनन् तिनीहरू आफ्नो काममा इमानदार हुन्छन् र जुनसुकै अवस्थामा सत्य बोल्न सक्छन्। निष्ठावान् व्यक्तिले भनेजस्तो गर्छन् र गरेजस्तो भन्छन्। यस्ता नागरिकले मात्र भ्रष्ट समाज सफा गर्न सहयोग गर्न सक्छन्।` },
    { title: '२. पारदर्शिता (Transparency)', content: `भ्रष्टाचारविरुद्ध लड्ने सबभन्दा बलियो हतियार पारदर्शिताको संस्कार स्थापित गर्नु हो। आफ्ना कार्यहरूमा पारदर्शी हुने र अरूबाट पनि त्यही माग गर्ने बानी बसाल्न सकेमा भ्रष्टाचार फैलन सक्दैन। यस्तो सकारात्मक बानीले भ्रष्टाचारतर्फ डोर्याउने कारकहरू पहिचान गर्न पनि मद्दत गर्छ। विवेकशील नागरिकहरू आफ्ना कार्यहरूमा सधैँ पारदर्शी हुन्छन्।` },
    { title: '३. साहस (Courage)', content: `साहसविना सबैभन्दा बौद्धिक व्यक्तिले पनि आफ्नो ज्ञान प्रयोग गर्न हिम्मत गर्दैन। नेपालमा हामी धेरै अन्याय देख्छौँ र सहन्छौँ, तर पनि अधिकांश अवस्थामा चुप बस्ने निर्णय गर्छौँ। व्यक्तिगत रूपमा उत्कृष्ट नेपाली सामूहिक रूपमा असफल हुन्छन् किनकि हामीसँग सामान्य बुद्धि प्रयोग गर्ने पर्याप्त साहस छैन। सत्य स्थापित गर्न हिम्मत गर्नेहरूमात्र विवेकशील नागरिक हुनेछन्।` },
    { title: '४. समानुभूति (Empathy)', content: `नेपाल विभिन्न भौगोलिक र सांस्कृतिक पृष्ठभूमिका समुदायहरूसहितको विविध देश हो। यस देशलाई शान्तिपूर्ण र समृद्ध बनाउन सहानुभूतिपूर्ण, सहिष्णु र समावेशी संस्कार आवश्यक छ। 'विविधतामा एकता' को मोटोअनुसार अर्को व्यक्तिप्रति समानुभूति राख्न सक्ने विवेकशील नागरिकले मात्र यो विविध समाजलाई एकजुट गर्न सक्छन्।` },
    { title: '५. विनम्रता (Humility)', content: `अहंकारी 'म नै सर्वश्रेष्ठ' र 'मलाई सबै थाहा छ' जस्तो मानसिकता जित्न र नेपाली समाजलाई सही बाटोमा ल्याउन विनम्र नागरिक चाहिन्छ। हामीलाई अरूभन्दा आफूलाई कम ठान्ने र सफलता केवल सामूहिक प्रयासबाट सम्भव छ भन्ने जान्ने नेताहरू चाहिन्छ। विनम्रताका सिद्धान्त अभ्यास गरेर मात्र स्वार्थी समाजलाई सहिष्णु र देशभक्त समाजमा रूपान्तरण गर्न सकिन्छ।` },
    { title: '६. उत्कृष्टता (Excellence)', content: `आफ्नो क्षेत्रमा उत्कृष्ट हुन कठिन परिश्रम गर्ने र अरूको उत्कृष्टतालाई सम्मान गर्ने नेपाली नागरिकले नेपालमा स्वाभिमान, सहिष्णुता र समृद्धि ल्याउन सक्छन्। भाइभतिजावाद, क्रोनीवाद र जातीय पक्षपात उखेल्न केवल योग्यता-आधारित कामलाई सम्मान गर्ने प्रणाली स्थापित गर्नुपर्छ। हामी आफ्नो क्षेत्रमा उत्कृष्ट हुन सधैँ आफ्नो सर्वश्रेष्ठ प्रयास गर्नेछौँ।` },
  ],
};

/* ─── INSTITUTIONAL VALUES ─── */
export const INSTITUTIONAL_VALUES: { en: Section[]; ne: Section[] } = {
  en: [
    { title: '1. Accountability', content: `When you take responsibility for a task, it is your duty to complete it. If prevented, inform on time with reasons. If you make mistakes, apologise and do everything to improve. Position or title means responsibility — we are committed to be transparent individually as well as institutionally.` },
    { title: '2. Efficiency', content: `Our society suffers under procrastination and doing whatever one feels like without coordination. We have to respect the value of work and time. Correct utilisation of technology, proper prioritisation and improvement in management are necessary to achieve goals within projected timelines.` },
    { title: '3. Zero Tolerance for Fraud, Corruption, Violence & Discrimination', content: `We take fraud, corruption, violence, harassment and discrimination very seriously. If done in a preplanned and organised way, the party shall punish or even evict the person. If a mistake was made unknowingly with a guilty plea, a chance for improvement shall be given depending on the nature of the mistake.` },
    { title: '4. Inclusion', content: `Inclusion concerns not only females, marginalised groups or regions but everyone. One group or gender or region being left behind means harm to the whole society. We must build a platform where everyone can speak and listen to each other. The organisation should reflect the society — inclusion is today's need and a must in any institution.` },
    { title: '5. Meritocracy', content: `Merit is not only a title or degree — it also means skills, experience and capability. For some work, formal education is important; for others, experience and competence matter more. Qualification should be based on what kind of task is at hand and what kind of result is expected.` },
    { title: '6. Internal Participatory Democracy', content: `We motivate everyone to participate and give input in party activities and policy-making. As long as deeds and words are not forbidden by law, anyone can speak up. While exercising individual rights, one should take care not to hinder others' rights. It is the duty of all committee members to exercise their rights and fulfil responsibilities as written in the party's statute.` },
  ],
  ne: [
    { title: '१. जवाफदेहिता (Accountability)', content: `कुनै कामको जिम्मेवारी लिएपछि त्यसलाई पूरा गर्नु तपाईंको कर्तव्य हो। बाधा आइपरेमा कारणसहित समयमा जानकारी दिनुपर्छ। गल्ती भएमा माफी माग्नुपर्छ र सुधारका लागि सबै प्रयास गर्नुपर्छ। पद वा पदवीको अर्थ जिम्मेवारी हो — हामी व्यक्तिगत र संस्थागत दुवै रूपमा पारदर्शी हुन प्रतिबद्ध छौँ।` },
    { title: '२. दक्षता (Efficiency)', content: `हाम्रो समाज ढिलाई र अनन्वयको ढाँचाले पीडित छ। काम र समयको महत्त्व बुझ्न सिक्नुपर्छ। निर्धारित समयमा लक्ष्य प्राप्त गर्न प्रविधिको सही उपयोग, उचित प्राथमिकीकरण र व्यवस्थापनमा सुधार आवश्यक छ।` },
    { title: '३. धोखाधडी, भ्रष्टाचार, हिंसा र भेदभावमा शून्य सहनशीलता', content: `हामी धोखाधडी, भ्रष्टाचार, हिंसा, दुर्व्यवहार र भेदभावलाई अत्यन्त गम्भीरतापूर्वक लिन्छौँ। यस्तो काम पूर्वयोजित र संगठित ढंगले भएमा पार्टीले सम्बन्धित व्यक्तिलाई दण्ड दिनेछ वा निष्कासन पनि गर्नेछ। अनजानमा गल्ती भई दोषस्वीकारोक्ति गरिएमा गल्तीको प्रकृतिअनुसार सुधारको अवसर दिइनेछ।` },
    { title: '४. समावेशिता (Inclusion)', content: `समावेशिता केवल महिला, सीमान्तकृत समूह वा क्षेत्रसँग मात्र होइन, सबैसँग सम्बन्धित छ। एउटा समूह, लिंग वा क्षेत्र पछाडि पर्नु सम्पूर्ण समाजका लागि हानिकारक छ। सबैले बोल्न र सुन्न सक्ने मञ्च बनाउनुपर्छ। संगठन समाजको प्रतिबिम्ब हुनुपर्छ — समावेशिता आजको आवश्यकता हो र कुनै पनि संस्थामा अनिवार्य छ।` },
    { title: '५. योग्यताको शासन (Meritocracy)', content: `योग्यता केवल उपाधि वा डिग्री मात्र होइन — यसमा सीप, अनुभव र क्षमता पनि समावेश छन्। केही कामका लागि औपचारिक शिक्षा महत्त्वपूर्ण छ भने अन्यका लागि अनुभव र दक्षता बढी आवश्यक छ। योग्यता हातमा रहेको कार्यको प्रकृति र अपेक्षित परिणामका आधारमा निर्धारण गर्नुपर्छ।` },
    { title: '६. आन्तरिक सहभागितामूलक लोकतन्त्र', content: `हामी सबैलाई पार्टीको आन्तरिक गतिविधि र नीति निर्माण प्रक्रियामा सहभागी हुन र सुझाव दिन प्रेरित गर्छौँ। कानूनले निषेध नगरेसम्म जो-जसले चाहे बोल्न र इच्छाअनुसार काम गर्न सक्छन्। व्यक्तिगत अधिकार प्रयोग गर्दा अरूको अधिकारमा बाधा नपर्ने ध्यान राख्नुपर्छ। सम्पूर्ण समिति सदस्यहरूले पार्टीको विधानमा उल्लिखित आफ्नो अधिकार प्रयोग गर्नु र जिम्मेवारी पूरा गर्नु कर्तव्य हो।` },
  ],
};
