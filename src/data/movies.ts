export interface IndianMovie {
  year: number;
  title: string;
  genre: string;
  stars: string;
  iconicDialogue: string;
  boxOfficeStatus: string;
  alternativeTitles?: string[];
}

export const HISTORICAL_MOVIES: Record<number, IndianMovie> = {
  1947: {
    year: 1947,
    title: 'Jugnu',
    genre: 'Romantic Drama',
    stars: 'Dilip Kumar & Noor Jehan',
    iconicDialogue: 'Desh ki azadi aur mohabbat ka pehla saal.',
    boxOfficeStatus: 'Highest Grosser of 1947',
    alternativeTitles: ['Jugnu', 'Mirza Ghalib']
  },
  1948: {
    year: 1948,
    title: 'Chandralekha',
    genre: 'Epic Action Drama',
    stars: 'T. R. Rajakumari & M. K. Radha',
    iconicDialogue: 'The spectacle that put Indian cinema on the global map.',
    boxOfficeStatus: 'All-Time Record Blockbuster',
    alternativeTitles: ['Chandralekha', 'Shaheed']
  },
  1949: {
    year: 1949,
    title: 'Barsaat',
    genre: 'Romantic Musical',
    stars: 'Raj Kapoor & Nargis',
    iconicDialogue: 'Barsaat mein jab mile hum tum...',
    boxOfficeStatus: 'Highest Grossing Film of 1949',
    alternativeTitles: ['Barsaat', 'Andaz']
  },
  1950: {
    year: 1950,
    title: 'Babul',
    genre: 'Musical Drama',
    stars: 'Dilip Kumar & Nargis',
    iconicDialogue: 'Chhod babul ka ghar...',
    boxOfficeStatus: 'Blockbuster of 1950',
    alternativeTitles: ['Babul', 'Samadhi']
  },
  1951: {
    year: 1951,
    title: 'Awara',
    genre: 'Classic Musical Drama',
    stars: 'Raj Kapoor & Nargis',
    iconicDialogue: 'Awara hoon, ya gardish mein hoon aasmaan ka taara hoon!',
    boxOfficeStatus: 'Global Landmark Blockbuster',
    alternativeTitles: ['Awara', 'Baazi']
  },
  1952: {
    year: 1952,
    title: 'Aan',
    genre: 'Technicolor Action Epic',
    stars: 'Dilip Kumar & Nadira',
    iconicDialogue: 'India\'s first full Technicolor extravaganza.',
    boxOfficeStatus: 'Record-Breaking Blockbuster',
    alternativeTitles: ['Aan', 'Baiju Bawra']
  },
  1953: {
    year: 1953,
    title: 'Do Bigha Zamin',
    genre: 'Social Realist Classic',
    stars: 'Balraj Sahni & Nirupa Roy',
    iconicDialogue: 'Apni dharti, apna swabhiman.',
    boxOfficeStatus: 'Cannes International Winner',
    alternativeTitles: ['Do Bigha Zamin', 'Anarkali']
  },
  1954: {
    year: 1954,
    title: 'Naggin',
    genre: 'Fantasy Musical',
    stars: 'Vyjayanthimala & Pradeep Kumar',
    iconicDialogue: 'Man dole mera tan dole...',
    boxOfficeStatus: 'Highest Grosser of 1954',
    alternativeTitles: ['Naggin', 'Boot Polish']
  },
  1955: {
    year: 1955,
    title: 'Shree 420',
    genre: 'Social Comedy Drama',
    stars: 'Raj Kapoor & Nargis',
    iconicDialogue: 'Mera joota hai Japani, yeh patloon Inglistani...',
    boxOfficeStatus: 'Global Box Office Sensation',
    alternativeTitles: ['Shree 420', 'Devdas']
  },
  1956: {
    year: 1956,
    title: 'C.I.D.',
    genre: 'Crime Mystery Thriller',
    stars: 'Dev Anand & Waheeda Rehman',
    iconicDialogue: 'Yeh hai Bombay meri jaan!',
    boxOfficeStatus: 'Superhit Thriller of 1956',
    alternativeTitles: ['C.I.D.', 'Chori Chori']
  },
  1957: {
    year: 1957,
    title: 'Mother India',
    genre: 'Epic Social Drama',
    stars: 'Nargis, Sunil Dutt & Rajendra Kumar',
    iconicDialogue: 'Main iss dharti ki beti hoon aur issi dharti mein mil jaungi.',
    boxOfficeStatus: 'Academy Award Nominee & All-Time Classic',
    alternativeTitles: ['Mother India', 'Pyaasa']
  },
  1958: {
    year: 1958,
    title: 'Madhumati',
    genre: 'Romantic Gothic Mystery',
    stars: 'Dilip Kumar & Vyjayanthimala',
    iconicDialogue: 'Dil tadap tadap ke keh raha hai aa bhi jaa...',
    boxOfficeStatus: 'Highest Grosser of 1958',
    alternativeTitles: ['Madhumati', 'Chalti Ka Naam Gaadi']
  },
  1959: {
    year: 1959,
    title: 'Anari',
    genre: 'Romantic Drama',
    stars: 'Raj Kapoor & Nutan',
    iconicDialogue: 'Kisi ki muskurahoton pe ho nisar...',
    boxOfficeStatus: 'Blockbuster Hit of 1959',
    alternativeTitles: ['Anari', 'Kaagaz Ke Phool']
  },
  1960: {
    year: 1960,
    title: 'Mughal-e-Azam',
    genre: 'Historical Epic Romance',
    stars: 'Dilip Kumar, Madhubala & Prithviraj Kapoor',
    iconicDialogue: 'Taqdeerein badal jaati hain, zamana badal jaata hai... par hamari mohabbat nahi badlegi!',
    boxOfficeStatus: 'All-Time Record-Breaking Masterpiece',
    alternativeTitles: ['Mughal-e-Azam', 'Chaudhvin Ka Chand']
  },
  1961: {
    year: 1961,
    title: 'Gunga Jumna',
    genre: 'Dacoit Action Drama',
    stars: 'Dilip Kumar & Vyjayanthimala',
    iconicDialogue: 'Insaaf ki devi ki aankhon par patti hoti hai.',
    boxOfficeStatus: 'Highest Grossing Film of 1961',
    alternativeTitles: ['Gunga Jumna', 'Junglee']
  },
  1962: {
    year: 1962,
    title: 'Bees Saal Baad',
    genre: 'Supernatural Mystery',
    stars: 'Biswajeet & Waheeda Rehman',
    iconicDialogue: 'Kahin deep jale kahin dil...',
    boxOfficeStatus: 'Highest Grossing Hit of 1962',
    alternativeTitles: ['Bees Saal Baad', 'Professor']
  },
  1963: {
    year: 1963,
    title: 'Mere Mehboob',
    genre: 'Romantic Musical',
    stars: 'Rajendra Kumar & Sadhana',
    iconicDialogue: 'Mere mehboob tujhe meri mohabbat ki kasam...',
    boxOfficeStatus: 'Highest Grosser of 1963',
    alternativeTitles: ['Mere Mehboob', 'Gumrah']
  },
  1964: {
    year: 1964,
    title: 'Sangam',
    genre: 'Technicolor Romantic Drama',
    stars: 'Raj Kapoor, Vyjayanthimala & Rajendra Kumar',
    iconicDialogue: 'Har dil jo pyar karega woh gaana gaayega...',
    boxOfficeStatus: 'Blockbuster Landmark Film',
    alternativeTitles: ['Sangam', 'Dosti']
  },
  1965: {
    year: 1965,
    title: 'Guide',
    genre: 'Romantic Philosophical Drama',
    stars: 'Dev Anand & Waheeda Rehman',
    iconicDialogue: 'Na sukh hai na dukh hai, na deen hai na duniya...',
    boxOfficeStatus: 'All-Time Indian Cinema Masterpiece',
    alternativeTitles: ['Guide', 'Waqt']
  },
  1966: {
    year: 1966,
    title: 'Phool Aur Patthar',
    genre: 'Action Drama',
    stars: 'Dharmendra & Meena Kumari',
    iconicDialogue: 'Dharmendra\'s breakthrough iconic action avatar.',
    boxOfficeStatus: 'Highest Grosser of 1966',
    alternativeTitles: ['Phool Aur Patthar', 'Teesri Manzil']
  },
  1967: {
    year: 1967,
    title: 'Upkar',
    genre: 'Patriotic Drama',
    stars: 'Manoj Kumar & Asha Parekh',
    iconicDialogue: 'Mere desh ki dharti sona ugle ugle heere moti...',
    boxOfficeStatus: 'National Film Award Winner & Blockbuster',
    alternativeTitles: ['Upkar', 'Ram Aur Shyam']
  },
  1968: {
    year: 1968,
    title: 'Padosan',
    genre: 'Musical Comedy Classic',
    stars: 'Sunil Dutt, Saira Banu, Kishore Kumar & Mehmood',
    iconicDialogue: 'Ek chatur naar karke singaar...',
    boxOfficeStatus: 'All-Time Comedy Gold',
    alternativeTitles: ['Padosan', 'Aankhen']
  },
  1969: {
    year: 1969,
    title: 'Aradhana',
    genre: 'Romantic Musical',
    stars: 'Rajesh Khanna & Sharmila Tagore',
    iconicDialogue: 'Roop tera mastana, pyar mera deewana...',
    boxOfficeStatus: 'Superstar Rajesh Khanna Era Begins',
    alternativeTitles: ['Aradhana', 'Do Raaste']
  },
  1970: {
    year: 1970,
    title: 'Johny Mera Naam',
    genre: 'Crime Action Thriller',
    stars: 'Dev Anand & Hema Malini',
    iconicDialogue: 'Pal bhar ke liye koi hame pyar kar le...',
    boxOfficeStatus: 'Highest Grosser of 1970',
    alternativeTitles: ['Johny Mera Naam', 'Mera Naam Joker']
  },
  1971: {
    year: 1971,
    title: 'Haathi Mere Saathi',
    genre: 'Family Emotion Drama',
    stars: 'Rajesh Khanna & Tanuja',
    iconicDialogue: 'Chal chal chal mere saathi, o mere haathi...',
    boxOfficeStatus: 'Record-Breaking Family Hit',
    alternativeTitles: ['Haathi Mere Saathi', 'Anand']
  },
  1972: {
    year: 1972,
    title: 'Pakeezah',
    genre: 'Musical Romantic Classic',
    stars: 'Meena Kumari & Raaj Kumar',
    iconicDialogue: 'Aapke paon dekhe, bahut haseen hain... inhein zameen par mat rakhiyega, maile ho jayenge.',
    boxOfficeStatus: 'Immortal Cult Classic',
    alternativeTitles: ['Pakeezah', 'Seeta Aur Geeta']
  },
  1973: {
    year: 1973,
    title: 'Zanjeer',
    genre: 'Action Crime Thriller',
    stars: 'Amitabh Bachchan, Jaya Bhaduri & Pran',
    iconicDialogue: 'Jab tak baithne ko na kaha jaye sharafat se khade raho. Yeh police station hai tumhare baap ka ghar nahi!',
    boxOfficeStatus: 'Angry Young Man Era Begins',
    alternativeTitles: ['Zanjeer', 'Bobby']
  },
  1974: {
    year: 1974,
    title: 'Roti Kapda Aur Makaan',
    genre: 'Social Action Drama',
    stars: 'Manoj Kumar, Amitabh Bachchan & Zeenat Aman',
    iconicDialogue: 'Mehangai maar gayi...',
    boxOfficeStatus: 'Highest Grossing Hit of 1974',
    alternativeTitles: ['Roti Kapda Aur Makaan', 'Majboor']
  },
  1975: {
    year: 1975,
    title: 'Sholay',
    genre: 'Epic Action Curry Western',
    stars: 'Dharmendra, Amitabh Bachchan, Sanjeev Kumar, Hema Malini & Amjad Khan',
    iconicDialogue: 'Kitne aadmi the? ... Kitne aadmi the, Sambha?!',
    boxOfficeStatus: 'All-Time Biggest Indian Cinema Blockbuster',
    alternativeTitles: ['Sholay', 'Deewaar']
  },
  1976: {
    year: 1976,
    title: 'Laila Majnu',
    genre: 'Romantic Epic',
    stars: 'Rishi Kapoor & Ranjeeta',
    iconicDialogue: 'Husn haazir hai mohabbat ki saza pane ko...',
    boxOfficeStatus: 'Highest Grosser of 1976',
    alternativeTitles: ['Laila Majnu', 'Kabhi Kabhie']
  },
  1977: {
    year: 1977,
    title: 'Amar Akbar Anthony',
    genre: 'Masala Entertainer',
    stars: 'Amitabh Bachchan, Vinod Khanna & Rishi Kapoor',
    iconicDialogue: 'My name is Anthony Gonsalves, main duniya mein akele hoon...',
    boxOfficeStatus: 'Blockbuster Masala Classic',
    alternativeTitles: ['Amar Akbar Anthony', 'Hum Kisise Kum Naheen']
  },
  1978: {
    year: 1978,
    title: 'Don',
    genre: 'Action Crime Thriller',
    stars: 'Amitabh Bachchan & Zeenat Aman',
    iconicDialogue: 'Don ko pakadna mushkil hi nahi, naamumkin hai!',
    boxOfficeStatus: 'Highest Grosser of 1978',
    alternativeTitles: ['Don', 'Trishul', 'Muqaddar Ka Sikandar']
  },
  1979: {
    year: 1979,
    title: 'Suhaag',
    genre: 'Action Masala Drama',
    stars: 'Amitabh Bachchan, Shashi Kapoor & Rekha',
    iconicDialogue: 'O shera waliye tera sher aa gaya!',
    boxOfficeStatus: 'Highest Grosser of 1979',
    alternativeTitles: ['Suhaag', 'Noorie', 'Kaala Patthar']
  },
  1980: {
    year: 1980,
    title: 'Qurbani',
    genre: 'Stylized Action Thriller',
    stars: 'Feroz Khan, Vinod Khanna & Zeenat Aman',
    iconicDialogue: 'Aap jaisa koi meri zindagi mein aaye toh baat ban jaye!',
    boxOfficeStatus: 'Chartbusting Megahit of 1980',
    alternativeTitles: ['Qurbani', 'Dostana', 'Karz']
  },
  1981: {
    year: 1981,
    title: 'Kranti',
    genre: 'Patriotic Action Epic',
    stars: 'Manoj Kumar, Dilip Kumar & Shashi Kapoor',
    iconicDialogue: 'Zindagi ki na toote ladi, pyar kar le ghadi do ghadi...',
    boxOfficeStatus: 'Highest Grosser of 1981',
    alternativeTitles: ['Kranti', 'Laawaris', 'Naseeb']
  },
  1982: {
    year: 1982,
    title: 'Disco Dancer',
    genre: 'Musical Dance Drama',
    stars: 'Mithun Chakraborty & Kim',
    iconicDialogue: 'I am a Disco Dancer! Zindagi mera gaana...',
    boxOfficeStatus: 'Global Soviet & Asian Cult Blockbuster',
    alternativeTitles: ['Disco Dancer', 'Namak Halaal', 'Vidhaata']
  },
  1983: {
    year: 1983,
    title: 'Coolie',
    genre: 'Action Masala Drama',
    stars: 'Amitabh Bachchan & Rishi Kapoor',
    iconicDialogue: 'Sari duniya ka bojh hum uthate hain!',
    boxOfficeStatus: 'Historic Box Office Legend',
    alternativeTitles: ['Coolie', 'Hero', 'Betaab']
  },
  1984: {
    year: 1984,
    title: 'Tohfa',
    genre: 'Romantic Masala Comedy',
    stars: 'Jeetendra, Sridevi & Jaya Prada',
    iconicDialogue: 'Tohfa tohfa tohfa, laya laya laya!',
    boxOfficeStatus: 'Highest Grosser of 1984',
    alternativeTitles: ['Tohfa', 'Sharabi', 'Sharaabi']
  },
  1985: {
    year: 1985,
    title: 'Ram Teri Ganga Maili',
    genre: 'Musical Drama',
    stars: 'Mandakini & Rajiv Kapoor',
    iconicDialogue: 'Ek radha ek meera dono ne shyam ko chaaha...',
    boxOfficeStatus: 'Highest Grosser of 1985',
    alternativeTitles: ['Ram Teri Ganga Maili', 'Pyar Jhukta Nahin']
  },
  1986: {
    year: 1986,
    title: 'Karma',
    genre: 'Patriotic Action Drama',
    stars: 'Dilip Kumar, Nutan & Anil Kapoor',
    iconicDialogue: 'Har karam apna karenge aye watan tere liye...',
    boxOfficeStatus: 'Highest Grosser of 1986',
    alternativeTitles: ['Karma', 'Nagina']
  },
  1987: {
    year: 1987,
    title: 'Mr. India',
    genre: 'Sci-Fi Action Comedy',
    stars: 'Anil Kapoor, Sridevi & Amrish Puri',
    iconicDialogue: 'Mogambo khush hua!',
    boxOfficeStatus: 'Iconic Pop-Culture Blockbuster',
    alternativeTitles: ['Mr. India', 'Hukumat']
  },
  1988: {
    year: 1988,
    title: 'Tezaab',
    genre: 'Action Romance',
    stars: 'Anil Kapoor & Madhuri Dixit',
    iconicDialogue: 'Ek Do Teen... Mohabbat ki ginti shuru!',
    boxOfficeStatus: 'Highest Grosser of 1988',
    alternativeTitles: ['Tezaab', 'Qayamat Se Qayamat Tak']
  },
  1989: {
    year: 1989,
    title: 'Maine Pyar Kiya',
    genre: 'Romantic Youth Drama',
    stars: 'Salman Khan & Bhagyashree',
    iconicDialogue: 'Dosti ka ek usool hai madam: No sorry, no thank you.',
    boxOfficeStatus: 'Highest Grosser of the 80s Decade',
    alternativeTitles: ['Maine Pyar Kiya', 'Ram Lakhan', 'Chandni']
  },
  1990: {
    year: 1990,
    title: 'Dil',
    genre: 'Romantic Drama',
    stars: 'Aamir Khan & Madhuri Dixit',
    iconicDialogue: 'Mujhe neend na aaye, mujhe chain na aaye...',
    boxOfficeStatus: 'Highest Grosser of 1990',
    alternativeTitles: ['Dil', 'Ghayal', 'Aashiqui']
  },
  1991: {
    year: 1991,
    title: 'Saajan',
    genre: 'Romantic Musical',
    stars: 'Sanjay Dutt, Salman Khan & Madhuri Dixit',
    iconicDialogue: 'Mera dil bhi kitna pagal hai yeh pyar toh tumse karta hai...',
    boxOfficeStatus: 'Highest Grosser of 1991',
    alternativeTitles: ['Saajan', 'Hum', 'Saudagar']
  },
  1992: {
    year: 1992,
    title: 'Beta',
    genre: 'Family Drama',
    stars: 'Anil Kapoor & Madhuri Dixit',
    iconicDialogue: 'Dhak dhak karne laga...',
    boxOfficeStatus: 'Highest Grosser of 1992',
    alternativeTitles: ['Beta', 'Deewana', 'Jo Jeeta Wohi Sikandar']
  },
  1993: {
    year: 1993,
    title: 'Baazigar',
    genre: 'Romantic Revenge Thriller',
    stars: 'Shah Rukh Khan, Kajol & Shilpa Shetty',
    iconicDialogue: 'Kabhi kabhi jeetne ke liye kuch haarna bhi padta hai... aur haar kar jeetne wale ko Baazigar kehte hain!',
    boxOfficeStatus: 'Superstar SRK Breakthrough',
    alternativeTitles: ['Baazigar', 'Darr', 'Aankhen']
  },
  1994: {
    year: 1994,
    title: 'Hum Aapke Hain Koun..!',
    genre: 'Family Romance Musical',
    stars: 'Salman Khan & Madhuri Dixit',
    iconicDialogue: 'Didi tera dewar deewana...',
    boxOfficeStatus: 'All-Time Record-Breaking Family Blockbuster',
    alternativeTitles: ['Hum Aapke Hain Koun..!', 'Andaz Apna Apna', 'Mohra']
  },
  1995: {
    year: 1995,
    title: 'Dilwale Dulhania Le Jayenge',
    genre: 'Romantic Drama',
    stars: 'Shah Rukh Khan & Kajol',
    iconicDialogue: 'Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hain, Senorita.',
    boxOfficeStatus: 'Longest-Running Film in Indian Cinema History',
    alternativeTitles: ['Dilwale Dulhania Le Jayenge', 'Karan Arjun', 'Rangeela']
  },
  1996: {
    year: 1996,
    title: 'Raja Hindustani',
    genre: 'Romantic Musical',
    stars: 'Aamir Khan & Karisma Kapoor',
    iconicDialogue: 'Pardesi pardesi jana nahi...',
    boxOfficeStatus: 'Highest Grosser of 1996',
    alternativeTitles: ['Raja Hindustani', 'Agni Sakshi']
  },
  1997: {
    year: 1997,
    title: 'Border',
    genre: 'Epic War Drama',
    stars: 'Sunny Deol, Suniel Shetty & Akshaye Khanna',
    iconicDialogue: 'Sandese aate hain, hamein tadpaate hain... ghar kab aaoge?',
    boxOfficeStatus: 'Historic Patriotic Megahit',
    alternativeTitles: ['Border', 'Dil To Pagal Hai', 'Ishq']
  },
  1998: {
    year: 1998,
    title: 'Kuch Kuch Hota Hai',
    genre: 'Romantic Drama',
    stars: 'Shah Rukh Khan, Kajol & Rani Mukerji',
    iconicDialogue: 'Pyar dosti hai. Agar woh meri sabse achhi dost nahi ban sakti, toh main usse kabhi pyar kar hi nahi sakta.',
    boxOfficeStatus: 'Global Youth Cultural Phenomenon',
    alternativeTitles: ['Kuch Kuch Hota Hai', 'Satya', 'Pyaar To Hona Hi Tha']
  },
  1999: {
    year: 1999,
    title: 'Hum Dil De Chuke Sanam',
    genre: 'Romantic Drama Musical',
    stars: 'Salman Khan, Aishwarya Rai & Ajay Devgn',
    iconicDialogue: 'Chahe tum mujhe pasand karo ya na karo... main tumse pyar karta rahunga.',
    boxOfficeStatus: 'Highest Grosser of 1999',
    alternativeTitles: ['Hum Dil De Chuke Sanam', 'Taal', 'Biwi No. 1']
  },
  2000: {
    year: 2000,
    title: 'Kaho Naa... Pyaar Hai',
    genre: 'Romantic Action Thriller',
    stars: 'Hrithik Roshan & Ameesha Patel',
    iconicDialogue: 'Ek pal ka jeena... Hrithik Dance Phenomenon!',
    boxOfficeStatus: 'Hrithik Craze Superhit',
    alternativeTitles: ['Kaho Naa... Pyaar Hai', 'Mohabbatein', 'Mission Kashmir']
  },
  2001: {
    year: 2001,
    title: 'Gadar: Ek Prem Katha',
    genre: 'Action Period Romance',
    stars: 'Sunny Deol & Ameesha Patel',
    iconicDialogue: 'Hindustan Zindabad tha, Zindabad hai, aur Zindabad rahega!',
    boxOfficeStatus: 'Historic Record All-Time Grosser',
    alternativeTitles: ['Gadar: Ek Prem Katha', 'Lagaan', 'Kabhi Khushi Kabhie Gham']
  },
  2002: {
    year: 2002,
    title: 'Devdas',
    genre: 'Romantic Epic Drama',
    stars: 'Shah Rukh Khan, Aishwarya Rai & Madhuri Dixit',
    iconicDialogue: 'Babuji ne kaha gaon chhod do... Paro ne kaha sharab chhod do... tumne kaha dil chhod do.',
    boxOfficeStatus: 'Cannes Showcase & Megahit',
    alternativeTitles: ['Devdas', 'Kaante', 'Raaz']
  },
  2003: {
    year: 2003,
    title: 'Kal Ho Naa Ho',
    genre: 'Romantic Drama',
    stars: 'Shah Rukh Khan, Preity Zinta & Saif Ali Khan',
    iconicDialogue: 'Hasso, jiyo, muskurao... kya pata kal ho naa ho!',
    boxOfficeStatus: 'Highest Overseas Grosser',
    alternativeTitles: ['Kal Ho Naa Ho', 'Koi... Mil Gaya', 'Munna Bhai M.B.B.S.']
  },
  2004: {
    year: 2004,
    title: 'Veer-Zaara',
    genre: 'Cross-Border Epic Romance',
    stars: 'Shah Rukh Khan & Preity Zinta',
    iconicDialogue: 'Main qaidi no. 786 jail ki salakhon se bahar dekhta hoon...',
    boxOfficeStatus: 'Highest Grosser of 2004',
    alternativeTitles: ['Veer-Zaara', 'Dhoom', 'Main Hoon Na']
  },
  2005: {
    year: 2005,
    title: 'Bunty Aur Babli',
    genre: 'Crime Comedy Romance',
    stars: 'Abhishek Bachchan, Rani Mukerji & Amitabh Bachchan',
    iconicDialogue: 'Kajra re kajra re tere kaare kaare naina...',
    boxOfficeStatus: 'Blockbuster Entertainer',
    alternativeTitles: ['Bunty Aur Babli', 'No Entry', 'Garam Masala']
  },
  2006: {
    year: 2006,
    title: 'Dhoom 2',
    genre: 'Action Heist Thriller',
    stars: 'Hrithik Roshan, Aishwarya Rai & Abhishek Bachchan',
    iconicDialogue: 'Are you ready for the thrill?',
    boxOfficeStatus: 'Highest Grosser of 2006',
    alternativeTitles: ['Dhoom 2', 'Krrish', 'Lage Raho Munna Bhai', 'Don']
  },
  2007: {
    year: 2007,
    title: 'Om Shanti Om',
    genre: 'Reincarnation Drama Comedy',
    stars: 'Shah Rukh Khan & Deepika Padukone',
    iconicDialogue: 'Itni shiddat se maine tumhe paane ki koshish ki hai... ki har zarre ne mujhe tumse milane ki saazish ki hai.',
    boxOfficeStatus: 'Highest Grosser of 2007',
    alternativeTitles: ['Om Shanti Om', 'Taare Zameen Par', 'Welcome', 'Jab We Met']
  },
  2008: {
    year: 2008,
    title: 'Ghajini',
    genre: 'Action Thriller',
    stars: 'Aamir Khan & Asin',
    iconicDialogue: 'Short term memory loss... 15 minutes max!',
    boxOfficeStatus: 'First ₹100 Crore Indian Club Movie',
    alternativeTitles: ['Ghajini', 'Rab Ne Bana Di Jodi', 'Rock On!!']
  },
  2009: {
    year: 2009,
    title: '3 Idiots',
    genre: 'Coming-of-Age Comedy Drama',
    stars: 'Aamir Khan, R. Madhavan & Sharman Joshi',
    iconicDialogue: 'Aal izz well! Kamyabi ke peeche mat bhago, kabil bano... kamyabi jhak maarke peeche aayegi!',
    boxOfficeStatus: 'First ₹200 Crore Indian Club Movie',
    alternativeTitles: ['3 Idiots', 'Ajab Prem Ki Ghazab Kahani', 'Love Aaj Kal']
  },
  2010: {
    year: 2010,
    title: 'Dabangg',
    genre: 'Action Comedy',
    stars: 'Salman Khan & Sonakshi Sinha',
    iconicDialogue: 'Hum tummein itne chhed karenge ki confuse ho jaoge ki saans kahan se lein aur...',
    boxOfficeStatus: 'Chulbul Pandey Craze Blockbuster',
    alternativeTitles: ['Dabangg', 'My Name Is Khan', 'Golmaal 3']
  },
  2011: {
    year: 2011,
    title: 'Zindagi Na Milegi Dobara',
    genre: 'Road Trip Drama',
    stars: 'Hrithik Roshan, Farhan Akhtar & Abhay Deol',
    iconicDialogue: 'Seize the day my friend! Pehle is din ko poori tarah jiyo...',
    boxOfficeStatus: 'Youth Lifestyle Cult Movie',
    alternativeTitles: ['Zindagi Na Milegi Dobara', 'Bodyguard', 'Singham', 'Rockstar']
  },
  2012: {
    year: 2012,
    title: 'Ek Tha Tiger',
    genre: 'Spy Action Thriller',
    stars: 'Salman Khan & Katrina Kaif',
    iconicDialogue: 'Yeh Tiger ki territory hai!',
    boxOfficeStatus: 'Record-Breaking Blockbuster',
    alternativeTitles: ['Ek Tha Tiger', 'Gangs of Wasseypur', 'Barfi!', 'Agneepath']
  },
  2013: {
    year: 2013,
    title: 'Chennai Express',
    genre: 'Action Comedy',
    stars: 'Shah Rukh Khan & Deepika Padukone',
    iconicDialogue: 'Don\'t underestimate the power of a common man!',
    boxOfficeStatus: 'First ₹220 Crore Blockbuster',
    alternativeTitles: ['Chennai Express', 'Yeh Jawaani Hai Deewani', 'Dhoom 3']
  },
  2014: {
    year: 2014,
    title: 'PK',
    genre: 'Satirical Comedy Drama',
    stars: 'Aamir Khan & Anushka Sharma',
    iconicDialogue: 'Wrong number hai saar!',
    boxOfficeStatus: 'First ₹300 Crore Indian Club Movie',
    alternativeTitles: ['PK', 'Kick', 'Queen', 'Haider']
  },
  2015: {
    year: 2015,
    title: 'Bajrangi Bhaijaan',
    genre: 'Emotional Drama',
    stars: 'Salman Khan, Harshaali Malhotra & Kareena Kapoor',
    iconicDialogue: 'Hum Bajrangbali ke bhakt hain, koi kaam chori se nahi karte.',
    boxOfficeStatus: 'All-Time Emotional Blockbuster',
    alternativeTitles: ['Bajrangi Bhaijaan', 'Baahubali: The Beginning', 'Piku']
  },
  2016: {
    year: 2016,
    title: 'Dangal',
    genre: 'Biographical Sports Drama',
    stars: 'Aamir Khan, Fatima Sana Shaikh & Sanya Malhotra',
    iconicDialogue: 'Mhari chhoriyan chhoron se kam hain ke?!',
    boxOfficeStatus: 'Highest Grossing Indian Film in World History (₹2000 Cr+)',
    alternativeTitles: ['Dangal', 'Sultan', 'Neerja', 'Kapoor & Sons']
  },
  2017: {
    year: 2017,
    title: 'Baahubali 2: The Conclusion',
    genre: 'Epic Fantasy Action',
    stars: 'Prabhas, Rana Daggubati & Anushka Shetty',
    iconicDialogue: 'Kattappa ne Baahubali ko kyu maara?',
    boxOfficeStatus: 'All-Time Pan-India Historic Monument',
    alternativeTitles: ['Baahubali 2', 'Tiger Zinda Hai', 'Secret Superstar']
  },
  2018: {
    year: 2018,
    title: 'Sanju',
    genre: 'Biographical Drama',
    stars: 'Ranbir Kapoor & Paresh Rawal',
    iconicDialogue: 'Kuch toh log kahenge, logon ka kaam hai kehna...',
    boxOfficeStatus: 'Highest Grosser of 2018',
    alternativeTitles: ['Sanju', 'Stree', 'Andhadhun', 'Padmaavat']
  },
  2019: {
    year: 2019,
    title: 'War',
    genre: 'Action Thriller',
    stars: 'Hrithik Roshan & Tiger Shroff',
    iconicDialogue: 'Ghungroo toot gaye...',
    boxOfficeStatus: 'Highest Grosser of 2019',
    alternativeTitles: ['War', 'Uri: The Surgical Strike', 'Kabir Singh', 'Gully Boy']
  },
  2020: {
    year: 2020,
    title: 'Tanhaji: The Unsung Warrior',
    genre: 'Historical Action Epic',
    stars: 'Ajay Devgn & Saif Ali Khan',
    iconicDialogue: 'Jab tak Tanhaji hai, Shivaji Raje ka saaya koi nahi chheen sakta!',
    boxOfficeStatus: 'Highest Grosser of 2020',
    alternativeTitles: ['Tanhaji', 'Ludo', 'Scam 1992 (Web)']
  },
  2021: {
    year: 2021,
    title: 'Pushpa: The Rise',
    genre: 'Action Masala Entertainer',
    stars: 'Allu Arjun & Rashmika Mandanna',
    iconicDialogue: 'Pushpa... Pushpa Raj! Jhukega nahi saala!',
    boxOfficeStatus: 'Pan-India Cult Sensation',
    alternativeTitles: ['Pushpa: The Rise', 'Sooryavanshi', 'Shershaah']
  },
  2022: {
    year: 2022,
    title: 'RRR',
    genre: 'Epic Action Drama',
    stars: 'NTR Jr., Ram Charan & Alia Bhatt',
    iconicDialogue: 'Naatu Naatu Oscar Winner & Pan-Global Action Sensation!',
    boxOfficeStatus: 'Academy Award Winner & Global Phenomenon',
    alternativeTitles: ['RRR', 'KGF: Chapter 2', 'Kantara', 'Brahmastra']
  },
  2023: {
    year: 2023,
    title: 'Jawan',
    genre: 'Mass Action Thriller',
    stars: 'Shah Rukh Khan, Nayanthara & Vijay Sethupathi',
    iconicDialogue: 'Bete ko haath lagane se pehle, baap se baat kar!',
    boxOfficeStatus: 'First ₹1100 Crore Hindi Solo Blockbuster',
    alternativeTitles: ['Jawan', 'Pathaan', 'Animal', 'Gadar 2']
  },
  2024: {
    year: 2024,
    title: 'Stree 2',
    genre: 'Horror Comedy Blockbuster',
    stars: 'Shraddha Kapoor & Rajkummar Rao',
    iconicDialogue: 'O Stree kal aana... nahi, aaj hi aa jao!',
    boxOfficeStatus: 'Highest Grossing Hindi Film of 2024',
    alternativeTitles: ['Stree 2', 'Kalki 2898 AD', 'Manjummel Boys']
  },
  2025: {
    year: 2025,
    title: 'Chhaava',
    genre: 'Historical Action Epic',
    stars: 'Vicky Kaushal & Rashmika Mandanna',
    iconicDialogue: 'Swarajya ka veer... Chhatrapati Sambhaji Maharaj!',
    boxOfficeStatus: 'Blockbuster Heritage Epic',
    alternativeTitles: ['Chhaava', 'War 2', 'Singham Again']
  },
  2026: {
    year: 2026,
    title: 'Ramayana: Part 1',
    genre: 'Mythological Sci-Fi Action Epic',
    stars: 'Ranbir Kapoor, Sai Pallavi & Yash',
    iconicDialogue: 'The grandest cinematic saga of Indian civilization.',
    boxOfficeStatus: 'Global Landmark Cinematic Release',
    alternativeTitles: ['Ramayana', 'Krrish 4', 'Dhoom 4']
  }
};

export function getMovieForYear(year: number, seed: number = 0): IndianMovie {
  const roundedYear = Math.max(1947, Math.min(2026, year));
  const fallback: IndianMovie = {
    year: roundedYear,
    title: 'Sholay',
    genre: 'Action Epic',
    stars: 'Dharmendra & Amitabh Bachchan',
    iconicDialogue: 'Kitne aadmi the?',
    boxOfficeStatus: 'All-Time Classic'
  };

  const movie = HISTORICAL_MOVIES[roundedYear] || fallback;
  
  if (movie.alternativeTitles && movie.alternativeTitles.length > 1) {
    const selectedTitle = movie.alternativeTitles[seed % movie.alternativeTitles.length];
    return {
      ...movie,
      title: selectedTitle
    };
  }

  return movie;
}
