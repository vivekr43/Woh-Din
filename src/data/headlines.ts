export interface IndianHeadline {
  headlineText: string;
  sourcePaper: string;
  description: string;
  category: 'National' | 'Sports' | 'Science' | 'Cinema' | 'Culture' | 'Economy';
  isExactDateMatch: boolean;
}

export const EXACT_HISTORICAL_EVENTS: Record<string, IndianHeadline> = {
  '1947-08-15': {
    headlineText: "INDIA INDEPENDENT: BRITISH RULE ENDS AT MIDNIGHT",
    sourcePaper: "The Hindustan Times / The Times of India",
    description: "Jawaharlal Nehru delivers the iconic 'Tryst with Destiny' address in New Delhi as the Tricolour is hoisted over the Red Fort.",
    category: 'National',
    isExactDateMatch: true
  },
  '1950-01-26': {
    headlineText: "SOVEREIGN REPUBLIC OF INDIA IS BORN",
    sourcePaper: "The Statesman",
    description: "The Constitution of India comes into effect; Dr. Rajendra Prasad takes oath as India's first President at Rajpath.",
    category: 'National',
    isExactDateMatch: true
  },
  '1975-04-19': {
    headlineText: "INDIA LAUNCHES FIRST SATELLITE 'ARYABHATA' INTO SPACE",
    sourcePaper: "The Hindu",
    description: "ISRO creates history by launching Aryabhata from Kapustin Yar using a Soviet Kosmos-3M launch vehicle.",
    category: 'Science',
    isExactDateMatch: true
  },
  '1983-06-25': {
    headlineText: "KAPIL'S DEVILS WIN THE WORLD CUP AT LORD'S!",
    sourcePaper: "The Indian Express",
    description: "India defeats the mighty West Indies by 43 runs to lift the 1983 Prudential World Cup trophy.",
    category: 'Sports',
    isExactDateMatch: true
  },
  '1984-04-03': {
    headlineText: "RAKESH SHARMA BECOMES FIRST INDIAN IN SPACE",
    sourcePaper: "Press Trust of India",
    description: "Astronaut Rakesh Sharma flies aboard Soyuz T-11 and famously tells PM Indira Gandhi that India looks 'Saare Jahan Se Achha' from space.",
    category: 'Science',
    isExactDateMatch: true
  },
  '1991-07-24': {
    headlineText: "FINANCE MINISTER MANMOHAN SINGH OPENS INDIAN ECONOMY",
    sourcePaper: "Economic Times",
    description: "Landmark budget speech dismantles License Raj, inaugurating an era of economic liberalization and foreign investment.",
    category: 'Economy',
    isExactDateMatch: true
  },
  '1995-10-20': {
    headlineText: "'DDLJ' HITS THEATRES: A NEW ERA IN BOLLYWOOD ROMANCE",
    sourcePaper: "Filmfare / Screen",
    description: "Dilwale Dulhania Le Jayenge releases, going on to become the longest-running film in Indian cinema history at Maratha Mandir.",
    category: 'Cinema',
    isExactDateMatch: true
  },
  '2007-09-24': {
    headlineText: "INDIA WINS INAUGURAL T20 WORLD CUP IN JOHANNESBURG",
    sourcePaper: "Hindustan Times",
    description: "MS Dhoni's young Indian squad defeats Pakistan in a thriller final as Joginder Sharma bowls the famous last over.",
    category: 'Sports',
    isExactDateMatch: true
  },
  '2011-04-02': {
    headlineText: "DHONI FINISHES IT OFF IN STYLE! INDIA LIFTS 2011 WORLD CUP!",
    sourcePaper: "The Times of India",
    description: "After 28 years, India crowned World Champions at Wankhede Stadium, Mumbai, honoring Sachin Tendulkar in his home city.",
    category: 'Sports',
    isExactDateMatch: true
  },
  '2013-11-05': {
    headlineText: "ISRO LAUNCHES MANGALYAAN — INDIA HEADS TO MARS",
    sourcePaper: "Deccan Herald",
    description: "Mars Orbiter Mission lifts off from Sriharikota, making India the first nation in the world to reach Martian orbit on its maiden attempt.",
    category: 'Science',
    isExactDateMatch: true
  },
  '2023-08-23': {
    headlineText: "INDIA IS ON THE MOON! CHANDRAYAAN-3 LANDS ON SOUTH POLE",
    sourcePaper: "NDTV / The Hindu",
    description: "ISRO Vikram lander successfully touches down on the lunar South Pole, making India the first country in history to conquer the region.",
    category: 'Science',
    isExactDateMatch: true
  },
  '2024-06-29': {
    headlineText: "INDIA WIN T20 WORLD CUP 2024 IN BARBADOS!",
    sourcePaper: "Times of India",
    description: "Rohit Sharma and Virat Kohli lead India to undefeated T20 World Cup glory, bringing joy to over a billion fans.",
    category: 'Sports',
    isExactDateMatch: true
  }
};

interface YearSnapshot {
  headline: string;
  summary: string;
  sideStories: { tag: string; text: string }[];
}

