import React from "react";
import './PoetCard.css'
import MyComponent from "./translatop";

let photos = [
    ['https://www.belarus.by/relimages/000432_716792.jpg', 'https://s1.livelib.ru/boocover/1001063807/200/68e2/boocover.jpg', 'https://s1.livelib.ru/boocover/1002800204/200x305/a077/boocover.jpg'],
    ['https://puhovichihistory.by/images/Kolas.jpg', 'https://s1.livelib.ru/boocover/1001362908/200/1ec9/boocover.jpg', 'https://lh3.googleusercontent.com/proxy/n4dWmc-cwfQFJqY9-C3sDoFFr5O0KtbZLcRNOOBiJOjY67uzR6C2NVgyJy5QsrH_sqdegzU-QE8eBfTr7U1AE3UWSvONCeDBoVTe2X4JU_hdIrAECB9DvEledYxjMnV_g1T4SgopojfJDyf6S8MnApWb0Lb6RnXLr7fC-LuW60zGCpZ2sUY'],
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Yanka_Kupala.jpg/274px-Yanka_Kupala.jpg', 'https://lixmuseum.by/wp-content/uploads/2017/09/1J-nka-Kup-la.jpg', 'https://s1-goods.ozstatic.by/1000/130/840/10/10840130_0.jpg'],
    ['https://upload.wikimedia.org/wikipedia/commons/5/56/Bagdanovich_M_2.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Adam_Bagdanovich.jpg/150px-Adam_Bagdanovich.jpg', 'https://lh3.googleusercontent.com/proxy/3vy7s5AlTtEU499NvIG-QCpfND5uYpTdu-ynZMcwjoI9KPsXfMmAl_LyIIBNdR-iL8m_pjSfyxXu2I8iXH77OqtOo5qlq_5wdQF3HSgYC2IfwcSv9i4lDGuUFkHM5pI'],
    ['https://lh3.googleusercontent.com/proxy/Bw8BYrtzv3YlCInDuf-s7E7oknjvscQPw0XyG8emsN6X-j3bPyvCPBbwYI0e2uPWeB_HoTgteA24X5fTJhGr6RObWZO5SMifptx8fEraNTW9eU5e_9vbiD3if9boiHKJhtVlO-h2WefS8yK6kP-Kwb7jx0QMa5kOOYWToMp0OLMZodzfaiI6fq-Fc5c_TAzgKemkCFbBEkX4syUhyQJaLre3YWktpT46gjZOhS6W_g', 'https://topliba.com/covers/607097_200x300.jpg?t=1590664005', 'https://lh3.googleusercontent.com/proxy/xbzYmmo0PlBm8j7njGHfFYIm1MQ8GdSHWLxm-jf1jzdvz9CS2nhzYJMGqENART16vBu2Cm3KKcDBdM0fLFJGuE5Fjr_rhjYv1lSRzU5qg80cYINwU64qvmfj0JBNo3byRxoqeOByNQWcJrvJ6rYfnABRjhy_BQ78eegbl0fJ706NgXYt76KQG6iuX77e1JaBN69QYlF73N74SJ29s9wbqYWX2GDISrMZOnnZwo_lGw']
]

