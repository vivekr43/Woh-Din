export interface BollywoodSong {
  year: number;
  songTitle: string;
  movie: string;
  singers: string;
  musicDirector: string;
  famousLyric: string;
  youtubeQuery: string;
}

export const HISTORICAL_BOLLYWOOD_SONGS: Record<number, BollywoodSong> = {
  1947: {
    year: 1947,
    songTitle: 'Aaye Ho Meri Zindagi Mein',
    movie: 'Jugnu',
    singers: 'Noor Jehan & Mohammed Rafi',
    musicDirector: 'Firoz Nizami',
    famousLyric: 'Desh ki mitti ki khushboo...',
    youtubeQuery: 'Aaye Ho Meri Zindagi Mein Jugnu 1947'
  },
  1948: {
    year: 1948,
    songTitle: 'Mera Sundar Sapna Bita Gaya',
    movie: 'Do Bhai',
    singers: 'Geeta Dutt',
    musicDirector: 'S.D. Burman',
    famousLyric: 'Mera sundar sapna bita gaya, mai prem me sab kuch haar gayi...',
    youtubeQuery: 'Mera Sundar Sapna Bita Gaya Geeta Dutt'
  },
  1949: {
    year: 1949,
    songTitle: 'Aega Aane Wala',
    movie: 'Mahal',
    singers: 'Lata Mangeshkar',
    musicDirector: 'Khemchand Prakash',
    famousLyric: 'Aayega aayega aayega, aayega aane wala aayega...',
    youtubeQuery: 'Aega Aane Wala Lata Mangeshkar Mahal'
  },
  1950: {
    year: 1950,
    songTitle: 'Hawa Mein Udata Jaye',
    movie: 'Barsaat',
    singers: 'Lata Mangeshkar',
    musicDirector: 'Shankar Jaikishan',
    famousLyric: 'Hawa mein udata jaye mora laal dupatta malmal ka...',
    youtubeQuery: 'Hawa Mein Udata Jaye Barsaat'
  },
  1951: {
    year: 1951,
    songTitle: 'Awara Hoon',
    movie: 'Awaara',
    singers: 'Mukesh',
    musicDirector: 'Shankar Jaikishan',
    famousLyric: 'Awara hoon, ya gardish mein hoon aasmaan ka taara hoon...',
    youtubeQuery: 'Awara Hoon Mukesh Raj Kapoor'
  },
  1952: {
    year: 1952,
    songTitle: 'Tu Pyar Ka Sagar Hai',
    movie: 'Seema',
    singers: 'Manna Dey',
    musicDirector: 'Shankar Jaikishan',
    famousLyric: 'Tu pyar ka sagar hai, teri ek boond ke pyaase hum...',
    youtubeQuery: 'Tu Pyar Ka Sagar Hai Seema'
  },
  1953: {
    year: 1953,
    songTitle: 'Yeh Zindagi Usi Ki Hai',
    movie: 'Anarkali',
    singers: 'Lata Mangeshkar',
    musicDirector: 'C. Ramchandra',
    famousLyric: 'Yeh zindagi usi ki hai, jo kisi ka ho gaya...',
    youtubeQuery: 'Yeh Zindagi Usi Ki Hai Anarkali'
  },
  1954: {
    year: 1954,
    songTitle: 'Mera Joota Hai Japani',
    movie: 'Shree 420',
    singers: 'Mukesh',
    musicDirector: 'Shankar Jaikishan',
    famousLyric: 'Mera joota hai Japani, yeh patloon Inglistani...',
    youtubeQuery: 'Mera Joota Hai Japani Shree 420'
  },
  1955: {
    year: 1955,
    songTitle: 'Pyar Hua Iqrar Hua',
    movie: 'Shree 420',
    singers: 'Lata Mangeshkar & Manna Dey',
    musicDirector: 'Shankar Jaikishan',
    famousLyric: 'Pyar hua iqrar hua hai, pyar se phir kyo darta hai dil...',
    youtubeQuery: 'Pyar Hua Iqrar Hua Raj Kapoor Nargis'
  },
  1956: {
    year: 1956,
    songTitle: 'Yeh Hai Bombay Meri Jaan',
    movie: 'C.I.D.',
    singers: 'Mohammed Rafi & Geeta Dutt',
    musicDirector: 'O.P. Nayyar',
    famousLyric: 'Aye dil hai mushkil jeena yahan, zara hatke zara bachke, yeh hai Bombay meri jaan...',
    youtubeQuery: 'Yeh Hai Bombay Meri Jaan CID Johnny Walker'
  },
  1957: {
    year: 1957,
    songTitle: 'Suahana Safar Aur Yeh Mausam Hanseen',
    movie: 'Madhumati',
    singers: 'Mukesh',
    musicDirector: 'Salil Chowdhury',
    famousLyric: 'Suahana safar aur yeh mausam hanseen, hame darr hai hum kho na jaye kahin...',
    youtubeQuery: 'Suahana Safar Aur Yeh Mausam Hanseen Mukesh'
  },
  1958: {
    year: 1958,
    songTitle: 'Aaja Re Ab Mera Dil Pukara',
    movie: 'Aah',
    singers: 'Lata Mangeshkar & Mukesh',
    musicDirector: 'Shankar Jaikishan',
    famousLyric: 'Aaja re ab mera dil pukara, ro ro ke gham bhi haara...',
    youtubeQuery: 'Aaja Re Ab Mera Dil Pukara'
  },
  1959: {
    year: 1959,
    songTitle: 'Chhod Do Aanchal Zamana Kya Kahega',
    movie: 'Paying Guest',
    singers: 'Kishore Kumar & Asha Bhosle',
    musicDirector: 'S.D. Burman',
    famousLyric: 'Chhod do aanchal zamana kya kahega...',
    youtubeQuery: 'Chhod Do Aanchal Zamana Kya Kahega Dev Anand'
  },
  1960: {
    year: 1960,
    songTitle: 'Pyar Kiya To Darna Kya',
    movie: 'Mughal-E-Azam',
    singers: 'Lata Mangeshkar',
    musicDirector: 'Naushad',
    famousLyric: 'Insan kisi se duniya me ek baar mohabbat karta hai, pyar kiya to darna kya...',
    youtubeQuery: 'Pyar Kiya To Darna Kya Madhubala'
  },
  1961: {
    year: 1961,
    songTitle: 'Ehsaan Tera Hoga Mujh Par',
    movie: 'Junglee',
    singers: 'Mohammed Rafi',
    musicDirector: 'Shankar Jaikishan',
    famousLyric: 'Ehsaan tera hoga mujh par, dil chahta hai woh kehne do...',
    youtubeQuery: 'Ehsaan Tera Hoga Mujh Par Shammi Kapoor'
  },
  1962: {
    year: 1962,
    songTitle: 'Aap Ki Nazron Ne Samjha',
    movie: 'Anpadh',
    singers: 'Lata Mangeshkar',
    musicDirector: 'Madan Mohan',
    famousLyric: 'Aap ki nazron ne samjha, pyar ke kabil mujhe...',
    youtubeQuery: 'Aap Ki Nazron Ne Samjha Anpadh'
  },
  1963: {
    year: 1963,
    songTitle: 'Mere Mehboob Tujhe Meri Mohabbat Ki Kasam',
    movie: 'Mere Mehboob',
    singers: 'Mohammed Rafi',
    musicDirector: 'Naushad',
    famousLyric: 'Mere mehboob tujhe meri mohabbat ki kasam...',
    youtubeQuery: 'Mere Mehboob Tujhe Meri Mohabbat Ki Kasam'
  },
  1964: {
    year: 1964,
    songTitle: 'Taarif Karoon Kya Uske',
    movie: 'Kashmir Ki Kali',
    singers: 'Mohammed Rafi',
    musicDirector: 'O.P. Nayyar',
    famousLyric: 'Yeh chand sa roshan chehra, zulfon ka rang sunhera, taarif karoon kya uski jisne tumhe banaya...',
    youtubeQuery: 'Taarif Karoon Kya Uski Kashmir Ki Kali'
  },
  1965: {
    year: 1965,
    songTitle: 'Gaata Rahe Mera Dil',
    movie: 'Guide',
    singers: 'Kishore Kumar & Lata Mangeshkar',
    musicDirector: 'S.D. Burman',
    famousLyric: 'Gaata rahe mera dil, tu hi meri manzil...',
    youtubeQuery: 'Gaata Rahe Mera Dil Guide Dev Anand Waheeda'
  },
  1966: {
    year: 1966,
    songTitle: 'Baharon Phool Barsao',
    movie: 'Suraj',
    singers: 'Mohammed Rafi',
    musicDirector: 'Shankar Jaikishan',
    famousLyric: 'Baharon phool barsao, mera mehboob aaya hai...',
    youtubeQuery: 'Baharon Phool Barsao Suraj Rajendra Kumar'
  },
  1967: {
    year: 1967,
    songTitle: 'Mere Samne Wali Khidki Mein',
    movie: 'Padosan',
    singers: 'Kishore Kumar',
    musicDirector: 'R.D. Burman',
    famousLyric: 'Mere samne wali khidki mein ek chand ka tukda rehta hai...',
    youtubeQuery: 'Mere Samne Wali Khidki Mein Padosan Sunil Dutt'
  },
  1968: {
    year: 1968,
    songTitle: 'Dil Wil Pyar Vyar',
    movie: 'Shagird',
    singers: 'Lata Mangeshkar',
    musicDirector: 'Laxmikant-Pyarelal',
    famousLyric: 'Dil wil pyar vyar main kya jaanu re...',
    youtubeQuery: 'Dil Wil Pyar Vyar Shagird Saira Banu'
  },
  1969: {
    year: 1969,
    songTitle: 'Roop Tera Mastana',
    movie: 'Aradhana',
    singers: 'Kishore Kumar',
    musicDirector: 'S.D. Burman',
    famousLyric: 'Roop tera mastana pyar mera diwana, bhool koi humse na ho jaye...',
    youtubeQuery: 'Roop Tera Mastana Rajesh Khanna Sharmila'
  },
  1970: {
    year: 1970,
    songTitle: 'Pal Bhar Ke Liye Koi Mujhe Pyar Kar Le',
    movie: 'Johny Mera Naam',
    singers: 'Kishore Kumar',
    musicDirector: 'Kalyanji-Anandji',
    famousLyric: 'Pal bhar ke liye koi mujhe pyar kar le, jhootha hi sahi...',
    youtubeQuery: 'Pal Bhar Ke Liye Johny Mera Naam Dev Anand'
  },
  1971: {
    year: 1971,
    songTitle: 'Dum Maro Dum',
    movie: 'Hare Rama Hare Krishna',
    singers: 'Asha Bhosle',
    musicDirector: 'R.D. Burman',
    famousLyric: 'Dum maro dum, mit jaye gham, bolo subah shyam, Hare Krishna Hare Ram...',
    youtubeQuery: 'Dum Maro Dum Zeenat Aman'
  },
  1972: {
    year: 1972,
    songTitle: 'Chingari Koi Bhadke',
    movie: 'Amar Prem',
    singers: 'Kishore Kumar',
    musicDirector: 'R.D. Burman',
    famousLyric: 'Chingari koi bhadke to saawan use bujhaye...',
    youtubeQuery: 'Chingari Koi Bhadke Rajesh Khanna'
  },
  1973: {
    year: 1973,
    songTitle: 'Main Shayar To Nahin',
    movie: 'Bobby',
    singers: 'Shailendra Singh',
    musicDirector: 'Laxmikant-Pyarelal',
    famousLyric: 'Main shayar to nahin, magar ae haseen jabse dekha maine tujhko mujhe shayari aa gayi...',
    youtubeQuery: 'Main Shayar To Nahin Rishi Kapoor Bobby'
  },
  1974: {
    year: 1974,
    songTitle: 'Tere Bina Zindagi Se Koi Shikwa To Nahin',
    movie: 'Aandhi',
    singers: 'Kishore Kumar & Lata Mangeshkar',
    musicDirector: 'R.D. Burman',
    famousLyric: 'Tere bina zindagi se koi shikwa to nahin, tere bina zindagi bhi lekin zindagi to nahin...',
    youtubeQuery: 'Tere Bina Zindagi Se Aandhi Sanjeev Kumar'
  },
  1975: {
    year: 1975,
    songTitle: 'Yeh Dosti Hum Nahi Todenge',
    movie: 'Sholay',
    singers: 'Kishore Kumar & Manna Dey',
    musicDirector: 'R.D. Burman',
    famousLyric: 'Yeh dosti hum nahi todenge, todenge dam magar tera saath na chhodenge...',
    youtubeQuery: 'Yeh Dosti Hum Nahi Todenge Sholay Amitabh Dharmendra'
  },
  1976: {
    year: 1976,
    songTitle: 'Kabhi Kabhie Mere Dil Mein',
    movie: 'Kabhi Kabhie',
    singers: 'Mukesh & Lata Mangeshkar',
    musicDirector: 'Khayyam',
    famousLyric: 'Kabhi kabhie mere dil mein khayal aata hai, ki jaise tujhko banaya gaya hai mere liye...',
    youtubeQuery: 'Kabhi Kabhie Mere Dil Mein Amitabh Raakhee'
  },
  1977: {
    year: 1977,
    songTitle: 'Kya Hua Tera Wada',
    movie: 'Hum Kisise Kum Naheen',
    singers: 'Mohammed Rafi & Sushma Shrestha',
    musicDirector: 'R.D. Burman',
    famousLyric: 'Kya hua tera wada, woh kasam woh irada...',
    youtubeQuery: 'Kya Hua Tera Wada Rishi Kapoor Tariq'
  },
  1978: {
    year: 1978,
    songTitle: 'Khaike Paan Banaraswala',
    movie: 'Don',
    singers: 'Kishore Kumar',
    musicDirector: 'Kalyanji-Anandji',
    famousLyric: 'Khaike paan Banaraswala, khul jaye band akal ka taala...',
    youtubeQuery: 'Khaike Paan Banaraswala Amitabh Bachchan Don'
  },
  1979: {
    year: 1979,
    songTitle: 'Aap Jaisa Koi Meri Zindagi Mein Aaye',
    movie: 'Qurbani',
    singers: 'Nazia Hassan',
    musicDirector: 'Biddu',
    famousLyric: 'Aap jaisa koi meri zindagi mein aaye, to baat ban jaye...',
    youtubeQuery: 'Aap Jaisa Koi Zeenat Aman Qurbani'
  },
  1980: {
    year: 1980,
    songTitle: 'Om Shanti Om (Meri Umar Ke Naujawano)',
    movie: 'Karz',
    singers: 'Kishore Kumar',
    musicDirector: 'Laxmikant-Pyarelal',
    famousLyric: 'Tumne kabhi kisi se pyar kiya? Kiya... tumne kabhi kisi ko dil diya? Diya...',
    youtubeQuery: 'Om Shanti Om Rishi Kapoor Karz'
  },
  1981: {
    year: 1981,
    songTitle: 'Dekha Ek Innkhab To Ye Silsile Hue',
    movie: 'Silsila',
    singers: 'Kishore Kumar & Lata Mangeshkar',
    musicDirector: 'Shiv-Hari',
    famousLyric: 'Dekha ek khwab to yeh silsile hue, phool hain nigahon mein saaye se mile hue...',
    youtubeQuery: 'Dekha Ek Khwab Silsila Amitabh Rekha'
  },
  1982: {
    year: 1982,
    songTitle: 'Disco Dancer (I Am A Disco Dancer)',
    movie: 'Disco Dancer',
    singers: 'Vijay Benedict',
    musicDirector: 'Bappi Lahiri',
    famousLyric: 'I am a disco dancer, Zindagi mera gaana, main kisi ka diwana...',
    youtubeQuery: 'Disco Dancer Mithun Chakraborty Bappi Lahiri'
  },
  1983: {
    year: 1983,
    songTitle: 'Naino Mein Sapna',
    movie: 'Himmatwala',
    singers: 'Kishore Kumar & Lata Mangeshkar',
    musicDirector: 'Bappi Lahiri',
    famousLyric: 'Naino mein sapna, sapne mein sajna, sajna pe dil aa gaya...',
    youtubeQuery: 'Naino Mein Sapna Jeetendra Sridevi'
  },
  1984: {
    year: 1984,
    songTitle: 'Shayad Meri Shaadi Ka Khayal',
    movie: 'Souten',
    singers: 'Kishore Kumar & Lata Mangeshkar',
    musicDirector: 'Usha Khanna',
    famousLyric: 'Shayad meri shaadi ka khayal dil mein aaya hai, isiliye mummy ne meri tumhe chai pe bulaya hai...',
    youtubeQuery: 'Shayad Meri Shaadi Ka Khayal Souten'
  },
  1985: {
    year: 1985,
    songTitle: 'Sun Sahiba Sun',
    movie: 'Ram Teri Ganga Maili',
    singers: 'Lata Mangeshkar',
    musicDirector: 'Ravindra Jain',
    famousLyric: 'Sun sahiba sun pyar ki dhun, maine tujhe chun liya tu bhi mujhe chun...',
    youtubeQuery: 'Sun Sahiba Sun Mandakini Rajiv Kapoor'
  },
  1986: {
    year: 1986,
    songTitle: 'Har Kisi Ko Nahi Milta Yahan Pyar',
    movie: 'Janbaaz',
    singers: 'Manhar Udhas & Sadhana Sargam',
    musicDirector: 'Kalyanji-Anandji',
    famousLyric: 'Har kisi ko nahi milta yahan pyar zindagi mein...',
    youtubeQuery: 'Har Kisi Ko Nahi Milta Sridevi Janbaaz'
  },
  1987: {
    year: 1987,
    songTitle: 'Hawa Hawai',
    movie: 'Mr. India',
    singers: 'Kavita Krishnamurthy',
    musicDirector: 'Laxmikant-Pyarelal',
    famousLyric: 'Kehte hain mujhko hawa hawai, bijli girane main hoon aayi...',
    youtubeQuery: 'Hawa Hawai Sridevi Mr India'
  },
  1988: {
    year: 1988,
    songTitle: 'Papa Kehte Hain Bada Naam Karega',
    movie: 'Qayamat Se Qayamat Tak',
    singers: 'Udit Narayan',
    musicDirector: 'Anand-Milind',
    famousLyric: 'Papa kehte hain bada naam karega, beta hamara aisa kaam karega...',
    youtubeQuery: 'Papa Kehte Hain Aamir Khan Juhi Chawla'
  },
  1989: {
    year: 1989,
    songTitle: 'Dil Deewana Bin Sajna Ke',
    movie: 'Maine Pyar Kiya',
    singers: 'SP Balasubrahmanyam & Lata Mangeshkar',
    musicDirector: 'Ramlaxman',
    famousLyric: 'Dil deewana bin sajna ke maane na, yeh pagla hai samjhane se samjhe na...',
    youtubeQuery: 'Dil Deewana Salman Khan Bhagyashree'
  },
  1990: {
    year: 1990,
    songTitle: 'Dheere Dheere Se Meri Zindagi Mein Aana',
    movie: 'Aashiqui',
    singers: 'Kumar Sanu & Anuradha Paudwal',
    musicDirector: 'Nadeem-Shravan',
    famousLyric: 'Dheere dheere se meri zindagi mein aana, dheere dheere se mere dil ko churana...',
    youtubeQuery: 'Dheere Dheere Se Meri Zindagi Mein Aana Aashiqui'
  },
  1991: {
    year: 1991,
    songTitle: 'Mera Dil Bhi Kitna Pagal Hai',
    movie: 'Saajan',
    singers: 'Kumar Sanu & Alka Yagnik',
    musicDirector: 'Nadeem-Shravan',
    famousLyric: 'Mera dil bhi kitna pagal hai, yeh pyar to tumse karta hai...',
    youtubeQuery: 'Mera Dil Bhi Kitna Pagal Hai Saajan Sanjay Madhuri'
  },
  1992: {
    year: 1992,
    songTitle: 'Pehla Nasha',
    movie: 'Jo Jeeta Wohi Sikandar',
    singers: 'Udit Narayan & Sadhana Sargam',
    musicDirector: 'Jatin-Lalit',
    famousLyric: 'Pehla nasha, pehla khumar, naya pyar hai naya intazaar...',
    youtubeQuery: 'Pehla Nasha Aamir Khan Ayesha Jhulka'
  },
  1993: {
    year: 1993,
    songTitle: 'Yeh Kaali Kaali Aankhen',
    movie: 'Baazigar',
    singers: 'Kumar Sanu & Anu Malik',
    musicDirector: 'Anu Malik',
    famousLyric: 'Yeh kaali kaali aankhen, yeh gore gore gaal...',
    youtubeQuery: 'Yeh Kaali Kaali Aankhen Shah Rukh Khan Kajol'
  },
  1994: {
    year: 1994,
    songTitle: 'Chura Ke Dil Mera',
    movie: 'Main Khiladi Tu Anari',
    singers: 'Kumar Sanu & Alka Yagnik',
    musicDirector: 'Anu Malik',
    famousLyric: 'Chura ke dil mera goriya chali, uda ke nindiyan kahan tu chali...',
    youtubeQuery: 'Chura Ke Dil Mera Shilpa Shetty Akshay Kumar'
  },
  1995: {
    year: 1995,
    songTitle: 'Tujhe Dekha To Yeh Jaana Sanam',
    movie: 'Dilwale Dulhania Le Jayenge',
    singers: 'Kumar Sanu & Lata Mangeshkar',
    musicDirector: 'Jatin-Lalit',
    famousLyric: 'Tujhe dekha to yeh jaana sanam, pyar hota hai deewana sanam...',
    youtubeQuery: 'Tujhe Dekha To Yeh Jaana Sanam DDLJ SRK Kajol'
  },
  1996: {
    year: 1996,
    songTitle: 'Pardesi Pardesi Jaana Nahi',
    movie: 'Raja Hindustani',
    singers: 'Udit Narayan & Alka Yagnik',
    musicDirector: 'Nadeem-Shravan',
    famousLyric: 'Pardesi pardesi jaana nahi, mujhe chhod ke, mujhe chhod ke...',
    youtubeQuery: 'Pardesi Pardesi Raja Hindustani Aamir Karisma'
  },
  1997: {
    year: 1997,
    songTitle: 'Koi Ladka Hai (Chak Dhoom Dhoom)',
    movie: 'Dil To Pagal Hai',
    singers: 'Udit Narayan & Lata Mangeshkar',
    musicDirector: 'Uttam Singh',
    famousLyric: 'Ghode jaisi chaal, haathi jaisi dum, o saawan raja kahan se aaye tum...',
    youtubeQuery: 'Dil To Pagal Hai Chak Dhoom Dhoom SRK Madhuri'
  },
  1998: {
    year: 1998,
    songTitle: 'Chaiyya Chaiyya',
    movie: 'Dil Se..',
    singers: 'Sukhwinder Singh & Sapna Awasthi',
    musicDirector: 'A.R. Rahman',
    famousLyric: 'Jinke sar ho ishq ki chhaon, paon ke tale jannat hogi...',
    youtubeQuery: 'Chaiyya Chaiyya Shah Rukh Khan Malaika AR Rahman'
  },
  1999: {
    year: 1999,
    songTitle: 'Chand Chhupa Badal Mein',
    movie: 'Hum Dil De Chuke Sanam',
    singers: 'Udit Narayan & Alka Yagnik',
    musicDirector: 'Ismail Darbar',
    famousLyric: 'Chand chhupa badal mein, sharma ke meri jaana...',
    youtubeQuery: 'Chand Chhupa Badal Mein Salman Aishwarya'
  },
  2000: {
    year: 2000,
    songTitle: 'Ek Pal Ka Jeena',
    movie: 'Kaho Naa... Pyaar Hai',
    singers: 'Lucky Ali',
    musicDirector: 'Rajesh Roshan',
    famousLyric: 'Ek pal ka jeena, phir to hai jaana, tohfa kya leke jaaye dil yeh batana...',
    youtubeQuery: 'Ek Pal Ka Jeena Hrithik Roshan'
  },
  2001: {
    year: 2001,
    songTitle: 'Dil Chahta Hai',
    movie: 'Dil Chahta Hai',
    singers: 'Shankar Mahadevan',
    musicDirector: 'Shankar-Ehsaan-Loy',
    famousLyric: 'Dil chahta hai kabhi na beete chamkeele din...',
    youtubeQuery: 'Dil Chahta Hai Title Track Aamir Saif Akshaye'
  },
  2002: {
    year: 2002,
    songTitle: 'Dola Re Dola',
    movie: 'Devdas',
    singers: 'Kavita Krishnamurthy & Shreya Ghoshal',
    musicDirector: 'Ismail Darbar',
    famousLyric: 'Dola re dola re dola re dola, haai dola dil dola mann dola re dola...',
    youtubeQuery: 'Dola Re Dola Devdas Madhuri Aishwarya'
  },
  2003: {
    year: 2003,
    songTitle: 'Kal Ho Naa Ho',
    movie: 'Kal Ho Naa Ho',
    singers: 'Sonu Nigam',
    musicDirector: 'Shankar-Ehsaan-Loy',
    famousLyric: 'Har ghadi badal rahi hai roop zindagi, chaav hai kabhi kabhi hai dhoop zindagi...',
    youtubeQuery: 'Kal Ho Naa Ho Title Song Shah Rukh Khan'
  },
  2004: {
    year: 2004,
    songTitle: 'Tere Liye',
    movie: 'Veer-Zaara',
    singers: 'Lata Mangeshkar & Roop Kumar Rathod',
    musicDirector: 'Madan Mohan / Sanjeev Kohli',
    famousLyric: 'Tere liye hum hain jiye, har aansu piye...',
    youtubeQuery: 'Tere Liye Veer Zaara SRK Preity Zinta'
  },
  2005: {
    year: 2005,
    songTitle: 'Kajra Re',
    movie: 'Bunty Aur Babli',
    singers: 'Alisha Chinai, Shankar Mahadevan & Javed Ali',
    musicDirector: 'Shankar-Ehsaan-Loy',
    famousLyric: 'Kajra re kajra re tere kaare kaare naina...',
    youtubeQuery: 'Kajra Re Aishwarya Bachchan Abhishek'
  },
  2006: {
    year: 2006,
    songTitle: 'Chand Sifarish',
    movie: 'Fanaa',
    singers: 'Shaan & Kailash Kher',
    musicDirector: 'Jatin-Lalit',
    famousLyric: 'Subhanallah subhanallah, chand sifarish jo karta hamari...',
    youtubeQuery: 'Chand Sifarish Fanaa Aamir Kajol'
  },
  2007: {
    year: 2007,
    songTitle: 'Mauja Hi Mauja',
    movie: 'Jab We Met',
    singers: 'Mika Singh',
    musicDirector: 'Pritam',
    famousLyric: 'Jag me na baaki rahe koi dukh, mauja hi mauja...',
    youtubeQuery: 'Mauja Hi Mauja Jab We Met Shahid Kareena'
  },
  2008: {
    year: 2008,
    songTitle: 'Jai Ho',
    movie: 'Slumdog Millionaire',
    singers: 'A.R. Rahman, Sukhwinder Singh & Tanvi Shah',
    musicDirector: 'A.R. Rahman',
    famousLyric: 'Jai ho, jai ho, jai ho...',
    youtubeQuery: 'Jai Ho Slumdog Millionaire AR Rahman'
  },
  2009: {
    year: 2009,
    songTitle: 'All Izz Well',
    movie: '3 Idiots',
    singers: 'Sonu Nigam, Shaan & Swanand Kirkire',
    musicDirector: 'Shantanu Moitra',
    famousLyric: 'Jab dil ho behka behka, confuse sa ho, All izz well...',
    youtubeQuery: 'All Izz Well 3 Idiots Aamir Khan'
  },
  2010: {
    year: 2010,
    songTitle: 'Munni Badnaam Hui',
    movie: 'Dabangg',
    singers: 'Mamta Sharma & Aishwarya Nigam',
    musicDirector: 'Lalit Pandit',
    famousLyric: 'Munni badnaam hui darling tere liye...',
    youtubeQuery: 'Munni Badnaam Hui Malaika Arora Salman'
  },
  2011: {
    year: 2011,
    songTitle: 'Chammak Challo',
    movie: 'Ra.One',
    singers: 'Akon & Hamsika Iyer',
    musicDirector: 'Vishal-Shekhar',
    famousLyric: 'Girl you are my chammak challo...',
    youtubeQuery: 'Chammak Challo Ra One Shah Rukh Kareena Akon'
  },
  2012: {
    year: 2012,
    songTitle: 'Tum Hi Ho',
    movie: 'Aashiqui 2',
    singers: 'Arijit Singh',
    musicDirector: 'Mithoon',
    famousLyric: 'Kyunki tum hi ho, ab tum hi ho, zindagi ab tum hi ho...',
    youtubeQuery: 'Tum Hi Ho Aashiqui 2 Arijit Singh Aditya Roy Kapur'
  },
  2013: {
    year: 2013,
    songTitle: 'Badtameez Dil',
    movie: 'Yeh Jawaani Hai Deewani',
    singers: 'Beni Dayal & Shefali Alvares',
    musicDirector: 'Pritam',
    famousLyric: 'Paan main pudina dekha, naak ka nagina dekha... Badtameez dil...',
    youtubeQuery: 'Badtameez Dil YJHD Ranbir Kapoor Deepika'
  },
  2014: {
    year: 2014,
    songTitle: 'Galliyan',
    movie: 'Ek Villain',
    singers: 'Ankit Tiwari',
    musicDirector: 'Ankit Tiwari',
    famousLyric: 'Tu meri galliyan, galliyan teri galliyan...',
    youtubeQuery: 'Galliyan Ek Villain Sidharth Shraddha'
  },
  2015: {
    year: 2015,
    songTitle: 'Gerua',
    movie: 'Dilwale',
    singers: 'Arijit Singh & Antara Mitra',
    musicDirector: 'Pritam',
    famousLyric: 'Rang de tu mohe gerua...',
    youtubeQuery: 'Gerua Dilwale SRK Kajol Arijit'
  },
  2016: {
    year: 2016,
    songTitle: 'Channa Mereya',
    movie: 'Ae Dil Hai Mushkil',
    singers: 'Arijit Singh',
    musicDirector: 'Pritam',
    famousLyric: 'Accha chalta hoon duaon mein yaad rakhna...',
    youtubeQuery: 'Channa Mereya Arijit Singh Ranbir Kapoor'
  },
  2017: {
    year: 2017,
    songTitle: 'Dil Diyan Gallan',
    movie: 'Tiger Zinda Hai',
    singers: 'Atif Aslam',
    musicDirector: 'Vishal-Shekhar',
    famousLyric: 'Kacchi doriyon doriyon doriyon se main main main bandha...',
    youtubeQuery: 'Dil Diyan Gallan Atif Aslam Salman Katrina'
  },
  2018: {
    year: 2018,
    songTitle: 'Apna Time Aayega',
    movie: 'Gully Boy',
    singers: 'Ranveer Singh',
    musicDirector: 'Dub Sharma & DIVINE',
    famousLyric: 'Apna time aayega, uthna hi hai tu nange poyee aaya hai...',
    youtubeQuery: 'Apna Time Aayega Gully Boy Ranveer'
  },
  2019: {
    year: 2019,
    songTitle: 'Ghungroo',
    movie: 'War',
    singers: 'Arijit Singh & Shilpa Rao',
    musicDirector: 'Vishal-Shekhar',
    famousLyric: 'Ghungroo toot gaye...',
    youtubeQuery: 'Ghungroo War Hrithik Vaani Arijit'
  },
  2020: {
    year: 2020,
    songTitle: 'Shayad',
    movie: 'Love Aaj Kal',
    singers: 'Arijit Singh',
    musicDirector: 'Pritam',
    famousLyric: 'Shayad kabhi na keh sakoon main tumko...',
    youtubeQuery: 'Shayad Love Aaj Kal Kartik Arijit'
  },
  2021: {
    year: 2021,
    songTitle: 'Raataan Lambiyan',
    movie: 'Shershaah',
    singers: 'Jubin Nautiyal & Asees Kaur',
    musicDirector: 'Tanishk Bagchi',
    famousLyric: 'Teri meri gallan ho gayi mashhoor, karna kabhi tu mujhe nazron se door...',
    youtubeQuery: 'Raataan Lambiyan Shershaah Sidharth Kiara'
  },
  2022: {
    year: 2022,
    songTitle: 'Kesariya',
    movie: 'Brahmastra',
    singers: 'Arijit Singh',
    musicDirector: 'Pritam',
    famousLyric: 'Kesariya tera ishq hai piya, rang jaun jo main hath lagaun...',
    youtubeQuery: 'Kesariya Brahmastra Ranbir Alia Arijit'
  },
  2023: {
    year: 2023,
    songTitle: 'Jumeme Jo Pathaan / Tere Vaaste',
    movie: 'Pathaan / Zara Hatke Zara Bachke',
    singers: 'Arijit Singh & Shilpa Rao',
    musicDirector: 'Vishal-Shekhar / Sachin-Jigar',
    famousLyric: 'Jhoom jo Pathaan meri jaan, mehfil hi lut jaaye...',
    youtubeQuery: 'Jhoome Jo Pathaan SRK Deepika'
  },
  2024: {
    year: 2024,
    songTitle: 'Tauba Tauba',
    movie: 'Bad Newz',
    singers: 'Karan Aujla',
    musicDirector: 'Karan Aujla',
    famousLyric: 'Husn tera tauba tauba...',
    youtubeQuery: 'Tauba Tauba Bad Newz Vicky Kaushal'
  },
  2025: {
    year: 2025,
    songTitle: 'Satranga',
    movie: 'Animal',
    singers: 'Arijit Singh',
    musicDirector: 'Shreyas Puranik',
    famousLyric: 'Yeh jo rang hai tera, satranga sa...',
    youtubeQuery: 'Satranga Animal Arijit Singh'
  },
  2026: {
    year: 2026,
    songTitle: 'Naina (Crew) / Stree 2 Anthems',
    movie: 'Stree 2 / Crew',
    singers: 'Diljit Dosanjh & Badshah',
    musicDirector: 'Raj Shekhar / Sachin-Jigar',
    famousLyric: 'Soniya naina nu keh de...',
    youtubeQuery: 'Naina Diljit Dosanjh Badshah'
  }
};

export function getBollywoodSong(year: number): { song: BollywoodSong; isExactYear: boolean } {
  if (HISTORICAL_BOLLYWOOD_SONGS[year]) {
    return { song: HISTORICAL_BOLLYWOOD_SONGS[year], isExactYear: true };
  }

  // Find nearest year
  const years = Object.keys(HISTORICAL_BOLLYWOOD_SONGS).map(Number);
  let closest = years[0];
  let minDiff = Math.abs(year - closest);

  for (const y of years) {
    const diff = Math.abs(year - y);
    if (diff < minDiff) {
      minDiff = diff;
      closest = y;
    }
  }

  return {
    song: HISTORICAL_BOLLYWOOD_SONGS[closest],
    isExactYear: false
  };
}