export const YEARLY_INDIAN_SNAPSHOTS: Record<number, YearSnapshot> = {
  1947: { headline: "Birth of Free India & Nation Building Begins", summary: "Jawaharlal Nehru delivers the 'Tryst with Destiny' address; India-Pakistan partition reshapes the subcontinent.", sideStories: [{ tag: "Culture", text: "Azaan and the Tricolour both rise over a free nation for the first time at midnight." }, { tag: "Economy", text: "Reserve Bank of India takes over as sole currency issuer for the new republic." }] },
  1948: { headline: "Atomic Energy Commission Established & First Olympic Hockey Gold", summary: "Independent India won its first Olympic gold medal in hockey at London.", sideStories: [{ tag: "Science", text: "Dr. Homi Bhabha sets up the Atomic Energy Commission under PM Nehru's vision." }, { tag: "National", text: "Mahatma Gandhi assassinated on January 30 — the nation mourns its founding father." }] },
  1949: { headline: "Constituent Assembly Adopts the Constitution of India", summary: "Framers led by Dr. B.R. Ambedkar finalized the Indian Constitution blueprint.", sideStories: [{ tag: "Economy", text: "Rupee devalued 30% against the British Pound as trade deficits mount." }, { tag: "Culture", text: "Sitar maestro Ravi Shankar begins transforming classical music for modern India." }] },
  1950: { headline: "Planning Commission Formed & Republic Declared", summary: "India established democratic governance structures and initiated national development projects.", sideStories: [{ tag: "Sports", text: "India fields a football team at the FIFA World Cup for the first time — but withdraws citing travel costs." }, { tag: "Science", text: "Bhabha Atomic Research Centre (BARC) begins nuclear research operations." }] },
  1951: { headline: "First Asian Games Held in New Delhi & 1st Five-Year Plan", summary: "India hosted the inaugural Asian Games in Delhi, showcasing sport and post-independence pride.", sideStories: [{ tag: "Cinema", text: "'Awaara' with Raj Kapoor releases — becomes a global sensation, especially in the Soviet Union." }, { tag: "Economy", text: "First Five-Year Plan focuses on agriculture after Partition's supply disruptions." }] },
  1952: { headline: "India Holds First Historic General Elections", summary: "Over 170 million citizens cast their votes in the world's largest democratic exercise.", sideStories: [{ tag: "Cinema", text: "Bimal Roy's 'Do Bigha Zamin' captures rural India's plight — wins international acclaim." }, { tag: "Sports", text: "India's hockey team defends gold at Helsinki Olympics, beating the Netherlands 6-1 in finals." }] },
  1953: { headline: "Air India Nationalized & Tenzing Norgay Scales Everest", summary: "Sherpa Tenzing Norgay and Edmund Hillary conquered Mount Everest.", sideStories: [{ tag: "Culture", text: "Doordarshan's precursor, All India Radio (AIR), expands broadcasts to rural hinterlands." }, { tag: "Economy", text: "JRD Tata petitions PM Nehru against Air India nationalization — and loses." }] },
  1954: { headline: "Panchsheel Agreement Signed & Bhakra Nangal Dam Progress", summary: "Prime Minister Nehru emphasized non-alignment and mega infrastructure projects.", sideStories: [{ tag: "Cinema", text: "Guru Dutt's 'Aar Paar' introduces a new cool, urban Bollywood swagger." }, { tag: "Culture", text: "Bharat Ratna award introduced — first recipients include C. Rajagopalachari and S. Radhakrishnan." }] },
  1955: { headline: "State Bank of India (SBI) Constituted", summary: "Imperial Bank of India was nationalized to create SBI, transforming Indian banking.", sideStories: [{ tag: "Cinema", text: "'Shree 420' releases — Raj Kapoor's 'Mera Joota Hai Japani' becomes a cultural anthem." }, { tag: "Culture", text: "B.R. Ambedkar publicly converts to Buddhism along with 600,000 followers in Nagpur." }] },
  1956: { headline: "States Reorganisation Act Passed along Linguistic Lines", summary: "Indian internal borders were redrawn into linguistic states to empower local cultures.", sideStories: [{ tag: "Cinema", text: "'Mother India' begins production — will be India's first Oscar nomination in 1957." }, { tag: "Economy", text: "Second Five-Year Plan focuses on heavy industry: Bhilai, Rourkela, Durgapur steel plants opened." }] },
  1957: { headline: "Decimal Coinage System (Naye Paise) Introduced in India", summary: "India transitioned from annas and pies to 100 paise per rupee.", sideStories: [{ tag: "Cinema", text: "'Pyaasa' and 'Mother India' — Indian cinema's golden year for world-class releases." }, { tag: "Sports", text: "India's hockey team claims 4th consecutive Olympic gold at Melbourne 1956 Games." }] },
  1958: { headline: "DRDO Established to Build Indigenous Defence Technologies", summary: "Defence Research and Development Organisation formed to spur technological self-reliance.", sideStories: [{ tag: "Culture", text: "Satyajit Ray's 'Pather Panchali' trilogy brings international fame to Indian cinema." }, { tag: "Economy", text: "Tata Steel reaches 1 million tonnes production capacity in Jamshedpur." }] },
  1959: { headline: "Doordarshan Television Transmission Commences in Delhi", summary: "Experimental TV broadcasting began in India, seeding growth of Indian broadcast television.", sideStories: [{ tag: "National", text: "Dalai Lama granted asylum in India after the Chinese crackdown in Tibet." }, { tag: "Culture", text: "Lata Mangeshkar records 'Ajeeb Dastan Hai Yeh' — her voice defines a generation." }] },
  1960: { headline: "Bilingual Bombay State Split into Maharashtra & Gujarat", summary: "State creation of Maharashtra and Gujarat celebrated on May 1st.", sideStories: [{ tag: "Sports", text: "India wins silver at Rome Olympics in field hockey — first time off the gold." }, { tag: "Cinema", text: "K. Asif's 'Mughal-E-Azam' releases — considered one of the greatest Indian films of all time." }] },
  1961: { headline: "Goa Liberated from 451 Years of Portuguese Rule", summary: "Operation Vijay integrated Goa, Daman, and Diu into the Indian Union.", sideStories: [{ tag: "Culture", text: "The iconic Beatles nearly visit India — Ravi Shankar's sitar influence grows in the West." }, { tag: "Economy", text: "Third Five-Year Plan starts — targets self-sufficiency in food and creation of technical institutions." }] },
  1962: { headline: "INCOSPAR (Precursor to ISRO) Founded by Dr. Vikram Sarabhai", summary: "Dr. Sarabhai set up India's space program in Thumba, Kerala.", sideStories: [{ tag: "National", text: "Sino-Indian War: China occupies Aksai Chin; India suffers a surprise military setback." }, { tag: "Culture", text: "The Nehru-era IITs begin producing India's first generation of world-class engineers." }] },
  1963: { headline: "First Sounding Rocket Fired from Thumba Rocket Station", summary: "India launched its first rocket into space, marking the dawn of Indian space research.", sideStories: [{ tag: "Cinema", text: "'Bandini' with Nutan and Dharmendra becomes a landmark in Hindi parallel cinema." }, { tag: "Economy", text: "Income tax rates hit 97.75% for top earners — capital flight begins among wealthy entrepreneurs." }] },
  1964: { headline: "Unit Trust of India (UTI) & IDBI Established", summary: "Modern retail mutual funds and industrial development institutions took root.", sideStories: [{ tag: "National", text: "PM Nehru passes away on May 27; Lal Bahadur Shastri sworn in as second PM." }, { tag: "Sports", text: "Milkha Singh retires — his 400m record won't be broken by an Indian for 38 years." }] },
  1965: { headline: "Green Revolution Initiatives Introduced by M.S. Swaminathan", summary: "High-yielding wheat varieties transformed Indian agriculture and food security.", sideStories: [{ tag: "National", text: "1965 Indo-Pakistani War — Lahore front sees tank warfare, Battle of Asal Uttar fought." }, { tag: "Cinema", text: "'Guide' with Dev Anand and Waheeda Rehman explores taboo themes — wins Filmfare awards." }] },
  1966: { headline: "Indira Gandhi Sworn in as India's First Female Prime Minister", summary: "Indira Gandhi assumed leadership of the nation, breaking barriers in politics.", sideStories: [{ tag: "Economy", text: "Rupee devalued 57% against the US Dollar under World Bank pressure — inflation spikes." }, { tag: "Culture", text: "Ustad Bismillah Khan performs at first Republic Day after Indira Gandhi's swearing-in." }] },
  1967: { headline: "Fourth General Elections & White Revolution (Operation Flood) Begins", summary: "Dr. Verghese Kurien launched milk co-operative models in Anand, Gujarat.", sideStories: [{ tag: "Cinema", text: "'Jewel Thief' with Dev Anand — Bollywood's first major spy-thriller genre film." }, { tag: "Science", text: "India performs the first open-heart surgery at AIIMS New Delhi." }] },
  1968: { headline: "Nuclear Non-Proliferation Treaty (NPT) Refused by India", summary: "India maintained sovereign autonomy regarding peaceful nuclear technology.", sideStories: [{ tag: "Cinema", text: "Padosan and Brahmachari release — comedy golden era in Hindi cinema." }, { tag: "Sports", text: "India wins 7th Olympic gold medal in field hockey at Mexico City 1968 Games." }] },
  1969: { headline: "14 Major Private Banks Nationalized & ISRO Officially Formed", summary: "PM Indira Gandhi nationalized top banks; ISRO formally established on Aug 15.", sideStories: [{ tag: "Culture", text: "Jawaharlal Nehru University (JNU) established in New Delhi — becomes India's flagship research university." }, { tag: "Economy", text: "Maruti Udyog proposed by Sanjay Gandhi; sets ground for India's automobile revolution." }] },
  1970: { headline: "Operation Flood (White Revolution) Launched Nationally", summary: "Dairy farming transformed India into the world's largest milk producer.", sideStories: [{ tag: "Cinema", text: "'Mera Naam Joker' flops spectacularly, nearly ending Raj Kapoor's career — he bounces back." }, { tag: "Economy", text: "License Raj deepens — import licenses control nearly every manufactured good in India." }] },
  1971: { headline: "1971 War Victory & Liberation of Bangladesh", summary: "Indian Armed Forces won a decisive victory, leading to the creation of Bangladesh.", sideStories: [{ tag: "Science", text: "India conducts first successful nuclear reactor test at Trombay — CIRUS goes critical." }, { tag: "Cinema", text: "'Hare Rama Hare Krishna' with Dev Anand — becomes anthem of India's hippie youth era." }] },
  1972: { headline: "Simla Agreement Signed & Project Tiger Announced", summary: "India launched Project Tiger to conserve national wildlife heritage.", sideStories: [{ tag: "Sports", text: "India's hockey team wins Olympic silver at Munich — losing gold to West Germany by 1 goal." }, { tag: "Cinema", text: "Rekha debuts in 'Sawan Bhadon' — Bollywood's next superstar is born." }] },
  1973: { headline: "Maruti Motors Incorporated & Chipko Movement Begins", summary: "Villagers in Uttarakhand hugged trees to prevent deforestation.", sideStories: [{ tag: "Cinema", text: "'Zanjeer' releases — Amitabh Bachchan becomes the Angry Young Man of Bollywood." }, { tag: "Economy", text: "First global oil crisis hits India hard — petrol rationing enforced in major cities." }] },
  1974: { headline: "Smiling Buddha: India Conducts First Peaceful Nuclear Test in Pokhran", summary: "India demonstrated indigenous nuclear capability in Rajasthan.", sideStories: [{ tag: "Cinema", text: "'Sholay' begins shooting — will become India's most iconic film of all time." }, { tag: "Economy", text: "Railway workers go on historic strike — over 1.7 million participate, Indira Gandhi cracks down." }] },
  1975: { headline: "Aryabhata Satellite Launched & Sholay Dominates Cinemas", summary: "ISRO placed its first satellite in orbit while Sholay redefined Hindi cinema.", sideStories: [{ tag: "National", text: "PM Indira Gandhi declares Emergency — press censored, civil liberties suspended nationwide." }, { tag: "Sports", text: "India wins 8th Olympic gold in field hockey at Montreal 1976 — a legendary run ends there." }] },
  1976: { headline: "42nd Constitutional Amendment & National Population Policy", summary: "India added 'Secular' and 'Socialist' to the Preamble of the Constitution.", sideStories: [{ tag: "Cinema", text: "Amitabh Bachchan's 'Kabhi Kabhie' and 'Amar Akbar Anthony' cement his superstar status." }, { tag: "Science", text: "SITE experiment: ISRO uses NASA ATS-6 satellite to broadcast educational TV to 2,400 Indian villages." }] },
  1977: { headline: "Historic Post-Emergency Elections & First Non-Congress Govt", summary: "Morarji Desai became Prime Minister heading the Janata Party government.", sideStories: [{ tag: "Cinema", text: "'Amar Akbar Anthony' releases — one of Bollywood's biggest blockbusters of the decade." }, { tag: "Sports", text: "Sunil Gavaskar scores his famous 221 against England at The Oval — India's golden batting era begins." }] },
  1978: { headline: "First Test-Tube Baby of India (Kanupriya/Durga) Born in Kolkata", summary: "Dr. Subhash Mukhopadhyay pioneered IVF treatment in India.", sideStories: [{ tag: "Cinema", text: "'Don' and 'Muqaddar Ka Sikandar' — Amitabh Bachchan's double blockbuster year." }, { tag: "Economy", text: "Foreign Exchange Regulation Act (FERA) forces Coca-Cola to exit India — Thums Up is born." }] },
  1979: { headline: "Bhaskara-I Earth Observation Satellite Launched by ISRO", summary: "ISRO advanced remote sensing applications for Indian agriculture.", sideStories: [{ tag: "National", text: "Morarji Desai's Janata Government collapses — political chaos returns ahead of 1980 elections." }, { tag: "Cinema", text: "'Misal' wins National Award — Parallel cinema gaining recognition alongside commercial blockbusters." }] },
  1980: { headline: "SLV-3 Successfully Places Rohini Satellite in Orbit", summary: "Dr. APJ Abdul Kalam directed India's first successful satellite launch vehicle.", sideStories: [{ tag: "National", text: "Indira Gandhi returns to power with massive mandate; Sanjay Gandhi dies in a plane crash." }, { tag: "Cinema", text: "'Karz' with Rishi Kapoor releases — becomes cult classic with its reincarnation theme." }] },
  1981: { headline: "First Indian Antarctic Expedition (Operation Gangotri) Departs", summary: "Indian scientists established research bases in Antarctica.", sideStories: [{ tag: "Cinema", text: "'Umrao Jaan' with Rekha is released — considered one of Bollywood's finest period dramas." }, { tag: "Sports", text: "India beats England 1-0 in England for the first time — Dilip Vengsarkar makes 157 at Lord's." }] },
  1982: { headline: "9th Asian Games in New Delhi & Color Television Introduced", summary: "Doordarshan broadcasted in color for the first time across India.", sideStories: [{ tag: "Cinema", text: "'Disco Dancer' with Mithun releases — 'I am a disco dancer' becomes India's cultural catchphrase." }, { tag: "Sports", text: "India wins 82 gold medals at Asian Games — P.T. Usha emerges as the nation's sprint queen." }] },
  1983: { headline: "Kapil Dev Lifts Prudential World Cup & Maruti 800 Launched", summary: "India won its first Cricket World Cup and the iconic Maruti 800 revolutionised roads.", sideStories: [{ tag: "Economy", text: "Maruti 800 rolls off Gurgaon plant — waiting lists extend to 3 years for the ₹40,000 car." }, { tag: "Cinema", text: "'Ardh Satya' with Om Puri wins National Award — police corruption exposed on the big screen." }] },
  1984: { headline: "Rakesh Sharma Flies to Space aboard Soyuz T-11", summary: "'Saare Jahan Se Achha' reverberated across India as Rakesh Sharma looked at Earth.", sideStories: [{ tag: "National", text: "Operation Blue Star at Golden Temple and PM Indira Gandhi's assassination shake the nation." }, { tag: "Economy", text: "Bhopal gas tragedy kills 3,000+ overnight — Union Carbide plant leaks MIC gas." }] },
  1985: { headline: "Telecom Revolution Underway with C-DOT & Sam Pitroda", summary: "STD PCO booths spread across every Indian town and village.", sideStories: [{ tag: "Cinema", text: "'Ram Teri Ganga Maili' releases — Raj Kapoor's controversial last directorial masterpiece." }, { tag: "Sports", text: "India wins Benson & Hedges World Championship in Melbourne — cricket is king." }] },
  1986: { headline: "Speed Post Launched by India Post & Science Education Drive", summary: "Modern courier services and administrative reforms expanded.", sideStories: [{ tag: "Cinema", text: "'Nagina' with Sridevi and 'Karma' with Dilip Kumar among massive Bollywood releases." }, { tag: "Culture", text: "Ramayana begins airing on Doordarshan — traffic in India literally stops on Sunday mornings." }] },
  1987: { headline: "Gavaskar Scores 10,000 Test Runs & Goa Becomes 25th State", summary: "Sunil Gavaskar became the first batsman to cross 10,000 runs.", sideStories: [{ tag: "Cinema", text: "'Mr. India' releases — Anil Kapoor's invisible hero fights villain Mogambo in a cult classic." }, { tag: "Economy", text: "India's foreign exchange reserves fall to critical levels — a prelude to the 1991 crisis." }] },
  1988: { headline: "SEBI Formed & Voting Age Lowered from 21 to 18 Years", summary: "Youth participation in Indian democracy expanded under the 61st Amendment.", sideStories: [{ tag: "Cinema", text: "'Tezaab' and 'Qayamat Se Qayamat Tak' release — Aamir and Madhuri become stars." }, { tag: "Sports", text: "India's PT Usha just misses Olympic bronze by 1/100th of a second at Seoul — heartbreak." }] },
  1989: { headline: "Agni-I Missile Successfully Tested in Chandipur", summary: "India tested its long-range indigenous strategic ballistic missile.", sideStories: [{ tag: "Cinema", text: "'Maine Pyar Kiya' launches Salman Khan to superstardom — India's #1 film of the decade." }, { tag: "National", text: "V.P. Singh leads National Front to power — Congress suffers major electoral defeat." }] },
  1990: { headline: "Mandal Commission Recommendations Implemented", summary: "Social inclusion policies and reservations shaped national socio-political discourse.", sideStories: [{ tag: "Cinema", text: "'Dil' and 'Ghayal' — Aamir Khan and Sunny Deol rule the box office." }, { tag: "Economy", text: "India approaches foreign exchange crisis; gold mortgaged to Bank of England for emergency loans." }] },
  1991: { headline: "Economic Reforms: Manmohan Singh Dismantles License Raj", summary: "India embraced free-market globalization, spurring private enterprise and tech growth.", sideStories: [{ tag: "National", text: "PM Rajiv Gandhi assassinated on May 21 by an LTTE suicide bomber in Tamil Nadu." }, { tag: "Cinema", text: "'Lamhe' and 'Saathi' — Yash Raj Films takes Hindi cinema to overseas audiences." }] },
  1992: { headline: "Satyajit Ray Awarded Honorary Oscar & Panchayati Raj Act", summary: "Grassroots village self-governance gained constitutional backing.", sideStories: [{ tag: "National", text: "Babri Masjid demolished on December 6 — communal riots sweep across major Indian cities." }, { tag: "Economy", text: "Harshad Mehta scam: ₹4,000 crore bank securities fraud collapses Bombay Stock Exchange." }] },
  1993: { headline: "NSE (National Stock Exchange) Incorporated with Screen Trading", summary: "Modern electronic stock exchanges transformed financial markets in India.", sideStories: [{ tag: "Cinema", text: "'Darr', 'Baazigar', and '1942: A Love Story' — Shah Rukh Khan becomes the next superstar." }, { tag: "Economy", text: "Rupee made partially convertible — India integrates into global currency markets." }] },
  1994: { headline: "Sushmita Sen (Miss Universe) & Aishwarya Rai (Miss World) Crowned", summary: "Indian beauty and talent dominated global international pageants.", sideStories: [{ tag: "Cinema", text: "'Hum Aapke Hain Koun..!' becomes the highest-grossing Bollywood film to date." }, { tag: "Economy", text: "NASSCOM reports: India's software exports cross $1 billion — IT revolution quietly begins." }] },
  1995: { headline: "First Cellular Mobile Phone Call in India (Kolkata to Delhi)", summary: "West Bengal CM Jyoti Basu called Union Minister Sukh Ram on a Nokia phone.", sideStories: [{ tag: "Cinema", text: "'Dilwale Dulhania Le Jayenge' releases — becomes India's longest-running film in theatres." }, { tag: "Economy", text: "Infosys lists on NSE — Indian IT companies begin their global ascent on public markets." }] },
  1996: { headline: "Leander Paes Wins Bronze at Atlanta Olympics", summary: "India earned an individual Olympic medal in tennis after 44 years.", sideStories: [{ tag: "Cinema", text: "'Raja Hindustani' and '1942: A Love Story' dominate box office; Aamir and Ajay rising." }, { tag: "Economy", text: "India hosts first ICC World Cup; Sharjah matches define TV cricket advertising boom." }] },
  1997: { headline: "Golden Jubilee of Indian Independence Celebrated", summary: "India marked 50 years of independence with nationwide illuminations and concerts.", sideStories: [{ tag: "Cinema", text: "'Border' starring Sunny Deol earns massive box office on the back of patriotic sentiment." }, { tag: "Economy", text: "IT sector boom: Indian software firms begin mass hiring of engineers in Bengaluru and Hyderabad." }] },
  1998: { headline: "Pokhran-II Nuclear Tests (Operation Shakti) Executed", summary: "India declared itself a full nuclear weapons state under PM Atal Bihari Vajpayee.", sideStories: [{ tag: "Economy", text: "US imposes economic sanctions after Pokhran-II — Indian rupee weakens significantly." }, { tag: "Cinema", text: "'Kuch Kuch Hota Hai' releases — SRK, Kajol, Rani define an era of Indian romance." }] },
  1999: { headline: "Kargil Victory (Operation Vijay) & Golden Quadrilateral Project", summary: "Indian forces secured high mountain peaks; national highway construction commenced.", sideStories: [{ tag: "Cinema", text: "'Hum Dil De Chuke Sanam' and 'Sarfarosh' — Salman and Aamir both at their peak." }, { tag: "Economy", text: "India's first domestic private airline — Go Air and Air Deccan models being conceived." }] },
  2000: { headline: "India's Population Touches 1 Billion & IT Boom Flourishes", summary: "Indian software engineers in Bengaluru and Hyderabad powered global Y2K solutions.", sideStories: [{ tag: "Sports", text: "Karnam Malleswari becomes India's first woman Olympic medalist — Bronze in Weightlifting at Sydney." }, { tag: "Cinema", text: "'Refugee' marks Abhishek Bachchan's debut; 'Mission Kashmir' and 'Mela' release same year." }] },
  2001: { headline: "Sarva Shiksha Abhiyan Launched & Lagaan Nominated for Oscar", summary: "Universal elementary education initiative launched across all Indian districts.", sideStories: [{ tag: "National", text: "January 26: Bhuj earthquake kills 20,000 people in Gujarat — India's worst natural disaster in decades." }, { tag: "Economy", text: "Dot-com bust arrives in India — dozens of Bengaluru startups fold overnight." }] },
  2002: { headline: "Delhi Metro Begins Commercial Operations", summary: "India's modern urban mass transit network opened between Shahdara and Tis Hazari.", sideStories: [{ tag: "Cinema", text: "'Devdas' with SRK, 'Raaz', and 'Company' — a diverse year for Bollywood storytelling." }, { tag: "National", text: "Gujarat riots shake the country; over 1,000 people perish in communal violence." }] },
  2003: { headline: "Chandrayaan-1 Space Mission Approved by PM Vajpayee", summary: "India announced plans for lunar exploration on Independence Day.", sideStories: [{ tag: "Sports", text: "Saurav Ganguly's aggressive India beats Pakistan 6-1 in the ODI series — new era of firepower." }, { tag: "Cinema", text: "'Kal Ho Naa Ho' and 'Koi... Mil Gaya' — Bollywood experiments with NRI themes and sci-fi." }] },
  2004: { headline: "Dr. Manmohan Singh Becomes Prime Minister", summary: "United Progressive Alliance took office, prioritizing economic growth and rural relief.", sideStories: [{ tag: "National", text: "Indian Ocean Tsunami kills 12,000+ in Tamil Nadu and Andaman Islands on December 26." }, { tag: "Sports", text: "India tour of Pakistan: Sehwag blazes 309 in Multan — first triple century by an Indian in Tests." }] },
  2005: { headline: "RTI (Right to Information Act) & MGNREGA Passed by Parliament", summary: "Landmark laws empowered citizens with transparency and guaranteed rural employment.", sideStories: [{ tag: "Cinema", text: "'Black' with Amitabh Bachchan and Rani wins 11 Filmfare Awards — a watershed film." }, { tag: "Economy", text: "Real estate boom: Mumbai apartment prices double in 18 months; SEZ policy creates new IT campuses." }] },
  2006: { headline: "Indo-US Civil Nuclear Agreement Framework Progresses", summary: "Global nuclear commerce barriers were cleared for civilian energy development.", sideStories: [{ tag: "National", text: "Mumbai train bombings on July 11 kill 209 people — the city grieves but endures." }, { tag: "Cinema", text: "'Rang De Basanti' and 'Lage Raho Munna Bhai' — cinema inspires India's activist generation." }] },
  2007: { headline: "Pratibha Patil Sworn in as India's First Woman President", summary: "India celebrated a historic milestone in presidential governance.", sideStories: [{ tag: "Sports", text: "MS Dhoni leads India to inaugural T20 World Cup — Joginder Sharma's last over becomes legend." }, { tag: "Economy", text: "Sensex crosses 20,000 for the first time ever — euphoric bull run sweeps Indian markets." }] },
  2008: { headline: "Chandrayaan-1 Discovers Water Molecules on the Moon", summary: "ISRO's Moon Impact Probe confirmed water ice presence on the lunar surface.", sideStories: [{ tag: "Sports", text: "Abhinav Bindra wins India's first individual Olympic Gold Medal at Beijing — rifle shooting." }, { tag: "National", text: "26/11 Mumbai attacks: 166 killed in 60-hour siege at Taj Hotel and across the city." }] },
  2009: { headline: "Aadhaar Unique Identification Authority (UIDAI) Formed", summary: "Biometric identity system started issuing 12-digit Aadhaar numbers.", sideStories: [{ tag: "Cinema", text: "'Dev.D' reimagines Devdas; '3 Idiots' becomes India's highest-grossing film." }, { tag: "National", text: "Delhi High Court decriminalises homosexuality — a landmark judgment for LGBTQ+ rights in India." }] },
  2010: { headline: "Commonwealth Games Delhi 2010 Successfully Hosted", summary: "New Delhi hosted athletes from 71 Commonwealth nations.", sideStories: [{ tag: "Cinema", text: "'Dabangg' with Salman Khan — iconic masala entertainer rewrites box office records." }, { tag: "Economy", text: "2G spectrum scam worth ₹1.76 lakh crore exposed — India's biggest corporate scandal." }] },
  2011: { headline: "India Wins ICC Cricket World Cup & Census 2011 Conducted", summary: "Millions erupted in celebration across every Indian city as Dhoni struck the winning SIX.", sideStories: [{ tag: "National", text: "Anna Hazare leads anti-corruption movement at Ramlila Maidan — lakhs join the fast." }, { tag: "Cinema", text: "'Zindagi Na Milegi Dobara' redefines the Bollywood buddy travel film genre." }] },
  2012: { headline: "Mary Kom Wins Bronze at London Olympics & Polio Free Status", summary: "WHO declared India free of wild polio transmission.", sideStories: [{ tag: "National", text: "Nirbhaya gang rape case sparks massive protests across India — demands for faster justice." }, { tag: "Economy", text: "FDI in multi-brand retail approved — Walmart and Carrefour eye massive Indian market." }] },
  2013: { headline: "ISRO Launches Mangalyaan (Mars Orbiter Mission)", summary: "India embarked on its historic interplanetary journey to Mars.", sideStories: [{ tag: "Cinema", text: "'Dhoom 3' and 'Yeh Jawaani Hai Deewani' — Aamir and Ranbir Kapoor battle the box office." }, { tag: "National", text: "Supreme Court reinstates Section 377 — LGBTQ+ community protests across Indian cities." }] },
  2014: { headline: "Narendra Modi Sworn in as Prime Minister & Jan Dhan Yojana", summary: "Financial inclusion program opened bank accounts for over 400 million citizens.", sideStories: [{ tag: "Science", text: "India becomes 4th nation to successfully reach Mars orbit — Mangalyaan achieves orbit on first try." }, { tag: "Cinema", text: "'PK' breaks all records; Aamir Khan's religious satire courts massive controversy." }] },
  2015: { headline: "Digital India & International Day of Yoga Celebrated", summary: "United Nations recognised June 21 as International Yoga Day.", sideStories: [{ tag: "Economy", text: "'Make in India' launch attracts Samsung and Xiaomi to set up manufacturing in India." }, { tag: "Cinema", text: "'Bajrangi Bhaijaan' earns ₹320 crore in China alone — Salman Khan goes global." }] },
  2016: { headline: "UPI (Unified Payments Interface) Launched by NPCI", summary: "Instant mobile QR code payments revolutionised Indian commerce.", sideStories: [{ tag: "Economy", text: "Demonetisation of ₹500 and ₹1,000 notes — massive shock to India's cash economy overnight." }, { tag: "Sports", text: "PV Sindhu wins Olympic silver at Rio; Sakshi Malik takes bronze — India's best Games haul." }] },
  2017: { headline: "GST (Goods & Services Tax) Implemented at Midnight", summary: "Unified single tax structure replaced fragmented state taxes across India.", sideStories: [{ tag: "Science", text: "ISRO launches 104 satellites in one rocket — breaks global record for most satellites in one launch." }, { tag: "Cinema", text: "'Dangal' crosses ₹2,000 crore in China — India's biggest-ever cross-border box office success." }] },
  2018: { headline: "Statue of Unity (World's Tallest) Inaugurated in Gujarat", summary: "182-meter statue of Sardar Vallabhbhai Patel opened on the banks of Narmada.", sideStories: [{ tag: "Sports", text: "India win Asia Cup; Rohit Sharma hits 3 centuries — becomes most prolific World Cup centurion." }, { tag: "Economy", text: "India surpasses France to become 6th largest economy — GDP crosses $2.7 trillion." }] },
  2019: { headline: "Chandrayaan-2 Launch & Article 370 Abrogated", summary: "ISRO launched lunar orbiter while administrative governance was restructured.", sideStories: [{ tag: "Cinema", text: "'Uri: The Surgical Strike' — 'How's the josh?' becomes India's patriotic catchphrase of the year." }, { tag: "Sports", text: "India wins first ICC ranking of #1 in all three formats — a clean sweep of global cricket rankings." }] },
  2020: { headline: "Vande Bharat Mission & Indigenous Vaccine Development", summary: "India evacuated citizens globally and initiated Covaxin / Covishield research.", sideStories: [{ tag: "Economy", text: "GDP contracts 23.9% in Q1 — India's sharpest peacetime economic contraction ever recorded." }, { tag: "Cinema", text: "OTT platforms boom: Netflix and Amazon see 100M new Indian subscribers during lockdown." }] },
  2021: { headline: "India Crosses 1 Billion COVID Vaccine Doses Administered", summary: "CoWIN platform coordinated the world's largest vaccination drive.", sideStories: [{ tag: "Sports", text: "India beat Australia 2-1 in Tests despite injuries — Rishabh Pant's Gabba chase stuns the world." }, { tag: "National", text: "Pegasus spyware scandal — Indian journalists and politicians allegedly targeted by surveillance." }] },
  2022: { headline: "Droupadi Murmu Sworn in as First Tribal President of India", summary: "India celebrated 75 years of Independence with Azadi Ka Amrit Mahotsav.", sideStories: [{ tag: "Economy", text: "India's UPI records 46 billion transactions in a single year — digital payments redefine commerce." }, { tag: "Cinema", text: "'RRR' and 'KGF Chapter 2' conquer India and go viral globally — South Indian cinema goes worldwide." }] },
  2023: { headline: "Chandrayaan-3 Lands on Moon's South Pole & G20 Summit in Delhi", summary: "India hosted world leaders at Bharat Mandapam and landed on the lunar south pole.", sideStories: [{ tag: "Sports", text: "ICC Cricket World Cup at home — India wins 10 straight but loses controversial final to Australia." }, { tag: "Economy", text: "India surpasses China as world's most populous nation with 1.43 billion people." }] },
  2024: { headline: "Ram Mandir Pran Pratishtha & T20 World Cup Victory", summary: "Grand consecration in Ayodhya and India won the 2024 ICC T20 World Cup.", sideStories: [{ tag: "Science", text: "Aditya-L1 becomes India's first solar observatory successfully placed at Lagrange point L1." }, { tag: "Cinema", text: "'Kalki 2898 AD' crosses ₹1,000 crore — Indian sci-fi epic rewrites expectations for the genre." }] },
  2025: { headline: "India Becomes 4th Largest Global Economy & Semiconductor Fabs Commissioned", summary: "High-tech semiconductor fabrication plants commissioned in Dholera and Sanand.", sideStories: [{ tag: "Science", text: "Gaganyaan crew completes final preflight tests — India's human spaceflight imminent." }, { tag: "Economy", text: "India's Unified Payments Interface adopted by 8 countries globally — fintech diplomacy." }] },
  2026: { headline: "Gaganyaan Human Spaceflight Mission & 100% Green Energy Grids", summary: "Indian Vyomnauts prepare for spaceflight while solar and green hydrogen power nation.", sideStories: [{ tag: "Economy", text: "India's stock market capitalisation surpasses $6 trillion — 3rd largest in the world." }, { tag: "Culture", text: "India hosts the FIFA World Cup for the first time — massive investment in stadiums begins." }] }
};