let poets = [[
    'Bykov Vasily',
    'Yakub Kolas ',
    'Yanka Kupala ',
    'Maxim Bogdanovich',
    'Lydia Vakulovskaya'],
    ['19.06.1924 - 22.06.2003',
        '03.11.1882 - 13.08.1956',
        '07.07.1882 - 28.06.1942',
        '09.12.1891 - 25.05.1917',
        '20.02.1926 — 28.08.1991'],
    ['Vasil Bykaŭ was born in the village Byčki, not far from Viciebsk in 1924. In 1941 he was in Ukraine when Germany attacked the USSR. At first seventeen-year-old Bykaŭ dug trenches – then he volunteered for the Red Army. He was arrested and almost shot as a German spy.[1] For years after the war he continued to serve, returning to the USSR only in the mid-1950s. There he started to work as a journalist for the Hrodna Pravda newspaper. In that same decade his first novellas began to come out, of which the most famous are "The Ordeal", "The Obelisk", "To Go and Not Return", and "To Live Till Sunrise". "The Ordeal", titled "Liquidation" by the author himself, but originally published under the title "Sotnikaŭ" after the main character, inspired director Larisa Shepitko\'s film "The Ascent", released in 1977 and winner of the Golden Bear award at the 27th Berlin International Film Festival.[2] During and after the Perestroika, he participated in pro-reform movement (e.g. Popular Front of Belarus). In October 1993, he signed the Letter of Forty-Two.[3]\n' +
    'Bykaŭ\'s literary achievement lies in his sternly realistic, albeit touched by lyricism, depictions of World War II battles, typically with a small number of characters. In the ferociousness of encounter they face moral dilemmas both vis-a-vis their enemies and within their own Soviet world burdened by ideological and political constraints. This approach brought vicious accusations of "false humanism" from some Red Army generals and the Communist Party press. Other reviews praised the uncompromising writing. "Vasil Bykov is a very courageous and uncompromising writer, rather of the Solzhenitsyn stamp," wrote Michael Glenny in Partisan Review in 1972. Bykaŭ was one of the most admired writers in the Soviet Union. In 1980 he was awarded the honorific title of People\'s Writer of the Belarusian SSR.',
        'Yakub Kolas (also Jakub Kołas, Belarusian: Яку́б Ко́лас, November 3 [O.S. October 22] 1882 – August 13, 1956), real name Kanstantsin Mikhailovich Mitskievich (Канстанці́н Міха́йлавіч Міцке́віч) was a Belarusian writer, People\'s Poet of the Byelorussian SSR (1926), member (1928) and vice-president (from 1929) of the Belarusian Academy of Sciences.\n' +
        'In his works, Yakub Kolas was known for his sympathy towards the ordinary Belarusian peasantry. This was evident in his pen name \'Kolas\', meaning \'ear of grain\' in Belarusian. He wrote collections of poems Songs of Captivity (Russian: Песни неволи, 1908) and Songs of Grief (Belarusian: Песьні-жальбы, 1910), poems A New Land (Belarusian: Новая зямля, 1923) and Simon the Musician (Belarusian: Сымон-музыка, 1925), stories, and plays. His poem The Fisherman\'s Hut (Belarusian: Рыбакова хата, 1947) is about the fight after unification of Belarus with the Soviet state. His trilogy At a Crossroads (Russian: На перепутье, 1925) is about the pre-Revolutionary life of the Belarusian peasantry and the democratic intelligentsia. He was awarded the Stalin Prize in 1946 and 1949.[1]\n' +
        'In his honor, a Yakub Kolas Square and a Yakub Kolas Street in the center of Minsk bear his name.',
        'Kupala moved to Vilnius in 1908, where he continued with his career as a poet. The same year the first published collection of his poems, Жалейка (The Little Flute) brought on the ire of the czarist government, which ordered the book confiscated as an anti-government publication. The order for Kupala\'s arrest was revoked in 1909, but a second printing was again confiscated, this time by the local authorities in Vilnius. He ceased working for the Nasha Niva in order to avoid ruining the reputation of the newspaper.\n' +
        'Kupala left for Saint Petersburg in 1909. The subsequent year saw the publication of several works, including the poem Адвечная песьня (Eternal Song), which appeared as a book in St. Petersburg in July 1910. Сон на кургане (Dream on a Barrow)– completed in August 1910 –symbolised the poor state of Kupala\'s Belarusian homeland. He left St. Petersburg and returned to Vilnius in 1913. Among those influencing Kupala in the 1910s was Maxim Gorky.',
        'Bahdanovič was born in Minsk in the family of Adam Bahdanovič, an important Belarusian ethnographer, who through most of his career worked as a bank clerk.[1] Maksim was born in a family apartment at Karakazov House located at Trinity Hill next to the First Parish School. His father was of unlanded peasantry family, while his mother (née Myakota) was of old Belarusian noble family of Kurcz coat of arms that was not adopted in the Russian Empire.[1] Grandfather on his mother side, Apanas Janovich Myakota, was a Russian veteran of the Crimean War who for his military service received a lifelong nobility.[1] Both of Maksim parents graduated pedagogical schools.[1] Later father of Maksim, Adam, was involved with members of the revolutionary anti-tsarist Narodnaya Volya organization.[1]\n' +
        'In 1892 the family moved to Hrodna where Maksim\'s father received a job at local bank. Soon after the move the future poet\'s mother, Maria, died of tuberculosis in 1896.\n' +
        'In 1896 Adam Bahdanovič moved with his children to Nizhny Novgorod, Russia. At that time Maksim wrote his first poems in the Belarusian language. In 1902 Bahdanovič attended a gymnasium. During the Revolution of 1905 he was an active participant of the strikes organised by his commilitodes.\n' +
        'In 1907 Nasha Niva came out with Bahdanovič\'s first published work — the novel Muzyka.\n' +
        'In June 1908 the poet\'s family moved to Yaroslavl\'. After finishing school in 1911 Bahdanovič went to Belarus to meet important figures of the Belarusian Renaissance: Vaclau Lastouski, Ivan Luckievich and Anton Luckievich. In the same year he began studying of law at a Yaroslavl\' lyceum. During his studies Bahdanovič worked at a newspaper, wrote numerous works of literature and was actively published in both Belarus and Russia.\n' +
        'In the beginning of 1914 his only book of poems, Vianok (A Wreath), was published in Vilna (today Vilnius).\n' +
        'In the summer of 1916, after absolvation of the lyceum, Maksim Bahdanovič moved to Minsk and worked there at the local guberniya administration.\n' +
        'In February 1917 Bahdanovič went to Crimea to be treated for tuberculosis. The treatment was unsuccessful, and that year he died in Yalta.\n' +
        'The poet\'s papers were kept at his father\'s house, but the collection was heavily damaged during the Russian Civil War in 1918.',
        'In 1945 she graduated from high school, then entered the Kiev School of Film Actors, after the closure of the school in 1948 transferred to the Russian branch of the acting faculty of the Kiev Theater Institute. After graduation she was sent to the Odessa Russian Drama Theater (1952). In 1954 she moved to Chukotka, from then on she began to appear in the press, worked in the newspaper "Dawn of the North", then in Kaliningrad in the newspaper "Kaliningradskaya Pravda". In 1963, her screenplay directed the comedy "Lushka" at the Kiev Film Studio.\n' +
        'Member of the USSR Joint Venture since 1963, in the Belarusian Writers\' Organization since 1965.\n' +
        'In connection with the transfer of her husband Sergei Vinogradov to a new job in 1965 she found herself in Minsk, moved to creative work. It has been published in Belarus since 1966 in the Neman magazine: short stories In a Snowstorm (1966) and Taune (1967). The film "Sasha-Sashachka" (1966) based on her script was released at the Belarusfilm studio.\n' +
        'Free-thinking intellectuals of Minsk regularly gathered at Vakulouskaya\'s apartment. As it turned out later, KGB agent Zoya B. broke into this peculiar club.\n' +
        'Since 1967, the KGB has been persecuted, censored, and the Vakulovskaya case has begun to unfold. The writer was accused of trying to pass on her works to the West for publication, distributing banned literature, calls for terror and anti-Soviet propaganda. Pyotr Masherau, speaking at the party, said that "the competent authorities opened an anti-Soviet abscess," that "persons who regularly visited the apartment of a member of the Writers\' Union L. Vakulovskaya, where drunkenness and vicious anti-Soviet conversations were systematically organized." preventive talks began. Since November 1967, V.\'s friends and colleagues (including Valiantsin Taras) have also been interrogated by the KGB and persecuted for a long time.\n' +
        'In 1988, Vakulovskaya wrote a book about Stalin\'s repressions, "Tungsten is a hard metal." '],
    [
        ['https://www.youtube.com/embed/TT9Ezu0ZV4k'],
        ['https://www.youtube.com/embed/xHHd2ONkjuQ'],
        ['https://www.youtube.com/embed/JHgphHjmc-Q'],
        ['https://www.youtube.com/embed/cFcuvXlvUnM'],
        ['https://www.youtube.com/embed/GlYYLSkqG90']
    ],
    [
        ['https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4558.002659764545!2d28.37319657833136!3d55.16575287160145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c4b0ef14cf88d1%3A0x9c9158da345cd0b3!2z0JHRi9GH0LrQuA!5e0!3m2!1sru!2sby!4v1622567219298!5m2!1sru!2sby'],
        ['https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39175.513229316784!2d26.71681067133285!3d53.48144233182359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d915789aa36bef%3A0xb45504641d5d66d4!2z0KHRgtC-0LvQsdGG0Ys!5e1!3m2!1sru!2sby!4v1621802005940!5m2!1sru!2sby'],
        ['https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19296.37523861168!2d27.1897222!3d54.1100086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbec59040878cd%3A0x89c684e28491971f!2z0JLRj9C30YvQvdC60LA!5e1!3m2!1sru!2sby!4v1621789990393!5m2!1sru!2sby'],
        ['https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150505.92958309173!2d27.453285966964422!3d53.88455846269856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1622567927320!5m2!1sru!2sby'],
        ['https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39459.64935491747!2d31.915835076565042!3d51.820263799937734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d4d499276c2125%3A0x6c72b053877c3f9!2z0KHQvdC-0LLRgdC6LCDQp9C10YDQvdC40LPQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0LjQvdCwLCAxNTIwMQ!5e0!3m2!1sru!2sby!4v1622568007780!5m2!1sru!2sby']
    ]
]


 const PoetCard = ( props ) => {
    let tmpId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1) -1;
    return (
         <div>
             <div id={'name'}>{poets[0][tmpId]}</div>
             <div id={'years'}>{poets[1][tmpId]}</div>
             <div id={'infDiv'}>
                 <img id='imgPoet' src={photos[tmpId][0]}/>
                 <div id={'poetText'}>{poets[2][tmpId]}</div>
             </div>

             <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                 <div className="carousel-inner">
                     <div className="carousel-item active">
                         <img className="d-block w-100" src={photos[tmpId][0]} alt="Первый слайд"/>
                     </div>
                     <div className="carousel-item">
                         <img className="d-block w-100" src={photos[tmpId][1]} alt="Второй слайд"/>
                     </div>
                     <div className="carousel-item">
                         <img className="d-block w-100" src={photos[tmpId][2]} alt="Третий слайд"/>
                     </div>
                 </div>
             </div>

             <div id={'video'}>
                 <div className="embed-responsive embed-responsive-16by9">
                     <iframe className="embed-responsive-item" src={poets[3][tmpId]}
                             allowFullScreen></iframe>
                 </div>
             </div>

             <div id={'map'}>
                 <div className="w-75 map-wrap">
                     <h2 className="map-h2"><MyComponent/></h2>
                     <iframe className="map"
                             src={poets[4][tmpId]}
                             style={{border: "0"}} width={'800px'} height={'800px'} allowFullScreen="" loading="lazy"></iframe>
                 </div>
             </div>
             <div className="container">
                 <div className="row">
                     <div className="col-md-8 col-md-offset-2 text-center">
                         <div id="map"></div>
                     </div>
                 </div>
             </div>

        </div>
    )
}
export default PoetCard
