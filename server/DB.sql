-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Nov 17. 00:31
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `versekdb`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `userpassword` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `userpassword`) VALUES
(0, 'admin', 'admin'),
(0, 'Orosz Ádám', 'Teszt12345');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `versek`
--

CREATE TABLE `versek` (
  `id` int(11) NOT NULL,
  `Kolto` varchar(255) DEFAULT NULL,
  `Cim` varchar(255) DEFAULT NULL,
  `Ev` int(11) DEFAULT NULL,
  `Szoveg` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `versek`
--

INSERT INTO `versek` (`id`, `Kolto`, `Cim`, `Ev`, `Szoveg`) VALUES
(1, 'Zrínyi Miklós', 'Szigeti veszedelem', 1648, 'Én az ki azelőtt iffiu elmével Játszottam szerelemnek édes versével, Küszködtem Viola kegyetlenségével: Mastan immár Mársnak hangassabb versével Fegyvert, s vitézt éneklek, török hatalmát Ki meg merte várni, Szulimán haragját, Ama nagy Szulimánnak hatalmas karját, Az kinek Europa rettegte szablyáját. Adj pennámnak erőt, ugy irhassak mint volt, Arrol, ki fiad szent nevéjért bátran holt Megvetvén világot, kiben sok java volt; Kiért él szent lelke, ha teste meg is holt.'),
(2, 'Kölcsey Ferenc', 'Himnusz Vanitatum vanitas', 1823, 'Itt az írás, forgassátok Érett ésszel, józanon, S benne feltalálhatjátok, Mit tanít bölcs Salamon: Miképp széles e világon Minden épül hitványságon, Nyár és harmat, tél és hó, Mind csak hiábavaló! (1.vsz.)   Hát ne gondolj e világgal, Bölcs az, mindent ki megvet, Sorssal, virtussal, nagysággal Tudományt, hírt s életet. Légy, mint szikla, rendületlen, Tompa, nyugodt, érezetlen, S kedv emel, vagy bú temet, Szépnek s rútnak húnyj szemet. Zrínyi dala (1830) Vándor, állj meg! korcs volt anyja vére, Más faj állott a kihúnyt helyére, Gyönge fővel, romlott, szívtelen; A dicső nép, mely tanúlt izzadni S izzadás közt hősi bért aratni, Névben él csak, többé nincs jelen. (6. vsz.) Petőfi Sándor A természet vadvirága Nem verték belém tanítók Bottal a költészetet, Iskolai szabályoknak Lelkem sosem engedett. Támaszkodjék szabályokra, Ki szabadban félve mén. A korláttalan természet Vadvirága vagyok én. (2. vsz.)'),
(3, 'József Attila', 'Nagyon fáj', 1936, 'Kivül-belől\r\nleselkedő halál elől\r\n(mint lukba megriadt egérke)\r\n\r\namíg hevülsz,\r\naz asszonyhoz ugy menekülsz,\r\nhogy óvjon karja, öle, térde.\r\n\r\nNemcsak a lágy,\r\nmeleg öl csal, nemcsak a vágy,\r\nde odataszit a muszáj is -\r\n\r\nezért ölel\r\nminden, ami asszonyra lel,\r\nmig el nem fehérül a száj is.\r\n\r\nKettős teher\r\ns kettős kincs, hogy szeretni kell.\r\nKi szeret s párra nem találhat,\r\n\r\noly hontalan,\r\nmint amilyen gyámoltalan\r\na szükségét végző vadállat.\r\n\r\nNincsen egyéb\r\nmenedékünk; a kés hegyét\r\nbár anyádnak szegezd, te bátor!\r\n\r\nÉs lásd, akadt\r\nnő, ki érti e szavakat,\r\nde mégis ellökött magától.\r\n\r\nNincsen helyem\r\nígy, élők közt. Zúg a fejem,\r\ngondom s fájdalmam kicifrázva;\r\n\r\nmint a gyerek\r\nkezében a csörgő csereg,\r\nha magára hagyottan rázza.\r\n\r\nMit kellene\r\ntenni érte és ellene?\r\nNem szégyenlem, ha kitalálom,\r\n\r\nhisz kitaszit\r\na világ így is olyat, akit\r\nkábít a nap, rettent az álom.\r\n\r\nA kultura\r\nugy hull le rólam, mint ruha\r\nmásról a boldog szerelemben -\r\n\r\nde az hol áll,\r\nhogy nézze, mint dobál halál\r\ns még egyedül kelljen szenvednem?\r\n\r\nA csecsemő\r\nis szenvedi, ha szül a nő.\r\nPáros kínt enyhíthet alázat.\r\n\r\nDe énnekem\r\npénzt hoz fájdalmas énekem\r\ns hozzám szegődik a gyalázat.\r\n\r\nSegítsetek!\r\nTi kisfiuk, a szemetek\r\npattanjon meg ott, ő ahol jár.\r\n\r\nÁrtatlanok,\r\ncsizmák alatt sikongjatok\r\nés mondjátok neki: Nagyon fáj.\r\n\r\nTi hű ebek,\r\nkerék alá kerüljetek\r\ns ugassátok neki: Nagyon fáj.\r\n\r\nNők, terhetek\r\nviselők, elvetéljetek\r\nés sirjátok neki: Nagyon fáj.\r\n\r\nÉp emberek,\r\nbukjatok, összetörjetek\r\ns motyogjátok neki: Nagyon fáj.\r\n\r\nTi férfiak,\r\negymást megtépve nő miatt,\r\nne hallgassátok el: Nagyon fáj.\r\n\r\nLovak, bikák,\r\nkiket, hogy húzzatok igát,\r\nherélnek, rijjátok: Nagyon fáj.\r\n\r\nNéma halak,\r\nhorgot kapjatok jég alatt\r\nés tátogjatok rá: Nagyon fáj.\r\n\r\nElevenek,\r\nminden, mi kíntól megremeg,\r\négjen, hol laktok, kert, vadon táj -\r\n\r\ns ágya körül,\r\nüszkösen, ha elszenderül,\r\nvakogjatok velem: Nagyon fáj.\r\n\r\nHallja, mig él.\r\nAzt tagadta meg, amit ér.\r\nElvonta puszta kénye végett\r\n\r\nkivül-belől\r\nmenekülő élő elől\r\na legutolsó menedéket.'),
(4, 'Kosztolányi Dezső', 'Hajnali részegség', 1933, 'Elmondanám ezt néked. Ha nem unnád.\r\nMúlt éjszaka - háromkor - abbahagytam\r\na munkát.\r\nLe is feküdtem. Ám a gép az agyban\r\nzörgött tovább, kattogva-zúgva nagyban,\r\ncsak forgolódtam dühösen az ágyon,\r\nnem jött az álom.\r\nHívtam pedig, így és úgy, balga szókkal,\r\nszázig olvasva s mérges altatókkal.\r\nAz, amit irtam, lázasan meredt rám.\r\nIzgatta szívem negyven cigarettám.\r\nMeg más egyéb is. A fekete. Minden.\r\nHát fölkelek, nem bánom az egészet,\r\nsétálgatok szobámba le- föl, ingben,\r\nköröttem a családi fészek,\r\na szájakon lágy, álombeli mézek\r\ns amint botorkálok itt, mint részeg,\r\naz ablakon kinézek.\r\n\r\nVárj csak, hogy is kezdjem, hogy magyarázzam?\r\nTe ismered a házam\r\ns ha emlékezni tudsz a\r\na hálószobámra, azt is tudhatod,\r\nmilyen szegényes, elhagyott\r\nilyenkor innen a Logodi-utca,\r\nahol lakom.\r\nTárt otthonokba látsz az ablakon.\r\nAz emberek feldöntve és vakon\r\nvízszintesen feküsznek\r\ns megforduló szemük kancsítva néz szét\r\nködébe csalfán csillogó eszüknek,\r\nmert a mindennapos agy-vérszegénység\r\nborult reájuk.\r\nMellettük a cipőjük, a ruhájuk\r\ns ők egy szobába zárva, mint dobozba,\r\nmelyet ébren szépítnek álmodozva,\r\nde - mondhatom - ha igy reá meredhetsz,\r\nminden lakás olyan, akár a ketrec,\r\nEgy keltőóra átketyeg a csöndből,\r\nsántítva baktat, nyomba felcsörömpöl\r\nés az alvóra szól a\r\nharsány riasztó: «ébredj a valóra».\r\nA ház is alszik, holtan és bután,\r\nmint majd száz év után,\r\nha összeomlik, gyom virít alóla\r\ns nem sejti senki róla,\r\nhogy otthonunk volt-e, vagy állat óla.\r\n\r\nDe fönn, barátom, ott fönn a derűs ég,\r\nvalami tiszta, fényes nagyszerűség,\r\nreszketve és szilárdul, mint a hűség.\r\nAz égbolt,\r\negészen úgy, mint hajdanába rég volt,\r\nmint az anyám paplanja, az a kék folt,\r\nmint a vízfesték, mely írkámra szétfolyt,\r\ns a csillagok\r\nlélekző lelke csöndesen ragyog\r\na langyos őszi\r\néjjelbe, mely a hideget előzi,\r\nkimondhatatlan messze s odaát,\r\nők, akik nézték Hannibál hadát\r\ns most néznek engem, aki ide estem\r\nés állok egy ablakba, Budapesten.\r\n\r\nÉn nem tudom, mi történt vélem ekkor,\r\nde úgy rémlett, egy szárny suhan felettem\r\ns felém hajol az, amit eltemettem\r\nrég, a gyerekkor.\r\n\r\nOlyan sokáig\r\nbámultam az égbolt gazdag csodáit,\r\nhogy már pirkadt is keleten s a szélben\r\na csillagok szikrázva, észrevétlen\r\nmeg-meglibegtek és távolba roppant\r\ntűzcsóva lobbant,\r\negy mennyei kastély kapuja tárult,\r\nkörötte láng gyult,\r\nvalami rebbent,\r\noszolni kezdett a vendégsereg fent.\r\na hajnali homály mély\r\nárnyékai közé lengett a báléj,\r\nkünn az előcsarnok fényárban úszott,\r\na házigazda a lépcsőn bucsúzott,\r\nelőkelő úr, az ég óriása,\r\na bálterem hatalmas glóriása\r\ns mozgás riadt, csilingelés, csodás,\r\nhalk női suttogás,\r\nmint amikor már vége van a bálnak\r\ns a kapusok kocsikért kiabálnak.\r\n\r\nEgy csipkefátyol\r\nlátszott, amint a távol\r\nhomályból\r\ngyémántosan aláfoly\r\negy messze kéklő,\r\npazar belépő,\r\nmelyet magára ölt egy drága, szép nő\r\nés rajt egy ékkő\r\nbehintve fénnyel ezt a néma békét.\r\na halovány ég túlvilági kékét,\r\nvagy tán egy angyal, aki szűzi,\r\nszép mozdulattal csillogó fejékét\r\nhajába tűzi\r\nés az álomnál csendesebben\r\negy arra ringó,\r\nkönnyűcske hintó\r\nmélyébe lebben\r\ns tovább robog kacér mosollyal ebben.\r\naztán amíg vad paripái futnak\r\na farsangosan-lángoló Tejutnak\r\narany konfetti-záporába sok száz\r\nbazár között, patkójuk fölsziporkáz.\r\n\r\nSzájtátva álltam\r\ns a boldogságtól föl-fölkiabáltam,\r\naz égbe bál van, minden este bál van\r\nés fölvilágolt mély értelme ennek\r\na régi, nagy titoknak, hogy a mennynek\r\ntündérei hajnalba hazamennek\r\nfényes körútjain a végtelennek.\r\n\r\nVirradtig\r\nmaradtam így és csak bámultam addig.\r\nEgyszerre szóltam: hát te mit kerestél\r\nezen a földön, mily silány regéket,\r\nmiféle ringyók rabságába estél,\r\nmily kézirat volt fontosabb tenéked,\r\nhogy annyi nyár múlt, annyi sok deres tél\r\nés annyi rest éj\r\ns csak most tünik szemedbe ez az estély?\r\n\r\nÖtven,\r\njaj ötven éve - lelkem visszadöbben -\r\nhalottjaim is itt-ott, egyre többen -\r\njaj, ötven éve tündököl fölöttem\r\nez a sok élő, fényes, égi szomszéd,\r\nki látja, hogy a könnyem morzsolom szét.\r\nSzóval bevallom néked, megtörötten\r\nföldig borultam s mindezt megköszöntem.\r\n\r\nNézd csak, tudom, hogy nincsen mibe hinnem\r\ns azt is tudom, hogy el kell mennem innen.\r\nde pattanó szivem feszitve húrnak,\r\ndalolni kezdtem ekkor azúrnak,\r\nannak, kiről nem tudja senki, hol van,\r\nannak, kit nem lelek se most, se holtan.\r\nBizony, ma már, hogy izmaim lazúlnak,\r\núgy érzem én, barátom, hogy a porban,\r\nhol lelkek és göröngyök közt botoltam,\r\nmégis csak egy nagy, ismeretlen úrnak\r\nvendége voltam.'),
(5, '', 'Ómagyar Mária-siralom', 1300, 'Volék sirolm tudotlon. Sirolmol sepedik, Búol oszuk, epedek. Választ világumtuul - Zsidou, fiodumtuul, Ézes ürümemtüül. Világ világa, Virágnak virága! Keserüen kinzatul, Vos szegekkel veretül.');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `versek`
--
ALTER TABLE `versek`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `versek`
--
ALTER TABLE `versek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
