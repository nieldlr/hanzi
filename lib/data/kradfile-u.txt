#
#                           KRADFILE - Unicode
#                              (kradfile-u)
#
#       Radical Decomposition of 13,108 Japanese Characters
#
#       A merger of kradfile, kradfile2, and 952 new decompositions.
#
#       Copyright 2001 / 2007 / 2009:
#
#              Michael Raine
#              Jim Breen
#              The EDR&D Group at Monash University
#              Jim Rose
#              The KanjiCafe.com
#
#       952 JIS x 0213 kanji radical decompositions
#       Copyright 2009 James Rose and the KanjiCafe.com
#
#       The 5,801 JIS x 0212 kanji radical decompositions
#       Copyright 2007 James Rose and the KanjiCafe.com
#
#   	The 6,355 JIS x 0208 kanji radical decompositions
#       Copyright 2001/2007 Michael Raine, James Breen and the Electronic
#       Dictionary Research & Development Group at Monash University.
#
# A Grant of License detailing legal use of this file can be found at:
# http://www.kanjicafe.com/kradfile_license.htm
#
# Jim Rose:
# In the CJK Unified Ideographs range of Unicode, Japanese Kanji were
# assigned code points corresponding to each of the characters in the
# 2,965 most common kanji of the JIS x 0208 Level 1, the 3,390 next most
# common kanji of the JIS x 0208 Level 2, and the 5,801 kanji of the
# JIS x 0212 standard intended to supplement and extend the JIS x O208.
#
# CJK Unified Ideographs Extension B of Unicode version 3.2 allocated code
# points to the 3,695 kanji defined in the 2004 JIS x 0213, which was also
# intended to supplement and extend the JIS x 0208.  952 kanji defined in
# the JIS x 0213 do not occur in the JIS x 0212 (which I reckon means that
# 3,058 kanji in the JIS x 0212 were not included in the JIS x 0213).
#
# CJK Unified Ideographs Extension A added to its list of encoded Japanese
# characters the Unified Japanese IT Vendors Contemporary Ideographs.  We do
# not believe these characters are of any practical value to users of current
# computing platforms and they are ignored.
#
# Personal Note:
# When I first created my version of a kanji selection by-multi-radical
# interface on the ICE MOCHA tool at Kanjicafe.com, I thought that the radical
# selection interface would make a good starting point for a tool to both glean
# errors and improve kradfile, and help build a bigger "kradfile" which added
# the JIS x 0212 kanji.  Jim Breen had mentioned that he would like to see the
# JIS x 0213 set decomposed by radical, but my interface was designed to handle
# Extended Unix Code Japanese, which included the JIS x 0208 and JIS x 0212,
# but did not include the newer JIS x 0213 standard.  Rather than deal with
# learning how to cope with Unicode, I plowed ahead and developed kradefile2 as
# a JIS x 0212 extension and companion to the JIS x 0208 based kradfile.
#
# But since we all know that we are slowly migrating our tools and systems to
# Unicode, the idea of at least converting my little radical decomposition tool
# over kept gnawing at me.  So after pestering Jim Breen some more about it, on
# June 1, 2009 Professor Breen sent me a file with the 952 JIS x 0213 kanji
# needed to make a "complete" radical decomposition of all the Japanese kanji
# defined in the CJK section of Unicode, and I commenced to finish this project
# to a higher state of "doneness".
#
# Converting the tool over to Unicode opens up the possibility of using the same
# code base to develop radical decompositions in Chinese or Korean (the C & K of
# CJK), and if there is anyone interested in pursuing this, please contact me.
# 
# There are some noteworthy changes to the new file vis-a-vis the kradfile
# and kradfile2 legacy data.
#
# 1) the encoding scheme now in use is no longer EUC-JP, and
# the convenient 2 bytes for the JIS x 208 and 3 bytes for the JIS x 0212.
# The encoding of this file is now UTF-8, and as such, the byte length of each
# character is highly variable.  Processing Unicode properly requires that your
# software does not rely on a fixed byte length. The primary reason for the
# change of encoding method is that the JIS x 0213 standard kanji are not
# defined in the Extended Unix Code Japanese encoding scheme which predates
# it (EUC-JP).
#
# 2) UTF-8 is a Unicode encoding, but keep in mind that Unicode itself is not.
# There may come a time and place when you are using Unicode, but not UTF-8.
# I doubt it, but I thought I would just throw that out for clarity.
#
# 3) The original kradfile used JIS x 0208 kanji to represent radicals.  In
# several instances there were no JIS x 0208 kanji which were also
# representative of the radical alone, so a JIS x 0208 kanji containing the
# radical was used as a kind of radical "place holder".  When I developed
# kradfile2, I maintained this convention so that kradfile2 would be simple
# to integrate with existing tools already using kradfile.
#
# The following legacy JIS x 0208 kanji "place holders" are now replaced by
# the radical/element itself:
#
#            化 which stood for ⺅
#            刈 which stood for ⺉
#            込 which stood for ⻌ 
#            汁 which stood for 氵
#            初 which stood for 衤
#            尚 which stood for ⺌ 
#            買 which stood for 罒
#            犯 which stood for 犭
#            忙 which stood for 忄
#            礼 which stood for 礻
#            个 which stood for 𠆢
#            老 which stood for ⺹
#            扎 which stood for 扌
#            杰 which stood for 灬
#            疔 which stood for 疒
#            禹 which stood for 禸
#            艾 which stood for ⺾
#            邦 which stood for ⻏   (2ECF)
#            阡 which stood for ⻖   (2ED6)
#
# Unicode's inclusion of the JIS x 0212 and JIS x 0213 kanji allow us to 
# replace most of the "place holder" kanji with the actual radical. In
# fact, Unicode also defines all 214 Kangxi radicals from Mei Yingzuo's Zihui,
# or "Character Collection/Categorization" published in 1615, so we can do away
# with all but two JIS x 0208 representative "place holder" characters.  One
# of these is a two stroke  radical defined by Andrew Nelson in his 1962
# "The Modern Reader's Japanese-English Character Dictionary".
# I'm not sure where the other 11 stroke radical came from, but Jim can edit
# this sentence for me.  These are represented instead by 并 (5E76) and
# 滴 (6EF4).
#
# Other than the encoding change, the file is still in the same basic format
# as the legacy kradfile and kradfile2.
#
# Decomposition of the JIS x 0213:
# Two fonts were used in the decomposition of the JIS x 0213 so as to include
# as much variation in the appearance of the kanji as possible. There were
# several instances when one of the two fonts used (HiraMinPro-W3 and IPAMincho)
# showed a particular stroke more distinctly than the other, and vise-versa.
#
# Thus despite the numerical pausity of fonts which reach into the JIS x 0213,
# using two fonts provided enough variety to add valuable clarity when
# distinguishing strokes and choosing radicals / elements.
#
# The useable portion of the file consists of 13,108 lines of text; one
# for each of the:
#
# - 6,355 kanji defined in the JIS X 0208-1997 standard
# - 5,801 kanji defined in the JIS x 0212-1990 standard
# -   952 kanji defined in the JIS x 0213-2004 standard
#     and not found in the JIS x 0212
#
# Each line is a follows:
# - the kanji itself,
# - a space followed by a colon (:) followed by a space,
# - one or more radicals/elements which can be seen in the kanji.
# - the radical/elements are themselves separated by a space
#
# The decomposition is based on what can be seen in typical kanji
# glyphs. Elements themselves can be further subdivided.
#
# You can contact Jim Rose at Jim(at)Kanjicafe.com.
#
# Jim Rose, Christiansted, United States Virgin Islands
# June 2009
###########################################################
#
#                           K R A D F I L E
#
#	Copyright 2001/2007 Michael Raine, James Breen and the Electronic
#       Dictionary Research & Development Group at Monash University.
#	See: http://www.csse.monash.edu.au/~jwb/edrdg/licence.html
#       for permissions for use and redistribution.
# 
# This is the data file from which the "radkfile" is made, which in turn
# drives the multi-radical lookup method in XJDIC, WWWJDIC and possibly 
# other dictionary and related software.
# 
# The file is based on work done in 1994/1995 by Michael Raine in which he
# analyzed all the JIS1/2 kanji and identified the constituent radicals and 
# other common elements, with the intention of facilitating the selection of
# kanji within a dictionary program by identifying multiple elements.
# The file was revised by Jim Breen in September 1995. Further revisions were
# done in 1998/9 at the suggestion of Wolfgang Conrath, then a revision was
# carried out in 2001 using suggestions from Yutaka Ohno based on a similar
# decomposition made by Kobayashi. Further amendments were made in July
# 2001 after suggestions from Hendrik.
# 
# The file consists of 6,355 lines of text; one for each of the 
# JIS X 0208-1997 kanji. Each line is a follows:
# - the kanji itself,
# - a space followed by a colon (:) followed by a space,
# - one or more radicals/elements which can be seen in the kanji. These
#   are drawn from JIS X 0208-1997. Where the element alone is not in
#   JIS X 0208, a kanji which contains the element is used instead.
#
# The decomposition is based on what can be seen in typical kanji
# glyphs. Elements themselves can be further subdivided. For example,
# 舌 is an element and so is 口, so the elements in 話 are <口 舌 言>.
# 
# Jim Breen, Tokyo, January 2001
#            Melbourne, July 2001
#            Melbourne, Dec  2004
#
###########################################################
# Nov 2004 - 八 replaced by ハ and 并
# Aug 2005 - added 斉; replaced 薺 with 齊
# Jan 2006 - added 一 to 今
# Apr 2006 - changed 坐, 座 and 挫 from 入 to 人
# Aug 2006 - added 卩 to 危 and 卵, dropped 刈 from 唖
# Sep 2006 - added 刀 and 氏 to 齊 and derivatives
# Nov 2006 - added 巛 as an indexer, replacing 川 for many kanji
# Jan 2007 - revised 春榛奏泰椿俸奉捧棒湊輳 adding 人 and removing ノ
# Sep 2007 - made sure all the 糸 indices also had 幺 and 小
# Apr 2008 - added 廾 to all cases of 齊
# Dec 2008 - added ハ to 詮,粉; 一 and ｜ to 置; ｜ and 丶 to 否
###########################################################
#
#                           K R A D F I L E - 2
#
#       Copyright 2007 James Rose and the KanjiCafe.com.
#
#   Special GRANT OF LICENSE is hereby given to James Breen and the
#   Electronic Dictionary Research & Development Group at Monash
#   University such that said licensees may maintain, modify, use,
#   and redistribute this file.  Derivatives should maintain this notice.
#   All other rights reserved.
#
# A Grant of License detailing legal use of this file can be found at:
# http://www.kanjicafe.com/kradfile_license.htm
#
# Kradfile - 2 was created by James Rose by means of analysis of
# all 5,801 JIS X 0212 Kanji and identification of the constituent
# radicals and other common elements, with the goal of extending the
# capability of current kanji selection by-multi-radical tools in this range.
# Care has been exercised to maintain the same format as the original
# kradfile by Michael Raine and Jim Breen to aid in integration with
# existing electronic dictionary programs.
#
# Two fonts were used in decomposition so as to include as many glyphs as
# possible.  One apparently based on the JIS X 0212 standard itself, and
# one based on Unicode.  Each JIS X 0212 kanji is represented by 3 bytes
# in EUC-JP encoding, as opposed to the two bytes used in the JIS X 0208
# range, so adjust your software accordingly if necessary.
#
# The useable portion of the file consists of 5,801 lines; one for each of the
# JIS X 0212 kanji. Each line is a follows:
# - the kanji itself,
# - a space followed by a colon (:) followed by a space,
# - one or more radicals/elements which can be seen in the kanji. These
#   are drawn from JIS X 0208-1997. Where the element alone is not in
#   JIS X 0208, a kanji which contains the element is used instead.
#
# The decomposition is based on what can be seen in typical kanji
# glyphs. Elements themselves can be further subdivided.
#
# You can contact Jim Rose at Jim(at)Kanjicafe.com.
#
# Jim Rose, Christiansted, United States Virgin Islands
# September 2007
###########################################################
㐂 : 匕
㐆 : ノ 勹 ヨ
㐬 : 亠 厶 川
㐮 : 一 ｜ ノ 二 亠 ハ 衣
㑨 : 一 ノ ⺅ 口 大 矢
㑪 : ｜ ノ ⺅ 廾 文 斉
㒒 : 一 ｜ ノ ⺅ 并 木 王 羊 耒
㒵 : ハ 日 白
㒼 : 一 ｜ 入 冂 凵
㓁 : 儿 冖
㓇 : ノ 冫 大
㓛 : 刀 工
㔟 : 丶 力 九 生
㕝 : 十 又 口
㕞 : ｜ 冂 又 尸 巾
㕣 : ハ 口
㕮 : 口 父
㖦 : 一 ｜ 口 日 木 田
㖨 : 口 ヨ 彑 水
㗅 : 十 口 月
㗚 : 口 木 西
㗴 : 口 日 門
㘅 : 亅 二 口 彳 金
㙊 : 土 長
㚑 : 大 ヨ
㚖 : 大 日 白
㚙 : 力 口 大
㛏 : 一 丶 女 水
㝡 : 又 宀 耳
㝢 : ノ 冂 厶 宀 禸 虫
㝫 : 一 夂 宀 ⻖ 生
㝬 : 一 ｜ 二 人 口 大 宀
㝵 : 一 寸 日
㞍 : 丶 九 尸
㟁 : 一 十 厂 山 干
㟢 : 一 亅 口 大 山
㟨 : 山 而
㟴 : 儿 匕 厶 山 田 鬼
㟽 : 二 小 山 示 西
㠀 : 山 灬 鳥
㠯 : 一 ｜ 口
㠶 : ｜ 冂 几 巾
㡀 : ｜ ハ 冂
㡜 : ｜ 丶 二 冂 夕 小 巾 示
㡡 : ｜ 并 冂 厂 口 寸 巾 豆
㣺 : 心
㤗 : 一 二 人 大 心
㤚 : 亅 二 彳 忄
㥯 : 工 ヨ 心 爪
㩮 : 一 ハ 扌 手 臼
㩳 : 又 扌 隹
㫖 : 一 卜 日
㫗 : 子 日
㫪 : 一 ｜ 二 人 大 日
㬎 : 幺 日 灬
㬚 : 亠 厶 攵 日 月
㬜 : 一 厶 土 日 至
㬢 : 一 亅 二 并 戈 手 日 王 羊
㭭 : ノ 刂 口 木
㭷 : 力 木 田
㮇 : ノ 大 心 木
㮈 : 二 大 小 木 示
㮍 : 一 丶 并 冂 刂 木
㮤 : 𠆢 ハ 口 宀 木 穴 谷
㮶 : 一 并 屮 月 木
㯃 : 𠆢 木 水
㯍 : 丶 夕 寸 木 爿
㯰 : 一 ｜ 十 木 目 罒 自
㰏 : 亠 冂 口 木 竹 高
㰦 : 人 勹 厶 土 欠
㳃 : 十 九 氵
㳒 : 厶 大 氵
㴑 : 一 并 屮 广 氵
㴞 : ｜ 氵 日 爪
㵤 : 人 冫 大 氵 羽
㶚 : 十 口 廾 氵 月 西 革
㷀 : 十 火
㷔 : ｜ 日 火 爪
㸅 : 匕 卩 日 火 白 竹
㸿 : 儿 冖 士 牛
㹠 : ノ 乙 凵 犭 屯
㹦 : 刀 口 犭
㹨 : ｜ 犭 日 田
㺃 : 勹 口 犭 ⺾
㺔 : ノ 勹 犭 灬 爪
㽗 : 人 田
㽲 : 一 勹 疒
㽵 : 土 疒
㽷 : 水 疒
㾮 : 日 王 疒 白
㿉 : 一 ｜ ハ 口 疒 目 貝
㿗 : ノ 儿 ハ 木 疒 目 禾 貝 頁
䀹 : 人 大 目
䁘 : 丶 凵 夕 山 目 缶
䂓 : 一 ノ 儿 大 目 矢 見
䄅 : 一 二 人 并 大 小 示
䅈 : 一 ノ 二 人 大 木 禾
䅏 : ノ 尸 木 毛 禾
䅣 : ノ 日 木 王 白 禾
䆴 : 乙 ハ 勹 宀 田 穴 亀
䆿 : ハ 宀 木 爿 目 穴 自
䇦 : 冂 大 竹
䇮 : ノ ⺅ 士 王 竹
䇳 : 二 戈 竹
䈇 : 十 卜 日 竹
䈎 : 一 ｜ 木 世 竹
䉤 : 女 攵 竹 米
䋆 : 一 小 尸 幺 戸 糸
䋖 : ｜ 二 小 幺 ヨ 糸 聿
䋝 : 女 小 ⺌ 幺 糸
䌂 : 一 厶 土 小 尸 幺 糸 至
䌫 : 一 ノ 儿 匚 小 幺 目 糸 臣 見
䍃 : 丶 凵 夕 山 缶
䏮 : 丶 ノ ハ 力 月
䏰 : 丶 刀 心 月
䐈 : 一 ｜ 十 月 目
䐗 : 丶 ノ 土 ⺹ 日 月
䐜 : 一 ｜ ハ 匕 月 目
䐢 : 勹 屮 月
䑓 : 一 ｜ 冖 厶 土 至
䑛 : 一 口 氏 舌
䑶 : 一 ｜ 丶 二 亠 冂 土 月 舟 青
䑺 : 一 ｜ 丶 ノ 冂 舟 虫 風
䒑 : 一 并
䒳 : 乃 ⺾ 木
䒾 : 亠 ⺾ 衣
䓔 : ノ 土 子 ⺾ ⺹
䔈 : ハ 工 ⺾ 目 貝
䔍 : ⺾ 馬
䔥 : ｜ ノ ヨ ⺾ 水 米 隶
䕃 : 𠆢 ⺾ ⻖ 長
䖝 : ノ 虫
䖸 : 亅 戈 手 虫
䗥 : 人 彳 止 虫
䗪 : 一 凵 广 灬 虫
䘏 : ⻏ 皿 血
䙁 : 戈 衤
䙥 : 一 ｜ 𠆢 衤 雨
䚡 : ｜ 勹 心 月 田 角
䚯 : 刂 言
䜌 : 小 幺 糸 言
䝤 : 并 大 小 日 豸
䟽 : 亠 厶 口 川 足
䠖 : 二 人 勹 口 欠 足
䡄 : 几 車
䡎 : 一 尸 戸 車
䢵 : 二 厶 ⻏
䦰 : 乙 勹 田 門 亀
䧧 : 亅 并 ⻖ 戈 手 王 羊
䧺 : 一 ノ 口 隹
䨄 : 一 𠆢 酉 隹
䨩 : ｜ 二 小 日 田 示 雨
䪼 : ｜ ハ 凵 山 目 貝 頁
䬻 : 二 戈 食
䯂 : 木 馬
䯊 : 一 亅 冂 冖 口 月 骨
䯒 : 亅 二 冂 冖 彳 月 骨
䯨 : 亠 冂 口 木 高
䰗 : ｜ 乙 亅 勹 王 田 亀
䰠 : ｜ 儿 匕 厶 日 田 鬼
䳄 : 匕 止 比 灬 鳥
䳑 : 一 ノ 月 灬 鳥
䴇 : 一 ｜ 𠆢 灬 雨 鳥
䵷 : 土 黽
一 : 一
丁 : 一 亅
丂 : 一 勹
七 : 乙 匕 ノ
丄 : 一 ｜
丅 : 一 ｜
万 : ｜ ノ 一
丈 : ノ 一 丶
三 : 一 二
上 : 一 卜
下 : ｜ 一 卜
丌 : 一 ｜ ノ
不 : ｜ ノ 一 丶
与 : 勹 一 卜
丏 : 一 勹
丐 : 一 弓 止 疋
丑 : ｜ ノ 一
丒 : 一 丶 ノ 勹
且 : 一 目
丕 : ｜ ノ 一 丶
世 : ｜ 一 世
丗 : ｜ 山 十
丘 : 一 斤
丙 : 一 人 冂
丞 : ノ 一 亅
丟 : 厶 王
両 : ｜ 一 冂 山
丣 : 一 ｜ ノ 口
两 : 一 人 冂
並 : ｜ 一 二 并
丨 : ｜
丩 : ｜
个 : ｜ 𠆢
丫 : ｜ 丶 ノ 并
丬 : ｜ 冫
中 : ｜ 口
丮 : ｜ 二
丯 : ｜ 彡
丰 : 一 ｜ 二
丱 : ｜ ノ
串 : ｜ 口
丵 : 一 丶 ノ 并 十 干
丶 : 丶
丸 : 九 丶
丹 : ノ 一 丶 亅
主 : 王 丶
丼 : ｜ ノ 二 丶 廾 井
丿 : ノ
乀 : 丶
乁 : 一 丶
乂 : ノ
乃 : ｜ ノ 一 乃
乄 : 丶 ノ
久 : ノ 入 久
乇 : 一 ノ 乙
么 : ノ 厶
之 : 乙 丶 亠 廴
乍 : ｜ ノ 一
乎 : ノ 一 并 亅
乏 : ノ 乙 丶 亠
乑 : ｜ 丶 ノ
乕 : ｜ ノ 一 巾 厂
乖 : ノ 十 匕 爿
乗 : ｜ ノ 一 禾 ハ
乘 : ノ 十 ハ 匕 爿
乙 : 乙
乚 : 乙
乜 : 乙 匕
九 : 九
乞 : ノ 一 乙
也 : ｜ 乙 匕 也
乢 : 乙 山
乣 : 乙 幺
乨 : 乙 厶 口
乩 : 乙 卜 口
乱 : 乙 口 舌
乳 : 乙 子 爪
乴 : 一 ノ 乙 亅 斤
乵 : 乙 十 立 辛
乹 : 乙 十 日
乾 : 乙 十 日
乿 : 乙 小 幺 爪 糸
亀 : 亀 田 勹 乙
亂 : 乙 爪 冂 厶
亅 : 亅
了 : 一 亅
予 : マ 一 亅
争 : ヨ 一 亅 勹
亊 : ヨ 一 并 亅
事 : 一 口 亅 ヨ
二 : 二
亍 : 亅 二
于 : 二 亅
云 : 一 二 厶
互 : ヨ 一 彑
五 : 一 二 五
井 : ｜ ノ 一 二 井
亖 : 二
亗 : 二 山
亘 : 一 二 日
亙 : ノ 一 二 丶
些 : 止 二 匕
亜 : ｜ 一 口
亝 : 二 厶
亞 : 一 二
亟 : 口 二 又
亠 : 亠
亡 : 亡 亠
亢 : 亠 几
交 : 父 亠
亥 : 人 亠
亦 : ノ ハ 亅 亠
亨 : 口 亠
享 : 口 子 亠
京 : 口 小 亠
亭 : 口 亅 亠 冖
亮 : 口 亠 儿 冖
亯 : 一 丶 亠 口 日 曰
亰 : 小 日 亠
亳 : ノ 一 乙 口 亠 冖
亶 : 一 口 日 亠 囗
亹 : 一 ｜ ノ 亠 冂 冖 口 ヨ 目
人 : 人
亻 : ⺅
亼 : 一 𠆢
什 : ⺅ 十
仁 : ⺅ 二
仂 : ⺅ 力
仃 : 一 亅 ⺅
仄 : 人 厂
仆 : ⺅ 卜
仇 : ⺅ 九
仈 : ⺅ ハ
今 : 𠆢 一
介 : ハ 𠆢
仍 : ノ ⺅ 乃
从 : 人
仏 : ⺅ 厶
仐 : 𠆢 十
仔 : ⺅ 子
仕 : ⺅ 士
他 : ⺅ 也
仗 : ノ ⺅
付 : ⺅ 寸
仙 : ⺅ 山
仚 : 𠆢 山
仛 : 一 ノ 乙 ⺅
仞 : ⺅ 刀 丶
仟 : ノ ⺅ 十
仠 : 一 ⺅ 十 干
仡 : 一 ノ 乙 ⺅
仢 : 丶 ⺅ 勹
代 : ⺅ 弋
令 : 𠆢 卩 一
以 : ｜ 人 丶
仨 : 一 二 ⺅
仫 : ノ ⺅ 厶
仭 : ⺅ 刀 丶
仮 : ⺅ 又 厂
仯 : ノ ⺅ 小
仰 : ⺅ 卩
仱 : 一 丶 ⺅ 𠆢
仲 : ｜ ⺅ 口
仳 : ⺅ 匕 比
仵 : 一 ノ ⺅ 十 干
件 : ⺅ 牛
价 : 儿 ⺅ 𠆢
任 : ノ 王 ⺅ 士
份 : ⺅ ハ 刀
仾 : 一 ⺅ ヨ 彑
仿 : 一 丶 ノ ⺅ 方
伀 : ⺅ ハ 厶
企 : 止 𠆢
伂 : 一 ｜ ⺅ 冂 巾
伃 : 一 亅 ⺅ マ
伈 : ⺅ 心
伉 : ⺅ 亠 几
伊 : ｜ ヨ ⺅
伋 : 丶 ⺅ 又 乃 及
伌 : ⺅ 卩 厂
伍 : 一 ⺅
伎 : ⺅ 支 又 十
伏 : ⺅ 犬
伐 : ⺅ 戈
休 : ⺅ 木
伒 : ⺅ 斤
伕 : 一 二 人 ⺅ 大
伖 : 一 ノ ⺅ 又
众 : 人 𠆢
伙 : ⺅ 火
会 : 二 𠆢 厶
伜 : 九 ⺅ 十
伝 : ⺅ 二 厶
伮 : ⺅ 又 女
伯 : ⺅ 白
估 : ⺅ 口 十
伱 : ⺅ 𠆢 小
伳 : 一 ｜ ⺅ 十 世
伴 : ｜ ⺅ 二 并 十
伵 : ⺅ ハ 口
伶 : 𠆢 卩 一 ⺅
伷 : ｜ ⺅ 日 田
伸 : ｜ ⺅ 日 田
伹 : 一 ⺅ 目
伺 : ⺅ 口 亅 一
伻 : 一 ⺅ ハ 十 干
似 : ⺅ 人 丶
伽 : ⺅ 口 力
伾 : 一 ｜ 丶 ノ ⺅
佀 : ｜ ⺅ 口
佂 : 一 ⺅ 止
佃 : ⺅ 田
但 : 一 ⺅ 日
佇 : ⺅ 亅 宀
佈 : 一 ｜ ノ ⺅ 冂 巾
佉 : ⺅ 厶 土
佋 : ⺅ 刀 口
佌 : ⺅ 匕 止
位 : ⺅ 立
低 : ⺅ 氏
住 : 王 ⺅ 丶
佐 : ノ 一 ⺅ 工
佑 : ノ 一 ⺅ 口
佒 : ⺅ 大
体 : 木 一 ⺅
佔 : ⺅ 卜 口
何 : ⺅ 口 亅
佖 : ノ ⺅ 心
佗 : ⺅ 匕 宀
佘 : 二 𠆢 小 示
余 : 一 二 ハ 𠆢 亅 示 二 小
佚 : ノ ⺅ 人 大 二
佛 : ｜ ノ ⺅ 弓
作 : ｜ ノ ⺅
佝 : ⺅ 口 勹
佞 : ⺅ 女 二
佟 : 丶 ⺅ 夂
你 : 一 ノ ⺅ 小
佣 : 一 ｜ ⺅ 用
佤 : 一 丶 乙 ⺅
佩 : ⺅ 巾 几
佪 : ⺅ 口 囗
佬 : ノ ⺅ 匕 土 ⺹
佮 : 一 ⺅ 𠆢 口
佯 : 王 ⺅ 并 羊
佰 : ⺅ 白 一
佱 : 一 𠆢 止
佳 : ⺅ 土
併 : ｜ ノ 一 ⺅ 二 并 廾
佶 : ⺅ 口 士
佷 : ⺅ 艮
佸 : ⺅ 口 舌
佹 : ⺅ 勹 卩 厂
佺 : ⺅ 𠆢 王
佻 : ⺅ 儿 冫
佼 : ⺅ 父 亠
佽 : 一 人 ⺅ 勹 欠
佾 : ⺅ ハ 月
使 : ノ 一 ⺅ 口
侁 : 一 ノ ⺅ 儿 十 土
侂 : ノ ⺅ 匕 广
侃 : ⺅ 口 川
侄 : 一 ⺅ 厶 土
侅 : ノ 亠 人 ⺅ 幺 玄
來 : ｜ 一 十 人 ハ 木
侈 : ⺅ 夕
侉 : 一 二 ⺅ 勹 大
侊 : 一 ⺅ 儿 ⺌
例 : ⺅ 刂 歹
侌 : 一 丶 𠆢 厶 ユ
侍 : ⺅ 寸 土
侎 : ⺅ 米
侏 : ノ ⺅ 牛 ハ 木
侐 : ⺅ 皿 血
侑 : ノ 一 ⺅ 月
侒 : ⺅ 女 宀
侓 : ｜ 二 ⺅ ヨ 聿
侔 : ⺅ 厶 牛
侖 : 𠆢 冂 廾 冊
侗 : 一 ⺅ 冂 口
侘 : ノ 乙 ⺅ 宀
侙 : ⺅ 工 弋
侚 : ⺅ 勹 日
供 : ｜ 一 ⺅ 二 ハ
依 : 衣 ⺅ 亠
侞 : ⺅ 口 女
侟 : 一 ｜ ノ ⺅ 子
侠 : ⺅ 人 大 二 并 亠
価 : ⺅ 西
侫 : 亡 ⺅ 女
侭 : ⺅ 尸
侮 : ⺅ 母 毋
侯 : ⺅ 矢
侲 : ⺅ 厂 衣 辰
侵 : ヨ ⺅ 又 冖
侶 : ｜ 一 ⺅ 口
侷 : ⺅ 勹 口 尸
侹 : ⺅ 廴 王
侻 : ⺅ 儿 并 口
侼 : 一 ⺅ 冖 十 子
侽 : ⺅ 力 田
侾 : ノ ⺅ 土 子 ⺹
便 : ｜ ノ 一 ⺅ 日 田
俀 : ⺅ 女 爪
俁 : 一 丶 ノ ⺅ 口 大
係 : ノ ⺅ 糸 幺 小
促 : ⺅ 口 足
俄 : ⺅ 亅 戈 手
俅 : 一 丶 ⺅ 水
俆 : 亅 二 ⺅ 𠆢 ハ 小 示
俈 : ノ ⺅ 口 土
俉 : 一 二 ⺅ 口 五
俊 : ⺅ 儿 厶 夂
俋 : 乙 ⺅ 口 已 ⻏ 巴
俌 : 一 ｜ 丶 二 ⺅ 十 用
俍 : 丶 ⺅ 艮
俎 : 人 目
俏 : ⺅ 小 ⺌ 月
俐 : ⺅ 禾 刂
俑 : ⺅ 用 マ
俒 : 一 ⺅ 儿 宀
俔 : ⺅ 見
俗 : ⺅ 口 谷 ハ 𠆢
俘 : ⺅ 子 爪
俚 : ⺅ 里
俛 : ⺅ 免 儿
俜 : 一 ｜ ⺅ 勹 十 口 田
保 : ⺅ 口 木
俟 : ⺅ 矢 厶
俠 : 人 ⺅ 大
信 : ⺅ 言
俢 : ⺅ 夂 彡
俣 : ⺅ 口 大 二
俤 : ｜ ノ ⺅ 弓 并
俥 : ⺅ 車
俦 : 一 ノ 二 ⺅ 寸
修 : ｜ ⺅ 彡 攵
俯 : ⺅ 寸 广
俰 : ノ ⺅ 口 木 禾
俱 : 一 ⺅ ハ 目
俲 : 亠 ⺅ 力 父
俳 : ⺅ 非
俵 : 衣 ⺅ 士
俶 : ⺅ 小 卜 又
俸 : ｜ 一 ⺅ 人 大 二
俺 : 乙 ⺅ 大 奄
俼 : 亠 ⺅ 厶 月
俽 : 人 ⺅ 勹 斤 欠
俾 : ⺅ 十 田
俿 : ⺅ 儿 几 匕 卜 厂 虍
倀 : ⺅ 長
倁 : 一 ノ ⺅ 口 大 矢
倂 : 一 ⺅ 十 干
倄 : 一 丶 ノ ⺅ 月
倅 : ⺅ 十 人 亠
倆 : ｜ ⺅ 人 冂
倇 : ⺅ 卩 夕 宀
倉 : ノ 口 𠆢
倊 : ⺅ ハ 厶 心
個 : ⺅ 口 十 囗
倌 : ｜ ⺅ 口 宀
倍 : ⺅ 口 立
倎 : 一 ｜ ⺅ ハ 冂 日 冊
倏 : ⺅ 犬 夂 攵
倐 : ｜ ⺅ 夂 火
們 : ⺅ 門
倒 : ⺅ 刂 至 土 厶
倓 : ⺅ 火
倔 : ｜ ⺅ 山 尸
倖 : ⺅ 十 辛 立 亠
倗 : ⺅ 月
倘 : ⺅ 冂 口 小 ⺌
候 : ｜ ⺅ 矢
倚 : ⺅ 口 大 亅 一
倛 : 一 ｜ ⺅ ハ 甘 目
倜 : ｜ 二 ⺅ 冂 口 土
倝 : 人 十 日 曰
倞 : 亠 ⺅ 口 小
借 : ⺅ 日
倡 : ⺅ 日
倢 : 一 ｜ ⺅ 土 ヨ 疋 走
倣 : ⺅ 方 攵
値 : ⺅ 十 目 ｜ 一
倥 : ⺅ 穴 工 儿 宀
倦 : ⺅ 已 大
倧 : 二 ⺅ 宀 小 示
倨 : ⺅ 口 十 尸
倩 : ⺅ 月 青 土 二 亠
倪 : 臼 ⺅ 儿
倫 : ｜ 一 ⺅ 𠆢 亅 冊
倬 : ⺅ 十 日 卜 曰
倭 : ⺅ 禾 女
倮 : ⺅ 木 田
倰 : ⺅ ハ 土 夂
倲 : 一 ⺅ 口 日 木
倳 : 一 亅 ⺅ 口 ヨ
倵 : 一 丶 ⺅ 弋 止
倶 : ⺅ ハ 目 一
倹 : ⺅ 口 人 𠆢
倻 : ⺅ ⻏ 耳
偀 : ⺅ 大 ⺾
偁 : 一 ｜ 二 ⺅ 冂 月 爪
偂 : 一 丶 ⺅ 并 冂 刂 月
偃 : ⺅ 女 日 匚
偅 : 一 ノ ⺅ 車
偆 : 一 二 ⺅ 大 日
假 : ｜ ⺅ 又
偈 : ⺅ 日 勹 匕
偉 : ⺅ 口 韋
偊 : ノ ⺅ 冂 厶 口 禸 虫
偌 : 一 ノ ⺅ 口 ⺾
偎 : ⺅ 田 衣
偏 : ｜ 一 ⺅ 戸 冂 冊 尸
偐 : ⺅ 并 立 亠 厂 彡
偑 : ノ ⺅ 冂 虫 風
偒 : 一 ノ ⺅ 勹 日 曰 勿
偓 : 一 ⺅ 厶 土 尸 至
偕 : ⺅ 白 比
偖 : ⺅ 日 ⺹
偗 : ノ ⺅ 小 目
偙 : 一 ｜ 丶 ⺅ 并 冂 冖 巾 立
做 : ⺅ 口 十 攵
停 : ⺅ 口 亅 亠 冖
偟 : ⺅ 日 王 白
偠 : ⺅ 女 西
偢 : ノ ⺅ 木 火 禾
偣 : ⺅ 日 立 音
健 : ⺅ 廴 聿
偦 : ⺅ 月 疋
偧 : ⺅ 夕 大
偪 : 一 ⺅ 口 田
偬 : 丶 ⺅ 心 勿
偭 : ⺅ 面
偰 : 一 ｜ 二 ⺅ 刀 大 彡
偱 : 一 ⺅ 十 厂 斤 目 自
偲 : ⺅ 心 田
側 : ⺅ 貝 目 ハ 刂
偵 : ⺅ 貝 目 ハ 卜
偶 : ⺅ 田 冂 厶 禸
偸 : ⺅ 刂 月 𠆢
偽 : ⺅ 丶 灬
傀 : ⺅ 鬼 田 儿 匕 厶
傁 : ｜ ノ ⺅ 十 又 ヨ 支 臼
傃 : 一 二 ⺅ 土 小 幺 糸
傄 : 丶 ノ ⺅ 大 目
傅 : ⺅ 寸 田 丶
傆 : ⺅ 厂 小 日 白
傈 : ⺅ 木 西
傊 : ⺅ ハ 口 目 貝
傍 : ⺅ 并 方 立 亠 冖
傎 : ⺅ ハ 匕 十 目
傏 : ｜ ⺅ 口 广 ヨ
傐 : 亠 ⺅ 冂 口 高
傑 : ⺅ 舛 木 夕
傒 : ⺅ 大 幺 爪
傓 : 一 ノ ⺅ 冫 厂 尸 戸 羽
傔 : 一 ノ ⺅ ヨ 木 禾
傕 : ⺅ 冖 隹
傖 : 一 丶 ⺅ 𠆢 口 尸 戸 日
傘 : 十 人 𠆢
備 : ⺅ 用 厂 ⺾
傚 : ⺅ 父 亠 攵
傛 : ⺅ 𠆢 ハ 口 宀 谷
傜 : 丶 ⺅ 凵 夕 山 爪 缶
傞 : 一 ノ 二 ⺅ 并 工 王 羊
傟 : ⺅ ハ 冫 厶 羽
傠 : ⺅ 寸 言
傡 : ⺅ 立
傢 : ⺅ 宀 豕
傣 : 一 丶 亅 二 人 ⺅ 冫 大 水
傪 : ⺅ 𠆢 厶 彡
催 : ⺅ 山 隹
傭 : ヨ ⺅ 用 广
傯 : 丶 ノ ⺅ 勹 口 囗 夂 心
傰 : ⺅ 山 月
傱 : 人 彳 止
傲 : ⺅ 土 方 攵
傳 : ⺅ 寸 田 厶
傴 : ⺅ 口 匚 品
債 : ⺅ 貝 目 ハ 土 亠
傷 : ノ ⺅ 日 勿
傹 : ⺅ 儿 日 曰 立 音
傺 : 丶 二 ⺅ 𠆢 夕 小 示
傻 : 丶 ノ ⺅ 儿 囗 夂
傽 : ⺅ 十 日 曰 立 音
傾 : ⺅ 貝 目 ハ 頁 匕
僀 : 一 ｜ 乙 ⺅ 冂 冖 十 巾 廾
僂 : ⺅ 十 女
僃 : ⺅ 勹 ⺾ 用
僄 : 二 ⺅ 小 示 西
僅 : ⺅ 土 ⺾ 口
僇 : ⺅ 𠆢 冫 彡 羽
僉 : 口 人 𠆢
僊 : ⺅ 西 大 已
僌 : ⺅ 攵 車
働 : ｜ 一 ⺅ 力 日
僎 : ｜ 二 ⺅ ハ 已
像 : ⺅ 勹 豕 口 一
僐 : 一 ｜ ⺅ 并 口 王 羊
僑 : ノ ⺅ 口 冂 大
僓 : 一 ｜ ⺅ ハ 口 土 目 虫 貝
僔 : 一 ⺅ 儿 ハ 并 寸 酉
僕 : 王 ⺅ 并 羊
僖 : ⺅ 口 士 十 豆 并
僘 : ⺅ 冂 口 小 ⺌ 攵
僙 : 一 ｜ ⺅ ハ 凵 日 田 黄
僚 : ⺅ 小 日
僜 : 一 ⺅ 并 口 癶 豆
僝 : ⺅ 子 尸
僞 : ⺅ 爪 灬
僟 : 人 ⺅ 幺 戈
僡 : 一 ⺅ 心 虫
僢 : ｜ ⺅ 冖 夕 爪 舛
僣 : ⺅ 人 土 日
僤 : ⺅ 十 口 日 田
僥 : ⺅ 土 儿
僦 : 丶 亠 ⺅ 口 小 尢 尤
僧 : ⺅ 田 日 并
僨 : ⺅ ハ 十 ⺾ 目 貝
僩 : ⺅ 月 門
僭 : ⺅ 日 亠 无
僮 : ⺅ 里 立
僯 : ⺅ 夕 米 舛
僱 : 一 丶 ⺅ 尸 戸 隹
僲 : ⺅ 夕 西 舛
僳 : ⺅ 米 西
僵 : 一 ⺅ 田 二
僶 : ⺅ 黽
價 : ⺅ 貝 目 ハ 西
僺 : ⺅ 口 木
僻 : ⺅ 口 十 辛 立 尸
僾 : ⺅ 冖 夂 心 爪
儀 : 一 王 ⺅ 并 羊 亅 戈 手
儁 : ⺅ 隹
儂 : ｜ ⺅ 辰
儃 : 一 亠 ⺅ 口 囗 日
億 : 音 ⺅ 心 日 立
儆 : ⺅ 勹 口 ⺾ 攵
儇 : 一 丶 ノ ⺅ 口 罒 衣
儈 : 一 丶 ノ ⺅ 𠆢 并 口 日
儉 : ⺅ 口 人 𠆢
儋 : ⺅ 儿 ハ 冖 勹 厂 言
儌 : ⺅ 攵 方 日 白
儍 : 丶 ノ ⺅ 儿 ハ 凵 夂
儎 : ⺅ 十 土 戈 車
儐 : 一 ｜ ノ ハ 宀 目 貝
儒 : 雨 ⺅ 而
儔 : ⺅ 口 工 士 寸
儕 : ⺅ 刀 亠 齊 氏 廾
儖 : ⺅ 皿 臣 二
儗 : 一 ノ ⺅ 匕 マ 大 疋 矢
儘 : ヨ ⺅ 皿 灬
儙 : 一 ｜ ⺅ 辶 口 虫
儚 : ⺅ 罒 夕 冖 ⺾
儛 : 一 ｜ ノ ⺅ 夕 舛 無
儜 : 一 亅 ⺅ 宀 心 罒
儝 : ⺅ 冖 木 火
儞 : 一 ｜ 丶 ノ ⺅ ハ 冂
償 : ⺅ 貝 目 ハ 口 ⺌ 冖
儡 : ⺅ 田
儣 : ｜ 二 ⺅ ハ 广 日 田 黄
儧 : 一 ⺅ ハ 大 目 貝
儨 : ⺅ ハ 斤 目 貝
優 : 一 ⺅ 心 白 冖 夂 自
儬 : 二 亠 ⺅ ハ 土 月 目 貝 青
儭 : 一 ⺅ 儿 小 目 立 見
儯 : 一 ⺅ 并 大 馬
儱 : 一 乙 ⺅ 月 立
儲 : ⺅ 言 日 ⺹
儳 : 一 ｜ 丶 ノ 乙 ⺅ 儿 冖 勹 匕 口 比 免
儴 : 一 ｜ 丶 二 亠 ⺅ 口 衣
儵 : ｜ ⺅ 并 夂 攵 灬 里 黒
儷 : ⺅ 鹿 比 冂 广
儸 : ⺅ 小 幺 罒 糸 隹
儹 : ノ ⺅ 儿 ハ 土 目 貝
儺 : ⺅ ⺾ 隹
儻 : ⺅ 口 黒 ⺌ 里 冖 灬
儼 : ⺅ 口 耳 厂 攵
儿 : 儿
兀 : 一 儿
允 : 厶 儿
兂 : 一 ノ 乙 二 尢
元 : 二 儿 元
兄 : 口 儿
充 : 亠 儿 厶
兆 : 儿 冫
兇 : 儿 凵 丶 ノ
先 : ノ 土 儿
光 : 一 ⺌ 儿
兊 : 儿 ハ 厶
克 : 口 十 儿
兌 : 口 并 儿
免 : ｜ 一 勹 口 儿 免
兎 : ノ 丶 儿 口 ｜
兏 : 一 儿 卜 厂
児 : ｜ 日 儿
兒 : 臼 儿
兓 : 一 尢
兔 : 免 丶 儿
兕 : 一 ｜ 儿
兗 : 亠 儿 ハ 口
兘 : 二 儿 厶 口 元
党 : 口 ⺌ 儿 冖
兜 : 白 儿
兟 : ノ 儿 土
兠 : ｜ 儿 冫 匕 日 白
兢 : 口 十 儿
兤 : 一 ｜ 二 亠 儿 ハ ⺌ 广 日 田 黄
入 : 入
兦 : 乙 人
全 : 王 ハ 𠆢
兩 : ｜ 一 入 冂
兪 : 月 入 𠆢
八 : ハ
公 : ハ 厶
六 : ハ 亠
兮 : 弓 ハ
共 : ハ ｜ 一 二
关 : 一 二 人 并 大
兵 : 一 斤 ハ
其 : 一 甘 ハ
具 : 一 ハ 目
典 : ｜ 一 日 ハ
养 : ｜ ノ ハ 并 王 羊
兼 : ｜ ヨ 一 ハ 并
兾 : ｜ 二 ハ 并 田
冀 : 田 二 ハ 匕 爿
冂 : 冂
冃 : 二 冂
冄 : 二 冂
内 : 人 冂
円 : 冂 亠 一 ｜
冉 : ｜ 一 冂
冊 : ｜ 一 亅 冂 廾 冊
冋 : 冂 口
册 : 一 冂
再 : ｜ 一 冂 王
冎 : 冂 口 囗
冏 : 口 儿 冂
冐 : 月 二 冂
冑 : 月 田 二 冂
冒 : 日 目
冓 : ｜ 一 冂
冕 : 月 免 二 儿 冂
冖 : 冖
冗 : 冖 几
冘 : ノ 乙 冖 尢
写 : 一 冖 勹
冝 : 一 冖 目
冠 : 寸 儿 冖
冡 : 一 冖 豕
冢 : 冖 豕
冣 : 冖 又 耳
冤 : 免 丶 冖 儿
冥 : 日 ハ 亠 冖
冦 : 二 卜 又 儿 冖
冨 : 口 田 冖
冩 : 臼 冖 勹 灬
冪 : 巾 大 日 冖 ⺾
冫 : 冫
冬 : 夂 丶 攵
冭 : 一 丶 ノ 大
冰 : 水 冫
冱 : 一 二 冫
冲 : ｜ 口 冫
决 : ノ 人 冫 ユ 大
冴 : 牙 冫
况 : 口 儿 冫
冶 : 口 冫 厶
冷 : 𠆢 冫 卩 一
冸 : ｜ 二 ハ 并 冫 小
冺 : 一 冫 尸 氏
冼 : ノ 儿 冫 土
冽 : 刂 冫 歹
冾 : 一 𠆢 冫 口
冿 : ｜ 二 冫 ヨ 聿
凂 : 一 ｜ ノ 乙 儿 冫 勹 口 免
凃 : 二 𠆢 冫 小 示
凄 : 女 冫 ヨ 十
凅 : 口 十 冫 囗
准 : 冫 隹
凈 : 亅 冫 ヨ 爪
凉 : 口 小 亠 冫
凊 : 一 ｜ 二 亠 冂 冫 土 月 青
凋 : 口 土 冂 冫
凌 : 土 儿 冫 夂
凍 : ｜ 一 日 木 冫 田
减 : 一 ノ 冫 厂 口 戈
凑 : 一 丶 ノ 二 冫 大
凒 : 并 冫 口 山 豆
凓 : 冫 木 西
凕 : 亠 ハ 冖 冫 日 曰
凖 : 十 冫 隹
凘 : 一 ハ 冫 斤 甘
凛 : 口 示 二 小 亠 冫 囗
凜 : 冫 亠 禾 口
凝 : 矢 冫 匕 マ 疋
凞 : ノ 冫 匚 已 灬 臣
几 : 几
凡 : 丶 几
凢 : ノ 乙 几 广
凥 : 几 尸
処 : 几 夂 攵
凧 : ｜ 巾 冂 几
凩 : 木 几
凪 : 止 几
凭 : ノ ⺅ 士 几
凮 : 一 ノ 几 日 白
凰 : 王 白 几
凱 : 口 山 豆 并 几
凲 : ｜ ハ 并 几 ヨ
凳 : 一 𠆢 并 几 口 癶 豆
凴 : 冫 几 馬
凵 : 凵
凶 : 凵 丶 ノ
凷 : 凵 土
凸 : ｜ 一 冂 凵
凹 : 凵
出 : ｜ 山
函 : 一 水 凵
凾 : 口 又 凵
刀 : 刀
刁 : 一 亅
刂 : 刂
刃 : 刀 丶
刄 : 刀
刅 : 丶 ノ ハ 刀
分 : 刀 ハ
切 : 刀 匕
刈 : 刂
刊 : 刂 干
刋 : ノ 刂 十
刎 : 刂 勿 勹
刑 : 刂 廾 ノ
划 : 刂 戈
刓 : 二 儿 刂 元
刔 : 刂 人 ユ 大
刕 : 刀
刖 : 刂 月
列 : 刂 歹
刘 : 刂 文
初 : 衤 刀
刢 : 丶 𠆢 刂 マ
判 : ｜ 刂 二 并 十
別 : 刂 口 力
刧 : 土 刀 厶
刨 : 刂 勹 已
利 : 禾 刂
刪 : 刂 冊 冂
刮 : 刂 口 舌
到 : 刂 至 土 厶
刱 : 一 ｜ 丶 ノ 二 ハ 刀 井
刲 : 刂 土
刳 : 刂 大 二 勹
刵 : 刂 耳
制 : ノ 刂 牛 巾 二
刷 : 刂 巾 尸
券 : 一 人 大 刀 二 并
刹 : 刂 木
刺 : ｜ 刂 巾 ハ 木 亅 冂
刻 : 刂 亠
刼 : 一 丶 ノ 𠆢 刀 厶
剃 : ｜ ノ 刂 弓 并
剄 : 刂 工 巛
剅 : 一 并 刂 口 豆
則 : 貝 目 ハ 刂
剉 : 人 刂 土
削 : 刂 月 ⺌
剋 : 刂 口 十 儿
剌 : ｜ 刂 口 ハ 木
前 : 一 刂 月 并
剏 : ｜ ノ 刀 二 并 廾
剔 : 刂 日 勿
剕 : 刂 非
剖 : 刂 口 立
剗 : 刂 戈
剘 : 一 ｜ 二 ハ 刂 甘
剚 : 一 亅 刂 口
剛 : 刂 并 冂 岡 山
剜 : 刂 卩 夕 宀
剝 : 亅 冫 刂 ヨ 彑 水
剞 : 刂 口 大 亅 一
剟 : 刂 又
剠 : 亠 刂 口 小
剡 : 刂 火
剣 : 刂 口 人 𠆢
剤 : ｜ ノ 刂 文 廾 斉
剥 : ヨ 刂 水
剦 : 乙 刂 大 日 奄
剩 : ｜ 刂 匕 爿
剪 : 一 刂 月 并 刀
剬 : 刂 山 而
剮 : 冂 刂 口 囗
副 : 一 刂 口 田
剰 : ｜ ノ 一 刂
剱 : 口 人 刀 𠆢 丶
割 : 刂 口 土 宀 亠
剳 : 刂 口 𠆢 ⺾
剴 : 刂 口 山 豆 并
創 : 刂 口 𠆢
剷 : 一 丶 ノ 亠 刂 厂 土 牛 立
剸 : 一 刂 厶 寸 日 虫
剹 : 𠆢 冫 刂 彡 羽
剽 : 刂 示 二 小 西
剿 : 刂 ⺌ 田 木
劀 : ハ 冂 刂 マ 口 矛
劂 : 一 人 并 刂 勹 厂 屮 欠
劃 : 一 刂 田 聿
劄 : 一 𠆢 刂 口 竹
劅 : 刂 勹 罒 虫
劇 : 刂 卜 匕 厂 虍 豕
劈 : 口 十 辛 刀 立 尸
劉 : 刂 金 厶
劊 : 一 ｜ 丶 ノ 𠆢 并 刂 口 日
劌 : 一 ノ 亅 刂 厂 戈 止
劍 : 刂 口 人 𠆢
劑 : 刂 亠 齊 刀 氏 廾
劒 : 口 人 𠆢 丶 刀
劓 : 一 ｜ ノ 刂 廾 田 目 自 鼻
劔 : 口 人 刀 𠆢 丶
劕 : ハ 刂 斤 目 貝
劖 : 一 ｜ ノ 乙 儿 刂 勹 匕 口 比 免
劗 : ノ 儿 ハ 刂 土 目 貝
劘 : 一 ｜ ノ 儿 刂 十 广 木 非
劚 : ｜ 丶 ノ 刂 勹 尸 水 罒 虫
力 : 力
劜 : 乙 力
功 : 工 力
加 : 口 力
劣 : ノ 小 力
劤 : 力 斤
劥 : 一 丶 亠 几 力
劦 : 力
劧 : 力 手
助 : 目 力
努 : 女 又 力
劫 : 土 力 厶
劬 : 口 力 勹
劭 : 口 刀 力
劯 : 力 口 石
劰 : 力 日 白
励 : 斤 力 厂
労 : ⺌ 力 冖
劵 : 人 大 二 ハ 力
劶 : 一 力 厂 口
劷 : 一 ノ 二 并 力 王 羊
劸 : 力 土
効 : 父 力 亠
劺 : 力 厶 牛
劻 : 力 匚 王
劼 : 口 士 力
劽 : 刂 力 歹
劾 : 人 力 亠
勀 : ノ 儿 力 十 口
勁 : 工 巛 力
勃 : 子 十 力 冖
勄 : 一 ノ 力 毋 母
勅 : ｜ 一 口 木 力
勆 : 丶 力 厶 日 曰
勇 : 田 力 マ
勈 : 力 マ 用
勉 : 力 免 儿
勊 : 儿 力 十 口
勌 : 一 二 ハ 力 卩 大
勍 : 口 小 力 亠
勏 : 力 口 立
勐 : 力 子 皿
勑 : 人 力 木
勒 : 革 力
勔 : 力 面
動 : ｜ 一 日 力 里
勖 : 二 冂 力 目
勗 : 日 目 力
勘 : 力 匚 甘 儿
務 : 矛 力 夂
勛 : ハ 力 口 目 貝
勜 : ハ 冫 力 厶 羽
勝 : 月 人 大 二 并 力
勞 : 火 力 冖
募 : 大 日 力 ⺾
勠 : 羽 力 𠆢 冫 彡
勡 : 二 力 小 示 西
勢 : 土 力 丶 儿 九
勣 : 貝 目 ハ 土 力 亠
勤 : 土 力 ⺾ 口
勥 : 力 口 弓 虫
勦 : ⺌ 田 木 力
勧 : ノ 力 隹 矢
勨 : ノ 力 勹 口 豕
勩 : 一 ｜ ハ 力 目 世 貝
勪 : 一 丶 ノ 冂 力 口 大
勬 : 一 并 力 大 小 幺 糸
勰 : 力 心 田
勱 : 冂 力 厶 ⺾ 田 禸
勲 : ｜ 力 灬 日 一 ノ 田
勳 : ｜ 力 灬
勴 : 力 匕 卜 厂 心 田 虍
勵 : 田 力 厂 禸
勶 : 一 丶 亠 力 厶 彳 攵 月
勷 : 一 ｜ 二 亠 力 口 衣
勸 : 口 十 力 ⺾ 隹
勹 : 勹
勺 : 丶 勹
勻 : 二 勹
勾 : 勹 厶
勿 : ノ 勹 勿
匀 : 一 丶 勹
匁 : ノ 勹 丶
匂 : 勹 匕
匃 : 人 勹
包 : 勹 已
匆 : 丶 勿 勹
匇 : 勹 夕
匈 : 凵 勹
匊 : 勹 米
匋 : 凵 勹 山 缶
匌 : 一 𠆢 勹 口
匍 : 十 用 丶 勹
匏 : 大 二 勹 已
匐 : 一 口 田 勹
匑 : 勹 弓 身
匓 : 几 勹 厶 又 日 殳 艮
匕 : 匕
化 : ⺅ 匕
北 : 匕 爿
匘 : 丶 ノ 匕 口 巛
匙 : 日 匕
匚 : 匚
匛 : 丶 勹 匚 夂
匜 : ｜ 乙 匕 匚 也
匝 : 巾 匚
匞 : 匚 工
匟 : 亠 几 匚
匠 : 斤 匚
匡 : 王 匚
匣 : ｜ 田 匚
匤 : 丶 匚 王
匥 : 匚 厶 廾
匧 : 人 匚 大
匨 : 匚 士 爿
匩 : 匚 屮 山 王
匪 : 非 匚
匫 : ノ 勹 匚 日 曰 勿
匬 : 一 𠆢 刂 匚 月
匭 : 匚 九 車
匯 : 氵 匚 隹
匰 : 匚 十 口 日 田
匱 : 貝 目 ハ 匚
匲 : 一 丶 ノ 匚 口 大
匳 : 口 人 𠆢 匚
匵 : 儿 ハ 匚 口 士 罒 貝
匸 : 匚
匹 : 儿 匚
区 : 匚 丶 ノ
医 : 矢 匚
匼 : 一 𠆢 匚 口
匽 : 匚 女 日
匾 : 一 ｜ 丶 ノ 亅 冂 匚 尸 廾 戸 冊
匿 : ノ 口 匚 ⺾
區 : 口 匚 品
十 : 十
卂 : 乙 十
千 : ノ 十
卅 : ｜ ノ 一 十 川
卆 : 九 十
升 : ノ 廾 十
午 : ノ 干 十
卉 : 十 廾
半 : ｜ 二 并 十
卋 : 一 ｜ 凵 十
卌 : 一 ｜
卍 : ｜ 一 十
卑 : 十 田
卒 : 十 人 亠
卓 : 十 日 卜
協 : 十 力
南 : 干 十 并 冂
単 : 十 ⺌ 田
卙 : 一 ｜ ハ 匚 十 甘
博 : 十 寸 田 丶
卛 : 丶 ノ 十 幺 糸 言
卜 : 卜
卞 : 卜 亠
占 : 口 卜
卡 : 一 卜 土
卣 : 一 卜 口
卥 : 丶 ノ 卜 口 夕
卦 : 土 卜
卧 : 匚 卜 臣
卩 : 卩
卬 : 卩 厂
卭 : 卩 工
卮 : 卩 厂
卯 : 卩
印 : ｜ 卩
危 : 勹 厂 卩
卲 : 刀 卩 口
即 : 艮 卩
却 : 土 卩 厶
卵 : ノ 卜 丶 卩
卷 : 人 大 二 ハ 卩
卸 : ノ 止 卩
卹 : 卩 皿 血
卺 : 一 卩 水
卻 : 口 ハ 卩 谷
卽 : 匕 卩 日 白
卾 : 二 勹 卩 口
卿 : 艮 卩
厂 : 厂
厃 : 勹 厂
厄 : 卩 厂
厇 : 一 ノ 乙 厂
厈 : 一 十 厂 干
厎 : 丶 厂 氏
厓 : 厂 土
厔 : 一 厂 厶 土 至
厖 : 丶 厂 尤 彡 尢
厘 : 里 厂
厙 : 厂 車
厚 : 子 日 厂
厝 : ｜ 二 厂 日
原 : 小 白 厂
厠 : 貝 目 ハ 刂 厂
厡 : 厂 日 水 白
厤 : ノ 厂 木 禾
厥 : 欠 并 厂 屮
厦 : 一 自 厂 夂
厨 : 口 寸 豆 并 厂
厩 : 牙 艮 儿 厂
厪 : 二 十 厂 口 廾 革
厫 : 厂 土 士 攵 方
厭 : 月 犬 日 厂
厮 : 甘 斤 ハ 厂
厯 : 厂 心 木
厰 : 口 ⺌ 冂 厂 攵
厲 : 冂 厂 厶 ⺾ 田 禸
厳 : 耳 ⺌ 厂 攵
厴 : ｜ 丶 大 日 月 犬 田
厵 : 厂 小 日 白
厶 : 厶
厷 : 一 ノ 厶
厸 : 厶
厺 : 厶 大
去 : 土 厶
厽 : 厶
叀 : 一 ｜ 十 厶 日 田
参 : 一 厶 彡
參 : 𠆢 厶 彡
叅 : 丶 ノ 亅 𠆢 厶 灬
又 : 又
叉 : 又 丶
及 : 丶 及 乃
友 : ノ 一 又
双 : 又 丶
反 : 又 厂
収 : ｜ 又
叏 : ｜ 十 又 ユ 支
叒 : 又
叓 : ｜ 十 又 口 支
叔 : 小 卜 又
叕 : 丶 ノ 又
取 : 耳 又
受 : 爪 又 冖
叙 : 禾 又 𠆢
叚 : 一 ｜ 二 又 口
叛 : 并 又 厂
叝 : 卩 厶 又 土
叞 : 二 又 小 尸 示
叟 : 臼 支 又 十
叠 : 一 冖 又 宀 目
叡 : ハ 卜 又 目 冖
叢 : 王 耳 并 又 羊
口 : 囗 口
古 : 口 十
句 : 口 勹
另 : 力 口
叧 : 刀 口
叨 : 口 刀
叩 : 口 卩
只 : 口 ハ
叫 : ｜ 口 十
召 : 口 刀
叭 : 口 ハ
叮 : 口 亅 一
可 : 一 口 亅
台 : 口 厶
叱 : 口 匕
史 : ノ 口
右 : ノ 一 口
叴 : 九 口
叵 : 匚 口
叶 : 口 十
号 : 一 口 勹
司 : 一 口 亅
叺 : 口 入
吁 : 口 二 亅
吂 : 一 丶 亠 匚 口
吃 : 乙 口
各 : 口 夂 攵
合 : 口 𠆢 一
吉 : 口 士
吊 : 巾 口
吋 : 口 寸
同 : 口 冂 一
名 : 口 夕
后 : ノ 一 斤 口 亅 厂
吏 : ノ 一 口 丶
吐 : 口 土
向 : 口 冂
吒 : ノ 匕 口
吓 : 一 卜 口
吚 : ノ 口 ヨ
君 : 一 口 ノ
吝 : 口 文
吞 : 一 二 人 口 大
吟 : 口 𠆢
吠 : 犬 口
吡 : 匕 口 比
吤 : ｜ ノ 𠆢 口
否 : ノ 一 口 ｜ 丶
吧 : 乙 口 已 巴
吨 : ノ 乙 凵 口 屯
吩 : 口 刀 ハ
吪 : ノ 乙 ⺅ 匕 口
含 : 口 𠆢
听 : 斤 口
吭 : 口 亠 几
吮 : 口 儿 厶
启 : 丶 口 尸
吱 : 十 又 口 支
吴 : 一 口 大
吵 : ノ 口 小
吶 : 口 人 冂
吸 : ノ 口 及
吹 : 欠 口
吻 : 勿 口 勹
吼 : 乙 口 子
吽 : ｜ 牛 口 二
吾 : 一 口 五
呀 : 牙 口
呂 : 口
呃 : 卩 厂 口
呄 : 十 乃 口
呆 : 口 木
呇 : 口 水
呈 : 王 口
呉 : 口 ハ
告 : ノ 口 土
呍 : 二 厶 口
呎 : 口 尸
呏 : ノ 口 廾
呑 : ノ 口 大
呕 : 丶 ノ 匚 口
呞 : 一 亅 口
呟 : 玄 口 亠 幺
呢 : 匕 口 尸
呤 : 丶 𠆢 マ 口
呦 : 力 口 幺
呧 : 丶 口 氏
周 : 口 土 冂
呩 : 二 口 小 示
呪 : 口 儿
呫 : 卜 口
呬 : 儿 口 囗
呭 : 一 ｜ 口 世
呮 : ハ 口
呰 : 口 止 匕
呱 : 瓜 口
味 : ｜ 口 二 ハ 木 亠
呴 : 勹 口
呵 : 口 亅
呶 : 口 女 又
呷 : ｜ 口 田
呻 : ｜ 口 田
呼 : ノ 口 并 亅
命 : 口 𠆢 卩 一
呿 : 厶 口 土
咀 : 一 口 目
咁 : 口 甘
咃 : ｜ 乙 ⺅ 匕 口 也
咄 : ｜ 口 山
咅 : 口 立
咆 : 口 勹 已
咈 : ｜ ノ 口 廾 弓
咉 : 口 大
咊 : ノ 口 木 禾
咋 : ｜ ノ 口
和 : 禾 口
咍 : 厶 口
咎 : 口 人 夂
咏 : ノ 口 水 丶
咐 : ⺅ 口 寸
咑 : 一 亅 口 扌
咒 : 口 几
咕 : 十 口
咖 : 力 口
咜 : 匕 口 宀
咟 : 一 口 日 白
咠 : 口 耳
咡 : 口 耳
咢 : 口 二 勹
咤 : ノ 乙 口 宀
咥 : 口 至 土 厶
咦 : 口 大 弓
咧 : 刂 口 歹
咨 : 欠 口 冫
咩 : 并 口 王 羊
咪 : 口 米
咫 : 口 ハ 尸
咬 : 口 父 亠
咭 : 口 士
咮 : 一 ノ 口 木
咯 : 口 夂
咱 : 口 目 自
咲 : 口 人 大 二 并
咳 : 口 人 亠
咷 : 丶 ノ 儿 冫 口
咸 : ノ 口 戈
咹 : 口 女 宀
咺 : 一 口 日
咻 : ⺅ 口 木
咼 : 口 冂
咽 : 口 大 囗
咾 : 口 ⺹
咿 : ノ ⺅ 口 ヨ
哀 : 衣 口 亠
品 : 口 品
哂 : 口 西
哃 : 一 冂 口
哄 : ｜ 一 口 二 ハ
哆 : 口 夕
哇 : 口 土
哈 : 口 𠆢
哉 : 口 土 戈
哊 : 一 ノ 口 月 肉
响 : ノ 冂 口
哎 : 丶 ノ 口 ⺾
哘 : 口 行 彳
哠 : ノ 口 土
員 : 貝 目 ハ 口
哢 : 王 口 廾
哥 : 一 口 亅
哦 : 口 亅 戈
哨 : 月 口 ⺌
哩 : 口 里
哪 : 二 刀 口 ⻏
哬 : 一 亅 ⺅ 口
哭 : 犬 口
哮 : 口 子 ⺹
哯 : 儿 口 目 見
哱 : 冖 十 口 子
哲 : 斤 口 扌
哳 : 口 扌 斤
哶 : 一 ｜ 二 十 卜 口 干
哺 : 口 十 用 丶
哼 : 一 亅 亠 口
哽 : ノ 口 田
哾 : 儿 并 口
哿 : 一 亅 力 口
唀 : ノ 乃 口 木 禾
唁 : 口 言
唄 : 貝 目 ハ 口
唅 : 一 丶 𠆢 口
唆 : 口 儿 厶 夂
唇 : 衣 口 辰 厂
唈 : 乙 口 已 ⻏ 巴
唉 : 一 ノ 厶 口 大 矢
唌 : ノ 口 廴 止
唍 : 二 儿 口 宀 元
唎 : ノ 刂 口 木 禾
唏 : ノ 一 巾 口
唐 : ｜ ヨ 一 口 广
唔 : 一 口 五
唕 : 十 口 日 白
唖 : ｜ 一 口
唪 : 一 ｜ 丶 ノ 二 口 大
唫 : 一 𠆢 并 十 口 土 干
售 : 口 隹
唯 : 口 隹
唱 : 口 日
唲 : 儿 口 臼
唳 : 戸 口 大 一 尸
唵 : 乙 口 大 日 田 奄
唶 : ｜ 二 口 日
唸 : 口 心 𠆢
唹 : 口 方 𠆢 冫
唻 : 人 口 木
唼 : 口 女 立
唽 : 口 斤 木
唾 : ｜ ノ 一 口
啀 : 口 土 厂
啁 : ｜ 二 冂 口 土
啄 : 口 豕
啅 : 口 十 日 卜
商 : 口 并 立 亠 儿 冂
啇 : 亠 并 冂 十 口
啉 : 口 木
啊 : 一 亅 口 ⻏ ⻖
啌 : 穴 口 工 儿 宀
啍 : 亠 口 子
問 : 口 門
啐 : 亠 人 十 口
啑 : 口 土 ヨ 走
啓 : 戸 口 攵 一 尸
啖 : 火 口
啗 : 臼 口 勹
啘 : 卩 口 夕 宀
啚 : 十 口 囗
啛 : 一 ｜ 十 口 女 ヨ
啜 : 口 又
啝 : 禾 口
啞 : 一 ｜ 口
啠 : 口 斤
啡 : 口 非
啣 : 口 止 凵 卩
啤 : ノ 十 口 日 白
啦 : 口 扌 立
啻 : 巾 口 并 立 亠 冖
啼 : 巾 口 并 立 亠 冖
啽 : 一 𠆢 口 廾
啾 : 火 禾 口
啿 : 一 ｜ ハ 匚 口 甘
喀 : 口 夂 宀
喁 : 冂 厶 口 田 禸
喂 : 一 口 田 衣
喃 : 干 口 十 并 冂
善 : 王 口 并 羊
喆 : 口 士
喇 : ｜ 刂 口 ハ 木 亠
喈 : 匕 口 日 比 白
喉 : ⺅ 口 矢
喊 : ノ 口 戈
喋 : 口 木 世
喎 : ｜ 冂 口
喏 : 口 ⺾ 石
喑 : 口 日 立 音
喒 : 卜 口 夂 日
喓 : 口 女 西
喔 : 一 厶 口 土 尸 至
喗 : 冖 口 車
喘 : ｜ 一 口 山 而 冂
喙 : ヨ 口 豕
喚 : 口 大 儿 冂 勹
喜 : 口 士 豆 并
喝 : 口 日 勹 匕
喞 : 口 艮 卩
喟 : 月 口 田
喣 : 勹 口 灬
喤 : 口 日 王 白
喧 : 一 口 日 宀
喨 : 口 亠 儿 冖
喩 : 刂 月 口 𠆢
喪 : ｜ 衣 一 口
喫 : 口 大 土 刀 亠
喬 : ノ 口 冂 大
喭 : 丶 ノ 亠 厂 口 彡
單 : 口 十 田
喰 : 口 食
喲 : 一 丶 勹 口 小 幺 糸
営 : 口 ⺌ 冖
喿 : 口 木
嗁 : 几 匕 卜 厂 口 虍
嗃 : 亠 冂 口 高
嗄 : 一 口 自 夂
嗅 : 口 自 大
嗆 : 一 丶 ノ 𠆢 口 尸 日
嗇 : 口 人 土 囗
嗉 : 一 ｜ 二 口 小 幺 糸
嗋 : 力 口 月
嗌 : 一 ハ 并 口 皿
嗎 : 口 馬
嗑 : 厶 口 土 皿
嗒 : 一 𠆢 口 ⺾
嗓 : 又 口 木
嗔 : 口 十 ハ 目
嗗 : 冂 冖 口 月 骨
嗘 : 口 大 幺 爪
嗚 : 口 鳥 灬
嗛 : 一 ｜ 丶 ノ 口 ヨ
嗜 : 口 日 ⺹
嗝 : 一 儿 冂 口 鬲
嗞 : 一 并 口 幺
嗟 : ノ 王 口 工 并 羊
嗢 : 人 口 日 皿
嗣 : ｜ 一 口 亅 冂
嗤 : 口 山 虫
嗩 : ハ 口 小 ⺌ 目 貝
嗶 : 一 ｜ 口 田 里
嗷 : 口 土 方 攵
嗹 : 口 辶 車
嗽 : ｜ 欠 口 ハ 木
嗾 : 口 方 矢
嗿 : 丶 𠆢 ハ 口 目 貝
嘅 : 乙 匕 厶 口 无 日 白 牙
嘆 : ノ 一 口 ⺾
嘇 : 𠆢 厶 口 彡
嘈 : 一 ｜ 口 日
嘉 : 口 士 力
嘊 : 厂 口 土 山
嘍 : 一 ｜ 口 女 日
嘎 : 一 口 戈 目 自
嘏 : 二 十 又 口 尸
嘐 : 𠆢 冫 口 彡 羽
嘑 : 一 ノ 亅 并 匕 卜 厂 口 虍
嘒 : 一 ｜ 二 口 ヨ
嘔 : 口 匚 品
嘖 : 貝 目 ハ 口 土 亠
嘗 : 口 ⺌ 日 冖 匕
嘘 : 口 卜 匕 厂 虍
嘙 : 冫 十 厂 又 口 女 氵 支
嘛 : 口 麻 木 广
嘨 : ｜ ノ 口 ヨ 水 米 隶
嘩 : 一 口 ⺾ ｜
嘬 : 又 口 日 耳
嘯 : ｜ ノ ヨ 口 水 米 隶 聿
嘰 : 人 口 幺 戈
嘱 : 口 尸 禸
嘲 : 月 口 十 日
嘳 : 一 ｜ ハ 口 目 虫 貝
嘴 : 角 口 止 匕
嘵 : 一 儿 口 土
嘶 : 甘 斤 口 ハ
嘷 : 二 冫 十 口 目 自
嘸 : ｜ ノ 一 口 灬 無
嘹 : 丶 ノ 口 大 小 日
嘻 : 一 并 十 口 士 豆
嘼 : 一 口 田
嘽 : 一 ｜ 十 口 日 田
嘿 : ｜ 二 并 口 灬 里 黒
噀 : ｜ 二 ハ 口 已
噁 : 一 ｜ 二 口 心
噂 : 口 寸 西 并
噃 : ノ 口 田 米
噄 : 一 ｜ 二 刀 口 小 幺 糸
噆 : 口 无 日 曰
噇 : 口 立 里
噉 : 一 ｜ 口 攵 耳
噋 : 亠 口 子 攵
噌 : 口 田 日 并
噍 : 口 灬 隹
噎 : 口 士 豆 并 冖
噏 : 一 𠆢 冫 口 羽
噐 : 口 工
噓 : 一 ｜ 匕 卜 厂 口 虍
噔 : 一 并 口 癶 豆
噛 : 口 止 歯 米
噞 : 一 人 𠆢 口
噠 : 并 辶 口 土 王 羊
噡 : ハ 勹 厂 口 言
噢 : ノ 冂 口 大 米
噣 : 勹 口 罒 虫
噤 : 口 示 二 小 木
噦 : 一 ｜ ノ 厂 口 戈 止
器 : 口 大
噩 : 口 王
噪 : 口 木 品
噫 : 音 口 心 日 立
噬 : 口 工 人 竹
噭 : 口 攵 方 日 白
噯 : 冖 口 夂 心 爪
噱 : 匕 卜 厂 口 虍 豕
噲 : 一 ｜ 𠆢 并 口 日
噴 : 貝 目 ハ 口 十 ⺾
噵 : 并 辶 口 目 自 首
噶 : 人 勹 口 ⺾ 日
噸 : 貝 目 ハ 口 頁 屯
噺 : 斤 口 十 辛 并 木 立 亠
嚀 : 口 心 罒 宀
嚄 : 又 口 ⺾ 隹
嚅 : 一 ｜ 冖 口 而 雨
嚆 : 口 高 亠 冂 ⺾
嚇 : 口 赤 土
嚈 : 丶 厂 口 大 日 月 犬
嚊 : 口 自 田 廾 鼻
嚋 : 一 口 士 寸 工
嚌 : 一 亠 刀 口 廾 氏 齊
嚏 : 口 十 田 疋 冖
嚔 : 口 十 田 冖 疋
嚕 : 口 日 灬 田 魚
嚙 : 一 人 凵 口 止
嚚 : 匚 口 臣
嚝 : 一 ｜ 二 ハ 口 广 日 田 黄
嚞 : 口 士
嚟 : ノ 𠆢 勹 口 木 水 禾
嚠 : 刂 金 口 厶
嚢 : ｜ 衣 一 口 ハ 亠 冖
嚥 : 一 口 凵 匕 灬 爿
嚦 : ノ 厂 口 木 止 禾
嚧 : 匕 卜 厂 口 田 皿 虍
嚨 : 一 乙 口 月 立 竜
嚩 : 一 ｜ 丶 十 口 寸 小 幺 用 糸
嚫 : 一 儿 口 小 目 立 見
嚬 : ノ 亅 ハ 口 小 止 目 貝 頁
嚭 : 一 ｜ 丶 ノ 并 十 口 士 豆
嚮 : 口 艮 ⻏ 冂
嚱 : 并 匕 卜 厂 口 戈 虍 豆
嚲 : 一 ｜ 亠 十 口 子 日 田
嚳 : 一 ｜ ノ 冖 口 土 ヨ 爻 牛 臼
嚴 : 口 耳 厂 攵
嚶 : 貝 目 ハ 口 女
嚷 : 一 ｜ 二 亠 口 衣
嚼 : 口 艮 寸 爪 罒
嚾 : 口 ⺾ 隹
囀 : 口 車 十 寸 田 厶
囁 : 口 耳
囂 : 一 口 自 ハ
囃 : 口 人 木 亠 隹
囅 : ｜ 二 十 口 尸 日 田 衣
囈 : 九 口 土 二 丶 儿 厶 ⺾
囉 : 丶 ノ 口 小 幺 罒 糸 隹
囊 : 一 ｜ 二 冖 十 口 衣
囋 : ノ 儿 ハ 口 土 目 貝
囌 : ノ 口 ⺾ 木 灬 田 禾 魚
囍 : 一 丶 ノ 并 十 口 士 豆
囎 : 貝 目 口 田 日 ハ 并
囏 : 一 ｜ 二 并 十 口 士 大 豆 革
囐 : 丶 儿 冂 匕 卜 厂 口 大 犬 虍 鬲
囑 : 口 虫 罒 勹 尸
囓 : 口 止 歯 土 刀 米 亠 凵
囗 : 囗 口
囘 : 冂 已
囙 : 一 囗
囚 : 人 囗
四 : 儿 囗
囜 : 厶 囗
囝 : 囗 子
回 : 口 囗
囟 : 丶 ノ 囗
因 : 大 囗
囡 : 囗 女
団 : 寸 囗
囤 : ノ 乙 凵 囗 屯
囥 : 一 丶 亠 几 囗
囦 : 囗 水
囧 : ハ 口 囗
囨 : 一 ｜ ノ 囗
囫 : ノ 勹 囗 勿
园 : 二 儿 囗 元
囮 : ⺅ 匕 囗
困 : 木 囗
囱 : 丶 ノ 囗 夂
囲 : 囗 井
図 : 斗 囗
囶 : ハ 囗 土
囷 : ノ 囗 木 禾
囹 : 刀 𠆢 囗
固 : 口 十 囗
国 : 王 囗 丶
囿 : ノ 一 月 囗
圀 : 方 儿 囗
圁 : 囗 言
圂 : 囗 豕
圃 : 十 用 丶 囗
圄 : 口 囗 五
圇 : 一 ｜ 亅 𠆢 冂 囗 廾 冊
圈 : 人 大 二 并 卩 囗
圉 : 干 十 辛 土 立 亠 囗
圊 : 一 ｜ 二 亠 冂 囗 土 月 青
國 : 口 囗 戈
圌 : 囗 山 而
圍 : 口 囗 韋
圏 : 一 人 大 二 并 囗 已
圑 : 一 ｜ 丶 二 冂 囗 寸 巾
園 : 衣 口 土 囗
圓 : 貝 目 ハ 口 囗
圕 : ｜ 二 囗 ヨ 日 聿
圖 : 口 囗
團 : 十 寸 厶 囗
圚 : 一 ｜ ハ 口 囗 目 虫 貝
圛 : 一 ｜ 并 十 土 干 罒
圜 : 衣 一 口 罒 囗
圝 : 囗 小 幺 糸 言
土 : 土
圠 : 乙 土
圡 : 丶 土
圢 : 一 亅 土
圣 : 又 土
圤 : 卜 土
圥 : 儿 土
圦 : 土 入
圧 : 土 厂
在 : ｜ ノ 一 土
圩 : 亅 二 土
圪 : 一 ノ 乙 土
圬 : 二 勹 土
圭 : 土
圮 : 土 已
圯 : 土 已
地 : 土 也
圳 : 土 川
圴 : 一 丶 勹 土
圷 : 土 卜
圸 : 山 土
圻 : 斤 土
圽 : ノ 勹 土 勿
圾 : 丶 又 乃 土 及
圿 : ｜ ノ 𠆢 土
址 : 止 土
坂 : 土 又 厂
坅 : 一 丶 𠆢 土
坆 : 土 攵
均 : 土 冫 勹 二
坊 : 土 方
坌 : ハ 刀 土
坍 : 一 丶 冂 土 舟
坎 : 欠 土
坏 : ｜ ノ 一 土 丶
坐 : ｜ 土 人
坑 : 土 亠 几
坒 : 匕 土 比
坡 : 土 皮 又
坢 : ｜ 二 并 土
坤 : ｜ 土 日 田
坥 : 一 土 目
坦 : 一 土 日
坧 : 一 ノ 口 土 石
坨 : 匕 土 宀
坩 : 甘 土
坪 : 干 土 并
坫 : 卜 口 土
坭 : 匕 土 尸
坮 : 厶 口 土
坯 : 一 ｜ 丶 ノ 土
坰 : 冂 口 土
坱 : 土 大
坳 : 力 土 幺
坴 : 儿 ハ 土
坵 : 一 土 斤
坷 : 一 亅 口 土
坹 : ハ 土 宀 穴
坺 : 又 土 弋
坻 : 一 丶 土 氏
坼 : 丶 土 斤
坾 : 一 亅 土 宀
坿 : ⺅ 寸 土
垁 : 一 ノ 土 大 矢
垂 : ｜ ノ 一
垃 : 土 立
垈 : ⺅ 土 弋
垉 : 土 勹 已
型 : 刂 土 廾 ノ
垌 : 一 冂 口 土
垓 : 人 土 亠
垔 : 土 西
垕 : 一 ノ 厂 口 土
垗 : 丶 ノ 儿 ハ 冫 土
垙 : 一 儿 土 ⺌
垚 : 土
垜 : 乃 土 木
垝 : ノ 勹 卩 厂 土
垞 : 一 ノ 乙 匕 土 宀
垟 : 并 土 王 羊
垠 : 艮 土
垡 : 丶 乙 ⺅ 土 戈
垢 : ノ 斤 口 土 亅 厂
垣 : 一 土 日
垤 : 至 土 厶
垧 : ノ 冂 口 土
垨 : 土 宀 寸
垩 : ｜ 丶 ノ 二 并 土
垪 : ｜ ノ 土 二 并 廾
垬 : ｜ 二 ハ 土
垰 : 土 卜
垳 : 行 土 彳
垸 : 一 二 儿 土 宀 元
垽 : 土 氵 斤
埀 : ノ 土 匕 爿
埃 : 土 矢 厶
埆 : 角 土
埇 : マ 土 用
埈 : 儿 厶 土 夂
埋 : 土 里
埌 : 丶 土 艮
城 : ノ 土 戈
埏 : ノ 土 廴 止
埒 : 寸 爪 土
埓 : ノ 寸 土
埔 : 十 土 用 丶
埕 : ｜ ノ 二 口 土 王
埖 : ⺅ 土 匕 ⺾
埗 : ノ 亅 土 小 止
埜 : 土 木
埝 : 丶 𠆢 土 心
埞 : 土 宀 疋
域 : 口 土 戈
埠 : ｜ 口 十 土 ⻖
埡 : 一 ｜ 土
埣 : 十 人 土 亠
埤 : ノ 十 土 日
埦 : 卩 土 夕 宀
埧 : 一 ハ 土 目 貝
埩 : 亅 勹 土 ヨ
埭 : 土 ヨ 水 隶
埰 : 土 木 爪
埴 : 十 土 目
埵 : 一 ノ 土 車
埶 : 丶 儿 ハ 九 土
執 : ノ 九 十 辛 土 立 丶 亠
埸 : ノ 勹 土 日 勿
培 : 口 土 立
基 : 一 甘 土 ハ
埻 : 亠 口 土 子
埼 : 口 大 土 ｜ 一
埽 : ｜ 冂 冖 土 巾 ヨ
埾 : 又 土 耳
埿 : 匕 土 尸 氵
堀 : ｜ 山 土 尸
堂 : 口 ⺌ 土 冖
堃 : 土 方
堄 : 儿 土 臼
堅 : 臣 土 又
堆 : 土 隹
堈 : 一 并 冂 土 山 岡
堉 : 亠 厶 土 月
堊 : 一 土 二
堋 : 月 土
堌 : 十 口 囗 土
堍 : 一 ｜ 丶 ノ 乙 儿 勹 口 土 免
堕 : ノ 一 月 土 ⻖
堙 : ｜ 一 西 土
堛 : 一 口 土 田
堝 : 口 土 冂
堞 : 一 ｜ 土 木 世
堟 : 土 ヨ 彑 豕
堠 : 一 ノ ⺅ ユ 土 大 矢
堡 : ⺅ 口 土 木
堤 : 土 日 疋
堦 : 匕 土 日 比 白
堧 : 土 大 而
堪 : 土 儿 匚 甘
堭 : 土 日 王 白
堯 : 土 儿 一
堰 : 女 土 日 匚
報 : 十 辛 土 又 立 亠 卩
堲 : 匕 卩 厶 土 日 白
場 : 土 日 勿
堵 : 土 日 ⺹
堹 : 一 ｜ ノ 土 日 車
堺 : 田 土 ハ 儿
堽 : 止 土 罒
堿 : 一 ノ 厂 口 土 戈
塀 : ｜ ノ 一 土 二 ハ 尸 廾
塁 : 田 土 冫
塉 : 丶 ノ 二 人 冫 土 月
塊 : 鬼 田 土 儿 匕 厶
塋 : 火 土 冖
塌 : ノ 亅 冫 土 日 羽
塍 : 一 丶 ハ 并 冂 土 大 月
塏 : 并 口 土 山 豆
塐 : 一 ｜ 二 土 小 幺 糸
塑 : 月 土 并 屮
塒 : 寸 土 日
塔 : 口 土 𠆢 ⺾
塕 : 𠆢 ハ 冫 厶 土 羽
塗 : 氵 土 ハ 𠆢 亅 木
塘 : ｜ ヨ 一 口 土 广
塙 : 口 高 土 亠 冂
塚 : 土 冖 豕
塞 : 一 土 ハ 宀
塟 : 一 匕 土 夕 ⺾ 歹
塡 : ハ 匕 土 目 貝
塢 : 鳥 土 灬
塤 : ハ 口 土 目 貝
塧 : 一 ハ 并 土 皿
塨 : ｜ 丶 ノ 亅 二 土 灬
塩 : 口 皿 土
填 : 十 土 ハ 目
塰 : 氵 土 母 毋
塲 : 土 日 勿
塵 : 鹿 土 比 广
塸 : 匚 口 土
塹 : 斤 車 土
塼 : 丶 厶 土 寸 日 車
塾 : 丶 九 口 子 土 亠
塿 : ｜ 口 土 女 日
墀 : ｜ 丶 ノ 二 冫 土 尸 牛
墁 : 二 冂 又 土 日 罒
境 : 音 土 日 立 儿
墅 : 土 里 マ
墇 : 十 土 日 曰 立
墈 : 一 ｜ 二 ハ 力 匚 土 甘
墉 : ｜ 土 广 ヨ 月 用
墊 : 一 丶 并 十 九 土
墋 : 𠆢 厶 土 彡
墌 : 一 ｜ 土 广 灬
墍 : 乙 匕 土 无 日 白 牙
墏 : 丶 土 夕 寸 爿
墐 : 二 十 口 土 革
墓 : 大 土 日 ⺾
墔 : 土 山 隹
墖 : 一 𠆢 口 土 田
増 : 田 土 日 并
墜 : 土 并 豕 ⻖
墝 : 一 儿 土
增 : 丶 ハ 并 口 土 日
墟 : ｜ 一 土 并 卜 匕 厂 虍
墠 : 一 ｜ 十 口 土 日 田
墡 : 一 并 口 土 王 羊
墢 : 几 又 土 弓 殳 癶
墦 : ノ 土 田 米
墨 : 黒 土 里 灬
墩 : 亠 口 土 子 攵
墪 : 亠 口 土 子 攵
墫 : 寸 土 酉 并
墮 : 月 工 土 ⻖
墱 : 并 口 土 癶 豆
墲 : 一 ｜ ノ 土 灬 無
墳 : 貝 目 ハ 十 土 ⺾
墸 : 土 日 ⺹ ⺾
墹 : 土 日 門
墺 : 大 土 米 冂
墻 : 口 人 土 囗
墼 : 几 凵 又 土 山 殳 車
墾 : 艮 爪 土 犭 豸
壁 : 口 十 辛 土 立 尸
壂 : ｜ 二 ハ 几 又 土 尸 殳
壃 : 一 土 田
壄 : マ 土 木 矛
壅 : 土 亠 隹
壇 : 一 口 土 日 亠 囗
壈 : ノ 亠 口 囗 土 木 禾
壊 : 衣 十 土 罒
壌 : 衣 土 ハ 亠
壍 : 土 氵 斤 車
壎 : 一 ｜ ノ 二 并 口 土 灬 車
壐 : 一 ｜ 丶 ノ ハ 冂 土 巾 爻
壑 : 口 土 ハ 卜 又 𠆢 冖
壒 : 厶 土 ⺾ 皿
壓 : 月 犬 土 日 厂
壔 : 一 口 土 士 寸 工
壕 : 口 土 亠 冖 豕
壖 : 一 ｜ 冖 土 而 雨
壗 : ヨ 皿 土 灬 聿
壘 : 田 土
壙 : ｜ 一 黄 田 土 二 ハ 广
壚 : 匕 卜 厂 土 田 皿 虍
壜 : 雨 土 二 日 厶
壝 : ハ 土 目 虫 貝
壞 : 衣 土 罒 亠
壟 : 月 土 立
壠 : 一 乙 土 月 立
壡 : 一 𠆢 ハ 冖 卜 又 口 土 谷
壢 : ノ 厂 土 木 止 禾
壤 : ｜ 衣 一 口 土 亠
壥 : 黒 土 里 厂 灬
壩 : 一 ｜ 二 冖 十 口 土 廾 月 雨 革
士 : 士
壬 : ノ 士
壮 : 士 爿
壯 : 士 爿
声 : 士 尸
壱 : 士 冖 匕
売 : 士 儿 冖
壳 : 一 冖 几 士
壴 : 一 并 十 口 士 豆
壷 : ｜ 一 口 士 冖
壹 : 口 士 豆 并 冖
壺 : 一 士 冖
壻 : 月 土 疋
壼 : 一 士 二 冖
壽 : 一 口 工 士 寸
夂 : 夂 攵
夅 : ｜ 二 土 夂
夆 : 一 ｜ 二 夂
変 : 亠 夂
夊 : 夂
夋 : 儿 ハ 厶 夂
夌 : 儿 ハ 土 夂
复 : 一 ノ 夂 日
夏 : 一 自 夂
夐 : 目 冂 夂 勹 人
夒 : 一 ハ 夂 已 止 目 自 貝 頁
夓 : 一 ハ 夂 ヨ 目 自 臼 貝 頁
夔 : 一 儿 ハ 并 夂 已 止 目 自 見 首
夕 : 夕
外 : 卜 夕
夘 : 夕 卩
夙 : 几 歹
多 : 夕
夛 : ヨ 夕
夜 : ⺅ 夕 亠
夝 : 夕 生
夡 : 口 士 夕
夢 : 罒 夕 冖 ⺾
夣 : 亠 冖 厶 夕 罒
夤 : 一 ｜ ハ 夕 宀 田
夥 : 田 木 夕
大 : 大
夨 : 大
天 : 一 大
太 : 大 丶
夫 : 人 二 大
夬 : 人 大 二 ユ
夭 : ノ 大
央 : ノ 一 大 冖
夯 : 力 大
夰 : ｜ ノ 大
失 : ノ 人 二 大
夲 : 十 大
夳 : 二 大
夵 : 大 小
夶 : 大
夷 : ノ 一 弓 大
夸 : 大 二 勹
夽 : 二 厶 大
夾 : 人 大
夿 : 乙 大 已 巴
奃 : 丶 大 氏
奄 : 乙 大 日 奄
奆 : 匚 口 大
奇 : 一 口 大 亅
奈 : 示 二 小 大
奉 : ｜ 一 人 大 二
奎 : 大 土
奏 : 一 禾 大 二 人
奐 : 大 儿 冂 勹
契 : 大 土 刀 亠
奒 : 亠 大 幺 玄
奓 : 夕 大
奔 : ノ 一 十 大 廾
奕 : 赤 大 ハ 亠
套 : 大 長 厶
奘 : 士 大 爿
奙 : 乙 厶 大 日 奄
奚 : 大 爪 幺
奛 : 大 日 月
奝 : ｜ 二 冂 口 土 大
奞 : 大 隹
奟 : 丶 冂 大 月
奠 : 大 酉 并
奡 : 一 ｜ ノ 大 目 自
奢 : 大 日 ⺹
奣 : 一 大 日 月
奥 : 大 米 冂
奧 : ノ 大 米 冂
奨 : 寸 大 爪 爿
奩 : 口 大 匚 品
奪 : 寸 大 隹
奫 : 一 大 氵 爿 片
奬 : 寸 大 爿 夕
奭 : 一 大 日 白
奮 : 大 田 隹
奯 : 一 ｜ ノ 厂 大 戈 止
奲 : ノ 十 口 土 大 ⺹ 日 田
女 : 女
奴 : 女 又
奵 : 一 亅 女
奶 : 乃 女
奸 : 干 女
她 : ｜ 乙 匕 女 也
奻 : 女
奼 : 一 ノ 乙 匕 女
好 : 子 女
妁 : 女 丶 勹
如 : 口 女
妃 : 女 已
妄 : 亡 女 亠
妊 : ノ 王 士 女
妋 : 一 ノ 二 大 女 无
妌 : 一 二 女 廾
妍 : ｜ ノ 一 女 二 廾
妎 : ｜ ノ 𠆢 女
妒 : 一 丶 ノ 女 尸 戸
妓 : 支 女 又 十
妕 : ｜ 口 女
妖 : ノ 女 大
妗 : 一 丶 𠆢 女
妙 : ノ 女 小
妛 : 一 山 女
妝 : 女 爿
妟 : 女 日
妣 : 女 比
妤 : 一 亅 マ 女 矛
妥 : 女 爪
妧 : 二 儿 女
妨 : 女 方
妬 : 口 女 石
妭 : 又 女 弋
妮 : 匕 女 尸
妯 : ｜ 女 日 田
妰 : 一 ｜ ノ 二 女
妲 : 女 日
妳 : 一 ノ 亅 ハ 勹 女 小
妷 : 一 ノ 大 女
妹 : ｜ 女 二 ハ 木 亠
妺 : 一 女 木
妻 : ｜ ヨ 一 女
妼 : ノ 女 心
妾 : 女 立
姁 : 勹 口 女
姃 : 一 女 止
姄 : 女 尸 氏
姆 : 女 母 毋
姈 : 一 ｜ 丶 亅 𠆢 マ 女
姉 : 巾 女 亠
姊 : ｜ ノ 亅 女 牙
始 : 口 女 厶
姍 : 一 ｜ 亅 冂 女 廾 冊
姐 : 女 目
姑 : 口 十 女
姒 : 丶 ノ 女
姓 : 女 生
委 : 禾 女
姙 : ノ ⺅ 士 女
姚 : 女 儿 冫
姜 : 王 女 并 羊
姝 : 一 ノ 木
姞 : 口 士 女
姟 : 亠 女 幺 玄
姣 : 亠 女 父
姤 : 一 ノ 口 女
姥 : 女 ⺹ 匕
姦 : 女
姧 : 一 十 女 干
姨 : 弓 女 人 大
姪 : 至 女 土 厶
姫 : 女 臣
姮 : 一 女 日
姯 : 一 儿 女 ⺌
姱 : 二 勹 大 女
姲 : 女 宀
姴 : 刂 女 歹
姶 : 一 口 女 𠆢
姷 : 一 ノ 女 月
姸 : 一 十 女 干
姻 : 女 大 囗
姿 : 欠 女 冫
娀 : 一 ノ 女 戈
威 : ノ 女 戈 厂
娃 : 女 土
娄 : 女 米
娉 : ｜ 女 田 一 勹
娌 : 女 里
娍 : ノ 亅 厂 女 戈
娎 : 女 扌 斤
娑 : ノ 氵 女 小
娒 : 一 ノ 女 毋 母
娓 : 女 尸 毛
娗 : ノ 士 女 廴 王
娘 : 艮 女
娚 : 女 田 力
娜 : 女 刀 ⻏ 二
娞 : 女 爪
娟 : 月 口 女
娠 : 衣 女 辰 厂
娣 : ｜ ノ 并 女 弓
娤 : 士 女 爿
娥 : 女 亅 戈
娧 : 儿 ハ 并 口 女
娨 : 一 十 女 干 日
娩 : 女 免 儿
娪 : 一 二 口 女 五
娭 : 一 ノ 厶 大 女 矢
娯 : 口 女 ハ
娰 : 丶 ノ ⺅ 女
娵 : 耳 女 又
娶 : 耳 女 又
娼 : 女 日
婀 : 口 女 亅 ⻖ 一
婁 : ｜ 一 口 女
婄 : 口 女 立
婅 : 勹 女 米
婆 : 氵 女 皮 又
婇 : 女 木 爪
婈 : ハ 土 夂 女
婉 : 女 夕 卩 宀
婌 : 一 卜 又 女 小
婐 : 女 日 木 田
婕 : 土 女 ヨ 走
婚 : 氏 女 日
婞 : 一 并 十 土 女 干
婢 : 十 女 田
婣 : 女 爿 片
婥 : 十 卜 女 日
婦 : ヨ 巾 女 冖
婧 : 二 亠 土 女 月 青
婪 : 女 木
婬 : ノ 士 女 爪
婭 : 一 ｜ 女
婷 : 一 亅 亠 冖 口 女
婺 : マ 女 攵 矛
婻 : 一 并 冂 十 女 干
婾 : 一 丶 ノ 人 冂 女 月
婿 : 月 女 疋
媄 : 并 大 女 王 羊
媋 : 一 二 大 女 日
媐 : 匚 女 已 臣
媒 : 甘 女 木
媓 : 女 日 王 白
媖 : 大 女 ⺾
媙 : 一 ノ 厂 女 戈
媚 : 女 目 尸 ｜
媛 : ノ 女 爪 又
媜 : ハ 卜 女 目 貝
媞 : 女 日 疋
媟 : 一 ｜ 女 木 世
媠 : 一 ノ 女 工 月
媢 : 二 冂 女 目
媧 : 冂 口 女
媬 : ⺅ 口 女 木
媱 : 丶 凵 夕 女 山 爪 缶
媲 : 丶 ノ 匕 口 女 比
媳 : 女 心 目 自
媵 : 一 丶 ハ 并 冂 大 女 月
媸 : 一 女 屮 山 虫
媺 : 一 儿 几 女 山 攵
媻 : 一 ｜ 丶 冂 几 又 女 殳 舟
媼 : 皿 女 日
媽 : 女 馬
媾 : ｜ 一 女 二 冂
媿 : 儿 匕 厶 女 田 鬼
嫁 : 女 宀 豕
嫂 : ｜ 女 田 又
嫄 : 厂 女 小 日 白
嫆 : 𠆢 ハ 口 女 宀 谷
嫈 : 冖 女 火
嫉 : 女 矢 疒
嫋 : 弓 女 冫
嫌 : ｜ ヨ 女 ハ 并
嫏 : 丶 厶 女 ⻏ 日
嫐 : 女 田 力
嫖 : 示 二 小 女 西
嫗 : 口 女 匚 品
嫚 : 又 女 日 罒
嫜 : 十 女 日 立 音
嫠 : 一 厂 女 攵 木
嫡 : 口 十 女 并 立 亠 冂 滴
嫣 : 一 止 女 鳥 灬
嫥 : 一 ｜ 十 厶 女 寸 日 虫
嫦 : 巾 口 女 ⺌
嫩 : ｜ 口 女 ハ 木 攵
嫪 : ノ 𠆢 冫 女 彡 羽
嫮 : 一 ｜ 二 冂 勹 女 雨
嫰 : 人 勹 口 女 木 欠
嫵 : 一 ｜ ノ 女 灬 無
嫶 : 女 灬 隹
嫺 : 女 日 門
嫻 : 女 木 門
嫽 : 丶 ノ 大 女 小 日 曰
嬀 : ノ 亅 女 灬 爪
嬁 : 并 口 女 癶 豆
嬈 : 一 儿 土 女
嬉 : 口 士 女 豆 并
嬋 : ｜ 口 十 女 田
嬌 : ノ 口 女 大 冂
嬖 : 口 十 女 辛 立 尸
嬗 : 一 亠 口 囗 女 日
嬙 : 人 口 囗 土 女
嬛 : 一 口 女 罒 衣
嬝 : 一 ｜ 亅 亠 女 日 白 衣 鳥
嬡 : 冖 夂 女 心 爪
嬢 : 衣 女 ハ 亠
嬥 : ノ 冫 女 羽 隹
嬪 : ノ 貝 目 ハ 女 小 宀
嬬 : 雨 而 女
嬭 : 一 ｜ ハ 冂 女 爻
嬰 : 貝 目 ハ 女
嬲 : 女 田 力
嬴 : 一 丶 亠 几 口 女 亡 月
嬶 : 自 女 田 鼻 目 廾
嬸 : ノ 女 宀 田 米
嬾 : ｜ 貝 目 口 女 ハ 頁 木
孀 : 雨 女 木 目
孁 : 一 ｜ 二 冖 口 女 雨
孃 : ｜ 衣 一 口 女 亠
孅 : 女 人 戈 韭
孋 : 一 丶 冂 匕 女 广 比 鹿
孌 : 女 小 幺 糸 言
子 : 子
孑 : 子
孒 : 一 亅 子
孔 : 乙 子
孕 : 乃 子
孖 : 子
字 : 子 宀
存 : ｜ ノ 一 子
孚 : 子 爪
孛 : 士 子 十 冖
孜 : 子 攵
孝 : 子 ⺹
孞 : 子 心
孟 : 皿 子
季 : 禾 子
孤 : 瓜 子
孥 : 子 女 又
学 : 子 ⺌ 冖
孨 : 子
孩 : 子 亠
孫 : ノ 子 糸 幺 小
孮 : 二 子 宀 小 示
孯 : 匚 又 子 臣
孰 : 九 口 子 丶 亠
孱 : 子 尸
孳 : 一 子 并 幺
孵 : 子 爪 丶 卩
學 : 臼 子 冖
孺 : ｜ 一 雨 子 而 冂
孼 : ｜ ノ 十 口 子 屮 立 辛
孽 : ｜ ノ 十 口 子 ⺾ 立 辛
孾 : ハ 女 子 目 貝
孿 : 子 小 幺 糸 言
宀 : 宀
宁 : 一 亅 宀
它 : 匕 宀
宄 : 九 宀
宅 : ノ 一 乙 宀
宆 : 宀 弓
宇 : 干 亅 宀
守 : 寸 宀
安 : 女 宀
宊 : 丶 大 宀 犬
宋 : 木 宀
完 : 二 儿 宀 元
宍 : ハ 亠 宀
宎 : ノ 大 宀
宏 : ノ 一 厶 宀
宐 : 一 丶 勹 宀 ヨ 彑
宑 : 一 宀 廾
宓 : ノ 宀 心
宔 : 丶 宀 王
宕 : 口 石 宀
宖 : 厶 宀 弓
宗 : 示 二 小 宀
官 : 口 宀
宙 : ｜ 日 宀 田
定 : 疋 宀
宛 : 夕 卩 宀
宜 : 一 目 宀
宝 : 王 宀 丶
実 : 士 大 宀
客 : 口 夂 宀
宣 : 一 日 宀
室 : 至 土 厶 宀
宥 : ノ 一 月 宀
宦 : 臣 宀
宨 : 丶 ノ 儿 冫 宀
宩 : 宀 米
宬 : ノ 亅 厂 宀 戈
宭 : ノ 口 宀 ヨ
宮 : 口 宀
宯 : ノ 土 子 宀 ⺹
宰 : 十 辛 立 宀
宱 : 一 ｜ ノ ⺅ 宀
宲 : 口 宀 木
害 : 口 土 亠 宀
宴 : 女 日 宀
宵 : 月 ⺌ 宀
家 : 宀 豕
宷 : ノ 宀 米
宸 : 衣 辰 厂 宀
容 : 穴 口 谷 ハ 𠆢 宀
宺 : ｜ 儿 口 宀 川
宼 : 二 儿 女 宀
宿 : ⺅ 白 宀
寀 : 宀 木 爪
寁 : 土 宀 ヨ 走
寂 : 小 卜 又 宀
寃 : 免 丶 儿 宀
寄 : 一 口 大 亅 宀
寅 : 田 ハ 宀
密 : ノ 山 心 丶 宀
寇 : 二 卜 又 儿 宀 元
寉 : 宀 隹
富 : 口 田 宀
寍 : 宀 心 皿
寎 : 一 人 冂 宀 爿
寏 : ハ 勹 口 大 宀
寐 : 二 ハ 亅 宀 爿
寒 : 一 ハ 宀 丶 井
寓 : 田 冂 厶 宀 禸
寔 : 日 疋 宀
寖 : 冖 又 宀 ヨ 氵
寗 : 一 ｜ ノ 宀 心 月
寘 : 一 ハ 冂 匕 十 目 貝 頁
寙 : 厶 宀 瓜
寚 : 凵 宀 山 王 缶
寛 : 見 宀 ⺾
寝 : ヨ 又 冖 宀 爿
寞 : 大 日 宀 ⺾
察 : ノ 示 二 小 宀 癶
寠 : 一 ｜ 口 女 宀 日
寡 : 一 自 刀 ハ 宀
寢 : ヨ 又 冖 宀 爿
寤 : 口 宀 爿 五
寥 : 羽 𠆢 冫 宀 彡
實 : 一 貝 目 ハ 田 宀
寧 : 一 心 罒 亅 宀
寨 : ｜ 一 ハ 木 宀
審 : 田 釆 米 宀
寫 : 臼 勹 宀 灬
寬 : 丶 儿 宀 ⺾ 目 見
寮 : 小 日 并 𠆢 宀
寯 : ｜ 亅 宀 隹
寰 : 衣 一 口 罒 宀
寱 : 宀 木 爿 目 自
寳 : 王 貝 目 ハ 小 宀
寴 : 一 儿 宀 小 目 立
寵 : 月 立 宀
寶 : 王 貝 目 ハ 缶 凵 宀
寸 : 寸
寺 : 寸 土
寽 : 寸 爪
対 : 寸 文
寿 : ノ 一 寸 二
封 : 寸 土
専 : 十 寸 田
尃 : 一 ｜ 丶 十 寸 日
射 : 身 寸
尅 : 口 十 寸 儿
将 : 寸 爪 爿
將 : 寸 夕 爿
專 : 一 十 寸 虫 田 厶
尉 : 示 二 小 寸 尸
尊 : 寸 酉 并
尋 : ヨ 口 工 寸
尌 : 并 十 口 士 寸 豆
對 : 王 寸 并 羊
導 : 辶 自 寸 并
小 : 小
少 : ノ 小
尒 : 𠆢 小
尓 : ノ 小
尖 : 小 大
尗 : 一 卜 小
尚 : 口 ⺌ 冂
尞 : 丶 ノ 大 小 日
尟 : 一 ノ 小 日 止 疋
尠 : ノ 甘 小 儿 匚
尢 : 尢
尣 : 儿 ハ
尤 : 丶 尢 尤
尦 : 丶 儿 ハ 勹
尨 : 丶 尤 彡 尢
尩 : 儿 ハ 王
尫 : 一 儿 王
尬 : 一 ｜ ノ 乙 𠆢
尭 : 十 儿 廾 一
尮 : 一 ノ 乙 乃 木
尰 : 一 ｜ ノ 乙 二 日 車
就 : 口 小 丶 亠 尤 尢
尲 : 一 ｜ 丶 ノ 乙 并 ヨ
尵 : 一 ノ 乙 ハ 目 虫 貝
尶 : 一 丶 ノ 乙 匚 皿 臣
尸 : 尸
尹 : ノ ヨ 一
尺 : 尸 丶
尻 : 九 尸
尼 : 匕 尸
尽 : 尸 丶
尾 : 毛 尸
尿 : 水 尸
局 : 口 尸
屁 : 比 尸
居 : 口 十 尸
屆 : 士 土 凵 尸
屈 : ｜ 山 尸
届 : ｜ 日 尸 田
屋 : 至 土 厶 尸
屍 : 一 夕 匕 尸 歹
屎 : 米 尸
屏 : ｜ ノ 二 并 尸 廾
屐 : 支 尸 彳 又 十
屑 : 月 ⺌ 尸
屓 : 貝 目 ハ 尸
展 : ｜ 衣 一 二 尸
屙 : 一 亅 口 尸 ⻖
屚 : 尸 雨
屛 : 一 十 尸 干
屜 : 一 ｜ 尸 彳 世
属 : ノ 尸 禸
屟 : 一 ｜ 尸 木 世
屠 : 日 ⺹ 尸
屡 : 女 米 尸
屢 : 一 口 女 尸 日
屣 : 尸 彳 止
層 : 田 日 并 尸
履 : 日 夂 尸 彳
屧 : 一 ｜ 尸 彳 木 世
屨 : 一 ｜ 口 女 尸 彳 日
屩 : ノ 冂 口 大 尸 彳
屬 : 虫 罒 勹 尸
屭 : ハ 尸 目 貝
屮 : 屮
屯 : ノ 乙 凵 屯
屰 : 一 并 屮
山 : 山
屴 : 力 山
屵 : 厂 山
屶 : 山 刀
屹 : ノ 乙 山
屺 : 山 已
屻 : ノ 刀 山
屼 : 一 儿 山
屽 : 一 十 山 干
岇 : ノ 卩 山
岈 : 山 牙
岊 : 乙 山 已 巴
岌 : 及 山
岏 : 二 儿 山 元
岐 : 山 支 又 十
岑 : 山 𠆢
岒 : 丶 人 山
岔 : 山 刀 ハ
岝 : 一 ｜ ノ 二 山
岟 : 大 山
岠 : 匚 口 山
岡 : 并 冂 一 山 岡
岢 : 一 亅 口 山
岣 : 勹 口 山
岦 : 山 立
岧 : 刀 口 山
岨 : 一 山 目
岩 : 口 山 石
岪 : 山 廾 弓
岫 : ｜ 山 田
岬 : ｜ 山 日 田
岭 : 一 ｜ 山
岱 : ⺅ 山 弋
岲 : 儿 口 山
岳 : 山 斤 一
岴 : 一 山 斤
岵 : 十 口 山
岶 : 山 白
岷 : 口 山 氏
岸 : 干 山 厂
岺 : 一 ｜ 丶 亅 人 マ 山
岻 : 山 氏
岼 : ｜ 干 山 二 ハ
岾 : 口 山 卜
峅 : 山 厶 廾
峇 : 口 山 𠆢
峉 : 口 夂 山
峋 : 勹 山 日
峐 : ノ 亠 山 幺 玄
峒 : 一 冂 口 山
峗 : 勹 卩 厂 山
峙 : 山 寸 土
峝 : 一 冂 口 山
峠 : ｜ 一 山 卜
峡 : 山 人 大 二 并 亠
峨 : 山 亅 戈 手
峩 : 山 亅 戈
峪 : 口 山 ハ 𠆢 谷
峭 : 月 山 ⺌
峮 : ノ 口 山 ヨ
峯 : ｜ 一 山 夂
峰 : ｜ 一 山 夂
峱 : 一 ユ 山 犭
峲 : ノ 刂 山 木 禾
峴 : 儿 山 目 見
島 : 山 鳥 白
峺 : ノ 一 山 田
峻 : 山 儿 厶 夂
峽 : 山 人 大
崁 : 人 勹 土 山 欠
崆 : 儿 ハ 宀 山 工
崇 : 山 示 二 小 宀
崋 : ｜ 一 山
崍 : 人 大 山
崎 : 口 山 大 ｜ 一
崐 : 匕 山 日 比
崑 : 山 日 比
崒 : 亠 人 十 山
崔 : 山 隹
崕 : 山 土 厂
崖 : 山 土 厂
崗 : 山 并 冂 凵 岡
崘 : ｜ 一 山 𠆢 冊
崙 : ｜ 一 山 𠆢 冊
崚 : 山 土 儿 夂
崛 : ｜ 山 尸
崝 : 二 亠 土 山 月 青
崟 : 金 山
崠 : 一 ｜ 山 日 木 田
崢 : ヨ 山 爪 亅 尸
崣 : ノ 女 山 木 禾
崤 : 一 丶 ノ 山 月
崦 : 乙 大 山 日 奄
崧 : 儿 厶 山 木
崩 : 月 山
崫 : ｜ 凵 尸 山
崱 : ハ 刂 山 目 貝
崴 : 一 ノ 厂 女 山 戈
崹 : ｜ 亠 并 冂 冖 山 巾
崽 : 山 心 田
崿 : 二 勹 口 山
嵂 : ｜ 二 山 ヨ 彳 聿
嵃 : 丶 ノ 亠 厂 山 彡 立
嵆 : 丶 ノ 尢 山 木 尤 禾
嵇 : 丶 ノ 尢 山 木 尤 禾
嵈 : ノ 二 又 山 爪
嵊 : 一 ｜ ノ 匕 山 木 禾
嵋 : 山 目 尸 ｜
嵌 : 甘 欠 山
嵎 : 山 田 禸
嵐 : 山 風
嵑 : 一 人 勹 山 日 曰
嵒 : 口 山 品
嵓 : 口 山 品
嵕 : 丶 ノ ハ 凵 夂 山
嵙 : ノ 山 斗 木 禾
嵜 : 一 口 山 并 立 亅 亠 大
嵟 : 厂 山 隹
嵠 : 大 山 幺 爪
嵡 : ノ ハ 冫 厶 山 羽
嵢 : 丶 ノ 𠆢 口 山 日
嵤 : 冖 山 火
嵩 : 口 高 山 亠 冂
嵪 : 亠 冂 口 山 高
嵬 : 鬼 山 田 儿 匕
嵭 : 亠 并 冖 山 方
嵯 : ノ 王 工 山 并 羊
嵰 : ｜ 丶 ノ 并 山 ヨ
嵳 : 王 工 山 并 羊
嵶 : 弓 山 冫
嵹 : 口 山 弓 虫
嵺 : 𠆢 冫 山 彡 羽
嵾 : 人 厶 山 彡
嵿 : 一 亅 ハ 山 目 貝 頁
嶁 : 一 ｜ 口 女 山 日
嶂 : 音 山 十 日 立 曰
嶃 : 山 斤 車
嶄 : 斤 山 車
嶇 : 口 山 匚 品
嶈 : 丶 夕 寸 山 爿
嶊 : 山 扌 隹
嶋 : 山 鳥 灬
嶌 : 山 鳥 灬
嶐 : 山 生 夂 ⻖
嶒 : ｜ ハ 并 口 山 日
嶓 : ノ 山 田 米
嶔 : 人 勹 山 欠 金
嶕 : 山 灬 隹
嶗 : 冖 力 山 火
嶙 : 夕 山 米 舛
嶛 : 丶 ノ 大 小 山 日 曰
嶝 : 口 山 豆 并 癶
嶟 : 并 寸 山 酉
嶠 : ノ 冂 口 大 山
嶢 : 山 土 儿
嶤 : 一 儿 土 山
嶧 : 一 并 十 土 山 干 罒
嶫 : 一 ｜ 丶 ノ 并 山 木 王 羊
嶬 : 王 山 并 羊 亅 戈
嶮 : 口 山 人 𠆢
嶰 : ｜ 刀 勹 山 月 牛 角
嶲 : ｜ 亅 山 隹
嶴 : ノ 冂 大 山 米
嶷 : 山 疋 矢 匕
嶸 : 冖 山 木 火
嶹 : 一 口 士 寸 山 工
嶺 : 貝 目 ハ 山 頁 𠆢 卩
嶼 : 臼 山 ハ
嶽 : 犬 言 山
巃 : 一 乙 山 月 田 立 竜
巇 : 并 匕 卜 厂 口 山 戈 虍 豆
巉 : 山 比 丶 儿 勹 口
巋 : ｜ ノ 冂 冖 口 山 巾 ヨ 止
巌 : 山 耳 ⺌ 厂 攵
巍 : 禾 鬼 山 女 田 儿 匕
巎 : 一 ハ 夂 山 已 止 目 自 貝 頁
巐 : ノ 亠 冂 口 山 廾 日
巑 : ノ 儿 ハ 土 山 目 貝
巒 : 言 山 糸 幺 小
巓 : 貝 山 十 ハ 頁 目
巖 : 口 山 耳 厂 攵
巗 : 厂 口 山 工 攵 耳
巘 : 一 丶 儿 冂 匕 卜 厂 口 尢 山 尤 虍 鬲
巙 : 一 ハ 并 夂 山 已 止 目 自 首
巛 : 巛
川 : 川
州 : ｜ 川 丶
巠 : 一 巛 工
巡 : 辶 巛
巢 : 巛 木 田
巣 : ⺌ 田 木
巤 : 丶 ノ 乙 口 川 巛
工 : 工
左 : ノ 一 工
巧 : 工 一 勹
巨 : 匚 巨
巩 : 一 丶 乙 几 工
巫 : 工 人
差 : ノ 王 工 并 羊
己 : 已
已 : 已
巳 : 已
巴 : 乙 已 巴
巵 : 一 厂 巴
巷 : ハ 已 井
巸 : ｜ 匚 口 已 臣
巹 : 一 已 水
巻 : 大 二 并 已
巽 : ｜ 一 二 ハ 已
巾 : 巾 冂 ｜
帀 : 一 ｜ 冂 巾
市 : 巾 亠
布 : ノ 一 巾
帆 : 巾 丶 几
帇 : ｜ 冂 巾 ヨ
帋 : 巾 氏
希 : ノ 一 巾
帍 : ｜ 丶 冂 尸 巾
帑 : 巾 女 又
帒 : ｜ ⺅ 冂 巾 弋
帔 : ｜ ノ 冂 十 又 巾 支
帕 : ｜ 冂 巾 日 白
帖 : 巾 口 卜
帘 : ｜ 儿 ハ 冂 宀 巾
帙 : ノ 巾 人 大 二
帚 : ヨ 巾 冖
帛 : 巾 白
帝 : 巾 并 立 亠 冖
帟 : ｜ 丶 ノ 亅 亠 ハ 冂 巾
帠 : ｜ 冂 巾 ヨ 臼
帥 : ｜ 巾 口
帨 : ｜ 儿 ハ 并 冂 口 巾
師 : ｜ 一 巾 口
席 : 巾 广
帮 : 一 ｜ ノ 二 冂 巾 ⻏
帯 : ｜ 一 巾 冖
帰 : ヨ 刂 巾 冖
帲 : 一 ｜ ノ 冂 十 巾 干
帳 : 巾 長
帵 : ｜ 冂 卩 夕 宀 巾
帶 : 一 巾 儿 冖 凵
帷 : 巾 隹
常 : 巾 口 ⺌ 冖
帽 : 巾 日 目
帾 : ｜ ノ 冂 土 巾 ⺹ 日
幀 : 貝 目 ハ 巾 卜
幃 : 巾 韋 口
幄 : 巾 至 土 厶 尸
幅 : 一 巾 口 田
幇 : 巾 寸 土
幉 : 一 ｜ 冂 巾 木 世
幋 : 一 ｜ 丶 冂 几 又 巾 殳 舟
幌 : 巾 ⺌ 日 儿
幎 : 巾 日 ハ 亠 冖
幐 : 一 ｜ 并 冂 大 巾 月
幑 : ｜ ノ 冂 山 巾 彳 攵
幔 : 巾 日 罒 又
幕 : 巾 大 日 ⺾
幖 : ｜ 二 冂 小 巾 示 西
幗 : 巾 口 囗 戈
幘 : 一 ｜ 二 ハ 冂 土 巾 目 貝
幛 : ｜ 冂 十 巾 日 立
幜 : ｜ 亠 冂 口 小 巾 日 曰
幞 : 一 ｜ 丶 ノ 二 并 冂 大 巾 王 羊
幟 : 音 巾 日 立 戈
幡 : 巾 田 釆 米
幢 : 巾 里 立
幣 : 巾 并 冂 攵
幤 : 巾 口 ⺌ 冂 攵
幨 : ｜ 儿 ハ 冂 勹 厂 巾 言
幪 : 一 ｜ 冂 冖 巾 ⺾ 豕
幫 : ｜ 冂 土 寸 巾 日 白
幬 : 一 ｜ 冂 口 士 寸 工 巾
幭 : ｜ 人 冂 巾 ⺾ 戈 罒
幮 : ｜ 并 冂 十 口 士 寸 巾 广 豆
幰 : 一 ｜ 二 冂 宀 巾 心 罒
干 : 干 十 一
平 : 干 并
年 : ノ 一 干
幵 : 干
并 : ノ 干 二 并
幷 : 一 十 干
幸 : 十 辛 立 亠
幹 : 干 十 日 𠆢
幺 : 幺
幻 : 幺
幼 : 力 幺
幽 : ｜ 凵 幺
幾 : ノ 幺 戈 丶
广 : 广
庀 : 匕 广
庁 : 一 亅 广
広 : 厶 广
庄 : 土 广
庇 : 比 广
床 : 木 广
庋 : 十 又 广 支
庎 : ｜ ノ 𠆢 广
序 : 子 广 亅
底 : 氏 广
庖 : 勹 已 广
店 : 口 卜 广
庚 : 人 广 ヨ
府 : ⺅ 寸 广
庠 : 王 并 羊 广
庢 : 一 厶 土 广 至
庤 : 土 寸 广
庥 : ⺅ 广 木
度 : 又 广 一 凵
座 : ｜ 土 人 广
庨 : ノ 土 子 广 ⺹
庪 : 十 又 广 扌 支
庫 : 車 广
庬 : 丶 尢 广 彡 尤
庭 : 王 广 廴
庱 : ハ 土 夂 广
庳 : ノ 十 广 日 白
庵 : 田 广 大
庶 : 广 灬
康 : ヨ 水 广 隶
庸 : ヨ 用 广 聿
庹 : 一 凵 尸 广
庽 : ｜ 冂 厶 广 田 虫
庾 : 人 广 臼
庿 : 广 ⺾ 田
廁 : 貝 目 ハ 刂 广
廂 : 木 目 广
廃 : 一 儿 广 癶
廆 : 儿 匕 厶 广 田 鬼
廈 : 一 自 夂 广
廉 : ｜ ヨ ハ 广 并
廊 : 艮 ⻏ 广
廋 : 十 又 广 支 臼
廌 : 一 ｜ 勹 广 灬
廎 : ハ 匕 卜 广 目 貝 頁
廏 : 艮 广 殳 几 又
廐 : 艮 广 无
廑 : 二 十 口 广 廾 革
廒 : 土 广 攵 方
廓 : 口 子 ⻏ 亅 亠 广
廔 : 一 ｜ 口 女 广 日
廕 : 一 丶 𠆢 厶 ユ 广 ⻖
廖 : 羽 𠆢 冫 广 彡
廙 : ｜ 二 ハ 广 田
廚 : 口 士 寸 豆 并 广
廛 : 土 里 儿 广
廜 : ノ 土 尸 广 ⺹ 日 曰
廝 : 甘 斤 ハ 广
廞 : 人 勹 广 欠 金
廟 : 月 十 日 广
廠 : 口 ⺌ 冂 广 攵
廡 : ｜ 一 广 灬 無 ノ
廢 : 弓 广 殳 癶 几 又
廣 : 黄 田 ハ 广
廥 : 一 ｜ 丶 ノ 𠆢 并 口 广 日 曰
廨 : 角 牛 刀 广
廩 : 禾 口 亠 囗 广
廫 : 人 冫 广 彡 月 羽
廬 : 皿 田 卜 匕 厂 广 虍
廰 : 耳 十 心 罒 广
廱 : 口 巛 巴 广 隹
廳 : 一 王 耳 十 心 罒 广
廴 : 廴
延 : 一 止 廴
廷 : 王 廴 士
廸 : ｜ 日 廴
廹 : 廴 日 白
建 : 廴 聿
廻 : 口 囗 廴
廼 : 西 廴
廽 : ｜ 囗 廴 罒
廾 : 廾
廿 : ｜ 一 凵
开 : 一 ノ 十 干 廾
弁 : 厶 廾
异 : 已 廾
弃 : 亠 厶 廾
弄 : 王 廾
弆 : 厶 土 廾
弇 : 一 𠆢 口 廾
弈 : 丶 ノ 亠 儿 ハ 廾
弉 : 士 廾 爿
弊 : ｜ 巾 ⺌ 并 冂 廾 攵
弋 : 弋
弌 : 一 弋
弍 : 二 弋
弎 : 一 二 弋
式 : 工 弋
弐 : 一 弋 二
弑 : 工 木 弋
弓 : 弓
弔 : ｜ 弓
引 : ｜ 弓
弖 : 一 弓
弗 : ｜ ノ 弓
弘 : 弓 厶
弙 : 亅 二 弓
弛 : 弓 也
弜 : 弓
弝 : ｜ 已 弓
弞 : 人 勹 弓 欠
弟 : ｜ ノ 弓 并
弡 : 匚 口 弓
弢 : 又 屮 山 弓 支
弣 : ⺅ 寸 弓
弤 : 丶 弓 氏
弥 : ノ 弓 亅 小
弦 : 弓 玄 亠 幺
弧 : 瓜 弓
弨 : 刀 口 弓
弩 : 弓 女 又
弫 : 匚 弓 臣
弬 : 匚 弓 臣
弭 : 弓 耳
弮 : 一 并 大 弓
弯 : 弓 赤 ハ 亠
弰 : ⺌ 弓 月
弱 : 弓 冫
弴 : 亠 口 子 弓
張 : 弓 長
弶 : 亠 口 小 弓
強 : 弓 虫 厶
弸 : 弓 月
弻 : 一 人 弓 西
弼 : 弓 白 ノ
弽 : 一 ｜ 弓 木 世
弾 : 弓 十 ⺌ 田
弿 : 一 ｜ 二 ハ 宀 弓
彀 : 一 冖 几 又 士 弓 殳
彁 : 弓 口 亅 一
彄 : 匚 口 弓
彅 : 一 并 刀 刂 弓 月
彇 : ｜ 弓 ヨ 爿 片
彈 : ｜ 弓 口 十 田
彊 : 一 弓 田
彌 : ｜ 一 弓 ハ 冂 爻
彍 : 一 ｜ 二 ハ 宀 弓 田
彎 : 弓 言 糸 幺 小
彐 : ヨ
彑 : ヨ 彑
当 : ヨ ⺌
彔 : ヨ 彑 水
彖 : 彑 豕
彗 : ヨ 二 亠 土
彘 : 一 ノ 匕 大 ヨ 彑 矢
彙 : ヨ 田 木 冖 彑
彛 : ハ 刀 廾 ヨ 米
彜 : ヨ 刀 并 米 廾 彑
彝 : ヨ 糸 幺 小 米 廾 彑
彠 : 又 口 寸 工 ヨ ⺾ 隹
彡 : 彡
形 : 廾 彡 ノ
彣 : 彡 文
彤 : 一 丶 冂 彡 舟
彦 : 并 立 亠 厂 彡
彧 : 一 口 弋 彡
彩 : 爪 木 彡
彪 : 卜 儿 匕 厂 彡 虍
彫 : 口 土 冂 彡
彬 : 木 彡
彭 : 口 土 豆 并 彡
彯 : 二 小 彡 示 西
彰 : 音 十 日 立 彡
影 : 口 小 日 亠 彡
彲 : 一 丶 冂 匕 广 彡 比 鹿
彳 : 彳
彴 : 丶 勹 彳
彵 : ｜ 乙 匕 彳 也
彷 : 方 彳
彸 : ハ 厶 彳
役 : 彳 殳 几 又
彺 : 彳 王
彼 : 皮 又 彳
彽 : 一 丶 彳 氏
彾 : 一 ｜ 丶 亅 𠆢 マ 彳
彿 : ｜ ノ 弓 彳
往 : 王 丶 彳
征 : 一 止 彳
徂 : 目 彳
徃 : 生 彳
径 : 土 又 彳
待 : 寸 土 彳
徇 : 日 勹 彳
很 : 艮 彳
徉 : 并 彳 王 羊
徊 : 口 囗 彳
律 : 彳 聿
後 : 夂 幺 彳
徍 : 土 彳
徏 : ノ 亅 小 彳 止
徐 : 禾 𠆢 彳
徑 : 一 工 巛 彳
徒 : 走 土 彳
従 : 并 疋 彳
徖 : 二 宀 小 彳 示
得 : 寸 日 彳 一
徘 : 非 彳
徙 : 止 疋 彳
徜 : 冂 口 小 ⺌ 彳
徝 : 一 十 彳 目
從 : 人 疋 彳
徠 : ｜ 人 ハ 木 彳
御 : ノ 止 卩 彳
徢 : 土 ヨ 彳 走
徤 : ｜ 二 廴 ヨ 彳 聿
徧 : 一 ｜ 丶 亅 冂 尸 廾 彳 戸 冊
徨 : 王 白 彳
復 : 日 夂 彳
循 : 斤 十 目 厂 彳
徫 : 口 彳 韋
徬 : 亠 冖 彳 方 立
徭 : 缶 夕 凵 彳
微 : 山 彳 攵
徯 : 大 幺 彳 爪
徰 : 一 彳 止
徱 : 二 小 彳 示 西
徳 : 十 心 罒 彳
徴 : 王 山 彳 攵
徵 : 一 ノ 土 士 山 彳 攵 王
德 : 一 十 彳 心 罒
徸 : 彳 立 里
徹 : 月 亠 厶 彳 攵
徼 : 白 方 夂 彳
徽 : 山 糸 幺 小 夂 彳
心 : 心
忄 : 忄
必 : ノ 心
忇 : 力 忄
忈 : 二 心
忉 : 刀 忄
忋 : 已 忄
忌 : 心 已
忍 : 心 刀 丶
忐 : 一 卜 心
忑 : 一 卜 心
忒 : 弋 心
忓 : 一 十 干 忄
忔 : 一 ノ 乙 忄
忖 : 寸 忄
志 : 士 心
忘 : 心 亡 亠
忙 : 亡 忄 亠
応 : 心 广
忝 : ノ 心 大
忞 : 心 文
忠 : ｜ 口 心
忡 : ｜ 口 忄
忢 : 一 二 心 五
忤 : ノ 干 忄 十
忨 : 二 儿 忄 元
忩 : ハ 厶 心
忪 : ハ 厶 忄
快 : 人 大 二 忄
忬 : 一 亅 マ 忄 矛
忭 : 亠 卜 忄
忮 : 十 又 忄 支
忯 : 忄 氏
忰 : 九 十 忄
忱 : 忄 儿 冖 尢
忲 : 丶 大 忄
忳 : 一 ノ 乙 凵 忄 屯
念 : ｜ 一 心 𠆢
忶 : 二 厶 忄
忸 : ｜ 一 忄
忺 : 人 勹 忄 欠
忻 : 斤 忄
忼 : 亠 几 忄
忽 : 勿 心 勹
忿 : 心 刀 ハ
怇 : 匚 口 忄
怊 : 刀 口 忄
怍 : 一 ｜ ノ 二 忄
怎 : ｜ ノ 一 心
怏 : 人 大 忄 冂
怐 : 口 忄 勹
怒 : 女 心 又
怓 : 又 女 忄
怔 : 一 忄 止
怕 : 白 忄
怖 : ノ 一 巾 忄
怗 : 卜 口 忄
怘 : 十 口 心
怙 : 口 十 忄
怚 : 一 忄 目
怛 : 日 忄
怜 : 忄 𠆢 卩 一
思 : 心 田
怟 : 丶 忄 氏
怠 : 口 心 厶
怡 : 口 忄 厶
怢 : ノ 二 人 大 忄
怤 : ⺅ 寸 心
急 : ヨ 心 勹
怦 : 干 ハ 忄
性 : 生 忄
怨 : 心 夕 卩
怩 : 忄 匕 尸
怪 : 土 忄 又
怫 : ｜ ノ 弓 忄
怭 : ノ 忄 心
怯 : 土 忄 厶
怱 : ノ 心 丶 勿 勹
怳 : 儿 口 忄
怵 : 一 ｜ 丶 ノ 乙 忄 木
怺 : 水 忄 丶
恀 : 夕 忄
恁 : ノ ⺅ 士 心
恂 : 日 忄 勹
恃 : 寸 土 忄
恆 : ｜ 一 忄 彑
恇 : 匚 忄 王
恈 : 厶 忄 牛
恉 : 匕 忄 日
恊 : 忄 力
恋 : 心 ハ 亠
恌 : 丶 ノ 儿 冫 忄
恍 : ⺌ 忄 儿
恐 : 工 心 丶 几
恑 : 勹 卩 厂 忄
恒 : 一 日 忄
恔 : 亠 忄 父
恕 : 口 女 心
恖 : 丶 ノ 口 心
恗 : 二 勹 大 忄
恙 : 王 心 并 羊
恚 : 心 土
恝 : 一 ｜ 二 刀 彡 心
恟 : 忄 凵 勹
恠 : ノ 一 土 忄
恡 : 一 丶 ノ 厶 忄
恢 : 火 厂 忄
恣 : 欠 心 冫
恤 : 血 皿 忄
恥 : 耳 心
恧 : 心 而
恨 : 艮 忄
恩 : 心 大 囗
恪 : 口 忄 夂
恫 : 口 忄 冂 一
恬 : 口 舌 忄
恭 : 心 ハ 井
息 : 自 心
恰 : 口 忄 𠆢
恱 : 儿 ハ 厶 忄
恵 : 一 心 田
恷 : ⺅ 心 木
恾 : 亠 忄 ⺾ 亡
恿 : マ 心 用
悁 : 月 口 忄
悂 : 匕 土 忄 比
悃 : 忄 木 囗
悄 : 月 ⺌ 忄
悆 : 二 𠆢 小 心 示
悈 : 廾 忄 戈
悉 : ノ 心 釆 米
悊 : 扌 心 斤
悋 : 口 文 忄
悌 : ｜ ノ 弓 并 忄
悍 : 干 日 忄
悎 : ノ 口 土 忄
悑 : 一 ｜ 丶 二 冂 十 忄 月 用
悒 : 口 忄 巴 邑
悓 : 儿 忄 目 見
悔 : 母 忄 毋
悕 : 一 ｜ 丶 ノ 冂 巾 忄
悖 : 子 十 忄 冖
悗 : 免 忄 儿
悘 : 一 ノ 匚 大 心 矢
悚 : ｜ 口 ハ 忄 木
悛 : 忄 儿 厶 夂
悝 : 忄 里
悞 : 口 大 忄 无
悟 : 一 口 忄 五
悠 : ｜ ⺅ 心 夂 攵
悢 : 丶 忄 艮
患 : ｜ 口 心
悤 : ノ 口 夂 心
悥 : 二 亠 口 心 言
悦 : 口 并 忄 儿
悧 : 禾 刂 忄
您 : ⺅ 冖 勹 小 心
悩 : ⺌ 忄 凵
悪 : ｜ 一 口 心
悰 : 二 宀 小 忄 示
悱 : 忄 非
悲 : 心 非
悳 : 十 心 目
悴 : 十 人 忄 亠
悵 : 長 忄
悶 : 心 門
悷 : 一 丶 大 尸 忄 戸 犬
悸 : 禾 子 忄
悻 : 一 并 十 土 干 忄
悼 : 十 日 忄 卜
悽 : ヨ 女 忄
悾 : 儿 ハ 宀 工 忄 穴
惂 : 勹 忄 臼
惄 : 又 土 小 心
情 : 月 青 土 二 忄 亠
惆 : 口 土 忄 冂
惇 : 口 子 忄 亠
惈 : 忄 日 木 田
惉 : 卜 口 氵 心
惊 : 亠 口 小 忄
惋 : 卩 夕 宀 忄
惎 : 一 ｜ 二 心
惏 : 忄 木
惑 : 口 心 戈
惓 : 大 二 并 忄 已
惔 : 忄 火
惕 : ノ 勹 忄 日 勿
惘 : 工 并 忄 冂
惙 : 又 忄
惚 : 心 忄 勿
惛 : 忄 日 氏
惜 : ｜ 一 二 日 忄
惝 : 冂 口 小 ⺌ 忄
惞 : 人 勹 忄 斤 欠
惟 : 忄 隹
惠 : ｜ 一 心 虫 日 厶
惡 : 一 心 二
惢 : 心
惣 : 牛 心 勿
惥 : 人 大 心 臼
惧 : ハ 忄 目
惨 : 一 忄 厶 彡
惮 : 十 ⺌ 忄 日 田
惰 : ノ 一 月 工 忄
惱 : 巛 忄 囗
惲 : 冖 忄 車
想 : 心 木 目
惴 : 山 而 忄
惵 : 一 ｜ 忄 木 世
惶 : 王 白 忄
惷 : 心 大 二 日
惸 : 勹 子 忄 日
惹 : ノ 一 口 心 ⺾
惺 : 生 日 忄
惻 : 貝 目 ハ 刂 忄
惼 : 一 ｜ 亅 冂 尸 廾 忄 戸 冊
惽 : 一 乙 尸 忄 日 氏
愀 : 火 禾 忄
愁 : 火 禾 心
愂 : 冖 力 十 子 心
愃 : 二 日 忄 宀
愆 : 行 氵 心 彳
愇 : 口 忄 韋
愈 : 刂 月 心 𠆢
愉 : 刂 月 忄 𠆢
愊 : 一 口 忄 田
愌 : ハ 冂 勹 大 忄
愍 : 口 氏 心 攵
愎 : 日 忄 夂
意 : 音 心 日 立
愐 : 忄 面
愑 : ｜ 力 マ 忄 月 用
愒 : 人 勹 忄 日
愓 : 一 ノ 勹 忄 日 勿
愔 : 忄 日 立
愕 : 口 二 忄 勹
愖 : 一 ｜ 儿 ハ 匚 忄 甘 目
愗 : マ 心 攵 矛
愙 : 口 夂 宀 心
愚 : 心 田 冂 厶 禸
愛 : 心 爪 冖 夂
愜 : 人 匚 大 忄
愞 : 大 忄 而
感 : ノ 口 心 戈
愡 : ノ 心 忄 丶 勿
愢 : 忄 心 田
愧 : 鬼 田 忄 儿 匕
愨 : 士 心 冖 殳 几 又
愪 : ハ 口 忄 目 貝
愫 : 一 ｜ 二 亠 土 小 幺 忄 糸
愬 : 月 心 并 屮
愰 : 一 儿 ⺌ 忄 日
愱 : 一 ノ 大 忄 疒 矢
愴 : 戸 口 人 忄 一 尸
愵 : 丶 冫 弓 忄
愶 : 力 忄 月
愷 : 并 口 山 忄 豆
愹 : 𠆢 ハ 口 宀 忄 谷
愺 : 十 忄 ⺾ 日
愼 : ハ 忄 目 匕
愽 : 十 寸 田 忄 丶
愾 : 米 忄 气
愿 : 小 心 白 厂
慁 : 口 心 豕
慂 : 氵 心 用 マ
慄 : 西 忄 木
慅 : 丶 又 忄 虫
慆 : 忄 爪 臼
慇 : 心 日 殳 几 又
慈 : 一 心 并 幺
慉 : 亠 幺 忄 玄 田
慊 : ｜ ヨ 并 忄
態 : 月 心 匕 厶
慌 : 川 忄 ⺾ 亡
慍 : 皿 日 忄
慎 : 一 十 ハ 忄 目
慓 : 示 二 小 西 忄
慕 : 心 大 日 ⺾
慘 : 忄 𠆢 厶 彡
慙 : 斤 車 心
慚 : 斤 車 忄
慝 : ノ 一 口 心 厂 ⺾ 匚
慞 : 十 忄 日 立
慟 : ｜ ノ 日 忄 力
慠 : 土 士 忄 攵 方
慢 : 日 罒 忄 又
慣 : 貝 目 ハ 母 忄 毋
慥 : 口 辶 土 忄
慧 : ヨ 心 ｜ 一
慨 : 牙 艮 忄
慫 : 心 并 疋 彳
慬 : 二 十 口 廾 忄 革
慮 : 心 田 卜 匕 厂 虍
慯 : ノ 一 日 忄 勹
慰 : 示 二 小 心 寸 尸
慱 : 十 寸 虫 日 忄 亠 厶
慲 : 一 ｜ 人 冂 巾 忄
慳 : 臣 土 忄 又
慴 : 羽 白 忄 冫
慵 : ヨ 忄 用 冂 广 聿
慶 : 心 冖 夂 广
慷 : ヨ 水 忄 广 隶
慸 : 一 ｜ ノ 乙 冂 冖 凵 巾 廾 心
慻 : 一 ハ 并 大 忄 目
慼 : 一 ノ 卜 厂 小 心 戈
慾 : 欠 口 心 谷 ハ 𠆢
慿 : 冫 廾 心 馬
憀 : 𠆢 冫 彡 忄 羽
憁 : ノ 口 夂 忄 心
憂 : 一 自 心 冖 夂 白
憃 : 一 二 大 心 臼
憄 : 十 彳 心 目
憇 : 甘 口 心 舌
憊 : ⺅ 心 用 厂 ⺾
憋 : ｜ ハ 并 冂 巾 心 攵
憍 : ノ 冂 口 大 忄
憎 : 田 日 并 忄
憐 : 舛 米 忄 夕
憑 : 心 馬 冫
憒 : 一 ｜ ハ 口 忄 目 虫 貝
憓 : 一 ｜ 厶 忄 心 日 虫
憔 : 忄 灬 隹
憖 : ｜ 犬 心 人 ハ 木
憗 : 人 心 攵 木
憘 : 并 十 口 士 忄 豆
憙 : 一 口 士 心 豆 ハ
憚 : ｜ 口 十 田 忄
憜 : 一 ノ 工 忄 ⻖ 月
憝 : 亠 口 子 心 攵
憟 : 忄 米 西
憠 : 一 人 并 勹 厂 屮 心 欠
憤 : 貝 目 ハ 十 忄 ⺾
憥 : 冖 力 心 火
憧 : 忄 里 立
憨 : 一 ｜ ユ 心 攵 耳
憩 : 口 自 心 舌
憪 : 忄 月 門
憫 : 文 忄 門
憬 : 口 小 日 忄 亠
憭 : 丶 ノ 大 小 忄 日
憮 : 忄 灬 無 一 ｜ ノ
憲 : 心 土 罒 亠 宀
憶 : 音 心 日 忄 立
憸 : 一 人 𠆢 口 忄
憹 : ｜ 厂 忄 日 衣 辰
憺 : 言 忄 儿 厂 勹
憼 : 勹 口 ⺾ 心 攵
憾 : ノ 口 心 忄 戈
懀 : 一 ｜ 𠆢 并 口 忄 日
懁 : 一 口 忄 罒 衣
懂 : 一 ノ 忄 ⺾ 車
懃 : 心 力 ⺾
懆 : 口 忄 木 品
懇 : 艮 心 爪 犭 豸
懈 : 角 牛 刀 忄
應 : ⺅ 心 广 隹
懊 : 大 米 忄 冂
懋 : 心 矛 木 マ
懌 : 十 辛 土 罒 忄 立 亠
懍 : 禾 口 忄 亠 囗
懎 : 人 口 囗 土 忄
懏 : ｜ 亅 忄 隹
懐 : 衣 十 罒 忄
懕 : 丶 厂 大 心 日 月 犬
懜 : 一 ｜ 冖 卜 夕 忄 ⺾ 罒
懝 : 一 ノ 匕 マ 大 忄 疋 矢
懞 : 一 冖 忄 ⺾ 豕
懟 : 一 ｜ 丶 ノ 并 寸 心 王 羊
懡 : ノ 厶 广 忄 木 麻
懢 : 一 丶 ノ 二 匚 忄 皿 臣
懣 : ｜ 一 氵 心 入 冂 凵
懥 : 冖 十 厶 忄 止 田 疋
懦 : 雨 而 忄
懧 : 一 亅 宀 忄 心 皿
懩 : 一 丶 二 并 大 忄 艮
懬 : ハ 广 心 田 黄
懭 : ハ 广 忄 田 黄
懯 : 一 ｜ 丶 二 冂 心 攵 方 用 田
懲 : 王 山 心 彳 攵
懴 : 土 忄 戈 韭
懵 : 冖 忄 ⺾ 目 罒
懶 : ｜ 貝 目 口 ハ 頁 忄 木
懷 : 衣 罒 忄 亠
懸 : ノ 糸 幺 小 心 目
懺 : 人 忄 戈 韭
懼 : 忄 目 隹
懽 : 口 十 忄 ⺾ 隹
懾 : 耳 忄
懿 : 欠 口 士 心 豆 并 冖 冫
戀 : 言 糸 幺 小 心
戁 : 十 口 大 廾 心 隹 革
戃 : ｜ 二 并 冖 口 ⺌ 忄 灬 里 黒
戄 : 又 忄 目 隹
戇 : ハ 十 夂 工 心 日 目 立 貝
戈 : 戈
戉 : 戈
戊 : ノ 戈
戌 : ノ 戈 丶 厂
戍 : ノ 丶 戈 厂
戎 : 戈
成 : ノ 戈
我 : 亅 戈 手
戒 : 廾 戈
戓 : 口 戈
戔 : 戈
戕 : 戈 爿
或 : 口 戈 一
戚 : ノ 小 卜 戈
戛 : 一 自 戈 白
戜 : 口 戈 王
戝 : 貝 目 ハ 戈
戞 : 一 自 冖 戈
戟 : 十 日 戈
戠 : 亠 并 戈 日 曰 立
戡 : 甘 儿 匚 戈
戢 : 口 戈 耳
戣 : 一 大 戈 癶
戦 : 十 ⺌ 田 戈
戧 : 丶 ノ 𠆢 口 戈 日
戩 : 二 厶 戈 日
截 : 土 戈 隹
戫 : 一 ノ 口 戈 月
戮 : 羽 𠆢 冫 彡 戈
戯 : 卜 匕 厂 戈 虍
戰 : ｜ 口 十 田 戈
戲 : 口 豆 并 卜 匕 厂 戈 虍
戳 : ヨ 戈 隹
戴 : ｜ 一 田 土 二 ハ 戈
戸 : 戸 一 尸
戹 : 一 丶 乙 尸 戸
戻 : 戸 大 一 尸
戽 : 一 丶 尸 戸 斗
戾 : 一 丶 ノ 大 尸 戸 犬
房 : 戸 方 一 尸
所 : 斤 戸 一 尸
扁 : ｜ 一 戸 冂 冊 尸
扂 : 丶 卜 口 尸
扃 : 一 丶 冂 口 尸 戸
扄 : 丶 ノ 冂 口 尸
扆 : 一 丶 亠 尸 戸 衣
扇 : 羽 戸 冫 一 尸
扈 : 戸 ⻏ 口 巴 一 尸
扉 : 戸 非 一 尸
手 : 手
扌 : 扌
才 : ノ 一 亅
扎 : 乙 扌
扐 : 力 扌
扑 : 卜 扌
扒 : ハ 扌
打 : 亅 扌
扔 : 乃 扌
払 : 厶 扌
扖 : 入 扌
托 : ノ 一 乙 扌
扚 : 一 丶 勹 扌
扛 : 工 扌
扜 : 亅 二 扌
扞 : 干 扌
扠 : 又 丶 扌
扡 : ｜ 乙 匕 扌 也
扣 : 口 扌
扤 : 一 儿 扌
扨 : 刀 扌 丶
扭 : ｜ ヨ 扌
扮 : 刀 ハ 扌
扯 : 扌 止
扱 : 扌 及
扳 : ノ 厂 又 扌
扶 : 人 二 扌 大
批 : 比 扌
扺 : 扌 氏
扻 : 人 勹 扌 欠
扼 : 卩 厂 扌
扽 : ノ 乙 凵 扌 屯
找 : 戈 扌
承 : ノ 二 亅 手
技 : 支 扌 又 十
抂 : 王 扌
抃 : 卜 亠 扌
抄 : ノ 小 扌
抅 : 勹 厶 扌
抉 : 人 大 二 扌 ユ
把 : 巴 扌
抍 : ノ 廾 扌
抎 : 二 厶 扌
抏 : 二 儿 扌 元
抐 : 人 入 冂 扌
抑 : 卩 扌
抒 : 矛 亅 扌 マ
抓 : 爪 扌
抔 : ｜ ノ 一 丶 扌
投 : 扌 殳 几 又
抖 : 斗 扌
抗 : 亠 几 扌
折 : 斤 扌
抙 : 扌 手
抛 : ノ 九 扌 力
抜 : 夂 亠 扌 又
択 : 尸 扌
抦 : 一 人 冂 扌
抨 : 一 ハ 并 十 干 扌
披 : 皮 又 扌
抬 : 口 厶 扌
抱 : 勹 已 扌
抳 : 匕 尸 扌
抵 : 氏 扌
抶 : 一 ノ 大 扌
抷 : 一 ｜ 丶 ノ 扌
抹 : ｜ 一 ハ 木 亠 扌
抺 : 一 扌 木
抻 : ｜ 日 扌 田
押 : ｜ 日 扌 田
抽 : ｜ 日 扌 田
抾 : 厶 土 扌
抿 : 一 乙 尸 扌 氏
拂 : ｜ ノ 弓 扌
拄 : 丶 亠 土 扌 王
担 : 一 日 扌
拆 : 斤 丶 扌
拇 : 母 扌 毋
拈 : 口 卜 扌
拉 : 立 扌
拊 : ⺅ 寸 扌
拌 : ｜ 干 二 ハ 扌 十
拍 : 白 扌
拎 : 丶 𠆢 マ 扌
拏 : 手 女 又
拐 : 口 刀 扌
拑 : 甘 扌
拒 : 匚 扌 巨
拓 : 口 石 扌
拔 : ノ 一 丶 扌
拕 : 匕 宀 扌
拖 : 一 ｜ ノ 乙 匕 扌 也
拗 : 力 幺 扌
拘 : 口 勹 扌
拙 : ｜ 山 扌
拚 : 厶 廾 扌
招 : 口 刀 扌
拜 : ノ 干 扌
拝 : ｜ 一 干 扌
拠 : 几 夂 扌
拡 : 厶 广 扌
拪 : 扌 西
括 : ノ 口 十 舌 扌
拭 : 工 弋 扌
拮 : 口 士 扌
拯 : 水 扌
拱 : ｜ 一 二 ハ 扌
拲 : ｜ ノ 二 手
拳 : 一 手 并 大
拴 : 𠆢 扌 王
拵 : ノ 一 子 扌
拶 : 巛 夕 扌
拷 : ⺹ 扌
拼 : 一 并 廾 扌
拽 : ノ 乙 扌 日
拾 : 口 𠆢 扌
拿 : 口 手 𠆢
持 : 寸 土 扌
挂 : 土 扌
挃 : 一 厶 土 扌 至
挄 : 一 儿 ⺌ 扌
指 : 日 匕 扌
挈 : 手 土 刀
按 : 女 宀 扌
挊 : 一 卜 扌
挋 : 匚 扌 臣
挌 : 口 夂 扌
挍 : 亠 扌 父
挐 : 口 女 手
挑 : 儿 冫 扌
挓 : 一 ノ 乙 宀 扌
挖 : 乙 儿 ハ 宀 扌
挘 : ノ 力 小 扌
挙 : 手 ⺌ ハ
挟 : 人 大 二 并 丶 亠 扌
挧 : 羽 冫 扌
挨 : 矢 厶 扌
挩 : 儿 ハ 口 扌
挪 : 一 刀 ヨ 扌 ⻏
挫 : ｜ 土 人 扌
挭 : 一 丶 ノ 口 扌 日
振 : 衣 辰 厂 扌
挲 : ノ 小 氵 手
挵 : 廾 扌 王
挶 : 亅 口 尸 扌
挹 : 乙 口 已 扌 ⻏ 巴
挺 : 王 廴 扌
挻 : ノ 廴 扌 止 疋
挼 : 女 扌 爪
挽 : ｜ 一 免 儿 扌
挾 : 人 大 扌
挿 : ｜ ノ 十 日 扌 田
捁 : ｜ ノ 二 口 土 扌
捂 : 一 二 口 扌 五
捃 : ノ 口 ヨ 扌
捄 : 一 丶 扌 水
捆 : 口 囗 扌 木
捉 : 口 足 扌
捊 : 子 扌 爪
捋 : 寸 扌 爪
捌 : 刂 口 力 扌
捍 : 干 日 扌
捎 : 小 ⺌ 扌 月
捏 : 土 日 扌
捐 : 月 口 扌
捒 : 口 扌 木
捓 : 扌 ⻏ 牙
捔 : 勹 扌 用
捕 : 十 用 丶 扌
捗 : ノ 止 小 扌
捘 : ハ 厶 夂 扌
捙 : 扌 車
捛 : 口 扌
捜 : ｜ 日 又 扌 田
捥 : 卩 夕 宀 扌
捦 : 扌 金
捧 : ｜ 一 人 大 二 扌
捨 : 口 土 𠆢 扌
捩 : 戸 大 扌 一 尸
捫 : 門 扌
捬 : ⺅ 寸 广 扌
捭 : 一 ノ 十 口 扌 日
据 : 口 十 尸 扌
捱 : 厂 土 扌
捲 : 一 并 已 扌 大
捴 : ハ 厶 扌 心
捵 : ｜ ハ 扌 日
捶 : ｜ ノ 二 扌
捷 : 疋 扌 ヨ
捸 : ヨ 扌 水 隶
捺 : 示 二 小 大 扌
捻 : ｜ 一 心 𠆢 扌
捼 : ノ 女 扌 木 禾
捽 : 亠 人 十 扌
捿 : 一 ｜ 女 ヨ 扌
掀 : 斤 欠 扌
掂 : 卜 口 广 扌
掃 : ヨ 巾 冖 扌
掄 : 一 ｜ 亅 𠆢 冂 廾 扌 冊
掇 : 又 扌
授 : 爪 又 冖 扌
掉 : 十 日 卜 扌 曰
掊 : 口 扌 立
掌 : 口 手 ⺌ 冖
掎 : 口 大 亅 扌 一
掏 : 缶 凵 勹 扌
掐 : 勹 扌 臼
排 : 非 扌
掔 : 匚 又 手 臣
掕 : ハ 土 夂 扌
掖 : ⺅ 丶 亠 夂 扌 夕
掘 : ｜ 山 尸 扌
掙 : 亅 ヨ 扌 爪
掚 : 一 ｜ 入 冂 扌
掛 : 土 卜 扌
掞 : 扌 火
掟 : 疋 宀 扌
掠 : 口 小 亠 扌
採 : 爪 木 扌
探 : 木 儿 冖 扌
掣 : 刂 缶 牛 巾 手 凵
掤 : 扌 月
接 : 女 立 扌
掦 : ノ 勹 扌 日 勿
控 : 穴 工 儿 宀 扌
推 : 扌 隹
掩 : 乙 大 日 扌 奄
措 : ｜ 一 二 日 扌
掫 : 耳 又 扌
掬 : 米 勹 扌
掭 : 一 丶 亅 大 扌 灬
掮 : 一 丶 尸 扌 戸 月
掯 : 扌 月 止
掲 : 日 勹 匕 扌
掴 : 王 囗 扌 丶
掵 : 口 𠆢 卩 扌
掻 : 虫 又 扌
掽 : ｜ 丶 ノ 二 并 扌
掾 : ヨ 扌 豕
揀 : ｜ 日 ハ 木 扌
揁 : ハ 卜 扌 目 貝
揃 : 一 刂 月 并 扌
揄 : 刂 月 𠆢 扌
揅 : 一 ノ 口 廾 手
揆 : 人 大 二 扌 癶
揈 : 勹 扌 言
揉 : 矛 木 扌 マ
揎 : 一 二 宀 扌 日 曰
描 : 田 扌 ⺾
提 : 日 疋 扌
揑 : 工 扌 臼
插 : ノ 臼 十 扌
揓 : 一 ｜ ノ 乙 匕 扌 也 方
揔 : 丶 ノ 勹 扌 心 勿
揕 : 儿 ハ 匚 扌 甘
揖 : 口 耳 扌
揚 : 一 日 扌 勿
換 : 大 儿 冂 勹 扌
揜 : 一 𠆢 口 廾 扌
揠 : 匚 女 扌 日
握 : 至 土 厶 尸 扌
揣 : 山 而 扌
揥 : ｜ 亠 并 冂 冖 巾 扌 立
揩 : 白 比 扌
揪 : ノ 扌 木 火 禾
揫 : ノ 手 木 火 禾
揬 : 丶 儿 ハ 大 宀 扌 犬
揭 : 人 勹 扌 日
揮 : 車 冖 扌
揲 : 一 ｜ 扌 木 世
揳 : 一 ｜ 二 刀 大 扌
援 : ノ 一 爪 又 扌
揵 : ｜ 二 廴 ヨ 扌 聿
揶 : 耳 ⻏ 扌
揷 : ノ 十 扌 臼
揸 : 一 扌 日 木 目
揹 : 一 ｜ 匕 扌 月
揺 : 干 爪 凵 扌
搆 : ｜ 一 黄 ハ 冂 扌
搉 : 冖 扌 隹
搊 : 勹 屮 扌
損 : 貝 目 ハ 口 扌
搏 : 十 寸 田 丶 扌
搐 : 亠 幺 扌 玄 田
搒 : 亠 并 冖 扌 方 立
搓 : 王 工 并 羊 扌
搔 : 丶 又 扌 虫
搖 : 缶 夕 凵 扌
搗 : 山 鳥 扌
搘 : ノ 匕 土 扌 ⺹ 日
搜 : ｜ 臼 支 又 扌 十
搞 : 亠 冂 口 扌 高
搠 : 一 并 屮 扌 月
搢 : ｜ 丶 ノ 二 厶 扌 日
搤 : 一 丶 ノ ハ 并 扌 皿
搥 : ｜ ノ 辶 口 扌
搦 : 弓 冫 扌
搨 : 羽 日 冫 扌
搩 : 夕 扌 木 舛
搪 : ｜ 口 广 ヨ 扌
搬 : 舟 扌 殳 几 又
搭 : 口 𠆢 扌 ⺾
搯 : 扌 爪 臼
搰 : 冂 冖 扌 月 骨
搴 : ｜ 一 手 二 ハ 宀
搵 : 人 口 扌 皿
搶 : 戸 口 𠆢 扌 一 尸
携 : ノ 扌 隹 乃
搽 : 一 𠆢 小 扌 ⺾ 木
搾 : ｜ ノ 穴 儿 宀 扌
搿 : 一 𠆢 口 手
摂 : 耳 冫 扌
摋 : 一 丶 ノ 几 又 小 扌 殳
摎 : 羽 𠆢 冫 彡 扌
摏 : 一 大 扌 臼
摑 : 口 囗 扌 戈
摒 : 一 ｜ ノ 并 尸 廾 扌
摓 : 一 ｜ 二 辶 夂 扌
摔 : 丶 ノ 亠 冫 十 幺 扌 玄
摘 : 口 十 并 立 亠 冂 扌 滴
摚 : 冖 口 土 ⺌ 扌
摛 : 丶 ノ 亠 冂 凵 厶 扌 禸
摜 : 一 ハ 扌 田 目 貝
摝 : 匕 广 扌 比 鹿
摟 : 一 ｜ 口 女 扌 日
摠 : ノ 口 夂 扌 心
摡 : 厶 扌 无 日
摣 : 一 匕 卜 厂 扌 目 虍
摧 : 山 扌 隹
摩 : 手 木 广 麻
摭 : 一 ｜ 广 扌 灬
摯 : ノ 九 手 十 辛 立 丶
摳 : 匚 口 扌
摴 : 一 ｜ 二 冖 勹 扌 雨
摶 : 十 寸 虫 日 厶 扌
摸 : 大 日 扌 ⺾
摹 : 大 ⺾ 手 日
摺 : 羽 白 冫 扌
摻 : 𠆢 厶 彡 扌
摽 : 二 小 扌 示 西
撃 : 車 手 殳 几 又
撅 : 一 人 并 勹 厂 屮 扌 欠
撇 : ｜ 丶 ノ ハ 并 冂 扌 攵
撈 : 火 力 冖 扌
撏 : 口 寸 工 ヨ 扌
撐 : 冖 口 ⺌ 扌 牙
撑 : 冖 口 ⺌ 扌 手
撒 : ｜ 月 夂 扌 攵
撓 : 土 儿 扌
撕 : 甘 斤 ハ 扌
撘 : 一 𠆢 口 扌 竹
撙 : ハ 并 寸 扌 酉
撚 : 犬 夕 扌 灬
撛 : 夕 扌 米 舛
撝 : 一 亅 尸 扌 戸 灬 爪
撞 : 里 立 扌
撟 : ノ 冂 口 大 扌
撡 : 丶 亅 𠆢 厶 扌 灬
撣 : 十 口 扌 日 田
撤 : 月 亠 厶 扌 攵
撥 : 二 儿 扌 癶
撦 : ノ 土 大 扌 ⺹ 日 曰
撨 : 扌 灬 隹
撩 : 小 人 大 日 并 亠 扌
撫 : ｜ ノ 一 扌 灬 無
撬 : ノ 乙 二 扌
播 : 田 釆 米 扌
撮 : 耳 日 又 扌
撰 : ｜ 二 ハ 已 扌
撲 : 王 人 并 羊 扌
撳 : 人 勹 扌 欠 金
撹 : 見 ⺌ 冖 扌
撻 : 王 辶 十 辛 土 羊 立 亠 扌
撼 : ノ 口 心 戈 扌
撽 : 扌 攵 方 日 白
撾 : 冂 辶 口 囗 扌
撿 : 一 人 𠆢 口 扌
擁 : 亠 扌 隹
擂 : 雨 田 扌
擄 : 一 力 匕 卜 厂 扌 田 虍
擅 : 口 日 亠 囗 扌
擇 : 十 辛 土 罒 立 亠 扌
擉 : 勹 扌 罒 虫
擊 : 几 凵 又 手 殳 車
擋 : 冖 口 ⺌ 扌 田
擌 : 人 大 扌 竹
操 : 口 木 扌 品
擎 : 勹 口 ⺾ 手 攵
擐 : 一 口 扌 罒 衣
擑 : 口 扌 戈 耳
擒 : 𠆢 亠 凵 扌 禸
擔 : 言 儿 厂 扌 勹
擕 : ｜ 亅 扌 隹
擗 : 十 口 尸 扌 立 辛
擘 : 口 手 十 辛 立 尸
據 : 卜 匕 厂 扌 虍 豕
擠 : 亠 扌 齊 刀 氏 廾
擡 : 口 士 至 土 冖 厶 扌
擢 : ヨ 扌 隹
擣 : 口 工 士 寸 扌
擤 : 廾 扌 田 目 自 鼻
擥 : 一 丶 ノ 匚 手 罒 臣
擦 : ノ 示 二 小 宀 扌 癶
擧 : 臼 手 ハ
擩 : 冖 扌 而 雨
擪 : 丶 厂 大 手 日 月 犬
擬 : 疋 矢 匕 扌 マ
擭 : 又 扌 ⺾ 隹
擯 : ノ 貝 目 ハ 小 宀 扌
擰 : 一 亅 宀 扌 心 皿
擱 : 口 門 夂 扌
擲 : 大 酉 并 ⻏ 扌
擴 : 黄 田 ハ 广 扌
擵 : 广 扌 手 木 麻
擶 : 刂 月 竹 并 扌
擷 : ハ 口 士 扌 目 貝 頁
擺 : 月 罒 匕 厶 扌
擻 : 一 ｜ 口 女 扌 攵 日 田
擽 : 白 木 冫 扌
擾 : 一 心 白 冖 夂 扌 自
擿 : 亠 并 冂 十 辶 口 扌 立 滴
攀 : 一 手 大 ハ 木 爻
攁 : 一 丶 二 并 大 扌 艮
攄 : 匕 卜 厂 扌 心 田 虍
攅 : 貝 目 ハ 人 大 土 亠 扌
攈 : ノ 匕 广 扌 木 比 禾 鹿
攉 : 一 ｜ 丶 ⺅ 冖 扌 隹 雨
攊 : ノ 厂 扌 木 止 禾
攏 : 一 ｜ 乙 扌 月 立 竜
攓 : 一 ｜ 二 ハ 口 宀 扌 足
攔 : 并 口 扌 木 門
攖 : ハ 女 扌 目
攘 : 衣 二 ハ 亠 扌
攙 : 一 ｜ 丶 儿 勹 匕 口 扌 比 免
攛 : 儿 ハ 宀 扌 臼 鼠
攜 : 口 山 儿 冂 扌 隹
攝 : 耳 扌
攞 : 丶 小 幺 扌 罒 糸 隹
攟 : ノ 匕 口 广 扌 木 比 禾 鹿
攢 : ノ 儿 ハ 土 扌 目 貝
攣 : 言 糸 幺 小 手
攤 : 二 扌 ⺾ 隹
攦 : 一 丶 冂 匕 广 扌 比 鹿
攩 : 并 冖 口 ⺌ 扌 灬 里 黒
攪 : 臼 見 扌
攫 : 又 目 扌 隹
攬 : 見 臣 扌
攮 : 一 ｜ 二 冖 十 口 扌 衣
支 : 支 十 又
攱 : 十 又 支 立
攲 : 一 亅 十 又 口 大 支
攴 : 攵
攵 : 攵
收 : ｜ 攵
攷 : 攵
攸 : ｜ ノ 攵
改 : 已 攵
攺 : 尸 攵
攻 : 工 攵
攼 : 一 十 干 攵
攽 : ハ 刀 攵
放 : 方 攵
政 : 一 止 攵
敃 : 一 乙 尸 攵 氏
敄 : マ 攵 矛
故 : 口 十 攵
敇 : 冂 攵 木
效 : 父 亠 攵
敉 : 攵 米
敍 : 干 小 𠆢 攵
敏 : 母 攵 毋
敐 : 亠 厂 攵 衣 辰
救 : 水 丶 攵
敒 : ｜ ⺅ 攵 日 田
敔 : 一 二 口 攵 五
敕 : ｜ 口 ハ 木 攵
敖 : 土 方 攵
敗 : 貝 目 ハ 攵
敘 : 干 小 𠆢 攵
教 : 子 ⺹ 攵
敝 : ｜ 巾 ⺌ 并 冂 攵
敞 : 口 ⺌ 冂 攵
敟 : 一 ｜ 攵 皿
敠 : 卜 又
敢 : 耳 攵
散 : ｜ 月 攵
敦 : 口 子 亠 攵
敧 : 亅 卜 又 口 大
敫 : 攵 方 日 白
敬 : 口 勹 攵 ⺾
数 : 女 米 攵 夂
敲 : 口 高 亠 冂 攵
整 : ｜ 一 口 止 木 攵
敵 : 口 十 并 立 亠 冂 攵 滴
敷 : 十 田 方 丶 攵
數 : ｜ 一 口 女 攵
敺 : 匚 卜 又 口
敽 : ノ 冂 又 口 大
斁 : 一 并 十 土 干 攵 罒
斂 : 口 人 𠆢 攵
斃 : 巾 小 ⺌ 并 夕 冂 匕 攵
斄 : 一 人 厂 攵 木
斅 : 一 ｜ 冖 卜 又 子 ヨ 爻
文 : 文
斈 : 子 文
斉 : ｜ ノ 文 廾 斉
斊 : 文 耳
斌 : 止 文 弋
斎 : ｜ ノ 文 廾 斉 示 二 小
斐 : 非 文
斑 : 王 文
斒 : 一 ｜ 丶 ノ 亅 冂 尸 廾 戸 冊
斕 : 丶 ノ 并 口 木 門
斗 : 斗
斘 : 夕 斗
料 : 斗 米
斛 : 角 斗
斜 : 禾 斗 𠆢
斝 : 冖 口 斗
斟 : 甘 斗 儿 匚
斠 : 一 ｜ 二 斗 月 用
斡 : 十 斗 日 𠆢
斣 : 勹 斗 罒 虫
斤 : 斤
斥 : 斤 丶
斦 : 斤
斧 : 斤 父
斫 : ノ 斤 口 石
斬 : 斤 車
断 : 斤 米 ｜ 一
斮 : ｜ 二 斤 日 曰
斯 : 甘 斤 ハ
新 : 斤 十 辛 并 木 立 亠
斲 : 一 ｜ ノ 口 斤 爿
斳 : 二 十 口 廾 斤 革
斴 : 夕 斤 米 舛
斵 : ノ 刀 匚 厶 斤 臣
斷 : ｜ 斤 幺
斸 : ｜ 二 勹 尸 斤 罒 虫
方 : 方
於 : 方 𠆢
施 : ノ 方 一 也
斿 : 一 ノ 亅 方
旁 : 并 方 立 亠 冖
旂 : 一 ノ 斤 方
旃 : 方 冂
旄 : 方 毛
旅 : ノ 方
旆 : 干 缶 巾 方 凵
旈 : ｜ ノ 乙 亠 厶 川 方
旉 : 一 ｜ 丶 十 方 日
旋 : 疋 方
旌 : 生 方
旎 : 一 ノ 匕 尸 方
族 : 方 矢
旐 : 一 丶 ノ 儿 冫 方
旒 : 川 方 亠 厶
旔 : ｜ 二 廴 ヨ 方 聿
旖 : 一 ノ 亅 口 大 方
旗 : 甘 ハ 方
旘 : 亠 并 戈 方 日 立
旙 : 田 釆 米 方
旛 : 田 釆 米 方
旟 : 一 ｜ ノ ハ ヨ 方
无 : 无
旡 : 无
既 : 牙 艮
日 : 日
旦 : 一 日
旧 : ｜ 日
旨 : 日 匕
早 : 十 日
旬 : 日 勹
旭 : 日 九
旰 : 一 十 干 日
旱 : 干 日
旲 : 大 日
旴 : 一 亅 二 十 干 日
旵 : 山 日 曰
旹 : ｜ 亠 山 日
旺 : 王 日
旻 : 日 文
旼 : 文 日
旾 : ノ 乙 凵 日 曰 屯
旿 : 一 ノ 十 干 日 曰
昀 : 一 丶 二 勹 日
昂 : 日 卩
昃 : 人 日 厂
昄 : ノ 厂 又 日
昆 : 日 比
昇 : ノ 日 廾 十
昈 : 一 丶 尸 戸 日
昉 : 方 日
昊 : 一 大 日
昌 : 日
昍 : 日 曰
明 : 月 日
昏 : 氏 日
昑 : 丶 𠆢 日
昒 : ノ 勹 日 曰 勿
易 : 日 勿 勹
昔 : ｜ 一 二 日
昕 : 斤 日
昖 : ハ 厶 日 曰
昜 : ノ 一 日 勿
昝 : 卜 夂 日 曰
昞 : 一 人 冂 日
星 : 生 日
映 : ノ 日 大
昡 : 亠 幺 日 玄
昢 : ｜ 凵 山 日
昣 : 𠆢 彡 日 曰
昤 : 一 ｜ 丶 亅 𠆢 マ 日
春 : 一 二 日 人
昦 : ｜ ノ 大 日 曰
昧 : ｜ 二 日 ハ 木 亠
昨 : ｜ ノ 日
昩 : 一 日 曰 木
昪 : 厶 廾 日
昫 : 勹 口 日
昬 : 一 尸 日 氏
昭 : 口 刀 日
昮 : 力 工 日
是 : 日 疋
昰 : 一 日 止
昱 : 日 立
昳 : 一 ノ 大 日 矢
昴 : 日 卩
昵 : 日 匕 尸
昶 : 水 日 丶
昷 : 日 曰 皿
昹 : 丶 日 曰 水
昺 : 一 人 冂 日 西
昼 : 一 日 尸 丶
昿 : 日 厶 广
晀 : 丶 ノ 儿 冫 日 曰
晁 : 日 儿 冫
時 : 寸 土 日
晃 : 一 ⺌ 日 儿
晄 : ⺌ 日 儿
晅 : 一 日
晆 : 土 日 曰
晈 : 亠 日 父
晉 : 一 二 日 厶
晊 : 一 厶 土 日 曰 至
晋 : 一 日
晌 : ノ 冂 口 日
晎 : ｜ 二 ハ 日
晏 : 女 日 宀
晑 : ノ 冂 口 日
晒 : 西 日
晗 : 一 丶 𠆢 口 日
晘 : 一 十 干 日 曰
晙 : 儿 ハ 厶 夂
晚 : 一 ｜ ノ 儿 勹 口 日 免
晛 : 儿 日 目 見
晜 : ｜ ノ 并 弓 日
晝 : 一 日 聿
晞 : ノ 一 巾 日
晟 : ノ 日 戈
晠 : ノ 亅 厂 戈 日
晡 : 一 ｜ 丶 十 日 月 用
晢 : 斤 日 扌
晣 : 扌 斤 日
晤 : 一 口 日 五
晥 : 二 儿 宀 日 元
晦 : 日 母 毋
晧 : ノ 口 土 日
晨 : 辰 日
晩 : 免 日 儿
晪 : 一 ｜ ハ 日
晫 : 十 卜 日
晬 : 亠 人 十 日
晭 : ｜ 二 冂 口 日
普 : ｜ 一 二 日 并
景 : 口 小 日 亠
晰 : 斤 日 木
晳 : 斤 日 木
晴 : 月 青 土 二 日 亠
晵 : 丶 尸 戸 攵 日 曰
晶 : 日
晷 : 人 卜 口 夂 日
晸 : 一 攵 日 止
晹 : ノ 勹 日 曰 勿
智 : 口 日 矢
晻 : 乙 大 日 奄
晼 : 卩 夕 宀 日 曰
晾 : 亠 口 小 日
晿 : 日 曰
暀 : 丶 亠 土 彳 日 王
暁 : 十 日 儿 廾
暃 : 日 非
暄 : 一 二 日 宀
暇 : 日 又
暈 : 車 日 冖
暉 : 車 日 冖
暋 : 一 尸 攵 日 氏
暌 : 一 大 日 癶
暍 : 人 勹 日
暎 : 人 大 日 冂 ⺾
暐 : 口 日 韋
暑 : 日 ⺹
暒 : 日 生
暖 : ノ 一 爪 日 又
暗 : 音 日 立
暘 : ノ 一 日 勹 勿
暙 : 一 二 大 日
暚 : 凵 山 日 曰 爪 缶
暛 : 一 ノ 二 并 工 日 曰
暜 : 日 曰 立
暝 : 日 ハ 亠 冖
暟 : 并 口 山 日 曰 豆
暠 : 亠 冂 口 日 高
暢 : ｜ 一 日 勿 田
暤 : 十 大 日 白
暦 : 日 麻 木 厂 广
暫 : 斤 車 日
暭 : 丶 ノ 二 冫 十 日 白
暮 : 大 日 ⺾
暱 : 匚 口 ⺾ 日 石
暲 : 十 日 立
暴 : ｜ 一 水 二 日 ハ 井
暵 : 十 口 大 廾 日 革
暸 : 小 大 日 并 亠
暹 : 辶 日 隹
暻 : 亠 口 小 日
暼 : 巾 小 ⺌ 日 并 冂 攵
暾 : 口 子 日 亠 攵
暿 : 一 并 十 口 士 日 豆
曀 : 并 冖 口 士 日 豆
曁 : 一 艮 日 无
曂 : ｜ 二 ハ 日 曰 田
曃 : 辶 ヨ 日 曰 水 隶
曄 : ｜ 一 二 日 ⺾
曆 : ノ 厂 日 木 禾
曇 : 雨 二 日 厶
曈 : 日 立 里
曉 : 土 日 儿
曌 : ハ 宀 工 日 曰 月
曎 : 一 并 十 土 干 日 曰 罒
曏 : 丶 匕 厶 幺 ⻏ 日 白
曔 : 勹 口 ⺾ 攵 日 曰
曖 : 心 爪 日 冖 夂
曙 : 日 罒 ⺹
曚 : 日 冖 ⺾ 豕
曛 : 一 ノ 并 日 灬 車
曜 : ヨ 日 隹
曝 : ｜ 一 水 日 ハ
曟 : 亠 厂 日 衣 辰
曠 : 黄 田 日 ハ 广
曦 : 王 日 并 羊 亅 戈
曨 : 一 ｜ 乙 日 月 田 立 竜
曩 : ｜ 衣 一 日 ハ 亠
曫 : 丶 ノ 小 幺 日 曰 糸 言
曬 : 一 丶 冂 匕 广 日 比 鹿
曮 : 厂 ユ 口 攵 日 曰 耳
曰 : 曰
曲 : ｜ 日
曳 : 乙 日
更 : ノ 一 日
曵 : 弋 曰
曷 : 日 勹 匕 曰
書 : 日 聿
曹 : ｜ 一 日
曺 : 十 日
曻 : 夕 日 舛
曼 : 日 罒 又
曽 : 田 日 并
曾 : 日 ハ
替 : 人 大 二 日 亠
最 : 一 耳 日 又
朁 : 日 牙
會 : 日 罒 𠆢
朅 : 人 勹 厶 土 日
朇 : ｜ ノ 𠆢 并 十 口 日 曰 白
月 : 月
有 : ノ 一 月
朋 : 月
服 : 月 又 卩
朎 : 一 ｜ 丶 亅 𠆢 厶 月
朏 : ｜ 月 山
朒 : 人 冂 月
朓 : 丶 ノ 儿 冫 月
朔 : 月 并 屮
朕 : 月 人 大 一 并
朖 : 月 艮
朗 : 月 艮
朙 : 儿 ハ 冂 口 囗 月
望 : 王 亡 月
朜 : 亠 口 子 月
朝 : 月 十 日
朞 : 一 甘 月 ハ
期 : 甘 月 ハ
朠 : 大 ⺾ 月
朢 : 匚 月 王 臣
朦 : 月 冖 ⺾ 豕
朧 : 月 立
木 : 木
未 : ｜ 二 ハ 木 亠
末 : ｜ 一 ハ 木 亠
本 : 一 木
札 : 乙 木
朮 : ｜ 一 木 丶 儿
朱 : ｜ ノ 牛 二 ハ 木
朳 : ハ 木
朴 : 卜 木
朶 : ノ 木 乃
朷 : 刀 木
朸 : 木 力
机 : 木 几
朽 : 一 木 勹
朾 : 一 亅 木
朿 : ｜ 一 ハ 木 冂
杁 : 入 木
杅 : 亅 二 木
杆 : 干 木
杇 : 二 勹 木
杈 : 丶 又 木
杉 : 木 彡
杌 : 一 儿 木
杍 : 子 木
李 : 子 木
杏 : 口 木
材 : ノ 一 木 亅
村 : 寸 木
杓 : 木 丶 勹
杔 : 一 ノ 乙 木
杕 : 大 木
杖 : ノ 一 木
杙 : 木 弋
杜 : 土 木
杝 : ｜ 乙 匕 也 木
杞 : 木 已
束 : ｜ 一 口 ハ 木
杠 : 工 木
条 : 木 夂 攵
杢 : 工 木
杣 : 山 木
杤 : ノ 一 木
来 : ｜ 二 米 亠 木
杦 : 夂 木
杪 : ノ 小 木
杬 : 二 儿 木 元
杭 : 木 亠 几
杮 : 一 ｜ 冂 巾 木
杯 : ｜ ノ 一 木 礻
杰 : 木 灬
東 : ｜ 一 日 木 田
杲 : 日 木
杳 : 日 木
杴 : 人 勹 木 欠
杵 : ノ 干 木 十
杶 : ノ 乙 凵 木 屯
杷 : 木 巴
杻 : ｜ ヨ 木
杼 : 矛 木 亅
松 : ハ 木 厶
板 : 又 木 厂
极 : 丶 乃 及 木
构 : 勹 厶 木
枅 : 木 廾
枇 : 比 木
枉 : 王 木
枋 : 方 木
枌 : 刀 ハ 木
枎 : 一 大 木
枏 : 二 冂 月 木
析 : 斤 木
枑 : 一 ヨ 彑 木
枒 : 木 牙
枓 : 斗 木
枕 : ノ 乙 木 冖 尢
枖 : ノ 大 木
林 : 木
枘 : 人 入 冂 木
枙 : 卩 厂 木
枚 : 木 攵
枛 : 木 爪
果 : ｜ 田 木
枝 : 支 木 十 又
枠 : 九 十 木
枡 : ノ 木 廾 十
枢 : 木 匚
枦 : 戸 木 一 尸
枩 : ハ 木 厶
枯 : 口 十 木
枰 : 一 丶 ノ ハ 并 十 干 木
枱 : 厶 口 木
枲 : 厶 口 木
枳 : 口 ハ 木
枴 : 口 刀 木
枵 : 一 勹 口 木
架 : 口 木 力
枷 : 口 木 力
枸 : 口 木 勹
枹 : 木 勹 已
枻 : 一 ｜ 木 世
枼 : 一 ｜ 木 世
枽 : 一 凵 十 木
柀 : ｜ ノ 十 厂 又 支 木
柁 : 木 匕 宀
柂 : 一 ｜ ノ 乙 匕 也 木
柃 : 一 丶 亅 𠆢 マ 木
柄 : 一 人 木 冂
柅 : 匕 尸 木
柆 : 木 立
柈 : 一 二 ハ 木
柉 : 丶 ノ 乙 木
柊 : 木 夂 丶
柎 : ⺅ 寸 木
柏 : 白 木
某 : 甘 木
柑 : 日 木 甘
柒 : 一 乙 匕 氵 木
染 : 九 氵 木
柔 : 矛 木 マ
柗 : ハ 口 木
柘 : 口 石 木
柙 : ｜ 日 木 田
柚 : ｜ 日 木 田
柛 : ｜ 日 木 田
柜 : 匚 口 木
柝 : 斤 木 丶
柞 : ｜ ノ 木
柡 : 二 木 水
柢 : 氏 木
柤 : 木 目
柦 : 一 日 曰 木
柧 : 瓜 木
柩 : 入 木 匚 久
柬 : 巾 并 木 亠
柮 : ｜ 山 木
柯 : 口 木 亅 一
柰 : 二 小 木 示
柱 : 王 木 丶
柲 : ノ 心 木
柳 : 木 卩
柴 : 止 木 匕
柵 : ｜ 一 木 亅 冂 冊
柶 : 儿 口 木
柷 : 儿 口 木
柹 : 木 牙
査 : 一 木 目
柼 : ハ 宀 木 穴
柾 : 一 止 木
柿 : ｜ 巾 木 亠 冂
栁 : 卩 夕 木
栂 : 母 木 毋
栃 : 斤 木 厂
栄 : ⺌ 木 冖
栐 : 一 木 水
栓 : 王 木 𠆢
栔 : 一 ｜ 二 刀 木
栖 : 西 木
栗 : 西 木
栘 : 夕 木
栙 : ｜ 二 夂 木
栝 : 口 木 舌
栞 : 干 木
栟 : 一 并 廾 木
校 : 父 木 亠
栢 : 一 白 木
栧 : ノ 乙 日 木 田
栨 : 一 人 冫 勹 木 欠
栩 : 羽 木 冫
株 : 牛 木
栫 : ノ 一 子 木
栬 : 乙 勹 已 木 巴 色
栭 : 木 而
栯 : 一 ノ 月 木
栰 : ⺅ 戈 木
栱 : ｜ 二 ハ 木
栲 : 木 ⺹ 勹
栳 : ノ 匕 土 ⺹ 木
栴 : ノ 木 冂
核 : 人 木 亠
根 : 艮 木
栻 : 工 弋 木
格 : 口 木 夂
栽 : 土 木 戈
栾 : ノ 亅 亠 ハ 木
栿 : 丶 ⺅ 大 木 犬
桀 : 舛 木 夕
桁 : 行 木 彳
桂 : 土 木
桃 : 木 儿 冫
桄 : 一 儿 ⺌ 木
桅 : 勹 卩 厂 木
框 : 王 木 匚
案 : 女 木 宀
桉 : 女 宀 木
桊 : 一 丶 ノ 并 大 木
桌 : 卜 日 木
桍 : 大 二 木 勹
桎 : 至 土 木 厶 一
桐 : 口 木 冂 一
桑 : 又 木
桒 : 十 ⺾ 木
桓 : 一 日 木
桔 : 口 士 木
桕 : 木 臼
桗 : 乃 木
桘 : ｜ ノ 口 木
桙 : 牛 木 厶
桛 : 一 卜 木
桜 : 女 ⺌ 木
桝 : 舛 木 夕
桟 : ノ 毛 木 丶
档 : ヨ ⺌ 木
桧 : 二 木 𠆢 厶
桫 : ノ 小 氵 木
桮 : 一 ｜ 丶 ノ 口 木
桯 : 口 木 王
桰 : 口 木 氏
桱 : 一 巛 工 木
桲 : 冖 十 子 木
桴 : 子 爪 木
桵 : 女 木 爪
桶 : 木 用 マ
桷 : 角 木
桹 : 丶 木 艮
桺 : 一 ｜ 廾 木
桻 : 一 ｜ 二 夂 木
桼 : 𠆢 木 水
桾 : ヨ 口 木 尸
桿 : 干 日 木
梁 : 氵 刀 木 丶
梂 : 一 丶 木 水
梃 : 王 木 廴
梄 : 木 酉
梅 : 母 木 毋
梆 : 一 ノ ⻏ 木
梈 : 一 亅 亠 口 木
梍 : 乙 白 木 匕
梏 : ノ 口 土 木
梐 : 匕 土 木 比
梓 : 十 辛 木 立
梔 : 木 厂 巴
梖 : ハ 木 目 貝
梗 : ノ 一 日 木
梘 : 儿 木 目 見
梙 : ｜ 口 木
梚 : 一 ｜ 儿 勹 口 木 免
梛 : 刀 ⻏ 木 二
梜 : 人 大 木
條 : ⺅ 木 攵
梟 : 鳥 木
梠 : 口 木
梡 : 二 儿 宀 木 元
梢 : 月 ⺌ 木
梣 : 一 丶 𠆢 山 木
梥 : ハ 厶 宀 木
梦 : 木 夕
梧 : 一 口 木 五
梨 : 禾 刂 木
梩 : 木 里
梪 : 并 口 木 豆
梫 : 冖 又 ヨ 木
梭 : 木 儿 厶 夂
梮 : 亅 口 尸 木
梯 : ｜ ノ 弓 并 木
械 : 木 廾 戈
梱 : 木 囗
梲 : 儿 ハ 口 木
梳 : 川 木 亠 厶
梴 : ノ 廴 木 止 疋
梵 : 木 丶 几
梶 : 毛 木 尸
梹 : 斤 ハ 木
梺 : 一 卜 木
梻 : ⺅ 廾 弓 木
梼 : ノ 寸 木 土 亠
棃 : ノ 勹 木 禾
棄 : 一 木 亠 凵 厶
棅 : ノ ヨ 木 禾 耒
棆 : ｜ 一 木 𠆢 冊
棈 : 二 亠 土 月 木 青
棉 : 巾 白 木
棊 : 一 甘 ハ 木
棋 : 甘 ハ 木
棌 : 木 爪
棍 : 日 比 木
棏 : 一 寸 日 木
棐 : 木 非
棑 : 木 非
棒 : ｜ 一 人 木 二 大
棓 : 口 木 立
棔 : 氏 日 木
棕 : 示 二 小 木 宀
棖 : 木 長
棗 : ｜ 一 巾 ハ 木 亠 冂
棘 : ｜ 巾 ハ 木 亠 冂
棙 : 一 丶 大 尸 戸 木 犬
棚 : 月 木
棜 : 丶 𠆢 方 木
棝 : 十 口 囗 木
棟 : ｜ 一 日 木 田
棠 : 口 ⺌ 木 冖
棡 : 并 木 冂 凵 山 岡
棣 : ヨ 水 木 隶
棤 : ｜ 二 日 木
棥 : 木 爻
棧 : 木 戈
棨 : 一 尸 戸 攵 木
棪 : 木 火
棫 : 一 口 戈 木
棬 : 一 ハ 并 卩 大 木
棭 : 丶 亠 ⺅ 夂 木
森 : 木
棯 : 心 木 𠆢
棰 : 一 ｜ ノ 二 日 木
棱 : 儿 ハ 土 夂 木
棲 : 女 木 ヨ 十
棵 : 木 田
棶 : 人 木
棷 : 又 木 耳
棹 : 十 日 卜 木
棺 : 口 木 宀
棻 : ハ 刀 ⺾ 木
棼 : ハ 刀 木
棽 : 丶 𠆢 木
椀 : 木 夕 卩 宀
椁 : 口 子 木 亠
椃 : 儿 匕 卜 厂 木 虍
椄 : 女 木 立
椅 : 口 大 木 一 亅
椆 : 冂 口 土 木
椇 : 一 ハ 木 目 貝
椈 : 米 木 勹
椉 : 亠 夕 木 舛
椊 : 亠 人 十 木
椋 : 口 小 木 亠
椌 : 穴 工 木
植 : 十 木 目
椎 : 木 隹
椏 : 一 二 木
椐 : 十 口 尸 木
椑 : ノ 十 日 木 白
椒 : 小 卜 又 木
椓 : 丶 木 豕
椖 : 一 丶 尸 戸 方 木
椗 : 宀 木 疋
椙 : 日 木
椚 : 木 門
椛 : ⺅ 木 匕 ⺾
検 : 口 人 木 𠆢
椡 : 刂 至 土 木 厶
椢 : 王 木 囗
椣 : ｜ 一 日 ハ 木
椥 : 口 木 矢
椦 : 大 二 并 木 力
椨 : ⺅ 寸 木 广
椪 : ｜ 一 并 木
椰 : 耳 ⻏ 木
椱 : 一 ノ 夂 日 曰 木
椳 : 木 田 衣
椴 : 木 殳 几 又
椵 : 一 ｜ 又 木
椶 : 木 儿 凵 夂
椸 : 一 ｜ ノ 乙 匕 也 方 木
椹 : 甘 木 儿 匚
椻 : 匚 女 日 木
椽 : ヨ 木 豕
椿 : 一 二 日 木 人
楂 : 一 日 木 目
楅 : 一 口 木 田
楆 : 女 木 西
楉 : 一 ノ 口 ⺾ 木
楊 : 一 日 木 勿
楎 : 冖 木 車
楓 : 風 木 冂 虫 ノ
楔 : 大 土 刀 木 亠
楕 : ノ 一 月 工 木
楗 : ｜ 二 廴 ヨ 木 聿
楙 : 矛 木
楚 : 疋 木
楛 : 十 口 ⺾ 木
楜 : 月 口 十 木
楝 : 巾 ハ 木 亠
楞 : 罒 方 木
楠 : 干 十 并 木 冂
楡 : 刂 月 木 𠆢
楢 : 酉 并 木
楣 : ｜ 尸 木 目
楤 : 丶 ノ 勹 心 木 勿
楥 : ノ 二 又 木 爪
楦 : 一 宀 日 曰 木
楨 : ハ 卜 木 目 貝
楩 : 一 丶 ノ ⺅ 日 木
楪 : 木 世
楫 : 口 耳 木
楬 : 人 勹 日 木
業 : ｜ 一 王 并 木 羊 耒
楮 : 日 木 ⺹
楯 : 斤 十 木 目 厂
楰 : 人 大 木 臼
楱 : 一 二 大 木
楲 : 一 ノ 厂 女 戈 木
楳 : 甘 木
楴 : 巾 并 木 立 亠 冖
極 : 口 又 木 一
楷 : 白 比 木
楸 : 火 禾 木
楹 : ノ 皿 又 木 乃
楺 : マ 木 矛
楻 : 日 木 王 白
楼 : 女 米 木
楽 : 白 木 冫
楾 : 水 白 木
楿 : ノ 日 木 禾 香
榀 : 口 木
榁 : 至 土 木 厶 宀
概 : 牙 艮 木
榊 : ｜ 日 木 礻 田
榍 : ⺌ 尸 月 木
榎 : 一 自 木 目 夂
榑 : 十 寸 田 木 丶
榒 : 丶 冫 弓 木
榔 : 艮 ⻏ 木
榕 : 穴 口 ハ 木 𠆢 宀
榖 : 一 冖 几 又 士 木 殳
榘 : 一 ノ 匚 大 木 矢 臣
榛 : 一 禾 人 二 木 人
榜 : 并 方 木 立 亠 冖
榠 : 日 ハ 木 亠 冖
榡 : 一 ｜ 二 小 幺 木 糸
榥 : 一 儿 ⺌ 日 木
榦 : 𠆢 十 口 日 木
榧 : 非 木 匚
榨 : 一 ｜ ノ 儿 ハ 宀 木
榫 : 十 木 隹
榭 : ノ 寸 木 目
榮 : 火 木 冖
榯 : 土 寸 日 木
榰 : ノ 匕 土 ⺹ 日 木
榱 : 衣 木 亠
榲 : 皿 日 木
榴 : 田 刀 木 厶
榷 : 冖 木 隹
榸 : 土 木 里
榺 : 一 ハ 并 大 月 木
榻 : 羽 日 木 冫
榼 : 厶 土 木 皿
榾 : 月 口 木 冖 骨
榿 : 口 山 豆 并 木
槀 : 亠 冂 口 木 高
槁 : 口 高 木 亠 冂
槃 : 舟 木 殳 几 又
槅 : 儿 冂 口 木 鬲
槇 : 木 貝 目 ハ ｜ 一
槈 : 厂 寸 木 衣 辰
槊 : 月 并 木 屮
構 : 木 冂 一 十
槌 : ｜ 口 辶 木
槍 : 口 木 𠆢
槎 : ノ 王 工 并 木 羊
槏 : 一 ｜ 丶 ノ ヨ 木
槐 : 鬼 田 木 儿 匕
槑 : 口 木
槓 : 貝 目 ハ 工 木
槖 : 冖 口 士 木 石
槗 : 一 ノ 冂 口 木
様 : 王 水 并 木 羊
槙 : 十 ハ 木 目
槝 : 山 鳥 木
槞 : 木 立 竜
槢 : ノ 冫 日 木 白 羽
槣 : 一 亅 口 大 宀 木
槥 : 一 ｜ ヨ 木
槧 : 斤 車 木
槨 : 口 子 ⻏ 木 亠
槩 : 木 牙 艮
槪 : 木 牙 艮
槫 : 十 寸 虫 日 木 厶
槭 : 小 卜 木 戈
槮 : 𠆢 厶 彡 木
槯 : 山 木 隹
槱 : 木 灬 酉
槲 : 角 斗 木
槳 : 丶 夕 寸 木 爿
槴 : 一 乙 口 尸 已 戸 木 巴
槵 : ｜ 口 心 木
槶 : 一 口 囗 戈 木
槹 : 十 斗 白 木
槻 : 見 人 大 木 一
槽 : ｜ 一 日 木
槾 : 又 日 木 罒
槿 : 土 二 木 ⺾
樀 : 亠 并 冂 十 口 木 立 滴
樁 : 一 丶 ノ 二 大 木 臼
樂 : 白 木 幺
樃 : 丶 厶 日 月 木
樅 : 并 疋 木 彳
樊 : 木 大 爻
樋 : 辶 木 用 マ
樌 : 貝 目 ハ 田 木
樏 : 小 幺 木 田 糸
樑 : 丶 ノ 刀 氵 木
樒 : ノ 山 心 木 丶 宀
樓 : ｜ 一 口 女 木
樔 : ⺌ 田 木
樕 : 人 勹 口 木 欠
樗 : 雨 木 二 勹
標 : 示 二 小 西 木
樚 : 匕 广 木 比 鹿
樛 : 羽 木 𠆢 冫 彡
樝 : 一 匕 卜 厂 木 目 虍
樞 : 口 木 匚 品
樟 : 音 十 日 木 立
樠 : 一 ｜ 入 冂 凵 木
模 : 大 日 木 ⺾
樢 : 鳥 木 灬
樣 : 王 水 并 木 羊 丶
樤 : 一 ｜ ⺅ 夂 小 木
樨 : ｜ 丶 ノ 冫 尸 木 牛
権 : 矢 木 隹
横 : ｜ 黄 田 二 日 ハ 木 廾
樫 : 臣 土 又 木
樮 : 火 西 木
樰 : 二 冖 ヨ 木 雨
樲 : 二 弋 木
樳 : 口 寸 工 ヨ 木
樴 : 亠 并 戈 日 木 立
樵 : 木 灬 隹
樶 : 耳 日 又 木
樷 : 又 木 耳
樸 : 二 并 木 羊
樹 : 口 寸 土 豆 并 木
樺 : ｜ 一 木 ⺾
樻 : 一 ｜ ハ 口 木 目 虫 貝
樽 : 寸 酉 并 木
樾 : 一 ｜ 十 土 戈 木 止 疋
樿 : 十 口 日 木 田
橄 : 耳 木 攵
橅 : 一 ｜ ノ 木 灬 無
橆 : 一 ノ 木 皿
橇 : 毛 木
橈 : 土 木 儿
橉 : 夕 木 米 舛
橊 : 一 ｜ 木 田
橋 : ノ 口 木 冂
橎 : ノ 木 田 米
橐 : 一 冖 口 木 石
橑 : 丶 ノ 大 小 日 木
橒 : 一 ｜ 二 冖 厶 木 雨
橕 : 冖 口 ⺌ 木 牙
橖 : 冖 口 ⺌ 木
橘 : 口 矛 木 儿 冂
橙 : 口 豆 并 木 癶
橛 : 一 人 并 勹 厂 屮 木 欠
機 : ノ 木 丶 幺 戈
橡 : 木 豕 勹 口 ｜
橢 : ノ 一 月 工 木 ⻖
橤 : 心 木
橦 : 木 里 立
橧 : ｜ 并 口 日 木
橪 : 丶 夕 大 木 灬 犬
橫 : 一 ｜ ハ 凵 日 木 田
橱 : 并 厂 口 寸 木 豆
橲 : 口 士 十 豆 并 木
橳 : 一 ハ 并 力 大 月 木
橸 : 日 木
橺 : 日 木 門
橾 : 口 木
橿 : 一 田 木
檀 : 一 口 日 木 亠
檁 : ノ 亠 口 囗 木 禾
檃 : 工 ヨ ⻖ 木 爪
檄 : 白 方 木 攵
檆 : 卜 口 木 火
檇 : ｜ 亅 木 隹
檉 : 口 木 王 耳
檋 : ｜ 丶 ノ 二 木 車
檍 : 音 心 日 木 立
檎 : 木 𠆢 亠 冂 厶 禸
檐 : 言 木 儿 厂
檑 : 一 ｜ 二 冖 木 田 雨
檔 : 亠 并 冖 口 ⺌ 木 田
檗 : 口 十 辛 木 立 尸
檛 : 冂 辶 口 木
檜 : 日 罒 木 𠆢
檝 : 口 戈 木 耳
檞 : ｜ 刀 勹 月 木 牛 角
檟 : ハ 木 目 西 貝
檠 : 口 木 勹 攵 ⺾
檡 : 一 并 十 土 干 木 罒
檢 : 口 人 木 𠆢
檣 : 口 人 土 木 囗
檥 : 并 戈 手 木 王
檪 : 白 木 冫
檫 : 丶 二 夕 宀 小 木 示
檬 : 木 冖 ⺾ 豕
檮 : 口 工 士 寸 木
檯 : 一 冖 厶 口 土 士 木 至
檰 : ｜ 冂 小 巾 幺 日 木 白 糸
檱 : ｜ 二 ハ 木 目 竹 貝
檳 : ノ 貝 目 ハ 小 木 宀
檴 : 又 ⺾ 木 隹
檸 : 一 心 罒 木 亅 宀
檻 : 皿 臣 二 木
檽 : 一 ｜ 二 冖 木 而 雨
檾 : 冖 木 火
檿 : 丶 厂 大 日 月 木 犬
櫁 : ノ 心 虫 木 丶 宀
櫂 : ヨ 木 隹
櫃 : 一 貝 目 ハ 木 匚
櫆 : 儿 匕 厶 斗 木 田 鬼
櫈 : 并 几 口 木 癶 豆
櫉 : 并 十 厂 口 士 寸 木 豆
櫌 : 一 冖 夂 心 木 目 自
櫐 : 木 田
櫑 : 田 木
櫓 : 魚 田 日 木 灬
櫔 : ｜ 冂 厂 厶 ⺾ 日 木 田 禸
櫕 : 一 ハ 木 目 貝
櫖 : 匕 卜 厂 心 木 田 虍
櫚 : 口 木 門
櫛 : 艮 竹 木 卩
櫜 : 一 ｜ 冖 卜 口 夂 木
櫝 : 儿 ハ 口 士 木 目 罒 貝
櫞 : ヨ 糸 幺 小 木 豕
櫟 : 白 木 幺
櫤 : 一 丶 并 冂 刂 月 木 竹
櫧 : ノ 土 ⺹ 日 木 言
櫨 : 皿 田 卜 木 匕 厂 虍
櫪 : 止 木 厂
櫬 : 一 儿 小 木 目 立 見
櫰 : ｜ 丶 ノ 亠 冫 木 罒 衣
櫱 : ｜ ノ 十 口 屮 木 立 辛
櫲 : ノ 亅 勹 マ 口 木 矛 豕
櫳 : 乙 日 月 木 立 音
櫺 : 雨 口 木
櫻 : 貝 目 ハ 女 木
櫼 : 一 人 戈 木 非
櫽 : 工 ヨ ⻖ 心 木 爪
欂 : 丶 十 寸 氵 ⺾ 日 木 田
欃 : 一 ｜ 丶 儿 勹 匕 口 木 比 免
欄 : ｜ 一 日 木 門 田
欅 : ⺌ 并 木 扌
欆 : 又 木 隹
欇 : 木 耳
欉 : 一 ｜ 丶 ノ 并 又 木 王 耳
權 : 口 十 木 ⺾ 隹
欋 : 木 目 隹
欏 : 小 幺 木 罒 糸 隹
欐 : 一 丶 冂 匕 广 木 比 鹿
欑 : ノ 儿 ハ 土 木 目 貝
欒 : 言 糸 幺 小 木
欖 : 見 臣 二 木
欗 : 并 口 ⺾ 木 門
欛 : 一 ｜ 二 冖 十 口 廾 月 木 雨 革
欝 : 艮 寸 罒 木
欞 : 一 ｜ 二 人 冖 口 工 雨
欟 : 見 口 十 木 ⺾ 隹
欠 : 欠 勹 人
次 : 欠 冫
欣 : 斤 欠
欤 : 一 亅 人 勹 卜 欠
欧 : 欠 匚 ノ 丶
欨 : 人 勹 口 欠
欫 : ノ 二 人 勹 欠 止
欬 : ノ 亠 人 勹 幺 欠 玄
欯 : 人 勹 口 士 欠
欲 : 欠 口 谷 ハ 𠆢
欵 : 一 ノ 人 勹 匕 大 欠 矢
欶 : 人 勹 口 木 欠
欷 : ノ 一 巾 欠
欸 : 欠 矢 厶
欹 : 欠 口 大 亅 一
欺 : 甘 欠 ハ
欻 : 人 勹 欠 火
欽 : 金 欠
款 : 欠 士 示 二 小
欿 : 人 勹 欠 臼
歃 : ノ 臼 欠 十
歆 : 人 勹 日 欠 立 音
歇 : 欠 日 勹 匕
歉 : ｜ ヨ 欠 并
歊 : 亠 人 冂 勹 口 欠 高
歌 : 欠 口 亅
歍 : 人 勹 欠 灬 鳥
歎 : 大 一 欠 ⺾ 口
歐 : 欠 口 匚 品
歒 : 亠 人 并 冂 勹 十 口 欠 立 滴
歓 : 欠 隹 矢
歔 : 欠 并 卜 匕 厂 虍
歖 : 一 人 并 勹 十 口 士 欠 豆
歘 : 人 勹 欠 火
歙 : 羽 欠 口 𠆢 冫
歛 : 欠 口 人 𠆢
歝 : 一 人 并 勹 十 土 干 欠 罒
歟 : 一 臼 欠 ハ
歠 : 人 勹 又 欠 酉
歡 : 欠 口 十 ⺾ 隹
止 : 止
正 : 一 止
此 : 止 匕
步 : ノ 亅 小 止
武 : 止 弋
歧 : 十 又 支 止
歩 : ノ 止 小
歪 : ｜ ノ 一 止 丶
歫 : 匚 口 止
歬 : 一 ｜ 丶 冂 止 舟
歮 : 止
歯 : 止 歯 米 凵
歰 : ノ 刀 止
歳 : ノ 止 小 戈
歴 : 止 麻 木 厂 广
歵 : 一 ｜ 二 ハ 止 目 貝
歷 : ノ 厂 木 止 禾
歸 : ヨ 巾 口 止 冖
歹 : 歹
歺 : 卜 夕
死 : 一 夕 匕 歹
歽 : 斤 歹
歾 : ノ 勹 歹 勿
歿 : 又 歹 勹
殀 : ノ 大 歹
殁 : 几 又 歹 殳
殂 : 一 歹 目
殃 : 人 大 冂 歹
殄 : 𠆢 彡 歹
殅 : 歹 生
殆 : 口 厶 歹
殉 : 日 勹 歹
殊 : ｜ ノ 牛 二 ハ 木 歹
残 : ノ 毛 丶 歹
殍 : 子 爪 歹
殕 : 口 立 歹
殖 : 十 目 歹
殗 : 乙 大 日 歹 奄
殘 : 戈 歹
殛 : 一 亅 又 口 歹
殞 : 貝 目 ハ 口 歹
殟 : 日 曰 歹 皿
殠 : 丶 大 歹 犬 目 自
殢 : 一 ｜ ノ 乙 冂 冖 巾 廾 歹
殣 : 二 十 口 廾 歹 革
殤 : ノ 一 日 勿 歹
殨 : 一 ｜ ハ 口 歹 目 虫 貝
殩 : 卜 又 夕 歹 米
殪 : 口 士 豆 并 冖 歹
殫 : 口 十 田 歹
殬 : 一 并 十 土 干 歹 罒
殭 : 一 歹 田
殮 : 一 人 𠆢 口 歹
殯 : ノ 貝 目 ハ 小 宀 歹
殰 : 儿 ハ 口 士 歹 目 罒 貝
殱 : 土 戈 歹 韭
殲 : 人 戈 歹 韭
殳 : 殳 几 又
殴 : ノ 丶 匚 殳 几 又
段 : ｜ 殳 几 又
殷 : 厂 殳 几 又
殸 : ｜ 几 又 士 尸 殳
殹 : 一 ノ 几 匚 又 大 殳 矢
殺 : 木 殳 ノ 丶 几 又
殻 : 士 冖 殳 几 又
殼 : 土 儿 冖 殳 几 又
殽 : 一 丶 ノ 几 又 月 殳
殾 : 丶 ノ 几 又 土 ⺹ 日 殳
殿 : ｜ 一 二 ハ 尸 殳 几 又
毀 : 臼 土 殳 几 又
毃 : 亠 冂 几 又 口 殳 高
毄 : 几 又 口 殳 車
毅 : 立 亠 殳 豕 几 又
毆 : 口 匚 殳 品 几 又
毇 : 几 又 殳 米 臼
毈 : ｜ 丶 几 卩 又 殳
毉 : 一 ノ 人 几 匚 又 大 工 殳 矢
毋 : 母 毋
毌 : 一 日 田
母 : 母 毋
毎 : 母 毋
每 : 一 ノ 毋 母
毒 : 土 母 亠 毋
毓 : 川 母 亠 厶 毋
比 : 比
毖 : ノ 匕 心 比
毗 : 匕 比 田
毘 : 田 比
毚 : 一 ｜ 儿 勹 匕 口 比 免
毛 : 毛
毟 : ノ 小 毛
毡 : ノ 乙 二 卜 口
毣 : ノ 乙 二 冫 羽
毦 : ノ 乙 二 耳
毧 : 一 ノ 乙 二 戈
毫 : 口 毛 亠 冖
毬 : 水 毛 丶 亠
毮 : ノ 乙 二 小 扌
毯 : 火 毛
毱 : ノ 乙 二 勹 米
毳 : 毛
毷 : ノ 乙 二 冂 目
毹 : 一 ノ 乙 二 𠆢 刂 月
毿 : ノ 乙 二 𠆢 厶 彡
氂 : 一 ノ 乙 二 厂 攵 木
氄 : ノ 乙 二 儿 ハ 冂 マ 口 矛
氅 : ノ 乙 二 冂 口 ⺌ 攵
氈 : 口 毛 目 亠 囗
氉 : ノ 乙 二 口 木
氊 : 一 ノ 乙 二 亠 口 囗 日
氍 : ノ 乙 二 目 隹
氎 : ノ 乙 二 夕 宀 田
氏 : 氏
氐 : 一 丶 氏
民 : 口 氏
氒 : ノ 十 氏
氓 : 亡 口 氏
气 : 气
気 : 气 丶 ノ
氙 : 山 气
氛 : 刀 ハ 气
氟 : 廾 弓 气
氣 : 米 气
氤 : 大 囗 气
氦 : ノ 亠 幺 气 玄
氧 : 并 气 王 羊
氨 : 女 宀 气
氬 : ｜ 二 气
氮 : 气 火
氳 : 人 口 气 皿
水 : 水
氵 : 氵
氶 : 一 水
氷 : 水 丶
永 : 水 丶
氺 : 水
氻 : 力 氵
氾 : 乙 氵 卩
氿 : 九 氵
汀 : 一 氵 亅
汁 : 十 氵
求 : 一 水 丶
汊 : 丶 又 氵
汋 : 丶 勹 氵
汍 : 丶 九 氵
汎 : 氵 丶 几
汏 : 大 氵
汐 : 氵 夕
汒 : 亠 氵 亡
汔 : 一 ノ 乙 氵
汕 : 山 氵
汗 : 干 氵
汙 : 亅 二 氵
汚 : 一 氵
汛 : 一 ノ 乙 十 氵
汜 : 已 氵
汝 : 氵 女
汞 : 工 水
江 : 工 氵
池 : 氵 也
汢 : 氵 土
汧 : 一 ｜ ノ 廾 氵
汨 : 氵 日
汪 : 王 氵
汫 : 一 ｜ ノ 二 廾 氵
汭 : 人 入 冂 氵
汯 : 一 ノ 厶 氵
汰 : 氵 大 丶
汲 : ノ 氵 及
汳 : 氵 又 厂
汴 : 一 丶 亠 卜 氵
汶 : 氵 文
汸 : 氵 方
汹 : 丶 ノ 凵 氵
決 : 氵 人 大 二
汻 : 一 ノ 十 干 氵
汽 : 氵 气
汾 : 氵 刀 ハ
沁 : 氵 心
沂 : 斤 氵
沃 : ノ 氵 大
沄 : 二 厶 氵
沅 : 二 儿 氵 元
沆 : 亠 几 氵
沇 : 儿 厶 氵
沈 : 氵 尢
沉 : 冖 几 氵
沌 : 氵 屯
沍 : ヨ 一 氵 彑
沐 : 氵 木
沒 : 氵 又 力
沓 : 水 日
沔 : 一 ｜ 亅 氵
沕 : ノ 勹 氵 勿
沖 : ｜ 氵 口
沗 : 一 大 水
沘 : 匕 氵 比
沙 : ノ 氵 小
沚 : 止 氵
沛 : 巾 氵 亠
沜 : 氵 片
沟 : 勹 厶 氵
没 : 氵 殳 几 又
沢 : 氵 尸
沪 : 一 尸 氵 戸
沫 : ｜ 氵 二 ハ 木 亠
沭 : 一 ｜ 丶 儿 十 氵
沮 : 氵 目
沰 : 口 氵 石
沱 : 氵 匕 宀
沲 : 一 ｜ ノ 乙 匕 氵 也
河 : 口 氵 亅 一
沴 : 𠆢 彡 氵
沸 : ｜ ノ 弓 氵
油 : ｜ 氵 日 田
沺 : 氵 田
治 : 口 氵 厶
沼 : 口 氵 刀
沽 : 口 十 氵
沾 : 口 氵 卜
沿 : 口 氵 ハ
況 : 口 氵 儿
泂 : 冂 口 氵
泄 : 氵 世
泅 : 氵 人 囗
泆 : 一 ノ 大 氵
泉 : 水 白
泊 : 氵 白
泌 : ノ 氵 心 丶
泍 : 一 氵 木
泏 : ｜ 凵 山 氵
泐 : 力 氵 ⻖
泑 : 力 幺 氵
泒 : 厶 氵 瓜
泓 : 弓 氵 厶
泔 : 氵 甘
法 : 氵 土 厶
泖 : ノ 卩 氵
泗 : 氵 儿 囗
泙 : 干 氵 ハ
泚 : 匕 氵 止
泛 : ノ 乙 氵 亠
泜 : 一 丶 氵 氏
泝 : 斤 氵 丶
泠 : ｜ 丶 亅 𠆢 マ 氵
泡 : 氵 勹 已
波 : 氵 皮 又
泣 : 氵 立
泥 : 氵 匕 尸
泧 : ｜ 氵 戈
注 : 王 氵 丶
泩 : 氵 生
泪 : 氵 目
泫 : 亠 幺 氵 玄
泬 : ハ 宀 氵
泭 : ⺅ 寸 氵
泮 : ｜ 二 ハ 并 氵
泯 : 口 氏 氵
泰 : ｜ 一 水 二 人
泱 : 氵 人 大 冂
泲 : ノ 亅 氵
泳 : 氵 水 丶
泴 : 水 皿
泻 : 一 冖 勹 氵
洀 : 一 ｜ 丶 冂 氵 舟
洄 : 口 囗 氵
洇 : 口 大 氵
洊 : 一 ｜ ノ 子 氵
洋 : 王 氵 并 羊
洌 : 刂 氵 歹
洎 : 氵 目 自
洏 : 氵 而
洑 : 丶 ⺅ 大 氵 犬
洒 : 氵 西
洓 : 冂 氵 木
洗 : ノ 氵 土 儿
洙 : ｜ ノ 牛 氵 土 二 ハ 木
洚 : ｜ 夂 氵
洛 : 口 氵 夂
洞 : 口 氵 冂 一
洟 : 弓 氵 人 大
洤 : 入 氵 王
津 : 氵 聿
洦 : 一 氵 日 白
洧 : 一 ノ 氵 月
洨 : 亠 氵 父
洩 : ノ 乙 氵 日
洪 : ｜ 一 氵 二 ハ
洫 : 血 皿 氵
洮 : 丶 ノ 儿 冫 氵
洯 : 一 ｜ 二 刀 彡 水
洱 : 氵 耳
洲 : ｜ 氵 川 丶
洳 : 口 氵 女
洴 : 一 十 干 氵
洵 : 氵 日 勹
洶 : 氵 凵 勹
洸 : 氵 ⺌ 儿
洹 : 一 氵 日
活 : ノ 口 十 氵 舌
洼 : 土 氵
洽 : 口 氵 𠆢
派 : 斤 氵 厂
洿 : 二 勹 大 氵
流 : 氵 川 亠 厶
浄 : 氵 亅 勹 ヨ
浅 : ノ 氵 毛 丶
浗 : 一 丶 氵 水
浘 : 尸 氵 毛
浙 : 斤 氵 扌
浚 : 氵 ハ 厶 夂
浛 : 一 𠆢 口 氵
浜 : 斤 氵 ハ 一
浞 : 口 氵 足
浟 : ｜ ⺅ 氵 攵
浠 : 一 ｜ 丶 ノ 冂 巾 氵
浡 : 冖 十 子 氵
浣 : 氵 二 儿 宀
浤 : ノ 一 氵 厶 宀
浥 : 乙 口 已 氵 ⻏ 巴
浦 : 十 氵 用 丶
浧 : 口 氵 王
浩 : ノ 口 氵 土
浪 : 艮 氵
浬 : 氵 里 田 土
浮 : 子 氵 爪
浯 : 一 二 口 氵 五
浰 : ノ 刂 氵 木 禾
浴 : 口 氵 谷 ハ 𠆢
海 : 氵 母 毋
浸 : ヨ 氵 又 冖
浹 : 氵 人 大
浼 : 一 ｜ 儿 勹 口 氵 免
涀 : 儿 氵 目 見
涁 : 彡 氵 木
涂 : 二 𠆢 小 氵 示
涅 : 氵 土 日
涇 : 一 巛 工 氵
消 : 月 氵 ⺌
涉 : ノ 小 氵 止
涊 : ノ 刀 氵 心
涌 : 氵 用 マ
涍 : ノ 土 子 氵 ⺹
涎 : ノ 止 氵 廴
涑 : 口 氵 木
涒 : ノ 口 ヨ 氵
涓 : 月 口 氵
涔 : 一 丶 𠆢 山 氵
涕 : ｜ ノ 弓 氵 并
涖 : ⺅ 氵 立
涗 : 儿 ハ 口 氵
涘 : 一 ノ 厶 大 氵 矢
涙 : 戸 氵 大 一 尸
涛 : ノ 氵 寸 土 亠
涜 : 士 氵 儿 冖
涪 : 口 氵 立
涫 : ｜ 口 宀 氵
涬 : 一 并 十 土 干 氵
涮 : ｜ 冂 刂 尸 巾 氵
涯 : 氵 土 厂
液 : ⺅ 氵 亠 攵 夕
涴 : 卩 夕 宀 氵
涵 : 一 氵 水 凵
涷 : 氵 日 木
涸 : 口 十 氵 囗
涹 : ノ 女 氵 木 禾
涼 : 口 氵 小 亠
涽 : 氵 日 曰 氏
涿 : 丶 氵 豕
淀 : 氵 疋 宀
淂 : 一 寸 氵 日
淄 : 巛 氵 田
淅 : 斤 氵 木
淆 : ノ 一 月 氵
淇 : 甘 氵 ハ
淈 : ｜ 凵 尸 山 氵
淊 : 勹 氵 臼
淋 : 氵 木
淌 : 口 氵 ⺌ 冂
淎 : 一 ｜ 二 大 氵
淏 : 一 大 氵 日
淐 : 氵 日
淑 : 氵 小 卜 又
淒 : ｜ ヨ 一 氵 女
淕 : 氵 土 儿
淖 : 十 卜 氵 日
淘 : 缶 氵 凵 勹
淙 : 示 二 小 氵 宀
淚 : 一 丶 大 尸 氵 戸 犬
淛 : ｜ 冂 刂 巾 氵 牛
淝 : 乙 已 氵 月 巴
淞 : 氵 ハ 木 厶
淟 : 一 ｜ ハ 氵 日
淠 : 一 ｜ ノ 廾 氵 田
淡 : 火 氵
淢 : 一 口 氵 戈
淤 : 氵 方 𠆢 冫
淥 : ヨ 彑 氵 水
淦 : 金 氵
淨 : ヨ 氵 爪 亅
淩 : 儿 ハ 土 夂 氵
淪 : ｜ 一 氵 𠆢 冊
淫 : ノ 士 氵 爪 王
淬 : 十 氵 人 亠
淮 : 氵 隹
淯 : 亠 厶 氵 月
淰 : 一 丶 𠆢 氵 心
深 : 氵 木 儿 冖
淳 : 口 子 氵 亠
淴 : ノ 勹 氵 心 勿
淵 : ｜ 一 氵
淶 : 人 氵 木
混 : 氵 日 比
淹 : 乙 氵 大 日 奄
淺 : 氵 戈
添 : ノ 氵 心 大
淼 : 水
渀 : 十 大 廾 氵
渄 : 氵 非
清 : 月 氵 青 土 二 亠
渇 : 氵 日 勹 匕
済 : ｜ ノ 氵 文 廾 斉
渉 : ノ 止 氵 小
渊 : ｜ ノ 氵 米
渋 : 止 氵 冫
渓 : 氵 人 爪 土
渕 : 刂 氵 人 大 二 并
渗 : 厶 大 彡 氵
渙 : 氵 大 儿 冂
渚 : 氵 日 ⺹
減 : 口 氵 亅 戈
渝 : 刂 月 氵 𠆢
渞 : 并 氵 目 自 首
渟 : 口 氵 亅 亠 冖
渠 : 氵 木 匚 巨
渡 : 氵 又 广
渢 : ノ 冂 氵 虫 風
渣 : 氵 木 目
渤 : 子 十 氵 力 冖
渥 : 至 氵 土 厶 尸
渦 : ｜ 口 氵 冂
渧 : ｜ 亠 并 冂 冖 巾 氵 立
温 : 皿 氵 日
渫 : 氵 木 世
測 : 貝 目 ハ 刂 氵
渭 : 月 氵 田
渮 : 口 氵 亅 ⺾
港 : 氵 ハ 已 井
渲 : 一 宀 氵 日
渴 : 人 勹 氵 日
渶 : 口 大 氵 ⺾
游 : 子 氵 方
渹 : 勹 氵 言
渺 : ノ 氵 小 目
渻 : ノ 小 氵 目
渼 : 并 大 氵 王
渾 : 車 氵 冖
湃 : 干 氵 扌
湄 : ｜ 尸 氵 目
湅 : 并 口 氵 木
湈 : 氵 木 甘
湉 : 口 忄 氵 舌
湊 : 一 氵 大 二 人
湋 : 口 氵 韋
湌 : 一 氵 食
湍 : 山 而 氵
湎 : 一 氵 面 囗
湏 : ハ 氵 目 貝 頁
湑 : 氵 月 疋
湒 : 口 氵 耳
湓 : ハ 刀 氵 皿
湔 : 一 并 刂 氵 月
湖 : 月 口 十 氵
湗 : 土 寸 氵
湘 : 氵 木 目
湛 : ｜ 一 甘 氵 儿 匚
湜 : 氵 日 疋
湝 : 匕 氵 日 比 白
湞 : ハ 卜 氵 目 貝
湟 : 王 氵 白
湢 : 一 口 氵 田
湣 : 尸 氵 日 氏
湧 : 氵 田 力 マ
湨 : 氵 木 目
湫 : 火 禾 氵
湮 : 氵 西 土
湯 : ｜ 一 氵 日 勿
湲 : ノ 一 氵 爪 二 又
湳 : 一 并 冂 十 干 氵
湶 : 氵 水 白
湻 : 亠 口 氵 日
湽 : 一 巛 氵 田
湾 : 弓 氵 亠
湿 : ｜ 氵 日
満 : ｜ 一 氵 二 冂 山
溂 : ｜ 刂 口 氵 ハ 木
溌 : 二 氵 儿 癶
溍 : ｜ 二 氵 日 曰
溏 : ｜ ヨ 口 氵 广
源 : 氵 小 白 厂
溓 : 一 ｜ 丶 ノ 并 ヨ 氵
準 : 十 氵 隹
溘 : 皿 氵 土 厶
溙 : 一 二 大 氵 水
溜 : 氵 刀 厶 田
溝 : 氵 冂 一 十
溟 : 氵 日 ハ 亠 冖
溠 : 一 ノ 二 并 工 氵
溢 : 皿 氵 ⺌ ハ 并
溥 : 十 氵 寸 田 丶
溧 : 氵 木 西
溪 : 氵 大 爪 幺
溫 : 人 囗 氵 皿
溭 : ハ 夂 氵 田
溮 : 一 ｜ ノ 冂 口 巾 氵
溯 : 月 氵 并 屮
溱 : 一 ノ 二 大 氵 木 禾
溲 : 支 氵 日 又 十
溳 : ハ 口 氵 目 貝
溴 : 丶 大 氵 犬 目 自
溶 : 穴 口 氵 谷 ハ 𠆢 宀
溷 : 氵 囗 豕
溺 : 弓 氵 冫
溻 : 丶 冫 氵 日 曰 羽
溽 : 氵 寸 辰
溿 : ｜ 二 ハ 并 氵 田
滀 : 亠 幺 氵 玄 田
滁 : 一 𠆢 小 氵 ⻖
滂 : 氵 并 方 立 亠 冖
滃 : 丶 ノ ハ 冫 厶 氵 羽
滄 : 戸 口 氵 𠆢 一 尸
滅 : ノ 火 氵 戈
滇 : 一 ハ 匕 十 氵 目
滈 : 亠 冂 口 氵 高
滉 : 氵 ⺌ 日 儿
滊 : 氵 气 米
滋 : 一 氵 并 幺
滌 : ⺅ 氵 木 攵
滍 : 一 ｜ 凵 氵 虫
滎 : 冖 水 火
滏 : 并 氵 父 王
滑 : 月 骨 氵 冂 冖
滓 : 十 氵 辛 立 宀
滔 : 臼 氵 爪
滕 : 月 人 水 大 二 并
滙 : 匚 氵 隹
滝 : 氵 田 立 竜
滞 : 巾 氵 冖
滫 : ｜ ⺅ 夂 氵 攵 月
滬 : 戸 口 氵 巴 一 尸
滭 : ｜ 二 十 口 氵 ⺾ 里
滮 : 几 匕 卜 厂 彡 氵 虍
滯 : 一 巾 氵 儿 冖 凵
滲 : 氵 大 厶 彡
滴 : 口 十 氵 并 立 亠 冂 滴
滷 : 十 氵 卜 囗 鹵
滸 : 干 言 氵
滹 : 一 丶 ノ 亅 并 匕 卜 厂 氵 虍
滻 : 丶 ノ 亠 并 厂 氵 生
滽 : ｜ 二 冂 广 ヨ 氵 聿
滾 : 衣 口 氵 ハ 亠
滿 : 一 氵 人 入 冂 凵
漁 : 魚 氵 田 灬
漂 : 示 二 小 氵 西
漄 : 厂 土 山 氵
漆 : 氵 水 木 𠆢
漈 : 丶 二 夕 小 氵 示
漉 : 鹿 氵 比 广
漊 : 一 ｜ 口 女 氵 日
漌 : 二 十 口 廾 氵 革
漍 : 一 口 囗 氵 戈
漏 : 雨 氵 尸
漐 : 一 丶 并 十 九 土 干 水
漑 : 艮 氵 无
漓 : 氵 亠 凵 禸
演 : 氵 田 ハ 宀
漕 : ｜ 一 氵 日
漖 : ノ 土 子 氵 ⺹ 攵
漘 : 亠 厂 氵 月 衣 辰
漚 : 匚 口 氵
漛 : 一 丶 ノ 并 大 氵 水
漠 : 氵 大 日 ⺾
漢 : 氵 ⺾ 口 一 大
漣 : 辶 車 氵
漥 : ハ 土 宀 氵 穴
漦 : 一 厂 攵 木 水
漩 : 一 ノ 氵 方 疋
漪 : 亅 口 大 氵 犭
漫 : 氵 日 罒 又
漬 : 貝 目 ハ 氵 土 亠
漭 : 丶 大 廾 氵 ⺾ 犬
漯 : 小 幺 氵 田 糸
漰 : 丶 冂 山 氵 月
漱 : 欠 口 氵 木
漲 : 弓 氵 長
漳 : 十 氵 日 立 音
漵 : 亅 二 𠆢 ハ 小 氵 攵
漶 : ｜ 口 氵 心
漸 : 斤 車 氵
漻 : 𠆢 冫 彡 氵 羽
漼 : 山 氵 隹
漾 : 王 氵 水 并 羊 丶
漿 : 水 寸 夕 爿
潁 : 貝 目 ハ 水 頁 匕
潅 : 氵 隹 矢
潏 : ハ 冂 マ 口 氵 矛
潑 : 丶 ノ 几 又 弓 氵 殳
潒 : ｜ ノ 勹 口 氵 豕
潓 : 一 十 厶 氵 心 日 田 虫
潔 : 糸 幺 小 氵 土 刀 亠
潗 : 氵 木 隹
潘 : 氵 田 釆 米
潙 : ノ 亅 氵 灬 爪
潚 : ｜ ヨ 氵 爿 片
潛 : 氵 日 无
潜 : 氵 人 土 日
潝 : 一 𠆢 冫 口 氵 羽
潞 : 口 夂 氵 止 足
潟 : 臼 氵 勹 灬
潠 : ｜ 二 ハ 已 氵
潡 : 亠 口 子 氵 攵
潢 : ハ 氵 田 黄
潤 : 王 氵 門
潦 : 氵 小 大 日 并 亠
潨 : ｜ 丶 ノ 氵 皿 罒
潬 : 十 口 氵 日 田
潭 : 十 氵 西 日 曰
潮 : 月 十 氵 日
潯 : ヨ 口 工 氵 寸
潰 : 貝 目 ハ 氵 十 口
潴 : 氵 日 犭 ⺹
潸 : 月 氵 木
潺 : 子 氵 尸
潼 : 氵 里 立
潽 : ｜ 二 并 氵 日
潾 : 夕 氵 米 舛
澀 : 止 氵 刀 丶
澁 : 止 氵
澂 : 王 山 氵 攵
澃 : ハ 彡 水 目 貝 頁
澄 : 口 氵 豆 并 癶
澆 : 氵 土 儿
澇 : 冖 力 氵 火
澈 : 亠 厶 氵 攵 月
澋 : 亠 口 小 氵 日
澌 : ｜ 二 ハ 氵 斤 甘
澍 : 一 并 十 口 士 寸 氵 豆
澎 : 口 十 氵 土 豆 并 彡
澐 : 一 ｜ 二 冖 厶 氵 雨
澑 : ｜ 一 氵 田
澒 : ハ 工 氵 目 貝 頁
澓 : 一 ノ 夂 彳 氵 日 曰
澔 : ｜ ノ 二 口 土 氵 日 牛 白
澖 : 氵 木 門
澗 : 氵 日 門
澘 : 氵 日 木
澚 : 一 ノ 冂 勹 氵 米
澟 : ノ 亠 口 囗 氵 木 禾
澠 : 氵 黽
澡 : 口 氵 木
澣 : 干 十 氵 日 𠆢
澤 : 十 氵 辛 土 罒 立 亠
澥 : ｜ 刀 勹 氵 月 牛 角
澦 : 一 亅 ハ マ 氵 目 矛 貝 頁
澧 : ｜ 并 口 氵 日 豆
澨 : 人 工 氵 竹
澪 : 雨 氵 𠆢 卩
澮 : 一 ｜ 𠆢 并 口 氵 日
澯 : 卜 又 夕 氵 米
澰 : 一 人 𠆢 口 氵
澱 : ｜ 一 氵 二 ハ 尸 殳 几 又
澳 : 氵 大 米 冂
澵 : 一 小 氵 斤 木 立
澶 : 一 亠 口 囗 氵 日
澹 : 言 氵 儿 厂
澼 : 十 口 尸 氵 立 辛
澾 : 并 辶 土 氵 王 羊
激 : 氵 白 方 攵
濁 : 氵 虫 罒 勹
濂 : ｜ ヨ 氵 ハ 广
濃 : ｜ 衣 一 氵 辰 日 厂
濅 : ｜ 冂 冖 又 宀 巾 ヨ 氵
濆 : 貝 目 ハ 十 氵 ⺾
濇 : 人 口 囗 土 氵
濈 : 口 氵 戈 耳
濉 : 氵 目 隹
濊 : ノ 厂 小 氵 戈 止
濔 : ｜ 一 氵 ハ 冂 爻
濕 : 氵 日 幺 灬
濘 : 氵 心 罒 亅 宀
濚 : 冖 氵 木 火
濛 : 氵 冖 ⺾ 豕
濞 : 廾 氵 田 目 自 鼻
濟 : 氵 亠 齊 刀 氏 廾
濠 : 口 氵 亠 冖 豕
濡 : 雨 而 氵
濤 : 口 工 士 氵 寸
濨 : 一 并 幺 氵 心
濩 : 又 氵 ⺾ 隹
濫 : ノ 皿 氵 臣 二
濬 : 氵 ハ 卜 目 𠆢 冖
濮 : 王 ⺅ 氵 大 并 羊
濯 : ヨ 氵 隹
濰 : 小 幺 氵 糸 隹
濱 : ノ 貝 目 ハ 氵 小 宀
濳 : 氵 土 日 儿
濵 : ｜ ハ 宀 尸 氵 目 貝
濶 : 口 氵 舌 門
濹 : ｜ 二 并 口 土 氵 灬 里 黒
濺 : 貝 目 ハ 氵 戈
濼 : 幺 氵 日 木 白
濽 : 一 ハ 大 氵 目 貝
濾 : 氵 田 心 厂 卜
瀀 : 一 冖 夂 氵 心 目 自
瀁 : 王 氵 食 并 羊
瀅 : 丶 冖 氵 火 王
瀆 : 儿 ハ 口 士 氵 目 罒 貝
瀇 : ハ 广 氵 田 黄
瀉 : 臼 氵 勹 宀 灬
瀊 : 一 ｜ 丶 冂 几 又 氵 殳 皿 舟
瀋 : 氵 田 釆 米 宀
瀍 : 儿 ハ 土 广 氵 里
瀏 : 刂 金 氵
瀑 : ｜ 一 氵 水 二 日 ハ
瀕 : ノ 貝 目 ハ 止 氵 小 頁
瀗 : 一 ｜ 二 宀 氵 心 罒
瀘 : 皿 氵 田 卜 匕 厂 虍
瀚 : 羽 十 氵 日 𠆢 冫
瀛 : 亡 月 口 氵 女 丶 几
瀝 : 止 氵 木 厂
瀞 : 月 氵 青 土 亅 亠 ヨ
瀟 : ｜ ノ ヨ 氵 水 ⺾
瀠 : 冖 小 幺 氵 水 糸
瀣 : 一 卜 又 夕 氵 非
瀦 : 氵 日 ⺹ 豕
瀧 : 月 氵 立
瀨 : ハ 刀 口 氵 木 目 貝
瀬 : ｜ 貝 目 ハ 氵 頁
瀯 : 冖 口 氵 火
瀰 : ｜ 一 弓 氵 ハ 冂 爻
瀲 : 口 氵 人 𠆢 攵
瀴 : ハ 女 氵 目 貝
瀷 : ｜ 二 ハ 冫 氵 田 羽
瀹 : 一 ｜ 亅 𠆢 冂 口 廾 氵 冊 龠
瀺 : 一 ｜ 儿 勹 匕 口 氵 比 免
瀼 : 一 ｜ 二 亠 口 氵 衣
瀾 : ｜ 氵 田 日 木 門
灃 : 一 ｜ 并 口 山 氵 豆
灄 : 氵 耳
灇 : 一 ｜ 并 又 氵 王 羊 耳
灈 : 氵 目 隹
灉 : 乙 口 巛 已 氵 ⻏ 巴 隹
灊 : 一 ｜ 儿 并 冂 口 氵 无 鬲
灋 : 一 ｜ 亅 厶 土 广 氵 灬
灌 : 口 十 氵 ⺾ 隹
灎 : ｜ 并 厶 口 土 氵 日 皿 豆
灑 : 鹿 氵 比 冂 广
灔 : ｜ 乙 并 勹 口 已 氵 日 巴 色 豆
灕 : 丶 ノ 亠 冂 凵 厶 氵 禸 隹
灘 : 氵 大 口 ⺾ 隹 亠
灝 : 亠 ハ 口 小 氵 日 目 貝 頁
灞 : 一 ｜ 二 冖 十 口 廾 氵 月 雨 革
灣 : 弓 言 糸 幺 小 氵
灤 : 小 幺 氵 木 糸 言
灥 : 日 水 白
灩 : 一 ｜ 并 厶 口 土 山 氵 皿 豆
火 : 火
灬 : 灬
灮 : 儿 火
灯 : 一 火 亅
灰 : 火 厂
灵 : ヨ 火
灶 : 土 火
灸 : 久 火
灼 : 火 丶 勹
災 : 火 巛
灾 : 宀 火
炁 : 无 灬
炅 : 日 火
炆 : 文 火
炉 : 火 戸 一 尸
炊 : 火 欠
炎 : 火
炒 : ノ 火 小
炔 : 人 ユ 火
炕 : 亠 几 火
炖 : ノ 乙 凵 火 屯
炗 : 一 凵 火
炘 : 斤 火
炙 : 火 夕 丶
炛 : ノ 乙 ⺅ 匕 火
炟 : 一 日 火
炤 : 刀 口 火
炫 : 亠 幺 火 玄
炬 : 火 匚 巨
炭 : 火 山 厂
炮 : 火 勹 已
炯 : 火 口 冂
炰 : 勹 已 灬
炱 : 厶 口 火
炳 : 一 火 人 冂
炴 : 口 大 火
炷 : 丶 亠 土 火 王
炸 : ｜ ノ 火
点 : 口 卜 灬
為 : ノ 灬
炻 : 口 火 石
烈 : 刂 灬 歹
烊 : 并 火 王 羊
烋 : ⺅ 木 灬
烏 : 鳥 灬
烑 : 丶 ノ 儿 冫 火
烓 : 土 火
烔 : 一 冂 口 火
烕 : 一 ノ 厂 戈 火
烖 : 土 戈 火
烘 : ｜ 二 ハ 火
烙 : 火 口 夂
烜 : 一 日 火
烝 : 一 水 亅 灬
烟 : 火 大 囗
烤 : 一 ノ 勹 土 ⺹ 火
烬 : 丶 尸 火
烱 : 火 口 儿 冂
烹 : 口 亅 亠 灬
烺 : 丶 火 艮
烽 : ｜ 火 二 夂
焃 : 土 火 赤
焄 : ノ 口 ヨ 灬
焅 : ノ 口 土 火
焆 : 口 月 火
焇 : 小 ⺌ 月 火
焈 : 一 尸 已 戸 火
焉 : 一 止 灬
焋 : 士 火 爿
焌 : 儿 ハ 厶 夂 火
焏 : 一 亅 又 口 灬
焔 : ｜ 火 日 勹
焙 : 火 口 立
焚 : 火 木
焜 : 火 日 比
焞 : 亠 口 子 火
焠 : 亠 人 十 火
無 : ｜ ノ 一 灬 無
焦 : 灬 隹
焫 : 人 入 冂 ⺾ 火
焭 : 冖 几 火
焮 : 人 勹 斤 欠 火
焯 : 十 卜 日 火
焰 : 勹 火 臼
焱 : 火
然 : 犬 夕 灬
焸 : 日 曰 火
焼 : 火 十 儿
煁 : 一 ｜ ハ 匚 火 甘
煅 : 一 ｜ ノ 几 又 殳 火
煆 : 一 ｜ 又 火
煇 : 冖 火 車
煉 : ｜ 一 火 日 ハ 木 田
煊 : 一 宀 日 火
煋 : 日 曰 火 生
煌 : 王 火 白
煎 : 一 刂 月 并 灬
煐 : 口 大 ⺾ 火
煑 : 丶 ノ 土 ⺹ 日 火
煒 : 口 火 韋
煓 : 山 火 而
煕 : 臣 匚 已 灬
煖 : ノ 一 火 爪 又
煗 : 大 火 而
煙 : 火 西 土
煚 : 一 匚 日 曰 火
煜 : 日 火 立
煞 : 勹 ヨ 攵 灬
煠 : 一 ｜ 木 火 世
煢 : 乙 火 十 冖
煤 : 火 甘 木
煥 : 火 大 儿 冂
煦 : 口 日 勹 灬
照 : 口 刀 日 灬
煨 : 火 田 衣
煩 : 火 貝 目 ハ 頁
煬 : ノ 火 日 勿
煮 : 日 ⺹ 灬
煹 : 一 ｜ 二 月 火
煽 : 羽 火 戸 冫 一 尸
熀 : 一 儿 ⺌ 日 火
熄 : 火 自 心
熅 : 人 口 火 皿
熇 : 亠 冂 口 火 高
熈 : ノ 臣 卩 已 灬
熊 : 月 匕 厶 灬
熌 : 人 火 門
熏 : ｜ ノ 田 日 灬
熒 : 冖 火
熔 : 火 穴 口 谷 ハ 𠆢 宀
熕 : 火 貝 目 ハ 工
熖 : 火 爪 臼
熙 : 灬 已 匚 口
熚 : 一 ｜ 凵 口 火 里
熛 : 二 小 火 示 西
熟 : 丶 九 口 子 亠 灬
熠 : 冫 日 火 白 羽
熢 : 一 ｜ 二 辶 夂 火
熨 : 火 示 二 小 寸 尸
熬 : 土 方 攵 灬
熮 : 𠆢 冫 彡 火 羽
熯 : 一 丶 ノ 十 口 大 廾 火 革
熰 : 匚 口 火
熱 : 土 九 丶 儿 灬
熲 : ハ 匕 火 目 貝 頁
熳 : 又 日 火 罒
熹 : 口 士 十 豆 并 灬
熺 : 一 并 十 口 士 火 豆
熾 : 音 火 日 立 戈
熿 : ハ 火 田 黄
燀 : 十 口 日 火 田
燁 : 一 ｜ ⺾ 火
燃 : 火 犬 夕 灬
燄 : 勹 火 臼
燈 : 口 豆 并 癶 火
燉 : 火 口 子 亠 攵
燋 : 火 灬 隹
燌 : ハ 十 ⺾ 火 目 貝
燎 : 火 小 大 日 并 亠
燐 : 火 舛 米 夕
燒 : 火 土 儿
燓 : 木 火 爻
燔 : 火 田 釆 米
燕 : 口 匕 灬 爿 ⺾
燖 : 口 寸 工 ヨ 火
燗 : 火 月 門
燙 : 一 ノ 勹 氵 日 火 勿
燚 : 火
燜 : 心 火 門
營 : 火 口 冖
燠 : 火 大 米 冂
燥 : 火 口 木 品
燦 : 火 米 又 夕
燧 : 火 辶 并 豕
燬 : 臼 王 火 殳 几 又
燭 : 火 虫 罒 勹
燮 : 火 言 又
燵 : 火 辶 土 并 立 亠
燸 : 一 ｜ 二 冖 火 而 雨
燹 : 火 豕
燻 : ｜ ノ 火 田 日
燼 : ｜ ヨ 火 皿 灬 聿
燾 : 一 口 士 寸 工 灬
燿 : ヨ 火 隹
爀 : 土 火 赤
爆 : ｜ 一 火 水 日 ハ 井
爇 : 丶 儿 ハ 九 土 ⺾ 灬
爈 : 匕 卜 厂 心 火 田 虍
爉 : 丶 ノ 乙 口 川 巛 火
爍 : 火 白 木 冫
爐 : 火 皿 田 卜 匕 厂 虍
爓 : 勹 火 臼 門
爕 : 火 言
爗 : 一 ｜ 二 ⺾ 日 火
爚 : 一 ｜ 亅 𠆢 冂 口 廾 火 冊 龠
爛 : ｜ 火 日 ハ 木 門
爝 : 一 厶 寸 日 火 爪 罒
爟 : 一 ｜ 卜 口 ⺾ 火 隹
爤 : 并 口 ⺾ 木 火 門
爨 : 火 口 ハ 木 冂 冖
爪 : 爪
爫 : 爪
爬 : 爪 已 巴
爭 : ヨ 爪 亅
爯 : 一 ｜ 冂 十 月 爪
爰 : ノ 一 爪 又
爲 : 爪 尸 灬
爴 : 一 口 囗 戈 爪
爵 : 艮 寸 爪 罒
父 : 父
爸 : 乙 已 父 巴
爹 : 夕 父
爺 : 耳 父 ⻏
爻 : 爻
爼 : 目 爻
爽 : 一 人 亠
爾 : ｜ 一 ハ 冂 爻
爿 : 爿
牀 : 木 爿
牁 : 一 亅 口 爿
牂 : 并 爿 王 羊
牃 : 一 ｜ 木 爿 世
牅 : ｜ 二 冂 广 ヨ 爿 聿
牆 : 口 人 土 囗 爿
片 : 片
版 : 片 又 厂
牋 : 片 戈
牌 : 十 田 片
牎 : 丶 ノ 勹 心 片 勿
牏 : 一 丶 ノ 𠆢 冂 刂 月 片
牐 : ノ 十 片 臼
牒 : 片 木 世
牓 : 亠 并 冖 方 片 立
牕 : ノ 口 囗 夂 心 片
牖 : 一 丶 十 尸 戸 月 片
牗 : ｜ 二 广 ヨ 月 片 用 聿
牘 : 貝 目 ハ 士 片 儿 囗
牙 : 牙
牚 : 冖 口 ⺌ 牙
牛 : 牛
牜 : 牛
牝 : 牛 匕
牞 : 力 牛
牟 : 牛 厶
牠 : ｜ 乙 匕 也 牛
牡 : 牛 土
牢 : 牛 宀
牣 : ノ 刀 牛
牧 : 牛 攵
牨 : 亠 几 牛
物 : 勿 牛 勹
牫 : 戈 牛
牮 : ⺅ 戈 牛
牯 : 十 口 牛
牱 : 一 亅 口 牛
牲 : 牛 生
牴 : 牛 氏
牷 : 𠆢 牛 王
牸 : 子 宀 牛
特 : 牛 寸 土
牻 : 丶 尢 彡 牛 尤
牼 : 一 巛 工 牛
牽 : 亠 冖 厶 牛
牾 : 一 牛 口 五
牿 : ノ 口 土 牛
犀 : 尸 ｜ 二 十 ノ 一
犁 : 禾 刂 牛
犂 : ノ 禾 牛 勿
犄 : 一 亅 口 大 牛
犇 : 牛
犉 : 亠 口 子 牛
犍 : ｜ 二 廴 ヨ 牛 聿
犎 : 土 寸 牛
犒 : 牛 口 高 亠 冂
犓 : 勹 屮 牛
犖 : 火 牛 冖
犛 : 一 厂 攵 木 牛
犠 : 一 王 牛 并 羊 亅 戈 手
犢 : 貝 目 ハ 牛 士 儿 囗
犧 : 王 禾 牛 并 羊 戈
犨 : 牛 隹
犬 : 犬 大 丶
犭 : 犭
犮 : 丶 ノ 又 大 弋 犬
犯 : 乙 犭 卩
犰 : 九 犭
犱 : 丶 九 犭
犲 : ノ 一 犭 亅
犴 : 一 十 干 犭
状 : 犬 爿
犹 : 犭 丶 尤 尢
犾 : 丶 大 犭 犬
狀 : 丶 大 爿 犬
狁 : 儿 厶 犭
狂 : 王 犭
狃 : ｜ 一 犭
狄 : 火 犭
狆 : ｜ 口 犭
狇 : 犭 木
狉 : 一 ｜ 丶 ノ 犭
狌 : 犭 生
狎 : ｜ 日 犭 田
狐 : 瓜 犭
狒 : ｜ ノ 弓 犭
狕 : 力 幺 犭
狖 : ハ 宀 犭
狗 : 口 犭 勹
狘 : 犭 戈
狙 : 一 犭 目
狛 : 白 犭
狟 : 一 犭 日 曰
狠 : 艮 犭
狡 : 犭 父 亠
狢 : 口 犭 夂
狥 : 勹 犭 日
狩 : 寸 犭 宀
独 : 虫 犭
狭 : 人 大 二 并 犭 丶 亠
狳 : 一 丶 ノ 亅 二 𠆢 小 犭
狴 : 匕 土 犭 比
狷 : 月 口 犭
狸 : 犭 里
狹 : 人 大 犭
狺 : 犭 言
狻 : 儿 ハ 厶 夂 犭
狼 : 艮 犭
狽 : 貝 目 ハ 犭
狾 : 扌 犭 斤
猂 : 一 十 干 犭 日
猄 : 亠 口 小 犭
猅 : 犭 非
猇 : 儿 几 匕 卜 厂 犭 虍
猊 : 臼 犭 儿
猋 : 丶 大 犬
猍 : 人 犭 木
猒 : 丶 大 日 月 犬
猓 : 一 ｜ 口 犭 木 田
猖 : 日 犭
猗 : 口 大 犭 亅 一
猘 : 一 ｜ ノ 冂 刂 巾 犭 牛
猙 : 亅 ヨ 犭 爪
猛 : 皿 子 犭
猜 : 月 青 土 二 犭 亠
猝 : 十 人 犭 亠
猞 : 一 𠆢 十 口 干 犭
猟 : ⺌ 犭 用 几
猢 : 十 口 犭 月
猤 : 一 丶 ノ 大 犭
猥 : 衣 田 犭
猧 : 冂 口 犭
猨 : ノ 二 又 犭 爪
猩 : 生 日 犭
猪 : 日 犭 ⺹
猫 : 田 犭 ⺾
猬 : 犭 月 田
献 : 干 犬 十 并 冂
猯 : 山 而 犭
猱 : マ 犭 木 矛
猲 : 人 勹 犭 日 曰
猳 : ｜ 又 犭
猴 : ⺅ 犭 矢
猵 : 一 ｜ 丶 亅 冂 尸 廾 犭 冊
猶 : 酉 并 犭
猷 : 并 酉 犬
猹 : 一 犭 日 木
猺 : 丶 凵 夕 山 犭 爪 缶
猻 : 子 小 幺 犭 糸
猽 : 亠 ハ 冖 犭 日
猾 : 月 骨 犭 冂 冖
猿 : 衣 口 土 犭
獃 : 丶 并 口 大 山 犬 豆
獄 : 言 犭 犬
獅 : ｜ 巾 口 犭
獍 : 儿 犭 日 立 音
獎 : 犬 寸 夕 爿
獏 : 大 日 犭 ⺾
獐 : 十 犭 日 立 音
獒 : 丶 土 士 大 攵 方 犬
獖 : ハ 十 犭 ⺾ 目 貝
獗 : 欠 并 犭 厂 屮
獘 : ｜ 丶 ハ 并 冂 大 攵 犬
獝 : ハ 冂 マ 口 犭 矛
獞 : 犭 立 里
獟 : 一 儿 土 犭
獠 : 丶 ノ 大 小 犭 日 曰
獣 : 犬 口 ⺌ 田
獦 : 人 勹 犭 ⺾ 日
獧 : 一 口 犭 罒 衣
獨 : 虫 罒 犭 勹
獩 : 一 ノ 厂 小 犭 戈 止
獪 : 日 罒 犭 𠆢
獫 : 一 人 𠆢 口 犭
獬 : ｜ 刀 勹 犭 月 牛 角
獮 : 一 ｜ ハ 冂 犭 爻
獯 : 一 ｜ ノ 二 并 犭 灬
獰 : 心 罒 犭 亅 宀
獱 : 一 ｜ ノ ハ 宀 犭 目 貝
獲 : 犭 又 ⺾ 隹
獵 : 臼 乙 口 巛 鼠 犭
獷 : ハ 广 犭 田 黄
獸 : 一 犬 口 田
獹 : 匕 卜 厂 犭 田 皿 虍
獺 : 貝 目 ハ 口 犭 頁 木
獻 : 犬 口 卜 儿 冂 匕 厂 虍 鬲
獼 : 一 ｜ ハ 冂 弓 犭 爻
玀 : 小 幺 犭 罒 糸 隹
玁 : 一 ｜ 厂 口 犭 攵 耳
玃 : 又 犭 目 隹
玄 : 玄 亠 幺
玅 : ノ 亠 小 幺 玄
玆 : 亠 幺 玄
率 : 玄 十 亠 冫 幺
玉 : 王 丶
玊 : 丶 王
王 : 王
玎 : 一 亅 王
玐 : ハ 王
玓 : 丶 勹 王
玔 : 川 王
玕 : 一 十 干 王
玖 : 久 王
玗 : 亅 二 王
玘 : 已 王
玜 : ハ 厶 王
玞 : 一 大 王
玟 : 文 王
玠 : ｜ ノ 𠆢 王
玢 : ハ 刀 王
玥 : 月 王
玦 : 人 ユ 王
玨 : 王
玩 : 王 儿 二 元
玪 : 丶 𠆢 王
玫 : 攵 王
玭 : 匕 比 王
玲 : 王 𠆢 卩 一
玳 : 王 ⺅ 弋
玵 : 王 甘
玷 : 卜 口 王
玹 : 亠 幺 王 玄
玻 : 王 皮 又
玼 : 匕 止 王
玽 : 勹 口 王
玿 : 刀 口 王
珀 : 王 白
珂 : 王 口 亅 一
珅 : ｜ 日 王
珆 : 厶 口 王
珈 : 王 口 力
珉 : 尸 氏 王
珊 : ｜ 一 王 亅 冂 冊
珋 : ｜ ノ 卩 王
珌 : ノ 心 王
珍 : 王 𠆢 彡
珎 : 王 小
珏 : 丶 王
珒 : ｜ 二 ヨ 王 聿
珓 : 亠 父 王
珖 : 一 儿 ⺌ 王
珙 : ｜ 二 ハ 王
珝 : 冫 王 羽
珞 : 王 口 夂
珠 : ｜ ノ 王 牛 二 ハ 木
珡 : 𠆢 王
珣 : 勹 日 王
珥 : 王 耳
珦 : ノ 冂 口 王
珧 : 丶 ノ 儿 冫 王
珩 : 彳 王 行
珪 : 王 土
班 : 王 土 厂
珮 : 王 巾 几
珱 : 王 女 ⺌
珴 : 戈 手 王
珵 : ノ 口 土 王
珷 : 一 弋 止 王
珸 : 王 口 五
珹 : ノ 亅 厂 戈 王
珺 : ノ 口 ヨ 王
珻 : 一 ノ 王 毋 母
珽 : ノ 土 士 廴 王
現 : 王 見
珿 : 口 王 足
琀 : 丶 𠆢 口 王
琁 : 一 ノ 王 疋
球 : 王 水 丶
琄 : 口 月 王
琅 : 王 艮
理 : 王 里
琇 : ノ 乃 木 王 禾
琉 : 王 川 亠 厶
琊 : ⻏ 王 牙
琑 : ⺌ 月 王
琓 : 二 儿 宀 王 元
琚 : 十 口 尸 王
琛 : 儿 ハ 冖 木 王
琢 : 王 豕
琤 : 亅 勹 ヨ 爪 王
琥 : 王 卜 儿 匕 厂 虍
琦 : 一 亅 口 大 王
琨 : 匕 日 比 王
琩 : 日 王
琪 : ｜ 二 ハ 王 甘
琫 : 一 ｜ 二 大
琬 : 卩 夕 宀 王
琭 : ヨ 水 王
琮 : 二 宀 小 王 示
琯 : ｜ 口 宀 王
琰 : 火 王
琱 : 冂 口 土 王
琲 : 王 非
琳 : 王 木
琴 : 王 𠆢
琵 : 王 比
琶 : 王 巴
琹 : 木 王
琺 : 王 氵 土 厶
琿 : 王 車 冖
瑀 : ノ 冂 厶 王 禸 虫
瑁 : 王 目 冂
瑃 : 一 二 大 日 王
瑄 : 一 宀 日 王
瑆 : 日 王 生
瑇 : 一 ｜ 二 王 毋 母
瑋 : 口 王 韋
瑍 : 儿 ハ 冂 勹 大 王
瑑 : ヨ 彑 王 豕
瑒 : 一 ノ 勹 日 王 勿
瑓 : 并 口 木 王
瑕 : ｜ 王 又
瑗 : ノ 二 又 爪 王
瑙 : 王 巛 囗
瑚 : 王 月 口 十
瑛 : ノ 王 ⺾ 大
瑜 : 王 刂 月 𠆢
瑝 : 日 王 白
瑞 : 王 山 而
瑟 : ノ 王 心 丶
瑠 : 王 田 刀 厶
瑢 : 𠆢 ハ 口 宀 王 谷
瑣 : 王 貝 目 ハ ⺌
瑤 : 王 夕 丶 缶
瑦 : 灬 王 鳥
瑧 : 一 ノ 二 大 木 王 禾
瑨 : ｜ 丶 ノ 二 日 曰 王
瑩 : 王 火 冖
瑪 : 王 馬
瑫 : 爪 王 臼
瑭 : ｜ 口 广 ヨ 王
瑮 : 木 王 西
瑯 : 王 艮 ⻏
瑰 : 王 鬼 田 儿 匕
瑱 : 一 ハ 匕 十 王 目
瑲 : 一 丶 𠆢 口 尸 王
瑳 : ノ 王 工 并 羊
瑶 : 王 缶 爪 凵
瑾 : ｜ 一 王 口 ⺾
璀 : 山 王 隹
璁 : ノ 口 夂 心 王
璃 : 王 亠 凵 禸
璅 : 巛 木 王 田
璆 : 𠆢 冫 彡 王 羽
璇 : 一 ノ 方 王 疋
璈 : 土 攵 方 王
璉 : 辶 王 車
璋 : 王 音 十 日 立 曰
璏 : 一 ノ 匕 大 ヨ 彑 王 矢
璐 : 口 夂 止 王 足
璑 : 一 ｜ ノ 灬 王 無
璒 : 丶 ノ ハ 并 口 王 豆
璗 : 一 丶 ノ 勹 氵 日 王 勿
璘 : 夕 王 米 舛
璙 : 丶 ノ 大 小 日 王
璚 : ハ 冂 マ 口 王 矛
璜 : ハ 王 田 黄
璞 : 王 人 并 羊
璟 : 亠 口 小 日 王
璠 : ノ 王 田 米
璡 : 辶 王 隹
璢 : ｜ 一 王 田
璣 : 人 幺 戈 王
璥 : 勹 口 ⺾ 攵 王
璦 : 冖 夂 心 爪 王
璧 : 王 口 十 辛 立 尸
璨 : 卜 又 夕 王 米
璩 : 匕 卜 厂 王 虍 豕
璪 : 口 木 王
璫 : 冖 口 ⺌ 王 田
璮 : 一 亠 口 囗 日 曰 王
璯 : 一 ｜ 𠆢 并 口 日 王
環 : 衣 王 口 罒 一
璱 : ノ 心 王
璲 : 并 辶 王 豕
璵 : 一 ｜ ハ 王
璹 : 一 口 士 寸 工 王
璺 : 丶 冖 王 臼
璻 : ノ 亠 人 冫 十 王 羽
璽 : ｜ 一 王 ハ 冂 爻
璿 : 一 𠆢 ハ 冖 卜 王 目
瓈 : ノ 𠆢 勹 木 水 王 禾
瓉 : 一 ハ 大 王 目 貝
瓊 : 王 目 冂 夂
瓌 : 一 ｜ 丶 ノ 亠 冫 王 罒 衣
瓏 : 王 月 立
瓐 : 匕 卜 厂 王 田 皿 虍
瓓 : 并 口 木 王 門
瓔 : 王 貝 目 ハ 女
瓖 : 一 ｜ 二 亠 口 王 衣
瓘 : 口 ⺾ 王 隹
瓚 : ノ 儿 ハ 土 王 目 貝
瓛 : 丶 儿 冂 匕 卜 厂 口 大 犬 王 虍 鬲
瓜 : 瓜 厶
瓞 : 一 丶 ノ 二 厶 大 瓜
瓟 : 勹 厶 已 瓜
瓠 : 瓜 大
瓢 : 瓜 示 二 小 西
瓣 : 瓜 十 辛 立
瓤 : 一 ｜ 二 亠 厶 口 瓜 衣
瓦 : 瓦 一
瓧 : 瓦 十
瓨 : 一 丶 乙 工
瓩 : ノ 瓦 十
瓪 : 一 丶 ノ 乙 又
瓫 : 一 丶 乙 ハ 刀
瓮 : 瓦 ハ 厶
瓯 : 一 丶 ノ 乙 匚
瓰 : 瓦 刀 ハ
瓱 : 瓦 毛
瓲 : 瓦 屯
瓴 : 一 ｜ 丶 乙 亅 𠆢 マ
瓶 : 瓦 并
瓷 : 瓦 欠 冫
瓸 : 一 瓦 白
瓺 : 一 ｜ 丶 乙 厶
瓻 : 一 ｜ 丶 ノ 乙 冂 巾
瓼 : 一 丶 乙 里
瓿 : 一 丶 乙 口 立
甁 : 一 丶 十 干 瓦
甃 : 火 禾 瓦
甄 : 瓦 西 土
甅 : 瓦 里 厂
甆 : 一 丶 乙 并 幺
甌 : 瓦 口 匚
甍 : 瓦 罒 冖 ⺾
甎 : 瓦 十 寸 虫 日 亠
甑 : 瓦 田 日 并
甒 : 一 ｜ 丶 ノ 乙 灬 無
甓 : 瓦 口 十 辛 立 尸
甕 : 瓦 亠 幺 隹
甖 : 一 丶 乙 ハ 目 貝
甗 : 一 丶 乙 儿 冂 匕 卜 厂 口 虍 鬲
甘 : 甘
甚 : 一 甘 儿
甜 : 甘 口 舌
甞 : 甘 口 ⺌ 冖
生 : 生
甠 : 日 生
甡 : 生
産 : ノ 生 并 立 亠 厂
甤 : 生 豕
甥 : 生 田 力
甦 : 一 生 日
甧 : 月 生
用 : 用
甩 : 乙 二 冂 月
甪 : ノ 用
甫 : 十 用 丶
甬 : 用
甯 : 宀 心 用
田 : 田
由 : ｜ 日 田
甲 : ｜ 日 田
申 : ｜ 日 田
甶 : ノ 田
男 : 田 力
甸 : 田 勹
甹 : 一 ｜ 勹 日 田
町 : 一 田 亅
画 : 一 田 凵
甼 : 一 田 亅
甽 : 川 田
甾 : 巛 田
甿 : 亠 亡 田
畀 : 廾 田
畃 : ｜ 丶 勹 日
畄 : ⺌ 田
畆 : 田 亠 厶
畇 : 一 丶 勹 田
畈 : ノ 厂 又 田
畉 : 人 田 二 大
畊 : ｜ ノ 田 二 井
畋 : 田 攵
界 : 田 𠆢 儿
畍 : ｜ ノ 田 𠆢
畎 : 丶 大 犬 田
畏 : 衣 一 田
畐 : 一 口 田
畑 : 火 田
畒 : 亠 人 田
畔 : ｜ 田 二 并 十
畗 : 亠 口 田
留 : 田 刀 厶
畚 : 大 田 厶
畛 : 田 𠆢 彡
畜 : 玄 田 亠 幺
畝 : 田 亠 久
畞 : 十 夂 田
畟 : ハ 夂 田
畠 : 田 白
畡 : ノ 亠 幺 玄 田
畢 : ｜ 一 田
畤 : 寸 田 土
略 : 口 田 夂
畦 : 田 土
畧 : 口 田 夂
畩 : 衣 田
番 : 田 釆 米
畫 : 一 田 聿
畬 : 亅 二 𠆢 ハ 小 田 示
畭 : 工 小 田 𠆢
畯 : 儿 ハ 厶 夂 田
異 : 一 田 ハ 井
畱 : 一 ｜ 田
畲 : 二 𠆢 小 田 示
畳 : 一 田 冖
畴 : ノ 一 寸 田 二
當 : 口 ⺌ 田 冖
畷 : 田 又
畸 : 口 大 田 亅 一
畹 : 卩 夕 宀 田
畺 : 一 田
畻 : 一 并 土 大 田
畼 : 一 ノ 勹 日 曰 勿 田
畽 : 一 ノ 田 車
畾 : 田
畿 : 田 幺 戈 丶 ノ
疁 : 𠆢 冫 彡 田 羽
疂 : 田 目 冖 冫
疅 : 一 田
疆 : 一 弓 田 土
疇 : 口 工 士 寸 田
疉 : ヨ 田 宀
疊 : 田 目 冖
疋 : 疋
疌 : 土 ヨ 走
疎 : ｜ 一 口 止 木
疏 : 止 川 亠 厶
疐 : 冖 十 田 疋
疑 : 疋 矢 匕 マ
疒 : 疒
疓 : 乃 疒
疔 : 一 亅 疒
疕 : 匕 疒
疙 : 一 ノ 乙 疒
疚 : ノ 入 疒 久
疜 : 一 卜 疒
疝 : 山 疒
疢 : 火 疒
疣 : 丶 尤 疒 尢
疤 : 乙 已 巴 疒
疥 : ｜ ノ 𠆢 疒
疫 : 殳 疒 几 又
疰 : 亠 土 疒
疱 : 勹 已 疒
疲 : 皮 又 疒
疳 : 甘 疒
疴 : 一 亅 口 疒
疵 : 止 匕 疒
疷 : 一 氏 疒
疸 : 一 日 疒
疹 : 𠆢 彡 疒
疺 : 丶 ノ 乙 疒
疼 : 冫 夂 疒 丶
疽 : 目 疒
疾 : 矢 疒
疿 : 廾 弓 疒
痀 : 勹 口 疒
痁 : 卜 口 疒
痂 : 口 力 疒
痃 : 亠 幺 疒 玄
痄 : 一 ｜ ノ 疒
病 : 一 人 冂 疒
痆 : 匕 尸 疒
症 : 一 止 疒
痊 : 王 𠆢 疒
痌 : 一 冂 口 疒
痍 : 弓 人 大 疒
痎 : ノ 亠 幺 玄 疒
痏 : 一 ノ 月 疒
痒 : 王 并 羊 疒
痓 : 一 厶 土 疒
痔 : 寸 土 疒
痕 : 艮 疒
痗 : 一 ノ 毋 疒 母
痘 : 口 豆 并 疒
痙 : 工 巛 疒
痛 : 用 疒 マ
痜 : ノ 几 木 疒 禾
痝 : 丶 尢 彡 尤 疒
痞 : ｜ ノ 一 口 丶 疒
痟 : 小 ⺌ 月 疒
痠 : 儿 ハ 厶 夂 疒
痡 : 一 ｜ 丶 月 疒
痢 : 禾 刂 疒
痣 : 士 心 疒
痤 : 人 土 疒
痧 : ノ 小 氵 疒
痩 : 又 疒
痬 : ノ 勹 日 勿 疒
痮 : 疒 長
痯 : ｜ 口 宀 疒
痰 : 火 疒
痱 : 疒 非
痲 : 十 木 儿 疒
痳 : 木 疒
痴 : 口 矢 疒
痹 : 廾 田 疒
痺 : 十 田 疒
痼 : 口 十 囗 疒
痾 : 口 亅 疒 ⻖ 一
痿 : 禾 女 疒
瘀 : 丶 𠆢 方 疒
瘁 : 十 人 亠 疒
瘂 : 一 ｜ 疒
瘃 : 丶 疒 豕
瘄 : ｜ 二 日 疒
瘇 : 一 ノ 疒 車
瘈 : 一 ｜ 刀 大 疒
瘉 : 刂 月 𠆢 疒
瘊 : 一 ノ ⺅ ユ 大 疒 矢
瘋 : 風 疒
瘌 : 刂 口 木 疒
瘍 : ノ 一 日 勹 疒
瘏 : ノ 土 ⺹ 日 疒
瘒 : 冖 疒 車
瘓 : 儿 ハ 冂 勹 大 疒
瘕 : 一 ｜ 又 口 疒
瘖 : 日 疒 立 音
瘘 : 女 疒 米
瘙 : 丶 又 疒 虫
瘛 : 一 ｜ 刀 彡 心 疒
瘜 : 心 疒 目 自
瘝 : ｜ 丶 ノ 疒 罒
瘞 : 人 土 大 疒
瘟 : 皿 日 疒
瘠 : 月 𠆢 疒 癶
瘡 : 口 𠆢 尸 疒
瘢 : 舟 殳 疒 几 又
瘣 : 儿 匕 厶 田 疒 鬼
瘤 : 田 刀 厶 疒
瘥 : 一 ノ 二 并 工 王 疒
瘦 : 十 又 支 疒 臼
瘧 : 卜 匕 厂 疒 虍
瘨 : 一 ｜ ハ 匕 疒 目
瘩 : 一 𠆢 口 ⺾ 疒
瘭 : 二 小 疒 示 西
瘰 : 糸 幺 小 田 疒
瘲 : 人 彳 止 疒
瘳 : ノ 𠆢 冫 彡 疒 羽
瘴 : 音 十 日 立 曰 疒
瘵 : 丶 二 夕 小 疒 示
瘸 : 入 冂 力 口 疒 肉
瘹 : 丶 勹 疒 金
瘺 : 尸 疒 雨
瘻 : ｜ 一 口 女 疒
瘼 : 大 ⺾ 日 疒
癀 : ハ 田 疒 黄
癁 : 一 ノ 夂 彳 日 疒
療 : 小 日 并 𠆢 疒
癃 : 一 夂 ⻖ 生 疒
癄 : 灬 疒 隹
癅 : 一 ｜ 田 疒
癆 : 火 力 冖 疒
癇 : 日 門 疒
癈 : 二 儿 疒 癶
癉 : 十 口 日 田 疒
癊 : 一 丶 𠆢 厶 ユ ⻖ 疒
癋 : 一 ｜ 二 心 疒
癌 : 口 山 疒 品
癒 : 刂 月 心 𠆢 疒
癕 : 亠 幺 疒 隹
癖 : 口 十 辛 立 尸 疒
癘 : 田 疒 禸 ⺾
癙 : 疒 臼 鼠
癜 : ハ 尸 殳 疒 几 又
癟 : 一 ｜ 亅 𠆢 冂 廾 疒 目 冊 自
癡 : 疋 矢 匕 疒
癢 : 王 食 并 羊 疒
癤 : 匕 卩 厶 日 疒 白 竹
癥 : 一 山 彳 攵 王 疒
癧 : 止 木 厂 疒
癨 : 雨 疒 隹
癩 : 貝 目 ハ 口 頁 木 疒
癪 : 禾 貝 目 ハ 土 二 亠 疒
癬 : 王 并 羊 疒 魚
癭 : ハ 女 疒 目 貝
癮 : 工 ヨ ⻖ 心 爪 疒
癯 : 疒 目 隹
癰 : 口 巛 巴 疒 隹
癱 : 丶 ノ 二 十 口 大 廾 疒 隹 革
癲 : 貝 十 ハ 頁 目 疒
癴 : 小 幺 手 疒 糸 言
癶 : 癶
癸 : 大 二 癶
発 : 二 儿 癶
登 : 口 豆 并 癶
發 : 弓 殳 癶 几 又
白 : 白
百 : 一 白
皀 : 白 匕
皁 : 十 日 白
皃 : 白 儿
的 : 白 丶 勹
皅 : 乙 已 日 巴 白
皆 : 白 比
皇 : 王 白
皈 : 白 又 厂
皋 : 十 大 白
皌 : 一 日 木 白
皍 : 匕 卩 日 白
皎 : 白 父 亠
皐 : 十 白 二
皓 : ノ 口 土 白
皕 : 一 日 白
皖 : 二 白 儿 宀 元
皙 : 斤 白 木
皚 : 口 山 豆 白 并
皛 : 日 白
皜 : 亠 冂 口 日 白 高
皝 : 一 儿 ⺌ 日 王 白
皞 : 十 大 日 白
皟 : 一 ｜ 二 ハ 日 白 目 貝
皠 : 山 日 白 隹
皡 : 二 十 日 白
皢 : 一 儿 土 日 白
皣 : 一 ｜ 二 ⺾ 日 白
皤 : ノ 日 田 白 米
皥 : ｜ 丶 ノ 二 冫 日 白 目 自
皦 : 攵 方 日 白
皧 : 冖 夂 心 日 爪 白
皨 : 土 日 白
皪 : 幺 日 木 白
皭 : 一 厶 寸 日 爪 白 罒
皮 : 皮 又
皯 : 一 十 又 干 皮
皰 : 皮 又 勹 已
皴 : 皮 又 儿 厶 夂
皶 : 一 又 木 皮 目
皷 : 鼓 口 士 并 皮 十 又 支 豆
皸 : 車 皮 又 冖
皹 : 車 皮 又 冖
皺 : 皮 又 勹 屮
皽 : 一 ノ 亠 十 又 口 囗 支 日
皿 : 皿
盁 : 乃 皿
盂 : 皿 二 亅
盃 : ノ 一 皿
盅 : ｜ 口 皿
盆 : 皿 刀 ハ
盈 : ノ 一 皿 又
盉 : ノ 木 皿 禾
益 : 一 皿 ハ 并
盋 : 又 弋 皿
盌 : 卩 夕 皿
盍 : 皿 土 厶
盎 : 口 大 皿
盒 : 口 皿 𠆢
盔 : 一 ノ 火 皿
盖 : 王 皿 并 羊
盗 : 欠 皿 冫
盙 : 丶 十 月 皿
盛 : ノ 皿 戈
盜 : 欠 皿 氵
盞 : 皿 戈
盟 : 月 皿 日
盠 : ヨ 彑 皿 豕
盡 : ヨ 皿 聿
監 : 皿 臣 二
盤 : 皿 舟 殳 几 又
盥 : 臼 皿 水
盦 : 一 丶 𠆢 皿 酉
盧 : 皿 田 卜 匕 厂 虍
盨 : ハ 彡 皿 目 貝 頁
盪 : ノ 皿 氵 日 勹
盬 : 一 ノ 匚 十 口 干 皿 臣
目 : 目
盰 : 一 十 干 目
盱 : 亅 二 目
盲 : 亡 目 亠
直 : 十 目 ｜ 一
盶 : 二 儿 元 目
相 : 木 目
盹 : ノ 乙 凵 屯 目
盻 : ハ 目 一 勹
盼 : ハ 刀 目
盾 : 斤 十 目 厂
眀 : 月 目
省 : ノ 小 目
眄 : 目 一 山 亅
眆 : 方 目
眇 : ノ 小 目
眈 : 目 尢
眉 : 目 尸 ｜
眊 : 一 ノ 乙 目
看 : ノ 一 手 二 目
県 : 小 目
眎 : 二 小 目 示
眒 : ｜ 日 目
眔 : ｜ 丶 ノ 罒
眕 : 𠆢 彡 目
眗 : 勹 口 目
眙 : 厶 口 目
眚 : 生 目
眛 : ｜ 二 ハ 木 目
眜 : 一 木 目
眞 : ハ 目 匕
真 : 一 十 ハ 目
眠 : 口 氏 目
眢 : 卩 夕 目
眤 : 目 匕 尸
眥 : 止 目 匕
眦 : 止 目 匕
眨 : 丶 ノ 乙 目
眩 : 玄 目 亠 幺
眭 : 土 目
眮 : 一 冂 口 目
眯 : 目 米
眴 : 勹 日 目
眵 : 夕 目
眶 : 匚 王 目
眷 : 人 大 二 并 目
眸 : 牛 目 厶
眹 : 一 ハ 并 大 目
眺 : 目 儿 冫
眼 : 艮 目
眽 : 丶 ノ 目
眾 : ｜ ノ 人 ⺅ 罒
着 : ノ 王 并 目 羊
睂 : ｜ 𠆢 厂 目
睅 : 一 十 干 日 目
睆 : 二 儿 宀 元 目
睇 : ｜ ノ 弓 并 目
睊 : 口 月 目
睍 : 儿 目 見
睎 : 一 ｜ 丶 ノ 冂 巾 目
睏 : 囗 木 目
睒 : 火 目
睖 : ハ 土 夂 目
睗 : ノ 勹 日 曰 勿 目
睘 : 一 亠 口 罒 衣
睚 : 土 目 厂
睛 : 月 青 土 二 目 亠
睜 : 亅 ヨ 爪 目
睞 : 人 木 目
睟 : 亠 人 十 目
睠 : 一 丶 ノ ハ 并 卩 大 目
睡 : ｜ ノ 一 目
睢 : 目 隹
督 : 小 卜 又 目
睤 : 廾 田 目
睥 : 十 田 目
睦 : 土 目 儿
睧 : 日 氏 目
睨 : 臼 目 儿
睪 : 一 并 十 土 干 罒
睫 : ｜ ヨ 走 土 目
睬 : 木 爪 目
睰 : 一 ノ 口 ⺾ 目
睲 : 日 生 目
睳 : 土 大 目
睴 : 冖 目 車
睹 : 日 目 ⺹
睺 : 一 ノ ⺅ ユ 大 目 矢
睼 : 日 疋 目
睽 : 一 丶 ノ 大 目
睾 : 十 辛 土 罒 目 立 亠
睿 : ハ 卜 目 𠆢 冖
瞀 : マ 攵 目 矛
瞄 : ⺾ 田 目
瞋 : 十 ハ 目
瞌 : 厶 土 皿 目
瞍 : 十 又 支 目 臼
瞎 : 口 土 二 目 亠 宀
瞑 : 日 ハ 目 亠 冖
瞔 : 一 ｜ 二 ハ 目 貝
瞕 : 十 日 目 立 音
瞖 : 一 ノ 几 匚 又 大 殳 目 矢
瞚 : 一 ｜ ハ 宀 日 田 目
瞞 : ｜ 一 入 目 冂 凵
瞟 : 二 小 目 示 西
瞠 : 口 ⺌ 土 目 冖
瞢 : 冖 ⺾ 目 罒
瞤 : 王 目 門
瞥 : ｜ 巾 ⺌ 并 目 冂 攵
瞧 : 灬 目 隹
瞩 : ノ 冂 厶 尸 目 禸 虫
瞪 : 丶 ノ 并 口 目 豆
瞬 : 牛 舛 爪 目 夕 冖
瞭 : 小 日 并 目 𠆢
瞮 : 亠 厶 攵 月 目
瞯 : 月 目 門
瞰 : 耳 目 攵
瞱 : ｜ 二 ⺾ 目
瞳 : 目 里 立
瞵 : 夕 目 米 舛
瞶 : ｜ 一 貝 ハ 口 目
瞹 : 心 爪 目 冖 夂
瞻 : 言 目 儿 厂 勹
瞼 : 口 人 目 𠆢
瞽 : 口 士 支 十 豆 并 目 又 鼓
瞾 : 儿 ハ 宀 工 目
瞿 : 目 隹
矃 : 一 亅 宀 心 皿 目
矇 : 目 冖 ⺾ 豕
矉 : 一 ｜ ノ ハ 宀 目 貝
矍 : 又 目 隹
矑 : 匕 卜 厂 田 皿 目 虍
矒 : 冖 ⺾ 目 罒
矕 : 小 幺 目 糸 言
矗 : 十 目 ｜ 一
矙 : ユ 攵 目 耳 門
矚 : 虫 罒 目 勹 尸
矛 : 矛 マ
矜 : 矛 𠆢 マ
矞 : 儿 ハ 冂 マ 口 矛
矟 : マ ⺌ 月 矛
矠 : ｜ 二 マ 日 矛
矢 : ノ 大 一 矢
矣 : 矢 厶
矤 : 一 ノ 大 弓 矢
知 : 口 矢
矦 : 一 ノ 勹 厂 大 矢
矧 : ｜ 弓 矢
矩 : 矢 巨
矪 : 一 ｜ 丶 ノ 冂 大 矢 舟
矬 : 一 ノ 人 土 大 矢
短 : 口 豆 并 矢
矮 : 禾 女 矢
矯 : ノ 口 矢 冂 大
矰 : 一 ｜ ノ ハ 并 口 大 日 矢
矱 : 一 ノ 又 大 ⺾ 矢 隹
石 : 口 石
矴 : 一 亅 口 石
矸 : 一 十 口 干 石
矻 : 一 ノ 乙 口 石
矼 : 口 工 石
砂 : ノ 口 小 石
砅 : 口 水 石
砆 : 一 口 大 石
砉 : 一 ｜ 二 口 彡 石
砌 : 口 石 刀 匕
砍 : 人 勹 口 欠 石
砎 : ｜ ノ 𠆢 口 石
砑 : 口 石 牙
砒 : 口 石 比
研 : ｜ 口 石 亅 廾 ノ
砕 : ノ 口 十 石 九
砙 : 一 丶 口 瓦 石
砝 : 厶 口 土 石
砠 : 口 石 目
砡 : 丶 口 王 石
砢 : 一 亅 口 石
砣 : 匕 口 宀 石
砥 : 口 氏 石
砦 : 口 止 石 匕
砧 : 口 石 卜
砬 : 口 石 立
砭 : ｜ 丶 ノ 乙 口 石
砮 : 又 口 女 石
砰 : 一 ハ 并 十 口 干 石
砲 : 口 石 勹 已
破 : 口 石 皮 又
砵 : 一 口 木 石
砷 : ｜ 口 日 田 石
砺 : 一 斤 口 石 厂
砿 : 口 石 厶 广
硃 : 一 ノ 口 木 石
硄 : 一 儿 口 ⺌ 石
硅 : 口 石 土
硇 : 丶 ノ 口 囗 石
硈 : 口 士 石
硌 : 口 夂 石
硎 : 一 刂 口 廾 石
硏 : 一 十 口 干 石
硑 : 一 并 口 廾 石
硒 : 口 石 西
硜 : 一 口 巛 工 石
硝 : 月 口 ⺌ 石
硞 : 口 土 石
硠 : 丶 口 石 艮
硡 : 一 ノ 厶 口 宀 石
硣 : ノ 口 土 子 ⺹ 石
硤 : 人 口 大 石
硨 : 口 石 車
硪 : 口 戈 手 石
硫 : 口 石 川 亠 厶
硬 : ノ 一 口 石 日
确 : ｜ 勹 口 月 石 角
硯 : 見 口 石
硲 : 口 石 谷 ハ 𠆢
硴 : ⺅ 口 石 匕 ⺾
硺 : 丶 口 石 豕
硼 : 月 口 石
硾 : 一 ｜ ノ 二 口 石
碁 : ｜ 一 口 石 二 ハ
碆 : 口 氵 石 皮 又
碇 : 口 石 疋 宀
碊 : 口 戈 石
碌 : ヨ 口 水 石 隶
碍 : 口 寸 石 日 一
碎 : 口 十 人 石 亠
碏 : ｜ 二 口 日 曰 石
碑 : 口 十 石 田
碓 : 口 石 隹
碔 : 一 口 弋 止 石
碕 : 口 石 大 ｜ 一
碗 : 口 石 夕 卩 宀
碘 : 一 ｜ ハ 口 日 石
碚 : 口 石 立
碝 : 口 大 石 而
碞 : 口 石
碟 : 一 ｜ 口 木 石 世
碡 : 一 ｜ 二 口 毋 石 母
碣 : 口 石 日 勹 匕
碤 : 口 大 ⺾ 石
碧 : 王 口 石 白
碨 : 口 田 石 衣
碩 : 貝 目 ハ 口 石 頁
碪 : 甘 口 石 儿 匚
碬 : 一 ｜ 又 口 石
碭 : 一 ノ 勹 口 日 勿 石
碯 : 口 石 巛 囗
碰 : ｜ 丶 ノ 二 并 口 石
碱 : 一 ノ 厂 口 戈 石
碲 : ｜ 亠 并 冂 冖 口 巾 石 立
碳 : 一 ノ 口 山 火 石
碵 : 貝 目 ハ 口 石 卜
確 : 口 石 宀 隹
碻 : 亠 冂 口 石 高
碼 : 口 石 馬
碽 : ハ 口 工 目 石 貝
碾 : 衣 口 石 二 尸
碿 : 口 ⺌ 尸 月 石
磁 : 一 口 石 并 幺
磅 : 口 石 并 方 立 亠 冖
磆 : 月 口 骨 石 冂 冖
磇 : 丶 ノ 匕 口 囗 比 石
磈 : 儿 匕 厶 口 田 石 鬼
磉 : 又 口 木 石
磊 : 口 石
磋 : 王 口 工 石 并 羊
磌 : 一 ハ 匕 十 口 目 石 貝
磎 : 口 大 幺 爪 石
磐 : 口 舟 石 殳 几 又
磑 : 口 山 石 豆 并
磒 : ハ 口 目 石 貝
磓 : ｜ ノ 辶 口 石
磔 : 口 石 舛 木 夕
磕 : 厶 口 土 皿 石
磖 : 冫 口 日 白 石 羽
磚 : 口 十 寸 石 虫 日 亠 厶
磛 : 口 斤 石 車
磟 : 𠆢 冫 口 彡 石 羽
磠 : 丶 ノ 十 卜 口 囗 石 鹵
磡 : 一 ｜ 儿 ハ 力 匚 口 甘 石
磤 : ノ 亅 几 又 口 ヨ 殳 石
磦 : 二 口 小 石 示 西
磧 : 貝 目 ハ 口 石 土 二 亠
磨 : 口 石 木 广 麻
磪 : 口 山 石 隹
磬 : 口 士 石 殳 尸 几 又
磯 : ノ 口 石 戈 幺 丶
磲 : 匚 口 氵 木 石
磳 : ｜ 并 口 日 曰 石
磴 : 口 石 豆 并 癶
磶 : 勹 口 灬 石 臼
磷 : 口 夕 石 米 舛
磹 : 十 口 日 石 西
磺 : ハ 口 田 石 黄
磻 : ノ 口 田 石 米
磽 : 口 石 土 儿
磾 : 一 ｜ 十 口 日 田 石
磿 : ノ 厂 口 木 石 禾
礀 : 口 月 石 門
礁 : 口 石 灬 隹
礆 : 一 人 𠆢 口 石
礇 : 口 石 大 米 冂
礌 : 二 冖 口 田 石 雨
礎 : 口 石 疋 木
礐 : 一 ｜ ノ 冖 口 爻 石
礑 : 口 ⺌ 石 田 冖
礒 : 王 口 石 并 羊 亅 戈
礙 : 口 石 疋 矢 匕 マ
礚 : 厶 口 土 ⺾ 皿 石
礛 : ノ 二 匚 口 皿 石 臣
礜 : 一 ｜ ノ 口 大 石
礞 : 一 冖 口 ⺾ 石 豕
礟 : 口 爻 石 馬
礠 : 一 并 口 幺 心 石
礥 : ハ 匚 又 口 目 石 臣 貝
礦 : 黄 口 石 田 ハ 广
礧 : 口 田 石
礩 : ハ 口 斤 目 石 貝
礪 : 口 石 田 厂 禸 ⺾
礫 : 口 石 白 木 冫
礬 : 口 石 大 木 爻
礭 : 二 冖 口 石 隹 雨
礮 : 亠 口 父 石 馬
礰 : ノ 厂 口 木 止 石 禾
礱 : 一 乙 口 月 石 立 竜
礴 : 丶 十 口 寸 氵 ⺾ 月 石
礵 : 二 冖 口 木 目 石 雨
示 : 示 二 小
礻 : 礻
礼 : 乙 礻
礽 : 乃 礻
社 : 土 礻
礿 : 一 丶 勹 礻
祀 : 礻 已
祁 : ⻏ 礻
祄 : ｜ ノ 𠆢 礻
祅 : ｜ ノ 二 大 礻
祆 : 一 ｜ ノ 二 大 礻
祇 : 氏 礻
祈 : 斤 礻
祉 : 止 礻
祊 : ｜ ノ 二 方 礻
祋 : 几 又 殳 礻
祏 : 口 礻 石
祐 : ノ 一 口 礻
祑 : 一 ノ 大 礻
祓 : ノ 一 礻 丶
祔 : ｜ ノ 二 ⺅ 寸 礻
祕 : ノ 心 礻 丶
祖 : 一 目 礻
祗 : 氏 礻 一
祘 : 二 小 示
祚 : ｜ ノ 礻
祛 : ｜ ノ 二 厶 土 礻
祜 : ｜ ノ 二 十 口 礻
祝 : 口 礻 儿
神 : ｜ 日 礻 田
祟 : ｜ 山 示 二 小
祠 : 口 礻 亅 一
祢 : ノ 小 礻
祥 : 王 并 羊 礻
祧 : ｜ 丶 ノ 二 儿 冫 礻
票 : 示 二 小 西
祩 : 一 ノ 木 礻
祫 : 一 ｜ ノ 二 𠆢 口 礻
祭 : 示 二 小 𠆢 癶
祲 : ｜ ノ 二 冖 又 ヨ 礻
祷 : ノ 寸 礻 土 亠
祹 : ｜ ノ 二 凵 勹 山 礻 缶
祺 : 甘 ハ 礻
祻 : 十 口 囗 礻
祼 : ｜ ノ 二 日 木 礻 田
祾 : ハ 土 夂 礻
祿 : 水 礻 隶 彑
禀 : 口 示 二 小 亠 囗
禁 : 示 二 小 木
禄 : ヨ 水 礻 隶
禅 : 十 ⺌ 田 礻
禊 : 大 土 礻 亠 刀
禋 : ｜ ノ 二 土 礻 西
禌 : 一 并 幺 礻
禍 : 口 礻 冂
禎 : 貝 目 ハ 卜 礻
福 : 一 口 田 礻
禑 : 冂 厶 礻 田 禸
禓 : 一 ノ 勹 日 礻 勿
禔 : ｜ ノ 二 日 礻 疋
禕 : ｜ ノ 二 口 礻 韋
禖 : ｜ ノ 二 木 礻 甘
禘 : ｜ ノ 二 亠 并 冂 冖 巾 礻 立
禛 : 一 ｜ ノ 二 ハ 匕 十 礻 目 貝
禜 : 二 冖 小 火 示
禝 : 田 礻 儿 夂
禡 : ｜ ノ 二 礻 馬
禦 : 止 示 二 小 卩 彳
禧 : 口 士 十 豆 并 礻
禨 : 人 幺 戈 礻
禩 : ｜ ノ 二 ハ 礻 田
禪 : ｜ 一 口 田 日 礻
禫 : 一 ｜ ノ 二 冂 十 日 礻 西
禮 : ｜ 一 口 豆 日 并 礻
禯 : ｜ 厂 日 礻 衣 辰
禰 : ｜ 一 礻 冂 爻
禱 : 一 ｜ ノ 二 口 士 寸 工 礻
禳 : ｜ 衣 一 ハ 礻 亠
禴 : 一 ｜ ノ 亅 二 𠆢 冂 口 廾 礻 冊 龠
禸 : 冂 厶 禸
禹 : ノ 虫 禸 冂
禺 : 田 日 禸 冂
离 : 丶 ノ 亠 冂 凵 十 厶 禸
禽 : 𠆢 亠 冂 凵 厶 禸 丶 ノ
禾 : 禾 木 ノ
禿 : 禾 儿
秀 : 乃 禾
私 : 禾 厶
秂 : ノ 人 木 禾
秄 : ノ 子 木 禾
秇 : 丶 ノ 九 木 禾
秈 : ノ 山 木 禾
秉 : ｜ ノ ヨ 一 禾 ハ
秊 : ノ 十 木 禾
秋 : 火 禾
秌 : ノ 木 火 禾
种 : ｜ ノ 口 木 禾
秏 : ノ 乙 二 木 禾
科 : 禾 斗
秒 : ノ 禾 小
秔 : ノ 亠 几 木 禾
秕 : 禾 比
秖 : ノ 木 氏 禾
秘 : ノ 禾 心 丶
秚 : ｜ 丶 ノ 二 ハ 并 木 禾
秝 : ノ 木 禾
秞 : ｜ ノ 日 木 田 禾
租 : 一 禾 目
秠 : 一 ｜ 丶 ノ 二 木 禾
秡 : ノ 一 禾 丶
秢 : 丶 ノ 𠆢 マ 木 禾
秣 : ｜ 一 禾 ハ 木 亠
秤 : 禾 干 并
秥 : ノ 卜 口 木 禾
秦 : 一 禾 二 人
秧 : 禾 人 大 冂
秩 : ノ 禾 人 土 大
秪 : 一 丶 ノ 木 氏 禾
秫 : 一 ｜ 丶 ノ 乙 木 禾
秬 : 禾 巨
秭 : ｜ ノ 亅 木 禾
称 : ノ 禾 小 一
秱 : 一 ノ 冂 口 木 禾
秸 : ノ 口 士 木 禾
移 : 禾 夕
秼 : 一 ノ 木 禾
稀 : ノ 一 禾 巾 丶
稂 : 丶 ノ 木 禾 艮
稃 : ノ 子 木 爪 禾
稇 : ノ 囗 木 禾
稈 : 禾 干 日
稉 : 一 丶 ノ 日 木 禾
稊 : ｜ ノ 并 弓 木 禾
程 : 王 禾 口
稌 : 一 ノ 𠆢 小 木 禾
稍 : 禾 月 ⺌
税 : 禾 口 并 儿
稑 : ノ 儿 ハ 土 木 禾
稔 : 禾 心 𠆢
稕 : ノ 亠 口 子 木 禾
稗 : 禾 十 田
稘 : 禾 甘 ハ
稙 : 禾 十 目
稚 : 禾 隹
稛 : ノ 囗 木 禾
稜 : 禾 土 儿 夂
稞 : ノ 日 木 田 禾
稟 : 禾 口 亠 囗
稠 : 禾 口 土 冂
稡 : ノ 亠 人 十 木 禾
稧 : 一 ｜ ノ 刀 大 木 禾
稫 : 一 ノ 口 木 田 禾
稭 : ノ 匕 日 木 比 白 禾
種 : ｜ 禾 日 里
稯 : 丶 ノ ハ 凵 十 夂 木 禾
稰 : ノ 月 木 疋 禾
稱 : ｜ 一 禾 爪 冂
稲 : ｜ 禾 爪 日
稴 : 一 ｜ 丶 ノ ヨ 木 禾
稵 : 一 ノ 并 幺 木 禾
稷 : 禾 田 儿 夂
稸 : ノ 亠 幺 木 田 禾
稹 : 一 ノ ハ 匕 十 木 目 禾 貝
稺 : ノ 十 尸 木 禾 立 辛
稻 : 臼 禾 爪
稼 : 禾 宀 豕
稽 : 禾 日 匕 尤
稾 : 禾 口 高 亠 冂
稿 : 禾 口 高 亠 冂
穀 : 禾 士 冖 殳 几 又
穂 : 禾 十 心 田
穃 : 禾 穴 口 ハ 𠆢 宀
穄 : 丶 ノ 二 夕 小 木 示 禾
穅 : ノ 广 ヨ 木 水 禾 隶
穆 : 禾 小 白 彡
穇 : ノ 𠆢 厶 彡 木 禾
穈 : ノ 广 木 禾 麻
穉 : 禾 牛 尸
穌 : ノ 木 灬 田 禾 魚
積 : 禾 貝 目 ハ 土 亠
穎 : 禾 貝 目 ハ 頁 匕
穏 : ヨ 禾 心 爪
穐 : 禾 亀 乙 勹 田
穕 : ノ 木 禾 隹
穖 : ノ 人 幺 戈 木 禾
穗 : 禾 心 虫 日
穙 : 一 ｜ 丶 ノ 二 并 大 木 禾
穜 : ノ 木 禾 立 里
穝 : ノ 又 日 木 禾 耳
穟 : ノ ハ 并 辶 木 禾 豕
穠 : ｜ ノ 亠 厂 日 木 禾 衣 辰
穡 : 禾 口 人 土 囗
穢 : ノ 禾 止 小 戈
穣 : 衣 禾 ハ 亠
穥 : 一 ｜ ノ 亠 ハ 木 禾
穧 : ノ 亠 刀 木 氏 禾 齊
穩 : ヨ 禾 工 心 爪
穪 : 一 ｜ ノ ハ 冂 木 爻 禾
穫 : 禾 又 ⺾ 隹
穭 : ノ 日 木 灬 田 禾 魚
穰 : ｜ 衣 一 禾 口 亠
穴 : 穴 ハ 宀
穵 : 乙 儿 ハ 宀
究 : 穴 九 儿 宀
穸 : 儿 ハ 夕 宀
穹 : 弓 穴 儿 宀
空 : 穴 工 儿 宀
穽 : ｜ ノ 穴 二 儿 宀 井
穾 : ノ ハ 大 宀
穿 : 牙 穴 儿 宀
窀 : ノ 乙 儿 ハ 凵 宀 屯
突 : 穴 大 儿 宀
窂 : 儿 ハ 宀 牛
窃 : 穴 刀 儿 匕 宀
窄 : ｜ ノ 穴 儿 宀
窅 : 儿 ハ 宀 目
窆 : 丶 ノ 乙 儿 ハ 宀
窈 : 穴 力 儿 宀 幺
窊 : 儿 ハ 厶 宀 瓜
窋 : ｜ ハ 凵 宀
窐 : 儿 ハ 土 宀
窑 : ハ 凵 宀 山 缶
窒 : 一 穴 至 土 儿 厶 宀
窓 : 穴 心 儿 厶 宀
窔 : 亠 儿 ハ 宀 父
窕 : 穴 儿 冫 宀
窖 : ノ 穴 口 土 儿 宀
窗 : 穴 儿 囗 宀 夕
窘 : ノ ヨ 一 穴 口 儿 宀
窞 : ハ 勹 宀 臼
窟 : ｜ 穴 山 儿 宀 尸
窠 : 儿 ハ 宀 日 木 田
窣 : 亠 人 儿 ハ 十 宀
窩 : 穴 口 入 冂 宀
窪 : 穴 氵 土 儿 宀
窬 : 一 丶 𠆢 儿 ハ 冂 刂 宀 月
窮 : 弓 穴 身 儿 宀
窯 : 王 穴 并 羊 儿 宀 灬
窰 : 缶 穴 夕 儿 凵 宀
窳 : 儿 ハ 厶 宀 瓜
窵 : 儿 ハ 宀 灬 鳥
窶 : ｜ 一 穴 口 女 儿 宀
窹 : 一 二 儿 ハ 口 宀 爿 五
窺 : 見 ハ 宀 一 大 穴
窻 : ノ 儿 ハ 口 夂 宀 心
窼 : 儿 ハ 宀 巛 日 木 田
窾 : 二 人 ハ 勹 士 宀 小 欠 示 穴
窿 : 穴 生 儿 夂 宀 ⻖
竃 : 亀 穴 土 宀 儿 乙 勹 田
竄 : 臼 穴 鼠 儿 宀
竅 : 穴 白 方 儿 宀 攵
竆 : 一 ノ 儿 ハ 口 宀 牙
竇 : 貝 目 ハ 穴 士 儿 冂 宀
竈 : 穴 土 儿 宀 黽
竉 : 乙 ハ 宀 月 立 竜
竊 : 穴 釆 米 卜 儿 冂 厶 宀 禸
立 : 立
竌 : 几 立
竍 : 十 立
竎 : 廾 立
竏 : ノ 十 立
竑 : 一 ノ 厶 立
竒 : 一 口 并 立 亅 亠
竓 : 毛 立
竕 : 刀 并 立
站 : 口 卜 立
竚 : 立 亅 宀
竛 : 丶 𠆢 マ 立
竜 : 立 竜 田 乙
竝 : 立
竟 : 音 日 立 儿
章 : 音 十 日 立
竡 : 一 白 立
竢 : 矢 立 厶
竣 : 立 儿 厶 夂
童 : 里 立
竦 : ｜ 口 并 木 立
竧 : 立 身
竨 : 十 卜 日 立
竩 : 一 宀 目 立
竪 : 臣 又 立
竫 : 亅 勹 ヨ 爪 立
竬 : ノ 冂 厶 口 禸 立 虫
竭 : 日 立 勹 匕
端 : 山 而 立
竰 : 里 立 厂
竱 : 一 厶 寸 日 立 虫
竴 : ハ 并 寸 立 酉
競 : 口 立 儿
竸 : 音 日 立 儿
竹 : 竹
竺 : 竹 二
竻 : 力 竹
竽 : 亅 二 竹
竾 : ｜ 乙 匕 也 竹
竿 : 干 竹
笂 : 九 竹 丶
笄 : ｜ ノ 竹 二 廾
笆 : 竹 巴
笇 : 亠 卜 竹
笈 : ノ 竹 及
笊 : 竹 爪
笋 : ノ ヨ 竹
笏 : ノ 竹 勹 勿
笑 : 禾 竹 大
笒 : 一 𠆢 竹
笔 : 一 ノ 乙 竹
笘 : 口 竹 卜
笙 : 生 竹
笛 : ｜ 竹 日 田
笞 : 口 竹 厶
笟 : 厶 瓜 竹
笠 : 竹 立
笣 : 勹 已 竹
笥 : 一 口 竹 亅
符 : ⺅ 寸 竹
笧 : 一 ｜ 亅 冂 廾 冊 竹
笨 : ｜ 竹 木
笩 : ⺅ 弋 竹
笪 : 一 日 竹
笫 : 亅 牙 竹
第 : 弓 竹
笭 : 一 ｜ 丶 亅 𠆢 マ 竹
笮 : 一 ｜ ノ 竹
笯 : 又 女 竹
笰 : 廾 弓 竹
笱 : 勹 口 竹
笳 : 口 竹 力
笴 : 一 亅 口 竹
笵 : 氵 竹 卩
笶 : 竹 矢
笹 : 世 竹
笻 : 卩 工 竹
笽 : 皿 竹
笿 : 口 夂 竹
筀 : 土 竹
筁 : ｜ 日 竹
筅 : 竹 土 儿
筆 : 竹 聿
筇 : 工 ⻏ 竹
筈 : 口 舌 竹
等 : 寸 竹 土
筋 : 月 竹 力
筌 : 王 竹 𠆢
筍 : 竹 日 勹
筎 : 口 女 竹
筏 : ⺅ 竹 戈
筐 : 王 竹 匚
筑 : 工 竹 丶 几
筒 : 口 竹 冂
答 : 口 竹 𠆢
筕 : 彳 竹 行
策 : ｜ 巾 竹 ハ 木 亅 冂
筝 : ヨ 竹 亅 勹
筠 : 一 丶 勹 土 竹
筤 : 丶 竹 艮
筥 : 口 竹
筦 : 二 儿 宀 元 竹
筧 : 見 竹
筩 : マ 用 竹
筪 : ｜ 匚 日 田 竹
筬 : ノ 竹 戈
筭 : 一 ｜ 二 廾 竹
筮 : 工 人 竹
筯 : 力 目 竹
筰 : ｜ ノ ⺅ 竹
筱 : ⺅ 竹 攵 ｜
筲 : 小 ⺌ 月 竹
筳 : ノ 土 士 廴 王 竹
筴 : 人 大 竹
筵 : 止 竹 廴 ノ
筷 : 人 ユ 忄 竹
筹 : 一 ノ 二 寸 竹
筺 : 王 竹 匚 丶
筿 : 夂 木 竹
箄 : ノ 十 日 白 竹
箆 : 竹 比 冂
箇 : 口 十 竹 囗
箉 : 力 口 扌 竹
箋 : 竹 戈
箍 : 巾 竹 匚 扌
箎 : 几 匕 卜 厂 竹 虍
箏 : ヨ 竹 爪 亅
箐 : 一 ｜ 二 亠 冂 土 月 竹 青
箑 : 土 ヨ 竹 走
箒 : ヨ 巾 竹 冖
箔 : 氵 竹 白
箕 : 甘 竹 ハ
箖 : 木 竹
算 : 竹 目 廾
箘 : 禾 竹 囗
箙 : 月 竹 又 卩
箚 : 刂 口 竹 𠆢
箛 : 厶 子 瓜 竹
箜 : 穴 工 竹 儿 宀
箝 : 甘 竹 扌
箞 : 一 丶 ノ 乙 亅 ハ 并 大 竹
箟 : 竹 日 比
箠 : 一 ｜ ノ 二 竹
管 : 口 竹 宀
箥 : ノ 十 厂 又 氵 支 竹
箪 : 十 ⺌ 竹 田
箬 : 一 ノ 口 ⺾ 竹
箭 : 一 刂 月 竹 并
箯 : 一 丶 ノ ⺅ 日 竹
箰 : 勹 子 日 竹
箱 : 竹 木 目
箲 : ノ 儿 土 氵 竹
箴 : ノ 口 竹 戈
箵 : ノ 小 目 竹
箶 : 十 口 月 竹
箸 : 竹 日 ⺹
箺 : 一 丶 ノ 二 大 日 曰 竹
箻 : ｜ 二 ヨ 彳 竹 聿
箼 : 一 厶 土 尸 竹
箽 : 一 ノ 竹 車
節 : 艮 竹 卩
篁 : 王 竹 白
篂 : 日 曰 生 竹
範 : 乙 車 竹 卩
篅 : 山 竹 而
篆 : 彑 竹 豕
篇 : ｜ 一 戸 竹 冂 冊 尸
篈 : 土 寸 竹
築 : 工 竹 木 丶 几
篊 : ｜ 二 ハ 氵 竹
篋 : 人 大 竹 匚
篌 : ⺅ 竹 矢 ユ
篏 : 甘 欠 竹
篔 : ハ 口 目 竹 貝
篖 : ｜ 口 广 ヨ 竹
篗 : 又 竹 隹
篙 : 亠 冂 口 竹 高
篚 : 匚 竹 非
篛 : 冫 弓 竹
篝 : ｜ 一 竹 二 冂
篠 : ｜ ⺅ 竹 木 攵
篤 : 竹 灬 馬
篥 : 西 竹 木
篦 : 竹 比 囗
篨 : 二 𠆢 小 ⻖ 竹
篩 : 巾 口 竹
篪 : 儿 几 匕 卜 厂 竹 虍
篭 : 竹 立 竜
篰 : 口 ⻏ 立 竹
篲 : 一 ｜ 二 ヨ 竹
篳 : ｜ 一 竹 田 日
篴 : 辶 竹 豕
篵 : 人 彳 止 竹
篶 : 一 止 竹 鳥 灬
篷 : 辶 竹 夂
篸 : 𠆢 厶 彡 竹
篹 : 乙 亅 大 目 竹
篺 : ノ 十 扌 日 竹
篼 : 一 ノ 儿 日 白 竹
篾 : 丶 ノ 厂 戈 罒 竹
簀 : 貝 目 ハ 竹 土 二 亠
簁 : 彳 止 竹
簂 : 一 口 囗 戈 竹
簃 : ノ 夕 木 禾 竹
簄 : 丶 乙 口 尸 已 ⻏ 巴
簆 : 二 儿 卜 又 宀 元 竹
簇 : 竹 方 矢
簉 : ｜ ノ 二 辶 口 土 竹
簋 : 皿 竹 艮
簌 : 人 勹 口 木 欠 竹
簍 : ｜ 一 口 女 竹
簎 : ｜ 二 扌 日 竹
簏 : 匕 广 比 竹 鹿
簑 : 衣 一 竹 亠 口
簒 : 大 竹 目 厶
簓 : 口 十 竹 冂 彡
簔 : 衣 一 竹 亠 口
簗 : 氵 竹 刀 木 丶
簙 : 丶 十 寸 月 竹
簛 : 二 ハ 斤 甘 竹
簞 : 一 ｜ 十 口 日 田 竹
簟 : 十 西 竹 日 曰
簠 : 丶 十 日 月 皿 竹
簡 : 竹 日 門
簣 : ｜ 一 貝 目 ハ 口 竹
簥 : ノ 冂 口 大 竹
簦 : 丶 ノ 并 口 竹 豆
簧 : 黄 竹 田 ハ
簨 : ｜ 二 ハ 已 竹
簪 : 竹 日 无
簫 : ｜ ノ ヨ 水 竹 隶 聿
簬 : 口 夂 竹 足
簱 : ｜ 二 ハ 方 甘 竹
簳 : 一 𠆢 十 干 日 竹
簴 : 一 ｜ 丶 ノ ハ 匕 卜 厂 竹 虍
簶 : ｜ ノ 二 ヨ 水 礻 竹
簷 : 言 竹 儿 厂
簸 : 甘 竹 皮 又
簹 : 冖 口 ⺌ 田 竹
簺 : 一 ｜ 丶 ノ 二 冖 土 竹
簽 : 口 人 竹 𠆢
簾 : ｜ ヨ 竹 ハ 广
簿 : 十 氵 寸 竹 田 丶
籀 : 竹 田 刀 厶 扌
籃 : 皿 臣 竹 二
籅 : ハ 竹 臼
籆 : 又 ⺾ 竹 隹
籊 : 冫 竹 羽 隹
籌 : 口 工 士 寸 竹
籍 : ｜ 一 竹 土 日 ハ 木 亠 耒
籏 : 甘 竹 ハ 方
籐 : 月 人 水 大 竹 二 并
籑 : 一 丶 大 目 竹 艮
籒 : 一 ｜ 扌 田 竹
籓 : ノ 氵 田 竹 米
籔 : 女 竹 米 攵
籕 : ノ 刀 厶 木 田 竹
籖 : 竹 土 戈 韭
籗 : 竹 隹 雨
籘 : 月 糸 幺 小 人 大 竹 二 并
籙 : ヨ 彑 水 竹 金
籚 : 匕 卜 厂 田 皿 竹 虍
籛 : 戈 竹 金
籜 : 一 并 十 土 干 扌 罒 竹
籝 : 一 丶 亠 几 口 女 亡 月
籞 : ノ 二 儿 卩 彳 止 元 竹
籟 : ｜ 貝 目 口 竹 ハ 頁 木
籠 : 月 竹 立
籡 : 一 人 𠆢 口 扌 竹
籣 : 并 口 木 竹 門
籤 : 竹 戈 韭 人
籥 : ｜ 一 口 竹 𠆢 冊 龠
籧 : 匕 卜 厂 辶 竹 虍 豕
籩 : 儿 ハ 辶 宀 方 目 竹 自
籬 : 竹 亠 凵 禸 隹
籭 : 一 丶 冂 匕 广 比 竹 鹿
籮 : 小 幺 罒 竹 糸 隹
籯 : 一 ノ 乙 亠 ハ 口 亡 月 目 竹 貝
籰 : 又 目 竹 隹
籲 : 一 ｜ 亅 𠆢 ハ 冂 口 廾 目 冊 竹 貝 頁 龠
米 : 米
籵 : 十 米
籹 : 女 米
籼 : 山 米
籽 : 子 米
籾 : 刀 米 丶
粁 : 干 米 十
粂 : 久 米
粃 : 比 米
粆 : ノ 小 米
粇 : 亠 几 米
粉 : 刀 并 米 ハ
粋 : 九 十 米
粍 : 米 毛
粏 : 丶 大 米
粐 : 戸 米 一 尸
粒 : 米 立
粔 : 匚 口 米
粕 : 白 米
粗 : 一 米 目
粘 : 口 米 卜
粛 : ｜ ノ ヨ 米 隶
粞 : 米 西
粟 : 西 米
粠 : ｜ 二 ハ 米
粡 : 口 米 冂 一
粢 : 欠 米 冫
粤 : 一 米 囗 勹
粥 : 弓 米
粦 : 夕 米 舛
粧 : 土 米 广
粨 : 貝 目 ハ 米 頁 白
粫 : 而 米
粭 : 口 米 𠆢
粮 : 艮 米
粰 : 子 爪 米
粱 : 氵 刀 并 米
粲 : 米 卜 又 夕
粳 : ノ 日 米
粶 : ヨ 彑 水 米
粷 : 勹 米
粹 : 十 人 米 亠
粺 : ノ 十 日 白 米
粻 : 米 長
粼 : 夕 米 舛
粽 : 示 二 小 米 宀
精 : 月 青 土 二 米 亠
粿 : 日 木 田 米
糀 : ⺅ 米 匕 ⺾
糂 : 甘 米 儿 匚
糄 : 一 ｜ 亅 冂 尸 廾 戸 冊 米
糅 : 米 矛 木 マ
糇 : 一 ノ ⺅ ユ 大 矢 米
糈 : 月 疋 米
糉 : 丶 ノ 儿 ハ 凵 夂 米
糊 : 月 口 十 米
糍 : 一 并 幺 米
糎 : 米 里 厂
糏 : ⺌ 尸 月 米
糒 : 米 用 厂 ⺾
糓 : 一 冖 几 又 士 殳 米
糔 : 丶 又 米 虫
糕 : 并 灬 王 米
糖 : 口 米 广
糗 : 丶 大 犬 目 米 自
糘 : 米 宀 豕
糙 : ｜ ノ 二 辶 口 土 米
糚 : 士 ⺾ 爿 米
糜 : 米 木 广 麻
糝 : 𠆢 厶 彡 米
糞 : ｜ 一 田 二 并 米 井
糟 : ｜ 一 日 米
糠 : ヨ 水 米 广 隶
糢 : 大 日 米 ⺾
糦 : 一 并 十 口 士 米 豆
糧 : 一 日 米 里
糩 : 一 ｜ 𠆢 并 口 日 米
糫 : 一 口 罒 米 衣
糯 : 雨 而 米
糲 : 田 米 厂 禸 ⺾
糴 : ヨ 入 米 隹
糵 : ｜ ノ 十 口 ⺾ 立 米 辛
糶 : ｜ ヨ 山 米 隹
糸 : 糸 幺 小
糺 : 乙 糸 幺 小
系 : ノ 糸 幺 小
糾 : ｜ 糸 幺 小 十
紀 : 糸 幺 小 已
紂 : 糸 幺 小 寸
紃 : 小 川 幺 糸
約 : 糸 幺 小 丶 勹
紅 : 工 糸 幺 小
紆 : 糸 幺 小 二 亅
紇 : 一 ノ 乙 小 幺 糸
紈 : 丶 九 小 幺 糸
紉 : ノ 刀 小 幺 糸
紊 : 糸 幺 小 文
紋 : 糸 幺 小 文
納 : 糸 幺 小 人 冂
紏 : 小 幺 斗 糸
紐 : ｜ 一 糸 幺 小
紑 : 一 ｜ 丶 ノ 小 幺 糸
紒 : ｜ ノ 𠆢 小 幺 糸
紓 : マ 小 幺 矛 糸
純 : 糸 幺 小 屯
紕 : 糸 幺 小 比
紖 : ｜ 小 幺 弓 糸
紗 : ノ 糸 幺 小
紘 : ノ 一 糸 幺 小 厶
紙 : 氏 糸 幺 小
級 : ノ 糸 幺 小 及
紛 : 糸 幺 小 刀 ハ
紜 : 糸 幺 小 二 厶
紝 : ノ 士 小 幺 王 糸
紞 : ノ 乙 冖 小 尢 幺 糸
素 : 糸 幺 小 土 亠
紡 : 糸 幺 小 方
索 : 糸 幺 小 十 冖
紣 : 十 九 小 幺 糸
紦 : 乙 小 已 幺 巴 糸
紪 : 匕 小 幺 止 糸
紫 : 止 糸 幺 小 匕
紬 : ｜ 糸 幺 小 日 田
紭 : 厶 小 幺 弓 糸
紮 : 乙 糸 幺 小 木
累 : 糸 幺 小 田
細 : 糸 幺 小 田
紱 : 丶 ノ 又 大 小 幺 弋 犬 糸
紲 : 糸 幺 小 世
紳 : ｜ 糸 幺 小 日 田
紵 : 糸 幺 小 亅 宀
紹 : 口 糸 幺 小 刀
紺 : 甘 糸 幺 小
紼 : 小 幺 廾 弓 糸
紽 : 匕 宀 小 幺 糸
紾 : 𠆢 小 幺 彡 糸
紿 : 口 糸 幺 小 厶
絀 : ｜ 凵 小 幺 糸
絁 : 一 ｜ ノ 乙 匕 小 幺 也 糸
終 : 糸 幺 小 夂
絃 : 玄 糸 幺 小 亠
組 : 一 糸 幺 小 目
絅 : 口 糸 幺 小 冂
絆 : ｜ 糸 幺 小 二 并 十
絇 : 勹 口 小 幺 糸
絈 : 小 幺 日 白 糸
絋 : 糸 幺 小 厶 广
経 : 糸 幺 小 土 又
絍 : ノ ⺅ 士 小 幺 王 糸
絎 : 行 糸 幺 小 彳
絏 : ノ 糸 幺 小 日
結 : 口 士 糸 幺 小
絑 : 一 ノ 小 幺 木 糸
絓 : 土 小 幺 糸
絖 : 糸 幺 小 ⺌ 儿
絗 : 口 囗 小 幺 糸
絙 : 一 小 幺 日 糸
絚 : 一 丶 二 小 幺 五 糸
絛 : ⺅ 糸 幺 小 夂 攵
絜 : 一 ｜ 二 刀 小 幺 糸
絝 : 二 勹 大 小 幺 糸
絞 : 糸 幺 小 父 亠
絡 : 口 糸 幺 小 夂
絢 : 糸 幺 小 日 勹
絣 : ｜ ノ 糸 幺 小 二 并 廾
絥 : 丶 ⺅ 大 小 幺 犬 糸
給 : 口 糸 幺 小 𠆢
絧 : 一 冂 口 小 幺 糸
絨 : ノ 一 糸 幺 小 戈
絪 : 囗 大 小 幺 糸
絮 : 口 糸 幺 小 女
絰 : 一 厶 土 小 幺 糸 至
統 : 糸 幺 小 亠 儿 厶
絲 : 糸 幺 小
絳 : 糸 幺 小 二 夂
絵 : 糸 幺 小 二 𠆢 厶
絶 : 糸 幺 小 色
絸 : 儿 小 幺 目 糸 見
絹 : 月 口 糸 幺 小
絺 : 一 ｜ 丶 ノ 冂 小 巾 幺 糸
絻 : 一 ｜ ノ 乙 儿 勹 口 小 幺 糸 免
絽 : 口 糸 幺 小
絿 : 一 丶 小 幺 水 糸
綁 : 一 ノ 小 幺 ⻏ 糸
綂 : 亠 儿 口 小 幺 糸
綃 : 小 ⺌ 幺 月 糸
綅 : 冖 又 小 幺 ヨ 糸
綆 : 一 丶 ノ 小 幺 日 糸
綈 : ｜ ノ 并 小 幺 弓 糸
綉 : 勿 禾 糸 幺 小
綋 : 一 ノ 厶 宀 小 幺 糸
綌 : 𠆢 ハ 口 小 幺 糸 谷
綍 : 冖 十 子 小 幺 糸
綏 : 糸 幺 小 女 爪
綑 : 囗 小 幺 木 糸
經 : 工 糸 幺 小 巛
綖 : ノ 小 幺 廴 止 糸
綗 : 儿 ハ 冂 口 小 幺 糸
継 : ｜ 糸 幺 小 米
続 : 士 糸 幺 小 儿 冖
綛 : 丶 糸 幺 小 心 刀
綜 : 糸 幺 小 示 二 小 宀
綝 : 小 幺 木 糸
綞 : 一 ｜ ノ 小 幺 糸
綟 : 戸 糸 幺 小 大 一 尸
綠 : 小 幺 ヨ 彑 水 糸
綢 : 口 糸 幺 小 土 冂
綣 : 糸 幺 小 人 大 二 并 已
綦 : ｜ 丶 ノ 二 小 幺 糸
綧 : 亠 口 子 小 幺 糸
綪 : 二 亠 土 小 幺 月 糸 青
綫 : 糸 幺 小 戈
綬 : 糸 幺 小 爪 又 冖
維 : 糸 幺 小 隹
綮 : 戸 糸 幺 小 攵 一 尸
綯 : 缶 糸 幺 小 凵 勹
綰 : ｜ 口 糸 幺 小 宀
綱 : 糸 幺 小 并 冂 山 一 岡
網 : 亡 糸 幺 小 并 冂
綳 : 小 幺 月 糸
綴 : 糸 幺 小 又
綵 : 糸 幺 小 爪 木
綶 : 小 幺 日 木 田 糸
綷 : 亠 人 十 小 幺 糸
綸 : ｜ 一 糸 幺 小 𠆢 冊
綹 : 卜 口 夂 小 幺 糸
綺 : 口 糸 幺 小 大 亅 一
綻 : 糸 幺 小 疋 宀
綽 : 糸 幺 小 十 日 卜
綾 : 糸 幺 小 土 儿 夂
綿 : 巾 糸 幺 小 白
緀 : 一 ｜ 十 女 小 幺 ヨ 糸
緂 : 小 幺 火 糸
緃 : 人 小 幺 止 糸
緄 : 匕 小 幺 日 曰 比 糸
緅 : 又 小 幺 糸 耳
緆 : ノ 勹 小 幺 日 曰 勿 糸
緇 : 糸 幺 小 巛 田
緊 : 糸 幺 小 臣 又
緋 : 糸 幺 小 非
緌 : ノ 女 小 幺 木 禾 糸
緍 : 小 幺 日 曰 氏 糸
緎 : 一 口 小 幺 戈 糸
総 : 糸 幺 小 心 ハ 厶
緑 : ヨ 糸 幺 小 水 隶
緒 : 糸 幺 小 日 ⺹
緕 : 糸 幺 小 斉 文
緖 : 丶 ノ 土 小 幺 ⺹ 日 糸
緗 : 小 幺 木 目 糸
緘 : ノ 口 糸 幺 小 戈
緙 : 十 口 小 幺 廾 糸 革
線 : 糸 幺 小 水 白
緜 : ノ 巾 糸 幺 小 白
緝 : 口 糸 幺 小 耳
緞 : ｜ 糸 幺 小 殳 几 又
締 : 巾 糸 幺 小 并 立 亠 冖
緡 : 口 氏 糸 幺 小 日
緢 : 小 幺 ⺾ 田 糸
緣 : 小 幺 ヨ 彑 糸 豕
緤 : 糸 幺 小 木 世
緥 : ⺅ 口 小 幺 木 糸
緦 : 小 幺 心 田 糸
編 : ｜ 一 戸 糸 幺 小 冂 冊 尸
緩 : 糸 幺 小 爪 一 ノ 又
緪 : 一 丶 二 小 幺 忄 五 糸
緫 : 丶 ノ 勹 小 幺 心 勿 糸
緬 : 糸 幺 小 面
緭 : 小 幺 月 田 糸
緯 : 口 糸 幺 小 韋
緱 : 一 ノ ⺅ ユ 大 小 幺 矢 糸
緲 : ノ 糸 幺 小 目
練 : ｜ 糸 幺 小 日 ハ 木 田
緵 : 丶 ノ 儿 ハ 凵 夂 小 幺 糸
緶 : 一 丶 ノ ⺅ 小 幺 日 糸
緹 : 小 幺 日 疋 糸
緺 : 冂 口 小 幺 糸
緻 : 糸 幺 小 至 土 厶 攵 一
縀 : 一 ｜ 又 口 小 幺 糸
縁 : ヨ 糸 幺 小 豕
縄 : 亀 糸 幺 小 田 乙 勹
縅 : ノ 糸 幺 小 女 戈
縈 : 冖 小 幺 火 糸
縉 : 一 糸 幺 小 二 日 厶
縊 : 皿 糸 幺 小 并
縋 : ｜ 口 辶 糸 幺 小
縐 : 勹 小 屮 幺 糸
縑 : 一 ｜ ノ 并 小 幺 ヨ 糸
縒 : 王 工 糸 幺 小 并 羊
縕 : 人 口 小 幺 皿 糸
縗 : 一 亠 口 小 幺 糸 衣
縛 : 糸 幺 小 十 寸 田 丶
縜 : ハ 口 小 幺 目 糸 貝
縝 : 一 ハ 匕 十 小 幺 目 糸 貝
縞 : 口 高 糸 幺 小 亠 冂
縟 : 糸 幺 小 寸 辰
縠 : 一 冖 几 又 士 小 幺 殳 糸
縡 : 糸 幺 小 十 辛 立 宀
縢 : 月 糸 幺 小 人 大 二 并
縣 : 糸 幺 小 目 一 ｜
縦 : 糸 幺 小 并 疋 彳
縧 : 一 ｜ ⺅ 夂 小 幺 木 糸
縨 : 一 儿 小 ⺌ 幺 日 糸
縫 : ｜ 一 辶 糸 幺 小 夂
縬 : 一 ノ 卜 厂 小 幺 戈 糸
縭 : 丶 ノ 亠 冂 凵 厶 小 幺 禸 糸
縮 : ⺅ 糸 幺 小 白 宀
縯 : 一 ｜ ハ 宀 小 幺 日 田 糸
縱 : ⺅ 糸 幺 小 人 走 土 彳
縲 : 糸 幺 小 田
縳 : 一 寸 小 幺 糸 虫
縵 : 糸 幺 小 日 罒 又
縶 : 一 丶 并 十 九 土 小 干 幺 糸
縷 : ｜ 一 口 糸 幺 小 女
縹 : 糸 幺 小 示 二 小 西
縺 : 辶 糸 幺 小 車
縻 : 糸 幺 小 木 广 麻
總 : 糸 幺 小 心 囗 夂
績 : 貝 目 ハ 糸 幺 小 土 亠
縿 : 𠆢 厶 小 幺 彡 糸
繁 : 糸 幺 小 母 攵 毋
繃 : 月 山 糸 幺 小
繄 : 一 ノ 几 匚 又 大 小 幺 殳 矢 糸
繅 : 小 巛 幺 日 木 田 糸
繆 : 羽 糸 幺 小 𠆢 冫 彡
繇 : 丶 ノ 凵 夕 小 山 幺 爪 糸 缶
繊 : 糸 幺 小 土 戈 赤
繋 : 糸 幺 小 車 殳 几 又
繍 : ｜ ノ ヨ 糸 幺 小 水 隶
繎 : 丶 夕 大 小 幺 灬 犬 糸
繐 : 一 小 幺 心 糸 虫
繒 : ｜ ハ 并 口 小 幺 日 糸
織 : 音 糸 幺 小 日 立 戈
繕 : 王 口 糸 幺 小 并 羊
繖 : ｜ 一 月 糸 幺 小 二 攵
繘 : ハ 冂 マ 口 小 幺 矛 糸
繙 : 糸 幺 小 田 釆 米
繚 : 糸 幺 小 大 日 并 亠
繝 : 糸 幺 小 日 門
繞 : 糸 幺 小 土 儿
繟 : 十 口 小 幺 日 田 糸
繡 : ｜ 小 幺 ヨ 爿 片 糸
繢 : 一 ｜ ハ 口 小 幺 目 糸 虫 貝
繥 : 一 并 十 口 士 小 幺 糸 豆
繦 : 弓 糸 幺 小 虫 厶
繧 : 雨 糸 幺 小 二 厶
繩 : 糸 幺 小 黽
繪 : 糸 幺 小 日 罒 𠆢
繫 : 几 凵 又 小 幺 殳 糸 車
繭 : 糸 幺 小 虫 風 冂 ⺾
繮 : 一 小 幺 田 糸
繯 : 一 口 小 幺 罒 糸 衣
繰 : 口 糸 幺 小 木 品
繳 : 小 幺 攵 方 日 白 糸
繵 : 一 亠 口 囗 小 幺 日 糸
繸 : ハ 并 辶 小 幺 糸 豕
繹 : 糸 幺 小 十 辛 土 罒 立 亠
繻 : 雨 糸 幺 小 而
繼 : ｜ 糸 幺 小 匚
繽 : ノ 貝 目 ハ 糸 幺 小 宀
繾 : 一 ｜ 辶 口 小 幺 糸 虫
繿 : 皿 糸 幺 小 臣 二
纁 : 一 ｜ ノ 二 并 口 小 幺 灬 糸
纂 : 糸 幺 小 竹 目
纃 : 糸 幺 小 齊 刀 氏 廾
纆 : 并 口 土 小 幺 灬 糸 里 黒
纇 : ハ 小 幺 目 米 糸 貝 頁
纈 : 貝 目 ハ 口 士 糸 幺 小 頁
纉 : 貝 目 ハ 糸 幺 小 人 大 二 亠
纊 : ハ 小 幺 广 田 糸 黄
續 : 貝 目 ハ 士 糸 幺 小 儿 囗
纍 : 小 幺 田 糸
纎 : 糸 幺 小 土 戈 韭
纏 : 糸 幺 小 土 里 儿 广
纐 : 貝 目 ハ 糸 幺 小 父 頁 亠
纑 : 匕 卜 厂 小 幺 田 皿 糸 虍
纒 : 黒 糸 幺 小 土 里 厂 灬
纓 : 貝 目 ハ 糸 幺 小 女
纔 : 糸 幺 小 比 儿
纕 : 一 ｜ 二 亠 口 小 幺 糸 衣
纖 : 糸 幺 小 人 戈 韭
纘 : ノ 儿 ハ 土 小 幺 目 糸 貝
纚 : 一 丶 冂 匕 小 幺 广 比 糸 鹿
纛 : 糸 幺 小 土 二 母 目 亠 毋
纜 : 見 糸 幺 小 臣 二
纝 : 小 幺 田 糸
纞 : 小 幺 心 糸 言
缶 : 缶 凵 山
缸 : 缶 工 凵
缺 : ノ 缶 人 大 二 凵
缻 : 一 丶 乙 凵 山 缶
缼 : 人 凵 勹 山 欠 缶
缽 : 一 凵 山 木 缶
缾 : 一 并 凵 山 廾 缶
缿 : 一 ノ 凵 口 山 缶
罃 : 冖 凵 山 火 缶
罄 : ｜ 几 凵 又 士 尸 山 殳 缶
罅 : 缶 二 并 卜 亅 凵 匕 厂 虍
罇 : ハ 并 凵 寸 山 缶 酉
罌 : 貝 目 ハ 缶 凵
罍 : 缶 田 凵
罎 : 雨 缶 二 日 凵 厶
罏 : 凵 匕 卜 厂 山 田 皿 缶 虍
罐 : 缶 口 凵 ⺾ 隹
网 : ノ 丶 冂
罒 : 罒
罓 : 丶 ノ 冂
罔 : 亡 一 并 冂 亠
罕 : 干 儿 冖
罘 : ｜ ノ 一 罒 丶
罛 : 厶 瓜 罒
罜 : 丶 王 罒
罝 : 一 目 罒
罟 : 口 士 罒
罠 : 口 氏 罒
罡 : 一 止 罒
罣 : 土 罒
罤 : ｜ ノ 并 弓 罒
罥 : 口 月 罒
罦 : 子 爪 罒
罧 : 罒 木
罨 : 乙 大 日 罒 奄
罩 : 十 日 罒 卜
罪 : 罒 非
罫 : 土 罒 卜
罭 : 一 口 戈 罒
置 : 十 罒 目 一 ｜
罰 : 刂 言 罒
罱 : 一 并 冂 十 干 罒
署 : 日 罒 ⺹
罵 : 馬 罒
罷 : 月 罒 匕 厶
罸 : 言 寸 罒
罹 : 罒 忄 隹
罽 : 刂 厂 火 罒
罾 : 一 ハ 并 口 日 罒
罿 : 立 罒 里
羀 : 一 ｜ 丶 ノ 冂 田
羂 : 月 口 糸 幺 小 罒
羃 : 巾 大 日 罒 ⺾
羅 : 糸 幺 小 罒 隹
羆 : 月 罒 厶 匕 灬
羇 : 革 口 大 罒 亅 凵
羈 : 革 馬 罒
羊 : 王 并 羊
羋 : 一 ｜ 二 卜
羌 : 王 并 羊 儿
羍 : 并 大 王 羊
美 : 王 大 并 羊
羏 : 并 彡 王 羊
羐 : 一 ｜ 卜 土 夂
羑 : 并 夂 王 羊
羔 : 王 并 羊 灬
羖 : 并 几 又 殳 王 羊
羗 : 乙 并 厶 王 羊
羚 : 王 并 羊 𠆢 卩
羜 : 一 亅 并 宀 王 羊
羝 : 王 氏 并 羊
羞 : ノ ヨ 王 并 羊
羡 : 人 并 冫 勹 欠 王 羊
羢 : 一 ノ 并 戈 王 羊
羣 : ノ ヨ 王 口 并 羊
群 : 一 王 口 并 羊 ノ
羦 : 二 儿 并 宀 王 元 羊
羨 : 王 欠 氵 并 羊
義 : 一 王 并 羊 亅 戈 手
羪 : 丶 并 王 羊 艮
羭 : 一 𠆢 并 刂 月 王 羊
羮 : 王 人 大 并 羊 灬
羯 : 王 日 并 羊 勹 匕
羲 : 王 禾 并 羊 戈
羴 : 并 王 羊
羶 : 王 口 日 并 羊 亠 囗
羸 : 王 亡 月 口 并 羊 丶 几
羹 : 王 大 并 羊 灬
羼 : 并 尸 王 羊
羽 : 羽 冫
羿 : ノ 冫 廾 羽
翀 : ｜ 冫 口 羽
翁 : 羽 ハ 冫 厶
翃 : 一 ノ 冫 厶 羽
翅 : 羽 支 冫 又 十
翆 : 羽 九 十 冫
翈 : ｜ 冫 日 田 羽
翊 : 羽 立 冫
翌 : 羽 立 冫
翎 : 一 ｜ ノ 亅 𠆢 冫 厶 羽
翏 : 𠆢 冫 彡 羽
習 : 羽 白 冫
翔 : 羽 并 羊 冫
翕 : 羽 口 𠆢 冫
翛 : ｜ ⺅ 冫 夂 羽
翟 : ノ 冫 羽 隹
翠 : 羽 十 人 亠 冫
翡 : 羽 非 冫
翣 : ノ 冫 女 立 羽
翥 : 丶 ノ 冫 土 ⺹ 日 羽
翦 : 一 羽 刂 月 并 冫
翨 : 冫 日 曰 疋 羽
翩 : ｜ 一 羽 戸 冊 冫 尸
翫 : 羽 白 儿 冫 元
翬 : ノ 冖 冫 羽 車
翮 : ノ 儿 冂 冫 口 羽 鬲
翯 : ノ 亠 冂 冫 口 羽 高
翰 : 羽 十 日 𠆢 冫
翲 : ノ 二 冫 小 示 羽 西
翳 : 羽 矢 冫 匚 殳 几 又
翹 : 羽 土 儿 冫
翺 : 丶 ノ 二 冫 十 目 羽 自
翻 : 羽 田 釆 米 冫
翼 : ｜ 一 羽 田 二 ハ 冫 井
翽 : 一 ノ 冫 厂 小 戈 止 羽
翾 : 一 ノ 冫 口 罒 羽 衣
翿 : 一 ノ 冫 口 士 寸 工 羽
耀 : ヨ ⺌ 儿 隹
老 : ⺹
耂 : ノ 土 ⺹
考 : ⺹ 勹
耄 : 毛 ⺹
者 : 日 ⺹
耆 : 日 ⺹
耇 : ノ 勹 口 土 ⺹
耈 : ノ 勹 匕 口 土 ⺹
耊 : 一 ノ 厶 土 ⺹ 至
耋 : 至 土 ⺹ 厶
而 : 而
耍 : 女 而
耎 : 大 而
耏 : 彡 而
耐 : 而 寸
耑 : 山 而
耒 : ｜ 木 耒 ノ ノ
耓 : 一 ノ 亅 二 木 耒
耔 : ノ 子 木 耒
耕 : ｜ 土 ハ 木 亅 耒 井
耖 : ノ 小 木 耒
耗 : ｜ 士 ハ 毛 木 耒
耘 : ｜ 二 ハ 木 厶 耒 ノ
耙 : ｜ ハ 木 巴 耒 ノ
耜 : ｜ 口 木 耒 ノ
耝 : 一 ノ 二 木 目 耒
耞 : ノ 力 口 木 耒
耟 : 一 ノ 二 匚 口 木 耒
耠 : 一 ノ 𠆢 口 木 耒
耡 : ｜ ハ 木 目 力 耒 ノ
耤 : ｜ ノ 二 日 木 耒
耦 : ｜ ノ 冂 厶 日 木 田 禸 耒
耨 : ｜ 寸 辰 ハ 木 耒 ノ
耬 : ノ 十 口 女 木 耒
耮 : ノ 冖 力 木 火 耒
耰 : 一 ノ 冖 夂 心 木 目 耒 自
耳 : 耳
耴 : 乙 耳
耵 : 一 亅 耳
耶 : 耳 ⻏
耷 : 大 耳
耹 : 一 丶 𠆢 耳
耺 : 二 厶 耳
耻 : 止 耳
耼 : 二 冂 月 耳
耽 : 耳 尢
耾 : 一 ノ 厶 耳
耿 : 火 耳
聀 : 戈 耳
聃 : ｜ 二 冂 耳
聄 : 𠆢 彡 耳
聆 : 耳 𠆢 卩
聊 : 耳 卩
聒 : 口 耳 舌
聖 : 王 口 耳
聘 : ｜ 耳 日 一 勹
聚 : 耳 又 冫
聞 : 耳 門
聟 : 口 耳 矢
聠 : 一 并 廾 耳
聡 : 耳 心 ハ 厶
聢 : 耳 疋 宀
聤 : 一 亅 亠 冖 口 耳
聦 : 丶 ノ 勹 心 勿 耳
聨 : 耳 幺 廾
聭 : 儿 匕 厶 田 耳 鬼
聯 : 耳 幺
聰 : 耳 心 囗 夂
聱 : 土 士 攵 方 耳
聲 : 士 耳 尸 殳 几 又
聳 : 耳 并 疋 彳
聴 : 耳 十 心 罒
聵 : 一 ｜ ハ 口 目 耳 虫 貝
聶 : 耳
職 : 音 耳 日 立 戈
聹 : 耳 心 罒 亅 宀
聻 : 氵 斤 耳 車
聽 : 王 耳 十 心 罒
聾 : 月 耳 立
聿 : 聿
肁 : ｜ 丶 二 尸 ヨ 聿
肄 : 矢 匕 聿
肅 : ヨ 片 爿 聿
肆 : 長 厶 聿
肇 : 戸 攵 聿 一 尸
肈 : 一 ｜ 丶 二 尸 ヨ 戈 戸 聿
肉 : 肉 冂 人
肋 : 月 力
肌 : 月 几
肎 : 冖 月
肓 : 亡 月 亠
肖 : 月 ⺌
肘 : 月 寸
肙 : 口 月
肚 : 土 月
肛 : 工 月
肜 : 彡 月
肝 : 干 月
肞 : 丶 ノ 又 月
股 : 月 殳 几 又
肢 : 月 支 十 又
肤 : 一 二 人 大 月
肥 : 月 巴
肦 : ハ 冂 冫 刀 月
肧 : 一 ｜ 丶 ノ 月
肩 : 月 戸 一 尸
肪 : 月 方
肫 : ノ 乙 凵 月 屯
肬 : 月 丶 尤 尢
肭 : 人 月 冂
肯 : 月 止
肱 : ノ 一 月 厶
育 : 月 亠 厶
肴 : ノ 一 月 丶
肸 : ハ 十 月
肹 : 一 ハ 勹 月
肺 : 巾 月 亠
胃 : 月 田
胄 : ｜ 月 日 田
胅 : 一 ノ 二 人 大 月
胆 : 一 月 日
胈 : 又 弋 月
胊 : 勹 口 月
背 : 月 匕 爿
胍 : 厶 月 瓜
胎 : 月 口 厶
胏 : ｜ ノ 亅 月
胒 : 匕 尸 月
胔 : 入 冂 匕 止 肉
胕 : ⺅ 寸 月
胖 : ｜ 二 月 并 十
胗 : 𠆢 彡 月
胘 : 亠 幺 月 玄
胙 : ｜ ノ 月
胚 : ｜ ノ 一 月 丶
胛 : ｜ 月 日 田
胝 : 月 氏
胞 : 月 勹 已
胠 : 厶 土 月
胡 : 月 口 十
胤 : 月 儿 幺
胥 : 月 疋
胦 : 冂 大 月
胭 : 囗 大 月
胮 : ｜ 二 夂 月
胯 : 月 大 二 勹
胰 : 大 弓 月
胱 : 月 ⺌ 儿
胲 : ノ 亠 幺 月 玄
胳 : 口 夂 月
胴 : 月 口 冂 一
胵 : 一 厶 土 月 至
胶 : 亠 月 父
胸 : 月 凵 勹 ノ 丶
胹 : 月 而
胺 : 女 宀 月
胻 : 亅 二 彳 月
胼 : ｜ ノ 月 二 并 廾
能 : 月 匕 厶
胾 : 入 冂 十 土 戈 肉
脂 : 月 日 匕
脃 : 乙 刀 勹 已 月 巴 色
脅 : 月 力
脆 : 月 厂 勹
脇 : 月 力
脈 : 斤 月 厂
脉 : 月 水 丶
脊 : 月 𠆢 癶 二
脋 : 刀 月
脍 : 一 二 𠆢 厶 月
脖 : 冖 十 子 月
脗 : ノ 勹 口 月 勿
脘 : 二 儿 宀 月 元
脚 : 月 土 卩 厶
脛 : 月 工 巛
脜 : 一 月 目 自
脞 : 人 土 月
脠 : ノ 廴 月 止
脣 : 月 辰
脤 : 亠 厂 月 衣 辰
脧 : ハ 冂 冫 厶 夂 月
脩 : ⺅ 月 攵
脬 : 子 月 爪
脯 : ｜ 十 月 用 丶
脰 : 并 口 月 豆
脱 : 月 口 并 儿
脳 : 月 ⺌ 凵
脵 : 一 口 大 月
脹 : 月 長
脺 : 亠 人 十 月
脼 : 一 ｜ 入 冂 月
脽 : 月 隹
脾 : 月 十 田
腅 : 月 火
腆 : ｜ 一 月 日 ハ 冂
腇 : ノ 女 月 木 禾
腊 : ｜ 二 日 月
腋 : ⺅ 月 夕 亠
腌 : 乙 大 日 月 奄
腎 : 月 臣 又
腐 : ⺅ 寸 肉 广
腑 : ⺅ 月 寸 广
腒 : 十 口 尸 月
腓 : 月 非
腔 : 穴 月 工 儿 宀
腕 : 月 夕 卩 宀
腗 : ｜ 廾 日 月 田
腟 : 至 土 月 厶 宀
腠 : 一 ノ 大 月
腡 : 冂 口 月
腥 : 月 生 日
腦 : 巛 月 囗
腧 : 一 𠆢 刂 月
腨 : 山 月 而
腩 : 一 并 冂 十 干 月
腫 : ｜ 月 日 里
腭 : 二 勹 口 月
腮 : 月 心 田
腯 : ノ 十 厂 月 目
腰 : 月 女 西
腱 : 月 廴 聿
腴 : 月 人 日 臼
腷 : 一 口 月 田
腸 : 一 月 日 勿
腹 : 月 日 夂
腺 : 月 水 白
腿 : 月 辶 艮
膀 : 月 并 方 立 亠 冖
膁 : 一 ｜ 丶 ノ 并 ヨ 月
膂 : 衣 月 方
膃 : 月 皿 日
膄 : ｜ 又 月 臼
膅 : ｜ 口 广 ヨ 月
膆 : 一 ｜ 二 小 幺 月 糸
膈 : 口 月 儿 冂 鬲
膊 : 十 寸 田 月 日 丶
膋 : 冖 月 火
膎 : 大 幺 月 爪
膏 : 月 口 亠 冖 高
膐 : 一 ノ 入 冂 方 氏 肉
膓 : ノ 月 日 勿
膕 : 口 月 囗 戈
膖 : 一 ｜ 二 辶 夂 月
膘 : 二 小 月 示 西
膚 : 月 田 卜 匕 厂 虍
膛 : 冖 口 土 ⺌ 月
膜 : 月 大 日 ⺾
膝 : 月 水 木 𠆢
膞 : 一 十 厶 寸 日 月 虫
膠 : 羽 月 𠆢 冫 彡
膢 : 十 口 女 月
膣 : 穴 至 土 月 儿 厶 宀
膤 : ヨ 雨 月
膨 : 月 口 十 土 豆 并 彡
膩 : 貝 目 ハ 二 月 弋
膮 : 一 儿 土 月
膰 : 田 月 釆 米
膲 : 月 灬 隹
膳 : 王 月 口 并 羊
膴 : 一 ｜ ノ 月 灬 無
膵 : 十 人 月 亠 ⺾
膸 : ノ 一 月 工 辶
膺 : ⺅ 月 广 隹
膻 : 一 亠 口 囗 日 月
膽 : 言 月 儿 厂 勹
膾 : 月 日 罒 𠆢
膿 : ｜ 衣 一 月 辰 日 厂
臀 : 月 ハ 尸 殳 几 又
臁 : 一 ｜ ノ ハ 广 ヨ 月
臂 : 月 口 十 辛 立 尸
臃 : 亠 幺 月 隹
臅 : 勹 月 罒 虫
臆 : 音 月 心 日 立
臈 : 月 日 勹 匕 ⺾
臉 : 口 人 月 𠆢
臊 : 口 月 木
臋 : ｜ 二 入 ハ 冂 几 又 尸 殳 肉
臍 : 月 齊 刀 氏 廾
臎 : 亠 人 冫 十 月 羽
臏 : 一 ｜ ノ ハ 宀 月 目 貝
臑 : 雨 而 月
臓 : ノ 月 臣 戈 ⺾
臕 : 匕 广 月 比 灬 鹿
臖 : ハ 冂 月 臼
臗 : 丶 儿 宀 ⺾ 月 目 見
臘 : 臼 巛 鼠 月 囗
臙 : 口 月 凵 匕 灬 爿
臚 : 皿 田 月 卜 匕 厂 虍
臛 : 二 冖 月 隹 雨
臝 : 一 丶 亠 几 口 亡 月 木 田
臞 : 月 目 隹
臟 : ノ 臣 月 戈 ⺾
臠 : 言 糸 幺 小 肉
臡 : 入 冂 十 口 大 廾 肉 隹 革
臣 : 臣 匚
臤 : 匚 又 臣
臥 : 臣 人
臧 : ノ 臣 冫 戈 疒
臨 : ノ 口 臣 品
自 : 自
臫 : 乙 目 自
臬 : 木 目 自
臭 : 自 大
臰 : 一 匕 夕 歹 目 自
臱 : 并 宀 方 目 自
臲 : 勹 卩 厂 木 目 自
至 : 一 至 土 厶
致 : 至 土 厶 攵
臵 : 一 厶 口 土 夂 至
臶 : 一 ｜ ノ 厶 土 子 至
臸 : 一 厶 土 至
臹 : 一 ノ 亅 厂 厶 土 戈 至
臺 : 口 士 至 土 冖 厶
臻 : ノ 禾 至 大 土 二 厶
臼 : 臼
臽 : 勹 臼
臾 : 臼 人
臿 : 一 ノ 十 干 臼
舀 : 爪 臼
舁 : 臼 廾
舂 : ノ 臼 大 二
舃 : 灬 臼 鳥
舄 : 勹 灬 臼
舅 : 臼 田 力
與 : 一 臼 ハ
興 : 臼 口 ハ 冂 一
舉 : ｜ 一 臼 二 ハ
舊 : 臼 ⺾ 隹
舌 : 口 舌
舍 : 口 舌 𠆢
舎 : 口 土 𠆢
舏 : ｜ 口 舌
舐 : 口 氏 舌
舒 : 干 口 舌 矛 𠆢 亅 マ
舓 : ノ 勹 口 日 勿 舌
舔 : 一 口 大 灬 舌
舖 : 口 十 舌 用 𠆢 丶
舗 : 口 十 土 用 𠆢 丶
舘 : 干 口 𠆢 宀
舙 : 口 舌
舚 : 儿 ハ 勹 厂 口 舌 言
舛 : 舛 夕
舜 : 牛 舛 爪 夕 冖
舝 : ｜ 二 冖 厶 ユ 巛
舞 : ｜ ノ 一 舛 二 夕 無
舟 : 舟
舡 : 一 ｜ 丶 冂 工 舟
舢 : 一 ｜ 丶 冂 山 舟
舨 : 一 ｜ 丶 ノ 冂 又 舟
舩 : 舟 ハ 厶
航 : 舟 亠 几
舫 : 舟 方
般 : 舟 殳 几 又
舮 : 戸 舟 一 尸
舲 : 一 ｜ 丶 亅 人 冂 マ 舟
舳 : ｜ 舟 日 田
舴 : 一 ｜ 丶 ノ 冂 舟
舵 : 舟 匕 宀
舶 : 舟 白
舷 : 玄 舟 亠 幺
舸 : 口 舟 亅
船 : 口 舟 ハ
舺 : 一 ｜ 丶 冂 日 舟
舼 : 一 ｜ 丶 二 ハ 冂 舟
艀 : 子 舟 爪
艃 : 一 ｜ 丶 冂 舟 里
艄 : 一 ｜ 丶 冂 ⺌ 月 舟
艅 : 一 ｜ 丶 𠆢 冂 小 舟
艆 : 一 ｜ 丶 冂 舟 艮
艇 : 王 舟 廴
艉 : 一 ｜ 丶 冂 尸 毛 舟
艋 : 一 ｜ 丶 冂 子 皿 舟
艎 : 一 ｜ 丶 冂 日 王 白 舟
艏 : 一 ｜ 丶 并 冂 目 自 舟 首
艑 : 一 ｜ 丶 亅 冂 尸 廾 戸 冊 舟
艖 : 一 ｜ 丶 并 冂 工 王 羊 舟
艗 : 一 ｜ 丶 ハ 冂 皿 舟
艘 : 支 舟 日 又
艙 : 口 舟 𠆢 尸
艚 : ｜ 一 舟 日
艜 : 一 ｜ 丶 乙 冂 冖 巾 廾 舟
艝 : ヨ 雨 舟
艟 : 舟 里 立
艠 : 一 ｜ 丶 ノ 并 冂 口 舟 豆
艢 : 口 舟 人 土 囗
艣 : 一 ｜ 丶 冂 力 匕 卜 厂 田 舟 虍
艤 : 王 舟 并 羊 亅 戈
艦 : 皿 舟 臣 二
艧 : 一 ｜ 丶 冂 又 ⺾ 舟 隹
艨 : 舟 冖 ⺾ 豕
艪 : 魚 舟 田 日 灬
艫 : 皿 舟 田 卜 匕 厂 虍
艭 : 一 ｜ 丶 冂 又 舟 隹
艮 : 艮
良 : 艮
艱 : 艮 人 大 二 ⺾
色 : 色 巴 勹
艴 : 乙 勹 已 廾 弓 巴 色
艶 : ｜ 口 色 豆 日 并 勹
艷 : 口 山 色 豆 并 凵
艸 : ⺾ 屮
艹 : ⺾
艻 : 力 ⺾
艽 : 九 ⺾
艾 : ノ ⺾
艿 : 乃 ⺾
芀 : 刀 ⺾
芁 : 几 ⺾
芃 : 丶 几 ⺾
芄 : 丶 九 ⺾
芇 : ｜ 冂 巾 ⺾
芉 : 一 十 干 ⺾
芊 : 一 ノ 十 干 ⺾
芋 : 一 ⺾ 干
芍 : 丶 勹 ⺾
芎 : 弓 ⺾
芑 : 已 ⺾
芒 : 亡 ⺾ 亠
芓 : 子 ⺾
芔 : 屮 ⺾
芖 : 大 ⺾
芘 : 匕 ⺾ 比
芙 : 人 二 ⺾ 大
芚 : ノ 乙 凵 ⺾ 屯
芛 : ノ ヨ ⺾
芝 : 亠 ⺾
芟 : 殳 ⺾ 几 又
芠 : ⺾ 文
芡 : 人 勹 ⺾ 欠
芣 : 一 ｜ 丶 ノ ⺾
芤 : 乙 子 ⺾
芥 : 𠆢 ⺾ 儿
芦 : 戸 ⺾ 一 尸
芧 : マ ⺾ 矛
芨 : 丶 ノ 又 乃 ⺾ 及
芩 : 一 丶 𠆢 ⺾
芪 : ⺾ 氏
芫 : 二 儿 ⺾ 元
芬 : 刀 ハ ⺾
芭 : 巴 ⺾
芮 : 人 入 冂 ⺾
芯 : 心 ⺾
芰 : 十 又 ⺾ 支
花 : ⺅ 匕 ⺾
芲 : ノ 乙 𠆢 匕 ⺾
芳 : 方 ⺾
芴 : ノ 勹 ⺾ 勿
芷 : ⺾ 止
芸 : 二 厶 ⺾
芹 : 斤 ⺾
芺 : 丶 大 ⺾
芻 : 勹 屮 ⺾
芼 : 一 ノ 乙 二 ⺾ 手
芽 : 牙 ⺾
芾 : 一 ｜ 亠 冂 十 巾 ⺾
芿 : ⺅ 乃 ⺾
苅 : 刂 ⺾
苆 : 一 乙 刀 匕 ⺾
苐 : ｜ ノ 弓 ⺾
苑 : 夕 卩 ⺾
苒 : ｜ 一 冂 ⺾
苓 : 𠆢 卩 ⺾ 一
苔 : 口 厶 ⺾
苕 : 刀 口 ⺾
苗 : 田 ⺾
苙 : 立 ⺾
苚 : ｜ 二 冂 ⺾ 用
苛 : 一 口 亅 ⺾
苜 : 目 ⺾
苞 : 勹 已 ⺾
苟 : 口 勹 ⺾
苠 : 尸 ⺾ 氏
苡 : ｜ 人 ⺾
苢 : ｜ 口 ⺾
苣 : 巨 ⺾
苤 : ｜ 丶 ノ 二 ⺾
若 : ノ 一 口 ⺾
苦 : 口 十 ⺾
苧 : 一 亅 宀 ⺾
苨 : 匕 尸 ⺾
苪 : 一 人 冂 ⺾
苫 : 口 卜 ⺾
苭 : 力 幺 ⺾
苯 : 一 ⺾ 木
英 : ノ ⺾ 大
苳 : 丶 夂 ⺾
苴 : 一 目 ⺾
苶 : 𠆢 小 ⺾
苷 : ⺾ 甘
苹 : 干 ハ ⺾
苺 : 母 ⺾ 毋
苻 : ⺅ 寸 ⺾
苽 : 厶 ⺾ 瓜
苾 : ノ ⺾ 心
茀 : 廾 弓 ⺾
茁 : ｜ 凵 ⺾
茂 : ノ 戈 ⺾
范 : 氵 卩 ⺾
茄 : 口 力 ⺾
茅 : 矛 ⺾
茆 : ノ 卩 ⺾
茇 : 丶 ノ 又 弋 ⺾
茈 : 匕 ⺾ 止
茉 : ｜ 一 ハ 木 亠 ⺾
茊 : 一 ⺾ 斤
茋 : 丶 ⺾ 氏
茌 : ⺅ 士 ⺾
茎 : 土 又 ⺾
茖 : 口 夂 ⺾
茗 : 口 夕 ⺾
茘 : 刀 ⺾
茛 : ⺾ 艮
茜 : 西 ⺾
茝 : 匚 ⺾ 臣
茞 : 匚 ⺾ 臣
茟 : ｜ 二 ヨ ⺾ 聿
茡 : 子 宀 ⺾
茢 : 刂 ⺾ 歹
茣 : 一 口 ハ ⺾
茨 : 欠 冫 ⺾
茫 : 亡 氵 ⺾
茬 : 一 ｜ ノ 土 ⺾
茭 : 亠 ⺾ 父
茮 : 一 卜 小 ⺾
茯 : ⺅ 犬 ⺾
茰 : 丶 ノ ⺾ 日
茱 : ｜ ノ 牛 二 ハ 木 亠 ⺾
茲 : 幺 ⺾
茳 : 工 氵 ⺾
茴 : 口 囗 ⺾
茵 : 大 囗 ⺾
茶 : 𠆢 ⺾ 木
茷 : ⺅ ⺾ 戈
茸 : 耳 ⺾
茹 : 口 女 ⺾
茺 : 亠 儿 厶 ⺾
茼 : 一 冂 口 ⺾
茽 : ｜ ⺅ 口 ⺾
荀 : 日 勹 ⺾
荂 : 二 勹 大 ⺾
荃 : 𠆢 ⺾ 王
荄 : ノ 亠 幺 ⺾ 玄
荅 : 口 𠆢 ⺾
荇 : 彳 ⺾ 行
草 : 十 日 ⺾
荊 : 刂 廾 ⺾ ノ
荍 : ｜ ⺾ 攵
荎 : 一 厶 土 ⺾ 至
荏 : ⺅ 士 ⺾
荐 : ノ 一 子 ⺾
荑 : 大 弓 ⺾
荒 : 川 ⺾ 亡
荓 : 一 并 廾 ⺾
荔 : 力 ⺾
荕 : 力 ⺾ 月
荖 : ノ 匕 土 ⺾ ⺹
荗 : 丶 ノ 厂 ⺾ 戈
荘 : 士 爿 ⺾
荢 : 亅 二 宀 ⺾
荣 : 冖 ⺾ 木
荰 : 土 ⺾ 木
荳 : 口 豆 并 ⺾
荵 : 心 刀 丶 ⺾
荷 : ⺅ 口 亅 ⺾ 一
荸 : 冖 十 子 ⺾
荻 : 火 犭 ⺾
荼 : 小 二 ハ 𠆢 亅 ⺾
荽 : 女 ⺾ 爪
荿 : ノ 亅 厂 ⺾ 戈
莀 : 亠 厂 ⺾ 衣 辰
莂 : 刂 力 口 ⺾
莄 : 一 丶 ノ ⺾ 日
莅 : ⺅ 立 ⺾
莆 : 丶 十 ⺾ 月
莇 : 目 力 ⺾
莉 : 禾 刂 ⺾
莊 : 士 爿 ⺾
莍 : 一 丶 ⺾ 水
莎 : ノ 氵 小 ⺾
莒 : ノ 口 ⺾
莓 : 一 母 ⺾ 毋
莔 : 儿 ハ 口 囗 ⺾
莕 : 口 ⺾ 木
莖 : 一 工 巛 ⺾
莘 : 十 ⺾ 立 辛
莙 : ノ 口 ヨ ⺾
莚 : ノ 止 廴 ⺾
莛 : ノ 土 士 廴 ⺾ 王
莜 : ｜ ⺅ ⺾ 攵
莝 : 人 土 ⺾
莞 : 二 儿 宀 ⺾ 元
莟 : 口 𠆢 ⺾
莠 : ノ 禾 ⺾
莢 : 人 大 ⺾
莦 : ⺌ ⺾ 月
莧 : 儿 ⺾ 目 見
莨 : 艮 ⺾
莩 : 子 ⺾ 爪
莪 : 亅 戈 ⺾
莫 : 大 日 ⺾
莬 : 一 ｜ 儿 勹 口 ⺾ 免
莭 : 卩 厶 ⺾ 日
莱 : ｜ 二 米 亠 ⺾ 木
莵 : 鬼 儿 匕 ⺾
莽 : 大 廾 ⺾
莾 : 十 大 廾 ⺾
莿 : 冂 刂 ⺾ 木
菀 : 卩 夕 宀 ⺾
菁 : 月 青 土 二 亠 ⺾
菅 : ｜ 口 宀 ⺾
菇 : 十 口 女 ⺾
菉 : ヨ 彑 ⺾ 水
菊 : 米 勹 ⺾
菌 : 禾 囗 ⺾
菎 : 日 比 ⺾
菏 : 一 亅 口 氵 ⺾
菐 : 一 ｜ 丶 ノ 二 并 大
菑 : 巛 ⺾ 田
菓 : 田 木 ⺾
菔 : 卩 又 ⺾ 月
菖 : 日 ⺾
菘 : ハ 木 厶 ⺾
菜 : 爪 木 ⺾
菝 : 丶 ノ 又 弋 扌 ⺾
菟 : 丶 儿 ⺾ 勹 口 ｜
菠 : 氵 皮 又 ⺾
菡 : 冫 凵 子 ⺾
菥 : ⺾ 斤 木
菨 : 女 ⺾ 立
菩 : 口 立 ⺾
菪 : 口 宀 ⺾ 石
菫 : ｜ 一 口 土 二 ⺾
華 : ｜ 一 ⺾
菰 : 瓜 子 ⺾
菱 : 土 儿 夂 ⺾
菲 : 非 ⺾
菴 : 乙 大 日 ⺾ 奄
菶 : 一 ｜ 二 大 ⺾
菷 : ヨ 巾 冖 ⺾
菸 : 丶 𠆢 ⺾ 方
菹 : 一 氵 ⺾ 目
菻 : 木 ⺾
菼 : ⺾ 火
菽 : 小 卜 又 ⺾
萁 : ｜ 二 ハ ⺾
萃 : 十 人 亠 ⺾
萄 : 缶 勹 ⺾
萆 : ノ 十 ⺾ 日 白
萇 : 長 ⺾
萊 : 人 ⺾ 木
萋 : ｜ ヨ 女 ⺾
萌 : 月 日 ⺾
萍 : 干 氵 并 ⺾
萎 : 禾 女 ⺾
萏 : 勹 ⺾ 臼
萑 : ⺾ 隹
萓 : 一 目 宀 ⺾
萕 : 廾 ⺾ 文
萗 : 二 宀 小 ⺾ 示
萙 : ノ 乙 冖 尢 ⺾ 木
萠 : 月 ⺾
萢 : 氵 勹 已 ⺾
萩 : 火 禾 ⺾
萪 : 禾 斗 ⺾
萬 : 田 日 冂 禸 ⺾
萯 : ハ 勹 ⺾ 目 貝
萱 : 一 日 宀 ⺾
萵 : 口 冂 ⺾
萸 : 人 日 ⺾ 臼
萹 : 一 ｜ 丶 亅 冂 尸 廾 ⺾ 戸 冊
萼 : 口 二 ⺾ 勹
落 : 口 氵 夂 ⺾
葅 : 一 人 ⺾ 目
葆 : ⺅ 口 木 ⺾
葇 : マ ⺾ 木 矛
葈 : 厶 口 ⺾ 木
葉 : 木 世 ⺾
葊 : 一 𠆢 口 廾 ⺾
葍 : 一 口 ⺾ 田
葎 : 彳 聿 ⺾
葏 : ｜ 二 ヨ 氵 ⺾ 聿
葑 : 土 寸 ⺾
葒 : 小 工 幺 ⺾ 糸
葖 : ハ 大 宀 ⺾
著 : 日 ⺹ ⺾
葘 : 一 巛 ⺾ 田
葙 : ⺾ 木 目
葚 : 一 儿 ハ 匚 ⺾ 目
葛 : 日 勹 匕 ⺾
葜 : 一 ｜ 二 刀 大 ⺾
葟 : ⺾ 日 王 白
葠 : ⺅ 冖 又 ヨ ⺾
葡 : 十 用 勹 ⺾
葢 : 皿 大 丶 ⺾
董 : ｜ 一 日 ⺾ 里
葤 : 寸 小 幺 ⺾ 糸
葥 : 一 并 刂 ⺾ 月
葦 : 口 ⺾ 韋
葧 : 冖 力 十 子 ⺾
葩 : 白 巴 ⺾
葪 : ｜ 刂 勹 ⺾ 月 角
葫 : 月 口 十 ⺾
葬 : 一 夕 匕 廾 ⺾
葭 : ｜ 又 ⺾
葮 : ｜ 殳 ⺾ 几 又
葯 : 糸 幺 小 丶 勹 ⺾
葰 : ⺅ 儿 ハ 厶 夂 ⺾
葱 : 勿 心 丶 ⺾
葳 : 一 ノ 厂 女 ⺾ 戈
葴 : 一 ノ 厂 口 ⺾ 戈
葵 : 人 大 二 癶 ⺾ ノ
葶 : 一 亅 亠 冖 口 ⺾
葷 : 車 冖 ⺾
葸 : ⺾ 心 田
葹 : 也 方 匕 ⺾
葺 : 口 耳 ⺾
葼 : 丶 ノ 儿 ハ 凵 夂 ⺾
葽 : 女 ⺾ 西
蒁 : 丶 辶 ⺾ 木
蒂 : 巾 并 立 亠 冖 ⺾
蒄 : 寸 二 儿 冖 ⺾ 元
蒅 : 九 氵 ⺾ 木
蒋 : 寸 爪 爿 ⺾
蒐 : 鬼 田 儿 匕 ⺾
蒒 : 一 ｜ ノ 冂 口 巾 ⺾
蒓 : ノ 乙 凵 小 幺 ⺾ 屯 糸
蒔 : 寸 土 日 ⺾
蒕 : 人 口 ⺾ 皿
蒗 : 氵 ⺾ 艮
蒙 : 冖 ⺾ 豕
蒜 : 示 二 小 ⺾
蒞 : ⺅ 氵 ⺾ 立
蒟 : 口 立 勹 ⺾
蒡 : 并 方 立 亠 冖 ⺾
蒦 : 又 ⺾ 隹
蒨 : 二 亠 ⺅ 土 ⺾ 月 青
蒩 : 一 ノ ⺾ 木 目 禾
蒪 : 一 ｜ 丶 二 冂 十 寸 ⺾ 日
蒭 : 勹 屮 ⺾
蒯 : 丶 冂 刂 ⺾ 月
蒱 : 丶 十 扌 ⺾ 月
蒲 : 氵 用 丶 ⺾ 十
蒴 : 一 并 屮 ⺾ 月
蒸 : ノ 一 亅 灬 ⺾
蒹 : ｜ ヨ 一 并 ⺾
蒺 : 一 ノ 大 ⺾ 疒 矢
蒻 : 弓 冫 ⺾
蒼 : ノ 口 𠆢 ⺾
蒽 : 囗 大 ⺾ 心
蒾 : 辶 ⺾ 米
蒿 : 口 高 亠 冂 ⺾
蓀 : ノ 子 小 幺 ⺾ 糸
蓁 : 禾 大 二 ⺾
蓂 : 亠 ハ 冖 ⺾ 日
蓄 : 玄 田 亠 幺 ⺾
蓆 : 一 巾 凵 广 ⺾
蓇 : 冂 冖 ⺾ 月 骨
蓈 : 丶 厶 ⺾ ⻏ 日
蓉 : 穴 口 谷 ハ 𠆢 宀 ⺾
蓊 : 羽 ハ 冫 厶 ⺾
蓋 : 皿 土 厶 ⺾
蓌 : 人 土 夂 ⺾
蓍 : 日 ⺹ ⺾
蓎 : ｜ 口 广 ヨ ⺾
蓏 : 厶 ⺾ 瓜
蓐 : 寸 辰 ⺾
蓑 : 衣 一 亠 ⺾
蓓 : ⺅ 口 ⺾ 立
蓖 : 比 囗 ⺾
蓙 : 人 土 广 ⺾
蓚 : ⺅ 彡 攵 ⺾
蓜 : 已 ⺾ 酉
蓧 : 一 ｜ ⺅ 夂 小 ⺾ 木
蓪 : マ 辶 ⺾ 用
蓬 : ｜ 一 辶 夂 ⺾
蓮 : 辶 車 ⺾
蓯 : 人 彳 ⺾ 止
蓰 : 彳 ⺾ 止
蓱 : 一 ノ 并 十 干 廾 氵 ⺾
蓲 : 匚 口 ⺾
蓴 : 一 寸 虫 日 ⺾
蓷 : 扌 ⺾ 隹
蓺 : 丶 儿 ハ 九 土 ⺾
蓻 : 一 丶 并 十 九 土 干 ⺾
蓼 : 羽 𠆢 冫 彡 ⺾
蓽 : 一 ｜ 二 ⺾ 日
蓿 : ⺅ 白 宀 ⺾
蔀 : 口 ⻏ 立 ⺾
蔂 : 小 幺 ⺾ 田 糸
蔃 : 口 弓 ⺾ 虫
蔆 : 氵 土 儿 夂 ⺾
蔇 : 厶 ⺾ 无 日 曰
蔌 : 人 勹 口 ⺾ 木 欠
蔎 : 几 又 ⺾ 殳 言
蔐 : 亠 并 冂 十 口 ⺾ 立 滴
蔑 : ノ 罒 戈 ⺾
蔓 : 日 罒 又 ⺾
蔔 : 口 田 勹 ⺾
蔕 : 一 巾 儿 冖 凵 ⺾
蔗 : 一 凵 广 灬 ⺾
蔘 : 大 厶 彡 ⺾
蔚 : 示 二 小 寸 尸 ⺾
蔛 : ｜ 勹 ⺾ 斗 月 角
蔜 : 士 ⺾ 攵 方
蔞 : 十 口 女 ⺾
蔟 : 方 矢 ⺾
蔡 : 示 二 小 癶 ⺾
蔢 : ノ 十 厂 又 女 氵 ⺾ 支
蔣 : 丶 夕 寸 ⺾ 爿
蔤 : ノ 宀 山 ⺾ 心
蔥 : ノ 口 夂 ⺾ 心
蔦 : 鳥 灬 ⺾
蔧 : 一 ｜ 二 ヨ ⺾
蔪 : ⺾ 斤 車
蔫 : 一 亅 勹 ⺾ 止 灬
蔬 : 止 川 亠 厶 ⺾ 疋
蔭 : 二 𠆢 厶 ⺾ ⻖
蔯 : ⺾ ⻖ 日 木
蔲 : 二 儿 宀 ⺾ 攵 元
蔳 : 二 亠 土 氵 ⺾ 月 青
蔴 : 广 ⺾ 木 麻
蔵 : ノ 臣 戈 ⺾
蔶 : 一 ｜ 二 ハ ⺾ 目 貝
蔽 : ｜ 巾 ⺌ 并 冂 攵 ⺾
蔾 : ノ 勹 ⺾ 木 禾
蔿 : 乃 ⺾ 灬 爪
蕀 : ｜ ハ 木 冂 ⺾
蕁 : ヨ 口 工 寸 ⺾
蕃 : 田 釆 米 ⺾
蕆 : ノ ハ 厂 ⺾ 戈 目 貝
蕈 : 十 西 日 曰 ⺾
蕉 : 灬 ⺾ 隹
蕊 : 心 ⺾
蕋 : 止 ⺾
蕎 : ノ 口 冂 ⺾ 大
蕏 : ノ 土 犭 ⺾ ⺹ 日
蕐 : 一 ｜ 二 人 ⺾
蕑 : ⺾ 月 門
蕒 : ハ ⺾ 目 罒 貝
蕓 : 二 冖 厶 ⺾ 雨
蕕 : 酉 并 犭 ⺾
蕖 : 匚 口 氵 ⺾ 木
蕗 : 口 足 夂 ⺾
蕘 : 一 土 儿 ⺾
蕙 : 十 ⺾ 心 虫
蕚 : 口 二 ⺾ 勹 品
蕜 : ⺾ 心 非
蕝 : 乙 勹 小 已 幺 ⺾ 巴 糸 色
蕞 : 又 ⺾ 日 耳
蕟 : 丶 ノ 几 又 弓 ⺾ 殳
蕠 : 口 女 小 幺 ⺾ 糸
蕡 : ハ 十 ⺾ 目 貝
蕢 : 一 ｜ ハ 口 ⺾ 目 虫 貝
蕣 : 舛 爪 夕 冖 ⺾
蕤 : ⺾ 生 豕
蕨 : 欠 并 厂 屮 ⺾
蕩 : ｜ 一 氵 日 ⺾ 勿
蕪 : ｜ ノ 一 灬 ⺾ 無
蕫 : ⺾ 立 里
蕭 : ｜ ノ ヨ 米 ⺾ 聿
蕯 : ｜ ノ 二 夂 ⺾ ⻖
蕷 : 貝 目 ハ 頁 矛 亅 ⺾
蕹 : 亠 幺 ⺾ 隹
蕺 : 口 ⺾ 戈 耳
蕻 : ｜ 二 ハ ⺾ 長
蕽 : ｜ 厂 ⺾ 日 衣 辰
蕾 : 雨 田 ⺾
蕿 : ノ 二 又 ⺾ 火 爪
薀 : 皿 氵 日 ⺾
薁 : ノ 冂 大 ⺾ 米
薄 : 十 氵 寸 田 丶 ⺾
薅 : 厂 女 寸 ⺾ 衣 辰
薆 : 冖 夂 ⺾ 心 爪
薇 : 山 几 彳 攵 ⺾
薈 : 日 罒 𠆢 ⺾
薉 : 一 ノ 厂 小 ⺾ 戈 止
薊 : 刂 魚 田 灬 ⺾
薋 : 𠆢 ハ 冖 冫 勹 ⺾ 目 貝
薌 : 匕 厶 幺 ⺾ ⻏ 日 白
薏 : ⺾ 心 日 立
薐 : 禾 土 儿 夂 ⺾
薑 : 一 田 二 ⺾
薓 : ｜ 冂 冖 又 巾 ヨ 氵 ⺾
薔 : 口 人 土 囗 ⺾
薗 : 衣 口 土 囗 ⺾
薘 : 并 辶 土 ⺾ 王 羊
薙 : 矢 ⺾ 隹
薛 : ｜ 口 十 辛 立 ⺾
薜 : 口 十 辛 立 尸 ⺾
薝 : 儿 ハ 勹 厂 ⺾ 言
薟 : 一 人 𠆢 口 ⺾
薠 : ハ ⺾ 火 目 貝 頁
薢 : ｜ 刀 勹 ⺾ 月 牛 角
薤 : 歹 ⺾ 韭
薥 : 勹 ⺾ 罒 虫
薦 : 广 灬 ⺾
薧 : 一 亠 冖 匕 口 夕 ⺾ 歹
薨 : 罒 夕 冖 匕 ⺾
薩 : ノ 生 并 立 亠 厂 ⺾ ⻖
薪 : 斤 十 辛 并 木 立 ⺾ 亠
薫 : ｜ 灬 ⺾ 日 ノ 一
薬 : 日 木 冫 ⺾
薭 : ノ 十 ⺾ 日 木 白 禾
薮 : 女 米 夂 ⺾ 攵
薯 : 日 罒 ⺹ ⺾
薰 : 一 ノ 二 并 ⺾ 灬 車
薴 : 一 亅 宀 ⺾ 心 皿
薶 : ⺾ 豸 里
薷 : 二 冖 ⺾ 而 雨
薸 : 二 小 氵 ⺾ 示 西
薹 : 口 士 至 土 冖 厶 ⺾
薺 : 亠 ⺾ 齊 刀 氏 廾
薼 : 匕 土 广 ⺾ 比 鹿
薽 : 一 丶 乙 二 土 ⺾ 西
薾 : 一 ｜ 冂 ⺾ 爻
薿 : 一 ノ 匕 マ 大 ⺾ 疋 矢
藁 : 口 高 木 亠 冂 ⺾
藂 : ｜ 丶 ノ 又 ⺾ 耳
藇 : 一 ｜ 亠 ハ ⺾ 臼
藉 : ｜ 一 二 日 ハ 木 耒 ⺾
藊 : 一 ｜ 丶 ノ 亅 冂 尸 廾 ⺾ 戸 木 禾 冊
藋 : ノ 冫 ⺾ 羽 隹
藍 : ノ 皿 臣 二 ⺾
藎 : 一 ｜ ヨ ⺾ 灬 皿
藏 : ノ 臣 戈 爿 ⺾
藐 : 日 儿 ⺾ 豸
藕 : ｜ 田 日 ハ 木 禸 耒 ⺾
藘 : 匕 卜 厂 ⺾ 心 田 虍
藙 : 亠 并 几 又 ⺾ 殳 立 豕
藚 : ハ 士 ⺾ 目 罒 貝
藜 : 禾 水 𠆢 勹 ⺾ 黍
藝 : 九 土 二 丶 儿 厶 ⺾
藟 : ⺾ 田
藠 : ⺾ 日 白
藡 : 亠 并 冂 十 辶 口 ⺾ 立 滴
藤 : ｜ 一 月 水 ⺾
藥 : 白 木 幺 ⺾
藦 : 广 ⺾ 手 木 麻
藨 : 匕 广 ⺾ 比 灬 鹿
藩 : 氵 田 釆 米 ⺾
藪 : ｜ 一 口 女 攵 ⺾
藭 : 儿 ハ 宀 弓 ⺾ 身
藳 : ノ 亠 冂 口 ⺾ 木 禾 高
藶 : ノ 厂 ⺾ 木 止 禾
藷 : 言 日 ⺹ ⺾
藹 : 言 日 勹 匕 ⺾
藺 : 門 ⺾ 隹
藻 : 口 氵 木 ⺾ 品
藼 : 一 ｜ 二 宀 ⺾ 心 罒
藾 : ｜ 貝 目 口 ハ 頁 木 ⺾
藿 : 二 冖 ⺾ 隹 雨
蘀 : 一 并 十 土 干 扌 ⺾ 罒
蘂 : 心 木 ⺾
蘄 : 十 口 ⺾ 斤 日 田
蘅 : 亅 二 勹 大 彳 ⺾ 田
蘆 : 皿 田 卜 匕 厂 ⺾ 虍
蘇 : 禾 魚 田 灬 ⺾
蘊 : 皿 糸 幺 小 日 ⺾
蘋 : ノ 貝 目 ハ 止 小 頁 ⺾
蘍 : 一 ｜ ノ 并 力 口 ⺾ 灬
蘎 : 乙 二 冖 已 ⺾ 月 巴 雨
蘐 : ノ 二 又 ⺾ 爪 言
蘑 : 口 广 ⺾ 木 石 麻
蘒 : ノ 乙 勹 ⺾ 木 田 禾 亀
蘓 : 禾 魚 田 灬 ⺾
蘖 : 口 十 辛 木 立 ⺾
蘗 : 口 十 辛 木 立 尸 ⺾
蘘 : 一 ｜ 二 亠 口 ⺾ 衣
蘙 : 一 ノ 冫 几 匚 又 大 ⺾ 殳 矢 羽
蘚 : 王 魚 田 并 羊 灬 ⺾
蘛 : 一 ｜ 亠 ハ 匚 厶 ⺾ 月 甘
蘞 : 一 人 𠆢 口 ⺾ 攵
蘡 : ハ 女 ⺾ 目 貝
蘢 : 月 立 ⺾
蘤 : 勹 ⺾ 日 灬 爪 白
蘧 : 匕 卜 厂 辶 ⺾ 虍 豕
蘩 : 一 ノ 小 幺 ⺾ 攵 毋 母 糸
蘭 : ｜ 一 日 木 門 ⺾
蘯 : ノ 皿 氵 日 勹 ⺾
蘰 : 糸 幺 小 日 罒 又 ⺾
蘶 : ノ 儿 匕 厶 女 ⺾ 木 田 禾 鬼
蘸 : ⺾ 灬 酉 隹
蘹 : 一 ｜ 亠 忄 ⺾ 罒 衣
蘺 : 丶 ノ 亠 冂 凵 厶 ⺾ 禸 隹
蘼 : 广 ⺾ 木 非 麻
蘽 : ⺾ 木 田
蘿 : 糸 幺 小 罒 ⺾ 隹
虀 : 一 ｜ 亠 并 刀 ⺾ 氏 非
虁 : 一 ｜ 儿 ハ 并 卜 夂 已 ⺾ 止 目 自 見 首
虂 : 二 冖 口 夂 ⺾ 足 雨
虆 : 小 幺 ⺾ 田 糸
虍 : 卜 匕 厂 虍
虎 : 卜 儿 匕 厂 虍
虐 : 卜 匕 匚 厂 虍
虒 : 儿 几 匕 卜 厂 虍
虓 : 儿 几 匕 卜 厂 九 虍
虔 : 文 卜 匕 厂 虍
處 : 卜 几 匕 厂 夂 虍
虖 : 一 ノ 亅 并 匕 卜 厂 虍
虗 : 一 匕 卜 厂 斤 虍
虘 : 一 匕 卜 厂 目 虍
虙 : ノ 匕 卜 厂 心 虍
虚 : 一 卜 匕 厂 虍
虛 : 一 ｜ 匕 卜 厂 虍
虜 : 田 卜 力 匕 厂 虍
虝 : ノ 几 勹 匕 卜 厂 勿 虍
虞 : 口 ハ 卜 匕 厂 虍
號 : 口 卜 儿 匕 厂 虍 一 勹
虠 : 亠 几 匕 卜 厂 父 虍
虡 : 一 ｜ 丶 ノ ハ 匕 卜 厂 虍
虢 : 儿 几 匕 卜 厂 寸 爪 虍
虣 : 一 儿 几 匕 卜 厂 弋 止 虍
虤 : 几 匕 卜 厂 虍
虧 : 二 卜 匕 厂 虍 隹 勹
虩 : 几 匕 卜 厂 小 ⺌ 日 虍
虫 : 虫
虬 : 乙 虫
虯 : ｜ 虫
虱 : ノ 一 乙 虫
虵 : ｜ 乙 匕 也 虫
虶 : 亅 二 虫
虷 : 一 十 干 虫
虹 : 工 虫
虺 : 一 儿 虫
虻 : 虫 亡 亠
蚇 : 尸 虫
蚈 : 一 廾 虫
蚉 : 文 虫
蚊 : 虫 文
蚋 : 人 虫 冂
蚌 : ｜ 一 虫 二
蚍 : 匕 比 虫
蚑 : 十 又 支 虫
蚓 : ｜ 弓 虫
蚕 : 一 大 虫
蚖 : 二 儿 元 虫
蚘 : 丶 尢 尤 虫
蚚 : 斤 虫
蚜 : 牙 虫
蚝 : 毛 虫
蚡 : ハ 刀 虫
蚣 : 虫 ハ 厶
蚤 : 虫 又
蚦 : 二 冂 月 虫
蚧 : ｜ ノ 𠆢 虫
蚨 : 一 大 虫
蚩 : 一 山 虫 屮
蚪 : 虫 斗
蚫 : 虫 勹 已
蚭 : 匕 尸 虫
蚯 : 斤 虫
蚰 : ｜ 虫 日 田
蚱 : 一 ｜ ノ 虫
蚳 : 一 丶 氏 虫
蚴 : 力 幺 虫
蚵 : 一 亅 口 虫
蚶 : 甘 虫
蚷 : 匚 口 虫
蚸 : 丶 斤 虫
蚹 : ⺅ 寸 虫
蚿 : 亠 幺 玄 虫
蛀 : 丶 王 虫
蛁 : 刀 口 虫
蛃 : 一 人 冂 虫
蛄 : 口 十 虫
蛅 : 卜 口 虫
蛆 : 虫 目
蛇 : 虫 匕 宀
蛉 : 虫 𠆢 卩
蛋 : 虫 疋
蛍 : ⺌ 虫 冖
蛎 : 斤 虫 厂
蛑 : 厶 牛 虫
蛒 : 口 夂 虫
蛔 : 口 虫 囗
蛕 : 一 ノ 月 虫
蛗 : ｜ ノ 口 虫
蛙 : 虫 土
蛚 : 刂 歹 虫
蛛 : ｜ ノ 牛 虫 二 ハ 木
蛜 : ノ ⺅ ヨ 虫
蛞 : 口 舌 虫
蛟 : 虫 父 亠
蛠 : 力 虫
蛣 : 口 士 虫
蛤 : 口 虫 𠆢
蛥 : 夕 虫
蛦 : 大 弓 虫
蛧 : 丶 ノ 冂 虫
蛩 : 工 虫 丶 几
蛬 : ｜ 一 虫 二 ハ ⺾
蛭 : 至 虫 土 厶 一
蛮 : 虫 亠
蛯 : 虫 ⺹
蛸 : 月 ⺌ 虫
蛹 : 虫 用 マ
蛺 : 人 大 虫
蛻 : 口 虫 并 儿
蛼 : 虫 車
蛽 : ハ 目 虫 貝
蛾 : 虫 亅 戈 手
蜀 : 虫 罒 勹
蜂 : ｜ 一 虫 夂
蜃 : 辰 虫
蜄 : 厂 虫 衣 辰
蜅 : 丶 十 月 虫
蜆 : 見 虫
蜇 : 扌 斤 虫
蜈 : 口 虫 ハ
蜉 : 子 虫 爪
蜊 : 禾 刂 虫
蜋 : 丶 艮 虫
蜍 : 小 虫 二 𠆢 亅
蜎 : 口 月 虫
蜏 : ノ 乃 木 禾 虫
蜐 : 力 厶 土 虫
蜑 : ノ 止 虫 廴
蜒 : ノ 止 虫 廴
蜓 : ノ 土 士 廴 王 虫
蜔 : 勹 田 虫
蜘 : 口 虫 矢
蜙 : ハ 厶 木 虫
蜚 : 虫 非
蜜 : ノ 心 虫 丶 宀
蜞 : ｜ 二 ハ 甘 虫
蜟 : 亠 厶 月 虫
蜡 : ｜ 二 日 虫
蜣 : 乙 儿 并 王 羊 虫
蜥 : 斤 虫 木
蜨 : 土 ヨ 虫 走
蜩 : 口 虫 土 冂
蜮 : 一 口 戈 虫
蜯 : 一 ｜ 二 大 虫
蜱 : ノ 十 日 白 虫
蜲 : ノ 女 木 禾 虫
蜴 : ノ 虫 日 勿
蜷 : 人 大 虫 二 并 已
蜹 : 人 入 冂 ⺾ 虫
蜺 : 儿 臼 虫
蜻 : 月 青 虫 土 二 亠
蜼 : 虫 隹
蜽 : 一 ｜ 入 冂 虫
蜾 : 日 木 田 虫
蜿 : 虫 夕 卩 宀
蝀 : 日 木 虫
蝃 : 又 虫
蝅 : 一 大 虫
蝉 : 十 ⺌ 虫 田
蝋 : ｜ 一 ⺌ 虫 用 几
蝌 : 禾 虫 斗
蝍 : 卩 厶 日 虫
蝎 : 虫 日 勹 匕
蝑 : 月 疋 虫
蝓 : 刂 月 虫 𠆢
蝕 : 食 虫
蝗 : 王 虫 白
蝘 : 匚 女 日 虫
蝙 : ｜ 一 戸 虫 冊 尸
蝝 : ヨ 彑 虫 豕
蝟 : 月 虫 田
蝠 : 口 虫 田
蝡 : 大 而 虫
蝣 : 子 虫 方
蝤 : ハ 并 虫 酉
蝥 : マ 攵 矛 虫
蝦 : 虫 又 口
蝨 : ノ 一 乙 虫
蝪 : ノ 虫 日 勿 一
蝮 : 虫 日 夂
蝯 : ノ 二 又 爪 虫
蝱 : 亠 亡 虫
蝲 : 刂 口 木 虫
蝴 : 月 口 十 虫
蝶 : 虫 木 世
蝸 : 口 虫 冂
蝻 : 一 并 冂 十 干 虫
蝼 : 女 米 虫
蝿 : 亀 虫 田 乙 勹
螂 : 艮 虫 ⻏
螃 : 亠 并 冖 方 立 虫
螄 : 一 ｜ ノ 冂 口 巾 虫
螅 : 心 目 自 虫
螆 : 一 并 幺 虫
螇 : 大 幺 爪 虫
螈 : 厂 小 日 白 虫
螉 : ノ ハ 冫 厶 羽 虫
螋 : ｜ 十 又 支 臼 虫
螌 : 一 ｜ 丶 冂 几 又 殳 舟 虫
融 : 口 虫 儿 冂 鬲
螐 : 灬 虫 鳥
螓 : 一 ノ 二 大 木 禾 虫
螕 : 丶 ノ 匕 口 比 虫
螗 : ｜ 口 广 ヨ 虫
螘 : 并 口 山 虫 豆
螙 : 木 虫
螞 : 虫 馬
螟 : 虫 日 ハ 亠 冖
螠 : 一 ハ 并 皿 虫
螢 : 火 虫 冖
螣 : 一 丶 ハ 并 冂 大 月 虫
螧 : ノ 匕 土 ⺹ 日 虫
螫 : 赤 虫 土 攵
螬 : 一 ｜ 日 虫
螭 : 丶 ノ 亠 冂 凵 厶 禸 虫
螮 : 一 ｜ ノ 乙 冂 冖 巾 廾 虫
螯 : 虫 土 方 攵
螱 : 二 寸 小 尸 示 虫
螳 : 口 ⺌ 虫 土 冖
螵 : 二 小 示 虫 西
螺 : 糸 幺 小 虫 田
螻 : ｜ 一 口 女 虫
螽 : 虫 丶 夂
螾 : 一 ｜ ハ 宀 日 田 虫
螿 : 丶 夕 寸 爿 虫
蟀 : 十 虫 亠 冫 幺 玄
蟁 : 尸 氏 虫
蟄 : 九 十 辛 虫 立 丶 亠
蟆 : 大 虫 日 ⺾
蟇 : 大 虫 日 ⺾
蟈 : 一 口 囗 戈 虫
蟉 : ノ 𠆢 冫 彡 羽 虫
蟊 : マ 矛 虫
蟋 : 心 虫 釆 米
蟎 : 一 ｜ 入 冂 凵 虫
蟐 : 巾 口 ⺌ 虫 冖
蟒 : 大 虫 廾 ⺾
蟕 : ｜ 勹 匕 月 止 虫 角
蟖 : ｜ 二 ハ 斤 甘 虫
蟙 : 戈 日 曰 立 虫
蟚 : 一 并 十 口 士 彡 虫 豆
蟜 : ノ 冂 口 大 虫
蟟 : 丶 ノ 大 小 日 虫
蟠 : 虫 田 釆 米
蟢 : 一 并 十 口 士 虫 豆
蟣 : 人 幺 戈 虫
蟤 : ｜ 二 已 虫
蟥 : 一 ｜ ハ 凵 日 田 虫 黄
蟦 : ハ 十 ⺾ 目 虫 貝
蟪 : 一 十 厶 心 日 虫
蟫 : 十 日 虫 西
蟬 : 一 ｜ 十 口 日 田 虫
蟭 : 灬 虫 隹
蟯 : 虫 土 儿
蟱 : 一 ｜ ノ 灬 虫 無
蟲 : 虫
蟳 : 口 寸 工 ヨ 虫
蟵 : 并 厂 口 寸 虫 豆
蟶 : 王 口 耳 虫
蟷 : 口 ⺌ 虫 田 冖
蟸 : 虫 豕
蟹 : 角 牛 虫 刀
蟺 : 一 亠 口 囗 日 曰 虫
蟻 : 一 王 虫 并 羊 亅 戈 手
蟾 : 言 虫 儿 厂
蟿 : 几 凵 又 殳 虫 車
蠁 : 厶 幺 ⻏ 日 白 虫
蠃 : 丶 ノ 乙 亠 几 口 亡 月 虫
蠅 : 虫 黽
蠆 : 冂 厶 ⺾ 日 田 禸 虫
蠉 : 一 口 罒 虫 衣
蠊 : 一 ｜ 丶 ノ 并 广 ヨ 虫
蠋 : 勹 罒 虫
蠍 : 欠 虫 日 勹 匕
蠎 : 十 大 虫 廾 ⺾
蠏 : 角 牛 虫 刀
蠐 : 亠 刀 氏 虫 齊
蠑 : 火 虫 木 冖
蠒 : 一 ｜ ハ 冂 爻 虫
蠓 : 一 冖 ⺾ 虫 豕
蠔 : 亠 冖 口 虫 豕
蠕 : 雨 而 虫
蠖 : 虫 又 ⺾ 隹
蠘 : 土 戈 虫 隹
蠙 : 一 ハ 宀 小 目 虫 貝
蠚 : 一 ノ 口 ⺾ 虫
蠛 : 丶 ノ 厂 ⺾ 戈 罒 虫
蠜 : 大 木 爻 虫
蠞 : 卩 厶 日 曰 竹 虫
蠟 : 丶 ノ 口 川 巛 虫
蠡 : 彑 虫 豕
蠢 : 大 虫 二 日
蠣 : 虫 田 厂 禸 ⺾
蠧 : 口 士 石 虫 冖
蠨 : ｜ ヨ ⺾ 爿 片 虫
蠭 : 一 ｜ 二 辶 夂 虫
蠮 : 一 ノ 冫 几 匚 又 大 殳 矢 羽 虫
蠰 : 一 ｜ 二 亠 口 虫 衣
蠱 : 皿 虫
蠲 : 一 ハ 并 勹 皿 罒 虫
蠵 : ハ 冂 口 山 虫 隹
蠶 : 虫 日 无
蠹 : ｜ 一 口 石 虫 冖
蠺 : 一 大 日 虫
蠻 : 言 糸 幺 小 虫
蠼 : 又 目 虫 隹
血 : 血 皿
衁 : 亠 亡 皿 血
衂 : 血 皿 刀 丶
衃 : 一 ｜ 丶 ノ 皿 血
衄 : ｜ 一 血 皿
衅 : ｜ 二 ハ 并 皿 血
衆 : 血 皿
衈 : 皿 耳 血
衉 : 口 夂 皿 血
衊 : 丶 ノ 厂 ⺾ 戈 皿 罒 血
衋 : 一 ｜ 二 ヨ 皿 目 聿 自 血
行 : 行 彳
衍 : 行 氵 彳
衎 : 一 十 干 彳 行
衑 : 丶 人 マ 彳 行
衒 : 行 亠 幺 彳 玄
術 : 行 十 丶 彳 木
衕 : 一 冂 口 彳 行
衖 : ｜ 二 ハ 彳 行
街 : 行 土 彳
衘 : 一 ノ 十 干 彳 止 行
衙 : 口 行 彳 五
衚 : 十 口 彳 月 行
衛 : 口 行 彳 韋
衜 : 并 彳 目 自 行 首
衝 : ｜ 行 日 彳 里
衞 : 巾 口 行 彳
衟 : 一 巛 彳 目 自 行
衠 : 一 ハ 十 彳 目 行 貝
衡 : 行 大 田 彳 勹
衢 : 行 目 彳 隹
衣 : 衣 亠
衤 : 衤
表 : 衣 士
衩 : 丶 又 衤
衫 : 衤 彡
衯 : ハ 刀 衤
衰 : 衣 一 亠
衱 : 丶 乃 及 衤
衲 : 衤 人 冂
衵 : 衤 日
衷 : 衣 十 口
衹 : 氏 衤
衻 : 二 冂 月 衤
衽 : 王 衤 士
衾 : 衣 𠆢
衿 : 衤 𠆢
袀 : 冫 勹 衤
袁 : 衣 口 土
袂 : 衤 人 大 二
袈 : 衣 口 力
袋 : 衣 ⺅ 弋
袍 : 衤 勹 已
袒 : 衤 日
袖 : ｜ 一 衤 田
袗 : 衤 𠆢 彡
袘 : 一 ｜ ノ 乙 匕 也 衤
袙 : 衤 白
袚 : 丶 ノ 又 弋 衤
袛 : 一 丶 氏 衤
袜 : 一 木 衤
袞 : 衣 口 ハ 亠
袟 : 一 ノ 大 衤
袠 : 一 ノ 亠 大 衣
袢 : ｜ 衤 二 并 十
袤 : 衣 矛 亠
袨 : 亠 幺 玄 衤
袪 : 厶 土 衤
被 : 衤 皮 又
袮 : ノ 衤 小
袰 : 衣 母 毋
袱 : ⺅ 犬 衤
袴 : 衤 大 二 勹
袵 : 王 ⺅ 衤
袷 : 口 衤 𠆢
袺 : 口 士 衤
袼 : 口 夂 衤
袽 : 口 女 衤
袾 : 一 ノ 木 衤
袿 : 衤 土
裀 : 囗 大 衤
裁 : 土 亠 厶 戈 衣
裂 : 衣 刂 歹
裃 : 衤 卜
裄 : 行 衤 彳
装 : 衣 士 爿
裊 : 亠 灬 衣 鳥
裋 : 并 口 衤 豆
裌 : 人 大 衤
裍 : 囗 木 衤
裎 : ノ 口 土 王 衤
裏 : 衣 里 亠
裑 : 衤 身
裒 : 亠 臼 衣
裓 : 廾 戈 衤
裔 : 衣 口 儿 冂
裕 : 口 衤 谷 ハ 𠆢
裘 : 衣 水 丶 亠
裙 : ノ ヨ 口 衤 尸
裛 : 乙 亠 口 已 ⻏ 巴 衣
補 : 十 衤 用 丶
裝 : 衣 士 爿
裞 : 儿 并 口 衤
裟 : ノ 衣 氵 小
裡 : 衤 里
裧 : 火 衤
裨 : 十 衤 田
裯 : ｜ 二 冂 口 土 衤
裰 : 又 衤
裱 : 一 ｜ 二 亠 土 衤 衣
裲 : ｜ 一 衤 入 冂
裳 : 衣 口 ⺌ 冖
裴 : 衣 非
裵 : 亠 衣 非
裷 : 一 丶 ノ 并 卩 大 已 衤
裸 : 衤 田 木
裹 : 衣 田 ハ 亠 木
裼 : ノ 衤 日 勿
製 : 衣 刂 牛 巾
裾 : 口 十 衤 尸
褁 : 日 木 田 衣
褂 : 衤 土 卜
褄 : ｜ ヨ 一 衤 女
褆 : 日 疋 衤
複 : 衤 日 夂
褊 : ｜ 一 戸 衤 冊 尸
褌 : 車 衤 冖
褍 : 山 衤 而
褎 : 一 ｜ ノ 亠 木 禾 衣
褏 : 一 ｜ 亠 日 田 衣
褐 : 衤 日 勹 匕
褒 : 衣 ⺅ 口 小 亠
褓 : ⺅ 口 衤 木
褕 : 一 𠆢 刂 月 衤
褖 : ヨ 彑 衤 豕
褘 : 口 衤 韋
褙 : 一 ｜ 匕 月 衤
褚 : ノ 土 ⺹ 日 衤
褜 : 亠 勹 已 月 衣
褝 : 十 衤 ⺌ 田
褞 : 皿 衤 日
褠 : 一 ｜ 二 冂 月 衤
褥 : 衤 寸 辰
褦 : 匕 厶 月 衤
褧 : 亠 火 耳 衣
褨 : 一 ノ 二 并 工 王 衤 羊
褪 : 辶 艮 衤
褫 : 衤 卜 儿 匕 厂 虍
褰 : 一 ｜ 丶 ノ 二 亠 宀 衣
褱 : 亠 水 罒 衣
褲 : 广 衤 車
褵 : 丶 ノ 亠 冂 凵 厶 禸 衤
褶 : 羽 衤 白 冫
褷 : 彳 止 疋 衤
褸 : ｜ 一 口 衤 女
褹 : 丶 儿 ハ 九 土 衤
褺 : 一 丶 亠 并 十 九 土 干 衣
褻 : 衣 九 土 丶 亠
褾 : 二 小 示 衤 西
襀 : 一 ｜ 二 ハ 目 衤 貝
襁 : 弓 衤 虫 厶
襂 : 𠆢 厶 彡 衤
襃 : 衣 口 木 亠
襄 : ｜ 衣 一 ハ 亠
襅 : 一 ｜ 凵 衤 里
襆 : 一 ｜ 丶 ノ 二 并 大 衤
襉 : 月 衤 門
襌 : 口 十 衤 田
襍 : 衤 木 隹
襏 : 丶 ノ ハ 几 又 弓 殳 衤
襒 : ｜ 丶 ノ 并 冂 攵 衤
襖 : 衤 大 米 冂
襗 : 一 并 十 土 干 衤 罒
襚 : ハ 并 辶 衤 豕
襛 : ｜ 亠 厂 日 衤 衣 辰
襜 : 儿 ハ 勹 厂 衤 言
襞 : 衣 口 十 辛 立 尸
襟 : 示 二 小 衤 木
襠 : 口 衤 ⺌ 田 冖
襡 : 勹 衤 罒 虫
襢 : 一 亠 口 囗 日 衤
襣 : 廾 田 目 衤 自 鼻
襤 : 皿 衤 臣 二
襦 : 雨 而 衤
襪 : ノ 衤 罒 戈 ⺾
襫 : 一 大 日 白 衤
襭 : 貝 目 ハ 口 衤 土 頁
襮 : ｜ 丶 ノ 二 日 水 衤
襯 : 見 衤 木 立
襰 : ハ 勹 口 木 目 衤 貝
襲 : 衣 月 立
襳 : 一 人 戈 衤 非
襴 : 衤 日 木 門
襵 : 衤 耳
襷 : 手 衤 ⺌ 并
襺 : ｜ 冂 小 幺 ⺾ 衤 糸 虫
襻 : 大 手 木 爻 衤
襼 : 丶 二 儿 ハ 厶 九 土 ⺾ 衤
襽 : 并 口 ⺾ 木 衤 門
襾 : 西
西 : 西
覀 : 西
要 : 女 西
覃 : 十 西 日
覆 : 西 日 夂 彳
覇 : 革 月 西
覈 : 西 白 方 攵
覉 : 一 亅 十 口 大 廾 西 革
覊 : 革 西 馬
見 : 見 目 儿
覍 : 儿 小 目 見
規 : 見 土 大
覐 : 儿 爻 目 見
覓 : 見 爪
覔 : 一 ｜ 丶 ノ 儿 目 見
覕 : ノ 儿 心 目 見
視 : 見 礻
覗 : 見 口 亅 一
覘 : 見 口 卜
覚 : 見 ⺌ 冖
覛 : 丶 ノ 儿 厂 目 見
覜 : 丶 ノ 儿 冫 目 見
覟 : 儿 士 心 目 見
覠 : ノ 儿 口 ヨ 目 見
覡 : 見 工 人
覥 : 一 ｜ 儿 ハ 日 目 見
覦 : 刂 月 見 𠆢
覧 : ノ 見 臣 二
覩 : 見 日 ⺹
親 : 見 十 辛 并 木 立 亠
覬 : 見 口 山 豆 并
覯 : ｜ 一 見 冂
覰 : 儿 匕 卜 厂 目 虍 見
覲 : 見 土 ⺾
観 : 見 隹 矢
覴 : 丶 ノ 儿 并 口 目 見 豆
覵 : 儿 月 目 見 門
覶 : 儿 冂 厶 又 マ 爪 目 見
覷 : 一 ｜ 丶 ノ 儿 匕 卜 厂 目 虍 見
覺 : 臼 見 冖 爻
覼 : 一 ｜ 儿 ハ 冂 爻 目 見
覽 : 見 臣 罒
覿 : 貝 目 ハ 見 士 儿 囗
觀 : 見 口 十 ⺾ 隹
角 : 角 勹 月 ｜
觔 : ｜ 力 勹 月 角
觕 : ｜ 勹 月 牛 角
觖 : ｜ 人 勹 ユ 月 角
觗 : ｜ 勹 月 氏 角
觘 : ｜ ノ 勹 小 月 角
觚 : 瓜 角
觜 : 角 止 匕
觝 : 角 氏
解 : 角 牛 刀
觥 : 一 ｜ 儿 勹 ⺌ 月 角
触 : 角 虫
觧 : 王 角 并 羊
觩 : 一 ｜ 丶 勹 月 水 角
觫 : ｜ 勹 口 月 木 角
觭 : 一 ｜ 亅 勹 口 大 月 角
觱 : 一 ｜ ノ 勹 厂 口 戈 月 角
觳 : 一 ｜ 冖 几 勹 又 士 月 殳 角
觴 : ノ 角 日 勿
觶 : ｜ 勹 十 口 日 月 田 角
觸 : 角 虫 罒 勹
觹 : ｜ 亅 勹 月 角 隹
觽 : ｜ 亅 勹 山 月 角 隹
觿 : ｜ 儿 ハ 冂 勹 口 山 月 角 隹
言 : 言
訂 : 一 言 亅
訃 : 言 卜
訄 : 九 言
訅 : 九 言
訇 : 勹 言
計 : 言 十
訊 : ノ 言 几
訌 : 言 工
討 : 言 寸
訏 : 亅 二 言
訐 : 干 言
訑 : ｜ 乙 匕 也 言
訒 : ノ 刀 言
訓 : 言 川
訔 : 山 言
訕 : 山 言
訖 : 乙 言
託 : ノ 一 乙 言
記 : 言 已
訛 : ⺅ 言 匕
訝 : 牙 言
訞 : ノ 大 言
訟 : 言 ハ 厶
訠 : ｜ 弓 言
訡 : 一 𠆢 言
訢 : 斤 言
訣 : 言 人 大 二
訤 : 爻 言
訥 : 言 人 冂
訦 : ノ 乙 冖 尢 言
訪 : 言 方
訫 : 心 言
訬 : ノ 小 言
設 : 言 殳 几 又
訯 : 丶 乃 及 言
許 : ノ 干 言 十
訳 : 言 尸 丶
訴 : 斤 言 丶
訵 : 儿 囗 言
訶 : 言 口 亅 一
訷 : ｜ 日 言
診 : 言 𠆢 彡
註 : 王 言 丶
証 : 一 言 止
訽 : 勹 口 言
訾 : 匕 止 言
詀 : 卜 口 言
詁 : 言 口 十
詃 : 亠 幺 玄 言
詅 : 一 丶 亅 𠆢 マ 言
詆 : 言 氏
詇 : 口 大 言
詈 : 言 罒
詉 : 又 女 言
詍 : 一 ｜ 世 言
詎 : 匚 口 言
詐 : ｜ ノ 言
詑 : 言 匕 宀
詒 : 言 口 厶
詓 : 厶 土 言
詔 : 言 口 刀
評 : ｜ 一 言 二 并
詖 : ノ 十 厂 又 支 言
詗 : 冂 口 言
詘 : ｜ 凵 言
詛 : 言 目
詜 : ｜ 凵 又 屮 言
詝 : 一 亅 宀 言
詞 : 言 口 亅 一
詠 : 言 水 丶
詡 : ノ 冫 羽 言
詢 : 言 日 勹
詣 : 言 日 匕
詥 : 一 𠆢 口 言
試 : 言 工 弋
詧 : 丶 夕 言
詩 : 言 寸 土
詫 : ノ 乙 言 宀
詬 : 言 口 厂
詭 : 言 卩 厂
詮 : 王 言 𠆢 ハ
詰 : 言 口 士
話 : 言 口 舌
該 : 言 人 亠
詳 : 王 言 并 羊
詵 : 一 ノ 儿 土 言
詶 : 丶 川 言
詷 : 一 冂 口 言
詹 : 儿 ハ 勹 厂 言
詺 : 口 夕 言
詻 : 口 夂 言
詼 : 火 言 厂
詾 : 丶 ノ 凵 勹 言
詿 : 土 言
誀 : 耳 言
誂 : 言 儿 冫
誃 : 夕 言
誄 : ｜ 言 木 耒
誅 : ｜ ノ 牛 言 二 ハ 木
誆 : 匚 王 言
誇 : 言 大 二 勹
誉 : 一 言 ⺌ 并
誋 : 已 心 言
誌 : 言 士 心
認 : 言 心 刀 丶
誏 : 丶 艮 言
誐 : 戈 手 言
誑 : 王 言 犭
誒 : 一 ノ 厶 大 矢 言
誓 : 斤 言 扌
誕 : ノ 言 止 廴
誖 : 冖 十 子 言
誗 : ノ 刂 木 禾 言
誘 : 乃 禾 言
誙 : 一 巛 工 言
誚 : 月 言 ⺌
語 : 一 言 口 五
誟 : ノ 土 子 ⺹ 言
誠 : ノ 言 戈
誡 : 言 廾 戈
誣 : 言 工 人
誤 : 言 口 ハ
誥 : ノ 言 口 土
誦 : 言 用
誧 : 丶 十 月 言
誨 : 言 母 毋
誩 : 言
説 : 言 口 并 儿
読 : 言 士 儿 冖
誮 : ノ 乙 ⺅ 匕 ⺾ 言
誯 : 日 曰 言
誰 : 言 隹
課 : 言 田 木
誳 : ｜ 凵 尸 言
誶 : 亠 人 十 言
誷 : 一 亠 并 冂 亡 言
誹 : 言 非
誻 : 日 曰 水 言
誼 : 一 言 目 宀
誾 : 言 門
調 : 言 口 土 冂
諂 : 臼 言
諃 : 木 言
諄 : 言 子 亠 囗
諆 : ｜ 二 ハ 言
談 : 火 言
諈 : 一 ｜ ノ 言
諉 : ノ 女 木 禾 言
諊 : 勹 米 言
請 : 月 言 青 土 二 亠
諌 : ｜ 言 日 木 田
諍 : ヨ 言 爪 亅
諏 : 言 耳 又
諐 : ⺅ 口 川 言
諑 : 丶 言 豕
諒 : 言 口 小 亠
諓 : 戈 言
諔 : 一 卜 又 小 言
諕 : 几 匕 卜 厂 虍 言
論 : ｜ 一 言 𠆢 冊
諗 : 一 丶 𠆢 心 言
諚 : 言 疋 宀
諛 : 言 人 日 臼
諜 : 言 木 世
諝 : 月 疋 言
諞 : ｜ 一 言 戸 冊 尸
諟 : 日 疋 言
諠 : 言 二 日 宀
諡 : 言 皿 ハ 一 勹
諢 : 言 車 冖
諤 : 言 口 二 勹
諦 : 巾 言 并 立 亠 冖
諧 : 言 白 比
諫 : ｜ 言 口 罒 ハ 木
諬 : 丶 ノ 尢 木 尤 禾 言
諭 : 刂 月 言 𠆢
諮 : 欠 言 口 冫
諰 : 心 田 言
諱 : 言 口 韋
諳 : 音 言 日 立
諴 : 一 ノ 厂 口 戈 言
諵 : 一 并 冂 十 干 言
諶 : 一 ｜ 儿 ハ 匚 言
諷 : 言 虫 風 几
諸 : 言 日 ⺹
諺 : 言 并 立 亅 亠 彡
諼 : ノ 二 又 爪 言
諾 : ノ 一 言 口 ⺾
諿 : 口 耳 言
謀 : 甘 言 木
謁 : 言 日 勹 匕
謂 : 月 言 田
謄 : ｜ 一 月 言
謅 : 勹 屮 言
謆 : 一 丶 ノ 冫 尸 戸 羽 言
謇 : ｜ 一 言 ハ 宀
謊 : ｜ ノ 乙 亠 川 ⺾ 亡 言
謋 : 夕 木 言 舛
謌 : 言 口 亅 一
謍 : 冖 火 言
謎 : 言 辶 米
謐 : ノ 言 皿 心 丶
謑 : 大 幺 爪 言
謔 : 言 卜 匕 匚 厂 虍
謖 : 言 田 儿 夂
謗 : 言 并 方 立 亠 冖
謙 : ｜ ヨ 言 ハ 并
謚 : 言 皿 并
講 : 言 冂 一 十
謜 : 厂 小 日 白 言
謝 : 言 身 寸
謞 : 亠 冂 口 言 高
謟 : 爪 臼 言
謠 : 缶 言 夕 凵
謡 : 干 言 爪 凵
謦 : 言 士 尸 殳 几 又
謨 : 言 大 日 ⺾
謫 : 言 口 十 并 立 亠 冂 滴
謬 : 羽 言 𠆢 冫 彡
謭 : 一 并 刀 刂 月 言
謰 : 辶 言 車
謳 : 言 口 匚 品
謷 : 土 士 攵 方 言
謹 : 言 土 ⺾ 口
謼 : 一 ノ 亅 并 匕 卜 厂 虍 言
謾 : 言 日 罒 又
譁 : ｜ 一 言 ⺾
譂 : ｜ 口 日 田 言
譃 : 一 ｜ 丶 ノ 匕 卜 厂 虍 言
譄 : ｜ ハ 并 口 日 言
譅 : 丶 刀 止 言
譆 : 一 并 十 口 士 言 豆
譈 : 亠 口 子 攵 言
證 : 言 口 豆 并 癶
譌 : ノ 言 爪 灬
譍 : ⺅ 广 言 隹
譎 : 言 口 矛 儿 冂
譏 : 言 丶 幺 戈 ノ
譑 : ノ 冂 口 大 言
譒 : ノ 田 米 言
譓 : 一 心 虫 言
譔 : ｜ 二 ハ 已 言
譖 : 言 日 无
識 : 音 言 日 立 戈
譙 : 灬 言 隹
譚 : 言 十 西 日 曰
譛 : 言 人 大 二 日
譜 : ｜ 一 言 二 日 并
譞 : 一 口 罒 衣 言
譟 : 言 口 木 品
譣 : 一 人 𠆢 口 言
警 : 言 口 勹 夂 ⺾ 攵
譩 : 心 日 立 言 音
譫 : 言 儿 厂 勹
譬 : 言 口 十 辛 立 尸
譭 : 几 又 工 殳 臼 言
譯 : 言 十 辛 土 罒 立 亠
議 : 一 王 言 并 羊 亅 戈 手
譱 : 王 言 并 羊
譲 : 衣 言 ハ 亠
譴 : ｜ 一 言 口 辶
譶 : 言
護 : 言 又 ⺾ 隹
譸 : 一 口 士 寸 工 言
譹 : 亠 冖 口 言 豕
譼 : 一 丶 ノ 匚 罒 臣 言
譽 : 臼 言 ハ
譾 : 一 丶 ノ 并 冂 冫 刂 月 羽 言
譿 : 一 ｜ 二 ヨ 心 言
讀 : 貝 目 ハ 言 士 儿 囗
讁 : 亠 并 冂 十 辶 口 立 言 滴
讃 : 貝 目 ハ 言 人 大 二 亠
讄 : 田 言
讅 : ノ 宀 田 米 言
變 : 言 糸 幺 小 攵
讋 : 乙 月 立 言 竜
讌 : 一 言 口 凵 匕 灬 爿
讍 : 口 王 言
讎 : 言 隹
讏 : 一 ｜ 冂 ユ 口 巾 彳 行 言
讐 : 言 隹
讒 : 言 口 比 儿
讓 : ｜ 衣 一 言 口 亠
讔 : 工 ヨ ⻖ 心 爪 言
讕 : 并 口 木 言 門
讖 : 言 人 戈 韭
讙 : 言 口 十 ⺾ 隹
讚 : ノ 言 土 儿 貝 目 ハ
讜 : 并 冖 口 ⺌ 灬 言 里 黒
讝 : 厂 口 工 攵 耳 言
讞 : 丶 儿 冂 匕 卜 厂 口 大 犬 虍 言 鬲
讟 : ハ 士 目 罒 言 貝
谷 : 口 谷 ハ 𠆢
谸 : 一 ノ 𠆢 ハ 口 谷
谹 : 一 ノ 𠆢 ハ 厶 口 谷
谺 : 牙 口 谷 ハ 𠆢
谽 : 一 丶 𠆢 ハ 口 谷
谾 : 𠆢 ハ 口 宀 工 谷
谿 : 口 大 谷 爪 并 𠆢 幺
豁 : 口 谷 土 ハ 𠆢 亠 宀
豅 : 乙 𠆢 ハ 口 月 立 谷 竜
豆 : 口 豆 并
豇 : 并 口 工 豆
豈 : 口 山 豆 并
豉 : 并 十 又 口 支 豆
豊 : ｜ 一 口 豆 日 并
豋 : 丶 并 口 夕 豆
豌 : 口 豆 并 夕 卩 宀
豎 : 口 臣 豆 并 又
豏 : 一 ｜ 丶 ノ 并 口 ヨ 豆
豐 : 口 山 豆 并 凵
豑 : ｜ ノ 并 口 弓 日 豆
豓 : 一 ｜ 丶 并 口 大 山 皿 豆
豔 : 一 ｜ 并 厶 口 土 山 皿 豆
豕 : 豕
豗 : 一 儿 豕
豘 : ノ 乙 凵 屯 豕
豙 : 亠 并 立 豕
豚 : 月 豕
豛 : 几 又 殳 豕
豝 : 乙 已 巴 豕
象 : 勹 豕 口 一
豢 : 人 大 二 并 豕
豣 : 一 ノ 二 十 干 豕
豤 : 艮 豕
豦 : 匕 卜 厂 虍 豕
豨 : 一 ｜ 丶 ノ 冂 巾 豕
豩 : 豕
豪 : 口 亠 冖 豕
豫 : 勹 口 ｜ 矛 亅 豕 マ
豬 : 日 ⺹ 豕
豭 : 一 ｜ 又 口 豕
豳 : 山 豕
豵 : 人 彳 止 豕
豶 : ハ 十 ⺾ 目 豕 貝
豸 : 豸
豹 : 丶 勹 豸
豺 : ノ 一 亅 豸
豻 : 一 十 干 豸
豼 : 比 豸
豾 : 一 ｜ 丶 ノ 豸
貂 : 口 刀 豸
貅 : ⺅ 木 豸
貆 : 一 日 豸
貇 : 艮 豸
貉 : 口 夂 豸
貊 : 白 豸
貋 : 一 十 干 日 曰 豸
貌 : 白 儿 豸
貍 : 里 豸
貎 : 臼 儿 豸
貐 : 一 𠆢 刂 月 豸
貒 : 山 而 豸
貓 : ⺾ 田 豸
貔 : 比 囗 豸
貘 : 大 日 ⺾ 豸
貙 : 匚 口 豸
貛 : 口 ⺾ 豸 隹
貜 : 又 目 豸 隹
貝 : 貝 目 ハ
貞 : 貝 目 ハ 卜
負 : 貝 目 ハ 勹
財 : ノ 一 貝 目 ハ 亅
貢 : 貝 目 ハ 工
貤 : ｜ 乙 ハ 匕 也 目 貝
貧 : 貝 目 刀 ハ
貨 : ⺅ 貝 目 ハ 匕
販 : 貝 目 ハ 又 厂
貪 : 貝 目 ハ 𠆢
貫 : 貝 目 ハ 母 毋
責 : 貝 目 ハ 土 亠
貭 : 貝 目 ハ 十 厂
貮 : 貝 目 ハ 弋
貯 : 一 貝 目 ハ 亅 宀
貰 : 貝 目 ハ 世
貲 : 貝 目 ハ 止 匕
貳 : 貝 目 ハ 二 弋
貴 : ｜ 一 貝 目 ハ 口
貶 : ノ 乙 貝 目 ハ 亠
買 : 貝 目 ハ 罒
貸 : ⺅ 貝 目 ハ 弋
貹 : ハ 生 目 貝
貺 : 儿 ハ 口 目 貝
費 : ｜ 貝 目 ハ 弓
貼 : 貝 目 ハ 口 卜
貽 : 貝 目 ハ 口 厶
貿 : 貝 目 ハ 刀 厶
賀 : 貝 目 ハ 口 力
賁 : 貝 目 ハ 十 ⺾
賂 : 貝 目 ハ 口 夂
賃 : 王 ⺅ 貝 目 ハ
賄 : ノ 一 貝 目 ハ 月
賅 : ノ 亠 ハ 幺 玄 目 貝
賆 : 一 ハ 并 廾 目 貝
資 : 貝 目 ハ 欠 冫
賈 : 貝 目 ハ 西
賉 : ハ 皿 目 血 貝
賊 : 貝 目 ハ 十 戈
賋 : 亠 ハ 父 目 貝
賍 : 貝 目 ハ 土 广
賎 : ノ 貝 目 ハ 毛 丶
賏 : ハ 目 貝
賑 : 貝 目 ハ 辰
賓 : ノ 貝 目 ハ 小 宀
賕 : 一 丶 ハ 水 目 貝
賖 : 二 𠆢 ハ 小 目 貝
賙 : ｜ 二 ハ 冂 口 土 目 貝
賚 : 一 貝 目 人 ハ 木
賛 : 貝 目 ハ 人 大 二 亠
賜 : 勿 貝 目 ハ 日
賝 : ハ 冖 木 目 貝
賞 : 貝 目 ハ 口 ⺌ 冖
賠 : 貝 目 ハ 口 立
賡 : 丶 ノ ハ 广 ヨ 目 貝
賢 : 貝 目 ハ 臣 又
賣 : 貝 目 ハ 士 罒
賤 : 貝 目 ハ 戈
賦 : 貝 目 ハ 止 弋
賨 : 二 ハ 宀 小 目 示 貝
質 : 貝 目 ハ 斤
賬 : ハ 目 貝 長
賭 : 貝 目 ハ 日 ⺹
賯 : ハ 勹 子 日 曰 目 貝
賰 : 一 二 ハ 大 日 目 貝
賱 : ハ 冖 目 貝 車
賲 : ⺅ ハ 口 木 目 貝
賴 : ハ 刀 口 木 目 貝
賵 : 二 ハ 冂 目 貝
賷 : ハ 冖 十 口 目 貝
賸 : 一 ハ 并 大 月 目 貝
賺 : ｜ ヨ 貝 目 ハ
賻 : 貝 目 ハ 十 寸 田 丶
購 : ｜ 一 貝 目 ハ 冂 十
賽 : ｜ 一 貝 目 ハ 宀
賾 : 一 ｜ 二 ハ 匚 目 臣 貝
賿 : 𠆢 ハ 冫 彡 目 羽 貝
贁 : ハ 攵 目 貝
贃 : ｜ ハ 口 心 目 貝
贄 : 九 貝 目 ハ 十 辛 立 丶 亠
贅 : 貝 目 ハ 土 方 攵
贇 : 貝 目 ハ 止 文 戈
贈 : 貝 目 ハ 田 日 并
贉 : 一 ｜ ハ 凵 十 日 目 西 貝
贊 : ノ 貝 目 ハ 土 儿
贋 : ⺅ 貝 目 ハ 厂 隹
贍 : 貝 目 ハ 言 儿 厂
贎 : ハ 冂 厶 ⺾ 日 田 目 禸 貝
贏 : 亡 貝 目 ハ 月 口
贐 : ｜ ヨ 貝 目 ハ 皿 灬
贒 : ｜ ハ 匚 口 心 目 臣 貝
贓 : ノ 貝 目 ハ 臣 冫 戈 疒
贔 : 貝 目 ハ
贖 : 貝 目 ハ 士 儿 囗
贗 : ⺅ ハ 厂 灬 目 貝 鳥
贛 : ハ 十 夂 工 日 目 立 貝
赤 : 赤 土
赥 : 人 勹 土 欠 赤
赦 : 赤 土 攵
赧 : ｜ 口 赤 土 又
赩 : 乙 勹 土 已 巴 色 赤
赫 : 赤 土
赬 : ハ 卜 土 目 貝 赤
赭 : 赤 土 日 ⺹
赮 : ｜ 又 口 土 赤
走 : 走 土
赱 : 走 土
赳 : ｜ 走 土
赴 : 走 土 卜
起 : 走 土 已
赿 : 土 氏 走
趁 : 走 土 𠆢 彡
趂 : 勹 土 小 走
趄 : 土 目 赤
超 : 口 走 土 刀
趈 : 卜 口 土 走
越 : 走 土 戈
趍 : 土 夕 走
趐 : 冫 土 羽 走
趑 : 人 冫 勹 土 欠 走
趕 : 一 十 土 干 日 走
趙 : 月 ⺌ 走 土
趞 : ｜ 二 土 日 曰 走
趟 : 冂 口 土 ⺌ 走
趠 : 十 卜 土 日 曰 走
趣 : 耳 走 土 又
趦 : 人 冫 勹 口 土 欠 走
趨 : 走 土 勹 屮
趫 : ノ 冂 口 土 大 走
趬 : 一 儿 土 走
趯 : ノ 冫 土 羽 走 隹
趲 : ノ 儿 ハ 土 目 貝 走
足 : 口 足
趵 : 丶 勹 口 止 足
趷 : 一 ノ 乙 口 止 足
趹 : 人 ユ 口 止 足
趺 : 口 人 足 二 大
趻 : 丶 𠆢 口 止 足
趼 : 一 口 廾 止 足
趾 : 口 止 足
跀 : 口 月 止 足
跂 : 口 支 足 又 十
跅 : 丶 口 斤 止 足
跆 : 厶 口 止 足
跇 : 一 ｜ 口 止 世 足
跈 : 𠆢 口 彡 止 足
跊 : 一 口 木 止 足
跋 : ノ 一 口 足 丶 攵
跌 : ノ 口 人 足 大 土 二
跎 : 匕 口 宀 止 足
跏 : 口 足 力
跑 : 勹 口 已 止 足
跔 : 勹 口 止 足
跕 : 卜 口 止 足
跖 : 口 石 足
跗 : ⺅ 口 寸 止 足
跙 : 一 口 止 目 足
跚 : ｜ 一 口 足 冊 冂
跛 : 口 足 皮 又
距 : 口 足 匚 巨
跟 : 口 艮 足
跡 : 口 止 赤 足 亠
跣 : ノ 口 足 土 儿
跤 : 亠 口 止 父 足
跥 : 乃 口 木 止 足
跧 : 𠆢 口 止 王 足
跨 : 口 足 大 二 勹
跪 : 口 足 卩 厂 勹
跫 : 口 工 足 丶 几
跬 : 口 土 止 足
路 : 口 足 夂
跰 : 一 并 口 廾 止 足
跱 : 口 土 寸 止 足
跲 : 一 人 口 止 足
跳 : 口 足 儿 冫
跴 : 口 止 西 足
践 : ノ 口 足 毛 丶
跼 : 口 足 尸
跽 : 口 已 心 止 足
跿 : 口 走 足 土
踁 : 一 口 巛 工 止 足
踄 : ノ 口 小 止 足
踅 : 口 扌 斤 足
踆 : 儿 ハ 厶 口 夂 止 足
踈 : ｜ 口 足 ハ 木
踉 : 口 艮 足
踊 : 口 足 用 マ
踋 : 卩 厶 口 土 止 足
踌 : 一 ノ 二 口 寸 止 足
踏 : 口 水 足 日
踐 : 口 足 戈
踑 : ｜ 二 ハ 口 止 甘 足
踔 : 十 卜 口 日 止 足
踖 : ｜ 二 口 日 止 足
踝 : 口 足 田 木
踞 : 口 十 足 尸
踟 : 口 足 矢
踠 : 卩 口 夕 宀 已 止 足
踡 : 一 ハ 并 卩 口 大 已 止 足
踢 : ノ 勹 口 日 止 勿 足
踣 : 口 止 立 足
踦 : 一 亅 口 大 止 足
踧 : 又 口 土 小 足
踪 : 口 示 二 小 足 宀
踰 : 刂 月 口 足 𠆢
踱 : 一 凵 又 口 广 止 足
踳 : 一 二 口 大 日 止 足
踴 : 口 足 田 力 マ
踵 : ｜ ノ 口 足 田 里
踶 : 口 日 止 疋 足
踷 : ノ 口 土 ⺹ 日 曰 止 足
踸 : 一 ｜ ハ 匚 口 止 甘 足
踹 : 口 山 止 而 足
踽 : ノ 冂 厶 口 止 禸 虫 足
蹀 : 一 ｜ 口 木 止 世 足
蹁 : 一 ｜ 丶 亅 冂 口 尸 廾 戸 止 冊 足
蹂 : 口 足 矛 木 マ
蹄 : 巾 口 足 并 立 亠 冖
蹇 : ｜ 一 口 足 ハ 宀
蹈 : 臼 口 足 爪
蹉 : 王 口 工 足 并 羊
蹊 : 口 足 大 爪 幺
蹋 : ノ 冫 口 日 止 羽 足
蹌 : 口 足 𠆢 尸
蹍 : ｜ 二 口 尸 止 衣 足
蹎 : ハ 十 口 止 目 貝 足
蹏 : ノ 儿 几 匕 卜 厂 口 止 虍 足
蹐 : 月 口 人 足 冫 癶
蹔 : 口 斤 足 車
蹕 : ｜ 一 口 足 田
蹙 : ノ 口 小 足 卜 戈
蹛 : 一 ｜ ノ 乙 冂 冖 口 巾 廾 止 足
蹜 : 一 ⺅ 口 宀 日 止 白 足
蹝 : 口 彳 止 足
蹞 : ハ 卜 口 止 目 貝 足 頁
蹟 : 貝 目 ハ 口 足 土 亠
蹠 : 一 口 足 凵 广 灬
蹡 : 丶 口 夕 寸 止 爿 足
蹢 : 亠 并 冂 十 口 止 立 足
蹣 : 一 口 足 入 冂 凵
蹤 : 口 足 并 疋 彳
蹩 : ｜ ハ 并 冂 口 巾 攵 足
蹬 : 丶 ノ 并 口 止 豆 足
蹭 : ｜ ハ 并 口 日 止 足
蹯 : ノ 口 止 田 米 足
蹰 : 并 厂 口 寸 止 豆 足
蹱 : 口 止 立 足 里
蹲 : 口 寸 足 酉 并
蹴 : ノ 乙 口 小 足 丶 亠 尤 尢
蹶 : 欠 口 足 并 厂 屮
蹹 : 一 𠆢 冫 口 止 羽 足
蹺 : 一 儿 口 土 止 足
蹻 : ノ 冂 口 大 止 足
蹼 : 王 口 人 足 并 羊
躁 : 口 足 木 品
躂 : 并 辶 口 土 止 王 羊 足
躃 : 十 口 尸 止 立 足 辛
躄 : 口 十 辛 足 立 尸
躅 : 口 足 虫 罒 勹
躇 : 口 足 日 ⺹ ⺾
躉 : 冂 厶 口 ⺾ 田 禸 足
躊 : 口 工 士 寸 足
躋 : 口 足 亠 齊 刀 氏 廾
躍 : ヨ 口 足 隹
躐 : 丶 ノ 乙 口 川 巛 止 足
躑 : 口 足 大 酉 并 ⻏
躒 : 口 幺 日 木 止 白 足
躓 : 貝 目 ハ 斤 口 足
躔 : 口 足 田 土 儿 广
躕 : 并 十 口 士 寸 广 止 豆 足
躘 : 乙 口 日 月 止 立 足 音
躙 : 口 足 門 隹
躚 : 一 凵 辶 口 大 已 止 西 足
躛 : 一 ｜ 冂 ユ 口 巾 彳 行 足
躝 : 并 口 木 止 足 門
躞 : 又 口 止 火 言 足
躡 : 口 耳 足
躢 : 冫 口 日 曰 止 羽 足 門
躧 : 一 丶 冂 匕 口 广 止 比 足 鹿
躩 : 又 口 止 目 足 隹
躪 : 口 足 門 ⺾ 隹
身 : 身
躬 : 弓 身
躭 : ノ 乙 冖 尢 身
躮 : ハ 刀 身
躯 : 身 匚 丶 ノ
躰 : ｜ 身 木
躱 : ノ 身 木 乃
躳 : ノ 口 身
躵 : ノ 刀 心 身
躶 : 木 田 身
躺 : 冂 口 ⺌ 身
躻 : 儿 ハ 宀 工 身
躾 : 王 身 大 并 羊
軀 : 匚 口 身
軁 : 十 口 女 身
軃 : 十 口 日 田 身
軄 : 戈 日 立 身 音
軅 : ⺅ 身 厂 隹
軆 : ｜ 一 口 身 豆 日 并
軇 : 一 口 士 寸 工 身
軈 : ⺅ 心 身 广 隹
車 : 車
軋 : 乙 車
軌 : 車 九
軍 : 車 冖
軏 : 一 儿 車
軑 : 大 車
軒 : 干 車
軔 : ノ 刀 車
軛 : 車 卩 厂
軜 : 人 冂 車
軟 : 欠 車
転 : 車 二 厶
軣 : 車 冫
軨 : 一 ｜ 丶 亅 𠆢 マ 車
軫 : 車 𠆢 彡
軭 : 匚 王 車
軮 : 口 大 車
軰 : 一 ｜ 匕 車
軱 : 厶 瓜 車
軷 : 又 弋 車
軸 : ｜ 車 日 田
軹 : ハ 口 車
軺 : 刀 口 車
軻 : 口 車 亅
軼 : ノ 車 人 大 土 二
軽 : 車 土 又
軾 : 工 車 戈 弋
輀 : 而 車
輂 : ｜ 二 ハ 車
較 : 車 父 亠
輅 : 口 車 夂
輇 : 𠆢 王 車
輈 : 一 ｜ 丶 冂 舟 車
載 : 車 土 戈
輊 : 至 車 土 厶 一
輌 : ｜ 一 車 冂 凵
輏 : 車 酉
輐 : 二 儿 宀 元 車
輒 : 乙 耳 車
輓 : 車 免 儿
輔 : 車 十 用 丶
輕 : 工 車 巛
輖 : 冂 口 土 車
輗 : 儿 臼 車
輘 : 儿 ハ 土 夂 車
輙 : 耳 車 又
輛 : ｜ 車 入 冂
輜 : 車 巛 田
輝 : 車 ⺌ 儿 冖
輞 : 一 亠 并 冂 亡 車
輟 : 車 又
輠 : 木 田 車
輡 : 勹 臼 車
輣 : 月 車
輥 : 匕 日 比 車
輦 : ⺅ 車 人 大 二
輧 : 一 ノ 十 干 車
輨 : ｜ 口 宀 車
輩 : 車 非
輪 : ｜ 一 車 𠆢 冊
輫 : 車 非
輬 : 亠 口 小 車
輭 : 大 而 車
輮 : マ 木 矛 車
輯 : 口 耳 車
輳 : 一 車 人 大 二
輴 : 十 厂 目 車
輵 : 人 勹 日 車
輶 : ハ 并 車 酉
輷 : 勹 言 車
輸 : 刂 月 車 𠆢
輹 : 車 日 夂
輺 : 一 巛 田 車
輻 : 口 車 田
輾 : ｜ 衣 車 二 尸
輿 : 臼 車 ハ
轀 : 人 口 皿 車
轁 : 爪 臼 車
轂 : 士 車 冖 殳 几 又
轃 : 一 ノ 二 大 木 禾 車
轄 : 口 車 土 亠 宀
轅 : 口 車 土 衣
轆 : 鹿 車 比 广
轇 : ノ 𠆢 冫 彡 羽 車
轉 : 車 十 寸 虫 田
轊 : ヨ 車 非
轌 : ヨ 雨 車
轍 : 月 車 亠 厶 攵
轎 : ノ 口 車 大 冂
轏 : 子 尸 車
轑 : 丶 ノ 大 小 日 車
轒 : ハ 十 ⺾ 目 貝 車
轓 : ノ 田 米 車
轔 : 夕 米 車 舛
轕 : 人 勹 ⺾ 日 車
轗 : ノ 口 車 心 戈
轘 : 一 口 罒 衣 車
轜 : 雨 而 車
轝 : 一 ｜ 亠 ハ ヨ 車
轞 : 一 丶 ノ 匚 皿 臣 車
轟 : 車
轡 : 口 糸 幺 小 車
轢 : 車 白 木 冫
轣 : 止 車 木 厂
轤 : 皿 車 田 卜 匕 厂 虍
轥 : ⺾ 車 門 隹
辛 : 十 辛 立
辜 : 口 十 辛 立
辝 : 十 厶 口 立 辛
辞 : 口 十 辛 舌 立
辟 : 口 十 辛 立 尸
辠 : 十 目 立 自 辛
辡 : 十 立 辛
辣 : ｜ 口 十 辛 木 立
辤 : 冖 十 又 爪 立 辛
辥 : ｜ ノ 十 口 屮 立 辛
辦 : 力 十 立 辛
辧 : 十 辛 刀 立
辨 : ノ 十 辛 立
辭 : 十 辛 爪 又 立 冂 禸
辮 : 糸 幺 小 十 辛 立
辯 : 言 十 辛 立
辰 : 衣 辰 厂
辱 : 衣 寸 辰 厂
農 : ｜ 衣 一 辰 日 厂
辴 : 一 ｜ 亠 十 厂 口 日 田 衣 辰
辵 : 彡 止
辶 : 辶
辷 : 一 辶
辸 : 乃 辶
辺 : 辶 刀
辻 : 辶 十
込 : 辶 入
达 : 辶 大
辿 : 辶 山
迀 : 一 十 辶 干
迁 : ノ 十 辶
迂 : 干 辶 二 亅
迄 : 乙 辶
迅 : 辶 十
迆 : ｜ 乙 匕 辶 也
迊 : 一 ｜ 冂 辶 巾
迋 : 辶 王
迍 : ノ 乙 凵 辶 屯
迎 : 辶 卩
运 : 二 厶 辶
近 : 斤 辶
迒 : 亠 几 辶
迓 : 辶 牙
返 : 辶 又 厂
迕 : 一 ノ 十 辶 干
迚 : ｜ 口 辶
迠 : 卜 辶 口
迢 : 口 辶 刀
迣 : 一 ｜ 辶 世
迤 : 一 ｜ ノ 乙 匕 辶 也
迥 : 口 辶 冂
迦 : 口 辶 力
迨 : 厶 辶 口
迩 : ノ 辶 小
迪 : ｜ 辶 日 田
迫 : 辶 白
迭 : ｜ ノ 一 牛 辶 矢 大
迮 : 一 ｜ ノ 辶
迯 : 辶 卜 夕
述 : 辶 十 丶 木
迱 : 匕 辶 宀
迴 : 口 辶 囗
迵 : 一 冂 辶 口
迶 : 一 ノ 辶 月
迷 : 辶 米
迸 : ｜ ノ 辶 二 并 廾
迹 : 辶 赤 ハ 亅 亠
迺 : 辶 西
迻 : 辶 夕
追 : ｜ 口 辶
迾 : 刂 辶 歹
退 : 辶 艮
送 : 辶 并 大 一
适 : 辶 口 舌
逃 : 辶 儿 冫
逄 : ｜ 二 辶 夂
逅 : 口 辶 厂
逆 : 辶 并 屮
逈 : ノ 冂 辶 口
逋 : 辶 十 用 丶
逌 : 卜 辶 口
逍 : 月 辶 ⺌
逎 : 辶 酉
透 : ノ 禾 辶 乃
逐 : 辶 豕
逑 : 辶 水 丶 亠
逓 : 巾 辶 厂 二 ｜
途 : 辶 ハ 𠆢 亅 木
逕 : 一 工 辶 巛
逖 : 火 辶 犭
逗 : 口 辶 豆 并
逘 : 一 ノ 厶 辶 大 矢
這 : 言 辶
通 : 辶 用 マ
逛 : 辶 犭 王
逝 : 斤 辶 扌
逞 : 王 口 辶
速 : ｜ 一 口 辶 ハ 木
造 : ノ 口 辶 土
逡 : 辶 儿 厶 夂
逢 : ｜ 辶 二 夂
連 : 辶 車
逧 : 口 辶 谷 ハ 𠆢
逨 : 人 辶 木
逩 : 十 辶 大 廾
逪 : ｜ 二 辶 日
逬 : 一 ノ 十 辶 干
逭 : ｜ 辶 口 宀
逮 : ヨ 辶 水 隶
逯 : 辶 ヨ 彑 水
週 : 口 辶 土 冂
進 : 辶 隹
逳 : 亠 厶 辶 月
逴 : 十 卜 辶 日
逵 : 辶 土 儿
逶 : 禾 辶 女
逷 : ノ 勹 辶 日 勿
逸 : ノ 辶 免 儿 勹
逹 : 辶 十 辛 立 亠
逼 : 口 辶 田 一
逾 : 刂 月 辶 𠆢
逿 : 一 ノ 勹 辶 日 曰 勿
遁 : 斤 辶 十 目 厂
遂 : 辶 并 豕
遃 : 丶 ノ 亠 并 厂 辶 彡
遄 : 辶 山 而
遅 : 王 辶 并 羊 尸
遇 : 辶 田 冂 厶 禸
遉 : 貝 目 ハ 辶 卜
遊 : 辶 子 方
運 : 辶 車 冖
遌 : 二 勹 辶 口
遍 : ｜ 一 戸 辶 冂 冊 尸
過 : 口 辶 冂
遏 : 辶 日 勹 匕
遐 : ｜ 口 辶 又
遑 : 王 辶 白
遒 : 辶 酉 并
道 : 辶 自 并 首
達 : 王 辶 土 并 羊
違 : 口 辶 韋
遖 : 干 辶 十 并 冂
遘 : ｜ 一 辶 冂
遙 : 辶 夕 丶 缶
遛 : 刀 厶 辶 田
遜 : ノ 辶 子 糸 幺 小
遝 : ｜ 丶 ノ 辶 罒
遞 : 辶 卜 儿 匕 厂 虍
遠 : 衣 口 辶 土
遡 : 月 辶 并 屮
遢 : 冫 辶 日 曰 羽
遣 : ｜ 一 口 辶
遥 : 干 辶 爪 凵
遦 : ハ 十 辶 口 田 目 貝
遧 : 十 辶 日 立
遨 : 辶 土 方 攵
適 : 口 辶 十 并 立 亠 冂 滴
遬 : 人 勹 辶 口 木 欠
遭 : ｜ 一 辶 日
遮 : 一 辶 广 灬
遯 : 辶 月 豕
遰 : 一 ｜ ノ 乙 冂 冖 辶 巾 廾
遲 : 牛 辶 水 尸
遴 : 辶 夕 米 舛
遵 : 辶 寸 酉 并
遶 : 辶 土 儿
遷 : 辶 西 大 已
選 : ｜ 辶 二 ハ 已
遹 : 儿 ハ 冂 マ 辶 口 矛
遺 : 一 貝 目 ハ 辶 口
遼 : 辶 小 日 并 𠆢
遽 : 辶 卜 匕 厂 虍 豕
避 : 口 辶 十 辛 立 尸
邀 : 辶 白 方 攵
邁 : 辶 田 禸 ⺾
邂 : 角 牛 辶 刀
邃 : 穴 辶 并 儿 宀 豕
還 : 衣 口 辶 罒 一
邅 : 一 亠 辶 口 日
邇 : ｜ 一 辶 ハ 冂 爻
邈 : 儿 辶 日 白 豸
邉 : 口 辶 自 ハ 冖
邊 : 穴 辶 自 方 儿 宀
邋 : 丶 ノ 乙 辶 口 川 巛
邌 : ノ 𠆢 勹 辶 木 水 禾
邎 : 丶 ノ 辶 夕 小 幺 糸 言
邏 : 辶 糸 幺 小 罒 隹
邐 : 一 丶 冂 匕 辶 广 比 鹿
邑 : 口 巴
邕 : 乙 口 巛 已 ⻏ 巴
邗 : 一 十 干 ⻏
邘 : 亅 二 ⻏
邙 : 亠 ⻏ 亡
邛 : 工 ⻏
邠 : ハ 刀 ⻏
邡 : ⻏ 方
邢 : 一 廾 ⻏
那 : 刀 ⻏ 二
邥 : ノ 乙 冖 尢 ⻏
邦 : ノ 二 ⻏
邨 : 屯 ⻏
邪 : 牙 ⻏
邯 : 甘 ⻏
邰 : 厶 口 ⻏
邱 : 斤 ⻏
邲 : ノ ⻏ 心
邳 : 一 ｜ 丶 ノ ⻏
邴 : 一 人 冂 ⻏
邵 : 口 刀 ⻏
邶 : 一 ｜ 匕 ⻏
邸 : 氏 ⻏
邽 : 土 ⻏
邾 : 一 ノ ⻏ 木
郁 : ノ 一 月 ⻏
郃 : 一 𠆢 口 ⻏
郄 : 一 丶 ノ 厶 ⻏
郅 : 一 厶 土 ⻏ 至
郇 : 勹 ⻏ 日
郈 : 一 厂 口 ⻏
郊 : 父 ⻏ 亠
郌 : 乙 口 士 已 ⻏ 巴
郎 : 艮 ⻏
郒 : 丶 乙 厶 口 已 ⻏ 日 曰 巴
郕 : ノ 亅 厂 ⻏ 戈
郗 : 一 ｜ 丶 ノ 冂 巾 ⻏
郘 : 口 ⻏
郙 : 丶 十 ⻏ 月
郛 : 子 爪 ⻏
郜 : ｜ ノ 二 口 土 ⻏
郝 : 土 ⻏ 赤
郞 : ⻏ 艮
郟 : 人 大 ⻏
郡 : 一 口 ⻏ ノ
郢 : 王 口 ⻏
郤 : 口 谷 ハ ⻏ 𠆢
郥 : ハ ⻏ 目 貝
部 : 口 ⻏ 立
郫 : ノ 十 ⻏ 日 白
郭 : 口 ⻏ 亅 亠 子
郯 : ⻏ 火
郰 : 又 ⻏ 耳
郲 : 人 ⻏ 木
郴 : ⻏ 木
郵 : ｜ ノ 一 ⻏
郶 : 乙 口 已 ⻏ 巴 立
郷 : 艮 ⻏ 幺
都 : 日 ⻏ ⺹
郾 : 匚 女 ⻏ 日
郿 : ｜ 尸 ⻏ 目
鄀 : 一 ノ 口 ⺾ ⻏
鄂 : 口 二 ⻏
鄄 : 土 ⻏ 西
鄅 : ノ 冂 厶 口 ⻏ 禸 虫
鄆 : 冖 ⻏ 車
鄈 : 一 丶 ノ 大 ⻏
鄍 : 亠 ハ 冖 ⻏ 日 曰
鄐 : 亠 幺 ⻏ 玄 田
鄒 : ⻏ 勹 屮 ⺾
鄔 : ⻏ 灬 鳥
鄕 : 幺 ⻏ 艮
鄖 : ハ 口 ⻏ 目 貝
鄗 : 亠 冂 口 ⻏ 高
鄘 : ｜ 二 冂 广 ヨ ⻏ 月 聿
鄙 : 口 ⻏ 囗
鄚 : 大 ⺾ ⻏ 日
鄜 : 匕 广 ⻏ 比 鹿
鄞 : 二 十 口 廾 ⻏ 革
鄠 : 二 冖 勹 ⻏ 雨
鄢 : 一 勹 ⻏ 止 灬
鄣 : 十 ⻏ 日 立 音
鄥 : ⻏ 灬 鳥
鄧 : 丶 ノ 并 口 ⻏ 豆
鄩 : 口 寸 工 ヨ ⻏
鄭 : 大 酉 并 ⻏
鄮 : ノ ハ 刀 厶 ⻏ 目 貝
鄯 : 一 并 口 ⻏ 王 羊
鄰 : 舛 米 ⻏ 夕
鄱 : ノ ⻏ 田 米
鄲 : ｜ 口 十 田 ⻏
鄴 : 一 ｜ 丶 ノ 并 ⻏ 王 羊
鄶 : 一 ｜ 𠆢 并 口 ⻏ 日 曰
鄷 : ｜ 并 口 ⻏ 日 豆
鄹 : ｜ 丶 ノ 又 ⻏ 耳
鄺 : ハ 广 ⻏ 田 黄
鄼 : 一 ハ 大 ⻏ 目 貝
鄽 : 儿 ハ 土 广 ⻏ 里
酃 : 二 冖 口 ⻏ 雨
酆 : 并 口 山 ⻏ 豆 非
酇 : ノ 儿 ハ 土 ⻏ 目 貝
酈 : 一 丶 冂 匕 广 ⻏ 比 鹿
酉 : 酉
酊 : 酉 亅 一
酋 : 酉 并
酌 : 酉 丶 勹
配 : 酉 已
酎 : 寸 酉
酏 : ｜ 乙 匕 也 酉
酒 : 氵 酉
酓 : 丶 𠆢 酉
酔 : 九 十 酉
酖 : 酉 尢
酗 : 丶 ノ 凵 酉
酘 : 酉 殳 几 又
酙 : 斗 酉
酚 : ハ 刀 酉
酛 : 二 儿 元 酉
酡 : 匕 宀 酉
酢 : ｜ ノ 酉
酣 : 甘 酉
酤 : 十 口 酉
酥 : 禾 酉
酧 : 宀 寸 酉
酩 : 口 酉 夕
酪 : 口 酉 夂
酬 : ｜ 川 酉 丶
酭 : 一 ノ 月 酉
酲 : 王 口 酉
酳 : 月 酉 幺
酴 : 二 𠆢 小 酉
酵 : 子 酉 ⺹
酷 : ノ 口 土 酉
酸 : 酉 儿 厶 夂
酹 : 寸 爪 酉
酺 : 丶 十 月 酉
酻 : 子 爪 酉
醁 : ヨ 水 酉
醂 : 酉 木
醃 : 乙 大 日 酉 奄
醅 : 口 立 酉
醆 : 戈 酉
醇 : 口 子 酉 亠
醉 : 十 人 酉 亠
醊 : 又 酉
醋 : ｜ 一 酉 二 日
醍 : 酉 日 疋
醎 : 一 ノ 厂 口 戈 酉
醐 : 月 口 十 酉
醑 : 月 疋 酉
醒 : 生 酉 日
醓 : ノ 乙 冖 尢 皿 酉
醔 : ノ 木 火 禾 酉
醕 : 亠 口 日 酉
醗 : 二 酉 儿 癶
醘 : 厶 土 皿 酉
醜 : 鬼 田 酉 儿 匕
醞 : 人 口 皿 酉
醡 : 一 ｜ ノ 亠 ハ 酉
醢 : ノ 一 口 皿 酉
醤 : 寸 爪 酉 爿
醦 : 𠆢 厶 彡 酉
醨 : 丶 ノ 亠 冂 凵 厶 禸 酉
醪 : 羽 酉 𠆢 冫 彡
醫 : 酉 矢 匚 殳 几 又
醬 : 丶 夕 寸 爿 酉
醭 : 一 ｜ 丶 ノ 二 并 大 酉
醮 : 灬 酉 隹
醯 : 皿 川 酉 亠 厶
醰 : 一 冂 凵 十 日 西 酉
醱 : 丶 ノ 几 又 弓 殳 酉
醲 : ｜ 厂 日 衣 辰 酉
醳 : 一 并 十 土 干 罒 酉
醴 : ｜ 一 口 豆 酉 日 并
醵 : 酉 卜 匕 厂 虍 豕
醶 : 一 人 𠆢 口 酉
醸 : 衣 酉 ハ 亠
醺 : ｜ ノ 酉 灬
醻 : 一 口 士 寸 工 酉
醼 : 一 ｜ 凵 匕 口 灬 酉
醽 : 二 冖 口 酉 雨
醿 : 小 幺 广 木 糸 酉 麻
釀 : ｜ 衣 一 口 酉 亠
釁 : 臼 刀 酉 ハ 冂
釂 : 一 ｜ 厶 寸 日 爪 罒 酉
釃 : 一 丶 冂 匕 广 比 酉 鹿
釄 : 儿 广 木 酉 非
釅 : 厂 口 工 攵 耳 酉
釆 : 釆 米
采 : 爪 木
釈 : 釆 米 尸 丶
釉 : ｜ 日 釆 米 田
釋 : 十 辛 罒 釆 米 立 亠
里 : 里
重 : ｜ ノ 一 日 里
野 : 矛 里 亅
量 : 一 日 里
釐 : ｜ 二 ハ 木 里 厂 攵
金 : 金
釓 : 乙 金
釔 : 乙 金
釖 : 金 刀
釗 : 刂 金
釘 : 一 金 亅
釙 : 卜 金
釚 : 九 金
釛 : 金 力
釜 : 一 干 并 父 王 丶 ノ 金
針 : 金 十
釞 : 入 金
釟 : 金 并 ハ
釡 : 金 并 ハ
釣 : 金 丶 勹
釤 : 彡 金
釥 : 小 金
釦 : 金 口
釧 : 金 川
釩 : 丶 几 金
釪 : 亅 二 金
釬 : 一 十 干 金
釭 : 工 金
釮 : 一 ノ 亅 金
釯 : 亠 亡 金
釰 : ノ 刀 金
釱 : 大 金
釵 : 金 又 丶
釶 : 也 金 匕
釷 : 土 金
釹 : 女 金
釻 : 丶 九 金
釼 : 金 刀 丶
釽 : 爪 金
釿 : 斤 金
鈀 : 乙 已 巴 金
鈁 : 方 金
鈄 : 斗 金
鈅 : 月 金
鈆 : ハ 厶 金
鈇 : 一 大 金
鈉 : 人 入 冂 金
鈊 : 心 金
鈌 : 人 ユ 金
鈍 : 金 屯
鈎 : 金 勹 厶
鈐 : 一 丶 𠆢 金
鈑 : 金 又 厂
鈒 : 丶 乃 及 金
鈓 : ノ 士 金
鈔 : ノ 金 小
鈕 : ｜ 一 金
鈖 : ハ 刀 金
鈗 : 儿 厶 金
鈘 : 十 又 支 金
鈜 : 一 ノ 厶 金
鈝 : 牛 金
鈞 : 金 冫 勹
鈣 : 一 亅 止 金
鈤 : 日 曰 金
鈥 : 火 金
鈦 : 丶 大 金
鈨 : 二 儿 元 金
鈩 : 金 戸 一 尸
鈬 : 金 尸
鈮 : 匕 尸 金
鈯 : ｜ 凵 金
鈰 : ｜ 亠 冂 巾 金
鈳 : 一 亅 口 金
鈴 : 金 𠆢 卩 一
鈵 : 一 人 冂 金
鈶 : 厶 口 金
鈷 : 金 口 十
鈸 : 又 弋 金
鈹 : ノ 十 又 支 金
鈺 : 丶 王 金
鈼 : 一 ｜ ノ 金
鈾 : ｜ 日 田 金
鈿 : 金 田
鉀 : ｜ 日 田 金
鉂 : 丶 ノ 口 金
鉃 : 一 ノ 大 矢 金
鉄 : ノ 金 二 矢 大
鉅 : 金 巨
鉆 : 卜 口 金
鉇 : 一 ｜ ノ 乙 匕 也 金
鉈 : 金 匕 宀
鉉 : 金 玄 亠 幺
鉊 : 刀 口 金
鉋 : 金 勹 已
鉍 : ノ 心 金
鉎 : 生 金
鉏 : 一 目 金
鉐 : 金 口 石
鉑 : 日 白 金
鉖 : 冫 夂 金
鉗 : 甘 金
鉘 : 廾 弓 金
鉙 : ハ 口 金
鉚 : ノ 金 卩
鉛 : 金 口 并 ハ
鉜 : ⺅ 寸 金
鉝 : 立 金
鉞 : ｜ 金 戈
鉠 : 口 大 金
鉡 : ｜ 二 ハ 并 金
鉢 : 一 金 木
鉤 : 金 口 勹
鉥 : 丶 ノ 乙 十 木 金
鉦 : 一 金 止
鉧 : 毋 母 金
鉨 : 勹 小 金
鉩 : 𠆢 小 金
鉮 : ｜ 日 田 金
鉯 : 丶 人 金
鉰 : 一 亅 口 金
鉱 : 金 厶 广
鉵 : 虫 金
鉶 : 一 刂 廾 金
鉷 : ｜ 二 ハ 金
鉸 : 亠 父 金
鉹 : 夕 金
鉻 : 口 夂 金
鉼 : 一 并 廾 金
鉽 : 工 弋 金
鉾 : 牛 金 厶
鉿 : 一 𠆢 口 金
銀 : 金 艮
銃 : 金 亠 儿 厶
銅 : 金 口 冂 一
銈 : 土 金
銉 : ｜ 二 ヨ 聿 金
銊 : 一 ノ 厂 戈 金
銍 : 一 厶 土 至 金
銎 : 丶 几 工 金
銑 : ノ 金 土 儿
銒 : 一 十 干 金
銓 : 王 金 𠆢
銕 : 弓 金 人 大
銖 : ｜ ノ 牛 金 二 并 木 ハ
銗 : 一 ノ 厂 口 金
銘 : 金 口 夕
銙 : 一 勹 大 金
銚 : 金 儿 冫
銛 : 金 口 舌
銜 : 金 行 彳
銟 : ｜ 冂 山 巾 金
銠 : ノ 匕 土 ⺹ 金
銤 : 米 金
銥 : 亠 衣 金
銧 : 一 儿 ⺌ 金
銨 : 女 宀 金
銫 : 乙 勹 已 巴 色 金
銭 : ノ 金 毛 丶
銯 : 小 幺 糸 金
銲 : 一 十 干 日 金
銶 : 一 丶 水 金
銷 : 金 月 ⺌
銸 : 乙 耳 金
銹 : ノ 禾 金 乃
銺 : 士 爿 金
銻 : ｜ ノ 并 弓 金
銼 : 人 土 金
銽 : 口 氏 金
銿 : マ 用 金
鋀 : 并 口 豆 金
鋁 : 口 金
鋂 : 一 ノ 毋 母 金
鋃 : 丶 艮 金
鋅 : 十 立 辛 金
鋆 : 二 冫 勹 土 金
鋇 : ハ 目 貝 金
鋈 : ノ 大 氵 金
鋋 : ノ 廴 止 金
鋌 : ノ 土 士 廴 王 金
鋍 : 冖 十 子 金
鋎 : 二 儿 宀 元 金
鋏 : 金 人 大 𠆢
鋐 : 一 ノ 厶 宀 金
鋒 : ｜ 一 金 夂
鋓 : ノ 刂 木 禾 金
鋕 : 士 心 金
鋗 : 口 月 金
鋘 : 一 口 大 金
鋙 : 一 二 口 五 金
鋜 : 口 足 金
鋝 : 寸 爪 金
鋟 : 冖 又 ヨ 金
鋠 : 亠 厂 衣 辰 金
鋡 : 丶 𠆢 口 金
鋣 : ⻏ 牙 金
鋤 : 金 目 力
鋥 : 口 王 金
鋧 : 儿 目 見 金
鋨 : 戈 手 金
鋩 : 亡 金 ⺾
鋪 : 金 十 用 丶
鋬 : 厂 又 扌 金
鋭 : 金 口 并 𠆢 儿
鋮 : ノ 亅 厂 戈 金
鋰 : 里 金
鋲 : 斤 金 并 ハ
鋳 : ノ 亠 土 金 寸
鋷 : 又 耳 金
鋸 : 金 口 十 尸
鋹 : 金 長
鋺 : 金 夕 卩 宀
鋻 : 匚 又 臣 金
鋼 : 金 并 冂 山 岡
鋿 : 冂 口 ⺌ 金
錀 : 一 ｜ 亅 𠆢 冂 廾 冊 金
錂 : 儿 ハ 土 夂 金
錄 : ヨ 彑 水 金
錆 : 金 月 青 土 二 亠
錈 : 一 丶 ノ 二 并 大 已 金
錍 : ノ 十 日 白 金
錏 : ｜ 一 金 二
錐 : 金 隹
錑 : 一 丶 大 尸 戸 犬 金
錔 : 日 水 金
錕 : 匕 日 比 金
錘 : ｜ ノ 一 金
錙 : 金 巛 田
錚 : ヨ 金 爪 亅
錜 : 丶 𠆢 心 金
錝 : 二 宀 小 示 金
錞 : 亠 口 子 金
錟 : 火 金
錠 : 金 疋 宀
錡 : 一 亅 口 大 金
錢 : 金 戈
錣 : 金 又
錤 : ｜ 二 ハ 甘 金
錥 : 亠 厶 月 金
錦 : 巾 金 白
錧 : ｜ 口 宀 金
錨 : 金 田 ⺾
錩 : 日 金
錪 : ｜ ハ 日 金
錫 : 金 日 勿
錬 : ｜ 一 金 日 木 田 并 ハ
錮 : 金 口 十 囗
錯 : ｜ 金 日
録 : ヨ 金 水 隶
錳 : 子 皿 金
錴 : ハ 土 金
錵 : ⺅ 金 𠆢 匕 ⺾
錶 : 一 ｜ 二 衣 金
錷 : 乙 車 金
錺 : 金 方 ⺾
錻 : 金 止 戈
鍄 : 金 口 小 亠
鍇 : 匕 日 比 白 金
鍈 : 口 大 ⺾ 金
鍉 : 日 疋 金
鍊 : 并 口 木 金
鍋 : 金 口 冂
鍍 : 金 又 广
鍐 : 丶 ノ ハ 凵 夂 金
鍑 : 一 ノ 夂 日 金
鍒 : マ 木 矛 金
鍔 : 金 口 二 勹
鍕 : 冖 車 金
鍖 : 甘 金 儿 匚
鍗 : ｜ 亠 并 冂 冖 巾 立 金
鍘 : ハ 刂 目 貝 金
鍚 : 一 ノ 勹 日 勿 金
鍛 : 金 殳 几 又
鍜 : ｜ 金 又
鍞 : ハ 卜 目 貝 金
鍠 : 王 金 白
鍤 : ノ 十 臼 金
鍥 : 一 ｜ 二 刀 大 金
鍧 : 勹 言 金
鍩 : 一 ノ 口 ⺾ 金
鍪 : マ 攵 矛 金
鍫 : ノ 木 火 禾 金
鍬 : 火 禾 金
鍭 : 一 ノ ⺅ ユ 大 矢 金
鍮 : 刂 金 月 𠆢
鍯 : 丶 ノ 勹 心 勿 金
鍰 : ノ 二 又 爪 金
鍱 : 一 ｜ 木 世 金
鍳 : 一 丶 ノ 匚 臣 金
鍴 : 山 而 金
鍵 : 金 廴 聿
鍶 : 心 田 金
鍺 : ノ 土 ⺹ 日 曰 金
鍼 : ノ 金 口 戈
鍽 : 一 ｜ 丶 亅 冂 尸 廾 戸 冊 金
鍾 : ｜ 金 日 里
鍿 : 一 巛 田 金
鎀 : ｜ ⺅ 夂 彡 金
鎁 : ⻏ 耳 金
鎂 : 并 大 王 金
鎈 : ノ 并 工 王 羊 金
鎊 : 亠 并 冖 方 立 金
鎋 : 一 ｜ ノ 二 口 宀 金
鎌 : 金 王 丶 ノ ヨ 并 ハ
鎍 : 冖 十 小 幺 糸 金
鎏 : ｜ ノ 乙 亠 厶 川 氵 金
鎒 : 亠 厂 寸 衣 辰 金
鎔 : 金 穴 口 谷 并 𠆢 宀 ハ
鎕 : ｜ 口 广 ヨ 金
鎖 : 貝 目 ハ 金 ⺌
鎗 : ノ 金 口 𠆢
鎘 : 儿 冂 口 金 鬲
鎚 : ｜ 金 口 辶
鎛 : 丶 十 寸 日 金
鎞 : 丶 ノ 匕 口 比 金
鎡 : 一 并 幺 金
鎣 : 冖 火 金
鎤 : 一 儿 ⺌ 日 金
鎦 : ノ 刀 厶 田 金
鎧 : 金 口 山 豆 并
鎨 : 十 金 隹
鎩 : 一 几 又 小 殳 金
鎫 : 丶 ノ ハ 冂 夂 金
鎬 : 金 口 高 亠 冂
鎭 : 金 并 目 匕 一 ｜ ハ
鎮 : 金 十 并 目 一 ハ
鎰 : 金 皿 并 ハ
鎴 : 心 目 自 金
鎵 : 宀 豕 金
鎶 : 一 亅 口 金
鎹 : 金 辶 人 大 二 ハ
鎺 : 一 礻 目 金
鏁 : 巛 日 木 田 金
鏃 : 金 方 矢
鏄 : 一 十 厶 寸 日 虫 金
鏅 : ｜ ⺅ 夂 月 金
鏆 : ハ 十 口 田 目 貝 金
鏇 : 一 ノ 方 疋 金
鏈 : 金 辶 車
鏉 : 人 勹 口 木 欠 金
鏊 : 一 ｜ ノ 亅 二 土 士 攵 方 金
鏋 : 一 ｜ 入 冂 凵 金
鏌 : 大 ⺾ 日 金
鏍 : 小 幺 田 糸 金
鏐 : 羽 金 𠆢 冫 彡
鏑 : 金 口 十 并 立 亠 冂 滴
鏓 : ノ 口 夂 心 金
鏖 : 金 鹿 比 广
鏗 : 金 臣 土 又
鏘 : 金 寸 夕 爿
鏙 : 山 金 隹
鏜 : 冖 口 土 ⺌ 金
鏝 : 金 日 罒 又
鏞 : ｜ 二 冂 广 ヨ 月 聿 金
鏟 : 亠 并 厂 生 立 金
鏡 : 音 金 日 立 儿
鏢 : 二 小 示 西 金
鏤 : ｜ 一 金 口 女
鏥 : ⺅ 金 白 𠆢 宀
鏦 : 人 彳 止 金
鏧 : ｜ 几 又 士 尸 殳 金
鏨 : 斤 金 車
鏱 : 十 日 立 金
鏵 : 一 ｜ 二 ⺾ 金
鏷 : 一 ｜ 丶 ノ 二 人 并 大 王 金
鏸 : 一 十 厶 心 日 虫 金
鏹 : 厶 口 弓 虫 金
鏺 : 丶 ノ 几 又 弓 殳 金
鏻 : 夕 米 舛 金
鏽 : ｜ ヨ 爿 片 金
鐁 : ｜ 二 ハ 斤 甘 金
鐂 : 一 ｜ 田 金
鐃 : 金 土 儿
鐄 : ハ 田 金 黄
鐇 : 金 田 釆 米
鐈 : ノ 冂 口 大 金
鐉 : ｜ 二 ハ 已 金
鐍 : 儿 ハ 冂 マ 口 矛 金
鐎 : 灬 金 隹
鐏 : ハ 并 寸 酉 金
鐐 : 金 小 大 日 并 亠 ハ
鐓 : 金 子 亠 囗 攵
鐔 : 金 十 西 日 曰
鐕 : 无 日 曰 金
鐖 : 人 幺 戈 金
鐗 : 月 金 門
鐘 : 金 里 立
鐙 : 金 口 豆 并 癶
鐚 : 金 心 二
鐟 : 一 大 日 曰 金
鐡 : 金 口 土 豆 并 戈
鐫 : 金 隹
鐮 : 一 ｜ 丶 ノ 并 广 ヨ 金
鐯 : ノ 土 ⺾ ⺹ 日 曰 金
鐱 : 一 人 𠆢 口 金
鐲 : 勹 罒 虫 金
鐳 : 二 冖 田 金 雨
鐴 : 十 口 尸 立 辛 金
鐵 : 王 金 口 土 戈
鐶 : 衣 金 口 罒
鐸 : 金 十 辛 罒 立 亠
鐺 : 金 口 ⺌ 田 冖
鐻 : 匕 卜 厂 虍 豕 金
鐽 : 并 辶 土 王 羊 金
鐿 : 心 日 立 金 音
鑁 : 金 儿 凵 夂
鑃 : 冫 羽 金 隹
鑄 : 金 口 工 士 寸
鑅 : 冖 木 火 金
鑈 : 一 ｜ ハ 冂 爻 金
鑊 : 又 ⺾ 金 隹
鑌 : 一 ノ ハ 宀 小 目 貝 金
鑑 : 金 皿 臣 二
鑒 : 金 臣 二 罒
鑓 : ｜ 一 金 口 辶
鑕 : ハ 斤 目 貝 金
鑙 : 丶 ノ 匕 尢 日 曰 木 尤 禾 金
鑚 : 貝 目 ハ 金 人 大 二 儿
鑛 : 黄 金 田 ハ 广
鑜 : ハ 冖 口 ⺌ 目 貝 金
鑞 : 臼 金 巛 鼠 囗
鑟 : ハ 士 目 罒 貝 金
鑠 : 金 白 木 冫
鑡 : 一 人 凵 止 金
鑢 : 金 心 田 卜 匕 厂 虍
鑣 : 匕 广 比 灬 金 鹿
鑨 : 一 乙 月 立 金 竜
鑪 : 金 皿 田 卜 匕 厂 虍
鑫 : 金
鑭 : 并 口 木 金 門
鑮 : 丶 二 冂 十 寸 氵 ⺾ 金
鑯 : 一 人 戈 金 非
鑰 : ｜ 一 金 口 𠆢 冂 冊 龠
鑱 : 乙 勹 匕 口 已 比 巴 色 金
鑲 : 一 ｜ 亠 口 衣 金
鑵 : 金 口 十 ⺾ 隹
鑷 : 金 耳
鑼 : 金 糸 幺 小 罒 隹
鑽 : ノ 貝 目 ハ 金 土 儿
鑾 : 金 言 糸 幺 小
鑿 : 臼 干 金 并 殳 几 又
钁 : 金 又 目 隹
钃 : ｜ 丶 ノ 冫 勹 尸 罒 虫 金
钄 : 并 口 ⺾ 木 金 門
長 : 長
镸 : 一 ｜ 厶
镹 : 一 ｜ ノ 入 厶 久
镾 : 一 ｜ ハ 冂 厶 爻
門 : 門
閂 : 一 門
閃 : 人 門
閄 : 人 門
閆 : 一 二 門
閇 : 卜 門
閈 : 一 十 干 門
閉 : ノ 一 門 亅
閊 : 山 門
開 : 一 門 廾
閌 : 亠 几 門
閍 : 方 門
閎 : 一 ノ 厶 門
閏 : 王 門
閑 : 木 門
間 : 日 門
閔 : 文 門
閖 : 水 門
閘 : ｜ 日 門 田
閙 : 巾 門 亠
閝 : 丶 𠆢 マ 門
閞 : 厶 廾 門
閟 : ノ 心 門
閠 : 王 門 丶
閡 : ノ 亠 幺 玄 門
関 : 人 大 二 ハ 門 并
閣 : 口 門 夂
閤 : 口 門 𠆢
閥 : ⺅ 門 戈
閦 : 人 𠆢 門
閧 : ｜ 一 二 ハ 門
閨 : 土 門
閩 : 虫 門
閫 : 口 木 門
閬 : 丶 艮 門
閭 : 口 門
閲 : 口 并 門 儿
閴 : ハ 目 貝 門
閶 : 日 門
閹 : 乙 大 日 門 奄
閺 : 文 日 門
閻 : 臼 門 勹
閼 : 方 門 𠆢 冫
閽 : 日 氏 門
閾 : 口 門 戈
閿 : 冖 又 爪 門
闃 : 犬 目 門
闆 : 口 門
闇 : 音 日 門 立
闈 : 口 門 韋
闉 : 土 西 門
闊 : 口 氵 舌 門
闋 : 一 丶 ノ 大 門
闌 : ｜ 日 ハ 木 門
闍 : 日 門 ⺹
闐 : 一 ハ 匕 十 目 貝 門
闑 : 木 目 自 門
闒 : ノ 二 冂 冫 日 羽 門
闓 : 并 口 山 豆 門
闔 : 皿 土 門 厶
闕 : 欠 并 門 屮
闖 : 馬 門
闘 : 口 寸 豆 并 門
闙 : 丶 口 尸 攵 門
闚 : 一 儿 大 目 見 門
關 : 門 幺
闝 : ハ 攵 目 貝 門
闞 : 一 攵 耳 門
闟 : 一 𠆢 冫 口 羽 門
闠 : 一 ｜ ハ 口 目 虫 貝 門
闡 : 口 十 田 門
闢 : 口 十 辛 門 立 尸
闤 : 一 口 罒 衣 門
闥 : 王 辶 十 辛 土 門 羊 立 亠
闦 : ｜ 并 口 日 豆 門
阜 : ⻖ 十
阝 : ⻖
阞 : 力 ⻖
阡 : ノ 十 ⻖
阢 : 一 儿 廾 ⻖
阤 : ｜ 乙 匕 ⻖ 也
阥 : ⻖ 水
阦 : ⻖ 火
阨 : 卩 厂 ⻖
阪 : 又 厂 ⻖
阬 : 亠 几 ⻖
阮 : 二 儿 ⻖ 元
阯 : 止 ⻖
阱 : 一 廾 ⻖
防 : 方 ⻖
阳 : ⻖ 日
阴 : ⻖ 月
阷 : 一 ⻖ 止
阸 : 一 丶 乙 尸 ⻖ 戸
阹 : 厶 土 ⻖
阺 : 丶 ⻖ 氏
阻 : 一 目 ⻖
阼 : 一 ｜ ノ ⻖
阽 : 卜 口 ⻖
阿 : 一 口 亅 ⻖
陀 : 匕 宀 ⻖
陁 : 一 ｜ ノ 乙 匕 ⻖ 也
陂 : 皮 又 ⻖
附 : ⺅ 寸 ⻖
陋 : 人 冂 ⻖
陌 : 白 ⻖
降 : 夂 ⻖ 十
陏 : ノ 一 月 ⻖
限 : 艮 ⻖
陒 : 勹 厂 已 ⻖
陔 : ノ 亠 幺 ⻖ 玄
陖 : ハ 厶 夂 ⻖
陗 : ⺌ ⻖ 月
陘 : 一 巛 工 ⻖
陛 : 土 比 ⻖
陜 : 人 大 ⻖
陝 : 人 大 入 ⻖
陞 : 土 廾 ⻖ ノ
陟 : ノ 止 小 ⻖
陡 : 土 ⻖ 走
院 : 二 儿 宀 ⻖ 元
陣 : 車 ⻖
除 : 禾 𠆢 ⻖
陥 : ｜ 日 勹 ⻖
陦 : ノ 寸 二 ⻖ 土
陪 : 口 立 ⻖
陬 : 耳 又 ⻖
陮 : ⻖ 隹
陰 : 二 𠆢 厶 ⻖
陲 : ｜ ノ 一 ⻖
陳 : ｜ 一 田 日 木 ⻖
陴 : ノ 十 ⻖ 日 田
陵 : 土 儿 夂 ⻖
陶 : 缶 勹 ⻖
陷 : 臼 ⻖ 勹
陸 : 土 儿 ⻖
険 : 口 人 𠆢 ⻖
陻 : 土 ⻖ 西
陼 : ノ 土 ⻖ ⺹ 日 曰
陽 : 一 日 勿 ⻖
陾 : 大 ⻖ 而
陿 : 人 匚 ⻖ 木
隁 : 匚 女 ⻖ 日
隂 : 一 ｜ 𠆢 厶 ⻖
隃 : 一 丶 𠆢 冂 刂 ⻖ 月
隄 : ⻖ 日 疋
隅 : 田 日 冂 厶 禸 ⻖
隆 : 生 夂 ⻖
隈 : 衣 田 ⻖
隉 : 土 工 ⻖ 臼
隊 : 并 豕 ⻖
隋 : ノ 一 月 工 ⻖
隍 : 王 白 ⻖
階 : 白 比 ⻖
随 : ノ 一 月 辶 ⻖
隑 : 并 口 山 ⻖ 豆
隔 : 一 口 儿 冂 ⻖ 鬲
隕 : 貝 目 ハ 口 ⻖
隖 : ⻖ 灬 鳥
隗 : 鬼 田 儿 匕 ⻖
隘 : 皿 并 ⻖
隙 : 小 日 ⻖
隚 : 冖 口 土 ⺌ ⻖
際 : ノ 示 二 小 癶 ⻖
障 : 音 十 日 立 ⻖
隝 : ⻖ 灬 鳥
隟 : 巛 ⻖ 日 木 田
隠 : ノ ヨ ⺌ 心 ⻖
隣 : 舛 米 夕 ⻖
隤 : 一 ｜ ハ 口 ⻖ 目 虫 貝
隥 : 丶 ノ 并 口 ⻖ 豆
隦 : 十 口 尸 ⻖ 立 辛
隧 : 辶 并 豕 ⻖
隨 : ノ 一 月 工 ⻖ 辶
隩 : ノ 冂 大 ⻖ 米
險 : 口 人 𠆢 ⻖
隮 : 亠 刀 ⻖ 氏 齊
隯 : 一 口 士 寸 工 ⻖
隰 : 日 幺 灬 ⻖
隱 : ヨ 工 心 爪 ⻖
隲 : ノ 小 馬 ⻖
隳 : 一 ノ 𠆢 工 ⻖ 月 灬
隴 : 月 立 ⻖
隶 : ヨ 水 隶
隷 : ヨ 士 小 水 二 隶 示 二 小
隸 : ヨ 示 二 小 水 木 亅 隶
隹 : 隹
隺 : 冖 隹
隻 : 又 隹
隼 : 十 隹
隽 : 乃 隹
雀 : ノ 小 隹
雁 : ⺅ 厂 隹
雄 : ノ 一 厶 隹
雅 : 牙 隹
集 : 木 隹
雇 : 戸 隹 一 尸
雉 : 矢 隹
雊 : 勹 口 隹
雋 : 亅 冂 凵 隹
雌 : 止 匕 隹
雍 : 亠 幺 隹
雎 : 目 隹
雑 : 木 隹 九
雒 : 口 夂 隹
雕 : 口 士 冂 隹
雖 : 口 虫 隹
雘 : 一 ｜ 丶 冂 又 ⺾ 隹
雙 : 又 隹
雚 : 口 ⺾ 隹
雛 : 勹 屮 隹
雜 : 人 木 亠 隹
雝 : 乙 口 巛 已 巴 隹
雞 : 大 幺 爪 隹
雟 : ハ 冂 口 屮 隹
離 : 亠 凵 禸 隹
難 : ⺾ 隹 大 口 亠
雨 : 雨
雩 : 二 冖 勹 雨
雪 : ヨ 雨
雫 : 雨 丶 一 ｜
雯 : 二 冖 文 雨
雰 : 雨 刀 ハ
雱 : 二 冖 方 雨
雲 : 一 雨 二 厶
零 : 雨 𠆢 卩 一
雷 : 雨 田
雹 : 雨 勹 已
雺 : 二 冖 マ 矛 雨
電 : 雨 田 乙
需 : 雨 而
霂 : 二 冖 氵 木 雨
霃 : ノ 乙 二 冖 尢 氵 雨
霄 : 雨 月 ⺌
霅 : 二 冖 言 雨
霆 : 雨 王 廴
震 : 衣 雨 辰 厂
霈 : 雨 巾 氵 亠
霉 : 一 ノ 二 冖 毋 母 雨
霊 : ｜ 一 雨 二
霍 : 雨 隹
霎 : 雨 女 立
霏 : 雨 非
霑 : 雨 口 氵 卜
霓 : 雨 臼 儿
霔 : 亠 土 氵 雨
霖 : 雨 木
霙 : 雨 大 冂 ⺾
霚 : 二 冖 マ 攵 矛 雨
霛 : 二 冖 弓 雨
霜 : 雨 木 目
霝 : 二 冖 口 雨
霞 : 雨 又
霡 : 丶 二 冖 月 水 雨
霢 : 二 冖 厂 月 氏 雨
霣 : 二 ハ 冖 口 目 貝 雨
霤 : 雨 田 刀 厶
霧 : 雨 矛 力 夂
霨 : 二 冖 寸 小 尸 示 雨
霪 : 雨 王 氵 爪
霰 : ｜ 一 雨 月 二 攵
霱 : 二 儿 ハ 冂 冖 マ 口 矛 雨
露 : 雨 口 足 夂
霳 : 一 二 冖 夂 ⻖ 生 雨
霶 : 亠 并 冖 氵 方 立 雨
霸 : 雨 革 月
霹 : 雨 口 十 辛 立 尸
霻 : ｜ 并 口 日 豆 雨
霽 : 雨 亠 齊 刀 氏 廾
霾 : 雨 里 豸
靁 : 二 冖 田 雨
靂 : 雨 止 木 厂
靃 : 二 冖 隹 雨
靄 : 雨 言 日 勹 匕
靆 : ヨ 雨 辶 水 二 厶 隶
靇 : 乙 日 月 立 雨 音
靈 : 雨 口 工 人
靉 : 雨 心 爪 二 冖 厶 夂
靊 : 一 ｜ 二 并 冖 口 山 豆 雨
靍 : 灬 隹 雨 鳥
靎 : 二 冖 灬 金 雨 鳥
靏 : 二 冖 灬 隹 雨 鳥
青 : 月 青 土 二 亠
靕 : 一 ｜ 二 亠 冂 土 月 止 青
靖 : 月 青 土 二 立 亠
靗 : 一 二 亠 儿 土 ⺌ 月 青
靘 : 二 亠 土 月 青
静 : 月 青 土 亅 亠 勹 ヨ
靚 : 二 亠 儿 土 月 目 見 青
靛 : 二 亠 土 宀 月 疋 青
靜 : ノ ヨ 月 ⺌ 青 爪 土 二 亅 亠
非 : 非
靠 : ノ 口 土 非
靡 : 非 麻 木 广
面 : 面
靣 : 一 ノ 口 囗
靤 : 面 勹 已
靦 : 見 面
靧 : 一 ｜ ハ 口 目 虫 貝 面
靨 : 犬 日 面 目 厂
革 : 革 廾 口 十
靪 : 一 亅 十 口 廾 革
靫 : 革 又 丶
靭 : 革 刀 丶
靮 : 一 丶 勹 十 口 廾 革
靱 : 革 刀
靳 : 十 口 廾 斤 革
靴 : ⺅ 革 匕
靶 : 乙 十 口 已 廾 巴 革
靷 : ｜ 十 口 廾 弓 革
靸 : 丶 十 乃 口 廾 及 革
靹 : 革 人 冂
靺 : ｜ 革 口 ハ 木 亠 凵
靻 : 一 十 口 廾 目 革
靼 : 革 日
靽 : ｜ 二 ハ 并 十 口 廾 革
靿 : 力 十 口 幺 廾 革
鞀 : 刀 十 口 廾 革
鞁 : 革 皮 又
鞄 : 革 勹 已
鞅 : 革 口 人 大 冂 凵
鞆 : 革 人 冂
鞉 : 丶 ノ 儿 冫 十 口 廾 革
鞋 : 革 土
鞍 : 女 宀 革
鞏 : 革 工 丶 几
鞐 : 革 卜
鞕 : 一 丶 ノ 十 口 廾 日 革
鞖 : 十 口 女 廾 爪 革
鞗 : ｜ ⺅ 十 口 夂 廾 革
鞘 : 革 月 ⺌
鞙 : 十 口 廾 月 革
鞚 : 儿 ハ 十 口 宀 工 廾 革
鞜 : 革 水 日
鞞 : ノ 十 口 廾 田 革
鞟 : 亠 十 口 子 廾 革
鞠 : 革 米 勹
鞢 : 一 ｜ 十 口 廾 木 世 革
鞣 : ｜ 革 口 矛 木 凵 マ
鞦 : 火 禾 革
鞨 : 革 日 勹 匕
鞫 : 革 言 勹
鞬 : ｜ 二 十 口 廴 廾 ヨ 聿 革
鞭 : ノ 一 ⺅ 革 日 田
鞮 : 十 口 廾 日 疋 革
鞱 : 十 口 廾 爪 臼 革
鞲 : 一 ｜ 二 冂 十 口 廾 月 革
鞳 : 革 口 𠆢 ⺾
鞴 : 革 用 厂 ⺾
鞵 : 十 口 大 幺 廾 爪 革
鞶 : 一 ｜ 丶 冂 几 十 又 口 廾 殳 舟 革
鞸 : 一 ｜ 二 十 口 廾 日 田 革
鞹 : 亠 十 口 子 廾 ⻏ 革
鞺 : 冖 十 口 土 ⺌ 廾 革
鞼 : 一 ｜ ハ 十 口 廾 目 虫 貝 革
鞾 : 一 ｜ 二 十 口 廾 ⺾ 革
鞿 : 人 十 口 幺 廾 戈 革
韁 : 一 十 口 廾 田 革
韃 : 王 革 辶 土 并 羊
韄 : 十 又 口 廾 ⺾ 隹 革
韅 : 十 口 幺 廾 日 曰 灬 革
韆 : 革 辶 西 ハ 已
韇 : ハ 十 口 士 廾 目 罒 貝 革
韈 : ノ 革 罒 戈 ⺾
韉 : 一 ｜ 勹 十 口 广 廾 ⺾ 灬 革
韊 : 并 十 口 廾 ⺾ 木 門 革
韋 : 韋 口
韌 : ノ 刀 口 韋
韍 : 又 口 弋 韋
韎 : 一 口 木 韋
韐 : 一 𠆢 口 韋
韑 : 一 儿 口 ⺌ 韋
韓 : 十 日 韋 口
韔 : 口 長 韋
韗 : 冖 口 車 韋
韘 : 一 ｜ 口 木 世 韋
韙 : 口 日 疋 韋
韛 : ｜ ノ 二 厂 口 ⺾ 用 韋
韜 : 臼 爪 韋 口
韝 : 一 ｜ 二 冂 口 月 韋
韞 : 人 口 日 皿 韋
韠 : 一 ｜ 二 口 日 田 韋
韡 : 一 ｜ 二 口 ⺾ 韋
韤 : 人 口 ⺾ 戈 罒 韋
韭 : 韭
韮 : 韭 ⺾
韯 : 一 十 土 戈 非
韱 : 一 人 戈 非
韲 : 亠 齊 韭 刀 氏 廾
音 : 音 日 立
韴 : 一 ｜ 冂 巾 日 立 音
韵 : 音 日 立 冫 勹
韶 : 音 口 刀 日 立
韷 : ｜ 凵 日 立 音
韸 : 一 ｜ 二 夂 日 立 音
韺 : 口 大 ⺾ 日 立 音
韻 : 音 貝 目 ハ 口 日 立
響 : 音 艮 日 ⻏ 立 幺
頁 : 貝 目 ハ 頁
頂 : 一 貝 目 ハ 頁 亅
頃 : 貝 目 ハ 頁 匕
頄 : ハ 九 目 貝 頁
項 : 貝 目 ハ 工 頁
順 : 貝 目 ハ 川 頁
頇 : 一 ハ 十 干 目 貝 頁
須 : 貝 目 ハ 頁 彡
頊 : ハ 王 目 貝 頁
頌 : 貝 目 ハ 頁 厶
頍 : ハ 十 又 支 目 貝 頁
頎 : ハ 斤 目 貝 頁
頏 : 貝 目 ハ 頁 亠 儿
預 : 貝 目 ハ 欠 マ 一 亅 頁
頑 : 貝 目 ハ 頁 儿 二 元
頒 : 貝 目 刀 ハ 頁
頓 : 貝 目 ハ 頁 屯
頔 : ｜ ハ 日 田 目 貝 頁
頖 : ｜ ノ 二 ハ 并 目 貝 頁
頗 : 貝 目 ハ 皮 頁 又
領 : 貝 目 ハ 頁 𠆢 卩
頙 : 一 ハ 止 目 貝 頁
頚 : 貝 目 ハ 土 頁 又
頜 : 一 𠆢 ハ 口 目 貝 頁
頞 : ハ 女 宀 目 貝 頁
頠 : ハ 勹 卩 厂 目 貝 頁
頡 : 貝 目 ハ 口 士 頁
頣 : ハ 匚 目 臣 貝 頁
頤 : 貝 目 ハ 臣 頁 匚
頥 : ｜ ハ 匚 目 臣 貝 頁
頦 : ノ 亠 ハ 幺 玄 目 貝 頁
頫 : 丶 ノ 儿 ハ 冫 目 貝 頁
頬 : 貝 目 ハ 人 頁 二 并
頭 : 貝 目 ハ 口 豆 并 頁
頮 : ハ 廾 水 目 貝 頁
頯 : 丶 ハ 夕 廾 目 貝 頁
頰 : 人 ハ 木 目 貝 頁
頲 : ノ ハ 士 廴 王 目 貝 頁
頳 : ハ 土 目 貝 赤 頁
頴 : 貝 目 ハ 示 二 小 頁 匕
頵 : ノ ハ 口 ヨ 目 貝 頁
頷 : 貝 目 ハ 口 頁 𠆢
頸 : 貝 目 ハ 工 巛 頁
頻 : ノ 貝 目 ハ 止 小 頁
頼 : ｜ 貝 目 口 ハ 頁 木
頽 : 禾 貝 目 ハ 頁 几
頾 : ハ 匕 彡 止 目 貝 頁
顄 : ハ 凵 水 目 貝 頁
顆 : ｜ 貝 目 ハ 田 日 頁 木
顇 : 亠 人 ハ 十 目 貝 頁
顊 : ｜ ノ ハ 十 口 目 貝 頁
顋 : 貝 目 ハ 心 田 頁
題 : 貝 目 ハ 日 疋 頁
額 : 貝 目 ハ 口 頁 夂 宀
顎 : 貝 目 ハ 口 頁 二 勹
顏 : 貝 目 ハ 文 頁 厂 彡
顑 : 一 ノ ハ 厂 口 戈 目 貝 頁
顒 : ｜ ハ 冂 厶 日 田 目 禸 貝 頁
顓 : ハ 山 目 而 貝 頁
顔 : 貝 目 ハ 頁 立 亠 厂 彡
顕 : 貝 目 ハ 日 頁
顖 : 丶 ノ ハ 口 心 目 貝 頁
顗 : ハ 并 口 山 目 豆 貝 頁
願 : 貝 目 ハ 小 白 頁 厂
顙 : ハ 又 木 目 貝 頁
顚 : ハ 匕 目 貝 頁
顛 : 貝 十 ハ 頁 目
類 : 貝 目 ハ 大 米 頁
顢 : 一 ｜ 入 ハ 冂 凵 目 貝 頁
顣 : 一 ノ ハ 卜 厂 小 戈 目 貝 頁
顥 : 亠 ハ 口 小 日 目 貝 頁
顦 : ハ 灬 目 貝 隹 頁
顧 : 貝 目 ハ 戸 頁 隹 一 尸
顪 : 一 ノ ハ 厂 小 戈 止 目 貝 頁
顫 : 貝 目 ハ 口 日 頁 亠 囗
顬 : 二 ハ 冖 目 而 貝 雨 頁
顯 : 貝 目 ハ 日 頁 幺 灬
顰 : ノ 貝 目 ハ 止 十 小 田 頁
顱 : 貝 目 ハ 皿 田 頁 卜 匕 厂 虍
顳 : 貝 目 ハ 耳 頁
顴 : 貝 目 ハ 口 十 頁 ⺾ 隹
風 : 風 冂 虫 ノ
颪 : 風 卜
颫 : 一 ノ 冂 大 虫 風
颭 : ノ 冂 卜 口 虫 風
颮 : ノ 冂 勹 已 虫 風
颯 : 風 立
颰 : 丶 ノ 冂 又 弋 虫 風
颱 : 口 風 厶
颴 : 一 ノ 冂 疋 虫 風
颶 : ハ 風 目
颷 : ノ 冂 火 虫 風
颸 : ノ 冂 心 田 虫 風
颺 : 一 ノ 冂 勹 日 勿 虫 風
颻 : 丶 ノ 冂 凵 夕 山 爪 缶 虫 風
颼 : ｜ ノ 冂 又 臼 虫 風
颿 : ノ 冂 虫 風 馬
飂 : ノ 𠆢 冂 冫 彡 羽 虫 風
飃 : 示 二 小 西 風
飄 : 示 二 小 西 風
飅 : 一 ｜ ノ 冂 口 田 虫 風
飆 : 犬 風
飇 : 丶 ノ 冂 大 犬 虫 風
飈 : ノ 冂 火 虫 風
飋 : ノ 冂 心 王 虫 風
飌 : ノ 冂 口 ⺾ 虫 隹 風
飛 : 飛
飜 : 田 釆 飛 米
食 : 食
飠 : 食
飡 : 一 丶 𠆢 冫 艮
飢 : 食 几
飣 : 一 丶 亅 𠆢 厶 日
飥 : 一 丶 ノ 乙 𠆢 厶 日
飦 : 一 丶 𠆢 十 厶 干 日 曰
飧 : 一 丶 𠆢 夕 艮
飩 : 食 屯
飪 : 一 丶 ノ 𠆢 卜 士 日
飫 : ノ 食 大
飭 : 食 力
飮 : ｜ 欠 𠆢 食
飯 : 食 又 厂
飰 : 一 ｜ 亠 卜 食
飱 : 一 歹 食
飲 : 欠 食
飳 : 一 丶 亠 𠆢 厶 土 日 王
飴 : 口 食 厶
飶 : 丶 ノ 𠆢 厶 心 日 曰
飼 : 口 艮 亅 𠆢 食
飽 : 食 勹 已
飾 : ノ 巾 食
餂 : 一 丶 𠆢 厶 口 日 舌
餃 : 食 父 亠
餅 : ｜ ノ 一 食 二 并 廾
餇 : 一 丶 𠆢 冂 厶 口 日 曰
餈 : 一 丶 人 𠆢 冫 勹 欠 艮
餉 : 口 食 冂
養 : 王 食 并 羊
餌 : 艮 耳 食
餐 : 食 又 夕
餑 : 一 丶 𠆢 冖 十 厶 子 日
餒 : 女 食 爪
餓 : 食 亅 戈 手
餔 : 十 食 用 丶
餕 : 一 丶 𠆢 儿 ハ 厶 夂 日
餖 : 一 丶 𠆢 并 厶 口 日 豆
餗 : 一 丶 𠆢 厶 口 日 木
餘 : 干 食 二 ハ 𠆢 亅
餚 : 一 丶 ノ 𠆢 厶 日 月
餛 : 一 丶 𠆢 匕 厶 日 比
餜 : 一 丶 𠆢 厶 日 木 田
餝 : 食 方 ⺾
餞 : 食 戈
餟 : 丶 𠆢 厶 又 日 曰
餠 : ｜ 干 食
餡 : 臼 食
餢 : 丶 𠆢 厶 口 日 立
餤 : 火 食
餦 : 丶 𠆢 厶 日 長
餧 : 一 丶 ノ 𠆢 厶 女 日 木 禾
館 : 口 食 宀
餫 : 丶 𠆢 冖 厶 日 車
餬 : 口 十 食 月
餮 : 食 𠆢 彡 歹
餱 : 一 丶 ノ ⺅ 𠆢 厶 ユ 大 日 矢
餲 : 一 丶 人 𠆢 勹 厶 日
餳 : 一 丶 ノ 𠆢 勹 厶 日 勿
餴 : 丶 𠆢 十 厶 大 廾 日 曰
餵 : 一 丶 𠆢 厶 日 田 衣
餹 : ｜ 丶 𠆢 厶 口 广 ヨ 日 曰
餺 : 一 丶 𠆢 十 厶 寸 日 月
餻 : 一 丶 𠆢 并 厶 日 灬 王
餼 : 一 丶 𠆢 厶 日 气 米
餽 : 鬼 食 田 儿 匕
餾 : 食 田 卩 厶
饀 : 一 丶 𠆢 厶 日 爪 臼
饁 : 一 丶 𠆢 厶 土 日 皿
饂 : 皿 食 日
饅 : 食 日 罒 又
饆 : 一 ｜ 丶 𠆢 厶 日 田
饇 : 丶 𠆢 匚 厶 口 日 曰
饈 : 一 ｜ 丶 ノ 𠆢 并 厶 ヨ 日 王 羊
饉 : ｜ 一 食 二 ⺾
饋 : ｜ 一 貝 目 ハ 口 食
饌 : ｜ 食 二 ハ 已
饍 : 一 丶 并 厶 口 日 王 羊
饎 : 一 丶 𠆢 并 十 厶 口 士 日 豆
饐 : 口 士 食 豆 并 冖
饑 : 食 丶 幺 戈 ノ
饒 : 食 土 儿
饔 : 一 丶 亠 𠆢 幺 艮 隹
饕 : 口 食 卜 儿 匕 厂 虍
饗 : 艮 食 ⻏ 幺
饘 : 一 丶 亠 𠆢 厶 口 囗 日
饙 : 丶 𠆢 ハ 十 厶 ⺾ 日 曰 目 貝
饛 : 一 丶 𠆢 冖 厶 ⺾ 日 曰 豕
饜 : 一 丶 𠆢 厂 大 日 月 犬 艮
饞 : 一 丶 乙 𠆢 勹 匕 厶 口 已 日 比 巴 色
饟 : 一 ｜ 丶 二 亠 𠆢 厶 口 日 衣
饠 : 一 丶 𠆢 厶 小 幺 日 罒 糸 隹
首 : 自 首 并 目
馗 : 九 自 首 并 目
馘 : 口 自 首 并 目 戈
香 : 禾 香 日
馛 : ノ 又 弋 日 曰 木 禾
馝 : ノ 心 日 曰 木 禾
馞 : ノ 冖 十 子 日 木 禾 香
馟 : ノ 子 日 曰 木 爪 禾
馣 : ノ 乙 大 日 木 禾 奄 香
馥 : 禾 香 日 夂
馦 : 一 ｜ 丶 ノ 并 ヨ 日 木 禾
馨 : 禾 香 士 日 又 几
馬 : 馬
馭 : 馬 又
馮 : 馬 冫
馰 : 丶 勹 馬
馱 : 大 馬
馲 : 一 ノ 乙 馬
馳 : 馬 也
馴 : 川 灬 馬
馵 : 廾 馬
馹 : 日 馬
馺 : 丶 乃 及 馬
馼 : 馬 文
馽 : ｜ 口 馬
馿 : 一 丶 尸 戸 馬
駁 : 馬 爻
駃 : 人 ユ 馬
駄 : 大 馬 丶
駅 : 馬 尸
駆 : 馬 匚 丶 ノ
駈 : 斤 馬
駉 : 冂 口 馬
駐 : 王 馬 丶
駑 : 女 馬 又
駒 : 口 馬 勹
駓 : 一 ｜ 丶 ノ 馬
駔 : 一 目 馬
駕 : 口 馬 力
駘 : 口 馬 厶
駙 : ⺅ 寸 馬
駚 : 口 大 馬
駛 : ノ 口 馬
駜 : ノ 心 馬
駝 : 馬 匕 宀
駞 : 一 ｜ ノ 乙 匕 也 馬
駟 : 馬 儿 囗
駢 : ｜ ノ 二 馬 并 廾
駧 : 一 冂 口 馬
駪 : ノ 儿 土 馬
駫 : 一 儿 ⺌ 馬
駬 : 耳 馬
駭 : 人 馬 亠
駮 : 馬 父 亠
駰 : 囗 大 馬
駱 : 口 馬 夂
駲 : ｜ ノ 川 馬 丶
駴 : 廾 戈 馬
駵 : 口 廾 馬
駸 : ヨ 馬 又 冖
駹 : 丶 九 彡 馬
駻 : 干 日 馬
駼 : 亅 二 𠆢 ハ 小 示 馬
駽 : 口 月 馬
駾 : 儿 并 口 馬
駿 : 馬 儿 厶 夂
騁 : ｜ 日 馬 一 勹 田
騂 : 十 立 辛 馬
騃 : 一 ノ 厶 大 矢 馬
騄 : ヨ 水 馬
騅 : 馬 隹
騊 : 凵 勹 山 缶 馬
騋 : 人 木 馬
騌 : 二 宀 小 示 馬
騎 : 口 大 馬 亅 一
騏 : 甘 馬 ハ
騐 : 一 丶 𠆢 心 馬
騑 : 非 馬
騒 : 虫 馬 又
験 : 口 人 馬 𠆢
騖 : マ 攵 矛 馬
騙 : ｜ 一 戸 馬 冂 冊 尸
騚 : 一 并 刂 月 馬
騞 : 一 ｜ 二 口 石 馬
騠 : 日 疋 馬
騢 : 一 ｜ 又 口 馬
騣 : 丶 ノ 儿 ハ 凵 夂 馬
騤 : 一 丶 ノ 大 馬
騧 : 冂 口 馬
騨 : 十 ⺌ 田 馬
騫 : ｜ 一 馬 ハ 宀
騭 : ノ 小 ⻖ 止 馬
騮 : ノ 刀 厶 田 馬
騰 : 月 馬 并 一 人 大 二
騱 : 大 幺 爪 馬
騳 : 馬
騵 : 厂 小 日 白 馬
騶 : 勹 屮 馬
騷 : 虫 馬 又 丶
騸 : 一 丶 ノ 冫 尸 戸 羽 馬
騾 : 糸 幺 小 田 馬
驀 : 大 日 馬 ⺾
驁 : 一 ｜ ノ 亅 二 土 士 攵 方 馬
驂 : 大 馬 厶 彡
驃 : 示 二 小 西 馬
驄 : ノ 口 夂 心 馬
驅 : 口 馬 匚 品
驇 : 丶 ハ 九 土 馬
驊 : 一 ｜ 二 ⺾ 馬
驋 : 丶 ノ 几 又 弓 殳 馬
驌 : ｜ ヨ 爿 片 馬
驍 : 土 馬 儿
驎 : 夕 米 舛 馬
驑 : 一 ｜ 田 馬
驒 : 一 ｜ 十 口 日 田 馬
驔 : 十 日 曰 西 馬
驕 : ノ 口 大 馬 冂
驖 : 十 口 土 戈 王 馬
驗 : 口 人 馬 𠆢
驘 : 一 ノ 乙 亠 口 亡 月 馬
驚 : 口 馬 勹 夂 ⺾ 攵
驛 : 十 辛 馬 罒 立 亠
驝 : 冖 口 士 木 石 馬
驟 : 衣 耳 馬 又
驢 : 皿 田 馬 卜 匕 厂 虍
驤 : ｜ 衣 二 馬 ハ 亠
驥 : ｜ 田 二 馬 ハ 匕 爿
驩 : 口 十 馬 ⺾ 隹
驪 : 鹿 馬 比 亠 冂 广
驫 : 馬
骨 : 月 冖 冂 骨
骪 : 丶 冂 冖 几 月 骨
骬 : 亅 二 冂 冖 月 骨
骭 : 干 月 骨 冂 冖
骮 : 冂 冖 弋 月 骨
骯 : 亠 冂 冖 几 月 骨
骰 : 月 骨 冂 冖 殳 几 又
骲 : 冂 冖 勹 已 月 骨
骴 : 冂 冖 匕 月 止 骨
骵 : 一 冂 冖 月 木 骨
骶 : 一 丶 冂 冖 月 氏 骨
骷 : 冂 冖 十 口 月 骨
骸 : 月 骨 人 亠 冂 冖
骹 : 亠 冂 冖 月 父 骨
骻 : 二 冂 冖 勹 大 月 骨
骼 : 月 口 骨 冂 冖 夂
骾 : 一 丶 ノ 冂 冖 日 月 骨
骿 : 一 并 冂 冖 廾 月 骨
髀 : 月 骨 十 田 冂 冖
髁 : 冂 冖 月 木 田 骨
髃 : ｜ 冂 冖 厶 日 月 田 禸 骨
髄 : ノ 一 月 辶 冖 骨
髆 : 丶 冂 冖 十 寸 日 月 田 骨
髈 : 亠 并 冂 冖 方 月 立 骨
髎 : ノ 𠆢 冂 冖 冫 彡 月 羽 骨
髏 : ｜ 一 月 口 骨 女 冂 冖
髐 : 一 儿 冂 冖 土 月 骨
髑 : 月 骨 虫 罒 冂 冖 勹
髒 : 一 冂 冖 匕 夕 廾 ⺾ 月 歹 骨
髓 : ノ 一 月 工 骨 辶 冂 冖
體 : ｜ 月 口 骨 豆 日 并 冂 冖
髕 : 一 ノ ハ 冂 冖 宀 小 月 目 貝 骨
髖 : 丶 儿 冂 冖 宀 ⺾ 月 目 見 骨
髗 : 冂 冖 匕 卜 厂 月 田 皿 虍 骨
高 : 口 高 亠 冂
髛 : 亠 冂 九 口 尸 高
髜 : ノ 亠 冂 口 廾 日 高
髞 : 口 高 木 亠 冂 品
髟 : 長 彡 髟
髠 : 几 彡 長 髟
髢 : 也 長 匕 彡 髟
髣 : 長 方 彡 髟
髤 : 彡 木 長 髟
髥 : 二 冂 彡 月 長 髟
髦 : 長 毛 彡 髟
髧 : ノ 乙 冖 尢 彡 長 髟
髩 : 一 ｜ 亅 彡 長 髟
髪 : 夂 一 長 彡 髟
髫 : 口 長 刀 彡 髟
髬 : ｜ 丶 ノ 二 彡 長 髟
髭 : 止 長 匕 彡 髟
髮 : 長 彡 攵 髟 又
髯 : ｜ 一 長 冂 厶 彡 髟
髱 : 長 勹 已 彡 髟
髲 : ノ 十 厂 又 彡 支 長 髟
髳 : マ 彡 矛 長 髟
髴 : ｜ ノ 弓 長 彡 髟
髵 : 彡 而 長 髟
髷 : ｜ 長 日 厶 彡 髟
髹 : ⺅ 彡 木 長 髟
髺 : 口 彡 舌 長 髟
髻 : 口 士 長 彡 髟
髽 : 人 土 彡 長 髟
髿 : ノ 小 彡 氵 長 髟
鬀 : ｜ ノ 并 弓 彡 長 髟
鬁 : ノ 刂 彡 木 禾 長 髟
鬂 : 一 ハ 彡 斤 長 髟
鬃 : 二 宀 小 彡 示 長 髟
鬄 : ノ 勹 彡 日 曰 勿 長 髟
鬅 : 彡 月 長 髟
鬆 : 長 ハ 木 厶 彡 髟
鬈 : 一 丶 ノ 并 大 已 彡 長 髟
鬉 : 丶 ノ 儿 ハ 凵 夂 彡 長 髟
鬋 : 一 丶 并 冂 刂 彡 月 長 髟
鬌 : 一 ノ 工 彡 月 長 髟
鬍 : 十 口 彡 月 長 髟
鬎 : 刂 口 彡 木 長 髟
鬐 : ノ 匕 土 彡 ⺹ 日 長 髟
鬒 : 一 ハ 匕 十 彡 目 貝 長 髟
鬖 : 𠆢 厶 彡 長 髟
鬘 : 長 日 罒 又 彡 髟
鬙 : ｜ ハ 并 口 彡 日 長 髟
鬚 : 貝 目 ハ 長 頁 彡 髟
鬛 : 丶 ノ 乙 口 川 彡 長 髟
鬜 : 彡 月 長 門 髟
鬟 : 衣 一 口 長 罒 彡 髟
鬠 : 一 ｜ 𠆢 并 口 彡 日 長 髟
鬢 : ノ 貝 目 ハ 小 長 宀 彡 髟
鬣 : 臼 鼠 長 囗 彡 髟
鬥 : 鬥
鬦 : ｜ 亅 斗 王
鬧 : 巾 亠 鬥
鬨 : ｜ 二 ハ 亅 鬥
鬩 : 臼 儿 鬥
鬪 : 口 寸 豆 并 鬥
鬫 : ｜ 亅 ユ 工 攵 王 耳
鬭 : ｜ 亅 口 斤 王
鬮 : 亀 鬥 乙 勹 田
鬯 : 凵 匕 鬯
鬱 : 缶 木 冖 凵 匕 彡
鬲 : 口 儿 冂 鬲
鬳 : 儿 并 冂 匕 卜 厂 口 虍 鬲
鬴 : 丶 儿 并 冂 十 口 月 鬲
鬵 : 儿 并 冂 口 无 鬲
鬷 : 丶 ノ 儿 ハ 并 冂 凵 口 夂 鬲
鬹 : 一 儿 并 冂 口 大 目 見 鬲
鬺 : 一 ノ 儿 并 冂 勹 口 日 曰 勿 鬲
鬻 : 一 弓 口 米 儿 冂 鬲
鬼 : 鬼 田 儿 匕 厶
鬽 : 儿 匕 厶 彡 田 鬼
魁 : 鬼 田 斗 儿 厶
魂 : 鬼 田 二 儿 匕 厶
魃 : 鬼 田 丶 儿 匕 攵
魄 : 鬼 田 白 儿 匕
魅 : ｜ 鬼 田 二 ハ 木 亠 儿 匕
魈 : 儿 匕 厶 小 ⺌ 月 田 鬼
魋 : 儿 匕 厶 田 隹 鬼
魌 : ｜ 二 儿 ハ 匕 厶 甘 田 鬼
魍 : 亡 鬼 田 并 儿 冂 匕
魎 : ｜ 鬼 田 入 儿 冂 厶
魏 : 禾 鬼 女 田 儿 匕
魑 : 鬼 田 亠 儿 凵 匕 禸
魔 : 鬼 田 木 儿 匕 广 麻
魕 : 人 儿 匕 厶 幺 戈 田 鬼
魖 : 一 ｜ 丶 ノ 儿 匕 卜 厂 厶 田 虍 鬼
魗 : 一 儿 匕 厶 口 士 寸 工 田 鬼
魘 : 鬼 月 犬 田 日 儿 匕 厂
魚 : 魚 田 灬
魛 : 刀 灬 田 魚
魞 : 入 灬 田 魚
魡 : 丶 勹 灬 田 魚
魣 : 一 亅 マ 灬 田 矛 魚
魥 : 丶 乃 及 灬 田 魚
魦 : ノ 小 灬 田 魚
魨 : ノ 乙 凵 灬 屯 田 魚
魪 : ｜ ノ 𠆢 灬 田 魚
魫 : ノ 乙 冖 尢 灬 田 魚
魬 : 厂 又 灬 田 魚
魭 : 二 儿 灬 元 田 魚
魮 : 匕 比 灬 田 魚
魯 : 魚 田 日 灬
魲 : 一 尸 戸 灬 田 魚
魳 : 一 ｜ 冂 巾 灬 田 魚
魴 : 魚 田 方 灬
魵 : ハ 刀 灬 田 魚
魶 : 入 冂 灬 田 魚
魷 : 丶 尢 灬 尤 田 魚
魸 : 灬 片 田 魚
魹 : ノ 乙 二 手 灬 田 魚
魿 : 丶 𠆢 マ 灬 田 魚
鮀 : 匕 宀 灬 田 魚
鮃 : 干 魚 田 并 灬
鮄 : 廾 弓 灬 田 魚
鮅 : ノ 心 灬 田 魚
鮆 : 匕 止 灬 田 魚
鮇 : 一 木 灬 田 魚
鮉 : 刀 口 灬 田 魚
鮊 : 日 灬 田 白 魚
鮋 : ｜ 日 灬 田 魚
鮍 : ノ 十 又 支 灬 田 魚
鮎 : 魚 口 田 卜
鮏 : 灬 生 田 魚
鮐 : 厶 口 灬 田 魚
鮑 : 魚 田 勹 已 灬
鮒 : ⺅ 魚 寸 田 灬
鮓 : ｜ ノ 魚 田 灬
鮔 : 匚 口 灬 田 魚
鮖 : 魚 口 石 田 灬
鮗 : 魚 田 冫 夂 灬
鮚 : 口 士 灬 田 魚
鮝 : 一 ハ 并 大 灬 田 魚
鮞 : 灬 田 而 魚
鮟 : 魚 女 田 宀 灬
鮠 : 魚 田 卩 厂 灬 隹
鮦 : 一 冂 口 灬 田 魚
鮧 : 大 弓 灬 田 魚
鮨 : 魚 田 日 匕 灬
鮩 : 一 并 廾 灬 田 魚
鮪 : ノ 一 魚 月 田 灬
鮫 : 魚 田 父 亠 灬
鮬 : 二 勹 大 灬 田 魚
鮭 : 魚 田 土 灬
鮮 : 王 魚 田 并 羊 灬
鮰 : 口 囗 灬 田 魚
鮱 : ノ 匕 土 ⺹ 灬 田 魚
鮲 : 丶 ⺅ 大 灬 犬 田 魚
鮴 : ⺅ 魚 田 木 灬
鮷 : ｜ ノ 并 弓 灬 田 魚
鮸 : 一 ｜ 儿 勹 口 灬 田 免 魚
鮹 : 魚 月 ⺌ 田 灬
鮻 : 儿 ハ 厶 夂 灬 田 魚
鮼 : 冖 又 ヨ 灬 田 魚
鮾 : 女 灬 爪 田 魚
鮿 : 乙 灬 田 耳 魚
鯀 : ノ 魚 糸 幺 小 田 灬
鯁 : 一 丶 ノ 日 灬 田 魚
鯆 : 魚 十 田 用 丶 灬
鯇 : 二 儿 宀 灬 元 田 魚
鯈 : ｜ ⺅ 夂 灬 田 魚
鯉 : 魚 田 里 灬
鯊 : ノ 魚 氵 小 田 灬
鯎 : ノ 亅 厂 戈 灬 田 魚
鯏 : 禾 刂 魚 田 灬
鯐 : 土 止 灬 田 走 魚
鯑 : ノ 一 魚 巾 田 灬
鯒 : 魚 田 用 灬
鯔 : 魚 巛 田 灬
鯖 : 魚 月 青 田 土 二 亠 灬
鯗 : 一 丶 ノ 二 并 灬 王 田 魚
鯘 : ノ 女 木 灬 田 禾 魚
鯛 : 魚 口 田 土 冂 灬
鯝 : 十 口 囗 灬 田 魚
鯟 : 日 木 灬 田 魚
鯡 : 魚 田 非 灬
鯢 : 臼 魚 田 儿 灬
鯣 : ノ 魚 田 日 勹 灬
鯤 : 魚 田 日 比 灬
鯥 : 儿 ハ 土 灬 田 魚
鯧 : 日 灬 田 魚
鯨 : 魚 口 小 田 亠 灬
鯪 : 儿 ハ 土 夂 灬 田 魚
鯫 : 又 灬 田 耳 魚
鯮 : 二 宀 小 灬 田 示 魚
鯯 : 冂 刂 灬 牛 田 魚
鯰 : 魚 心 田 𠆢 灬
鯱 : 魚 田 卜 儿 匕 厂 灬 虍
鯲 : 魚 田 方 𠆢 冫 灬
鯳 : 一 丶 广 氏 灬 田 魚
鯵 : 魚 大 田 厶 彡 灬
鯷 : 日 灬 田 疋 魚
鯸 : 一 ノ ⺅ ユ 大 灬 田 矢 魚
鯹 : 日 曰 灬 生 田 魚
鯺 : ノ 土 ⺹ 日 灬 田 魚
鯽 : 匕 卩 厶 日 灬 田 白 魚
鯿 : 一 ｜ 丶 亅 冂 尸 廾 戸 灬 田 冊 魚
鰀 : ノ 二 又 灬 爪 田 魚
鰂 : ハ 刂 灬 田 目 貝 魚
鰄 : ノ 魚 女 田 戈 灬
鰆 : 魚 人 大 田 二 日 灬
鰈 : 魚 田 木 世 灬
鰉 : 王 魚 田 白 灬
鰊 : ｜ 魚 口 田 罒 并 木 灬
鰋 : 匚 女 日 灬 田 魚
鰌 : 魚 田 酉 ハ 灬
鰍 : 火 禾 魚 田 灬
鰏 : 一 口 灬 田 魚
鰐 : 魚 口 田 二 灬 勹
鰑 : 一 ノ 勹 日 曰 灬 勿 田 魚
鰒 : 魚 田 日 夂 灬
鰓 : 魚 心 田 灬
鰔 : ノ 魚 口 田 戈 灬
鰕 : ｜ 魚 口 田 又 灬
鰖 : 一 ノ 工 月 灬 田 魚
鰘 : 一 厶 土 宀 灬 田 至 魚
鰙 : 一 ノ 口 ⺾ 灬 田 魚
鰚 : 一 宀 日 灬 田 魚
鰛 : 魚 皿 田 日 灬
鰜 : 一 ｜ ノ 并 ヨ 灬 田 魚
鰝 : 亠 冂 口 灬 田 高 魚
鰞 : 灬 田 魚 鳥
鰡 : 魚 田 刀 厶 灬
鰢 : 灬 田 馬 魚
鰣 : 土 寸 日 灬 田 魚
鰤 : ｜ 魚 巾 口 田 冂 灬
鰥 : ｜ 魚 田 罒 冫 灬
鰦 : 一 并 幺 灬 田 魚
鰧 : 一 丶 ハ 并 冂 大 月 灬 田 魚
鰨 : 冫 日 曰 灬 田 羽 魚
鰩 : 丶 凵 夕 山 灬 爪 田 缶 魚
鰪 : 厶 土 灬 田 皿 魚
鰭 : 魚 田 日 ⺹ 灬
鰮 : 魚 皿 人 田 囗 灬
鰯 : 弓 魚 田 冫 灬
鰰 : ｜ 魚 田 礻 灬
鰱 : 辶 灬 田 車 魚
鰲 : 魚 田 土 方 攵 灬
鰵 : 一 ノ 攵 灬 毋 田 母 魚
鰶 : 丶 二 夕 小 灬 田 示 魚
鰷 : 一 ｜ ⺅ 夂 小 攵 木 灬 田 魚
鰹 : 魚 臣 田 土 又 灬
鰺 : 魚 田 𠆢 厶 彡 灬
鰻 : 魚 田 日 罒 又 灬
鰽 : 一 ｜ 日 曰 灬 田 魚
鰾 : 魚 示 二 小 西 田 灬
鱁 : 一 丶 ノ 辶 犭 灬 田 豕 魚
鱃 : 一 ｜ ノ 二 并 ヨ 灬 王 田 羊 魚
鱄 : 一 十 厶 寸 日 灬 田 虫 魚
鱅 : ｜ 二 冂 广 ヨ 月 灬 田 聿 魚
鱆 : 音 魚 十 田 日 立 灬
鱇 : ヨ 魚 水 田 广 灬 隶
鱈 : ヨ 雨 魚 田 灬
鱉 : ｜ ハ 并 冂 巾 攵 灬 田 魚
鱊 : 儿 ハ 冂 マ 口 灬 田 矛 魚
鱎 : ノ 冂 口 大 灬 田 魚
鱏 : 一 冂 凵 十 日 灬 田 西 魚
鱐 : ｜ ヨ 灬 爿 片 田 魚
鱒 : 魚 寸 田 酉 并 灬
鱓 : 十 口 日 灬 田 魚
鱔 : 一 并 口 灬 王 田 羊 魚
鱖 : 一 人 并 勹 厂 屮 欠 灬 田 魚
鱗 : 魚 舛 田 米 夕 灬
鱘 : 口 寸 工 ヨ 灬 田 魚
鱚 : 魚 口 士 十 田 豆 并 灬
鱛 : ｜ ハ 并 口 日 灬 田 魚
鱜 : 丶 匕 厶 幺 ⻏ 日 灬 田 白 魚
鱝 : ハ 十 ⺾ 灬 田 目 貝 魚
鱞 : 一 口 灬 田 罒 衣 魚
鱟 : 一 ｜ 冖 ヨ 灬 爻 田 魚
鱠 : 魚 田 日 罒 𠆢 灬
鱣 : 一 亠 口 囗 日 灬 田 魚
鱥 : 一 ノ 小 戈 止 灬 田 魚
鱧 : ｜ 魚 田 豆 日 灬
鱨 : 冖 匕 口 ⺌ 日 灬 田 魚
鱩 : 二 冖 灬 田 雨 魚
鱪 : ノ 土 ⺹ 日 灬 田 魚
鱫 : 冖 夂 心 灬 爪 田 魚
鱭 : 亠 刀 廾 氏 灬 田 魚 齊
鱮 : 一 ｜ 亠 ハ ヨ 灬 田 魚
鱰 : ノ 土 ⺹ 日 灬 田 罒 魚
鱲 : 丶 ノ 乙 口 川 巛 灬 田 魚
鱵 : 一 ノ 厂 口 戈 灬 田 竹 魚
鱶 : 王 魚 艮 食 田 并 羊 灬
鱷 : 口 灬 王 田 魚
鱸 : 魚 皿 田 卜 匕 厂 灬 虍
鱺 : 一 ｜ 冂 匕 广 比 灬 田 魚 鹿
鱻 : 灬 田 魚
鳥 : 鳥 灬
鳦 : 乙 灬 鳥
鳧 : 鳥 几 灬
鳩 : 九 鳥 灬
鳫 : 鳥 厂 灬
鳬 : 鳥 几
鳰 : 鳥 入 灬
鳲 : 尸 灬 鳥
鳳 : 鳥 几 灬
鳴 : 口 鳥 灬
鳶 : 鳥 弋 灬
鳷 : 十 又 支 灬 鳥
鳹 : 丶 𠆢 灬 鳥
鴂 : 人 ユ 灬 鳥
鴃 : 人 大 鳥 二 灬
鴆 : 鳥 尢 灬
鴇 : 十 鳥 匕 灬
鴈 : ⺅ 鳥 厂 灬
鴉 : 牙 鳥 灬
鴋 : 方 灬 鳥
鴎 : 鳥 匚 灬 ノ 丶
鴑 : 又 女 灬 鳥
鴒 : 鳥 𠆢 卩 灬
鴕 : 鳥 匕 宀 灬
鴗 : 灬 立 鳥
鴘 : 厶 廾 灬 鳥
鴛 : 鳥 夕 卩 灬
鴜 : 匕 止 灬 鳥
鴝 : 勹 口 灬 鳥
鴞 : 一 勹 口 灬 鳥
鴟 : 氏 鳥 灬
鴣 : 口 十 鳥 灬
鴦 : 大 鳥 灬
鴨 : ｜ 鳥 日 灬 田
鴪 : 穴 鳥 ハ 宀 灬
鴫 : 鳥 田 灬
鴬 : ⺌ 鳥 冖 灬
鴯 : 灬 而 鳥
鴰 : 口 灬 舌 鳥
鴲 : 匕 日 灬 鳥
鴳 : 女 宀 灬 鳥
鴴 : 彳 灬 行 鳥
鴺 : 大 弓 灬 鳥
鴻 : 工 氵 鳥 灬
鴼 : 口 夂 灬 鳥
鴽 : 口 女 灬 鳥
鴾 : 牛 鳥 厶 灬
鴿 : 口 鳥 𠆢 灬
鵁 : 鳥 父 亠 灬
鵂 : ⺅ 木 灬 鳥
鵃 : 一 ｜ 丶 冂 灬 舟 鳥
鵄 : 至 鳥 土 厶 灬
鵅 : 口 夂 灬 鳥
鵆 : 行 鳥 彳 灬
鵇 : 一 ノ 十 干 灬 鳥
鵈 : 耳 鳥 灬
鵊 : 人 大 灬 鳥
鵐 : 工 人 鳥 灬
鵑 : 月 口 鳥 灬
鵒 : 𠆢 ハ 口 灬 谷 鳥
鵓 : 冖 十 子 灬 鳥
鵔 : ハ 厶 夂 灬 鳥
鵙 : 貝 目 ハ 鳥 灬
鵜 : ｜ ノ 弓 鳥 并 灬
鵝 : 鳥 亅 戈 灬
鵞 : 鳥 亅 戈 灬
鵟 : 犭 灬 王 鳥
鵠 : ノ 口 鳥 土 灬
鵡 : 止 鳥 弋 戈 灬
鵢 : 灬 身 鳥
鵣 : 口 木 灬 鳥
鵤 : 角 鳥 灬
鵥 : ｜ ノ 二 并 刂 灬 鳥
鵩 : 丶 冂 又 尸 月 灬 鳥
鵪 : ｜ 大 日 灬 鳥
鵫 : 十 卜 日 灬 鳥
鵬 : 月 鳥 灬
鵯 : 十 鳥 田 灬
鵰 : ｜ 二 冂 口 土 灬 鳥
鵲 : ｜ 一 鳥 日
鵳 : 一 尸 戸 月 灬 鳥
鵶 : 一 ｜ 灬 鳥
鵷 : 卩 夕 宀 灬 鳥
鵺 : 衣 鳥 夕 亠 灬
鵻 : 灬 隹 鳥
鵼 : 儿 ハ 宀 工 灬 鳥
鵾 : 匕 日 比 灬 鳥
鶃 : 儿 灬 臼 鳥
鶄 : 一 ｜ 冂 土 月 灬 鳥
鶆 : 人 木 灬 鳥
鶇 : ｜ 鳥 日 ハ 木 灬 田
鶉 : 口 子 鳥 亠 灬
鶊 : 人 广 ヨ 灬 鳥
鶍 : ノ 勹 日 灬 勿 鳥
鶎 : 二 宀 小 灬 示 鳥
鶏 : 人 爪 土 大 鳥
鶒 : 力 口 木 灬 鳥
鶓 : ⺾ 灬 田 鳥
鶕 : 日 曰 灬 立 鳥
鶖 : ノ 木 火 灬 禾 鳥
鶗 : 日 曰 灬 疋 鳥
鶘 : 十 口 月 灬 鳥
鶙 : ｜ 亠 并 冂 冖 巾 灬 立 鳥
鶚 : 口 鳥 二 灬 勹
鶡 : 人 勹 日 灬 鳥
鶤 : 車 鳥 冖 灬
鶩 : 鳥 矛 攵 灬
鶪 : 丶 大 灬 犬 目 鳥
鶫 : ｜ 口 鳥 罒 并 木 灬
鶬 : 一 丶 ノ 𠆢 口 日 灬 鳥
鶮 : 亠 冂 口 灬 高 鳥
鶯 : 火 鳥 冖 灬
鶱 : 一 ｜ 丶 ノ 二 宀 灬 鳥
鶲 : 羽 鳥 ハ 冫 厶 灬
鶴 : 鳥 灬 隹 宀
鶵 : 勹 屮 灬 鳥
鶸 : 弓 鳥 冫 灬
鶹 : ノ 刀 厶 灬 田 鳥
鶺 : 月 人 鳥 冫 灬
鶻 : 月 骨 鳥 冂 冖 灬
鶼 : 一 ｜ 丶 ノ 并 ヨ 灬 鳥
鶽 : 十 灬 隹 鳥
鶿 : 一 并 幺 灬 鳥
鷀 : 一 并 幺 灬 鳥
鷁 : 皿 鳥 并 灬
鷂 : 缶 鳥 夕 凵 灬
鷃 : 女 宀 日 灬 鳥
鷄 : 大 鳥 爪 幺 灬
鷆 : 鳥 ハ 目 匕 灬
鷇 : 一 冖 几 又 士 殳 灬 鳥
鷉 : 儿 几 匕 卜 厂 灬 虍 鳥
鷊 : 并 冂 口 灬 鬲 鳥
鷏 : 十 鳥 ハ 目 灬
鷓 : 一 鳥 凵 广 灬
鷔 : 士 攵 方 灬 鳥
鷕 : 口 灬 隹 鳥
鷖 : 一 ノ 几 匚 又 大 殳 灬 矢 鳥
鷗 : 匚 口 灬 鳥
鷙 : 九 十 辛 鳥 立 丶 亠 灬
鷚 : ノ 𠆢 冫 彡 灬 羽 鳥
鷞 : 大 灬 爻 鳥
鷟 : 一 ノ 大 方 灬 矢 鳥
鷠 : 灬 田 魚 鳥
鷣 : 十 日 灬 西 鳥
鷥 : 小 幺 灬 糸 鳥
鷦 : 鳥 灬 隹
鷧 : 并 冖 口 士 灬 豆 鳥
鷩 : ｜ ハ 并 冂 巾 攵 灬 鳥
鷫 : ｜ ヨ 灬 爿 片 鳥
鷭 : 鳥 田 釆 米 灬
鷮 : ノ 冂 口 大 灬 鳥
鷯 : 小 鳥 日 并 𠆢 亠 灬
鷰 : 一 ｜ 凵 匕 口 灬 鳥
鷲 : 口 小 鳥 丶 亠 尤 灬 尢
鷳 : 月 灬 門 鳥
鷴 : 木 灬 門 鳥
鷸 : 口 鳥 矛 儿 冂 灬
鷹 : ⺅ 鳥 广 灬 隹
鷺 : 口 足 鳥 夂 灬
鷽 : 臼 鳥 冖 灬 爻
鷾 : 心 日 灬 立 音 鳥
鸂 : 大 幺 氵 灬 爪 鳥
鸇 : 一 亠 口 囗 日 灬 鳥
鸊 : 十 口 尸 灬 立 辛 鳥
鸍 : 一 ｜ ハ 冂 灬 爻 鳥
鸎 : ハ 灬 目 貝 鳥
鸐 : 冫 灬 羽 隹 鳥
鸑 : 丶 大 犭 灬 犬 言 鳥
鸒 : 一 ｜ 丶 ノ ヨ 灬 鳥
鸕 : 匕 卜 厂 灬 田 皿 虍 鳥
鸖 : 二 冖 灬 隹 雨 鳥
鸙 : 一 ｜ 亅 𠆢 冂 口 廾 灬 冊 鳥 龠
鸚 : 貝 目 ハ 女 鳥 灬
鸛 : 口 十 鳥 灬 ⺾ 隹
鸜 : 灬 目 隹 鳥
鸝 : 一 丶 冂 匕 广 比 灬 鳥 鹿
鸞 : 言 糸 幺 小 鳥 灬
鹵 : 十 囗 鹵
鹸 : 口 十 人 𠆢 囗 鹵
鹹 : ノ 口 卜 囗 戈 鹵 十
鹺 : 一 ノ 二 并 十 囗 工 王 羊 鹵
鹻 : 一 ｜ 丶 ノ 并 十 囗 ヨ 鹵
鹼 : 一 人 𠆢 十 口 囗 鹵
鹽 : 皿 十 臣 囗 鹵
鹿 : 鹿 比 广
麀 : 匕 广 比 鹿
麁 : 鹿 比 广 勹
麂 : 几 匕 广 比 鹿
麃 : 匕 广 比 灬 鹿
麄 : ハ 刀 匕 广 比 鹿
麅 : 勹 匕 已 广 比 鹿
麇 : ノ 匕 广 木 比 禾 鹿
麈 : 王 鹿 比 丶 广
麋 : 鹿 比 米 广
麌 : 口 鹿 ハ 比 广
麎 : 亠 匕 厂 广 比 衣 辰 鹿
麏 : ノ 匕 口 广 ヨ 比 鹿
麑 : 臼 鹿 比 儿 广
麒 : 甘 鹿 ハ 比 广
麓 : 鹿 比 木 广
麕 : 禾 鹿 比 囗 广
麖 : 亠 匕 口 小 广 比 鹿
麗 : 一 鹿 比 冂 广
麘 : ノ 匕 广 日 曰 木 比 禾 鹿
麛 : 匕 广 弓 比 耳 鹿
麝 : 鹿 身 寸 比 广
麞 : 匕 十 广 日 比 立 音 鹿
麟 : 鹿 舛 比 米 夕 广
麤 : 匕 广 比 鹿
麥 : 麦 夂
麦 : 麦 夂
麨 : ノ 人 夂 小 木
麩 : 人 二 麦 夂
麪 : 止 麦 疋 夂
麬 : ノ 人 十 又 夂 支 木
麭 : 麦 勹 夂 已
麮 : 人 厶 土 夂 木
麯 : ｜ 人 夂 日 木
麰 : 人 厶 夂 木 牛
麳 : 人 夂 木
麴 : 人 勹 夂 木 米
麵 : 人 夂 木 面
麸 : 人 土 二 麦 亠 夂 大
麹 : 土 麦 米 亠 勹 夂
麺 : 麦 面 夂
麻 : 木 广 麻
麼 : 木 幺 广 麻
麽 : 儿 幺 广 木 麻
麾 : 毛 木 广 麻
麿 : 口 木 广 麻
黃 : 一 ｜ ハ 凵 日 田 黄
黄 : 黄 田 ハ
黆 : ノ 乙 ハ 冖 尢 田 黄
黈 : 丶 ハ 王 田 黄
黋 : 一 儿 ハ ⺌ 田 黄
黌 : 臼 黄 田 ハ 冖 爻
黍 : 禾 黍 水
黎 : 黍 勿 禾 水
黏 : 黍 口 卜 禾 水
黐 : 黍 亠 凵 禸 禾 水
黑 : ｜ 二 并 口 灬 里 黒
黒 : 黒 里 灬
黔 : 黒 里 𠆢 灬
黕 : ノ 乙 并 冖 口 土 尢 灬 里 黒
默 : 犬 里 灬 黒
黙 : 犬 里 灬 黒
黛 : ⺅ 黒 里 弋 灬
黜 : ｜ 黒 山 里 灬
黝 : 黒 里 力 幺 灬
點 : 口 黒 卜 里 灬
黟 : 并 口 土 夕 灬 里 黒
黠 : 口 黒 士 里 灬
黤 : 乙 并 口 土 大 日 灬 里 奄 黒
黥 : 口 黒 小 里 亠 灬
黧 : ノ 并 勹 口 土 木 灬 禾 里 黒
黨 : 口 黒 ⺌ 里 冖 灬
黬 : 一 ノ 并 厂 口 土 戈 灬 里 黒
黭 : 一 𠆢 并 口 土 廾 灬 里 黒
黮 : 一 ｜ 儿 ハ 并 匚 口 土 灬 甘 里 黒
黯 : 音 黒 日 里 立 灬
黰 : 一 ハ 并 匕 十 口 土 灬 目 貝 里 黒
黱 : 一 并 口 土 大 月 灬 里 黒
黲 : 𠆢 并 厶 口 土 彡 灬 里 黒
黴 : 黒 山 里 彳 攵 灬
黵 : ハ 并 勹 厂 口 土 灬 言 里 黒
黶 : 犬 黒 日 里 厂 灬
黷 : 貝 目 ハ 黒 士 里 儿 囗 灬
黸 : 并 匕 卜 厂 口 土 灬 田 皿 虍 里 黒
黹 : ハ 冂 黹 并
黻 : ハ 丶 冂 攵 黹 并
黼 : 十 ハ 用 丶 冂 黹 并
黽 : 黽
黿 : 二 儿 元 黽
鼂 : 一 日 黽
鼃 : 土 黽
鼇 : 土 方 攵 黽
鼈 : 小 ⺌ 冂 攵 黽
鼉 : 一 口 田 黽
鼎 : ｜ 一 鼎 片 目 爿
鼏 : 一 ｜ 冖 爿 片 目 鼎
鼐 : 一 ｜ 乃 爿 片 目 鼎
鼑 : 一 ｜ 卜 爿 片 目 鼎
鼒 : 一 ｜ ノ 亅 爿 片 目 鼎
鼓 : 口 士 支 豆 并 又 十 鼓
鼔 : 并 十 卜 又 口 士 支 豆 鼓
鼕 : 鼓 口 士 支 ハ 冫 夂 又 十 豆
鼖 : 并 十 又 口 士 廾 ⺾ 支 豆 鼓
鼗 : 丶 ノ 儿 并 冫 十 又 口 士 支 豆 鼓
鼙 : ノ 并 十 又 口 士 支 日 白 豆 鼓
鼚 : 并 十 又 口 士 支 豆 長 鼓
鼛 : 并 十 卜 又 口 士 夂 支 豆 鼓
鼟 : 丶 ノ 并 十 又 口 士 支 豆 鼓
鼠 : 臼 鼠
鼡 : 用 ⺌
鼢 : ハ 刀 臼 鼠
鼦 : 刀 口 臼 鼠
鼪 : 生 臼 鼠
鼫 : 口 石 臼 鼠
鼬 : ｜ 臼 鼠 日 田
鼯 : 一 二 口 五 臼 鼠
鼱 : 二 亠 土 月 臼 青 鼠
鼲 : 冖 臼 車 鼠
鼴 : 匚 女 日 臼 鼠
鼷 : 大 幺 爪 臼 鼠
鼹 : 女 宀 日 臼 鼠
鼺 : 田 臼 鼠
鼻 : 自 田 廾 鼻
鼼 : ｜ 廾 田 目 自 鼻
鼽 : 九 廾 田 目 自 鼻
鼾 : 干 自 田 鼻 目 廾
鼿 : 一 儿 廾 田 目 自 鼻
齁 : 勹 口 廾 田 目 自 鼻
齃 : 人 勹 廾 日 曰 田 目 自 鼻
齄 : 一 廾 日 曰 木 田 目 自 鼻
齅 : 丶 大 廾 犬 田 目 自 鼻
齆 : 乙 口 巛 已 廾 ⻏ 巴 田 目 自 鼻
齇 : 一 匕 卜 厂 廾 田 目 自 虍 鼻
齊 : 齊 亠 刀 氏 廾
齋 : 小 齊 元 刀 氏 廾
齎 : 貝 目 ハ 亠 齊 刀 氏 廾
齏 : 亠 齊 韭 刀 氏 廾
齒 : 止 歯 人 凵 米
齓 : 一 乙 人 凵 止 歯
齔 : 止 歯 米 凵 匕
齕 : 一 ノ 乙 人 凵 止 歯
齖 : 一 人 凵 止 牙 歯
齗 : 一 人 凵 斤 止 歯
齘 : 一 ｜ ノ 人 𠆢 凵 止 歯
齚 : 一 ｜ ノ 人 凵 止 歯
齝 : 一 𠆢 凵 厶 口 止 歯
齞 : 一 人 ハ 凵 口 止 歯
齟 : 止 歯 米 目 凵
齠 : 口 止 歯 刀 米 凵
齡 : 止 歯 人 𠆢 凵 卩 米
齢 : 止 歯 米 𠆢 凵 卩
齣 : 口 止 歯 米 凵 勹
齦 : 艮 止 歯 米 凵
齧 : 止 歯 土 刀 米 亠 凵
齨 : 一 人 凵 止 臼 歯
齩 : 一 亠 人 凵 止 父 歯
齪 : 口 止 歯 足 米 凵
齬 : 口 止 歯 米 凵 五
齭 : 一 ノ 人 凵 斤 止
齮 : 一 亅 人 凵 口 大 止 歯
齯 : 一 人 儿 凵 止 臼 歯
齰 : 一 ｜ 二 人 凵 日 止 歯
齱 : 一 人 凵 又 止 耳 歯
齲 : ノ 止 歯 虫 米 冂 凵 禸
齳 : 一 人 冖 凵 止 車 歯
齵 : 一 人 冂 凵 厶 日 止 田 禸 歯
齶 : 口 止 歯 二 米 凵 勹
齷 : 止 至 歯 土 米 凵 厶 尸
齺 : 一 人 凵 勹 屮 止 歯
齽 : 一 二 人 凵 小 木 止 示 歯
龍 : 月 立
龏 : 一 乙 廾 月 立 竜
龐 : 一 乙 广 月 立 竜
龑 : 一 乙 大 月 立 竜
龒 : 一 乙 二 小 月 示 立 竜
龔 : 一 ｜ 乙 二 ハ 月 立 竜
龕 : 月 口 立 𠆢
龖 : 一 乙 月 立 竜
龗 : 一 乙 二 冖 口 月 立 雨 竜
龜 : 亀 乙 勹 田
龝 : 禾 亀 乙 勹 田
龞 : 一 ｜ 丶 ノ 乙 ハ 并 冂 勹 巾 ヨ 攵
龠 : 一 口 𠆢 龠 冊
龡 : 一 ｜ 亅 人 𠆢 冂 勹 口 廾 欠 冊 龠
龢 : 一 ｜ ノ 亅 𠆢 冂 口 廾 木 禾 冊 龠
龣 : 一 ｜ 亅 𠆢 冂 口 廾 ヨ 水 冊 龠
龥 : 一 ｜ 亅 𠆢 ハ 冂 口 廾 目 冊 貝 頁 龠
欄 : 并 口 木 門
廊 : 广 ⻏ 艮
朗 : 月 艮
虜 : 力 匕 十 卜 厂 口 田 虍
殺 : 丶 ノ 几 又 木 殳
類 : 丶 ハ 大 犬 目 米 貝 頁
隆 : 一 夂 ⻖ 生
﨏 : 𠆢 ハ 口 土 谷
塚 : 丶 冖 土 豕
﨑 : 一 亅 亠 并 口 山 立
﨓 : 人 ⺅ 勹 寸 ⺾ 欠
﨔 : 一 ハ ⺌ 手 木
凞 : 冫 匚 卩 灬 臣
猪 : 丶 ノ 土 犭 ⺹ 日
神 : ｜ 二 小 日 田 示
祥 : 二 并 小 王 示 羊
福 : 一 二 口 小 田 示
﨟 : 人 勹 ⺾ 日 月
蘒 : 丶 ノ 勹 ヨ ⺾ 木 禾 黽
﨡 : 生 虫
諸 : 丶 ノ 土 ⺹ 日 言
﨤 : 又 辶 尸
都 : 丶 ノ 土 ⻏ ⺹ 日
侮 : 一 ノ ⺅ 毋 母
僧 : ｜ ⺅ ハ 并 口 日
免 : 一 ｜ ノ 乙 儿 刀 勹 口 免
勉 : ノ 儿 力 勹 口 免
勤 : 二 力 十 口 廾 革
卑 : ノ 十 日 白
喝 : 人 勹 口 日
嘆 : 十 口 大 廾 革
器 : 丶 口 大 犬
塀 : 一 十 土 尸 干
墨 : 并 口 土 灬 里 黒
層 : ｜ ハ 并 口 尸 日
屮 : ｜ 凵
悔 : 一 ノ 忄 毋 母
慨 : 忄 牙 艮
憎 : ｜ ハ 并 口 忄 日
懲 : 一 ノ 土 山 彳 心 攵 王
敏 : 一 ノ 攵 毋 母
既 : 牙 艮
暑 : 丶 ノ 土 ⺹ 日
梅 : 一 ノ 木 毋 母
海 : 一 ノ 犭 毋 母
渚 : 丶 ノ 土 氵 ⺹ 日
漢 : 十 口 大 廾 氵 革
煮 : 丶 ノ 土 ⺹ 日 灬
爫 : 爪
琢 : 丶 王 豕
碑 : ノ 十 口 日 白 石
社 : 二 土 小 示
祉 : 二 小 止 示
祈 : 二 小 斤 示
祐 : 一 ノ 二 口 小 示
祖 : 一 二 小 目 示
祝 : 二 儿 口 小 示
禍 : 二 冂 口 囗 小 示
禎 : 二 ハ 卜 小 目 示 貝
穀 : 一 ノ 冖 几 又 士 木 殳 禾
突 : 丶 ハ 大 宀 犬 穴
節 : 卩 竹 艮
練 : 并 口 小 幺 木 糸
縉 : ｜ 二 并 小 幺 日 糸
繁 : 一 ノ 小 幺 攵 毋 母 糸
署 : ノ 土 ⺹ 日 罒
者 : 丶 ノ 土 ⺹ 日
臭 : 丶 大 犬 目 自
艹 : ｜ 卜
艹 : 十 ⺾
著 : 丶 ノ 土 ⺾ ⺹ 日
褐 : 人 勹 日 衤
視 : 二 儿 小 目 示 見
謁 : 人 勹 日 言
謹 : 二 十 口 廾 言 革
賓 : 一 ノ ハ 宀 小 目 貝
贈 : ｜ ハ 并 口 日 目 貝
辶 : 辶
逸 : 一 ｜ 丶 儿 勹 辶 口 免
難 : 十 口 大 廾 隹 革
響 : 幺 ⻏ 日 立 艮
頻 : ハ 小 止 目 貝 頁
𠀋 : 一 丶 ノ
𠂉 : 一 ノ
𠂢 : ノ 斤
𠂤 : 口
𠆢 : 𠆢
𠈓 : 一 ｜ ⺅ 冂 凵 山
𠌫 : 一 ｜ ⺅ 田
𠍱 : ⺅ 木 隹
𠎁 : ⺅ 并 灬 里 黒
𠏹 : 丶 ⺅ 囗 王 西
𠑊 : 一 ｜ 二 ⺅ 厂 ⺌ 攵 耳
𠔉 : 丶 ノ 二 ハ
𠗖 : 𠆢 ハ 冫 口 谷
𠘨 : 几
𠝏 : 一 人 𠆢 刀 口
𠠇 : 一 ｜ ノ 刀 刂 厶
𠠺 : 二 儿 力 元
𠢹 : ハ 力 广 田 黄
𠥼 : 十 斗
𠦝 : 十 日
𠫓 : 亠 厶
𠬝 : 卩 又
𠮟 : 匕 口
𠵅 : ⺅ 匕 口 ⺾
𠷡 : 一 𠆢 口 目 自
𠹤 : 口 土 心
𠹭 : 亅 口
𠺕 : ノ 刀 厶 口 田
𠽟 : 口 癶 虫
𡈁 : 囗 日 王 白
𡈽 : 丶 土
𡉕 : 丶 九 土
𡉴 : ノ 土
𡉻 : 十 九 土
𡋗 : 二 𠆢 厶 土
𡋤 : 丶 土 尸
𡋽 : 土 赤
𡌛 : 又 土 田
𡌶 : 一 ｜ 并 土
𡍄 : 十 口 土 尸
𡏄 : 二 土 小 目 示
𡑭 : 一 ｜ 𠆢 并 口 土 日
𡑮 : 一 丶 ノ 二 土 宀
𡗗 : 一 二 人
𡙇 : 一 ノ 日
𡚴 : 女 山
𡜆 : 乙 刀 女 已 巴
𡝂 : 士 女 爿
𡢽 : 女 田 雨
𡧃 : 亅 二 宀
𡱖 : 一 ノ 尸 木
𡴭 : 乙 山
𡵅 : 山 川
𡵢 : 一 ノ 山 攵
𡵸 : 尸 山
𡶒 : ｜ ノ 山 弓
𡶜 : 丶 山 斤
𡶡 : ｜ 二 并 十 山
𡶷 : 夕 山 舛
𡷠 : 几 又 山 扌 殳
𡸳 : 一 ｜ 儿 十 山
𡸴 : 一 人 𠆢 口 山
𡼞 : ノ 土 山 ⻏ ⺹ 日
𡽶 : 山 廾 田 目 自 鼻
𡿺 : 丶 ノ 口 巛
𢅻 : ｜ 冂 又 巾 隹
𢈘 : 一 ｜ 丶 ノ 广
𢌞 : 冂 已 廴
𢎭 : ｜ 冂 巾 弓
𢛳 : 一 十 心 罒
𢡛 : ｜ 二 冂 凵 山 氵 心
𢢫 : 一 二 人 心 日 木
𢦏 : ノ 十 土 弋
𢪸 : 乙 卩 夕 手
𢭆 : ノ 乃 扌 木 禾
𢭏 : 一 ノ 二 寸 扌
𢭐 : 冖 力 ⺌ 扌
𢮦 : 一 人 𠆢 口 扌
𢰝 : ノ 厂 扌 ⺾ 戈
𢰤 : 亅 口 扌 立
𢷡 : 一 人 冂 扌 木
𣆶 : 一 ｜ 儿 勹 口 日 免
𣇃 : ｜ 二 人 并 日
𣇄 : 扌 斤 日
𣇵 : 日 月
𣍲 : 一 二 女 月 五
𣏐 : 夕 木
𣏒 : 丶 九 木
𣏓 : 二 勹 木
𣏕 : 儿 十 木
𣏚 : 木 氏
𣏟 : 儿 十
𣏤 : 木 父
𣑊 : 一 ｜ ノ 土 木
𣑋 : 宀 寸 木
𣑑 : 子 宀 木
𣑥 : 一 ノ 亅 土 ⺹ 木
𣓤 : 一 ｜ 儿 十 木
𣕚 : ノ ⺾ 戈 木
𣖔 : 厂 子 日 木
𣗄 : 亠 川 ⺾ 亡 木
𣘸 : 木 灬 里 黒
𣘹 : ハ 宀 木 田
𣘺 : 一 ｜ ノ 冂 口 木
𣙇 : 土 木 隹
𣜌 : 木 臼 鼠
𣜜 : 冂 厶 ⺾ 日 木 田 禸
𣜿 : 一 ｜ ⺾ 木 世
𣝣 : 寸 木 罒 艮
𣝤 : 辶 山 木 隹
𣟧 : 一 ｜ ハ 辶 口 木 目 貝
𣟿 : 冫 ⺾ 日 木
𣠤 : 一 ノ 儿 大 木 目 矢 見 隹
𣠽 : 一 冂 凵 十 口 廾 月 木 西 革
𣪘 : 几 匕 又 日 殳 白
𣱿 : 入 氵
𣳾 : 亅 二 人 并 冫
𣴀 : 刀 氵
𣴎 : 并 水 王 羊
𣵀 : 工 氵 日
𣷓 : ノ 口 氵 木 禾
𣷹 : ノ 大 氵 水
𣷺 : 冫 又 氵 羽
𣽾 : 儿 氵 目 立 見
𤂖 : 亠 口 小 彡 氵 日
𤄃 : 口 氵 舌 門
𤇆 : 囗 火
𤇾 : 冖 火
𤎼 : 丶 亠 口 小 尢 火 尤
𤘩 : 又 牛
𤚥 : 一 𠆢 厶 口 牛
𤟱 : 一 ノ 夂 犭 日
𤢖 : 口 犭 木
𤩍 : 一 二 人 𠆢 大 王
𤭖 : 一 丶 乙 厶 長
𤭯 : 一 丶 乙 日 水 白
𤰖 : 又 田
𤴔 : 止 疋
𤸎 : ノ 亅 人 日 疒
𤸷 : ｜ ノ 冂 口 巾 ヨ 疒
𤹪 : 匚 口 疒 品
𤺋 : 𠆢 彡 疒 車
𥁊 : 一 夂 皿
𥁕 : 人 囗 皿
𥄢 : 木 目
𥆩 : ｜ 儿 日 目
𥇍 : 十 卜 日 目
𥇥 : 一 人 𠆢 口 目
𥈞 : ｜ 二 冂 凵 山 目
𥉌 : 一 𠆢 口 ⺾ 目
𥐮 : 口 尸 石
𥒎 : 二 口 戈 石
𥓙 : 口 木 石
𥔎 : 一 亅 口 石 立
𥖧 : 匕 口 灬 石 鳥
𥝱 : ノ 亅 マ 木 禾
𥞩 : 一 ノ 并 廾 木 禾
𥞴 : ノ 口 土 木 禾
𥧄 : 乙 ハ 勹 宀 田 穴 亀
𥧔 : ハ 宀 气 穴 米
𥫣 : 一 勹 竹
𥫤 : 弓 竹
𥫱 : ノ 乙 凵 屯 竹
𥮲 : 竹 長
𥱋 : 丶 刀 氵 木 竹
𥱤 : ｜ ⺅ 彡 攵 竹
𥶡 : 一 ｜ 亅 𠆢 冂 廾 冊 竹 車
𥸮 : 土 米
𥹖 : 又 皮 米
𥹢 : 米 耳
𥹥 : ⺌ ヨ 米
𥻂 : 并 口 木 米
𥻘 : 夕 巛 米 舛
𥻨 : 一 冖 十 宀 小 幺 米 糸
𥼣 : 一 ｜ ノ 灬 米 無
𥽜 : 匕 卜 厂 心 田 米 虍
𥿔 : ノ 土 小 幺 糸
𥿠 : 一 ｜ ノ 冂 小 巾 幺 糸
𥿻 : 匕 小 幺 日 糸
𦀌 : 口 女 小 幺 糸
𦀗 : 土 小 幺 糸 赤
𦁠 : 小 幺 日 月 糸
𦃭 : 小 山 幺 糸 鳥
𦉰 : 一 并 冂
𦊆 : 止 罒
𦍌 : 并 王
𦐂 : 冫 戈 羽
𦙾 : 又 土 月
𦚰 : 刀 月
𦜝 : ｜ ノ 廾 文 月 斉
𦣝 : ｜ 匚 臣
𦣪 : 一 ノ 匚 口 皿 臣
𦥑 : 臼
𦥯 : 冖 爻 臼
𦧝 : 一 口 廴 止 疋 舌
𦨞 : 一 ｜ 丶 二 儿 冂 元 舟
𦩘 : 一 ｜ 丶 冂 宀 疋 舟
𦪌 : 一 ｜ 丶 亅 冂 口 大 宀 舟
𦪷 : 一 ｜ 丶 并 冂 土 灬 舟 里 黒
𦫿 : 又 ⺾
𦰩 : 二 人 口 ⺾
𦱳 : 一 并 凵 幺
𦳝 : 一 ノ 勹 ⺾ 曰 勿
𦹀 : 小 幺 ⺾ 田 糸
𦹥 : ⺾ ⻖ 長
𦾔 : ｜ ⺾ 日 隹
𦿶 : 一 并 刀 刂 弓 ⺾ 月
𦿷 : 乙 勹 犭 ⺾ 田 亀
𦿸 : 一 廴 ⺾ 止 疋 虫
𧃴 : 一 ⺅ 宀 小 幺 ⺾ 日 白 糸
𧄍 : 一 儿 冫 土 ⺾ 羽
𧄹 : ⺾ 戈 日 立 言 音
𧏚 : 一 冖 几 又 士 殳 虫
𧏛 : 寸 虫 言
𧏾 : 一 ノ 匚 口 ⺾ 虫
𧐐 : 一 ｜ 二 ハ 土 目 虫 貝
𧑉 : 目 自 虫
𧘔 : 一 ｜ 卜 衤
𧘕 : 一 卜 衤
𧘱 : 匕 比 衤
𧚄 : 亅 戈 手 衤
𧚓 : ｜ 冂 巾 氏 衤
𧜎 : 一 ハ ⺌ 手 衤
𧜣 : 灬 衤 鳥
𧝒 : ハ 田 衤 黄
𧦅 : 丶 ノ 匚 言
𧪄 : ⺅ 言
𧮳 : 𠆢 ハ 口 甘 谷
𧮾 : 一 二 人 𠆢 ハ 口 大 爪 谷
𧯇 : 乙 𠆢 ハ 口 田 立 谷 竜
𧲸 : 卜 口 豸
𧶠 : 儿 ハ 囗 士 目 貝
𧸐 : 二 ハ 弋 目 貝
𧾷 : 口 止 足
𨂊 : 冂 口 土 止 足
𨂻 : ｜ 口 日 止 爪 足
𨉷 : 𠆢 ハ 口 宀 谷 身
𨊂 : 并 灬 身 里 黒
𨋳 : 囗 大 車
𨏍 : 冖 木 火 車
𨐌 : 一 二 并 十 王 立 羊 辛
𨑕 : 辶 口
𨕫 : ｜ 辶 日 礻
𨗈 : 亠 辶 口 小 日
𨗉 : 儿 辶 宀 豕
𨛗 : 乙 口 已 ⻏ 巴
𨛺 : 一 ｜ 二 ハ ⻏
𨥆 : ノ 入 久 金
𨥉 : 山 金
𨥫 : ノ 卩 金
𨦇 : 一 二 人 并 大 金
𨦈 : ｜ 日 金
𨦺 : 乙 口 已 巴 金
𨦻 : 力 田 金
𨨞 : 斤 父 金
𨨩 : ｜ 口 心 金
𨩃 : 一 二 人 日 金
𨩱 : 亠 并 厂 彡 立 金
𨪙 : ｜ 冫 寸 爪 金
𨫍 : 一 ｜ 十 心 日 金
𨫝 : 一 ノ 大 矢 金 隹
𨫤 : マ 辶 用 金
𨯁 : マ 辶 木 用 金
𨯯 : 一 ｜ ハ 辶 口 目 貝 金
𨴐 : ノ 儿 土 門
𨵱 : 一 厶 土 尸 至 門
𨷻 : 小 幺 糸 言 門
𨸟 : 丶 ノ 匚 ⻖
𨸶 : 一 ｜ 二 ハ 十 干 ⻖
𨺉 : ⻖ 木 爪
𨻫 : 乙 ⻖ 田 立 竜
𨼲 : 𠆢 厶 ⺾ ⻖ 長
𨿸 : 一 二 人 大 爪 隹
𩊠 : 一 儿 十 口 ⺌ 廾 革
𩊱 : 一 ノ 十 口 廾 毋 母 革
𩒐 : 一 ハ 厶 土 目 貝 頁
𩗏 : ノ 冂 虫 西 風
𩙿 : 一 ｜ 𠆢 食
𩛰 : 一 丶 亅 冫 食
𩜙 : 一 ｜ 儿 十 食
𩝐 : 一 并 厶 幺 食
𩣆 : 一 并 十 干 馬
𩩲 : 人 冂 冖 勹 日 月 骨
𩷛 : ｜ 勹 月 灬 田 角 魚
𩸕 : 灬 田 長 魚
𩸽 : ⺅ 匕 ⺾ 灬 田 魚
𩹉 : 灬 田 飛 魚
𩺊 : 亠 川 ⺾ 亡 灬 田 魚
𩻄 : 灬 田 罒 豕 魚
𩻛 : 一 ノ 乙 日 灬 田 魚
𩻩 : 止 灬 田 魚
𩿎 : 亅 マ 灬 鳥
𪀚 : ノ 戈 灬 鳥
𪀯 : 一 ノ ⺌ 灬 鳥
𪂂 : 十 日 灬 鳥
𪃹 : 卩 灬 艮 鳥
𪆐 : 木 灬 隹 鳥
𪎌 : 一 并 夂 木 米 麦
𪐷 : ｜ 二 亠 并 口 幺 灬 玄 里 黒
𪗱 : 一 凵 止 目 米 歯
𪘂 : 一 凵 刀 土 止 米 歯
𪘚 : 一 二 凵 口 止 五 米 歯
𪚲 : 乙 勹 月 田 亀