export interface HeadlineBundle {
  main: IndianHeadline;
  sideStories: { tag: string; text: string }[];
}

export function getIndianHeadlineBundle(date: Date): HeadlineBundle {
  const yyyy = date.getFullYear();
  const monthIdx = date.getMonth();
  const day = date.getDate();
  const mm = String(monthIdx + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  const dateKey = `${yyyy}-${mm}-${dd}`;

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthStr = monthNames[monthIdx];

  // 1. Check exact historic match first
  if (EXACT_HISTORICAL_EVENTS[dateKey]) {
    const main = EXACT_HISTORICAL_EVENTS[dateKey];
    const yearSnap = YEARLY_INDIAN_SNAPSHOTS[yyyy];
    return {
      main,
      sideStories: yearSnap?.sideStories ?? [
        { tag: 'Culture', text: "India's cultural and artistic scene flourished throughout this era." },
        { tag: 'Economy', text: 'Economic growth and development continued in this period.' }
      ]
    };
  }

  // 2. Check yearly snapshot and customize for exact day
  const yearSnapshot = YEARLY_INDIAN_SNAPSHOTS[yyyy];
  if (yearSnapshot) {
    // Generate a day-specific headline variant so different days in the same year look distinct
    const dayHeadline = `${monthStr} ${day}, ${yyyy} Front Page: ${yearSnapshot.headline}`;
    
    return {
      main: {
        headlineText: dayHeadline,
        sourcePaper: "National Indian Archives / Press Bureau",
        description: `On this day in ${monthStr} ${yyyy}, ${yearSnapshot.summary}`,
        category: 'National',
        isExactDateMatch: false
      },
      sideStories: yearSnapshot.sideStories
    };
  }

  // 3. Fallback for dates outside 1947-2026 range
  return {
    main: {
      headlineText: `${monthStr} ${day}, ${yyyy} Historical Bulletin: Cultural & Economic Gazette`,
      sourcePaper: "Historical Reference Gazette",
      description: `On ${monthStr} ${day}, ${yyyy}, India was progressing with rich cultural traditions, local music releases, and nationwide economic growth.`,
      category: 'Culture',
      isExactDateMatch: false
    },
    sideStories: [
      { tag: 'Culture', text: 'Bollywood music and radio plays were defining entertainment across the subcontinent.' },
      { tag: 'Economy', text: "Agricultural and industrial growth shaped India's economic landscape." }
    ]
  };
}

// Keep old function for backwards compat
export function getIndianHeadline(date: Date) {
  return getIndianHeadlineBundle(date).main;
}
