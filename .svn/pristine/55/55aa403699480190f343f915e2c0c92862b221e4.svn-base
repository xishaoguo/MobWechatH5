define(['backbone'],function(Backbone){
	/**
	 * 常量类 城市，机场，地址等
	 */
	var constant = {
			//酒店城市 TODO
			hotel_city:[
				{"cityCode":"A","cityName":"A","cityPinYin":"A","cityPYFW":"A"},
				{"cityCode":"ABA","cityName":"阿坝州","cityPinYin":"ABAZHOU","cityPYFW":"ABZ"},
				{"cityCode":"ACH","cityName":"阿城","cityPinYin":"ACHENG","cityPYFW":"AC"},
				{"cityCode":"AKU","cityName":"阿克苏","cityPinYin":"AKESU","cityPYFW":"AKS"},
				{"cityCode":"ALS","cityName":"阿拉善盟","cityPinYin":"ALASHANMENG","cityPYFW":"ALSM"},
				{"cityCode":"AAT","cityName":"阿勒泰","cityPinYin":"ALETAI","cityPYFW":"ALT"},
				{"cityCode":"ANJ","cityName":"安吉","cityPinYin":"ANJI","cityPYFW":"AJ"},
				{"cityCode":"AKA","cityName":"安康","cityPinYin":"ANKANG","cityPYFW":"AK"},
				{"cityCode":"ANL","cityName":"安陆","cityPinYin":"ANLU","cityPYFW":"AL"},
				{"cityCode":"AQG","cityName":"安庆","cityPinYin":"ANQING","cityPYFW":"AQ"},
				{"cityCode":"AOG","cityName":"鞍山","cityPinYin":"ANSHAN","cityPYFW":"AS"},
				{"cityCode":"ANS","cityName":"安顺","cityPinYin":"ANSHUN","cityPYFW":"AS"},
				{"cityCode":"ANT","cityName":"安图","cityPinYin":"ANTU","cityPYFW":"AT"},
				{"cityCode":"AYN","cityName":"安阳","cityPinYin":"ANYANG","cityPYFW":"AY"},
				{"cityCode":"MFM","cityName":"澳门","cityPinYin":"AOMEN","cityPYFW":"AM"},
				{"cityCode":"ATU","cityName":"阿图什","cityPinYin":"ATUSHI","cityPYFW":"ATS"},
				{"cityCode":"B","cityName":"B","cityPinYin":"B","cityPYFW":"B"},
				{"cityCode":"BAC","cityName":"白城","cityPinYin":"BAICHENG","cityPYFW":"BC"},
				{"cityCode":"BSI","cityName":"百色","cityPinYin":"BAISE","cityPYFW":"BS"},
				{"cityCode":"BAS","cityName":"白山","cityPinYin":"BAISHAN","cityPYFW":"BS"},
				{"cityCode":"BAD","cityName":"保定","cityPinYin":"BAODING","cityPYFW":"BD"},
				{"cityCode":"BAJ","cityName":"宝鸡","cityPinYin":"BAOJI","cityPYFW":"BJ"},
				{"cityCode":"BSD","cityName":"保山","cityPinYin":"BAOSHAN","cityPYFW":"BS"},
				{"cityCode":"BUT","cityName":"保亭","cityPinYin":"BAOTING","cityPYFW":"BT"},
				{"cityCode":"BAV","cityName":"包头","cityPinYin":"BAOTOU","cityPYFW":"BT"},
				{"cityCode":"BYZ","cityName":"巴彦淖尔","cityPinYin":"BAYANNAOER","cityPYFW":"BYNE"},
				{"cityCode":"BAZ","cityName":"巴中","cityPinYin":"BAZHONG","cityPYFW":"BZ"},
				{"cityCode":"BEA","cityName":"北安","cityPinYin":"BEIAN","cityPYFW":"BA"},
				{"cityCode":"BDH","cityName":"北戴河","cityPinYin":"BEIDAIHE","cityPYFW":"BDH"},
				{"cityCode":"BHY","cityName":"北海","cityPinYin":"BEIHAI","cityPYFW":"BH"},
				{"cityCode":"PEK","cityName":"北京","cityPinYin":"BEIJING","cityPYFW":"BJ"},
				{"cityCode":"BEN","cityName":"北宁","cityPinYin":"BEINING","cityPYFW":"BN"},
				{"cityCode":"BFU","cityName":"蚌埠","cityPinYin":"BENGBU","cityPYFW":"BB"},
				{"cityCode":"BEX","cityName":"本溪","cityPinYin":"BENXI","cityPYFW":"BX"},
				{"cityCode":"BIJ","cityName":"毕节","cityPinYin":"BIJIE","cityPYFW":"BJ"},
				{"cityCode":"BIZ","cityName":"滨州","cityPinYin":"BINZHOU","cityPYFW":"BZ"},
				{"cityCode":"BOA","cityName":"博鳌镇","cityPinYin":"BOAO","cityPYFW":"BA"},
				{"cityCode":"BOL","cityName":"博乐","cityPinYin":"BOLE","cityPYFW":"BL"},
				{"cityCode":"BOX","cityName":"博兴","cityPinYin":"BOXING","cityPYFW":"BX"},
				{"cityCode":"BOZ","cityName":"亳州","cityPinYin":"BOZHOU","cityPYFW":"BZ"},
				{"cityCode":"C","cityName":"C","cityPinYin":"C","cityPYFW":"C"},
				{"cityCode":"CAZ","cityName":"沧州","cityPinYin":"CANGZHOU","cityPYFW":"CZ"},
				{"cityCode":"CGQ","cityName":"长春","cityPinYin":"CHANGCHUN","cityPYFW":"ZC"},
				{"cityCode":"CGD","cityName":"常德","cityPinYin":"CHANGDE","cityPYFW":"CD"},
				{"cityCode":"CDU","cityName":"昌都","cityPinYin":"CHANGDU","cityPYFW":"CD"},
				{"cityCode":"CGE","cityName":"长葛","cityPinYin":"CHANGGE","cityPYFW":"ZG"},
				{"cityCode":"CHJ","cityName":"昌吉","cityPinYin":"CHANGJI","cityPYFW":"CJ"},
				{"cityCode":"CHN","cityName":"常宁","cityPinYin":"CHANGNING","cityPYFW":"CN"},
				{"cityCode":"CSX","cityName":"长沙","cityPinYin":"CHANGSHA","cityPYFW":"ZS"},
				{"cityCode":"CHS","cityName":"常熟","cityPinYin":"CHANGSHU","cityPYFW":"CS"},
				{"cityCode":"CIH","cityName":"长治","cityPinYin":"CHANGZHI","cityPYFW":"ZZ"},
				{"cityCode":"CZX","cityName":"常州","cityPinYin":"CHANGZHOU","cityPYFW":"CZ"},
				{"cityCode":"CHU","cityName":"巢湖","cityPinYin":"CHAOHU","cityPYFW":"CH"},
				{"cityCode":"CHG","cityName":"朝阳","cityPinYin":"CHAOYANG","cityPYFW":"CY"},
				{"cityCode":"CHY","cityName":"潮阳","cityPinYin":"CHAOYANG","cityPYFW":"CY"},
				{"cityCode":"CZH","cityName":"潮州","cityPinYin":"CHAOZHOU","cityPYFW":"CZ"},
				{"cityCode":"CHD","cityName":"承德","cityPinYin":"CHENGDE","cityPYFW":"CD"},
				{"cityCode":"CTU","cityName":"成都","cityPinYin":"CHENGDU","cityPYFW":"CD"},
				{"cityCode":"CHA","cityName":"澄海","cityPinYin":"CHENGHAI","cityPYFW":"CH"},
				{"cityCode":"CEZ","cityName":"郴州","cityPinYin":"CHENZHOU","cityPYFW":"CZ"},
				{"cityCode":"CHB","cityName":"赤壁","cityPinYin":"CHIBI","cityPYFW":"CB"},
				{"cityCode":"CIF","cityName":"赤峰","cityPinYin":"CHIFENG","cityPYFW":"CF"},
				{"cityCode":"CZU","cityName":"池州","cityPinYin":"CHIZHOU","cityPYFW":"CZ"},
				{"cityCode":"CKG","cityName":"重庆","cityPinYin":"CHONGQING","cityPYFW":"CQ"},
				{"cityCode":"CHZ","cityName":"崇州","cityPinYin":"CHONGZHOU","cityPYFW":"CZ"},
				{"cityCode":"CZS","cityName":"崇左","cityPinYin":"CHONGZUO","cityPYFW":"CZ"},
				{"cityCode":"CHX","cityName":"楚雄","cityPinYin":"CHUXIONG","cityPYFW":"CX"},
				{"cityCode":"CUZ","cityName":"滁州","cityPinYin":"CHUZHOU","cityPYFW":"CZ"},
				{"cityCode":"CIX","cityName":"慈溪","cityPinYin":"CIXI","cityPYFW":"CX"},
				{"cityCode":"COH","cityName":"从化","cityPinYin":"CONGHUA","cityPYFW":"CH"},
				{"cityCode":"D","cityName":"D","cityPinYin":"D","cityPYFW":"D"},
				{"cityCode":"DAA","cityName":"大安","cityPinYin":"DAAN","cityPYFW":"DA"},
				{"cityCode":"DAF","cityName":"大丰","cityPinYin":"DAFENG","cityPYFW":"DF"},
				{"cityCode":"DLU","cityName":"大理","cityPinYin":"DALI","cityPYFW":"DL"},
				{"cityCode":"DLC","cityName":"大连","cityPinYin":"DALIAN","cityPYFW":"DL"},
				{"cityCode":"DDG","cityName":"丹东","cityPinYin":"DANDONG","cityPYFW":"DD"},
				{"cityCode":"DAY","cityName":"当阳","cityPinYin":"DANGYANG","cityPYFW":"DY"},
				{"cityCode":"DAJ","cityName":"丹江口","cityPinYin":"DANJIANGKOU","cityPYFW":"DJK"},
				{"cityCode":"DYA","cityName":"丹阳","cityPinYin":"DANYANG","cityPYFW":"DY"},
				{"cityCode":"DAZ","cityName":"儋州","cityPinYin":"DANZHOU","cityPYFW":"DZ"},
				{"cityCode":"DAQ","cityName":"大庆","cityPinYin":"DAQING","cityPYFW":"DQ"},
				{"cityCode":"DSQ","cityName":"大石桥","cityPinYin":"DASHIQIAO","cityPYFW":"DSQ"},
				{"cityCode":"DAT","cityName":"大同","cityPinYin":"DATONG","cityPYFW":"DT"},
				{"cityCode":"DAX","cityName":"大兴安岭","cityPinYin":"DAXINGANLING","cityPYFW":"DXAL"},
				{"cityCode":"DYE","cityName":"大冶","cityPinYin":"DAYE","cityPYFW":"DY"},
				{"cityCode":"DZH","cityName":"达州","cityPinYin":"DAZHOU","cityPYFW":"DZ"},
				{"cityCode":"DEL","cityName":"德令哈","cityPinYin":"DELINGHA","cityPYFW":"DLH"},
				{"cityCode":"DEF","cityName":"登封","cityPinYin":"DENGFENG","cityPYFW":"DF"},
				{"cityCode":"DEZ","cityName":"邓州","cityPinYin":"DENGZHOU","cityPYFW":"DZ"},
				{"cityCode":"DEQ","cityName":"德清","cityPinYin":"DEQING","cityPYFW":"DQ"},
				{"cityCode":"DXX","cityName":"德兴","cityPinYin":"DEXING","cityPYFW":"DX"},
				{"cityCode":"DEY","cityName":"德阳","cityPinYin":"DEYANG","cityPYFW":"DY"},
				{"cityCode":"DZO","cityName":"德州","cityPinYin":"DEZHOU","cityPYFW":"DZ"},
				{"cityCode":"DNA","cityName":"定安","cityPinYin":"DINGAN","cityPYFW":"DA"},
				{"cityCode":"DIX","cityName":"定西","cityPinYin":"DINGXI","cityPYFW":"DX"},
				{"cityCode":"DIG","cityName":"迪庆","cityPinYin":"DIQING","cityPYFW":"DQ"},
				{"cityCode":"DIQ","cityName":"迪庆州","cityPinYin":"DIQINGZHOU","cityPYFW":"DQZ"},
				{"cityCode":"DGM","cityName":"东莞","cityPinYin":"DONGGUAN","cityPYFW":"DG"},
				{"cityCode":"DOT","cityName":"东台","cityPinYin":"DONGTAI","cityPYFW":"DT"},
				{"cityCode":"DOX","cityName":"东兴","cityPinYin":"DONGXING","cityPYFW":"DX"},
				{"cityCode":"DYN","cityName":"东阳","cityPinYin":"DONGYANG","cityPYFW":"DY"},
				{"cityCode":"DOY","cityName":"东营","cityPinYin":"DONGYING","cityPYFW":"DY"},
				{"cityCode":"DOJ","cityName":"都江堰","cityPinYin":"DUJIANGYAN","cityPYFW":"DJY"},
				{"cityCode":"DUH","cityName":"敦化","cityPinYin":"DUNHUA","cityPYFW":"DH"},
				{"cityCode":"DNH","cityName":"敦煌","cityPinYin":"DUNHUANG","cityPYFW":"DH"},
				{"cityCode":"DUJ","cityName":"都匀","cityPinYin":"DUYUN","cityPYFW":"DY"},
				{"cityCode":"E","cityName":"E","cityPinYin":"E","cityPYFW":"E"},
				{"cityCode":"ERD","cityName":"鄂尔多斯","cityPinYin":"EERDUOSI","cityPYFW":"EEDS"},
				{"cityCode":"EMS","cityName":"峨眉山","cityPinYin":"EMEISHAN","cityPYFW":"EMS"},
				{"cityCode":"ENP","cityName":"恩平","cityPinYin":"ENPING","cityPYFW":"EP"},
				{"cityCode":"ENH","cityName":"恩施","cityPinYin":"ENSHI","cityPYFW":"ES"},
				{"cityCode":"ERL","cityName":"二连浩特","cityPinYin":"ERLIANHAOTE","cityPYFW":"ELHT"},
				{"cityCode":"EZH","cityName":"鄂州","cityPinYin":"EZHOU","cityPYFW":"EZ"},
				{"cityCode":"F","cityName":"F","cityPinYin":"F","cityPYFW":"F"},
				{"cityCode":"FAC","cityName":"防城港","cityPinYin":"FANGCHENGGANG","cityPYFW":"FCG"},
				{"cityCode":"FCG","cityName":"肥城","cityPinYin":"FEICHENG","cityPYFW":"FC"},
				{"cityCode":"FEC","cityName":"丰城","cityPinYin":"FENGCHENG","cityPYFW":"FC"},
				{"cityCode":"FEH","cityName":"奉化","cityPinYin":"FENGHUA","cityPYFW":"FH"},
				{"cityCode":"FHX","cityName":"凤凰县","cityPinYin":"FENGHUANGXIAN","cityPYFW":"FHX"},
				{"cityCode":"FUO","cityName":"佛山","cityPinYin":"FOSHAN","cityPYFW":"FS"},
				{"cityCode":"FUA","cityName":"福安","cityPinYin":"FUAN","cityPYFW":"FA"},
				{"cityCode":"FUD","cityName":"福鼎","cityPinYin":"FUDING","cityPYFW":"FD"},
				{"cityCode":"FUK","cityName":"阜康","cityPinYin":"FUKANG","cityPYFW":"FK"},
				{"cityCode":"FUQ","cityName":"福清","cityPinYin":"FUQING","cityPYFW":"FQ"},
				{"cityCode":"FUS","cityName":"抚顺","cityPinYin":"FUSHUN","cityPYFW":"FS"},
				{"cityCode":"FUX","cityName":"阜新","cityPinYin":"FUXIN","cityPYFW":"FX"},
				{"cityCode":"FUG","cityName":"阜阳","cityPinYin":"FUYANG","cityPYFW":"FY"},
				{"cityCode":"FUY","cityName":"富阳","cityPinYin":"FUYANG","cityPYFW":"FY"},
				{"cityCode":"FOC","cityName":"福州","cityPinYin":"FUZHOU","cityPYFW":"FZ"},
				{"cityCode":"FUZ","cityName":"抚州","cityPinYin":"FUZHOU","cityPYFW":"FZ"},
				{"cityCode":"G","cityName":"G","cityPinYin":"G","cityPYFW":"G"},
				{"cityCode":"GZH","cityName":"赣州","cityPinYin":"GANZHOU","cityPYFW":"GZ"},
				{"cityCode":"GAZ","cityName":"甘孜州","cityPinYin":"GANZIZHOU","cityPYFW":"GZZ"},
				{"cityCode":"GAC","cityName":"藁城","cityPinYin":"GAOCHENG","cityPYFW":"GC"},
				{"cityCode":"GAM","cityName":"高明","cityPinYin":"GAOMING","cityPYFW":"GM"},
				{"cityCode":"GAY","cityName":"高邮","cityPinYin":"GAOYOU","cityPYFW":"GY"},
				{"cityCode":"GOQ","cityName":"格尔木","cityPinYin":"GEERMU","cityPYFW":"GEM"},
				{"cityCode":"GEJ","cityName":"个旧","cityPinYin":"GEJIU","cityPYFW":"GJ"},
				{"cityCode":"GOY","cityName":"巩义","cityPinYin":"GONGYI","cityPYFW":"GY"},
				{"cityCode":"GUA","cityName":"广安","cityPinYin":"GUANGAN","cityPYFW":"GA"},
				{"cityCode":"GHN","cityName":"广汉","cityPinYin":"GUANGHAN","cityPYFW":"GH"},
				{"cityCode":"GUS","cityName":"广水","cityPinYin":"GUANGSHUI","cityPYFW":"GS"},
				{"cityCode":"GUY","cityName":"广元","cityPinYin":"GUANGYUAN","cityPYFW":"GY"},
				{"cityCode":"CAN","cityName":"广州","cityPinYin":"GUANGZHOU","cityPYFW":"GZ"},
				{"cityCode":"GUG","cityName":"贵港","cityPinYin":"GUIGANG","cityPYFW":"GG"},
				{"cityCode":"KWL","cityName":"桂林","cityPinYin":"GUILIN","cityPYFW":"GL"},
				{"cityCode":"GUP","cityName":"桂平","cityPinYin":"GUIPING","cityPYFW":"GP"},
				{"cityCode":"GUX","cityName":"贵溪","cityPinYin":"GUIXI","cityPYFW":"GX"},
				{"cityCode":"KWE","cityName":"贵阳","cityPinYin":"GUIYANG","cityPYFW":"GY"},
				{"cityCode":"H","cityName":"H","cityPinYin":"H","cityPYFW":"H"},
				{"cityCode":"HRB","cityName":"哈尔滨","cityPinYin":"HAERBIN","cityPYFW":"HEB"},
				{"cityCode":"HAA","cityName":"海安","cityPinYin":"HAIAN","cityPYFW":"HA"},
				{"cityCode":"LHC","cityName":"海城","cityPinYin":"HAICHENG","cityPYFW":"HC"},
				{"cityCode":"HAD","cityName":"海东","cityPinYin":"HAIDONG","cityPYFW":"HD"},
				{"cityCode":"HAK","cityName":"海口","cityPinYin":"HAIKOU","cityPYFW":"HK"},
				{"cityCode":"HAL","cityName":"海林","cityPinYin":"HAILIN","cityPYFW":"HL"},
				{"cityCode":"HLG","cityName":"海螺沟风景区","cityPinYin":"HAILUOGOU","cityPYFW":"HLG"},
				{"cityCode":"HAM","cityName":"海门","cityPinYin":"HAIMEN","cityPYFW":"HM"},
				{"cityCode":"HAN","cityName":"海南州","cityPinYin":"HAINANZHOU","cityPYFW":"HNZ"},
				{"cityCode":"HAI","cityName":"海宁","cityPinYin":"HAINING","cityPYFW":"HN"},
				{"cityCode":"HAY","cityName":"海盐","cityPinYin":"HAIYAN","cityPYFW":"HY"},
				{"cityCode":"HIY","cityName":"海阳","cityPinYin":"HAIYANG","cityPYFW":"HY"},
				{"cityCode":"HMI","cityName":"哈密","cityPinYin":"HAMI","cityPYFW":"HM"},
				{"cityCode":"HAC","cityName":"韩城","cityPinYin":"HANCHENG","cityPYFW":"HC"},
				{"cityCode":"HCH","cityName":"汉川","cityPinYin":"HANCHUAN","cityPYFW":"HC"},
				{"cityCode":"HDN","cityName":"邯郸","cityPinYin":"HANDAN","cityPYFW":"HD"},
				{"cityCode":"HGH","cityName":"杭州","cityPinYin":"HANGZHOU","cityPYFW":"HZ"},
				{"cityCode":"HZG","cityName":"汉中","cityPinYin":"HANZHONG","cityPYFW":"HZ"},
				{"cityCode":"HEB","cityName":"鹤壁","cityPinYin":"HEBI","cityPYFW":"HB"},
				{"cityCode":"HEC","cityName":"河池","cityPinYin":"HECHI","cityPYFW":"HC"},
				{"cityCode":"HFE","cityName":"合肥","cityPinYin":"HEFEI","cityPYFW":"HF"},
				{"cityCode":"HEG","cityName":"鹤岗","cityPinYin":"HEGANG","cityPYFW":"HG"},
				{"cityCode":"HEK","cityName":"黑河","cityPinYin":"HEIHE","cityPYFW":"HH"},
				{"cityCode":"HDA","cityName":"横店","cityPinYin":"HENGDIAN","cityPYFW":"HD"},
				{"cityCode":"HSU","cityName":"衡水","cityPinYin":"HENGSHUI","cityPYFW":"HS"},
				{"cityCode":"HNY","cityName":"衡阳","cityPinYin":"HENGYANG","cityPYFW":"HY"},
				{"cityCode":"HSH","cityName":"鹤山","cityPinYin":"HESHAN","cityPYFW":"HS"},
				{"cityCode":"HTN","cityName":"和田","cityPinYin":"HETIAN","cityPYFW":"HT"},
				{"cityCode":"HEY","cityName":"河源","cityPinYin":"HEYUAN","cityPYFW":"HY"},
				{"cityCode":"HZE","cityName":"菏泽","cityPinYin":"HEZE","cityPYFW":"HZ"},
				{"cityCode":"HZH","cityName":"贺州","cityPinYin":"HEZHOU","cityPYFW":"HZ"},
				{"cityCode":"HEZ","cityName":"合作","cityPinYin":"HEZUO","cityPYFW":"HZ"},
				{"cityCode":"MLH","cityName":"红河州","cityPinYin":"HONGHEZHOU","cityPYFW":"HHZ"},
				{"cityCode":"HOH","cityName":"洪湖","cityPinYin":"HONGHU","cityPYFW":"HH"},
				{"cityCode":"HOM","cityName":"侯马","cityPinYin":"HOUMA","cityPYFW":"HM"},
				{"cityCode":"HUD","cityName":"华甸","cityPinYin":"HUADIAN","cityPYFW":"HD"},
				{"cityCode":"HDU","cityName":"花都","cityPinYin":"HUADU","cityPYFW":"HD"},
				{"cityCode":"HUA","cityName":"淮安","cityPinYin":"HUAIAN","cityPYFW":"HA"},
				{"cityCode":"HUB","cityName":"淮北","cityPinYin":"HUAIBEI","cityPYFW":"HB"},
				{"cityCode":"HUH","cityName":"怀化","cityPinYin":"HUAIHUA","cityPYFW":"HH"},
				{"cityCode":"HUI","cityName":"淮南","cityPinYin":"HUAINAN","cityPYFW":"HN"},
				{"cityCode":"HUG","cityName":"黄冈","cityPinYin":"HUANGGANG","cityPYFW":"HG"},
				{"cityCode":"HYE","cityName":"黄骅","cityPinYin":"HUANGHUA","cityPYFW":"HH"},
				{"cityCode":"HUN","cityName":"黄南州","cityPinYin":"HUANGNANZHOU","cityPYFW":"HNZ"},
				{"cityCode":"TXN","cityName":"黄山","cityPinYin":"HUANGSHAN","cityPYFW":"HS"},
				{"cityCode":"HUS","cityName":"黄石","cityPinYin":"HUANGSHI","cityPYFW":"HS"},
				{"cityCode":"HYN","cityName":"黄岩","cityPinYin":"HUANGYAN","cityPYFW":"HY"},
				{"cityCode":"HYI","cityName":"华阴","cityPinYin":"HUAYIN","cityPYFW":"HY"},
				{"cityCode":"HZU","cityName":"化州","cityPinYin":"HUAZHOU","cityPYFW":"HZ"},
				{"cityCode":"HET","cityName":"呼和浩特","cityPinYin":"HUHEHAOTE","cityPYFW":"HHHT"},
				{"cityCode":"HUC","cityName":"珲春","cityPinYin":"HUICHUN","cityPYFW":"HC"},
				{"cityCode":"HYA","cityName":"惠阳","cityPinYin":"HUIYANG","cityPYFW":"HY"},
				{"cityCode":"HUZ","cityName":"惠州","cityPinYin":"HUIZHOU","cityPYFW":"HZ"},
				{"cityCode":"HLI","cityName":"虎林","cityPinYin":"HULIN","cityPYFW":"HL"},
				{"cityCode":"HLD","cityName":"葫芦岛","cityPinYin":"HULUDAO","cityPYFW":"HLD"},
				{"cityCode":"HUL","cityName":"呼伦贝尔","cityPinYin":"HULUNBEIER","cityPYFW":"HLBE"},
				{"cityCode":"HZO","cityName":"湖州","cityPinYin":"HUZHOU","cityPYFW":"HZ"},
				{"cityCode":"J","cityName":"J","cityPinYin":"J","cityPYFW":"J"},
				{"cityCode":"JMU","cityName":"佳木斯","cityPinYin":"JIAMUSI","cityPYFW":"JMS"},
				{"cityCode":"KNC","cityName":"吉安","cityPinYin":"JIAN","cityPYFW":"JA"},
				{"cityCode":"JIA","cityName":"集安","cityPinYin":"JIAN","cityPYFW":"JA"},
				{"cityCode":"JID","cityName":"建德","cityPinYin":"JIANDE","cityPYFW":"JD"},
				{"cityCode":"JDU","cityName":"江都","cityPinYin":"JIANGDU","cityPYFW":"JD"},
				{"cityCode":"JIM","cityName":"江门","cityPinYin":"JIANGMEN","cityPYFW":"JM"},
				{"cityCode":"JSA","cityName":"江山","cityPinYin":"JIANGSHAN","cityPYFW":"JS"},
				{"cityCode":"JAN","cityName":"姜堰","cityPinYin":"JIANGYAN","cityPYFW":"JY"},
				{"cityCode":"JIY","cityName":"江阴","cityPinYin":"JIANGYIN","cityPYFW":"JY"},
				{"cityCode":"JYO","cityName":"江油","cityPinYin":"JIANGYOU","cityPYFW":"JY"},
				{"cityCode":"JIO","cityName":"建瓯","cityPinYin":"JIANOU","cityPYFW":"JO"},
				{"cityCode":"JSI","cityName":"建水","cityPinYin":"JIANSHUI","cityPYFW":"JS"},
				{"cityCode":"JYG","cityName":"建阳","cityPinYin":"JIANYANG","cityPYFW":"JY"},
				{"cityCode":"JHE","cityName":"蛟河","cityPinYin":"JIAOHE","cityPYFW":"JH"},
				{"cityCode":"JNA","cityName":"胶南","cityPinYin":"JIAONAN","cityPYFW":"JN"},
				{"cityCode":"JIZ","cityName":"胶州","cityPinYin":"JIAOZHOU","cityPYFW":"JZ"},
				{"cityCode":"JZU","cityName":"焦作","cityPinYin":"JIAOZUO","cityPYFW":"JZ"},
				{"cityCode":"JAS","cityName":"嘉善","cityPinYin":"JIASHAN","cityPYFW":"JS"},
				{"cityCode":"JIX","cityName":"嘉兴","cityPinYin":"JIAXING","cityPYFW":"JX"},
				{"cityCode":"JGN","cityName":"嘉峪关","cityPinYin":"JIAYUGUAN","cityPYFW":"JYG"},
				{"cityCode":"JYX","cityName":"嘉鱼县","cityPinYin":"JIAYUXIAN","cityPYFW":"JYX"},
				{"cityCode":"JIS","cityName":"界首","cityPinYin":"JIESHOU","cityPYFW":"JS"},
				{"cityCode":"JYN","cityName":"揭阳","cityPinYin":"JIEYANG","cityPYFW":"JY"},
				{"cityCode":"JIL","cityName":"吉林","cityPinYin":"JILIN","cityPYFW":"JL"},
				{"cityCode":"JMO","cityName":"即墨","cityPinYin":"JIMO","cityPYFW":"JM"},
				{"cityCode":"TNA","cityName":"济南","cityPinYin":"JINAN","cityPYFW":"JN"},
				{"cityCode":"JCH","cityName":"金昌","cityPinYin":"JINCHANG","cityPYFW":"JC"},
				{"cityCode":"JIC","cityName":"晋城","cityPinYin":"JINCHENG","cityPYFW":"JC"},
				{"cityCode":"JDZ","cityName":"景德镇","cityPinYin":"JINGDEZHEN","cityPYFW":"JDZ"},
				{"cityCode":"JGS","cityName":"井冈山","cityPinYin":"JINGGANGSHAN","cityPYFW":"JGS"},
				{"cityCode":"JIH","cityName":"景洪","cityPinYin":"JINGHONG","cityPYFW":"JH"},
				{"cityCode":"JIJ","cityName":"靖江","cityPinYin":"JINGJIANG","cityPYFW":"JJ"},
				{"cityCode":"JMN","cityName":"荆门","cityPinYin":"JINGMEN","cityPYFW":"JM"},
				{"cityCode":"JZG","cityName":"荆州","cityPinYin":"JINGZHOU","cityPYFW":"JZ"},
				{"cityCode":"JHA","cityName":"金华","cityPinYin":"JINHUA","cityPYFW":"JH"},
				{"cityCode":"JIN","cityName":"集宁","cityPinYin":"JINING","cityPYFW":"JN"},
				{"cityCode":"JNG","cityName":"济宁","cityPinYin":"JINING","cityPYFW":"JN"},
				{"cityCode":"JJN","cityName":"晋江","cityPinYin":"JINJIANG","cityPYFW":"JJ"},
				{"cityCode":"JIT","cityName":"金坛","cityPinYin":"JINTAN","cityPYFW":"JT"},
				{"cityCode":"JYU","cityName":"缙云","cityPinYin":"JINYUN","cityPYFW":"JY"},
				{"cityCode":"JZO","cityName":"晋中","cityPinYin":"JINZHONG","cityPYFW":"JZ"},
				{"cityCode":"JNZ","cityName":"锦州","cityPinYin":"JINZHOU","cityPYFW":"JZ"},
				{"cityCode":"JZS","cityName":"晋州","cityPinYin":"JINZHOU","cityPYFW":"JZ"},
				{"cityCode":"JSH","cityName":"吉首","cityPinYin":"JISHOU","cityPYFW":"JS"},
				{"cityCode":"JHS","cityName":"九华山","cityPinYin":"JIUHUASHAN","cityPYFW":"JHS"},
				{"cityCode":"JIU","cityName":"九江","cityPinYin":"JIUJIANG","cityPYFW":"JJ"},
				{"cityCode":"CHW","cityName":"酒泉","cityPinYin":"JIUQUAN","cityPYFW":"JQ"},
				{"cityCode":"JZH","cityName":"九寨沟","cityPinYin":"JIUZHAIGOU","cityPYFW":"JZG"},
				{"cityCode":"JXI","cityName":"鸡西","cityPinYin":"JIXI","cityPYFW":"JX"},
				{"cityCode":"AAC","cityName":"蓟县","cityPinYin":"JIXIAN","cityPYFW":"JX"},
				{"cityCode":"JYA","cityName":"济源","cityPinYin":"JIYUAN","cityPYFW":"JY"},
				{"cityCode":"JUR","cityName":"句容","cityPinYin":"JURONG","cityPYFW":"JR"},
				{"cityCode":"K","cityName":"K","cityPinYin":"K","cityPYFW":"K"},
				{"cityCode":"KAF","cityName":"开封","cityPinYin":"KAIFENG","cityPYFW":"KF"},
				{"cityCode":"KAL","cityName":"凯里","cityPinYin":"KAILI","cityPYFW":"KL"},
				{"cityCode":"KAP","cityName":"开平","cityPinYin":"KAIPING","cityPYFW":"KP"},
				{"cityCode":"KYA","cityName":"开原","cityPinYin":"KAIYUAN","cityPYFW":"KY"},
				{"cityCode":"KAY","cityName":"开远","cityPinYin":"KAIYUAN","cityPYFW":"KY"},
				{"cityCode":"KNS","cityName":"喀纳斯","cityPinYin":"KANASI","cityPYFW":"KNS"},
				{"cityCode":"KHG","cityName":"喀什","cityPinYin":"KASHI","cityPYFW":"KS"},
				{"cityCode":"KLY","cityName":"克拉玛依","cityPinYin":"KELAMAYI","cityPYFW":"KLMY"},
				{"cityCode":"KRL","cityName":"库尔勒","cityPinYin":"KUERLE","cityPYFW":"KEL"},
				{"cityCode":"KUT","cityName":"奎屯","cityPinYin":"KUITUN","cityPYFW":"KT"},
				{"cityCode":"KMG","cityName":"昆明","cityPinYin":"KUNMING","cityPYFW":"KM"},
				{"cityCode":"KUS","cityName":"昆山","cityPinYin":"KUNSHAN","cityPYFW":"KS"},
				{"cityCode":"L","cityName":"L","cityPinYin":"L","cityPYFW":"L"},
				{"cityCode":"BEL","cityName":"来宾","cityPinYin":"LAIBIN","cityPYFW":"LB"},
				{"cityCode":"LAW","cityName":"莱芜","cityPinYin":"LAIWU","cityPYFW":"LW"},
				{"cityCode":"LXI","cityName":"莱西","cityPinYin":"LAIXI","cityPYFW":"LX"},
				{"cityCode":"LAY","cityName":"莱阳","cityPinYin":"LAIYANG","cityPYFW":"LY"},
				{"cityCode":"LZU","cityName":"莱州","cityPinYin":"LAIZHOU","cityPYFW":"LZ"},
				{"cityCode":"LAF","cityName":"廊坊","cityPinYin":"LANGFANG","cityPYFW":"LF"},
				{"cityCode":"LAZ","cityName":"阆中","cityPinYin":"LANGZHONG","cityPYFW":"LZ"},
				{"cityCode":"LAX","cityName":"兰溪","cityPinYin":"LANXI","cityPYFW":"LX"},
				{"cityCode":"LHW","cityName":"兰州","cityPinYin":"LANZHOU","cityPYFW":"LZ"},
				{"cityCode":"LAH","cityName":"老河口","cityPinYin":"LAOHEKOU","cityPYFW":"LHK"},
				{"cityCode":"LXA","cityName":"拉萨","cityPinYin":"LASA","cityPYFW":"LS"},
				{"cityCode":"LEC","cityName":"乐昌","cityPinYin":"LECHANG","cityPYFW":"LC"},
				{"cityCode":"LYX","cityName":"耒阳","cityPinYin":"LEIYANG","cityPYFW":"LY"},
				{"cityCode":"LEZ","cityName":"雷州","cityPinYin":"LEIZHOU","cityPYFW":"LZ"},
				{"cityCode":"LES","cityName":"冷水江","cityPinYin":"LENGSHUIJIANG","cityPYFW":"LSJ"},
				{"cityCode":"LEQ","cityName":"乐清","cityPinYin":"LEQING","cityPYFW":"LQ"},
				{"cityCode":"LSA","cityName":"乐山","cityPinYin":"LESHAN","cityPYFW":"LS"},
				{"cityCode":"LIC","cityName":"连城","cityPinYin":"LIANCHENG","cityPYFW":"LC"},
				{"cityCode":"LYU","cityName":"涟源","cityPinYin":"LIANYUAN","cityPYFW":"LY"},
				{"cityCode":"LYG","cityName":"连云港","cityPinYin":"LIANYUNGANG","cityPYFW":"LYG"},
				{"cityCode":"LHO","cityName":"连州","cityPinYin":"LIANZHOU","cityPYFW":"LZ"},
				{"cityCode":"LCN","cityName":"聊城","cityPinYin":"LIAOCHENG","cityPYFW":"LC"},
				{"cityCode":"LIY","cityName":"辽阳","cityPinYin":"LIAOYANG","cityPYFW":"LY"},
				{"cityCode":"LIU","cityName":"辽源","cityPinYin":"LIAOYUAN","cityPYFW":"LY"},
				{"cityCode":"LJG","cityName":"丽江","cityPinYin":"LIJIANG","cityPYFW":"LJ"},
				{"cityCode":"LIA","cityName":"临安","cityPinYin":"LINAN","cityPYFW":"LA"},
				{"cityCode":"LCH","cityName":"临沧","cityPinYin":"LINCANG","cityPYFW":"LC"},
				{"cityCode":"LIF","cityName":"临汾","cityPinYin":"LINFEN","cityPYFW":"LF"},
				{"cityCode":"LIB","cityName":"灵宝","cityPinYin":"LINGBAO","cityPYFW":"LB"},
				{"cityCode":"LIH","cityName":"凌海","cityPinYin":"LINGHAI","cityPYFW":"LH"},
				{"cityCode":"LSX","cityName":"陵水县","cityPinYin":"LINGSHUIXIAN","cityPYFW":"LSX"},
				{"cityCode":"LHA","cityName":"临海","cityPinYin":"LINHAI","cityPYFW":"LH"},
				{"cityCode":"LJN","cityName":"临江","cityPinYin":"LINJIANG","cityPYFW":"LJ"},
				{"cityCode":"LIX","cityName":"临夏","cityPinYin":"LINXIA","cityPYFW":"LX"},
				{"cityCode":"LYI","cityName":"临沂","cityPinYin":"LINYI","cityPYFW":"LY"},
				{"cityCode":"LZI","cityName":"林芝","cityPinYin":"LINZHI","cityPYFW":"LZ"},
				{"cityCode":"LZN","cityName":"林州","cityPinYin":"LINZHOU","cityPYFW":"LZ"},
				{"cityCode":"LSH","cityName":"离石","cityPinYin":"LISHI","cityPYFW":"LS"},
				{"cityCode":"LIS","cityName":"丽水","cityPinYin":"LISHUI","cityPYFW":"LS"},
				{"cityCode":"LAN","cityName":"六安","cityPinYin":"LIUAN","cityPYFW":"LA"},
				{"cityCode":"LIP","cityName":"六盘水","cityPinYin":"LIUPANSHUI","cityPYFW":"LPS"},
				{"cityCode":"LZH","cityName":"柳州","cityPinYin":"LIUZHOU","cityPYFW":"LZ"},
				{"cityCode":"LYN","cityName":"溧阳","cityPinYin":"LIYANG","cityPYFW":"LY"},
				{"cityCode":"LOJ","cityName":"龙井","cityPinYin":"LONGJING","cityPYFW":"LJ"},
				{"cityCode":"LOK","cityName":"龙口","cityPinYin":"LONGKOU","cityPYFW":"LK"},
				{"cityCode":"LOQ","cityName":"龙泉","cityPinYin":"LONGQUAN","cityPYFW":"LQ"},
				{"cityCode":"LOY","cityName":"龙岩","cityPinYin":"LONGYAN","cityPYFW":"LY"},
				{"cityCode":"LYO","cityName":"龙游","cityPinYin":"LONGYOU","cityPYFW":"LY"},
				{"cityCode":"LOD","cityName":"娄底","cityPinYin":"LOUDI","cityPYFW":"LD"},
				{"cityCode":"LUF","cityName":"陆丰","cityPinYin":"LUFENG","cityPYFW":"LF"},
				{"cityCode":"LUD","cityName":"罗定","cityPinYin":"LUODING","cityPYFW":"LD"},
				{"cityCode":"LUH","cityName":"漯河","cityPinYin":"LUOHE","cityPYFW":"LH"},
				{"cityCode":"LYA","cityName":"洛阳","cityPinYin":"LUOYANG","cityPYFW":"LY"},
				{"cityCode":"LUY","cityName":"浏阳","cityPinYin":"LUOYANG","cityPYFW":"ZY"},
				{"cityCode":"LUZ","cityName":"庐山","cityPinYin":"LUSHAN","cityPYFW":"LS"},
				{"cityCode":"LUX","cityName":"潞西","cityPinYin":"LUXI","cityPYFW":"LX"},
				{"cityCode":"LZO","cityName":"泸州","cityPinYin":"LUZHOU","cityPYFW":"LZ"},
				{"cityCode":"LVL","cityName":"吕梁","cityPinYin":"LVLIANG","cityPYFW":"LL"},
				{"cityCode":"M","cityName":"M","cityPinYin":"M","cityPYFW":"M"},
				{"cityCode":"MAA","cityName":"马鞍山","cityPinYin":"MAANSHAN","cityPYFW":"MAS"},
				{"cityCode":"MAC","cityName":"麻城","cityPinYin":"MACHENG","cityPYFW":"MC"},
				{"cityCode":"MSH","cityName":"芒市镇","cityPinYin":"MANGSHI","cityPYFW":"MS"},
				{"cityCode":"MAZ","cityName":"满洲里","cityPinYin":"MANZHOULI","cityPYFW":"MZL"},
				{"cityCode":"MAM","cityName":"茂名","cityPinYin":"MAOMING","cityPYFW":"MM"},
				{"cityCode":"MEH","cityName":"梅河口","cityPinYin":"MEIHEKOU","cityPYFW":"MHK"},
				{"cityCode":"MES","cityName":"眉山","cityPinYin":"MEISHAN","cityPYFW":"MS"},
				{"cityCode":"MZU","cityName":"梅州","cityPinYin":"MEIZHOU","cityPYFW":"MZ"},
				{"cityCode":"MEZ","cityName":"孟州","cityPinYin":"MENGZHOU","cityPYFW":"MZ"},
				{"cityCode":"MZI","cityName":"蒙自","cityPinYin":"MENGZI","cityPYFW":"MZ"},
				{"cityCode":"MIG","cityName":"绵阳","cityPinYin":"MIANYANG","cityPYFW":"MY"},
				{"cityCode":"MIZ","cityName":"绵竹","cityPinYin":"MIANZHU","cityPYFW":"MZ"},
				{"cityCode":"MIQ","cityName":"米泉","cityPinYin":"MIQUAN","cityPYFW":"MQ"},
				{"cityCode":"MIS","cityName":"密山","cityPinYin":"MISHAN","cityPYFW":"MS"},
				{"cityCode":"OHE","cityName":"漠河","cityPinYin":"MOHE","cityPYFW":"MH"},
				{"cityCode":"MDG","cityName":"牡丹江","cityPinYin":"MUDANJIANG","cityPYFW":"MDJ"},
				{"cityCode":"N","cityName":"N","cityPinYin":"N","cityPYFW":"N"},
				{"cityCode":"NAA","cityName":"南安","cityPinYin":"NANAN","cityPYFW":"NA"},
				{"cityCode":"KHN","cityName":"南昌","cityPinYin":"NANCHANG","cityPYFW":"NC"},
				{"cityCode":"NAO","cityName":"南充","cityPinYin":"NANCHONG","cityPYFW":"NC"},
				{"cityCode":"NDH","cityName":"南戴河旅游渡假区","cityPinYin":"NANDAIHE","cityPYFW":"NDH"},
				{"cityCode":"NAH","cityName":"南海","cityPinYin":"NANHAI","cityPYFW":"NH"},
				{"cityCode":"NKG","cityName":"南京","cityPinYin":"NANJING","cityPYFW":"NJ"},
				{"cityCode":"NNG","cityName":"南宁","cityPinYin":"NANNING","cityPYFW":"NN"},
				{"cityCode":"NAP","cityName":"南平","cityPinYin":"NANPING","cityPYFW":"NP"},
				{"cityCode":"NTG","cityName":"南通","cityPinYin":"NANTONG","cityPYFW":"NT"},
				{"cityCode":"NAX","cityName":"南雄","cityPinYin":"NANXIONG","cityPYFW":"NX"},
				{"cityCode":"NNY","cityName":"南阳","cityPinYin":"NANYANG","cityPYFW":"NY"},
				{"cityCode":"NAQ","cityName":"那曲","cityPinYin":"NAQU","cityPYFW":"NQ"},
				{"cityCode":"NEJ","cityName":"内江","cityPinYin":"NEIJIANG","cityPYFW":"NJ"},
				{"cityCode":"NIA","cityName":"宁安","cityPinYin":"NINGAN","cityPYFW":"NA"},
				{"cityCode":"NGB","cityName":"宁波","cityPinYin":"NINGBO","cityPYFW":"NB"},
				{"cityCode":"NID","cityName":"宁德","cityPinYin":"NINGDE","cityPYFW":"ND"},
				{"cityCode":"NIG","cityName":"宁国","cityPinYin":"NINGGUO","cityPYFW":"NG"},
				{"cityCode":"NHX","cityName":"宁海县","cityPinYin":"NINGHAIXIAN","cityPYFW":"NHX"},
				{"cityCode":"NUJ","cityName":"怒江傈僳族自治州","cityPinYin":"NUJIANGLISUZUZIZHIZHOU","cityPYFW":"NJLSZZZZ"},
				{"cityCode":"O","cityName":"O","cityPinYin":"O","cityPYFW":"O"},
				{"cityCode":"P","cityName":"P","cityPinYin":"P","cityPYFW":"P"},
				{"cityCode":"PAJ","cityName":"盘锦","cityPinYin":"PANJIN","cityPYFW":"PJ"},
				{"cityCode":"PAY","cityName":"番禺","cityPinYin":"PANYU","cityPYFW":"PY"},
				{"cityCode":"PZI","cityName":"攀枝花","cityPinYin":"PANZHIHUA","cityPYFW":"PZH"},
				{"cityCode":"PEL","cityName":"蓬莱","cityPinYin":"PENGLAI","cityPYFW":"PL"},
				{"cityCode":"PEZ","cityName":"彭州","cityPinYin":"PENGZHOU","cityPYFW":"PZ"},
				{"cityCode":"PDS","cityName":"平顶山","cityPinYin":"PINGDINGSHAN","cityPYFW":"PDS"},
				{"cityCode":"PID","cityName":"平度","cityPinYin":"PINGDU","cityPYFW":"PD"},
				{"cityCode":"PIH","cityName":"平湖","cityPinYin":"PINGHU","cityPYFW":"PH"},
				{"cityCode":"PIL","cityName":"平凉","cityPinYin":"PINGLIANG","cityPYFW":"PL"},
				{"cityCode":"PIX","cityName":"萍乡","cityPinYin":"PINGXIANG","cityPYFW":"PX"},
				{"cityCode":"PYO","cityName":"平遥","cityPinYin":"PINGYAO","cityPYFW":"PY"},
				{"cityCode":"PIZ","cityName":"邳州","cityPinYin":"PIZHOU","cityPYFW":"PZ"},
				{"cityCode":"SYM","cityName":"普洱","cityPinYin":"PUER","cityPYFW":"PE"},
				{"cityCode":"PUJ","cityName":"浦江","cityPinYin":"PUJIANG","cityPYFW":"PJ"},
				{"cityCode":"PUN","cityName":"普宁","cityPinYin":"PUNING","cityPYFW":"PN"},
				{"cityCode":"PUT","cityName":"莆田","cityPinYin":"PUTIAN","cityPYFW":"PT"},
				{"cityCode":"PUY","cityName":"濮阳","cityPinYin":"PUYANG","cityPYFW":"PY"},
				{"cityCode":"Q","cityName":"Q","cityPinYin":"Q","cityPYFW":"Q"},
				{"cityCode":"QIH","cityName":"千岛湖镇","cityPinYin":"QIANDAOHU","cityPYFW":"QDH"},
				{"cityCode":"QIJ","cityName":"潜江","cityPinYin":"QIANJIANG","cityPYFW":"QJ"},
				{"cityCode":"QID","cityName":"启东","cityPinYin":"QIDONG","cityPYFW":"QD"},
				{"cityCode":"TAO","cityName":"青岛","cityPinYin":"QINGDAO","cityPYFW":"QD"},
				{"cityCode":"QIY","cityName":"庆阳","cityPinYin":"QINGYANG","cityPYFW":"QY"},
				{"cityCode":"QYN","cityName":"清远","cityPinYin":"QINGYUAN","cityPYFW":"QY"},
				{"cityCode":"QIZ","cityName":"青州","cityPinYin":"QINGZHOU","cityPYFW":"QZ"},
				{"cityCode":"SHP","cityName":"秦皇岛","cityPinYin":"QINHUANGDAO","cityPYFW":"QHD"},
				{"cityCode":"QYA","cityName":"沁阳","cityPinYin":"QINYANG","cityPYFW":"QY"},
				{"cityCode":"QZO","cityName":"钦州","cityPinYin":"QINZHOU","cityPYFW":"QZ"},
				{"cityCode":"QHA","cityName":"琼海","cityPinYin":"QIONGHAI","cityPYFW":"QH"},
				{"cityCode":"QIL","cityName":"邛崃","cityPinYin":"QIONGLAI","cityPYFW":"QL"},
				{"cityCode":"NDG","cityName":"齐齐哈尔","cityPinYin":"QIQIHAER","cityPYFW":"QQHE"},
				{"cityCode":"QIT","cityName":"七台河","cityPinYin":"QITAIHE","cityPYFW":"QTH"},
				{"cityCode":"QUZ","cityName":"泉州","cityPinYin":"QUANZHOU","cityPYFW":"QZ"},
				{"cityCode":"QUF","cityName":"曲阜","cityPinYin":"QUFU","cityPYFW":"QF"},
				{"cityCode":"QUJ","cityName":"曲靖","cityPinYin":"QUJING","cityPYFW":"QJ"},
				{"cityCode":"JUZ","cityName":"衢州","cityPinYin":"QUZHOU","cityPYFW":"QZ"},
				{"cityCode":"R","cityName":"R","cityPinYin":"R","cityPYFW":"R"},
				{"cityCode":"REH","cityName":"仁怀","cityPinYin":"RENHUAI","cityPYFW":"RH"},
				{"cityCode":"REQ","cityName":"任丘","cityPinYin":"RENQIU","cityPYFW":"RQ"},
				{"cityCode":"RIK","cityName":"日喀则","cityPinYin":"RIKAZE","cityPYFW":"RKZ"},
				{"cityCode":"RIZ","cityName":"日照","cityPinYin":"RIZHAO","cityPYFW":"RZ"},
				{"cityCode":"ROC","cityName":"荣成","cityPinYin":"RONGCHENG","cityPYFW":"RC"},
				{"cityCode":"RUD","cityName":"如东","cityPinYin":"RUDONG","cityPYFW":"RD"},
				{"cityCode":"RUG","cityName":"如皋","cityPinYin":"RUGAO","cityPYFW":"RG"},
				{"cityCode":"RUA","cityName":"瑞安","cityPinYin":"RUIAN","cityPYFW":"RA"},
				{"cityCode":"RUL","cityName":"瑞丽","cityPinYin":"RUILI","cityPYFW":"RL"},
				{"cityCode":"REG","cityName":"若尔盖县","cityPinYin":"RUOERGAIXIAN","cityPYFW":"REGX"},
				{"cityCode":"RUS","cityName":"乳山","cityPinYin":"RUSHAN","cityPYFW":"RS"},
				{"cityCode":"RUZ","cityName":"汝州","cityPinYin":"RUZHOU","cityPYFW":"RZ"},
				{"cityCode":"S","cityName":"S","cityPinYin":"S","cityPYFW":"S"},
				{"cityCode":"SAM","cityName":"三门峡","cityPinYin":"SANMENXIA","cityPYFW":"SMX"},
				{"cityCode":"SMI","cityName":"三明","cityPinYin":"SANMING","cityPYFW":"SM"},
				{"cityCode":"SAS","cityName":"三水","cityPinYin":"SANSHUI","cityPYFW":"SS"},
				{"cityCode":"SYX","cityName":"三亚","cityPinYin":"SANYA","cityPYFW":"SY"},
				{"cityCode":"SHA","cityName":"上海","cityPinYin":"SHANGHAI","cityPYFW":"SH"},
				{"cityCode":"SHL","cityName":"商洛","cityPinYin":"SHANGLUO","cityPYFW":"SL"},
				{"cityCode":"SHQ","cityName":"商丘","cityPinYin":"SHANGQIU","cityPYFW":"SQ"},
				{"cityCode":"SHR","cityName":"上饶","cityPinYin":"SHANGRAO","cityPYFW":"SR"},
				{"cityCode":"SYU","cityName":"上虞","cityPinYin":"SHANGYU","cityPYFW":"SY"},
				{"cityCode":"SZI","cityName":"尚志","cityPinYin":"SHANGZHI","cityPYFW":"SZ"},
				{"cityCode":"SHN","cityName":"山南","cityPinYin":"SHANNAN","cityPYFW":"SN"},
				{"cityCode":"SWA","cityName":"汕头","cityPinYin":"SHANTOU","cityPYFW":"ST"},
				{"cityCode":"SHW","cityName":"汕尾","cityPinYin":"SHANWEI","cityPYFW":"SW"},
				{"cityCode":"HSC","cityName":"韶关","cityPinYin":"SHAOGUAN","cityPYFW":"SG"},
				{"cityCode":"SHS","cityName":"韶山","cityPinYin":"SHAOSHAN","cityPYFW":"SS"},
				{"cityCode":"SWU","cityName":"邵武","cityPinYin":"SHAOWU","cityPYFW":"SW"},
				{"cityCode":"SHX","cityName":"绍兴","cityPinYin":"SHAOXING","cityPYFW":"SX"},
				{"cityCode":"SYG","cityName":"邵阳","cityPinYin":"SHAOYANG","cityPYFW":"SY"},
				{"cityCode":"SZU","cityName":"嵊州","cityPinYin":"SHENGZHOU","cityPYFW":"SZ"},
				{"cityCode":"SNJ","cityName":"神农架林区","cityPinYin":"SHENNONGJIALINQU","cityPYFW":"SNJLQ"},
				{"cityCode":"SHE","cityName":"沈阳","cityPinYin":"SHENYANG","cityPYFW":"SY"},
				{"cityCode":"SZX","cityName":"深圳","cityPinYin":"SHENZHEN","cityPYFW":"SZ"},
				{"cityCode":"SHH","cityName":"石河子","cityPinYin":"SHIHEZI","cityPYFW":"SHZ"},
				{"cityCode":"SJW","cityName":"石家庄","cityPinYin":"SHIJIAZHUANG","cityPYFW":"SJZ"},
				{"cityCode":"SLX","cityName":"石林县","cityPinYin":"SHILINXIAN","cityPYFW":"SLX"},
				{"cityCode":"SHI","cityName":"石狮市","cityPinYin":"SHISHI","cityPYFW":"SS"},
				{"cityCode":"SSS","cityName":"石狮市","cityPinYin":"SHISHISHI","cityPYFW":"SSS"},
				{"cityCode":"SSH","cityName":"石首","cityPinYin":"SHISHOU","cityPYFW":"SS"},
				{"cityCode":"SYA","cityName":"十堰","cityPinYin":"SHIYAN","cityPYFW":"SY"},
				{"cityCode":"SHG","cityName":"寿光","cityPinYin":"SHOUGUANG","cityPYFW":"SG"},
				{"cityCode":"SHY","cityName":"双鸭山","cityPinYin":"SHUANGYASHAN","cityPYFW":"SYS"},
				{"cityCode":"SLA","cityName":"舒兰","cityPinYin":"SHULAN","cityPYFW":"SL"},
				{"cityCode":"SHD","cityName":"顺德","cityPinYin":"SHUNDE","cityPYFW":"SD"},
				{"cityCode":"SHZ","cityName":"朔州","cityPinYin":"SHUOZHOU","cityPYFW":"SZ"},
				{"cityCode":"ZHG","cityName":"泗洪","cityPinYin":"SIHONG","cityPYFW":"ZH"},
				{"cityCode":"SIH","cityName":"四会","cityPinYin":"SIHUI","cityPYFW":"SH"},
				{"cityCode":"SIP","cityName":"四平","cityPinYin":"SIPING","cityPYFW":"SP"},
				{"cityCode":"SYS","cityName":"泗阳","cityPinYin":"SIYANG","cityPYFW":"SY"},
				{"cityCode":"SOY","cityName":"松原","cityPinYin":"SONGYUAN","cityPYFW":"SY"},
				{"cityCode":"SOH","cityName":"松滋","cityPinYin":"SONGZI","cityPYFW":"SZ"},
				{"cityCode":"SOZ","cityName":"松滋宾馆","cityPinYin":"SONGZIBINGUAN","cityPYFW":"SZBG"},
				{"cityCode":"SUF","cityName":"绥芬河","cityPinYin":"SUIFENHE","cityPYFW":"SFH"},
				{"cityCode":"SUH","cityName":"绥化","cityPinYin":"SUIHUA","cityPYFW":"SH"},
				{"cityCode":"SUN","cityName":"遂宁","cityPinYin":"SUINING","cityPYFW":"SN"},
				{"cityCode":"SUZ","cityName":"随州","cityPinYin":"SUIZHOU","cityPYFW":"SZ"},
				{"cityCode":"XIQ","cityName":"宿迁","cityPinYin":"SUQIAN","cityPYFW":"XQ"},
				{"cityCode":"SZV","cityName":"苏州","cityPinYin":"SUZHOU","cityPYFW":"SZ"},
				{"cityCode":"XIO","cityName":"宿州","cityPinYin":"SUZHOU","cityPYFW":"XZ"},
				{"cityCode":"T","cityName":"T","cityPinYin":"T","cityPYFW":"T"},
				{"cityCode":"TCG","cityName":"塔城","cityPinYin":"TACHENG","cityPYFW":"TC"},
				{"cityCode":"TAA","cityName":"泰安","cityPinYin":"TAIAN","cityPYFW":"TA"},
				{"cityCode":"TAC","cityName":"太仓","cityPinYin":"TAICANG","cityPYFW":"TC"},
				{"cityCode":"TSA","cityName":"台山","cityPinYin":"TAISHAN","cityPYFW":"TS"},
				{"cityCode":"TSH","cityName":"泰顺","cityPinYin":"TAISHUN","cityPYFW":"TS"},
				{"cityCode":"TAX","cityName":"泰兴","cityPinYin":"TAIXING","cityPYFW":"TX"},
				{"cityCode":"TYN","cityName":"太原","cityPinYin":"TAIYUAN","cityPYFW":"TY"},
				{"cityCode":"TAZ","cityName":"台州","cityPinYin":"TAIZHOU","cityPYFW":"TZ"},
				{"cityCode":"TZU","cityName":"泰州","cityPinYin":"TAIZHOU","cityPYFW":"TZ"},
				{"cityCode":"TAS","cityName":"唐山","cityPinYin":"TANGSHAN","cityPYFW":"TS"},
				{"cityCode":"TCH","cityName":"腾冲","cityPinYin":"TENGCHONG","cityPYFW":"TC"},
				{"cityCode":"TSN","cityName":"天津","cityPinYin":"TIANJIN","cityPYFW":"TJ"},
				{"cityCode":"TIM","cityName":"天门","cityPinYin":"TIANMEN","cityPYFW":"TM"},
				{"cityCode":"TIS","cityName":"天水","cityPinYin":"TIANSHUI","cityPYFW":"TS"},
				{"cityCode":"TTA","cityName":"天台","cityPinYin":"TIANTAI","cityPYFW":"TT"},
				{"cityCode":"TIC","cityName":"天长","cityPinYin":"TIANZHANG","cityPYFW":"TZ"},
				{"cityCode":"TZS","cityName":"天柱山","cityPinYin":"TIANZHUSHAN","cityPYFW":"TZS"},
				{"cityCode":"TLI","cityName":"铁力","cityPinYin":"TIELI","cityPYFW":"TL"},
				{"cityCode":"TIL","cityName":"铁岭","cityPinYin":"TIELING","cityPYFW":"TL"},
				{"cityCode":"TOC","cityName":"铜川","cityPinYin":"TONGCHUAN","cityPYFW":"TC"},
				{"cityCode":"TNH","cityName":"通化","cityPinYin":"TONGHUA","cityPYFW":"TH"},
				{"cityCode":"TOL","cityName":"同里镇","cityPinYin":"TONGLI","cityPYFW":"TL"},
				{"cityCode":"TGO","cityName":"通辽","cityPinYin":"TONGLIAO","cityPYFW":"TL"},
				{"cityCode":"TOG","cityName":"铜陵","cityPinYin":"TONGLING","cityPYFW":"TL"},
				{"cityCode":"TLU","cityName":"桐庐县","cityPinYin":"TONGLU","cityPYFW":"TL"},
				{"cityCode":"TOR","cityName":"铜仁","cityPinYin":"TONGREN","cityPYFW":"TR"},
				{"cityCode":"TOX","cityName":"桐乡","cityPinYin":"TONGXIANG","cityPYFW":"TX"},
				{"cityCode":"TOS","cityName":"通什","cityPinYin":"TONGZA","cityPYFW":"TS"},
				{"cityCode":"TOZ","cityName":"通州","cityPinYin":"TONGZHOU","cityPYFW":"TZ"},
				{"cityCode":"TUL","cityName":"吐鲁番","cityPinYin":"TULUFAN","cityPYFW":"TLF"},
				{"cityCode":"W","cityName":"W","cityPinYin":"W","cityPYFW":"W"},
				{"cityCode":"LNS","cityName":"瓦房店市","cityPinYin":"WAFANGDIANSHI","cityPYFW":"WFDS"},
				{"cityCode":"WAN","cityName":"万宁","cityPinYin":"WANNING","cityPYFW":"WN"},
				{"cityCode":"WEF","cityName":"潍坊","cityPinYin":"WEIFANG","cityPYFW":"WF"},
				{"cityCode":"WEH","cityName":"威海","cityPinYin":"WEIHAI","cityPYFW":"WH"},
				{"cityCode":"WEN","cityName":"渭南","cityPinYin":"WEINAN","cityPYFW":"WN"},
				{"cityCode":"WEC","cityName":"文昌","cityPinYin":"WENCHANG","cityPYFW":"WC"},
				{"cityCode":"WED","cityName":"文登","cityPinYin":"WENDENG","cityPYFW":"WD"},
				{"cityCode":"WEG","cityName":"温岭","cityPinYin":"WENLING","cityPYFW":"WL"},
				{"cityCode":"WEL","cityName":"温岭","cityPinYin":"WENLING","cityPYFW":"WL"},
				{"cityCode":"WES","cityName":"文山州","cityPinYin":"WENSHANZHOU","cityPYFW":"WSZ"},
				{"cityCode":"WNZ","cityName":"温州","cityPinYin":"WENZHOU","cityPYFW":"WZ"},
				{"cityCode":"WDS","cityName":"武当山","cityPinYin":"WUDANGSHAN","cityPYFW":"WDS"},
				{"cityCode":"WHA","cityName":"乌海","cityPinYin":"WUHAI","cityPYFW":"WH"},
				{"cityCode":"WUH","cityName":"武汉","cityPinYin":"WUHAN","cityPYFW":"WH"},
				{"cityCode":"WHU","cityName":"芜湖","cityPinYin":"WUHU","cityPYFW":"WH"},
				{"cityCode":"WJI","cityName":"吴江","cityPinYin":"WUJIANG","cityPYFW":"WJ"},
				{"cityCode":"WUJ","cityName":"武进","cityPinYin":"WUJIN","cityPYFW":"WJ"},
				{"cityCode":"WLC","cityName":"乌兰察布","cityPinYin":"WULANCHABU","cityPYFW":"WLCB"},
				{"cityCode":"HLH","cityName":"乌兰浩特","cityPinYin":"WULANHAOTE","cityPYFW":"WLHT"},
				{"cityCode":"URC","cityName":"乌鲁木齐","cityPinYin":"WULUMUQI","cityPYFW":"WLMQ"},
				{"cityCode":"WTS","cityName":"五台山","cityPinYin":"WUTAISHAN","cityPYFW":"WTS"},
				{"cityCode":"WUW","cityName":"武威","cityPinYin":"WUWEI","cityPYFW":"WW"},
				{"cityCode":"WUX","cityName":"无锡","cityPinYin":"WUXI","cityPYFW":"WX"},
				{"cityCode":"WXI","cityName":"武穴","cityPinYin":"WUXUE","cityPYFW":"WX"},
				{"cityCode":"WYI","cityName":"武义","cityPinYin":"WUYI","cityPYFW":"WY"},
				{"cityCode":"WUS","cityName":"武夷山","cityPinYin":"WUYISHAN","cityPYFW":"WYS"},
				{"cityCode":"WUY","cityName":"婺源","cityPinYin":"WUYUAN","cityPYFW":"WY"},
				{"cityCode":"XZS","cityName":"五指山","cityPinYin":"WUZHISHAN","cityPYFW":"WZS"},
				{"cityCode":"WZS","cityName":"吴忠","cityPinYin":"WUZHONG","cityPYFW":"WZ"},
				{"cityCode":"WUZ","cityName":"梧州","cityPinYin":"WUZHOU","cityPYFW":"WZ"},
				{"cityCode":"X","cityName":"X","cityPinYin":"X","cityPYFW":"X"},
				{"cityCode":"XHX","cityName":"夏河县","cityPinYin":"XIAHEXIAN","cityPYFW":"XHX"},
				{"cityCode":"XMN","cityName":"厦门","cityPinYin":"XIAMEN","cityPYFW":"XM"},
				{"cityCode":"SIA","cityName":"西安","cityPinYin":"XIAN","cityPYFW":"XA"},
				{"cityCode":"XCH","cityName":"项城","cityPinYin":"XIANGCHENG","cityPYFW":"XC"},
				{"cityCode":"HKG","cityName":"香港","cityPinYin":"XIANGGANG","cityPYFW":"XG"},
				{"cityCode":"XIG","cityName":"香格里拉","cityPinYin":"XIANGGELILA","cityPYFW":"XGLL"},
				{"cityCode":"XSH","cityName":"象山","cityPinYin":"XIANGSHAN","cityPYFW":"XS"},
				{"cityCode":"XIT","cityName":"湘潭","cityPinYin":"XIANGTAN","cityPYFW":"XT"},
				{"cityCode":"XFN","cityName":"襄阳","cityPinYin":"XIANGYANG","cityPYFW":"XY"},
				{"cityCode":"XAN","cityName":"咸宁","cityPinYin":"XIANNING","cityPYFW":"XN"},
				{"cityCode":"XIA","cityName":"仙桃","cityPinYin":"XIANTAO","cityPYFW":"XT"},
				{"cityCode":"XIY","cityName":"咸阳","cityPinYin":"XIANYANG","cityPYFW":"XY"},
				{"cityCode":"XGN","cityName":"孝感","cityPinYin":"XIAOGAN","cityPYFW":"XG"},
				{"cityCode":"XIC","cityName":"西昌","cityPinYin":"XICHANG","cityPYFW":"XC"},
				{"cityCode":"XIL","cityName":"锡林浩特","cityPinYin":"XILINHAOTE","cityPYFW":"XLHT"},
				{"cityCode":"XHA","cityName":"新昌","cityPinYin":"XINCHANG","cityPYFW":"XC"},
				{"cityCode":"XGA","cityName":"兴安","cityPinYin":"XINGAN","cityPYFW":"XA"},
				{"cityCode":"XEN","cityName":"兴城","cityPinYin":"XINGCHENG","cityPYFW":"XC"},
				{"cityCode":"XHS","cityName":"兴化市","cityPinYin":"XINGHUASHI","cityPYFW":"XHS"},
				{"cityCode":"XNT","cityName":"邢台","cityPinYin":"XINGTAI","cityPYFW":"XT"},
				{"cityCode":"XYN","cityName":"兴义","cityPinYin":"XINGYI","cityPYFW":"XY"},
				{"cityCode":"XIH","cityName":"新会","cityPinYin":"XINHUI","cityPYFW":"XH"},
				{"cityCode":"XNN","cityName":"西宁","cityPinYin":"XINING","cityPYFW":"XN"},
				{"cityCode":"XIM","cityName":"新密","cityPinYin":"XINMI","cityPYFW":"XM"},
				{"cityCode":"XIX","cityName":"新乡","cityPinYin":"XINXIANG","cityPYFW":"XX"},
				{"cityCode":"XYA","cityName":"信阳","cityPinYin":"XINYANG","cityPYFW":"XY"},
				{"cityCode":"XIN","cityName":"新沂","cityPinYin":"XINYI","cityPYFW":"XY"},
				{"cityCode":"XYI","cityName":"信宜","cityPinYin":"XINYI","cityPYFW":"XY"},
				{"cityCode":"XYU","cityName":"新余","cityPinYin":"XINYU","cityPYFW":"XY"},
				{"cityCode":"XIU","cityName":"忻州","cityPinYin":"XINZHOU","cityPYFW":"XZ"},
				{"cityCode":"JHG","cityName":"西双版纳","cityPinYin":"XISHUANGBANNA","cityPYFW":"XSBN"},
				{"cityCode":"XUC","cityName":"宣城","cityPinYin":"XUANCHENG","cityPYFW":"XC"},
				{"cityCode":"XCA","cityName":"许昌","cityPinYin":"XUCHANG","cityPYFW":"XC"},
				{"cityCode":"JHY","cityName":"盱眙","cityPinYin":"XUYI","cityPYFW":"XY"},
				{"cityCode":"XUZ","cityName":"徐州","cityPinYin":"XUZHOU","cityPYFW":"XZ"},
				{"cityCode":"Y","cityName":"Y","cityPinYin":"Y","cityPYFW":"Y"},
				{"cityCode":"YAA","cityName":"雅安","cityPinYin":"YAAN","cityPYFW":"YA"},
				{"cityCode":"YBL","cityName":"亚布力","cityPinYin":"YABULI","cityPYFW":"YBL"},
				{"cityCode":"ENY","cityName":"延安","cityPinYin":"YANAN","cityPYFW":"YA"},
				{"cityCode":"YNZ","cityName":"盐城","cityPinYin":"YANCHENG","cityPYFW":"YC"},
				{"cityCode":"YAD","cityName":"雁荡山","cityPinYin":"YANDANGSHAN","cityPYFW":"YDS"},
				{"cityCode":"YAC","cityName":"阳春","cityPinYin":"YANGCHUN","cityPYFW":"YC"},
				{"cityCode":"YAJ","cityName":"阳江","cityPinYin":"YANGJIANG","cityPYFW":"YJ"},
				{"cityCode":"YAQ","cityName":"阳泉","cityPinYin":"YANGQUAN","cityPYFW":"YQ"},
				{"cityCode":"YAH","cityName":"阳朔","cityPinYin":"YANGSHUO","cityPYFW":"YS"},
				{"cityCode":"YAZ","cityName":"扬中","cityPinYin":"YANGZHONG","cityPYFW":"YZ"},
				{"cityCode":"YZO","cityName":"扬州","cityPinYin":"YANGZHOU","cityPYFW":"YZ"},
				{"cityCode":"YNJ","cityName":"延吉","cityPinYin":"YANJI","cityPYFW":"YJ"},
				{"cityCode":"YAS","cityName":"偃师","cityPinYin":"YANSHI","cityPYFW":"YS"},
				{"cityCode":"YNT","cityName":"烟台","cityPinYin":"YANTAI","cityPYFW":"YT"},
				{"cityCode":"YZH","cityName":"兖州","cityPinYin":"YANZHOU","cityPYFW":"YZ"},
				{"cityCode":"YBP","cityName":"宜宾","cityPinYin":"YIBIN","cityPYFW":"YB"},
				{"cityCode":"YIH","cityName":"宜昌","cityPinYin":"YICHANG","cityPYFW":"YC"},
				{"cityCode":"YCH","cityName":"伊春","cityPinYin":"YICHUN","cityPYFW":"YC"},
				{"cityCode":"YIC","cityName":"宜春","cityPinYin":"YICHUN","cityPYFW":"YC"},
				{"cityCode":"INC","cityName":"银川","cityPinYin":"YINCHUAN","cityPYFW":"YC"},
				{"cityCode":"YIK","cityName":"营口","cityPinYin":"YINGKOU","cityPYFW":"YK"},
				{"cityCode":"YIT","cityName":"鹰潭","cityPinYin":"YINGTAN","cityPYFW":"YT"},
				{"cityCode":"XYG","cityName":"荥阳","cityPinYin":"YINGYANG","cityPYFW":"YY"},
				{"cityCode":"YIN","cityName":"伊宁","cityPinYin":"YINING","cityPYFW":"YN"},
				{"cityCode":"YIW","cityName":"义乌","cityPinYin":"YIWU","cityPYFW":"YW"},
				{"cityCode":"YIX","cityName":"宜兴","cityPinYin":"YIXING","cityPYFW":"YX"},
				{"cityCode":"YIY","cityName":"益阳","cityPinYin":"YIYANG","cityPYFW":"YY"},
				{"cityCode":"YIZ","cityName":"仪征","cityPinYin":"YIZHENG","cityPYFW":"YZ"},
				{"cityCode":"YZU","cityName":"宜州","cityPinYin":"YIZHOU","cityPYFW":"YZ"},
				{"cityCode":"YOA","cityName":"永安","cityPinYin":"YONGAN","cityPYFW":"YA"},
				{"cityCode":"YOJ","cityName":"永嘉","cityPinYin":"YONGJIA","cityPYFW":"YJ"},
				{"cityCode":"YOK","cityName":"永康","cityPinYin":"YONGKANG","cityPYFW":"YK"},
				{"cityCode":"YOZ","cityName":"永州","cityPinYin":"YONGZHOU","cityPYFW":"YZ"},
				{"cityCode":"YUY","cityName":"岳阳","cityPinYin":"YUEYANG","cityPYFW":"YY"},
				{"cityCode":"UYN","cityName":"榆林","cityPinYin":"YULIN","cityPYFW":"YL"},
				{"cityCode":"YUL","cityName":"玉林","cityPinYin":"YULIN","cityPYFW":"YL"},
				{"cityCode":"YUM","cityName":"玉门","cityPinYin":"YUMEN","cityPYFW":"YM"},
				{"cityCode":"YUC","cityName":"运城","cityPinYin":"YUNCHENG","cityPYFW":"YC"},
				{"cityCode":"YNF","cityName":"云浮","cityPinYin":"YUNFU","cityPYFW":"YF"},
				{"cityCode":"YUS","cityName":"玉树州","cityPinYin":"YUSHUZHOU","cityPYFW":"YSZ"},
				{"cityCode":"YUX","cityName":"玉溪","cityPinYin":"YUXI","cityPYFW":"YX"},
				{"cityCode":"YUA","cityName":"余姚","cityPinYin":"YUYAO","cityPYFW":"YY"},
				{"cityCode":"YUZ","cityName":"禹州","cityPinYin":"YUZHOU","cityPYFW":"YZ"},
				{"cityCode":"Z","cityName":"Z","cityPinYin":"Z","cityPYFW":"Z"},
				{"cityCode":"ZAY","cityName":"枣阳","cityPinYin":"ZAOYANG","cityPYFW":"ZY"},
				{"cityCode":"ZAZ","cityName":"枣庄","cityPinYin":"ZAOZHUANG","cityPYFW":"ZZ"},
				{"cityCode":"ZHL","cityName":"扎兰屯","cityPinYin":"ZHALANTUN","cityPYFW":"ZLT"},
				{"cityCode":"ZHJ","cityName":"张家港","cityPinYin":"ZHANGJIAGANG","cityPYFW":"ZJG"},
				{"cityCode":"DYG","cityName":"张家界","cityPinYin":"ZHANGJIAJIE","cityPYFW":"ZJJ"},
				{"cityCode":"ZJK","cityName":"张家口","cityPinYin":"ZHANGJIAKOU","cityPYFW":"ZJK"},
				{"cityCode":"ZHP","cityName":"漳平","cityPinYin":"ZHANGPING","cityPYFW":"ZP"},
				{"cityCode":"ZQS","cityName":"章丘","cityPinYin":"ZHANGQIU","cityPYFW":"ZQ"},
				{"cityCode":"ZHY","cityName":"张掖","cityPinYin":"ZHANGYE","cityPYFW":"ZY"},
				{"cityCode":"ZHZ","cityName":"漳州","cityPinYin":"ZHANGZHOU","cityPYFW":"ZZ"},
				{"cityCode":"ZHA","cityName":"湛江","cityPinYin":"ZHANJIANG","cityPYFW":"ZJ"},
				{"cityCode":"ZHQ","cityName":"肇庆","cityPinYin":"ZHAOQING","cityPYFW":"ZQ"},
				{"cityCode":"ZAT","cityName":"昭通","cityPinYin":"ZHAOTONG","cityPYFW":"ZT"},
				{"cityCode":"CGO","cityName":"郑州","cityPinYin":"ZHENGZHOU","cityPYFW":"ZZ"},
				{"cityCode":"ZJA","cityName":"镇江","cityPinYin":"ZHENJIANG","cityPYFW":"ZJ"},
				{"cityCode":"ZEY","cityName":"镇远","cityPinYin":"ZHENYUAN","cityPYFW":"ZY"},
				{"cityCode":"ZIS","cityName":"中山","cityPinYin":"ZHONGSHAN","cityPYFW":"ZS"},
				{"cityCode":"ZWS","cityName":"中卫","cityPinYin":"ZHONGWEI","cityPYFW":"ZW"},
				{"cityCode":"ZHX","cityName":"钟祥","cityPinYin":"ZHONGXIANG","cityPYFW":"ZX"},
				{"cityCode":"ZHK","cityName":"周口","cityPinYin":"ZHOUKOU","cityPYFW":"ZK"},
				{"cityCode":"HSN","cityName":"舟山","cityPinYin":"ZHOUSHAN","cityPYFW":"ZS"},
				{"cityCode":"ZZS","cityName":"周庄","cityPinYin":"ZHOUZHUANG","cityPYFW":"ZZ"},
				{"cityCode":"ZHC","cityName":"诸城","cityPinYin":"ZHUCHENG","cityPYFW":"ZC"},
				{"cityCode":"ZUH","cityName":"珠海","cityPinYin":"ZHUHAI","cityPYFW":"ZH"},
				{"cityCode":"ZJI","cityName":"诸暨","cityPinYin":"ZHUJI","cityPYFW":"ZJ"},
				{"cityCode":"ZHM","cityName":"驻马店","cityPinYin":"ZHUMADIAN","cityPYFW":"ZMD"},
				{"cityCode":"ZHU","cityName":"涿州","cityPinYin":"ZHUOZHOU","cityPYFW":"ZZ"},
				{"cityCode":"ZHO","cityName":"株洲","cityPinYin":"ZHUZHOU","cityPYFW":"ZZ"},
				{"cityCode":"ZIB","cityName":"淄博","cityPinYin":"ZIBO","cityPYFW":"ZB"},
				{"cityCode":"ZIG","cityName":"自贡","cityPinYin":"ZIGONG","cityPYFW":"ZG"},
				{"cityCode":"ZIX","cityName":"资兴","cityPinYin":"ZIXING","cityPYFW":"ZX"},
				{"cityCode":"ZIY","cityName":"资阳","cityPinYin":"ZIYANG","cityPYFW":"ZY"},
				{"cityCode":"ZOC","cityName":"邹城","cityPinYin":"ZOUCHENG","cityPYFW":"ZC"},
				{"cityCode":"ZHH","cityName":"遵化","cityPinYin":"ZUNHUA","cityPYFW":"ZH"},
				{"cityCode":"ZYI","cityName":"遵义","cityPinYin":"ZUNYI","cityPYFW":"ZY"}
				],
			//国际机场数据 TODO
			intlairport:{
				 airports_zh :[{
					    "name": "奥尔堡",
					    "code": "AAL",
					    "kw": "AalborgAalborg Airport",
					    "city": "奥尔堡"
					},{
					    "name": "埃尔琛德",
					    "code": "AES",
					    "kw": "AalesundAalesund",
					    "city": "埃尔坦德"
					},{
					    "name": "HANGZHOU,HGH",
					    "code": "ZJH",
					    "kw": "AarhusAarhus Rail Station",
					    "city": "奥尔胡斯"
					},{
					    "name": "奥尔胡斯",
					    "code": "AAR",
					    "kw": "AarhusAarhus Tirstrup Airport",
					    "city": "奥尔胡斯"
					},{
					    "name": "埃格德斯米纳",
					    "code": "JEG",
					    "kw": "AasiaatAasiaat",
					    "city": "埃德格斯米纳"
					},{
					    "name": "阿巴丹",
					    "code": "ABD",
					    "kw": "AbadanAbadan",
					    "city": "阿巴丹"
					},{
					    "name": "阿拜昂环礁",
					    "code": "ABF",
					    "kw": "AbaiangAbaiang",
					    "city": "阿拜昂环礁"
					},{
					    "name": "阿巴坎",
					    "code": "ABA",
					    "kw": "AbakanAbakan",
					    "city": "阿巴砍"
					},{
					    "name": "阿贝歇",
					    "code": "AEH",
					    "kw": "AbecherAbecher",
					    "city": "阿贝歇"
					},{
					    "name": "阿贝马马环礁",
					    "code": "AEA",
					    "kw": "Abemama AtollAbemama Atoll",
					    "city": "阿贝马马环礁"
					},{
					    "name": "阿本古鲁",
					    "code": "OGO",
					    "kw": "AbengourouAbengourou",
					    "city": "阿本古鲁"
					},{
					    "name": "阿伯丁",
					    "code": "ABZ",
					    "kw": "AberdeenAberdeen",
					    "city": "阿伯丁"
					},{
					    "name": "阿卜哈",
					    "code": "AHB",
					    "kw": "AbhaAbha",
					    "city": "阿卜哈"
					},{
					    "name": "阿布扎比",
					    "code": "AUH",
					    "kw": "Abu DhabiAbu Dhabi International Apt",
					    "city": "阿布扎比"
					},{
					    "name": "阿布扎比巴士站",
					    "code": "ZVJ",
					    "kw": "Abu DhabiDHABI BUS STATION",
					    "city": "阿布扎比"
					},{
					    "name": "阿布新比勒",
					    "code": "ABS",
					    "kw": "Abu SimbelAbu Simbel",
					    "city": "阿布新比勒"
					},{
					    "name": "阿布贾",
					    "code": "ABV",
					    "kw": "AbujaAbuja",
					    "city": "阿布贾"
					},{
					    "name": "阿坎迪",
					    "code": "ACD",
					    "kw": "AcandiAcandi",
					    "city": "阿砍迪"
					},{
					    "name": "阿卡普尔科",
					    "code": "ACA",
					    "kw": "AcapulcoAcapulco",
					    "city": "阿卡普尔科"
					},{
					    "name": "阿卡里瓜",
					    "code": "AGV",
					    "kw": "AcariguaAcarigua",
					    "city": "阿卡里瓜"
					},{
					    "name": "阿克拉",
					    "code": "ACC",
					    "kw": "AccraAccra",
					    "city": "阿克拉1"
					},{
					    "name": "埃达克岛",
					    "code": "ADK",
					    "kw": "Adak IslandAdak Island",
					    "city": "埃达克岛"
					},{
					    "name": "阿达纳",
					    "code": "ADA",
					    "kw": "AdanaAdana",
					    "city": "阿达纳"
					},{
					    "name": "阿德莱德",
					    "code": "ADL",
					    "kw": "AdelaideAdelaide",
					    "city": "阿得莱德"
					},{
					    "name": "阿德列尔/索契",
					    "code": "AER",
					    "kw": "Adler/SochiAdler/Sochi",
					    "city": "阿德列尔"
					},{
					    "name": "阿德拉尔",
					    "code": "AZR",
					    "kw": "AdrarAdrar",
					    "city": "阿德拉尔"
					},{
					    "name": "阿福尔",
					    "code": "AFR",
					    "kw": "AforeAfore",
					    "city": "阿福尔"
					},{
					    "name": "阿加德兹",
					    "code": "AJY",
					    "kw": "AgadesAgades",
					    "city": "阿加德兹"
					},{
					    "name": "阿加迪尔",
					    "code": "AGA",
					    "kw": "AgadirAgadir",
					    "city": "阿家迪尔"
					},{
					    "name": "阿加尔塔拉",
					    "code": "IXA",
					    "kw": "AgartalaAgartala",
					    "city": "阿加尔塔拉"
					},{
					    "name": "阿格蒂岛",
					    "code": "AGX",
					    "kw": "Agatti IslandAgatti Island",
					    "city": "阿格帝岛"
					},{
					    "name": "阿格瓦",
					    "code": "AUP",
					    "kw": "AgaunAgaun",
					    "city": "阿格瓦"
					},{
					    "name": "阿让",
					    "code": "AGF",
					    "kw": "AgenAgen",
					    "city": "阿让"
					},{
					    "name": "阿赫内斯",
					    "code": "AGZ",
					    "kw": "AggeneysAggeneys",
					    "city": "阿赫内撕"
					},{
					    "name": "阿格里尼翁",
					    "code": "AGQ",
					    "kw": "AgrinionAgrinion",
					    "city": "阿格里尼翁"
					},{
					    "name": "阿瓜迪亚",
					    "code": "BQN",
					    "kw": "AguadillaAguadilla",
					    "city": "阿瓜迪垭"
					},{
					    "name": "阿瓜斯卡连特斯",
					    "code": "AGU",
					    "kw": "AguascalientesAguascalientes",
					    "city": "阿瓜斯卡连特斯"
					},{
					    "name": "粟国",
					    "code": "AGJ",
					    "kw": "AguniAguni",
					    "city": "栗国"
					},{
					    "name": "艾哈迈达巴德",
					    "code": "AMD",
					    "kw": "AhmedabadAhmedabad",
					    "city": "艾哈迈达巴德"
					},{
					    "name": "阿瓦兹",
					    "code": "AWZ",
					    "kw": "AhwazAhwaz",
					    "city": "阿瓦兹"
					},{
					    "name": "艾卢克岛",
					    "code": "AIM",
					    "kw": "Ailuk IslandAiluk Island",
					    "city": "艾卢克岛"
					},{
					    "name": "阿尤恩-埃尔-阿屈路斯",
					    "code": "AEO",
					    "kw": "Aioun el AtroussAioun el Atrouss",
					    "city": "阿尤恩"
					},{
					    "name": "艾尔奥克",
					    "code": "AIC",
					    "kw": "AirokAirok",
					    "city": "艾尔奥克"
					},{
					    "name": "艾沙尔顿",
					    "code": "AHL",
					    "kw": "AishaltonAishalton",
					    "city": "艾沙尔顿"
					},{
					    "name": "艾塔比",
					    "code": "ATP",
					    "kw": "AitapeAitape",
					    "city": "艾塔比"
					},{
					    "name": "艾图塔基岛",
					    "code": "AIT",
					    "kw": "AitutakiAitutaki",
					    "city": "艾图塔基岛"
					},{
					    "name": "艾尤拉",
					    "code": "AYU",
					    "kw": "AiyuraAiyura",
					    "city": "艾尤拉"
					},{
					    "name": "艾澡尔",
					    "code": "AJL",
					    "kw": "AizawlAizawl",
					    "city": "爱澡尔"
					},{
					    "name": "阿雅克肖",
					    "code": "AJA",
					    "kw": "AjaccioAjaccio",
					    "city": "阿雅克肖"
					},{
					    "name": "阿基埃尼",
					    "code": "AKE",
					    "kw": "AkieniAkieni",
					    "city": "阿基挨尼"
					},{
					    "name": "秋田",
					    "code": "AXT",
					    "kw": "AkitaAkita",
					    "city": "秋田"
					},{
					    "name": "阿克儒特",
					    "code": "AJJ",
					    "kw": "AkjoujtAkjoujt",
					    "city": "阿克儒特"
					},{
					    "name": "阿克拉维克",
					    "code": "LAK",
					    "kw": "AklavikAklavik",
					    "city": "阿克拉维克"
					},{
					    "name": "阿克拉",
					    "code": "AKD",
					    "kw": "AkolaAkola",
					    "city": "阿克拉"
					},{
					    "name": "阿克秋宾斯克",
					    "code": "AKX",
					    "kw": "AktyubinskAktyubinsk",
					    "city": "阿克秋宾斯克"
					},{
					    "name": "阿库雷里",
					    "code": "AEY",
					    "kw": "AkureyriAkureyri",
					    "city": "阿库雷里"
					},{
					    "name": "阿里什",
					    "code": "AAC",
					    "kw": "Al ArishAl Arish",
					    "city": "阿里什"
					},{
					    "name": "盖海达",
					    "code": "AAY",
					    "kw": "Al GhaydahAl Ghaydah",
					    "city": "盖海达"
					},{
					    "name": "阿尔荷塞马",
					    "code": "AHU",
					    "kw": "Al HoceimaAl Hoceima",
					    "city": "阿尔荷塞马"
					},{
					    "name": "巴哈",
					    "code": "ABT",
					    "kw": "Al-BahaAl-Baha",
					    "city": "巴哈"
					},{
					    "name": "富查伊拉",
					    "code": "FJR",
					    "kw": "Al-FujairahAl-Fujairah",
					    "city": "富查伊拉"
					},{
					    "name": "安拉",
					    "code": "AAV",
					    "kw": "AlahAlah",
					    "city": "安拉"
					},{
					    "name": "阿拉莫斯",
					    "code": "XAL",
					    "kw": "AlamosAlamos",
					    "city": "阿拉莫斯"
					},{
					    "name": "阿拉莫萨",
					    "code": "ALS",
					    "kw": "AlamosaAlamosa",
					    "city": "阿拉莫萨"
					},{
					    "name": "奥尔巴尼",
					    "code": "ABY",
					    "kw": "AlbanyAlbany Dougherty County Apt",
					    "city": "奥尔八尼1"
					},{
					    "name": "阿尔班加",
					    "code": "ALL",
					    "kw": "AlbengaAlbenga",
					    "city": "阿尔班加"
					},{
					    "name": "阿尔比",
					    "code": "LBI",
					    "kw": "AlbiAlbi",
					    "city": "阿尔比"
					},{
					    "name": "阿尔布克",
					    "code": "BUK",
					    "kw": "AlbuqAlbuq",
					    "city": "阿尔布克"
					},{
					    "name": "奥尔伯里",
					    "code": "ABX",
					    "kw": "AlburyAlbury",
					    "city": "奥尔伯里"
					},{
					    "name": "奥尔德尼",
					    "code": "ACI",
					    "kw": "AlderneyAlderney",
					    "city": "熬尔德尼"
					},{
					    "name": "阿莱格",
					    "code": "LEG",
					    "kw": "AlegAleg",
					    "city": "阿莱格"
					},{
					    "name": "阿勒颇",
					    "code": "ALP",
					    "kw": "AleppoAleppo",
					    "city": "阿勒颇"
					},{
					    "name": "阿尔盖罗",
					    "code": "AHO",
					    "kw": "AlgheroAlghero",
					    "city": "阿尔盖罗"
					},{
					    "name": "阿尔及尔",
					    "code": "ALG",
					    "kw": "AlgiersAlgiers",
					    "city": "阿尔及尔"
					},{
					    "name": "阿利坎特",
					    "code": "ALC",
					    "kw": "AlicanteAlicante",
					    "city": "阿利砍特"
					},{
					    "name": "艾利斯斯普林斯",
					    "code": "ASP",
					    "kw": "Alice SpringsAlice Springs",
					    "city": "艾利斯斯普林斯"
					},{
					    "name": "阿拉哈巴德",
					    "code": "IXD",
					    "kw": "AllahabadAllahabad",
					    "city": "阿拉哈巴德"
					},{
					    "name": "奥尔代斯",
					    "code": "ADY",
					    "kw": "AlldaysAlldays",
					    "city": "奥尔代斯"
					},{
					    "name": "伯利恒",
					    "code": "ABE",
					    "kw": "Allentown/Bethlehem/EastonAllentown/Bethlehem/Easton",
					    "city": "阿伦敦"
					},{
					    "name": "阿莱恩斯",
					    "code": "AIA",
					    "kw": "AllianceAlliance",
					    "city": "阿莱恩斯"
					},{
					    "name": "阿拉木图",
					    "code": "ALA",
					    "kw": "AlmatyAlmaty",
					    "city": "阿拉木图"
					},{
					    "name": "阿尔梅纳拉",
					    "code": "AMJ",
					    "kw": "AlmenaraAlmenara",
					    "city": "阿尔梅纳拉"
					},{
					    "name": "阿尔梅里亚",
					    "code": "LEI",
					    "kw": "AlmeriaAlmeria",
					    "city": "阿尔梅里亚"
					},{
					    "name": "阿洛尔",
					    "code": "ARD",
					    "kw": "Alor IslandAlor Island",
					    "city": "阿落尔"
					},{
					    "name": "阿洛陶",
					    "code": "GUR",
					    "kw": "AlotauAlotau",
					    "city": "阿洛淘"
					},{
					    "name": "阿尔普迪埃",
					    "code": "AHZ",
					    "kw": "Alpe d'HuezAlpe d'Huez",
					    "city": "阿尔普迪埃"
					},{
					    "name": "奥尔罗伊当斯",
					    "code": "AYD",
					    "kw": "Alroy DownsAlroy Downs",
					    "city": "奥尔罗伊当斯"
					},{
					    "name": "阿尔塔",
					    "code": "ALF",
					    "kw": "AltaAlta",
					    "city": "阿尔塔"
					},{
					    "name": "阿尔塔米拉",
					    "code": "ATM",
					    "kw": "AltamiraAltamira",
					    "city": "阿尔塔米拉"
					},{
					    "name": "阿尔滕莱茵",
					    "code": "ACH",
					    "kw": "AltenrheinAltenrhein",
					    "city": "阿尔滕莱茵"
					},{
					    "name": "上里奥森格尔",
					    "code": "ARR",
					    "kw": "Alto Rio SenguerrAlto Rio Senguerr",
					    "city": "上里奥森格尔"
					},{
					    "name": "奥尔顿",
					    "code": "ALN",
					    "kw": "AltonAlton",
					    "city": "奥尔顿"
					},{
					    "name": "阿尔图纳",
					    "code": "AOO",
					    "kw": "AltoonaAltoona",
					    "city": "阿尔图纳"
					},{
					    "name": "阿卢拉",
					    "code": "ALU",
					    "kw": "AlulaAlula",
					    "city": "阿卢拉"
					},{
					    "name": "阿马",
					    "code": "AMF",
					    "kw": "AmaAma",
					    "city": "阿马"
					},{
					    "name": "阿马哈伊",
					    "code": "AHI",
					    "kw": "AmahaiAmahai",
					    "city": "阿马哈伊"
					},{
					    "name": "阿马纳布",
					    "code": "AMU",
					    "kw": "AmanabAmanab",
					    "city": "阿马纳布"
					},{
					    "name": "阿马里洛",
					    "code": "AMA",
					    "kw": "AmarilloAmarillo International Apt",
					    "city": "阿马里洛"
					},{
					    "name": "安班贾",
					    "code": "IVA",
					    "kw": "AmbanjaAmbanja",
					    "city": "安班贾"
					},{
					    "name": "安巴托",
					    "code": "ATF",
					    "kw": "AmbatoAmbato",
					    "city": "安巴托"
					},{
					    "name": "安巴图迈茵蒂",
					    "code": "AMY",
					    "kw": "AmbatomaintyAmbatomainty",
					    "city": "安巴图迈茵蒂"
					},{
					    "name": "安巴通德拉扎卡",
					    "code": "WAM",
					    "kw": "AmbatondrazakaAmbatondrazaka",
					    "city": "阿巴通德拉扎卡"
					},{
					    "name": "安比卢贝",
					    "code": "AMB",
					    "kw": "AmbilobeAmbilobe",
					    "city": "安比卢贝"
					},{
					    "name": "安博因",
					    "code": "AMG",
					    "kw": "AmboinAmboin",
					    "city": "安博因安汶"
					},{
					    "name": "安汶",
					    "code": "AMQ",
					    "kw": "AmbonAmbon",
					    "city": "安博塞利"
					},{
					    "name": "安博塞利",
					    "code": "ASV",
					    "kw": "AmboseliAmboseli",
					    "city": "昂布里希"
					},{
					    "name": "昂布里希",
					    "code": "AZZ",
					    "kw": "AmbrizAmbriz",
					    "city": "安朋蒂"
					},{
					    "name": "安曼",
					    "code": "AMM",
					    "kw": "AmmanAmman Queen Alia International Apt",
					    "city": "安曼"
					},{
					    "name": "埃墨斯",
					    "code": "YEY",
					    "kw": "AmosAmos",
					    "city": "埃墨斯"
					},{
					    "name": "安帕尼希",
					    "code": "AMP",
					    "kw": "AmpanihyAmpanihy",
					    "city": "安帕尼希"
					},{
					    "name": "阿姆利则",
					    "code": "ATQ",
					    "kw": "AmritsarAmritsar",
					    "city": "阿姆利则"
					},{
					    "name": "阿姆斯特丹",
					    "code": "AMS",
					    "kw": "AmsterdamAmsterdam",
					    "city": "阿姆斯特丹"
					},{
					    "name": "阿纳",
					    "code": "AAA",
					    "kw": "AnaaAnaa",
					    "city": "阿纳"
					},{
					    "name": "阿纳科",
					    "code": "AAO",
					    "kw": "AnacoAnaco",
					    "city": "阿纳科"
					},{
					    "name": "阿纳希姆莱克",
					    "code": "YAA",
					    "kw": "Anahim LakeAnahim Lake",
					    "city": "阿纳西姆莱克"
					},{
					    "name": "阿纳克图沃克帕斯",
					    "code": "AKP",
					    "kw": "Anaktuvuk PassAnaktuvuk Pass",
					    "city": "阿纳克图沃克帕"
					},{
					    "name": "阿纳拉拉瓦",
					    "code": "HVA",
					    "kw": "AnalalavaAnalalava",
					    "city": "阿纳拉拉瓦"
					},{
					    "name": "阿纳帕",
					    "code": "AAQ",
					    "kw": "AnapaAnapa",
					    "city": "阿纳帕"
					},{
					    "name": "安科雷奇",
					    "code": "ANC",
					    "kw": "AnchorageAnchorage International Apt",
					    "city": "安克雷奇"
					},{
					    "name": "安科纳",
					    "code": "AOI",
					    "kw": "AnconaAncona",
					    "city": "安克纳"
					},{
					    "name": "安达韦拉斯",
					    "code": "ANS",
					    "kw": "AndahuaylasAndahuaylas",
					    "city": "安达韦拉斯"
					},{
					    "name": "安达穆卡",
					    "code": "ADO",
					    "kw": "AndamookaAndamooka",
					    "city": "安达穆卡"
					},{
					    "name": "安达帕",
					    "code": "ZWA",
					    "kw": "AndapaAndapa",
					    "city": "安达帕"
					},{
					    "name": "安德内斯",
					    "code": "ANX",
					    "kw": "AndenesAndenes",
					    "city": "安德内斯"
					},{
					    "name": "安德森",
					    "code": "AND",
					    "kw": "AndersonAnderson",
					    "city": "安德森"
					},{
					    "name": "安第斯",
					    "code": "ADN",
					    "kw": "AndesAndes",
					    "city": "安第斯"
					},{
					    "name": "安德鲁斯",
					    "code": "ADR",
					    "kw": "AndrewsAndrews",
					    "city": "安德鲁斯"
					},{
					    "name": "安德里亚曼纳",
					    "code": "WAD",
					    "kw": "AndriamenaAndriamena",
					    "city": "安德里亚曼纳"
					},{
					    "name": "安德罗斯城",
					    "code": "ASD",
					    "kw": "Andros TownAndros Town",
					    "city": "安德罗斯城"
					},{
					    "name": "安杜洛",
					    "code": "ANL",
					    "kw": "AnduloAndulo",
					    "city": "安杜洛"
					},{
					    "name": "阿内加达",
					    "code": "NGD",
					    "kw": "AnegadaAnegada",
					    "city": "阿内加达"
					},{
					    "name": "阿内蒂乌姆",
					    "code": "AUY",
					    "kw": "AneityumAneityum",
					    "city": "阿内帝乌姆"
					},{
					    "name": "昂热",
					    "code": "ANE",
					    "kw": "AngersAngers Marce Airport",
					    "city": "昂热"
					},{
					    "name": "安戈谢",
					    "code": "ANO",
					    "kw": "AngocheAngoche",
					    "city": "安戈谢"
					},{
					    "name": "安戈拉姆",
					    "code": "AGG",
					    "kw": "AngoramAngoram",
					    "city": "安戈拉姆"
					},{
					    "name": "昂古莱姆",
					    "code": "ANG",
					    "kw": "AngoulemeAngouleme",
					    "city": "昂古来姆"
					},{
					    "name": "安古干纳克",
					    "code": "AKG",
					    "kw": "AnguganakAnguganak",
					    "city": "安古干纳克"
					},{
					    "name": "安圭拉",
					    "code": "AXA",
					    "kw": "AnguillaAnguilla",
					    "city": "安圭拉"
					},{
					    "name": "阿尼瓦",
					    "code": "AWD",
					    "kw": "AniwaAniwa",
					    "city": "阿尼瓦"
					},{
					    "name": "昂儒昂",
					    "code": "AJN",
					    "kw": "AnjouanAnjouan",
					    "city": "昂儒昂"
					},{
					    "name": "ANKARA ESENBOGA",
					    "code": "ESB",
					    "kw": "AnkaraAnkara Esenboga Apt",
					    "city": "安卡拉"
					},{
					    "name": "安卡拉",
					    "code": "ANK",
					    "kw": "AnkaraAnkara Etimesgut Apt",
					    "city": "安卡拉"
					},{
					    "name": "安卡凡特拉",
					    "code": "JVA",
					    "kw": "AnkavandraAnkavandra",
					    "city": "安卡凡特拉"
					},{
					    "name": "安卡祖瓦布",
					    "code": "WAK",
					    "kw": "AnkazoaboAnkazoabo",
					    "city": "安卡祖凡布"
					},{
					    "name": "安纳巴",
					    "code": "AAE",
					    "kw": "AnnabaAnnaba",
					    "city": "安纳巴"
					},{
					    "name": "安奈",
					    "code": "NAI",
					    "kw": "AnnaiAnnai",
					    "city": "安奈"
					},{
					    "name": "安娜堡",
					    "code": "AOB",
					    "kw": "AnnanbergAnnanberg",
					    "city": "安娜堡"
					},{
					    "name": "阿内西",
					    "code": "NCY",
					    "kw": "AnnecyAnnecy",
					    "city": "阿内西"
					},{
					    "name": "安妮特",
					    "code": "ANN",
					    "kw": "Annette IslandAnnette Island",
					    "city": "安尼特"
					},{
					    "name": "安妮斯顿",
					    "code": "ANB",
					    "kw": "AnnistonAnniston Municipal Apt",
					    "city": "安尼斯顿"
					},{
					    "name": "安塔",
					    "code": "ATA",
					    "kw": "AntaAnta",
					    "city": "安塔"
					},{
					    "name": "安塔利亚",
					    "code": "AYT",
					    "kw": "AntalyaAntalya",
					    "city": "安塔利亚"
					},{
					    "name": "安塔那那利佛",
					    "code": "TNR",
					    "kw": "AntananarivoAntananarivo",
					    "city": "安塔那那利佛"
					},{
					    "name": "安提瓜",
					    "code": "ANU",
					    "kw": "AntiguaAntigua",
					    "city": "安提瓜"
					},{
					    "name": "安托法加斯塔",
					    "code": "ANF",
					    "kw": "AntofagastaAntofagasta",
					    "city": "安托法加斯塔"
					},{
					    "name": "安特萨洛瓦",
					    "code": "WAQ",
					    "kw": "AntsalovaAntsalova",
					    "city": "安特萨洛瓦"
					},{
					    "name": "安齐拉贝",
					    "code": "ATJ",
					    "kw": "AntsirabeAntsirabe",
					    "city": "安齐拉贝"
					},{
					    "name": "安齐拉纳纳",
					    "code": "DIE",
					    "kw": "AntsirananaAntsiranana",
					    "city": "安齐拉纳纳"
					},{
					    "name": "安特索依希",
					    "code": "WAI",
					    "kw": "AntsohihyAntsohihy",
					    "city": "安特索依希"
					},{
					    "name": "ANTWERP",
					    "code": "ZAY",
					    "kw": "AntwerpAntwerp De Keyserlei Bus Station",
					    "city": "安特卫普"
					},{
					    "name": "安特卫普",
					    "code": "ANR",
					    "kw": "AntwerpAntwerp Deurne Airport",
					    "city": "安特卫普"
					},{
					    "name": "青森",
					    "code": "AOJ",
					    "kw": "AomoriAomori",
					    "city": "青森"
					},{
					    "name": "阿帕尔坦多",
					    "code": "APO",
					    "kw": "ApartadoApartado",
					    "city": "阿帕尔坦多"
					},{
					    "name": "阿帕塔基",
					    "code": "APK",
					    "kw": "ApatakiApataki",
					    "city": "阿帕坦基"
					},{
					    "name": "APIA FAGALI I APT",
					    "code": "FGI",
					    "kw": "ApiaApia Fagali'i Apt",
					    "city": "阿皮亚"
					},{
					    "name": "阿皮亚",
					    "code": "APW",
					    "kw": "ApiaApia Faleolo Apt",
					    "city": "阿皮亚"
					},{
					    "name": "阿普尔谷",
					    "code": "APV",
					    "kw": "Apple ValleyApple Valley",
					    "city": "阿普尔谷"
					},{
					    "name": "阿拉卡茄",
					    "code": "AJU",
					    "kw": "AracajuAracaju",
					    "city": "阿拉卡茄"
					},{
					    "name": "阿拉德",
					    "code": "ARW",
					    "kw": "AradArad",
					    "city": "阿拉德"
					},{
					    "name": "阿拉吉普",
					    "code": "ARP",
					    "kw": "AragipAragip",
					    "city": "阿拉吉普"
					},{
					    "name": "阿拉瓜依纳",
					    "code": "AUX",
					    "kw": "AraguainaAraguaina",
					    "city": "阿拉瓜依纳"
					},{
					    "name": "阿兰迪斯",
					    "code": "ADI",
					    "kw": "ArandisArandis",
					    "city": "阿兰迪斯"
					},{
					    "name": "阿兰努卡",
					    "code": "AAK",
					    "kw": "AranukaAranuka",
					    "city": "阿兰怒卡"
					},{
					    "name": "阿莱亚",
					    "code": "RAE",
					    "kw": "ArarArar",
					    "city": "阿莱亚"
					},{
					    "name": "阿拉拉夸拉",
					    "code": "ACR",
					    "kw": "AraracuaraAraracuara",
					    "city": "阿拉拉夸拉1"
					},{
					    "name": "阿劳卡",
					    "code": "AUC",
					    "kw": "AraucaArauca",
					    "city": "阿劳克"
					},{
					    "name": "阿拉瓦",
					    "code": "RAW",
					    "kw": "ArawaArawa",
					    "city": "阿拉瓦"
					},{
					    "name": "阿拉沙",
					    "code": "AAX",
					    "kw": "AraxaAraxa",
					    "city": "阿拉沙"
					},{
					    "name": "阿尔巴明契",
					    "code": "AMH",
					    "kw": "Arba MintchArba Mintch",
					    "city": "阿尔巴明契"
					},{
					    "name": "阿巴勒塔斯",
					    "code": "ARO",
					    "kw": "ArboletasArboletas",
					    "city": "阿巴勒塔斯"
					},{
					    "name": "尤里卡",
					    "code": "ACV",
					    "kw": "Arcata/EurekaArcata/Eureka",
					    "city": "阿克塔"
					},{
					    "name": "北极村",
					    "code": "ARC",
					    "kw": "Arctic VillageArctic Village",
					    "city": "北极村"
					},{
					    "name": "阿雷西博",
					    "code": "ARE",
					    "kw": "AreciboArecibo",
					    "city": "阿雷西博"
					},{
					    "name": "阿雷基帕",
					    "code": "AQP",
					    "kw": "ArequipaArequipa",
					    "city": "阿雷基帕"
					},{
					    "name": "阿利卡",
					    "code": "ACM",
					    "kw": "AricaArica",
					    "city": "阿利卡"
					},{
					    "name": "阿里卡",
					    "code": "ARI",
					    "kw": "AricaArica",
					    "city": "阿里卡"
					},{
					    "name": "阿尔汉格尔斯克",
					    "code": "ARH",
					    "kw": "ArkhangelskArkhangelsk",
					    "city": "阿尔汉格尔斯克"
					},{
					    "name": "阿尔利特",
					    "code": "RLT",
					    "kw": "ArlitArlit",
					    "city": "阿尔利特"
					},{
					    "name": "阿尔利",
					    "code": "ARL",
					    "kw": "ArlyArly",
					    "city": "阿尔利"
					},{
					    "name": "阿尔梅尼亚",
					    "code": "AXM",
					    "kw": "ArmeniaArmenia",
					    "city": "阿尔梅尼亚"
					},{
					    "name": "阿尔诺",
					    "code": "AMR",
					    "kw": "ArnoArno",
					    "city": "阿尔诺"
					},{
					    "name": "阿罗阿",
					    "code": "AOA",
					    "kw": "AroaAroa",
					    "city": "阿罗阿"
					},{
					    "name": "阿罗赖岛",
					    "code": "AIS",
					    "kw": "Arorae IslandArorae Island",
					    "city": "阿罗赖岛"
					},{
					    "name": "阿拉亚斯",
					    "code": "AAI",
					    "kw": "ArraiasArraias",
					    "city": "阿拉亚斯"
					},{
					    "name": "阿瑟镇",
					    "code": "ATC",
					    "kw": "Arthur's TownArthur's Town",
					    "city": "阿瑟镇"
					},{
					    "name": "阿蒂加斯",
					    "code": "ATI",
					    "kw": "ArtigasArtigas",
					    "city": "阿蒂加斯"
					},{
					    "name": "阿鲁亚",
					    "code": "RUA",
					    "kw": "AruaArua",
					    "city": "阿鲁亚"
					},{
					    "name": "阿鲁巴",
					    "code": "AUA",
					    "kw": "ArubaAruba",
					    "city": "阿鲁巴"
					},{
					    "name": "阿鲁沙",
					    "code": "ARK",
					    "kw": "ArushaArusha",
					    "city": "阿鲁沙"
					},{
					    "name": "阿鲁脱",
					    "code": "AXR",
					    "kw": "ArutuaArutua",
					    "city": "阿里宾达"
					},{
					    "name": "爱斯基摩波因特",
					    "code": "YEK",
					    "kw": "ArviatArviat",
					    "city": "爱斯基摩波因特"
					},{
					    "name": "阿尔维斯克尔",
					    "code": "AJR",
					    "kw": "ArvidsjaurArvidsjaur",
					    "city": "阿尔维斯克尔"
					},{
					    "name": "阿萨帕",
					    "code": "APP",
					    "kw": "AsapaAsapa",
					    "city": "阿萨帕"
					},{
					    "name": "阿绍",
					    "code": "AAU",
					    "kw": "AsauAsau",
					    "city": "阿绍"
					},{
					    "name": "阿塞拉",
					    "code": "ALK",
					    "kw": "AselaAsela",
					    "city": "阿塞拉"
					},{
					    "name": "阿什伯顿",
					    "code": "ASG",
					    "kw": "AshburtonAshburton",
					    "city": "阿什伯顿"
					},{
					    "name": "阿什维尔",
					    "code": "AVL",
					    "kw": "AshevilleAsheville",
					    "city": "阿什维尔"
					},{
					    "name": "阿什哈巴德",
					    "code": "ASB",
					    "kw": "AshgabatAshgabat",
					    "city": "阿什哈巴德"
					},{
					    "name": "阿什兰",
					    "code": "ASX",
					    "kw": "AshlandAshland",
					    "city": "阿什兰1"
					},{
					    "name": "阿斯马拉",
					    "code": "ASM",
					    "kw": "AsmaraAsmara",
					    "city": "阿斯马拉"
					},{
					    "name": "阿索萨",
					    "code": "ASO",
					    "kw": "AsosaAsosa",
					    "city": "阿索萨"
					},{
					    "name": "阿斯彭",
					    "code": "ASE",
					    "kw": "AspenAspen",
					    "city": "阿斯彭"
					},{
					    "name": "阿萨布",
					    "code": "ASA",
					    "kw": "AssabAssab",
					    "city": "阿萨布"
					},{
					    "name": "阿西乌特",
					    "code": "ATZ",
					    "kw": "AssiutAssiut",
					    "city": "阿西乌特"
					},{
					    "name": "切利诺格勒",
					    "code": "TSE",
					    "kw": "AstanaAstana",
					    "city": "奇卡帕"
					},{
					    "name": "阿斯特拉罕",
					    "code": "ASF",
					    "kw": "AstrakhanAstrakhan",
					    "city": "阿斯特拉罕"
					},{
					    "name": "阿斯图里亚斯",
					    "code": "OVD",
					    "kw": "AsturiasAsturias",
					    "city": "奥维多"
					},{
					    "name": "阿斯旺",
					    "code": "ASW",
					    "kw": "AswanAswan",
					    "city": "阿斯旺"
					},{
					    "name": "阿坦布阿",
					    "code": "ABU",
					    "kw": "AtambuaAtambua",
					    "city": "阿坦布阿"
					},{
					    "name": "阿塔克",
					    "code": "AXK",
					    "kw": "AtaqAtaq",
					    "city": "阿塔克"
					},{
					    "name": "阿塔尔",
					    "code": "ATR",
					    "kw": "AtarAtar",
					    "city": "阿塔尔"
					},{
					    "name": "阿特巴拉",
					    "code": "ATB",
					    "kw": "AtbaraAtbara",
					    "city": "阿特巴拉"
					},{
					    "name": "阿蒂",
					    "code": "ATV",
					    "kw": "AtiAti",
					    "city": "阿蒂"
					},{
					    "name": "阿蒂乌岛",
					    "code": "AIU",
					    "kw": "Atiu IslandAtiu Island",
					    "city": "阿蒂乌岛"
					},{
					    "name": "阿图奥纳",
					    "code": "AUQ",
					    "kw": "AtuonaAtuona",
					    "city": "阿图奥纳"
					},{
					    "name": "古里耶夫",
					    "code": "GUW",
					    "kw": "AtyrauAtyrau",
					    "city": "古利也夫"
					},{
					    "name": "奥本",
					    "code": "AUO",
					    "kw": "AuburnAuburn",
					    "city": "奥本"
					},{
					    "name": "奥克兰",
					    "code": "AKL",
					    "kw": "AucklandAuckland International Apt",
					    "city": "奥克兰1"
					},{
					    "name": "奥古斯塔",
					    "code": "AGS",
					    "kw": "AugustaAugusta Bush Field",
					    "city": "奥古斯塔"
					},{
					    "name": "欧里亚克",
					    "code": "AUR",
					    "kw": "AurillacAurillac",
					    "city": "欧里亚克"
					},{
					    "name": "阿维尼翁",
					    "code": "AVN",
					    "kw": "AvignonAvignon",
					    "city": "阿维尼翁"
					},{
					    "name": "阿武阿武",
					    "code": "AVU",
					    "kw": "Avu AvuAvu Avu",
					    "city": "阿武阿武"
					},{
					    "name": "阿瓦尔",
					    "code": "AWR",
					    "kw": "AwarAwar",
					    "city": "阿瓦尔"
					},{
					    "name": "阿克苏姆",
					    "code": "AXU",
					    "kw": "AxumAxum",
					    "city": "阿克苏姆"
					},{
					    "name": "阿亚库乔",
					    "code": "AYP",
					    "kw": "AyacuchoAyacucho",
					    "city": "阿亚库乔"
					},{
					    "name": "阿亚库乔",
					    "code": "AYC",
					    "kw": "AyacuchoAyacucho",
					    "city": "阿亚库乔1"
					},{
					    "name": "阿亚瓦西",
					    "code": "AYW",
					    "kw": "AyawasiAyawasi",
					    "city": "阿亚瓦西"
					},{
					    "name": "巴博",
					    "code": "BXB",
					    "kw": "BaboBabo",
					    "city": "巴博"
					},{
					    "name": "巴克乌",
					    "code": "BCM",
					    "kw": "BacauBacau",
					    "city": "巴克务"
					},{
					    "name": "巴科洛德",
					    "code": "BCD",
					    "kw": "BacolodBacolod",
					    "city": "巴科洛德"
					},{
					    "name": "巴达霍斯",
					    "code": "BJZ",
					    "kw": "BadajozBadajoz",
					    "city": "巴达霍斯"
					},{
					    "name": "巴代",
					    "code": "BXD",
					    "kw": "BadeBade",
					    "city": "巴代"
					},{
					    "name": "巴丁",
					    "code": "BDN",
					    "kw": "BadinBadin",
					    "city": "巴丁"
					},{
					    "name": "巴富萨姆",
					    "code": "BFX",
					    "kw": "BafoussamBafoussam",
					    "city": "巴富萨姆"
					},{
					    "name": "巴格达",
					    "code": "BGT",
					    "kw": "BagdadBagdad",
					    "city": "巴格达"
					},{
					    "name": "巴格多格拉",
					    "code": "IXB",
					    "kw": "BagdograBagdogra",
					    "city": "巴格多格拉"
					},{
					    "name": "巴格隆",
					    "code": "BGL",
					    "kw": "BaglungBaglung",
					    "city": "巴格龙"
					},{
					    "name": "碧瑶",
					    "code": "BAG",
					    "kw": "BaguioBaguio",
					    "city": "碧瑶"
					},{
					    "name": "巴哈尔达尔",
					    "code": "BJR",
					    "kw": "Bahar DarBahar Dar",
					    "city": "巴哈尔达尔"
					},{
					    "name": "巴哈瓦尔布尔",
					    "code": "BHV",
					    "kw": "BahawalpurBahawalpur",
					    "city": "巴哈瓦尔布尔"
					},{
					    "name": "布兰卡港",
					    "code": "BHI",
					    "kw": "Bahia BlancaBahia Blanca",
					    "city": "布兰卡港"
					},{
					    "name": "巴林",
					    "code": "BAH",
					    "kw": "BahrainBahrain",
					    "city": "巴林"
					},{
					    "name": "巴亚马雷",
					    "code": "BAY",
					    "kw": "Baia MareBaia Mare",
					    "city": "巴雅马雷"
					},{
					    "name": "拜多阿",
					    "code": "BIB",
					    "kw": "BaidoaBaidoa",
					    "city": "拜多阿"
					},{
					    "name": "拜穆鲁",
					    "code": "VMU",
					    "kw": "BaimuruBaimuru",
					    "city": "拜穆鲁"
					},{
					    "name": "拜恩斯代尔",
					    "code": "BSJ",
					    "kw": "BairnsdaleBairnsdale",
					    "city": "拜恩斯代尔"
					},{
					    "name": "拜塔迪",
					    "code": "BIT",
					    "kw": "BaitadiBaitadi",
					    "city": "拜塔迪"
					},{
					    "name": "巴贾瓦",
					    "code": "BJW",
					    "kw": "BajawaBajawa",
					    "city": "巴贾瓦"
					},{
					    "name": "巴章",
					    "code": "BJH",
					    "kw": "BajhangBajhang",
					    "city": "巴章"
					},{
					    "name": "巴克拉兰",
					    "code": "BKM",
					    "kw": "BakalalanBakalalan",
					    "city": "巴克拉兰"
					},{
					    "name": "巴克尔",
					    "code": "BXE",
					    "kw": "BakelBakel",
					    "city": "巴克尔"
					},{
					    "name": "贝克莱克",
					    "code": "YBK",
					    "kw": "Baker LakeBaker Lake",
					    "city": "贝克莱克"
					},{
					    "name": "贝克",
					    "code": "BKE",
					    "kw": "BakerBaker",
					    "city": "贝克"
					},{
					    "name": "贝克斯菲尔德",
					    "code": "BFL",
					    "kw": "BakersfieldBakersfield",
					    "city": "贝克斯菲尔德"
					},{
					    "name": "巴卡夫约多尔",
					    "code": "BJD",
					    "kw": "BakkafjordurBakkafjordur",
					    "city": "巴卡夫约多尔"
					},{
					    "name": "巴库马",
					    "code": "BMF",
					    "kw": "BakoumaBakouma",
					    "city": "巴库马"
					},{
					    "name": "巴库",
					    "code": "BAK",
					    "kw": "BakuBaku",
					    "city": "巴库"
					},{
					    "name": "Baku Heydar Int'l Apt",
					    "code": "GYD",
					    "kw": "BakuBaku Heydar Int'l Apt",
					    "city": "巴库"
					},{
					    "name": "巴拉莱",
					    "code": "BAS",
					    "kw": "BalalaeBalalae",
					    "city": "巴拉来"
					},{
					    "name": "巴尔博亚",
					    "code": "BLB",
					    "kw": "BalboaBalboa",
					    "city": "巴尔博雅"
					},{
					    "name": "巴累尔",
					    "code": "BQA",
					    "kw": "BalerBaler",
					    "city": "巴累尔"
					},{
					    "name": "巴利开息尔",
					    "code": "BZI",
					    "kw": "BalikesirBalikesir Airport",
					    "city": "巴利开息尔"
					},{
					    "name": "巴厘巴板",
					    "code": "BPN",
					    "kw": "BalikpapanBalikpapan",
					    "city": "巴厘巴板"
					},{
					    "name": "巴利莫",
					    "code": "OPU",
					    "kw": "BalimoBalimo",
					    "city": "巴利莫"
					},{
					    "name": "巴尔马塞达",
					    "code": "BBA",
					    "kw": "BalmacedaBalmaceda",
					    "city": "巴尔马塞达"
					},{
					    "name": "巴尔萨斯",
					    "code": "BSS",
					    "kw": "BalsasBalsas",
					    "city": "巴尔萨斯"
					},{
					    "name": "巴尔的摩",
					    "code": "BWI",
					    "kw": "BaltimoreBaltimore Washington International Apt",
					    "city": "巴尔的摩"
					},{
					    "name": "巴卢尔卡德",
					    "code": "RGH",
					    "kw": "BalurghatBalurghat",
					    "city": "巴鲁尔卡德"
					},{
					    "name": "巴马科",
					    "code": "BKO",
					    "kw": "BamakoBamako",
					    "city": "巴马科"
					},{
					    "name": "巴米扬",
					    "code": "BIN",
					    "kw": "BamiyanBamiyan",
					    "city": "巴米扬"
					},{
					    "name": "班达亚齐",
					    "code": "BTJ",
					    "kw": "Banda AcehBanda Aceh",
					    "city": "班达压齐"
					},{
					    "name": "班达奈拉",
					    "code": "NDA",
					    "kw": "BandanairaBandanaira",
					    "city": "班达奈拉"
					},{
					    "name": "阿巴斯港",
					    "code": "BND",
					    "kw": "Bandar AbbasBandar Abbas",
					    "city": "阿巴斯港"
					},{
					    "name": "南榜港",
					    "code": "TKG",
					    "kw": "Bandar LampungBandar Lampung",
					    "city": "楠旁港"
					},{
					    "name": "林格港",
					    "code": "BDH",
					    "kw": "Bandar LengehBandar Lengeh",
					    "city": "林格港"
					},{
					    "name": "班顿杜",
					    "code": "FDU",
					    "kw": "BandunduBandundu",
					    "city": "班顿杜"
					},{
					    "name": "班加罗尔",
					    "code": "BLR",
					    "kw": "BangaloreBangalore",
					    "city": "班加罗尔"
					},{
					    "name": "邦加苏",
					    "code": "BGU",
					    "kw": "BangassouBangassou",
					    "city": "帮加苏"
					},{
					    "name": "曼谷国际",
					    "code": "BKK",
					    "kw": "BangkokBangkok",
					    "city": "曼谷"
					},{
					    "name": "班吉",
					    "code": "BGF",
					    "kw": "BanguiBangui",
					    "city": "班吉"
					},{
					    "name": "巴尼亚拉",
					    "code": "BYX",
					    "kw": "BaniyalaBaniyala",
					    "city": "巴尼亚拉"
					},{
					    "name": "巴尼亚卢卡",
					    "code": "BNX",
					    "kw": "Banja LukaBanja Luka",
					    "city": "巴尼亚卢卡"
					},{
					    "name": "班珠尔",
					    "code": "BJL",
					    "kw": "BanjulBanjul",
					    "city": "班珠尔"
					},{
					    "name": "班克斯敦",
					    "code": "BWU",
					    "kw": "BankstownBankstown",
					    "city": "班克斯敦"
					},{
					    "name": "班努",
					    "code": "BNP",
					    "kw": "BannuBannu",
					    "city": "班努"
					},{
					    "name": "班茨",
					    "code": "BNZ",
					    "kw": "BanzBanz",
					    "city": "班茨"
					},{
					    "name": "巴港",
					    "code": "BHB",
					    "kw": "Bar HarborBar Harbor",
					    "city": "巴港"
					},{
					    "name": "巴拉科阿",
					    "code": "BCA",
					    "kw": "BaracoaBaracoa",
					    "city": "巴拉科阿"
					},{
					    "name": "巴拉奥纳",
					    "code": "BRX",
					    "kw": "BarahonaBarahona",
					    "city": "巴拉奥纳"
					},{
					    "name": "巴拉米塔",
					    "code": "BMJ",
					    "kw": "BaramitaBaramita",
					    "city": "巴拉米塔"
					},{
					    "name": "巴巴多斯",
					    "code": "BGI",
					    "kw": "BarbadosBarbados",
					    "city": "巴巴多斯"
					},{
					    "name": "巴布达",
					    "code": "BBQ",
					    "kw": "BarbudaBarbuda",
					    "city": "巴布达"
					},{
					    "name": "巴塞罗那",
					    "code": "BCN",
					    "kw": "BarcelonaBarcelona Apt",
					    "city": "巴塞罗那1"
					},{
					    "name": "巴尔代雷",
					    "code": "BSY",
					    "kw": "BarderaBardera",
					    "city": "巴尔代雷"
					},{
					    "name": "巴尔杜福斯",
					    "code": "BDU",
					    "kw": "BardufossBardufoss",
					    "city": "昌都"
					},{
					    "name": "巴里纳斯",
					    "code": "BNS",
					    "kw": "BarinasBarinas",
					    "city": "巴里纳斯"
					},{
					    "name": "巴里奥",
					    "code": "BBN",
					    "kw": "BarioBario",
					    "city": "巴里奥"
					},{
					    "name": "巴尔瑙尔",
					    "code": "BAX",
					    "kw": "BarnaulBarnaul",
					    "city": "巴尔瑙尔"
					},{
					    "name": "巴罗拉伊泰",
					    "code": "RRI",
					    "kw": "BaroraBarora",
					    "city": "巴罗拉伊泰"
					},{
					    "name": "巴基西梅托",
					    "code": "BRM",
					    "kw": "BarquisimetoBarquisimeto",
					    "city": "阿基西梅托"
					},{
					    "name": "巴腊多科尔达",
					    "code": "BDC",
					    "kw": "Barra do CordaBarra do Corda",
					    "city": "巴腊多科尔达"
					},{
					    "name": "巴拉",
					    "code": "BQQ",
					    "kw": "BarraBarra",
					    "city": "巴拉1"
					},{
					    "name": "巴拉",
					    "code": "BRR",
					    "kw": "BarraBarra",
					    "city": "巴拉"
					},{
					    "name": "巴兰卡维梅哈",
					    "code": "EJA",
					    "kw": "BarrancabermejaBarrancabermeja",
					    "city": "巴兰卡维梅哈"
					},{
					    "name": "巴兰康米纳斯",
					    "code": "NBB",
					    "kw": "BarrancominasBarrancominas",
					    "city": "巴兰康米纳斯"
					},{
					    "name": "巴兰基亚",
					    "code": "BAQ",
					    "kw": "BarranquillaBarranquilla",
					    "city": "巴兰基亚"
					},{
					    "name": "巴雷拉斯",
					    "code": "BRA",
					    "kw": "BarreirasBarreiras",
					    "city": "巴类拉斯"
					},{
					    "name": "巴罗因弗内斯",
					    "code": "BWF",
					    "kw": "Barrow-in-FurnessBarrow-in-Furness",
					    "city": "巴卢因佛内斯"
					},{
					    "name": "巴尔特",
					    "code": "BBH",
					    "kw": "BarthBarth",
					    "city": "巴尔特"
					},{
					    "name": "巴蒂卡",
					    "code": "GFO",
					    "kw": "BarticaBartica",
					    "city": "巴迪卡"
					},{
					    "name": "巴桑库苏",
					    "code": "BSU",
					    "kw": "BasankusuBasankusu",
					    "city": "巴桑库苏"
					},{
					    "name": "巴斯科",
					    "code": "BSO",
					    "kw": "BascoBasco",
					    "city": "巴斯科"
					},{
					    "name": "巴士拉",
					    "code": "BSR",
					    "kw": "BasraBasra",
					    "city": "巴什拉"
					},{
					    "name": "巴斯特尔",
					    "code": "BBR",
					    "kw": "Basse TerreBasse Terre",
					    "city": "巴斯特尔"
					},{
					    "name": "勃生",
					    "code": "BSX",
					    "kw": "BasseinBassein",
					    "city": "勃生"
					},{
					    "name": "巴斯蒂亚",
					    "code": "BIA",
					    "kw": "BastiaBastia",
					    "city": "巴斯迪亚"
					},{
					    "name": "巴塔",
					    "code": "BSG",
					    "kw": "BataBata",
					    "city": "巴塔"
					},{
					    "name": "巴都贝萨尔",
					    "code": "BTH",
					    "kw": "BatamBatam",
					    "city": "巴都贝萨尔"
					},{
					    "name": "巴坦加福",
					    "code": "BTG",
					    "kw": "BatangafoBatangafo",
					    "city": "巴谈加福"
					},{
					    "name": "巴瑟斯特岛",
					    "code": "BRT",
					    "kw": "Bathurst IslandBathurst Island",
					    "city": "巴瑟斯特岛"
					},{
					    "name": "巴瑟斯特",
					    "code": "ZBF",
					    "kw": "BathurstBathurst",
					    "city": "巴瑟斯特"
					},{
					    "name": "白特曼",
					    "code": "BAL",
					    "kw": "BatmanBatman",
					    "city": "白特曼"
					},{
					    "name": "巴特姆",
					    "code": "BXM",
					    "kw": "BatomBatom",
					    "city": "巴特姆"
					},{
					    "name": "巴吞鲁日",
					    "code": "BTR",
					    "kw": "Baton RougeBaton Rouge Ryan Apt",
					    "city": "巴吞鲁日"
					},{
					    "name": "巴陶里",
					    "code": "OUR",
					    "kw": "BatouriBatouri",
					    "city": "巴陶里"
					},{
					    "name": "博茨菲尤尔",
					    "code": "BJF",
					    "kw": "BatsfjordBatsfjord",
					    "city": "博茨菲尤尔"
					},{
					    "name": "巴提卡洛阿",
					    "code": "BTC",
					    "kw": "BatticaloaBatticaloa",
					    "city": "巴提卡洛阿"
					},{
					    "name": "巴统",
					    "code": "BUS",
					    "kw": "BatumiBatumi",
					    "city": "巴统"
					},{
					    "name": "巴务巴务",
					    "code": "BUW",
					    "kw": "BaubauBaubau",
					    "city": "巴务巴务"
					},{
					    "name": "包鲁",
					    "code": "BAU",
					    "kw": "BauruBauru",
					    "city": "包鲁"
					},{
					    "name": "巴万",
					    "code": "BWJ",
					    "kw": "BawanBawan",
					    "city": "巴万"
					},{
					    "name": "巴亚莫",
					    "code": "BYM",
					    "kw": "BayamoBayamo",
					    "city": "巴亚莫"
					},{
					    "name": "拜罗伊特",
					    "code": "BYU",
					    "kw": "BayreuthBayreuth",
					    "city": "拜罗伊特"
					},{
					    "name": "贝拉纳纳",
					    "code": "WBE",
					    "kw": "BealananaBealanana",
					    "city": "贝拉纳纳"
					},{
					    "name": "波弗特",
					    "code": "BFT",
					    "kw": "BeaufortBeaufort",
					    "city": "波佛特"
					},{
					    "name": "比弗福尔斯",
					    "code": "BFP",
					    "kw": "Beaver FallsBeaver Falls",
					    "city": "比佛福尔斯"
					},{
					    "name": "贝沙尔",
					    "code": "CBH",
					    "kw": "BecharBechar",
					    "city": "贝沙尔"
					},{
					    "name": "贝德福德",
					    "code": "BED",
					    "kw": "BedfordBedford",
					    "city": "贝德福德1"
					},{
					    "name": "贝德福德",
					    "code": "BFR",
					    "kw": "BedfordBedford",
					    "city": "贝德福德"
					},{
					    "name": "比夫岛",
					    "code": "EIS",
					    "kw": "Beef IslandBeef Island",
					    "city": "比夫岛"
					},{
					    "name": "贝尔谢巴",
					    "code": "BEV",
					    "kw": "Beer ShebaBeer Sheba",
					    "city": "贝尔谢巴"
					},{
					    "name": "贝范德里亚纳",
					    "code": "WBD",
					    "kw": "BefandrianaBefandriana",
					    "city": "贝范德里亚纳"
					},{
					    "name": "贝卡",
					    "code": "BEI",
					    "kw": "BeicaBeica",
					    "city": "贝卡"
					},{
					    "name": "贝达",
					    "code": "LAQ",
					    "kw": "BeidaBeida",
					    "city": "贝达"
					},{
					    "name": "贝汉",
					    "code": "BHN",
					    "kw": "BeihanBeihan",
					    "city": "贝汉"
					},{
					    "name": "贝拉",
					    "code": "BEW",
					    "kw": "BeiraBeira",
					    "city": "贝拉"
					},{
					    "name": "贝鲁特",
					    "code": "BEY",
					    "kw": "BeirutBeirut",
					    "city": "贝鲁特"
					},{
					    "name": "贝贾亚",
					    "code": "BJA",
					    "kw": "BejaiaBejaia",
					    "city": "贝贾亚"
					},{
					    "name": "贝基利",
					    "code": "OVA",
					    "kw": "BekilyBekily",
					    "city": "贝基利"
					},{
					    "name": "美拉亚",
					    "code": "BLG",
					    "kw": "BelagaBelaga",
					    "city": "美拉亚"
					},{
					    "name": "贝莱普群岛",
					    "code": "BMY",
					    "kw": "Belep IslandBelep Island",
					    "city": "贝来普群岛"
					},{
					    "name": "CIYT IN UK",
					    "code": "BHD",
					    "kw": "BelfastBelfast City Apt",
					    "city": "贝尔法斯特"
					},{
					    "name": "贝尔法斯特",
					    "code": "BFS",
					    "kw": "BelfastBelfast International Apt",
					    "city": "贝尔法斯特"
					},{
					    "name": "贝尔福",
					    "code": "BOR",
					    "kw": "BelfortBelfort",
					    "city": "贝尔福"
					},{
					    "name": "贝尔高姆",
					    "code": "IXG",
					    "kw": "BelgaumBelgaum",
					    "city": "贝尔高姆"
					},{
					    "name": "贝尔格莱德",
					    "code": "BEG",
					    "kw": "BelgradeBelgrade",
					    "city": "贝尔格莱德"
					},{
					    "name": "伯利兹城",
					    "code": "BZE",
					    "kw": "Belize CityBelize City Goldson Intl Apt",
					    "city": "伯利兹城"
					},{
					    "name": "BZ CUTY MUNICIPAL",
					    "code": "TZA",
					    "kw": "Belize CityBelize City Municipal Apt",
					    "city": "伯利兹城"
					},{
					    "name": "贝拉乌尼翁",
					    "code": "BUV",
					    "kw": "Bella UnionBella Union",
					    "city": "贝拉务尼翁"
					},{
					    "name": "贝拉里",
					    "code": "BEP",
					    "kw": "BellaryBellary",
					    "city": "贝拉里"
					},{
					    "name": "贝尔恰斯",
					    "code": "BCS",
					    "kw": "Belle ChasseBelle Chasse",
					    "city": "贝尔恰斯"
					},{
					    "name": "贝拉纳岛",
					    "code": "BNY",
					    "kw": "BellonaBellona",
					    "city": "贝拉纳岛"
					},{
					    "name": "贝尔蒙特",
					    "code": "BVM",
					    "kw": "BelmonteBelmonte",
					    "city": "贝尔蒙特"
					},{
					    "name": "贝卢",
					    "code": "BMD",
					    "kw": "BeloBelo",
					    "city": "贝卢"
					},{
					    "name": "伯米吉",
					    "code": "BJI",
					    "kw": "BemidjiBemidji",
					    "city": "伯米击"
					},{
					    "name": "本贝库拉",
					    "code": "BEB",
					    "kw": "BenbeculaBenbecula",
					    "city": "本布库拉"
					},{
					    "name": "班加西",
					    "code": "BEN",
					    "kw": "BenghaziBenghazi",
					    "city": "班加西"
					},{
					    "name": "朋库卢",
					    "code": "BKS",
					    "kw": "BengkuluBengkulu",
					    "city": "朋库卢"
					},{
					    "name": "本格拉",
					    "code": "BUG",
					    "kw": "BenguelaBenguela",
					    "city": "本格拉"
					},{
					    "name": "贝尼",
					    "code": "BNC",
					    "kw": "BeniBeni",
					    "city": "贝尼"
					},{
					    "name": "贝宁城",
					    "code": "BNI",
					    "kw": "Benin CityBenin City",
					    "city": "贝宁城"
					},{
					    "name": "本吉纳",
					    "code": "BJK",
					    "kw": "BenjinaBenjina",
					    "city": "本吉纳"
					},{
					    "name": "本尼茨维尔",
					    "code": "BTN",
					    "kw": "BennettsvilleBennettsville",
					    "city": "本尼次维尔"
					},{
					    "name": "本斯巴赫",
					    "code": "BSP",
					    "kw": "BensbachBensbach",
					    "city": "本斯巴和"
					},{
					    "name": "伯贝拉",
					    "code": "BBO",
					    "kw": "BerberaBerbera",
					    "city": "伯贝拉"
					},{
					    "name": "贝贝拉提",
					    "code": "BBT",
					    "kw": "BerberatiBerberati",
					    "city": "贝贝拉提"
					},{
					    "name": "贝利比",
					    "code": "BBV",
					    "kw": "BerebyBereby",
					    "city": "贝利比"
					},{
					    "name": "BEREINA",
					    "code": "BEA",
					    "kw": "BereinaBereina",
					    "city": "贝雷纳"
					},{
					    "name": "贝伦斯里弗",
					    "code": "YBV",
					    "kw": "Berens RiverBerens River",
					    "city": "贝伦斯里佛"
					},{
					    "name": "卑尔根",
					    "code": "BGO",
					    "kw": "BergenBergen",
					    "city": "卑尔根"
					},{
					    "name": "贝尔热拉克",
					    "code": "EGC",
					    "kw": "BergeracBergerac",
					    "city": "贝尔热拉克"
					},{
					    "name": "贝勒沃格",
					    "code": "BVG",
					    "kw": "BerlevagBerlevag",
					    "city": "贝勒沃格"
					},{
					    "name": "柏林勃兰登堡",
					    "code": "BER",
					    "kw": "BerlinBerlin Brandenburg Apt",
					    "city": "柏林1"
					},{
					    "name": "BERLIN EAST",
					    "code": "SXF",
					    "kw": "BerlinBerlin Schonefeld Apt",
					    "city": "柏林1"
					},{
					    "name": "BERLIN WEST TEGE",
					    "code": "TXL",
					    "kw": "BerlinBerlin Tegel Apt",
					    "city": "柏林1"
					},{
					    "name": "BERLIN WEST TEMPE",
					    "code": "THF",
					    "kw": "BerlinBerlin Tempelhof Apt",
					    "city": "柏林1"
					},{
					    "name": "贝尔梅霍",
					    "code": "BJO",
					    "kw": "BermejoBermejo",
					    "city": "贝尔梅霍"
					},{
					    "name": "百慕大哈密尔顿",
					    "code": "BDA",
					    "kw": "BermudaBermuda International",
					    "city": "百幕大哈密尔顿"
					},{
					    "name": "伯尔尼",
					    "code": "BRN",
					    "kw": "BerneBerne Belp",
					    "city": "伯尔尼"
					},{
					    "name": "贝罗罗哈",
					    "code": "WBO",
					    "kw": "BerorohaBeroroha",
					    "city": "贝罗罗哈"
					},{
					    "name": "贝尔图阿",
					    "code": "BTA",
					    "kw": "BertouaBertoua",
					    "city": "贝尔图阿"
					},{
					    "name": "贝鲁",
					    "code": "BEZ",
					    "kw": "BeruBeru",
					    "city": "贝鲁"
					},{
					    "name": "贝萨兰皮",
					    "code": "BPY",
					    "kw": "BesalampyBesalampy",
					    "city": "贝萨兰皮"
					},{
					    "name": "贝蒂奥基",
					    "code": "BKU",
					    "kw": "BetiokyBetioky",
					    "city": "贝迪奥吉"
					},{
					    "name": "贝图",
					    "code": "BTB",
					    "kw": "BetouBetou",
					    "city": "贝图"
					},{
					    "name": "贝弗利",
					    "code": "BVY",
					    "kw": "BeverlyBeverly",
					    "city": "贝弗利"
					},{
					    "name": "贝济耶",
					    "code": "BZR",
					    "kw": "BeziersBeziers",
					    "city": "贝济耶"
					},{
					    "name": "拜尔瓦",
					    "code": "BWA",
					    "kw": "BhairawaBhairawa",
					    "city": "拜尔瓦"
					},{
					    "name": "八莫",
					    "code": "BMO",
					    "kw": "BhamoBhamo",
					    "city": "八莫"
					},{
					    "name": "珀勒特普尔",
					    "code": "BHR",
					    "kw": "BharatpurBharatpur",
					    "city": "珀勒特普尔"
					},{
					    "name": "珀丁达",
					    "code": "BUP",
					    "kw": "BhatindaBhatinda",
					    "city": "珀丁达"
					},{
					    "name": "包纳加尔",
					    "code": "BHU",
					    "kw": "BhavnagarBhavnagar",
					    "city": "包纳加尔"
					},{
					    "name": "波杰普尔",
					    "code": "BHP",
					    "kw": "BhojpurBhojpur",
					    "city": "波杰普尔"
					},{
					    "name": "博帕尔",
					    "code": "BHO",
					    "kw": "BhopalBhopal",
					    "city": "博帕尔"
					},{
					    "name": "布巴内斯瓦尔",
					    "code": "BBI",
					    "kw": "BhubaneswarBhubaneswar",
					    "city": "布把内斯瓦尔"
					},{
					    "name": "布季",
					    "code": "BHJ",
					    "kw": "BhujBhuj",
					    "city": "布季"
					},{
					    "name": "布尔海德城",
					    "code": "BHC",
					    "kw": "Bhurban HeliportBhurban Heliport",
					    "city": "布尔海德"
					},{
					    "name": "比阿克",
					    "code": "BIK",
					    "kw": "BiakBiak",
					    "city": "比阿克"
					},{
					    "name": "比亚里茨",
					    "code": "BIQ",
					    "kw": "BiarritzBiarritz",
					    "city": "比亚里次茨"
					},{
					    "name": "比亚鲁",
					    "code": "BRP",
					    "kw": "BiaruBiaru",
					    "city": "比亚鲁"
					},{
					    "name": "大贝尔城",
					    "code": "RBF",
					    "kw": "Big BearBig Bear",
					    "city": "大贝尔城"
					},{
					    "name": "比格克里克",
					    "code": "BGK",
					    "kw": "Big CreekBig Creek",
					    "city": "比格克里克"
					},{
					    "name": "大瀑布城",
					    "code": "WBR",
					    "kw": "Big RapidsBig Rapids",
					    "city": "大瀑布城"
					},{
					    "name": "比卡内尔",
					    "code": "BKB",
					    "kw": "BikanerBikaner",
					    "city": "比卡内尔"
					},{
					    "name": "比拉斯普尔",
					    "code": "PAB",
					    "kw": "BilaspurBilaspur",
					    "city": "比拉斯普"
					},{
					    "name": "毕尔巴鄂",
					    "code": "BIO",
					    "kw": "BilbaoBilbao",
					    "city": "比尔巴鄂"
					},{
					    "name": "比尔德拉勒",
					    "code": "BIU",
					    "kw": "BildudalurBildudalur",
					    "city": "比尔德拉勒"
					},{
					    "name": "比林斯",
					    "code": "BIL",
					    "kw": "BillingsBillings",
					    "city": "比林斯"
					},{
					    "name": "比伦德",
					    "code": "BLL",
					    "kw": "BillundBillund",
					    "city": "比伦德"
					},{
					    "name": "比马",
					    "code": "BMU",
					    "kw": "BimaBima",
					    "city": "比米尼"
					},{
					    "name": "宾汉顿",
					    "code": "BGM",
					    "kw": "BinghamtonBinghamton",
					    "city": "比尼古尼"
					},{
					    "name": "比尼古尼",
					    "code": "XBN",
					    "kw": "BiniguniBiniguni",
					    "city": "宾图卢"
					},{
					    "name": "宾图卢",
					    "code": "BTU",
					    "kw": "BintuluBintulu",
					    "city": "宾图尼"
					},{
					    "name": "宾图尼",
					    "code": "NTI",
					    "kw": "BintuniBintuni",
					    "city": "比劳"
					},{
					    "name": "比劳",
					    "code": "IRO",
					    "kw": "BiraoBirao",
					    "city": "比拉特纳加尔"
					},{
					    "name": "伯奇克里克",
					    "code": "KBC",
					    "kw": "Birch CreekBirch Creek",
					    "city": "博德岛"
					},{
					    "name": "伯兹维尔",
					    "code": "BVI",
					    "kw": "BirdsvilleBirdsville",
					    "city": "比尔詹德"
					},{
					    "name": "比尔詹德",
					    "code": "XBJ",
					    "kw": "BirjandBirjand",
					    "city": "比沙"
					},{
					    "name": "伯明翰",
					    "code": "BHM",
					    "kw": "BirminghamBirmingham",
					    "city": "伯明翰1"
					},{
					    "name": "伯明翰",
					    "code": "BHX",
					    "kw": "BirminghamBirmingham International Airport",
					    "city": "伯明翰"
					},{
					    "name": "伏龙芝",
					    "code": "FRU",
					    "kw": "BishkekBishkek",
					    "city": "伏龙芝"
					},{
					    "name": "毕晓普",
					    "code": "BIH",
					    "kw": "BishopBishop",
					    "city": "比晓普"
					},{
					    "name": "比斯克拉",
					    "code": "BSK",
					    "kw": "BiskraBiskra",
					    "city": "比斯克拉"
					},{
					    "name": "比斯利格",
					    "code": "BPH",
					    "kw": "BisligBislig",
					    "city": "比斯利格"
					},{
					    "name": "比塔姆",
					    "code": "BMM",
					    "kw": "BitamBitam",
					    "city": "比塔姆"
					},{
					    "name": "布莱克蒂克",
					    "code": "YBI",
					    "kw": "Black TickleBlack Tickle",
					    "city": "布来克蒂尔"
					},{
					    "name": "布莱克普尔",
					    "code": "BLK",
					    "kw": "BlackpoolBlackpool",
					    "city": "布来克普尔"
					},{
					    "name": "布兰太尔",
					    "code": "BLZ",
					    "kw": "BlantyreBlantyre",
					    "city": "布兰太尔"
					},{
					    "name": "布连海姆",
					    "code": "BHE",
					    "kw": "BlenheimBlenheim",
					    "city": "布连海姆"
					},{
					    "name": "布隆方丹",
					    "code": "BFN",
					    "kw": "BloemfonteinBloemfontein",
					    "city": "布隆放丹"
					},{
					    "name": "布隆迪奥斯",
					    "code": "BLO",
					    "kw": "BlonduosBlonduos",
					    "city": "布隆迪奥斯"
					},{
					    "name": "布卢明顿·诺木尔",
					    "code": "BMI",
					    "kw": "Bloomington-NormalBloomington-Normal",
					    "city": "布鲁名顿诺木尔"
					},{
					    "name": "布卢明顿",
					    "code": "BMG",
					    "kw": "BloomingtonBloomington",
					    "city": "布鲁明顿"
					},{
					    "name": "布卢贝尔",
					    "code": "BBX",
					    "kw": "Blue BellBlue Bell",
					    "city": "布鲁贝尔"
					},{
					    "name": "布卢菲尔兹",
					    "code": "BEF",
					    "kw": "BluefieldsBluefields",
					    "city": "布鲁非尔茨"
					},{
					    "name": "布卢梅瑙",
					    "code": "BNU",
					    "kw": "BlumenauBlumenau",
					    "city": "布鲁梅瑙"
					},{
					    "name": "布莱斯",
					    "code": "BLH",
					    "kw": "BlytheBlythe",
					    "city": "布来斯"
					},{
					    "name": "博城",
					    "code": "KBS",
					    "kw": "BoBo",
					    "city": "博城"
					},{
					    "name": "博昂",
					    "code": "BOV",
					    "kw": "BoangBoang",
					    "city": "博昂"
					},{
					    "name": "博博迪乌拉索",
					    "code": "BOY",
					    "kw": "Bobo DioulassoBobo Dioulasso",
					    "city": "博博蒂务拉索"
					},{
					    "name": "博卡斯德尔托罗",
					    "code": "BOC",
					    "kw": "Bocas Del ToroBocas Del Toro",
					    "city": "博卡斯德尔拖罗"
					},{
					    "name": "博迪努穆",
					    "code": "BNM",
					    "kw": "BodinumuBodinumu",
					    "city": "博蒂努穆"
					},{
					    "name": "博多",
					    "code": "BOO",
					    "kw": "BodoBodo",
					    "city": "博多"
					},{
					    "name": "布温德",
					    "code": "BNB",
					    "kw": "BoendeBoende",
					    "city": "布温德"
					},{
					    "name": "博冈代",
					    "code": "XBG",
					    "kw": "BogandeBogande",
					    "city": "博冈代"
					},{
					    "name": "博格",
					    "code": "BGH",
					    "kw": "BogheBoghe",
					    "city": "博格"
					},{
					    "name": "波哥大",
					    "code": "BOG",
					    "kw": "BogotaBogota",
					    "city": "波哥大"
					},{
					    "name": "博伊西",
					    "code": "BOI",
					    "kw": "BoiseBoise",
					    "city": "博伊西"
					},{
					    "name": "博凯",
					    "code": "BKJ",
					    "kw": "BokeBoke",
					    "city": "博凯"
					},{
					    "name": "博康迪尼",
					    "code": "BUI",
					    "kw": "BokondiniBokondini",
					    "city": "博康迪尼"
					},{
					    "name": "博科罗",
					    "code": "BKR",
					    "kw": "BokoroBokoro",
					    "city": "博克罗"
					},{
					    "name": "博库",
					    "code": "BOQ",
					    "kw": "BokuBoku",
					    "city": "博库"
					},{
					    "name": "博尔",
					    "code": "OTC",
					    "kw": "BolBol",
					    "city": "博尔"
					},{
					    "name": "博朗",
					    "code": "BJG",
					    "kw": "BolaangBolaang",
					    "city": "博朗"
					},{
					    "name": "波伦亚",
					    "code": "BLQ",
					    "kw": "BolognaBologna",
					    "city": "波伦亚"
					},{
					    "name": "博奈尔",
					    "code": "BON",
					    "kw": "BonaireBonaire",
					    "city": "博奈尔"
					},{
					    "name": "博南沙",
					    "code": "BZA",
					    "kw": "BonanzaBonanza",
					    "city": "博南沙"
					},{
					    "name": "邦杜库",
					    "code": "BDK",
					    "kw": "BondoukouBondoukou",
					    "city": "邦杜库"
					},{
					    "name": "邦戈",
					    "code": "OGR",
					    "kw": "BongorBongor",
					    "city": "帮戈"
					},{
					    "name": "邦尼维尔",
					    "code": "YBY",
					    "kw": "BonnyvilleBonnyville",
					    "city": "邦尼维尔"
					},{
					    "name": "邦特",
					    "code": "BTE",
					    "kw": "BontheBonthe",
					    "city": "邦特"
					},{
					    "name": "布于",
					    "code": "BGB",
					    "kw": "BooueBooue",
					    "city": "布于"
					},{
					    "name": "博拉博拉",
					    "code": "BOB",
					    "kw": "Bora BoraBora Bora",
					    "city": "博拉博拉"
					},{
					    "name": "博拉马",
					    "code": "BXX",
					    "kw": "BoramaBorama",
					    "city": "博拉马"
					},{
					    "name": "波尔多",
					    "code": "BOD",
					    "kw": "BordeauxBordeaux Airport",
					    "city": "波尔多"
					},{
					    "name": "波尔吉·班·莫吉塔尔",
					    "code": "BMW",
					    "kw": "Bordj Badji MokhtarBordj Badji Mokhtar",
					    "city": "波尔吉班莫克塔"
					},{
					    "name": "博尔加峡湾",
					    "code": "BGJ",
					    "kw": "Borgarfjordur EystriBorgarfjordur Eystri",
					    "city": "博尔加峡湾"
					},{
					    "name": "博尔库姆",
					    "code": "BMK",
					    "kw": "BorkumBorkum",
					    "city": "博尔库姆"
					},{
					    "name": "博尔冷格",
					    "code": "BLE",
					    "kw": "BorlangeBorlange",
					    "city": "博尔冷格"
					},{
					    "name": "伦讷",
					    "code": "RNN",
					    "kw": "BornholmBornholm",
					    "city": "伦纳"
					},{
					    "name": "博尔瑞戈斯普林",
					    "code": "BXS",
					    "kw": "Borrego SpringsBorrego Springs",
					    "city": "博尔瑞格斯普林"
					},{
					    "name": "博罗卢拉",
					    "code": "BOX",
					    "kw": "BorroloolaBorroloola",
					    "city": "博罗鲁拉"
					},{
					    "name": "博沙索",
					    "code": "BSA",
					    "kw": "BossasoBossaso",
					    "city": "博沙索"
					},{
					    "name": "博斯特",
					    "code": "BST",
					    "kw": "BostBost",
					    "city": "博斯特"
					},{
					    "name": "波士顿",
					    "code": "BOS",
					    "kw": "BostonBoston Logan International Apt",
					    "city": "波士顿"
					},{
					    "name": "博托帕西",
					    "code": "BTO",
					    "kw": "BotopasieBotopasie",
					    "city": "博拖帕西"
					},{
					    "name": "布瓦凯",
					    "code": "BYK",
					    "kw": "BouakeBouake",
					    "city": "布瓦凯"
					},{
					    "name": "布瓦尔",
					    "code": "BOP",
					    "kw": "BouarBouar",
					    "city": "布瓦尔"
					},{
					    "name": "布纳",
					    "code": "BQO",
					    "kw": "BounaBouna",
					    "city": "布纳"
					},{
					    "name": "本贾利",
					    "code": "BXI",
					    "kw": "BoundialiBoundiali",
					    "city": "本贾利"
					},{
					    "name": "本吉",
					    "code": "BOE",
					    "kw": "BoundjiBoundji",
					    "city": "本吉"
					},{
					    "name": "布加斯",
					    "code": "BOJ",
					    "kw": "BourgasBourgas",
					    "city": "布加斯"
					},{
					    "name": "伯恩茅斯",
					    "code": "BOH",
					    "kw": "BournemouthBournemouth",
					    "city": "伯恩茅斯"
					},{
					    "name": "布提利米特",
					    "code": "OTL",
					    "kw": "BoutilimitBoutilimit",
					    "city": "布提利米特"
					},{
					    "name": "鲍灵格林",
					    "code": "BWG",
					    "kw": "Bowling GreenBowling Green",
					    "city": "鲍灵格林"
					},{
					    "name": "博兹曼",
					    "code": "BZN",
					    "kw": "BozemanBozeman",
					    "city": "博茨曼"
					},{
					    "name": "布拉德福德",
					    "code": "BRF",
					    "kw": "BradfordBradford",
					    "city": "布拉德福德"
					},{
					    "name": "布拉德福德",
					    "code": "BFD",
					    "kw": "BradfordBradford",
					    "city": "布拉德福德1"
					},{
					    "name": "布拉加",
					    "code": "BGZ",
					    "kw": "BragaBraga",
					    "city": "布拉加"
					},{
					    "name": "布拉干萨",
					    "code": "BGC",
					    "kw": "BragancaBraganca",
					    "city": "布拉干萨"
					},{
					    "name": "布雷纳德",
					    "code": "BRD",
					    "kw": "BrainerdBrainerd",
					    "city": "布雷纳德"
					},{
					    "name": "布兰登",
					    "code": "YBR",
					    "kw": "BrandonBrandon",
					    "city": "布兰登"
					},{
					    "name": "BRATISLAVA",
					    "code": "ZRG",
					    "kw": "BratislavaBratislava Bus Station",
					    "city": "布拉迪斯拉发"
					},{
					    "name": "布拉迪斯拉发",
					    "code": "BTS",
					    "kw": "BratislavaBratislava M.R.Stefanik Apt",
					    "city": "布拉迪斯拉发"
					},{
					    "name": "布拉茨克",
					    "code": "BTK",
					    "kw": "BratskBratsk",
					    "city": "布拉茨克"
					},{
					    "name": "不伦瑞克",
					    "code": "BWE",
					    "kw": "BraunschweigBraunschweig",
					    "city": "不伦瑞克"
					},{
					    "name": "布拉柴维尔",
					    "code": "BZV",
					    "kw": "BrazzavilleBrazzaville",
					    "city": "布拉柴维尔"
					},{
					    "name": "布赖达尔维克",
					    "code": "BXV",
					    "kw": "BreiddalsvikBreiddalsvik",
					    "city": "布赖达尔斯维克"
					},{
					    "name": "不来梅",
					    "code": "BRE",
					    "kw": "BremenBremen",
					    "city": "不来梅"
					},{
					    "name": "不来梅港",
					    "code": "BRV",
					    "kw": "BremerhavenBremerhaven",
					    "city": "布来梅港"
					},{
					    "name": "布雷斯特",
					    "code": "BQT",
					    "kw": "BrestBrest",
					    "city": "布雷斯特"
					},{
					    "name": "布雷斯特",
					    "code": "BES",
					    "kw": "BrestBrest",
					    "city": "布雷斯特1"
					},{
					    "name": "布里亚",
					    "code": "BIV",
					    "kw": "BriaBria",
					    "city": "布里亚"
					},{
					    "name": "布里奇波特",
					    "code": "BDR",
					    "kw": "BridgeportBridgeport",
					    "city": "布里奇波特"
					},{
					    "name": "布林迪西",
					    "code": "BDS",
					    "kw": "BrindisiBrindisi",
					    "city": "布林迪西"
					},{
					    "name": "布里斯班",
					    "code": "BNE",
					    "kw": "BrisbaneBrisbane",
					    "city": "布里斯班"
					},{
					    "name": "布里斯托尔",
					    "code": "BRS",
					    "kw": "BristolBristol",
					    "city": "布里斯拖尔"
					},{
					    "name": "布里夫拉盖亚尔德",
					    "code": "BVE",
					    "kw": "Brive-La-GaillardeBrive-La-Gaillarde",
					    "city": "布里福拉该亚尔"
					},{
					    "name": "布尔诺",
					    "code": "BRQ",
					    "kw": "BrnoBrno Turany Apt",
					    "city": "布尔诺"
					},{
					    "name": "布朗欠特",
					    "code": "YBT",
					    "kw": "BrochetBrochet",
					    "city": "布朗欠特"
					},{
					    "name": "布罗克维尔",
					    "code": "XBR",
					    "kw": "BrockvilleBrockville",
					    "city": "布罗克维尔"
					},{
					    "name": "布朗森",
					    "code": "YBM",
					    "kw": "Bronson CreekBronson Creek",
					    "city": "布朗森"
					},{
					    "name": "布鲁克斯朗吉",
					    "code": "RBH",
					    "kw": "Brooks LodgeBrooks Lodge",
					    "city": "布鲁克斯朗吉"
					},{
					    "name": "布朗斯维尔",
					    "code": "BRO",
					    "kw": "BrownsvilleBrownsville",
					    "city": "布朗斯维尔"
					},{
					    "name": "布鲁内特",
					    "code": "BTD",
					    "kw": "Brunette DownsBrunette Downs",
					    "city": "布鲁内特"
					},{
					    "name": "BRUMSWIC GL JE/GA",
					    "code": "BQK",
					    "kw": "BrunswickBrunswick Glynco Jetport",
					    "city": "布伦瑞克"
					},{
					    "name": "不伦瑞克",
					    "code": "SSI",
					    "kw": "BrunswickBrunswick M B McKinnon Apt",
					    "city": "布伦瑞克"
					},{
					    "name": "布鲁塞尔",
					    "code": "BRU",
					    "kw": "BrusselsBrussels National Airport",
					    "city": "布鲁塞尔"
					},{
					    "name": "沙勒罗瓦",
					    "code": "CRL",
					    "kw": "BrusselsBrussels South Airport",
					    "city": "布鲁塞尔"
					},{
					    "name": "布卡拉曼加",
					    "code": "BGA",
					    "kw": "BucaramangaBucaramanga",
					    "city": "布卡拉曼加"
					},{
					    "name": "布坎南",
					    "code": "UCN",
					    "kw": "BuchananBuchanan",
					    "city": "布砍南"
					},{
					    "name": "CITY IN ROMANIA",
					    "code": "BBU",
					    "kw": "BucharestBucharest Baneasa Apt",
					    "city": "布加勒斯特"
					},{
					    "name": "BUCHAREST OTOPENI",
					    "code": "OTP",
					    "kw": "BucharestBucharest Otopeni Apt",
					    "city": "布加勒斯特"
					},{
					    "name": "布达佩斯",
					    "code": "BUD",
					    "kw": "BudapestBudapest",
					    "city": "布达佩斯"
					},{
					    "name": "布埃纳文图拉",
					    "code": "BUN",
					    "kw": "BuenaventuraBuenaventura",
					    "city": "布埃纳文图斯"
					},{
					    "name": "BUENOS AIRES",
					    "code": "AEP",
					    "kw": "Buenos AiresBuenos Aires Aeroparque J. Newbery",
					    "city": "布宜诺斯艾利斯"
					},{
					    "name": "BUENOS AIRES M P",
					    "code": "EZE",
					    "kw": "Buenos AiresBuenos Aires Ministro Pistarini",
					    "city": "布宜诺斯艾利斯"
					},{
					    "name": "布法罗南罗斯",
					    "code": "YVT",
					    "kw": "Buffalo NarrowsBuffalo Narrows",
					    "city": "布法罗南罗斯"
					},{
					    "name": "布法罗",
					    "code": "BUF",
					    "kw": "BuffaloBuffalo",
					    "city": "布法罗"
					},{
					    "name": "布因",
					    "code": "UBI",
					    "kw": "BuinBuin",
					    "city": "布因"
					},{
					    "name": "布琼布拉",
					    "code": "BJM",
					    "kw": "BujumburaBujumbura",
					    "city": "布琼布拉"
					},{
					    "name": "布卡岛",
					    "code": "BUA",
					    "kw": "BukaBuka",
					    "city": "布卡"
					},{
					    "name": "布卡武",
					    "code": "BKY",
					    "kw": "BukavuBukavu",
					    "city": "布卡武"
					},{
					    "name": "布哈拉",
					    "code": "BHK",
					    "kw": "BukharaBukhara",
					    "city": "布哈拉"
					},{
					    "name": "布科巴",
					    "code": "BKZ",
					    "kw": "BukobaBukoba",
					    "city": "布科巴"
					},{
					    "name": "布拉瓦约",
					    "code": "BUQ",
					    "kw": "BulawayoBulawayo",
					    "city": "布拉瓦约"
					},{
					    "name": "布尔契",
					    "code": "BCY",
					    "kw": "BulchiBulchi",
					    "city": "布尔契"
					},{
					    "name": "布洛洛",
					    "code": "BUL",
					    "kw": "BuloloBulolo",
					    "city": "布洛洛"
					},{
					    "name": "奔巴",
					    "code": "BMB",
					    "kw": "BumbaBumba",
					    "city": "奔巴1"
					},{
					    "name": "本迪",
					    "code": "BNT",
					    "kw": "BundiBundi",
					    "city": "本迪"
					},{
					    "name": "布尼亚",
					    "code": "BUX",
					    "kw": "BuniaBunia",
					    "city": "布尼亚"
					},{
					    "name": "本怒皮德尔",
					    "code": "XBL",
					    "kw": "Buno BedelleBuno Bedelle",
					    "city": "本努皮德尔"
					},{
					    "name": "布奥尔",
					    "code": "UOL",
					    "kw": "BuolBuol",
					    "city": "布奥尔"
					},{
					    "name": "布赖米",
					    "code": "RMB",
					    "kw": "BuraimiBuraimi",
					    "city": "布赖米"
					},{
					    "name": "布劳",
					    "code": "BUO",
					    "kw": "BuraoBurao",
					    "city": "布劳"
					},{
					    "name": "伯班克",
					    "code": "BUR",
					    "kw": "BurbankBurbank",
					    "city": "伯班克"
					},{
					    "name": "莱武卡",
					    "code": "LEV",
					    "kw": "BuretaBureta",
					    "city": "莱武卡"
					},{
					    "name": "伯林顿",
					    "code": "BTV",
					    "kw": "BurlingtonBurlington",
					    "city": "伯林顿"
					},{
					    "name": "布尔萨",
					    "code": "BTZ",
					    "kw": "BursaBursa",
					    "city": "布尔萨1"
					},{
					    "name": "布塞阿尔",
					    "code": "BUZ",
					    "kw": "BushehrBushehr",
					    "city": "布塞阿尔"
					},{
					    "name": "布塔",
					    "code": "BZU",
					    "kw": "ButaButa",
					    "city": "布塔"
					},{
					    "name": "布塔雷",
					    "code": "BTQ",
					    "kw": "ButareButare",
					    "city": "布塔雷"
					},{
					    "name": "布塔里塔里",
					    "code": "BBG",
					    "kw": "ButaritariButaritari",
					    "city": "布塔里塔里"
					},{
					    "name": "比尤特",
					    "code": "BTM",
					    "kw": "ButteButte",
					    "city": "比尤特"
					},{
					    "name": "比德哥什",
					    "code": "BZG",
					    "kw": "BydgoszczBydgoszcz",
					    "city": "比德哥什"
					},{
					    "name": "卡维马斯",
					    "code": "CBS",
					    "kw": "CabimasCabimas",
					    "city": "卡维马斯"
					},{
					    "name": "卡宾达",
					    "code": "CAB",
					    "kw": "CabindaCabinda",
					    "city": "卡宾达"
					},{
					    "name": "卡沃罗霍",
					    "code": "CBJ",
					    "kw": "Cabo RojoCabo Rojo",
					    "city": "卡沃洛霍"
					},{
					    "name": "卡塞雷斯",
					    "code": "CCX",
					    "kw": "CaceresCaceres",
					    "city": "卡塞雷斯"
					},{
					    "name": "卡昂",
					    "code": "CFR",
					    "kw": "CaenCaen",
					    "city": "卡昂"
					},{
					    "name": "卡加延德奥罗",
					    "code": "CGY",
					    "kw": "Cagayan de OroCagayan de Oro",
					    "city": "卡加眼德奥罗"
					},{
					    "name": "卡利亚里",
					    "code": "CAG",
					    "kw": "CagliariCagliari",
					    "city": "卡利亚里"
					},{
					    "name": "凯卡拉",
					    "code": "CXA",
					    "kw": "CaicaraCaicara",
					    "city": "凯卡拉"
					},{
					    "name": "开罗",
					    "code": "CAI",
					    "kw": "CairoCairo",
					    "city": "开罗"
					},{
					    "name": "卡哈马尔卡",
					    "code": "CJA",
					    "kw": "CajamarcaCajamarca",
					    "city": "卡哈马尔卡"
					},{
					    "name": "卡拉巴尔",
					    "code": "CBQ",
					    "kw": "CalabarCalabar",
					    "city": "卡拉巴尔"
					},{
					    "name": "卡拉沃索",
					    "code": "CLZ",
					    "kw": "CalabozoCalabozo",
					    "city": "卡拉沃索"
					},{
					    "name": "加来",
					    "code": "CQF",
					    "kw": "CalaisCalais Marck Apt",
					    "city": "加拉"
					},{
					    "name": "卡拉马",
					    "code": "CJC",
					    "kw": "CalamaCalama",
					    "city": "卡拉马"
					},{
					    "name": "甲描育",
					    "code": "CYP",
					    "kw": "CalbayogCalbayog",
					    "city": "甲苗育"
					},{
					    "name": "加尔各答",
					    "code": "CCU",
					    "kw": "CalcuttaCalcutta",
					    "city": "加尔各答"
					},{
					    "name": "卡莱克西科",
					    "code": "CXL",
					    "kw": "CalexicoCalexico",
					    "city": "卡来克西科"
					},{
					    "name": "卡尔加里",
					    "code": "YYC",
					    "kw": "CalgaryCalgary",
					    "city": "卡尔加里"
					},{
					    "name": "卡利",
					    "code": "CLO",
					    "kw": "CaliCali",
					    "city": "卡利"
					},{
					    "name": "卡尔维",
					    "code": "CLY",
					    "kw": "CalviCalvi",
					    "city": "卡尔维"
					},{
					    "name": "卡马圭",
					    "code": "CMW",
					    "kw": "CamagueyCamaguey",
					    "city": "卡马圭"
					},{
					    "name": "剑桥湾",
					    "code": "YCB",
					    "kw": "Cambridge BayCambridge Bay",
					    "city": "剑桥湾"
					},{
					    "name": "剑桥",
					    "code": "CBG",
					    "kw": "CambridgeCambridge",
					    "city": "剑桥"
					},{
					    "name": "卡姆登",
					    "code": "CDH",
					    "kw": "CamdenCamden",
					    "city": "卡姆登1"
					},{
					    "name": "卡米里",
					    "code": "CAM",
					    "kw": "CamiriCamiri",
					    "city": "卡米利"
					},{
					    "name": "坎佩切",
					    "code": "CPE",
					    "kw": "CampecheCampeche",
					    "city": "砍贝切"
					},{
					    "name": "坎姆波格朗德",
					    "code": "CGR",
					    "kw": "Campo GrandeCampo Grande",
					    "city": "砍姆波格朗德"
					},{
					    "name": "卡尼亚布拉瓦",
					    "code": "NBV",
					    "kw": "Cana BravaCana Brava",
					    "city": "卡那布拉瓦"
					},{
					    "name": "卡纳依玛",
					    "code": "CAJ",
					    "kw": "CanaimaCanaima",
					    "city": "卡那伊玛"
					},{
					    "name": "恰纳卡莱",
					    "code": "CKZ",
					    "kw": "CanakkaleCanakkale",
					    "city": "恰那卡来"
					},{
					    "name": "坎昆",
					    "code": "CUN",
					    "kw": "CancunCancun",
					    "city": "砍昆"
					},{
					    "name": "坎达拉",
					    "code": "CXN",
					    "kw": "CandalaCandala",
					    "city": "砍达拉"
					},{
					    "name": "坎甘巴",
					    "code": "CNZ",
					    "kw": "CangambaCangamba",
					    "city": "砍甘巴"
					},{
					    "name": "卡农城",
					    "code": "CNE",
					    "kw": "Canon CityCanon City",
					    "city": "卡浓城"
					},{
					    "name": "卡努安岛",
					    "code": "CIW",
					    "kw": "Canouan IslandCanouan Island",
					    "city": "卡努安岛"
					},{
					    "name": "坎顿岛",
					    "code": "CIS",
					    "kw": "Canton IslandCanton Island",
					    "city": "砍顿岛"
					},{
					    "name": "海地角",
					    "code": "CAP",
					    "kw": "Cap HaitienCap Haitien",
					    "city": "海地角"
					},{
					    "name": "开普多塞特",
					    "code": "YTE",
					    "kw": "Cape DorsetCape Dorset",
					    "city": "开普多塞特"
					},{
					    "name": "开普吉拉多",
					    "code": "CGI",
					    "kw": "Cape GirardeauCape Girardeau",
					    "city": "开普吉拉多"
					},{
					    "name": "格罗斯特角",
					    "code": "CGC",
					    "kw": "Cape GloucesterCape Gloucester",
					    "city": "格罗斯特角"
					},{
					    "name": "帕尔马斯角",
					    "code": "CPA",
					    "kw": "Cape PalmasCape Palmas",
					    "city": "帕尔马斯角"
					},{
					    "name": "罗德尼角",
					    "code": "CPN",
					    "kw": "Cape RodneyCape Rodney",
					    "city": "罗德尼角"
					},{
					    "name": "开普敦",
					    "code": "CPT",
					    "kw": "Cape TownCape Town",
					    "city": "开普敦"
					},{
					    "name": "福格尔角",
					    "code": "CVL",
					    "kw": "Cape VogelCape Vogel",
					    "city": "福格尔角"
					},{
					    "name": "坎普尔加纳",
					    "code": "CPB",
					    "kw": "CapurganaCapurgana",
					    "city": "砍普尔加纳"
					},{
					    "name": "坎魁坦尼亚",
					    "code": "CQT",
					    "kw": "CaquetaniaCaquetania",
					    "city": "砍魁坦尼亚"
					},{
					    "name": "卡尼考巴",
					    "code": "CBD",
					    "kw": "Car NicobarCar Nicobar",
					    "city": "卡尼考巴"
					},{
					    "name": "加拉加斯",
					    "code": "CCS",
					    "kw": "CaracasCaracas",
					    "city": "加拉加斯"
					},{
					    "name": "加拉杰斯",
					    "code": "CKS",
					    "kw": "CarajasCarajas",
					    "city": "加拉杰斯"
					},{
					    "name": "卡兰塞贝什",
					    "code": "CSB",
					    "kw": "CaransebesCaransebes",
					    "city": "卡兰塞贝什"
					},{
					    "name": "卡玻恩达尔",
					    "code": "MDH",
					    "kw": "CarbondaleCarbondale",
					    "city": "卡玻恩达尔"
					},{
					    "name": "卡尔卡松",
					    "code": "CCF",
					    "kw": "CarcassonneCarcassonne",
					    "city": "卡尔卡松"
					},{
					    "name": "加的夫",
					    "code": "CWL",
					    "kw": "CardiffCardiff",
					    "city": "加的夫"
					},{
					    "name": "卡莱尔",
					    "code": "CAX",
					    "kw": "CarlisleCarlisle",
					    "city": "卡来尔"
					},{
					    "name": "卡尔斯巴德",
					    "code": "CNM",
					    "kw": "CarlsbadCarlsbad",
					    "city": "卡尔斯巴德"
					},{
					    "name": "卡尔斯巴德",
					    "code": "CLD",
					    "kw": "CarlsbadCarlsbad",
					    "city": "卡尔斯巴德1"
					},{
					    "name": "卡诺特",
					    "code": "CRF",
					    "kw": "CarnotCarnot",
					    "city": "卡诺特"
					},{
					    "name": "卡罗利纳",
					    "code": "CLN",
					    "kw": "CarolinaCarolina",
					    "city": "卡罗里纳"
					},{
					    "name": "卡里亚库岛",
					    "code": "CRU",
					    "kw": "CarriacouCarriacou",
					    "city": "卡里亚库岛"
					},{
					    "name": "卡塔赫纳",
					    "code": "CTG",
					    "kw": "CartagenaCartagena",
					    "city": "卡塔赫纳"
					},{
					    "name": "卡特赖特",
					    "code": "YRF",
					    "kw": "CartwrightCartwright",
					    "city": "卡特赖特"
					},{
					    "name": "卡鲁帕诺",
					    "code": "CUP",
					    "kw": "CarupanoCarupano",
					    "city": "卡鲁帕诺"
					},{
					    "name": "卡鲁塔佩拉",
					    "code": "CTP",
					    "kw": "CarutaperaCarutapera",
					    "city": "卡鲁塔佩拉"
					},{
					    "name": "卡萨布兰卡",
					    "code": "CAS",
					    "kw": "CasablancaCasablanca Anfa Apt",
					    "city": "卡萨布兰卡"
					},{
					    "name": "CASABLANCA MOHAME",
					    "code": "CMN",
					    "kw": "CasablancaCasablanca Mohamed V Apt",
					    "city": "卡萨布兰卡"
					},{
					    "name": "卡斯卡韦尔",
					    "code": "CAC",
					    "kw": "CascavelCascavel",
					    "city": "卡斯卡韦尔"
					},{
					    "name": "卡西古瓦",
					    "code": "CUV",
					    "kw": "CasiguaCasigua",
					    "city": "卡西古瓦"
					},{
					    "name": "卡斯塔韦",
					    "code": "CST",
					    "kw": "CastawayCastaway",
					    "city": "卡斯塔韦"
					},{
					    "name": "卡塔朗",
					    "code": "TLZ",
					    "kw": "CatalaoCatalao",
					    "city": "卡塔朗"
					},{
					    "name": "阿瓦龙贝",
					    "code": "AVX",
					    "kw": "Catalina IslandCatalina Island Avalon Bay Apt",
					    "city": "阿瓦龙湾"
					},{
					    "name": "卡塔马尔卡",
					    "code": "CTC",
					    "kw": "CatamarcaCatamarca",
					    "city": "卡塔马尔卡"
					},{
					    "name": "卡塔尼亚",
					    "code": "CTA",
					    "kw": "CataniaCatania",
					    "city": "卡塔尼亚"
					},{
					    "name": "卡塔曼",
					    "code": "CRM",
					    "kw": "CatarmanCatarman",
					    "city": "卡塔曼"
					},{
					    "name": "卡瓦扬",
					    "code": "CYZ",
					    "kw": "CauayanCauayan",
					    "city": "卡瓦扬"
					},{
					    "name": "考卡西亚",
					    "code": "CAQ",
					    "kw": "CaucasiaCaucasia",
					    "city": "考卡西亚"
					},{
					    "name": "卡耶查帕尔",
					    "code": "CYC",
					    "kw": "Caye ChapelCaye Chapel",
					    "city": "卡耶查帕尔"
					},{
					    "name": "卡",
					    "code": "CAY",
					    "kw": "CayenneCayenne",
					    "city": "卡宴"
					},{
					    "name": "开曼布拉克",
					    "code": "CYB",
					    "kw": "Cayman BracCayman Brac",
					    "city": "开曼布拉克"
					},{
					    "name": "卡宗博",
					    "code": "CAV",
					    "kw": "CazomboCazombo",
					    "city": "卡宗博"
					},{
					    "name": "塞杜纳",
					    "code": "CED",
					    "kw": "CedunaCeduna",
					    "city": "塞杜纳"
					},{
					    "name": "赛雷斯",
					    "code": "CRR",
					    "kw": "CeresCeres",
					    "city": "塞雷斯"
					},{
					    "name": "查查波亚斯",
					    "code": "CHH",
					    "kw": "ChachapoyasChachapoyas",
					    "city": "查查博亚斯"
					},{
					    "name": "沙德伦",
					    "code": "CDR",
					    "kw": "ChadronChadron",
					    "city": "沙德伦"
					},{
					    "name": "沙尼",
					    "code": "MKD",
					    "kw": "ChagniChagni",
					    "city": "沙尼"
					},{
					    "name": "恰赫巴哈尔",
					    "code": "ZBR",
					    "kw": "Chah-BaharChah-Bahar",
					    "city": "恰赫巴哈尔"
					},{
					    "name": "查伊顿",
					    "code": "WCH",
					    "kw": "ChaitenChaiten",
					    "city": "查伊顿"
					},{
					    "name": "恰赫恰兰",
					    "code": "CCN",
					    "kw": "ChakcharanChakcharan",
					    "city": "恰克恰兰"
					},{
					    "name": "查利斯",
					    "code": "CHL",
					    "kw": "ChallisChallis",
					    "city": "查利斯"
					},{
					    "name": "尚贝里",
					    "code": "CMF",
					    "kw": "ChamberyChambery",
					    "city": "尚贝里"
					},{
					    "name": "尚贝里",
					    "code": "CMI",
					    "kw": "ChampaignChampaign",
					    "city": "尚佩恩"
					},{
					    "name": "昌迪加尔",
					    "code": "IXC",
					    "kw": "ChandigarhChandigarh",
					    "city": "昌迪加尔"
					},{
					    "name": "昌金怒拉",
					    "code": "CHX",
					    "kw": "ChanguinolaChanguinola",
					    "city": "昌金努拉"
					},{
					    "name": "干尼亚",
					    "code": "CHQ",
					    "kw": "ChaniaChania",
					    "city": "干尼亚"
					},{
					    "name": "查尔斯顿",
					    "code": "CHS",
					    "kw": "CharlestonCharleston",
					    "city": "查尔斯顿1"
					},{
					    "name": "沙特鲁",
					    "code": "CHR",
					    "kw": "ChateaurouxChateauroux",
					    "city": "沙特鲁"
					},{
					    "name": "查塔姆",
					    "code": "CHT",
					    "kw": "Chatham IslandChatham Island",
					    "city": "查塔姆群岛"
					},{
					    "name": "查塔姆",
					    "code": "XCM",
					    "kw": "ChathamChatham",
					    "city": "查塔姆2"
					},{
					    "name": "查塔努加",
					    "code": "CHA",
					    "kw": "ChattanoogaChattanooga Lovell Field Apt",
					    "city": "查塔努加"
					},{
					    "name": "沙维什",
					    "code": "CHV",
					    "kw": "ChavesChaves",
					    "city": "沙维什"
					},{
					    "name": "济州",
					    "code": "CJU",
					    "kw": "ChejuCheju International",
					    "city": "济州"
					},{
					    "name": "车里雅宾斯克",
					    "code": "CEK",
					    "kw": "ChelyabinskChelyabinsk",
					    "city": "车里雅宾斯克"
					},{
					    "name": "马德拉斯",
					    "code": "MAA",
					    "kw": "ChennaiChennai",
					    "city": "马德拉斯1"
					},{
					    "name": "奇罗",
					    "code": "HCW",
					    "kw": "CherawCheraw",
					    "city": "奇罗"
					},{
					    "name": "瑟保",
					    "code": "CER",
					    "kw": "CherbourgCherbourg",
					    "city": "瑟堡"
					},{
					    "name": "切斯特",
					    "code": "CEG",
					    "kw": "ChesterChester",
					    "city": "切斯特"
					},{
					    "name": "切斯特菲尔德",
					    "code": "YCS",
					    "kw": "Chesterfield InletChesterfield Inlet",
					    "city": "切斯特非尔德"
					},{
					    "name": "切图马尔",
					    "code": "CTM",
					    "kw": "ChetumalChetumal",
					    "city": "切图马尔"
					},{
					    "name": "七美（台湾）",
					    "code": "CMJ",
					    "kw": "Chi MeiChi Mei",
					    "city": "七美"
					},{
					    "name": "渍迈",
					    "code": "CNX",
					    "kw": "Chiang MaiChiang Mai",
					    "city": "清迈"
					},{
					    "name": "青莱",
					    "code": "CEI",
					    "kw": "Chiang RaiChiang Rai",
					    "city": "清莱"
					},{
					    "name": "奇琴伊察",
					    "code": "CZA",
					    "kw": "Chichen ItzaChichen Itza",
					    "city": "奇琴伊查"
					},{
					    "name": "奇克拉约",
					    "code": "CIX",
					    "kw": "ChiclayoChiclayo",
					    "city": "奇特拉约"
					},{
					    "name": "奇科",
					    "code": "CIC",
					    "kw": "ChicoChico",
					    "city": "奇克"
					},{
					    "name": "奇格罗多",
					    "code": "IGO",
					    "kw": "ChigorodoChigorodo",
					    "city": "奇格罗多"
					},{
					    "name": "奇瓦瓦",
					    "code": "CUU",
					    "kw": "ChihuahuaChihuahua",
					    "city": "奇瓦瓦"
					},{
					    "name": "钦博特",
					    "code": "CHM",
					    "kw": "ChimboteChimbote",
					    "city": "钦博特"
					},{
					    "name": "钦戈拉",
					    "code": "CGJ",
					    "kw": "ChingolaChingola",
					    "city": "钦戈拉"
					},{
					    "name": "晋州",
					    "code": "HIN",
					    "kw": "ChinjuChinju",
					    "city": "晋州"
					},{
					    "name": "奇帕塔",
					    "code": "CIP",
					    "kw": "ChipataChipata",
					    "city": "奇帕塔"
					},{
					    "name": "基什尼奥夫",
					    "code": "KIV",
					    "kw": "ChisinauChisinau",
					    "city": "基什尼奥夫"
					},{
					    "name": "赤塔",
					    "code": "HTA",
					    "kw": "ChitaChita",
					    "city": "赤塔"
					},{
					    "name": "奇坦托",
					    "code": "PGI",
					    "kw": "ChitatoChitato",
					    "city": "奇坦托"
					},{
					    "name": "奇德拉尔",
					    "code": "CJL",
					    "kw": "ChitralChitral",
					    "city": "奇德拉尔"
					},{
					    "name": "吉大港",
					    "code": "CGP",
					    "kw": "ChittagongChittagong",
					    "city": "吉大港"
					},{
					    "name": "乔依绍尔湾",
					    "code": "CHY",
					    "kw": "Choiseul BayChoiseul Bay",
					    "city": "乔伊绍尔湾"
					},{
					    "name": "克赖斯特彻奇",
					    "code": "CHC",
					    "kw": "ChristchurchChristchurch",
					    "city": "克赖斯特彻奇"
					},{
					    "name": "圣诞岛",
					    "code": "XCH",
					    "kw": "Christmas IslandChristmas Island",
					    "city": "圣诞岛"
					},{
					    "name": "恰波岛",
					    "code": "CCZ",
					    "kw": "Chub CayChub Cay",
					    "city": "恰波岛"
					},{
					    "name": "丘吉尔",
					    "code": "ZUM",
					    "kw": "Churchill FallsChurchill Falls",
					    "city": "丘吉尔"
					},{
					    "name": "塞西亚",
					    "code": "ICI",
					    "kw": "CiciaCicia",
					    "city": "塞西亚"
					},{
					    "name": "其拉扎",
					    "code": "CXP",
					    "kw": "CilacapCilacap",
					    "city": "其拉扎"
					},{
					    "name": "井里汶",
					    "code": "CBN",
					    "kw": "CirebonCirebon",
					    "city": "井里汶"
					},{
					    "name": "博利瓦尔城",
					    "code": "CBL",
					    "kw": "Ciudad BolivarCiudad Bolivar",
					    "city": "博利瓦尔城"
					},{
					    "name": "孔斯蒂图西翁城",
					    "code": "CUA",
					    "kw": "Ciudad ConstitucionCiudad Constitucion",
					    "city": "孔斯蒂图西翁城"
					},{
					    "name": "卡门城",
					    "code": "CME",
					    "kw": "Ciudad Del CarmenCiudad Del Carmen",
					    "city": "卡门城"
					},{
					    "name": "华雷斯城",
					    "code": "CJS",
					    "kw": "Ciudad JuarezCiudad Juarez",
					    "city": "华雷斯城"
					},{
					    "name": "欧布雷贡城",
					    "code": "CEN",
					    "kw": "Ciudad ObregonCiudad Obregon",
					    "city": "欧布雷贡城"
					},{
					    "name": "克拉克斯维尔",
					    "code": "CKV",
					    "kw": "ClarksvilleClarksville",
					    "city": "克拉克斯维尔"
					},{
					    "name": "克利尔莱克",
					    "code": "CKE",
					    "kw": "Clear LakeClear Lake",
					    "city": "克利尔赖克"
					},{
					    "name": "克莱蒙费朗",
					    "code": "CFE",
					    "kw": "Clermont-FerrandClermont-Ferrand",
					    "city": "克莱蒙费朗"
					},{
					    "name": "克利夫",
					    "code": "CVC",
					    "kw": "CleveCleve",
					    "city": "克利夫"
					},{
					    "name": "克利夫顿希尔斯",
					    "code": "CFH",
					    "kw": "Clifton HillsClifton Hills",
					    "city": "克利夫敦西尔十"
					},{
					    "name": "克洛林达",
					    "code": "CLX",
					    "kw": "ClorindaClorinda",
					    "city": "克洛林达"
					},{
					    "name": "克卢日",
					    "code": "CLJ",
					    "kw": "ClujCluj",
					    "city": "克卢日"
					},{
					    "name": "克莱德河",
					    "code": "YCY",
					    "kw": "Clyde RiverClyde River",
					    "city": "克莱德河"
					},{
					    "name": "科茨维尔",
					    "code": "CTH",
					    "kw": "CoatesvilleCoatesville",
					    "city": "科茨维尔"
					},{
					    "name": "科巴",
					    "code": "CAZ",
					    "kw": "CobarCobar",
					    "city": "科巴"
					},{
					    "name": "科维哈",
					    "code": "CIJ",
					    "kw": "CobijaCobija",
					    "city": "科维哈"
					},{
					    "name": "科卡",
					    "code": "OCC",
					    "kw": "CocaCoca",
					    "city": "科卡"
					},{
					    "name": "科恰班巴",
					    "code": "CBB",
					    "kw": "CochabambaCochabamba",
					    "city": "科恰班巴"
					},{
					    "name": "科钦",
					    "code": "COK",
					    "kw": "CochinCochin",
					    "city": "科钦"
					},{
					    "name": "科科斯群岛",
					    "code": "CCK",
					    "kw": "Cocos IslandsCocos Islands",
					    "city": "科科斯群岛"
					},{
					    "name": "科达伦",
					    "code": "COE",
					    "kw": "Coeur D'AleneCoeur D'Alene",
					    "city": "科达伦"
					},{
					    "name": "科印拜陀",
					    "code": "CJB",
					    "kw": "CoimbatoreCoimbatore",
					    "city": "科印拜陀"
					},{
					    "name": "科英布拉",
					    "code": "CBP",
					    "kw": "CoimbraCoimbra",
					    "city": "科英布拉"
					},{
					    "name": "科尔德莱克",
					    "code": "YOD",
					    "kw": "Cold LakeCold Lake",
					    "city": "科尔德莱克"
					},{
					    "name": "科利马",
					    "code": "CLQ",
					    "kw": "ColimaColima",
					    "city": "科利马"
					},{
					    "name": "科尔马",
					    "code": "CMR",
					    "kw": "ColmarColmar",
					    "city": "科尔马"
					},{
					    "name": "波恩",
					    "code": "BNJ",
					    "kw": "CologneCologne Bonn Main Rail Station",
					    "city": "科隆1"
					},{
					    "name": "COLOGNE MAIN STAT",
					    "code": "QKL",
					    "kw": "CologneCologne Main Rail Station",
					    "city": "科隆1"
					},{
					    "name": "科隆",
					    "code": "CGN",
					    "kw": "CologneCologne/Bonn K.A.Apt",
					    "city": "科隆1"
					},{
					    "name": "科伦坡",
					    "code": "CMB",
					    "kw": "ColomboColombo Bandaranaike Apt",
					    "city": "科伦坡"
					},{
					    "name": "科隆",
					    "code": "ONX",
					    "kw": "ColonColon",
					    "city": "科隆"
					},{
					    "name": "科洛尼亚坎特利尔",
					    "code": "CCT",
					    "kw": "Colonia CatrielColonia Catriel",
					    "city": "科洛尼亚坎特利"
					},{
					    "name": "科洛尼亚萨米恩托",
					    "code": "OLN",
					    "kw": "Colonia SarmientoColonia Sarmiento",
					    "city": "科洛尼亚萨米恩"
					},{
					    "name": "科洛尼亚",
					    "code": "CYR",
					    "kw": "ColoniaColonia",
					    "city": "科洛尼亚"
					},{
					    "name": "科罗拉多斯普林",
					    "code": "COS",
					    "kw": "Colorado SpringsColorado Springs Peterson Field",
					    "city": "科罗拉多"
					},{
					    "name": "哥伦比亚",
					    "code": "COU",
					    "kw": "ColumbiaColumbia",
					    "city": "哥伦比亚"
					},{
					    "name": "哥伦比亚",
					    "code": "COA",
					    "kw": "ColumbiaColumbia",
					    "city": "哥伦比亚2"
					},{
					    "name": "哥伦比亚",
					    "code": "CAE",
					    "kw": "ColumbiaColumbia Metropolitan Apt",
					    "city": "哥伦比亚1"
					},{
					    "name": "哥伦布",
					    "code": "OLU",
					    "kw": "ColumbusColumbus",
					    "city": "哥伦布3"
					},{
					    "name": "COLUMBUS GOLDEN",
					    "code": "GTR",
					    "kw": "ColumbusColumbus Golden Triangle Regional Apt",
					    "city": "哥伦布"
					},{
					    "name": "哥伦布",
					    "code": "UBS",
					    "kw": "ColumbusColumbus Lowndes County Apt",
					    "city": "哥伦布"
					},{
					    "name": "哥伦布",
					    "code": "CSG",
					    "kw": "ColumbusColumbus Metropolitan Apt",
					    "city": "哥伦布2"
					},{
					    "name": "库米拉",
					    "code": "CLA",
					    "kw": "ComillaComilla",
					    "city": "库米拉"
					},{
					    "name": "科莫多罗·里瓦达维亚",
					    "code": "CRD",
					    "kw": "Comodoro RivadaviaComodoro Rivadavia",
					    "city": "科莫多罗里瓦达"
					},{
					    "name": "科纳克里",
					    "code": "CKY",
					    "kw": "ConakryConakry",
					    "city": "科纳克里"
					},{
					    "name": "康塞桑阿拉瓜亚",
					    "code": "CDJ",
					    "kw": "Conceicao Do AraguaiaConceicao Do Araguaia",
					    "city": "康塞桑阿拉瓜亚"
					},{
					    "name": "康塞普西翁",
					    "code": "CCP",
					    "kw": "ConcepcionConcepcion",
					    "city": "康塞普西翁1"
					},{
					    "name": "康塞普西翁",
					    "code": "CEP",
					    "kw": "ConcepcionConcepcion",
					    "city": "康塞普西翁"
					},{
					    "name": "康科德",
					    "code": "CCR",
					    "kw": "ConcordConcord",
					    "city": "康科德"
					},{
					    "name": "康科迪亚",
					    "code": "CCI",
					    "kw": "ConcordiaConcordia",
					    "city": "康科迪亚1"
					},{
					    "name": "康科迪亚",
					    "code": "COC",
					    "kw": "ConcordiaConcordia",
					    "city": "康科迪亚"
					},{
					    "name": "孔多托",
					    "code": "COG",
					    "kw": "CondotoCondoto",
					    "city": "孔多托"
					},{
					    "name": "康斯坦察",
					    "code": "CND",
					    "kw": "ConstantaConstanta",
					    "city": "康斯坦察"
					},{
					    "name": "君士坦丁",
					    "code": "CZL",
					    "kw": "ConstantineConstantine",
					    "city": "君士坦丁"
					},{
					    "name": "康塔多拉",
					    "code": "OTD",
					    "kw": "ContadoraContadora",
					    "city": "康塔多拉"
					},{
					    "name": "库伯佩迪",
					    "code": "CPD",
					    "kw": "Coober PedyCoober Pedy",
					    "city": "库伯佩迪"
					},{
					    "name": "库奇比哈尔",
					    "code": "COH",
					    "kw": "Cooch BeharCooch Behar",
					    "city": "库奇比哈尔"
					},{
					    "name": "库英达",
					    "code": "CDA",
					    "kw": "CooindaCooinda",
					    "city": "库英达"
					},{
					    "name": "斯卡特鲁普",
					    "code": "CPH",
					    "kw": "CopenhagenCopenhagen Apt",
					    "city": "哥本哈根"
					},{
					    "name": "科皮亚波",
					    "code": "CPO",
					    "kw": "CopiapoCopiapo",
					    "city": "克批亚波"
					},{
					    "name": "科勒尔港",
					    "code": "YZS",
					    "kw": "Coral HarbourCoral Harbour",
					    "city": "科勒尔港"
					},{
					    "name": "科迪洛",
					    "code": "ODL",
					    "kw": "Cordillo DownsCordillo Downs",
					    "city": "科迪洛"
					},{
					    "name": "科尔多瓦",
					    "code": "COR",
					    "kw": "CordobaCordoba",
					    "city": "科尔多瓦2"
					},{
					    "name": "科尔多瓦",
					    "code": "ODB",
					    "kw": "CordobaCordoba",
					    "city": "科尔多瓦"
					},{
					    "name": "科克",
					    "code": "ORK",
					    "kw": "CorkCork",
					    "city": "科克"
					},{
					    "name": "科恩岛",
					    "code": "RNI",
					    "kw": "Corn IslandCorn Island",
					    "city": "科罗"
					},{
					    "name": "科·普拉科皮奥",
					    "code": "CKO",
					    "kw": "Cornelio ProcopioCornelio Procopio",
					    "city": "科普拉科皮奥"
					},{
					    "name": "康沃尔",
					    "code": "YCC",
					    "kw": "CornwallCornwall",
					    "city": "科罗曼德尔"
					},{
					    "name": "科罗萨尔",
					    "code": "CZH",
					    "kw": "CorozalCorozal",
					    "city": "科罗萨尔1"
					},{
					    "name": "科罗萨尔",
					    "code": "CZU",
					    "kw": "CorozalCorozal",
					    "city": "科罗萨尔"
					},{
					    "name": "科连特斯",
					    "code": "CNQ",
					    "kw": "CorrientesCorrientes",
					    "city": "科连特斯"
					},{
					    "name": "科特斯",
					    "code": "CEZ",
					    "kw": "CortezCortez",
					    "city": "科特斯"
					},{
					    "name": "科龙巴",
					    "code": "CMG",
					    "kw": "CorumbaCorumba",
					    "city": "科龙巴"
					},{
					    "name": "科塔巴托",
					    "code": "CBO",
					    "kw": "CotabatoCotabato",
					    "city": "科塔巴托"
					},{
					    "name": "科托",
					    "code": "OTR",
					    "kw": "Coto 47Coto 47",
					    "city": "科托47"
					},{
					    "name": "科托努",
					    "code": "COO",
					    "kw": "CotonouCotonou",
					    "city": "科托努"
					},{
					    "name": "库尔瑟维尔",
					    "code": "CVF",
					    "kw": "CourchevelCourchevel",
					    "city": "库尔瑟维尔"
					},{
					    "name": "科韦尼亚斯",
					    "code": "CVE",
					    "kw": "CovenasCovenas",
					    "city": "科韦尼亚斯"
					},{
					    "name": "考文垂",
					    "code": "CVT",
					    "kw": "CoventryCoventry",
					    "city": "考文垂"
					},{
					    "name": "科维良",
					    "code": "COV",
					    "kw": "CovilhaCovilha",
					    "city": "科维良"
					},{
					    "name": "考阿里",
					    "code": "CWR",
					    "kw": "CowarieCowarie",
					    "city": "考阿里"
					},{
					    "name": "考厄尔",
					    "code": "CCW",
					    "kw": "CowellCowell",
					    "city": "考厄尔"
					},{
					    "name": "科克斯巴扎尔",
					    "code": "CXB",
					    "kw": "Cox's BazarCox's Bazar",
					    "city": "科克斯巴扎尔"
					},{
					    "name": "科哈依克",
					    "code": "GXQ",
					    "kw": "CoyhaiqueCoyhaique",
					    "city": "克哈依克"
					},{
					    "name": "科苏梅尔",
					    "code": "CZM",
					    "kw": "CozumelCozumel",
					    "city": "科苏梅尔"
					},{
					    "name": "克雷格考夫",
					    "code": "CCV",
					    "kw": "Craig CoveCraig Cove",
					    "city": "克雷格考夫"
					},{
					    "name": "克拉约瓦",
					    "code": "CRA",
					    "kw": "CraiovaCraiova",
					    "city": "克拉约瓦"
					},{
					    "name": "北克拉沃",
					    "code": "RAV",
					    "kw": "Cravo NorteCravo Norte",
					    "city": "北克拉沃"
					},{
					    "name": "克雷申特城",
					    "code": "CEC",
					    "kw": "Crescent CityCrescent City",
					    "city": "克雷申特城"
					},{
					    "name": "克雷斯特德比特",
					    "code": "CSE",
					    "kw": "Crested ButteCrested Butte",
					    "city": "克雷斯特的比特"
					},{
					    "name": "克雷西阿马",
					    "code": "CCM",
					    "kw": "CriciumaCriciuma",
					    "city": "克雷西阿马"
					},{
					    "name": "克鲁克岛",
					    "code": "CKI",
					    "kw": "Croker IslandCroker Island",
					    "city": "克罗克岛"
					},{
					    "name": "克鲁克德岛",
					    "code": "CRI",
					    "kw": "Crooked IslandCrooked Island",
					    "city": "克鲁克德岛"
					},{
					    "name": "克罗斯莱克",
					    "code": "YCR",
					    "kw": "Cross LakeCross Lake",
					    "city": "克罗斯莱克"
					},{
					    "name": "克罗斯维尔",
					    "code": "CSV",
					    "kw": "CrossvilleCrossville",
					    "city": "克罗斯维尔"
					},{
					    "name": "克罗托内",
					    "code": "CRV",
					    "kw": "CrotoneCrotone",
					    "city": "克罗托内"
					},{
					    "name": "库库塔",
					    "code": "CUC",
					    "kw": "CucutaCucuta",
					    "city": "库库塔"
					},{
					    "name": "古德伯",
					    "code": "CDP",
					    "kw": "CuddapahCuddapah",
					    "city": "古德伯"
					},{
					    "name": "昆卡",
					    "code": "CUE",
					    "kw": "CuencaCuenca",
					    "city": "昆卡"
					},{
					    "name": "库亚巴",
					    "code": "CGB",
					    "kw": "CuiabaCuiaba",
					    "city": "库亚巴"
					},{
					    "name": "奎托夸纳瓦",
					    "code": "CTI",
					    "kw": "Cuito CuanavaleCuito Cuanavale",
					    "city": "圭托夸纳瓦"
					},{
					    "name": "CULEBRA",
					    "code": "CPX",
					    "kw": "CulebraCulebra",
					    "city": "库莱布拉"
					},{
					    "name": "库利阿坎",
					    "code": "CUL",
					    "kw": "CuliacanCuliacan",
					    "city": "库利阿坎"
					},{
					    "name": "库马纳",
					    "code": "CUM",
					    "kw": "CumanaCumana",
					    "city": "库马纳"
					},{
					    "name": "坎伯兰",
					    "code": "CBE",
					    "kw": "CumberlandCumberland",
					    "city": "坎伯兰"
					},{
					    "name": "库内奥",
					    "code": "CUF",
					    "kw": "CuneoCuneo",
					    "city": "库内奥"
					},{
					    "name": "库拉索",
					    "code": "CUR",
					    "kw": "CuracaoCuracao",
					    "city": "库拉索"
					},{
					    "name": "库里蒂巴",
					    "code": "CWB",
					    "kw": "CuritibaCuritiba Afonso Pena",
					    "city": "库里蒂巴"
					},{
					    "name": "库鲁鲁普",
					    "code": "CPU",
					    "kw": "CururupuCururupu",
					    "city": "库鲁鲁普"
					},{
					    "name": "库鲁苏夸蒂亚",
					    "code": "UZU",
					    "kw": "Curuzu CuatiaCuruzu Cuatia",
					    "city": "库鲁苏夸蒂亚"
					},{
					    "name": "库特拉尔科",
					    "code": "CUT",
					    "kw": "CutralCutral",
					    "city": "库特拉尔科"
					},{
					    "name": "库斯科",
					    "code": "CUZ",
					    "kw": "CuzcoCuzco",
					    "city": "库斯克"
					},{
					    "name": "岘港",
					    "code": "DAD",
					    "kw": "Da NangDa Nang",
					    "city": "舰港"
					},{
					    "name": "达特",
					    "code": "DTE",
					    "kw": "DaetDaet",
					    "city": "达特"
					},{
					    "name": "达喀尔",
					    "code": "DKR",
					    "kw": "DakarDakar",
					    "city": "达咯尔"
					},{
					    "name": "达赫拉",
					    "code": "VIL",
					    "kw": "DakhlaDakhla",
					    "city": "达赫拉"
					},{
					    "name": "达拉曼",
					    "code": "DLM",
					    "kw": "DalamanDalaman",
					    "city": "达拉曼"
					},{
					    "name": "达尔本丁",
					    "code": "DBA",
					    "kw": "DalbandinDalbandin",
					    "city": "达尔本丁"
					},{
					    "name": "达洛亚",
					    "code": "DJO",
					    "kw": "DaloaDaloa",
					    "city": "大洛亚"
					},{
					    "name": "戴利里弗",
					    "code": "DVR",
					    "kw": "Daly RiverDaly River",
					    "city": "戴利里弗"
					},{
					    "name": "戴利沃特",
					    "code": "DYW",
					    "kw": "Daly WatersDaly Waters",
					    "city": "戴利沃特"
					},{
					    "name": "达曼",
					    "code": "NMB",
					    "kw": "DamanDaman",
					    "city": "大曼"
					},{
					    "name": "大马士革",
					    "code": "DAM",
					    "kw": "DamascusDamascus",
					    "city": "大马士革"
					},{
					    "name": "丹维尔",
					    "code": "DNV",
					    "kw": "DanvilleDanville",
					    "city": "丹维尔"
					},{
					    "name": "丹维尔",
					    "code": "DAN",
					    "kw": "DanvilleDanville",
					    "city": "丹维尔1"
					},{
					    "name": "达帕里卢",
					    "code": "DAE",
					    "kw": "DaparizoDaparizo",
					    "city": "大帕里卢"
					},{
					    "name": "达累斯萨拉姆",
					    "code": "DAR",
					    "kw": "Dar Es SalaamDar Es Salaam",
					    "city": "达累斯萨拉姆"
					},{
					    "name": "达鲁",
					    "code": "DAU",
					    "kw": "DaruDaru",
					    "city": "大卢"
					},{
					    "name": "达尔文",
					    "code": "DRW",
					    "kw": "DarwinDarwin",
					    "city": "达尔文"
					},{
					    "name": "达希纳",
					    "code": "DAH",
					    "kw": "DathinaDathina",
					    "city": "达西纳"
					},{
					    "name": "多芬",
					    "code": "YDN",
					    "kw": "DauphinDauphin",
					    "city": "多芬"
					},{
					    "name": "达沃",
					    "code": "DVO",
					    "kw": "DavaoDavao",
					    "city": "达沃"
					},{
					    "name": "达维德",
					    "code": "DAV",
					    "kw": "DavidDavid",
					    "city": "达维德"
					},{
					    "name": "代维斯英莱",
					    "code": "YDI",
					    "kw": "Davis InletDavis Inlet",
					    "city": "代维斯英莱"
					},{
					    "name": "多维尔",
					    "code": "DOL",
					    "kw": "DeauvilleDeauville",
					    "city": "多维尔"
					},{
					    "name": "德比帕雷",
					    "code": "DBP",
					    "kw": "DebepareDebepare",
					    "city": "德比帕雷"
					},{
					    "name": "德布拉马科斯",
					    "code": "DBM",
					    "kw": "Debra MarcosDebra Marcos",
					    "city": "德布拉马科斯"
					},{
					    "name": "迪凯特",
					    "code": "DEC",
					    "kw": "DecaturDecatur",
					    "city": "迪凯特"
					},{
					    "name": "迪尔莱克",
					    "code": "YDF",
					    "kw": "Deer LakeDeer Lake",
					    "city": "迪尔莱克1"
					},{
					    "name": "德尔佐尔",
					    "code": "DEZ",
					    "kw": "DeirezzorDeirezzor",
					    "city": "德尔左尔"
					},{
					    "name": "德里",
					    "code": "DEL",
					    "kw": "DelhiDelhi",
					    "city": "（新）德里"
					},{
					    "name": "富兰克林堡",
					    "code": "YWJ",
					    "kw": "DelineDeline",
					    "city": "富兰克林堡"
					},{
					    "name": "德利萨维尔",
					    "code": "DLV",
					    "kw": "DelissavilleDelissaville",
					    "city": "德利萨维尔"
					},{
					    "name": "登比多洛",
					    "code": "DEM",
					    "kw": "DembidolloDembidollo",
					    "city": "登比多洛"
					},{
					    "name": "丹尼斯岛",
					    "code": "DEI",
					    "kw": "Denis IslandDenis Island",
					    "city": "丹尼斯岛"
					},{
					    "name": "登帕萨",
					    "code": "DPS",
					    "kw": "Denpasar BaliDenpasar Bali",
					    "city": "巴厘"
					},{
					    "name": "丹佛",
					    "code": "DEN",
					    "kw": "DenverDenver Intl Apt",
					    "city": "丹佛"
					},{
					    "name": "德拉伊斯梅尔汉",
					    "code": "DSK",
					    "kw": "Dera Ismail KhanDera Ismail Khan",
					    "city": "德拉伊斯维尔汗"
					},{
					    "name": "代里姆",
					    "code": "DER",
					    "kw": "DerimDerim",
					    "city": "代里姆"
					},{
					    "name": "代尔纳",
					    "code": "DNF",
					    "kw": "DernaDerna",
					    "city": "代尔纳"
					},{
					    "name": "德罗什",
					    "code": "DES",
					    "kw": "DesrochesDesroches",
					    "city": "德罗什"
					},{
					    "name": "德西埃",
					    "code": "DSE",
					    "kw": "DessieDessie",
					    "city": "丹巴德"
					},{
					    "name": "达卡",
					    "code": "DAC",
					    "kw": "DhakaDhaka",
					    "city": "达卡"
					},{
					    "name": "当加希",
					    "code": "DHI",
					    "kw": "DhangarhiDhangarhi",
					    "city": "当加希"
					},{
					    "name": "迪亚纳波利斯·托",
					    "code": "DNO",
					    "kw": "DianopolisDianopolis",
					    "city": "迪咬牙纳波里斯"
					},{
					    "name": "巴亚",
					    "code": "BYB",
					    "kw": "DibaaDibaa",
					    "city": "巴亚"
					},{
					    "name": "迪布鲁格尔",
					    "code": "DIB",
					    "kw": "DibrugarhDibrugarh",
					    "city": "迪不卢格尔"
					},{
					    "name": "杰布古",
					    "code": "XDE",
					    "kw": "DiebougouDiebougou",
					    "city": "杰布古"
					},{
					    "name": "迪戎",
					    "code": "DIJ",
					    "kw": "DijonDijon",
					    "city": "迪戒"
					},{
					    "name": "帝力",
					    "code": "DIL",
					    "kw": "DiliDili",
					    "city": "帝力"
					},{
					    "name": "狄龙",
					    "code": "DLL",
					    "kw": "DillonDillon",
					    "city": "狄龙"
					},{
					    "name": "迪马布尔",
					    "code": "DMU",
					    "kw": "DimapurDimapur",
					    "city": "狄马布尔"
					},{
					    "name": "迪纳加特",
					    "code": "DNU",
					    "kw": "DinangatDinangat",
					    "city": "迪纳加特"
					},{
					    "name": "迪纳尔",
					    "code": "DNR",
					    "kw": "DinardDinard",
					    "city": "迪纳尔"
					},{
					    "name": "丁德尔",
					    "code": "DNX",
					    "kw": "DinderDinder",
					    "city": "丁德尔"
					},{
					    "name": "迪奥斯",
					    "code": "DOS",
					    "kw": "DiosDios",
					    "city": "迪奥斯"
					},{
					    "name": "迪波洛格",
					    "code": "DPL",
					    "kw": "DipologDipolog",
					    "city": "迪波洛格"
					},{
					    "name": "迪雷达瓦",
					    "code": "DIR",
					    "kw": "Dire DawaDire Dawa",
					    "city": "迪雷达瓦"
					},{
					    "name": "迪亚巴克尔",
					    "code": "DIY",
					    "kw": "DiyarbakirDiyarbakir",
					    "city": "迪亚巴克尔"
					},{
					    "name": "汉巴拉",
					    "code": "DJM",
					    "kw": "DjambalaDjambala",
					    "city": "江巴拉"
					},{
					    "name": "贾奈特",
					    "code": "DJG",
					    "kw": "DjanetDjanet",
					    "city": "贾奈特"
					},{
					    "name": "查尔巴",
					    "code": "DJE",
					    "kw": "DjerbaDjerba",
					    "city": "杰尔巴"
					},{
					    "name": "吉博",
					    "code": "XDJ",
					    "kw": "DjiboDjibo",
					    "city": "吉博"
					},{
					    "name": "吉布提市",
					    "code": "JIB",
					    "kw": "DjiboutiDjibouti",
					    "city": "吉布提市"
					},{
					    "name": "第聂伯罗彼得罗夫斯克",
					    "code": "DNK",
					    "kw": "DnepropetrovskDnepropetrovsk",
					    "city": "第摄伯罗彼得罗"
					},{
					    "name": "多安尼",
					    "code": "DOA",
					    "kw": "DoanyDoany",
					    "city": "多安尼"
					},{
					    "name": "多克尔河",
					    "code": "DKV",
					    "kw": "Docker RiverDocker River",
					    "city": "多克尔河"
					},{
					    "name": "多多依马",
					    "code": "DDM",
					    "kw": "DodoimaDodoima",
					    "city": "多多依马"
					},{
					    "name": "多多马",
					    "code": "DOD",
					    "kw": "DodomaDodoma",
					    "city": "多多马"
					},{
					    "name": "多哈",
					    "code": "DOH",
					    "kw": "DohaDoha",
					    "city": "多哈"
					},{
					    "name": "DM CANE FIELD",
					    "code": "DCF",
					    "kw": "DominicaDominica Cane Field",
					    "city": "多米尼贾"
					},{
					    "name": "多米尼加",
					    "code": "DOM",
					    "kw": "DominicaDominica Melville Hall Apt",
					    "city": "多米尼贾"
					},{
					    "name": "卡里克芬",
					    "code": "CFN",
					    "kw": "DonegalDonegal",
					    "city": "卡里克芬"
					},{
					    "name": "顿涅茨克",
					    "code": "DOK",
					    "kw": "DonetskDonetsk",
					    "city": "顿捏次克"
					},{
					    "name": "当果拉",
					    "code": "DOG",
					    "kw": "DongolaDongola",
					    "city": "当果拉"
					},{
					    "name": "多拉多",
					    "code": "DDP",
					    "kw": "DoradoDorado",
					    "city": "多拉多"
					},{
					    "name": "多罗比索罗",
					    "code": "DOO",
					    "kw": "DorobisoroDorobisoro",
					    "city": "多罗比索里"
					},{
					    "name": "多特蒙特",
					    "code": "DTM",
					    "kw": "DortmundDortmund",
					    "city": "多特蒙特"
					},{
					    "name": "多森",
					    "code": "DHN",
					    "kw": "DothanDothan",
					    "city": "多森"
					},{
					    "name": "杜阿拉",
					    "code": "DLA",
					    "kw": "DoualaDouala",
					    "city": "杜阿拉"
					},{
					    "name": "道格拉斯",
					    "code": "DUG",
					    "kw": "DouglasDouglas Bisbee-Douglas International Ap",
					    "city": "道格拉斯"
					},{
					    "name": "多拉杜",
					    "code": "DOU",
					    "kw": "DouradosDourados",
					    "city": "多拉杜"
					},{
					    "name": "德累斯顿",
					    "code": "DRS",
					    "kw": "DresdenDresden",
					    "city": "德累斯顿"
					},{
					    "name": "姜村",
					    "code": "DSC",
					    "kw": "DschangDschang",
					    "city": "姜村"
					},{
					    "name": "迪拜",
					    "code": "DXB",
					    "kw": "DubaiDubai",
					    "city": "迪拜"
					},{
					    "name": "都伯林",
					    "code": "DUB",
					    "kw": "DublinDublin",
					    "city": "都柏林"
					},{
					    "name": "杜波依斯",
					    "code": "DUJ",
					    "kw": "DuboisDubois",
					    "city": "杜波依斯"
					},{
					    "name": "杜布罗夫尼克",
					    "code": "DBV",
					    "kw": "DubrovnikDubrovnik",
					    "city": "杜布罗夫尼克"
					},{
					    "name": "杜马格特",
					    "code": "DGT",
					    "kw": "DumagueteDumaguete",
					    "city": "杜马格特"
					},{
					    "name": "杜迈",
					    "code": "DUM",
					    "kw": "DumaiDumai",
					    "city": "杜迈"
					},{
					    "name": "邓迪",
					    "code": "DND",
					    "kw": "DundeeDundee",
					    "city": "邓迪"
					},{
					    "name": "栋多",
					    "code": "DUE",
					    "kw": "DundoDundo",
					    "city": "栋多"
					},{
					    "name": "达尼丁",
					    "code": "DUD",
					    "kw": "DunedinDunedin",
					    "city": "达尼丁"
					},{
					    "name": "杜兰戈",
					    "code": "DRO",
					    "kw": "DurangoDurango La Plata Apt",
					    "city": "杜兰戈"
					},{
					    "name": "德班",
					    "code": "DUR",
					    "kw": "DurbanDurban International Airport",
					    "city": "德班"
					},{
					    "name": "杜尚别",
					    "code": "DYU",
					    "kw": "DushanbeDushanbe",
					    "city": "杜尚别"
					},{
					    "name": "DUSSELDORF MAIN",
					    "code": "QDU",
					    "kw": "DusseldorfDusseldorf Main Rail Station",
					    "city": "杜塞尔多夫"
					},{
					    "name": "杜塞尔多夫",
					    "code": "DUS",
					    "kw": "DusseldorfDusseldorf Rhein Ruhr Airport",
					    "city": "杜塞尔多夫"
					},{
					    "name": "东伦敦",
					    "code": "ELS",
					    "kw": "East LondonEast London",
					    "city": "东伦顿"
					},{
					    "name": "复活节岛",
					    "code": "IPC",
					    "kw": "Easter IslandEaster Island",
					    "city": "复活节岛"
					},{
					    "name": "埃代岛",
					    "code": "EOI",
					    "kw": "EdayEday",
					    "city": "埃代岛"
					},{
					    "name": "EDMONTON",
					    "code": "YEG",
					    "kw": "EdmontonEdmonton International Apt",
					    "city": "埃德蒙顿"
					},{
					    "name": "EDMONTON MUNICIPA",
					    "code": "YXD",
					    "kw": "EdmontonEdmonton Municipal Apt",
					    "city": "埃德蒙顿"
					},{
					    "name": "爱德华里弗",
					    "code": "EDR",
					    "kw": "Edward RiverEdward River",
					    "city": "爱丁堡"
					},{
					    "name": "爱德华阿弗",
					    "code": "EDW",
					    "kw": "Edwards Air Force BaseEdwards Air Force Base",
					    "city": "爱德华兹阿佛"
					},{
					    "name": "埃福吉",
					    "code": "EFG",
					    "kw": "EfogiEfogi",
					    "city": "埃福吉"
					},{
					    "name": "埃吉尔斯塔第尔",
					    "code": "EGS",
					    "kw": "EgilsstadirEgilsstadir",
					    "city": "埃吉尔斯他蒂尔"
					},{
					    "name": "艾亚",
					    "code": "EIA",
					    "kw": "EiaEia",
					    "city": "埃亚"
					},{
					    "name": "艾因亚哈夫",
					    "code": "EIY",
					    "kw": "Ein YahavEin Yahav",
					    "city": "艾因亚哈夫"
					},{
					    "name": "埃因霍温",
					    "code": "EIN",
					    "kw": "EindhovenEindhoven Airport",
					    "city": "埃因霍温"
					},{
					    "name": "埃凯雷库",
					    "code": "EKE",
					    "kw": "EkerekuEkereku",
					    "city": "埃凯雷库"
					},{
					    "name": "埃尔巴格莱",
					    "code": "EBG",
					    "kw": "El BagreEl Bagre",
					    "city": "埃尔巴格赖"
					},{
					    "name": "埃尔班科",
					    "code": "ELB",
					    "kw": "El BancoEl Banco",
					    "city": "埃尔班克"
					},{
					    "name": "埃尔博尔松",
					    "code": "EHL",
					    "kw": "El BolsonEl Bolson",
					    "city": "埃尔波尔松"
					},{
					    "name": "埃尔多拉多",
					    "code": "ELD",
					    "kw": "El DoradoEl Dorado",
					    "city": "埃尔多拉多"
					},{
					    "name": "埃尔法舍尔",
					    "code": "ELF",
					    "kw": "El FasherEl Fasher",
					    "city": "埃尔发舍尔"
					},{
					    "name": "埃尔果累阿",
					    "code": "ELG",
					    "kw": "El GoleaEl Golea",
					    "city": "埃尔果雷阿"
					},{
					    "name": "埃尔梅滕",
					    "code": "EMX",
					    "kw": "El MaitenEl Maiten",
					    "city": "埃尔梅藤"
					},{
					    "name": "埃尔米尼亚",
					    "code": "EMY",
					    "kw": "El MinyaEl Minya",
					    "city": "埃尔米尼亚"
					},{
					    "name": "埃奥贝德",
					    "code": "EBD",
					    "kw": "El ObeidEl Obeid",
					    "city": "埃尔奥贝德"
					},{
					    "name": "埃尔韦德",
					    "code": "ELU",
					    "kw": "El OuedEl Oued",
					    "city": "埃尔韦德"
					},{
					    "name": "埃尔波维尼尔",
					    "code": "PVE",
					    "kw": "El PorvenirEl Porvenir",
					    "city": "埃尔波韦尼尔"
					},{
					    "name": "埃尔雷克雷奥",
					    "code": "ELJ",
					    "kw": "El RecreoEl Recreo",
					    "city": "埃尔雷克雷奥"
					},{
					    "name": "萨尔瓦多",
					    "code": "ESR",
					    "kw": "El SalvadorEl Salvador",
					    "city": "萨尔挖多"
					},{
					    "name": "埃拉特",
					    "code": "ETH",
					    "kw": "ElatElat",
					    "city": "埃拉特"
					},{
					    "name": "埃拉齐格",
					    "code": "EZS",
					    "kw": "ElazigElazig",
					    "city": "埃拉奇格"
					},{
					    "name": "厄尔巴",
					    "code": "EBA",
					    "kw": "Elba IslandElba Island",
					    "city": "埃尔巴"
					},{
					    "name": "埃尔科岛",
					    "code": "ELC",
					    "kw": "Elcho IslandElcho Island",
					    "city": "埃克岛"
					},{
					    "name": "埃尔德巴",
					    "code": "EDB",
					    "kw": "EldebbaEldebba",
					    "city": "埃尔德巴"
					},{
					    "name": "埃尔多雷特",
					    "code": "EDL",
					    "kw": "EldoretEldoret",
					    "city": "埃尔多雷特"
					},{
					    "name": "埃尔雷克德拉",
					    "code": "EKD",
					    "kw": "ElkedraElkedra",
					    "city": "埃尔克德拉"
					},{
					    "name": "埃尔克哈特",
					    "code": "EKI",
					    "kw": "ElkhartElkhart",
					    "city": "埃尔克哈特"
					},{
					    "name": "埃利奥特莱克",
					    "code": "YEL",
					    "kw": "Elliot LakeElliot Lake",
					    "city": "埃利奥特莱克"
					},{
					    "name": "埃利斯拉斯",
					    "code": "ELL",
					    "kw": "EllisrasEllisras",
					    "city": "埃利斯拉斯"
					},{
					    "name": "埃尔奥尔扎·阿普雷",
					    "code": "EOZ",
					    "kw": "ElorzaElorza",
					    "city": "埃尔奥尔扎阿普"
					},{
					    "name": "埃迈",
					    "code": "EAE",
					    "kw": "EmaeEmae",
					    "city": "埃迈"
					},{
					    "name": "恩贝萨",
					    "code": "EMS",
					    "kw": "EmbessaEmbessa",
					    "city": "恩贝萨"
					},{
					    "name": "埃姆登",
					    "code": "EME",
					    "kw": "EmdenEmden",
					    "city": "埃姆登"
					},{
					    "name": "埃密劳",
					    "code": "EMI",
					    "kw": "EmirauEmirau",
					    "city": "埃密劳"
					},{
					    "name": "埃纳罗塔利",
					    "code": "EWI",
					    "kw": "EnarotaliEnarotali",
					    "city": "埃纳罗塔利"
					},{
					    "name": "埃尼威托克岛",
					    "code": "ENT",
					    "kw": "Enewetak IslandEnewetak Island",
					    "city": "埃尼威托克"
					},{
					    "name": "埃农泰基厄",
					    "code": "ENF",
					    "kw": "EnontekioEnontekio",
					    "city": "埃弄太基厄"
					},{
					    "name": "恩斯赫德",
					    "code": "ENS",
					    "kw": "EnschedeEnschede",
					    "city": "恩施"
					},{
					    "name": "恩德培",
					    "code": "EBB",
					    "kw": "Entebbe/KampalaEntebbe/Kampala",
					    "city": "恩德佩"
					},{
					    "name": "恩特普赖斯",
					    "code": "ETS",
					    "kw": "EnterpriseEnterprise",
					    "city": "恩特普赖斯"
					},{
					    "name": "埃努古",
					    "code": "ENU",
					    "kw": "EnuguEnugu",
					    "city": "埃怒古"
					},{
					    "name": "埃佩纳",
					    "code": "EPN",
					    "kw": "EpenaEpena",
					    "city": "埃佩纳"
					},{
					    "name": "埃皮纳勒",
					    "code": "EPL",
					    "kw": "EpinalEpinal",
					    "city": "埃皮纳勒"
					},{
					    "name": "埃拉韦",
					    "code": "ERE",
					    "kw": "EraveErave",
					    "city": "埃拉威"
					},{
					    "name": "埃阿坎",
					    "code": "ECN",
					    "kw": "ErcanErcan",
					    "city": "坎阿坎"
					},{
					    "name": "埃雷欣",
					    "code": "ERM",
					    "kw": "ErechimErechim",
					    "city": "埃里温"
					},{
					    "name": "埃尔富特",
					    "code": "ERF",
					    "kw": "ErfurtErfurt",
					    "city": "埃尔副特"
					},{
					    "name": "埃里加伏",
					    "code": "ERA",
					    "kw": "ErigavoErigavo",
					    "city": "埃里加伏"
					},{
					    "name": "埃纳贝拉",
					    "code": "ERB",
					    "kw": "ErnabellaErnabella",
					    "city": "埃纳贝拉"
					},{
					    "name": "埃拉契迪亚",
					    "code": "ERH",
					    "kw": "ErrachidiaErrachidia",
					    "city": "埃拉契迪亚"
					},{
					    "name": "埃罗麦",
					    "code": "ERU",
					    "kw": "ErumeErume",
					    "city": "埃罗麦"
					},{
					    "name": "埃尔佐鲁姆",
					    "code": "ERZ",
					    "kw": "ErzurumErzurum",
					    "city": "埃而佐鲁姆"
					},{
					    "name": "埃沙哈拉",
					    "code": "ESA",
					    "kw": "Esa'AlaEsa'Ala",
					    "city": "埃沙哈拉"
					},{
					    "name": "埃斯堡",
					    "code": "EBJ",
					    "kw": "EsbjergEsbjerg Airport",
					    "city": "埃斯彼约"
					},{
					    "name": "埃斯基尔斯图纳",
					    "code": "EKT",
					    "kw": "EskilstunaEskilstuna",
					    "city": "埃斯基而斯图纳"
					},{
					    "name": "埃斯梅拉尔达斯",
					    "code": "ESM",
					    "kw": "EsmeraldasEsmeraldas",
					    "city": "爱斯梅拉而达斯"
					},{
					    "name": "埃斯皮诺萨",
					    "code": "ESI",
					    "kw": "EspinosaEspinosa",
					    "city": "爱斯皮挪萨"
					},{
					    "name": "埃斯克尔",
					    "code": "EQS",
					    "kw": "EsquelEsquel",
					    "city": "埃斯克尔"
					},{
					    "name": "埃瓦",
					    "code": "EUA",
					    "kw": "EuaEua",
					    "city": "埃挖"
					},{
					    "name": "埃文斯维尔",
					    "code": "EVV",
					    "kw": "EvansvilleEvansville",
					    "city": "埃文斯维尔"
					},{
					    "name": "埃弗莱斯",
					    "code": "EVM",
					    "kw": "EvelethEveleth",
					    "city": "埃伏莱斯"
					},{
					    "name": "埃沃",
					    "code": "EWO",
					    "kw": "EwoEwo",
					    "city": "埃沃"
					},{
					    "name": "埃克斯柯森",
					    "code": "EXI",
					    "kw": "Excursion InletExcursion Inlet",
					    "city": "埃克斯柯森"
					},{
					    "name": "埃克塞特",
					    "code": "EXT",
					    "kw": "ExeterExeter",
					    "city": "埃克塞特"
					},{
					    "name": "法达恩古尔马",
					    "code": "FNG",
					    "kw": "Fada N'GourmaFada N'Gourma",
					    "city": "法达恩古尔马"
					},{
					    "name": "法格内斯",
					    "code": "VDB",
					    "kw": "FagernesFagernes",
					    "city": "法格内斯"
					},{
					    "name": "法古罗尔斯米里",
					    "code": "FAG",
					    "kw": "FagurholsmyriFagurholsmyri",
					    "city": "法古罗尔斯密里"
					},{
					    "name": "费尔岛",
					    "code": "FIE",
					    "kw": "Fair IsleFair Isle",
					    "city": "费尔岛"
					},{
					    "name": "费尔班克斯",
					    "code": "FAI",
					    "kw": "FairbanksFairbanks International Apt",
					    "city": "费尔班克斯"
					},{
					    "name": "费尔蒙特",
					    "code": "FRM",
					    "kw": "FairmontFairmont",
					    "city": "费尔梦特"
					},{
					    "name": "费萨拉巴德",
					    "code": "LYP",
					    "kw": "FaisalabadFaisalabad",
					    "city": "费萨拉巴德"
					},{
					    "name": "法扎巴德",
					    "code": "FBD",
					    "kw": "FaizabadFaizabad",
					    "city": "法扎巴德"
					},{
					    "name": "法哈多",
					    "code": "FAJ",
					    "kw": "FajardoFajardo",
					    "city": "法哈多"
					},{
					    "name": "法克法克",
					    "code": "FKQ",
					    "kw": "Fak FakFak Fak",
					    "city": "法克法克"
					},{
					    "name": "法卡希纳",
					    "code": "FHZ",
					    "kw": "FakahinaFakahina",
					    "city": "法卡希纳"
					},{
					    "name": "法卡拉瓦",
					    "code": "FAV",
					    "kw": "FakaravaFakarava",
					    "city": "法卡拉瓦"
					},{
					    "name": "法尔茅斯",
					    "code": "FMH",
					    "kw": "FalmouthFalmouth",
					    "city": "法尔毛斯"
					},{
					    "name": "费恩",
					    "code": "FNE",
					    "kw": "FaneFane",
					    "city": "费恩"
					},{
					    "name": "方阿陶",
					    "code": "FGU",
					    "kw": "FangatauFangatau",
					    "city": "放阿陶"
					},{
					    "name": "法拉凡加纳",
					    "code": "RVA",
					    "kw": "FarafanganaFarafangana",
					    "city": "法拉凡加纳"
					},{
					    "name": "法拉",
					    "code": "FAH",
					    "kw": "FarahFarah",
					    "city": "法拉"
					},{
					    "name": "法拉纳",
					    "code": "FAA",
					    "kw": "FaranahFaranah",
					    "city": "法拉纳"
					},{
					    "name": "弗尔韦尔",
					    "code": "FWL",
					    "kw": "FarewellFarewell",
					    "city": "费尔韦尔"
					},{
					    "name": "法戈",
					    "code": "FAR",
					    "kw": "FargoFargo",
					    "city": "法戈"
					},{
					    "name": "法明代尔",
					    "code": "FRG",
					    "kw": "FarmingdaleFarmingdale",
					    "city": "法明代尔"
					},{
					    "name": "法明顿",
					    "code": "FMN",
					    "kw": "FarmingtonFarmington",
					    "city": "法名顿"
					},{
					    "name": "法罗",
					    "code": "ZFA",
					    "kw": "FaroFaro",
					    "city": "法鲁"
					},{
					    "name": "法鲁",
					    "code": "FAO",
					    "kw": "FaroFaro",
					    "city": "法鲁1"
					},{
					    "name": "法罗群岛",
					    "code": "FAE",
					    "kw": "Faroe IslandsFaroe Islands",
					    "city": "法罗群岛"
					},{
					    "name": "法琛德",
					    "code": "FAN",
					    "kw": "FarsundFarsund",
					    "city": "法琛德"
					},{
					    "name": "法斯克罗斯菲厄泽",
					    "code": "FAS",
					    "kw": "FaskrudsfjordurFaskrudsfjordur",
					    "city": "法斯克罗斯非厄"
					},{
					    "name": "法亚",
					    "code": "FYT",
					    "kw": "FayaFaya",
					    "city": "法亚"
					},{
					    "name": "费耶特维尔",
					    "code": "FYV",
					    "kw": "FayettevilleFayetteville Municipal Airport",
					    "city": "费耶特维尔"
					},{
					    "name": "费耶特维尔",
					    "code": "FAY",
					    "kw": "FayettevilleFayetteville Municipal Apt",
					    "city": "费耶特维尔1"
					},{
					    "name": "NW ARKANSAS RGNL",
					    "code": "XNA",
					    "kw": "FayettevilleFayetteville Northwest Arkansas Reg Apt",
					    "city": "费耶特维尔"
					},{
					    "name": "费拉岛",
					    "code": "FRE",
					    "kw": "Fera IslandFera Island",
					    "city": "费拉岛"
					},{
					    "name": "费尔干纳",
					    "code": "FEG",
					    "kw": "FerganaFergana",
					    "city": "费尔干纳"
					},{
					    "name": "费·努罗尼亚",
					    "code": "FEN",
					    "kw": "Fernando De NoronhaFernando De Noronha",
					    "city": "费怒罗尼亚"
					},{
					    "name": "非斯",
					    "code": "FEZ",
					    "kw": "FezFez",
					    "city": "非斯"
					},{
					    "name": "菲亚纳兰楚阿",
					    "code": "WFI",
					    "kw": "FianarantsoaFianarantsoa",
					    "city": "菲亚纳兰楚阿"
					},{
					    "name": "菲克斯堡",
					    "code": "FCB",
					    "kw": "FicksburgFicksburg",
					    "city": "非克斯堡"
					},{
					    "name": "菲加里·科西嘉",
					    "code": "FSC",
					    "kw": "FigariFigari",
					    "city": "菲加里科西嘉"
					},{
					    "name": "菲尔莫尔",
					    "code": "FIL",
					    "kw": "FillmoreFillmore",
					    "city": "菲尔摸尔"
					},{
					    "name": "芬夏范",
					    "code": "FIN",
					    "kw": "FinschhafenFinschhafen",
					    "city": "芬夏范"
					},{
					    "name": "费拉格斯塔夫",
					    "code": "FLG",
					    "kw": "FlagstaffFlagstaff",
					    "city": "非拉格斯塔夫"
					},{
					    "name": "弗拉泰里",
					    "code": "FLI",
					    "kw": "FlateyriFlateyri",
					    "city": "费拉泰里"
					},{
					    "name": "弗伦斯堡",
					    "code": "FLF",
					    "kw": "FlensburgFlensburg",
					    "city": "弗拉斯包"
					},{
					    "name": "弗林弗伦",
					    "code": "YFO",
					    "kw": "Flin FlonFlin Flon",
					    "city": "佛林佛伦"
					},{
					    "name": "弗林特",
					    "code": "FNT",
					    "kw": "FlintFlint",
					    "city": "弗林特"
					},{
					    "name": "佛罗伦萨",
					    "code": "FLO",
					    "kw": "FlorenceFlorence",
					    "city": "佛罗伦萨1"
					},{
					    "name": "佛罗伦西亚",
					    "code": "FLA",
					    "kw": "FlorenciaFlorencia",
					    "city": "佛洛伦西亚"
					},{
					    "name": "佛洛雷斯岛",
					    "code": "FLW",
					    "kw": "Flores IslandFlores Island",
					    "city": "佛洛雷斯岛"
					},{
					    "name": "佛洛雷斯",
					    "code": "FRS",
					    "kw": "FloresFlores",
					    "city": "佛洛雷斯"
					},{
					    "name": "弗卢里亚诺波利斯",
					    "code": "FLN",
					    "kw": "FlorianopolisFlorianopolis",
					    "city": "弗卢里亚诺卢波"
					},{
					    "name": "弗卢勒",
					    "code": "FRO",
					    "kw": "FloroFloro",
					    "city": "弗卢勒"
					},{
					    "name": "福贾",
					    "code": "FOG",
					    "kw": "FoggiaFoggia",
					    "city": "福贾"
					},{
					    "name": "丰迪拉克",
					    "code": "ZFD",
					    "kw": "Fond du LacFond du Lac",
					    "city": "峰迪拉克"
					},{
					    "name": "弗勒",
					    "code": "FDE",
					    "kw": "FordeForde",
					    "city": "福勒"
					},{
					    "name": "弗利",
					    "code": "FRL",
					    "kw": "ForliForli",
					    "city": "福利"
					},{
					    "name": "福莫萨",
					    "code": "FMA",
					    "kw": "FormosaFormosa",
					    "city": "福摸萨"
					},{
					    "name": "奇普怀恩堡",
					    "code": "YPY",
					    "kw": "Fort ChipewyanFort Chipewyan",
					    "city": "契普怀恩堡"
					},{
					    "name": "柯林",
					    "code": "FNL",
					    "kw": "Fort Collins/LovelandFort Collins/Loveland Municipal Apt",
					    "city": "柯林斯堡"
					},{
					    "name": "FORTCOLLINSLOVLAN",
					    "code": "QWH",
					    "kw": "Fort Collins/LovelandLoveland Bus Station",
					    "city": "柯林斯堡"
					},{
					    "name": "多凡堡",
					    "code": "FTU",
					    "kw": "Fort DauphinFort Dauphin",
					    "city": "多凡堡"
					},{
					    "name": "好望堡",
					    "code": "YGH",
					    "kw": "Fort Good HopeFort Good Hope",
					    "city": "好望堡"
					},{
					    "name": "莱奥纳德乌德",
					    "code": "TBN",
					    "kw": "Fort Leonard WoodFort Leonard Wood",
					    "city": "莱奥纳德乌德"
					},{
					    "name": "麦迪逊堡",
					    "code": "FMS",
					    "kw": "Fort MadisonFort Madison",
					    "city": "麦迪逊堡"
					},{
					    "name": "马克马里堡",
					    "code": "YMM",
					    "kw": "Fort McMurrayFort McMurray",
					    "city": "马克马里堡"
					},{
					    "name": "麦克弗森堡",
					    "code": "ZFM",
					    "kw": "Fort McPhersonFort McPherson",
					    "city": "麦克弗森堡"
					},{
					    "name": "波克堡",
					    "code": "POE",
					    "kw": "Fort PolkFort Polk",
					    "city": "波尔堡"
					},{
					    "name": "法兰西堡",
					    "code": "FDF",
					    "kw": "Fort de FranceFort de France",
					    "city": "法兰西堡"
					},{
					    "name": "富加莫",
					    "code": "FOU",
					    "kw": "FougamouFougamou",
					    "city": "富加莫"
					},{
					    "name": "丰班",
					    "code": "FOM",
					    "kw": "FoumbanFoumban",
					    "city": "丰班"
					},{
					    "name": "福克斯港",
					    "code": "YFX",
					    "kw": "Fox HarbourFox Harbour",
					    "city": "福克斯港"
					},{
					    "name": "弗朗斯维尔",
					    "code": "MVB",
					    "kw": "FrancevilleFranceville",
					    "city": "弗浪斯维尔"
					},{
					    "name": "弗朗西斯",
					    "code": "FBE",
					    "kw": "Francisco BeltraoFrancisco Beltrao",
					    "city": "弗郎西斯"
					},{
					    "name": "弗朗西斯敦",
					    "code": "FRW",
					    "kw": "FrancistownFrancistown",
					    "city": "弗郎西斯顿"
					},{
					    "name": "法兰克福",
					    "code": "FFT",
					    "kw": "FrankfortFrankfort",
					    "city": "法兰克福1"
					},{
					    "name": "法兰克福国际",
					    "code": "FRA",
					    "kw": "FrankfurtFrankfurt International Apt",
					    "city": "法兰克福"
					},{
					    "name": "石油城",
					    "code": "FKL",
					    "kw": "FranklinFranklin Chess Lamberton Apt",
					    "city": "法兰克福"
					},{
					    "name": "弗里波特",
					    "code": "FPO",
					    "kw": "FreeportFreeport",
					    "city": "弗里波特"
					},{
					    "name": "弗里敦",
					    "code": "FNA",
					    "kw": "FreetownFreetown Lungi International Apt",
					    "city": "弗里敦"
					},{
					    "name": "弗雷盖特岛",
					    "code": "FRK",
					    "kw": "Fregate IslandFregate Island",
					    "city": "弗雷盖特岛"
					},{
					    "name": "弗里儒斯",
					    "code": "FRJ",
					    "kw": "FrejusFrejus",
					    "city": "弗里儒斯"
					},{
					    "name": "弗伦奇利克",
					    "code": "FRH",
					    "kw": "French LickFrench Lick",
					    "city": "弗伦齐力克"
					},{
					    "name": "弗雷斯诺",
					    "code": "FAT",
					    "kw": "FresnoFresno Air Terminal",
					    "city": "弗雷斯诺"
					},{
					    "name": "腓特烈港",
					    "code": "FDH",
					    "kw": "FriedrichshafenFriedrichshafen",
					    "city": "诽特烈港"
					},{
					    "name": "弗韦尔特文土拉岛",
					    "code": "FUE",
					    "kw": "FuerteventuraFuerteventura",
					    "city": "弗韦尔特文土拉"
					},{
					    "name": "福江",
					    "code": "FUJ",
					    "kw": "FukueFukue",
					    "city": "福江"
					},{
					    "name": "富兰克林",
					    "code": "FKJ",
					    "kw": "FukuiFukui",
					    "city": "福井"
					},{
					    "name": "福冈",
					    "code": "FUK",
					    "kw": "FukuokaFukuoka",
					    "city": "福冈"
					},{
					    "name": "富勒博恩",
					    "code": "FUB",
					    "kw": "FullebornFulleborn",
					    "city": "富勒博恩"
					},{
					    "name": "富勒顿",
					    "code": "FUL",
					    "kw": "FullertonFullerton",
					    "city": "富勒敦"
					},{
					    "name": "富纳富蒂",
					    "code": "FUN",
					    "kw": "Funafuti AtolFunafuti Atol",
					    "city": "富纳富蒂"
					},{
					    "name": "丰沙尔",
					    "code": "FNC",
					    "kw": "FunchalFunchal",
					    "city": "丰沙尔"
					},{
					    "name": "富图纳岛",
					    "code": "FTA",
					    "kw": "Futuna IslandFutuna Island",
					    "city": "富图纳岛1"
					},{
					    "name": "富图纳岛",
					    "code": "FUT",
					    "kw": "FutunaFutuna",
					    "city": "富图纳岛"
					},{
					    "name": "加贝斯",
					    "code": "GAE",
					    "kw": "GabesGabes",
					    "city": "加贝斯"
					},{
					    "name": "哈博罗内",
					    "code": "GBE",
					    "kw": "GaboroneGaborone",
					    "city": "哈博罗内"
					},{
					    "name": "加兹登",
					    "code": "GAD",
					    "kw": "GadsdenGadsden",
					    "city": "加次登"
					},{
					    "name": "加夫萨",
					    "code": "GAF",
					    "kw": "GafsaGafsa",
					    "city": "加夫萨"
					},{
					    "name": "加尼奥阿",
					    "code": "GGN",
					    "kw": "GagnoaGagnoa",
					    "city": "加你袄阿"
					},{
					    "name": "盖恩斯维尔",
					    "code": "GNV",
					    "kw": "GainesvilleGainesville",
					    "city": "盖恩斯维尔"
					},{
					    "name": "加拉帕戈斯",
					    "code": "GPS",
					    "kw": "Galapagos IslandsGalapagos Islands",
					    "city": "加拉帕戈斯"
					},{
					    "name": "加尔卡尤",
					    "code": "GLK",
					    "kw": "GalcaioGalcaio",
					    "city": "加尔卡尤"
					},{
					    "name": "加莱拉",
					    "code": "GLX",
					    "kw": "GalelaGalela",
					    "city": "加莱拉"
					},{
					    "name": "盖尔斯堡",
					    "code": "GBG",
					    "kw": "GalesburgGalesburg",
					    "city": "盖尔斯堡"
					},{
					    "name": "耶利瓦勒",
					    "code": "GEV",
					    "kw": "GallivareGallivare",
					    "city": "加莱拉1"
					},{
					    "name": "戈尔韦",
					    "code": "GWY",
					    "kw": "GalwayGalway",
					    "city": "戈尔韦"
					},{
					    "name": "甘巴",
					    "code": "GAX",
					    "kw": "GambaGamba",
					    "city": "甘巴"
					},{
					    "name": "甘贝拉",
					    "code": "GMB",
					    "kw": "GambelaGambela",
					    "city": "赶贝拉"
					},{
					    "name": "甘比尔岛",
					    "code": "GMR",
					    "kw": "Gambier IslandGambier Island",
					    "city": "甘比尔岛"
					},{
					    "name": "甘博马",
					    "code": "GMM",
					    "kw": "GambomaGamboma",
					    "city": "甘博马"
					},{
					    "name": "甘德",
					    "code": "YQX",
					    "kw": "GanderGander",
					    "city": "甘德"
					},{
					    "name": "甘高",
					    "code": "GAW",
					    "kw": "GangawGangaw",
					    "city": "甘高"
					},{
					    "name": "加奥",
					    "code": "GAQ",
					    "kw": "GaoGao",
					    "city": "加奥"
					},{
					    "name": "加瓦",
					    "code": "XGA",
					    "kw": "GaouaGaoua",
					    "city": "加瓦"
					},{
					    "name": "加普",
					    "code": "GAT",
					    "kw": "GapGap",
					    "city": "加普"
					},{
					    "name": "加赖纳",
					    "code": "GAR",
					    "kw": "GarainaGaraina",
					    "city": "加赖纳"
					},{
					    "name": "加尔巴哈瑞",
					    "code": "GBM",
					    "kw": "GarbahareyGarbaharey",
					    "city": "加尔巴哈瑞"
					},{
					    "name": "加登波恩特",
					    "code": "GPN",
					    "kw": "Garden PointGarden Point",
					    "city": "加登波恩特"
					},{
					    "name": "加德兹",
					    "code": "GRG",
					    "kw": "GardezGardez",
					    "city": "加德兹"
					},{
					    "name": "加尔多",
					    "code": "GSR",
					    "kw": "GardoGardo",
					    "city": "加尔多"
					},{
					    "name": "加里萨",
					    "code": "GAS",
					    "kw": "GarissaGarissa",
					    "city": "加里撒"
					},{
					    "name": "加洛韦",
					    "code": "GGR",
					    "kw": "GaroeGaroe",
					    "city": "加洛韦"
					},{
					    "name": "加鲁阿",
					    "code": "GOU",
					    "kw": "GarouaGaroua",
					    "city": "加鲁阿"
					},{
					    "name": "加斯马塔",
					    "code": "GMI",
					    "kw": "GasmataGasmata",
					    "city": "加斯马塔岛"
					},{
					    "name": "加西姆",
					    "code": "ELQ",
					    "kw": "GassimGassim",
					    "city": "加西姆"
					},{
					    "name": "格雅",
					    "code": "GAY",
					    "kw": "GayaGaya",
					    "city": "戈雅"
					},{
					    "name": "加齐安特普",
					    "code": "GZT",
					    "kw": "GaziantepGaziantep",
					    "city": "加齐安特普"
					},{
					    "name": "巴多赖特",
					    "code": "BDT",
					    "kw": "GbadoliteGbadolite",
					    "city": "巴多赖特"
					},{
					    "name": "邦巴多克",
					    "code": "GBK",
					    "kw": "GbangbatokGbangbatok",
					    "city": "帮巴多克"
					},{
					    "name": "格但斯克",
					    "code": "GDN",
					    "kw": "GdanskGdansk",
					    "city": "戈但斯克"
					},{
					    "name": "格贝",
					    "code": "GEB",
					    "kw": "GebeGebe",
					    "city": "格贝"
					},{
					    "name": "吉朗",
					    "code": "GEX",
					    "kw": "GeelongGeelong",
					    "city": "吉郎"
					},{
					    "name": "盖拉迪",
					    "code": "GLC",
					    "kw": "GeladiGeladi",
					    "city": "盖拉蒂"
					},{
					    "name": "格梅纳",
					    "code": "GMA",
					    "kw": "GemenaGemena",
					    "city": "格没纳"
					},{
					    "name": "迈泰马",
					    "code": "ETE",
					    "kw": "Genda WuhaGenda Wuha",
					    "city": "跟当乌哈"
					},{
					    "name": "桑托斯将军城",
					    "code": "GES",
					    "kw": "General SantosGeneral Santos",
					    "city": "桑拖斯将军镇"
					},{
					    "name": "比耶加斯将军镇",
					    "code": "VGS",
					    "kw": "General VillegasGeneral Villegas",
					    "city": "比耶加斯将军镇"
					},{
					    "name": "日内瓦",
					    "code": "GVA",
					    "kw": "GenevaGeneva",
					    "city": "日内瓦"
					},{
					    "name": "热那亚",
					    "code": "GOA",
					    "kw": "GenoaGenoa",
					    "city": "热那亚"
					},{
					    "name": "根滕",
					    "code": "GTB",
					    "kw": "GentingGenting",
					    "city": "跟藤"
					},{
					    "name": "乔治城",
					    "code": "GGT",
					    "kw": "George TownGeorge Town",
					    "city": "乔治城"
					},{
					    "name": "乔治",
					    "code": "GRJ",
					    "kw": "GeorgeGeorge",
					    "city": "乔治"
					},{
					    "name": "赫罗纳",
					    "code": "GRO",
					    "kw": "GeronaGerona",
					    "city": "赫罗纳"
					},{
					    "name": "盖沃亚",
					    "code": "GEW",
					    "kw": "GewoyaGewoya",
					    "city": "盖沃亚"
					},{
					    "name": "加达迈斯",
					    "code": "LTD",
					    "kw": "GhadamesGhadames",
					    "city": "加达麦斯"
					},{
					    "name": "甘济",
					    "code": "GNZ",
					    "kw": "GhanziGhanzi",
					    "city": "赶济"
					},{
					    "name": "加达亚",
					    "code": "GHA",
					    "kw": "GhardaiaGhardaia",
					    "city": "加达亚"
					},{
					    "name": "加特",
					    "code": "GHT",
					    "kw": "GhatGhat",
					    "city": "加特"
					},{
					    "name": "吉尔吉特",
					    "code": "GIL",
					    "kw": "GilgitGilgit",
					    "city": "吉尔吉特"
					},{
					    "name": "吉勒姆",
					    "code": "YGX",
					    "kw": "GillamGillam",
					    "city": "吉勒姆"
					},{
					    "name": "吉斯伯恩",
					    "code": "GIS",
					    "kw": "GisborneGisborne",
					    "city": "吉斯伯恩"
					},{
					    "name": "吉塞尼",
					    "code": "GYI",
					    "kw": "GisenyiGisenyi",
					    "city": "古塞尼"
					},{
					    "name": "基特加",
					    "code": "GID",
					    "kw": "GitegaGitega",
					    "city": "基特加"
					},{
					    "name": "基赞",
					    "code": "GIZ",
					    "kw": "GizanGizan",
					    "city": "基赞"
					},{
					    "name": "吉佐",
					    "code": "GZO",
					    "kw": "GizoGizo",
					    "city": "吉左"
					},{
					    "name": "格拉斯哥",
					    "code": "GGW",
					    "kw": "GlasgowGlasgow",
					    "city": "格拉斯哥"
					},{
					    "name": "兰州/中川",
					    "code": "ZGG",
					    "kw": "GlasgowGlasgow Central Rail Station",
					    "city": "格伦代夫"
					},{
					    "name": "格拉斯哥",
					    "code": "GLA",
					    "kw": "GlasgowGlasgow International Airport",
					    "city": "格伦代夫"
					},{
					    "name": "GLASGOW PRESTWICK",
					    "code": "PIK",
					    "kw": "GlasgowGlasgow Prestwick Apt",
					    "city": "格伦代夫"
					},{
					    "name": "格伦因尼斯",
					    "code": "GLI",
					    "kw": "Glen InnesGlen Innes",
					    "city": "戴德曼斯凯"
					},{
					    "name": "格洛斯特",
					    "code": "GLO",
					    "kw": "GloucesterGloucester",
					    "city": "果阿"
					},{
					    "name": "果阿",
					    "code": "GOI",
					    "kw": "GoaGoa",
					    "city": "戈巴"
					},{
					    "name": "古佛纳多尔格雷",
					    "code": "GGS",
					    "kw": "Gobernador GregoresGobernador Gregores",
					    "city": "古佛纳多尔戈雷"
					},{
					    "name": "戈德",
					    "code": "GDE",
					    "kw": "GodeGode",
					    "city": "戈德"
					},{
					    "name": "戈兹南罗",
					    "code": "YGO",
					    "kw": "Gods NarrowsGods Narrows",
					    "city": "戈兹南罗"
					},{
					    "name": "戈兹里弗",
					    "code": "ZGI",
					    "kw": "Gods RiverGods River",
					    "city": "戈兹里弗"
					},{
					    "name": "戈尔菲托",
					    "code": "GLF",
					    "kw": "GolfitoGolfito",
					    "city": "戈尔非托"
					},{
					    "name": "戈马",
					    "code": "GOM",
					    "kw": "GomaGoma",
					    "city": "戈马"
					},{
					    "name": "戈梅尔",
					    "code": "GME",
					    "kw": "GomelGomel",
					    "city": "戈梅尔"
					},{
					    "name": "戈纳利亚",
					    "code": "GOE",
					    "kw": "GonaliaGonalia",
					    "city": "戈纳利亚"
					},{
					    "name": "贡达尔",
					    "code": "GDQ",
					    "kw": "GondarGondar",
					    "city": "贡达尔"
					},{
					    "name": "古斯贝",
					    "code": "YYR",
					    "kw": "Goose BayGoose Bay",
					    "city": "古斯贝"
					},{
					    "name": "古拉",
					    "code": "GOC",
					    "kw": "GoraGora",
					    "city": "古拉"
					},{
					    "name": "戈勒克布尔",
					    "code": "GOP",
					    "kw": "GorakhpurGorakhpur",
					    "city": "戈勒科布尔"
					},{
					    "name": "戈雷",
					    "code": "GOR",
					    "kw": "GoreGore",
					    "city": "戈雷"
					},{
					    "name": "廓尔喀",
					    "code": "GKH",
					    "kw": "GorkhaGorkha",
					    "city": "郎尔咯"
					},{
					    "name": "戈尔纳奥里亚霍维察",
					    "code": "GOZ",
					    "kw": "Gorna OrjahovicaGorna Orjahovica",
					    "city": "戈尔纳奥里亚霍"
					},{
					    "name": "戈罗卡",
					    "code": "GKA",
					    "kw": "GorokaGoroka",
					    "city": "戈罗卡"
					},{
					    "name": "戈罗姆-戈罗姆",
					    "code": "XGG",
					    "kw": "Gorom-GoromGorom-Gorom",
					    "city": "戈罗姆戈罗姆"
					},{
					    "name": "戈龙塔洛",
					    "code": "GTO",
					    "kw": "GorontaloGorontalo",
					    "city": "戈龙塔洛"
					},{
					    "name": "戈斯福德",
					    "code": "GOS",
					    "kw": "GosfordGosford",
					    "city": "戈斯弗德"
					},{
					    "name": "哥德堡",
					    "code": "GOT",
					    "kw": "GothenburgGothenburg Landvetter Apt",
					    "city": "哥德堡"
					},{
					    "name": "古尔本岛",
					    "code": "GBL",
					    "kw": "Goulburn IslandGoulburn Island",
					    "city": "古尔本岛"
					},{
					    "name": "古利明",
					    "code": "GLN",
					    "kw": "GoulimimeGoulimime",
					    "city": "古利明"
					},{
					    "name": "贡达姆",
					    "code": "GUD",
					    "kw": "GoundamGoundam",
					    "city": "贡达姆"
					},{
					    "name": "戈夫",
					    "code": "GOV",
					    "kw": "GoveGove",
					    "city": "哥夫"
					},{
					    "name": "戈韦诺港",
					    "code": "GHB",
					    "kw": "Governors HarbourGovernors Harbour",
					    "city": "哥韦诺港"
					},{
					    "name": "本图拉",
					    "code": "OYA",
					    "kw": "GoyaGoya",
					    "city": "哥亚"
					},{
					    "name": "格拉西奥萨",
					    "code": "GRW",
					    "kw": "Graciosa IslandGraciosa Island",
					    "city": "格拉西奥萨"
					},{
					    "name": "格拉纳达",
					    "code": "GRX",
					    "kw": "GranadaGranada",
					    "city": "格拉纳达"
					},{
					    "name": "GRAND CANYON H P",
					    "code": "JGC",
					    "kw": "Grand CanyonGrand Canyon H/P",
					    "city": "大峡古"
					},{
					    "name": "大峡谷",
					    "code": "GCN",
					    "kw": "Grand CanyonGrand Canyon National Park Apt",
					    "city": "大峡古"
					},{
					    "name": "大开曼岛",
					    "code": "GCM",
					    "kw": "Grand Cayman IslandGrand Cayman Island",
					    "city": "大曼1"
					},{
					    "name": "大塞斯",
					    "code": "GRC",
					    "kw": "Grand CessGrand Cess",
					    "city": "大塞斯"
					},{
					    "name": "格兰德岛",
					    "code": "GRI",
					    "kw": "Grand IslandGrand Island",
					    "city": "格兰德岛"
					},{
					    "name": "大章克兴",
					    "code": "GJT",
					    "kw": "Grand JunctionGrand Junction",
					    "city": "大章克兴"
					},{
					    "name": "大急流",
					    "code": "GPZ",
					    "kw": "Grand RapidsGrand Rapids",
					    "city": "大急流1"
					},{
					    "name": "大特克",
					    "code": "GDT",
					    "kw": "Grand TurkGrand Turk",
					    "city": "大特克"
					},{
					    "name": "大普雷里",
					    "code": "YQU",
					    "kw": "Grande PrairieGrande Prairie",
					    "city": "大普雷里"
					},{
					    "name": "戈朗维尔",
					    "code": "XGL",
					    "kw": "Granville LakeGranville Lake",
					    "city": "格郎韦尔"
					},{
					    "name": "格拉茨",
					    "code": "GRZ",
					    "kw": "GrazGraz",
					    "city": "格拉兹"
					},{
					    "name": "格雷特瀑布",
					    "code": "GTF",
					    "kw": "Great FallsGreat Falls International Apt",
					    "city": "格雷特瀑布"
					},{
					    "name": "大港",
					    "code": "GHC",
					    "kw": "Great Harbour CayGreat Harbour Cay",
					    "city": "大港"
					},{
					    "name": "格里利",
					    "code": "GXY",
					    "kw": "GreeleyGreeley",
					    "city": "格里利"
					},{
					    "name": "GREEN ISLAND",
					    "code": "GNI",
					    "kw": "Green IslandGreen Island",
					    "city": "格林艾兰"
					},{
					    "name": "格林里弗",
					    "code": "GVI",
					    "kw": "Green RiverGreen River",
					    "city": "格林里福"
					},{
					    "name": "格林斯伯勒",
					    "code": "GSO",
					    "kw": "Greensboro/High PointGreensboro/High Point",
					    "city": "海波因特"
					},{
					    "name": "格林维尔",
					    "code": "GVT",
					    "kw": "GreenvilleGreenville",
					    "city": "格林维尔3"
					},{
					    "name": "格林维尔",
					    "code": "GLH",
					    "kw": "GreenvilleGreenville",
					    "city": "格林维尔1"
					},{
					    "name": "格林维尔",
					    "code": "PGV",
					    "kw": "GreenvilleGreenville",
					    "city": "格林维尔"
					},{
					    "name": "格林维尔",
					    "code": "GSP",
					    "kw": "GreenvilleGreenville/Spartanburg Apt",
					    "city": "格林维尔2"
					},{
					    "name": "格林伍德",
					    "code": "GWO",
					    "kw": "GreenwoodGreenwood",
					    "city": "格林伍德"
					},{
					    "name": "格林纳达",
					    "code": "GND",
					    "kw": "GrenadaGrenada",
					    "city": "格林纳达"
					},{
					    "name": "格勒诺布尔",
					    "code": "GNB",
					    "kw": "GrenobleGrenoble",
					    "city": "格勒诺布尔"
					},{
					    "name": "格雷茅斯",
					    "code": "GMN",
					    "kw": "GreymouthGreymouth",
					    "city": "格雷毛斯"
					},{
					    "name": "格里姆塞",
					    "code": "GRY",
					    "kw": "GrimseyGrimsey",
					    "city": "格里姆塞"
					},{
					    "name": "格赖斯峡湾",
					    "code": "YGZ",
					    "kw": "Grise FiordGrise Fiord",
					    "city": "格赖斯峡湾"
					},{
					    "name": "格罗尼达尔",
					    "code": "JGR",
					    "kw": "GroennedalGroennedal",
					    "city": "格洛尼达尔"
					},{
					    "name": "格罗宁根",
					    "code": "GRQ",
					    "kw": "GroningenGroningen",
					    "city": "格洛宁根"
					},{
					    "name": "格鲁特岛",
					    "code": "GTE",
					    "kw": "Groote EylandtGroote Eylandt",
					    "city": "格鲁特"
					},{
					    "name": "赫鲁特方丹",
					    "code": "GFY",
					    "kw": "GrootfonteinGrootfontein",
					    "city": "格鲁特放方丹"
					},{
					    "name": "格罗塞托",
					    "code": "GRS",
					    "kw": "GrossetoGrosseto",
					    "city": "格罗塞托"
					},{
					    "name": "瓜卡马亚",
					    "code": "GCA",
					    "kw": "GuacamayaGuacamaya",
					    "city": "瓜卡马亚"
					},{
					    "name": "瓜达拉哈拉",
					    "code": "GDL",
					    "kw": "GuadalajaraGuadalajara",
					    "city": "挂达拉哈拉"
					},{
					    "name": "瓜雅拉米林",
					    "code": "GJM",
					    "kw": "Guajara-MirimGuajara-Mirim",
					    "city": "挂亚拉米林"
					},{
					    "name": "瓜累乖丘",
					    "code": "GHU",
					    "kw": "GualeguaychuGualeguaychu",
					    "city": "挂雷乖丘"
					},{
					    "name": "关岛",
					    "code": "GUM",
					    "kw": "GuamGuam Antonio B Won Pat International",
					    "city": "关岛"
					},{
					    "name": "瓜马尔",
					    "code": "GAA",
					    "kw": "GuamalGuamal",
					    "city": "挂马尔"
					},{
					    "name": "瓜纳哈",
					    "code": "GJA",
					    "kw": "GuanajaGuanaja",
					    "city": "挂纳哈"
					},{
					    "name": "瓜纳姆比",
					    "code": "GNM",
					    "kw": "GuanambiGuanambi",
					    "city": "挂纳姆比"
					},{
					    "name": "瓜纲累",
					    "code": "GUQ",
					    "kw": "GuanareGuanare",
					    "city": "挂纳累"
					},{
					    "name": "关塔那摩",
					    "code": "GAO",
					    "kw": "GuantanamoGuantanamo Los Canos Apt",
					    "city": "关塔纳莫"
					},{
					    "name": "瓜比",
					    "code": "GPI",
					    "kw": "GuapiGuapi",
					    "city": "瓜比"
					},{
					    "name": "瓜皮莱斯",
					    "code": "GPL",
					    "kw": "GuapilesGuapiles",
					    "city": "瓜皮莱斯"
					},{
					    "name": "瓜拉普阿瓦",
					    "code": "GPB",
					    "kw": "GuarapuavaGuarapuava",
					    "city": "瓜拉普阿凡"
					},{
					    "name": "瓜里",
					    "code": "GUG",
					    "kw": "GuariGuari",
					    "city": "瓜里"
					},{
					    "name": "瓜斯杜阿里多",
					    "code": "GDO",
					    "kw": "GuasdualitoGuasdualito",
					    "city": "瓜斯杜阿里多"
					},{
					    "name": "瓜索帕",
					    "code": "GAZ",
					    "kw": "GuasopaGuasopa",
					    "city": "瓜索帕"
					},{
					    "name": "瓜亚拉梅林",
					    "code": "GYA",
					    "kw": "GuayaramerinGuayaramerin",
					    "city": "瓜亚拉梅林"
					},{
					    "name": "瓜伊马斯",
					    "code": "GYM",
					    "kw": "GuaymasGuaymas",
					    "city": "瓜伊马斯"
					},{
					    "name": "格恩济",
					    "code": "GCI",
					    "kw": "GuernseyGuernsey",
					    "city": "格恩济"
					},{
					    "name": "吉格洛",
					    "code": "GGO",
					    "kw": "GuigloGuiglo",
					    "city": "吉格洛"
					},{
					    "name": "吉里亚",
					    "code": "GUI",
					    "kw": "GuiriaGuiria",
					    "city": "吉里亚"
					},{
					    "name": "格尔夫波特",
					    "code": "GPT",
					    "kw": "Gulfport/BiloxiGulfport/Biloxi",
					    "city": "格尔夫波特"
					},{
					    "name": "古卢",
					    "code": "ULU",
					    "kw": "GuluGulu",
					    "city": "古卢"
					},{
					    "name": "古纳",
					    "code": "GUX",
					    "kw": "GunaGuna",
					    "city": "古纳"
					},{
					    "name": "甘尼森",
					    "code": "GUC",
					    "kw": "GunnisonGunnison",
					    "city": "甘尼森"
					},{
					    "name": "古农西托利",
					    "code": "GNS",
					    "kw": "GunungsitoliGunungsitoli",
					    "city": "古农西托利"
					},{
					    "name": "古拉雅特",
					    "code": "URY",
					    "kw": "GurayatGurayat",
					    "city": "古拉雅特"
					},{
					    "name": "古鲁皮",
					    "code": "GRP",
					    "kw": "GurupiGurupi",
					    "city": "古鲁皮"
					},{
					    "name": "古瓦哈蒂",
					    "code": "GAU",
					    "kw": "GuwahatiGuwahati",
					    "city": "高哈蒂"
					},{
					    "name": "古亚",
					    "code": "GWA",
					    "kw": "GwaGwa",
					    "city": "古雅"
					},{
					    "name": "瓜德尔",
					    "code": "GWD",
					    "kw": "GwadarGwadar",
					    "city": "瓜德尔"
					},{
					    "name": "格瓦利奥尔",
					    "code": "GWL",
					    "kw": "GwaliorGwalior",
					    "city": "格瓦利奥尔"
					},{
					    "name": "光州务安",
					    "code": "MWX",
					    "kw": "GwangjuGwangju Muan Airport",
					    "city": "光州"
					},{
					    "name": "格韦鲁",
					    "code": "GWE",
					    "kw": "GweruGweru",
					    "city": "格韦鲁"
					},{
					    "name": "哈帕伊",
					    "code": "HPA",
					    "kw": "Ha'apaiHa'apai",
					    "city": "哈帕伊"
					},{
					    "name": "八丈岛",
					    "code": "HAC",
					    "kw": "Hachijo JimaHachijo Jima",
					    "city": "八丈岛"
					},{
					    "name": "哈法尔阿尔巴廷",
					    "code": "HBT",
					    "kw": "Hafr AlbatinHafr Albatin",
					    "city": "哈发尔阿尔把廷"
					},{
					    "name": "黑格斯敦",
					    "code": "HGR",
					    "kw": "HagerstownHagerstown",
					    "city": "黑格斯敦"
					},{
					    "name": "海法",
					    "code": "HFA",
					    "kw": "HaifaHaifa",
					    "city": "海法"
					},{
					    "name": "哈伊勒",
					    "code": "HAS",
					    "kw": "HailHail",
					    "city": "哈伊勒"
					},{
					    "name": "函馆",
					    "code": "HKD",
					    "kw": "HakodateHakodate",
					    "city": "函馆"
					},{
					    "name": "霍尔比奇",
					    "code": "YUX",
					    "kw": "Hall BeachHall Beach",
					    "city": "霍尔比奇"
					},{
					    "name": "哈尔姆斯塔德",
					    "code": "HAD",
					    "kw": "HalmstadHalmstad",
					    "city": "哈尔姆斯塔德"
					},{
					    "name": "哈马丹",
					    "code": "HDM",
					    "kw": "HamadanHamadan",
					    "city": "哈马丹"
					},{
					    "name": "哈马尔",
					    "code": "HMR",
					    "kw": "HamarHamar",
					    "city": "哈马尔"
					},{
					    "name": "汉堡",
					    "code": "HAM",
					    "kw": "HamburgHamburg Fuhlsbuettel Airport",
					    "city": "汗堡"
					},{
					    "name": "汉密尔顿",
					    "code": "HLT",
					    "kw": "HamiltonHamilton",
					    "city": "哈密尔顿1"
					},{
					    "name": "汉密尔顿",
					    "code": "HLZ",
					    "kw": "HamiltonHamilton",
					    "city": "哈密尔顿2"
					},{
					    "name": "哈默菲斯特",
					    "code": "HFT",
					    "kw": "HammerfestHammerfest",
					    "city": "哈默非斯特"
					},{
					    "name": "汉考克",
					    "code": "CMX",
					    "kw": "HancockHancock",
					    "city": "霍敦"
					},{
					    "name": "河内",
					    "code": "HAN",
					    "kw": "HanoiHanoi",
					    "city": "河内"
					},{
					    "name": "豪岛",
					    "code": "HOI",
					    "kw": "Hao IslandHao Island",
					    "city": "豪岛"
					},{
					    "name": "哈拉雷",
					    "code": "HRE",
					    "kw": "HarareHarare",
					    "city": "哈拉雷"
					},{
					    "name": "哈尔格萨",
					    "code": "HGA",
					    "kw": "HargeisaHargeisa",
					    "city": "哈尔格萨"
					},{
					    "name": "HARRISBURG QLMSTE",
					    "code": "MDT",
					    "kw": "HarrisburgHarrisburg International Apt",
					    "city": "哈利斯堡"
					},{
					    "name": "哈里斯堡",
					    "code": "HAR",
					    "kw": "HarrisburgHarrisburg Skyport Apt",
					    "city": "哈利斯堡"
					},{
					    "name": "哈里史密斯",
					    "code": "HRS",
					    "kw": "HarrismithHarrismith",
					    "city": "哈里史密斯"
					},{
					    "name": "哈里森",
					    "code": "HRO",
					    "kw": "HarrisonHarrison",
					    "city": "哈里森"
					},{
					    "name": "埃沃内斯",
					    "code": "EVE",
					    "kw": "Harstad-NarvikHarstad-Narvik",
					    "city": "埃沃内斯"
					},{
					    "name": "哈西迈萨乌德",
					    "code": "HME",
					    "kw": "Hassi MessaoudHassi Messaoud",
					    "city": "哈西迈萨乌德"
					},{
					    "name": "黑斯廷斯",
					    "code": "HSI",
					    "kw": "HastingsHastings",
					    "city": "黑斯廷斯1"
					},{
					    "name": "哈斯维克",
					    "code": "HAA",
					    "kw": "HasvikHasvik",
					    "city": "哈斯维克"
					},{
					    "name": "合艾",
					    "code": "HDY",
					    "kw": "Hat YaiHat Yai",
					    "city": "合艾"
					},{
					    "name": "波照间",
					    "code": "HTR",
					    "kw": "HaterumaHateruma",
					    "city": "波照间"
					},{
					    "name": "哈特勒斯",
					    "code": "HNC",
					    "kw": "HatterasHatteras",
					    "city": "哈特勒斯"
					},{
					    "name": "洽茨费尔特港",
					    "code": "HAZ",
					    "kw": "HatzfeldthavenHatzfeldthaven",
					    "city": "哈兹非尔特港"
					},{
					    "name": "海于格生德",
					    "code": "HAU",
					    "kw": "HaugesundHaugesund",
					    "city": "海于格生德"
					},{
					    "name": "哈瓦那",
					    "code": "HAV",
					    "kw": "HavanaHavana",
					    "city": "哈瓦那"
					},{
					    "name": "哈弗福德韦斯特",
					    "code": "HAW",
					    "kw": "HaverfordwestHaverfordwest",
					    "city": "哈弗德韦斯特"
					},{
					    "name": "阿夫雷",
					    "code": "HVR",
					    "kw": "HavreHavre",
					    "city": "阿夫雷"
					},{
					    "name": "哈瓦班戈",
					    "code": "HWA",
					    "kw": "HawabangoHawabango",
					    "city": "哈瓦班戈"
					},{
					    "name": "霍克尔",
					    "code": "HWK",
					    "kw": "HawkerHawker",
					    "city": "霍克尔"
					},{
					    "name": "赫里弗",
					    "code": "YHY",
					    "kw": "Hay RiverHay River",
					    "city": "赫里佛"
					},{
					    "name": "海菲尔德",
					    "code": "HYF",
					    "kw": "HayfieldsHayfields",
					    "city": "海非尔德"
					},{
					    "name": "黑兹尔顿",
					    "code": "HZL",
					    "kw": "HazletonHazleton",
					    "city": "墨兹利顿"
					},{
					    "name": "海霍",
					    "code": "HEH",
					    "kw": "HehoHeho",
					    "city": "海霍"
					},{
					    "name": "海德/布埃色姆",
					    "code": "HEI",
					    "kw": "Heide/BuesumHeide/Buesum",
					    "city": "海德不埃色姆"
					},{
					    "name": "赫勒纳",
					    "code": "HLN",
					    "kw": "HelenaHelena",
					    "city": "赫勒纳"
					},{
					    "name": "黑尔戈兰",
					    "code": "HGL",
					    "kw": "HelgolandHelgoland",
					    "city": "黑尔戈兰"
					},{
					    "name": "赫尔辛堡",
					    "code": "AGH",
					    "kw": "HelsingborgHelsingborg Angelholm Apt",
					    "city": "赫尔辛堡"
					},{
					    "name": "HELSINGBORG H P",
					    "code": "JHE",
					    "kw": "HelsingborgHelsingborg Heliport",
					    "city": "赫尔辛堡"
					},{
					    "name": "赫尔辛基",
					    "code": "HEL",
					    "kw": "HelsinkiHelsinki",
					    "city": "赫尔辛基"
					},{
					    "name": "赫拉特",
					    "code": "HEA",
					    "kw": "HeratHerat",
					    "city": "赫拉特"
					},{
					    "name": "赫林斯多夫",
					    "code": "HDF",
					    "kw": "HeringsdorfHeringsdorf",
					    "city": "赫林斯多夫"
					},{
					    "name": "埃莫西约",
					    "code": "HMO",
					    "kw": "HermosilloHermosillo",
					    "city": "埃莫西约"
					},{
					    "name": "奇瑟姆",
					    "code": "HIB",
					    "kw": "Hibbing/ChisholmHibbing/Chisholm",
					    "city": "奇瑟姆/西宾"
					},{
					    "name": "海莱夫尔",
					    "code": "YOJ",
					    "kw": "High LevelHigh Level",
					    "city": "海莱夫尔"
					},{
					    "name": "广岛",
					    "code": "HIJ",
					    "kw": "HiroshimaHiroshima International Apt",
					    "city": "广岛"
					},{
					    "name": "胡志明市",
					    "code": "SGN",
					    "kw": "Ho Chi Minh CityHo Chi Minh City",
					    "city": "胡志明"
					},{
					    "name": "霍巴特",
					    "code": "HBA",
					    "kw": "HobartHobart",
					    "city": "霍巴特"
					},{
					    "name": "荷台达",
					    "code": "HOD",
					    "kw": "HodeidahHodeidah",
					    "city": "荷台达"
					},{
					    "name": "霍夫",
					    "code": "HOQ",
					    "kw": "HofHof",
					    "city": "霍夫"
					},{
					    "name": "霍法夫",
					    "code": "HOF",
					    "kw": "HofufHofuf",
					    "city": "霍法夫"
					},{
					    "name": "候拉",
					    "code": "HOA",
					    "kw": "HolaHola",
					    "city": "侯拉"
					},{
					    "name": "奥尔金",
					    "code": "HOG",
					    "kw": "HolguinHolguin",
					    "city": "袄尔金"
					},{
					    "name": "霍尔曼岛",
					    "code": "YHI",
					    "kw": "IslandHolman Island",
					    "city": "霍尔曼岛"
					},{
					    "name": "候尔马维克",
					    "code": "HVK",
					    "kw": "HolmavikHolmavik",
					    "city": "侯尔马维克"
					},{
					    "name": "霍马林",
					    "code": "HOX",
					    "kw": "HomalinHomalin",
					    "city": "霍马林"
					},{
					    "name": "香港赤剌角",
					    "code": "HKG",
					    "kw": "Hong Kong International",
					    "city": "香港"
					},{
					    "name": "霍尼亚拉",
					    "code": "HIR",
					    "kw": "HoniaraHoniara",
					    "city": "霍尼亚拉"
					},{
					    "name": "霍宁斯沃格",
					    "code": "HVG",
					    "kw": "HonningsvagHonningsvag",
					    "city": "霍宁斯沃格"
					},{
					    "name": "胡克克里克",
					    "code": "HOK",
					    "kw": "Hooker CreekHooker Creek",
					    "city": "胡克克里克"
					},{
					    "name": "霍普敦",
					    "code": "HTU",
					    "kw": "HopetounHopetoun",
					    "city": "霍普敦"
					},{
					    "name": "霍夫恩",
					    "code": "HFN",
					    "kw": "HornafjordurHornafjordur",
					    "city": "霍夫恩"
					},{
					    "name": "奥尔塔",
					    "code": "HOR",
					    "kw": "HortaHorta",
					    "city": "奥尔塔"
					},{
					    "name": "霍斯金斯",
					    "code": "HKN",
					    "kw": "HoskinsHoskins",
					    "city": "霍斯金斯"
					},{
					    "name": "会晒",
					    "code": "HOE",
					    "kw": "HoueisayHoueisay",
					    "city": "会晒"
					},{
					    "name": "候恩",
					    "code": "HUQ",
					    "kw": "HounHoun",
					    "city": "侯恩"
					},{
					    "name": "霍耶岛",
					    "code": "HOY",
					    "kw": "HoyHoy",
					    "city": "霍耶岛"
					},{
					    "name": "华欣",
					    "code": "HHQ",
					    "kw": "Hua HinHua Hin",
					    "city": "华欣"
					},{
					    "name": "胡阿内岛",
					    "code": "HUH",
					    "kw": "HuahineHuahine",
					    "city": "胡阿内岛"
					},{
					    "name": "花莲",
					    "code": "HUN",
					    "kw": "HualienHualien",
					    "city": "花连"
					},{
					    "name": "胡布利",
					    "code": "HBX",
					    "kw": "HubliHubli",
					    "city": "胡布利"
					},{
					    "name": "胡迪克斯瓦尔",
					    "code": "HUV",
					    "kw": "HudiksvallHudiksvall",
					    "city": "胡迪克斯瓦尔"
					},{
					    "name": "胡尔茨弗雷德",
					    "code": "HLF",
					    "kw": "HultsfredHultsfred",
					    "city": "胡茨弗雷德"
					},{
					    "name": "亨伯赛德",
					    "code": "HUY",
					    "kw": "HumbersideHumberside",
					    "city": "亨伯赛德"
					},{
					    "name": "胡默拉",
					    "code": "HUE",
					    "kw": "HumeraHumera",
					    "city": "胡默拉"
					},{
					    "name": "亨廷顿",
					    "code": "HTS",
					    "kw": "HuntingtonHuntington",
					    "city": "阿什兰"
					},{
					    "name": "亨茨维尔",
					    "code": "HSV",
					    "kw": "HuntsvilleHuntsville Madison County Apt",
					    "city": "亨茨维尔"
					},{
					    "name": "胡尔加达",
					    "code": "HRG",
					    "kw": "HurghadaHurghada",
					    "city": "胡尔加达"
					},{
					    "name": "胡萨维克",
					    "code": "HZK",
					    "kw": "HusavikHusavik",
					    "city": "胡萨维克"
					},{
					    "name": "华姆斯唐吉",
					    "code": "HVM",
					    "kw": "HvammstangiHvammstangi",
					    "city": "华姆斯唐吉"
					},{
					    "name": "海恩尼斯",
					    "code": "HYA",
					    "kw": "HyannisHyannis",
					    "city": "海恩尼斯"
					},{
					    "name": "海得拉巴",
					    "code": "HYD",
					    "kw": "HyderabadHyderabad",
					    "city": "海德拉巴"
					},{
					    "name": "海德拉巴",
					    "code": "HDD",
					    "kw": "HyderabadHyderabad",
					    "city": "海德拉巴1"
					},{
					    "name": "爱达荷福尔斯",
					    "code": "IDA",
					    "kw": "Idaho FallsIdaho Falls",
					    "city": "爱达荷福尔斯"
					},{
					    "name": "因皮里尔",
					    "code": "IPL",
					    "kw": "ImperialImperial County Apt",
					    "city": "埃尔森特罗"
					},{
					    "name": "国际瀑布",
					    "code": "INL",
					    "kw": "International FallsInternational Falls",
					    "city": "国际瀑布"
					},{
					    "name": "怡皮阿尔斯",
					    "code": "IPI",
					    "kw": "IpialesIpiales",
					    "city": "恰皮亚莱斯"
					},{
					    "name": "怡保",
					    "code": "IPH",
					    "kw": "IpohIpoh",
					    "city": "恰堡"
					},{
					    "name": "怡波塔",
					    "code": "IPA",
					    "kw": "IpotaIpota",
					    "city": "恰波塔"
					},{
					    "name": "伊克律特",
					    "code": "YFB",
					    "kw": "IqaluitIqaluit",
					    "city": "弗罗比舍"
					},{
					    "name": "伊尔库茨克",
					    "code": "IKT",
					    "kw": "IrkutskIrkutsk",
					    "city": "伊尔库茨克"
					},{
					    "name": "穆赫勒斯岛",
					    "code": "ISJ",
					    "kw": "Isla MujeresIsla Mujeres",
					    "city": "穆赫勒斯岛"
					},{
					    "name": "伊斯兰堡",
					    "code": "ISB",
					    "kw": "IslamabadIslamabad",
					    "city": "伊斯兰堡"
					},{
					    "name": "艾莱",
					    "code": "ILY",
					    "kw": "IslayIslay",
					    "city": "艾菜"
					},{
					    "name": "曼岛",
					    "code": "IOM",
					    "kw": "Isle Of ManIsle Of Man",
					    "city": "曼岛"
					},{
					    "name": "出云",
					    "code": "IZO",
					    "kw": "IzumoIzumo",
					    "city": "出云"
					},{
					    "name": "贾巴尔普尔",
					    "code": "JLR",
					    "kw": "JabalpurJabalpur",
					    "city": "贾巴尔普尔"
					},{
					    "name": "贾比茹",
					    "code": "JAB",
					    "kw": "JabiruJabiru",
					    "city": "贾比姑"
					},{
					    "name": "贾巴特",
					    "code": "JAT",
					    "kw": "JabotJabot",
					    "city": "贾巴特"
					},{
					    "name": "杰克逊",
					    "code": "MJQ",
					    "kw": "JacksonJackson",
					    "city": "杰克逊4"
					},{
					    "name": "杰克逊",
					    "code": "MKL",
					    "kw": "JacksonJackson",
					    "city": "杰克逊"
					},{
					    "name": "杰克逊",
					    "code": "JAN",
					    "kw": "JacksonJackson Thompson Field",
					    "city": "杰克逊2"
					},{
					    "name": "杰克逊维尔",
					    "code": "IJX",
					    "kw": "JacksonvilleJacksonville",
					    "city": "杰克维尔1"
					},{
					    "name": "杰克逊维尔",
					    "code": "OAJ",
					    "kw": "JacksonvilleJacksonville",
					    "city": "杰克维尔"
					},{
					    "name": "杰基诺特湾",
					    "code": "JAQ",
					    "kw": "Jacquinot BayJacquinot Bay",
					    "city": "杰基诺特湾"
					},{
					    "name": "贾夫纳",
					    "code": "JAF",
					    "kw": "JaffnaJaffna",
					    "city": "贾夫纳"
					},{
					    "name": "杰格德尔布尔",
					    "code": "JGB",
					    "kw": "JagdalpurJagdalpur",
					    "city": "杰格德尔布尔"
					},{
					    "name": "杰伊瑟尔梅尔",
					    "code": "JSA",
					    "kw": "JaisalmerJaisalmer",
					    "city": "杰伊瑟尔梅尔"
					},{
					    "name": "JAKARTA HALIM",
					    "code": "HLP",
					    "kw": "JakartaJakarta Halim Perdana Kusuma Apt",
					    "city": "雅加达"
					},{
					    "name": "苏加诺-哈达",
					    "code": "CGK",
					    "kw": "JakartaJakarta Soekarno-Hatta Apt",
					    "city": "雅加达"
					},{
					    "name": "贾拉拉巴德",
					    "code": "JAA",
					    "kw": "JalalabadJalalabad",
					    "city": "贾拉拉巴德"
					},{
					    "name": "贾路易特岛",
					    "code": "UIT",
					    "kw": "Jaluit IslandJaluit Island",
					    "city": "贾路易特岛"
					},{
					    "name": "贾姆巴",
					    "code": "JMB",
					    "kw": "JambaJamba",
					    "city": "贾姆巴"
					},{
					    "name": "查漠",
					    "code": "IXJ",
					    "kw": "JammuJammu",
					    "city": "查慕"
					},{
					    "name": "贾姆纳加尔",
					    "code": "JGA",
					    "kw": "JamnagarJamnagar",
					    "city": "贾姆纳加尔"
					},{
					    "name": "贾姆谢普尔",
					    "code": "IXW",
					    "kw": "JamshedpurJamshedpur",
					    "city": "贾姆谢普尔"
					},{
					    "name": "贾纳克普尔",
					    "code": "JKR",
					    "kw": "JanakpurJanakpur",
					    "city": "贾纳克普尔"
					},{
					    "name": "简斯维尔",
					    "code": "JVL",
					    "kw": "JanesvilleJanesville",
					    "city": "简斯维尔"
					},{
					    "name": "哈克",
					    "code": "JQE",
					    "kw": "JaqueJaque",
					    "city": "哈克"
					},{
					    "name": "查亚普拉",
					    "code": "DJJ",
					    "kw": "JayapuraJayapura",
					    "city": "查亚普拉"
					},{
					    "name": "杰斐逊",
					    "code": "JEF",
					    "kw": "Jefferson CityJefferson City",
					    "city": "杰斐逊"
					},{
					    "name": "热斯耶",
					    "code": "JEQ",
					    "kw": "JequieJequie",
					    "city": "热基耶"
					},{
					    "name": "热雷米",
					    "code": "JEE",
					    "kw": "JeremieJeremie",
					    "city": "热雷米"
					},{
					    "name": "赫雷斯-德拉弗龙特拉",
					    "code": "XRY",
					    "kw": "Jerez de la FronteraJerez de la Frontera",
					    "city": "赫雷斯德拉拂龙"
					},{
					    "name": "杰索尔",
					    "code": "JSR",
					    "kw": "JessoreJessore",
					    "city": "杰索尔"
					},{
					    "name": "杰伊布尔",
					    "code": "PYB",
					    "kw": "JeyporeJeypore",
					    "city": "杰伊布尔"
					},{
					    "name": "吉-巴拉那",
					    "code": "JPR",
					    "kw": "Ji-ParanaJi-Parana",
					    "city": "吉巴拉纳"
					},{
					    "name": "吉杰勒",
					    "code": "GJL",
					    "kw": "JijelJijel",
					    "city": "吉杰勒"
					},{
					    "name": "季马",
					    "code": "JIM",
					    "kw": "JimmaJimma",
					    "city": "季马"
					},{
					    "name": "巴科",
					    "code": "BCO",
					    "kw": "JinkaJinka",
					    "city": "巴科"
					},{
					    "name": "吉沃尼",
					    "code": "JIW",
					    "kw": "JiwaniJiwani",
					    "city": "吉沃尼"
					},{
					    "name": "若阿萨巴",
					    "code": "JCB",
					    "kw": "JoacabaJoacaba",
					    "city": "若阿萨巴"
					},{
					    "name": "焦特布尔",
					    "code": "JDH",
					    "kw": "JodhpurJodhpur",
					    "city": "焦特布尔"
					},{
					    "name": "柔佛巴鲁",
					    "code": "JHB",
					    "kw": "Johor BahruJohor Bahru",
					    "city": "柔佛巴鲁"
					},{
					    "name": "儒万维尔",
					    "code": "JOI",
					    "kw": "JoinvilleJoinville",
					    "city": "若因维尔"
					},{
					    "name": "霍洛",
					    "code": "JOL",
					    "kw": "JoloJolo",
					    "city": "霍洛"
					},{
					    "name": "乔姆松",
					    "code": "JMO",
					    "kw": "JomsomJomsom",
					    "city": "乔姆松"
					},{
					    "name": "琼斯伯勒",
					    "code": "JBR",
					    "kw": "JonesboroJonesboro",
					    "city": "琼斯伯勒"
					},{
					    "name": "荣彻平",
					    "code": "JKG",
					    "kw": "JonkopingJonkoping",
					    "city": "荣砌平"
					},{
					    "name": "乔普林",
					    "code": "JLN",
					    "kw": "JoplinJoplin",
					    "city": "乔普林"
					},{
					    "name": "乔哈特",
					    "code": "JRH",
					    "kw": "JorhatJorhat",
					    "city": "乔哈特"
					},{
					    "name": "乔斯",
					    "code": "JOS",
					    "kw": "JosJos",
					    "city": "乔斯"
					},{
					    "name": "何塞-德圣马丁",
					    "code": "JSM",
					    "kw": "Jose de San MartinJose de San Martin",
					    "city": "何塞德圣马丁"
					},{
					    "name": "胡安惠",
					    "code": "JJI",
					    "kw": "JuanjuiJuanjui",
					    "city": "胡安惠"
					},{
					    "name": "儒伊斯特",
					    "code": "JUI",
					    "kw": "JuistJuist",
					    "city": "儒伊斯特"
					},{
					    "name": "茹伊斯-迪福拉",
					    "code": "JDF",
					    "kw": "Juiz De ForaJuiz De Fora",
					    "city": "如伊斯"
					},{
					    "name": "胡胡伊",
					    "code": "JUJ",
					    "kw": "JujuyJujuy",
					    "city": "胡胡伊"
					},{
					    "name": "胡利亚卡",
					    "code": "JUL",
					    "kw": "JuliacaJuliaca",
					    "city": "胡利亚卡"
					},{
					    "name": "久姆拉",
					    "code": "JUM",
					    "kw": "JumlaJumla",
					    "city": "久姆拉"
					},{
					    "name": "胡宁",
					    "code": "JNI",
					    "kw": "JuninJunin",
					    "city": "胡宁"
					},{
					    "name": "胡拉多",
					    "code": "JUO",
					    "kw": "JuradoJurado",
					    "city": "胡拉多"
					},{
						"name": "盐湖城",
						"code": "SLC",
						"kw": "Salt Lake City",
						"city": "盐湖城"
					},{
					    "name": "肯尼迪",
					    "code": "JFK",
					    "kw": "Nyc J.F.K Int'L Airport",
					    "city": "纽约"
					},{
					    "name": "卡巴拉",
					    "code": "KBA",
					    "kw": "KabalaKabala",
					    "city": "卡巴拉"
					},{
					    "name": "卡卜里达尔",
					    "code": "ABK",
					    "kw": "Kabri DarKabri Dar",
					    "city": "卡卜里大尔"
					},{
					    "name": "喀布尔",
					    "code": "KBL",
					    "kw": "KabulKabul",
					    "city": "咯布尔"
					},{
					    "name": "卡布武姆",
					    "code": "KBM",
					    "kw": "KabwumKabwum",
					    "city": "卡布武姆"
					},{
					    "name": "卡杜纳",
					    "code": "KAD",
					    "kw": "KadunaKaduna",
					    "city": "卡杜纳"
					},{
					    "name": "卡埃迪",
					    "code": "KED",
					    "kw": "KaediKaedi",
					    "city": "卡埃迪"
					},{
					    "name": "卡埃尔",
					    "code": "KLE",
					    "kw": "KaeleKaele",
					    "city": "卡埃尔"
					},{
					    "name": "角耳",
					    "code": "KGW",
					    "kw": "KagiKagi",
					    "city": "角尔"
					},{
					    "name": "鹿尔岛",
					    "code": "KOJ",
					    "kw": "KagoshimaKagoshima",
					    "city": "鹿尔岛"
					},{
					    "name": "卡瓜",
					    "code": "AGK",
					    "kw": "KaguaKagua",
					    "city": "卡瓜"
					},{
					    "name": "凯厄图尔",
					    "code": "KAI",
					    "kw": "KaieteurKaieteur",
					    "city": "凯厄图尔"
					},{
					    "name": "凯库赫",
					    "code": "KKO",
					    "kw": "KaikoheKaikohe",
					    "city": "凯库赫"
					},{
					    "name": "凯拉沙哈尔",
					    "code": "IXH",
					    "kw": "KailashaharKailashahar",
					    "city": "凯拉沙哈尔"
					},{
					    "name": "凯马纳",
					    "code": "KNG",
					    "kw": "KaimanaKaimana",
					    "city": "凯马纳"
					},{
					    "name": "凯因蒂巴",
					    "code": "KZF",
					    "kw": "KaintibaKaintiba",
					    "city": "凯因蒂巴"
					},{
					    "name": "凯塔依亚",
					    "code": "KAT",
					    "kw": "KaitaiaKaitaia",
					    "city": "凯他依亚"
					},{
					    "name": "卡亚尼",
					    "code": "KAJ",
					    "kw": "KajaaniKajaani",
					    "city": "卡亚尼"
					},{
					    "name": "卡拉博",
					    "code": "KLB",
					    "kw": "KalaboKalabo",
					    "city": "卡拉博"
					},{
					    "name": "卡拉马塔",
					    "code": "KLX",
					    "kw": "KalamataKalamata",
					    "city": "卡拉马塔"
					},{
					    "name": "卡莱米",
					    "code": "FMI",
					    "kw": "KalemieKalemie",
					    "city": "卡来米"
					},{
					    "name": "吉灵庙",
					    "code": "KMV",
					    "kw": "KalemyoKalemyo",
					    "city": "吉灵庙"
					},{
					    "name": "卡利博",
					    "code": "KLO",
					    "kw": "KaliboKalibo",
					    "city": "卡利博"
					},{
					    "name": "卡利马",
					    "code": "KLY",
					    "kw": "KalimaKalima",
					    "city": "卡利马"
					},{
					    "name": "加里宁格勒",
					    "code": "KGD",
					    "kw": "KaliningradKaliningrad",
					    "city": "卡洛克尔"
					},{
					    "name": "卡利斯佩尔",
					    "code": "FCA",
					    "kw": "KalispellKalispell",
					    "city": "卡尔波沃"
					},{
					    "name": "卡尔库龙",
					    "code": "KFG",
					    "kw": "KalkurungKalkurung",
					    "city": "卡尔斯卡咯"
					},{
					    "name": "卡尔塔格",
					    "code": "KAL",
					    "kw": "KaltagKaltag",
					    "city": "卡尔塔格"
					},{
					    "name": "卡伦布鲁",
					    "code": "UBU",
					    "kw": "KalumburuKalumburu",
					    "city": "卡伦布鲁"
					},{
					    "name": "坎巴亚",
					    "code": "KBX",
					    "kw": "KambuayaKambuaya",
					    "city": "坎巴亚"
					},{
					    "name": "卡米什利",
					    "code": "KAC",
					    "kw": "KameshliKameshli",
					    "city": "卡米什利"
					},{
					    "name": "卡米勒罗依",
					    "code": "KML",
					    "kw": "KamileroiKamileroi",
					    "city": "卡米勒洛依"
					},{
					    "name": "卡米纳",
					    "code": "KMN",
					    "kw": "KaminaKamina",
					    "city": "卡米纳"
					},{
					    "name": "坎卢普斯",
					    "code": "YKA",
					    "kw": "KamloopsKamloops",
					    "city": "坎卢普斯"
					},{
					    "name": "坎帕拉",
					    "code": "KLA",
					    "kw": "Kampala Off-Line PtKampala Off-Line Pt",
					    "city": "砍帕拉"
					},{
					    "name": "卡姆也拉",
					    "code": "MUE",
					    "kw": "KamuelaKamuela",
					    "city": "卡姆也拉"
					},{
					    "name": "金进",
					    "code": "KNE",
					    "kw": "KanainjKanainj",
					    "city": "金井"
					},{
					    "name": "卡南加",
					    "code": "KGA",
					    "kw": "KanangaKananga",
					    "city": "卡南加"
					},{
					    "name": "坎达武",
					    "code": "KDV",
					    "kw": "KandavuKandavu",
					    "city": "坎达武"
					},{
					    "name": "坎德拉",
					    "code": "IXY",
					    "kw": "KandlaKandla",
					    "city": "坎德拉"
					},{
					    "name": "坎德利安",
					    "code": "KDR",
					    "kw": "KandrianKandrian",
					    "city": "坎德利安"
					},{
					    "name": "南斯特伦菲尤尔",
					    "code": "SFJ",
					    "kw": "KangerlussuaqKangerlussuaq",
					    "city": "南斯特伦菲尤尔"
					},{
					    "name": "坎吉克苏茹",
					    "code": "YWB",
					    "kw": "KangiqsujuaqKangiqsujuaq",
					    "city": "坎吉克苏茹"
					},{
					    "name": "坎吉尔苏克",
					    "code": "YKG",
					    "kw": "KangirsukKangirsuk",
					    "city": "坎吉尔苏克"
					},{
					    "name": "江陵",
					    "code": "KAG",
					    "kw": "KangnungKangnung",
					    "city": "江陵"
					},{
					    "name": "卡尼亚马",
					    "code": "KNM",
					    "kw": "KaniamaKaniama",
					    "city": "卡尼亚马"
					},{
					    "name": "坎坎",
					    "code": "KNN",
					    "kw": "KankanKankan",
					    "city": "坎坎"
					},{
					    "name": "高雄",
					    "code": "KHH",
					    "kw": "KaohsiungKaohsiung",
					    "city": "高雄"
					},{
					    "name": "考拉克",
					    "code": "KLC",
					    "kw": "KaolackKaolack",
					    "city": "考拉克"
					},{
					    "name": "卡奥马",
					    "code": "KMZ",
					    "kw": "KaomaKaoma",
					    "city": "卡奥马"
					},{
					    "name": "加帛",
					    "code": "KPI",
					    "kw": "KapitKapit",
					    "city": "加昂"
					},{
					    "name": "卡尔卡尔",
					    "code": "KRX",
					    "kw": "Kar KarKar Kar",
					    "city": "卡尔卡尔"
					},{
					    "name": "卡拉奇",
					    "code": "KHI",
					    "kw": "KarachiKarachi",
					    "city": "卡拉奇"
					},{
					    "name": "卡拉干达",
					    "code": "KGF",
					    "kw": "KaragandaKaraganda",
					    "city": "卡拉干达"
					},{
					    "name": "卡拉萨拜",
					    "code": "KRG",
					    "kw": "KarasabaiKarasabai",
					    "city": "卡拉萨拜"
					},{
					    "name": "卡拉瓦里",
					    "code": "KRJ",
					    "kw": "KarawariKarawari",
					    "city": "卡拉瓦利"
					},{
					    "name": "卡里巴",
					    "code": "KAB",
					    "kw": "KaribaKariba",
					    "city": "卡里巴"
					},{
					    "name": "卡里穆伊",
					    "code": "KMR",
					    "kw": "KarimuiKarimui",
					    "city": "卡利穆依"
					},{
					    "name": "卡罗维发利",
					    "code": "KLV",
					    "kw": "Karlovy VaryKarlovy Vary",
					    "city": "卡洛维发利"
					},{
					    "name": "卡尔斯库加",
					    "code": "KSK",
					    "kw": "KarlskogaKarlskoga",
					    "city": "卡尔斯库加"
					},{
					    "name": "卡尔斯塔德",
					    "code": "KSD",
					    "kw": "KarlstadKarlstad",
					    "city": "卡尔斯塔德"
					},{
					    "name": "卡龙加",
					    "code": "KGJ",
					    "kw": "KarongaKaronga",
					    "city": "卡龙加"
					},{
					    "name": "卡尔帕索斯",
					    "code": "AOK",
					    "kw": "KarpathosKarpathos",
					    "city": "卡尔帕索斯"
					},{
					    "name": "卡尔希",
					    "code": "KSQ",
					    "kw": "KarshiKarshi",
					    "city": "卡尔西"
					},{
					    "name": "卡鲁巴加",
					    "code": "KBF",
					    "kw": "KarubagaKarubaga",
					    "city": "卡卢巴加"
					},{
					    "name": "卡鲁普",
					    "code": "KRP",
					    "kw": "KarupKarup",
					    "city": "卡卢普"
					},{
					    "name": "卡萨巴湾",
					    "code": "ZKB",
					    "kw": "Kasaba BayKasaba Bay",
					    "city": "卡萨巴湾"
					},{
					    "name": "卡萨马",
					    "code": "KAA",
					    "kw": "KasamaKasama",
					    "city": "卡萨马"
					},{
					    "name": "卡萨内",
					    "code": "BBK",
					    "kw": "KasaneKasane",
					    "city": "卡萨内"
					},{
					    "name": "卡塞塞",
					    "code": "KSE",
					    "kw": "KaseseKasese",
					    "city": "卡塞塞"
					},{
					    "name": "卡松戈",
					    "code": "KGN",
					    "kw": "Kasongo LundaKasongo Lunda",
					    "city": "卡松戈"
					},{
					    "name": "卡索斯岛",
					    "code": "KSJ",
					    "kw": "Kasos IslandKasos Island",
					    "city": "卡索斯岛"
					},{
					    "name": "卡萨拉",
					    "code": "KSL",
					    "kw": "KassalaKassala",
					    "city": "卡萨拉"
					},{
					    "name": "卡斯特洛里佐",
					    "code": "KZS",
					    "kw": "KastelorizoKastelorizo",
					    "city": "卡斯特洛里佐"
					},{
					    "name": "卡斯托里亚",
					    "code": "KSO",
					    "kw": "KastoriaKastoria",
					    "city": "卡斯托里亚"
					},{
					    "name": "凯瑟琳",
					    "code": "KTR",
					    "kw": "KatherineKatherine",
					    "city": "凯瑟林"
					},{
					    "name": "加德满都",
					    "code": "KTM",
					    "kw": "KathmanduKathmandu",
					    "city": "加德满都"
					},{
					    "name": "卡托维兹",
					    "code": "KTW",
					    "kw": "KatowiceKatowice",
					    "city": "卡托维茨"
					},{
					    "name": "卡乌",
					    "code": "KAZ",
					    "kw": "KauKau",
					    "city": "卡乌"
					},{
					    "name": "考哈瓦",
					    "code": "KAU",
					    "kw": "KauhavaKauhava",
					    "city": "考哈瓦"
					},{
					    "name": "考库拉环礁",
					    "code": "KKR",
					    "kw": "Kaukura AtollKaukura Atoll",
					    "city": "考库拉环礁"
					},{
					    "name": "考纳斯",
					    "code": "KUN",
					    "kw": "KaunasKaunas",
					    "city": "考纳斯"
					},{
					    "name": "卡瓦拉",
					    "code": "KVA",
					    "kw": "KavalaKavala",
					    "city": "卡瓦拉"
					},{
					    "name": "卡维恩",
					    "code": "KVG",
					    "kw": "KaviengKavieng",
					    "city": "卡维恩"
					},{
					    "name": "高当",
					    "code": "KAW",
					    "kw": "KawthaungKawthaung",
					    "city": "高当"
					},{
					    "name": "凯斯",
					    "code": "KYS",
					    "kw": "KayesKayes",
					    "city": "凯斯"
					},{
					    "name": "开塞利",
					    "code": "ASR",
					    "kw": "KayseriKayseri",
					    "city": "开塞利"
					},{
					    "name": "喀山",
					    "code": "KZN",
					    "kw": "KazanKazan",
					    "city": "咯山"
					},{
					    "name": "卡尼",
					    "code": "EAR",
					    "kw": "KearneyKearney",
					    "city": "卡尼"
					},{
					    "name": "克巴尔",
					    "code": "KEQ",
					    "kw": "KebarKebar",
					    "city": "克巴尔"
					},{
					    "name": "克杜古",
					    "code": "KGG",
					    "kw": "KedougouKedougou",
					    "city": "克杜古"
					},{
					    "name": "基特曼斯胡普",
					    "code": "KMP",
					    "kw": "KeetmanshoopKeetmanshoop",
					    "city": "基特曼斯胡普"
					},{
					    "name": "凯法利尼亚",
					    "code": "EFL",
					    "kw": "KefalliniaKefallinia",
					    "city": "开发利尼亚"
					},{
					    "name": "凯萨",
					    "code": "KEA",
					    "kw": "KeisahKeisah",
					    "city": "凯萨"
					},{
					    "name": "克拉福",
					    "code": "LFO",
					    "kw": "KelafoKelafo",
					    "city": "卡拉福"
					},{
					    "name": "凯莱",
					    "code": "KEE",
					    "kw": "KelleKelle",
					    "city": "凯来"
					},{
					    "name": "克麦罗沃",
					    "code": "KEJ",
					    "kw": "KemerovoKemerovo",
					    "city": "克麦罗沃"
					},{
					    "name": "克米",
					    "code": "KEM",
					    "kw": "Kemi/TornioKemi/Tornio",
					    "city": "克米"
					},{
					    "name": "肯达里",
					    "code": "KDI",
					    "kw": "KendariKendari",
					    "city": "肯达利"
					},{
					    "name": "景栋",
					    "code": "KET",
					    "kw": "KengtungKengtung",
					    "city": "景栋"
					},{
					    "name": "凯涅巴",
					    "code": "KNZ",
					    "kw": "KeniebaKenieba",
					    "city": "凯捏巴"
					},{
					    "name": "建宁欧",
					    "code": "KGU",
					    "kw": "KeningauKeningau",
					    "city": "建宁欧"
					},{
					    "name": "克皮",
					    "code": "KEI",
					    "kw": "KepiKepi",
					    "city": "克皮"
					},{
					    "name": "凯劳",
					    "code": "KRU",
					    "kw": "KerauKerau",
					    "city": "凯劳"
					},{
					    "name": "凯里曼",
					    "code": "KMA",
					    "kw": "KeremaKerema",
					    "city": "凯利马"
					},{
					    "name": "凯里凯里",
					    "code": "KKE",
					    "kw": "KerikeriKerikeri",
					    "city": "凯里凯里"
					},{
					    "name": "科孚",
					    "code": "CFU",
					    "kw": "KerkyraKerkyra",
					    "city": "科孚"
					},{
					    "name": "克尔曼",
					    "code": "KER",
					    "kw": "KermanKerman",
					    "city": "克尔曼"
					},{
					    "name": "凯里郡",
					    "code": "KIR",
					    "kw": "Kerry CountyKerry County",
					    "city": "凯里郡"
					},{
					    "name": "居茶",
					    "code": "KTE",
					    "kw": "KertehKerteh",
					    "city": "居茶"
					},{
					    "name": "克肖德",
					    "code": "IXK",
					    "kw": "KeshodKeshod",
					    "city": "克肖德"
					},{
					    "name": "吉打邦",
					    "code": "KTG",
					    "kw": "KetapangKetapang",
					    "city": "击打邦"
					},{
					    "name": "基莱克",
					    "code": "YKJ",
					    "kw": "Key LakeKey Lake",
					    "city": "基来克"
					},{
					    "name": "哈巴罗夫斯克",
					    "code": "KHV",
					    "kw": "KhabarovskKhabarovsk",
					    "city": "哈巴罗夫斯克"
					},{
					    "name": "克久拉霍",
					    "code": "HJR",
					    "kw": "KhajurahoKhajuraho",
					    "city": "克久拉霍"
					},{
					    "name": "海米斯穆斯哈",
					    "code": "KMX",
					    "kw": "Khamis MushaitKhamis Mushait",
					    "city": "海米斯"
					},{
					    "name": "卡克岛",
					    "code": "KHK",
					    "kw": "Khark IslandKhark Island",
					    "city": "卡克岛"
					},{
					    "name": "哈尔科夫",
					    "code": "HRK",
					    "kw": "KharkovKharkov",
					    "city": "哈尔克夫"
					},{
					    "name": "喀土穆",
					    "code": "KRT",
					    "kw": "KhartoumKhartoum",
					    "city": "咯土穆"
					},{
					    "name": "海塞卜",
					    "code": "KHS",
					    "kw": "KhasabKhasab",
					    "city": "海塞卜"
					},{
					    "name": "哈什姆吉尔巴",
					    "code": "GBU",
					    "kw": "Khashm el GirbaKhashm el Girba",
					    "city": "哈什姆吉尔巴"
					},{
					    "name": "赫尔松",
					    "code": "KHE",
					    "kw": "KhersonKherson",
					    "city": "赫尔松"
					},{
					    "name": "孔敬",
					    "code": "KKC",
					    "kw": "Khon KaenKhon Kaen",
					    "city": "孔敬"
					},{
					    "name": "霍斯特",
					    "code": "KHT",
					    "kw": "KhostKhost",
					    "city": "霍斯特"
					},{
					    "name": "胡兹达尔",
					    "code": "KDD",
					    "kw": "KhuzdarKhuzdar",
					    "city": "胡兹打尔"
					},{
					    "name": "哈汉",
					    "code": "KWH",
					    "kw": "KhwahanKhwahan",
					    "city": "哈汉"
					},{
					    "name": "基尔",
					    "code": "KEL",
					    "kw": "KielKiel",
					    "city": "基尔"
					},{
					    "name": "基埃塔",
					    "code": "KIE",
					    "kw": "KietaKieta",
					    "city": "基埃塔"
					},{
					    "name": "KIEV BORISPOL APT",
					    "code": "KBP",
					    "kw": "KievKiev Borispol Apt",
					    "city": "基辅"
					},{
					    "name": "基辅",
					    "code": "IEV",
					    "kw": "KievKiev Zhulyany Apt",
					    "city": "基辅"
					},{
					    "name": "基法",
					    "code": "KFA",
					    "kw": "KiffaKiffa",
					    "city": "基发"
					},{
					    "name": "基加利",
					    "code": "KGL",
					    "kw": "KigaliKigali",
					    "city": "基加利"
					},{
					    "name": "基戈马",
					    "code": "TKQ",
					    "kw": "KigomaKigoma",
					    "city": "基戈马"
					},{
					    "name": "基科里",
					    "code": "KRI",
					    "kw": "KikoriKikori",
					    "city": "基科里"
					},{
					    "name": "基克韦特",
					    "code": "KKW",
					    "kw": "KikwitKikwit",
					    "city": "基克韦特"
					},{
					    "name": "基利岛",
					    "code": "KIO",
					    "kw": "Kili IslandKili Island",
					    "city": "基利岛"
					},{
					    "name": "乞力马扎罗",
					    "code": "JRO",
					    "kw": "KilimanjaroKilimanjaro",
					    "city": "起利马扎罗"
					},{
					    "name": "基尔瓦",
					    "code": "KIY",
					    "kw": "KilwaKilwa",
					    "city": "基尔瓦"
					},{
					    "name": "基曼",
					    "code": "KMM",
					    "kw": "KimamKimam",
					    "city": "基曼"
					},{
					    "name": "金伯利",
					    "code": "KIM",
					    "kw": "KimberleyKimberley",
					    "city": "金伯利"
					},{
					    "name": "莱克港",
					    "code": "YLC",
					    "kw": "Kimmirut/Lake HarbourKimmirut/Lake Harbour",
					    "city": "来德港"
					},{
					    "name": "金丹巴",
					    "code": "KNJ",
					    "kw": "KindambaKindamba",
					    "city": "金丹巴"
					},{
					    "name": "金杜",
					    "code": "KND",
					    "kw": "KinduKindu",
					    "city": "金杜"
					},{
					    "name": "金曼",
					    "code": "IGM",
					    "kw": "KingmanKingman",
					    "city": "金曼"
					},{
					    "name": "金斯科特",
					    "code": "KGC",
					    "kw": "KingscoteKingscote",
					    "city": "金斯科特"
					},{
					    "name": "金萨沙",
					    "code": "FIH",
					    "kw": "KinshasaKinshasa N'Djili Apt",
					    "city": "金沙萨"
					},{
					    "name": "金斯顿",
					    "code": "ISO",
					    "kw": "KinstonKinston",
					    "city": "金斯顿1"
					},{
					    "name": "基普努克",
					    "code": "KPN",
					    "kw": "KipnukKipnuk",
					    "city": "基普怒克"
					},{
					    "name": "基拉",
					    "code": "KIQ",
					    "kw": "KiraKira",
					    "city": "基拉"
					},{
					    "name": "基拉基拉",
					    "code": "IRA",
					    "kw": "KirakiraKirakira",
					    "city": "基拉基拉"
					},{
					    "name": "柯克斯维尔",
					    "code": "IRK",
					    "kw": "KirksvilleKirksville",
					    "city": "柯克斯韦尔"
					},{
					    "name": "柯克沃尔",
					    "code": "KOI",
					    "kw": "KirkwallKirkwall",
					    "city": "柯克沃尔"
					},{
					    "name": "基律纳",
					    "code": "KRN",
					    "kw": "KirunaKiruna",
					    "city": "基律纳"
					},{
					    "name": "基龙多",
					    "code": "KRE",
					    "kw": "KirundoKirundo",
					    "city": "基龙多"
					},{
					    "name": "基桑加尼",
					    "code": "FKI",
					    "kw": "KisanganiKisangani",
					    "city": "基桑加尼"
					},{
					    "name": "基什岛",
					    "code": "KIH",
					    "kw": "Kish IslandKish Island",
					    "city": "基什岛"
					},{
					    "name": "基斯马尤",
					    "code": "KMU",
					    "kw": "KismayuKismayu",
					    "city": "基斯马尤"
					},{
					    "name": "基西杜古",
					    "code": "KSI",
					    "kw": "KissidougouKissidougou",
					    "city": "基西杜古"
					},{
					    "name": "基苏木",
					    "code": "KIS",
					    "kw": "KisumuKisumu",
					    "city": "基苏木"
					},{
					    "name": "北九州",
					    "code": "KKJ",
					    "kw": "Kita KyushuKita Kyushu",
					    "city": "北九洲"
					},{
					    "name": "北大东岛",
					    "code": "KTD",
					    "kw": "KitadaitoKitadaito",
					    "city": "北大东岛"
					},{
					    "name": "斯塔莱",
					    "code": "KTL",
					    "kw": "KitaleKitale",
					    "city": "基塔来"
					},{
					    "name": "基西拉",
					    "code": "KIT",
					    "kw": "KithiraKithira",
					    "city": "基西拉"
					},{
					    "name": "基蒂拉",
					    "code": "KTT",
					    "kw": "KittilaKittila",
					    "city": "基蒂拉"
					},{
					    "name": "基特韦",
					    "code": "KIW",
					    "kw": "KitweKitwe",
					    "city": "基特韦"
					},{
					    "name": "基温加",
					    "code": "KIU",
					    "kw": "KiungaKiunga",
					    "city": "基温加"
					},{
					    "name": "基永加",
					    "code": "UNG",
					    "kw": "KiungaKiunga",
					    "city": "基永加"
					},{
					    "name": "克拉根福",
					    "code": "KLU",
					    "kw": "KlagenfurtKlagenfurt",
					    "city": "克拉根福"
					},{
					    "name": "克拉马斯福尔斯",
					    "code": "LMT",
					    "kw": "Klamath FallsKlamath Falls",
					    "city": "克拉马斯福尔斯"
					},{
					    "name": "克莱因齐",
					    "code": "KLZ",
					    "kw": "KleinzeeKleinzee",
					    "city": "克来因齐"
					},{
					    "name": "克莱克斯多普",
					    "code": "KXE",
					    "kw": "KlerksdorpKlerksdorp",
					    "city": "克来克斯多普"
					},{
					    "name": "尼湖",
					    "code": "YKE",
					    "kw": "Knee LakeKnee Lake",
					    "city": "尼湖"
					},{
					    "name": "康诺特",
					    "code": "NOC",
					    "kw": "KnockKnock",
					    "city": "康诺特"
					},{
					    "name": "诺克斯维尔",
					    "code": "TYS",
					    "kw": "KnoxvilleKnoxville",
					    "city": "诺克斯维尔"
					},{
					    "name": "高知",
					    "code": "KCZ",
					    "kw": "KochiKochi",
					    "city": "高知"
					},{
					    "name": "科哈特",
					    "code": "OHT",
					    "kw": "KohatKohat",
					    "city": "科哈特"
					},{
					    "name": "科科拉",
					    "code": "KOK",
					    "kw": "Kokkola/PietarsaariKokkola/Pietarsaari",
					    "city": "科科拉"
					},{
					    "name": "科科达",
					    "code": "KKD",
					    "kw": "KokodaKokoda",
					    "city": "科科达"
					},{
					    "name": "科科莫",
					    "code": "OKK",
					    "kw": "KokomoKokomo",
					    "city": "科科莫"
					},{
					    "name": "科科罗",
					    "code": "KOR",
					    "kw": "KokoroKokoro",
					    "city": "科科罗"
					},{
					    "name": "科克切塔夫",
					    "code": "KOV",
					    "kw": "KokshetauKokshetau",
					    "city": "科克砌塔夫"
					},{
					    "name": "贡城",
					    "code": "KQL",
					    "kw": "KolKol",
					    "city": "贡城"
					},{
					    "name": "科尔达",
					    "code": "KDA",
					    "kw": "KoldaKolda",
					    "city": "科尔达"
					},{
					    "name": "戈尔哈布尔",
					    "code": "KLH",
					    "kw": "KolhapurKolhapur",
					    "city": "戈尔哈普尔"
					},{
					    "name": "科尔韦齐",
					    "code": "KWZ",
					    "kw": "KolweziKolwezi",
					    "city": "科尔韦齐"
					},{
					    "name": "驹子",
					    "code": "HOC",
					    "kw": "KomakoKomako",
					    "city": "驹子"
					},{
					    "name": "孔皮亚姆",
					    "code": "KPM",
					    "kw": "KompiamKompiam",
					    "city": "孔皮亚姆"
					},{
					    "name": "科内",
					    "code": "KNQ",
					    "kw": "KoneKone",
					    "city": "科内"
					},{
					    "name": "孔盖",
					    "code": "KGB",
					    "kw": "KongeKonge",
					    "city": "孔盖"
					},{
					    "name": "康果邦巴",
					    "code": "GKO",
					    "kw": "Kongo-BoumbaKongo-Boumba",
					    "city": "康果邦巴"
					},{
					    "name": "康果洛",
					    "code": "KOO",
					    "kw": "KongoloKongolo",
					    "city": "抗果洛"
					},{
					    "name": "科尼亚",
					    "code": "KYA",
					    "kw": "KonyaKonya",
					    "city": "科尼亚"
					},{
					    "name": "库勒塔",
					    "code": "KOH",
					    "kw": "KoolatahKoolatah",
					    "city": "库勒塔"
					},{
					    "name": "科伯斯凯尔",
					    "code": "OPA",
					    "kw": "KopaskerKopasker",
					    "city": "科伯斯凯尔"
					},{
					    "name": "科尔霍戈",
					    "code": "HGO",
					    "kw": "KorhogoKorhogo",
					    "city": "科尔霍戈"
					},{
					    "name": "科罗岛",
					    "code": "KXF",
					    "kw": "Koro IslandKoro Island",
					    "city": "科洛岛"
					},{
					    "name": "科罗巴",
					    "code": "KDE",
					    "kw": "KorobaKoroba",
					    "city": "科洛巴"
					},{
					    "name": "科罗尔",
					    "code": "ROR",
					    "kw": "KororKoror",
					    "city": "科罗尔"
					},{
					    "name": "科斯",
					    "code": "KGS",
					    "kw": "KosKos",
					    "city": "科斯"
					},{
					    "name": "科希策",
					    "code": "KSC",
					    "kw": "KosiceKosice",
					    "city": "科西策"
					},{
					    "name": "科斯瑞",
					    "code": "KSA",
					    "kw": "KosraeKosrae",
					    "city": "科斯瑞"
					},{
					    "name": "库斯塔奈",
					    "code": "KSN",
					    "kw": "KostanayKostanay",
					    "city": "库斯塔奈"
					},{
					    "name": "科斯提",
					    "code": "KST",
					    "kw": "KostiKosti",
					    "city": "科斯提"
					},{
					    "name": "科沙林",
					    "code": "OSZ",
					    "kw": "KoszalinKoszalin",
					    "city": "科沙林"
					},{
					    "name": "哥达巴鲁",
					    "code": "KBR",
					    "kw": "Kota BharuKota Bharu",
					    "city": "个达巴鲁"
					},{
					    "name": "哥打基纳巴卢",
					    "code": "BKI",
					    "kw": "Kota KinabaluKota Kinabalu",
					    "city": "个达基纳巴卢"
					},{
					    "name": "科塔",
					    "code": "KTU",
					    "kw": "KotaKota",
					    "city": "科塔"
					},{
					    "name": "哥打邦翁",
					    "code": "KOD",
					    "kw": "KotabangunKotabangun",
					    "city": "哥打邦翁"
					},{
					    "name": "库拉穆图",
					    "code": "KOU",
					    "kw": "KoulamoutouKoulamoutou",
					    "city": "库拉穆图"
					},{
					    "name": "库马克",
					    "code": "KOC",
					    "kw": "KoumacKoumac",
					    "city": "库马克"
					},{
					    "name": "孔达拉",
					    "code": "SBI",
					    "kw": "KoundaraKoundara",
					    "city": "孔达拉"
					},{
					    "name": "库塔巴",
					    "code": "KOB",
					    "kw": "KoutabaKoutaba",
					    "city": "库塔巴"
					},{
					    "name": "科扎尼",
					    "code": "KZI",
					    "kw": "KozaniKozani",
					    "city": "克扎尼"
					},{
					    "name": "卡利卡特",
					    "code": "CCJ",
					    "kw": "KozhikodeKozhikode",
					    "city": "卡利卡特"
					},{
					    "name": "克拉科夫",
					    "code": "KRK",
					    "kw": "KrakowKrakow",
					    "city": "克拉科夫"
					},{
					    "name": "克拉姆福什",
					    "code": "KRF",
					    "kw": "KramforsKramfors",
					    "city": "科拉穆福什"
					},{
					    "name": "克拉斯诺达尔",
					    "code": "KRR",
					    "kw": "KrasnodarKrasnodar",
					    "city": "科拉斯诺达尔"
					},{
					    "name": "克拉斯诺亚尔斯克",
					    "code": "KJA",
					    "kw": "KrasnoyarskKrasnoyarsk",
					    "city": "克拉斯诺亚尔斯"
					},{
					    "name": "克里比",
					    "code": "KBI",
					    "kw": "KribiKribi",
					    "city": "克里比"
					},{
					    "name": "克里斯蒂安桑",
					    "code": "KRS",
					    "kw": "KristiansandKristiansand Kjevik Airport",
					    "city": "克里斯蒂安桑"
					},{
					    "name": "克里斯蒂安斯塔德",
					    "code": "KID",
					    "kw": "KristianstadKristianstad",
					    "city": "克里斯蒂安斯塔"
					},{
					    "name": "克里斯蒂安松",
					    "code": "KSU",
					    "kw": "KristiansundKristiansund",
					    "city": "克里斯蒂安松"
					},{
					    "name": "克里沃罗格",
					    "code": "KWG",
					    "kw": "Krivoy RogKrivoy Rog",
					    "city": "克里沃罗个"
					},{
					    "name": "梳邦",
					    "code": "KUL",
					    "kw": "Kuala LumpurKuala Lumpur International Airport",
					    "city": "吉隆坡"
					},{
					    "name": "SULTAN ABDUL",
					    "code": "SZB",
					    "kw": "Kuala LumpurKuala Lumpur Sultan Abdul Aziz Shah Apt",
					    "city": "吉隆坡"
					},{
					    "name": "瓜拉丁加奴",
					    "code": "TGG",
					    "kw": "Kuala TerengganuKuala Terengganu",
					    "city": "瓜拉丁加奴"
					},{
					    "name": "关丹",
					    "code": "KUA",
					    "kw": "KuantanKuantan",
					    "city": "关丹"
					},{
					    "name": "古晋",
					    "code": "KCH",
					    "kw": "KuchingKuching",
					    "city": "吉晋"
					},{
					    "name": "库达特",
					    "code": "KUD",
					    "kw": "KudatKudat",
					    "city": "库达特"
					},{
					    "name": "库弗拉",
					    "code": "AKF",
					    "kw": "KufrahKufrah",
					    "city": "库弗拉"
					},{
					    "name": "科珀曼",
					    "code": "YCO",
					    "kw": "Kugluktuk CoppermineKugluktuk Coppermine",
					    "city": "科珀曼"
					},{
					    "name": "库依托",
					    "code": "SVP",
					    "kw": "KuitoKuito",
					    "city": "库伊托"
					},{
					    "name": "库卢",
					    "code": "KUU",
					    "kw": "KuluKulu",
					    "city": "库卢"
					},{
					    "name": "库留苏克岛",
					    "code": "KUS",
					    "kw": "Kulusuk IslandKulusuk Island",
					    "city": "库留苏克岛"
					},{
					    "name": "库马西",
					    "code": "KMS",
					    "kw": "KumasiKumasi",
					    "city": "库马西"
					},{
					    "name": "久米岛",
					    "code": "UEO",
					    "kw": "Kume JimaKume Jima",
					    "city": "久米岛"
					},{
					    "name": "孔迪亚瓦",
					    "code": "CMU",
					    "kw": "KundiawaKundiawa",
					    "city": "孔蒂亚瓦"
					},{
					    "name": "昆都士",
					    "code": "UND",
					    "kw": "KunduzKunduz",
					    "city": "昆都士"
					},{
					    "name": "库奥皮欧",
					    "code": "KUO",
					    "kw": "KuopioKuopio",
					    "city": "库奥皮欧"
					},{
					    "name": "库奥雷韦西",
					    "code": "KEV",
					    "kw": "KuorevesiKuorevesi",
					    "city": "库奥雷韦西"
					},{
					    "name": "古邦",
					    "code": "KOE",
					    "kw": "KupangKupang",
					    "city": "古邦"
					},{
					    "name": "库皮亚诺",
					    "code": "KUP",
					    "kw": "KupianoKupiano",
					    "city": "库皮亚诺"
					},{
					    "name": "库尔干",
					    "code": "KRO",
					    "kw": "KurganKurgan",
					    "city": "裤腰尔干"
					},{
					    "name": "库里亚",
					    "code": "KUC",
					    "kw": "KuriaKuria",
					    "city": "库里亚"
					},{
					    "name": "库鲁曼",
					    "code": "KMH",
					    "kw": "KurumanKuruman",
					    "city": "库卢曼"
					},{
					    "name": "库塔伊西",
					    "code": "KUT",
					    "kw": "KutaisiKutaisi",
					    "city": "库塔伊西"
					},{
					    "name": "库萨莫",
					    "code": "KAO",
					    "kw": "KuusamoKuusamo",
					    "city": "库萨莫"
					},{
					    "name": "科威特",
					    "code": "KWI",
					    "kw": "KuwaitKuwait",
					    "city": "科威特"
					},{
					    "name": "夸贾林",
					    "code": "KWA",
					    "kw": "KwajaleinKwajalein",
					    "city": "夸贾林"
					},{
					    "name": "光州",
					    "code": "KWJ",
					    "kw": "KwangjuKwangju",
					    "city": "光洲"
					},{
					    "name": "皎漂",
					    "code": "KYP",
					    "kw": "KyaukpyuKyaukpyu",
					    "city": "皎漂"
					},{
					    "name": "皎道",
					    "code": "KYT",
					    "kw": "KyauktawKyauktaw",
					    "city": "皎道"
					},{
					    "name": "拉塞瓦",
					    "code": "LCE",
					    "kw": "La CeibaLa Ceiba",
					    "city": "拉萨瓦"
					},{
					    "name": "拉乔雷拉",
					    "code": "LCR",
					    "kw": "La ChorreraLa Chorrera",
					    "city": "拉乔雷拉"
					},{
					    "name": "拉科洛马",
					    "code": "LCL",
					    "kw": "La ColomaLa Coloma",
					    "city": "拉克洛马"
					},{
					    "name": "拉科鲁尼亚",
					    "code": "LCG",
					    "kw": "La CorunaLa Coruna",
					    "city": "拉克卢尼亚"
					},{
					    "name": "拉代西拉德",
					    "code": "DSD",
					    "kw": "La DesiradeLa Desirade",
					    "city": "拉代西拉德"
					},{
					    "name": "拉弗里亚",
					    "code": "LFR",
					    "kw": "La FriaLa Fria",
					    "city": "拉弗里拉"
					},{
					    "name": "拉格兰德",
					    "code": "YGL",
					    "kw": "La GrandeLa Grande",
					    "city": "拉戈兰德"
					},{
					    "name": "拉帕尔马",
					    "code": "PLP",
					    "kw": "La PalmaLa Palma",
					    "city": "拉帕尔马"
					},{
					    "name": "拉巴斯·墨",
					    "code": "LAP",
					    "kw": "La PazLa Paz",
					    "city": "拉巴斯墨"
					},{
					    "name": "拉巴斯",
					    "code": "LPB",
					    "kw": "La PazLa Paz",
					    "city": "拉巴斯"
					},{
					    "name": "拉佩德雷拉",
					    "code": "LPD",
					    "kw": "La PedreraLa Pedrera",
					    "city": "拉佩德雷拉"
					},{
					    "name": "拉波特",
					    "code": "LPO",
					    "kw": "La PorteLa Porte",
					    "city": "拉伯特"
					},{
					    "name": "拉里奥哈",
					    "code": "IRJ",
					    "kw": "La RiojaLa Rioja",
					    "city": "拉利奥哈"
					},{
					    "name": "拉罗什",
					    "code": "EDM",
					    "kw": "La Roche sur YonLa Roche sur Yon",
					    "city": "拉洛是"
					},{
					    "name": "拉罗歇尔",
					    "code": "LRH",
					    "kw": "La RochelleLa Rochelle",
					    "city": "拉洛歇尔"
					},{
					    "name": "拉罗马纳",
					    "code": "LRM",
					    "kw": "La RomanaLa Romana",
					    "city": "拉罗马纳"
					},{
					    "name": "拉科拉龙日",
					    "code": "YVC",
					    "kw": "La RongeLa Ronge",
					    "city": "拉克拉龙日"
					},{
					    "name": "拉塞雷纳",
					    "code": "LSC",
					    "kw": "La SerenaLa Serena",
					    "city": "拉塞雷纳"
					},{
					    "name": "拉乌尼翁",
					    "code": "LUI",
					    "kw": "La UnionLa Union",
					    "city": "拉乌尼翁"
					},{
					    "name": "欧云",
					    "code": "EUN",
					    "kw": "LaayouneLaayoune",
					    "city": "欧云"
					},{
					    "name": "兰巴萨",
					    "code": "LBS",
					    "kw": "LabasaLabasa",
					    "city": "兰巴萨"
					},{
					    "name": "拉贝",
					    "code": "LEK",
					    "kw": "LabeLabe",
					    "city": "拉贝"
					},{
					    "name": "拉布拉布",
					    "code": "LAB",
					    "kw": "LablabLablab",
					    "city": "拉布拉布"
					},{
					    "name": "拉布安",
					    "code": "LBU",
					    "kw": "LabuanLabuan",
					    "city": "拉古安"
					},{
					    "name": "拉布哈",
					    "code": "LAH",
					    "kw": "LabuhaLabuha",
					    "city": "拉布哈"
					},{
					    "name": "拉克布谢特",
					    "code": "XLB",
					    "kw": "Lac BrochetLac Brochet",
					    "city": "拉克布谢特"
					},{
					    "name": "莱迪史密斯",
					    "code": "LAY",
					    "kw": "LadysmithLadysmith",
					    "city": "来迪史密斯"
					},{
					    "name": "莱岛",
					    "code": "LML",
					    "kw": "Lae IslandLae Island",
					    "city": "来到"
					},{
					    "name": "莱城",
					    "code": "LAE",
					    "kw": "LaeLae",
					    "city": "来城"
					},{
					    "name": "拉斐特",
					    "code": "LFT",
					    "kw": "LafayetteLafayette Regional Apt",
					    "city": "拉斐特"
					},{
					    "name": "拉日斯",
					    "code": "LAJ",
					    "kw": "LagesLages",
					    "city": "拉热斯"
					},{
					    "name": "拉戈阿格里奥",
					    "code": "LGQ",
					    "kw": "Lago AgrioLago Agrio",
					    "city": "拉戈阿戈里奥"
					},{
					    "name": "阿根廷湖",
					    "code": "ING",
					    "kw": "Lago ArgentinoLago Argentino",
					    "city": "阿根延湖"
					},{
					    "name": "拉各斯",
					    "code": "LOS",
					    "kw": "LagosLagos",
					    "city": "拉各斯"
					},{
					    "name": "拉古尼亚斯",
					    "code": "LGY",
					    "kw": "LagunillasLagunillas",
					    "city": "拉古尼亚斯"
					},{
					    "name": "拉哈达图",
					    "code": "LDU",
					    "kw": "Lahad DatuLahad Datu",
					    "city": "拉哈达图"
					},{
					    "name": "拉合尔",
					    "code": "LHE",
					    "kw": "LahoreLahore",
					    "city": "拉合尔"
					},{
					    "name": "拉亚加姆",
					    "code": "LGM",
					    "kw": "LaiagamLaiagam",
					    "city": "拉亚加姆"
					},{
					    "name": "莱克查尔斯",
					    "code": "LCH",
					    "kw": "Lake CharlesLake Charles",
					    "city": "莱克查尔斯"
					},{
					    "name": "莱克明丘米纳",
					    "code": "LMA",
					    "kw": "Lake MinchuminaLake Minchumina",
					    "city": "来克明秋米纳"
					},{
					    "name": "莱克默里",
					    "code": "LMY",
					    "kw": "Lake MurrayLake Murray",
					    "city": "来克默里"
					},{
					    "name": "莱克纳什",
					    "code": "LNH",
					    "kw": "Lake NashLake Nash",
					    "city": "来克纳是"
					},{
					    "name": "莱克巴",
					    "code": "LKB",
					    "kw": "LakebaLakeba",
					    "city": "来克巴"
					},{
					    "name": "莱克菲尔德",
					    "code": "LFP",
					    "kw": "LakefieldLakefield",
					    "city": "来克斐尔德"
					},{
					    "name": "莱克兰",
					    "code": "LAL",
					    "kw": "LakelandLakeland",
					    "city": "来克兰"
					},{
					    "name": "莱克维尤",
					    "code": "LKV",
					    "kw": "LakeviewLakeview",
					    "city": "来克维尤"
					},{
					    "name": "拉克塞尔夫",
					    "code": "LKL",
					    "kw": "LakselvLakselv",
					    "city": "拉克塞尔弗"
					},{
					    "name": "拉利贝拉",
					    "code": "LLI",
					    "kw": "LalibelaLalibela",
					    "city": "拉里贝拉"
					},{
					    "name": "拉马普",
					    "code": "LPM",
					    "kw": "LamapLamap",
					    "city": "拉马普"
					},{
					    "name": "拉马尔",
					    "code": "LAA",
					    "kw": "LamarLamar",
					    "city": "拉马尔"
					},{
					    "name": "兰巴雷内",
					    "code": "LBQ",
					    "kw": "LambareneLambarene",
					    "city": "兰巴雷内"
					},{
					    "name": "拉门湾",
					    "code": "LNB",
					    "kw": "Lamen BayLamen Bay",
					    "city": "拉门湾"
					},{
					    "name": "拉默齐亚-泰尔默",
					    "code": "SUF",
					    "kw": "Lamezia TermeLamezia Terme",
					    "city": "拉默齐亚"
					},{
					    "name": "南邦",
					    "code": "LPT",
					    "kw": "LampangLampang",
					    "city": "南邦"
					},{
					    "name": "兰佩杜萨",
					    "code": "LMP",
					    "kw": "LampedusaLampedusa",
					    "city": "兰佩杜萨"
					},{
					    "name": "拉穆",
					    "code": "LAU",
					    "kw": "LamuLamu",
					    "city": "拉穆"
					},{
					    "name": "兰卡斯特",
					    "code": "LNS",
					    "kw": "LancasterLancaster",
					    "city": "兰卡斯特1"
					},{
					    "name": "兰开斯特",
					    "code": "WJF",
					    "kw": "LancasterLancaster William J Fox Apt",
					    "city": "兰卡斯特"
					},{
					    "name": "兰兹角",
					    "code": "LEQ",
					    "kw": "Lands EndLands End",
					    "city": "兰茨角"
					},{
					    "name": "凌家卫",
					    "code": "LGK",
					    "kw": "LangkawiLangkawi",
					    "city": "凌加卫"
					},{
					    "name": "拉尼永",
					    "code": "LAI",
					    "kw": "LannionLannion",
					    "city": "拉尼永"
					},{
					    "name": "拉塞利亚",
					    "code": "HLA",
					    "kw": "LanseriaLanseria",
					    "city": "克卢个斯多普"
					},{
					    "name": "兰萨罗特",
					    "code": "ACE",
					    "kw": "LanzaroteLanzarote",
					    "city": "兰萨洛特"
					},{
					    "name": "拉瓦格",
					    "code": "LAO",
					    "kw": "LaoagLaoag",
					    "city": "拉瓦格"
					},{
					    "name": "拉彭兰塔",
					    "code": "LPP",
					    "kw": "LappeenrantaLappeenranta",
					    "city": "拉彭兰塔"
					},{
					    "name": "拉兰图卡",
					    "code": "LKA",
					    "kw": "LarantukaLarantuka",
					    "city": "拉兰图卡"
					},{
					    "name": "拉里萨",
					    "code": "LRA",
					    "kw": "LarissaLarissa",
					    "city": "拉利萨"
					},{
					    "name": "拉纳卡",
					    "code": "LCA",
					    "kw": "LarnacaLarnaca",
					    "city": "拉纳卡"
					},{
					    "name": "拉斯洛米塔斯",
					    "code": "LLS",
					    "kw": "Las LomitasLas Lomitas",
					    "city": "拉斯洛米塔斯"
					},{
					    "name": "大加那利岛",
					    "code": "LPA",
					    "kw": "Las PalmasLas Palmas",
					    "city": "大加纳利岛"
					},{
					    "name": "拉斯皮耶德拉斯",
					    "code": "LSP",
					    "kw": "Las PiedrasLas Piedras",
					    "city": "拉斯皮耶德拉斯"
					},{
					    "name": "拉斯图纳斯",
					    "code": "VTU",
					    "kw": "Las TunasLas Tunas",
					    "city": "拉斯土纳斯"
					},{
					    "name": "腊戌",
					    "code": "LSH",
					    "kw": "LashioLashio",
					    "city": "腊戊"
					},{
					    "name": "拉斯土维尔",
					    "code": "LTL",
					    "kw": "LastourvilleLastourville",
					    "city": "拉斯土维尔"
					},{
					    "name": "拉特罗布",
					    "code": "LBE",
					    "kw": "LatrobeLatrobe",
					    "city": "拉特罗布1"
					},{
					    "name": "LAUREL PINE BELT",
					    "code": "PIB",
					    "kw": "LaurelLaurel Hattiesburg-Laurel Regional Apt",
					    "city": "劳雷尔"
					},{
					    "name": "劳雷尔",
					    "code": "LUL",
					    "kw": "LaurelLaurel Hesler Noble Field",
					    "city": "劳雷尔"
					},{
					    "name": "拉瓦勒",
					    "code": "LVA",
					    "kw": "LavalLaval",
					    "city": "拉瓦勒"
					},{
					    "name": "拉瓦斯",
					    "code": "LWY",
					    "kw": "LawasLawas",
					    "city": "拉瓦斯"
					},{
					    "name": "拉萨罗-卡德纳斯",
					    "code": "LZC",
					    "kw": "Lazaro CardenasLazaro Cardenas",
					    "city": "拉萨罗"
					},{
					    "name": "勒阿弗尔",
					    "code": "LEH",
					    "kw": "Le HavreLe Havre",
					    "city": "勒阿夫尔"
					},{
					    "name": "勒芒",
					    "code": "LME",
					    "kw": "Le MansLe Mans Arnage Airport",
					    "city": "勒芒"
					},{
					    "name": "勒皮",
					    "code": "LPY",
					    "kw": "Le PuyLe Puy",
					    "city": "勒皮"
					},{
					    "name": "勒土开",
					    "code": "LTQ",
					    "kw": "Le TouquetLe Touquet",
					    "city": "勒土开"
					},{
					    "name": "利夫拉皮兹",
					    "code": "YLR",
					    "kw": "Leaf RapidsLeaf Rapids",
					    "city": "利夫拉皮兹"
					},{
					    "name": "莱贝尔/魁耶夫",
					    "code": "YLS",
					    "kw": "Lebel-Sur-QuevillonLebel-Sur-Quevillon",
					    "city": "来贝尔"
					},{
					    "name": "利兹",
					    "code": "LBA",
					    "kw": "Leeds BradfordLeeds Bradford",
					    "city": "利兹"
					},{
					    "name": "莱加斯皮",
					    "code": "LGP",
					    "kw": "LegaspiLegaspi",
					    "city": "来加斯皮"
					},{
					    "name": "列城",
					    "code": "IXL",
					    "kw": "LehLeh",
					    "city": "列城"
					},{
					    "name": "利克里克",
					    "code": "LGH",
					    "kw": "Leigh CreekLeigh Creek",
					    "city": "利克利克"
					},{
					    "name": "来比锡",
					    "code": "LEJ",
					    "kw": "LeipzigLeipzig",
					    "city": "来比锡"
					},{
					    "name": "莱特雷",
					    "code": "LTF",
					    "kw": "LeitreLeitre",
					    "city": "来特雷"
					},{
					    "name": "莱卡纳",
					    "code": "LKC",
					    "kw": "LekanaLekana",
					    "city": "来卡纳"
					},{
					    "name": "莱克内斯",
					    "code": "LKN",
					    "kw": "LeknesLeknes",
					    "city": "来克内斯"
					},{
					    "name": "利姆诺斯",
					    "code": "LXS",
					    "kw": "LemnosLemnos",
					    "city": "利姆诺斯"
					},{
					    "name": "莱奥",
					    "code": "XLU",
					    "kw": "LeoLeo",
					    "city": "来奥"
					},{
					    "name": "莱昂—瓜纳华托",
					    "code": "BJX",
					    "kw": "Leon/GuanajuatoLeon/Guanajuato",
					    "city": "来昂瓜纳话托"
					},{
					    "name": "莱昂",
					    "code": "LEN",
					    "kw": "LeonLeon",
					    "city": "来昂"
					},{
					    "name": "伦纳德镇",
					    "code": "LTW",
					    "kw": "LeonardtownLeonardtown",
					    "city": "伦纳德镇"
					},{
					    "name": "利奥波尔迪纳",
					    "code": "LEP",
					    "kw": "LeopoldinaLeopoldina",
					    "city": "利奥伯尔迪纳"
					},{
					    "name": "勒雷赫",
					    "code": "LHI",
					    "kw": "LerehLereh",
					    "city": "勒雷赫"
					},{
					    "name": "莱里贝",
					    "code": "LRB",
					    "kw": "LeribeLeribe",
					    "city": "来利贝"
					},{
					    "name": "利罗斯",
					    "code": "LRS",
					    "kw": "LerosLeros",
					    "city": "利罗斯"
					},{
					    "name": "莱塞",
					    "code": "LNG",
					    "kw": "LeseLese",
					    "city": "来塞"
					},{
					    "name": "莱索奔",
					    "code": "LES",
					    "kw": "LesobengLesobeng",
					    "city": "来索奔"
					},{
					    "name": "莱斯布里奇",
					    "code": "YQL",
					    "kw": "LethbridgeLethbridge",
					    "city": "来斯布利奇"
					},{
					    "name": "LETHEM",
					    "code": "LTM",
					    "kw": "LethemLethem",
					    "city": "来瑟姆"
					},{
					    "name": "莱蒂西亚",
					    "code": "LET",
					    "kw": "LeticiaLeticia",
					    "city": "莱地西亚"
					},{
					    "name": "刘易斯顿",
					    "code": "LWS",
					    "kw": "LewistonLewiston",
					    "city": "刘易斯顿"
					},{
					    "name": "刘易斯敦",
					    "code": "LWT",
					    "kw": "LewistownLewistown",
					    "city": "刘易斯敦"
					},{
					    "name": "莱沃勒巴",
					    "code": "LWE",
					    "kw": "LewolebaLewoleba",
					    "city": "莱沃勒巴"
					},{
					    "name": "列克星敦",
					    "code": "LEX",
					    "kw": "LexingtonLexington Blue Grass Apt",
					    "city": "列克星敦"
					},{
					    "name": "利本盖",
					    "code": "LIE",
					    "kw": "LibengeLibenge",
					    "city": "利本盖"
					},{
					    "name": "利韦里亚",
					    "code": "LIR",
					    "kw": "LiberiaLiberia",
					    "city": "利韦里亚"
					},{
					    "name": "利伯维尔",
					    "code": "LBV",
					    "kw": "LibrevilleLibreville",
					    "city": "利柏微尔"
					},{
					    "name": "利德雪平",
					    "code": "LDK",
					    "kw": "LidkopingLidkoping",
					    "city": "利德雪平"
					},{
					    "name": "列日",
					    "code": "LGG",
					    "kw": "LiegeLiege",
					    "city": "列日"
					},{
					    "name": "利福",
					    "code": "LIF",
					    "kw": "LifouLifou",
					    "city": "利福"
					},{
					    "name": "利凯普岛",
					    "code": "LIK",
					    "kw": "Likiep IslandLikiep Island",
					    "city": "利凯普"
					},{
					    "name": "利拉巴里",
					    "code": "IXI",
					    "kw": "LilabariLilabari",
					    "city": "利拉巴里"
					},{
					    "name": "利尔",
					    "code": "LIL",
					    "kw": "LilleLille Lesquin Airport",
					    "city": "利尔"
					},{
					    "name": "利朗格韦",
					    "code": "LLW",
					    "kw": "LilongweLilongwe",
					    "city": "利朗格韦"
					},{
					    "name": "利马",
					    "code": "LIM",
					    "kw": "LimaLima",
					    "city": "利马"
					},{
					    "name": "林邦",
					    "code": "LMN",
					    "kw": "LimbangLimbang",
					    "city": "林邦"
					},{
					    "name": "林布尼亚",
					    "code": "LIB",
					    "kw": "LimbunyaLimbunya",
					    "city": "林布尼亚"
					},{
					    "name": "利摩日",
					    "code": "LIG",
					    "kw": "LimogesLimoges",
					    "city": "利摩日"
					},{
					    "name": "利蒙",
					    "code": "LIO",
					    "kw": "LimonLimon",
					    "city": "利蒙"
					},{
					    "name": "林肯",
					    "code": "LNK",
					    "kw": "LincolnLincoln",
					    "city": "林肯"
					},{
					    "name": "林迪",
					    "code": "LDI",
					    "kw": "LindiLindi",
					    "city": "林迪"
					},{
					    "name": "林彻平",
					    "code": "LPI",
					    "kw": "LinkopingLinkoping",
					    "city": "林彻平"
					},{
					    "name": "林茨",
					    "code": "LNZ",
					    "kw": "LinzLinz",
					    "city": "林次"
					},{
					    "name": "利萨拉",
					    "code": "LIQ",
					    "kw": "LisalaLisala",
					    "city": "利萨拉"
					},{
					    "name": "里斯本",
					    "code": "LIS",
					    "kw": "LisbonLisbon",
					    "city": "里斯本"
					},{
					    "name": "利弗莫尔",
					    "code": "LVK",
					    "kw": "LivermoreLivermore",
					    "city": "利弗莫尔"
					},{
					    "name": "利物浦",
					    "code": "LPL",
					    "kw": "LiverpoolLiverpool",
					    "city": "利物浦"
					},{
					    "name": "利文斯通",
					    "code": "LVI",
					    "kw": "LivingstoneLivingstone",
					    "city": "利文斯通"
					},{
					    "name": "卢布尔雅那",
					    "code": "LJU",
					    "kw": "LjubljanaLjubljana",
					    "city": "卢布尔雅那"
					},{
					    "name": "劳埃德明斯特",
					    "code": "YLL",
					    "kw": "LloydminsterLloydminster",
					    "city": "劳埃德明斯特"
					},{
					    "name": "洛巴策",
					    "code": "LOQ",
					    "kw": "LobatseLobatse",
					    "city": "洛巴策"
					},{
					    "name": "洛赫吉尔普黑德",
					    "code": "LPH",
					    "kw": "LochgilpheadLochgilphead",
					    "city": "洛赫吉尔普黑德"
					},{
					    "name": "洛贾",
					    "code": "LJA",
					    "kw": "LodjaLodja",
					    "city": "洛贾"
					},{
					    "name": "黎",
					    "code": "LOE",
					    "kw": "LoeiLoei",
					    "city": "黎"
					},{
					    "name": "垒固",
					    "code": "LIW",
					    "kw": "LoikawLoikaw",
					    "city": "垒固"
					},{
					    "name": "洛哈",
					    "code": "LOH",
					    "kw": "LojaLoja",
					    "city": "洛哈"
					},{
					    "name": "洛美",
					    "code": "LFW",
					    "kw": "LomeLome",
					    "city": "洛美"
					},{
					    "name": "LONDON CITY APT",
					    "code": "LCY",
					    "kw": "LondonLondon City Apt",
					    "city": "伦敦1"
					},{
					    "name": "盖特维克",
					    "code": "LGW",
					    "kw": "LondonLondon Gatwick Apt",
					    "city": "伦敦1"
					},{
					    "name": "希思罗",
					    "code": "LHR",
					    "kw": "LondonLondon Heathrow Apt",
					    "city": "伦敦1"
					},{
					    "name": "伦敦",
					    "code": "LTN",
					    "kw": "LondonLondon Luton Apt",
					    "city": "伦敦1"
					},{
					    "name": "斯坦斯特德",
					    "code": "STN",
					    "kw": "LondonLondon Stansted Apt",
					    "city": "伦敦1"
					},{
					    "name": "伦敦德里",
					    "code": "LDY",
					    "kw": "LondonderryLondonderry",
					    "city": "伦敦德里"
					},{
					    "name": "隆德里纳",
					    "code": "LDB",
					    "kw": "LondrinaLondrina",
					    "city": "隆德里纳"
					},{
					    "name": "伦阿彭",
					    "code": "LPU",
					    "kw": "Long ApungLong Apung",
					    "city": "伦阿彭"
					},{
					    "name": "隆巴旺",
					    "code": "LBW",
					    "kw": "Long BawanLong Bawan",
					    "city": "隆巴旺长滩"
					},{
					    "name": "长滩",
					    "code": "LGB",
					    "kw": "Long BeachLong Beach Apt",
					    "city": "长滩"
					},{
					    "name": "隆勒朗",
					    "code": "LGL",
					    "kw": "Long LellangLong Lellang",
					    "city": "隆勒朗"
					},{
					    "name": "伦巴西亚",
					    "code": "GSA",
					    "kw": "Long PasiaLong Pasia",
					    "city": "伦巴西亚"
					},{
					    "name": "伦塞马多",
					    "code": "LSM",
					    "kw": "Long SemadoLong Semado",
					    "city": "伦塞马多"
					},{
					    "name": "伦塞里旦",
					    "code": "ODN",
					    "kw": "Long SeridanLong Seridan",
					    "city": "伦塞里旦"
					},{
					    "name": "伦加纳",
					    "code": "LOD",
					    "kw": "LonganaLongana",
					    "city": "伦加纳"
					},{
					    "name": "朗伊尔城",
					    "code": "LYR",
					    "kw": "LongyearbyenLongyearbyen",
					    "city": "朗依尔城"
					},{
					    "name": "朗挪罗依",
					    "code": "LNE",
					    "kw": "LonororeLonorore",
					    "city": "朗挪罗依"
					},{
					    "name": "洛雷托",
					    "code": "LTO",
					    "kw": "LoretoLoreto",
					    "city": "洛雷托"
					},{
					    "name": "洛斯阿拉莫斯",
					    "code": "LAM",
					    "kw": "Los AlamosLos Alamos",
					    "city": "洛斯阿拉莫斯"
					},{
					    "name": "洛斯安赫莱斯",
					    "code": "LSQ",
					    "kw": "Los AngelesLos Angeles",
					    "city": "洛斯安赫莱斯"
					},{
					    "name": "洛杉矶",
					    "code": "LAX",
					    "kw": "Los AngelesLos Angeles Int'l Apt",
					    "city": "洛杉矶"
					},{
					    "name": "洛斯梅努科斯",
					    "code": "LMD",
					    "kw": "Los MenucosLos Menucos",
					    "city": "洛斯梅努科斯"
					},{
					    "name": "洛斯莫奇斯",
					    "code": "LMM",
					    "kw": "Los MochisLos Mochis",
					    "city": "洛斯莫奇斯"
					},{
					    "name": "洛斯罗克斯",
					    "code": "LRV",
					    "kw": "Los RoquesLos Roques",
					    "city": "洛斯罗克斯"
					},{
					    "name": "洛苏亚",
					    "code": "LSA",
					    "kw": "LosuiaLosuia",
					    "city": "洛苏亚"
					},{
					    "name": "卢博莫",
					    "code": "DIS",
					    "kw": "LoubomoLoubomo",
					    "city": "卢博莫"
					},{
					    "name": "路易斯特里哈特",
					    "code": "LCD",
					    "kw": "Louis TrichardtLouis Trichardt",
					    "city": "路易斯特里哈特"
					},{
					    "name": "路易斯维尔",
					    "code": "SDF",
					    "kw": "LouisvilleLouisville Standiford Field",
					    "city": "路易斯维尔"
					},{
					    "name": "卢尔德/塔布",
					    "code": "LDE",
					    "kw": "Lourdes/TarbesLourdes/Tarbes",
					    "city": "卢尔德/塔布"
					},{
					    "name": "罗安达",
					    "code": "LAD",
					    "kw": "LuandaLuanda",
					    "city": "罗安达"
					},{
					    "name": "卢班戈",
					    "code": "SDD",
					    "kw": "LubangoLubango",
					    "city": "卢班戈"
					},{
					    "name": "卢本巴希",
					    "code": "FBM",
					    "kw": "LubumbashiLubumbashi",
					    "city": "卢本巴希"
					},{
					    "name": "卢卡",
					    "code": "LCV",
					    "kw": "LuccaLucca",
					    "city": "卢卡"
					},{
					    "name": "卢切内茨",
					    "code": "LUE",
					    "kw": "LucenecLucenec",
					    "city": "卢切内茨"
					},{
					    "name": "勒克瑙",
					    "code": "LKO",
					    "kw": "LucknowLucknow",
					    "city": "勒克瑙"
					},{
					    "name": "吕德里茨",
					    "code": "LUD",
					    "kw": "LuderitzLuderitz",
					    "city": "吕德里茨"
					},{
					    "name": "卢迪亚纳",
					    "code": "LUH",
					    "kw": "LudhianaLudhiana",
					    "city": "卢迪亚纳"
					},{
					    "name": "卢埃纳",
					    "code": "LUO",
					    "kw": "LuenaLuena",
					    "city": "卢埃纳"
					},{
					    "name": "卢加诺",
					    "code": "LUG",
					    "kw": "LuganoLugano",
					    "city": "卢加诺"
					},{
					    "name": "卢甘斯克",
					    "code": "VSG",
					    "kw": "LuganskLugansk",
					    "city": "卢甘斯克"
					},{
					    "name": "卢格加纳内",
					    "code": "LGX",
					    "kw": "Lugh GananeLugh Ganane",
					    "city": "卢格加纳内"
					},{
					    "name": "卢克拉",
					    "code": "LUA",
					    "kw": "LuklaLukla",
					    "city": "卢克拉"
					},{
					    "name": "吕勒奥",
					    "code": "LLA",
					    "kw": "LuleaLulea",
					    "city": "吕勒奥"
					},{
					    "name": "隆巴拉",
					    "code": "GGC",
					    "kw": "LumbalaLumbala",
					    "city": "隆巴拉"
					},{
					    "name": "卢米",
					    "code": "LMI",
					    "kw": "LumiLumi",
					    "city": "卢米"
					},{
					    "name": "卢萨卡",
					    "code": "LUN",
					    "kw": "LusakaLusaka",
					    "city": "卢萨卡"
					},{
					    "name": "卢西基西基",
					    "code": "LUJ",
					    "kw": "LusikisikiLusikisiki",
					    "city": "卢西基西基"
					},{
					    "name": "卢武克",
					    "code": "LUW",
					    "kw": "LuwukLuwuk",
					    "city": "卢武克"
					},{
					    "name": "卢森堡",
					    "code": "LUX",
					    "kw": "LuxembourgLuxembourg",
					    "city": "卢森堡"
					},{
					    "name": "卢克索",
					    "code": "LXR",
					    "kw": "LuxorLuxor",
					    "city": "卢克索"
					},{
					    "name": "利沃夫",
					    "code": "LWO",
					    "kw": "LvovLvov",
					    "city": "利沃夫"
					},{
					    "name": "吕克瑟勒",
					    "code": "LYC",
					    "kw": "LyckseleLycksele",
					    "city": "吕克瑟勒"
					},{
					    "name": "利德",
					    "code": "LYX",
					    "kw": "LyddLydd",
					    "city": "利德"
					},{
					    "name": "林奇堡",
					    "code": "LYH",
					    "kw": "LynchburgLynchburg",
					    "city": "林奇堡"
					},{
					    "name": "林莱克",
					    "code": "YYL",
					    "kw": "Lynn LakeLynn Lake",
					    "city": "林莱克"
					},{
					    "name": "里昂",
					    "code": "LYS",
					    "kw": "LyonLyon Saint Exupery Apt",
					    "city": "里昂"
					},{
					    "name": "姆班扎刚果",
					    "code": "SSY",
					    "kw": "M'Banza CongoM'Banza Congo",
					    "city": "姆班扎刚果"
					},{
					    "name": "奥博姆博基",
					    "code": "MKI",
					    "kw": "M'BokiM'Boki",
					    "city": "奥博姆博基"
					},{
					    "name": "姆比古",
					    "code": "MBC",
					    "kw": "M'bigouM'bigou",
					    "city": "姆比古"
					},{
					    "name": "马斯特里赫特",
					    "code": "MST",
					    "kw": "MaastrichtMaastricht/Aachen DE Apt",
					    "city": "马斯特里赫特"
					},{
					    "name": "马巴鲁马",
					    "code": "USI",
					    "kw": "MabarumaMabaruma",
					    "city": "马巴鲁马"
					},{
					    "name": "马布亚格岛",
					    "code": "UBB",
					    "kw": "Mabuiag IslandMabuiag Island",
					    "city": "马布亚格岛"
					},{
					    "name": "马卡埃",
					    "code": "MEA",
					    "kw": "MacaeMacae",
					    "city": "马卡埃"
					},{
					    "name": "马卡拉",
					    "code": "MRR",
					    "kw": "MacaraMacara",
					    "city": "马卡拉"
					},{
					    "name": "马卡斯",
					    "code": "XMS",
					    "kw": "MacasMacas",
					    "city": "马卡斯"
					},{
					    "name": "澳门",
					    "code": "MFM",
					    "kw": "MacauMacau",
					    "city": "澳门"
					},{
					    "name": "马赛约",
					    "code": "MCZ",
					    "kw": "MaceioMaceio",
					    "city": "马塞约"
					},{
					    "name": "马森塔",
					    "code": "MCA",
					    "kw": "MacentaMacenta",
					    "city": "马森塔"
					},{
					    "name": "马查拉",
					    "code": "MCH",
					    "kw": "MachalaMachala",
					    "city": "马查拉"
					},{
					    "name": "马科姆",
					    "code": "MQB",
					    "kw": "MacombMacomb",
					    "city": "马科姆"
					},{
					    "name": "MACAO",
					    "code": "QMP",
					    "kw": "MaconMacon Flightlink Bus Station",
					    "city": "马孔"
					},{
					    "name": "马孔",
					    "code": "MCN",
					    "kw": "MaconMacon Lewis B Wilson Apt",
					    "city": "马孔"
					},{
					    "name": "马当",
					    "code": "MAG",
					    "kw": "MadangMadang",
					    "city": "马当"
					},{
					    "name": "麦迪纳",
					    "code": "MED",
					    "kw": "MadinahMadinah",
					    "city": "麦迪纳"
					},{
					    "name": "巴拉查斯",
					    "code": "MAD",
					    "kw": "MadridMadrid Barajas Apt",
					    "city": "马德里"
					},{
					    "name": "马杜赖",
					    "code": "IXM",
					    "kw": "MaduraiMadurai",
					    "city": "马杜赖"
					},{
					    "name": "湄索",
					    "code": "MAQ",
					    "kw": "Mae SotMae Sot",
					    "city": "湄索"
					},{
					    "name": "迈沃",
					    "code": "MWF",
					    "kw": "MaewoMaewo",
					    "city": "迈沃"
					},{
					    "name": "马费滕",
					    "code": "MFC",
					    "kw": "MafetengMafeteng",
					    "city": "马费滕"
					},{
					    "name": "马菲亚",
					    "code": "MFA",
					    "kw": "MafiaMafia",
					    "city": "马菲亚"
					},{
					    "name": "马加丹",
					    "code": "GDX",
					    "kw": "MagadanMagadan",
					    "city": "马加丹"
					},{
					    "name": "马甘格",
					    "code": "MGN",
					    "kw": "MagangueMagangue",
					    "city": "马甘格"
					},{
					    "name": "马格达莱纳",
					    "code": "MGD",
					    "kw": "MagdalenaMagdalena",
					    "city": "马格达莱纳"
					},{
					    "name": "马圭",
					    "code": "MWQ",
					    "kw": "MagweMagwe",
					    "city": "马圭"
					},{
					    "name": "马哈努鲁",
					    "code": "VVB",
					    "kw": "MahanoroMahanoro",
					    "city": "马哈努鲁"
					},{
					    "name": "马赫迪耶",
					    "code": "MHA",
					    "kw": "MahdiaMahdia",
					    "city": "马赫迪耶"
					},{
					    "name": "马埃岛",
					    "code": "SEZ",
					    "kw": "Mahe IslandMahe Island",
					    "city": "马埃岛"
					},{
					    "name": "马亨德拉纳格尔",
					    "code": "XMG",
					    "kw": "MahendranagarMahendranagar",
					    "city": "马亨德拉纳格尔"
					},{
					    "name": "迈亚纳",
					    "code": "MNK",
					    "kw": "MaianaMaiana",
					    "city": "迈亚纳"
					},{
					    "name": "迈考",
					    "code": "MCJ",
					    "kw": "MaicaoMaicao",
					    "city": "迈考"
					},{
					    "name": "迈杜古里",
					    "code": "MIU",
					    "kw": "MaiduguriMaiduguri",
					    "city": "迈杜古里"
					},{
					    "name": "迈马纳",
					    "code": "MMZ",
					    "kw": "MaimanaMaimana",
					    "city": "迈马纳"
					},{
					    "name": "迈因蒂拉努",
					    "code": "MXT",
					    "kw": "MaintiranoMaintirano",
					    "city": "迈因蒂拉努"
					},{
					    "name": "马尤岛",
					    "code": "MMO",
					    "kw": "MaioMaio",
					    "city": "马尤岛"
					},{
					    "name": "马任加",
					    "code": "MJN",
					    "kw": "MajungaMajunga",
					    "city": "马任加"
					},{
					    "name": "马朱罗",
					    "code": "MAJ",
					    "kw": "MajuroMajuro",
					    "city": "马朱罗"
					},{
					    "name": "马卡巴纳",
					    "code": "KMK",
					    "kw": "MakabanaMakabana",
					    "city": "马卡巴纳"
					},{
					    "name": "默克莱",
					    "code": "MQX",
					    "kw": "MakaleMakale",
					    "city": "默克莱"
					},{
					    "name": "默凯莫",
					    "code": "MKP",
					    "kw": "MakemoMakemo",
					    "city": "默凯莫"
					},{
					    "name": "马哈奇卡拉",
					    "code": "MCX",
					    "kw": "MakhachkalaMakhachkala",
					    "city": "马哈奇卡拉"
					},{
					    "name": "迈金岛",
					    "code": "MTK",
					    "kw": "Makin IslandMakin Island",
					    "city": "迈金岛"
					},{
					    "name": "马库维克",
					    "code": "YMN",
					    "kw": "MakkovikMakkovik",
					    "city": "马库维克"
					},{
					    "name": "马得库",
					    "code": "MKU",
					    "kw": "MakokouMakokou",
					    "city": "马科库"
					},{
					    "name": "马夸",
					    "code": "MKJ",
					    "kw": "MakouaMakoua",
					    "city": "马夸"
					},{
					    "name": "马库尔迪",
					    "code": "MDI",
					    "kw": "MakurdiMakurdi",
					    "city": "马库尔迪"
					},{
					    "name": "马拉邦",
					    "code": "MLP",
					    "kw": "MalabangMalabang",
					    "city": "马拉邦"
					},{
					    "name": "马拉博",
					    "code": "SSG",
					    "kw": "MalaboMalabo",
					    "city": "马拉博"
					},{
					    "name": "马六甲",
					    "code": "MKZ",
					    "kw": "MalaccaMalacca",
					    "city": "马六甲"
					},{
					    "name": "马拉加",
					    "code": "AGP",
					    "kw": "MalagaMalaga",
					    "city": "马拉加"
					},{
					    "name": "马拉因班迪",
					    "code": "WML",
					    "kw": "MalaimbandyMalaimbandy",
					    "city": "马拉因班迪"
					},{
					    "name": "马拉卡尔",
					    "code": "MAK",
					    "kw": "MalakalMalakal",
					    "city": "马拉卡尔"
					},{
					    "name": "马拉拉瓦",
					    "code": "MLQ",
					    "kw": "MalalauaMalalaua",
					    "city": "马拉拉瓦"
					},{
					    "name": "玛琅",
					    "code": "MLG",
					    "kw": "MalangMalang",
					    "city": "玛琅"
					},{
					    "name": "马兰热",
					    "code": "MEG",
					    "kw": "MalangeMalange",
					    "city": "马兰热"
					},{
					    "name": "马拉蒂亚",
					    "code": "MLX",
					    "kw": "MalatyaMalatya",
					    "city": "马拉蒂亚"
					},{
					    "name": "马尔达",
					    "code": "LDA",
					    "kw": "MaldaMalda",
					    "city": "马尔达"
					},{
					    "name": "莫尔登",
					    "code": "MAW",
					    "kw": "MaldenMalden",
					    "city": "莫尔登"
					},{
					    "name": "马累",
					    "code": "MLE",
					    "kw": "MaleMale",
					    "city": "马累"
					},{
					    "name": "马勒库拉",
					    "code": "MKN",
					    "kw": "MalekolonMalekolon",
					    "city": "马勒库拉"
					},{
					    "name": "马利亚纳",
					    "code": "MPT",
					    "kw": "MalianaMaliana",
					    "city": "马利亚纳"
					},{
					    "name": "马林迪",
					    "code": "MYD",
					    "kw": "MalindiMalindi",
					    "city": "马林迪"
					},{
					    "name": "马拉库塔",
					    "code": "XMC",
					    "kw": "MallacootaMallacoota",
					    "city": "马拉库塔"
					},{
					    "name": "MALMO CITY HOVERC",
					    "code": "HMA",
					    "kw": "MalmoMalmo City Hovercraft",
					    "city": "马尔默"
					},{
					    "name": "MALMO HARBOUR HEL",
					    "code": "JMM",
					    "kw": "MalmoMalmo Harbour Heliport",
					    "city": "马尔默"
					},{
					    "name": "MALMO STURUP APT",
					    "code": "MMX",
					    "kw": "MalmoMalmo Sturup Apt",
					    "city": "马尔默"
					},{
					    "name": "马洛埃拉普岛",
					    "code": "MAV",
					    "kw": "Maloelap IslandMaloelap Island",
					    "city": "马洛埃拉普岛"
					},{
					    "name": "马洛洛莱莱",
					    "code": "PTF",
					    "kw": "MalololailaiMalololailai",
					    "city": "马洛洛莱莱"
					},{
					    "name": "马耳他",
					    "code": "MLA",
					    "kw": "MaltaMalta",
					    "city": "马耳他"
					},{
					    "name": "马迈",
					    "code": "MAP",
					    "kw": "MamaiMamai",
					    "city": "马迈"
					},{
					    "name": "曼布劳",
					    "code": "MBO",
					    "kw": "MamburaoMamburao",
					    "city": "曼布劳"
					},{
					    "name": "马姆菲",
					    "code": "MMF",
					    "kw": "MamfeMamfe",
					    "city": "马姆菲"
					},{
					    "name": "马默思莱克",
					    "code": "MMH",
					    "kw": "Mammoth LakesMammoth Lakes",
					    "city": "马默思莱克"
					},{
					    "name": "马穆朱",
					    "code": "MJU",
					    "kw": "MamujuMamuju",
					    "city": "马穆朱"
					},{
					    "name": "马恩",
					    "code": "MJC",
					    "kw": "ManMan",
					    "city": "马恩"
					},{
					    "name": "马纳",
					    "code": "MNF",
					    "kw": "Mana IslandMana Island",
					    "city": "马纳"
					},{
					    "name": "马那瓜",
					    "code": "MGA",
					    "kw": "ManaguaManagua",
					    "city": "马那瓜"
					},{
					    "name": "马纳卡拉",
					    "code": "WVK",
					    "kw": "ManakaraManakara",
					    "city": "马纳卡拉"
					},{
					    "name": "马纳纳拉",
					    "code": "WMR",
					    "kw": "MananaraMananara",
					    "city": "马纳纳拉"
					},{
					    "name": "马南扎里",
					    "code": "MNJ",
					    "kw": "MananjaryMananjary",
					    "city": "马南扎里"
					},{
					    "name": "马纳瑞",
					    "code": "MRM",
					    "kw": "ManareManare",
					    "city": "马纳瑞"
					},{
					    "name": "马纳萨斯",
					    "code": "MNZ",
					    "kw": "ManassasManassas",
					    "city": "马纳萨斯"
					},{
					    "name": "曼彻斯特",
					    "code": "MAN",
					    "kw": "ManchesterManchester International Apt",
					    "city": "曼彻斯特"
					},{
					    "name": "曼达贝",
					    "code": "WMD",
					    "kw": "MandabeMandabe",
					    "city": "曼达贝"
					},{
					    "name": "曼德勒",
					    "code": "MDL",
					    "kw": "MandalayMandalay",
					    "city": "曼德勒"
					},{
					    "name": "曼德拉",
					    "code": "NDE",
					    "kw": "ManderaMandera",
					    "city": "曼德拉"
					},{
					    "name": "曼德维尔",
					    "code": "MVJ",
					    "kw": "MandevilleMandeville",
					    "city": "曼德维尔"
					},{
					    "name": "曼德里察拉",
					    "code": "WMA",
					    "kw": "MandritsaraMandritsara",
					    "city": "曼德里察拉"
					},{
					    "name": "曼加",
					    "code": "MGP",
					    "kw": "MangaManga",
					    "city": "曼加"
					},{
					    "name": "芒艾亚岛",
					    "code": "MGS",
					    "kw": "Mangaia IslandMangaia Island",
					    "city": "芒艾亚岛"
					},{
					    "name": "曼加洛尔",
					    "code": "IXE",
					    "kw": "MangaloreMangalore",
					    "city": "曼加洛尔"
					},{
					    "name": "芒俄勒",
					    "code": "MAL",
					    "kw": "MangoleMangole",
					    "city": "芒俄勒"
					},{
					    "name": "曼格罗夫岛",
					    "code": "MAY",
					    "kw": "Mangrove CayMangrove Cay",
					    "city": "曼格罗夫岛"
					},{
					    "name": "马尼希",
					    "code": "XMH",
					    "kw": "ManihiManihi",
					    "city": "马尼希"
					},{
					    "name": "马尼希基群岛",
					    "code": "MHX",
					    "kw": "Manihiki IslandManihiki Island",
					    "city": "马尼希基群岛"
					},{
					    "name": "马尼拉",
					    "code": "MNL",
					    "kw": "ManilaManila Ninoy Aquino International Apt",
					    "city": "马尼拉"
					},{
					    "name": "马宁里达",
					    "code": "MNG",
					    "kw": "ManingridaManingrida",
					    "city": "马宁里达"
					},{
					    "name": "马尼萨莱斯",
					    "code": "MZL",
					    "kw": "ManizalesManizales",
					    "city": "马尼萨莱斯"
					},{
					    "name": "曼扎",
					    "code": "MJA",
					    "kw": "ManjaManja",
					    "city": "曼扎"
					},{
					    "name": "曼凯托",
					    "code": "MKT",
					    "kw": "MankatoMankato Municipal Apt",
					    "city": "曼凯托"
					},{
					    "name": "曼利温泉",
					    "code": "MLY",
					    "kw": "Manley Hot SpringsManley Hot Springs",
					    "city": "曼利温泉城"
					},{
					    "name": "马纳斯克里克",
					    "code": "MFP",
					    "kw": "Manners CreekManners Creek",
					    "city": "马纳斯克里克"
					},{
					    "name": "马诺夸里",
					    "code": "MKW",
					    "kw": "ManokwariManokwari",
					    "city": "马诺夸里"
					},{
					    "name": "马诺诺",
					    "code": "MNO",
					    "kw": "ManonoManono",
					    "city": "马诺诺"
					},{
					    "name": "马萨",
					    "code": "MNS",
					    "kw": "MansaMansa",
					    "city": "马萨"
					},{
					    "name": "曼斯顿",
					    "code": "MSE",
					    "kw": "ManstonManston",
					    "city": "曼斯顿"
					},{
					    "name": "曼塔",
					    "code": "MEC",
					    "kw": "MantaManta",
					    "city": "曼塔"
					},{
					    "name": "曼蒂奥",
					    "code": "MEO",
					    "kw": "ManteoManteo",
					    "city": "曼蒂奥"
					},{
					    "name": "马努斯岛",
					    "code": "MAS",
					    "kw": "Manus IslandManus Island",
					    "city": "马努斯岛"
					},{
					    "name": "曼萨尼罗",
					    "code": "ZLO",
					    "kw": "ManzanilloManzanillo",
					    "city": "曼萨尼罗"
					},{
					    "name": "曼萨尼罗",
					    "code": "MZO",
					    "kw": "ManzanilloManzanillo",
					    "city": "曼萨尼罗1"
					},{
					    "name": "曼齐尼",
					    "code": "MTS",
					    "kw": "ManziniManzini",
					    "city": "曼齐尼"
					},{
					    "name": "马奥",
					    "code": "AMO",
					    "kw": "MaoMao",
					    "city": "马奥"
					},{
					    "name": "马奥塔沙瓦依",
					    "code": "MXS",
					    "kw": "Maota Savail IsMaota Savail Is",
					    "city": "马奥塔沙瓦依"
					},{
					    "name": "马普托",
					    "code": "MPM",
					    "kw": "MaputoMaputo",
					    "city": "马普托"
					},{
					    "name": "马金乔",
					    "code": "MQD",
					    "kw": "MaquinchaoMaquinchao",
					    "city": "马金乔"
					},{
					    "name": "马德普拉塔",
					    "code": "MDQ",
					    "kw": "Mar del PlataMar del Plata",
					    "city": "马德普拉塔"
					},{
					    "name": "马拉洛奇斯",
					    "code": "MRE",
					    "kw": "Mara LodgesMara Lodges",
					    "city": "马拉罗奇斯"
					},{
					    "name": "马拉巴",
					    "code": "MAB",
					    "kw": "MarabaMaraba",
					    "city": "马拉巴"
					},{
					    "name": "马拉开波",
					    "code": "MAR",
					    "kw": "MaracaiboMaracaibo",
					    "city": "马拉开波"
					},{
					    "name": "马拉凯",
					    "code": "MYC",
					    "kw": "MaracayMaracay",
					    "city": "马拉凯"
					},{
					    "name": "马拉迪",
					    "code": "MFQ",
					    "kw": "MaradiMaradi",
					    "city": "马拉迪"
					},{
					    "name": "马拉基",
					    "code": "MZK",
					    "kw": "MarakeiMarakei",
					    "city": "马拉基"
					},{
					    "name": "马劳松德",
					    "code": "RUS",
					    "kw": "Marau IslandMarau Island",
					    "city": "马劳松德"
					},{
					    "name": "马布尔",
					    "code": "MYH",
					    "kw": "Marble CanyonMarble Canyon",
					    "city": "马布尔"
					},{
					    "name": "马雷",
					    "code": "MEE",
					    "kw": "MareMare",
					    "city": "马雷1"
					},{
					    "name": "默勒卜",
					    "code": "MYN",
					    "kw": "MarebMareb",
					    "city": "默勒卜"
					},{
					    "name": "马加里马",
					    "code": "MGG",
					    "kw": "MargarimaMargarima",
					    "city": "马加里马"
					},{
					    "name": "马盖特",
					    "code": "MGH",
					    "kw": "MargateMargate",
					    "city": "马盖特"
					},{
					    "name": "玛丽亚温泉",
					    "code": "MKA",
					    "kw": "Marianske LazneMarianske Lazne",
					    "city": "玛利亚温泉"
					},{
					    "name": "马里博",
					    "code": "MBX",
					    "kw": "MariborMaribor",
					    "city": "马里博"
					},{
					    "name": "玛丽-加朗特",
					    "code": "GBJ",
					    "kw": "Marie GalanteMarie Galante",
					    "city": "玛丽加朗特"
					},{
					    "name": "玛丽港",
					    "code": "MHQ",
					    "kw": "MariehamnMariehamn",
					    "city": "玛丽港1"
					},{
					    "name": "马林杜克",
					    "code": "MRQ",
					    "kw": "MarinduqueMarinduque",
					    "city": "马林杜克"
					},{
					    "name": "马林加",
					    "code": "MGF",
					    "kw": "MaringaMaringa",
					    "city": "马林加"
					},{
					    "name": "马里恩",
					    "code": "MWA",
					    "kw": "MarionMarion",
					    "city": "马里恩"
					},{
					    "name": "马里基塔",
					    "code": "MQU",
					    "kw": "MariquitaMariquita",
					    "city": "马里基塔"
					},{
					    "name": "埃斯蒂加里维亚元帅镇",
					    "code": "ESG",
					    "kw": "Mariscal EstigarribiaMariscal Estigarribia",
					    "city": "埃斯蒂加里维亚"
					},{
					    "name": "马里乌波尔",
					    "code": "MPW",
					    "kw": "MariupolMariupol",
					    "city": "马里乌波尔"
					},{
					    "name": "马尔伯勒",
					    "code": "MXG",
					    "kw": "MarlboroughMarlborough",
					    "city": "马尔伯勒"
					},{
					    "name": "马鲁安采特拉",
					    "code": "WMN",
					    "kw": "MaroantsetraMaroantsetra",
					    "city": "马鲁安采特拉"
					},{
					    "name": "马鲁阿",
					    "code": "MVR",
					    "kw": "MarouaMaroua",
					    "city": "马鲁阿"
					},{
					    "name": "马拉喀什",
					    "code": "RAK",
					    "kw": "MarrakechMarrakech",
					    "city": "马拉喀什"
					},{
					    "name": "马赛",
					    "code": "MRS",
					    "kw": "MarseilleMarseille",
					    "city": "马塞"
					},{
					    "name": "马什港",
					    "code": "MHH",
					    "kw": "Marsh HarbourMarsh Harbour",
					    "city": "马什港"
					},{
					    "name": "马歇尔",
					    "code": "MML",
					    "kw": "MarshallMarshall",
					    "city": "马-歇尔"
					},{
					    "name": "马撒葡萄园",
					    "code": "MVY",
					    "kw": "Martha's VineyardMartha's Vineyard",
					    "city": "马萨葡萄园"
					},{
					    "name": "马鲁迪",
					    "code": "MUR",
					    "kw": "MarudiMarudi",
					    "city": "马鲁迪"
					},{
					    "name": "玛丽港",
					    "code": "YMH",
					    "kw": "Mary's HarbourMary's Harbour",
					    "city": "玛丽港"
					},{
					    "name": "马雷",
					    "code": "MYP",
					    "kw": "MaryMary",
					    "city": "马雷"
					},{
					    "name": "马里斯维尔",
					    "code": "MYV",
					    "kw": "MarysvilleMarysville Yuba County Apt",
					    "city": "马里斯维尔"
					},{
					    "name": "马萨",
					    "code": "MBV",
					    "kw": "MasaMasa",
					    "city": "马萨1"
					},{
					    "name": "梅察达",
					    "code": "MTZ",
					    "kw": "MasadaMasada",
					    "city": "梅察达"
					},{
					    "name": "马萨西",
					    "code": "XMI",
					    "kw": "MasasiMasasi",
					    "city": "马萨西"
					},{
					    "name": "马斯巴特",
					    "code": "MBT",
					    "kw": "MasbateMasbate",
					    "city": "马斯巴特"
					},{
					    "name": "穆阿斯凯尔",
					    "code": "MUW",
					    "kw": "MascaraMascara",
					    "city": "穆阿斯凯尔"
					},{
					    "name": "马塞卢",
					    "code": "MSU",
					    "kw": "MaseruMaseru",
					    "city": "马塞卢"
					},{
					    "name": "马什哈德",
					    "code": "MHD",
					    "kw": "MashadMashad",
					    "city": "马什哈德"
					},{
					    "name": "马辛迪",
					    "code": "KCU",
					    "kw": "MasindiMasindi",
					    "city": "马辛迪"
					},{
					    "name": "马西拉",
					    "code": "MSH",
					    "kw": "MasirahMasirah",
					    "city": "马西拉"
					},{
					    "name": "马斯特顿",
					    "code": "MRO",
					    "kw": "MastertonMasterton",
					    "city": "马斯特顿"
					},{
					    "name": "马斯温哥",
					    "code": "MVZ",
					    "kw": "MasvingoMasvingo",
					    "city": "马斯温哥"
					},{
					    "name": "马塔迪",
					    "code": "MAT",
					    "kw": "MatadiMatadi",
					    "city": "马塔迪"
					},{
					    "name": "马太瓦",
					    "code": "MVT",
					    "kw": "MataivaMataiva",
					    "city": "马太瓦"
					},{
					    "name": "马塔姆",
					    "code": "MAX",
					    "kw": "MatamMatam",
					    "city": "马塔姆"
					},{
					    "name": "马塔莫罗斯",
					    "code": "MAM",
					    "kw": "MatamorosMatamoros",
					    "city": "马塔默洛斯"
					},{
					    "name": "马塔兰",
					    "code": "AMI",
					    "kw": "MataramMataram",
					    "city": "马塔兰"
					},{
					    "name": "马蒂",
					    "code": "MXI",
					    "kw": "MatiMati",
					    "city": "马蒂"
					},{
					    "name": "马托格罗索",
					    "code": "MTG",
					    "kw": "Mato GrossoMato Grosso",
					    "city": "马托格罗索"
					},{
					    "name": "马弗京",
					    "code": "MFK",
					    "kw": "MatsuMatsu",
					    "city": "马弗京"
					},{
					    "name": "马修斯里奇",
					    "code": "MWJ",
					    "kw": "Matthews RidgeMatthews Ridge",
					    "city": "马修斯里奇"
					},{
					    "name": "马图林",
					    "code": "MUN",
					    "kw": "MaturinMaturin",
					    "city": "马图林"
					},{
					    "name": "毛凯岛",
					    "code": "MUK",
					    "kw": "Mauke IslandMauke Island",
					    "city": "毛凯岛"
					},{
					    "name": "毛淡棉",
					    "code": "MNU",
					    "kw": "MaulmyineMaulmyine",
					    "city": "木淡棉"
					},{
					    "name": "毛梅里",
					    "code": "MOF",
					    "kw": "MaumereMaumere",
					    "city": "毛梅里"
					},{
					    "name": "马翁",
					    "code": "MUB",
					    "kw": "MaunMaun",
					    "city": "马翁"
					},{
					    "name": "莫皮蒂",
					    "code": "MAU",
					    "kw": "Maupiti IslandMaupiti Island",
					    "city": "莫皮蒂"
					},{
					    "name": "毛里求斯",
					    "code": "MRU",
					    "kw": "MauritiusMauritius",
					    "city": "毛里求斯"
					},{
					    "name": "马亚瓜纳",
					    "code": "MYG",
					    "kw": "MayaguanaMayaguana",
					    "city": "马亚瓜衲"
					},{
					    "name": "马亚圭斯",
					    "code": "MAZ",
					    "kw": "MayaguezMayaguez",
					    "city": "马亚圭斯"
					},{
					    "name": "马育姆巴",
					    "code": "MYB",
					    "kw": "MayoumbaMayoumba",
					    "city": "马育姆巴"
					},{
					    "name": "马扎里沙里夫",
					    "code": "MZR",
					    "kw": "Mazar-I-SharifMazar-I-Sharif",
					    "city": "马扎里沙里夫"
					},{
					    "name": "马萨特兰",
					    "code": "MZT",
					    "kw": "MazatlanMazatlan",
					    "city": "马萨特兰"
					},{
					    "name": "姆巴拉",
					    "code": "MMQ",
					    "kw": "MbalaMbala",
					    "city": "姆巴拉"
					},{
					    "name": "姆班姆巴纳基拉",
					    "code": "MBU",
					    "kw": "MbambanakiraMbambanakira",
					    "city": "姆班姆巴衲基拉"
					},{
					    "name": "姆班达卡",
					    "code": "MDK",
					    "kw": "MbandakaMbandaka",
					    "city": "姆班达卡"
					},{
					    "name": "姆巴拉拉",
					    "code": "MBQ",
					    "kw": "MbararaMbarara",
					    "city": "姆巴拉拉"
					},{
					    "name": "姆贝亚",
					    "code": "MBI",
					    "kw": "MbeyaMbeya",
					    "city": "姆贝亚"
					},{
					    "name": "姆布吉马伊",
					    "code": "MJM",
					    "kw": "Mbuji-MayiMbuji-Mayi",
					    "city": "姆布吉马伊"
					},{
					    "name": "麦库克",
					    "code": "MCK",
					    "kw": "McCookMcCook",
					    "city": "麦库克"
					},{
					    "name": "梅多莱克",
					    "code": "YLJ",
					    "kw": "Meadow LakeMeadow Lake",
					    "city": "梅多莱克"
					},{
					    "name": "米德维尔",
					    "code": "MEJ",
					    "kw": "MeadvilleMeadville",
					    "city": "米德维尔"
					},{
					    "name": "棉兰",
					    "code": "MES",
					    "kw": "MedanMedan",
					    "city": "棉兰"
					},{
					    "name": "E O HERE",
					    "code": "EOH",
					    "kw": "MedellinMedellin Enrique Olaya Herrerra Apt",
					    "city": "麦德林"
					},{
					    "name": "麦德林",
					    "code": "MDE",
					    "kw": "MedellinMedellin Jose Maria Cordova Intl",
					    "city": "麦德林"
					},{
					    "name": "梅迪辛哈特",
					    "code": "YXH",
					    "kw": "Medicine HatMedicine Hat",
					    "city": "梅迪辛哈特"
					},{
					    "name": "米卡萨拉",
					    "code": "MKR",
					    "kw": "MeekatharraMeekatharra",
					    "city": "米卡萨拉"
					},{
					    "name": "梅热沃",
					    "code": "MVV",
					    "kw": "MegeveMegeve",
					    "city": "梅热沃"
					},{
					    "name": "梅加乌里",
					    "code": "MEY",
					    "kw": "MeghauliMeghauli",
					    "city": "梅加乌里"
					},{
					    "name": "梅港",
					    "code": "MEH",
					    "kw": "MehamnMehamn",
					    "city": "梅港"
					},{
					    "name": "梅坎博",
					    "code": "MKB",
					    "kw": "MekamboMekambo",
					    "city": "梅吉特岛"
					},{
					    "name": "默卡讷瑟拉姆",
					    "code": "MKS",
					    "kw": "Mekane SelamMekane Selam",
					    "city": "梅坎博"
					},{
					    "name": "梅科尤克",
					    "code": "MYU",
					    "kw": "MekoryukMekoryuk",
					    "city": "默卡衲瑟拉姆"
					},{
					    "name": "图拉曼里",
					    "code": "MEL",
					    "kw": "MelbourneMelbourne Airport",
					    "city": "墨尔本"
					},{
					    "name": "BELBOURNE ESSENDO",
					    "code": "MEB",
					    "kw": "MelbourneMelbourne Essendon Apt",
					    "city": "墨尔本"
					},{
					    "name": "梅尔乔-德门科斯",
					    "code": "MCR",
					    "kw": "Melchor MencosMelchor Mencos",
					    "city": "梅兰瓜内"
					},{
					    "name": "梅利拉",
					    "code": "MLN",
					    "kw": "MelillaMelilla",
					    "city": "梅尔乔德门乔斯"
					},{
					    "name": "梅洛",
					    "code": "MLZ",
					    "kw": "MeloMelo",
					    "city": "梅利拉"
					},{
					    "name": "女满别",
					    "code": "MMB",
					    "kw": "MemambetsuMemambetsu",
					    "city": "梅洛"
					},{
					    "name": "孟菲斯",
					    "code": "MEM",
					    "kw": "MemphisMemphis International Apt",
					    "city": "孟菲斯"
					},{
					    "name": "马斯洛",
					    "code": "MZX",
					    "kw": "MenaMena",
					    "city": "马斯洛"
					},{
					    "name": "芒德",
					    "code": "MEN",
					    "kw": "MendeMende",
					    "city": "芒德"
					},{
					    "name": "门德斯",
					    "code": "MZD",
					    "kw": "MendezMendez",
					    "city": "门德斯"
					},{
					    "name": "曼德",
					    "code": "NDM",
					    "kw": "MendiMendi",
					    "city": "门多萨"
					},{
					    "name": "曼德",
					    "code": "MDU",
					    "kw": "MendiMendi",
					    "city": "曼德"
					},{
					    "name": "门多萨",
					    "code": "MDZ",
					    "kw": "MendozaMendoza",
					    "city": "梅诺米尼"
					},{
					    "name": "梅尼亚米亚",
					    "code": "MYX",
					    "kw": "MenyamyaMenyamya",
					    "city": "梅尼亚米亚"
					},{
					    "name": "马老奇",
					    "code": "MKQ",
					    "kw": "MeraukeMerauke",
					    "city": "马老奇"
					},{
					    "name": "默塞德",
					    "code": "MCE",
					    "kw": "MercedMerced Municipal Apt",
					    "city": "默塞德"
					},{
					    "name": "梅尔迪",
					    "code": "RDE",
					    "kw": "MerdeyMerdey",
					    "city": "梅尔迪"
					},{
					    "name": "梅里达",
					    "code": "MID",
					    "kw": "MeridaMerida",
					    "city": "梅里达1"
					},{
					    "name": "梅里达",
					    "code": "MRD",
					    "kw": "MeridaMerida",
					    "city": "梅里达"
					},{
					    "name": "默里迪恩",
					    "code": "MEI",
					    "kw": "MeridianMeridian",
					    "city": "默里迪恩"
					},{
					    "name": "默里姆布拉",
					    "code": "MIM",
					    "kw": "MerimbulaMerimbula",
					    "city": "默里姆布拉"
					},{
					    "name": "默卢纳",
					    "code": "MLV",
					    "kw": "MerlunaMerluna",
					    "city": "默卢纳"
					},{
					    "name": "梅里特",
					    "code": "YMB",
					    "kw": "MerrittMerritt",
					    "city": "梅里特"
					},{
					    "name": "丰盛港",
					    "code": "MEP",
					    "kw": "MersingMersing",
					    "city": "丰盛港"
					},{
					    "name": "梅萨",
					    "code": "MSC",
					    "kw": "MesaMesa Falcon Field Apt",
					    "city": "梅萨"
					},{
					    "name": "墨西拿",
					    "code": "MEZ",
					    "kw": "MessinaMessina",
					    "city": "墨西拿"
					},{
					    "name": "梅特拉卡特拉",
					    "code": "MTM",
					    "kw": "MetlakatlaMetlakatla",
					    "city": "梅特拉卡特拉"
					},{
					    "name": "墨西卡利",
					    "code": "MXL",
					    "kw": "MexicaliMexicali",
					    "city": "墨西卡里"
					},{
					    "name": "墨西哥城",
					    "code": "MEX",
					    "kw": "Mexico CityMexico City International Apt",
					    "city": "墨西哥城"
					},{
					    "name": "迈耶斯查克",
					    "code": "WMK",
					    "kw": "Meyers ChuckMeyers Chuck",
					    "city": "迈耶四查克"
					},{
					    "name": "姆富韦",
					    "code": "MFU",
					    "kw": "MfuweMfuwe",
					    "city": "姆富韦"
					},{
					    "name": "米安德里瓦祖",
					    "code": "ZVA",
					    "kw": "MiandrivazoMiandrivazo",
					    "city": "米安德里瓦祖"
					},{
					    "name": "米扬瓦利",
					    "code": "MWD",
					    "kw": "MianwaliMianwali",
					    "city": "米扬瓦利"
					},{
					    "name": "密执安",
					    "code": "MGC",
					    "kw": "Michigan CityMichigan City",
					    "city": "密执安"
					},{
					    "name": "米凯利",
					    "code": "MIK",
					    "kw": "MikkeliMikkeli",
					    "city": "米凯利"
					},{
					    "name": "米科诺斯",
					    "code": "JMK",
					    "kw": "MikonosMikonos",
					    "city": "米科诺斯1"
					},{
					    "name": "里奈特",
					    "code": "LIN",
					    "kw": "MilanMilan Linate Apt",
					    "city": "米兰"
					},{
					    "name": "MILAN MALPENSA",
					    "code": "MXP",
					    "kw": "MilanMilan Malpensa Apt",
					    "city": "米兰"
					},{
					    "name": "贝加莫",
					    "code": "BGY",
					    "kw": "MilanMilan Orio al Serio",
					    "city": "米兰"
					},{
					    "name": "米尔迪拉",
					    "code": "MQL",
					    "kw": "MilduraMildura",
					    "city": "米尔迪拉"
					},{
					    "name": "迈尔斯城",
					    "code": "MLS",
					    "kw": "Miles CityMiles City",
					    "city": "迈尔斯城"
					},{
					    "name": "米尔福德桑德",
					    "code": "MFN",
					    "kw": "Milford SoundMilford Sound",
					    "city": "米尔福德桑德"
					},{
					    "name": "米利岛",
					    "code": "MIJ",
					    "kw": "Mili IslandMili Island",
					    "city": "米利岛"
					},{
					    "name": "米林金比",
					    "code": "MGT",
					    "kw": "MilingimbiMilingimbi",
					    "city": "米林金比"
					},{
					    "name": "米利森特",
					    "code": "MLR",
					    "kw": "MillicentMillicent",
					    "city": "米利森特"
					},{
					    "name": "米洛斯",
					    "code": "MLO",
					    "kw": "MilosMilos",
					    "city": "米洛斯"
					},{
					    "name": "南大东岛",
					    "code": "MMD",
					    "kw": "Minami DaitoMinami Daito",
					    "city": "南大东岛"
					},{
					    "name": "米纳蒂特兰",
					    "code": "MTT",
					    "kw": "MinatitlanMinatitlan",
					    "city": "米那蒂特兰"
					},{
					    "name": "明迪克",
					    "code": "MXK",
					    "kw": "MindikMindik",
					    "city": "明蒂科"
					},{
					    "name": "明迪普塔纳",
					    "code": "MDP",
					    "kw": "MindiptanaMindiptana",
					    "city": "明蒂普塔纳"
					},{
					    "name": "矿水城",
					    "code": "MRV",
					    "kw": "Mineralnye VodyMineralnye Vody",
					    "city": "矿水城"
					},{
					    "name": "明季",
					    "code": "MZN",
					    "kw": "MinjMinj",
					    "city": "明季"
					},{
					    "name": "明拉顿",
					    "code": "XML",
					    "kw": "MinlatonMinlaton",
					    "city": "明拉顿"
					},{
					    "name": "明纳",
					    "code": "MXJ",
					    "kw": "MinnaMinna",
					    "city": "明纳"
					},{
					    "name": "MINI",
					    "code": "MIC",
					    "kw": "Minneapolis/St PaulMinneapolis Crystal Apt",
					    "city": "明尼阿波利斯"
					},{
					    "name": "MINIM",
					    "code": "JDT",
					    "kw": "Minneapolis/St PaulMinneapolis Downtown H/P",
					    "city": "明尼阿波利斯"
					},{
					    "name": "US",
					    "code": "FCM",
					    "kw": "Minneapolis/St PaulMinneapolis Flying Cloud Apt",
					    "city": "明尼阿波利斯"
					},{
					    "name": "明尼阿波利斯",
					    "code": "MSP",
					    "kw": "Minneapolis/St PaulMinneapolis International Apt",
					    "city": "明尼阿波利斯"
					},{
					    "name": "明尼帕",
					    "code": "MIN",
					    "kw": "MinnipaMinnipa",
					    "city": "明尼帕"
					},{
					    "name": "MINSK",
					    "code": "MHP",
					    "kw": "MinskMinsk International Apt 1",
					    "city": "明斯克"
					},{
					    "name": "明斯克",
					    "code": "MSQ",
					    "kw": "MinskMinsk International Apt 2",
					    "city": "明斯克"
					},{
					    "name": "明武尔",
					    "code": "MVX",
					    "kw": "MinvoulMinvoul",
					    "city": "明武尔"
					},{
					    "name": "密克隆",
					    "code": "MQC",
					    "kw": "MiquelonMiquelon",
					    "city": "密克隆"
					},{
					    "name": "北米拉赛马",
					    "code": "NTM",
					    "kw": "Miracema Do NorteMiracema Do Norte",
					    "city": "北米拉塞马"
					},{
					    "name": "米拉菲奥里",
					    "code": "MFS",
					    "kw": "MirafloresMiraflores",
					    "city": "米拉菲奥利"
					},{
					    "name": "查塔姆",
					    "code": "YCH",
					    "kw": "MiramichiMiramichi",
					    "city": "查塔姆"
					},{
					    "name": "美里",
					    "code": "MYY",
					    "kw": "MiriMiri",
					    "city": "美里"
					},{
					    "name": "米尔布尔哈斯",
					    "code": "MPD",
					    "kw": "Mirpur KhasMirpur Khas",
					    "city": "米尔布尔哈斯"
					},{
					    "name": "三泽",
					    "code": "MSJ",
					    "kw": "MisawaMisawa",
					    "city": "三泽"
					},{
					    "name": "米西马岛",
					    "code": "MIS",
					    "kw": "Misima IslandMisima Island",
					    "city": "米西马岛"
					},{
					    "name": "米苏拉",
					    "code": "MSO",
					    "kw": "MissoulaMissoula",
					    "city": "米素拉"
					},{
					    "name": "米苏拉塔",
					    "code": "MRA",
					    "kw": "MisurataMisurata",
					    "city": "米素拉塔"
					},{
					    "name": "米切尔",
					    "code": "MHE",
					    "kw": "MitchellMitchell",
					    "city": "米图"
					},{
					    "name": "米蒂亚罗岛",
					    "code": "MOI",
					    "kw": "Mitiaro IslandMitiaro Island",
					    "city": "米齐克"
					},{
					    "name": "马吉",
					    "code": "MJI",
					    "kw": "MitigaMitiga",
					    "city": "马吉"
					},{
					    "name": "米图",
					    "code": "MVP",
					    "kw": "MituMitu",
					    "city": "三宅岛"
					},{
					    "name": "米齐克",
					    "code": "MZC",
					    "kw": "MitzicMitzic",
					    "city": "宫古"
					},{
					    "name": "三宅岛",
					    "code": "MYE",
					    "kw": "Miyake JimaMiyake Jima",
					    "city": "工崎"
					},{
					    "name": "宫古",
					    "code": "MMY",
					    "kw": "Miyako JimaMiyako Jima",
					    "city": "米赞特费里"
					},{
					    "name": "宫崎",
					    "code": "KMI",
					    "kw": "MiyazakiMiyazaki",
					    "city": "姆坎巴蒂"
					},{
					    "name": "米赞特费里",
					    "code": "MTF",
					    "kw": "Mizan TeferiMizan Teferi",
					    "city": "姆马巴托"
					},{
					    "name": "姆坎巴蒂",
					    "code": "MBM",
					    "kw": "MkambatiMkambati",
					    "city": "默阿"
					},{
					    "name": "姆马巴托",
					    "code": "MBD",
					    "kw": "MmabathoMmabatho",
					    "city": "莫阿布"
					},{
					    "name": "摩城",
					    "code": "MQN",
					    "kw": "Mo I RanaMo I Rana",
					    "city": "摩城"
					},{
					    "name": "莫阿",
					    "code": "MOA",
					    "kw": "MoaMoa",
					    "city": "莫阿比"
					},{
					    "name": "莫阿布",
					    "code": "CNY",
					    "kw": "MoabMoab",
					    "city": "莫阿拉"
					},{
					    "name": "莫阿比",
					    "code": "MGX",
					    "kw": "MoabiMoabi",
					    "city": "莫阿纳马尼"
					},{
					    "name": "莫安达",
					    "code": "MNB",
					    "kw": "MoandaMoanda",
					    "city": "莫安达"
					},{
					    "name": "莫比尔",
					    "code": "MOB",
					    "kw": "MobileMobile Municipal Apt",
					    "city": "莫比尔"
					},{
					    "name": "莫辛布瓦-达普拉亚",
					    "code": "MZB",
					    "kw": "Mocimboa da PraiaMocimboa da Praia",
					    "city": "莫星布瓦达普拉"
					},{
					    "name": "比来加尔索",
					    "code": "VGZ",
					    "kw": "MocoaMocoa",
					    "city": "比亚加尔索"
					},{
					    "name": "莫德斯托",
					    "code": "MOD",
					    "kw": "ModestoModesto",
					    "city": "莫的斯托"
					},{
					    "name": "摩加迪沙",
					    "code": "MGQ",
					    "kw": "MogadishuMogadishu",
					    "city": "莫加迪沙"
					},{
					    "name": "摩亨朱达罗",
					    "code": "MJD",
					    "kw": "MohenjodaroMohenjodaro",
					    "city": "摩亨朱达罗"
					},{
					    "name": "莫哈韦",
					    "code": "MHV",
					    "kw": "MojaveMojave",
					    "city": "莫哈韦"
					},{
					    "name": "莫霍特隆",
					    "code": "MKH",
					    "kw": "MokhotlongMokhotlong",
					    "city": "莫或特隆"
					},{
					    "name": "莫尔德",
					    "code": "MOL",
					    "kw": "MoldeMolde",
					    "city": "莫尔的"
					},{
					    "name": "莫林",
					    "code": "MLI",
					    "kw": "MolineMoline",
					    "city": "莫林"
					},{
					    "name": "蒙巴萨",
					    "code": "MBA",
					    "kw": "MombasaMombasa",
					    "city": "蒙巴撒"
					},{
					    "name": "莫纳斯提尔",
					    "code": "MIR",
					    "kw": "MonastirMonastir",
					    "city": "莫纳斯提尔"
					},{
					    "name": "门别",
					    "code": "MBE",
					    "kw": "MonbetsuMonbetsu",
					    "city": "门别"
					},{
					    "name": "蒙克洛瓦",
					    "code": "LOV",
					    "kw": "MonclovaMonclova",
					    "city": "蒙克洛瓦"
					},{
					    "name": "蒙福特",
					    "code": "MFB",
					    "kw": "MonfortMonfort",
					    "city": "蒙福特"
					},{
					    "name": "孟萨",
					    "code": "MOG",
					    "kw": "Mong HsatMong Hsat",
					    "city": "蒙撒"
					},{
					    "name": "孟东",
					    "code": "MGK",
					    "kw": "Mong TonMong Ton",
					    "city": "孟东"
					},{
					    "name": "蒙戈",
					    "code": "MVO",
					    "kw": "MongoMongo",
					    "city": "蒙戈"
					},{
					    "name": "芒古",
					    "code": "MNR",
					    "kw": "MonguMongu",
					    "city": "芒古"
					},{
					    "name": "芒基贝",
					    "code": "MYZ",
					    "kw": "Monkey BayMonkey Bay",
					    "city": "芒基贝"
					},{
					    "name": "猴山",
					    "code": "MYM",
					    "kw": "Monkey MountainMonkey Mountain",
					    "city": "猴山"
					},{
					    "name": "莫诺岛",
					    "code": "MNY",
					    "kw": "MonoMono",
					    "city": "莫诺岛"
					},{
					    "name": "门罗",
					    "code": "MLU",
					    "kw": "MonroeMonroe",
					    "city": "门罗"
					},{
					    "name": "MONROVIA ROBERTS",
					    "code": "ROB",
					    "kw": "MonroviaMonrovia Roberts International Apt",
					    "city": "蒙罗维亚"
					},{
					    "name": "蒙罗维亚",
					    "code": "MLW",
					    "kw": "MonroviaMonrovia Sprigg-Payne Apt",
					    "city": "蒙罗维亚"
					},{
					    "name": "蒙蒂阿莱格里",
					    "code": "MTE",
					    "kw": "Monte AlegreMonte Alegre",
					    "city": "蒙蒂阿莱戈里"
					},{
					    "name": "蒙特卡洛",
					    "code": "MCM",
					    "kw": "Monte CarloMonte Carlo",
					    "city": "蒙特卡洛"
					},{
					    "name": "蒙特卡塞罗斯",
					    "code": "MCS",
					    "kw": "Monte CaserosMonte Caseros",
					    "city": "蒙特卡塞洛斯"
					},{
					    "name": "蒙特利瓦诺",
					    "code": "MTB",
					    "kw": "Monte LibanoMonte Libano",
					    "city": "蒙特里瓦诺"
					},{
					    "name": "蒙特哥贝",
					    "code": "MBJ",
					    "kw": "Montego BayMontego Bay",
					    "city": "蒙特哥贝"
					},{
					    "name": "蒙特雷",
					    "code": "MRY",
					    "kw": "MontereyMonterey Peninsula Apt",
					    "city": "卡迈尔"
					},{
					    "name": "蒙特里亚",
					    "code": "MTR",
					    "kw": "MonteriaMonteria",
					    "city": "蒙特里亚"
					},{
					    "name": "蒙特雷",
					    "code": "MTY",
					    "kw": "MonterreyMonterrey General Mariano Escobedo Apt",
					    "city": "蒙特雷"
					},{
					    "name": "蒙特斯  克拉劳斯",
					    "code": "MOC",
					    "kw": "Montes ClarosMontes Claros",
					    "city": "蒙特斯"
					},{
					    "name": "蒙得维的亚",
					    "code": "MVD",
					    "kw": "MontevideoMontevideo",
					    "city": "蒙的维的亚"
					},{
					    "name": "蒙哥马利",
					    "code": "MGM",
					    "kw": "MontgomeryMontgomery Dannelly Field",
					    "city": "蒙哥马利"
					},{
					    "name": "蒙吕松",
					    "code": "MCU",
					    "kw": "MontluconMontlucon",
					    "city": "蒙吕松"
					},{
					    "name": "蒙特罗斯",
					    "code": "MTJ",
					    "kw": "MontroseMontrose",
					    "city": "蒙特洛斯"
					},{
					    "name": "蒙巴",
					    "code": "MOO",
					    "kw": "MoombaMoomba",
					    "city": "蒙巴"
					},{
					    "name": "莫雷阿",
					    "code": "MOZ",
					    "kw": "MooreaMoorea",
					    "city": "莫雷阿"
					},{
					    "name": "莫普提",
					    "code": "MZI",
					    "kw": "MoptiMopti",
					    "city": "莫普提"
					},{
					    "name": "莫拉",
					    "code": "MXX",
					    "kw": "MoraMora",
					    "city": "莫拉"
					},{
					    "name": "穆拉费努贝",
					    "code": "TVA",
					    "kw": "MorafenobeMorafenobe",
					    "city": "穆拉费努贝"
					},{
					    "name": "莫尔黑德",
					    "code": "MHY",
					    "kw": "MoreheadMorehead",
					    "city": "莫尔黑德"
					},{
					    "name": "莫雷利亚",
					    "code": "MLM",
					    "kw": "MoreliaMorelia",
					    "city": "莫雷利亚"
					},{
					    "name": "莫里查尔",
					    "code": "MHF",
					    "kw": "MorichalMorichal",
					    "city": "摩利查尔"
					},{
					    "name": "莫尔莱",
					    "code": "MXN",
					    "kw": "MorlaixMorlaix",
					    "city": "莫尔莱"
					},{
					    "name": "莫罗贝",
					    "code": "OBM",
					    "kw": "MorobeMorobe",
					    "city": "莫洛贝"
					},{
					    "name": "穆龙贝",
					    "code": "MXM",
					    "kw": "MorombeMorombe",
					    "city": "穆龙贝"
					},{
					    "name": "穆龙达瓦",
					    "code": "MOQ",
					    "kw": "MorondavaMorondava",
					    "city": "穆龙达瓦"
					},{
					    "name": "莫罗尼",
					    "code": "YVA",
					    "kw": "MoroniMoroni Iconi Apt",
					    "city": "莫洛尼"
					},{
					    "name": "MORONI HAHAYA",
					    "code": "HAH",
					    "kw": "MoroniMoroni International Prince Said",
					    "city": "莫洛尼"
					},{
					    "name": "莫罗泰岛",
					    "code": "OTI",
					    "kw": "Morotai IslandMorotai Island",
					    "city": "莫洛太岛"
					},{
					    "name": "贝科沃",
					    "code": "BKA",
					    "kw": "MoscowMoscow Bykovo Apt",
					    "city": "莫斯科"
					},{
					    "name": "MOSCOW DOMODEDOVE",
					    "code": "DME",
					    "kw": "MoscowMoscow Domodedovo Apt",
					    "city": "莫斯科"
					},{
					    "name": "谢列梅捷沃",
					    "code": "SVO",
					    "kw": "MoscowMoscow Sheremetyevo Apt",
					    "city": "莫斯科"
					},{
					    "name": "MOSCOW VNUKOVO",
					    "code": "VKO",
					    "kw": "MoscowMoscow Vnukovo Apt",
					    "city": "莫斯科"
					},{
					    "name": "莫舍恩",
					    "code": "MJF",
					    "kw": "MosjoenMosjoen",
					    "city": "莫舍恩"
					},{
					    "name": "莫森焦",
					    "code": "MSX",
					    "kw": "MossendjoMossendjo",
					    "city": "莫森蕉"
					},{
					    "name": "莫斯塔尔",
					    "code": "OMO",
					    "kw": "MostarMostar",
					    "city": "莫斯塔尔"
					},{
					    "name": "莫什泰鲁什",
					    "code": "MTI",
					    "kw": "MosteirosMosteiros",
					    "city": "莫什泰鲁什"
					},{
					    "name": "摩苏尔",
					    "code": "OSM",
					    "kw": "MosulMosul",
					    "city": "摩苏尔"
					},{
					    "name": "莫塔拉瓦",
					    "code": "MTV",
					    "kw": "Mota LavaMota Lava",
					    "city": "摩塔拉瓦"
					},{
					    "name": "莫塔",
					    "code": "OTA",
					    "kw": "MotaMota",
					    "city": "摩塔"
					},{
					    "name": "莫图伊卡",
					    "code": "MZP",
					    "kw": "MotuekaMotueka",
					    "city": "摩图伊卡"
					},{
					    "name": "穆杰里亚",
					    "code": "MOM",
					    "kw": "MoudjeriaMoudjeria",
					    "city": "穆杰里亚"
					},{
					    "name": "穆古卢",
					    "code": "GUV",
					    "kw": "MouguluMougulu",
					    "city": "穆古卢"
					},{
					    "name": "穆伊拉",
					    "code": "MJL",
					    "kw": "MouilaMouila",
					    "city": "穆伊拉"
					},{
					    "name": "莫尔特里",
					    "code": "MGR",
					    "kw": "MoultrieMoultrie Thomasville Apt",
					    "city": "摩尔特里"
					},{
					    "name": "蒙杜",
					    "code": "MQQ",
					    "kw": "MoundouMoundou",
					    "city": "蒙杜"
					},{
					    "name": "芒特奥厄",
					    "code": "UAE",
					    "kw": "Mount AueMount Aue",
					    "city": "芒特奥厄"
					},{
					    "name": "芒特甘比尔",
					    "code": "MGB",
					    "kw": "Mount GambierMount Gambier",
					    "city": "芒特甘比尔"
					},{
					    "name": "芒特哈根",
					    "code": "HGU",
					    "kw": "Mount HagenMount Hagen",
					    "city": "芒特哈根"
					},{
					    "name": "芒特艾萨",
					    "code": "ISA",
					    "kw": "Mount IsaMount Isa",
					    "city": "芒特艾萨"
					},{
					    "name": "芒廷霍姆",
					    "code": "WMH",
					    "kw": "Mountain HomeMountain Home",
					    "city": "芒延霍姆"
					},{
					    "name": "芒廷村",
					    "code": "MOU",
					    "kw": "Mountain VillageMountain Village",
					    "city": "芒延村"
					},{
					    "name": "莫亚莱",
					    "code": "MYS",
					    "kw": "MoyaleMoyale",
					    "city": "莫亚莱"
					},{
					    "name": "莫约班巴",
					    "code": "MBP",
					    "kw": "MoyobambaMoyobamba",
					    "city": "莫约班巴"
					},{
					    "name": "姆巴查",
					    "code": "MPA",
					    "kw": "MpachaMpacha",
					    "city": "姆巴查"
					},{
					    "name": "芒特普莱森特",
					    "code": "MSD",
					    "kw": "Mt PleasantMt Pleasant",
					    "city": "蒙特普莱森特"
					},{
					    "name": "姆特瓦拉",
					    "code": "MYW",
					    "kw": "MtwaraMtwara",
					    "city": "姆特瓦拉"
					},{
					    "name": "穆埃奥",
					    "code": "PDC",
					    "kw": "MueoMueo",
					    "city": "穆埃奥"
					},{
					    "name": "穆伊",
					    "code": "MUJ",
					    "kw": "MuiMui",
					    "city": "穆伊"
					},{
					    "name": "穆赫拉斯",
					    "code": "UKR",
					    "kw": "MukeirasMukeiras",
					    "city": "穆赫拉斯"
					},{
					    "name": "穆利亚",
					    "code": "LII",
					    "kw": "MuliaMulia",
					    "city": "穆里亚"
					},{
					    "name": "木尔坦",
					    "code": "MUX",
					    "kw": "MultanMultan",
					    "city": "木尔坦"
					},{
					    "name": "孟买",
					    "code": "BOM",
					    "kw": "MumbaiMumbai",
					    "city": "孟买"
					},{
					    "name": "穆米亚斯",
					    "code": "MUM",
					    "kw": "MumiasMumias",
					    "city": "木米亚斯"
					},{
					    "name": "曼西",
					    "code": "MIE",
					    "kw": "MuncieMuncie",
					    "city": "曼西"
					},{
					    "name": "蒙达",
					    "code": "MUA",
					    "kw": "MundaMunda",
					    "city": "蒙达"
					},{
					    "name": "芒杰兰尼",
					    "code": "MNE",
					    "kw": "MungeranieMungeranie",
					    "city": "芒杰兰尼"
					},{
					    "name": "奥格斯堡",
					    "code": "AGB",
					    "kw": "MunichMunich Augsburg Apt",
					    "city": "慕尼黑"
					},{
					    "name": "慕尼黑雷姆",
					    "code": "MUC",
					    "kw": "MunichMunich International Airport",
					    "city": "慕尼黑"
					},{
					    "name": "蒙斯特",
					    "code": "FMO",
					    "kw": "MunsterMunster",
					    "city": "蒙斯特"
					},{
					    "name": "穆尔西亚",
					    "code": "MJV",
					    "kw": "MurciaMurcia",
					    "city": "穆尔西亚"
					},{
					    "name": "摩尔曼斯科",
					    "code": "MMK",
					    "kw": "MurmanskMurmansk",
					    "city": "莫尔曼斯科"
					},{
					    "name": "马斯喀特",
					    "code": "MCT",
					    "kw": "MuscatMuscat",
					    "city": "马斯咯特"
					},{
					    "name": "佛罗伦萨",
					    "code": "MSL",
					    "kw": "Muscle ShoalsMuscle Shoals",
					    "city": "佛罗伦萨"
					},{
					    "name": "穆索马",
					    "code": "MUZ",
					    "kw": "MusomaMusoma",
					    "city": "穆索马1"
					},{
					    "name": "穆绍",
					    "code": "MWU",
					    "kw": "MussauMussau",
					    "city": "穆绍"
					},{
					    "name": "马斯蒂克",
					    "code": "MQS",
					    "kw": "MustiqueMustique",
					    "city": "马斯蒂克"
					},{
					    "name": "穆廷",
					    "code": "MUF",
					    "kw": "MutingMuting",
					    "city": "穆延"
					},{
					    "name": "穆扎法拉巴德",
					    "code": "MFG",
					    "kw": "MuzaffarabadMuzaffarabad",
					    "city": "穆扎法拉巴德"
					},{
					    "name": "姆万扎",
					    "code": "MWZ",
					    "kw": "MwanzaMwanza",
					    "city": "姆万扎"
					},{
					    "name": "丹老",
					    "code": "MGZ",
					    "kw": "MyeikMyeik",
					    "city": "丹老"
					},{
					    "name": "密支那",
					    "code": "MYT",
					    "kw": "MyitkyinaMyitkyina",
					    "city": "密支那"
					},{
					    "name": "默特尔比奇",
					    "code": "MYR",
					    "kw": "Myrtle BeachMyrtle Beach AFB",
					    "city": "默特尔比奇"
					},{
					    "name": "迈索尔",
					    "code": "MYQ",
					    "kw": "MysoreMysore",
					    "city": "迈索尔"
					},{
					    "name": "米蒂利尼",
					    "code": "MJT",
					    "kw": "MytileneMytilene",
					    "city": "密蒂里尼"
					},{
					    "name": "米湖",
					    "code": "MVA",
					    "kw": "MyvatnMyvatn",
					    "city": "密湖"
					},{
					    "name": "姆占姆巴",
					    "code": "MZF",
					    "kw": "MzambaMzamba",
					    "city": "姆占姆巴"
					},{
					    "name": "姆祖祖",
					    "code": "ZZU",
					    "kw": "MzuzuMzuzu",
					    "city": "姆祖祖"
					},{
					    "name": "恩泽托",
					    "code": "ARZ",
					    "kw": "N'ZetoN'Zeto",
					    "city": "恩则托"
					},{
					    "name": "恩代恩代",
					    "code": "KDN",
					    "kw": "N'dendeN'dende",
					    "city": "恩代恩代"
					},{
					    "name": "恩乔莱",
					    "code": "KDJ",
					    "kw": "N'djoleN'djole",
					    "city": "恩乔菜"
					},{
					    "name": "卡马河畔切尔内",
					    "code": "NBC",
					    "kw": "Naberevnye ChelnyNaberevnye Chelny",
					    "city": "卡马河畔切尔内"
					},{
					    "name": "纳比雷",
					    "code": "NBX",
					    "kw": "NabireNabire",
					    "city": "纳比雷"
					},{
					    "name": "纳钦吉阿",
					    "code": "NCH",
					    "kw": "NachingweaNachingwea",
					    "city": "纳钦圭阿"
					},{
					    "name": "纳迪",
					    "code": "NAN",
					    "kw": "NadiNadi",
					    "city": "纳迪"
					},{
					    "name": "那加",
					    "code": "WNP",
					    "kw": "NagaNaga",
					    "city": "那加"
					},{
					    "name": "空港",
					    "code": "NGS",
					    "kw": "NagasakiNagasaki",
					    "city": "长崎"
					},{
					    "name": "名古屋",
					    "code": "NGO",
					    "kw": "NagoyaNagoya",
					    "city": "名古屋"
					},{
					    "name": "那格浦尔",
					    "code": "NAG",
					    "kw": "NagpurNagpur",
					    "city": "那洛普尔"
					},{
					    "name": "那霸",
					    "code": "NAH",
					    "kw": "NahaNaha",
					    "city": "那霸"
					},{
					    "name": "内恩",
					    "code": "YDP",
					    "kw": "NainNain",
					    "city": "内恩"
					},{
					    "name": "内罗毕",
					    "code": "NBO",
					    "kw": "NairobiNairobi Jomo Kenyatta International Apt",
					    "city": "内罗毕"
					},{
					    "name": "NAIROBI WILSON",
					    "code": "WIL",
					    "kw": "NairobiNairobi Wilson Apt",
					    "city": "内罗毕"
					},{
					    "name": "佛统",
					    "code": "KOP",
					    "kw": "Nakhon PhanomNakhon Phanom",
					    "city": "佛统"
					},{
					    "name": "呵叻",
					    "code": "NAK",
					    "kw": "Nakhon RatchasimaNakhon Ratchasima",
					    "city": "呵呖"
					},{
					    "name": "那空是贪吗叻",
					    "code": "NST",
					    "kw": "Nakhon Si ThammaratNakhon Si Thammarat",
					    "city": "那空是贪马咖"
					},{
					    "name": "纳马塔奈",
					    "code": "ATN",
					    "kw": "NamatanaiNamatanai",
					    "city": "纳马塔奈"
					},{
					    "name": "纳莫里克岛",
					    "code": "NDK",
					    "kw": "Namdrik IslandNamdrik Island",
					    "city": "纳莫里克岛"
					},{
					    "name": "纳米比",
					    "code": "MSZ",
					    "kw": "NamibeNamibe",
					    "city": "纳米贝"
					},{
					    "name": "楠勒阿",
					    "code": "NAM",
					    "kw": "NamleaNamlea",
					    "city": "楠勒阿"
					},{
					    "name": "楠普拉",
					    "code": "APL",
					    "kw": "NampulaNampula",
					    "city": "楠普拉"
					},{
					    "name": "南桑",
					    "code": "NMS",
					    "kw": "NamsangNamsang",
					    "city": "楠桑"
					},{
					    "name": "纳姆索斯",
					    "code": "OSY",
					    "kw": "NamsosNamsos",
					    "city": "纳姆索斯"
					},{
					    "name": "南渡",
					    "code": "NMT",
					    "kw": "NamtuNamtu",
					    "city": "南渡"
					},{
					    "name": "纳穆托尼",
					    "code": "NNI",
					    "kw": "NamutoniNamutoni",
					    "city": "纳穆托尼"
					},{
					    "name": "难府",
					    "code": "NNT",
					    "kw": "NanNan",
					    "city": "南府"
					},{
					    "name": "楠尼西维克",
					    "code": "YSR",
					    "kw": "NanisivikNanisivik",
					    "city": "南尼锡维克"
					},{
					    "name": "白滨",
					    "code": "SHM",
					    "kw": "Nanki ShirahamaNanki Shirahama",
					    "city": "白滨"
					},{
					    "name": "南吉纳",
					    "code": "NKN",
					    "kw": "NankinaNankina",
					    "city": "南吉纳"
					},{
					    "name": "纳诺塔利克",
					    "code": "JNN",
					    "kw": "NanortalikNanortalik",
					    "city": "纳诺塔利克"
					},{
					    "name": "南特",
					    "code": "NTE",
					    "kw": "NantesNantes Atlantique Airport",
					    "city": "南特"
					},{
					    "name": "楠塔基特",
					    "code": "ACK",
					    "kw": "NantucketNantucket",
					    "city": "南塔基特"
					},{
					    "name": "纳努基",
					    "code": "NNU",
					    "kw": "NanuqueNanuque",
					    "city": "纳纽基"
					},{
					    "name": "纳帕",
					    "code": "APC",
					    "kw": "NapaNapa",
					    "city": "纳帕"
					},{
					    "name": "纳皮尔",
					    "code": "NPE",
					    "kw": "Napier-HastingsNapier-Hastings",
					    "city": "黑斯廷斯"
					},{
					    "name": "那不勒斯",
					    "code": "NAP",
					    "kw": "NaplesNaples Capodichino Apt",
					    "city": "那布勒斯"
					},{
					    "name": "MEPGE",
					    "code": "ZMI",
					    "kw": "NaplesNaples Mergellina Rail Station",
					    "city": "那布勒斯"
					},{
					    "name": "那普卡岛",
					    "code": "NAU",
					    "kw": "Napuka IslandNapuka Island",
					    "city": "那普卡岛"
					},{
					    "name": "纳拉",
					    "code": "NRM",
					    "kw": "NaraNara",
					    "city": "那拉"
					},{
					    "name": "那拉提瓦",
					    "code": "NAW",
					    "kw": "NarathiwatNarathiwat",
					    "city": "那拉塔瓦"
					},{
					    "name": "纳雷",
					    "code": "NAR",
					    "kw": "NareNare",
					    "city": "那雷"
					},{
					    "name": "纳赫萨克",
					    "code": "JNS",
					    "kw": "NarsaqNarsaq",
					    "city": "纳赫萨克"
					},{
					    "name": "纳萨尔苏瓦克",
					    "code": "UAK",
					    "kw": "NarsarsuaqNarsarsuaq",
					    "city": "那撒尔苏瓦克"
					},{
					    "name": "纳尔维克",
					    "code": "NVK",
					    "kw": "NarvikNarvik",
					    "city": "纳尔维尔"
					},{
					    "name": "诺什维尔",
					    "code": "BNA",
					    "kw": "NashvilleNashville",
					    "city": "纳什维尔"
					},{
					    "name": "纳济克",
					    "code": "ISK",
					    "kw": "NasikNasik",
					    "city": "纳济克"
					},{
					    "name": "拿骚",
					    "code": "NAS",
					    "kw": "NassauNassau International Apt",
					    "city": "拿骚"
					},{
					    "name": "NASSAU PARADISE I",
					    "code": "PID",
					    "kw": "NassauNassau Paradise Island",
					    "city": "拿骚"
					},{
					    "name": "NASSAU SPB",
					    "code": "WZY",
					    "kw": "NassauNassau SPB",
					    "city": "拿骚"
					},{
					    "name": "纳蒂廷古",
					    "code": "NAE",
					    "kw": "NatitingouNatitingou",
					    "city": "纳蒂延古"
					},{
					    "name": "瑙鲁岛",
					    "code": "INU",
					    "kw": "Nauru IslandNauru Island",
					    "city": "瑙鲁岛"
					},{
					    "name": "纳韦甘蒂斯",
					    "code": "NVT",
					    "kw": "NavegantesNavegantes",
					    "city": "纳韦甘蒂斯"
					},{
					    "name": "纳瓦布沙",
					    "code": "WNS",
					    "kw": "NawabshahNawabshah",
					    "city": "纳瓦布沙阿"
					},{
					    "name": "恩代莱",
					    "code": "NDL",
					    "kw": "NdeleNdele",
					    "city": "恩代莱"
					},{
					    "name": "恩贾梅纳",
					    "code": "NDJ",
					    "kw": "NdjamenaNdjamena",
					    "city": "恩贾梅纳"
					},{
					    "name": "恩多拉",
					    "code": "NLA",
					    "kw": "NdolaNdola",
					    "city": "恩多拉"
					},{
					    "name": "内科切阿",
					    "code": "NEC",
					    "kw": "NecocheaNecochea",
					    "city": "内克切阿"
					},{
					    "name": "纳科克利",
					    "code": "NCI",
					    "kw": "NecocliNecocli",
					    "city": "内科克利"
					},{
					    "name": "东格陵兰",
					    "code": "CNP",
					    "kw": "Neerlerit InaatNeerlerit Inaat",
					    "city": "东格陵兰"
					},{
					    "name": "内加热",
					    "code": "GXG",
					    "kw": "NegageNegage",
					    "city": "内加热"
					},{
					    "name": "内干博",
					    "code": "GBF",
					    "kw": "NegarboNegarbo",
					    "city": "内干伯"
					},{
					    "name": "内格里尔",
					    "code": "NEG",
					    "kw": "NegrilNegril",
					    "city": "内格里尔"
					},{
					    "name": "内瓦",
					    "code": "NVA",
					    "kw": "NeivaNeiva",
					    "city": "内瓦"
					},{
					    "name": "内基兰",
					    "code": "EAM",
					    "kw": "NejranNejran",
					    "city": "内基兰"
					},{
					    "name": "内格默特",
					    "code": "NEK",
					    "kw": "NekemtNekemt",
					    "city": "内格默特"
					},{
					    "name": "涅马",
					    "code": "EMN",
					    "kw": "NemaNema",
					    "city": "捏马"
					},{
					    "name": "尼泊尔根杰",
					    "code": "KEP",
					    "kw": "NepalganjNepalganj",
					    "city": "尼波尔根杰"
					},{
					    "name": "内乌肯",
					    "code": "NQN",
					    "kw": "NeuquenNeuquen",
					    "city": "内乌肯"
					},{
					    "name": "内韦尔",
					    "code": "NVS",
					    "kw": "NeversNevers",
					    "city": "内韦尔"
					},{
					    "name": "新贝德福德",
					    "code": "EWB",
					    "kw": "New BedfordNew Bedford",
					    "city": "福尔里弗"
					},{
					    "name": "纽黑文",
					    "code": "HVN",
					    "kw": "New HavenNew Haven",
					    "city": "纽黑文"
					},{
					    "name": "新伦敦",
					    "code": "GON",
					    "kw": "New London/GrotonNew London/Groton",
					    "city": "格罗顿"
					},{
					    "name": "纽卡斯尔",
					    "code": "NCS",
					    "kw": "NewcastleNewcastle",
					    "city": "纽卡斯尔2"
					},{
					    "name": "纽卡斯尔",
					    "code": "NCL",
					    "kw": "NewcastleNewcastle",
					    "city": "纽卡斯尔1"
					},{
					    "name": "纽波特纽斯",
					    "code": "PHF",
					    "kw": "Newport NewsNewport News",
					    "city": "汗普顿"
					},{
					    "name": "纽基",
					    "code": "NQY",
					    "kw": "NewquayNewquay",
					    "city": "纽基"
					},{
					    "name": "内韦利",
					    "code": "NVY",
					    "kw": "NeyveliNeyveli",
					    "city": "内韦利"
					},{
					    "name": "恩冈代雷",
					    "code": "NGE",
					    "kw": "NgaoundereNgaoundere",
					    "city": "恩刚代类"
					},{
					    "name": "恩高岛",
					    "code": "NGI",
					    "kw": "Ngau IslandNgau Island",
					    "city": "恩高岛"
					},{
					    "name": "努库尔",
					    "code": "RPM",
					    "kw": "NgukurrNgukurr",
					    "city": "努库尔"
					},{
					    "name": "尼亚美",
					    "code": "NIM",
					    "kw": "NiameyNiamey",
					    "city": "尼亚美"
					},{
					    "name": "拉马卡拉",
					    "code": "LRL",
					    "kw": "NiamtougouNiamtougou",
					    "city": "拉马卡拉"
					},{
					    "name": "尼卡罗",
					    "code": "ICR",
					    "kw": "NicaroNicaro",
					    "city": "尼卡罗"
					},{
					    "name": "尼斯",
					    "code": "NCE",
					    "kw": "NiceNice",
					    "city": "尼斯"
					},{
					    "name": "新泻",
					    "code": "KIJ",
					    "kw": "NiigataNiigata",
					    "city": "新泻"
					},{
					    "name": "尼库瑙",
					    "code": "NIG",
					    "kw": "NikunauNikunau",
					    "city": "尼艰苦瑙"
					},{
					    "name": "宁巴",
					    "code": "NIA",
					    "kw": "NimbaNimba",
					    "city": "宁巴"
					},{
					    "name": "尼姆",
					    "code": "FNI",
					    "kw": "NimesNimes",
					    "city": "尼姆"
					},{
					    "name": "尼奥基",
					    "code": "NIO",
					    "kw": "NiokiNioki",
					    "city": "尼奥基"
					},{
					    "name": "纽罗",
					    "code": "NIX",
					    "kw": "NioroNioro",
					    "city": "纽罗"
					},{
					    "name": "尼奥尔",
					    "code": "NIT",
					    "kw": "NiortNiort",
					    "city": "尼奥尔"
					},{
					    "name": "尼什",
					    "code": "INI",
					    "kw": "NisNis",
					    "city": "尼什"
					},{
					    "name": "尼桑岛",
					    "code": "IIS",
					    "kw": "Nissan IslandNissan Island",
					    "city": "尼桑岛"
					},{
					    "name": "纽阿福欧",
					    "code": "NFO",
					    "kw": "Niuafo'ouNiuafo'ou",
					    "city": "纽阿福欧"
					},{
					    "name": "纽阿托普塔普",
					    "code": "NTT",
					    "kw": "NiuatoputapuNiuatoputapu",
					    "city": "纽阿托普塔普"
					},{
					    "name": "纽埃岛",
					    "code": "IUE",
					    "kw": "NiueNiue",
					    "city": "纽埃岛"
					},{
					    "name": "高尔基",
					    "code": "GOJ",
					    "kw": "Nizhniy NovgorodNizhniy Novgorod",
					    "city": "高尔基"
					},{
					    "name": "恩卡尤斯",
					    "code": "NKU",
					    "kw": "NkausNkaus",
					    "city": "恩卡尤斯"
					},{
					    "name": "恩卡伊",
					    "code": "NKY",
					    "kw": "NkayiNkayi",
					    "city": "恩卡伊"
					},{
					    "name": "恩科洛",
					    "code": "NKL",
					    "kw": "NkoloNkolo",
					    "city": "恩克洛"
					},{
					    "name": "诺莫德河",
					    "code": "NOM",
					    "kw": "Nomad RiverNomad River",
					    "city": "诺默德河"
					},{
					    "name": "诺努蒂",
					    "code": "NON",
					    "kw": "NonoutiNonouti",
					    "city": "诺怒蒂"
					},{
					    "name": "诺德代希",
					    "code": "NOE",
					    "kw": "NorddeichNorddeich",
					    "city": "诺德代希"
					},{
					    "name": "诺德奈",
					    "code": "NRD",
					    "kw": "NorderneyNorderney",
					    "city": "诺德奈"
					},{
					    "name": "诺尔峡",
					    "code": "NOR",
					    "kw": "NordfjordurNordfjordur",
					    "city": "诺而峡"
					},{
					    "name": "诺德霍尔兹-斯片卡",
					    "code": "NDZ",
					    "kw": "Nordholz-SpiekaNordholz-Spieka",
					    "city": "诺德霍而茨"
					},{
					    "name": "诺福克岛",
					    "code": "NLK",
					    "kw": "Norfolk IslandNorfolk Island",
					    "city": "诺福克岛"
					},{
					    "name": "诺福克",
					    "code": "OFK",
					    "kw": "NorfolkNorfolk",
					    "city": "诺福克"
					},{
					    "name": "诺里尔斯克",
					    "code": "NSK",
					    "kw": "NorilskNorilsk",
					    "city": "诺里而斯克"
					},{
					    "name": "诺曼顿",
					    "code": "NTN",
					    "kw": "NormantonNormanton",
					    "city": "诺曼顿"
					},{
					    "name": "诺尔雪平",
					    "code": "NRK",
					    "kw": "NorrkopingNorrkoping",
					    "city": "诺而雪平"
					},{
					    "name": "诺索普",
					    "code": "NUS",
					    "kw": "NorsupNorsup",
					    "city": "诺索普"
					},{
					    "name": "北巴特尔",
					    "code": "YQW",
					    "kw": "North BattlefordNorth Battleford",
					    "city": "北巴特尔"
					},{
					    "name": "北本德",
					    "code": "OTH",
					    "kw": "North BendNorth Bend",
					    "city": "贝本德"
					},{
					    "name": "北凯科斯",
					    "code": "NCA",
					    "kw": "North CaicosNorth Caicos",
					    "city": "贝凯科斯"
					},{
					    "name": "北伊柳塞拉",
					    "code": "ELH",
					    "kw": "North EleutheraNorth Eleuthera",
					    "city": "北伊柳塞拉"
					},{
					    "name": "北普拉特",
					    "code": "LBF",
					    "kw": "North PlatteNorth Platte",
					    "city": "北普拉特"
					},{
					    "name": "北罗纳德赛",
					    "code": "NRL",
					    "kw": "North RonaldsayNorth Ronaldsay",
					    "city": "北老纳德塞"
					},{
					    "name": "挪威豪斯",
					    "code": "YNE",
					    "kw": "Norway HouseNorway House",
					    "city": "挪威豪斯"
					},{
					    "name": "诺威奇",
					    "code": "NWI",
					    "kw": "NorwichNorwich",
					    "city": "挪威奇"
					},{
					    "name": "诺伍德",
					    "code": "OWD",
					    "kw": "NorwoodNorwood",
					    "city": "诺伍德"
					},{
					    "name": "诺萨拉比奇",
					    "code": "NOB",
					    "kw": "Nosara BeachNosara Beach",
					    "city": "诺萨拉比奇"
					},{
					    "name": "努西贝",
					    "code": "NOS",
					    "kw": "Nossi-BeNossi-Be",
					    "city": "努西贝"
					},{
					    "name": "努瓦迪布",
					    "code": "NDB",
					    "kw": "NouadhibouNouadhibou",
					    "city": "努瓦迪布"
					},{
					    "name": "努瓦克肖特",
					    "code": "NKC",
					    "kw": "NouakchottNouakchott",
					    "city": "努瓦科肖特"
					},{
					    "name": "NOUMEA MAGENTA",
					    "code": "GEA",
					    "kw": "NoumeaNoumea Magenta Apt",
					    "city": "努美阿"
					},{
					    "name": "努美阿",
					    "code": "NOU",
					    "kw": "NoumeaNoumea Tontouta Apt",
					    "city": "努美阿"
					},{
					    "name": "努纳",
					    "code": "XNU",
					    "kw": "NounaNouna",
					    "city": "努纳"
					},{
					    "name": "诺瓦托",
					    "code": "NOT",
					    "kw": "NovatoNovato",
					    "city": "诺瓦托"
					},{
					    "name": "新西伯利亚",
					    "code": "OVB",
					    "kw": "NovosibirskNovosibirsk",
					    "city": "新西伯利亚"
					},{
					    "name": "瑙沙赫尔",
					    "code": "NSH",
					    "kw": "Now ShahrNow Shahr",
					    "city": "闹沙赫尔"
					},{
					    "name": "诺瓦塔",
					    "code": "NWT",
					    "kw": "NowataNowata",
					    "city": "诺瓦塔"
					},{
					    "name": "努库希瓦",
					    "code": "NHV",
					    "kw": "Nuku HivaNuku Hiva",
					    "city": "努库西瓦"
					},{
					    "name": "努库",
					    "code": "UKU",
					    "kw": "NukuNuku",
					    "city": "努库"
					},{
					    "name": "妞拉伯",
					    "code": "NUR",
					    "kw": "NullarborNullarbor",
					    "city": "纳拉伯"
					},{
					    "name": "纳姆布瓦尔",
					    "code": "NUB",
					    "kw": "NumbulwarNumbulwar",
					    "city": "纳布尔瓦"
					},{
					    "name": "努姆富尔",
					    "code": "FOO",
					    "kw": "NumfoorNumfoor",
					    "city": "努姆福尔"
					},{
					    "name": "努魁",
					    "code": "NQU",
					    "kw": "NuquiNuqui",
					    "city": "努魁"
					},{
					    "name": "纽伦堡",
					    "code": "NUE",
					    "kw": "NurembergNuremberg Apt",
					    "city": "纽伦堡"
					},{
					    "name": "努克",
					    "code": "GOH",
					    "kw": "NuukNuuk",
					    "city": "努克"
					},{
					    "name": "尼亚拉",
					    "code": "UYL",
					    "kw": "NyalaNyala",
					    "city": "尼亚拉"
					},{
					    "name": "良乌",
					    "code": "NYU",
					    "kw": "Nyaung-UNyaung-U",
					    "city": "良乌"
					},{
					    "name": "涅里",
					    "code": "NYE",
					    "kw": "NyeriNyeri",
					    "city": "捏里"
					},{
					    "name": "恩泽雷科雷",
					    "code": "NZE",
					    "kw": "NzerekoreNzerekore",
					    "city": "恩则雷科雷"
					},{
					    "name": "奥克兰",
					    "code": "ODM",
					    "kw": "OaklandOakland",
					    "city": "奥克兰"
					},{
					    "name": "奥克兰",
					    "code": "OAK",
					    "kw": "OaklandOakland International Apt",
					    "city": "奥克兰2"
					},{
					    "name": "奥巴诺",
					    "code": "OBD",
					    "kw": "ObanoObano",
					    "city": "奥巴诺"
					},{
					    "name": "上法芬霍芬",
					    "code": "OBF",
					    "kw": "OberpfaffenhofenOberpfaffenhofen",
					    "city": "上法分霍芬"
					},{
					    "name": "带广",
					    "code": "OBO",
					    "kw": "ObihiroObihiro",
					    "city": "带广"
					},{
					    "name": "奥博",
					    "code": "OBX",
					    "kw": "OboObo",
					    "city": "奥博"
					},{
					    "name": "奥博克",
					    "code": "OBC",
					    "kw": "ObockObock",
					    "city": "奥博科"
					},{
					    "name": "奥卡纳",
					    "code": "OCV",
					    "kw": "OcanaOcana",
					    "city": "奥卡纳"
					},{
					    "name": "大洋城",
					    "code": "OCE",
					    "kw": "Ocean CityOcean City",
					    "city": "大洋城"
					},{
					    "name": "欧欣弗尔",
					    "code": "ZOF",
					    "kw": "Ocean FallsOcean Falls",
					    "city": "欧新弗尔"
					},{
					    "name": "奥桥里奥斯",
					    "code": "OCJ",
					    "kw": "Ocho RiosOcho Rios",
					    "city": "奥乔里奥斯"
					},{
					    "name": "欧库西",
					    "code": "OEC",
					    "kw": "OcussiOcussi",
					    "city": "欧库西"
					},{
					    "name": "欧登赛",
					    "code": "ODE",
					    "kw": "OdenseOdense Airport",
					    "city": "欧登赛"
					},{
					    "name": "奥德萨",
					    "code": "ODS",
					    "kw": "OdessaOdessa",
					    "city": "奥德萨"
					},{
					    "name": "奥迭内",
					    "code": "KEO",
					    "kw": "OdienneOdienne",
					    "city": "昂佩利"
					},{
					    "name": "昂佩利",
					    "code": "OPI",
					    "kw": "OenpelliOenpelli",
					    "city": "奥富岛"
					},{
					    "name": "奥富岛",
					    "code": "OFU",
					    "kw": "OfuOfu",
					    "city": "奥加拉拉"
					},{
					    "name": "奥加拉拉",
					    "code": "OGA",
					    "kw": "OgallalaOgallala",
					    "city": "奥戈登斯堡"
					},{
					    "name": "奥赫里德",
					    "code": "OHD",
					    "kw": "OhridOhrid",
					    "city": "奥亚波基"
					},{
					    "name": "大分",
					    "code": "OIT",
					    "kw": "OitaOita",
					    "city": "奥卡巴"
					},{
					    "name": "奥考奎约",
					    "code": "OKF",
					    "kw": "OkaukuejoOkaukuejo",
					    "city": "奥考奎约"
					},{
					    "name": "冈山",
					    "code": "OKJ",
					    "kw": "OkayamaOkayama",
					    "city": "冈山"
					},{
					    "name": "奥基岛",
					    "code": "OKI",
					    "kw": "Oki IslandOki Island",
					    "city": "奥基岛"
					},{
					    "name": "冲绳",
					    "code": "OKA",
					    "kw": "OkinawaOkinawa Naha Apt",
					    "city": "冲绳"
					},{
					    "name": "冲永良部",
					    "code": "OKE",
					    "kw": "Okino ErabuOkino Erabu",
					    "city": "冲永良部"
					},{
					    "name": "奥孔贾",
					    "code": "OKN",
					    "kw": "OkondjaOkondja",
					    "city": "奥孔贾"
					},{
					    "name": "奥科约",
					    "code": "OKG",
					    "kw": "OkoyoOkoyo",
					    "city": "奥科约"
					},{
					    "name": "奥克萨普明",
					    "code": "OKP",
					    "kw": "OksapminOksapmin",
					    "city": "奥克萨普明"
					},{
					    "name": "奥尻",
					    "code": "OIR",
					    "kw": "OkushiriOkushiri",
					    "city": "奥犰"
					},{
					    "name": "欧拉夫峡",
					    "code": "OFJ",
					    "kw": "OlafsfjordurOlafsfjordur",
					    "city": "欧拉夫峡"
					},{
					    "name": "欧拉夫斯维克",
					    "code": "OLI",
					    "kw": "OlafsvikOlafsvik",
					    "city": "欧拉夫斯维克"
					},{
					    "name": "奥兰奇托",
					    "code": "OAN",
					    "kw": "OlanchitoOlanchito",
					    "city": "奥蓝奇托"
					},{
					    "name": "奥尔比亚",
					    "code": "OLB",
					    "kw": "OlbiaOlbia",
					    "city": "奥尔比亚"
					},{
					    "name": "奥尔波依",
					    "code": "OLJ",
					    "kw": "OlpoiOlpoi",
					    "city": "奥尔波伊"
					},{
					    "name": "奥尔索比普",
					    "code": "OLQ",
					    "kw": "OlsobipOlsobip",
					    "city": "奥尔所比普"
					},{
					    "name": "奥林匹克旦姆",
					    "code": "OLP",
					    "kw": "Olympic DamOlympic Dam",
					    "city": "奥林匹克但姆"
					},{
					    "name": "奥马哈",
					    "code": "OMA",
					    "kw": "OmahaOmaha Eppley Airfield",
					    "city": "奥马哈"
					},{
					    "name": "鄂木斯克",
					    "code": "OMS",
					    "kw": "OmskOmsk",
					    "city": "鄂木斯克"
					},{
					    "name": "奥诺劳岛",
					    "code": "ONU",
					    "kw": "Ono I LauOno I Lau",
					    "city": "奥诺劳岛"
					},{
					    "name": "奥诺托阿",
					    "code": "OOT",
					    "kw": "OnotoaOnotoa",
					    "city": "奥诺托阿"
					},{
					    "name": "安大略",
					    "code": "ONT",
					    "kw": "OntarioOntario International Apt",
					    "city": "安大略1+B73"
					},{
					    "name": "奥彭湾",
					    "code": "OPB",
					    "kw": "Open BayOpen Bay",
					    "city": "奥彭湾"
					},{
					    "name": "奥拉迪亚",
					    "code": "OMR",
					    "kw": "OradeaOradea",
					    "city": "奥拉迪亚"
					},{
					    "name": "奥兰",
					    "code": "ORN",
					    "kw": "OranOran Es Senia Apt",
					    "city": "奥兰"
					},{
					    "name": "奥兰治沃克",
					    "code": "ORZ",
					    "kw": "Orange WalkOrange Walk",
					    "city": "奥兰治沃克"
					},{
					    "name": "奥兰治蒙德",
					    "code": "OMD",
					    "kw": "OranjemundOranjemund",
					    "city": "奥兰治蒙德"
					},{
					    "name": "奥拉帕",
					    "code": "ORP",
					    "kw": "OrapaOrapa",
					    "city": "奥拉帕"
					},{
					    "name": "厄勒布鲁",
					    "code": "ORB",
					    "kw": "OrebroOrebro",
					    "city": "厄勒布鲁"
					},{
					    "name": "奥伦堡",
					    "code": "REN",
					    "kw": "OrenburgOrenburg",
					    "city": "奥伦堡"
					},{
					    "name": "奥里亚",
					    "code": "OTY",
					    "kw": "OriaOria",
					    "city": "奥里亚"
					},{
					    "name": "奥林杜伊克",
					    "code": "ORJ",
					    "kw": "OrinduikOrinduik",
					    "city": "奥林杜伊克"
					},{
					    "name": "奥尔良",
					    "code": "ORE",
					    "kw": "OrleansOrleans",
					    "city": "奥尔良"
					},{
					    "name": "奥尔马拉",
					    "code": "ORW",
					    "kw": "OrmaraOrmara",
					    "city": "奥尔吗拉"
					},{
					    "name": "奥尔莫克",
					    "code": "OMC",
					    "kw": "OrmocOrmoc",
					    "city": "奥尔莫克"
					},{
					    "name": "恩舍尔兹维克",
					    "code": "OER",
					    "kw": "OrnskoldsvikOrnskoldsvik",
					    "city": "恩金尔兹维克"
					},{
					    "name": "奥罗库埃",
					    "code": "ORC",
					    "kw": "OrocueOrocue",
					    "city": "奥罗库埃"
					},{
					    "name": "厄斯塔伏尔达",
					    "code": "HOV",
					    "kw": "Orsta-VoldaOrsta-Volda",
					    "city": "厄斯塔伏尔达"
					},{
					    "name": "奥鲁罗",
					    "code": "ORU",
					    "kw": "OruroOruro",
					    "city": "奥鲁罗"
					},{
					    "name": "欧塞奇比奇",
					    "code": "OSB",
					    "kw": "Osage BeachOsage Beach",
					    "city": "欧塞起比奇"
					},{
					    "name": "OSAKA ITAMI APT",
					    "code": "ITM",
					    "kw": "OsakaOsaka Itami Airport",
					    "city": "大阪"
					},{
					    "name": "KANSAI",
					    "code": "KIX",
					    "kw": "OsakaOsaka Kansai International Airport",
					    "city": "大阪"
					},{
					    "name": "奥什",
					    "code": "OSS",
					    "kw": "OshOsh",
					    "city": "奥什"
					},{
					    "name": "奥沙卡蒂",
					    "code": "OHI",
					    "kw": "OshakatiOshakati",
					    "city": "奥沙卡蒂"
					},{
					    "name": "大岛",
					    "code": "OIM",
					    "kw": "OshimaOshima",
					    "city": "大岛"
					},{
					    "name": "奥西耶克",
					    "code": "OSI",
					    "kw": "OsijekOsijek",
					    "city": "奥西耶克"
					},{
					    "name": "奥斯卡斯哈门",
					    "code": "OSK",
					    "kw": "OskarshamnOskarshamn",
					    "city": "奥斯卡斯哈门"
					},{
					    "name": "奥斯陆",
					    "code": "OSL",
					    "kw": "OsloOslo International Airport",
					    "city": "奥斯陆"
					},{
					    "name": "桑纳菲奥尔",
					    "code": "TRF",
					    "kw": "OsloOslo Torp Airport",
					    "city": "奥斯陆"
					},{
					    "name": "奥斯曼阿巴德",
					    "code": "OMN",
					    "kw": "OsmanabadOsmanabad",
					    "city": "奥斯曼阿巴德"
					},{
					    "name": "奥索尔诺",
					    "code": "ZOS",
					    "kw": "OsornoOsorno",
					    "city": "奥索尔诺"
					},{
					    "name": "奥斯坦德",
					    "code": "OST",
					    "kw": "OstendOstend",
					    "city": "奥斯坦德"
					},{
					    "name": "厄斯特松德",
					    "code": "OSD",
					    "kw": "OstersundOstersund",
					    "city": "厄斯特松德"
					},{
					    "name": "俄斯特拉发",
					    "code": "OSR",
					    "kw": "OstravaOstrava",
					    "city": "俄斯特拉发"
					},{
					    "name": "奥图",
					    "code": "OTU",
					    "kw": "OtuOtu",
					    "city": "奥图"
					},{
					    "name": "奥茨胡恩",
					    "code": "OUH",
					    "kw": "OudtshoornOudtshoorn",
					    "city": "奥茨胡恩"
					},{
					    "name": "奥卢",
					    "code": "OUL",
					    "kw": "OuluOulu",
					    "city": "奥卢"
					},{
					    "name": "奥廷",
					    "code": "OYN",
					    "kw": "OuyenOuyen",
					    "city": "奥延"
					},{
					    "name": "奥旺多",
					    "code": "FTX",
					    "kw": "OwandoOwando",
					    "city": "奥旺多"
					},{
					    "name": "欧文斯伯勒",
					    "code": "OWB",
					    "kw": "OwensboroOwensboro",
					    "city": "欧文斯伯勒"
					},{
					    "name": "奥克斯福德豪斯",
					    "code": "YOH",
					    "kw": "Oxford HouseOxford House",
					    "city": "奥克斯福德毫斯"
					},{
					    "name": "奥克斯纳德",
					    "code": "OXR",
					    "kw": "Oxnard/VenturaOxnard/Ventura",
					    "city": "奥克斯纳德"
					},{
					    "name": "奥耶姆",
					    "code": "OYE",
					    "kw": "OyemOyem",
					    "city": "奥耶姆"
					},{
					    "name": "奥兰棉示",
					    "code": "OZC",
					    "kw": "OzamisOzamis",
					    "city": "哦啊三棉示"
					},{
					    "name": "帕安",
					    "code": "PAA",
					    "kw": "Pa-anPa-an",
					    "city": "帕安"
					},{
					    "name": "腓特烈斯霍布",
					    "code": "JFR",
					    "kw": "PaamiutPaamiut",
					    "city": "腓特列斯霍布"
					},{
					    "name": "巴东",
					    "code": "PDG",
					    "kw": "PadangPadang",
					    "city": "巴东"
					},{
					    "name": "帕德博恩",
					    "code": "PAD",
					    "kw": "PaderbornPaderborn",
					    "city": "帕德伯恩"
					},{
					    "name": "帕迪尤卡",
					    "code": "PAH",
					    "kw": "PaducahPaducah",
					    "city": "帕蒂尤卡"
					},{
					    "name": "帕加迪安",
					    "code": "PAG",
					    "kw": "PagadianPagadian",
					    "city": "帕加迪安"
					},{
					    "name": "佩奇",
					    "code": "PGA",
					    "kw": "PagePage",
					    "city": "佩奇"
					},{
					    "name": "帕果帕果",
					    "code": "PPG",
					    "kw": "Pago PagoPago Pago",
					    "city": "帕果帕果"
					},{
					    "name": "木格具",
					    "code": "PKK",
					    "kw": "PakokkuPakokku",
					    "city": "格具"
					},{
					    "name": "巴色",
					    "code": "PKZ",
					    "kw": "PaksePakse",
					    "city": "巴色"
					},{
					    "name": "帕拉山",
					    "code": "PLF",
					    "kw": "PalaPala",
					    "city": "帕拉"
					},{
					    "name": "帕兰加",
					    "code": "PLQ",
					    "kw": "PalangaPalanga",
					    "city": "帕兰加"
					},{
					    "name": "帕朗卡拉亚",
					    "code": "PKY",
					    "kw": "PalangkarayaPalangkaraya",
					    "city": "帕郎卡拉亚"
					},{
					    "name": "巨港",
					    "code": "PLM",
					    "kw": "PalembangPalembang",
					    "city": "巨港"
					},{
					    "name": "帕伦克",
					    "code": "PQM",
					    "kw": "PalenquePalenque",
					    "city": "帕伦克"
					},{
					    "name": "巴勒莫",
					    "code": "PMO",
					    "kw": "PalermoPalermo",
					    "city": "巴勒莫"
					},{
					    "name": "帕尔马马拉尔克",
					    "code": "PMI",
					    "kw": "Palma MallorcaPalma Mallorca",
					    "city": "帕尔吗吗拉尔克"
					},{
					    "name": "帕尔马尔",
					    "code": "PMZ",
					    "kw": "PalmarPalmar",
					    "city": "帕尔吗尔"
					},{
					    "name": "帕尔马里托",
					    "code": "PTM",
					    "kw": "PalmaritoPalmarito",
					    "city": "帕尔吗里拖"
					},{
					    "name": "帕姆代尔",
					    "code": "PMD",
					    "kw": "Palmdale AFBPalmdale AFB",
					    "city": "帕姆代尔"
					},{
					    "name": "北帕默斯顿",
					    "code": "PMR",
					    "kw": "Palmerston NorthPalmerston North",
					    "city": "北帕莫斯顿"
					},{
					    "name": "帕卢",
					    "code": "PLW",
					    "kw": "PaluPalu",
					    "city": "帕卢"
					},{
					    "name": "巴马",
					    "code": "XPA",
					    "kw": "PamaPama",
					    "city": "巴马"
					},{
					    "name": "巴马尔",
					    "code": "PAY",
					    "kw": "PamolPamol",
					    "city": "巴马尔"
					},{
					    "name": "PAMPLONA",
					    "code": "PNA",
					    "kw": "PamplonaPamplona",
					    "city": "巴姆普郎纳"
					},{
					    "name": "PANAMA CITY PAITI",
					    "code": "PAC",
					    "kw": "Panama CityPanama City Paitilla Apt",
					    "city": "巴拿马城"
					},{
					    "name": "巴拿马城",
					    "code": "PTY",
					    "kw": "Panama CityPanama City Tocumen Internationl",
					    "city": "巴拿马城"
					},{
					    "name": "潘迪潘迪",
					    "code": "PDE",
					    "kw": "Pandie PandiePandie Pandie",
					    "city": "潘迪潘迪"
					},{
					    "name": "庞卡兰布翁",
					    "code": "PKN",
					    "kw": "PangkalanbunPangkalanbun",
					    "city": "庞卡兰布翁"
					},{
					    "name": "槟榔",
					    "code": "PGK",
					    "kw": "PangkalpinangPangkalpinang",
					    "city": "槟港"
					},{
					    "name": "庞纳唐",
					    "code": "YXP",
					    "kw": "PangnirtungPangnirtung",
					    "city": "庞纳唐"
					},{
					    "name": "本杰古尔",
					    "code": "PJG",
					    "kw": "PanjgurPanjgur",
					    "city": "本杰古尔"
					},{
					    "name": "潘泰莱里亚",
					    "code": "PNL",
					    "kw": "PantelleriaPantelleria",
					    "city": "潘泰莱里亚"
					},{
					    "name": "佩奥尼亚",
					    "code": "WPO",
					    "kw": "PaoniaPaonia",
					    "city": "佩袄你亚"
					},{
					    "name": "帕帕韦斯特雷",
					    "code": "PPW",
					    "kw": "Papa WestrayPapa Westray",
					    "city": "帕帕维斯特类"
					},{
					    "name": "帕皮提",
					    "code": "PPT",
					    "kw": "PapeetePapeete",
					    "city": "帕皮提"
					},{
					    "name": "帕福斯",
					    "code": "PFO",
					    "kw": "PaphosPaphos",
					    "city": "帕福斯"
					},{
					    "name": "帕本",
					    "code": "PPU",
					    "kw": "PapunPapun",
					    "city": "帕本"
					},{
					    "name": "帕拉迪斯里弗",
					    "code": "YDE",
					    "kw": "Paradise RiverParadise River",
					    "city": "帕拉迪斯里弗"
					},{
					    "name": "帕拉库",
					    "code": "PKO",
					    "kw": "ParakouParakou",
					    "city": "帕拉库"
					},{
					    "name": "帕拉姆",
					    "code": "PPX",
					    "kw": "ParamParam",
					    "city": "帕拉姆"
					},{
					    "name": "帕拉马里博",
					    "code": "PBM",
					    "kw": "ParamariboParamaribo John A Pengel Apt",
					    "city": "帕拉马里博"
					},{
					    "name": "PARAMARIBO ZORG",
					    "code": "ORG",
					    "kw": "ParamariboParamaribo Zorg en Hoop Apt",
					    "city": "帕拉马里博"
					},{
					    "name": "帕拉那",
					    "code": "PRA",
					    "kw": "ParanaParana",
					    "city": "帕拉那"
					},{
					    "name": "巴拉那瓜",
					    "code": "PNG",
					    "kw": "ParanaguaParanagua",
					    "city": "巴拉纳瓜"
					},{
					    "name": "巴拉那伊巴",
					    "code": "PBB",
					    "kw": "ParanaibaParanaiba",
					    "city": "巴拉纳伊巴"
					},{
					    "name": "巴拉那瓦伊",
					    "code": "PVI",
					    "kw": "ParanavaiParanavai",
					    "city": "巴拉纳挖伊"
					},{
					    "name": "伯拉西",
					    "code": "PRS",
					    "kw": "ParasiParasi",
					    "city": "伯拉西"
					},{
					    "name": "博韦",
					    "code": "BVA",
					    "kw": "ParisParis Beauvais-Tille Airport",
					    "city": "巴黎"
					},{
					    "name": "蓬图瓦茨",
					    "code": "POX",
					    "kw": "ParisParis Cergy Pontoise Airport",
					    "city": "巴黎"
					},{
					    "name": "戴高乐",
					    "code": "CDG",
					    "kw": "ParisParis Charles de Gaulle Apt",
					    "city": "巴黎"
					},{
					    "name": "PARIS LA DEFENSE",
					    "code": "JPU",
					    "kw": "ParisParis La Defense H/P",
					    "city": "巴黎"
					},{
					    "name": "奥利",
					    "code": "ORY",
					    "kw": "ParisParis Orly Apt",
					    "city": "巴黎"
					},{
					    "name": "帕尔马",
					    "code": "PMF",
					    "kw": "ParmaParma",
					    "city": "帕尔马"
					},{
					    "name": "潘德纳",
					    "code": "PDN",
					    "kw": "ParndanaParndana",
					    "city": "潘德纳"
					},{
					    "name": "帕罗",
					    "code": "PBH",
					    "kw": "ParoParo",
					    "city": "帕罗"
					},{
					    "name": "帕罗斯",
					    "code": "PAS",
					    "kw": "ParosParos",
					    "city": "帕罗斯"
					},{
					    "name": "帕西加特",
					    "code": "IXT",
					    "kw": "PasighatPasighat",
					    "city": "帕西加特"
					},{
					    "name": "伯斯尼",
					    "code": "PSI",
					    "kw": "PasniPasni",
					    "city": "伯斯你"
					},{
					    "name": "帕索卡瓦约斯",
					    "code": "PCG",
					    "kw": "Paso CaballosPaso Caballos",
					    "city": "帕索卡挖约斯"
					},{
					    "name": "帕索德拉斯利布雷斯",
					    "code": "AOL",
					    "kw": "Paso De Los LibresPaso De Los Libres",
					    "city": "帕索德拉斯"
					},{
					    "name": "帕索罗布尔斯",
					    "code": "PRB",
					    "kw": "Paso RoblesPaso Robles",
					    "city": "帕索罗布尔斯"
					},{
					    "name": "帕苏斯",
					    "code": "PSW",
					    "kw": "PassosPassos",
					    "city": "帕苏斯"
					},{
					    "name": "帕斯托",
					    "code": "PSO",
					    "kw": "PastoPasto",
					    "city": "帕斯托"
					},{
					    "name": "巴特那",
					    "code": "PAT",
					    "kw": "PatnaPatna",
					    "city": "巴特那"
					},{
					    "name": "帕图布兰库",
					    "code": "PTO",
					    "kw": "Pato BrancoPato Branco",
					    "city": "帕土布兰库"
					},{
					    "name": "帕特雷",
					    "code": "GPA",
					    "kw": "PatrasPatras",
					    "city": "帕特类"
					},{
					    "name": "帕特莱克斯菲厄泽",
					    "code": "PFJ",
					    "kw": "PatreksfjordurPatreksfjordur",
					    "city": "帕特莱科斯非厄"
					},{
					    "name": "北大年",
					    "code": "PAN",
					    "kw": "PattaniPattani",
					    "city": "北大年"
					},{
					    "name": "帕塔亚",
					    "code": "PYX",
					    "kw": "PattayaPattaya",
					    "city": "帕他亚"
					},{
					    "name": "摩根城",
					    "code": "PTN",
					    "kw": "PattersonPatterson",
					    "city": "摩根城"
					},{
					    "name": "波",
					    "code": "PUF",
					    "kw": "PauPau",
					    "city": "波(城)"
					},{
					    "name": "包",
					    "code": "PAU",
					    "kw": "PaukPauk",
					    "city": "包城"
					},{
					    "name": "波拉图克",
					    "code": "YPC",
					    "kw": "PaulatukPaulatuk",
					    "city": "波拉土科"
					},{
					    "name": "保罗·阿方索",
					    "code": "PAV",
					    "kw": "Paulo AfonsoPaulo Afonso",
					    "city": "保罗阿方索"
					},{
					    "name": "帕扬",
					    "code": "PYN",
					    "kw": "PayanPayan",
					    "city": "帕扬"
					},{
					    "name": "派桑杜",
					    "code": "PDU",
					    "kw": "PaysanduPaysandu",
					    "city": "派桑杜"
					},{
					    "name": "帕斯德阿里波罗",
					    "code": "PZA",
					    "kw": "Paz de AriporoPaz de Ariporo",
					    "city": "帕斯德阿里波罗"
					},{
					    "name": "皮斯里弗",
					    "code": "YPE",
					    "kw": "Peace RiverPeace River",
					    "city": "皮斯里弗"
					},{
					    "name": "皮奇斯普林斯",
					    "code": "PGS",
					    "kw": "Peach SpringsPeach Springs",
					    "city": "皮奇斯普林斯"
					},{
					    "name": "佩德纳莱斯",
					    "code": "PDZ",
					    "kw": "PedernalesPedernales",
					    "city": "佩德纳莱斯"
					},{
					    "name": "佩瓦霍",
					    "code": "PEH",
					    "kw": "PehuajoPehuajo",
					    "city": "佩瓦霍"
					},{
					    "name": "北干巴鲁",
					    "code": "PKU",
					    "kw": "PekanbaruPekanbaru",
					    "city": "北干巴鲁"
					},{
					    "name": "佩利贝",
					    "code": "YUF",
					    "kw": "Pelly BayPelly Bay Dewline Site Apt",
					    "city": "佩里北"
					},{
					    "name": "PELLY BAY TOWNSIT",
					    "code": "YBB",
					    "kw": "Pelly BayPelly Bay Townsite Apt",
					    "city": "佩里北"
					},{
					    "name": "彭巴",
					    "code": "POL",
					    "kw": "PembaPemba",
					    "city": "彭巴"
					},{
					    "name": "奔巴",
					    "code": "PMA",
					    "kw": "PembaPemba",
					    "city": "奔巴"
					},{
					    "name": "槟城",
					    "code": "PEN",
					    "kw": "PenangPenang",
					    "city": "槟城"
					},{
					    "name": "彭德尔顿",
					    "code": "PDT",
					    "kw": "PendletonPendleton",
					    "city": "彭德尔顿"
					},{
					    "name": "彭林岛",
					    "code": "PYE",
					    "kw": "Penrhyn IslandPenrhyn Island",
					    "city": "彭林岛"
					},{
					    "name": "奔萨",
					    "code": "PEZ",
					    "kw": "PenzaPenza",
					    "city": "奔萨"
					},{
					    "name": "彭赞斯",
					    "code": "PZE",
					    "kw": "PenzancePenzance",
					    "city": "彭赞斯"
					},{
					    "name": "皮奥里亚",
					    "code": "PIA",
					    "kw": "PeoriaPeoria",
					    "city": "皮袄里亚"
					},{
					    "name": "佩雷拉",
					    "code": "PEI",
					    "kw": "PereiraPereira",
					    "city": "佩类拉"
					},{
					    "name": "佩里格",
					    "code": "PGX",
					    "kw": "PerigueuxPerigueux",
					    "city": "佩里格"
					},{
					    "name": "佩里托莫雷诺",
					    "code": "PMQ",
					    "kw": "Perito MorenoPerito Moreno",
					    "city": "佩里拖莫类诺"
					},{
					    "name": "彼尔姆",
					    "code": "PEE",
					    "kw": "PermPerm",
					    "city": "彼尔姆"
					},{
					    "name": "佩皮尼昂",
					    "code": "PGF",
					    "kw": "PerpignanPerpignan",
					    "city": "佩皮尼昂"
					},{
					    "name": "珀鲁",
					    "code": "VYS",
					    "kw": "PeruPeru",
					    "city": "珀鲁"
					},{
					    "name": "佩鲁贾",
					    "code": "PEG",
					    "kw": "PerugiaPerugia",
					    "city": "佩鲁贾"
					},{
					    "name": "沙瓦",
					    "code": "PEW",
					    "kw": "PeshawarPeshawar",
					    "city": "白沙瓦"
					},{
					    "name": "彼得罗利纳",
					    "code": "PNZ",
					    "kw": "PetrolinaPetrolina",
					    "city": "彼德罗利纳"
					},{
					    "name": "彼得罗巴浦洛夫斯克",
					    "code": "PKC",
					    "kw": "Petropavlovsk-KamchatsPetropavlovsk-Kamchats",
					    "city": "彼德罗巴浦洛夫"
					},{
					    "name": "彼得罗扎沃茨克",
					    "code": "PES",
					    "kw": "PetrozavodskPetrozavodsk",
					    "city": "彼德洛扎沃次克"
					},{
					    "name": "帕拉博鲁瓦",
					    "code": "PHW",
					    "kw": "PhalaborwaPhalaborwa",
					    "city": "帕拉博鲁瓦"
					},{
					    "name": "费城",
					    "code": "PHL",
					    "kw": "PhiladelphiaPhiladelphia International Apt",
					    "city": "费城"
					},{
					    "name": "特伦顿",
					    "code": "TTN",
					    "kw": "PhiladelphiaPhiladelphia Trenton-Mercer Apt",
					    "city": "费城"
					},{
					    "name": "贝尔丰特",
					    "code": "PSB",
					    "kw": "PhilipsburgPhilipsburg",
					    "city": "贝尔丰特"
					},{
					    "name": "彭世洛",
					    "code": "PHS",
					    "kw": "PhitsanulokPhitsanulok",
					    "city": "彭世洛"
					},{
					    "name": "金边",
					    "code": "PNH",
					    "kw": "Phnom PenhPhnom Penh",
					    "city": "金边"
					},{
					    "name": "SOFIA",
					    "code": "SCF",
					    "kw": "PhoenixPhoenix Scottsdale Municipal Apt",
					    "city": "菲尼克斯"
					},{
					    "name": "菲尼克斯",
					    "code": "PHX",
					    "kw": "PhoenixPhoenix Sky Harbor Intl Apt",
					    "city": "菲尼克斯"
					},{
					    "name": "帕府",
					    "code": "PRH",
					    "kw": "PhraePhrae",
					    "city": "帕府"
					},{
					    "name": "普吉",
					    "code": "HKT",
					    "kw": "PhuketPhuket",
					    "city": "普吉"
					},{
					    "name": "皮克岛",
					    "code": "PIX",
					    "kw": "Pico IslandPico Island",
					    "city": "皮克岛"
					},{
					    "name": "皮克顿",
					    "code": "PCN",
					    "kw": "PictonPicton",
					    "city": "皮克顿"
					},{
					    "name": "皮尔",
					    "code": "PIR",
					    "kw": "PierrePierre",
					    "city": "皮尔"
					},{
					    "name": "皮耶什佳尼",
					    "code": "PZY",
					    "kw": "PiestanyPiestany",
					    "city": "皮耶什加尼"
					},{
					    "name": "彼得马里茨堡",
					    "code": "PZB",
					    "kw": "PietermaritzburgPietermaritzburg",
					    "city": "彼德吗里次堡"
					},{
					    "name": "彼得斯堡",
					    "code": "PTG",
					    "kw": "PietersburgPietersburg",
					    "city": "彼得斯堡"
					},{
					    "name": "皮奎托内",
					    "code": "PIW",
					    "kw": "PikwitoneiPikwitonei",
					    "city": "皮奎托内"
					},{
					    "name": "皮曼加",
					    "code": "PMP",
					    "kw": "PimagaPimaga",
					    "city": "皮曼加"
					},{
					    "name": "平迪乌",
					    "code": "PDI",
					    "kw": "PindiuPindiu",
					    "city": "平迪乌"
					},{
					    "name": "派恩波因特",
					    "code": "YPP",
					    "kw": "Pine PointPine Point",
					    "city": "派恩波因特"
					},{
					    "name": "皮塔利托",
					    "code": "PTX",
					    "kw": "PitalitoPitalito",
					    "city": "皮塔利托"
					},{
					    "name": "匹兹堡",
					    "code": "PIT",
					    "kw": "PittsburghPittsburgh International Apt",
					    "city": "匹兹堡"
					},{
					    "name": "皮茨菲尔德",
					    "code": "PSF",
					    "kw": "PittsfieldPittsfield",
					    "city": "皮茨非尔德"
					},{
					    "name": "皮乌拉",
					    "code": "PIU",
					    "kw": "PiuraPiura",
					    "city": "皮乌拉"
					},{
					    "name": "普莱瑟维尔",
					    "code": "PVF",
					    "kw": "PlacervillePlacerville",
					    "city": "普莱瑟维尔"
					},{
					    "name": "萨马拉滩",
					    "code": "PLD",
					    "kw": "Playa SamaraPlaya Samara",
					    "city": "萨吗拉滩"
					},{
					    "name": "普莱滕贝格",
					    "code": "PBZ",
					    "kw": "Plettenberg BayPlettenberg Bay",
					    "city": "普莱腾贝格"
					},{
					    "name": "普列文",
					    "code": "PVN",
					    "kw": "PlevenPleven",
					    "city": "普列文"
					},{
					    "name": "普罗夫迪夫",
					    "code": "PDV",
					    "kw": "PlovdivPlovdiv",
					    "city": "普洛夫迪夫"
					},{
					    "name": "普利茅斯",
					    "code": "PLH",
					    "kw": "PlymouthPlymouth",
					    "city": "普里茅斯"
					},{
					    "name": "波卡特洛",
					    "code": "PIH",
					    "kw": "PocatelloPocatello",
					    "city": "波卡特洛"
					},{
					    "name": "波卡斯卡尔达斯",
					    "code": "POO",
					    "kw": "Pocos De CaldasPocos De Caldas",
					    "city": "波卡斯卡尔大斯"
					},{
					    "name": "波多尔",
					    "code": "POD",
					    "kw": "PodorPodor",
					    "city": "波多尔"
					},{
					    "name": "浦项",
					    "code": "KPO",
					    "kw": "PohangPohang",
					    "city": "浦项"
					},{
					    "name": "波恩佩",
					    "code": "PNI",
					    "kw": "PohnpeiPohnpei",
					    "city": "波恩佩"
					},{
					    "name": "黑角",
					    "code": "PNR",
					    "kw": "Pointe NoirePointe Noire",
					    "city": "黑角"
					},{
					    "name": "皮特尔角城",
					    "code": "PTP",
					    "kw": "Pointe-a-PitrePointe-a-Pitre",
					    "city": "皮特尔角城"
					},{
					    "name": "皮因兹诺斯兰丁",
					    "code": "YNL",
					    "kw": "Points North LandingPoints North Landing",
					    "city": "波因兹诺斯兰丁"
					},{
					    "name": "普瓦捷",
					    "code": "PIS",
					    "kw": "PoitiersPoitiers Biard Airport",
					    "city": "普瓦杰"
					},{
					    "name": "博克拉",
					    "code": "PKR",
					    "kw": "PokharaPokhara",
					    "city": "博克拉"
					},{
					    "name": "波拉卡",
					    "code": "PXL",
					    "kw": "PolaccaPolacca",
					    "city": "波拉卡"
					},{
					    "name": "波马拉",
					    "code": "PUM",
					    "kw": "PomalaPomala",
					    "city": "波吗拉"
					},{
					    "name": "庞塞",
					    "code": "PSE",
					    "kw": "PoncePonce",
					    "city": "庞塞"
					},{
					    "name": "庞德因莱特",
					    "code": "YIO",
					    "kw": "Pond InletPond Inlet",
					    "city": "庞的因莱特"
					},{
					    "name": "蓬塔德尔加达",
					    "code": "PDL",
					    "kw": "Ponta DelgadaPonta Delgada",
					    "city": "蓬塔的尔加达"
					},{
					    "name": "蓬塔波朗",
					    "code": "PMG",
					    "kw": "Ponta PoraPonta Pora",
					    "city": "碰塔波郎"
					},{
					    "name": "坤甸",
					    "code": "PNK",
					    "kw": "PontianakPontianak",
					    "city": "坤甸"
					},{
					    "name": "波帕扬",
					    "code": "PPN",
					    "kw": "PopayanPopayan",
					    "city": "波帕扬"
					},{
					    "name": "波普勒布拉夫",
					    "code": "POF",
					    "kw": "Poplar BluffPoplar Bluff",
					    "city": "波浦勒布拉夫"
					},{
					    "name": "皮蓬德塔",
					    "code": "PNP",
					    "kw": "PopondettaPopondetta",
					    "city": "波蓬的塔"
					},{
					    "name": "波普顿",
					    "code": "PON",
					    "kw": "PoptunPoptun",
					    "city": "波浦顿"
					},{
					    "name": "波尔本德尔",
					    "code": "PBD",
					    "kw": "PorbandarPorbandar",
					    "city": "波尔奔的尔"
					},{
					    "name": "波里",
					    "code": "POR",
					    "kw": "PoriPori",
					    "city": "波里"
					},{
					    "name": "波尔拉马尔",
					    "code": "PMV",
					    "kw": "PorlamarPorlamar",
					    "city": "波尔拉吗尔"
					},{
					    "name": "安东尼奥港",
					    "code": "POT",
					    "kw": "Port AntonioPort Antonio",
					    "city": "按东尼袄港"
					},{
					    "name": "奥古斯塔港",
					    "code": "PUG",
					    "kw": "Port AugustaPort Augusta",
					    "city": "袄古斯塔港"
					},{
					    "name": "贝尔热港",
					    "code": "WPB",
					    "kw": "Port BergePort Berge",
					    "city": "贝尔热港"
					},{
					    "name": "布莱尔港",
					    "code": "IXZ",
					    "kw": "Port BlairPort Blair",
					    "city": "布莱尔港"
					},{
					    "name": "和平港",
					    "code": "PAX",
					    "kw": "Port De PaixPort De Paix",
					    "city": "和平港"
					},{
					    "name": "让蒂尔港",
					    "code": "POG",
					    "kw": "Port GentilPort Gentil",
					    "city": "让蒂尔港"
					},{
					    "name": "哈科特港",
					    "code": "PHC",
					    "kw": "Port HarcourtPort Harcourt",
					    "city": "哈克特港"
					},{
					    "name": "霍普港",
					    "code": "YHA",
					    "kw": "Port Hope SimpsonPort Hope Simpson",
					    "city": "霍浦港"
					},{
					    "name": "亨特港",
					    "code": "PHJ",
					    "kw": "Port HunterPort Hunter",
					    "city": "亨特港"
					},{
					    "name": "基茨港",
					    "code": "PKT",
					    "kw": "Port KeatsPort Keats",
					    "city": "吉茨港"
					},{
					    "name": "林肯港",
					    "code": "PLO",
					    "kw": "Port LincolnPort Lincoln",
					    "city": "林肯港"
					},{
					    "name": "麦奈里港",
					    "code": "PQQ",
					    "kw": "Port MacquariePort Macquarie",
					    "city": "麦夸里港"
					},{
					    "name": "莫尔兹比港",
					    "code": "POM",
					    "kw": "Port MoresbyPort Moresby",
					    "city": "莫尔茨彼港"
					},{
					    "name": "皮里港",
					    "code": "PPI",
					    "kw": "Port PiriePort Pirie",
					    "city": "皮里港"
					},{
					    "name": "塞得港",
					    "code": "PSD",
					    "kw": "Port SaidPort Said",
					    "city": "塞的港"
					},{
					    "name": "波尔蒂芒",
					    "code": "PRM",
					    "kw": "PortimaoPortimao",
					    "city": "伯尔蒂芒"
					},{
					    "name": "波特兰",
					    "code": "PTJ",
					    "kw": "PortlandPortland",
					    "city": "波特兰2"
					},{
					    "name": "安博因港",
					    "code": "PBN",
					    "kw": "Porto AmboimPorto Amboim",
					    "city": "安博因港"
					},{
					    "name": "波尔托海利翁",
					    "code": "PKH",
					    "kw": "Porto KheliPorto Kheli",
					    "city": "博尔托还里翁"
					},{
					    "name": "纳雄耐尔港",
					    "code": "PNB",
					    "kw": "Porto NacionalPorto Nacional",
					    "city": "纳雄奈尔港"
					},{
					    "name": "塞古鲁港",
					    "code": "BPS",
					    "kw": "Porto SeguroPorto Seguro",
					    "city": "塞古鲁港"
					},{
					    "name": "波尔图",
					    "code": "OPO",
					    "kw": "PortoPorto",
					    "city": "伯尔图"
					},{
					    "name": "波尔托罗日",
					    "code": "POW",
					    "kw": "PortorozPortoroz",
					    "city": "博尔托洛日"
					},{
					    "name": "波托维埃霍",
					    "code": "PVO",
					    "kw": "PortoviejoPortoviejo",
					    "city": "博托维埃霍"
					},{
					    "name": "波萨达斯",
					    "code": "PSS",
					    "kw": "PosadasPosadas",
					    "city": "波萨达斯"
					},{
					    "name": "波索",
					    "code": "PSJ",
					    "kw": "PosoPoso",
					    "city": "波索"
					},{
					    "name": "波斯特维尔",
					    "code": "YSO",
					    "kw": "PostvillePostville",
					    "city": "波斯特威尔"
					},{
					    "name": "波托西",
					    "code": "POI",
					    "kw": "PotosiPotosi",
					    "city": "波托西"
					},{
					    "name": "波基普西",
					    "code": "POU",
					    "kw": "PoughkeepsiePoughkeepsie",
					    "city": "波基普西"
					},{
					    "name": "鲍威尔河",
					    "code": "YPW",
					    "kw": "Powell RiverPowell River",
					    "city": "鲍威尔河"
					},{
					    "name": "波萨里卡-德伊达尔戈",
					    "code": "PAZ",
					    "kw": "Poza RicaPoza Rica",
					    "city": "波萨里卡的一达"
					},{
					    "name": "波兹南",
					    "code": "POZ",
					    "kw": "PoznanPoznan",
					    "city": "波茨南"
					},{
					    "name": "布拉格",
					    "code": "PRG",
					    "kw": "PraguePrague",
					    "city": "布拉格"
					},{
					    "name": "普拉兰岛",
					    "code": "PRI",
					    "kw": "Praslin IslandPraslin Island",
					    "city": "普拉兰岛"
					},{
					    "name": "普雷斯科特",
					    "code": "PRC",
					    "kw": "PrescottPrescott",
					    "city": "普雷斯科特"
					},{
					    "name": "罗克·萨恩斯·培纳总统城",
					    "code": "PRQ",
					    "kw": "President Roque Saenz PenaPresident Roque Saenz Pena",
					    "city": "洛科萨恩斯赔纳"
					},{
					    "name": "比勒陀利亚",
					    "code": "PRY",
					    "kw": "PretoriaPretoria Wonderboom Apt",
					    "city": "彼勒托利亚"
					},{
					    "name": "普雷韦扎/列夫卡",
					    "code": "PVK",
					    "kw": "Preveza/LefkasPreveza/Lefkas",
					    "city": "普雷韦扎列夫卡"
					},{
					    "name": "艾伯特王子城",
					    "code": "YPA",
					    "kw": "Prince AlbertPrince Albert",
					    "city": "艾伯特王子城"
					},{
					    "name": "普林西比",
					    "code": "PCP",
					    "kw": "Principe IslandPrincipe Island",
					    "city": "普林西彼"
					},{
					    "name": "普里什蒂纳",
					    "code": "PRN",
					    "kw": "PristinaPristina",
					    "city": "普里什蒂纳"
					},{
					    "name": "卑廖",
					    "code": "PRU",
					    "kw": "PromeProme",
					    "city": "卑谬"
					},{
					    "name": "普罗普里亚诺",
					    "code": "PRP",
					    "kw": "ProprianoPropriano",
					    "city": "普洛普里亚诺"
					},{
					    "name": "普罗维登夏",
					    "code": "PVA",
					    "kw": "ProvidenciaProvidencia",
					    "city": "普洛韦登夏"
					},{
					    "name": "普罗维登夏莱斯",
					    "code": "PLS",
					    "kw": "ProvidencialesProvidenciales",
					    "city": "普洛韦登下来斯"
					},{
					    "name": "普罗温斯敦",
					    "code": "PVC",
					    "kw": "ProvincetownProvincetown",
					    "city": "普洛温斯敦"
					},{
					    "name": "普卡尔帕",
					    "code": "PCL",
					    "kw": "PucallpaPucallpa",
					    "city": "普卡尔怕"
					},{
					    "name": "普埃布拉",
					    "code": "PBC",
					    "kw": "PueblaPuebla",
					    "city": "普埃布拉"
					},{
					    "name": "普韦布洛",
					    "code": "PUB",
					    "kw": "PuebloPueblo",
					    "city": "普韦布洛"
					},{
					    "name": "阿西斯港",
					    "code": "PUU",
					    "kw": "Puerto AsisPuerto Asis",
					    "city": "阿西斯港"
					},{
					    "name": "阿亚库乔港",
					    "code": "PYH",
					    "kw": "Puerto AyacuchoPuerto Ayacucho",
					    "city": "阿亚库乔港"
					},{
					    "name": "巴里奥斯港",
					    "code": "PBR",
					    "kw": "Puerto BarriosPuerto Barrios",
					    "city": "巴里奥斯港"
					},{
					    "name": "贝里奥港",
					    "code": "PBE",
					    "kw": "Puerto BerrioPuerto Berrio",
					    "city": "贝里奥港"
					},{
					    "name": "博亚卡港",
					    "code": "PYA",
					    "kw": "Puerto BoyacaPuerto Boyaca",
					    "city": "博亚卡港"
					},{
					    "name": "卡贝略港",
					    "code": "PBL",
					    "kw": "Puerto CabelloPuerto Cabello",
					    "city": "卡贝略港"
					},{
					    "name": "卡贝萨斯港",
					    "code": "PUZ",
					    "kw": "Puerto CabezasPuerto Cabezas",
					    "city": "卡贝萨斯港"
					},{
					    "name": "卡雷尼奥港",
					    "code": "PCR",
					    "kw": "Puerto CarrenoPuerto Carreno",
					    "city": "卡雷尼奥港"
					},{
					    "name": "德塞阿多港",
					    "code": "PUD",
					    "kw": "Puerto DeseadoPuerto Deseado",
					    "city": "的塞阿多港"
					},{
					    "name": "埃斯康德港",
					    "code": "PXM",
					    "kw": "Puerto EscondidoPuerto Escondido",
					    "city": "埃斯康德港"
					},{
					    "name": "莱吉萨莫港",
					    "code": "LQM",
					    "kw": "Puerto LeguizamoPuerto Leguizamo",
					    "city": "来基萨莫港"
					},{
					    "name": "伦皮拉港",
					    "code": "PEU",
					    "kw": "Puerto LempiraPuerto Lempira",
					    "city": "伦皮拉港"
					},{
					    "name": "马尔多纳多港",
					    "code": "PEM",
					    "kw": "Puerto MaldonadoPuerto Maldonado",
					    "city": "吗尔多纳多港"
					},{
					    "name": "蒙特港",
					    "code": "PMC",
					    "kw": "Puerto MonttPuerto Montt",
					    "city": "蒙特港"
					},{
					    "name": "奥瓦尔迪亚港",
					    "code": "PUE",
					    "kw": "Puerto ObaldiaPuerto Obaldia",
					    "city": "奥瓦尔迪亚港"
					},{
					    "name": "奥尔达斯港",
					    "code": "PZO",
					    "kw": "Puerto OrdazPuerto Ordaz",
					    "city": "奥尔达斯港"
					},{
					    "name": "帕埃斯港",
					    "code": "PPZ",
					    "kw": "Puerto PaezPuerto Paez",
					    "city": "帕埃斯港"
					},{
					    "name": "普拉塔港",
					    "code": "POP",
					    "kw": "Puerto PlataPuerto Plata",
					    "city": "普拉塔港"
					},{
					    "name": "普林塞萨港",
					    "code": "PPS",
					    "kw": "Puerto PrincesaPuerto Princesa",
					    "city": "普林塞萨港"
					},{
					    "name": "波多黎各",
					    "code": "PCC",
					    "kw": "Puerto RicoPuerto Rico",
					    "city": "博多梨各"
					},{
					    "name": "巴亚尔塔港",
					    "code": "PVR",
					    "kw": "Puerto VallartaPuerto Vallarta",
					    "city": "巴亚尔塔港"
					},{
					    "name": "普卡普卡",
					    "code": "PKP",
					    "kw": "Puka PukaPuka Puka",
					    "city": "普卡普卡"
					},{
					    "name": "普卡鲁阿",
					    "code": "PUK",
					    "kw": "PukaruaPukarua",
					    "city": "普卡鲁阿"
					},{
					    "name": "帕卡塔瓦根",
					    "code": "XPK",
					    "kw": "PukatawaganPukatawagan",
					    "city": "帕卡塔瓦根"
					},{
					    "name": "普拉",
					    "code": "PUY",
					    "kw": "PulaPula",
					    "city": "普拉"
					},{
					    "name": "普尔曼",
					    "code": "PUW",
					    "kw": "PullmanPullman",
					    "city": "普尔满"
					},{
					    "name": "普马尼",
					    "code": "PMN",
					    "kw": "PumaniPumani",
					    "city": "普马尼"
					},{
					    "name": "浦那",
					    "code": "PNQ",
					    "kw": "PunePune",
					    "city": "浦纳"
					},{
					    "name": "普尼亚",
					    "code": "PUN",
					    "kw": "PuniaPunia",
					    "city": "普尼亚"
					},{
					    "name": "阿雷纳斯角",
					    "code": "PUQ",
					    "kw": "Punta ArenasPunta Arenas",
					    "city": "阿雷纳斯角"
					},{
					    "name": "卡纳角",
					    "code": "PUJ",
					    "kw": "Punta CanaPunta Cana",
					    "city": "卡纳角"
					},{
					    "name": "埃斯特角城",
					    "code": "PDP",
					    "kw": "Punta Del EstePunta Del Este",
					    "city": "埃斯特角城"
					},{
					    "name": "戈尔德岛",
					    "code": "PGD",
					    "kw": "Punta GordaPunta Gorda",
					    "city": "戈尔的角"
					},{
					    "name": "戈尔达角",
					    "code": "PND",
					    "kw": "Punta GordaPunta Gorda",
					    "city": "戈尔达角"
					},{
					    "name": "普禾加多",
					    "code": "PWL",
					    "kw": "PurwokertoPurwokerto",
					    "city": "普禾加多"
					},{
					    "name": "釜山",
					    "code": "PUS",
					    "kw": "PusanPusan",
					    "city": "釜山"
					},{
					    "name": "葡萄",
					    "code": "PBU",
					    "kw": "PutaoPutao",
					    "city": "葡萄"
					},{
					    "name": "普图马约",
					    "code": "PYO",
					    "kw": "PutumayoPutumayo",
					    "city": "葡图马约"
					},{
					    "name": "普图西包",
					    "code": "PSU",
					    "kw": "PutussibauPutussibau",
					    "city": "葡图西包"
					},{
					    "name": "平壤",
					    "code": "FNJ",
					    "kw": "PyongyangPyongyang",
					    "city": "平壤"
					},{
					    "name": "皮尔戈斯",
					    "code": "PYR",
					    "kw": "PyrgosPyrgos",
					    "city": "皮尔戈斯"
					},{
					    "name": "加查斯内克",
					    "code": "UNE",
					    "kw": "Qachas NekQachas Nek",
					    "city": "加查斯内科"
					},{
					    "name": "凯苏马",
					    "code": "AQI",
					    "kw": "QaisumahQaisumah",
					    "city": "开苏马"
					},{
					    "name": "瑙堡",
					    "code": "LQN",
					    "kw": "Qala-NauQala-Nau",
					    "city": "瑙堡"
					},{
					    "name": "克里斯提安斯赫布",
					    "code": "JCH",
					    "kw": "QasigiannguitQasigiannguit",
					    "city": "克利斯提安斯赫"
					},{
					    "name": "基什恩",
					    "code": "IHN",
					    "kw": "QishnQishn",
					    "city": "基什恩"
					},{
					    "name": "昆斯敦",
					    "code": "ZQN",
					    "kw": "QueenstownQueenstown",
					    "city": "昆斯敦"
					},{
					    "name": "克利马内",
					    "code": "UEL",
					    "kw": "QuelimaneQuelimane",
					    "city": "克里马内"
					},{
					    "name": "克波斯",
					    "code": "XQP",
					    "kw": "QueposQuepos",
					    "city": "克博斯"
					},{
					    "name": "克雷塔罗",
					    "code": "QRO",
					    "kw": "QueretaroQueretaro",
					    "city": "克雷塔洛"
					},{
					    "name": "奎达",
					    "code": "UET",
					    "kw": "QuettaQuetta",
					    "city": "奎达"
					},{
					    "name": "基布多",
					    "code": "UIB",
					    "kw": "QuibdoQuibdo",
					    "city": "基布多"
					},{
					    "name": "坎佩尔",
					    "code": "UIP",
					    "kw": "QuimperQuimper",
					    "city": "坎佩尔"
					},{
					    "name": "金塞米尔",
					    "code": "UMI",
					    "kw": "QuincemilQuincemil",
					    "city": "金塞米尔"
					},{
					    "name": "昆西",
					    "code": "MQI",
					    "kw": "QuincyQuincy",
					    "city": "昆西"
					},{
					    "name": "归仁",
					    "code": "UIH",
					    "kw": "QuinhonQuinhon",
					    "city": "归仁"
					},{
					    "name": "基多",
					    "code": "UIO",
					    "kw": "QuitoQuito",
					    "city": "基多"
					},{
					    "name": "拉巴拉巴",
					    "code": "RBP",
					    "kw": "RabarabaRabaraba",
					    "city": "拉巴拉巴"
					},{
					    "name": "拉巴特",
					    "code": "RBA",
					    "kw": "RabatRabat",
					    "city": "拉巴特"
					},{
					    "name": "拉包尔",
					    "code": "RAB",
					    "kw": "RabaulRabaul",
					    "city": "拉包尔"
					},{
					    "name": "拉比",
					    "code": "RBI",
					    "kw": "RabiRabi",
					    "city": "拉比"
					},{
					    "name": "赖伯雷利",
					    "code": "BEK",
					    "kw": "Rae BareliRae Bareli",
					    "city": "赖伯雷利"
					},{
					    "name": "雷伊湖",
					    "code": "YRA",
					    "kw": "Rae LakesRae Lakes",
					    "city": "雷一湖"
					},{
					    "name": "拉夫哈",
					    "code": "RAH",
					    "kw": "RafhaRafha",
					    "city": "拉夫哈"
					},{
					    "name": "拉希姆亚尔汗",
					    "code": "RYK",
					    "kw": "Rahim Yar KhanRahim Yar Khan",
					    "city": "拉西姆亚尔汗"
					},{
					    "name": "雷伊提",
					    "code": "RFP",
					    "kw": "Raiatea IslandRaiatea Island",
					    "city": "雷阿提"
					},{
					    "name": "协恩博莱克",
					    "code": "YOP",
					    "kw": "Rainbow LakeRainbow Lake",
					    "city": "雷恩博莱克"
					},{
					    "name": "赖普尔",
					    "code": "RPR",
					    "kw": "RaipurRaipur",
					    "city": "赖普尔"
					},{
					    "name": "拉贾芒得里",
					    "code": "RJA",
					    "kw": "RajahmundryRajahmundry",
					    "city": "拉贾芒德里"
					},{
					    "name": "拉杰果德",
					    "code": "RAJ",
					    "kw": "RajkotRajkot",
					    "city": "拉杰果德"
					},{
					    "name": "拉朱里",
					    "code": "RJI",
					    "kw": "RajouriRajouri",
					    "city": "拉朱里"
					},{
					    "name": "拉杰沙希",
					    "code": "RJH",
					    "kw": "RajshahiRajshahi",
					    "city": "拉杰沙西"
					},{
					    "name": "罗利",
					    "code": "RDU",
					    "kw": "Raleigh/DurhamRaleigh/Durham",
					    "city": "达勒姆"
					},{
					    "name": "拉马贡丹",
					    "code": "RMD",
					    "kw": "RamagundamRamagundam",
					    "city": "拉马贡丹"
					},{
					    "name": "拉梅恰布",
					    "code": "RHP",
					    "kw": "RamechhapRamechhap",
					    "city": "拉没恰布"
					},{
					    "name": "拉明吉宁",
					    "code": "RAM",
					    "kw": "RaminginingRamingining",
					    "city": "拉明吉宁"
					},{
					    "name": "拉姆萨尔",
					    "code": "RZR",
					    "kw": "RamsarRamsar",
					    "city": "拉姆萨尔"
					},{
					    "name": "拉瑙",
					    "code": "RNU",
					    "kw": "RanauRanau",
					    "city": "拉瑙"
					},{
					    "name": "兰契",
					    "code": "IXR",
					    "kw": "RanchiRanchi",
					    "city": "兰契"
					},{
					    "name": "兰盖利",
					    "code": "RNG",
					    "kw": "RangelyRangely",
					    "city": "兰盖利"
					},{
					    "name": "朗伊罗阿",
					    "code": "RGI",
					    "kw": "Rangiroa IslandRangiroa Island",
					    "city": "郎伊罗阿"
					},{
					    "name": "兰金因莱特",
					    "code": "YRT",
					    "kw": "Rankin InletRankin Inlet",
					    "city": "莱金因莱特"
					},{
					    "name": "拉皮德城",
					    "code": "RAP",
					    "kw": "Rapid CityRapid City Municipal Apt",
					    "city": "拉皮德城"
					},{
					    "name": "拉罗汤加",
					    "code": "RAR",
					    "kw": "RarotongaRarotonga",
					    "city": "拉罗汤加"
					},{
					    "name": "哈伊马角",
					    "code": "RKT",
					    "kw": "Ras Al KhaimahRas Al Khaimah",
					    "city": "哈伊马角"
					},{
					    "name": "拉什特",
					    "code": "RAS",
					    "kw": "RashtRasht",
					    "city": "拉什特"
					},{
					    "name": "勒德纳吉里",
					    "code": "RTC",
					    "kw": "RatnagiriRatnagiri",
					    "city": "勒德纳吉里"
					},{
					    "name": "勒伊法赫本",
					    "code": "RFN",
					    "kw": "RaufarhofnRaufarhofn",
					    "city": "勒伊发赫本"
					},{
					    "name": "拉瓦拉科特",
					    "code": "RAZ",
					    "kw": "Rawala KotRawala Kot",
					    "city": "拉瓦拉科特"
					},{
					    "name": "拉瓦尔品第",
					    "code": "RWP",
					    "kw": "Rawalpindi Off-Line PtRawalpindi Off-Line Pt",
					    "city": "拉瓦尔品第"
					},{
					    "name": "瑞丁",
					    "code": "RDG",
					    "kw": "ReadingReading",
					    "city": "瑞丁"
					},{
					    "name": "雷奥",
					    "code": "REA",
					    "kw": "ReaoReao",
					    "city": "雷奥"
					},{
					    "name": "扎文",
					    "code": "RBJ",
					    "kw": "RebunRebun",
					    "city": "礼文"
					},{
					    "name": "累西非",
					    "code": "REC",
					    "kw": "RecifeRecife",
					    "city": "累西非"
					},{
					    "name": "雷德布拉夫",
					    "code": "RBL",
					    "kw": "Red BluffRed Bluff",
					    "city": "雷德布拉夫"
					},{
					    "name": "雷德萨克尔",
					    "code": "YRS",
					    "kw": "Red Sucker LakeRed Sucker Lake",
					    "city": "雷德萨克尔"
					},{
					    "name": "雷丁",
					    "code": "RDD",
					    "kw": "ReddingRedding",
					    "city": "雷丁"
					},{
					    "name": "雷登桑",
					    "code": "RDC",
					    "kw": "RedencaoRedencao",
					    "city": "雷登桑"
					},{
					    "name": "雷焦卡拉布里亚",
					    "code": "REG",
					    "kw": "Reggio CalabriaReggio Calabria",
					    "city": "雷谯卡拉布里亚"
					},{
					    "name": "里贾纳",
					    "code": "YQR",
					    "kw": "ReginaRegina",
					    "city": "里贾纳"
					},{
					    "name": "兰斯",
					    "code": "RHE",
					    "kw": "ReimsReims",
					    "city": "兰斯"
					},{
					    "name": "雷菲洛",
					    "code": "RVO",
					    "kw": "ReiviloReivilo",
					    "city": "雷非洛"
					},{
					    "name": "冷岳",
					    "code": "RGT",
					    "kw": "RengatRengat",
					    "city": "冷岳口"
					},{
					    "name": "伦马克",
					    "code": "RMK",
					    "kw": "RenmarkRenmark",
					    "city": "伦马克"
					},{
					    "name": "伦内尔",
					    "code": "RNL",
					    "kw": "RennellRennell",
					    "city": "伦内尔"
					},{
					    "name": "雷恩",
					    "code": "RNS",
					    "kw": "RennesRennes St Jacques Airport",
					    "city": "雷恩"
					},{
					    "name": "里帕尔斯湾",
					    "code": "YUT",
					    "kw": "Repulse BayRepulse Bay",
					    "city": "里帕尔斯湾"
					},{
					    "name": "雷西斯滕西亚",
					    "code": "RES",
					    "kw": "ResistenciaResistencia",
					    "city": "雷雷西斯藤西亚"
					},{
					    "name": "雷索卢特",
					    "code": "YRB",
					    "kw": "ResoluteResolute",
					    "city": "雷索卢特"
					},{
					    "name": "雷乌斯",
					    "code": "REU",
					    "kw": "ReusReus",
					    "city": "雷乌斯"
					},{
					    "name": "雷瓦",
					    "code": "REW",
					    "kw": "RewaRewa",
					    "city": "雷瓦"
					},{
					    "name": "雷耶斯",
					    "code": "REY",
					    "kw": "ReyesReyes",
					    "city": "雷耶斯"
					},{
					    "name": "雷克候拉尔",
					    "code": "RHA",
					    "kw": "ReykholarReykholar",
					    "city": "雷克候拉尔"
					},{
					    "name": "REYKJAVIK KEFLAVI",
					    "code": "KEF",
					    "kw": "ReykjavikReykjavik Keflavik Apt",
					    "city": "雷克雅未克"
					},{
					    "name": "雷诺萨",
					    "code": "REX",
					    "kw": "ReynosaReynosa",
					    "city": "雷诺萨"
					},{
					    "name": "罗得",
					    "code": "RHO",
					    "kw": "RhodesRhodes",
					    "city": "罗得"
					},{
					    "name": "里韦拉尔塔",
					    "code": "RIB",
					    "kw": "RiberaltaRiberalta",
					    "city": "里韦拉尔塔"
					},{
					    "name": "里夏托尔",
					    "code": "RDT",
					    "kw": "Richard TollRichard Toll",
					    "city": "里夏托尔"
					},{
					    "name": "理查德湾",
					    "code": "RCB",
					    "kw": "Richards BayRichards Bay",
					    "city": "里查德湾"
					},{
					    "name": "里士满",
					    "code": "RIC",
					    "kw": "RichmondRichmond",
					    "city": "里士满"
					},{
					    "name": "赖夫尔",
					    "code": "RIL",
					    "kw": "RifleRifle",
					    "city": "赖夫尔"
					},{
					    "name": "里戈莱特",
					    "code": "YRG",
					    "kw": "RigoletRigolet",
					    "city": "里戈莱特"
					},{
					    "name": "里耶卡",
					    "code": "RJK",
					    "kw": "RijekaRijeka",
					    "city": "里耶卡"
					},{
					    "name": "里米尼",
					    "code": "RMI",
					    "kw": "RiminiRimini",
					    "city": "里米尼"
					},{
					    "name": "林吉考夫",
					    "code": "RIN",
					    "kw": "Ringi CoveRingi Cove",
					    "city": "林基考夫"
					},{
					    "name": "里奥夸尔托",
					    "code": "RCU",
					    "kw": "Rio CuartoRio Cuarto",
					    "city": "里奥夸尔托"
					},{
					    "name": "里奥弗里奥",
					    "code": "RFR",
					    "kw": "Rio FrioRio Frio",
					    "city": "里奥夫里奥"
					},{
					    "name": "里奥加耶戈斯",
					    "code": "RGL",
					    "kw": "Rio GallegosRio Gallegos",
					    "city": "里奥加耶戈斯"
					},{
					    "name": "里奥格朗德",
					    "code": "RGA",
					    "kw": "Rio GrandeRio Grande",
					    "city": "里奥格郎德1"
					},{
					    "name": "里奥马约",
					    "code": "ROY",
					    "kw": "Rio MayoRio Mayo",
					    "city": "里奥马月"
					},{
					    "name": "里奥蒂格雷",
					    "code": "RIT",
					    "kw": "Rio TigreRio Tigre",
					    "city": "里奥蒂格雷"
					},{
					    "name": "里奥图尔维奥",
					    "code": "RYO",
					    "kw": "Rio TurbioRio Turbio",
					    "city": "里奥图尔韦奥"
					},{
					    "name": "RIO DE JANEIRO",
					    "code": "GIG",
					    "kw": "Rio de JaneiroRio de Janeiro International Apt",
					    "city": "里约热内卢"
					},{
					    "name": "RIO DE JANEIRO",
					    "code": "SDU",
					    "kw": "Rio de JaneiroRio de Janeiro Santos Dumont Apt",
					    "city": "里约热内卢"
					},{
					    "name": "里奥阿查",
					    "code": "RCH",
					    "kw": "RiohachaRiohacha",
					    "city": "里奥阿查"
					},{
					    "name": "里奥亚",
					    "code": "RIJ",
					    "kw": "RiojaRioja",
					    "city": "里奥亚"
					},{
					    "name": "利尻",
					    "code": "RIS",
					    "kw": "RishiriRishiri",
					    "city": "利九"
					},{
					    "name": "里弗塞斯",
					    "code": "RVC",
					    "kw": "River CessRiver Cess",
					    "city": "里弗塞斯"
					},{
					    "name": "里维拉",
					    "code": "RVY",
					    "kw": "RiveraRivera",
					    "city": "里维拉"
					},{
					    "name": "里弗赛德",
					    "code": "RAL",
					    "kw": "RiversideRiverside Municipal Apt",
					    "city": "里弗塞德"
					},{
					    "name": "利雅得",
					    "code": "RUH",
					    "kw": "RiyadhRiyadh",
					    "city": "利雅得"
					},{
					    "name": "里雅恩姆卡拉",
					    "code": "RIY",
					    "kw": "Riyan MukallaRiyan Mukalla",
					    "city": "里雅恩姆卡拉"
					},{
					    "name": "罗阿讷",
					    "code": "RNE",
					    "kw": "RoanneRoanne",
					    "city": "罗阿衲"
					},{
					    "name": "罗阿诺克拉皮兹",
					    "code": "RZZ",
					    "kw": "Roanoke RapidsRoanoke Rapids",
					    "city": "罗阿诺克拉皮兹"
					},{
					    "name": "罗阿诺克",
					    "code": "ROA",
					    "kw": "RoanokeRoanoke",
					    "city": "罗阿诺克"
					},{
					    "name": "罗阿坦",
					    "code": "RTB",
					    "kw": "RoatanRoatan",
					    "city": "罗阿坦"
					},{
					    "name": "鲁滨逊里弗",
					    "code": "RNR",
					    "kw": "Robinson RiverRobinson River",
					    "city": "鲁宾逊里弗"
					},{
					    "name": "罗宾韦尔",
					    "code": "RBC",
					    "kw": "RobinvaleRobinvale",
					    "city": "罗宾韦尔"
					},{
					    "name": "罗博雷",
					    "code": "RBO",
					    "kw": "RoboreRobore",
					    "city": "罗博雷"
					},{
					    "name": "罗奇港",
					    "code": "RCE",
					    "kw": "Roche HarborRoche Harbor",
					    "city": "罗奇港"
					},{
					    "name": "罗切斯特",
					    "code": "RST",
					    "kw": "RochesterRochester Municipal Apt",
					    "city": "罗切斯特"
					},{
					    "name": "罗克桑德",
					    "code": "RSD",
					    "kw": "Rock SoundRock Sound",
					    "city": "罗克桑德"
					},{
					    "name": "罗克福德",
					    "code": "RFD",
					    "kw": "RockfordRockford Greater Rockford Apt",
					    "city": "罗克弗德"
					},{
					    "name": "落基山",
					    "code": "RWI",
					    "kw": "Rocky MountRocky Mount",
					    "city": "落基山"
					},{
					    "name": "罗德兹",
					    "code": "RDZ",
					    "kw": "RodezRodez",
					    "city": "罗德兹"
					},{
					    "name": "罗德里格斯岛",
					    "code": "RRG",
					    "kw": "Rodrigues IslandRodrigues Island",
					    "city": "罗德里德斯岛"
					},{
					    "name": "罗尔维克",
					    "code": "RVK",
					    "kw": "RoervikRoervik",
					    "city": "罗尔维克"
					},{
					    "name": "罗杰斯",
					    "code": "ROG",
					    "kw": "RogersRogers",
					    "city": "罗杰斯"
					},{
					    "name": "罗拉",
					    "code": "RLA",
					    "kw": "RollaRolla",
					    "city": "罗拉"
					},{
					    "name": "ROME CIAMPINO APT",
					    "code": "CIA",
					    "kw": "RomeRome Ciampino Apt",
					    "city": "罗马"
					},{
					    "name": "达芬奇",
					    "code": "FCO",
					    "kw": "RomeRome Fiumicino Apt",
					    "city": "罗马"
					},{
					    "name": "朗敦",
					    "code": "RON",
					    "kw": "RondonRondon",
					    "city": "朗敦"
					},{
					    "name": "龙多诺波利斯",
					    "code": "ROO",
					    "kw": "RondonopolisRondonopolis",
					    "city": "龙多诺波利斯"
					},{
					    "name": "龙讷比",
					    "code": "RNB",
					    "kw": "RonnebyRonneby",
					    "city": "龙纳比"
					},{
					    "name": "罗珀瓦利",
					    "code": "RPV",
					    "kw": "Roper ValleyRoper Valley",
					    "city": "罗珀瓦利"
					},{
					    "name": "勒罗斯",
					    "code": "RRS",
					    "kw": "RorosRoros",
					    "city": "勒罗斯"
					},{
					    "name": "罗萨里奥",
					    "code": "ROS",
					    "kw": "RosarioRosario",
					    "city": "罗萨里奥1"
					},{
					    "name": "鲁塞里斯",
					    "code": "RSS",
					    "kw": "RoseiresRoseires",
					    "city": "鲁塞里斯"
					},{
					    "name": "罗什平纳",
					    "code": "RPN",
					    "kw": "Rosh PinaRosh Pina",
					    "city": "罗什平纳"
					},{
					    "name": "罗斯特岛",
					    "code": "RET",
					    "kw": "RostRost",
					    "city": "罗斯特岛"
					},{
					    "name": "罗斯托夫",
					    "code": "ROV",
					    "kw": "RostovRostov",
					    "city": "罗斯托福"
					},{
					    "name": "罗塔",
					    "code": "ROP",
					    "kw": "RotaRota",
					    "city": "罗他"
					},{
					    "name": "罗恩赛",
					    "code": "RAY",
					    "kw": "RothesayRothesay",
					    "city": "罗思塞"
					},{
					    "name": "罗蒂",
					    "code": "RTI",
					    "kw": "RotiRoti",
					    "city": "罗蒂"
					},{
					    "name": "罗托鲁阿",
					    "code": "ROT",
					    "kw": "RotoruaRotorua",
					    "city": "罗托鲁阿"
					},{
					    "name": "鹿特丹",
					    "code": "RTM",
					    "kw": "RotterdamRotterdam Apt",
					    "city": "鹿特丹"
					},{
					    "name": "罗图马岛",
					    "code": "RTA",
					    "kw": "Rotuma IslandRotuma Island",
					    "city": "罗图马岛"
					},{
					    "name": "鲁昂",
					    "code": "URO",
					    "kw": "RouenRouen",
					    "city": "鲁昂"
					},{
					    "name": "罗瓦涅米",
					    "code": "RVN",
					    "kw": "RovaniemiRovaniemi",
					    "city": "罗瓦涅米"
					},{
					    "name": "罗克塞斯城",
					    "code": "RXS",
					    "kw": "RoxasRoxas",
					    "city": "罗克塞思城"
					},{
					    "name": "鲁瓦扬",
					    "code": "RYN",
					    "kw": "RoyanRoyan",
					    "city": "鲁瓦扬"
					},{
					    "name": "朗杜",
					    "code": "NDU",
					    "kw": "RunduRundu",
					    "city": "朗杜"
					},{
					    "name": "鲁雷纳瓦克",
					    "code": "RBQ",
					    "kw": "RurrenabaqueRurrenabaque",
					    "city": "鲁雷纳瓦克"
					},{
					    "name": "鲁鲁土岛",
					    "code": "RUR",
					    "kw": "RurutuRurutu",
					    "city": "鲁鲁土岛"
					},{
					    "name": "鲁塞",
					    "code": "ROU",
					    "kw": "RuseRuse",
					    "city": "鲁塞"
					},{
					    "name": "鲁滕",
					    "code": "RTG",
					    "kw": "RutengRuteng",
					    "city": "鲁滕"
					},{
					    "name": "热舒夫",
					    "code": "RZE",
					    "kw": "RzeszowRzeszow",
					    "city": "热舒夫"
					},{
					    "name": "萨达",
					    "code": "SYE",
					    "kw": "Sa DahSa Dah",
					    "city": "萨达"
					},{
					    "name": "萨尔布吕肯",
					    "code": "SCN",
					    "kw": "SaarbruckenSaarbrucken Ensheim Airport",
					    "city": "萨尔布吕肯"
					},{
					    "name": "SAARBRUECKEN",
					    "code": "QFZ",
					    "kw": "SaarbruckenSaarbruecken HBF Rail Station",
					    "city": "萨尔布吕肯"
					},{
					    "name": "沙巴岛",
					    "code": "SAB",
					    "kw": "SabaSaba",
					    "city": "萨把岛"
					},{
					    "name": "沙巴",
					    "code": "SBV",
					    "kw": "SabahSabah",
					    "city": "沙把"
					},{
					    "name": "沙璜",
					    "code": "SBG",
					    "kw": "SabangSabang",
					    "city": "沙黄"
					},{
					    "name": "萨奇斯港",
					    "code": "YSY",
					    "kw": "Sachs HarbourSachs Harbour",
					    "city": "萨奇斯港"
					},{
					    "name": "萨克拉门托",
					    "code": "SAC",
					    "kw": "SacramentoSacramento Executive Apt",
					    "city": "萨克拉门托"
					},{
					    "name": "SCRAMENTO METROPO",
					    "code": "SMF",
					    "kw": "SacramentoSacramento International Apt",
					    "city": "萨克拉门托"
					},{
					    "name": "萨恩斯佩尼亚",
					    "code": "SZQ",
					    "kw": "Saenz PenaSaenz Pena",
					    "city": "萨恩斯佩尼亚"
					},{
					    "name": "萨菲亚",
					    "code": "SFU",
					    "kw": "SafiaSafia",
					    "city": "萨非亚"
					},{
					    "name": "萨哈巴特",
					    "code": "SXS",
					    "kw": "Sahabat 16Sahabat 16",
					    "city": "萨哈把特"
					},{
					    "name": "赛多尔",
					    "code": "SDI",
					    "kw": "SaidorSaidor",
					    "city": "赛多尔"
					},{
					    "name": "塞德普尔",
					    "code": "SPD",
					    "kw": "SaidpurSaidpur",
					    "city": "赛德普尔"
					},{
					    "name": "塞杜沙里夫",
					    "code": "SDT",
					    "kw": "Saidu SharifSaidu Sharif",
					    "city": "赛杜沙里夫"
					},{
					    "name": "赛班",
					    "code": "SPN",
					    "kw": "SaipanSaipan",
					    "city": "塞班"
					},{
					    "name": "沙功那空",
					    "code": "SNO",
					    "kw": "Sakon NakhonSakon Nakhon",
					    "city": "沙功纳空"
					},{
					    "name": "萨尔",
					    "code": "SID",
					    "kw": "SalSal",
					    "city": "塞尔"
					},{
					    "name": "萨利达",
					    "code": "SLT",
					    "kw": "SalidaSalida",
					    "city": "萨利达"
					},{
					    "name": "萨利纳斯",
					    "code": "SNS",
					    "kw": "SalinasSalinas",
					    "city": "萨利纳斯"
					},{
					    "name": "萨尔特岛",
					    "code": "SLX",
					    "kw": "Salt CaySalt Cay",
					    "city": "萨尔特岛"
					},{
					    "name": "萨尔塔",
					    "code": "SLA",
					    "kw": "SaltaSalta",
					    "city": "萨尔塔"
					},{
					    "name": "萨尔蒂罗",
					    "code": "SLW",
					    "kw": "SaltilloSaltillo",
					    "city": "萨尔蒂罗"
					},{
					    "name": "萨尔瓦多",
					    "code": "SSA",
					    "kw": "SalvadorSalvador",
					    "city": "萨尔瓦多"
					},{
					    "name": "萨尔茨堡",
					    "code": "SZG",
					    "kw": "SalzburgSalzburg",
					    "city": "萨尔茨堡"
					},{
					    "name": "桑怒",
					    "code": "NEU",
					    "kw": "Sam NeuaSam Neua",
					    "city": "桑怒"
					},{
					    "name": "古比雪夫",
					    "code": "KUF",
					    "kw": "SamaraSamara",
					    "city": "古比雪夫"
					},{
					    "name": "三马林达",
					    "code": "SRI",
					    "kw": "SamarindaSamarinda",
					    "city": "三马林达"
					},{
					    "name": "撒马尔罕",
					    "code": "SKD",
					    "kw": "SamarkandSamarkand",
					    "city": "撒马尔罕"
					},{
					    "name": "桑巴瓦",
					    "code": "SVB",
					    "kw": "SambavaSambava",
					    "city": "桑巴瓦"
					},{
					    "name": "桑布鲁",
					    "code": "UAS",
					    "kw": "SamburuSamburu",
					    "city": "桑布鲁"
					},{
					    "name": "桑马斯",
					    "code": "SMI",
					    "kw": "SamosSamos",
					    "city": "桑马斯"
					},{
					    "name": "桑皮特",
					    "code": "SMQ",
					    "kw": "SampitSampit",
					    "city": "桑皮特"
					},{
					    "name": "萨姆松",
					    "code": "SSX",
					    "kw": "SamsunSamsun Airport",
					    "city": "萨姆松"
					},{
					    "name": "SAMSUN",
					    "code": "SZF",
					    "kw": "SamsunSamsun Carsamba Airport",
					    "city": "萨姆松"
					},{
					    "name": "圣安德烈斯",
					    "code": "ADZ",
					    "kw": "San Andres IslandSan Andres Island",
					    "city": "圣安德列斯"
					},{
					    "name": "圣安德拉斯",
					    "code": "SAQ",
					    "kw": "San AndrosSan Andros",
					    "city": "圣安德拉斯"
					},{
					    "name": "圣安吉洛",
					    "code": "SJT",
					    "kw": "San AngeloSan Angelo Mathis Field",
					    "city": "圣安吉洛"
					},{
					    "name": "圣博尔哈",
					    "code": "SRJ",
					    "kw": "San BorjaSan Borja",
					    "city": "圣博尔哈"
					},{
					    "name": "SAN DIEGO BROWN",
					    "code": "SDM",
					    "kw": "San DiegoSan Diego Brown Municipal Apt",
					    "city": "圣迭戈"
					},{
					    "name": "圣迭戈",
					    "code": "SAN",
					    "kw": "San DiegoSan Diego International",
					    "city": "圣迭戈"
					},{
					    "name": "SAN DIEGO MONTGOM",
					    "code": "MYF",
					    "kw": "San DiegoSan Diego Montgomery Field",
					    "city": "圣迭戈"
					},{
					    "name": "旧金山",
					    "code": "SFO",
					    "kw": "San FranciscoSan Francisco Int'l Apt",
					    "city": "旧金山"
					},{
					    "name": "SANLUIS OBISPO",
					    "code": "SBP",
					    "kw": "San Luis ObispoSan Luis Obispo County Apt",
					    "city": "圣路易斯奥比斯"
					},{
					    "name": "圣路易斯·奥比斯波",
					    "code": "CSL",
					    "kw": "San Luis ObispoSan Luis Obispo O'Sullivan AAF",
					    "city": "圣路易斯奥比斯"
					},{
					    "name": "圣路易斯波托西",
					    "code": "SLP",
					    "kw": "San Luis PotosiSan Luis Potosi",
					    "city": "圣路易斯波托西"
					},{
					    "name": "圣路易斯",
					    "code": "LUQ",
					    "kw": "San LuisSan Luis",
					    "city": "圣路易斯1"
					},{
					    "name": "圣马丁德洛斯安迪斯",
					    "code": "CPC",
					    "kw": "San Martin de Los AndesSan Martin de Los Andes",
					    "city": "圣马丁安迪斯"
					},{
					    "name": "圣米格尔",
					    "code": "NMG",
					    "kw": "San MiguelSan Miguel",
					    "city": "圣米格尔"
					},{
					    "name": "圣佩德罗",
					    "code": "SPR",
					    "kw": "San PedroSan Pedro",
					    "city": "圣佩德罗2"
					},{
					    "name": "圣多美",
					    "code": "SOM",
					    "kw": "San TomeSan Tome",
					    "city": "圣多美"
					},{
					    "name": "萨那",
					    "code": "SAH",
					    "kw": "SanaaSanaa",
					    "city": "塞那"
					},{
					    "name": "萨南达季",
					    "code": "SDG",
					    "kw": "SanandajSanandaj",
					    "city": "萨南达季"
					},{
					    "name": "山打根",
					    "code": "SDK",
					    "kw": "SandakanSandakan",
					    "city": "山打根"
					},{
					    "name": "桑达讷",
					    "code": "SDN",
					    "kw": "SandaneSandane",
					    "city": "桑达衲"
					},{
					    "name": "桑代",
					    "code": "NDY",
					    "kw": "SandaySanday",
					    "city": "桑代"
					},{
					    "name": "桑内舍恩",
					    "code": "SSJ",
					    "kw": "SandnessjoenSandnessjoen",
					    "city": "桑内舍恩"
					},{
					    "name": "桑加皮",
					    "code": "SGK",
					    "kw": "SangapiSangapi",
					    "city": "桑加皮"
					},{
					    "name": "萨尼基洛克",
					    "code": "YSK",
					    "kw": "SanikiluaqSanikiluaq",
					    "city": "萨尼基洛克"
					},{
					    "name": "圣安娜",
					    "code": "NNB",
					    "kw": "Santa Ana IslandSanta Ana Island",
					    "city": "圣安娜"
					},{
					    "name": "圣安娜·德·玻利",
					    "code": "SBL",
					    "kw": "Santa AnaSanta Ana",
					    "city": "圣安娜德玻利维"
					},{
					    "name": "ORANGE COUNTY",
					    "code": "SNA",
					    "kw": "Santa AnaSanta Ana John Wayne Intl Apt",
					    "city": "拉古纳比奇"
					},{
					    "name": "圣巴巴拉·朱丽亚",
					    "code": "STB",
					    "kw": "Santa Barbara ZuliaSanta Barbara Zulia",
					    "city": "圣巴巴拉朱利亚"
					},{
					    "name": "圣巴巴拉",
					    "code": "SBA",
					    "kw": "Santa BarbaraSanta Barbara Municipal Apt",
					    "city": "圣巴巴拉"
					},{
					    "name": "圣马丽亚",
					    "code": "SMA",
					    "kw": "Santa MariaSanta Maria",
					    "city": "圣马丽亚2"
					},{
					    "name": "圣马丽亚",
					    "code": "SMX",
					    "kw": "Santa MariaSanta Maria",
					    "city": "圣马丽亚"
					},{
					    "name": "圣马尔塔",
					    "code": "SMR",
					    "kw": "Santa MartaSanta Marta",
					    "city": "圣马尔塔"
					},{
					    "name": "圣罗莎",
					    "code": "STS",
					    "kw": "Santa RosaSanta Rosa",
					    "city": "圣罗沙"
					},{
					    "name": "圣罗萨利亚",
					    "code": "SSL",
					    "kw": "Santa RosaliaSanta Rosalia",
					    "city": "圣罗萨丽亚"
					},{
					    "name": "圣地亚哥埃斯泰罗",
					    "code": "SDE",
					    "kw": "Santiago Del EsteroSantiago Del Estero",
					    "city": "圣地亚哥埃斯泰"
					},{
					    "name": "圣地亚哥科波泰拉",
					    "code": "SCQ",
					    "kw": "Santiago de CompostelaSantiago de Compostela",
					    "city": "圣地亚哥科波泰"
					},{
					    "name": "圣地亚哥",
					    "code": "SCU",
					    "kw": "SantiagoSantiago",
					    "city": "圣地亚哥2"
					},{
					    "name": "圣地亚哥",
					    "code": "STI",
					    "kw": "SantiagoSantiago",
					    "city": "圣地亚哥"
					},{
					    "name": "圣地亚哥",
					    "code": "SCL",
					    "kw": "SantiagoSantiago Comodoro Arturo Merino Benitez",
					    "city": "圣地亚哥1"
					},{
					    "name": "圣安唐",
					    "code": "NTO",
					    "kw": "Santo AntaoSanto Antao",
					    "city": "圣安唐"
					},{
					    "name": "圣多明各",
					    "code": "STD",
					    "kw": "Santo DomingoSanto Domingo",
					    "city": "圣多明各"
					},{
					    "name": "圣洛伦索",
					    "code": "SSO",
					    "kw": "Sao LourencoSao Lourenco",
					    "city": "圣洛伦索"
					},{
					    "name": "圣路易斯",
					    "code": "SLZ",
					    "kw": "Sao LuizSao Luiz",
					    "city": "圣路易斯2"
					},{
					    "name": "圣尼古拉",
					    "code": "SNE",
					    "kw": "Sao NicolauSao Nicolau",
					    "city": "圣尼古拉"
					},{
					    "name": "萨拉",
					    "code": "SSR",
					    "kw": "SaraSara",
					    "city": "萨拉"
					},{
					    "name": "萨拉热窝",
					    "code": "SJJ",
					    "kw": "SarajevoSarajevo",
					    "city": "萨拉热窝"
					},{
					    "name": "萨拉纳克莱克",
					    "code": "SLK",
					    "kw": "Saranac LakeSaranac Lake",
					    "city": "普来西德湖"
					},{
					    "name": "萨拉托夫",
					    "code": "RTW",
					    "kw": "SaratovSaratov",
					    "city": "萨拉托夫"
					},{
					    "name": "萨拉韦纳",
					    "code": "RVE",
					    "kw": "SaravenaSaravena",
					    "city": "萨拉维纳"
					},{
					    "name": "萨戈达",
					    "code": "SGI",
					    "kw": "SargodhaSargodha Apt",
					    "city": "萨戈达"
					},{
					    "name": "萨尔",
					    "code": "SRH",
					    "kw": "SarhSarh",
					    "city": "萨尔"
					},{
					    "name": "萨米",
					    "code": "ZRM",
					    "kw": "SarmiSarmi",
					    "city": "萨米"
					},{
					    "name": "萨斯卡通",
					    "code": "YXE",
					    "kw": "SaskatoonSaskatoon",
					    "city": "萨斯卡通"
					},{
					    "name": "萨桑德拉",
					    "code": "ZSS",
					    "kw": "SassandraSassandra",
					    "city": "萨桑德拉"
					},{
					    "name": "萨斯敦",
					    "code": "SAZ",
					    "kw": "SasstownSasstown",
					    "city": "萨斯敦"
					},{
					    "name": "瑟特纳",
					    "code": "TNI",
					    "kw": "SatnaSatna",
					    "city": "瑟特纳"
					},{
					    "name": "萨图马雷",
					    "code": "SUJ",
					    "kw": "Satu MareSatu Mare",
					    "city": "萨图马雷"
					},{
					    "name": "萨特瓦格",
					    "code": "SWG",
					    "kw": "SatwagSatwag",
					    "city": "萨特瓦格"
					},{
					    "name": "瑟伊藻克罗屈尔",
					    "code": "SAK",
					    "kw": "SaudarkrokurSaudarkrokur",
					    "city": "瑟伊藻克罗屈尔"
					},{
					    "name": "萨温拉基",
					    "code": "SXK",
					    "kw": "SaumlakiSaumlaki",
					    "city": "萨温拉基"
					},{
					    "name": "绍里木",
					    "code": "VHC",
					    "kw": "SaurimoSaurimo",
					    "city": "绍里木"
					},{
					    "name": "萨凡纳",
					    "code": "SAV",
					    "kw": "SavannahSavannah International Apt",
					    "city": "萨凡纳"
					},{
					    "name": "萨沃",
					    "code": "SVY",
					    "kw": "SavoSavo",
					    "city": "萨沃"
					},{
					    "name": "萨翁林纳",
					    "code": "SVL",
					    "kw": "SavonlinnaSavonlinna",
					    "city": "萨翁林纳"
					},{
					    "name": "萨武萨武",
					    "code": "SVU",
					    "kw": "SavusavuSavusavu",
					    "city": "萨武萨武"
					},{
					    "name": "萨武",
					    "code": "SAU",
					    "kw": "SawuSawu",
					    "city": "萨武"
					},{
					    "name": "沙耶武里",
					    "code": "ZBY",
					    "kw": "SayabourySayaboury",
					    "city": "沙耶武里"
					},{
					    "name": "塞巴",
					    "code": "XSE",
					    "kw": "SebbaSebba",
					    "city": "塞巴"
					},{
					    "name": "塞卜哈",
					    "code": "SEB",
					    "kw": "SebhaSebha",
					    "city": "塞卜哈"
					},{
					    "name": "塞多姆",
					    "code": "SED",
					    "kw": "SedomSedom",
					    "city": "塞多姆"
					},{
					    "name": "塞多纳",
					    "code": "SDX",
					    "kw": "SedonaSedona",
					    "city": "塞多纳"
					},{
					    "name": "塞给",
					    "code": "EGM",
					    "kw": "SegeSege",
					    "city": "杰内纳"
					},{
					    "name": "塞古",
					    "code": "SZU",
					    "kw": "SegouSegou",
					    "city": "塞古"
					},{
					    "name": "塞古埃拉",
					    "code": "SEO",
					    "kw": "SeguelaSeguela",
					    "city": "塞古埃拉"
					},{
					    "name": "塞洪洪",
					    "code": "SHK",
					    "kw": "SehonghongSehonghong",
					    "city": "塞洪洪"
					},{
					    "name": "赛胡利",
					    "code": "SXH",
					    "kw": "SehuleaSehulea",
					    "city": "塞胡利"
					},{
					    "name": "塞云",
					    "code": "GXF",
					    "kw": "SeiyunSeiyun",
					    "city": "塞云"
					},{
					    "name": "塞莱比-皮奎",
					    "code": "PKW",
					    "kw": "Selebi-PhikweSelebi-Phikwe",
					    "city": "塞莱彼皮奎"
					},{
					    "name": "塞利巴比",
					    "code": "SEY",
					    "kw": "SelibabySelibaby",
					    "city": "塞利巴比"
					},{
					    "name": "三宝垄",
					    "code": "SRG",
					    "kw": "SemarangSemarang",
					    "city": "三宝垄"
					},{
					    "name": "塞米巴拉金斯克",
					    "code": "PLX",
					    "kw": "SemipalatinskSemipalatinsk",
					    "city": "塞米巴拉金斯克"
					},{
					    "name": "赛南加",
					    "code": "SXG",
					    "kw": "SenangaSenanga",
					    "city": "塞南加"
					},{
					    "name": "仙台",
					    "code": "SDJ",
					    "kw": "SendaiSendai",
					    "city": "仙台"
					},{
					    "name": "塞盖",
					    "code": "SEH",
					    "kw": "SenggehSenggeh",
					    "city": "塞盖"
					},{
					    "name": "塞戈",
					    "code": "ZEG",
					    "kw": "SenggoSenggo",
					    "city": "塞戈"
					},{
					    "name": "塞波斐姆",
					    "code": "SEI",
					    "kw": "Senhor Do BonfimSenhor Do Bonfim",
					    "city": "塞波非姆"
					},{
					    "name": "塞诺",
					    "code": "SND",
					    "kw": "SenoSeno",
					    "city": "塞诺"
					},{
					    "name": "塞奥-德乌赫尔",
					    "code": "LEU",
					    "kw": "Seo De UrgelSeo De Urgel",
					    "city": "塞奥德乌赫尔"
					},{
					    "name": "仁川国际",
					    "code": "ICN",
					    "kw": "SeoulIncheon International Airport",
					    "city": "汉城"
					},{
					    "name": "金浦国际",
					    "code": "SEL",
					    "kw": "SeoulSeoul Kimpo International Apt",
					    "city": "汉城"
					},{
					    "name": "金浦",
					    "code": "GMP",
					    "kw": "SeoulSeoul Kimpo Intl Airport",
					    "city": "汉城"
					},{
					    "name": "塞特",
					    "code": "SRX",
					    "kw": "SertSert",
					    "city": "塞特"
					},{
					    "name": "塞鲁伊",
					    "code": "ZRI",
					    "kw": "SeruiSerui",
					    "city": "塞鲁伊"
					},{
					    "name": "塞谢凯",
					    "code": "SJQ",
					    "kw": "SeshekeSesheke",
					    "city": "塞谢凯"
					},{
					    "name": "塞斯胡蒂斯",
					    "code": "SHZ",
					    "kw": "SeshutesSeshutes",
					    "city": "塞斯胡蒂斯"
					},{
					    "name": "塞维莱",
					    "code": "SVQ",
					    "kw": "SevilleSeville",
					    "city": "塞维莱"
					},{
					    "name": "沙基索",
					    "code": "SKR",
					    "kw": "ShakisoShakiso",
					    "city": "沙基索"
					},{
					    "name": "沙克图利克",
					    "code": "SKK",
					    "kw": "ShaktoolikShaktoolik",
					    "city": "沙克图利克"
					},{
					    "name": "沙马塔瓦",
					    "code": "ZTM",
					    "kw": "ShamattawaShamattawa",
					    "city": "沙马塔瓦"
					},{
					    "name": "沙迦",
					    "code": "SHJ",
					    "kw": "SharjahSharjah",
					    "city": "沙迦"
					},{
					    "name": "沙姆沙伊赫",
					    "code": "SSH",
					    "kw": "Sharm El SheikhSharm El Sheikh",
					    "city": "沙姆沙伊赫"
					},{
					    "name": "沙鲁拉",
					    "code": "SHW",
					    "kw": "SharurahSharurah",
					    "city": "沙鲁拉"
					},{
					    "name": "SHETLAND ISLANDS",
					    "code": "LWK",
					    "kw": "Shetland IslandsShetland Islands Lerwick/Tingwall Apt",
					    "city": "社德兰群岛"
					},{
					    "name": "莱威克",
					    "code": "LSI",
					    "kw": "Shetland IslandsShetland Islands Sumburgh Apt",
					    "city": "社德兰群岛"
					},{
					    "name": "奇姆肯特",
					    "code": "CIT",
					    "kw": "ShimkentShimkent",
					    "city": "奇姆肯特"
					},{
					    "name": "设拉子",
					    "code": "SYZ",
					    "kw": "ShirazShiraz",
					    "city": "设拉子"
					},{
					    "name": "绍拉布尔",
					    "code": "SSE",
					    "kw": "SholapurSholapur",
					    "city": "绍拉布尔"
					},{
					    "name": "赛厄勒姆",
					    "code": "SXA",
					    "kw": "SialumSialum",
					    "city": "塞厄勒姆"
					},{
					    "name": "成邦江",
					    "code": "SGG",
					    "kw": "SimanggangSimanggang",
					    "city": "成邦江"
					},{
					    "name": "樟宜",
					    "code": "SIN",
					    "kw": "SingaporeSingapore Changi Apt",
					    "city": "新加坡"
					},{
					    "name": "SG SELETAR APR",
					    "code": "XSP",
					    "kw": "SingaporeSingapore Seletar Apt",
					    "city": "新加坡"
					},{
					    "name": "赛申",
					    "code": "SIS",
					    "kw": "SishenSishen",
					    "city": "赛申"
					},{
					    "name": "霍尔施泰因斯堡",
					    "code": "JHS",
					    "kw": "SisimiutSisimiut",
					    "city": "霍尔施泰因斯堡"
					},{
					    "name": "舍夫德",
					    "code": "KVB",
					    "kw": "SkovdeSkovde",
					    "city": "舍夫德"
					},{
					    "name": "瑟德港",
					    "code": "SOO",
					    "kw": "SoderhamnSoderhamn",
					    "city": "瑟德港"
					},{
					    "name": "南泰利耶",
					    "code": "JSO",
					    "kw": "SodertaljeSodertalje",
					    "city": "南泰利耶"
					},{
					    "name": "森讷堡",
					    "code": "SGD",
					    "kw": "SonderborgSonderborg Airport",
					    "city": "森纳堡"
					},{
					    "name": "瑟休森",
					    "code": "SOJ",
					    "kw": "SorkjosenSorkjosen",
					    "city": "瑟休森"
					},{
					    "name": "南本德",
					    "code": "SBN",
					    "kw": "South BendSouth Bend",
					    "city": "南本德"
					},{
					    "name": "南凯科斯岛",
					    "code": "XSC",
					    "kw": "South CaicosSouth Caicos",
					    "city": "南凯科斯多"
					},{
					    "name": "南印第安湖",
					    "code": "XSI",
					    "kw": "South Indian LakeSouth Indian Lake",
					    "city": "绍森德"
					},{
					    "name": "南纳克讷克",
					    "code": "WSN",
					    "kw": "South NaknekSouth Naknek",
					    "city": "南印第安湖"
					},{
					    "name": "南安普敦",
					    "code": "SOU",
					    "kw": "SouthamptonSouthampton",
					    "city": "纳安普敦"
					},{
					    "name": "绍森德",
					    "code": "SEN",
					    "kw": "SouthendSouthend",
					    "city": "绍森德1"
					},{
					    "name": "派恩赫斯特",
					    "code": "SOP",
					    "kw": "Southern PinesSouthern Pines",
					    "city": "派恩赫斯特"
					},{
					    "name": "圣安东尼",
					    "code": "YAY",
					    "kw": "St AnthonySt Anthony",
					    "city": "圣安东尼"
					},{
					    "name": "圣巴特黑利米",
					    "code": "SBH",
					    "kw": "St BarthelemySt Barthelemy",
					    "city": "圣把特黑利米"
					},{
					    "name": "圣布里厄",
					    "code": "SBK",
					    "kw": "St BrieucSt Brieuc",
					    "city": "圣布里厄"
					},{
					    "name": "圣丹尼斯",
					    "code": "RUN",
					    "kw": "St Denis de la ReunionSt Denis de la Reunion",
					    "city": "圣丹尼斯"
					},{
					    "name": "圣埃田讷",
					    "code": "EBU",
					    "kw": "St EtienneSt Etienne",
					    "city": "圣埃田奈"
					},{
					    "name": "圣奥依斯坦图斯",
					    "code": "EUX",
					    "kw": "St EustatiusSt Eustatius",
					    "city": "圣奥伊斯坦图斯"
					},{
					    "name": "圣路易斯",
					    "code": "STL",
					    "kw": "St LouisSt Louis Lambert Intl Apt",
					    "city": "圣路易斯"
					},{
					    "name": "圣·马丁",
					    "code": "SFG",
					    "kw": "St MartinSt Martin Esperance Apt",
					    "city": "圣马丁"
					},{
					    "name": "F ANTILL ES",
					    "code": "CCE",
					    "kw": "St MartinSt Martin Grand Case Apt",
					    "city": "圣马丁"
					},{
					    "name": "圣莫里茨",
					    "code": "SMV",
					    "kw": "St MoritzSt Moritz",
					    "city": "圣莫里茨"
					},{
					    "name": "圣纳泽尔",
					    "code": "SNR",
					    "kw": "St NazaireSt Nazaire",
					    "city": "圣纳泽尔"
					},{
					    "name": "圣保罗",
					    "code": "ZSP",
					    "kw": "St PaulSt Paul",
					    "city": "圣保罗"
					},{
					    "name": "列宁格勒",
					    "code": "LED",
					    "kw": "St PetersburgSt Petersburg Pulkovo Apt",
					    "city": "列宁格勒"
					},{
					    "name": "RZHEVKA",
					    "code": "RVH",
					    "kw": "St PetersburgSt Petersburg Rzhevka",
					    "city": "列宁格勒"
					},{
					    "name": "旧扎戈拉",
					    "code": "SZR",
					    "kw": "Stara ZagoraStara Zagora",
					    "city": "日扎戈拉"
					},{
					    "name": "圣马瑞依",
					    "code": "SMS",
					    "kw": "Ste MarieSte Marie",
					    "city": "圣马丽"
					},{
					    "name": "阿兰达",
					    "code": "ARN",
					    "kw": "StockholmStockholm Arlanda Apt",
					    "city": "斯德哥尔摩"
					},{
					    "name": "CITY IN SWEDEN",
					    "code": "BMA",
					    "kw": "StockholmStockholm Bromma Apt",
					    "city": "斯德哥尔摩"
					},{
					    "name": "尼雪平",
					    "code": "NYO",
					    "kw": "StockholmStockholm Skavsta Airport",
					    "city": "斯德哥尔摩"
					},{
					    "name": "萨姆特",
					    "code": "SSC",
					    "kw": "SumterSumter Shaw AFB",
					    "city": "萨姆特"
					},{
					    "name": "太阳城",
					    "code": "NTY",
					    "kw": "Sun CitySun City",
					    "city": "森城"
					},{
					    "name": "森瓦利",
					    "code": "SUN",
					    "kw": "Sun ValleySun Valley Friedman Memorial Apt",
					    "city": "哈伊利"
					},{
					    "name": "泗水",
					    "code": "SUB",
					    "kw": "SurabayaSurabaya",
					    "city": "泗水"
					},{
					    "name": "SYDNEY AU ROSE",
					    "code": "RSE",
					    "kw": "SydneySydney Au-Rose Bay Apt",
					    "city": "悉尼"
					},{
					    "name": "金斯福史密斯",
					    "code": "SYD",
					    "kw": "SydneySydney Kingsford Smith Apt",
					    "city": "悉尼"
					},{
					    "name": "SYDNEY PALM BEACH",
					    "code": "LBH",
					    "kw": "SydneySydney Palm Beach SPB",
					    "city": "悉尼"
					},{
					    "name": "瑟克特夫卡尔",
					    "code": "SCW",
					    "kw": "SyktyvkarSyktyvkar",
					    "city": "瑟克特夫卡尔"
					},{
					    "name": "大布里士",
					    "code": "TBZ",
					    "kw": "TabrizTabriz",
					    "city": "大布里士"
					},{
					    "name": "大其力",
					    "code": "THL",
					    "kw": "TachilekTachilek",
					    "city": "大勘"
					},{
					    "name": "大邱",
					    "code": "TAE",
					    "kw": "TaeguTaegu",
					    "city": "大邱"
					},{
					    "name": "中华台北台中",
					    "code": "RMQ",
					    "kw": "TaichungTaichung Airport",
					    "city": "台中"
					},{
					    "name": "桃园国际",
					    "code": "TPE",
					    "kw": "Taoyuan Airport",
					    "city": "台北"
					},{
					    "name": "大社",
					    "code": "TSC",
					    "kw": "TaishaTaisha",
					    "city": "大社"
					},{
					    "name": "达府",
					    "code": "TKT",
					    "kw": "TakTak",
					    "city": "达府"
					},{
					    "name": "高松",
					    "code": "TAK",
					    "kw": "TakamatsuTakamatsu",
					    "city": "高松"
					},{
					    "name": "丹达",
					    "code": "TDG",
					    "kw": "TandagTandag",
					    "city": "丹达"
					},{
					    "name": "丹卡",
					    "code": "TGT",
					    "kw": "TangaTanga",
					    "city": "丹卡"
					},{
					    "name": "丹戎潘丹",
					    "code": "TJQ",
					    "kw": "Tanjung PandanTanjung Pandan",
					    "city": "丹戒潘丹"
					},{
					    "name": "丹戎槟榔",
					    "code": "TNJ",
					    "kw": "Tanjung PinangTanjung Pinang",
					    "city": "丹戒宾榔"
					},{
					    "name": "丹戎塞洛",
					    "code": "TJS",
					    "kw": "Tanjung SelorTanjung Selor",
					    "city": "丹戒塞洛"
					},{
					    "name": "打巴端",
					    "code": "TPK",
					    "kw": "TapaktuanTapaktuan",
					    "city": "打巴端"
					},{
					    "name": "打拉根",
					    "code": "TRK",
					    "kw": "TarakanTarakan",
					    "city": "打拉根"
					},{
					    "name": "多良间岛",
					    "code": "TRA",
					    "kw": "TaramajimaTaramajima",
					    "city": "多良间岛"
					},{
					    "name": "塔什干",
					    "code": "TAS",
					    "kw": "TashkentTashkent",
					    "city": "塔什干"
					},{
					    "name": "安马赫夏利克",
					    "code": "AGM",
					    "kw": "TasiilaqTasiilaq",
					    "city": "安马赫夏利克"
					},{
					    "name": "斗湖",
					    "code": "TWU",
					    "kw": "TawauTawau",
					    "city": "斗湖"
					},{
					    "name": "第比利斯",
					    "code": "TBS",
					    "kw": "TbilisiTbilisi",
					    "city": "第比利斯"
					},{
					    "name": "奇班加",
					    "code": "TCH",
					    "kw": "TchibangaTchibanga",
					    "city": "奇班加"
					},{
					    "name": "奇恩",
					    "code": "THC",
					    "kw": "TchienTchien",
					    "city": "奇恩"
					},{
					    "name": "蒂阿瑙",
					    "code": "TEU",
					    "kw": "Te AnauTe Anau",
					    "city": "蒂阿瑙"
					},{
					    "name": "蒂赛德",
					    "code": "MME",
					    "kw": "TeessideTeesside",
					    "city": "蒂塞德"
					},{
					    "name": "德黑兰",
					    "code": "IKA",
					    "kw": "TehranTEHRAN IMAM KHOMEINI INTERNATIONAL APT",
					    "city": "德黑兰"
					},{
					    "name": "德黑兰",
					    "code": "THR",
					    "kw": "TehranTehran",
					    "city": "德黑兰"
					},{
					    "name": "捷金",
					    "code": "TKW",
					    "kw": "TekinTekin",
					    "city": "捷金"
					},{
					    "name": "布雷维格",
					    "code": "KTS",
					    "kw": "Teller MissionTeller Mission",
					    "city": "布雷维格"
					},{
					    "name": "莱桑特岛",
					    "code": "LSS",
					    "kw": "Terre-de-HautTerre-de-Haut",
					    "city": "来桑特到"
					},{
					    "name": "得土安",
					    "code": "TTU",
					    "kw": "TetuanTetuan",
					    "city": "得土按"
					},{
					    "name": "德苏",
					    "code": "TEI",
					    "kw": "TezuTezu",
					    "city": "德苏"
					},{
					    "name": "丹克",
					    "code": "SNW",
					    "kw": "ThandweThandwe",
					    "city": "丹兑"
					},{
					    "name": "帕斯",
					    "code": "YQD",
					    "kw": "The PasThe Pas",
					    "city": "帕斯"
					},{
					    "name": "塞萨洛尼基",
					    "code": "SKG",
					    "kw": "ThessalonikiThessaloniki",
					    "city": "塞萨罗尼基"
					},{
					    "name": "齐斯泰兹",
					    "code": "TED",
					    "kw": "ThistedThisted",
					    "city": "奇斯泰兹"
					},{
					    "name": "蒂加岛",
					    "code": "TGJ",
					    "kw": "TigaTiga",
					    "city": "蒂加岛"
					},{
					    "name": "蒂涅",
					    "code": "TGF",
					    "kw": "TignesTignes",
					    "city": "蒂捏"
					},{
					    "name": "蒂华纳",
					    "code": "TIJ",
					    "kw": "TijuanaTijuana",
					    "city": "蒂华纳"
					},{
					    "name": "蒂卡尔",
					    "code": "TKM",
					    "kw": "TikalTikal",
					    "city": "蒂卡尔"
					},{
					    "name": "蒂凯豪",
					    "code": "TIH",
					    "kw": "Tikehau AtollTikehau Atoll",
					    "city": "蒂凯豪环礁"
					},{
					    "name": "蒂科",
					    "code": "TKC",
					    "kw": "TikoTiko",
					    "city": "蒂科"
					},{
					    "name": "蒂马鲁",
					    "code": "TIU",
					    "kw": "TimaruTimaru",
					    "city": "蒂马鲁"
					},{
					    "name": "蒂米什瓦拉",
					    "code": "TSR",
					    "kw": "TimisoaraTimisoara",
					    "city": "蒂米什瓦拉"
					},{
					    "name": "雕门",
					    "code": "TOD",
					    "kw": "TiomanTioman",
					    "city": "雕门"
					},{
					    "name": "蒂皮",
					    "code": "TIE",
					    "kw": "TippiTippi",
					    "city": "蒂皮"
					},{
					    "name": "蒂普蒂尼",
					    "code": "TPN",
					    "kw": "TiputiniTiputini",
					    "city": "蒂普蒂尼"
					},{
					    "name": "地拉那",
					    "code": "TIA",
					    "kw": "TiranaTirana",
					    "city": "地拉那"
					},{
					    "name": "蒂鲁吉拉帕利",
					    "code": "TRZ",
					    "kw": "TiruchirapallyTiruchirapally",
					    "city": "蒂鲁吉拉帕利"
					},{
					    "name": "蒂鲁伯蒂",
					    "code": "TIR",
					    "kw": "TirupatiTirupati",
					    "city": "蒂鲁伯蒂"
					},{
					    "name": "蒂瓦特",
					    "code": "TIV",
					    "kw": "TivatTivat",
					    "city": "蒂瓦特"
					},{
					    "name": "多巴哥",
					    "code": "TAB",
					    "kw": "TobagoTobago",
					    "city": "多巴哥"
					},{
					    "name": "德三岛",
					    "code": "TKN",
					    "kw": "TokunoshimaTokunoshima",
					    "city": "德三岛"
					},{
					    "name": "德岛",
					    "code": "TKS",
					    "kw": "TokushimaTokushima",
					    "city": "德岛"
					},{
					    "name": "羽田",
					    "code": "HND",
					    "kw": "TokyoTokyo Haneda Apt",
					    "city": "东京"
					},{
					    "name": "成田",
					    "code": "NRT",
					    "kw": "TokyoTokyo Narita Apt",
					    "city": "东京"
					},{
					    "name": "富山",
					    "code": "TOY",
					    "kw": "ToyamaToyama",
					    "city": "富山"
					},{
					    "name": "董里",
					    "code": "TST",
					    "kw": "TrangTrang",
					    "city": "董里"
					},{
					    "name": "的黎波里",
					    "code": "KYE",
					    "kw": "TripoliTripoli",
					    "city": "的梨波里"
					},{
					    "name": "特鲁克",
					    "code": "TKK",
					    "kw": "TrukTruk",
					    "city": "查拉塔纳纳"
					},{
					    "name": "察拉塔纳纳",
					    "code": "TTS",
					    "kw": "TsaratananaTsaratanana",
					    "city": "切利诺格勒"
					},{
					    "name": "奇卡帕",
					    "code": "TSH",
					    "kw": "TshikapaTshikapa",
					    "city": "奇皮塞"
					},{
					    "name": "奇皮塞",
					    "code": "TSD",
					    "kw": "TshipiseTshipise",
					    "city": "奇鲁阿努曼迪迪"
					},{
					    "name": "齐鲁阿努曼迪迪",
					    "code": "WTS",
					    "kw": "TsiroanomandidyTsiroanomandidy",
					    "city": "楚梅布"
					},{
					    "name": "津岛",
					    "code": "TSJ",
					    "kw": "TsushimaTsushima",
					    "city": "津岛"
					},{
					    "name": "诺曼堡",
					    "code": "ZFN",
					    "kw": "Tulita Fort NormanTulita Fort Norman",
					    "city": "诺曼堡"
					},{
					    "name": "杜尔伯德",
					    "code": "TUK",
					    "kw": "TurbatTurbat",
					    "city": "杜尔伯德"
					},{
					    "name": "TURIN",
					    "code": "ZTC",
					    "kw": "TurinTurin Bus Station",
					    "city": "都灵"
					},{
					    "name": "都灵",
					    "code": "TRN",
					    "kw": "TurinTurin Citta di Torino Airport",
					    "city": "都灵"
					},{
					    "name": "克拉斯诺沃茨克",
					    "code": "KRW",
					    "kw": "TurkmanbashiTurkmanbashi",
					    "city": "科拉斯诺沃茨克"
					},{
					    "name": "秋明",
					    "code": "TJM",
					    "kw": "TyumenTyumen",
					    "city": "秋明"
					},{
					    "name": "察嫩",
					    "code": "LTA",
					    "kw": "TzaneenTzaneen",
					    "city": "察嫩"
					},{
					    "name": "乌兰巴托",
					    "code": "ULN",
					    "kw": "UlaanbaatarUlaanbaatar",
					    "city": "乌兰巴托"
					},{
					    "name": "大学城",
					    "code": "UOX",
					    "kw": "UniversityUniversity",
					    "city": "大学城"
					},{
					    "name": "阿平顿",
					    "code": "UTN",
					    "kw": "UpingtonUpington",
					    "city": "阿平顿"
					},{
					    "name": "巴尔切塔",
					    "code": "VCF",
					    "kw": "ValchetaValcheta",
					    "city": "巴尔切塔"
					},{
					    "name": "帕斯夸谷镇",
					    "code": "VDP",
					    "kw": "Valle de PascuaValle de Pascua",
					    "city": "帕斯夸谷镇"
					},{
					    "name": "巴耶杜帕尔",
					    "code": "VUP",
					    "kw": "ValleduparValledupar",
					    "city": "巴耶杜帕尔"
					},{
					    "name": "凡城",
					    "code": "VAN",
					    "kw": "VanVan",
					    "city": "凡城"
					},{
					    "name": "VANCOUVER COAL",
					    "code": "CXH",
					    "kw": "VancouverVancouver Coal Harbour SPB",
					    "city": "温哥华"
					},{
					    "name": "温哥华国际",
					    "code": "YVR",
					    "kw": "VancouverVancouver Int'l Apt",
					    "city": "温哥华"
					},{
					    "name": "巴拉德罗",
					    "code": "VRA",
					    "kw": "VaraderoVaradero Juan Gualberto Gomez Apt",
					    "city": "巴拉德罗"
					},{
					    "name": "比查德罗",
					    "code": "VCH",
					    "kw": "VichaderoVichadero",
					    "city": "比查德罗"
					},{
					    "name": "别德马",
					    "code": "VDM",
					    "kw": "ViedmaViedma",
					    "city": "别德马"
					},{
					    "name": "万象",
					    "code": "VTE",
					    "kw": "VientianeVientiane",
					    "city": "万象"
					},{
					    "name": "别克斯",
					    "code": "VQS",
					    "kw": "ViequesVieques",
					    "city": "别克斯"
					},{
					    "name": "雷阿尔城",
					    "code": "VRL",
					    "kw": "Vila RealVila Real",
					    "city": "雷阿而城"
					},{
					    "name": "梅塞德斯镇",
					    "code": "VME",
					    "kw": "Villa MercedesVilla Mercedes",
					    "city": "梅塞德斯镇"
					},{
					    "name": "比亚赫尔摩萨",
					    "code": "VSA",
					    "kw": "VillahermosaVillahermosa",
					    "city": "比亚赫尔摩萨"
					},{
					    "name": "比亚蒙特斯",
					    "code": "VLM",
					    "kw": "VillamontesVillamontes",
					    "city": "比亚蒙特斯"
					},{
					    "name": "比亚维森西奥",
					    "code": "VVC",
					    "kw": "VillavicencioVillavicencio",
					    "city": "比亚维森西奥"
					},{
					    "name": "比拉克",
					    "code": "VRC",
					    "kw": "ViracVirac",
					    "city": "比拉一克"
					},{
					    "name": "奥尔忠尼启则",
					    "code": "OGZ",
					    "kw": "VladikavkazVladikavkaz",
					    "city": "奥尔忠尼启则"
					},{
					    "name": "符拉迪沃斯托克",
					    "code": "VVO",
					    "kw": "VladivostokVladivostok",
					    "city": "符拉迪沃斯托克"
					},{
					    "name": "伏尔加格勒",
					    "code": "VOG",
					    "kw": "VolgogradVolgograd",
					    "city": "伏尔加格勒"
					},{
					    "name": "弗雷黑德",
					    "code": "VYD",
					    "kw": "VryheidVryheid",
					    "city": "弗雷黑德"
					},{
					    "name": "鲸湾港",
					    "code": "WVB",
					    "kw": "Walvis BayWalvis Bay",
					    "city": "鲸湾港"
					},{
					    "name": "华沙",
					    "code": "WAW",
					    "kw": "WarsawWarsaw",
					    "city": "华沙"
					},{
					    "name": "滑铁卢",
					    "code": "ALO",
					    "kw": "WaterlooWaterloo",
					    "city": "滑铁卢"
					},{
					    "name": "惠灵顿",
					    "code": "WLG",
					    "kw": "WellingtonWellington",
					    "city": "惠灵顿"
					},{
					    "name": "拉科拉马特尔",
					    "code": "YLE",
					    "kw": "Wha Ti  Lac la MartreWha Ti  Lac la Martre",
					    "city": "拉克拉马特尔"
					},{
					    "name": "怀尔考夫",
					    "code": "YXN",
					    "kw": "Whale CoveWhale Cove",
					    "city": "怀尔考夫"
					},{
					    "name": "怀阿拉",
					    "code": "WYA",
					    "kw": "WhyallaWhyalla",
					    "city": "怀啊拉"
					},{
					    "name": "怀斯",
					    "code": "LNP",
					    "kw": "WiseWise",
					    "city": "怀斯"
					},{
					    "name": "里格利",
					    "code": "YWY",
					    "kw": "WrigleyWrigley",
					    "city": "里格利"
					},{
					    "name": "弗罗茨瓦夫",
					    "code": "WRO",
					    "kw": "WroclawWroclaw",
					    "city": "弗罗次瓦夫"
					},{
					    "name": "山形",
					    "code": "GAJ",
					    "kw": "YamagataYamagata",
					    "city": "山形"
					},{
					    "name": "明加拉顿",
					    "code": "RGN",
					    "kw": "YangonYangon",
					    "city": "仰光"
					},{
					    "name": "醴泉",
					    "code": "YEC",
					    "kw": "YechonYechon",
					    "city": "龋泉"
					},{
					    "name": "日惹",
					    "code": "JOG",
					    "kw": "YogyakartaYogyakarta",
					    "city": "日惹"
					},{
					    "name": "米子",
					    "code": "YGJ",
					    "kw": "YonagoYonago",
					    "city": "来子"
					},{
					    "name": "丽水",
					    "code": "RSU",
					    "kw": "YosuYosu",
					    "city": "丽水"
					},{
					    "name": "扬斯敦",
					    "code": "YNG",
					    "kw": "YoungstownYoungstown",
					    "city": "沙伦"
					},{
					    "name": "南萨哈林斯克",
					    "code": "UUS",
					    "kw": "Yuzhno-SakhalinskYuzhno-Sakhalinsk",
					    "city": "南萨哈林"
					},{
					    "name": "扎切尔湾",
					    "code": "KZB",
					    "kw": "Zachar BayZachar Bay",
					    "city": "萨卡特卡斯"
					},{
					    "name": "萨赫丹",
					    "code": "ZAH",
					    "kw": "ZahedanZahedan",
					    "city": "萨格勒布"
					},{
					    "name": "桑给巴尔",
					    "code": "ZNZ",
					    "kw": "ZanzibarZanzibar",
					    "city": "桑给巴尔"
					},{
					    "name": "萨帕拉",
					    "code": "APZ",
					    "kw": "ZapalaZapala",
					    "city": "萨帕拉"
					},{
					    "name": "萨拉戈萨",
					    "code": "ZAZ",
					    "kw": "ZaragozaZaragoza",
					    "city": "萨拉戈萨"
					},{
					    "name": "齐罗",
					    "code": "ZER",
					    "kw": "ZeroZero",
					    "city": "齐罗"
					},{
					    "name": "江布尔",
					    "code": "DMB",
					    "kw": "ZhambylZhambyl",
					    "city": "江布尔"
					},{
					    "name": "若布",
					    "code": "PZH",
					    "kw": "ZhobZhob",
					    "city": "若布"
					},{
					    "name": "绿山城",
					    "code": "IEG",
					    "kw": "Zielona GoraZielona Gora",
					    "city": "绿山城"
					},{
					    "name": "济金绍尔",
					    "code": "ZIG",
					    "kw": "ZiguinchorZiguinchor",
					    "city": "济金绍尔"
					},{
					    "name": "日利纳",
					    "code": "ILZ",
					    "kw": "ZilinaZilina",
					    "city": "日利纳"
					},{
					    "name": "津德尔",
					    "code": "ZND",
					    "kw": "ZinderZinder",
					    "city": "津德尔"
					},{
					    "name": "哥特瓦尔多夫",
					    "code": "GTW",
					    "kw": "ZlinZlin",
					    "city": "哥特瓦尔多夫"
					},{
					    "name": "苏黎世国际",
					    "code": "ZRH",
					    "kw": "ZurichZ¨1rich Unique Airport",
					    "city": "苏黎世"
					}
			     ],
			     //TODO
			     airports_en : [
					{
					    "name": "Aalborg Airport",
					"code": "AAL",
					"kw": "",
					"city": "Aalborg"
					},{
					    "name": "Aalesund",
					"code": "AES",
					"kw": "",
					"city": "Aalesund"
					},{
					    "name": "Aarhus Rail Station",
					"code": "ZJH",
					"kw": "",
					"city": "Aarhus"
					},{
					    "name": "Aarhus Tirstrup Airport",
					"code": "AAR",
					"kw": "",
					"city": "Aarhus"
					},{
					    "name": "Aasiaat",
					"code": "JEG",
					"kw": "",
					"city": "Aasiaat"
					},{
					    "name": "Abadan",
					"code": "ABD",
					"kw": "",
					"city": "Abadan"
					},{
					    "name": "Abaiang",
					"code": "ABF",
					"kw": "",
					"city": "Abaiang"
					},{
					    "name": "Abakan",
					"code": "ABA",
					"kw": "",
					"city": "Abakan"
					},{
					    "name": "Abecher",
					"code": "AEH",
					"kw": "",
					"city": "Abecher"
					},{
					    "name": "Abemama Atoll",
					"code": "AEA",
					"kw": "",
					"city": "Abemama Atoll"
					},{
					    "name": "Abengourou",
					"code": "OGO",
					"kw": "",
					"city": "Abengourou"
					},{
					    "name": "Aberdeen",
					"code": "ABZ",
					"kw": "",
					"city": "Aberdeen"
					},{
					    "name": "Abha",
					"code": "AHB",
					"kw": "",
					"city": "Abha"
					},{
					    "name": "DHABI BUS STATION",
					"code": "ZVJ",
					"kw": "",
					"city": "Abu Dhabi"
					},{
					    "name": "Abu Dhabi International ",
					"code": "AUH",
					"kw": "",
					"city": "Abu Dhabi"
					},{
					    "name": "Abu Simbel",
					"code": "ABS",
					"kw": "",
					"city": "Abu Simbel"
					},{
					    "name": "Abuja",
					"code": "ABV",
					"kw": "",
					"city": "Abuja"
					},{
					    "name": "Acandi",
					"code": "ACD",
					"kw": "",
					"city": "Acandi"
					},{
					    "name": "Acapulco",
					"code": "ACA",
					"kw": "",
					"city": "Acapulco"
					},{
					    "name": "Acarigua",
					"code": "AGV",
					"kw": "",
					"city": "Acarigua"
					},{
					    "name": "Accra",
					"code": "ACC",
					"kw": "",
					"city": "Accra"
					},{
					    "name": "Adak Island",
					"code": "ADK",
					"kw": "",
					"city": "Adak Island"
					},{
					    "name": "Adana",
					"code": "ADA",
					"kw": "",
					"city": "Adana"
					},{
					    "name": "Adelaide",
					"code": "ADL",
					"kw": "",
					"city": "Adelaide"
					},{
					    "name": "Adler/Sochi",
					"code": "AER",
					"kw": "",
					"city": "Adler/Sochi"
					},{
					    "name": "Adrar",
					"code": "AZR",
					"kw": "",
					"city": "Adrar"
					},{
					    "name": "Afore",
					"code": "AFR",
					"kw": "",
					"city": "Afore"
					},{
					    "name": "Agades",
					"code": "AJY",
					"kw": "",
					"city": "Agades"
					},{
					    "name": "Agadir",
					"code": "AGA",
					"kw": "",
					"city": "Agadir"
					},{
					    "name": "Agartala",
					"code": "IXA",
					"kw": "",
					"city": "Agartala"
					},{
					    "name": "Agatti Island",
					"code": "AGX",
					"kw": "",
					"city": "Agatti Island"
					},{
					    "name": "Agaun",
					"code": "AUP",
					"kw": "",
					"city": "Agaun"
					},{
					    "name": "Agen",
					"code": "AGF",
					"kw": "",
					"city": "Agen"
					},{
					    "name": "Aggeneys",
					"code": "AGZ",
					"kw": "",
					"city": "Aggeneys"
					},{
					    "name": "Agrinion",
					"code": "AGQ",
					"kw": "",
					"city": "Agrinion"
					},{
					    "name": "Aguadilla",
					"code": "BQN",
					"kw": "",
					"city": "Aguadilla"
					},{
					    "name": "Aguascalientes",
					"code": "AGU",
					"kw": "",
					"city": "Aguascalientes"
					},{
					    "name": "Aguni",
					"code": "AGJ",
					"kw": "",
					"city": "Aguni"
					},{
					    "name": "Ahmedabad",
					"code": "AMD",
					"kw": "",
					"city": "Ahmedabad"
					},{
					    "name": "Ahwaz",
					"code": "AWZ",
					"kw": "",
					"city": "Ahwaz"
					},{
					    "name": "Ailuk Island",
					"code": "AIM",
					"kw": "",
					"city": "Ailuk Island"
					},{
					    "name": "Aioun el Atrouss",
					"code": "AEO",
					"kw": "",
					"city": "Aioun el Atrouss"
					},{
					    "name": "Airok",
					"code": "AIC",
					"kw": "",
					"city": "Airok"
					},{
					    "name": "Aishalton",
					"code": "AHL",
					"kw": "",
					"city": "Aishalton"
					},{
					    "name": "Aitape",
					"code": "ATP",
					"kw": "",
					"city": "Aitape"
					},{
					    "name": "Aitutaki",
					"code": "AIT",
					"kw": "",
					"city": "Aitutaki"
					},{
					    "name": "Aiyura",
					"code": "AYU",
					"kw": "",
					"city": "Aiyura"
					},{
					    "name": "Aizawl",
					"code": "AJL",
					"kw": "",
					"city": "Aizawl"
					},{
					    "name": "Ajaccio",
					"code": "AJA",
					"kw": "",
					"city": "Ajaccio"
					},{
					    "name": "Akieni",
					"code": "AKE",
					"kw": "",
					"city": "Akieni"
					},{
					    "name": "Akita",
					"code": "AXT",
					"kw": "",
					"city": "Akita"
					},{
					    "name": "Akjoujt",
					"code": "AJJ",
					"kw": "",
					"city": "Akjoujt"
					},{
					    "name": "Aklavik",
					"code": "LAK",
					"kw": "",
					"city": "Aklavik"
					},{
					    "name": "Akola",
					"code": "AKD",
					"kw": "",
					"city": "Akola"
					},{
					    "name": "Aktyubinsk",
					"code": "AKX",
					"kw": "",
					"city": "Aktyubinsk"
					},{
					    "name": "Akureyri",
					"code": "AEY",
					"kw": "",
					"city": "Akureyri"
					},{
					    "name": "Al Arish",
					"code": "AAC",
					"kw": "",
					"city": "Al Arish"
					},{
					    "name": "Al Ghaydah",
					"code": "AAY",
					"kw": "",
					"city": "Al Ghaydah"
					},{
					    "name": "Al Hoceima",
					"code": "AHU",
					"kw": "",
					"city": "Al Hoceima"
					},{
					    "name": "Al-Baha",
					"code": "ABT",
					"kw": "",
					"city": "Al-Baha"
					},{
					    "name": "Al-Fujairah",
					"code": "FJR",
					"kw": "",
					"city": "Al-Fujairah"
					},{
					    "name": "Alah",
					"code": "AAV",
					"kw": "",
					"city": "Alah"
					},{
					    "name": "Alamos",
					"code": "XAL",
					"kw": "",
					"city": "Alamos"
					},{
					    "name": "Alamosa",
					"code": "ALS",
					"kw": "",
					"city": "Alamosa"
					},{
					    "name": "Albany Dougherty County ",
					"code": "ABY",
					"kw": "",
					"city": "Albany"
					},{
					    "name": "Albenga",
					"code": "ALL",
					"kw": "",
					"city": "Albenga"
					},{
					    "name": "Albi",
					"code": "LBI",
					"kw": "",
					"city": "Albi"
					},{
					    "name": "Albuq",
					"code": "BUK",
					"kw": "",
					"city": "Albuq"
					},{
					    "name": "Albury",
					"code": "ABX",
					"kw": "",
					"city": "Albury"
					},{
					    "name": "Alderney",
					"code": "ACI",
					"kw": "",
					"city": "Alderney"
					},{
					    "name": "Aleg",
					"code": "LEG",
					"kw": "",
					"city": "Aleg"
					},{
					    "name": "Aleppo",
					"code": "ALP",
					"kw": "",
					"city": "Aleppo"
					},{
					    "name": "Alghero",
					"code": "AHO",
					"kw": "",
					"city": "Alghero"
					},{
					    "name": "Algiers",
					"code": "ALG",
					"kw": "",
					"city": "Algiers"
					},{
					    "name": "Alicante",
					"code": "ALC",
					"kw": "",
					"city": "Alicante"
					},{
					    "name": "Alice Springs",
					"code": "ASP",
					"kw": "",
					"city": "Alice Springs"
					},{
					    "name": "Allahabad",
					"code": "IXD",
					"kw": "",
					"city": "Allahabad"
					},{
					    "name": "Alldays",
					"code": "ADY",
					"kw": "",
					"city": "Alldays"
					},{
					    "name": "Allentown/Bethlehem/Easton",
					"code": "ABE",
					"kw": "",
					"city": "Allentown/Bethlehem/Easton"
					},{
					    "name": "Alliance",
					"code": "AIA",
					"kw": "",
					"city": "Alliance"
					},{
					    "name": "Almaty",
					"code": "ALA",
					"kw": "",
					"city": "Almaty"
					},{
					    "name": "Almenara",
					"code": "AMJ",
					"kw": "",
					"city": "Almenara"
					},{
					    "name": "Almeria",
					"code": "LEI",
					"kw": "",
					"city": "Almeria"
					},{
					    "name": "Alor Island",
					"code": "ARD",
					"kw": "",
					"city": "Alor Island"
					},{
					    "name": "Alotau",
					"code": "GUR",
					"kw": "",
					"city": "Alotau"
					},{
					    "name": "Alpe d'Huez",
					"code": "AHZ",
					"kw": "",
					"city": "Alpe d'Huez"
					},{
					    "name": "Alroy Downs",
					"code": "AYD",
					"kw": "",
					"city": "Alroy Downs"
					},{
					    "name": "Alta",
					"code": "ALF",
					"kw": "",
					"city": "Alta"
					},{
					    "name": "Altamira",
					"code": "ATM",
					"kw": "",
					"city": "Altamira"
					},{
					    "name": "Altenrhein",
					"code": "ACH",
					"kw": "",
					"city": "Altenrhein"
					},{
					    "name": "Alto Rio Senguerr",
					"code": "ARR",
					"kw": "",
					"city": "Alto Rio Senguerr"
					},{
					    "name": "Alton",
					"code": "ALN",
					"kw": "",
					"city": "Alton"
					},{
					    "name": "Altoona",
					"code": "AOO",
					"kw": "",
					"city": "Altoona"
					},{
					    "name": "Alula",
					"code": "ALU",
					"kw": "",
					"city": "Alula"
					},{
					    "name": "Ama",
					"code": "AMF",
					"kw": "",
					"city": "Ama"
					},{
					    "name": "Amahai",
					"code": "AHI",
					"kw": "",
					"city": "Amahai"
					},{
					    "name": "Amanab",
					"code": "AMU",
					"kw": "",
					"city": "Amanab"
					},{
					    "name": "Amarillo International ",
					"code": "AMA",
					"kw": "",
					"city": "Amarillo"
					},{
					    "name": "Ambanja",
					"code": "IVA",
					"kw": "",
					"city": "Ambanja"
					},{
					    "name": "Ambato",
					"code": "ATF",
					"kw": "",
					"city": "Ambato"
					},{
					    "name": "Ambatomainty",
					"code": "AMY",
					"kw": "",
					"city": "Ambatomainty"
					},{
					    "name": "Ambatondrazaka",
					"code": "WAM",
					"kw": "",
					"city": "Ambatondrazaka"
					},{
					    "name": "Ambilobe",
					"code": "AMB",
					"kw": "",
					"city": "Ambilobe"
					},{
					    "name": "Amboin",
					"code": "AMG",
					"kw": "",
					"city": "Amboin"
					},{
					    "name": "Ambon",
					"code": "AMQ",
					"kw": "",
					"city": "Ambon"
					},{
					    "name": "Amboseli",
					"code": "ASV",
					"kw": "",
					"city": "Amboseli"
					},{
					    "name": "Ambriz",
					"code": "AZZ",
					"kw": "",
					"city": "Ambriz"
					},{
					    "name": "Amman Queen Alia International ",
					"code": "AMM",
					"kw": "",
					"city": "Amman"
					},{
					    "name": "Amos",
					"code": "YEY",
					"kw": "",
					"city": "Amos"
					},{
					    "name": "Ampanihy",
					"code": "AMP",
					"kw": "",
					"city": "Ampanihy"
					},{
					    "name": "Amritsar",
					"code": "ATQ",
					"kw": "",
					"city": "Amritsar"
					},{
					    "name": "Amsterdam",
					"code": "AMS",
					"kw": "",
					"city": "Amsterdam"
					},{
					    "name": "Anaa",
					"code": "AAA",
					"kw": "",
					"city": "Anaa"
					},{
					    "name": "Anaco",
					"code": "AAO",
					"kw": "",
					"city": "Anaco"
					},{
					    "name": "Anahim Lake",
					"code": "YAA",
					"kw": "",
					"city": "Anahim Lake"
					},{
					    "name": "Anaktuvuk Pass",
					"code": "AKP",
					"kw": "",
					"city": "Anaktuvuk Pass"
					},{
					    "name": "Analalava",
					"code": "HVA",
					"kw": "",
					"city": "Analalava"
					},{
					    "name": "Anapa",
					"code": "AAQ",
					"kw": "",
					"city": "Anapa"
					},{
					    "name": "Anchorage International ",
					"code": "ANC",
					"kw": "",
					"city": "Anchorage"
					},{
					    "name": "Ancona",
					"code": "AOI",
					"kw": "",
					"city": "Ancona"
					},{
					    "name": "Andahuaylas",
					"code": "ANS",
					"kw": "",
					"city": "Andahuaylas"
					},{
					    "name": "Andamooka",
					"code": "ADO",
					"kw": "",
					"city": "Andamooka"
					},{
					    "name": "Andapa",
					"code": "ZWA",
					"kw": "",
					"city": "Andapa"
					},{
					    "name": "Andenes",
					"code": "ANX",
					"kw": "",
					"city": "Andenes"
					},{
					    "name": "Anderson",
					"code": "AND",
					"kw": "",
					"city": "Anderson"
					},{
					    "name": "Andes",
					"code": "ADN",
					"kw": "",
					"city": "Andes"
					},{
					    "name": "Andrews",
					"code": "ADR",
					"kw": "",
					"city": "Andrews"
					},{
					    "name": "Andriamena",
					"code": "WAD",
					"kw": "",
					"city": "Andriamena"
					},{
					    "name": "Andros Town",
					"code": "ASD",
					"kw": "",
					"city": "Andros Town"
					},{
					    "name": "Andulo",
					"code": "ANL",
					"kw": "",
					"city": "Andulo"
					},{
					    "name": "Anegada",
					"code": "NGD",
					"kw": "",
					"city": "Anegada"
					},{
					    "name": "Aneityum",
					"code": "AUY",
					"kw": "",
					"city": "Aneityum"
					},{
					    "name": "Angers Marce Airport",
					"code": "ANE",
					"kw": "",
					"city": "Angers"
					},{
					    "name": "Angoche",
					"code": "ANO",
					"kw": "",
					"city": "Angoche"
					},{
					    "name": "Angoram",
					"code": "AGG",
					"kw": "",
					"city": "Angoram"
					},{
					    "name": "Angouleme",
					"code": "ANG",
					"kw": "",
					"city": "Angouleme"
					},{
					    "name": "Anguganak",
					"code": "AKG",
					"kw": "",
					"city": "Anguganak"
					},{
					    "name": "Anguilla",
					"code": "AXA",
					"kw": "",
					"city": "Anguilla"
					},{
					    "name": "Aniwa",
					"code": "AWD",
					"kw": "",
					"city": "Aniwa"
					},{
					    "name": "Anjouan",
					"code": "AJN",
					"kw": "",
					"city": "Anjouan"
					},{
					    "name": "Ankara Esenboga ",
					"code": "ESB",
					"kw": "",
					"city": "Ankara"
					},{
					    "name": "Ankara Etimesgut ",
					"code": "ANK",
					"kw": "",
					"city": "Ankara"
					},{
					    "name": "Ankavandra",
					"code": "JVA",
					"kw": "",
					"city": "Ankavandra"
					},{
					    "name": "Ankazoabo",
					"code": "WAK",
					"kw": "",
					"city": "Ankazoabo"
					},{
					    "name": "Annaba",
					"code": "AAE",
					"kw": "",
					"city": "Annaba"
					},{
					    "name": "Annai",
					"code": "NAI",
					"kw": "",
					"city": "Annai"
					},{
					    "name": "Annanberg",
					"code": "AOB",
					"kw": "",
					"city": "Annanberg"
					},{
					    "name": "Annecy",
					"code": "NCY",
					"kw": "",
					"city": "Annecy"
					},{
					    "name": "Annette Island",
					"code": "ANN",
					"kw": "",
					"city": "Annette Island"
					},{
					    "name": "Anniston Municipal ",
					"code": "ANB",
					"kw": "",
					"city": "Anniston"
					},{
					    "name": "Anta",
					"code": "ATA",
					"kw": "",
					"city": "Anta"
					},{
					    "name": "Antalya",
					"code": "AYT",
					"kw": "",
					"city": "Antalya"
					},{
					    "name": "Antananarivo",
					"code": "TNR",
					"kw": "",
					"city": "Antananarivo"
					},{
					    "name": "Antigua",
					"code": "ANU",
					"kw": "",
					"city": "Antigua"
					},{
					    "name": "Antofagasta",
					"code": "ANF",
					"kw": "",
					"city": "Antofagasta"
					},{
					    "name": "Antsalova",
					"code": "WAQ",
					"kw": "",
					"city": "Antsalova"
					},{
					    "name": "Antsirabe",
					"code": "ATJ",
					"kw": "",
					"city": "Antsirabe"
					},{
					    "name": "Antsiranana",
					"code": "DIE",
					"kw": "",
					"city": "Antsiranana"
					},{
					    "name": "Antsohihy",
					"code": "WAI",
					"kw": "",
					"city": "Antsohihy"
					},{
					    "name": "Antwerp De Keyserlei Bus Station",
					"code": "ZAY",
					"kw": "",
					"city": "Antwerp"
					},{
					    "name": "Antwerp Deurne Airport",
					"code": "ANR",
					"kw": "",
					"city": "Antwerp"
					},{
					    "name": "Aomori",
					"code": "AOJ",
					"kw": "",
					"city": "Aomori"
					},{
					    "name": "Apartado",
					"code": "APO",
					"kw": "",
					"city": "Apartado"
					},{
					    "name": "Apataki",
					"code": "APK",
					"kw": "",
					"city": "Apataki"
					},{
					    "name": "Apia Fagali'i ",
					"code": "FGI",
					"kw": "",
					"city": "Apia"
					},{
					    "name": "Apia Faleolo ",
					"code": "APW",
					"kw": "",
					"city": "Apia"
					},{
					    "name": "Apple Valley",
					"code": "APV",
					"kw": "",
					"city": "Apple Valley"
					},{
					    "name": "Aracaju",
					"code": "AJU",
					"kw": "",
					"city": "Aracaju"
					},{
					    "name": "Arad",
					"code": "ARW",
					"kw": "",
					"city": "Arad"
					},{
					    "name": "Aragip",
					"code": "ARP",
					"kw": "",
					"city": "Aragip"
					},{
					    "name": "Araguaina",
					"code": "AUX",
					"kw": "",
					"city": "Araguaina"
					},{
					    "name": "Arandis",
					"code": "ADI",
					"kw": "",
					"city": "Arandis"
					},{
					    "name": "Aranuka",
					"code": "AAK",
					"kw": "",
					"city": "Aranuka"
					},{
					    "name": "Arar",
					"code": "RAE",
					"kw": "",
					"city": "Arar"
					},{
					    "name": "Araracuara",
					"code": "ACR",
					"kw": "",
					"city": "Araracuara"
					},{
					    "name": "Arauca",
					"code": "AUC",
					"kw": "",
					"city": "Arauca"
					},{
					    "name": "Arawa",
					"code": "RAW",
					"kw": "",
					"city": "Arawa"
					},{
					    "name": "Araxa",
					"code": "AAX",
					"kw": "",
					"city": "Araxa"
					},{
					    "name": "Arba Mintch",
					"code": "AMH",
					"kw": "",
					"city": "Arba Mintch"
					},{
					    "name": "Arboletas",
					"code": "ARO",
					"kw": "",
					"city": "Arboletas"
					},{
					    "name": "Arcata/Eureka",
					"code": "ACV",
					"kw": "",
					"city": "Arcata/Eureka"
					},{
					    "name": "Arctic Village",
					"code": "ARC",
					"kw": "",
					"city": "Arctic Village"
					},{
					    "name": "Arecibo",
					"code": "ARE",
					"kw": "",
					"city": "Arecibo"
					},{
					    "name": "Arequipa",
					"code": "AQP",
					"kw": "",
					"city": "Arequipa"
					},{
					    "name": "Arica",
					"code": "ACM",
					"kw": "",
					"city": "Arica"
					},{
					    "name": "Arica",
					"code": "ARI",
					"kw": "",
					"city": "Arica"
					},{
					    "name": "Arkhangelsk",
					"code": "ARH",
					"kw": "",
					"city": "Arkhangelsk"
					},{
					    "name": "Arlit",
					"code": "RLT",
					"kw": "",
					"city": "Arlit"
					},{
					    "name": "Arly",
					"code": "ARL",
					"kw": "",
					"city": "Arly"
					},{
					    "name": "Armenia",
					"code": "AXM",
					"kw": "",
					"city": "Armenia"
					},{
					    "name": "Arno",
					"code": "AMR",
					"kw": "",
					"city": "Arno"
					},{
					    "name": "Aroa",
					"code": "AOA",
					"kw": "",
					"city": "Aroa"
					},{
					    "name": "Arorae Island",
					"code": "AIS",
					"kw": "",
					"city": "Arorae Island"
					},{
					    "name": "Arraias",
					"code": "AAI",
					"kw": "",
					"city": "Arraias"
					},{
					    "name": "Arthur's Town",
					"code": "ATC",
					"kw": "",
					"city": "Arthur's Town"
					},{
					    "name": "Artigas",
					"code": "ATI",
					"kw": "",
					"city": "Artigas"
					},{
					    "name": "Arua",
					"code": "RUA",
					"kw": "",
					"city": "Arua"
					},{
					    "name": "Aruba",
					"code": "AUA",
					"kw": "",
					"city": "Aruba"
					},{
					    "name": "Arusha",
					"code": "ARK",
					"kw": "",
					"city": "Arusha"
					},{
					    "name": "Arutua",
					"code": "AXR",
					"kw": "",
					"city": "Arutua"
					},{
					    "name": "Arviat",
					"code": "YEK",
					"kw": "",
					"city": "Arviat"
					},{
					    "name": "Arvidsjaur",
					"code": "AJR",
					"kw": "",
					"city": "Arvidsjaur"
					},{
					    "name": "Asapa",
					"code": "APP",
					"kw": "",
					"city": "Asapa"
					},{
					    "name": "Asau",
					"code": "AAU",
					"kw": "",
					"city": "Asau"
					},{
					    "name": "Asela",
					"code": "ALK",
					"kw": "",
					"city": "Asela"
					},{
					    "name": "Ashburton",
					"code": "ASG",
					"kw": "",
					"city": "Ashburton"
					},{
					    "name": "Asheville",
					"code": "AVL",
					"kw": "",
					"city": "Asheville"
					},{
					    "name": "Ashgabat",
					"code": "ASB",
					"kw": "",
					"city": "Ashgabat"
					},{
					    "name": "Ashland",
					"code": "ASX",
					"kw": "",
					"city": "Ashland"
					},{
					    "name": "Asmara",
					"code": "ASM",
					"kw": "",
					"city": "Asmara"
					},{
					    "name": "Asosa",
					"code": "ASO",
					"kw": "",
					"city": "Asosa"
					},{
					    "name": "Aspen",
					"code": "ASE",
					"kw": "",
					"city": "Aspen"
					},{
					    "name": "Assab",
					"code": "ASA",
					"kw": "",
					"city": "Assab"
					},{
					    "name": "Assiut",
					"code": "ATZ",
					"kw": "",
					"city": "Assiut"
					},{
					    "name": "Astana",
					"code": "TSE",
					"kw": "",
					"city": "Astana"
					},{
					    "name": "Astrakhan",
					"code": "ASF",
					"kw": "",
					"city": "Astrakhan"
					},{
					    "name": "Asturias",
					"code": "OVD",
					"kw": "",
					"city": "Asturias"
					},{
					    "name": "Aswan",
					"code": "ASW",
					"kw": "",
					"city": "Aswan"
					},{
					    "name": "Atambua",
					"code": "ABU",
					"kw": "",
					"city": "Atambua"
					},{
					    "name": "Ataq",
					"code": "AXK",
					"kw": "",
					"city": "Ataq"
					},{
					    "name": "Atar",
					"code": "ATR",
					"kw": "",
					"city": "Atar"
					},{
					    "name": "Atbara",
					"code": "ATB",
					"kw": "",
					"city": "Atbara"
					},{
					    "name": "Ati",
					"code": "ATV",
					"kw": "",
					"city": "Ati"
					},{
					    "name": "Atiu Island",
					"code": "AIU",
					"kw": "",
					"city": "Atiu Island"
					},{
					    "name": "Atuona",
					"code": "AUQ",
					"kw": "",
					"city": "Atuona"
					},{
					    "name": "Atyrau",
					"code": "GUW",
					"kw": "",
					"city": "Atyrau"
					},{
					    "name": "Auburn",
					"code": "AUO",
					"kw": "",
					"city": "Auburn"
					},{
					    "name": "Auckland International ",
					"code": "AKL",
					"kw": "",
					"city": "Auckland"
					},{
					    "name": "Augusta Bush Field",
					"code": "AGS",
					"kw": "",
					"city": "Augusta"
					},{
					    "name": "Aurillac",
					"code": "AUR",
					"kw": "",
					"city": "Aurillac"
					},{
					    "name": "Avignon",
					"code": "AVN",
					"kw": "",
					"city": "Avignon"
					},{
					    "name": "Avu Avu",
					"code": "AVU",
					"kw": "",
					"city": "Avu Avu"
					},{
					    "name": "Awar",
					"code": "AWR",
					"kw": "",
					"city": "Awar"
					},{
					    "name": "Axum",
					"code": "AXU",
					"kw": "",
					"city": "Axum"
					},{
					    "name": "Ayacucho",
					"code": "AYP",
					"kw": "",
					"city": "Ayacucho"
					},{
					    "name": "Ayacucho",
					"code": "AYC",
					"kw": "",
					"city": "Ayacucho"
					},{
					    "name": "Ayawasi",
					"code": "AYW",
					"kw": "",
					"city": "Ayawasi"
					},{
					    "name": "Babo",
					"code": "BXB",
					"kw": "",
					"city": "Babo"
					},{
					    "name": "Bacau",
					"code": "BCM",
					"kw": "",
					"city": "Bacau"
					},{
					    "name": "Bacolod",
					"code": "BCD",
					"kw": "",
					"city": "Bacolod"
					},{
					    "name": "Badajoz",
					"code": "BJZ",
					"kw": "",
					"city": "Badajoz"
					},{
					    "name": "Bade",
					"code": "BXD",
					"kw": "",
					"city": "Bade"
					},{
					    "name": "Badin",
					"code": "BDN",
					"kw": "",
					"city": "Badin"
					},{
					    "name": "Bafoussam",
					"code": "BFX",
					"kw": "",
					"city": "Bafoussam"
					},{
					    "name": "Bagdad",
					"code": "BGT",
					"kw": "",
					"city": "Bagdad"
					},{
					    "name": "Bagdogra",
					"code": "IXB",
					"kw": "",
					"city": "Bagdogra"
					},{
					    "name": "Baglung",
					"code": "BGL",
					"kw": "",
					"city": "Baglung"
					},{
					    "name": "Baguio",
					"code": "BAG",
					"kw": "",
					"city": "Baguio"
					},{
					    "name": "Bahar Dar",
					"code": "BJR",
					"kw": "",
					"city": "Bahar Dar"
					},{
					    "name": "Bahawalpur",
					"code": "BHV",
					"kw": "",
					"city": "Bahawalpur"
					},{
					    "name": "Bahia Blanca",
					"code": "BHI",
					"kw": "",
					"city": "Bahia Blanca"
					},{
					    "name": "Bahrain",
					"code": "BAH",
					"kw": "",
					"city": "Bahrain"
					},{
					    "name": "Baia Mare",
					"code": "BAY",
					"kw": "",
					"city": "Baia Mare"
					},{
					    "name": "Baidoa",
					"code": "BIB",
					"kw": "",
					"city": "Baidoa"
					},{
					    "name": "Baimuru",
					"code": "VMU",
					"kw": "",
					"city": "Baimuru"
					},{
					    "name": "Bairnsdale",
					"code": "BSJ",
					"kw": "",
					"city": "Bairnsdale"
					},{
					    "name": "Baitadi",
					"code": "BIT",
					"kw": "",
					"city": "Baitadi"
					},{
					    "name": "Bajawa",
					"code": "BJW",
					"kw": "",
					"city": "Bajawa"
					},{
					    "name": "Bajhang",
					"code": "BJH",
					"kw": "",
					"city": "Bajhang"
					},{
					    "name": "Bakalalan",
					"code": "BKM",
					"kw": "",
					"city": "Bakalalan"
					},{
					    "name": "Bakel",
					"code": "BXE",
					"kw": "",
					"city": "Bakel"
					},{
					    "name": "Baker",
					"code": "BKE",
					"kw": "",
					"city": "Baker"
					},{
					    "name": "Baker Lake",
					"code": "YBK",
					"kw": "",
					"city": "Baker Lake"
					},{
					    "name": "Bakersfield",
					"code": "BFL",
					"kw": "",
					"city": "Bakersfield"
					},{
					    "name": "Bakkafjordur",
					"code": "BJD",
					"kw": "",
					"city": "Bakkafjordur"
					},{
					    "name": "Bakouma",
					"code": "BMF",
					"kw": "",
					"city": "Bakouma"
					},{
					    "name": "Baku Heydar Int'l ",
					"code": "GYD",
					"kw": "",
					"city": "Baku"
					},{
					    "name": "Baku",
					"code": "BAK",
					"kw": "",
					"city": "Baku"
					},{
					    "name": "Balalae",
					"code": "BAS",
					"kw": "",
					"city": "Balalae"
					},{
					    "name": "Balboa",
					"code": "BLB",
					"kw": "",
					"city": "Balboa"
					},{
					    "name": "Baler",
					"code": "BQA",
					"kw": "",
					"city": "Baler"
					},{
					    "name": "Balikesir Airport",
					"code": "BZI",
					"kw": "",
					"city": "Balikesir"
					},{
					    "name": "Balikpapan",
					"code": "BPN",
					"kw": "",
					"city": "Balikpapan"
					},{
					    "name": "Balimo",
					"code": "OPU",
					"kw": "",
					"city": "Balimo"
					},{
					    "name": "Balmaceda",
					"code": "BBA",
					"kw": "",
					"city": "Balmaceda"
					},{
					    "name": "Balsas",
					"code": "BSS",
					"kw": "",
					"city": "Balsas"
					},{
					    "name": "Baltimore Washington International ",
					"code": "BWI",
					"kw": "",
					"city": "Baltimore"
					},{
					    "name": "Balurghat",
					"code": "RGH",
					"kw": "",
					"city": "Balurghat"
					},{
					    "name": "Bamako",
					"code": "BKO",
					"kw": "",
					"city": "Bamako"
					},{
					    "name": "Bamiyan",
					"code": "BIN",
					"kw": "",
					"city": "Bamiyan"
					},{
					    "name": "Banda Aceh",
					"code": "BTJ",
					"kw": "",
					"city": "Banda Aceh"
					},{
					    "name": "Bandanaira",
					"code": "NDA",
					"kw": "",
					"city": "Bandanaira"
					},{
					    "name": "Bandar Abbas",
					"code": "BND",
					"kw": "",
					"city": "Bandar Abbas"
					},{
					    "name": "Bandar Lampung",
					"code": "TKG",
					"kw": "",
					"city": "Bandar Lampung"
					},{
					    "name": "Bandar Lengeh",
					"code": "BDH",
					"kw": "",
					"city": "Bandar Lengeh"
					},{
					    "name": "Bandundu",
					"code": "FDU",
					"kw": "",
					"city": "Bandundu"
					},{
					    "name": "Bangalore",
					"code": "BLR",
					"kw": "",
					"city": "Bangalore"
					},{
					    "name": "Bangassou",
					"code": "BGU",
					"kw": "",
					"city": "Bangassou"
					},{
					    "name": "Bangkok",
					"code": "BKK",
					"kw": "",
					"city": "Bangkok"
					},{
					    "name": "Bangui",
					"code": "BGF",
					"kw": "",
					"city": "Bangui"
					},{
					    "name": "Baniyala",
					"code": "BYX",
					"kw": "",
					"city": "Baniyala"
					},{
					    "name": "Banja Luka",
					"code": "BNX",
					"kw": "",
					"city": "Banja Luka"
					},{
					    "name": "Banjul",
					"code": "BJL",
					"kw": "",
					"city": "Banjul"
					},{
					    "name": "Bankstown",
					"code": "BWU",
					"kw": "",
					"city": "Bankstown"
					},{
					    "name": "Bannu",
					"code": "BNP",
					"kw": "",
					"city": "Bannu"
					},{
					    "name": "Banz",
					"code": "BNZ",
					"kw": "",
					"city": "Banz"
					},{
					    "name": "Bar Harbor",
					"code": "BHB",
					"kw": "",
					"city": "Bar Harbor"
					},{
					    "name": "Baracoa",
					"code": "BCA",
					"kw": "",
					"city": "Baracoa"
					},{
					    "name": "Barahona",
					"code": "BRX",
					"kw": "",
					"city": "Barahona"
					},{
					    "name": "Baramita",
					"code": "BMJ",
					"kw": "",
					"city": "Baramita"
					},{
					    "name": "Barbados",
					"code": "BGI",
					"kw": "",
					"city": "Barbados"
					},{
					    "name": "Barbuda",
					"code": "BBQ",
					"kw": "",
					"city": "Barbuda"
					},{
					    "name": "Barcelona ",
					"code": "BCN",
					"kw": "",
					"city": "Barcelona"
					},{
					    "name": "Bardera",
					"code": "BSY",
					"kw": "",
					"city": "Bardera"
					},{
					    "name": "Bardufoss",
					"code": "BDU",
					"kw": "",
					"city": "Bardufoss"
					},{
					    "name": "Barinas",
					"code": "BNS",
					"kw": "",
					"city": "Barinas"
					},{
					    "name": "Bario",
					"code": "BBN",
					"kw": "",
					"city": "Bario"
					},{
					    "name": "Barnaul",
					"code": "BAX",
					"kw": "",
					"city": "Barnaul"
					},{
					    "name": "Barora",
					"code": "RRI",
					"kw": "",
					"city": "Barora"
					},{
					    "name": "Barquisimeto",
					"code": "BRM",
					"kw": "",
					"city": "Barquisimeto"
					},{
					    "name": "Barra",
					"code": "BQQ",
					"kw": "",
					"city": "Barra"
					},{
					    "name": "Barra",
					"code": "BRR",
					"kw": "",
					"city": "Barra"
					},{
					    "name": "Barra do Corda",
					"code": "BDC",
					"kw": "",
					"city": "Barra do Corda"
					},{
					    "name": "Barrancabermeja",
					"code": "EJA",
					"kw": "",
					"city": "Barrancabermeja"
					},{
					    "name": "Barrancominas",
					"code": "NBB",
					"kw": "",
					"city": "Barrancominas"
					},{
					    "name": "Barranquilla",
					"code": "BAQ",
					"kw": "",
					"city": "Barranquilla"
					},{
					    "name": "Barreiras",
					"code": "BRA",
					"kw": "",
					"city": "Barreiras"
					},{
					    "name": "Barrow-in-Furness",
					"code": "BWF",
					"kw": "",
					"city": "Barrow-in-Furness"
					},{
					    "name": "Barth",
					"code": "BBH",
					"kw": "",
					"city": "Barth"
					},{
					    "name": "Bartica",
					"code": "GFO",
					"kw": "",
					"city": "Bartica"
					},{
					    "name": "Basankusu",
					"code": "BSU",
					"kw": "",
					"city": "Basankusu"
					},{
					    "name": "Basco",
					"code": "BSO",
					"kw": "",
					"city": "Basco"
					},{
					    "name": "Basra",
					"code": "BSR",
					"kw": "",
					"city": "Basra"
					},{
					    "name": "Basse Terre",
					"code": "BBR",
					"kw": "",
					"city": "Basse Terre"
					},{
					    "name": "Bassein",
					"code": "BSX",
					"kw": "",
					"city": "Bassein"
					},{
					    "name": "Bastia",
					"code": "BIA",
					"kw": "",
					"city": "Bastia"
					},{
					    "name": "Bata",
					"code": "BSG",
					"kw": "",
					"city": "Bata"
					},{
					    "name": "Batam",
					"code": "BTH",
					"kw": "",
					"city": "Batam"
					},{
					    "name": "Batangafo",
					"code": "BTG",
					"kw": "",
					"city": "Batangafo"
					},{
					    "name": "Bathurst",
					"code": "ZBF",
					"kw": "",
					"city": "Bathurst"
					},{
					    "name": "Bathurst Island",
					"code": "BRT",
					"kw": "",
					"city": "Bathurst Island"
					},{
					    "name": "Batman",
					"code": "BAL",
					"kw": "",
					"city": "Batman"
					},{
					    "name": "Batom",
					"code": "BXM",
					"kw": "",
					"city": "Batom"
					},{
					    "name": "Baton Rouge Ryan ",
					"code": "BTR",
					"kw": "",
					"city": "Baton Rouge"
					},{
					    "name": "Batouri",
					"code": "OUR",
					"kw": "",
					"city": "Batouri"
					},{
					    "name": "Batsfjord",
					"code": "BJF",
					"kw": "",
					"city": "Batsfjord"
					},{
					    "name": "Batticaloa",
					"code": "BTC",
					"kw": "",
					"city": "Batticaloa"
					},{
					    "name": "Batumi",
					"code": "BUS",
					"kw": "",
					"city": "Batumi"
					},{
					    "name": "Baubau",
					"code": "BUW",
					"kw": "",
					"city": "Baubau"
					},{
					    "name": "Bauru",
					"code": "BAU",
					"kw": "",
					"city": "Bauru"
					},{
					    "name": "Bawan",
					"code": "BWJ",
					"kw": "",
					"city": "Bawan"
					},{
					    "name": "Bayamo",
					"code": "BYM",
					"kw": "",
					"city": "Bayamo"
					},{
					    "name": "Bayreuth",
					"code": "BYU",
					"kw": "",
					"city": "Bayreuth"
					},{
					    "name": "Bealanana",
					"code": "WBE",
					"kw": "",
					"city": "Bealanana"
					},{
					    "name": "Beaufort",
					"code": "BFT",
					"kw": "",
					"city": "Beaufort"
					},{
					    "name": "Beaver Falls",
					"code": "BFP",
					"kw": "",
					"city": "Beaver Falls"
					},{
					    "name": "Bechar",
					"code": "CBH",
					"kw": "",
					"city": "Bechar"
					},{
					    "name": "Bedford",
					"code": "BED",
					"kw": "",
					"city": "Bedford"
					},{
					    "name": "Bedford",
					"code": "BFR",
					"kw": "",
					"city": "Bedford"
					},{
					    "name": "Beef Island",
					"code": "EIS",
					"kw": "",
					"city": "Beef Island"
					},{
					    "name": "Beer Sheba",
					"code": "BEV",
					"kw": "",
					"city": "Beer Sheba"
					},{
					    "name": "Befandriana",
					"code": "WBD",
					"kw": "",
					"city": "Befandriana"
					},{
					    "name": "Beica",
					"code": "BEI",
					"kw": "",
					"city": "Beica"
					},{
					    "name": "Beida",
					"code": "LAQ",
					"kw": "",
					"city": "Beida"
					},{
					    "name": "Beihan",
					"code": "BHN",
					"kw": "",
					"city": "Beihan"
					},{
					    "name": "Beira",
					"code": "BEW",
					"kw": "",
					"city": "Beira"
					},{
					    "name": "Beirut",
					"code": "BEY",
					"kw": "",
					"city": "Beirut"
					},{
					    "name": "Bejaia",
					"code": "BJA",
					"kw": "",
					"city": "Bejaia"
					},{
					    "name": "Bekily",
					"code": "OVA",
					"kw": "",
					"city": "Bekily"
					},{
					    "name": "Belaga",
					"code": "BLG",
					"kw": "",
					"city": "Belaga"
					},{
					    "name": "Belep Island",
					"code": "BMY",
					"kw": "",
					"city": "Belep Island"
					},{
					    "name": "Belfast City ",
					"code": "BHD",
					"kw": "",
					"city": "Belfast"
					},{
					    "name": "Belfast International ",
					"code": "BFS",
					"kw": "",
					"city": "Belfast"
					},{
					    "name": "Belfort",
					"code": "BOR",
					"kw": "",
					"city": "Belfort"
					},{
					    "name": "Belgaum",
					"code": "IXG",
					"kw": "",
					"city": "Belgaum"
					},{
					    "name": "Belgrade",
					"code": "BEG",
					"kw": "",
					"city": "Belgrade"
					},{
					    "name": "Belize City Municipal ",
					"code": "TZA",
					"kw": "",
					"city": "Belize City"
					},{
					    "name": "Belize City Goldson Intl ",
					"code": "BZE",
					"kw": "",
					"city": "Belize City"
					},{
					    "name": "Bella Union",
					"code": "BUV",
					"kw": "",
					"city": "Bella Union"
					},{
					    "name": "Bellary",
					"code": "BEP",
					"kw": "",
					"city": "Bellary"
					},{
					    "name": "Belle Chasse",
					"code": "BCS",
					"kw": "",
					"city": "Belle Chasse"
					},{
					    "name": "Bellona",
					"code": "BNY",
					"kw": "",
					"city": "Bellona"
					},{
					    "name": "Belmonte",
					"code": "BVM",
					"kw": "",
					"city": "Belmonte"
					},{
					    "name": "Belo",
					"code": "BMD",
					"kw": "",
					"city": "Belo"
					},{
					    "name": "Bemidji",
					"code": "BJI",
					"kw": "",
					"city": "Bemidji"
					},{
					    "name": "Benbecula",
					"code": "BEB",
					"kw": "",
					"city": "Benbecula"
					},{
					    "name": "Benghazi",
					"code": "BEN",
					"kw": "",
					"city": "Benghazi"
					},{
					    "name": "Bengkulu",
					"code": "BKS",
					"kw": "",
					"city": "Bengkulu"
					},{
					    "name": "Benguela",
					"code": "BUG",
					"kw": "",
					"city": "Benguela"
					},{
					    "name": "Beni",
					"code": "BNC",
					"kw": "",
					"city": "Beni"
					},{
					    "name": "Benin City",
					"code": "BNI",
					"kw": "",
					"city": "Benin City"
					},{
					    "name": "Benjina",
					"code": "BJK",
					"kw": "",
					"city": "Benjina"
					},{
					    "name": "Bennettsville",
					"code": "BTN",
					"kw": "",
					"city": "Bennettsville"
					},{
					    "name": "Bensbach",
					"code": "BSP",
					"kw": "",
					"city": "Bensbach"
					},{
					    "name": "Berbera",
					"code": "BBO",
					"kw": "",
					"city": "Berbera"
					},{
					    "name": "Berberati",
					"code": "BBT",
					"kw": "",
					"city": "Berberati"
					},{
					    "name": "Bereby",
					"code": "BBV",
					"kw": "",
					"city": "Bereby"
					},{
					    "name": "Bereina",
					"code": "BEA",
					"kw": "",
					"city": "Bereina"
					},{
					    "name": "Berens River",
					"code": "YBV",
					"kw": "",
					"city": "Berens River"
					},{
					    "name": "Bergen",
					"code": "BGO",
					"kw": "",
					"city": "Bergen"
					},{
					    "name": "Bergerac",
					"code": "EGC",
					"kw": "",
					"city": "Bergerac"
					},{
					    "name": "Berlevag",
					"code": "BVG",
					"kw": "",
					"city": "Berlevag"
					},{
					    "name": "Berlin Tegel ",
					"code": "TXL",
					"kw": "",
					"city": "Berlin"
					},{
					    "name": "Berlin Schonefeld ",
					"code": "SXF",
					"kw": "",
					"city": "Berlin"
					},{
					    "name": "Berlin Tempelhof ",
					"code": "THF",
					"kw": "",
					"city": "Berlin"
					},{
					    "name": "Berlin Brandenburg ",
					"code": "BER",
					"kw": "",
					"city": "Berlin"
					},{
					    "name": "Bermejo",
					"code": "BJO",
					"kw": "",
					"city": "Bermejo"
					},{
					    "name": "Bermuda International",
					"code": "BDA",
					"kw": "",
					"city": "Bermuda"
					},{
					    "name": "Berne Belp",
					"code": "BRN",
					"kw": "",
					"city": "Berne"
					},{
					    "name": "Beroroha",
					"code": "WBO",
					"kw": "",
					"city": "Beroroha"
					},{
					    "name": "Bertoua",
					"code": "BTA",
					"kw": "",
					"city": "Bertoua"
					},{
					    "name": "Beru",
					"code": "BEZ",
					"kw": "",
					"city": "Beru"
					},{
					    "name": "Besalampy",
					"code": "BPY",
					"kw": "",
					"city": "Besalampy"
					},{
					    "name": "Betioky",
					"code": "BKU",
					"kw": "",
					"city": "Betioky"
					},{
					    "name": "Betou",
					"code": "BTB",
					"kw": "",
					"city": "Betou"
					},{
					    "name": "Beverly",
					"code": "BVY",
					"kw": "",
					"city": "Beverly"
					},{
					    "name": "Beziers",
					"code": "BZR",
					"kw": "",
					"city": "Beziers"
					},{
					    "name": "Bhairawa",
					"code": "BWA",
					"kw": "",
					"city": "Bhairawa"
					},{
					    "name": "Bhamo",
					"code": "BMO",
					"kw": "",
					"city": "Bhamo"
					},{
					    "name": "Bharatpur",
					"code": "BHR",
					"kw": "",
					"city": "Bharatpur"
					},{
					    "name": "Bhatinda",
					"code": "BUP",
					"kw": "",
					"city": "Bhatinda"
					},{
					    "name": "Bhavnagar",
					"code": "BHU",
					"kw": "",
					"city": "Bhavnagar"
					},{
					    "name": "Bhojpur",
					"code": "BHP",
					"kw": "",
					"city": "Bhojpur"
					},{
					    "name": "Bhopal",
					"code": "BHO",
					"kw": "",
					"city": "Bhopal"
					},{
					    "name": "Bhubaneswar",
					"code": "BBI",
					"kw": "",
					"city": "Bhubaneswar"
					},{
					    "name": "Bhuj",
					"code": "BHJ",
					"kw": "",
					"city": "Bhuj"
					},{
					    "name": "Bhurban Heliport",
					"code": "BHC",
					"kw": "",
					"city": "Bhurban Heliport"
					},{
					    "name": "Biak",
					"code": "BIK",
					"kw": "",
					"city": "Biak"
					},{
					    "name": "Biarritz",
					"code": "BIQ",
					"kw": "",
					"city": "Biarritz"
					},{
					    "name": "Biaru",
					"code": "BRP",
					"kw": "",
					"city": "Biaru"
					},{
					    "name": "Big Bear",
					"code": "RBF",
					"kw": "",
					"city": "Big Bear"
					},{
					    "name": "Big Creek",
					"code": "BGK",
					"kw": "",
					"city": "Big Creek"
					},{
					    "name": "Big Rapids",
					"code": "WBR",
					"kw": "",
					"city": "Big Rapids"
					},{
					    "name": "Bikaner",
					"code": "BKB",
					"kw": "",
					"city": "Bikaner"
					},{
					    "name": "Bilaspur",
					"code": "PAB",
					"kw": "",
					"city": "Bilaspur"
					},{
					    "name": "Bilbao",
					"code": "BIO",
					"kw": "",
					"city": "Bilbao"
					},{
					    "name": "Bildudalur",
					"code": "BIU",
					"kw": "",
					"city": "Bildudalur"
					},{
					    "name": "Billings",
					"code": "BIL",
					"kw": "",
					"city": "Billings"
					},{
					    "name": "Billund",
					"code": "BLL",
					"kw": "",
					"city": "Billund"
					},{
					    "name": "Bima",
					"code": "BMU",
					"kw": "",
					"city": "Bima"
					},{
					    "name": "Binghamton",
					"code": "BGM",
					"kw": "",
					"city": "Binghamton"
					},{
					    "name": "Biniguni",
					"code": "XBN",
					"kw": "",
					"city": "Biniguni"
					},{
					    "name": "Bintulu",
					"code": "BTU",
					"kw": "",
					"city": "Bintulu"
					},{
					    "name": "Bintuni",
					"code": "NTI",
					"kw": "",
					"city": "Bintuni"
					},{
					    "name": "Birao",
					"code": "IRO",
					"kw": "",
					"city": "Birao"
					},{
					    "name": "Birch Creek",
					"code": "KBC",
					"kw": "",
					"city": "Birch Creek"
					},{
					    "name": "Birdsville",
					"code": "BVI",
					"kw": "",
					"city": "Birdsville"
					},{
					    "name": "Birjand",
					"code": "XBJ",
					"kw": "",
					"city": "Birjand"
					},{
					    "name": "Birmingham International Airport",
					"code": "BHX",
					"kw": "",
					"city": "Birmingham"
					},{
					    "name": "Birmingham",
					"code": "BHM",
					"kw": "",
					"city": "Birmingham"
					},{
					    "name": "Bishkek",
					"code": "FRU",
					"kw": "",
					"city": "Bishkek"
					},{
					    "name": "Bishop",
					"code": "BIH",
					"kw": "",
					"city": "Bishop"
					},{
					    "name": "Biskra",
					"code": "BSK",
					"kw": "",
					"city": "Biskra"
					},{
					    "name": "Bislig",
					"code": "BPH",
					"kw": "",
					"city": "Bislig"
					},{
					    "name": "Bitam",
					"code": "BMM",
					"kw": "",
					"city": "Bitam"
					},{
					    "name": "Black Tickle",
					"code": "YBI",
					"kw": "",
					"city": "Black Tickle"
					},{
					    "name": "Blackpool",
					"code": "BLK",
					"kw": "",
					"city": "Blackpool"
					},{
					    "name": "Blantyre",
					"code": "BLZ",
					"kw": "",
					"city": "Blantyre"
					},{
					    "name": "Blenheim",
					"code": "BHE",
					"kw": "",
					"city": "Blenheim"
					},{
					    "name": "Bloemfontein",
					"code": "BFN",
					"kw": "",
					"city": "Bloemfontein"
					},{
					    "name": "Blonduos",
					"code": "BLO",
					"kw": "",
					"city": "Blonduos"
					},{
					    "name": "Bloomington",
					"code": "BMG",
					"kw": "",
					"city": "Bloomington"
					},{
					    "name": "Bloomington-Normal",
					"code": "BMI",
					"kw": "",
					"city": "Bloomington-Normal"
					},{
					    "name": "Blue Bell",
					"code": "BBX",
					"kw": "",
					"city": "Blue Bell"
					},{
					    "name": "Bluefields",
					"code": "BEF",
					"kw": "",
					"city": "Bluefields"
					},{
					    "name": "Blumenau",
					"code": "BNU",
					"kw": "",
					"city": "Blumenau"
					},{
					    "name": "Blythe",
					"code": "BLH",
					"kw": "",
					"city": "Blythe"
					},{
					    "name": "Bo",
					"code": "KBS",
					"kw": "",
					"city": "Bo"
					},{
					    "name": "Boang",
					"code": "BOV",
					"kw": "",
					"city": "Boang"
					},{
					    "name": "Bobo Dioulasso",
					"code": "BOY",
					"kw": "",
					"city": "Bobo Dioulasso"
					},{
					    "name": "Bocas Del Toro",
					"code": "BOC",
					"kw": "",
					"city": "Bocas Del Toro"
					},{
					    "name": "Bodinumu",
					"code": "BNM",
					"kw": "",
					"city": "Bodinumu"
					},{
					    "name": "Bodo",
					"code": "BOO",
					"kw": "",
					"city": "Bodo"
					},{
					    "name": "Boende",
					"code": "BNB",
					"kw": "",
					"city": "Boende"
					},{
					    "name": "Bogande",
					"code": "XBG",
					"kw": "",
					"city": "Bogande"
					},{
					    "name": "Boghe",
					"code": "BGH",
					"kw": "",
					"city": "Boghe"
					},{
					    "name": "Bogota",
					"code": "BOG",
					"kw": "",
					"city": "Bogota"
					},{
					    "name": "Boise",
					"code": "BOI",
					"kw": "",
					"city": "Boise"
					},{
					    "name": "Boke",
					"code": "BKJ",
					"kw": "",
					"city": "Boke"
					},{
					    "name": "Bokondini",
					"code": "BUI",
					"kw": "",
					"city": "Bokondini"
					},{
					    "name": "Bokoro",
					"code": "BKR",
					"kw": "",
					"city": "Bokoro"
					},{
					    "name": "Boku",
					"code": "BOQ",
					"kw": "",
					"city": "Boku"
					},{
					    "name": "Bol",
					"code": "OTC",
					"kw": "",
					"city": "Bol"
					},{
					    "name": "Bolaang",
					"code": "BJG",
					"kw": "",
					"city": "Bolaang"
					},{
					    "name": "Bologna",
					"code": "BLQ",
					"kw": "",
					"city": "Bologna"
					},{
					    "name": "Bonaire",
					"code": "BON",
					"kw": "",
					"city": "Bonaire"
					},{
					    "name": "Bonanza",
					"code": "BZA",
					"kw": "",
					"city": "Bonanza"
					},{
					    "name": "Bondoukou",
					"code": "BDK",
					"kw": "",
					"city": "Bondoukou"
					},{
					    "name": "Bongor",
					"code": "OGR",
					"kw": "",
					"city": "Bongor"
					},{
					    "name": "Bonnyville",
					"code": "YBY",
					"kw": "",
					"city": "Bonnyville"
					},{
					    "name": "Bonthe",
					"code": "BTE",
					"kw": "",
					"city": "Bonthe"
					},{
					    "name": "Booue",
					"code": "BGB",
					"kw": "",
					"city": "Booue"
					},{
					    "name": "Bora Bora",
					"code": "BOB",
					"kw": "",
					"city": "Bora Bora"
					},{
					    "name": "Borama",
					"code": "BXX",
					"kw": "",
					"city": "Borama"
					},{
					    "name": "Bordeaux Airport",
					"code": "BOD",
					"kw": "",
					"city": "Bordeaux"
					},{
					    "name": "Bordj Badji Mokhtar",
					"code": "BMW",
					"kw": "",
					"city": "Bordj Badji Mokhtar"
					},{
					    "name": "Borgarfjordur Eystri",
					"code": "BGJ",
					"kw": "",
					"city": "Borgarfjordur Eystri"
					},{
					    "name": "Borkum",
					"code": "BMK",
					"kw": "",
					"city": "Borkum"
					},{
					    "name": "Borlange",
					"code": "BLE",
					"kw": "",
					"city": "Borlange"
					},{
					    "name": "Bornholm",
					"code": "RNN",
					"kw": "",
					"city": "Bornholm"
					},{
					    "name": "Borrego Springs",
					"code": "BXS",
					"kw": "",
					"city": "Borrego Springs"
					},{
					    "name": "Borroloola",
					"code": "BOX",
					"kw": "",
					"city": "Borroloola"
					},{
					    "name": "Bossaso",
					"code": "BSA",
					"kw": "",
					"city": "Bossaso"
					},{
					    "name": "Bost",
					"code": "BST",
					"kw": "",
					"city": "Bost"
					},{
					    "name": "Boston Logan International ",
					"code": "BOS",
					"kw": "",
					"city": "Boston"
					},{
					    "name": "Botopasie",
					"code": "BTO",
					"kw": "",
					"city": "Botopasie"
					},{
					    "name": "Bouake",
					"code": "BYK",
					"kw": "",
					"city": "Bouake"
					},{
					    "name": "Bouar",
					"code": "BOP",
					"kw": "",
					"city": "Bouar"
					},{
					    "name": "Bouna",
					"code": "BQO",
					"kw": "",
					"city": "Bouna"
					},{
					    "name": "Boundiali",
					"code": "BXI",
					"kw": "",
					"city": "Boundiali"
					},{
					    "name": "Boundji",
					"code": "BOE",
					"kw": "",
					"city": "Boundji"
					},{
					    "name": "Bourgas",
					"code": "BOJ",
					"kw": "",
					"city": "Bourgas"
					},{
					    "name": "Bournemouth",
					"code": "BOH",
					"kw": "",
					"city": "Bournemouth"
					},{
					    "name": "Boutilimit",
					"code": "OTL",
					"kw": "",
					"city": "Boutilimit"
					},{
					    "name": "Bowling Green",
					"code": "BWG",
					"kw": "",
					"city": "Bowling Green"
					},{
					    "name": "Bozeman",
					"code": "BZN",
					"kw": "",
					"city": "Bozeman"
					},{
					    "name": "Bradford",
					"code": "BRF",
					"kw": "",
					"city": "Bradford"
					},{
					    "name": "Bradford",
					"code": "BFD",
					"kw": "",
					"city": "Bradford"
					},{
					    "name": "Braga",
					"code": "BGZ",
					"kw": "",
					"city": "Braga"
					},{
					    "name": "Braganca",
					"code": "BGC",
					"kw": "",
					"city": "Braganca"
					},{
					    "name": "Brainerd",
					"code": "BRD",
					"kw": "",
					"city": "Brainerd"
					},{
					    "name": "Brandon",
					"code": "YBR",
					"kw": "",
					"city": "Brandon"
					},{
					    "name": "Bratislava Bus Station",
					"code": "ZRG",
					"kw": "",
					"city": "Bratislava"
					},{
					    "name": "Bratislava M.R.Stefanik ",
					"code": "BTS",
					"kw": "",
					"city": "Bratislava"
					},{
					    "name": "Bratsk",
					"code": "BTK",
					"kw": "",
					"city": "Bratsk"
					},{
					    "name": "Braunschweig",
					"code": "BWE",
					"kw": "",
					"city": "Braunschweig"
					},{
					    "name": "Brazzaville",
					"code": "BZV",
					"kw": "",
					"city": "Brazzaville"
					},{
					    "name": "Breiddalsvik",
					"code": "BXV",
					"kw": "",
					"city": "Breiddalsvik"
					},{
					    "name": "Bremen",
					"code": "BRE",
					"kw": "",
					"city": "Bremen"
					},{
					    "name": "Bremerhaven",
					"code": "BRV",
					"kw": "",
					"city": "Bremerhaven"
					},{
					    "name": "Brest",
					"code": "BQT",
					"kw": "",
					"city": "Brest"
					},{
					    "name": "Brest",
					"code": "BES",
					"kw": "",
					"city": "Brest"
					},{
					    "name": "Bria",
					"code": "BIV",
					"kw": "",
					"city": "Bria"
					},{
					    "name": "Bridgeport",
					"code": "BDR",
					"kw": "",
					"city": "Bridgeport"
					},{
					    "name": "Brindisi",
					"code": "BDS",
					"kw": "",
					"city": "Brindisi"
					},{
					    "name": "Brisbane",
					"code": "BNE",
					"kw": "",
					"city": "Brisbane"
					},{
					    "name": "Bristol",
					"code": "BRS",
					"kw": "",
					"city": "Bristol"
					},{
					    "name": "Brive-La-Gaillarde",
					"code": "BVE",
					"kw": "",
					"city": "Brive-La-Gaillarde"
					},{
					    "name": "Brno Turany ",
					"code": "BRQ",
					"kw": "",
					"city": "Brno"
					},{
					    "name": "Brochet",
					"code": "YBT",
					"kw": "",
					"city": "Brochet"
					},{
					    "name": "Brockville",
					"code": "XBR",
					"kw": "",
					"city": "Brockville"
					},{
					    "name": "Bronson Creek",
					"code": "YBM",
					"kw": "",
					"city": "Bronson Creek"
					},{
					    "name": "Brooks Lodge",
					"code": "RBH",
					"kw": "",
					"city": "Brooks Lodge"
					},{
					    "name": "Brownsville",
					"code": "BRO",
					"kw": "",
					"city": "Brownsville"
					},{
					    "name": "Brunette Downs",
					"code": "BTD",
					"kw": "",
					"city": "Brunette Downs"
					},{
					    "name": "Brunswick Glynco Jetport",
					"code": "BQK",
					"kw": "",
					"city": "Brunswick"
					},{
					    "name": "Brunswick M B McKinnon ",
					"code": "SSI",
					"kw": "",
					"city": "Brunswick"
					},{
					    "name": "Brussels National Airport",
					"code": "BRU",
					"kw": "",
					"city": "Brussels"
					},{
					    "name": "Brussels South Airport",
					"code": "CRL",
					"kw": "",
					"city": "Brussels"
					},{
					    "name": "Bucaramanga",
					"code": "BGA",
					"kw": "",
					"city": "Bucaramanga"
					},{
					    "name": "Buchanan",
					"code": "UCN",
					"kw": "",
					"city": "Buchanan"
					},{
					    "name": "Bucharest Baneasa ",
					"code": "BBU",
					"kw": "",
					"city": "Bucharest"
					},{
					    "name": "Bucharest Otopeni ",
					"code": "OTP",
					"kw": "",
					"city": "Bucharest"
					},{
					    "name": "Budapest",
					"code": "BUD",
					"kw": "",
					"city": "Budapest"
					},{
					    "name": "Buenaventura",
					"code": "BUN",
					"kw": "",
					"city": "Buenaventura"
					},{
					    "name": "Buenos Aires Ministro Pistarini",
					"code": "EZE",
					"kw": "",
					"city": "Buenos Aires"
					},{
					    "name": "Buenos Aires Aeroparque J. Newbery",
					"code": "AEP",
					"kw": "",
					"city": "Buenos Aires"
					},{
					    "name": "Buffalo",
					"code": "BUF",
					"kw": "",
					"city": "Buffalo"
					},{
					    "name": "Buffalo Narrows",
					"code": "YVT",
					"kw": "",
					"city": "Buffalo Narrows"
					},{
					    "name": "Buin",
					"code": "UBI",
					"kw": "",
					"city": "Buin"
					},{
					    "name": "Bujumbura",
					"code": "BJM",
					"kw": "",
					"city": "Bujumbura"
					},{
					    "name": "Buka",
					"code": "BUA",
					"kw": "",
					"city": "Buka"
					},{
					    "name": "Bukavu",
					"code": "BKY",
					"kw": "",
					"city": "Bukavu"
					},{
					    "name": "Bukhara",
					"code": "BHK",
					"kw": "",
					"city": "Bukhara"
					},{
					    "name": "Bukoba",
					"code": "BKZ",
					"kw": "",
					"city": "Bukoba"
					},{
					    "name": "Bulawayo",
					"code": "BUQ",
					"kw": "",
					"city": "Bulawayo"
					},{
					    "name": "Bulchi",
					"code": "BCY",
					"kw": "",
					"city": "Bulchi"
					},{
					    "name": "Bulolo",
					"code": "BUL",
					"kw": "",
					"city": "Bulolo"
					},{
					    "name": "Bumba",
					"code": "BMB",
					"kw": "",
					"city": "Bumba"
					},{
					    "name": "Bundi",
					"code": "BNT",
					"kw": "",
					"city": "Bundi"
					},{
					    "name": "Bunia",
					"code": "BUX",
					"kw": "",
					"city": "Bunia"
					},{
					    "name": "Buno Bedelle",
					"code": "XBL",
					"kw": "",
					"city": "Buno Bedelle"
					},{
					    "name": "Buol",
					"code": "UOL",
					"kw": "",
					"city": "Buol"
					},{
					    "name": "Buraimi",
					"code": "RMB",
					"kw": "",
					"city": "Buraimi"
					},{
					    "name": "Burao",
					"code": "BUO",
					"kw": "",
					"city": "Burao"
					},{
					    "name": "Burbank",
					"code": "BUR",
					"kw": "",
					"city": "Burbank"
					},{
					    "name": "Bureta",
					"code": "LEV",
					"kw": "",
					"city": "Bureta"
					},{
					    "name": "Burlington",
					"code": "BTV",
					"kw": "",
					"city": "Burlington"
					},{
					    "name": "Bursa",
					"code": "BTZ",
					"kw": "",
					"city": "Bursa"
					},{
					    "name": "Bushehr",
					"code": "BUZ",
					"kw": "",
					"city": "Bushehr"
					},{
					    "name": "Buta",
					"code": "BZU",
					"kw": "",
					"city": "Buta"
					},{
					    "name": "Butare",
					"code": "BTQ",
					"kw": "",
					"city": "Butare"
					},{
					    "name": "Butaritari",
					"code": "BBG",
					"kw": "",
					"city": "Butaritari"
					},{
					    "name": "Butte",
					"code": "BTM",
					"kw": "",
					"city": "Butte"
					},{
					    "name": "Bydgoszcz",
					"code": "BZG",
					"kw": "",
					"city": "Bydgoszcz"
					},{
					    "name": "Cabimas",
					"code": "CBS",
					"kw": "",
					"city": "Cabimas"
					},{
					    "name": "Cabinda",
					"code": "CAB",
					"kw": "",
					"city": "Cabinda"
					},{
					    "name": "Cabo Rojo",
					"code": "CBJ",
					"kw": "",
					"city": "Cabo Rojo"
					},{
					    "name": "Caceres",
					"code": "CCX",
					"kw": "",
					"city": "Caceres"
					},{
					    "name": "Caen",
					"code": "CFR",
					"kw": "",
					"city": "Caen"
					},{
					    "name": "Cagayan de Oro",
					"code": "CGY",
					"kw": "",
					"city": "Cagayan de Oro"
					},{
					    "name": "Cagliari",
					"code": "CAG",
					"kw": "",
					"city": "Cagliari"
					},{
					    "name": "Caicara",
					"code": "CXA",
					"kw": "",
					"city": "Caicara"
					},{
					    "name": "Cairo",
					"code": "CAI",
					"kw": "",
					"city": "Cairo"
					},{
					    "name": "Cajamarca",
					"code": "CJA",
					"kw": "",
					"city": "Cajamarca"
					},{
					    "name": "Calabar",
					"code": "CBQ",
					"kw": "",
					"city": "Calabar"
					},{
					    "name": "Calabozo",
					"code": "CLZ",
					"kw": "",
					"city": "Calabozo"
					},{
					    "name": "Calais Marck ",
					"code": "CQF",
					"kw": "",
					"city": "Calais"
					},{
					    "name": "Calama",
					"code": "CJC",
					"kw": "",
					"city": "Calama"
					},{
					    "name": "Calbayog",
					"code": "CYP",
					"kw": "",
					"city": "Calbayog"
					},{
					    "name": "Calcutta",
					"code": "CCU",
					"kw": "",
					"city": "Calcutta"
					},{
					    "name": "Calexico",
					"code": "CXL",
					"kw": "",
					"city": "Calexico"
					},{
					    "name": "Calgary",
					"code": "YYC",
					"kw": "",
					"city": "Calgary"
					},{
					    "name": "Cali",
					"code": "CLO",
					"kw": "",
					"city": "Cali"
					},{
					    "name": "Calvi",
					"code": "CLY",
					"kw": "",
					"city": "Calvi"
					},{
					    "name": "Camaguey",
					"code": "CMW",
					"kw": "",
					"city": "Camaguey"
					},{
					    "name": "Cambridge",
					"code": "CBG",
					"kw": "",
					"city": "Cambridge"
					},{
					    "name": "Cambridge Bay",
					"code": "YCB",
					"kw": "",
					"city": "Cambridge Bay"
					},{
					    "name": "Camden",
					"code": "CDH",
					"kw": "",
					"city": "Camden"
					},{
					    "name": "Camiri",
					"code": "CAM",
					"kw": "",
					"city": "Camiri"
					},{
					    "name": "Campeche",
					"code": "CPE",
					"kw": "",
					"city": "Campeche"
					},{
					    "name": "Campo Grande",
					"code": "CGR",
					"kw": "",
					"city": "Campo Grande"
					},{
					    "name": "Cana Brava",
					"code": "NBV",
					"kw": "",
					"city": "Cana Brava"
					},{
					    "name": "Canaima",
					"code": "CAJ",
					"kw": "",
					"city": "Canaima"
					},{
					    "name": "Canakkale",
					"code": "CKZ",
					"kw": "",
					"city": "Canakkale"
					},{
					    "name": "Cancun",
					"code": "CUN",
					"kw": "",
					"city": "Cancun"
					},{
					    "name": "Candala",
					"code": "CXN",
					"kw": "",
					"city": "Candala"
					},{
					    "name": "Cangamba",
					"code": "CNZ",
					"kw": "",
					"city": "Cangamba"
					},{
					    "name": "Canon City",
					"code": "CNE",
					"kw": "",
					"city": "Canon City"
					},{
					    "name": "Canouan Island",
					"code": "CIW",
					"kw": "",
					"city": "Canouan Island"
					},{
					    "name": "Canton Island",
					"code": "CIS",
					"kw": "",
					"city": "Canton Island"
					},{
					    "name": "Cap Haitien",
					"code": "CAP",
					"kw": "",
					"city": "Cap Haitien"
					},{
					    "name": "Cape Dorset",
					"code": "YTE",
					"kw": "",
					"city": "Cape Dorset"
					},{
					    "name": "Cape Girardeau",
					"code": "CGI",
					"kw": "",
					"city": "Cape Girardeau"
					},{
					    "name": "Cape Gloucester",
					"code": "CGC",
					"kw": "",
					"city": "Cape Gloucester"
					},{
					    "name": "Cape Palmas",
					"code": "CPA",
					"kw": "",
					"city": "Cape Palmas"
					},{
					    "name": "Cape Rodney",
					"code": "CPN",
					"kw": "",
					"city": "Cape Rodney"
					},{
					    "name": "Cape Town",
					"code": "CPT",
					"kw": "",
					"city": "Cape Town"
					},{
					    "name": "Cape Vogel",
					"code": "CVL",
					"kw": "",
					"city": "Cape Vogel"
					},{
					    "name": "Capurgana",
					"code": "CPB",
					"kw": "",
					"city": "Capurgana"
					},{
					    "name": "Caquetania",
					"code": "CQT",
					"kw": "",
					"city": "Caquetania"
					},{
					    "name": "Car Nicobar",
					"code": "CBD",
					"kw": "",
					"city": "Car Nicobar"
					},{
					    "name": "Caracas",
					"code": "CCS",
					"kw": "",
					"city": "Caracas"
					},{
					    "name": "Carajas",
					"code": "CKS",
					"kw": "",
					"city": "Carajas"
					},{
					    "name": "Caransebes",
					"code": "CSB",
					"kw": "",
					"city": "Caransebes"
					},{
					    "name": "Carbondale",
					"code": "MDH",
					"kw": "",
					"city": "Carbondale"
					},{
					    "name": "Carcassonne",
					"code": "CCF",
					"kw": "",
					"city": "Carcassonne"
					},{
					    "name": "Cardiff",
					"code": "CWL",
					"kw": "",
					"city": "Cardiff"
					},{
					    "name": "Carlisle",
					"code": "CAX",
					"kw": "",
					"city": "Carlisle"
					},{
					    "name": "Carlsbad",
					"code": "CNM",
					"kw": "",
					"city": "Carlsbad"
					},{
					    "name": "Carlsbad",
					"code": "CLD",
					"kw": "",
					"city": "Carlsbad"
					},{
					    "name": "Carnot",
					"code": "CRF",
					"kw": "",
					"city": "Carnot"
					},{
					    "name": "Carolina",
					"code": "CLN",
					"kw": "",
					"city": "Carolina"
					},{
					    "name": "Carriacou",
					"code": "CRU",
					"kw": "",
					"city": "Carriacou"
					},{
					    "name": "Cartagena",
					"code": "CTG",
					"kw": "",
					"city": "Cartagena"
					},{
					    "name": "Cartwright",
					"code": "YRF",
					"kw": "",
					"city": "Cartwright"
					},{
					    "name": "Carupano",
					"code": "CUP",
					"kw": "",
					"city": "Carupano"
					},{
					    "name": "Carutapera",
					"code": "CTP",
					"kw": "",
					"city": "Carutapera"
					},{
					    "name": "Casablanca Anfa ",
					"code": "CAS",
					"kw": "",
					"city": "Casablanca"
					},{
					    "name": "Casablanca Mohamed V ",
					"code": "CMN",
					"kw": "",
					"city": "Casablanca"
					},{
					    "name": "Cascavel",
					"code": "CAC",
					"kw": "",
					"city": "Cascavel"
					},{
					    "name": "Casigua",
					"code": "CUV",
					"kw": "",
					"city": "Casigua"
					},{
					    "name": "Castaway",
					"code": "CST",
					"kw": "",
					"city": "Castaway"
					},{
					    "name": "Catalao",
					"code": "TLZ",
					"kw": "",
					"city": "Catalao"
					},{
					    "name": "Catalina Island Avalon Bay ",
					"code": "AVX",
					"kw": "",
					"city": "Catalina Island"
					},{
					    "name": "Catamarca",
					"code": "CTC",
					"kw": "",
					"city": "Catamarca"
					},{
					    "name": "Catania",
					"code": "CTA",
					"kw": "",
					"city": "Catania"
					},{
					    "name": "Catarman",
					"code": "CRM",
					"kw": "",
					"city": "Catarman"
					},{
					    "name": "Cauayan",
					"code": "CYZ",
					"kw": "",
					"city": "Cauayan"
					},{
					    "name": "Caucasia",
					"code": "CAQ",
					"kw": "",
					"city": "Caucasia"
					},{
					    "name": "Caye Chapel",
					"code": "CYC",
					"kw": "",
					"city": "Caye Chapel"
					},{
					    "name": "Cayenne",
					"code": "CAY",
					"kw": "",
					"city": "Cayenne"
					},{
					    "name": "Cayman Brac",
					"code": "CYB",
					"kw": "",
					"city": "Cayman Brac"
					},{
					    "name": "Cazombo",
					"code": "CAV",
					"kw": "",
					"city": "Cazombo"
					},{
					    "name": "Ceduna",
					"code": "CED",
					"kw": "",
					"city": "Ceduna"
					},{
					    "name": "Ceres",
					"code": "CRR",
					"kw": "",
					"city": "Ceres"
					},{
					    "name": "Chachapoyas",
					"code": "CHH",
					"kw": "",
					"city": "Chachapoyas"
					},{
					    "name": "Chadron",
					"code": "CDR",
					"kw": "",
					"city": "Chadron"
					},{
					    "name": "Chagni",
					"code": "MKD",
					"kw": "",
					"city": "Chagni"
					},{
					    "name": "Chah-Bahar",
					"code": "ZBR",
					"kw": "",
					"city": "Chah-Bahar"
					},{
					    "name": "Chaiten",
					"code": "WCH",
					"kw": "",
					"city": "Chaiten"
					},{
					    "name": "Chakcharan",
					"code": "CCN",
					"kw": "",
					"city": "Chakcharan"
					},{
					    "name": "Challis",
					"code": "CHL",
					"kw": "",
					"city": "Challis"
					},{
					    "name": "Chambery",
					"code": "CMF",
					"kw": "",
					"city": "Chambery"
					},{
					    "name": "Champaign",
					"code": "CMI",
					"kw": "",
					"city": "Champaign"
					},{
					    "name": "Chandigarh",
					"code": "IXC",
					"kw": "",
					"city": "Chandigarh"
					},{
					    "name": "Changuinola",
					"code": "CHX",
					"kw": "",
					"city": "Changuinola"
					},{
					    "name": "Chania",
					"code": "CHQ",
					"kw": "",
					"city": "Chania"
					},{
					    "name": "Charleston",
					"code": "CHS",
					"kw": "",
					"city": "Charleston"
					},{
					    "name": "Chateauroux",
					"code": "CHR",
					"kw": "",
					"city": "Chateauroux"
					},{
					    "name": "Chatham",
					"code": "XCM",
					"kw": "",
					"city": "Chatham"
					},{
					    "name": "Chatham Island",
					"code": "CHT",
					"kw": "",
					"city": "Chatham Island"
					},{
					    "name": "Chattanooga Lovell Field ",
					"code": "CHA",
					"kw": "",
					"city": "Chattanooga"
					},{
					    "name": "Chaves",
					"code": "CHV",
					"kw": "",
					"city": "Chaves"
					},{
					    "name": "Cheju International",
					"code": "CJU",
					"kw": "",
					"city": "Cheju"
					},{
					    "name": "Chelyabinsk",
					"code": "CEK",
					"kw": "",
					"city": "Chelyabinsk"
					},{
					    "name": "Chennai",
					"code": "MAA",
					"kw": "",
					"city": "Chennai"
					},{
					    "name": "Cheraw",
					"code": "HCW",
					"kw": "",
					"city": "Cheraw"
					},{
					    "name": "Cherbourg",
					"code": "CER",
					"kw": "",
					"city": "Cherbourg"
					},{
					    "name": "Chester",
					"code": "CEG",
					"kw": "",
					"city": "Chester"
					},{
					    "name": "Chesterfield Inlet",
					"code": "YCS",
					"kw": "",
					"city": "Chesterfield Inlet"
					},{
					    "name": "Chetumal",
					"code": "CTM",
					"kw": "",
					"city": "Chetumal"
					},{
					    "name": "Chi Mei",
					"code": "CMJ",
					"kw": "",
					"city": "Chi Mei"
					},{
					    "name": "Chiang Mai",
					"code": "CNX",
					"kw": "",
					"city": "Chiang Mai"
					},{
					    "name": "Chiang Rai",
					"code": "CEI",
					"kw": "",
					"city": "Chiang Rai"
					},{
					    "name": "Chichen Itza",
					"code": "CZA",
					"kw": "",
					"city": "Chichen Itza"
					},{
					    "name": "Chiclayo",
					"code": "CIX",
					"kw": "",
					"city": "Chiclayo"
					},{
					    "name": "Chico",
					"code": "CIC",
					"kw": "",
					"city": "Chico"
					},{
					    "name": "Chigorodo",
					"code": "IGO",
					"kw": "",
					"city": "Chigorodo"
					},{
					    "name": "Chihuahua",
					"code": "CUU",
					"kw": "",
					"city": "Chihuahua"
					},{
					    "name": "Chimbote",
					"code": "CHM",
					"kw": "",
					"city": "Chimbote"
					},{
					    "name": "Chingola",
					"code": "CGJ",
					"kw": "",
					"city": "Chingola"
					},{
					    "name": "Chinju",
					"code": "HIN",
					"kw": "",
					"city": "Chinju"
					},{
					    "name": "Chipata",
					"code": "CIP",
					"kw": "",
					"city": "Chipata"
					},{
					    "name": "Chisinau",
					"code": "KIV",
					"kw": "",
					"city": "Chisinau"
					},{
					    "name": "Chita",
					"code": "HTA",
					"kw": "",
					"city": "Chita"
					},{
					    "name": "Chitato",
					"code": "PGI",
					"kw": "",
					"city": "Chitato"
					},{
					    "name": "Chitral",
					"code": "CJL",
					"kw": "",
					"city": "Chitral"
					},{
					    "name": "Chittagong",
					"code": "CGP",
					"kw": "",
					"city": "Chittagong"
					},{
					    "name": "Choiseul Bay",
					"code": "CHY",
					"kw": "",
					"city": "Choiseul Bay"
					},{
					    "name": "Christchurch",
					"code": "CHC",
					"kw": "",
					"city": "Christchurch"
					},{
					    "name": "Christmas Island",
					"code": "XCH",
					"kw": "",
					"city": "Christmas Island"
					},{
					    "name": "Chub Cay",
					"code": "CCZ",
					"kw": "",
					"city": "Chub Cay"
					},{
					    "name": "Churchill Falls",
					"code": "ZUM",
					"kw": "",
					"city": "Churchill Falls"
					},{
					    "name": "Cicia",
					"code": "ICI",
					"kw": "",
					"city": "Cicia"
					},{
					    "name": "Cilacap",
					"code": "CXP",
					"kw": "",
					"city": "Cilacap"
					},{
					    "name": "Cirebon",
					"code": "CBN",
					"kw": "",
					"city": "Cirebon"
					},{
					    "name": "Ciudad Bolivar",
					"code": "CBL",
					"kw": "",
					"city": "Ciudad Bolivar"
					},{
					    "name": "Ciudad Constitucion",
					"code": "CUA",
					"kw": "",
					"city": "Ciudad Constitucion"
					},{
					    "name": "Ciudad Del Carmen",
					"code": "CME",
					"kw": "",
					"city": "Ciudad Del Carmen"
					},{
					    "name": "Ciudad Juarez",
					"code": "CJS",
					"kw": "",
					"city": "Ciudad Juarez"
					},{
					    "name": "Ciudad Obregon",
					"code": "CEN",
					"kw": "",
					"city": "Ciudad Obregon"
					},{
					    "name": "Clarksville",
					"code": "CKV",
					"kw": "",
					"city": "Clarksville"
					},{
					    "name": "Clear Lake",
					"code": "CKE",
					"kw": "",
					"city": "Clear Lake"
					},{
					    "name": "Clermont-Ferrand",
					"code": "CFE",
					"kw": "",
					"city": "Clermont-Ferrand"
					},{
					    "name": "Cleve",
					"code": "CVC",
					"kw": "",
					"city": "Cleve"
					},{
					    "name": "Clifton Hills",
					"code": "CFH",
					"kw": "",
					"city": "Clifton Hills"
					},{
					    "name": "Clorinda",
					"code": "CLX",
					"kw": "",
					"city": "Clorinda"
					},{
					    "name": "Cluj",
					"code": "CLJ",
					"kw": "",
					"city": "Cluj"
					},{
					    "name": "Clyde River",
					"code": "YCY",
					"kw": "",
					"city": "Clyde River"
					},{
					    "name": "Coatesville",
					"code": "CTH",
					"kw": "",
					"city": "Coatesville"
					},{
					    "name": "Cobar",
					"code": "CAZ",
					"kw": "",
					"city": "Cobar"
					},{
					    "name": "Cobija",
					"code": "CIJ",
					"kw": "",
					"city": "Cobija"
					},{
					    "name": "Coca",
					"code": "OCC",
					"kw": "",
					"city": "Coca"
					},{
					    "name": "Cochabamba",
					"code": "CBB",
					"kw": "",
					"city": "Cochabamba"
					},{
					    "name": "Cochin",
					"code": "COK",
					"kw": "",
					"city": "Cochin"
					},{
					    "name": "Cocos Islands",
					"code": "CCK",
					"kw": "",
					"city": "Cocos Islands"
					},{
					    "name": "Coeur D'Alene",
					"code": "COE",
					"kw": "",
					"city": "Coeur D'Alene"
					},{
					    "name": "Coimbatore",
					"code": "CJB",
					"kw": "",
					"city": "Coimbatore"
					},{
					    "name": "Coimbra",
					"code": "CBP",
					"kw": "",
					"city": "Coimbra"
					},{
					    "name": "Cold Lake",
					"code": "YOD",
					"kw": "",
					"city": "Cold Lake"
					},{
					    "name": "Colima",
					"code": "CLQ",
					"kw": "",
					"city": "Colima"
					},{
					    "name": "Colmar",
					"code": "CMR",
					"kw": "",
					"city": "Colmar"
					},{
					    "name": "Cologne Main Rail Station",
					"code": "QKL",
					"kw": "",
					"city": "Cologne"
					},{
					    "name": "Cologne Bonn Main Rail Station",
					"code": "BNJ",
					"kw": "",
					"city": "Cologne"
					},{
					    "name": "Cologne/Bonn K.A.",
					"code": "CGN",
					"kw": "",
					"city": "Cologne"
					},{
					    "name": "Colombo Bandaranaike ",
					"code": "CMB",
					"kw": "",
					"city": "Colombo"
					},{
					    "name": "Colon",
					"code": "ONX",
					"kw": "",
					"city": "Colon"
					},{
					    "name": "Colonia",
					"code": "CYR",
					"kw": "",
					"city": "Colonia"
					},{
					    "name": "Colonia Catriel",
					"code": "CCT",
					"kw": "",
					"city": "Colonia Catriel"
					},{
					    "name": "Colonia Sarmiento",
					"code": "OLN",
					"kw": "",
					"city": "Colonia Sarmiento"
					},{
					    "name": "Colorado Springs Peterson Field",
					"code": "COS",
					"kw": "",
					"city": "Colorado Springs"
					},{
					    "name": "Columbia Metropolitan ",
					"code": "CAE",
					"kw": "",
					"city": "Columbia"
					},{
					    "name": "Columbia",
					"code": "COU",
					"kw": "",
					"city": "Columbia"
					},{
					    "name": "Columbia",
					"code": "COA",
					"kw": "",
					"city": "Columbia"
					},{
					    "name": "Columbus Lowndes County ",
					"code": "UBS",
					"kw": "",
					"city": "Columbus"
					},{
					    "name": "Columbus Golden Triangle Regional ",
					"code": "GTR",
					"kw": "",
					"city": "Columbus"
					},{
					    "name": "Columbus Metropolitan ",
					"code": "CSG",
					"kw": "",
					"city": "Columbus"
					},{
					    "name": "Columbus",
					"code": "OLU",
					"kw": "",
					"city": "Columbus"
					},{
					    "name": "Comilla",
					"code": "CLA",
					"kw": "",
					"city": "Comilla"
					},{
					    "name": "Comodoro Rivadavia",
					"code": "CRD",
					"kw": "",
					"city": "Comodoro Rivadavia"
					},{
					    "name": "Conakry",
					"code": "CKY",
					"kw": "",
					"city": "Conakry"
					},{
					    "name": "Conceicao Do Araguaia",
					"code": "CDJ",
					"kw": "",
					"city": "Conceicao Do Araguaia"
					},{
					    "name": "Concepcion",
					"code": "CCP",
					"kw": "",
					"city": "Concepcion"
					},{
					    "name": "Concepcion",
					"code": "CEP",
					"kw": "",
					"city": "Concepcion"
					},{
					    "name": "Concord",
					"code": "CCR",
					"kw": "",
					"city": "Concord"
					},{
					    "name": "Concordia",
					"code": "CCI",
					"kw": "",
					"city": "Concordia"
					},{
					    "name": "Concordia",
					"code": "COC",
					"kw": "",
					"city": "Concordia"
					},{
					    "name": "Condoto",
					"code": "COG",
					"kw": "",
					"city": "Condoto"
					},{
					    "name": "Constanta",
					"code": "CND",
					"kw": "",
					"city": "Constanta"
					},{
					    "name": "Constantine",
					"code": "CZL",
					"kw": "",
					"city": "Constantine"
					},{
					    "name": "Contadora",
					"code": "OTD",
					"kw": "",
					"city": "Contadora"
					},{
					    "name": "Coober Pedy",
					"code": "CPD",
					"kw": "",
					"city": "Coober Pedy"
					},{
					    "name": "Cooch Behar",
					"code": "COH",
					"kw": "",
					"city": "Cooch Behar"
					},{
					    "name": "Cooinda",
					"code": "CDA",
					"kw": "",
					"city": "Cooinda"
					},{
					    "name": "Copenhagen ",
					"code": "CPH",
					"kw": "",
					"city": "Copenhagen"
					},{
					    "name": "Copiapo",
					"code": "CPO",
					"kw": "",
					"city": "Copiapo"
					},{
					    "name": "Coral Harbour",
					"code": "YZS",
					"kw": "",
					"city": "Coral Harbour"
					},{
					    "name": "Cordillo Downs",
					"code": "ODL",
					"kw": "",
					"city": "Cordillo Downs"
					},{
					    "name": "Cordoba",
					"code": "COR",
					"kw": "",
					"city": "Cordoba"
					},{
					    "name": "Cordoba",
					"code": "ODB",
					"kw": "",
					"city": "Cordoba"
					},{
					    "name": "Cork",
					"code": "ORK",
					"kw": "",
					"city": "Cork"
					},{
					    "name": "Corn Island",
					"code": "RNI",
					"kw": "",
					"city": "Corn Island"
					},{
					    "name": "Cornelio Procopio",
					"code": "CKO",
					"kw": "",
					"city": "Cornelio Procopio"
					},{
					    "name": "Cornwall",
					"code": "YCC",
					"kw": "",
					"city": "Cornwall"
					},{
					    "name": "Corozal",
					"code": "CZH",
					"kw": "",
					"city": "Corozal"
					},{
					    "name": "Corozal",
					"code": "CZU",
					"kw": "",
					"city": "Corozal"
					},{
					    "name": "Corrientes",
					"code": "CNQ",
					"kw": "",
					"city": "Corrientes"
					},{
					    "name": "Cortez",
					"code": "CEZ",
					"kw": "",
					"city": "Cortez"
					},{
					    "name": "Corumba",
					"code": "CMG",
					"kw": "",
					"city": "Corumba"
					},{
					    "name": "Cotabato",
					"code": "CBO",
					"kw": "",
					"city": "Cotabato"
					},{
					    "name": "Coto 47",
					"code": "OTR",
					"kw": "",
					"city": "Coto 47"
					},{
					    "name": "Cotonou",
					"code": "COO",
					"kw": "",
					"city": "Cotonou"
					},{
					    "name": "Courchevel",
					"code": "CVF",
					"kw": "",
					"city": "Courchevel"
					},{
					    "name": "Covenas",
					"code": "CVE",
					"kw": "",
					"city": "Covenas"
					},{
					    "name": "Coventry",
					"code": "CVT",
					"kw": "",
					"city": "Coventry"
					},{
					    "name": "Covilha",
					"code": "COV",
					"kw": "",
					"city": "Covilha"
					},{
					    "name": "Cowarie",
					"code": "CWR",
					"kw": "",
					"city": "Cowarie"
					},{
					    "name": "Cowell",
					"code": "CCW",
					"kw": "",
					"city": "Cowell"
					},{
					    "name": "Cox's Bazar",
					"code": "CXB",
					"kw": "",
					"city": "Cox's Bazar"
					},{
					    "name": "Coyhaique",
					"code": "GXQ",
					"kw": "",
					"city": "Coyhaique"
					},{
					    "name": "Cozumel",
					"code": "CZM",
					"kw": "",
					"city": "Cozumel"
					},{
					    "name": "Craig Cove",
					"code": "CCV",
					"kw": "",
					"city": "Craig Cove"
					},{
					    "name": "Craiova",
					"code": "CRA",
					"kw": "",
					"city": "Craiova"
					},{
					    "name": "Cravo Norte",
					"code": "RAV",
					"kw": "",
					"city": "Cravo Norte"
					},{
					    "name": "Crescent City",
					"code": "CEC",
					"kw": "",
					"city": "Crescent City"
					},{
					    "name": "Crested Butte",
					"code": "CSE",
					"kw": "",
					"city": "Crested Butte"
					},{
					    "name": "Criciuma",
					"code": "CCM",
					"kw": "",
					"city": "Criciuma"
					},{
					    "name": "Croker Island",
					"code": "CKI",
					"kw": "",
					"city": "Croker Island"
					},{
					    "name": "Crooked Island",
					"code": "CRI",
					"kw": "",
					"city": "Crooked Island"
					},{
					    "name": "Cross Lake",
					"code": "YCR",
					"kw": "",
					"city": "Cross Lake"
					},{
					    "name": "Crossville",
					"code": "CSV",
					"kw": "",
					"city": "Crossville"
					},{
					    "name": "Crotone",
					"code": "CRV",
					"kw": "",
					"city": "Crotone"
					},{
					    "name": "Cucuta",
					"code": "CUC",
					"kw": "",
					"city": "Cucuta"
					},{
					    "name": "Cuddapah",
					"code": "CDP",
					"kw": "",
					"city": "Cuddapah"
					},{
					    "name": "Cuenca",
					"code": "CUE",
					"kw": "",
					"city": "Cuenca"
					},{
					    "name": "Cuiaba",
					"code": "CGB",
					"kw": "",
					"city": "Cuiaba"
					},{
					    "name": "Cuito Cuanavale",
					"code": "CTI",
					"kw": "",
					"city": "Cuito Cuanavale"
					},{
					    "name": "Culebra",
					"code": "CPX",
					"kw": "",
					"city": "Culebra"
					},{
					    "name": "Culiacan",
					"code": "CUL",
					"kw": "",
					"city": "Culiacan"
					},{
					    "name": "Cumana",
					"code": "CUM",
					"kw": "",
					"city": "Cumana"
					},{
					    "name": "Cumberland",
					"code": "CBE",
					"kw": "",
					"city": "Cumberland"
					},{
					    "name": "Cuneo",
					"code": "CUF",
					"kw": "",
					"city": "Cuneo"
					},{
					    "name": "Curacao",
					"code": "CUR",
					"kw": "",
					"city": "Curacao"
					},{
					    "name": "Curitiba Afonso Pena",
					"code": "CWB",
					"kw": "",
					"city": "Curitiba"
					},{
					    "name": "Cururupu",
					"code": "CPU",
					"kw": "",
					"city": "Cururupu"
					},{
					    "name": "Curuzu Cuatia",
					"code": "UZU",
					"kw": "",
					"city": "Curuzu Cuatia"
					},{
					    "name": "Cutral",
					"code": "CUT",
					"kw": "",
					"city": "Cutral"
					},{
					    "name": "Cuzco",
					"code": "CUZ",
					"kw": "",
					"city": "Cuzco"
					},{
					    "name": "Da Nang",
					"code": "DAD",
					"kw": "",
					"city": "Da Nang"
					},{
					    "name": "Daet",
					"code": "DTE",
					"kw": "",
					"city": "Daet"
					},{
					    "name": "Dakar",
					"code": "DKR",
					"kw": "",
					"city": "Dakar"
					},{
					    "name": "Dakhla",
					"code": "VIL",
					"kw": "",
					"city": "Dakhla"
					},{
					    "name": "Dalaman",
					"code": "DLM",
					"kw": "",
					"city": "Dalaman"
					},{
					    "name": "Dalbandin",
					"code": "DBA",
					"kw": "",
					"city": "Dalbandin"
					},{
					    "name": "Daloa",
					"code": "DJO",
					"kw": "",
					"city": "Daloa"
					},{
					    "name": "Daly River",
					"code": "DVR",
					"kw": "",
					"city": "Daly River"
					},{
					    "name": "Daly Waters",
					"code": "DYW",
					"kw": "",
					"city": "Daly Waters"
					},{
					    "name": "Daman",
					"code": "NMB",
					"kw": "",
					"city": "Daman"
					},{
					    "name": "Damascus",
					"code": "DAM",
					"kw": "",
					"city": "Damascus"
					},{
					    "name": "Danville",
					"code": "DNV",
					"kw": "",
					"city": "Danville"
					},{
					    "name": "Danville",
					"code": "DAN",
					"kw": "",
					"city": "Danville"
					},{
					    "name": "Daparizo",
					"code": "DAE",
					"kw": "",
					"city": "Daparizo"
					},{
					    "name": "Dar Es Salaam",
					"code": "DAR",
					"kw": "",
					"city": "Dar Es Salaam"
					},{
					    "name": "Daru",
					"code": "DAU",
					"kw": "",
					"city": "Daru"
					},{
					    "name": "Darwin",
					"code": "DRW",
					"kw": "",
					"city": "Darwin"
					},{
					    "name": "Dathina",
					"code": "DAH",
					"kw": "",
					"city": "Dathina"
					},{
					    "name": "Dauphin",
					"code": "YDN",
					"kw": "",
					"city": "Dauphin"
					},{
					    "name": "Davao",
					"code": "DVO",
					"kw": "",
					"city": "Davao"
					},{
					    "name": "David",
					"code": "DAV",
					"kw": "",
					"city": "David"
					},{
					    "name": "Davis Inlet",
					"code": "YDI",
					"kw": "",
					"city": "Davis Inlet"
					},{
					    "name": "Deauville",
					"code": "DOL",
					"kw": "",
					"city": "Deauville"
					},{
					    "name": "Debepare",
					"code": "DBP",
					"kw": "",
					"city": "Debepare"
					},{
					    "name": "Debra Marcos",
					"code": "DBM",
					"kw": "",
					"city": "Debra Marcos"
					},{
					    "name": "Decatur",
					"code": "DEC",
					"kw": "",
					"city": "Decatur"
					},{
					    "name": "Deer Lake",
					"code": "YDF",
					"kw": "",
					"city": "Deer Lake"
					},{
					    "name": "Deirezzor",
					"code": "DEZ",
					"kw": "",
					"city": "Deirezzor"
					},{
					    "name": "Delhi",
					"code": "DEL",
					"kw": "",
					"city": "Delhi"
					},{
					    "name": "Deline",
					"code": "YWJ",
					"kw": "",
					"city": "Deline"
					},{
					    "name": "Delissaville",
					"code": "DLV",
					"kw": "",
					"city": "Delissaville"
					},{
					    "name": "Dembidollo",
					"code": "DEM",
					"kw": "",
					"city": "Dembidollo"
					},{
					    "name": "Denis Island",
					"code": "DEI",
					"kw": "",
					"city": "Denis Island"
					},{
					    "name": "Denpasar Bali",
					"code": "DPS",
					"kw": "",
					"city": "Denpasar Bali"
					},{
					    "name": "Denver Intl ",
					"code": "DEN",
					"kw": "",
					"city": "Denver"
					},{
					    "name": "Dera Ismail Khan",
					"code": "DSK",
					"kw": "",
					"city": "Dera Ismail Khan"
					},{
					    "name": "Derim",
					"code": "DER",
					"kw": "",
					"city": "Derim"
					},{
					    "name": "Derna",
					"code": "DNF",
					"kw": "",
					"city": "Derna"
					},{
					    "name": "Desroches",
					"code": "DES",
					"kw": "",
					"city": "Desroches"
					},{
					    "name": "Dessie",
					"code": "DSE",
					"kw": "",
					"city": "Dessie"
					},{
					    "name": "Dhaka",
					"code": "DAC",
					"kw": "",
					"city": "Dhaka"
					},{
					    "name": "Dhangarhi",
					"code": "DHI",
					"kw": "",
					"city": "Dhangarhi"
					},{
					    "name": "Dianopolis",
					"code": "DNO",
					"kw": "",
					"city": "Dianopolis"
					},{
					    "name": "Dibaa",
					"code": "BYB",
					"kw": "",
					"city": "Dibaa"
					},{
					    "name": "Dibrugarh",
					"code": "DIB",
					"kw": "",
					"city": "Dibrugarh"
					},{
					    "name": "Diebougou",
					"code": "XDE",
					"kw": "",
					"city": "Diebougou"
					},{
					    "name": "Dijon",
					"code": "DIJ",
					"kw": "",
					"city": "Dijon"
					},{
					    "name": "Dili",
					"code": "DIL",
					"kw": "",
					"city": "Dili"
					},{
					    "name": "Dillon",
					"code": "DLL",
					"kw": "",
					"city": "Dillon"
					},{
					    "name": "Dimapur",
					"code": "DMU",
					"kw": "",
					"city": "Dimapur"
					},{
					    "name": "Dinangat",
					"code": "DNU",
					"kw": "",
					"city": "Dinangat"
					},{
					    "name": "Dinard",
					"code": "DNR",
					"kw": "",
					"city": "Dinard"
					},{
					    "name": "Dinder",
					"code": "DNX",
					"kw": "",
					"city": "Dinder"
					},{
					    "name": "Dios",
					"code": "DOS",
					"kw": "",
					"city": "Dios"
					},{
					    "name": "Dipolog",
					"code": "DPL",
					"kw": "",
					"city": "Dipolog"
					},{
					    "name": "Dire Dawa",
					"code": "DIR",
					"kw": "",
					"city": "Dire Dawa"
					},{
					    "name": "Diyarbakir",
					"code": "DIY",
					"kw": "",
					"city": "Diyarbakir"
					},{
					    "name": "Djambala",
					"code": "DJM",
					"kw": "",
					"city": "Djambala"
					},{
					    "name": "Djanet",
					"code": "DJG",
					"kw": "",
					"city": "Djanet"
					},{
					    "name": "Djerba",
					"code": "DJE",
					"kw": "",
					"city": "Djerba"
					},{
					    "name": "Djibo",
					"code": "XDJ",
					"kw": "",
					"city": "Djibo"
					},{
					    "name": "Djibouti",
					"code": "JIB",
					"kw": "",
					"city": "Djibouti"
					},{
					    "name": "Dnepropetrovsk",
					"code": "DNK",
					"kw": "",
					"city": "Dnepropetrovsk"
					},{
					    "name": "Doany",
					"code": "DOA",
					"kw": "",
					"city": "Doany"
					},{
					    "name": "Docker River",
					"code": "DKV",
					"kw": "",
					"city": "Docker River"
					},{
					    "name": "Dodoima",
					"code": "DDM",
					"kw": "",
					"city": "Dodoima"
					},{
					    "name": "Dodoma",
					"code": "DOD",
					"kw": "",
					"city": "Dodoma"
					},{
					    "name": "Doha",
					"code": "DOH",
					"kw": "",
					"city": "Doha"
					},{
					    "name": "Dominica Melville Hall ",
					"code": "DOM",
					"kw": "",
					"city": "Dominica"
					},{
					    "name": "Dominica Cane Field",
					"code": "DCF",
					"kw": "",
					"city": "Dominica"
					},{
					    "name": "Donegal",
					"code": "CFN",
					"kw": "",
					"city": "Donegal"
					},{
					    "name": "Donetsk",
					"code": "DOK",
					"kw": "",
					"city": "Donetsk"
					},{
					    "name": "Dongola",
					"code": "DOG",
					"kw": "",
					"city": "Dongola"
					},{
					    "name": "Dorado",
					"code": "DDP",
					"kw": "",
					"city": "Dorado"
					},{
					    "name": "Dorobisoro",
					"code": "DOO",
					"kw": "",
					"city": "Dorobisoro"
					},{
					    "name": "Dortmund",
					"code": "DTM",
					"kw": "",
					"city": "Dortmund"
					},{
					    "name": "Dothan",
					"code": "DHN",
					"kw": "",
					"city": "Dothan"
					},{
					    "name": "Douala",
					"code": "DLA",
					"kw": "",
					"city": "Douala"
					},{
					    "name": "Douglas Bisbee-Douglas International Ap",
					"code": "DUG",
					"kw": "",
					"city": "Douglas"
					},{
					    "name": "Dourados",
					"code": "DOU",
					"kw": "",
					"city": "Dourados"
					},{
					    "name": "Dresden",
					"code": "DRS",
					"kw": "",
					"city": "Dresden"
					},{
					    "name": "Dschang",
					"code": "DSC",
					"kw": "",
					"city": "Dschang"
					},{
					    "name": "Dubai",
					"code": "DXB",
					"kw": "",
					"city": "Dubai"
					},{
					    "name": "Dublin",
					"code": "DUB",
					"kw": "",
					"city": "Dublin"
					},{
					    "name": "Dubois",
					"code": "DUJ",
					"kw": "",
					"city": "Dubois"
					},{
					    "name": "Dubrovnik",
					"code": "DBV",
					"kw": "",
					"city": "Dubrovnik"
					},{
					    "name": "Dumaguete",
					"code": "DGT",
					"kw": "",
					"city": "Dumaguete"
					},{
					    "name": "Dumai",
					"code": "DUM",
					"kw": "",
					"city": "Dumai"
					},{
					    "name": "Dundee",
					"code": "DND",
					"kw": "",
					"city": "Dundee"
					},{
					    "name": "Dundo",
					"code": "DUE",
					"kw": "",
					"city": "Dundo"
					},{
					    "name": "Dunedin",
					"code": "DUD",
					"kw": "",
					"city": "Dunedin"
					},{
					    "name": "Durango La Plata ",
					"code": "DRO",
					"kw": "",
					"city": "Durango"
					},{
					    "name": "Durban International Airport",
					"code": "DUR",
					"kw": "",
					"city": "Durban"
					},{
					    "name": "Dushanbe",
					"code": "DYU",
					"kw": "",
					"city": "Dushanbe"
					},{
					    "name": "Dusseldorf Rhein Ruhr Airport",
					"code": "DUS",
					"kw": "",
					"city": "Dusseldorf"
					},{
					    "name": "Dusseldorf Main Rail Station",
					"code": "QDU",
					"kw": "",
					"city": "Dusseldorf"
					},{
					    "name": "East London",
					"code": "ELS",
					"kw": "",
					"city": "East London"
					},{
					    "name": "Easter Island",
					"code": "IPC",
					"kw": "",
					"city": "Easter Island"
					},{
					    "name": "Eday",
					"code": "EOI",
					"kw": "",
					"city": "Eday"
					},{
					    "name": "Edmonton Municipal ",
					"code": "YXD",
					"kw": "",
					"city": "Edmonton"
					},{
					    "name": "Edmonton International ",
					"code": "YEG",
					"kw": "",
					"city": "Edmonton"
					},{
					    "name": "Edward River",
					"code": "EDR",
					"kw": "",
					"city": "Edward River"
					},{
					    "name": "Edwards Air Force Base",
					"code": "EDW",
					"kw": "",
					"city": "Edwards Air Force Base"
					},{
					    "name": "Efogi",
					"code": "EFG",
					"kw": "",
					"city": "Efogi"
					},{
					    "name": "Egilsstadir",
					"code": "EGS",
					"kw": "",
					"city": "Egilsstadir"
					},{
					    "name": "Eia",
					"code": "EIA",
					"kw": "",
					"city": "Eia"
					},{
					    "name": "Ein Yahav",
					"code": "EIY",
					"kw": "",
					"city": "Ein Yahav"
					},{
					    "name": "Eindhoven Airport",
					"code": "EIN",
					"kw": "",
					"city": "Eindhoven"
					},{
					    "name": "Ekereku",
					"code": "EKE",
					"kw": "",
					"city": "Ekereku"
					},{
					    "name": "El Bagre",
					"code": "EBG",
					"kw": "",
					"city": "El Bagre"
					},{
					    "name": "El Banco",
					"code": "ELB",
					"kw": "",
					"city": "El Banco"
					},{
					    "name": "El Bolson",
					"code": "EHL",
					"kw": "",
					"city": "El Bolson"
					},{
					    "name": "El Dorado",
					"code": "ELD",
					"kw": "",
					"city": "El Dorado"
					},{
					    "name": "El Fasher",
					"code": "ELF",
					"kw": "",
					"city": "El Fasher"
					},{
					    "name": "El Golea",
					"code": "ELG",
					"kw": "",
					"city": "El Golea"
					},{
					    "name": "El Maiten",
					"code": "EMX",
					"kw": "",
					"city": "El Maiten"
					},{
					    "name": "El Minya",
					"code": "EMY",
					"kw": "",
					"city": "El Minya"
					},{
					    "name": "El Obeid",
					"code": "EBD",
					"kw": "",
					"city": "El Obeid"
					},{
					    "name": "El Oued",
					"code": "ELU",
					"kw": "",
					"city": "El Oued"
					},{
					    "name": "El Porvenir",
					"code": "PVE",
					"kw": "",
					"city": "El Porvenir"
					},{
					    "name": "El Recreo",
					"code": "ELJ",
					"kw": "",
					"city": "El Recreo"
					},{
					    "name": "El Salvador",
					"code": "ESR",
					"kw": "",
					"city": "El Salvador"
					},{
					    "name": "Elat",
					"code": "ETH",
					"kw": "",
					"city": "Elat"
					},{
					    "name": "Elazig",
					"code": "EZS",
					"kw": "",
					"city": "Elazig"
					},{
					    "name": "Elba Island",
					"code": "EBA",
					"kw": "",
					"city": "Elba Island"
					},{
					    "name": "Elcho Island",
					"code": "ELC",
					"kw": "",
					"city": "Elcho Island"
					},{
					    "name": "Eldebba",
					"code": "EDB",
					"kw": "",
					"city": "Eldebba"
					},{
					    "name": "Eldoret",
					"code": "EDL",
					"kw": "",
					"city": "Eldoret"
					},{
					    "name": "Elkedra",
					"code": "EKD",
					"kw": "",
					"city": "Elkedra"
					},{
					    "name": "Elkhart",
					"code": "EKI",
					"kw": "",
					"city": "Elkhart"
					},{
					    "name": "Elliot Lake",
					"code": "YEL",
					"kw": "",
					"city": "Elliot Lake"
					},{
					    "name": "Ellisras",
					"code": "ELL",
					"kw": "",
					"city": "Ellisras"
					},{
					    "name": "Elorza",
					"code": "EOZ",
					"kw": "",
					"city": "Elorza"
					},{
					    "name": "Emae",
					"code": "EAE",
					"kw": "",
					"city": "Emae"
					},{
					    "name": "Embessa",
					"code": "EMS",
					"kw": "",
					"city": "Embessa"
					},{
					    "name": "Emden",
					"code": "EME",
					"kw": "",
					"city": "Emden"
					},{
					    "name": "Emirau",
					"code": "EMI",
					"kw": "",
					"city": "Emirau"
					},{
					    "name": "Enarotali",
					"code": "EWI",
					"kw": "",
					"city": "Enarotali"
					},{
					    "name": "Enewetak Island",
					"code": "ENT",
					"kw": "",
					"city": "Enewetak Island"
					},{
					    "name": "Enontekio",
					"code": "ENF",
					"kw": "",
					"city": "Enontekio"
					},{
					    "name": "Enschede",
					"code": "ENS",
					"kw": "",
					"city": "Enschede"
					},{
					    "name": "Entebbe/Kampala",
					"code": "EBB",
					"kw": "",
					"city": "Entebbe/Kampala"
					},{
					    "name": "Enterprise",
					"code": "ETS",
					"kw": "",
					"city": "Enterprise"
					},{
					    "name": "Enugu",
					"code": "ENU",
					"kw": "",
					"city": "Enugu"
					},{
					    "name": "Epena",
					"code": "EPN",
					"kw": "",
					"city": "Epena"
					},{
					    "name": "Epinal",
					"code": "EPL",
					"kw": "",
					"city": "Epinal"
					},{
					    "name": "Erave",
					"code": "ERE",
					"kw": "",
					"city": "Erave"
					},{
					    "name": "Ercan",
					"code": "ECN",
					"kw": "",
					"city": "Ercan"
					},{
					    "name": "Erechim",
					"code": "ERM",
					"kw": "",
					"city": "Erechim"
					},{
					    "name": "Erfurt",
					"code": "ERF",
					"kw": "",
					"city": "Erfurt"
					},{
					    "name": "Erigavo",
					"code": "ERA",
					"kw": "",
					"city": "Erigavo"
					},{
					    "name": "Ernabella",
					"code": "ERB",
					"kw": "",
					"city": "Ernabella"
					},{
					    "name": "Errachidia",
					"code": "ERH",
					"kw": "",
					"city": "Errachidia"
					},{
					    "name": "Erume",
					"code": "ERU",
					"kw": "",
					"city": "Erume"
					},{
					    "name": "Erzurum",
					"code": "ERZ",
					"kw": "",
					"city": "Erzurum"
					},{
					    "name": "Esa'Ala",
					"code": "ESA",
					"kw": "",
					"city": "Esa'Ala"
					},{
					    "name": "Esbjerg Airport",
					"code": "EBJ",
					"kw": "",
					"city": "Esbjerg"
					},{
					    "name": "Eskilstuna",
					"code": "EKT",
					"kw": "",
					"city": "Eskilstuna"
					},{
					    "name": "Esmeraldas",
					"code": "ESM",
					"kw": "",
					"city": "Esmeraldas"
					},{
					    "name": "Espinosa",
					"code": "ESI",
					"kw": "",
					"city": "Espinosa"
					},{
					    "name": "Esquel",
					"code": "EQS",
					"kw": "",
					"city": "Esquel"
					},{
					    "name": "Eua",
					"code": "EUA",
					"kw": "",
					"city": "Eua"
					},{
					    "name": "Evansville",
					"code": "EVV",
					"kw": "",
					"city": "Evansville"
					},{
					    "name": "Eveleth",
					"code": "EVM",
					"kw": "",
					"city": "Eveleth"
					},{
					    "name": "Ewo",
					"code": "EWO",
					"kw": "",
					"city": "Ewo"
					},{
					    "name": "Excursion Inlet",
					"code": "EXI",
					"kw": "",
					"city": "Excursion Inlet"
					},{
					    "name": "Exeter",
					"code": "EXT",
					"kw": "",
					"city": "Exeter"
					},{
					    "name": "Fada N'Gourma",
					"code": "FNG",
					"kw": "",
					"city": "Fada N'Gourma"
					},{
					    "name": "Fagernes",
					"code": "VDB",
					"kw": "",
					"city": "Fagernes"
					},{
					    "name": "Fagurholsmyri",
					"code": "FAG",
					"kw": "",
					"city": "Fagurholsmyri"
					},{
					    "name": "Fair Isle",
					"code": "FIE",
					"kw": "",
					"city": "Fair Isle"
					},{
					    "name": "Fairbanks International ",
					"code": "FAI",
					"kw": "",
					"city": "Fairbanks"
					},{
					    "name": "Fairmont",
					"code": "FRM",
					"kw": "",
					"city": "Fairmont"
					},{
					    "name": "Faisalabad",
					"code": "LYP",
					"kw": "",
					"city": "Faisalabad"
					},{
					    "name": "Faizabad",
					"code": "FBD",
					"kw": "",
					"city": "Faizabad"
					},{
					    "name": "Fajardo",
					"code": "FAJ",
					"kw": "",
					"city": "Fajardo"
					},{
					    "name": "Fak Fak",
					"code": "FKQ",
					"kw": "",
					"city": "Fak Fak"
					},{
					    "name": "Fakahina",
					"code": "FHZ",
					"kw": "",
					"city": "Fakahina"
					},{
					    "name": "Fakarava",
					"code": "FAV",
					"kw": "",
					"city": "Fakarava"
					},{
					    "name": "Falmouth",
					"code": "FMH",
					"kw": "",
					"city": "Falmouth"
					},{
					    "name": "Fane",
					"code": "FNE",
					"kw": "",
					"city": "Fane"
					},{
					    "name": "Fangatau",
					"code": "FGU",
					"kw": "",
					"city": "Fangatau"
					},{
					    "name": "Farafangana",
					"code": "RVA",
					"kw": "",
					"city": "Farafangana"
					},{
					    "name": "Farah",
					"code": "FAH",
					"kw": "",
					"city": "Farah"
					},{
					    "name": "Faranah",
					"code": "FAA",
					"kw": "",
					"city": "Faranah"
					},{
					    "name": "Farewell",
					"code": "FWL",
					"kw": "",
					"city": "Farewell"
					},{
					    "name": "Fargo",
					"code": "FAR",
					"kw": "",
					"city": "Fargo"
					},{
					    "name": "Farmingdale",
					"code": "FRG",
					"kw": "",
					"city": "Farmingdale"
					},{
					    "name": "Farmington",
					"code": "FMN",
					"kw": "",
					"city": "Farmington"
					},{
					    "name": "Faro",
					"code": "ZFA",
					"kw": "",
					"city": "Faro"
					},{
					    "name": "Faro",
					"code": "FAO",
					"kw": "",
					"city": "Faro"
					},{
					    "name": "Faroe Islands",
					"code": "FAE",
					"kw": "",
					"city": "Faroe Islands"
					},{
					    "name": "Farsund",
					"code": "FAN",
					"kw": "",
					"city": "Farsund"
					},{
					    "name": "Faskrudsfjordur",
					"code": "FAS",
					"kw": "",
					"city": "Faskrudsfjordur"
					},{
					    "name": "Faya",
					"code": "FYT",
					"kw": "",
					"city": "Faya"
					},{
					    "name": "Fayetteville Municipal Airport",
					"code": "FYV",
					"kw": "",
					"city": "Fayetteville"
					},{
					    "name": "Fayetteville Municipal ",
					"code": "FAY",
					"kw": "",
					"city": "Fayetteville"
					},{
					    "name": "Fayetteville Northwest Arkansas Reg ",
					"code": "XNA",
					"kw": "",
					"city": "Fayetteville"
					},{
					    "name": "Fera Island",
					"code": "FRE",
					"kw": "",
					"city": "Fera Island"
					},{
					    "name": "Fergana",
					"code": "FEG",
					"kw": "",
					"city": "Fergana"
					},{
					    "name": "Fernando De Noronha",
					"code": "FEN",
					"kw": "",
					"city": "Fernando De Noronha"
					},{
					    "name": "Fez",
					"code": "FEZ",
					"kw": "",
					"city": "Fez"
					},{
					    "name": "Fianarantsoa",
					"code": "WFI",
					"kw": "",
					"city": "Fianarantsoa"
					},{
					    "name": "Ficksburg",
					"code": "FCB",
					"kw": "",
					"city": "Ficksburg"
					},{
					    "name": "Figari",
					"code": "FSC",
					"kw": "",
					"city": "Figari"
					},{
					    "name": "Fillmore",
					"code": "FIL",
					"kw": "",
					"city": "Fillmore"
					},{
					    "name": "Finschhafen",
					"code": "FIN",
					"kw": "",
					"city": "Finschhafen"
					},{
					    "name": "Flagstaff",
					"code": "FLG",
					"kw": "",
					"city": "Flagstaff"
					},{
					    "name": "Flateyri",
					"code": "FLI",
					"kw": "",
					"city": "Flateyri"
					},{
					    "name": "Flensburg",
					"code": "FLF",
					"kw": "",
					"city": "Flensburg"
					},{
					    "name": "Flin Flon",
					"code": "YFO",
					"kw": "",
					"city": "Flin Flon"
					},{
					    "name": "Flint",
					"code": "FNT",
					"kw": "",
					"city": "Flint"
					},{
					    "name": "Florence",
					"code": "FLO",
					"kw": "",
					"city": "Florence"
					},{
					    "name": "Florencia",
					"code": "FLA",
					"kw": "",
					"city": "Florencia"
					},{
					    "name": "Flores",
					"code": "FRS",
					"kw": "",
					"city": "Flores"
					},{
					    "name": "Flores Island",
					"code": "FLW",
					"kw": "",
					"city": "Flores Island"
					},{
					    "name": "Florianopolis",
					"code": "FLN",
					"kw": "",
					"city": "Florianopolis"
					},{
					    "name": "Floro",
					"code": "FRO",
					"kw": "",
					"city": "Floro"
					},{
					    "name": "Foggia",
					"code": "FOG",
					"kw": "",
					"city": "Foggia"
					},{
					    "name": "Fond du Lac",
					"code": "ZFD",
					"kw": "",
					"city": "Fond du Lac"
					},{
					    "name": "Forde",
					"code": "FDE",
					"kw": "",
					"city": "Forde"
					},{
					    "name": "Forli",
					"code": "FRL",
					"kw": "",
					"city": "Forli"
					},{
					    "name": "Formosa",
					"code": "FMA",
					"kw": "",
					"city": "Formosa"
					},{
					    "name": "Fort Chipewyan",
					"code": "YPY",
					"kw": "",
					"city": "Fort Chipewyan"
					},{
					    "name": "Fort Collins/Loveland Municipal ",
					"code": "FNL",
					"kw": "",
					"city": "Fort Collins/Loveland"
					},{
					    "name": "Loveland Bus Station",
					"code": "QWH",
					"kw": "",
					"city": "Fort Collins/Loveland"
					},{
					    "name": "Fort Dauphin",
					"code": "FTU",
					"kw": "",
					"city": "Fort Dauphin"
					},{
					    "name": "Fort Good Hope",
					"code": "YGH",
					"kw": "",
					"city": "Fort Good Hope"
					},{
					    "name": "Fort Leonard Wood",
					"code": "TBN",
					"kw": "",
					"city": "Fort Leonard Wood"
					},{
					    "name": "Fort Madison",
					"code": "FMS",
					"kw": "",
					"city": "Fort Madison"
					},{
					    "name": "Fort McMurray",
					"code": "YMM",
					"kw": "",
					"city": "Fort McMurray"
					},{
					    "name": "Fort McPherson",
					"code": "ZFM",
					"kw": "",
					"city": "Fort McPherson"
					},{
					    "name": "Fort Polk",
					"code": "POE",
					"kw": "",
					"city": "Fort Polk"
					},{
					    "name": "Fort de France",
					"code": "FDF",
					"kw": "",
					"city": "Fort de France"
					},{
					    "name": "Fougamou",
					"code": "FOU",
					"kw": "",
					"city": "Fougamou"
					},{
					    "name": "Foumban",
					"code": "FOM",
					"kw": "",
					"city": "Foumban"
					},{
					    "name": "Fox Harbour",
					"code": "YFX",
					"kw": "",
					"city": "Fox Harbour"
					},{
					    "name": "Franceville",
					"code": "MVB",
					"kw": "",
					"city": "Franceville"
					},{
					    "name": "Francisco Beltrao",
					"code": "FBE",
					"kw": "",
					"city": "Francisco Beltrao"
					},{
					    "name": "Francistown",
					"code": "FRW",
					"kw": "",
					"city": "Francistown"
					},{
					    "name": "Frankfort",
					"code": "FFT",
					"kw": "",
					"city": "Frankfort"
					},{
					    "name": "Frankfurt International ",
					"code": "FRA",
					"kw": "",
					"city": "Frankfurt"
					},{
					    "name": "Franklin Chess Lamberton ",
					"code": "FKL",
					"kw": "",
					"city": "Franklin"
					},{
					    "name": "Freeport",
					"code": "FPO",
					"kw": "",
					"city": "Freeport"
					},{
					    "name": "Freetown Lungi International ",
					"code": "FNA",
					"kw": "",
					"city": "Freetown"
					},{
					    "name": "Fregate Island",
					"code": "FRK",
					"kw": "",
					"city": "Fregate Island"
					},{
					    "name": "Frejus",
					"code": "FRJ",
					"kw": "",
					"city": "Frejus"
					},{
					    "name": "French Lick",
					"code": "FRH",
					"kw": "",
					"city": "French Lick"
					},{
					    "name": "Fresno Air Terminal",
					"code": "FAT",
					"kw": "",
					"city": "Fresno"
					},{
					    "name": "Friedrichshafen",
					"code": "FDH",
					"kw": "",
					"city": "Friedrichshafen"
					},{
					    "name": "Fuerteventura",
					"code": "FUE",
					"kw": "",
					"city": "Fuerteventura"
					},{
					    "name": "Fukue",
					"code": "FUJ",
					"kw": "",
					"city": "Fukue"
					},{
					    "name": "Fukui",
					"code": "FKJ",
					"kw": "",
					"city": "Fukui"
					},{
					    "name": "Fukuoka",
					"code": "FUK",
					"kw": "",
					"city": "Fukuoka"
					},{
					    "name": "Fulleborn",
					"code": "FUB",
					"kw": "",
					"city": "Fulleborn"
					},{
					    "name": "Fullerton",
					"code": "FUL",
					"kw": "",
					"city": "Fullerton"
					},{
					    "name": "Funafuti Atol",
					"code": "FUN",
					"kw": "",
					"city": "Funafuti Atol"
					},{
					    "name": "Funchal",
					"code": "FNC",
					"kw": "",
					"city": "Funchal"
					},{
					    "name": "Futuna",
					"code": "FUT",
					"kw": "",
					"city": "Futuna"
					},{
					    "name": "Futuna Island",
					"code": "FTA",
					"kw": "",
					"city": "Futuna Island"
					},{
					    "name": "Gabes",
					"code": "GAE",
					"kw": "",
					"city": "Gabes"
					},{
					    "name": "Gaborone",
					"code": "GBE",
					"kw": "",
					"city": "Gaborone"
					},{
					    "name": "Gadsden",
					"code": "GAD",
					"kw": "",
					"city": "Gadsden"
					},{
					    "name": "Gafsa",
					"code": "GAF",
					"kw": "",
					"city": "Gafsa"
					},{
					    "name": "Gagnoa",
					"code": "GGN",
					"kw": "",
					"city": "Gagnoa"
					},{
					    "name": "Gainesville",
					"code": "GNV",
					"kw": "",
					"city": "Gainesville"
					},{
					    "name": "Galapagos Islands",
					"code": "GPS",
					"kw": "",
					"city": "Galapagos Islands"
					},{
					    "name": "Galcaio",
					"code": "GLK",
					"kw": "",
					"city": "Galcaio"
					},{
					    "name": "Galela",
					"code": "GLX",
					"kw": "",
					"city": "Galela"
					},{
					    "name": "Galesburg",
					"code": "GBG",
					"kw": "",
					"city": "Galesburg"
					},{
					    "name": "Gallivare",
					"code": "GEV",
					"kw": "",
					"city": "Gallivare"
					},{
					    "name": "Galway",
					"code": "GWY",
					"kw": "",
					"city": "Galway"
					},{
					    "name": "Gamba",
					"code": "GAX",
					"kw": "",
					"city": "Gamba"
					},{
					    "name": "Gambela",
					"code": "GMB",
					"kw": "",
					"city": "Gambela"
					},{
					    "name": "Gambier Island",
					"code": "GMR",
					"kw": "",
					"city": "Gambier Island"
					},{
					    "name": "Gamboma",
					"code": "GMM",
					"kw": "",
					"city": "Gamboma"
					},{
					    "name": "Gander",
					"code": "YQX",
					"kw": "",
					"city": "Gander"
					},{
					    "name": "Gangaw",
					"code": "GAW",
					"kw": "",
					"city": "Gangaw"
					},{
					    "name": "Gao",
					"code": "GAQ",
					"kw": "",
					"city": "Gao"
					},{
					    "name": "Gaoua",
					"code": "XGA",
					"kw": "",
					"city": "Gaoua"
					},{
					    "name": "Gap",
					"code": "GAT",
					"kw": "",
					"city": "Gap"
					},{
					    "name": "Garaina",
					"code": "GAR",
					"kw": "",
					"city": "Garaina"
					},{
					    "name": "Garbaharey",
					"code": "GBM",
					"kw": "",
					"city": "Garbaharey"
					},{
					    "name": "Garden Point",
					"code": "GPN",
					"kw": "",
					"city": "Garden Point"
					},{
					    "name": "Gardez",
					"code": "GRG",
					"kw": "",
					"city": "Gardez"
					},{
					    "name": "Gardo",
					"code": "GSR",
					"kw": "",
					"city": "Gardo"
					},{
					    "name": "Garissa",
					"code": "GAS",
					"kw": "",
					"city": "Garissa"
					},{
					    "name": "Garoe",
					"code": "GGR",
					"kw": "",
					"city": "Garoe"
					},{
					    "name": "Garoua",
					"code": "GOU",
					"kw": "",
					"city": "Garoua"
					},{
					    "name": "Gasmata",
					"code": "GMI",
					"kw": "",
					"city": "Gasmata"
					},{
					    "name": "Gassim",
					"code": "ELQ",
					"kw": "",
					"city": "Gassim"
					},{
					    "name": "Gaya",
					"code": "GAY",
					"kw": "",
					"city": "Gaya"
					},{
					    "name": "Gaziantep",
					"code": "GZT",
					"kw": "",
					"city": "Gaziantep"
					},{
					    "name": "Gbadolite",
					"code": "BDT",
					"kw": "",
					"city": "Gbadolite"
					},{
					    "name": "Gbangbatok",
					"code": "GBK",
					"kw": "",
					"city": "Gbangbatok"
					},{
					    "name": "Gdansk",
					"code": "GDN",
					"kw": "",
					"city": "Gdansk"
					},{
					    "name": "Gebe",
					"code": "GEB",
					"kw": "",
					"city": "Gebe"
					},{
					    "name": "Geelong",
					"code": "GEX",
					"kw": "",
					"city": "Geelong"
					},{
					    "name": "Geladi",
					"code": "GLC",
					"kw": "",
					"city": "Geladi"
					},{
					    "name": "Gemena",
					"code": "GMA",
					"kw": "",
					"city": "Gemena"
					},{
					    "name": "Genda Wuha",
					"code": "ETE",
					"kw": "",
					"city": "Genda Wuha"
					},{
					    "name": "General Santos",
					"code": "GES",
					"kw": "",
					"city": "General Santos"
					},{
					    "name": "General Villegas",
					"code": "VGS",
					"kw": "",
					"city": "General Villegas"
					},{
					    "name": "Geneva",
					"code": "GVA",
					"kw": "",
					"city": "Geneva"
					},{
					    "name": "Genoa",
					"code": "GOA",
					"kw": "",
					"city": "Genoa"
					},{
					    "name": "Genting",
					"code": "GTB",
					"kw": "",
					"city": "Genting"
					},{
					    "name": "George",
					"code": "GRJ",
					"kw": "",
					"city": "George"
					},{
					    "name": "George Town",
					"code": "GGT",
					"kw": "",
					"city": "George Town"
					},{
					    "name": "Gerona",
					"code": "GRO",
					"kw": "",
					"city": "Gerona"
					},{
					    "name": "Gewoya",
					"code": "GEW",
					"kw": "",
					"city": "Gewoya"
					},{
					    "name": "Ghadames",
					"code": "LTD",
					"kw": "",
					"city": "Ghadames"
					},{
					    "name": "Ghanzi",
					"code": "GNZ",
					"kw": "",
					"city": "Ghanzi"
					},{
					    "name": "Ghardaia",
					"code": "GHA",
					"kw": "",
					"city": "Ghardaia"
					},{
					    "name": "Ghat",
					"code": "GHT",
					"kw": "",
					"city": "Ghat"
					},{
					    "name": "Gilgit",
					"code": "GIL",
					"kw": "",
					"city": "Gilgit"
					},{
					    "name": "Gillam",
					"code": "YGX",
					"kw": "",
					"city": "Gillam"
					},{
					    "name": "Gisborne",
					"code": "GIS",
					"kw": "",
					"city": "Gisborne"
					},{
					    "name": "Gisenyi",
					"code": "GYI",
					"kw": "",
					"city": "Gisenyi"
					},{
					    "name": "Gitega",
					"code": "GID",
					"kw": "",
					"city": "Gitega"
					},{
					    "name": "Gizan",
					"code": "GIZ",
					"kw": "",
					"city": "Gizan"
					},{
					    "name": "Gizo",
					"code": "GZO",
					"kw": "",
					"city": "Gizo"
					},{
					    "name": "Glasgow Central Rail Station",
					"code": "ZGG",
					"kw": "",
					"city": "Glasgow"
					},{
					    "name": "Glasgow International Airport",
					"code": "GLA",
					"kw": "",
					"city": "Glasgow"
					},{
					    "name": "Glasgow",
					"code": "GGW",
					"kw": "",
					"city": "Glasgow"
					},{
					    "name": "Glasgow Prestwick ",
					"code": "PIK",
					"kw": "",
					"city": "Glasgow"
					},{
					    "name": "Glen Innes",
					"code": "GLI",
					"kw": "",
					"city": "Glen Innes"
					},{
					    "name": "Gloucester",
					"code": "GLO",
					"kw": "",
					"city": "Gloucester"
					},{
					    "name": "Goa",
					"code": "GOI",
					"kw": "",
					"city": "Goa"
					},{
					    "name": "Gobernador Gregores",
					"code": "GGS",
					"kw": "",
					"city": "Gobernador Gregores"
					},{
					    "name": "Gode",
					"code": "GDE",
					"kw": "",
					"city": "Gode"
					},{
					    "name": "Gods Narrows",
					"code": "YGO",
					"kw": "",
					"city": "Gods Narrows"
					},{
					    "name": "Gods River",
					"code": "ZGI",
					"kw": "",
					"city": "Gods River"
					},{
					    "name": "Golfito",
					"code": "GLF",
					"kw": "",
					"city": "Golfito"
					},{
					    "name": "Goma",
					"code": "GOM",
					"kw": "",
					"city": "Goma"
					},{
					    "name": "Gomel",
					"code": "GME",
					"kw": "",
					"city": "Gomel"
					},{
					    "name": "Gonalia",
					"code": "GOE",
					"kw": "",
					"city": "Gonalia"
					},{
					    "name": "Gondar",
					"code": "GDQ",
					"kw": "",
					"city": "Gondar"
					},{
					    "name": "Goose Bay",
					"code": "YYR",
					"kw": "",
					"city": "Goose Bay"
					},{
					    "name": "Gora",
					"code": "GOC",
					"kw": "",
					"city": "Gora"
					},{
					    "name": "Gorakhpur",
					"code": "GOP",
					"kw": "",
					"city": "Gorakhpur"
					},{
					    "name": "Gore",
					"code": "GOR",
					"kw": "",
					"city": "Gore"
					},{
					    "name": "Gorkha",
					"code": "GKH",
					"kw": "",
					"city": "Gorkha"
					},{
					    "name": "Gorna Orjahovica",
					"code": "GOZ",
					"kw": "",
					"city": "Gorna Orjahovica"
					},{
					    "name": "Goroka",
					"code": "GKA",
					"kw": "",
					"city": "Goroka"
					},{
					    "name": "Gorom-Gorom",
					"code": "XGG",
					"kw": "",
					"city": "Gorom-Gorom"
					},{
					    "name": "Gorontalo",
					"code": "GTO",
					"kw": "",
					"city": "Gorontalo"
					},{
					    "name": "Gosford",
					"code": "GOS",
					"kw": "",
					"city": "Gosford"
					},{
					    "name": "Gothenburg Landvetter ",
					"code": "GOT",
					"kw": "",
					"city": "Gothenburg"
					},{
					    "name": "Goulburn Island",
					"code": "GBL",
					"kw": "",
					"city": "Goulburn Island"
					},{
					    "name": "Goulimime",
					"code": "GLN",
					"kw": "",
					"city": "Goulimime"
					},{
					    "name": "Goundam",
					"code": "GUD",
					"kw": "",
					"city": "Goundam"
					},{
					    "name": "Gove",
					"code": "GOV",
					"kw": "",
					"city": "Gove"
					},{
					    "name": "Governors Harbour",
					"code": "GHB",
					"kw": "",
					"city": "Governors Harbour"
					},{
					    "name": "Goya",
					"code": "OYA",
					"kw": "",
					"city": "Goya"
					},{
					    "name": "Graciosa Island",
					"code": "GRW",
					"kw": "",
					"city": "Graciosa Island"
					},{
					    "name": "Granada",
					"code": "GRX",
					"kw": "",
					"city": "Granada"
					},{
					    "name": "Grand Canyon H/P",
					"code": "JGC",
					"kw": "",
					"city": "Grand Canyon"
					},{
					    "name": "Grand Canyon National Park ",
					"code": "GCN",
					"kw": "",
					"city": "Grand Canyon"
					},{
					    "name": "Grand Cayman Island",
					"code": "GCM",
					"kw": "",
					"city": "Grand Cayman Island"
					},{
					    "name": "Grand Cess",
					"code": "GRC",
					"kw": "",
					"city": "Grand Cess"
					},{
					    "name": "Grand Island",
					"code": "GRI",
					"kw": "",
					"city": "Grand Island"
					},{
					    "name": "Grand Junction",
					"code": "GJT",
					"kw": "",
					"city": "Grand Junction"
					},{
					    "name": "Grand Rapids",
					"code": "GPZ",
					"kw": "",
					"city": "Grand Rapids"
					},{
					    "name": "Grand Turk",
					"code": "GDT",
					"kw": "",
					"city": "Grand Turk"
					},{
					    "name": "Grande Prairie",
					"code": "YQU",
					"kw": "",
					"city": "Grande Prairie"
					},{
					    "name": "Granville Lake",
					"code": "XGL",
					"kw": "",
					"city": "Granville Lake"
					},{
					    "name": "Graz",
					"code": "GRZ",
					"kw": "",
					"city": "Graz"
					},{
					    "name": "Great Falls International ",
					"code": "GTF",
					"kw": "",
					"city": "Great Falls"
					},{
					    "name": "Great Harbour Cay",
					"code": "GHC",
					"kw": "",
					"city": "Great Harbour Cay"
					},{
					    "name": "Greeley",
					"code": "GXY",
					"kw": "",
					"city": "Greeley"
					},{
					    "name": "Green Island",
					"code": "GNI",
					"kw": "",
					"city": "Green Island"
					},{
					    "name": "Green River",
					"code": "GVI",
					"kw": "",
					"city": "Green River"
					},{
					    "name": "Greensboro/High Point",
					"code": "GSO",
					"kw": "",
					"city": "Greensboro/High Point"
					},{
					    "name": "Greenville/Spartanburg ",
					"code": "GSP",
					"kw": "",
					"city": "Greenville"
					},{
					    "name": "Greenville",
					"code": "GVT",
					"kw": "",
					"city": "Greenville"
					},{
					    "name": "Greenville",
					"code": "GLH",
					"kw": "",
					"city": "Greenville"
					},{
					    "name": "Greenville",
					"code": "PGV",
					"kw": "",
					"city": "Greenville"
					},{
					    "name": "Greenwood",
					"code": "GWO",
					"kw": "",
					"city": "Greenwood"
					},{
					    "name": "Grenada",
					"code": "GND",
					"kw": "",
					"city": "Grenada"
					},{
					    "name": "Grenoble",
					"code": "GNB",
					"kw": "",
					"city": "Grenoble"
					},{
					    "name": "Greymouth",
					"code": "GMN",
					"kw": "",
					"city": "Greymouth"
					},{
					    "name": "Grimsey",
					"code": "GRY",
					"kw": "",
					"city": "Grimsey"
					},{
					    "name": "Grise Fiord",
					"code": "YGZ",
					"kw": "",
					"city": "Grise Fiord"
					},{
					    "name": "Groennedal",
					"code": "JGR",
					"kw": "",
					"city": "Groennedal"
					},{
					    "name": "Groningen",
					"code": "GRQ",
					"kw": "",
					"city": "Groningen"
					},{
					    "name": "Groote Eylandt",
					"code": "GTE",
					"kw": "",
					"city": "Groote Eylandt"
					},{
					    "name": "Grootfontein",
					"code": "GFY",
					"kw": "",
					"city": "Grootfontein"
					},{
					    "name": "Grosseto",
					"code": "GRS",
					"kw": "",
					"city": "Grosseto"
					},{
					    "name": "Guacamaya",
					"code": "GCA",
					"kw": "",
					"city": "Guacamaya"
					},{
					    "name": "Guadalajara",
					"code": "GDL",
					"kw": "",
					"city": "Guadalajara"
					},{
					    "name": "Guajara-Mirim",
					"code": "GJM",
					"kw": "",
					"city": "Guajara-Mirim"
					},{
					    "name": "Gualeguaychu",
					"code": "GHU",
					"kw": "",
					"city": "Gualeguaychu"
					},{
					    "name": "Guam Antonio B Won Pat International",
					"code": "GUM",
					"kw": "",
					"city": "Guam"
					},{
					    "name": "Guamal",
					"code": "GAA",
					"kw": "",
					"city": "Guamal"
					},{
					    "name": "Guanaja",
					"code": "GJA",
					"kw": "",
					"city": "Guanaja"
					},{
					    "name": "Guanambi",
					"code": "GNM",
					"kw": "",
					"city": "Guanambi"
					},{
					    "name": "Guanare",
					"code": "GUQ",
					"kw": "",
					"city": "Guanare"
					},{
					    "name": "Guantanamo Los Canos ",
					"code": "GAO",
					"kw": "",
					"city": "Guantanamo"
					},{
					    "name": "Guapi",
					"code": "GPI",
					"kw": "",
					"city": "Guapi"
					},{
					    "name": "Guapiles",
					"code": "GPL",
					"kw": "",
					"city": "Guapiles"
					},{
					    "name": "Guarapuava",
					"code": "GPB",
					"kw": "",
					"city": "Guarapuava"
					},{
					    "name": "Guari",
					"code": "GUG",
					"kw": "",
					"city": "Guari"
					},{
					    "name": "Guasdualito",
					"code": "GDO",
					"kw": "",
					"city": "Guasdualito"
					},{
					    "name": "Guasopa",
					"code": "GAZ",
					"kw": "",
					"city": "Guasopa"
					},{
					    "name": "Guayaramerin",
					"code": "GYA",
					"kw": "",
					"city": "Guayaramerin"
					},{
					    "name": "Guaymas",
					"code": "GYM",
					"kw": "",
					"city": "Guaymas"
					},{
					    "name": "Guernsey",
					"code": "GCI",
					"kw": "",
					"city": "Guernsey"
					},{
					    "name": "Guiglo",
					"code": "GGO",
					"kw": "",
					"city": "Guiglo"
					},{
					    "name": "Guiria",
					"code": "GUI",
					"kw": "",
					"city": "Guiria"
					},{
					    "name": "Gulfport/Biloxi",
					"code": "GPT",
					"kw": "",
					"city": "Gulfport/Biloxi"
					},{
					    "name": "Gulu",
					"code": "ULU",
					"kw": "",
					"city": "Gulu"
					},{
					    "name": "Guna",
					"code": "GUX",
					"kw": "",
					"city": "Guna"
					},{
					    "name": "Gunnison",
					"code": "GUC",
					"kw": "",
					"city": "Gunnison"
					},{
					    "name": "Gunungsitoli",
					"code": "GNS",
					"kw": "",
					"city": "Gunungsitoli"
					},{
					    "name": "Gurayat",
					"code": "URY",
					"kw": "",
					"city": "Gurayat"
					},{
					    "name": "Gurupi",
					"code": "GRP",
					"kw": "",
					"city": "Gurupi"
					},{
					    "name": "Guwahati",
					"code": "GAU",
					"kw": "",
					"city": "Guwahati"
					},{
					    "name": "Gwa",
					"code": "GWA",
					"kw": "",
					"city": "Gwa"
					},{
					    "name": "Gwadar",
					"code": "GWD",
					"kw": "",
					"city": "Gwadar"
					},{
					    "name": "Gwalior",
					"code": "GWL",
					"kw": "",
					"city": "Gwalior"
					},{
					    "name": "Gwangju Muan Airport",
					"code": "MWX",
					"kw": "",
					"city": "Gwangju"
					},{
					    "name": "Gweru",
					"code": "GWE",
					"kw": "",
					"city": "Gweru"
					},{
					    "name": "Ha'apai",
					"code": "HPA",
					"kw": "",
					"city": "Ha'apai"
					},{
					    "name": "Hachijo Jima",
					"code": "HAC",
					"kw": "",
					"city": "Hachijo Jima"
					},{
					    "name": "Hafr Albatin",
					"code": "HBT",
					"kw": "",
					"city": "Hafr Albatin"
					},{
					    "name": "Hagerstown",
					"code": "HGR",
					"kw": "",
					"city": "Hagerstown"
					},{
					    "name": "Haifa",
					"code": "HFA",
					"kw": "",
					"city": "Haifa"
					},{
					    "name": "Hail",
					"code": "HAS",
					"kw": "",
					"city": "Hail"
					},{
					    "name": "Hakodate",
					"code": "HKD",
					"kw": "",
					"city": "Hakodate"
					},{
					    "name": "Hall Beach",
					"code": "YUX",
					"kw": "",
					"city": "Hall Beach"
					},{
					    "name": "Halmstad",
					"code": "HAD",
					"kw": "",
					"city": "Halmstad"
					},{
					    "name": "Hamadan",
					"code": "HDM",
					"kw": "",
					"city": "Hamadan"
					},{
					    "name": "Hamar",
					"code": "HMR",
					"kw": "",
					"city": "Hamar"
					},{
					    "name": "Hamburg Fuhlsbuettel Airport",
					"code": "HAM",
					"kw": "",
					"city": "Hamburg"
					},{
					    "name": "Hamilton",
					"code": "HLT",
					"kw": "",
					"city": "Hamilton"
					},{
					    "name": "Hamilton",
					"code": "HLZ",
					"kw": "",
					"city": "Hamilton"
					},{
					    "name": "Hammerfest",
					"code": "HFT",
					"kw": "",
					"city": "Hammerfest"
					},{
					    "name": "Hancock",
					"code": "CMX",
					"kw": "",
					"city": "Hancock"
					},{
					    "name": "Hanoi",
					"code": "HAN",
					"kw": "",
					"city": "Hanoi"
					},{
					    "name": "Hao Island",
					"code": "HOI",
					"kw": "",
					"city": "Hao Island"
					},{
					    "name": "Harare",
					"code": "HRE",
					"kw": "",
					"city": "Harare"
					},{
					    "name": "Hargeisa",
					"code": "HGA",
					"kw": "",
					"city": "Hargeisa"
					},{
					    "name": "Harrisburg Skyport ",
					"code": "HAR",
					"kw": "",
					"city": "Harrisburg"
					},{
					    "name": "Harrisburg International ",
					"code": "MDT",
					"kw": "",
					"city": "Harrisburg"
					},{
					    "name": "Harrismith",
					"code": "HRS",
					"kw": "",
					"city": "Harrismith"
					},{
					    "name": "Harrison",
					"code": "HRO",
					"kw": "",
					"city": "Harrison"
					},{
					    "name": "Harstad-Narvik",
					"code": "EVE",
					"kw": "",
					"city": "Harstad-Narvik"
					},{
					    "name": "Hassi Messaoud",
					"code": "HME",
					"kw": "",
					"city": "Hassi Messaoud"
					},{
					    "name": "Hastings",
					"code": "HSI",
					"kw": "",
					"city": "Hastings"
					},{
					    "name": "Hasvik",
					"code": "HAA",
					"kw": "",
					"city": "Hasvik"
					},{
					    "name": "Hat Yai",
					"code": "HDY",
					"kw": "",
					"city": "Hat Yai"
					},{
					    "name": "Hateruma",
					"code": "HTR",
					"kw": "",
					"city": "Hateruma"
					},{
					    "name": "Hatteras",
					"code": "HNC",
					"kw": "",
					"city": "Hatteras"
					},{
					    "name": "Hatzfeldthaven",
					"code": "HAZ",
					"kw": "",
					"city": "Hatzfeldthaven"
					},{
					    "name": "Haugesund",
					"code": "HAU",
					"kw": "",
					"city": "Haugesund"
					},{
					    "name": "Havana",
					"code": "HAV",
					"kw": "",
					"city": "Havana"
					},{
					    "name": "Haverfordwest",
					"code": "HAW",
					"kw": "",
					"city": "Haverfordwest"
					},{
					    "name": "Havre",
					"code": "HVR",
					"kw": "",
					"city": "Havre"
					},{
					    "name": "Hawabango",
					"code": "HWA",
					"kw": "",
					"city": "Hawabango"
					},{
					    "name": "Hawker",
					"code": "HWK",
					"kw": "",
					"city": "Hawker"
					},{
					    "name": "Hay River",
					"code": "YHY",
					"kw": "",
					"city": "Hay River"
					},{
					    "name": "Hayfields",
					"code": "HYF",
					"kw": "",
					"city": "Hayfields"
					},{
					    "name": "Hazleton",
					"code": "HZL",
					"kw": "",
					"city": "Hazleton"
					},{
					    "name": "Heho",
					"code": "HEH",
					"kw": "",
					"city": "Heho"
					},{
					    "name": "Heide/Buesum",
					"code": "HEI",
					"kw": "",
					"city": "Heide/Buesum"
					},{
					    "name": "Helena",
					"code": "HLN",
					"kw": "",
					"city": "Helena"
					},{
					    "name": "Helgoland",
					"code": "HGL",
					"kw": "",
					"city": "Helgoland"
					},{
					    "name": "Helsingborg Heliport",
					"code": "JHE",
					"kw": "",
					"city": "Helsingborg"
					},{
					    "name": "Helsingborg Angelholm ",
					"code": "AGH",
					"kw": "",
					"city": "Helsingborg"
					},{
					    "name": "Helsinki",
					"code": "HEL",
					"kw": "",
					"city": "Helsinki"
					},{
					    "name": "Herat",
					"code": "HEA",
					"kw": "",
					"city": "Herat"
					},{
					    "name": "Heringsdorf",
					"code": "HDF",
					"kw": "",
					"city": "Heringsdorf"
					},{
					    "name": "Hermosillo",
					"code": "HMO",
					"kw": "",
					"city": "Hermosillo"
					},{
					    "name": "Hibbing/Chisholm",
					"code": "HIB",
					"kw": "",
					"city": "Hibbing/Chisholm"
					},{
					    "name": "High Level",
					"code": "YOJ",
					"kw": "",
					"city": "High Level"
					},{
					    "name": "Hiroshima International ",
					"code": "HIJ",
					"kw": "",
					"city": "Hiroshima"
					},{
					    "name": "Ho Chi Minh City",
					"code": "SGN",
					"kw": "",
					"city": "Ho Chi Minh City"
					},{
					    "name": "Hobart",
					"code": "HBA",
					"kw": "",
					"city": "Hobart"
					},{
					    "name": "Hodeidah",
					"code": "HOD",
					"kw": "",
					"city": "Hodeidah"
					},{
					    "name": "Hof",
					"code": "HOQ",
					"kw": "",
					"city": "Hof"
					},{
					    "name": "Hofuf",
					"code": "HOF",
					"kw": "",
					"city": "Hofuf"
					},{
					    "name": "Hola",
					"code": "HOA",
					"kw": "",
					"city": "Hola"
					},{
					    "name": "Holguin",
					"code": "HOG",
					"kw": "",
					"city": "Holguin"
					},{
					    "name": "Holman Island",
					"code": "YHI",
					"kw": "",
					"city": "Holman Island"
					},{
					    "name": "Holmavik",
					"code": "HVK",
					"kw": "",
					"city": "Holmavik"
					},{
					    "name": "Homalin",
					"code": "HOX",
					"kw": "",
					"city": "Homalin"
					},{
					    "name": "Hong Kong International ",
					"code": "HKG",
					"kw": "",
					"city": "Hong Kong"
					},{
					    "name": "Honiara",
					"code": "HIR",
					"kw": "",
					"city": "Honiara"
					},{
					    "name": "Honningsvag",
					"code": "HVG",
					"kw": "",
					"city": "Honningsvag"
					},{
					    "name": "Hooker Creek",
					"code": "HOK",
					"kw": "",
					"city": "Hooker Creek"
					},{
					    "name": "Hopetoun",
					"code": "HTU",
					"kw": "",
					"city": "Hopetoun"
					},{
					    "name": "Hornafjordur",
					"code": "HFN",
					"kw": "",
					"city": "Hornafjordur"
					},{
					    "name": "Horta",
					"code": "HOR",
					"kw": "",
					"city": "Horta"
					},{
					    "name": "Hoskins",
					"code": "HKN",
					"kw": "",
					"city": "Hoskins"
					},{
					    "name": "Houeisay",
					"code": "HOE",
					"kw": "",
					"city": "Houeisay"
					},{
					    "name": "Houn",
					"code": "HUQ",
					"kw": "",
					"city": "Houn"
					},{
					    "name": "Hoy",
					"code": "HOY",
					"kw": "",
					"city": "Hoy"
					},{
					    "name": "Hua Hin",
					"code": "HHQ",
					"kw": "",
					"city": "Hua Hin"
					},{
					    "name": "Huahine",
					"code": "HUH",
					"kw": "",
					"city": "Huahine"
					},{
					    "name": "Hualien",
					"code": "HUN",
					"kw": "",
					"city": "Hualien"
					},{
					    "name": "Hubli",
					"code": "HBX",
					"kw": "",
					"city": "Hubli"
					},{
					    "name": "Hudiksvall",
					"code": "HUV",
					"kw": "",
					"city": "Hudiksvall"
					},{
					    "name": "Hultsfred",
					"code": "HLF",
					"kw": "",
					"city": "Hultsfred"
					},{
					    "name": "Humberside",
					"code": "HUY",
					"kw": "",
					"city": "Humberside"
					},{
					    "name": "Humera",
					"code": "HUE",
					"kw": "",
					"city": "Humera"
					},{
					    "name": "Huntington",
					"code": "HTS",
					"kw": "",
					"city": "Huntington"
					},{
					    "name": "Huntsville Madison County ",
					"code": "HSV",
					"kw": "",
					"city": "Huntsville"
					},{
					    "name": "Hurghada",
					"code": "HRG",
					"kw": "",
					"city": "Hurghada"
					},{
					    "name": "Husavik",
					"code": "HZK",
					"kw": "",
					"city": "Husavik"
					},{
					    "name": "Hvammstangi",
					"code": "HVM",
					"kw": "",
					"city": "Hvammstangi"
					},{
					    "name": "Hyannis",
					"code": "HYA",
					"kw": "",
					"city": "Hyannis"
					},{
					    "name": "Hyderabad",
					"code": "HYD",
					"kw": "",
					"city": "Hyderabad"
					},{
					    "name": "Hyderabad",
					"code": "HDD",
					"kw": "",
					"city": "Hyderabad"
					},{
					    "name": "Idaho Falls",
					"code": "IDA",
					"kw": "",
					"city": "Idaho Falls"
					},{
					    "name": "Imperial County ",
					"code": "IPL",
					"kw": "",
					"city": "Imperial"
					},{
					    "name": "International Falls",
					"code": "INL",
					"kw": "",
					"city": "International Falls"
					},{
					    "name": "Ipiales",
					"code": "IPI",
					"kw": "",
					"city": "Ipiales"
					},{
					    "name": "Ipoh",
					"code": "IPH",
					"kw": "",
					"city": "Ipoh"
					},{
					    "name": "Ipota",
					"code": "IPA",
					"kw": "",
					"city": "Ipota"
					},{
					    "name": "Iqaluit",
					"code": "YFB",
					"kw": "",
					"city": "Iqaluit"
					},{
					    "name": "Irkutsk",
					"code": "IKT",
					"kw": "",
					"city": "Irkutsk"
					},{
					    "name": "Isla Mujeres",
					"code": "ISJ",
					"kw": "",
					"city": "Isla Mujeres"
					},{
					    "name": "Islamabad",
					"code": "ISB",
					"kw": "",
					"city": "Islamabad"
					},{
					    "name": "Islay",
					"code": "ILY",
					"kw": "",
					"city": "Islay"
					},{
					    "name": "Isle Of Man",
					"code": "IOM",
					"kw": "",
					"city": "Isle Of Man"
					},{
					    "name": "Izumo",
					"code": "IZO",
					"kw": "",
					"city": "Izumo"
					},{
					    "name": "Jabalpur",
					"code": "JLR",
					"kw": "",
					"city": "Jabalpur"
					},{
					    "name": "Jabiru",
					"code": "JAB",
					"kw": "",
					"city": "Jabiru"
					},{
					    "name": "Jabot",
					"code": "JAT",
					"kw": "",
					"city": "Jabot"
					},{
					    "name": "Jackson Thompson Field",
					"code": "JAN",
					"kw": "",
					"city": "Jackson"
					},{
					    "name": "Jackson",
					"code": "MJQ",
					"kw": "",
					"city": "Jackson"
					},{
					    "name": "Jackson",
					"code": "MKL",
					"kw": "",
					"city": "Jackson"
					},{
					    "name": "Jacksonville",
					"code": "IJX",
					"kw": "",
					"city": "Jacksonville"
					},{
					    "name": "Jacksonville",
					"code": "OAJ",
					"kw": "",
					"city": "Jacksonville"
					},{
					    "name": "Jacquinot Bay",
					"code": "JAQ",
					"kw": "",
					"city": "Jacquinot Bay"
					},{
					    "name": "Jaffna",
					"code": "JAF",
					"kw": "",
					"city": "Jaffna"
					},{
					    "name": "Jagdalpur",
					"code": "JGB",
					"kw": "",
					"city": "Jagdalpur"
					},{
					    "name": "Jaisalmer",
					"code": "JSA",
					"kw": "",
					"city": "Jaisalmer"
					},{
					    "name": "Jakarta Halim Perdana Kusuma ",
					"code": "HLP",
					"kw": "",
					"city": "Jakarta"
					},{
					    "name": "Jakarta Soekarno-Hatta ",
					"code": "CGK",
					"kw": "",
					"city": "Jakarta"
					},{
					    "name": "Jalalabad",
					"code": "JAA",
					"kw": "",
					"city": "Jalalabad"
					},{
					    "name": "Jaluit Island",
					"code": "UIT",
					"kw": "",
					"city": "Jaluit Island"
					},{
					    "name": "Jamba",
					"code": "JMB",
					"kw": "",
					"city": "Jamba"
					},{
					    "name": "Jammu",
					"code": "IXJ",
					"kw": "",
					"city": "Jammu"
					},{
					    "name": "Jamnagar",
					"code": "JGA",
					"kw": "",
					"city": "Jamnagar"
					},{
					    "name": "Jamshedpur",
					"code": "IXW",
					"kw": "",
					"city": "Jamshedpur"
					},{
					    "name": "Janakpur",
					"code": "JKR",
					"kw": "",
					"city": "Janakpur"
					},{
					    "name": "Janesville",
					"code": "JVL",
					"kw": "",
					"city": "Janesville"
					},{
					    "name": "Jaque",
					"code": "JQE",
					"kw": "",
					"city": "Jaque"
					},{
					    "name": "Jayapura",
					"code": "DJJ",
					"kw": "",
					"city": "Jayapura"
					},{
					    "name": "Jefferson City",
					"code": "JEF",
					"kw": "",
					"city": "Jefferson City"
					},{
					    "name": "Jequie",
					"code": "JEQ",
					"kw": "",
					"city": "Jequie"
					},{
					    "name": "Jeremie",
					"code": "JEE",
					"kw": "",
					"city": "Jeremie"
					},{
					    "name": "Jerez de la Frontera",
					"code": "XRY",
					"kw": "",
					"city": "Jerez de la Frontera"
					},{
					    "name": "Jessore",
					"code": "JSR",
					"kw": "",
					"city": "Jessore"
					},{
					    "name": "Jeypore",
					"code": "PYB",
					"kw": "",
					"city": "Jeypore"
					},{
					    "name": "Ji-Parana",
					"code": "JPR",
					"kw": "",
					"city": "Ji-Parana"
					},{
					    "name": "Jijel",
					"code": "GJL",
					"kw": "",
					"city": "Jijel"
					},{
					    "name": "Jimma",
					"code": "JIM",
					"kw": "",
					"city": "Jimma"
					},{
					    "name": "Jinka",
					"code": "BCO",
					"kw": "",
					"city": "Jinka"
					},{
					    "name": "Jiwani",
					"code": "JIW",
					"kw": "",
					"city": "Jiwani"
					},{
					    "name": "Joacaba",
					"code": "JCB",
					"kw": "",
					"city": "Joacaba"
					},{
					    "name": "Jodhpur",
					"code": "JDH",
					"kw": "",
					"city": "Jodhpur"
					},{
					    "name": "Johor Bahru",
					"code": "JHB",
					"kw": "",
					"city": "Johor Bahru"
					},{
					    "name": "Joinville",
					"code": "JOI",
					"kw": "",
					"city": "Joinville"
					},{
					    "name": "Jolo",
					"code": "JOL",
					"kw": "",
					"city": "Jolo"
					},{
					    "name": "Jomsom",
					"code": "JMO",
					"kw": "",
					"city": "Jomsom"
					},{
					    "name": "Jonesboro",
					"code": "JBR",
					"kw": "",
					"city": "Jonesboro"
					},{
					    "name": "Jonkoping",
					"code": "JKG",
					"kw": "",
					"city": "Jonkoping"
					},{
					    "name": "Joplin",
					"code": "JLN",
					"kw": "",
					"city": "Joplin"
					},{
					    "name": "Jorhat",
					"code": "JRH",
					"kw": "",
					"city": "Jorhat"
					},{
					    "name": "Jos",
					"code": "JOS",
					"kw": "",
					"city": "Jos"
					},{
					    "name": "Jose de San Martin",
					"code": "JSM",
					"kw": "",
					"city": "Jose de San Martin"
					},{
					    "name": "Juanjui",
					"code": "JJI",
					"kw": "",
					"city": "Juanjui"
					},{
					    "name": "Juist",
					"code": "JUI",
					"kw": "",
					"city": "Juist"
					},{
					    "name": "Juiz De Fora",
					"code": "JDF",
					"kw": "",
					"city": "Juiz De Fora"
					},{
					    "name": "Jujuy",
					"code": "JUJ",
					"kw": "",
					"city": "Jujuy"
					},{
					    "name": "Juliaca",
					"code": "JUL",
					"kw": "",
					"city": "Juliaca"
					},{
					    "name": "Jumla",
					"code": "JUM",
					"kw": "",
					"city": "Jumla"
					},{
					    "name": "Junin",
					"code": "JNI",
					"kw": "",
					"city": "Junin"
					},{
					    "name": "Jurado",
					"code": "JUO",
					"kw": "",
					"city": "Jurado"
					},{
						"name": "Salt Lake City",
						"code": "SLC",
						"kw": "Salt Lake City",
						"city": "Salt Lake City"
					},{
					    "name": "Nyc J.F.K",
					    "code": "JFK",
					    "kw": "Nyc J.F.K Int'L Airport",
					    "city": "New York"
					},{
					    "name": "Kabala",
					"code": "KBA",
					"kw": "",
					"city": "Kabala"
					},{
					    "name": "Kabri Dar",
					"code": "ABK",
					"kw": "",
					"city": "Kabri Dar"
					},{
					    "name": "Kabul",
					"code": "KBL",
					"kw": "",
					"city": "Kabul"
					},{
					    "name": "Kabwum",
					"code": "KBM",
					"kw": "",
					"city": "Kabwum"
					},{
					    "name": "Kaduna",
					"code": "KAD",
					"kw": "",
					"city": "Kaduna"
					},{
					    "name": "Kaedi",
					"code": "KED",
					"kw": "",
					"city": "Kaedi"
					},{
					    "name": "Kaele",
					"code": "KLE",
					"kw": "",
					"city": "Kaele"
					},{
					    "name": "Kagi",
					"code": "KGW",
					"kw": "",
					"city": "Kagi"
					},{
					    "name": "Kagoshima",
					"code": "KOJ",
					"kw": "",
					"city": "Kagoshima"
					},{
					    "name": "Kagua",
					"code": "AGK",
					"kw": "",
					"city": "Kagua"
					},{
					    "name": "Kaieteur",
					"code": "KAI",
					"kw": "",
					"city": "Kaieteur"
					},{
					    "name": "Kaikohe",
					"code": "KKO",
					"kw": "",
					"city": "Kaikohe"
					},{
					    "name": "Kailashahar",
					"code": "IXH",
					"kw": "",
					"city": "Kailashahar"
					},{
					    "name": "Kaimana",
					"code": "KNG",
					"kw": "",
					"city": "Kaimana"
					},{
					    "name": "Kaintiba",
					"code": "KZF",
					"kw": "",
					"city": "Kaintiba"
					},{
					    "name": "Kaitaia",
					"code": "KAT",
					"kw": "",
					"city": "Kaitaia"
					},{
					    "name": "Kajaani",
					"code": "KAJ",
					"kw": "",
					"city": "Kajaani"
					},{
					    "name": "Kalabo",
					"code": "KLB",
					"kw": "",
					"city": "Kalabo"
					},{
					    "name": "Kalamata",
					"code": "KLX",
					"kw": "",
					"city": "Kalamata"
					},{
					    "name": "Kalemie",
					"code": "FMI",
					"kw": "",
					"city": "Kalemie"
					},{
					    "name": "Kalemyo",
					"code": "KMV",
					"kw": "",
					"city": "Kalemyo"
					},{
					    "name": "Kalibo",
					"code": "KLO",
					"kw": "",
					"city": "Kalibo"
					},{
					    "name": "Kalima",
					"code": "KLY",
					"kw": "",
					"city": "Kalima"
					},{
					    "name": "Kaliningrad",
					"code": "KGD",
					"kw": "",
					"city": "Kaliningrad"
					},{
					    "name": "Kalispell",
					"code": "FCA",
					"kw": "",
					"city": "Kalispell"
					},{
					    "name": "Kalkurung",
					"code": "KFG",
					"kw": "",
					"city": "Kalkurung"
					},{
					    "name": "Kaltag",
					"code": "KAL",
					"kw": "",
					"city": "Kaltag"
					},{
					    "name": "Kalumburu",
					"code": "UBU",
					"kw": "",
					"city": "Kalumburu"
					},{
					    "name": "Kambuaya",
					"code": "KBX",
					"kw": "",
					"city": "Kambuaya"
					},{
					    "name": "Kameshli",
					"code": "KAC",
					"kw": "",
					"city": "Kameshli"
					},{
					    "name": "Kamileroi",
					"code": "KML",
					"kw": "",
					"city": "Kamileroi"
					},{
					    "name": "Kamina",
					"code": "KMN",
					"kw": "",
					"city": "Kamina"
					},{
					    "name": "Kamloops",
					"code": "YKA",
					"kw": "",
					"city": "Kamloops"
					},{
					    "name": "Kampala Off-Line Pt",
					"code": "KLA",
					"kw": "",
					"city": "Kampala Off-Line Pt"
					},{
					    "name": "Kamuela",
					"code": "MUE",
					"kw": "",
					"city": "Kamuela"
					},{
					    "name": "Kanainj",
					"code": "KNE",
					"kw": "",
					"city": "Kanainj"
					},{
					    "name": "Kananga",
					"code": "KGA",
					"kw": "",
					"city": "Kananga"
					},{
					    "name": "Kandavu",
					"code": "KDV",
					"kw": "",
					"city": "Kandavu"
					},{
					    "name": "Kandla",
					"code": "IXY",
					"kw": "",
					"city": "Kandla"
					},{
					    "name": "Kandrian",
					"code": "KDR",
					"kw": "",
					"city": "Kandrian"
					},{
					    "name": "Kangerlussuaq",
					"code": "SFJ",
					"kw": "",
					"city": "Kangerlussuaq"
					},{
					    "name": "Kangiqsujuaq",
					"code": "YWB",
					"kw": "",
					"city": "Kangiqsujuaq"
					},{
					    "name": "Kangirsuk",
					"code": "YKG",
					"kw": "",
					"city": "Kangirsuk"
					},{
					    "name": "Kangnung",
					"code": "KAG",
					"kw": "",
					"city": "Kangnung"
					},{
					    "name": "Kaniama",
					"code": "KNM",
					"kw": "",
					"city": "Kaniama"
					},{
					    "name": "Kankan",
					"code": "KNN",
					"kw": "",
					"city": "Kankan"
					},{
					    "name": "Kaohsiung",
					"code": "KHH",
					"kw": "",
					"city": "Kaohsiung"
					},{
					    "name": "Kaolack",
					"code": "KLC",
					"kw": "",
					"city": "Kaolack"
					},{
					    "name": "Kaoma",
					"code": "KMZ",
					"kw": "",
					"city": "Kaoma"
					},{
					    "name": "Kapit",
					"code": "KPI",
					"kw": "",
					"city": "Kapit"
					},{
					    "name": "Kar Kar",
					"code": "KRX",
					"kw": "",
					"city": "Kar Kar"
					},{
					    "name": "Karachi",
					"code": "KHI",
					"kw": "",
					"city": "Karachi"
					},{
					    "name": "Karaganda",
					"code": "KGF",
					"kw": "",
					"city": "Karaganda"
					},{
					    "name": "Karasabai",
					"code": "KRG",
					"kw": "",
					"city": "Karasabai"
					},{
					    "name": "Karawari",
					"code": "KRJ",
					"kw": "",
					"city": "Karawari"
					},{
					    "name": "Kariba",
					"code": "KAB",
					"kw": "",
					"city": "Kariba"
					},{
					    "name": "Karimui",
					"code": "KMR",
					"kw": "",
					"city": "Karimui"
					},{
					    "name": "Karlovy Vary",
					"code": "KLV",
					"kw": "",
					"city": "Karlovy Vary"
					},{
					    "name": "Karlskoga",
					"code": "KSK",
					"kw": "",
					"city": "Karlskoga"
					},{
					    "name": "Karlstad",
					"code": "KSD",
					"kw": "",
					"city": "Karlstad"
					},{
					    "name": "Karonga",
					"code": "KGJ",
					"kw": "",
					"city": "Karonga"
					},{
					    "name": "Karpathos",
					"code": "AOK",
					"kw": "",
					"city": "Karpathos"
					},{
					    "name": "Karshi",
					"code": "KSQ",
					"kw": "",
					"city": "Karshi"
					},{
					    "name": "Karubaga",
					"code": "KBF",
					"kw": "",
					"city": "Karubaga"
					},{
					    "name": "Karup",
					"code": "KRP",
					"kw": "",
					"city": "Karup"
					},{
					    "name": "Kasaba Bay",
					"code": "ZKB",
					"kw": "",
					"city": "Kasaba Bay"
					},{
					    "name": "Kasama",
					"code": "KAA",
					"kw": "",
					"city": "Kasama"
					},{
					    "name": "Kasane",
					"code": "BBK",
					"kw": "",
					"city": "Kasane"
					},{
					    "name": "Kasese",
					"code": "KSE",
					"kw": "",
					"city": "Kasese"
					},{
					    "name": "Kasongo Lunda",
					"code": "KGN",
					"kw": "",
					"city": "Kasongo Lunda"
					},{
					    "name": "Kasos Island",
					"code": "KSJ",
					"kw": "",
					"city": "Kasos Island"
					},{
					    "name": "Kassala",
					"code": "KSL",
					"kw": "",
					"city": "Kassala"
					},{
					    "name": "Kastelorizo",
					"code": "KZS",
					"kw": "",
					"city": "Kastelorizo"
					},{
					    "name": "Kastoria",
					"code": "KSO",
					"kw": "",
					"city": "Kastoria"
					},{
					    "name": "Katherine",
					"code": "KTR",
					"kw": "",
					"city": "Katherine"
					},{
					    "name": "Kathmandu",
					"code": "KTM",
					"kw": "",
					"city": "Kathmandu"
					},{
					    "name": "Katowice",
					"code": "KTW",
					"kw": "",
					"city": "Katowice"
					},{
					    "name": "Kau",
					"code": "KAZ",
					"kw": "",
					"city": "Kau"
					},{
					    "name": "Kauhava",
					"code": "KAU",
					"kw": "",
					"city": "Kauhava"
					},{
					    "name": "Kaukura Atoll",
					"code": "KKR",
					"kw": "",
					"city": "Kaukura Atoll"
					},{
					    "name": "Kaunas",
					"code": "KUN",
					"kw": "",
					"city": "Kaunas"
					},{
					    "name": "Kavala",
					"code": "KVA",
					"kw": "",
					"city": "Kavala"
					},{
					    "name": "Kavieng",
					"code": "KVG",
					"kw": "",
					"city": "Kavieng"
					},{
					    "name": "Kawthaung",
					"code": "KAW",
					"kw": "",
					"city": "Kawthaung"
					},{
					    "name": "Kayes",
					"code": "KYS",
					"kw": "",
					"city": "Kayes"
					},{
					    "name": "Kayseri",
					"code": "ASR",
					"kw": "",
					"city": "Kayseri"
					},{
					    "name": "Kazan",
					"code": "KZN",
					"kw": "",
					"city": "Kazan"
					},{
					    "name": "Kearney",
					"code": "EAR",
					"kw": "",
					"city": "Kearney"
					},{
					    "name": "Kebar",
					"code": "KEQ",
					"kw": "",
					"city": "Kebar"
					},{
					    "name": "Kedougou",
					"code": "KGG",
					"kw": "",
					"city": "Kedougou"
					},{
					    "name": "Keetmanshoop",
					"code": "KMP",
					"kw": "",
					"city": "Keetmanshoop"
					},{
					    "name": "Kefallinia",
					"code": "EFL",
					"kw": "",
					"city": "Kefallinia"
					},{
					    "name": "Keisah",
					"code": "KEA",
					"kw": "",
					"city": "Keisah"
					},{
					    "name": "Kelafo",
					"code": "LFO",
					"kw": "",
					"city": "Kelafo"
					},{
					    "name": "Kelle",
					"code": "KEE",
					"kw": "",
					"city": "Kelle"
					},{
					    "name": "Kemerovo",
					"code": "KEJ",
					"kw": "",
					"city": "Kemerovo"
					},{
					    "name": "Kemi/Tornio",
					"code": "KEM",
					"kw": "",
					"city": "Kemi/Tornio"
					},{
					    "name": "Kendari",
					"code": "KDI",
					"kw": "",
					"city": "Kendari"
					},{
					    "name": "Kengtung",
					"code": "KET",
					"kw": "",
					"city": "Kengtung"
					},{
					    "name": "Kenieba",
					"code": "KNZ",
					"kw": "",
					"city": "Kenieba"
					},{
					    "name": "Keningau",
					"code": "KGU",
					"kw": "",
					"city": "Keningau"
					},{
					    "name": "Kepi",
					"code": "KEI",
					"kw": "",
					"city": "Kepi"
					},{
					    "name": "Kerau",
					"code": "KRU",
					"kw": "",
					"city": "Kerau"
					},{
					    "name": "Kerema",
					"code": "KMA",
					"kw": "",
					"city": "Kerema"
					},{
					    "name": "Kerikeri",
					"code": "KKE",
					"kw": "",
					"city": "Kerikeri"
					},{
					    "name": "Kerkyra",
					"code": "CFU",
					"kw": "",
					"city": "Kerkyra"
					},{
					    "name": "Kerman",
					"code": "KER",
					"kw": "",
					"city": "Kerman"
					},{
					    "name": "Kerry County",
					"code": "KIR",
					"kw": "",
					"city": "Kerry County"
					},{
					    "name": "Kerteh",
					"code": "KTE",
					"kw": "",
					"city": "Kerteh"
					},{
					    "name": "Keshod",
					"code": "IXK",
					"kw": "",
					"city": "Keshod"
					},{
					    "name": "Ketapang",
					"code": "KTG",
					"kw": "",
					"city": "Ketapang"
					},{
					    "name": "Key Lake",
					"code": "YKJ",
					"kw": "",
					"city": "Key Lake"
					},{
					    "name": "Khabarovsk",
					"code": "KHV",
					"kw": "",
					"city": "Khabarovsk"
					},{
					    "name": "Khajuraho",
					"code": "HJR",
					"kw": "",
					"city": "Khajuraho"
					},{
					    "name": "Khamis Mushait",
					"code": "KMX",
					"kw": "",
					"city": "Khamis Mushait"
					},{
					    "name": "Khark Island",
					"code": "KHK",
					"kw": "",
					"city": "Khark Island"
					},{
					    "name": "Kharkov",
					"code": "HRK",
					"kw": "",
					"city": "Kharkov"
					},{
					    "name": "Khartoum",
					"code": "KRT",
					"kw": "",
					"city": "Khartoum"
					},{
					    "name": "Khasab",
					"code": "KHS",
					"kw": "",
					"city": "Khasab"
					},{
					    "name": "Khashm el Girba",
					"code": "GBU",
					"kw": "",
					"city": "Khashm el Girba"
					},{
					    "name": "Kherson",
					"code": "KHE",
					"kw": "",
					"city": "Kherson"
					},{
					    "name": "Khon Kaen",
					"code": "KKC",
					"kw": "",
					"city": "Khon Kaen"
					},{
					    "name": "Khost",
					"code": "KHT",
					"kw": "",
					"city": "Khost"
					},{
					    "name": "Khuzdar",
					"code": "KDD",
					"kw": "",
					"city": "Khuzdar"
					},{
					    "name": "Khwahan",
					"code": "KWH",
					"kw": "",
					"city": "Khwahan"
					},{
					    "name": "Kiel",
					"code": "KEL",
					"kw": "",
					"city": "Kiel"
					},{
					    "name": "Kieta",
					"code": "KIE",
					"kw": "",
					"city": "Kieta"
					},{
					    "name": "Kiev Zhulyany ",
					"code": "IEV",
					"kw": "",
					"city": "Kiev"
					},{
					    "name": "Kiev Borispol ",
					"code": "KBP",
					"kw": "",
					"city": "Kiev"
					},{
					    "name": "Kiffa",
					"code": "KFA",
					"kw": "",
					"city": "Kiffa"
					},{
					    "name": "Kigali",
					"code": "KGL",
					"kw": "",
					"city": "Kigali"
					},{
					    "name": "Kigoma",
					"code": "TKQ",
					"kw": "",
					"city": "Kigoma"
					},{
					    "name": "Kikori",
					"code": "KRI",
					"kw": "",
					"city": "Kikori"
					},{
					    "name": "Kikwit",
					"code": "KKW",
					"kw": "",
					"city": "Kikwit"
					},{
					    "name": "Kili Island",
					"code": "KIO",
					"kw": "",
					"city": "Kili Island"
					},{
					    "name": "Kilimanjaro",
					"code": "JRO",
					"kw": "",
					"city": "Kilimanjaro"
					},{
					    "name": "Kilwa",
					"code": "KIY",
					"kw": "",
					"city": "Kilwa"
					},{
					    "name": "Kimam",
					"code": "KMM",
					"kw": "",
					"city": "Kimam"
					},{
					    "name": "Kimberley",
					"code": "KIM",
					"kw": "",
					"city": "Kimberley"
					},{
					    "name": "Kimmirut/Lake Harbour",
					"code": "YLC",
					"kw": "",
					"city": "Kimmirut/Lake Harbour"
					},{
					    "name": "Kindamba",
					"code": "KNJ",
					"kw": "",
					"city": "Kindamba"
					},{
					    "name": "Kindu",
					"code": "KND",
					"kw": "",
					"city": "Kindu"
					},{
					    "name": "Kingman",
					"code": "IGM",
					"kw": "",
					"city": "Kingman"
					},{
					    "name": "Kingscote",
					"code": "KGC",
					"kw": "",
					"city": "Kingscote"
					},{
					    "name": "Kinshasa N'Djili ",
					"code": "FIH",
					"kw": "",
					"city": "Kinshasa"
					},{
					    "name": "Kinston",
					"code": "ISO",
					"kw": "",
					"city": "Kinston"
					},{
					    "name": "Kipnuk",
					"code": "KPN",
					"kw": "",
					"city": "Kipnuk"
					},{
					    "name": "Kira",
					"code": "KIQ",
					"kw": "",
					"city": "Kira"
					},{
					    "name": "Kirakira",
					"code": "IRA",
					"kw": "",
					"city": "Kirakira"
					},{
					    "name": "Kirksville",
					"code": "IRK",
					"kw": "",
					"city": "Kirksville"
					},{
					    "name": "Kirkwall",
					"code": "KOI",
					"kw": "",
					"city": "Kirkwall"
					},{
					    "name": "Kiruna",
					"code": "KRN",
					"kw": "",
					"city": "Kiruna"
					},{
					    "name": "Kirundo",
					"code": "KRE",
					"kw": "",
					"city": "Kirundo"
					},{
					    "name": "Kisangani",
					"code": "FKI",
					"kw": "",
					"city": "Kisangani"
					},{
					    "name": "Kish Island",
					"code": "KIH",
					"kw": "",
					"city": "Kish Island"
					},{
					    "name": "Kismayu",
					"code": "KMU",
					"kw": "",
					"city": "Kismayu"
					},{
					    "name": "Kissidougou",
					"code": "KSI",
					"kw": "",
					"city": "Kissidougou"
					},{
					    "name": "Kisumu",
					"code": "KIS",
					"kw": "",
					"city": "Kisumu"
					},{
					    "name": "Kita Kyushu",
					"code": "KKJ",
					"kw": "",
					"city": "Kita Kyushu"
					},{
					    "name": "Kitadaito",
					"code": "KTD",
					"kw": "",
					"city": "Kitadaito"
					},{
					    "name": "Kitale",
					"code": "KTL",
					"kw": "",
					"city": "Kitale"
					},{
					    "name": "Kithira",
					"code": "KIT",
					"kw": "",
					"city": "Kithira"
					},{
					    "name": "Kittila",
					"code": "KTT",
					"kw": "",
					"city": "Kittila"
					},{
					    "name": "Kitwe",
					"code": "KIW",
					"kw": "",
					"city": "Kitwe"
					},{
					    "name": "Kiunga",
					"code": "KIU",
					"kw": "",
					"city": "Kiunga"
					},{
					    "name": "Kiunga",
					"code": "UNG",
					"kw": "",
					"city": "Kiunga"
					},{
					    "name": "Klagenfurt",
					"code": "KLU",
					"kw": "",
					"city": "Klagenfurt"
					},{
					    "name": "Klamath Falls",
					"code": "LMT",
					"kw": "",
					"city": "Klamath Falls"
					},{
					    "name": "Kleinzee",
					"code": "KLZ",
					"kw": "",
					"city": "Kleinzee"
					},{
					    "name": "Klerksdorp",
					"code": "KXE",
					"kw": "",
					"city": "Klerksdorp"
					},{
					    "name": "Knee Lake",
					"code": "YKE",
					"kw": "",
					"city": "Knee Lake"
					},{
					    "name": "Knock",
					"code": "NOC",
					"kw": "",
					"city": "Knock"
					},{
					    "name": "Knoxville",
					"code": "TYS",
					"kw": "",
					"city": "Knoxville"
					},{
					    "name": "Kochi",
					"code": "KCZ",
					"kw": "",
					"city": "Kochi"
					},{
					    "name": "Kohat",
					"code": "OHT",
					"kw": "",
					"city": "Kohat"
					},{
					    "name": "Kokkola/Pietarsaari",
					"code": "KOK",
					"kw": "",
					"city": "Kokkola/Pietarsaari"
					},{
					    "name": "Kokoda",
					"code": "KKD",
					"kw": "",
					"city": "Kokoda"
					},{
					    "name": "Kokomo",
					"code": "OKK",
					"kw": "",
					"city": "Kokomo"
					},{
					    "name": "Kokoro",
					"code": "KOR",
					"kw": "",
					"city": "Kokoro"
					},{
					    "name": "Kokshetau",
					"code": "KOV",
					"kw": "",
					"city": "Kokshetau"
					},{
					    "name": "Kol",
					"code": "KQL",
					"kw": "",
					"city": "Kol"
					},{
					    "name": "Kolda",
					"code": "KDA",
					"kw": "",
					"city": "Kolda"
					},{
					    "name": "Kolhapur",
					"code": "KLH",
					"kw": "",
					"city": "Kolhapur"
					},{
					    "name": "Kolwezi",
					"code": "KWZ",
					"kw": "",
					"city": "Kolwezi"
					},{
					    "name": "Komako",
					"code": "HOC",
					"kw": "",
					"city": "Komako"
					},{
					    "name": "Kompiam",
					"code": "KPM",
					"kw": "",
					"city": "Kompiam"
					},{
					    "name": "Kone",
					"code": "KNQ",
					"kw": "",
					"city": "Kone"
					},{
					    "name": "Konge",
					"code": "KGB",
					"kw": "",
					"city": "Konge"
					},{
					    "name": "Kongo-Boumba",
					"code": "GKO",
					"kw": "",
					"city": "Kongo-Boumba"
					},{
					    "name": "Kongolo",
					"code": "KOO",
					"kw": "",
					"city": "Kongolo"
					},{
					    "name": "Konya",
					"code": "KYA",
					"kw": "",
					"city": "Konya"
					},{
					    "name": "Koolatah",
					"code": "KOH",
					"kw": "",
					"city": "Koolatah"
					},{
					    "name": "Kopasker",
					"code": "OPA",
					"kw": "",
					"city": "Kopasker"
					},{
					    "name": "Korhogo",
					"code": "HGO",
					"kw": "",
					"city": "Korhogo"
					},{
					    "name": "Koro Island",
					"code": "KXF",
					"kw": "",
					"city": "Koro Island"
					},{
					    "name": "Koroba",
					"code": "KDE",
					"kw": "",
					"city": "Koroba"
					},{
					    "name": "Koror",
					"code": "ROR",
					"kw": "",
					"city": "Koror"
					},{
					    "name": "Kos",
					"code": "KGS",
					"kw": "",
					"city": "Kos"
					},{
					    "name": "Kosice",
					"code": "KSC",
					"kw": "",
					"city": "Kosice"
					},{
					    "name": "Kosrae",
					"code": "KSA",
					"kw": "",
					"city": "Kosrae"
					},{
					    "name": "Kostanay",
					"code": "KSN",
					"kw": "",
					"city": "Kostanay"
					},{
					    "name": "Kosti",
					"code": "KST",
					"kw": "",
					"city": "Kosti"
					},{
					    "name": "Koszalin",
					"code": "OSZ",
					"kw": "",
					"city": "Koszalin"
					},{
					    "name": "Kota",
					"code": "KTU",
					"kw": "",
					"city": "Kota"
					},{
					    "name": "Kota Bharu",
					"code": "KBR",
					"kw": "",
					"city": "Kota Bharu"
					},{
					    "name": "Kota Kinabalu",
					"code": "BKI",
					"kw": "",
					"city": "Kota Kinabalu"
					},{
					    "name": "Kotabangun",
					"code": "KOD",
					"kw": "",
					"city": "Kotabangun"
					},{
					    "name": "Koulamoutou",
					"code": "KOU",
					"kw": "",
					"city": "Koulamoutou"
					},{
					    "name": "Koumac",
					"code": "KOC",
					"kw": "",
					"city": "Koumac"
					},{
					    "name": "Koundara",
					"code": "SBI",
					"kw": "",
					"city": "Koundara"
					},{
					    "name": "Koutaba",
					"code": "KOB",
					"kw": "",
					"city": "Koutaba"
					},{
					    "name": "Kozani",
					"code": "KZI",
					"kw": "",
					"city": "Kozani"
					},{
					    "name": "Kozhikode",
					"code": "CCJ",
					"kw": "",
					"city": "Kozhikode"
					},{
					    "name": "Krakow",
					"code": "KRK",
					"kw": "",
					"city": "Krakow"
					},{
					    "name": "Kramfors",
					"code": "KRF",
					"kw": "",
					"city": "Kramfors"
					},{
					    "name": "Krasnodar",
					"code": "KRR",
					"kw": "",
					"city": "Krasnodar"
					},{
					    "name": "Krasnoyarsk",
					"code": "KJA",
					"kw": "",
					"city": "Krasnoyarsk"
					},{
					    "name": "Kribi",
					"code": "KBI",
					"kw": "",
					"city": "Kribi"
					},{
					    "name": "Kristiansand Kjevik Airport",
					"code": "KRS",
					"kw": "",
					"city": "Kristiansand"
					},{
					    "name": "Kristianstad",
					"code": "KID",
					"kw": "",
					"city": "Kristianstad"
					},{
					    "name": "Kristiansund",
					"code": "KSU",
					"kw": "",
					"city": "Kristiansund"
					},{
					    "name": "Krivoy Rog",
					"code": "KWG",
					"kw": "",
					"city": "Krivoy Rog"
					},{
					    "name": "Kuala Lumpur International Airport",
					"code": "KUL",
					"kw": "",
					"city": "Kuala Lumpur"
					},{
					    "name": "Kuala Lumpur Sultan Abdul Aziz Shah ",
					"code": "SZB",
					"kw": "",
					"city": "Kuala Lumpur"
					},{
					    "name": "Kuala Terengganu",
					"code": "TGG",
					"kw": "",
					"city": "Kuala Terengganu"
					},{
					    "name": "Kuantan",
					"code": "KUA",
					"kw": "",
					"city": "Kuantan"
					},{
					    "name": "Kuching",
					"code": "KCH",
					"kw": "",
					"city": "Kuching"
					},{
					    "name": "Kudat",
					"code": "KUD",
					"kw": "",
					"city": "Kudat"
					},{
					    "name": "Kufrah",
					"code": "AKF",
					"kw": "",
					"city": "Kufrah"
					},{
					    "name": "Kugluktuk Coppermine",
					"code": "YCO",
					"kw": "",
					"city": "Kugluktuk Coppermine"
					},{
					    "name": "Kuito",
					"code": "SVP",
					"kw": "",
					"city": "Kuito"
					},{
					    "name": "Kulu",
					"code": "KUU",
					"kw": "",
					"city": "Kulu"
					},{
					    "name": "Kulusuk Island",
					"code": "KUS",
					"kw": "",
					"city": "Kulusuk Island"
					},{
					    "name": "Kumasi",
					"code": "KMS",
					"kw": "",
					"city": "Kumasi"
					},{
					    "name": "Kume Jima",
					"code": "UEO",
					"kw": "",
					"city": "Kume Jima"
					},{
					    "name": "Kundiawa",
					"code": "CMU",
					"kw": "",
					"city": "Kundiawa"
					},{
					    "name": "Kunduz",
					"code": "UND",
					"kw": "",
					"city": "Kunduz"
					},{
					    "name": "Kuopio",
					"code": "KUO",
					"kw": "",
					"city": "Kuopio"
					},{
					    "name": "Kuorevesi",
					"code": "KEV",
					"kw": "",
					"city": "Kuorevesi"
					},{
					    "name": "Kupang",
					"code": "KOE",
					"kw": "",
					"city": "Kupang"
					},{
					    "name": "Kupiano",
					"code": "KUP",
					"kw": "",
					"city": "Kupiano"
					},{
					    "name": "Kurgan",
					"code": "KRO",
					"kw": "",
					"city": "Kurgan"
					},{
					    "name": "Kuria",
					"code": "KUC",
					"kw": "",
					"city": "Kuria"
					},{
					    "name": "Kuruman",
					"code": "KMH",
					"kw": "",
					"city": "Kuruman"
					},{
					    "name": "Kutaisi",
					"code": "KUT",
					"kw": "",
					"city": "Kutaisi"
					},{
					    "name": "Kuusamo",
					"code": "KAO",
					"kw": "",
					"city": "Kuusamo"
					},{
					    "name": "Kuwait",
					"code": "KWI",
					"kw": "",
					"city": "Kuwait"
					},{
					    "name": "Kwajalein",
					"code": "KWA",
					"kw": "",
					"city": "Kwajalein"
					},{
					    "name": "Kwangju",
					"code": "KWJ",
					"kw": "",
					"city": "Kwangju"
					},{
					    "name": "Kyaukpyu",
					"code": "KYP",
					"kw": "",
					"city": "Kyaukpyu"
					},{
					    "name": "Kyauktaw",
					"code": "KYT",
					"kw": "",
					"city": "Kyauktaw"
					},{
					    "name": "La Ceiba",
					"code": "LCE",
					"kw": "",
					"city": "La Ceiba"
					},{
					    "name": "La Chorrera",
					"code": "LCR",
					"kw": "",
					"city": "La Chorrera"
					},{
					    "name": "La Coloma",
					"code": "LCL",
					"kw": "",
					"city": "La Coloma"
					},{
					    "name": "La Coruna",
					"code": "LCG",
					"kw": "",
					"city": "La Coruna"
					},{
					    "name": "La Desirade",
					"code": "DSD",
					"kw": "",
					"city": "La Desirade"
					},{
					    "name": "La Fria",
					"code": "LFR",
					"kw": "",
					"city": "La Fria"
					},{
					    "name": "La Grande",
					"code": "YGL",
					"kw": "",
					"city": "La Grande"
					},{
					    "name": "La Palma",
					"code": "PLP",
					"kw": "",
					"city": "La Palma"
					},{
					    "name": "La Paz",
					"code": "LAP",
					"kw": "",
					"city": "La Paz"
					},{
					    "name": "La Paz",
					"code": "LPB",
					"kw": "",
					"city": "La Paz"
					},{
					    "name": "La Pedrera",
					"code": "LPD",
					"kw": "",
					"city": "La Pedrera"
					},{
					    "name": "La Porte",
					"code": "LPO",
					"kw": "",
					"city": "La Porte"
					},{
					    "name": "La Rioja",
					"code": "IRJ",
					"kw": "",
					"city": "La Rioja"
					},{
					    "name": "La Roche sur Yon",
					"code": "EDM",
					"kw": "",
					"city": "La Roche sur Yon"
					},{
					    "name": "La Rochelle",
					"code": "LRH",
					"kw": "",
					"city": "La Rochelle"
					},{
					    "name": "La Romana",
					"code": "LRM",
					"kw": "",
					"city": "La Romana"
					},{
					    "name": "La Ronge",
					"code": "YVC",
					"kw": "",
					"city": "La Ronge"
					},{
					    "name": "La Serena",
					"code": "LSC",
					"kw": "",
					"city": "La Serena"
					},{
					    "name": "La Union",
					"code": "LUI",
					"kw": "",
					"city": "La Union"
					},{
					    "name": "Laayoune",
					"code": "EUN",
					"kw": "",
					"city": "Laayoune"
					},{
					    "name": "Labasa",
					"code": "LBS",
					"kw": "",
					"city": "Labasa"
					},{
					    "name": "Labe",
					"code": "LEK",
					"kw": "",
					"city": "Labe"
					},{
					    "name": "Lablab",
					"code": "LAB",
					"kw": "",
					"city": "Lablab"
					},{
					    "name": "Labuan",
					"code": "LBU",
					"kw": "",
					"city": "Labuan"
					},{
					    "name": "Labuha",
					"code": "LAH",
					"kw": "",
					"city": "Labuha"
					},{
					    "name": "Lac Brochet",
					"code": "XLB",
					"kw": "",
					"city": "Lac Brochet"
					},{
					    "name": "Ladysmith",
					"code": "LAY",
					"kw": "",
					"city": "Ladysmith"
					},{
					    "name": "Lae",
					"code": "LAE",
					"kw": "",
					"city": "Lae"
					},{
					    "name": "Lae Island",
					"code": "LML",
					"kw": "",
					"city": "Lae Island"
					},{
					    "name": "Lafayette Regional ",
					"code": "LFT",
					"kw": "",
					"city": "Lafayette"
					},{
					    "name": "Lages",
					"code": "LAJ",
					"kw": "",
					"city": "Lages"
					},{
					    "name": "Lago Agrio",
					"code": "LGQ",
					"kw": "",
					"city": "Lago Agrio"
					},{
					    "name": "Lago Argentino",
					"code": "ING",
					"kw": "",
					"city": "Lago Argentino"
					},{
					    "name": "Lagos",
					"code": "LOS",
					"kw": "",
					"city": "Lagos"
					},{
					    "name": "Lagunillas",
					"code": "LGY",
					"kw": "",
					"city": "Lagunillas"
					},{
					    "name": "Lahad Datu",
					"code": "LDU",
					"kw": "",
					"city": "Lahad Datu"
					},{
					    "name": "Lahore",
					"code": "LHE",
					"kw": "",
					"city": "Lahore"
					},{
					    "name": "Laiagam",
					"code": "LGM",
					"kw": "",
					"city": "Laiagam"
					},{
					    "name": "Lake Charles",
					"code": "LCH",
					"kw": "",
					"city": "Lake Charles"
					},{
					    "name": "Lake Minchumina",
					"code": "LMA",
					"kw": "",
					"city": "Lake Minchumina"
					},{
					    "name": "Lake Murray",
					"code": "LMY",
					"kw": "",
					"city": "Lake Murray"
					},{
					    "name": "Lake Nash",
					"code": "LNH",
					"kw": "",
					"city": "Lake Nash"
					},{
					    "name": "Lakeba",
					"code": "LKB",
					"kw": "",
					"city": "Lakeba"
					},{
					    "name": "Lakefield",
					"code": "LFP",
					"kw": "",
					"city": "Lakefield"
					},{
					    "name": "Lakeland",
					"code": "LAL",
					"kw": "",
					"city": "Lakeland"
					},{
					    "name": "Lakeview",
					"code": "LKV",
					"kw": "",
					"city": "Lakeview"
					},{
					    "name": "Lakselv",
					"code": "LKL",
					"kw": "",
					"city": "Lakselv"
					},{
					    "name": "Lalibela",
					"code": "LLI",
					"kw": "",
					"city": "Lalibela"
					},{
					    "name": "Lamap",
					"code": "LPM",
					"kw": "",
					"city": "Lamap"
					},{
					    "name": "Lamar",
					"code": "LAA",
					"kw": "",
					"city": "Lamar"
					},{
					    "name": "Lambarene",
					"code": "LBQ",
					"kw": "",
					"city": "Lambarene"
					},{
					    "name": "Lamen Bay",
					"code": "LNB",
					"kw": "",
					"city": "Lamen Bay"
					},{
					    "name": "Lamezia Terme",
					"code": "SUF",
					"kw": "",
					"city": "Lamezia Terme"
					},{
					    "name": "Lampang",
					"code": "LPT",
					"kw": "",
					"city": "Lampang"
					},{
					    "name": "Lampedusa",
					"code": "LMP",
					"kw": "",
					"city": "Lampedusa"
					},{
					    "name": "Lamu",
					"code": "LAU",
					"kw": "",
					"city": "Lamu"
					},{
					    "name": "Lancaster William J Fox ",
					"code": "WJF",
					"kw": "",
					"city": "Lancaster"
					},{
					    "name": "Lancaster",
					"code": "LNS",
					"kw": "",
					"city": "Lancaster"
					},{
					    "name": "Lands End",
					"code": "LEQ",
					"kw": "",
					"city": "Lands End"
					},{
					    "name": "Langkawi",
					"code": "LGK",
					"kw": "",
					"city": "Langkawi"
					},{
					    "name": "Lannion",
					"code": "LAI",
					"kw": "",
					"city": "Lannion"
					},{
					    "name": "Lanseria",
					"code": "HLA",
					"kw": "",
					"city": "Lanseria"
					},{
					    "name": "Lanzarote",
					"code": "ACE",
					"kw": "",
					"city": "Lanzarote"
					},{
					    "name": "Laoag",
					"code": "LAO",
					"kw": "",
					"city": "Laoag"
					},{
					    "name": "Lappeenranta",
					"code": "LPP",
					"kw": "",
					"city": "Lappeenranta"
					},{
					    "name": "Larantuka",
					"code": "LKA",
					"kw": "",
					"city": "Larantuka"
					},{
					    "name": "Larissa",
					"code": "LRA",
					"kw": "",
					"city": "Larissa"
					},{
					    "name": "Larnaca",
					"code": "LCA",
					"kw": "",
					"city": "Larnaca"
					},{
					    "name": "Las Lomitas",
					"code": "LLS",
					"kw": "",
					"city": "Las Lomitas"
					},{
					    "name": "Las Palmas",
					"code": "LPA",
					"kw": "",
					"city": "Las Palmas"
					},{
					    "name": "Las Piedras",
					"code": "LSP",
					"kw": "",
					"city": "Las Piedras"
					},{
					    "name": "Las Tunas",
					"code": "VTU",
					"kw": "",
					"city": "Las Tunas"
					},{
					    "name": "Lashio",
					"code": "LSH",
					"kw": "",
					"city": "Lashio"
					},{
					    "name": "Lastourville",
					"code": "LTL",
					"kw": "",
					"city": "Lastourville"
					},{
					    "name": "Latrobe",
					"code": "LBE",
					"kw": "",
					"city": "Latrobe"
					},{
					    "name": "Laurel Hesler Noble Field",
					"code": "LUL",
					"kw": "",
					"city": "Laurel"
					},{
					    "name": "Laurel Hattiesburg-Laurel Regional ",
					"code": "PIB",
					"kw": "",
					"city": "Laurel"
					},{
					    "name": "Laval",
					"code": "LVA",
					"kw": "",
					"city": "Laval"
					},{
					    "name": "Lawas",
					"code": "LWY",
					"kw": "",
					"city": "Lawas"
					},{
					    "name": "Lazaro Cardenas",
					"code": "LZC",
					"kw": "",
					"city": "Lazaro Cardenas"
					},{
					    "name": "Le Havre",
					"code": "LEH",
					"kw": "",
					"city": "Le Havre"
					},{
					    "name": "Le Mans Arnage Airport",
					"code": "LME",
					"kw": "",
					"city": "Le Mans"
					},{
					    "name": "Le Puy",
					"code": "LPY",
					"kw": "",
					"city": "Le Puy"
					},{
					    "name": "Le Touquet",
					"code": "LTQ",
					"kw": "",
					"city": "Le Touquet"
					},{
					    "name": "Leaf Rapids",
					"code": "YLR",
					"kw": "",
					"city": "Leaf Rapids"
					},{
					    "name": "Lebel-Sur-Quevillon",
					"code": "YLS",
					"kw": "",
					"city": "Lebel-Sur-Quevillon"
					},{
					    "name": "Leeds Bradford",
					"code": "LBA",
					"kw": "",
					"city": "Leeds Bradford"
					},{
					    "name": "Legaspi",
					"code": "LGP",
					"kw": "",
					"city": "Legaspi"
					},{
					    "name": "Leh",
					"code": "IXL",
					"kw": "",
					"city": "Leh"
					},{
					    "name": "Leigh Creek",
					"code": "LGH",
					"kw": "",
					"city": "Leigh Creek"
					},{
					    "name": "Leipzig",
					"code": "LEJ",
					"kw": "",
					"city": "Leipzig"
					},{
					    "name": "Leitre",
					"code": "LTF",
					"kw": "",
					"city": "Leitre"
					},{
					    "name": "Lekana",
					"code": "LKC",
					"kw": "",
					"city": "Lekana"
					},{
					    "name": "Leknes",
					"code": "LKN",
					"kw": "",
					"city": "Leknes"
					},{
					    "name": "Lemnos",
					"code": "LXS",
					"kw": "",
					"city": "Lemnos"
					},{
					    "name": "Leo",
					"code": "XLU",
					"kw": "",
					"city": "Leo"
					},{
					    "name": "Leon",
					"code": "LEN",
					"kw": "",
					"city": "Leon"
					},{
					    "name": "Leon/Guanajuato",
					"code": "BJX",
					"kw": "",
					"city": "Leon/Guanajuato"
					},{
					    "name": "Leonardtown",
					"code": "LTW",
					"kw": "",
					"city": "Leonardtown"
					},{
					    "name": "Leopoldina",
					"code": "LEP",
					"kw": "",
					"city": "Leopoldina"
					},{
					    "name": "Lereh",
					"code": "LHI",
					"kw": "",
					"city": "Lereh"
					},{
					    "name": "Leribe",
					"code": "LRB",
					"kw": "",
					"city": "Leribe"
					},{
					    "name": "Leros",
					"code": "LRS",
					"kw": "",
					"city": "Leros"
					},{
					    "name": "Lese",
					"code": "LNG",
					"kw": "",
					"city": "Lese"
					},{
					    "name": "Lesobeng",
					"code": "LES",
					"kw": "",
					"city": "Lesobeng"
					},{
					    "name": "Lethbridge",
					"code": "YQL",
					"kw": "",
					"city": "Lethbridge"
					},{
					    "name": "Lethem",
					"code": "LTM",
					"kw": "",
					"city": "Lethem"
					},{
					    "name": "Leticia",
					"code": "LET",
					"kw": "",
					"city": "Leticia"
					},{
					    "name": "Lewiston",
					"code": "LWS",
					"kw": "",
					"city": "Lewiston"
					},{
					    "name": "Lewistown",
					"code": "LWT",
					"kw": "",
					"city": "Lewistown"
					},{
					    "name": "Lewoleba",
					"code": "LWE",
					"kw": "",
					"city": "Lewoleba"
					},{
					    "name": "Lexington Blue Grass ",
					"code": "LEX",
					"kw": "",
					"city": "Lexington"
					},{
					    "name": "Libenge",
					"code": "LIE",
					"kw": "",
					"city": "Libenge"
					},{
					    "name": "Liberia",
					"code": "LIR",
					"kw": "",
					"city": "Liberia"
					},{
					    "name": "Libreville",
					"code": "LBV",
					"kw": "",
					"city": "Libreville"
					},{
					    "name": "Lidkoping",
					"code": "LDK",
					"kw": "",
					"city": "Lidkoping"
					},{
					    "name": "Liege",
					"code": "LGG",
					"kw": "",
					"city": "Liege"
					},{
					    "name": "Lifou",
					"code": "LIF",
					"kw": "",
					"city": "Lifou"
					},{
					    "name": "Likiep Island",
					"code": "LIK",
					"kw": "",
					"city": "Likiep Island"
					},{
					    "name": "Lilabari",
					"code": "IXI",
					"kw": "",
					"city": "Lilabari"
					},{
					    "name": "Lille Lesquin Airport",
					"code": "LIL",
					"kw": "",
					"city": "Lille"
					},{
					    "name": "Lilongwe",
					"code": "LLW",
					"kw": "",
					"city": "Lilongwe"
					},{
					    "name": "Lima",
					"code": "LIM",
					"kw": "",
					"city": "Lima"
					},{
					    "name": "Limbang",
					"code": "LMN",
					"kw": "",
					"city": "Limbang"
					},{
					    "name": "Limbunya",
					"code": "LIB",
					"kw": "",
					"city": "Limbunya"
					},{
					    "name": "Limoges",
					"code": "LIG",
					"kw": "",
					"city": "Limoges"
					},{
					    "name": "Limon",
					"code": "LIO",
					"kw": "",
					"city": "Limon"
					},{
					    "name": "Lincoln",
					"code": "LNK",
					"kw": "",
					"city": "Lincoln"
					},{
					    "name": "Lindi",
					"code": "LDI",
					"kw": "",
					"city": "Lindi"
					},{
					    "name": "Linkoping",
					"code": "LPI",
					"kw": "",
					"city": "Linkoping"
					},{
					    "name": "Linz",
					"code": "LNZ",
					"kw": "",
					"city": "Linz"
					},{
					    "name": "Lisala",
					"code": "LIQ",
					"kw": "",
					"city": "Lisala"
					},{
					    "name": "Lisbon",
					"code": "LIS",
					"kw": "",
					"city": "Lisbon"
					},{
					    "name": "Livermore",
					"code": "LVK",
					"kw": "",
					"city": "Livermore"
					},{
					    "name": "Liverpool",
					"code": "LPL",
					"kw": "",
					"city": "Liverpool"
					},{
					    "name": "Livingstone",
					"code": "LVI",
					"kw": "",
					"city": "Livingstone"
					},{
					    "name": "Ljubljana",
					"code": "LJU",
					"kw": "",
					"city": "Ljubljana"
					},{
					    "name": "Lloydminster",
					"code": "YLL",
					"kw": "",
					"city": "Lloydminster"
					},{
					    "name": "Lobatse",
					"code": "LOQ",
					"kw": "",
					"city": "Lobatse"
					},{
					    "name": "Lochgilphead",
					"code": "LPH",
					"kw": "",
					"city": "Lochgilphead"
					},{
					    "name": "Lodja",
					"code": "LJA",
					"kw": "",
					"city": "Lodja"
					},{
					    "name": "Loei",
					"code": "LOE",
					"kw": "",
					"city": "Loei"
					},{
					    "name": "Loikaw",
					"code": "LIW",
					"kw": "",
					"city": "Loikaw"
					},{
					    "name": "Loja",
					"code": "LOH",
					"kw": "",
					"city": "Loja"
					},{
					    "name": "Lome",
					"code": "LFW",
					"kw": "",
					"city": "Lome"
					},{
					    "name": "London City ",
					"code": "LCY",
					"kw": "",
					"city": "London"
					},{
					    "name": "London Stansted ",
					"code": "STN",
					"kw": "",
					"city": "London"
					},{
					    "name": "London Heathrow ",
					"code": "LHR",
					"kw": "",
					"city": "London"
					},{
					    "name": "London Gatwick ",
					"code": "LGW",
					"kw": "",
					"city": "London"
					},{
					    "name": "London Luton ",
					"code": "LTN",
					"kw": "",
					"city": "London"
					},{
					    "name": "Londonderry",
					"code": "LDY",
					"kw": "",
					"city": "Londonderry"
					},{
					    "name": "Londrina",
					"code": "LDB",
					"kw": "",
					"city": "Londrina"
					},{
					    "name": "Long Apung",
					"code": "LPU",
					"kw": "",
					"city": "Long Apung"
					},{
					    "name": "Long Bawan",
					"code": "LBW",
					"kw": "",
					"city": "Long Bawan"
					},{
					    "name": "Long Beach ",
					"code": "LGB",
					"kw": "",
					"city": "Long Beach"
					},{
					    "name": "Long Lellang",
					"code": "LGL",
					"kw": "",
					"city": "Long Lellang"
					},{
					    "name": "Long Pasia",
					"code": "GSA",
					"kw": "",
					"city": "Long Pasia"
					},{
					    "name": "Long Semado",
					"code": "LSM",
					"kw": "",
					"city": "Long Semado"
					},{
					    "name": "Long Seridan",
					"code": "ODN",
					"kw": "",
					"city": "Long Seridan"
					},{
					    "name": "Longana",
					"code": "LOD",
					"kw": "",
					"city": "Longana"
					},{
					    "name": "Longyearbyen",
					"code": "LYR",
					"kw": "",
					"city": "Longyearbyen"
					},{
					    "name": "Lonorore",
					"code": "LNE",
					"kw": "",
					"city": "Lonorore"
					},{
					    "name": "Loreto",
					"code": "LTO",
					"kw": "",
					"city": "Loreto"
					},{
					    "name": "Los Alamos",
					"code": "LAM",
					"kw": "",
					"city": "Los Alamos"
					},{
					    "name": "Los Angeles Int'l ",
					"code": "LAX",
					"kw": "",
					"city": "Los Angeles"
					},{
					    "name": "Los Angeles",
					"code": "LSQ",
					"kw": "",
					"city": "Los Angeles"
					},{
					    "name": "Los Menucos",
					"code": "LMD",
					"kw": "",
					"city": "Los Menucos"
					},{
					    "name": "Los Mochis",
					"code": "LMM",
					"kw": "",
					"city": "Los Mochis"
					},{
					    "name": "Los Roques",
					"code": "LRV",
					"kw": "",
					"city": "Los Roques"
					},{
					    "name": "Losuia",
					"code": "LSA",
					"kw": "",
					"city": "Losuia"
					},{
					    "name": "Loubomo",
					"code": "DIS",
					"kw": "",
					"city": "Loubomo"
					},{
					    "name": "Louis Trichardt",
					"code": "LCD",
					"kw": "",
					"city": "Louis Trichardt"
					},{
					    "name": "Louisville Standiford Field",
					"code": "SDF",
					"kw": "",
					"city": "Louisville"
					},{
					    "name": "Lourdes/Tarbes",
					"code": "LDE",
					"kw": "",
					"city": "Lourdes/Tarbes"
					},{
					    "name": "Luanda",
					"code": "LAD",
					"kw": "",
					"city": "Luanda"
					},{
					    "name": "Lubango",
					"code": "SDD",
					"kw": "",
					"city": "Lubango"
					},{
					    "name": "Lubumbashi",
					"code": "FBM",
					"kw": "",
					"city": "Lubumbashi"
					},{
					    "name": "Lucca",
					"code": "LCV",
					"kw": "",
					"city": "Lucca"
					},{
					    "name": "Lucenec",
					"code": "LUE",
					"kw": "",
					"city": "Lucenec"
					},{
					    "name": "Lucknow",
					"code": "LKO",
					"kw": "",
					"city": "Lucknow"
					},{
					    "name": "Luderitz",
					"code": "LUD",
					"kw": "",
					"city": "Luderitz"
					},{
					    "name": "Ludhiana",
					"code": "LUH",
					"kw": "",
					"city": "Ludhiana"
					},{
					    "name": "Luena",
					"code": "LUO",
					"kw": "",
					"city": "Luena"
					},{
					    "name": "Lugano",
					"code": "LUG",
					"kw": "",
					"city": "Lugano"
					},{
					    "name": "Lugansk",
					"code": "VSG",
					"kw": "",
					"city": "Lugansk"
					},{
					    "name": "Lugh Ganane",
					"code": "LGX",
					"kw": "",
					"city": "Lugh Ganane"
					},{
					    "name": "Lukla",
					"code": "LUA",
					"kw": "",
					"city": "Lukla"
					},{
					    "name": "Lulea",
					"code": "LLA",
					"kw": "",
					"city": "Lulea"
					},{
					    "name": "Lumbala",
					"code": "GGC",
					"kw": "",
					"city": "Lumbala"
					},{
					    "name": "Lumi",
					"code": "LMI",
					"kw": "",
					"city": "Lumi"
					},{
					    "name": "Lusaka",
					"code": "LUN",
					"kw": "",
					"city": "Lusaka"
					},{
					    "name": "Lusikisiki",
					"code": "LUJ",
					"kw": "",
					"city": "Lusikisiki"
					},{
					    "name": "Luwuk",
					"code": "LUW",
					"kw": "",
					"city": "Luwuk"
					},{
					    "name": "Luxembourg",
					"code": "LUX",
					"kw": "",
					"city": "Luxembourg"
					},{
					    "name": "Luxor",
					"code": "LXR",
					"kw": "",
					"city": "Luxor"
					},{
					    "name": "Lvov",
					"code": "LWO",
					"kw": "",
					"city": "Lvov"
					},{
					    "name": "Lycksele",
					"code": "LYC",
					"kw": "",
					"city": "Lycksele"
					},{
					    "name": "Lydd",
					"code": "LYX",
					"kw": "",
					"city": "Lydd"
					},{
					    "name": "Lynchburg",
					"code": "LYH",
					"kw": "",
					"city": "Lynchburg"
					},{
					    "name": "Lynn Lake",
					"code": "YYL",
					"kw": "",
					"city": "Lynn Lake"
					},{
					    "name": "Lyon Saint Exupery ",
					"code": "LYS",
					"kw": "",
					"city": "Lyon"
					},{
					    "name": "M'Banza Congo",
					"code": "SSY",
					"kw": "",
					"city": "M'Banza Congo"
					},{
					    "name": "M'Boki",
					"code": "MKI",
					"kw": "",
					"city": "M'Boki"
					},{
					    "name": "M'bigou",
					"code": "MBC",
					"kw": "",
					"city": "M'bigou"
					},{
					    "name": "Maastricht/Aachen DE ",
					"code": "MST",
					"kw": "",
					"city": "Maastricht"
					},{
					    "name": "Mabaruma",
					"code": "USI",
					"kw": "",
					"city": "Mabaruma"
					},{
					    "name": "Mabuiag Island",
					"code": "UBB",
					"kw": "",
					"city": "Mabuiag Island"
					},{
					    "name": "Macae",
					"code": "MEA",
					"kw": "",
					"city": "Macae"
					},{
					    "name": "Macara",
					"code": "MRR",
					"kw": "",
					"city": "Macara"
					},{
					    "name": "Macas",
					"code": "XMS",
					"kw": "",
					"city": "Macas"
					},{
					    "name": "Macau",
					"code": "MFM",
					"kw": "",
					"city": "Macau"
					},{
					    "name": "Maceio",
					"code": "MCZ",
					"kw": "",
					"city": "Maceio"
					},{
					    "name": "Macenta",
					"code": "MCA",
					"kw": "",
					"city": "Macenta"
					},{
					    "name": "Machala",
					"code": "MCH",
					"kw": "",
					"city": "Machala"
					},{
					    "name": "Macomb",
					"code": "MQB",
					"kw": "",
					"city": "Macomb"
					},{
					    "name": "Macon Flightlink Bus Station",
					"code": "QMP",
					"kw": "",
					"city": "Macon"
					},{
					    "name": "Macon Lewis B Wilson ",
					"code": "MCN",
					"kw": "",
					"city": "Macon"
					},{
					    "name": "Madang",
					"code": "MAG",
					"kw": "",
					"city": "Madang"
					},{
					    "name": "Madinah",
					"code": "MED",
					"kw": "",
					"city": "Madinah"
					},{
					    "name": "Madrid Barajas ",
					"code": "MAD",
					"kw": "",
					"city": "Madrid"
					},{
					    "name": "Madurai",
					"code": "IXM",
					"kw": "",
					"city": "Madurai"
					},{
					    "name": "Mae Sot",
					"code": "MAQ",
					"kw": "",
					"city": "Mae Sot"
					},{
					    "name": "Maewo",
					"code": "MWF",
					"kw": "",
					"city": "Maewo"
					},{
					    "name": "Mafeteng",
					"code": "MFC",
					"kw": "",
					"city": "Mafeteng"
					},{
					    "name": "Mafia",
					"code": "MFA",
					"kw": "",
					"city": "Mafia"
					},{
					    "name": "Magadan",
					"code": "GDX",
					"kw": "",
					"city": "Magadan"
					},{
					    "name": "Magangue",
					"code": "MGN",
					"kw": "",
					"city": "Magangue"
					},{
					    "name": "Magdalena",
					"code": "MGD",
					"kw": "",
					"city": "Magdalena"
					},{
					    "name": "Magwe",
					"code": "MWQ",
					"kw": "",
					"city": "Magwe"
					},{
					    "name": "Mahanoro",
					"code": "VVB",
					"kw": "",
					"city": "Mahanoro"
					},{
					    "name": "Mahdia",
					"code": "MHA",
					"kw": "",
					"city": "Mahdia"
					},{
					    "name": "Mahe Island",
					"code": "SEZ",
					"kw": "",
					"city": "Mahe Island"
					},{
					    "name": "Mahendranagar",
					"code": "XMG",
					"kw": "",
					"city": "Mahendranagar"
					},{
					    "name": "Maiana",
					"code": "MNK",
					"kw": "",
					"city": "Maiana"
					},{
					    "name": "Maicao",
					"code": "MCJ",
					"kw": "",
					"city": "Maicao"
					},{
					    "name": "Maiduguri",
					"code": "MIU",
					"kw": "",
					"city": "Maiduguri"
					},{
					    "name": "Maimana",
					"code": "MMZ",
					"kw": "",
					"city": "Maimana"
					},{
					    "name": "Maintirano",
					"code": "MXT",
					"kw": "",
					"city": "Maintirano"
					},{
					    "name": "Maio",
					"code": "MMO",
					"kw": "",
					"city": "Maio"
					},{
					    "name": "Majunga",
					"code": "MJN",
					"kw": "",
					"city": "Majunga"
					},{
					    "name": "Majuro",
					"code": "MAJ",
					"kw": "",
					"city": "Majuro"
					},{
					    "name": "Makabana",
					"code": "KMK",
					"kw": "",
					"city": "Makabana"
					},{
					    "name": "Makale",
					"code": "MQX",
					"kw": "",
					"city": "Makale"
					},{
					    "name": "Makemo",
					"code": "MKP",
					"kw": "",
					"city": "Makemo"
					},{
					    "name": "Makhachkala",
					"code": "MCX",
					"kw": "",
					"city": "Makhachkala"
					},{
					    "name": "Makin Island",
					"code": "MTK",
					"kw": "",
					"city": "Makin Island"
					},{
					    "name": "Makkovik",
					"code": "YMN",
					"kw": "",
					"city": "Makkovik"
					},{
					    "name": "Makokou",
					"code": "MKU",
					"kw": "",
					"city": "Makokou"
					},{
					    "name": "Makoua",
					"code": "MKJ",
					"kw": "",
					"city": "Makoua"
					},{
					    "name": "Makurdi",
					"code": "MDI",
					"kw": "",
					"city": "Makurdi"
					},{
					    "name": "Malabang",
					"code": "MLP",
					"kw": "",
					"city": "Malabang"
					},{
					    "name": "Malabo",
					"code": "SSG",
					"kw": "",
					"city": "Malabo"
					},{
					    "name": "Malacca",
					"code": "MKZ",
					"kw": "",
					"city": "Malacca"
					},{
					    "name": "Malaga",
					"code": "AGP",
					"kw": "",
					"city": "Malaga"
					},{
					    "name": "Malaimbandy",
					"code": "WML",
					"kw": "",
					"city": "Malaimbandy"
					},{
					    "name": "Malakal",
					"code": "MAK",
					"kw": "",
					"city": "Malakal"
					},{
					    "name": "Malalaua",
					"code": "MLQ",
					"kw": "",
					"city": "Malalaua"
					},{
					    "name": "Malang",
					"code": "MLG",
					"kw": "",
					"city": "Malang"
					},{
					    "name": "Malange",
					"code": "MEG",
					"kw": "",
					"city": "Malange"
					},{
					    "name": "Malatya",
					"code": "MLX",
					"kw": "",
					"city": "Malatya"
					},{
					    "name": "Malda",
					"code": "LDA",
					"kw": "",
					"city": "Malda"
					},{
					    "name": "Malden",
					"code": "MAW",
					"kw": "",
					"city": "Malden"
					},{
					    "name": "Male",
					"code": "MLE",
					"kw": "",
					"city": "Male"
					},{
					    "name": "Malekolon",
					"code": "MKN",
					"kw": "",
					"city": "Malekolon"
					},{
					    "name": "Maliana",
					"code": "MPT",
					"kw": "",
					"city": "Maliana"
					},{
					    "name": "Malindi",
					"code": "MYD",
					"kw": "",
					"city": "Malindi"
					},{
					    "name": "Mallacoota",
					"code": "XMC",
					"kw": "",
					"city": "Mallacoota"
					},{
					    "name": "Malmo City Hovercraft",
					"code": "HMA",
					"kw": "",
					"city": "Malmo"
					},{
					    "name": "Malmo Harbour Heliport",
					"code": "JMM",
					"kw": "",
					"city": "Malmo"
					},{
					    "name": "Malmo Sturup ",
					"code": "MMX",
					"kw": "",
					"city": "Malmo"
					},{
					    "name": "Maloelap Island",
					"code": "MAV",
					"kw": "",
					"city": "Maloelap Island"
					},{
					    "name": "Malololailai",
					"code": "PTF",
					"kw": "",
					"city": "Malololailai"
					},{
					    "name": "Malta",
					"code": "MLA",
					"kw": "",
					"city": "Malta"
					},{
					    "name": "Mamai",
					"code": "MAP",
					"kw": "",
					"city": "Mamai"
					},{
					    "name": "Mamburao",
					"code": "MBO",
					"kw": "",
					"city": "Mamburao"
					},{
					    "name": "Mamfe",
					"code": "MMF",
					"kw": "",
					"city": "Mamfe"
					},{
					    "name": "Mammoth Lakes",
					"code": "MMH",
					"kw": "",
					"city": "Mammoth Lakes"
					},{
					    "name": "Mamuju",
					"code": "MJU",
					"kw": "",
					"city": "Mamuju"
					},{
					    "name": "Man",
					"code": "MJC",
					"kw": "",
					"city": "Man"
					},{
					    "name": "Mana Island",
					"code": "MNF",
					"kw": "",
					"city": "Mana Island"
					},{
					    "name": "Managua",
					"code": "MGA",
					"kw": "",
					"city": "Managua"
					},{
					    "name": "Manakara",
					"code": "WVK",
					"kw": "",
					"city": "Manakara"
					},{
					    "name": "Mananara",
					"code": "WMR",
					"kw": "",
					"city": "Mananara"
					},{
					    "name": "Mananjary",
					"code": "MNJ",
					"kw": "",
					"city": "Mananjary"
					},{
					    "name": "Manare",
					"code": "MRM",
					"kw": "",
					"city": "Manare"
					},{
					    "name": "Manassas",
					"code": "MNZ",
					"kw": "",
					"city": "Manassas"
					},{
					    "name": "Manchester International ",
					"code": "MAN",
					"kw": "",
					"city": "Manchester"
					},{
					    "name": "Mandabe",
					"code": "WMD",
					"kw": "",
					"city": "Mandabe"
					},{
					    "name": "Mandalay",
					"code": "MDL",
					"kw": "",
					"city": "Mandalay"
					},{
					    "name": "Mandera",
					"code": "NDE",
					"kw": "",
					"city": "Mandera"
					},{
					    "name": "Mandeville",
					"code": "MVJ",
					"kw": "",
					"city": "Mandeville"
					},{
					    "name": "Mandritsara",
					"code": "WMA",
					"kw": "",
					"city": "Mandritsara"
					},{
					    "name": "Manga",
					"code": "MGP",
					"kw": "",
					"city": "Manga"
					},{
					    "name": "Mangaia Island",
					"code": "MGS",
					"kw": "",
					"city": "Mangaia Island"
					},{
					    "name": "Mangalore",
					"code": "IXE",
					"kw": "",
					"city": "Mangalore"
					},{
					    "name": "Mangole",
					"code": "MAL",
					"kw": "",
					"city": "Mangole"
					},{
					    "name": "Mangrove Cay",
					"code": "MAY",
					"kw": "",
					"city": "Mangrove Cay"
					},{
					    "name": "Manihi",
					"code": "XMH",
					"kw": "",
					"city": "Manihi"
					},{
					    "name": "Manihiki Island",
					"code": "MHX",
					"kw": "",
					"city": "Manihiki Island"
					},{
					    "name": "Manila Ninoy Aquino International ",
					"code": "MNL",
					"kw": "",
					"city": "Manila"
					},{
					    "name": "Maningrida",
					"code": "MNG",
					"kw": "",
					"city": "Maningrida"
					},{
					    "name": "Manizales",
					"code": "MZL",
					"kw": "",
					"city": "Manizales"
					},{
					    "name": "Manja",
					"code": "MJA",
					"kw": "",
					"city": "Manja"
					},{
					    "name": "Mankato Municipal ",
					"code": "MKT",
					"kw": "",
					"city": "Mankato"
					},{
					    "name": "Manley Hot Springs",
					"code": "MLY",
					"kw": "",
					"city": "Manley Hot Springs"
					},{
					    "name": "Manners Creek",
					"code": "MFP",
					"kw": "",
					"city": "Manners Creek"
					},{
					    "name": "Manokwari",
					"code": "MKW",
					"kw": "",
					"city": "Manokwari"
					},{
					    "name": "Manono",
					"code": "MNO",
					"kw": "",
					"city": "Manono"
					},{
					    "name": "Mansa",
					"code": "MNS",
					"kw": "",
					"city": "Mansa"
					},{
					    "name": "Manston",
					"code": "MSE",
					"kw": "",
					"city": "Manston"
					},{
					    "name": "Manta",
					"code": "MEC",
					"kw": "",
					"city": "Manta"
					},{
					    "name": "Manteo",
					"code": "MEO",
					"kw": "",
					"city": "Manteo"
					},{
					    "name": "Manus Island",
					"code": "MAS",
					"kw": "",
					"city": "Manus Island"
					},{
					    "name": "Manzanillo",
					"code": "ZLO",
					"kw": "",
					"city": "Manzanillo"
					},{
					    "name": "Manzanillo",
					"code": "MZO",
					"kw": "",
					"city": "Manzanillo"
					},{
					    "name": "Manzini",
					"code": "MTS",
					"kw": "",
					"city": "Manzini"
					},{
					    "name": "Mao",
					"code": "AMO",
					"kw": "",
					"city": "Mao"
					},{
					    "name": "Maota Savail Is",
					"code": "MXS",
					"kw": "",
					"city": "Maota Savail Is"
					},{
					    "name": "Maputo",
					"code": "MPM",
					"kw": "",
					"city": "Maputo"
					},{
					    "name": "Maquinchao",
					"code": "MQD",
					"kw": "",
					"city": "Maquinchao"
					},{
					    "name": "Mar del Plata",
					"code": "MDQ",
					"kw": "",
					"city": "Mar del Plata"
					},{
					    "name": "Mara Lodges",
					"code": "MRE",
					"kw": "",
					"city": "Mara Lodges"
					},{
					    "name": "Maraba",
					"code": "MAB",
					"kw": "",
					"city": "Maraba"
					},{
					    "name": "Maracaibo",
					"code": "MAR",
					"kw": "",
					"city": "Maracaibo"
					},{
					    "name": "Maracay",
					"code": "MYC",
					"kw": "",
					"city": "Maracay"
					},{
					    "name": "Maradi",
					"code": "MFQ",
					"kw": "",
					"city": "Maradi"
					},{
					    "name": "Marakei",
					"code": "MZK",
					"kw": "",
					"city": "Marakei"
					},{
					    "name": "Marau Island",
					"code": "RUS",
					"kw": "",
					"city": "Marau Island"
					},{
					    "name": "Marble Canyon",
					"code": "MYH",
					"kw": "",
					"city": "Marble Canyon"
					},{
					    "name": "Mare",
					"code": "MEE",
					"kw": "",
					"city": "Mare"
					},{
					    "name": "Mareb",
					"code": "MYN",
					"kw": "",
					"city": "Mareb"
					},{
					    "name": "Margarima",
					"code": "MGG",
					"kw": "",
					"city": "Margarima"
					},{
					    "name": "Margate",
					"code": "MGH",
					"kw": "",
					"city": "Margate"
					},{
					    "name": "Marianske Lazne",
					"code": "MKA",
					"kw": "",
					"city": "Marianske Lazne"
					},{
					    "name": "Maribor",
					"code": "MBX",
					"kw": "",
					"city": "Maribor"
					},{
					    "name": "Marie Galante",
					"code": "GBJ",
					"kw": "",
					"city": "Marie Galante"
					},{
					    "name": "Mariehamn",
					"code": "MHQ",
					"kw": "",
					"city": "Mariehamn"
					},{
					    "name": "Marinduque",
					"code": "MRQ",
					"kw": "",
					"city": "Marinduque"
					},{
					    "name": "Maringa",
					"code": "MGF",
					"kw": "",
					"city": "Maringa"
					},{
					    "name": "Marion",
					"code": "MWA",
					"kw": "",
					"city": "Marion"
					},{
					    "name": "Mariquita",
					"code": "MQU",
					"kw": "",
					"city": "Mariquita"
					},{
					    "name": "Mariscal Estigarribia",
					"code": "ESG",
					"kw": "",
					"city": "Mariscal Estigarribia"
					},{
					    "name": "Mariupol",
					"code": "MPW",
					"kw": "",
					"city": "Mariupol"
					},{
					    "name": "Marlborough",
					"code": "MXG",
					"kw": "",
					"city": "Marlborough"
					},{
					    "name": "Maroantsetra",
					"code": "WMN",
					"kw": "",
					"city": "Maroantsetra"
					},{
					    "name": "Maroua",
					"code": "MVR",
					"kw": "",
					"city": "Maroua"
					},{
					    "name": "Marrakech",
					"code": "RAK",
					"kw": "",
					"city": "Marrakech"
					},{
					    "name": "Marseille",
					"code": "MRS",
					"kw": "",
					"city": "Marseille"
					},{
					    "name": "Marsh Harbour",
					"code": "MHH",
					"kw": "",
					"city": "Marsh Harbour"
					},{
					    "name": "Marshall",
					"code": "MML",
					"kw": "",
					"city": "Marshall"
					},{
					    "name": "Martha's Vineyard",
					"code": "MVY",
					"kw": "",
					"city": "Martha's Vineyard"
					},{
					    "name": "Marudi",
					"code": "MUR",
					"kw": "",
					"city": "Marudi"
					},{
					    "name": "Mary",
					"code": "MYP",
					"kw": "",
					"city": "Mary"
					},{
					    "name": "Mary's Harbour",
					"code": "YMH",
					"kw": "",
					"city": "Mary's Harbour"
					},{
					    "name": "Marysville Yuba County ",
					"code": "MYV",
					"kw": "",
					"city": "Marysville"
					},{
					    "name": "Masa",
					"code": "MBV",
					"kw": "",
					"city": "Masa"
					},{
					    "name": "Masada",
					"code": "MTZ",
					"kw": "",
					"city": "Masada"
					},{
					    "name": "Masasi",
					"code": "XMI",
					"kw": "",
					"city": "Masasi"
					},{
					    "name": "Masbate",
					"code": "MBT",
					"kw": "",
					"city": "Masbate"
					},{
					    "name": "Mascara",
					"code": "MUW",
					"kw": "",
					"city": "Mascara"
					},{
					    "name": "Maseru",
					"code": "MSU",
					"kw": "",
					"city": "Maseru"
					},{
					    "name": "Mashad",
					"code": "MHD",
					"kw": "",
					"city": "Mashad"
					},{
					    "name": "Masindi",
					"code": "KCU",
					"kw": "",
					"city": "Masindi"
					},{
					    "name": "Masirah",
					"code": "MSH",
					"kw": "",
					"city": "Masirah"
					},{
					    "name": "Masterton",
					"code": "MRO",
					"kw": "",
					"city": "Masterton"
					},{
					    "name": "Masvingo",
					"code": "MVZ",
					"kw": "",
					"city": "Masvingo"
					},{
					    "name": "Matadi",
					"code": "MAT",
					"kw": "",
					"city": "Matadi"
					},{
					    "name": "Mataiva",
					"code": "MVT",
					"kw": "",
					"city": "Mataiva"
					},{
					    "name": "Matam",
					"code": "MAX",
					"kw": "",
					"city": "Matam"
					},{
					    "name": "Matamoros",
					"code": "MAM",
					"kw": "",
					"city": "Matamoros"
					},{
					    "name": "Mataram",
					"code": "AMI",
					"kw": "",
					"city": "Mataram"
					},{
					    "name": "Mati",
					"code": "MXI",
					"kw": "",
					"city": "Mati"
					},{
					    "name": "Mato Grosso",
					"code": "MTG",
					"kw": "",
					"city": "Mato Grosso"
					},{
					    "name": "Matsu",
					"code": "MFK",
					"kw": "",
					"city": "Matsu"
					},{
					    "name": "Matthews Ridge",
					"code": "MWJ",
					"kw": "",
					"city": "Matthews Ridge"
					},{
					    "name": "Maturin",
					"code": "MUN",
					"kw": "",
					"city": "Maturin"
					},{
					    "name": "Mauke Island",
					"code": "MUK",
					"kw": "",
					"city": "Mauke Island"
					},{
					    "name": "Maulmyine",
					"code": "MNU",
					"kw": "",
					"city": "Maulmyine"
					},{
					    "name": "Maumere",
					"code": "MOF",
					"kw": "",
					"city": "Maumere"
					},{
					    "name": "Maun",
					"code": "MUB",
					"kw": "",
					"city": "Maun"
					},{
					    "name": "Maupiti Island",
					"code": "MAU",
					"kw": "",
					"city": "Maupiti Island"
					},{
					    "name": "Mauritius",
					"code": "MRU",
					"kw": "",
					"city": "Mauritius"
					},{
					    "name": "Mayaguana",
					"code": "MYG",
					"kw": "",
					"city": "Mayaguana"
					},{
					    "name": "Mayaguez",
					"code": "MAZ",
					"kw": "",
					"city": "Mayaguez"
					},{
					    "name": "Mayoumba",
					"code": "MYB",
					"kw": "",
					"city": "Mayoumba"
					},{
					    "name": "Mazar-I-Sharif",
					"code": "MZR",
					"kw": "",
					"city": "Mazar-I-Sharif"
					},{
					    "name": "Mazatlan",
					"code": "MZT",
					"kw": "",
					"city": "Mazatlan"
					},{
					    "name": "Mbala",
					"code": "MMQ",
					"kw": "",
					"city": "Mbala"
					},{
					    "name": "Mbambanakira",
					"code": "MBU",
					"kw": "",
					"city": "Mbambanakira"
					},{
					    "name": "Mbandaka",
					"code": "MDK",
					"kw": "",
					"city": "Mbandaka"
					},{
					    "name": "Mbarara",
					"code": "MBQ",
					"kw": "",
					"city": "Mbarara"
					},{
					    "name": "Mbeya",
					"code": "MBI",
					"kw": "",
					"city": "Mbeya"
					},{
					    "name": "Mbuji-Mayi",
					"code": "MJM",
					"kw": "",
					"city": "Mbuji-Mayi"
					},{
					    "name": "McCook",
					"code": "MCK",
					"kw": "",
					"city": "McCook"
					},{
					    "name": "Meadow Lake",
					"code": "YLJ",
					"kw": "",
					"city": "Meadow Lake"
					},{
					    "name": "Meadville",
					"code": "MEJ",
					"kw": "",
					"city": "Meadville"
					},{
					    "name": "Medan",
					"code": "MES",
					"kw": "",
					"city": "Medan"
					},{
					    "name": "Medellin Enrique Olaya Herrerra ",
					"code": "EOH",
					"kw": "",
					"city": "Medellin"
					},{
					    "name": "Medellin Jose Maria Cordova Intl",
					"code": "MDE",
					"kw": "",
					"city": "Medellin"
					},{
					    "name": "Medicine Hat",
					"code": "YXH",
					"kw": "",
					"city": "Medicine Hat"
					},{
					    "name": "Meekatharra",
					"code": "MKR",
					"kw": "",
					"city": "Meekatharra"
					},{
					    "name": "Megeve",
					"code": "MVV",
					"kw": "",
					"city": "Megeve"
					},{
					    "name": "Meghauli",
					"code": "MEY",
					"kw": "",
					"city": "Meghauli"
					},{
					    "name": "Mehamn",
					"code": "MEH",
					"kw": "",
					"city": "Mehamn"
					},{
					    "name": "Mekambo",
					"code": "MKB",
					"kw": "",
					"city": "Mekambo"
					},{
					    "name": "Mekane Selam",
					"code": "MKS",
					"kw": "",
					"city": "Mekane Selam"
					},{
					    "name": "Mekoryuk",
					"code": "MYU",
					"kw": "",
					"city": "Mekoryuk"
					},{
					    "name": "Melbourne Airport",
					"code": "MEL",
					"kw": "",
					"city": "Melbourne"
					},{
					    "name": "Melbourne Essendon ",
					"code": "MEB",
					"kw": "",
					"city": "Melbourne"
					},{
					    "name": "Melchor Mencos",
					"code": "MCR",
					"kw": "",
					"city": "Melchor Mencos"
					},{
					    "name": "Melilla",
					"code": "MLN",
					"kw": "",
					"city": "Melilla"
					},{
					    "name": "Melo",
					"code": "MLZ",
					"kw": "",
					"city": "Melo"
					},{
					    "name": "Memambetsu",
					"code": "MMB",
					"kw": "",
					"city": "Memambetsu"
					},{
					    "name": "Memphis International ",
					"code": "MEM",
					"kw": "",
					"city": "Memphis"
					},{
					    "name": "Mena",
					"code": "MZX",
					"kw": "",
					"city": "Mena"
					},{
					    "name": "Mende",
					"code": "MEN",
					"kw": "",
					"city": "Mende"
					},{
					    "name": "Mendez",
					"code": "MZD",
					"kw": "",
					"city": "Mendez"
					},{
					    "name": "Mendi",
					"code": "NDM",
					"kw": "",
					"city": "Mendi"
					},{
					    "name": "Mendi",
					"code": "MDU",
					"kw": "",
					"city": "Mendi"
					},{
					    "name": "Mendoza",
					"code": "MDZ",
					"kw": "",
					"city": "Mendoza"
					},{
					    "name": "Menyamya",
					"code": "MYX",
					"kw": "",
					"city": "Menyamya"
					},{
					    "name": "Merauke",
					"code": "MKQ",
					"kw": "",
					"city": "Merauke"
					},{
					    "name": "Merced Municipal ",
					"code": "MCE",
					"kw": "",
					"city": "Merced"
					},{
					    "name": "Merdey",
					"code": "RDE",
					"kw": "",
					"city": "Merdey"
					},{
					    "name": "Merida",
					"code": "MID",
					"kw": "",
					"city": "Merida"
					},{
					    "name": "Merida",
					"code": "MRD",
					"kw": "",
					"city": "Merida"
					},{
					    "name": "Meridian",
					"code": "MEI",
					"kw": "",
					"city": "Meridian"
					},{
					    "name": "Merimbula",
					"code": "MIM",
					"kw": "",
					"city": "Merimbula"
					},{
					    "name": "Merluna",
					"code": "MLV",
					"kw": "",
					"city": "Merluna"
					},{
					    "name": "Merritt",
					"code": "YMB",
					"kw": "",
					"city": "Merritt"
					},{
					    "name": "Mersing",
					"code": "MEP",
					"kw": "",
					"city": "Mersing"
					},{
					    "name": "Mesa Falcon Field ",
					"code": "MSC",
					"kw": "",
					"city": "Mesa"
					},{
					    "name": "Messina",
					"code": "MEZ",
					"kw": "",
					"city": "Messina"
					},{
					    "name": "Metlakatla",
					"code": "MTM",
					"kw": "",
					"city": "Metlakatla"
					},{
					    "name": "Mexicali",
					"code": "MXL",
					"kw": "",
					"city": "Mexicali"
					},{
					    "name": "Mexico City International ",
					"code": "MEX",
					"kw": "",
					"city": "Mexico City"
					},{
					    "name": "Meyers Chuck",
					"code": "WMK",
					"kw": "",
					"city": "Meyers Chuck"
					},{
					    "name": "Mfuwe",
					"code": "MFU",
					"kw": "",
					"city": "Mfuwe"
					},{
					    "name": "Miandrivazo",
					"code": "ZVA",
					"kw": "",
					"city": "Miandrivazo"
					},{
					    "name": "Mianwali",
					"code": "MWD",
					"kw": "",
					"city": "Mianwali"
					},{
					    "name": "Michigan City",
					"code": "MGC",
					"kw": "",
					"city": "Michigan City"
					},{
					    "name": "Mikkeli",
					"code": "MIK",
					"kw": "",
					"city": "Mikkeli"
					},{
					    "name": "Mikonos",
					"code": "JMK",
					"kw": "",
					"city": "Mikonos"
					},{
					    "name": "Milan Orio al Serio",
					"code": "BGY",
					"kw": "",
					"city": "Milan"
					},{
					    "name": "Milan Malpensa ",
					"code": "MXP",
					"kw": "",
					"city": "Milan"
					},{
					    "name": "Milan Linate ",
					"code": "LIN",
					"kw": "",
					"city": "Milan"
					},{
					    "name": "Mildura",
					"code": "MQL",
					"kw": "",
					"city": "Mildura"
					},{
					    "name": "Miles City",
					"code": "MLS",
					"kw": "",
					"city": "Miles City"
					},{
					    "name": "Milford Sound",
					"code": "MFN",
					"kw": "",
					"city": "Milford Sound"
					},{
					    "name": "Mili Island",
					"code": "MIJ",
					"kw": "",
					"city": "Mili Island"
					},{
					    "name": "Milingimbi",
					"code": "MGT",
					"kw": "",
					"city": "Milingimbi"
					},{
					    "name": "Millicent",
					"code": "MLR",
					"kw": "",
					"city": "Millicent"
					},{
					    "name": "Milos",
					"code": "MLO",
					"kw": "",
					"city": "Milos"
					},{
					    "name": "Minami Daito",
					"code": "MMD",
					"kw": "",
					"city": "Minami Daito"
					},{
					    "name": "Minatitlan",
					"code": "MTT",
					"kw": "",
					"city": "Minatitlan"
					},{
					    "name": "Mindik",
					"code": "MXK",
					"kw": "",
					"city": "Mindik"
					},{
					    "name": "Mindiptana",
					"code": "MDP",
					"kw": "",
					"city": "Mindiptana"
					},{
					    "name": "Mineralnye Vody",
					"code": "MRV",
					"kw": "",
					"city": "Mineralnye Vody"
					},{
					    "name": "Minj",
					"code": "MZN",
					"kw": "",
					"city": "Minj"
					},{
					    "name": "Minlaton",
					"code": "XML",
					"kw": "",
					"city": "Minlaton"
					},{
					    "name": "Minna",
					"code": "MXJ",
					"kw": "",
					"city": "Minna"
					},{
					    "name": "Minneapolis Downtown H/P",
					"code": "JDT",
					"kw": "",
					"city": "Minneapolis/St Paul"
					},{
					    "name": "Minneapolis Flying Cloud ",
					"code": "FCM",
					"kw": "",
					"city": "Minneapolis/St Paul"
					},{
					    "name": "Minneapolis Crystal ",
					"code": "MIC",
					"kw": "",
					"city": "Minneapolis/St Paul"
					},{
					    "name": "Minneapolis International ",
					"code": "MSP",
					"kw": "",
					"city": "Minneapolis/St Paul"
					},{
					    "name": "Minnipa",
					"code": "MIN",
					"kw": "",
					"city": "Minnipa"
					},{
					    "name": "Minsk International Apt 1",
					"code": "MHP",
					"kw": "",
					"city": "Minsk"
					},{
					    "name": "Minsk International Apt 2",
					"code": "MSQ",
					"kw": "",
					"city": "Minsk"
					},{
					    "name": "Minvoul",
					"code": "MVX",
					"kw": "",
					"city": "Minvoul"
					},{
					    "name": "Miquelon",
					"code": "MQC",
					"kw": "",
					"city": "Miquelon"
					},{
					    "name": "Miracema Do Norte",
					"code": "NTM",
					"kw": "",
					"city": "Miracema Do Norte"
					},{
					    "name": "Miraflores",
					"code": "MFS",
					"kw": "",
					"city": "Miraflores"
					},{
					    "name": "Miramichi",
					"code": "YCH",
					"kw": "",
					"city": "Miramichi"
					},{
					    "name": "Miri",
					"code": "MYY",
					"kw": "",
					"city": "Miri"
					},{
					    "name": "Mirpur Khas",
					"code": "MPD",
					"kw": "",
					"city": "Mirpur Khas"
					},{
					    "name": "Misawa",
					"code": "MSJ",
					"kw": "",
					"city": "Misawa"
					},{
					    "name": "Misima Island",
					"code": "MIS",
					"kw": "",
					"city": "Misima Island"
					},{
					    "name": "Missoula",
					"code": "MSO",
					"kw": "",
					"city": "Missoula"
					},{
					    "name": "Misurata",
					"code": "MRA",
					"kw": "",
					"city": "Misurata"
					},{
					    "name": "Mitchell",
					"code": "MHE",
					"kw": "",
					"city": "Mitchell"
					},{
					    "name": "Mitiaro Island",
					"code": "MOI",
					"kw": "",
					"city": "Mitiaro Island"
					},{
					    "name": "Mitiga",
					"code": "MJI",
					"kw": "",
					"city": "Mitiga"
					},{
					    "name": "Mitu",
					"code": "MVP",
					"kw": "",
					"city": "Mitu"
					},{
					    "name": "Mitzic",
					"code": "MZC",
					"kw": "",
					"city": "Mitzic"
					},{
					    "name": "Miyake Jima",
					"code": "MYE",
					"kw": "",
					"city": "Miyake Jima"
					},{
					    "name": "Miyako Jima",
					"code": "MMY",
					"kw": "",
					"city": "Miyako Jima"
					},{
					    "name": "Miyazaki",
					"code": "KMI",
					"kw": "",
					"city": "Miyazaki"
					},{
					    "name": "Mizan Teferi",
					"code": "MTF",
					"kw": "",
					"city": "Mizan Teferi"
					},{
					    "name": "Mkambati",
					"code": "MBM",
					"kw": "",
					"city": "Mkambati"
					},{
					    "name": "Mmabatho",
					"code": "MBD",
					"kw": "",
					"city": "Mmabatho"
					},{
					    "name": "Mo I Rana",
					"code": "MQN",
					"kw": "",
					"city": "Mo I Rana"
					},{
					    "name": "Moa",
					"code": "MOA",
					"kw": "",
					"city": "Moa"
					},{
					    "name": "Moab",
					"code": "CNY",
					"kw": "",
					"city": "Moab"
					},{
					    "name": "Moabi",
					"code": "MGX",
					"kw": "",
					"city": "Moabi"
					},{
					    "name": "Moanda",
					"code": "MNB",
					"kw": "",
					"city": "Moanda"
					},{
					    "name": "Mobile Municipal ",
					"code": "MOB",
					"kw": "",
					"city": "Mobile"
					},{
					    "name": "Mocimboa da Praia",
					"code": "MZB",
					"kw": "",
					"city": "Mocimboa da Praia"
					},{
					    "name": "Mocoa",
					"code": "VGZ",
					"kw": "",
					"city": "Mocoa"
					},{
					    "name": "Modesto",
					"code": "MOD",
					"kw": "",
					"city": "Modesto"
					},{
					    "name": "Mogadishu",
					"code": "MGQ",
					"kw": "",
					"city": "Mogadishu"
					},{
					    "name": "Mohenjodaro",
					"code": "MJD",
					"kw": "",
					"city": "Mohenjodaro"
					},{
					    "name": "Mojave",
					"code": "MHV",
					"kw": "",
					"city": "Mojave"
					},{
					    "name": "Mokhotlong",
					"code": "MKH",
					"kw": "",
					"city": "Mokhotlong"
					},{
					    "name": "Molde",
					"code": "MOL",
					"kw": "",
					"city": "Molde"
					},{
					    "name": "Moline",
					"code": "MLI",
					"kw": "",
					"city": "Moline"
					},{
					    "name": "Mombasa",
					"code": "MBA",
					"kw": "",
					"city": "Mombasa"
					},{
					    "name": "Monastir",
					"code": "MIR",
					"kw": "",
					"city": "Monastir"
					},{
					    "name": "Monbetsu",
					"code": "MBE",
					"kw": "",
					"city": "Monbetsu"
					},{
					    "name": "Monclova",
					"code": "LOV",
					"kw": "",
					"city": "Monclova"
					},{
					    "name": "Monfort",
					"code": "MFB",
					"kw": "",
					"city": "Monfort"
					},{
					    "name": "Mong Hsat",
					"code": "MOG",
					"kw": "",
					"city": "Mong Hsat"
					},{
					    "name": "Mong Ton",
					"code": "MGK",
					"kw": "",
					"city": "Mong Ton"
					},{
					    "name": "Mongo",
					"code": "MVO",
					"kw": "",
					"city": "Mongo"
					},{
					    "name": "Mongu",
					"code": "MNR",
					"kw": "",
					"city": "Mongu"
					},{
					    "name": "Monkey Bay",
					"code": "MYZ",
					"kw": "",
					"city": "Monkey Bay"
					},{
					    "name": "Monkey Mountain",
					"code": "MYM",
					"kw": "",
					"city": "Monkey Mountain"
					},{
					    "name": "Mono",
					"code": "MNY",
					"kw": "",
					"city": "Mono"
					},{
					    "name": "Monroe",
					"code": "MLU",
					"kw": "",
					"city": "Monroe"
					},{
					    "name": "Monrovia Roberts International ",
					"code": "ROB",
					"kw": "",
					"city": "Monrovia"
					},{
					    "name": "Monrovia Sprigg-Payne ",
					"code": "MLW",
					"kw": "",
					"city": "Monrovia"
					},{
					    "name": "Monte Alegre",
					"code": "MTE",
					"kw": "",
					"city": "Monte Alegre"
					},{
					    "name": "Monte Carlo",
					"code": "MCM",
					"kw": "",
					"city": "Monte Carlo"
					},{
					    "name": "Monte Caseros",
					"code": "MCS",
					"kw": "",
					"city": "Monte Caseros"
					},{
					    "name": "Monte Libano",
					"code": "MTB",
					"kw": "",
					"city": "Monte Libano"
					},{
					    "name": "Montego Bay",
					"code": "MBJ",
					"kw": "",
					"city": "Montego Bay"
					},{
					    "name": "Monterey Peninsula ",
					"code": "MRY",
					"kw": "",
					"city": "Monterey"
					},{
					    "name": "Monteria",
					"code": "MTR",
					"kw": "",
					"city": "Monteria"
					},{
					    "name": "Monterrey General Mariano Escobedo ",
					"code": "MTY",
					"kw": "",
					"city": "Monterrey"
					},{
					    "name": "Montes Claros",
					"code": "MOC",
					"kw": "",
					"city": "Montes Claros"
					},{
					    "name": "Montevideo",
					"code": "MVD",
					"kw": "",
					"city": "Montevideo"
					},{
					    "name": "Montgomery Dannelly Field",
					"code": "MGM",
					"kw": "",
					"city": "Montgomery"
					},{
					    "name": "Montlucon",
					"code": "MCU",
					"kw": "",
					"city": "Montlucon"
					},{
					    "name": "Montrose",
					"code": "MTJ",
					"kw": "",
					"city": "Montrose"
					},{
					    "name": "Moomba",
					"code": "MOO",
					"kw": "",
					"city": "Moomba"
					},{
					    "name": "Moorea",
					"code": "MOZ",
					"kw": "",
					"city": "Moorea"
					},{
					    "name": "Mopti",
					"code": "MZI",
					"kw": "",
					"city": "Mopti"
					},{
					    "name": "Mora",
					"code": "MXX",
					"kw": "",
					"city": "Mora"
					},{
					    "name": "Morafenobe",
					"code": "TVA",
					"kw": "",
					"city": "Morafenobe"
					},{
					    "name": "Morehead",
					"code": "MHY",
					"kw": "",
					"city": "Morehead"
					},{
					    "name": "Morelia",
					"code": "MLM",
					"kw": "",
					"city": "Morelia"
					},{
					    "name": "Morichal",
					"code": "MHF",
					"kw": "",
					"city": "Morichal"
					},{
					    "name": "Morlaix",
					"code": "MXN",
					"kw": "",
					"city": "Morlaix"
					},{
					    "name": "Morobe",
					"code": "OBM",
					"kw": "",
					"city": "Morobe"
					},{
					    "name": "Morombe",
					"code": "MXM",
					"kw": "",
					"city": "Morombe"
					},{
					    "name": "Morondava",
					"code": "MOQ",
					"kw": "",
					"city": "Morondava"
					},{
					    "name": "Moroni International Prince Said",
					"code": "HAH",
					"kw": "",
					"city": "Moroni"
					},{
					    "name": "Moroni Iconi ",
					"code": "YVA",
					"kw": "",
					"city": "Moroni"
					},{
					    "name": "Morotai Island",
					"code": "OTI",
					"kw": "",
					"city": "Morotai Island"
					},{
					    "name": "Moscow Vnukovo ",
					"code": "VKO",
					"kw": "",
					"city": "Moscow"
					},{
					    "name": "Moscow Domodedovo ",
					"code": "DME",
					"kw": "",
					"city": "Moscow"
					},{
					    "name": "Moscow Sheremetyevo ",
					"code": "SVO",
					"kw": "",
					"city": "Moscow"
					},{
					    "name": "Moscow Bykovo ",
					"code": "BKA",
					"kw": "",
					"city": "Moscow"
					},{
					    "name": "Mosjoen",
					"code": "MJF",
					"kw": "",
					"city": "Mosjoen"
					},{
					    "name": "Mossendjo",
					"code": "MSX",
					"kw": "",
					"city": "Mossendjo"
					},{
					    "name": "Mostar",
					"code": "OMO",
					"kw": "",
					"city": "Mostar"
					},{
					    "name": "Mosteiros",
					"code": "MTI",
					"kw": "",
					"city": "Mosteiros"
					},{
					    "name": "Mosul",
					"code": "OSM",
					"kw": "",
					"city": "Mosul"
					},{
					    "name": "Mota",
					"code": "OTA",
					"kw": "",
					"city": "Mota"
					},{
					    "name": "Mota Lava",
					"code": "MTV",
					"kw": "",
					"city": "Mota Lava"
					},{
					    "name": "Motueka",
					"code": "MZP",
					"kw": "",
					"city": "Motueka"
					},{
					    "name": "Moudjeria",
					"code": "MOM",
					"kw": "",
					"city": "Moudjeria"
					},{
					    "name": "Mougulu",
					"code": "GUV",
					"kw": "",
					"city": "Mougulu"
					},{
					    "name": "Mouila",
					"code": "MJL",
					"kw": "",
					"city": "Mouila"
					},{
					    "name": "Moultrie Thomasville ",
					"code": "MGR",
					"kw": "",
					"city": "Moultrie"
					},{
					    "name": "Moundou",
					"code": "MQQ",
					"kw": "",
					"city": "Moundou"
					},{
					    "name": "Mount Aue",
					"code": "UAE",
					"kw": "",
					"city": "Mount Aue"
					},{
					    "name": "Mount Gambier",
					"code": "MGB",
					"kw": "",
					"city": "Mount Gambier"
					},{
					    "name": "Mount Hagen",
					"code": "HGU",
					"kw": "",
					"city": "Mount Hagen"
					},{
					    "name": "Mount Isa",
					"code": "ISA",
					"kw": "",
					"city": "Mount Isa"
					},{
					    "name": "Mountain Home",
					"code": "WMH",
					"kw": "",
					"city": "Mountain Home"
					},{
					    "name": "Mountain Village",
					"code": "MOU",
					"kw": "",
					"city": "Mountain Village"
					},{
					    "name": "Moyale",
					"code": "MYS",
					"kw": "",
					"city": "Moyale"
					},{
					    "name": "Moyobamba",
					"code": "MBP",
					"kw": "",
					"city": "Moyobamba"
					},{
					    "name": "Mpacha",
					"code": "MPA",
					"kw": "",
					"city": "Mpacha"
					},{
					    "name": "Mt Pleasant",
					"code": "MSD",
					"kw": "",
					"city": "Mt Pleasant"
					},{
					    "name": "Mtwara",
					"code": "MYW",
					"kw": "",
					"city": "Mtwara"
					},{
					    "name": "Mueo",
					"code": "PDC",
					"kw": "",
					"city": "Mueo"
					},{
					    "name": "Mui",
					"code": "MUJ",
					"kw": "",
					"city": "Mui"
					},{
					    "name": "Mukeiras",
					"code": "UKR",
					"kw": "",
					"city": "Mukeiras"
					},{
					    "name": "Mulia",
					"code": "LII",
					"kw": "",
					"city": "Mulia"
					},{
					    "name": "Multan",
					"code": "MUX",
					"kw": "",
					"city": "Multan"
					},{
					    "name": "Mumbai",
					"code": "BOM",
					"kw": "",
					"city": "Mumbai"
					},{
					    "name": "Mumias",
					"code": "MUM",
					"kw": "",
					"city": "Mumias"
					},{
					    "name": "Muncie",
					"code": "MIE",
					"kw": "",
					"city": "Muncie"
					},{
					    "name": "Munda",
					"code": "MUA",
					"kw": "",
					"city": "Munda"
					},{
					    "name": "Mungeranie",
					"code": "MNE",
					"kw": "",
					"city": "Mungeranie"
					},{
					    "name": "Munich Augsburg ",
					"code": "AGB",
					"kw": "",
					"city": "Munich"
					},{
					    "name": "Munich International Airport",
					"code": "MUC",
					"kw": "",
					"city": "Munich"
					},{
					    "name": "Munster",
					"code": "FMO",
					"kw": "",
					"city": "Munster"
					},{
					    "name": "Murcia",
					"code": "MJV",
					"kw": "",
					"city": "Murcia"
					},{
					    "name": "Murmansk",
					"code": "MMK",
					"kw": "",
					"city": "Murmansk"
					},{
					    "name": "Muscat",
					"code": "MCT",
					"kw": "",
					"city": "Muscat"
					},{
					    "name": "Muscle Shoals",
					"code": "MSL",
					"kw": "",
					"city": "Muscle Shoals"
					},{
					    "name": "Musoma",
					"code": "MUZ",
					"kw": "",
					"city": "Musoma"
					},{
					    "name": "Mussau",
					"code": "MWU",
					"kw": "",
					"city": "Mussau"
					},{
					    "name": "Mustique",
					"code": "MQS",
					"kw": "",
					"city": "Mustique"
					},{
					    "name": "Muting",
					"code": "MUF",
					"kw": "",
					"city": "Muting"
					},{
					    "name": "Muzaffarabad",
					"code": "MFG",
					"kw": "",
					"city": "Muzaffarabad"
					},{
					    "name": "Mwanza",
					"code": "MWZ",
					"kw": "",
					"city": "Mwanza"
					},{
					    "name": "Myeik",
					"code": "MGZ",
					"kw": "",
					"city": "Myeik"
					},{
					    "name": "Myitkyina",
					"code": "MYT",
					"kw": "",
					"city": "Myitkyina"
					},{
					    "name": "Myrtle Beach AFB",
					"code": "MYR",
					"kw": "",
					"city": "Myrtle Beach"
					},{
					    "name": "Mysore",
					"code": "MYQ",
					"kw": "",
					"city": "Mysore"
					},{
					    "name": "Mytilene",
					"code": "MJT",
					"kw": "",
					"city": "Mytilene"
					},{
					    "name": "Myvatn",
					"code": "MVA",
					"kw": "",
					"city": "Myvatn"
					},{
					    "name": "Mzamba",
					"code": "MZF",
					"kw": "",
					"city": "Mzamba"
					},{
					    "name": "Mzuzu",
					"code": "ZZU",
					"kw": "",
					"city": "Mzuzu"
					},{
					    "name": "N'Zeto",
					"code": "ARZ",
					"kw": "",
					"city": "N'Zeto"
					},{
					    "name": "N'dende",
					"code": "KDN",
					"kw": "",
					"city": "N'dende"
					},{
					    "name": "N'djole",
					"code": "KDJ",
					"kw": "",
					"city": "N'djole"
					},{
					    "name": "Naberevnye Chelny",
					"code": "NBC",
					"kw": "",
					"city": "Naberevnye Chelny"
					},{
					    "name": "Nabire",
					"code": "NBX",
					"kw": "",
					"city": "Nabire"
					},{
					    "name": "Nachingwea",
					"code": "NCH",
					"kw": "",
					"city": "Nachingwea"
					},{
					    "name": "Nadi",
					"code": "NAN",
					"kw": "",
					"city": "Nadi"
					},{
					    "name": "Naga",
					"code": "WNP",
					"kw": "",
					"city": "Naga"
					},{
					    "name": "Nagasaki",
					"code": "NGS",
					"kw": "",
					"city": "Nagasaki"
					},{
					    "name": "Nagoya",
					"code": "NGO",
					"kw": "",
					"city": "Nagoya"
					},{
					    "name": "Nagpur",
					"code": "NAG",
					"kw": "",
					"city": "Nagpur"
					},{
					    "name": "Naha",
					"code": "NAH",
					"kw": "",
					"city": "Naha"
					},{
					    "name": "Nain",
					"code": "YDP",
					"kw": "",
					"city": "Nain"
					},{
					    "name": "Nairobi Wilson ",
					"code": "WIL",
					"kw": "",
					"city": "Nairobi"
					},{
					    "name": "Nairobi Jomo Kenyatta International ",
					"code": "NBO",
					"kw": "",
					"city": "Nairobi"
					},{
					    "name": "Nakhon Phanom",
					"code": "KOP",
					"kw": "",
					"city": "Nakhon Phanom"
					},{
					    "name": "Nakhon Ratchasima",
					"code": "NAK",
					"kw": "",
					"city": "Nakhon Ratchasima"
					},{
					    "name": "Nakhon Si Thammarat",
					"code": "NST",
					"kw": "",
					"city": "Nakhon Si Thammarat"
					},{
					    "name": "Namatanai",
					"code": "ATN",
					"kw": "",
					"city": "Namatanai"
					},{
					    "name": "Namdrik Island",
					"code": "NDK",
					"kw": "",
					"city": "Namdrik Island"
					},{
					    "name": "Namibe",
					"code": "MSZ",
					"kw": "",
					"city": "Namibe"
					},{
					    "name": "Namlea",
					"code": "NAM",
					"kw": "",
					"city": "Namlea"
					},{
					    "name": "Nampula",
					"code": "APL",
					"kw": "",
					"city": "Nampula"
					},{
					    "name": "Namsang",
					"code": "NMS",
					"kw": "",
					"city": "Namsang"
					},{
					    "name": "Namsos",
					"code": "OSY",
					"kw": "",
					"city": "Namsos"
					},{
					    "name": "Namtu",
					"code": "NMT",
					"kw": "",
					"city": "Namtu"
					},{
					    "name": "Namutoni",
					"code": "NNI",
					"kw": "",
					"city": "Namutoni"
					},{
					    "name": "Nan",
					"code": "NNT",
					"kw": "",
					"city": "Nan"
					},{
					    "name": "Nanisivik",
					"code": "YSR",
					"kw": "",
					"city": "Nanisivik"
					},{
					    "name": "Nanki Shirahama",
					"code": "SHM",
					"kw": "",
					"city": "Nanki Shirahama"
					},{
					    "name": "Nankina",
					"code": "NKN",
					"kw": "",
					"city": "Nankina"
					},{
					    "name": "Nanortalik",
					"code": "JNN",
					"kw": "",
					"city": "Nanortalik"
					},{
					    "name": "Nantes Atlantique Airport",
					"code": "NTE",
					"kw": "",
					"city": "Nantes"
					},{
					    "name": "Nantucket",
					"code": "ACK",
					"kw": "",
					"city": "Nantucket"
					},{
					    "name": "Nanuque",
					"code": "NNU",
					"kw": "",
					"city": "Nanuque"
					},{
					    "name": "Napa",
					"code": "APC",
					"kw": "",
					"city": "Napa"
					},{
					    "name": "Napier-Hastings",
					"code": "NPE",
					"kw": "",
					"city": "Napier-Hastings"
					},{
					    "name": "Naples Mergellina Rail Station",
					"code": "ZMI",
					"kw": "",
					"city": "Naples"
					},{
					    "name": "Naples Capodichino ",
					"code": "NAP",
					"kw": "",
					"city": "Naples"
					},{
					    "name": "Napuka Island",
					"code": "NAU",
					"kw": "",
					"city": "Napuka Island"
					},{
					    "name": "Nara",
					"code": "NRM",
					"kw": "",
					"city": "Nara"
					},{
					    "name": "Narathiwat",
					"code": "NAW",
					"kw": "",
					"city": "Narathiwat"
					},{
					    "name": "Nare",
					"code": "NAR",
					"kw": "",
					"city": "Nare"
					},{
					    "name": "Narsaq",
					"code": "JNS",
					"kw": "",
					"city": "Narsaq"
					},{
					    "name": "Narsarsuaq",
					"code": "UAK",
					"kw": "",
					"city": "Narsarsuaq"
					},{
					    "name": "Narvik",
					"code": "NVK",
					"kw": "",
					"city": "Narvik"
					},{
					    "name": "Nashville",
					"code": "BNA",
					"kw": "",
					"city": "Nashville"
					},{
					    "name": "Nasik",
					"code": "ISK",
					"kw": "",
					"city": "Nasik"
					},{
					    "name": "Nassau SPB",
					"code": "WZY",
					"kw": "",
					"city": "Nassau"
					},{
					    "name": "Nassau International ",
					"code": "NAS",
					"kw": "",
					"city": "Nassau"
					},{
					    "name": "Nassau Paradise Island",
					"code": "PID",
					"kw": "",
					"city": "Nassau"
					},{
					    "name": "Natitingou",
					"code": "NAE",
					"kw": "",
					"city": "Natitingou"
					},{
					    "name": "Nauru Island",
					"code": "INU",
					"kw": "",
					"city": "Nauru Island"
					},{
					    "name": "Navegantes",
					"code": "NVT",
					"kw": "",
					"city": "Navegantes"
					},{
					    "name": "Nawabshah",
					"code": "WNS",
					"kw": "",
					"city": "Nawabshah"
					},{
					    "name": "Ndele",
					"code": "NDL",
					"kw": "",
					"city": "Ndele"
					},{
					    "name": "Ndjamena",
					"code": "NDJ",
					"kw": "",
					"city": "Ndjamena"
					},{
					    "name": "Ndola",
					"code": "NLA",
					"kw": "",
					"city": "Ndola"
					},{
					    "name": "Necochea",
					"code": "NEC",
					"kw": "",
					"city": "Necochea"
					},{
					    "name": "Necocli",
					"code": "NCI",
					"kw": "",
					"city": "Necocli"
					},{
					    "name": "Neerlerit Inaat",
					"code": "CNP",
					"kw": "",
					"city": "Neerlerit Inaat"
					},{
					    "name": "Negage",
					"code": "GXG",
					"kw": "",
					"city": "Negage"
					},{
					    "name": "Negarbo",
					"code": "GBF",
					"kw": "",
					"city": "Negarbo"
					},{
					    "name": "Negril",
					"code": "NEG",
					"kw": "",
					"city": "Negril"
					},{
					    "name": "Neiva",
					"code": "NVA",
					"kw": "",
					"city": "Neiva"
					},{
					    "name": "Nejran",
					"code": "EAM",
					"kw": "",
					"city": "Nejran"
					},{
					    "name": "Nekemt",
					"code": "NEK",
					"kw": "",
					"city": "Nekemt"
					},{
					    "name": "Nema",
					"code": "EMN",
					"kw": "",
					"city": "Nema"
					},{
					    "name": "Nepalganj",
					"code": "KEP",
					"kw": "",
					"city": "Nepalganj"
					},{
					    "name": "Neuquen",
					"code": "NQN",
					"kw": "",
					"city": "Neuquen"
					},{
					    "name": "Nevers",
					"code": "NVS",
					"kw": "",
					"city": "Nevers"
					},{
					    "name": "New Bedford",
					"code": "EWB",
					"kw": "",
					"city": "New Bedford"
					},{
					    "name": "New Haven",
					"code": "HVN",
					"kw": "",
					"city": "New Haven"
					},{
					    "name": "New London/Groton",
					"code": "GON",
					"kw": "",
					"city": "New London/Groton"
					},{
					    "name": "Newcastle",
					"code": "NCS",
					"kw": "",
					"city": "Newcastle"
					},{
					    "name": "Newcastle",
					"code": "NCL",
					"kw": "",
					"city": "Newcastle"
					},{
					    "name": "Newport News",
					"code": "PHF",
					"kw": "",
					"city": "Newport News"
					},{
					    "name": "Newquay",
					"code": "NQY",
					"kw": "",
					"city": "Newquay"
					},{
					    "name": "Neyveli",
					"code": "NVY",
					"kw": "",
					"city": "Neyveli"
					},{
					    "name": "Ngaoundere",
					"code": "NGE",
					"kw": "",
					"city": "Ngaoundere"
					},{
					    "name": "Ngau Island",
					"code": "NGI",
					"kw": "",
					"city": "Ngau Island"
					},{
					    "name": "Ngukurr",
					"code": "RPM",
					"kw": "",
					"city": "Ngukurr"
					},{
					    "name": "Niamey",
					"code": "NIM",
					"kw": "",
					"city": "Niamey"
					},{
					    "name": "Niamtougou",
					"code": "LRL",
					"kw": "",
					"city": "Niamtougou"
					},{
					    "name": "Nicaro",
					"code": "ICR",
					"kw": "",
					"city": "Nicaro"
					},{
					    "name": "Nice",
					"code": "NCE",
					"kw": "",
					"city": "Nice"
					},{
					    "name": "Niigata",
					"code": "KIJ",
					"kw": "",
					"city": "Niigata"
					},{
					    "name": "Nikunau",
					"code": "NIG",
					"kw": "",
					"city": "Nikunau"
					},{
					    "name": "Nimba",
					"code": "NIA",
					"kw": "",
					"city": "Nimba"
					},{
					    "name": "Nimes",
					"code": "FNI",
					"kw": "",
					"city": "Nimes"
					},{
					    "name": "Nioki",
					"code": "NIO",
					"kw": "",
					"city": "Nioki"
					},{
					    "name": "Nioro",
					"code": "NIX",
					"kw": "",
					"city": "Nioro"
					},{
					    "name": "Niort",
					"code": "NIT",
					"kw": "",
					"city": "Niort"
					},{
					    "name": "Nis",
					"code": "INI",
					"kw": "",
					"city": "Nis"
					},{
					    "name": "Nissan Island",
					"code": "IIS",
					"kw": "",
					"city": "Nissan Island"
					},{
					    "name": "Niuafo'ou",
					"code": "NFO",
					"kw": "",
					"city": "Niuafo'ou"
					},{
					    "name": "Niuatoputapu",
					"code": "NTT",
					"kw": "",
					"city": "Niuatoputapu"
					},{
					    "name": "Niue",
					"code": "IUE",
					"kw": "",
					"city": "Niue"
					},{
					    "name": "Nizhniy Novgorod",
					"code": "GOJ",
					"kw": "",
					"city": "Nizhniy Novgorod"
					},{
					    "name": "Nkaus",
					"code": "NKU",
					"kw": "",
					"city": "Nkaus"
					},{
					    "name": "Nkayi",
					"code": "NKY",
					"kw": "",
					"city": "Nkayi"
					},{
					    "name": "Nkolo",
					"code": "NKL",
					"kw": "",
					"city": "Nkolo"
					},{
					    "name": "Nomad River",
					"code": "NOM",
					"kw": "",
					"city": "Nomad River"
					},{
					    "name": "Nonouti",
					"code": "NON",
					"kw": "",
					"city": "Nonouti"
					},{
					    "name": "Norddeich",
					"code": "NOE",
					"kw": "",
					"city": "Norddeich"
					},{
					    "name": "Norderney",
					"code": "NRD",
					"kw": "",
					"city": "Norderney"
					},{
					    "name": "Nordfjordur",
					"code": "NOR",
					"kw": "",
					"city": "Nordfjordur"
					},{
					    "name": "Nordholz-Spieka",
					"code": "NDZ",
					"kw": "",
					"city": "Nordholz-Spieka"
					},{
					    "name": "Norfolk",
					"code": "OFK",
					"kw": "",
					"city": "Norfolk"
					},{
					    "name": "Norfolk Island",
					"code": "NLK",
					"kw": "",
					"city": "Norfolk Island"
					},{
					    "name": "Norilsk",
					"code": "NSK",
					"kw": "",
					"city": "Norilsk"
					},{
					    "name": "Normanton",
					"code": "NTN",
					"kw": "",
					"city": "Normanton"
					},{
					    "name": "Norrkoping",
					"code": "NRK",
					"kw": "",
					"city": "Norrkoping"
					},{
					    "name": "Norsup",
					"code": "NUS",
					"kw": "",
					"city": "Norsup"
					},{
					    "name": "North Battleford",
					"code": "YQW",
					"kw": "",
					"city": "North Battleford"
					},{
					    "name": "North Bend",
					"code": "OTH",
					"kw": "",
					"city": "North Bend"
					},{
					    "name": "North Caicos",
					"code": "NCA",
					"kw": "",
					"city": "North Caicos"
					},{
					    "name": "North Eleuthera",
					"code": "ELH",
					"kw": "",
					"city": "North Eleuthera"
					},{
					    "name": "North Platte",
					"code": "LBF",
					"kw": "",
					"city": "North Platte"
					},{
					    "name": "North Ronaldsay",
					"code": "NRL",
					"kw": "",
					"city": "North Ronaldsay"
					},{
					    "name": "Norway House",
					"code": "YNE",
					"kw": "",
					"city": "Norway House"
					},{
					    "name": "Norwich",
					"code": "NWI",
					"kw": "",
					"city": "Norwich"
					},{
					    "name": "Norwood",
					"code": "OWD",
					"kw": "",
					"city": "Norwood"
					},{
					    "name": "Nosara Beach",
					"code": "NOB",
					"kw": "",
					"city": "Nosara Beach"
					},{
					    "name": "Nossi-Be",
					"code": "NOS",
					"kw": "",
					"city": "Nossi-Be"
					},{
					    "name": "Nouadhibou",
					"code": "NDB",
					"kw": "",
					"city": "Nouadhibou"
					},{
					    "name": "Nouakchott",
					"code": "NKC",
					"kw": "",
					"city": "Nouakchott"
					},{
					    "name": "Noumea Magenta ",
					"code": "GEA",
					"kw": "",
					"city": "Noumea"
					},{
					    "name": "Noumea Tontouta ",
					"code": "NOU",
					"kw": "",
					"city": "Noumea"
					},{
					    "name": "Nouna",
					"code": "XNU",
					"kw": "",
					"city": "Nouna"
					},{
					    "name": "Novato",
					"code": "NOT",
					"kw": "",
					"city": "Novato"
					},{
					    "name": "Novosibirsk",
					"code": "OVB",
					"kw": "",
					"city": "Novosibirsk"
					},{
					    "name": "Now Shahr",
					"code": "NSH",
					"kw": "",
					"city": "Now Shahr"
					},{
					    "name": "Nowata",
					"code": "NWT",
					"kw": "",
					"city": "Nowata"
					},{
					    "name": "Nuku",
					"code": "UKU",
					"kw": "",
					"city": "Nuku"
					},{
					    "name": "Nuku Hiva",
					"code": "NHV",
					"kw": "",
					"city": "Nuku Hiva"
					},{
					    "name": "Nullarbor",
					"code": "NUR",
					"kw": "",
					"city": "Nullarbor"
					},{
					    "name": "Numbulwar",
					"code": "NUB",
					"kw": "",
					"city": "Numbulwar"
					},{
					    "name": "Numfoor",
					"code": "FOO",
					"kw": "",
					"city": "Numfoor"
					},{
					    "name": "Nuqui",
					"code": "NQU",
					"kw": "",
					"city": "Nuqui"
					},{
					    "name": "Nuremberg ",
					"code": "NUE",
					"kw": "",
					"city": "Nuremberg"
					},{
					    "name": "Nuuk",
					"code": "GOH",
					"kw": "",
					"city": "Nuuk"
					},{
					    "name": "Nyala",
					"code": "UYL",
					"kw": "",
					"city": "Nyala"
					},{
					    "name": "Nyaung-U",
					"code": "NYU",
					"kw": "",
					"city": "Nyaung-U"
					},{
					    "name": "Nyeri",
					"code": "NYE",
					"kw": "",
					"city": "Nyeri"
					},{
					    "name": "Nzerekore",
					"code": "NZE",
					"kw": "",
					"city": "Nzerekore"
					},{
					    "name": "Oakland International ",
					"code": "OAK",
					"kw": "",
					"city": "Oakland"
					},{
					    "name": "Oakland",
					"code": "ODM",
					"kw": "",
					"city": "Oakland"
					},{
					    "name": "Obano",
					"code": "OBD",
					"kw": "",
					"city": "Obano"
					},{
					    "name": "Oberpfaffenhofen",
					"code": "OBF",
					"kw": "",
					"city": "Oberpfaffenhofen"
					},{
					    "name": "Obihiro",
					"code": "OBO",
					"kw": "",
					"city": "Obihiro"
					},{
					    "name": "Obo",
					"code": "OBX",
					"kw": "",
					"city": "Obo"
					},{
					    "name": "Obock",
					"code": "OBC",
					"kw": "",
					"city": "Obock"
					},{
					    "name": "Ocana",
					"code": "OCV",
					"kw": "",
					"city": "Ocana"
					},{
					    "name": "Ocean City",
					"code": "OCE",
					"kw": "",
					"city": "Ocean City"
					},{
					    "name": "Ocean Falls",
					"code": "ZOF",
					"kw": "",
					"city": "Ocean Falls"
					},{
					    "name": "Ocho Rios",
					"code": "OCJ",
					"kw": "",
					"city": "Ocho Rios"
					},{
					    "name": "Ocussi",
					"code": "OEC",
					"kw": "",
					"city": "Ocussi"
					},{
					    "name": "Odense Airport",
					"code": "ODE",
					"kw": "",
					"city": "Odense"
					},{
					    "name": "Odessa",
					"code": "ODS",
					"kw": "",
					"city": "Odessa"
					},{
					    "name": "Odienne",
					"code": "KEO",
					"kw": "",
					"city": "Odienne"
					},{
					    "name": "Oenpelli",
					"code": "OPI",
					"kw": "",
					"city": "Oenpelli"
					},{
					    "name": "Ofu",
					"code": "OFU",
					"kw": "",
					"city": "Ofu"
					},{
					    "name": "Ogallala",
					"code": "OGA",
					"kw": "",
					"city": "Ogallala"
					},{
					    "name": "Ohrid",
					"code": "OHD",
					"kw": "",
					"city": "Ohrid"
					},{
					    "name": "Oita",
					"code": "OIT",
					"kw": "",
					"city": "Oita"
					},{
					    "name": "Okaukuejo",
					"code": "OKF",
					"kw": "",
					"city": "Okaukuejo"
					},{
					    "name": "Okayama",
					"code": "OKJ",
					"kw": "",
					"city": "Okayama"
					},{
					    "name": "Oki Island",
					"code": "OKI",
					"kw": "",
					"city": "Oki Island"
					},{
					    "name": "Okinawa Naha ",
					"code": "OKA",
					"kw": "",
					"city": "Okinawa"
					},{
					    "name": "Okino Erabu",
					"code": "OKE",
					"kw": "",
					"city": "Okino Erabu"
					},{
					    "name": "Okondja",
					"code": "OKN",
					"kw": "",
					"city": "Okondja"
					},{
					    "name": "Okoyo",
					"code": "OKG",
					"kw": "",
					"city": "Okoyo"
					},{
					    "name": "Oksapmin",
					"code": "OKP",
					"kw": "",
					"city": "Oksapmin"
					},{
					    "name": "Okushiri",
					"code": "OIR",
					"kw": "",
					"city": "Okushiri"
					},{
					    "name": "Olafsfjordur",
					"code": "OFJ",
					"kw": "",
					"city": "Olafsfjordur"
					},{
					    "name": "Olafsvik",
					"code": "OLI",
					"kw": "",
					"city": "Olafsvik"
					},{
					    "name": "Olanchito",
					"code": "OAN",
					"kw": "",
					"city": "Olanchito"
					},{
					    "name": "Olbia",
					"code": "OLB",
					"kw": "",
					"city": "Olbia"
					},{
					    "name": "Olpoi",
					"code": "OLJ",
					"kw": "",
					"city": "Olpoi"
					},{
					    "name": "Olsobip",
					"code": "OLQ",
					"kw": "",
					"city": "Olsobip"
					},{
					    "name": "Olympic Dam",
					"code": "OLP",
					"kw": "",
					"city": "Olympic Dam"
					},{
					    "name": "Omaha Eppley Airfield",
					"code": "OMA",
					"kw": "",
					"city": "Omaha"
					},{
					    "name": "Omsk",
					"code": "OMS",
					"kw": "",
					"city": "Omsk"
					},{
					    "name": "Ono I Lau",
					"code": "ONU",
					"kw": "",
					"city": "Ono I Lau"
					},{
					    "name": "Onotoa",
					"code": "OOT",
					"kw": "",
					"city": "Onotoa"
					},{
					    "name": "Ontario International ",
					"code": "ONT",
					"kw": "",
					"city": "Ontario"
					},{
					    "name": "Open Bay",
					"code": "OPB",
					"kw": "",
					"city": "Open Bay"
					},{
					    "name": "Oradea",
					"code": "OMR",
					"kw": "",
					"city": "Oradea"
					},{
					    "name": "Oran Es Senia ",
					"code": "ORN",
					"kw": "",
					"city": "Oran"
					},{
					    "name": "Orange Walk",
					"code": "ORZ",
					"kw": "",
					"city": "Orange Walk"
					},{
					    "name": "Oranjemund",
					"code": "OMD",
					"kw": "",
					"city": "Oranjemund"
					},{
					    "name": "Orapa",
					"code": "ORP",
					"kw": "",
					"city": "Orapa"
					},{
					    "name": "Orebro",
					"code": "ORB",
					"kw": "",
					"city": "Orebro"
					},{
					    "name": "Orenburg",
					"code": "REN",
					"kw": "",
					"city": "Orenburg"
					},{
					    "name": "Oria",
					"code": "OTY",
					"kw": "",
					"city": "Oria"
					},{
					    "name": "Orinduik",
					"code": "ORJ",
					"kw": "",
					"city": "Orinduik"
					},{
					    "name": "Orleans",
					"code": "ORE",
					"kw": "",
					"city": "Orleans"
					},{
					    "name": "Ormara",
					"code": "ORW",
					"kw": "",
					"city": "Ormara"
					},{
					    "name": "Ormoc",
					"code": "OMC",
					"kw": "",
					"city": "Ormoc"
					},{
					    "name": "Ornskoldsvik",
					"code": "OER",
					"kw": "",
					"city": "Ornskoldsvik"
					},{
					    "name": "Orocue",
					"code": "ORC",
					"kw": "",
					"city": "Orocue"
					},{
					    "name": "Orsta-Volda",
					"code": "HOV",
					"kw": "",
					"city": "Orsta-Volda"
					},{
					    "name": "Oruro",
					"code": "ORU",
					"kw": "",
					"city": "Oruro"
					},{
					    "name": "Osage Beach",
					"code": "OSB",
					"kw": "",
					"city": "Osage Beach"
					},{
					    "name": "Osaka Itami Airport",
					"code": "ITM",
					"kw": "",
					"city": "Osaka"
					},{
					    "name": "Osaka Kansai International Airport",
					"code": "KIX",
					"kw": "",
					"city": "Osaka"
					},{
					    "name": "Osh",
					"code": "OSS",
					"kw": "",
					"city": "Osh"
					},{
					    "name": "Oshakati",
					"code": "OHI",
					"kw": "",
					"city": "Oshakati"
					},{
					    "name": "Oshima",
					"code": "OIM",
					"kw": "",
					"city": "Oshima"
					},{
					    "name": "Osijek",
					"code": "OSI",
					"kw": "",
					"city": "Osijek"
					},{
					    "name": "Oskarshamn",
					"code": "OSK",
					"kw": "",
					"city": "Oskarshamn"
					},{
					    "name": "Oslo Torp Airport",
					"code": "TRF",
					"kw": "",
					"city": "Oslo"
					},{
					    "name": "Oslo International Airport",
					"code": "OSL",
					"kw": "",
					"city": "Oslo"
					},{
					    "name": "Osmanabad",
					"code": "OMN",
					"kw": "",
					"city": "Osmanabad"
					},{
					    "name": "Osorno",
					"code": "ZOS",
					"kw": "",
					"city": "Osorno"
					},{
					    "name": "Ostend",
					"code": "OST",
					"kw": "",
					"city": "Ostend"
					},{
					    "name": "Ostersund",
					"code": "OSD",
					"kw": "",
					"city": "Ostersund"
					},{
					    "name": "Ostrava",
					"code": "OSR",
					"kw": "",
					"city": "Ostrava"
					},{
					    "name": "Otu",
					"code": "OTU",
					"kw": "",
					"city": "Otu"
					},{
					    "name": "Oudtshoorn",
					"code": "OUH",
					"kw": "",
					"city": "Oudtshoorn"
					},{
					    "name": "Oulu",
					"code": "OUL",
					"kw": "",
					"city": "Oulu"
					},{
					    "name": "Ouyen",
					"code": "OYN",
					"kw": "",
					"city": "Ouyen"
					},{
					    "name": "Owando",
					"code": "FTX",
					"kw": "",
					"city": "Owando"
					},{
					    "name": "Owensboro",
					"code": "OWB",
					"kw": "",
					"city": "Owensboro"
					},{
					    "name": "Oxford House",
					"code": "YOH",
					"kw": "",
					"city": "Oxford House"
					},{
					    "name": "Oxnard/Ventura",
					"code": "OXR",
					"kw": "",
					"city": "Oxnard/Ventura"
					},{
					    "name": "Oyem",
					"code": "OYE",
					"kw": "",
					"city": "Oyem"
					},{
					    "name": "Ozamis",
					"code": "OZC",
					"kw": "",
					"city": "Ozamis"
					},{
					    "name": "Pa-an",
					"code": "PAA",
					"kw": "",
					"city": "Pa-an"
					},{
					    "name": "Paamiut",
					"code": "JFR",
					"kw": "",
					"city": "Paamiut"
					},{
					    "name": "Padang",
					"code": "PDG",
					"kw": "",
					"city": "Padang"
					},{
					    "name": "Paderborn",
					"code": "PAD",
					"kw": "",
					"city": "Paderborn"
					},{
					    "name": "Paducah",
					"code": "PAH",
					"kw": "",
					"city": "Paducah"
					},{
					    "name": "Pagadian",
					"code": "PAG",
					"kw": "",
					"city": "Pagadian"
					},{
					    "name": "Page",
					"code": "PGA",
					"kw": "",
					"city": "Page"
					},{
					    "name": "Pago Pago",
					"code": "PPG",
					"kw": "",
					"city": "Pago Pago"
					},{
					    "name": "Pakokku",
					"code": "PKK",
					"kw": "",
					"city": "Pakokku"
					},{
					    "name": "Pakse",
					"code": "PKZ",
					"kw": "",
					"city": "Pakse"
					},{
					    "name": "Pala",
					"code": "PLF",
					"kw": "",
					"city": "Pala"
					},{
					    "name": "Palanga",
					"code": "PLQ",
					"kw": "",
					"city": "Palanga"
					},{
					    "name": "Palangkaraya",
					"code": "PKY",
					"kw": "",
					"city": "Palangkaraya"
					},{
					    "name": "Palembang",
					"code": "PLM",
					"kw": "",
					"city": "Palembang"
					},{
					    "name": "Palenque",
					"code": "PQM",
					"kw": "",
					"city": "Palenque"
					},{
					    "name": "Palermo",
					"code": "PMO",
					"kw": "",
					"city": "Palermo"
					},{
					    "name": "Palma Mallorca",
					"code": "PMI",
					"kw": "",
					"city": "Palma Mallorca"
					},{
					    "name": "Palmar",
					"code": "PMZ",
					"kw": "",
					"city": "Palmar"
					},{
					    "name": "Palmarito",
					"code": "PTM",
					"kw": "",
					"city": "Palmarito"
					},{
					    "name": "Palmdale AFB",
					"code": "PMD",
					"kw": "",
					"city": "Palmdale AFB"
					},{
					    "name": "Palmerston North",
					"code": "PMR",
					"kw": "",
					"city": "Palmerston North"
					},{
					    "name": "Palu",
					"code": "PLW",
					"kw": "",
					"city": "Palu"
					},{
					    "name": "Pama",
					"code": "XPA",
					"kw": "",
					"city": "Pama"
					},{
					    "name": "Pamol",
					"code": "PAY",
					"kw": "",
					"city": "Pamol"
					},{
					    "name": "Pamplona",
					"code": "PNA",
					"kw": "",
					"city": "Pamplona"
					},{
					    "name": "Panama City Tocumen Internationl",
					"code": "PTY",
					"kw": "",
					"city": "Panama City"
					},{
					    "name": "Panama City Paitilla ",
					"code": "PAC",
					"kw": "",
					"city": "Panama City"
					},{
					    "name": "Pandie Pandie",
					"code": "PDE",
					"kw": "",
					"city": "Pandie Pandie"
					},{
					    "name": "Pangkalanbun",
					"code": "PKN",
					"kw": "",
					"city": "Pangkalanbun"
					},{
					    "name": "Pangkalpinang",
					"code": "PGK",
					"kw": "",
					"city": "Pangkalpinang"
					},{
					    "name": "Pangnirtung",
					"code": "YXP",
					"kw": "",
					"city": "Pangnirtung"
					},{
					    "name": "Panjgur",
					"code": "PJG",
					"kw": "",
					"city": "Panjgur"
					},{
					    "name": "Pantelleria",
					"code": "PNL",
					"kw": "",
					"city": "Pantelleria"
					},{
					    "name": "Paonia",
					"code": "WPO",
					"kw": "",
					"city": "Paonia"
					},{
					    "name": "Papa Westray",
					"code": "PPW",
					"kw": "",
					"city": "Papa Westray"
					},{
					    "name": "Papeete",
					"code": "PPT",
					"kw": "",
					"city": "Papeete"
					},{
					    "name": "Paphos",
					"code": "PFO",
					"kw": "",
					"city": "Paphos"
					},{
					    "name": "Papun",
					"code": "PPU",
					"kw": "",
					"city": "Papun"
					},{
					    "name": "Paradise River",
					"code": "YDE",
					"kw": "",
					"city": "Paradise River"
					},{
					    "name": "Parakou",
					"code": "PKO",
					"kw": "",
					"city": "Parakou"
					},{
					    "name": "Param",
					"code": "PPX",
					"kw": "",
					"city": "Param"
					},{
					    "name": "Paramaribo Zorg en Hoop ",
					"code": "ORG",
					"kw": "",
					"city": "Paramaribo"
					},{
					    "name": "Paramaribo John A Pengel ",
					"code": "PBM",
					"kw": "",
					"city": "Paramaribo"
					},{
					    "name": "Parana",
					"code": "PRA",
					"kw": "",
					"city": "Parana"
					},{
					    "name": "Paranagua",
					"code": "PNG",
					"kw": "",
					"city": "Paranagua"
					},{
					    "name": "Paranaiba",
					"code": "PBB",
					"kw": "",
					"city": "Paranaiba"
					},{
					    "name": "Paranavai",
					"code": "PVI",
					"kw": "",
					"city": "Paranavai"
					},{
					    "name": "Parasi",
					"code": "PRS",
					"kw": "",
					"city": "Parasi"
					},{
					    "name": "Paris La Defense H/P",
					"code": "JPU",
					"kw": "",
					"city": "Paris"
					},{
					    "name": "Paris Cergy Pontoise Airport",
					"code": "POX",
					"kw": "",
					"city": "Paris"
					},{
					    "name": "Paris Charles de Gaulle ",
					"code": "CDG",
					"kw": "",
					"city": "Paris"
					},{
					    "name": "Paris Beauvais-Tille Airport",
					"code": "BVA",
					"kw": "",
					"city": "Paris"
					},{
					    "name": "Paris Orly ",
					"code": "ORY",
					"kw": "",
					"city": "Paris"
					},{
					    "name": "Parma",
					"code": "PMF",
					"kw": "",
					"city": "Parma"
					},{
					    "name": "Parndana",
					"code": "PDN",
					"kw": "",
					"city": "Parndana"
					},{
					    "name": "Paro",
					"code": "PBH",
					"kw": "",
					"city": "Paro"
					},{
					    "name": "Paros",
					"code": "PAS",
					"kw": "",
					"city": "Paros"
					},{
					    "name": "Pasighat",
					"code": "IXT",
					"kw": "",
					"city": "Pasighat"
					},{
					    "name": "Pasni",
					"code": "PSI",
					"kw": "",
					"city": "Pasni"
					},{
					    "name": "Paso Caballos",
					"code": "PCG",
					"kw": "",
					"city": "Paso Caballos"
					},{
					    "name": "Paso De Los Libres",
					"code": "AOL",
					"kw": "",
					"city": "Paso De Los Libres"
					},{
					    "name": "Paso Robles",
					"code": "PRB",
					"kw": "",
					"city": "Paso Robles"
					},{
					    "name": "Passos",
					"code": "PSW",
					"kw": "",
					"city": "Passos"
					},{
					    "name": "Pasto",
					"code": "PSO",
					"kw": "",
					"city": "Pasto"
					},{
					    "name": "Patna",
					"code": "PAT",
					"kw": "",
					"city": "Patna"
					},{
					    "name": "Pato Branco",
					"code": "PTO",
					"kw": "",
					"city": "Pato Branco"
					},{
					    "name": "Patras",
					"code": "GPA",
					"kw": "",
					"city": "Patras"
					},{
					    "name": "Patreksfjordur",
					"code": "PFJ",
					"kw": "",
					"city": "Patreksfjordur"
					},{
					    "name": "Pattani",
					"code": "PAN",
					"kw": "",
					"city": "Pattani"
					},{
					    "name": "Pattaya",
					"code": "PYX",
					"kw": "",
					"city": "Pattaya"
					},{
					    "name": "Patterson",
					"code": "PTN",
					"kw": "",
					"city": "Patterson"
					},{
					    "name": "Pau",
					"code": "PUF",
					"kw": "",
					"city": "Pau"
					},{
					    "name": "Pauk",
					"code": "PAU",
					"kw": "",
					"city": "Pauk"
					},{
					    "name": "Paulatuk",
					"code": "YPC",
					"kw": "",
					"city": "Paulatuk"
					},{
					    "name": "Paulo Afonso",
					"code": "PAV",
					"kw": "",
					"city": "Paulo Afonso"
					},{
					    "name": "Payan",
					"code": "PYN",
					"kw": "",
					"city": "Payan"
					},{
					    "name": "Paysandu",
					"code": "PDU",
					"kw": "",
					"city": "Paysandu"
					},{
					    "name": "Paz de Ariporo",
					"code": "PZA",
					"kw": "",
					"city": "Paz de Ariporo"
					},{
					    "name": "Peace River",
					"code": "YPE",
					"kw": "",
					"city": "Peace River"
					},{
					    "name": "Peach Springs",
					"code": "PGS",
					"kw": "",
					"city": "Peach Springs"
					},{
					    "name": "Pedernales",
					"code": "PDZ",
					"kw": "",
					"city": "Pedernales"
					},{
					    "name": "Pehuajo",
					"code": "PEH",
					"kw": "",
					"city": "Pehuajo"
					},{
					    "name": "Pekanbaru",
					"code": "PKU",
					"kw": "",
					"city": "Pekanbaru"
					},{
					    "name": "Pelly Bay Dewline Site ",
					"code": "YUF",
					"kw": "",
					"city": "Pelly Bay"
					},{
					    "name": "Pelly Bay Townsite ",
					"code": "YBB",
					"kw": "",
					"city": "Pelly Bay"
					},{
					    "name": "Pemba",
					"code": "POL",
					"kw": "",
					"city": "Pemba"
					},{
					    "name": "Pemba",
					"code": "PMA",
					"kw": "",
					"city": "Pemba"
					},{
					    "name": "Penang",
					"code": "PEN",
					"kw": "",
					"city": "Penang"
					},{
					    "name": "Pendleton",
					"code": "PDT",
					"kw": "",
					"city": "Pendleton"
					},{
					    "name": "Penrhyn Island",
					"code": "PYE",
					"kw": "",
					"city": "Penrhyn Island"
					},{
					    "name": "Penza",
					"code": "PEZ",
					"kw": "",
					"city": "Penza"
					},{
					    "name": "Penzance",
					"code": "PZE",
					"kw": "",
					"city": "Penzance"
					},{
					    "name": "Peoria",
					"code": "PIA",
					"kw": "",
					"city": "Peoria"
					},{
					    "name": "Pereira",
					"code": "PEI",
					"kw": "",
					"city": "Pereira"
					},{
					    "name": "Perigueux",
					"code": "PGX",
					"kw": "",
					"city": "Perigueux"
					},{
					    "name": "Perito Moreno",
					"code": "PMQ",
					"kw": "",
					"city": "Perito Moreno"
					},{
					    "name": "Perm",
					"code": "PEE",
					"kw": "",
					"city": "Perm"
					},{
					    "name": "Perpignan",
					"code": "PGF",
					"kw": "",
					"city": "Perpignan"
					},{
					    "name": "Peru",
					"code": "VYS",
					"kw": "",
					"city": "Peru"
					},{
					    "name": "Perugia",
					"code": "PEG",
					"kw": "",
					"city": "Perugia"
					},{
					    "name": "Peshawar",
					"code": "PEW",
					"kw": "",
					"city": "Peshawar"
					},{
					    "name": "Petrolina",
					"code": "PNZ",
					"kw": "",
					"city": "Petrolina"
					},{
					    "name": "Petropavlovsk-Kamchats",
					"code": "PKC",
					"kw": "",
					"city": "Petropavlovsk-Kamchats"
					},{
					    "name": "Petrozavodsk",
					"code": "PES",
					"kw": "",
					"city": "Petrozavodsk"
					},{
					    "name": "Phalaborwa",
					"code": "PHW",
					"kw": "",
					"city": "Phalaborwa"
					},{
					    "name": "Philadelphia Trenton-Mercer ",
					"code": "TTN",
					"kw": "",
					"city": "Philadelphia"
					},{
					    "name": "Philadelphia International ",
					"code": "PHL",
					"kw": "",
					"city": "Philadelphia"
					},{
					    "name": "Philipsburg",
					"code": "PSB",
					"kw": "",
					"city": "Philipsburg"
					},{
					    "name": "Phitsanulok",
					"code": "PHS",
					"kw": "",
					"city": "Phitsanulok"
					},{
					    "name": "Phnom Penh",
					"code": "PNH",
					"kw": "",
					"city": "Phnom Penh"
					},{
					    "name": "Phoenix Scottsdale Municipal ",
					"code": "SCF",
					"kw": "",
					"city": "Phoenix"
					},{
					    "name": "Phoenix Sky Harbor Intl ",
					"code": "PHX",
					"kw": "",
					"city": "Phoenix"
					},{
					    "name": "Phrae",
					"code": "PRH",
					"kw": "",
					"city": "Phrae"
					},{
					    "name": "Phuket",
					"code": "HKT",
					"kw": "",
					"city": "Phuket"
					},{
					    "name": "Pico Island",
					"code": "PIX",
					"kw": "",
					"city": "Pico Island"
					},{
					    "name": "Picton",
					"code": "PCN",
					"kw": "",
					"city": "Picton"
					},{
					    "name": "Pierre",
					"code": "PIR",
					"kw": "",
					"city": "Pierre"
					},{
					    "name": "Piestany",
					"code": "PZY",
					"kw": "",
					"city": "Piestany"
					},{
					    "name": "Pietermaritzburg",
					"code": "PZB",
					"kw": "",
					"city": "Pietermaritzburg"
					},{
					    "name": "Pietersburg",
					"code": "PTG",
					"kw": "",
					"city": "Pietersburg"
					},{
					    "name": "Pikwitonei",
					"code": "PIW",
					"kw": "",
					"city": "Pikwitonei"
					},{
					    "name": "Pimaga",
					"code": "PMP",
					"kw": "",
					"city": "Pimaga"
					},{
					    "name": "Pindiu",
					"code": "PDI",
					"kw": "",
					"city": "Pindiu"
					},{
					    "name": "Pine Point",
					"code": "YPP",
					"kw": "",
					"city": "Pine Point"
					},{
					    "name": "Pitalito",
					"code": "PTX",
					"kw": "",
					"city": "Pitalito"
					},{
					    "name": "Pittsburgh International ",
					"code": "PIT",
					"kw": "",
					"city": "Pittsburgh"
					},{
					    "name": "Pittsfield",
					"code": "PSF",
					"kw": "",
					"city": "Pittsfield"
					},{
					    "name": "Piura",
					"code": "PIU",
					"kw": "",
					"city": "Piura"
					},{
					    "name": "Placerville",
					"code": "PVF",
					"kw": "",
					"city": "Placerville"
					},{
					    "name": "Playa Samara",
					"code": "PLD",
					"kw": "",
					"city": "Playa Samara"
					},{
					    "name": "Plettenberg Bay",
					"code": "PBZ",
					"kw": "",
					"city": "Plettenberg Bay"
					},{
					    "name": "Pleven",
					"code": "PVN",
					"kw": "",
					"city": "Pleven"
					},{
					    "name": "Plovdiv",
					"code": "PDV",
					"kw": "",
					"city": "Plovdiv"
					},{
					    "name": "Plymouth",
					"code": "PLH",
					"kw": "",
					"city": "Plymouth"
					},{
					    "name": "Pocatello",
					"code": "PIH",
					"kw": "",
					"city": "Pocatello"
					},{
					    "name": "Pocos De Caldas",
					"code": "POO",
					"kw": "",
					"city": "Pocos De Caldas"
					},{
					    "name": "Podor",
					"code": "POD",
					"kw": "",
					"city": "Podor"
					},{
					    "name": "Pohang",
					"code": "KPO",
					"kw": "",
					"city": "Pohang"
					},{
					    "name": "Pohnpei",
					"code": "PNI",
					"kw": "",
					"city": "Pohnpei"
					},{
					    "name": "Pointe Noire",
					"code": "PNR",
					"kw": "",
					"city": "Pointe Noire"
					},{
					    "name": "Pointe-a-Pitre",
					"code": "PTP",
					"kw": "",
					"city": "Pointe-a-Pitre"
					},{
					    "name": "Points North Landing",
					"code": "YNL",
					"kw": "",
					"city": "Points North Landing"
					},{
					    "name": "Poitiers Biard Airport",
					"code": "PIS",
					"kw": "",
					"city": "Poitiers"
					},{
					    "name": "Pokhara",
					"code": "PKR",
					"kw": "",
					"city": "Pokhara"
					},{
					    "name": "Polacca",
					"code": "PXL",
					"kw": "",
					"city": "Polacca"
					},{
					    "name": "Pomala",
					"code": "PUM",
					"kw": "",
					"city": "Pomala"
					},{
					    "name": "Ponce",
					"code": "PSE",
					"kw": "",
					"city": "Ponce"
					},{
					    "name": "Pond Inlet",
					"code": "YIO",
					"kw": "",
					"city": "Pond Inlet"
					},{
					    "name": "Ponta Delgada",
					"code": "PDL",
					"kw": "",
					"city": "Ponta Delgada"
					},{
					    "name": "Ponta Pora",
					"code": "PMG",
					"kw": "",
					"city": "Ponta Pora"
					},{
					    "name": "Pontianak",
					"code": "PNK",
					"kw": "",
					"city": "Pontianak"
					},{
					    "name": "Popayan",
					"code": "PPN",
					"kw": "",
					"city": "Popayan"
					},{
					    "name": "Poplar Bluff",
					"code": "POF",
					"kw": "",
					"city": "Poplar Bluff"
					},{
					    "name": "Popondetta",
					"code": "PNP",
					"kw": "",
					"city": "Popondetta"
					},{
					    "name": "Poptun",
					"code": "PON",
					"kw": "",
					"city": "Poptun"
					},{
					    "name": "Porbandar",
					"code": "PBD",
					"kw": "",
					"city": "Porbandar"
					},{
					    "name": "Pori",
					"code": "POR",
					"kw": "",
					"city": "Pori"
					},{
					    "name": "Porlamar",
					"code": "PMV",
					"kw": "",
					"city": "Porlamar"
					},{
					    "name": "Port Antonio",
					"code": "POT",
					"kw": "",
					"city": "Port Antonio"
					},{
					    "name": "Port Augusta",
					"code": "PUG",
					"kw": "",
					"city": "Port Augusta"
					},{
					    "name": "Port Berge",
					"code": "WPB",
					"kw": "",
					"city": "Port Berge"
					},{
					    "name": "Port Blair",
					"code": "IXZ",
					"kw": "",
					"city": "Port Blair"
					},{
					    "name": "Port De Paix",
					"code": "PAX",
					"kw": "",
					"city": "Port De Paix"
					},{
					    "name": "Port Gentil",
					"code": "POG",
					"kw": "",
					"city": "Port Gentil"
					},{
					    "name": "Port Harcourt",
					"code": "PHC",
					"kw": "",
					"city": "Port Harcourt"
					},{
					    "name": "Port Hope Simpson",
					"code": "YHA",
					"kw": "",
					"city": "Port Hope Simpson"
					},{
					    "name": "Port Hunter",
					"code": "PHJ",
					"kw": "",
					"city": "Port Hunter"
					},{
					    "name": "Port Keats",
					"code": "PKT",
					"kw": "",
					"city": "Port Keats"
					},{
					    "name": "Port Lincoln",
					"code": "PLO",
					"kw": "",
					"city": "Port Lincoln"
					},{
					    "name": "Port Macquarie",
					"code": "PQQ",
					"kw": "",
					"city": "Port Macquarie"
					},{
					    "name": "Port Moresby",
					"code": "POM",
					"kw": "",
					"city": "Port Moresby"
					},{
					    "name": "Port Pirie",
					"code": "PPI",
					"kw": "",
					"city": "Port Pirie"
					},{
					    "name": "Port Said",
					"code": "PSD",
					"kw": "",
					"city": "Port Said"
					},{
					    "name": "Portimao",
					"code": "PRM",
					"kw": "",
					"city": "Portimao"
					},{
					    "name": "Portland",
					"code": "PTJ",
					"kw": "",
					"city": "Portland"
					},{
					    "name": "Porto",
					"code": "OPO",
					"kw": "",
					"city": "Porto"
					},{
					    "name": "Porto Amboim",
					"code": "PBN",
					"kw": "",
					"city": "Porto Amboim"
					},{
					    "name": "Porto Kheli",
					"code": "PKH",
					"kw": "",
					"city": "Porto Kheli"
					},{
					    "name": "Porto Nacional",
					"code": "PNB",
					"kw": "",
					"city": "Porto Nacional"
					},{
					    "name": "Porto Seguro",
					"code": "BPS",
					"kw": "",
					"city": "Porto Seguro"
					},{
					    "name": "Portoroz",
					"code": "POW",
					"kw": "",
					"city": "Portoroz"
					},{
					    "name": "Portoviejo",
					"code": "PVO",
					"kw": "",
					"city": "Portoviejo"
					},{
					    "name": "Posadas",
					"code": "PSS",
					"kw": "",
					"city": "Posadas"
					},{
					    "name": "Poso",
					"code": "PSJ",
					"kw": "",
					"city": "Poso"
					},{
					    "name": "Postville",
					"code": "YSO",
					"kw": "",
					"city": "Postville"
					},{
					    "name": "Potosi",
					"code": "POI",
					"kw": "",
					"city": "Potosi"
					},{
					    "name": "Poughkeepsie",
					"code": "POU",
					"kw": "",
					"city": "Poughkeepsie"
					},{
					    "name": "Powell River",
					"code": "YPW",
					"kw": "",
					"city": "Powell River"
					},{
					    "name": "Poza Rica",
					"code": "PAZ",
					"kw": "",
					"city": "Poza Rica"
					},{
					    "name": "Poznan",
					"code": "POZ",
					"kw": "",
					"city": "Poznan"
					},{
					    "name": "Prague",
					"code": "PRG",
					"kw": "",
					"city": "Prague"
					},{
					    "name": "Praslin Island",
					"code": "PRI",
					"kw": "",
					"city": "Praslin Island"
					},{
					    "name": "Prescott",
					"code": "PRC",
					"kw": "",
					"city": "Prescott"
					},{
					    "name": "President Roque Saenz Pena",
					"code": "PRQ",
					"kw": "",
					"city": "President Roque Saenz Pena"
					},{
					    "name": "Pretoria Wonderboom ",
					"code": "PRY",
					"kw": "",
					"city": "Pretoria"
					},{
					    "name": "Preveza/Lefkas",
					"code": "PVK",
					"kw": "",
					"city": "Preveza/Lefkas"
					},{
					    "name": "Prince Albert",
					"code": "YPA",
					"kw": "",
					"city": "Prince Albert"
					},{
					    "name": "Principe Island",
					"code": "PCP",
					"kw": "",
					"city": "Principe Island"
					},{
					    "name": "Pristina",
					"code": "PRN",
					"kw": "",
					"city": "Pristina"
					},{
					    "name": "Prome",
					"code": "PRU",
					"kw": "",
					"city": "Prome"
					},{
					    "name": "Propriano",
					"code": "PRP",
					"kw": "",
					"city": "Propriano"
					},{
					    "name": "Providencia",
					"code": "PVA",
					"kw": "",
					"city": "Providencia"
					},{
					    "name": "Providenciales",
					"code": "PLS",
					"kw": "",
					"city": "Providenciales"
					},{
					    "name": "Provincetown",
					"code": "PVC",
					"kw": "",
					"city": "Provincetown"
					},{
					    "name": "Pucallpa",
					"code": "PCL",
					"kw": "",
					"city": "Pucallpa"
					},{
					    "name": "Puebla",
					"code": "PBC",
					"kw": "",
					"city": "Puebla"
					},{
					    "name": "Pueblo",
					"code": "PUB",
					"kw": "",
					"city": "Pueblo"
					},{
					    "name": "Puerto Asis",
					"code": "PUU",
					"kw": "",
					"city": "Puerto Asis"
					},{
					    "name": "Puerto Ayacucho",
					"code": "PYH",
					"kw": "",
					"city": "Puerto Ayacucho"
					},{
					    "name": "Puerto Barrios",
					"code": "PBR",
					"kw": "",
					"city": "Puerto Barrios"
					},{
					    "name": "Puerto Berrio",
					"code": "PBE",
					"kw": "",
					"city": "Puerto Berrio"
					},{
					    "name": "Puerto Boyaca",
					"code": "PYA",
					"kw": "",
					"city": "Puerto Boyaca"
					},{
					    "name": "Puerto Cabello",
					"code": "PBL",
					"kw": "",
					"city": "Puerto Cabello"
					},{
					    "name": "Puerto Cabezas",
					"code": "PUZ",
					"kw": "",
					"city": "Puerto Cabezas"
					},{
					    "name": "Puerto Carreno",
					"code": "PCR",
					"kw": "",
					"city": "Puerto Carreno"
					},{
					    "name": "Puerto Deseado",
					"code": "PUD",
					"kw": "",
					"city": "Puerto Deseado"
					},{
					    "name": "Puerto Escondido",
					"code": "PXM",
					"kw": "",
					"city": "Puerto Escondido"
					},{
					    "name": "Puerto Leguizamo",
					"code": "LQM",
					"kw": "",
					"city": "Puerto Leguizamo"
					},{
					    "name": "Puerto Lempira",
					"code": "PEU",
					"kw": "",
					"city": "Puerto Lempira"
					},{
					    "name": "Puerto Maldonado",
					"code": "PEM",
					"kw": "",
					"city": "Puerto Maldonado"
					},{
					    "name": "Puerto Montt",
					"code": "PMC",
					"kw": "",
					"city": "Puerto Montt"
					},{
					    "name": "Puerto Obaldia",
					"code": "PUE",
					"kw": "",
					"city": "Puerto Obaldia"
					},{
					    "name": "Puerto Ordaz",
					"code": "PZO",
					"kw": "",
					"city": "Puerto Ordaz"
					},{
					    "name": "Puerto Paez",
					"code": "PPZ",
					"kw": "",
					"city": "Puerto Paez"
					},{
					    "name": "Puerto Plata",
					"code": "POP",
					"kw": "",
					"city": "Puerto Plata"
					},{
					    "name": "Puerto Princesa",
					"code": "PPS",
					"kw": "",
					"city": "Puerto Princesa"
					},{
					    "name": "Puerto Rico",
					"code": "PCC",
					"kw": "",
					"city": "Puerto Rico"
					},{
					    "name": "Puerto Vallarta",
					"code": "PVR",
					"kw": "",
					"city": "Puerto Vallarta"
					},{
					    "name": "Puka Puka",
					"code": "PKP",
					"kw": "",
					"city": "Puka Puka"
					},{
					    "name": "Pukarua",
					"code": "PUK",
					"kw": "",
					"city": "Pukarua"
					},{
					    "name": "Pukatawagan",
					"code": "XPK",
					"kw": "",
					"city": "Pukatawagan"
					},{
					    "name": "Pula",
					"code": "PUY",
					"kw": "",
					"city": "Pula"
					},{
					    "name": "Pullman",
					"code": "PUW",
					"kw": "",
					"city": "Pullman"
					},{
					    "name": "Pumani",
					"code": "PMN",
					"kw": "",
					"city": "Pumani"
					},{
					    "name": "Pune",
					"code": "PNQ",
					"kw": "",
					"city": "Pune"
					},{
					    "name": "Punia",
					"code": "PUN",
					"kw": "",
					"city": "Punia"
					},{
					    "name": "Punta Arenas",
					"code": "PUQ",
					"kw": "",
					"city": "Punta Arenas"
					},{
					    "name": "Punta Cana",
					"code": "PUJ",
					"kw": "",
					"city": "Punta Cana"
					},{
					    "name": "Punta Del Este",
					"code": "PDP",
					"kw": "",
					"city": "Punta Del Este"
					},{
					    "name": "Punta Gorda",
					"code": "PGD",
					"kw": "",
					"city": "Punta Gorda"
					},{
					    "name": "Punta Gorda",
					"code": "PND",
					"kw": "",
					"city": "Punta Gorda"
					},{
					    "name": "Purwokerto",
					"code": "PWL",
					"kw": "",
					"city": "Purwokerto"
					},{
					    "name": "Pusan",
					"code": "PUS",
					"kw": "",
					"city": "Pusan"
					},{
					    "name": "Putao",
					"code": "PBU",
					"kw": "",
					"city": "Putao"
					},{
					    "name": "Putumayo",
					"code": "PYO",
					"kw": "",
					"city": "Putumayo"
					},{
					    "name": "Putussibau",
					"code": "PSU",
					"kw": "",
					"city": "Putussibau"
					},{
					    "name": "Pyongyang",
					"code": "FNJ",
					"kw": "",
					"city": "Pyongyang"
					},{
					    "name": "Pyrgos",
					"code": "PYR",
					"kw": "",
					"city": "Pyrgos"
					},{
					    "name": "Qachas Nek",
					"code": "UNE",
					"kw": "",
					"city": "Qachas Nek"
					},{
					    "name": "Qaisumah",
					"code": "AQI",
					"kw": "",
					"city": "Qaisumah"
					},{
					    "name": "Qala-Nau",
					"code": "LQN",
					"kw": "",
					"city": "Qala-Nau"
					},{
					    "name": "Qasigiannguit",
					"code": "JCH",
					"kw": "",
					"city": "Qasigiannguit"
					},{
					    "name": "Qishn",
					"code": "IHN",
					"kw": "",
					"city": "Qishn"
					},{
					    "name": "Queenstown",
					"code": "ZQN",
					"kw": "",
					"city": "Queenstown"
					},{
					    "name": "Quelimane",
					"code": "UEL",
					"kw": "",
					"city": "Quelimane"
					},{
					    "name": "Quepos",
					"code": "XQP",
					"kw": "",
					"city": "Quepos"
					},{
					    "name": "Queretaro",
					"code": "QRO",
					"kw": "",
					"city": "Queretaro"
					},{
					    "name": "Quetta",
					"code": "UET",
					"kw": "",
					"city": "Quetta"
					},{
					    "name": "Quibdo",
					"code": "UIB",
					"kw": "",
					"city": "Quibdo"
					},{
					    "name": "Quimper",
					"code": "UIP",
					"kw": "",
					"city": "Quimper"
					},{
					    "name": "Quincemil",
					"code": "UMI",
					"kw": "",
					"city": "Quincemil"
					},{
					    "name": "Quincy",
					"code": "MQI",
					"kw": "",
					"city": "Quincy"
					},{
					    "name": "Quinhon",
					"code": "UIH",
					"kw": "",
					"city": "Quinhon"
					},{
					    "name": "Quito",
					"code": "UIO",
					"kw": "",
					"city": "Quito"
					},{
					    "name": "Rabaraba",
					"code": "RBP",
					"kw": "",
					"city": "Rabaraba"
					},{
					    "name": "Rabat",
					"code": "RBA",
					"kw": "",
					"city": "Rabat"
					},{
					    "name": "Rabaul",
					"code": "RAB",
					"kw": "",
					"city": "Rabaul"
					},{
					    "name": "Rabi",
					"code": "RBI",
					"kw": "",
					"city": "Rabi"
					},{
					    "name": "Rae Bareli",
					"code": "BEK",
					"kw": "",
					"city": "Rae Bareli"
					},{
					    "name": "Rae Lakes",
					"code": "YRA",
					"kw": "",
					"city": "Rae Lakes"
					},{
					    "name": "Rafha",
					"code": "RAH",
					"kw": "",
					"city": "Rafha"
					},{
					    "name": "Rahim Yar Khan",
					"code": "RYK",
					"kw": "",
					"city": "Rahim Yar Khan"
					},{
					    "name": "Raiatea Island",
					"code": "RFP",
					"kw": "",
					"city": "Raiatea Island"
					},{
					    "name": "Rainbow Lake",
					"code": "YOP",
					"kw": "",
					"city": "Rainbow Lake"
					},{
					    "name": "Raipur",
					"code": "RPR",
					"kw": "",
					"city": "Raipur"
					},{
					    "name": "Rajahmundry",
					"code": "RJA",
					"kw": "",
					"city": "Rajahmundry"
					},{
					    "name": "Rajkot",
					"code": "RAJ",
					"kw": "",
					"city": "Rajkot"
					},{
					    "name": "Rajouri",
					"code": "RJI",
					"kw": "",
					"city": "Rajouri"
					},{
					    "name": "Rajshahi",
					"code": "RJH",
					"kw": "",
					"city": "Rajshahi"
					},{
					    "name": "Raleigh/Durham",
					"code": "RDU",
					"kw": "",
					"city": "Raleigh/Durham"
					},{
					    "name": "Ramagundam",
					"code": "RMD",
					"kw": "",
					"city": "Ramagundam"
					},{
					    "name": "Ramechhap",
					"code": "RHP",
					"kw": "",
					"city": "Ramechhap"
					},{
					    "name": "Ramingining",
					"code": "RAM",
					"kw": "",
					"city": "Ramingining"
					},{
					    "name": "Ramsar",
					"code": "RZR",
					"kw": "",
					"city": "Ramsar"
					},{
					    "name": "Ranau",
					"code": "RNU",
					"kw": "",
					"city": "Ranau"
					},{
					    "name": "Ranchi",
					"code": "IXR",
					"kw": "",
					"city": "Ranchi"
					},{
					    "name": "Rangely",
					"code": "RNG",
					"kw": "",
					"city": "Rangely"
					},{
					    "name": "Rangiroa Island",
					"code": "RGI",
					"kw": "",
					"city": "Rangiroa Island"
					},{
					    "name": "Rankin Inlet",
					"code": "YRT",
					"kw": "",
					"city": "Rankin Inlet"
					},{
					    "name": "Rapid City Municipal ",
					"code": "RAP",
					"kw": "",
					"city": "Rapid City"
					},{
					    "name": "Rarotonga",
					"code": "RAR",
					"kw": "",
					"city": "Rarotonga"
					},{
					    "name": "Ras Al Khaimah",
					"code": "RKT",
					"kw": "",
					"city": "Ras Al Khaimah"
					},{
					    "name": "Rasht",
					"code": "RAS",
					"kw": "",
					"city": "Rasht"
					},{
					    "name": "Ratnagiri",
					"code": "RTC",
					"kw": "",
					"city": "Ratnagiri"
					},{
					    "name": "Raufarhofn",
					"code": "RFN",
					"kw": "",
					"city": "Raufarhofn"
					},{
					    "name": "Rawala Kot",
					"code": "RAZ",
					"kw": "",
					"city": "Rawala Kot"
					},{
					    "name": "Rawalpindi Off-Line Pt",
					"code": "RWP",
					"kw": "",
					"city": "Rawalpindi Off-Line Pt"
					},{
					    "name": "Reading",
					"code": "RDG",
					"kw": "",
					"city": "Reading"
					},{
					    "name": "Reao",
					"code": "REA",
					"kw": "",
					"city": "Reao"
					},{
					    "name": "Rebun",
					"code": "RBJ",
					"kw": "",
					"city": "Rebun"
					},{
					    "name": "Recife",
					"code": "REC",
					"kw": "",
					"city": "Recife"
					},{
					    "name": "Red Bluff",
					"code": "RBL",
					"kw": "",
					"city": "Red Bluff"
					},{
					    "name": "Red Sucker Lake",
					"code": "YRS",
					"kw": "",
					"city": "Red Sucker Lake"
					},{
					    "name": "Redding",
					"code": "RDD",
					"kw": "",
					"city": "Redding"
					},{
					    "name": "Redencao",
					"code": "RDC",
					"kw": "",
					"city": "Redencao"
					},{
					    "name": "Reggio Calabria",
					"code": "REG",
					"kw": "",
					"city": "Reggio Calabria"
					},{
					    "name": "Regina",
					"code": "YQR",
					"kw": "",
					"city": "Regina"
					},{
					    "name": "Reims",
					"code": "RHE",
					"kw": "",
					"city": "Reims"
					},{
					    "name": "Reivilo",
					"code": "RVO",
					"kw": "",
					"city": "Reivilo"
					},{
					    "name": "Rengat",
					"code": "RGT",
					"kw": "",
					"city": "Rengat"
					},{
					    "name": "Renmark",
					"code": "RMK",
					"kw": "",
					"city": "Renmark"
					},{
					    "name": "Rennell",
					"code": "RNL",
					"kw": "",
					"city": "Rennell"
					},{
					    "name": "Rennes St Jacques Airport",
					"code": "RNS",
					"kw": "",
					"city": "Rennes"
					},{
					    "name": "Repulse Bay",
					"code": "YUT",
					"kw": "",
					"city": "Repulse Bay"
					},{
					    "name": "Resistencia",
					"code": "RES",
					"kw": "",
					"city": "Resistencia"
					},{
					    "name": "Resolute",
					"code": "YRB",
					"kw": "",
					"city": "Resolute"
					},{
					    "name": "Reus",
					"code": "REU",
					"kw": "",
					"city": "Reus"
					},{
					    "name": "Rewa",
					"code": "REW",
					"kw": "",
					"city": "Rewa"
					},{
					    "name": "Reyes",
					"code": "REY",
					"kw": "",
					"city": "Reyes"
					},{
					    "name": "Reykholar",
					"code": "RHA",
					"kw": "",
					"city": "Reykholar"
					},{
					    "name": "Reykjavik Keflavik ",
					"code": "KEF",
					"kw": "",
					"city": "Reykjavik"
					},{
					    "name": "Reynosa",
					"code": "REX",
					"kw": "",
					"city": "Reynosa"
					},{
					    "name": "Rhodes",
					"code": "RHO",
					"kw": "",
					"city": "Rhodes"
					},{
					    "name": "Riberalta",
					"code": "RIB",
					"kw": "",
					"city": "Riberalta"
					},{
					    "name": "Richard Toll",
					"code": "RDT",
					"kw": "",
					"city": "Richard Toll"
					},{
					    "name": "Richards Bay",
					"code": "RCB",
					"kw": "",
					"city": "Richards Bay"
					},{
					    "name": "Richmond",
					"code": "RIC",
					"kw": "",
					"city": "Richmond"
					},{
					    "name": "Rifle",
					"code": "RIL",
					"kw": "",
					"city": "Rifle"
					},{
					    "name": "Rigolet",
					"code": "YRG",
					"kw": "",
					"city": "Rigolet"
					},{
					    "name": "Rijeka",
					"code": "RJK",
					"kw": "",
					"city": "Rijeka"
					},{
					    "name": "Rimini",
					"code": "RMI",
					"kw": "",
					"city": "Rimini"
					},{
					    "name": "Ringi Cove",
					"code": "RIN",
					"kw": "",
					"city": "Ringi Cove"
					},{
					    "name": "Rio Cuarto",
					"code": "RCU",
					"kw": "",
					"city": "Rio Cuarto"
					},{
					    "name": "Rio Frio",
					"code": "RFR",
					"kw": "",
					"city": "Rio Frio"
					},{
					    "name": "Rio Gallegos",
					"code": "RGL",
					"kw": "",
					"city": "Rio Gallegos"
					},{
					    "name": "Rio Grande",
					"code": "RGA",
					"kw": "",
					"city": "Rio Grande"
					},{
					    "name": "Rio Mayo",
					"code": "ROY",
					"kw": "",
					"city": "Rio Mayo"
					},{
					    "name": "Rio Tigre",
					"code": "RIT",
					"kw": "",
					"city": "Rio Tigre"
					},{
					    "name": "Rio Turbio",
					"code": "RYO",
					"kw": "",
					"city": "Rio Turbio"
					},{
					    "name": "Rio de Janeiro International ",
					"code": "GIG",
					"kw": "",
					"city": "Rio de Janeiro"
					},{
					    "name": "Rio de Janeiro Santos Dumont ",
					"code": "SDU",
					"kw": "",
					"city": "Rio de Janeiro"
					},{
					    "name": "Riohacha",
					"code": "RCH",
					"kw": "",
					"city": "Riohacha"
					},{
					    "name": "Rioja",
					"code": "RIJ",
					"kw": "",
					"city": "Rioja"
					},{
					    "name": "Rishiri",
					"code": "RIS",
					"kw": "",
					"city": "Rishiri"
					},{
					    "name": "River Cess",
					"code": "RVC",
					"kw": "",
					"city": "River Cess"
					},{
					    "name": "Rivera",
					"code": "RVY",
					"kw": "",
					"city": "Rivera"
					},{
					    "name": "Riverside Municipal ",
					"code": "RAL",
					"kw": "",
					"city": "Riverside"
					},{
					    "name": "Riyadh",
					"code": "RUH",
					"kw": "",
					"city": "Riyadh"
					},{
					    "name": "Riyan Mukalla",
					"code": "RIY",
					"kw": "",
					"city": "Riyan Mukalla"
					},{
					    "name": "Roanne",
					"code": "RNE",
					"kw": "",
					"city": "Roanne"
					},{
					    "name": "Roanoke",
					"code": "ROA",
					"kw": "",
					"city": "Roanoke"
					},{
					    "name": "Roanoke Rapids",
					"code": "RZZ",
					"kw": "",
					"city": "Roanoke Rapids"
					},{
					    "name": "Roatan",
					"code": "RTB",
					"kw": "",
					"city": "Roatan"
					},{
					    "name": "Robinson River",
					"code": "RNR",
					"kw": "",
					"city": "Robinson River"
					},{
					    "name": "Robinvale",
					"code": "RBC",
					"kw": "",
					"city": "Robinvale"
					},{
					    "name": "Robore",
					"code": "RBO",
					"kw": "",
					"city": "Robore"
					},{
					    "name": "Roche Harbor",
					"code": "RCE",
					"kw": "",
					"city": "Roche Harbor"
					},{
					    "name": "Rochester Municipal ",
					"code": "RST",
					"kw": "",
					"city": "Rochester"
					},{
					    "name": "Rock Sound",
					"code": "RSD",
					"kw": "",
					"city": "Rock Sound"
					},{
					    "name": "Rockford Greater Rockford ",
					"code": "RFD",
					"kw": "",
					"city": "Rockford"
					},{
					    "name": "Rocky Mount",
					"code": "RWI",
					"kw": "",
					"city": "Rocky Mount"
					},{
					    "name": "Rodez",
					"code": "RDZ",
					"kw": "",
					"city": "Rodez"
					},{
					    "name": "Rodrigues Island",
					"code": "RRG",
					"kw": "",
					"city": "Rodrigues Island"
					},{
					    "name": "Roervik",
					"code": "RVK",
					"kw": "",
					"city": "Roervik"
					},{
					    "name": "Rogers",
					"code": "ROG",
					"kw": "",
					"city": "Rogers"
					},{
					    "name": "Rolla",
					"code": "RLA",
					"kw": "",
					"city": "Rolla"
					},{
					    "name": "Rome Fiumicino ",
					"code": "FCO",
					"kw": "",
					"city": "Rome"
					},{
					    "name": "Rome Ciampino ",
					"code": "CIA",
					"kw": "",
					"city": "Rome"
					},{
					    "name": "Rondon",
					"code": "RON",
					"kw": "",
					"city": "Rondon"
					},{
					    "name": "Rondonopolis",
					"code": "ROO",
					"kw": "",
					"city": "Rondonopolis"
					},{
					    "name": "Ronneby",
					"code": "RNB",
					"kw": "",
					"city": "Ronneby"
					},{
					    "name": "Roper Valley",
					"code": "RPV",
					"kw": "",
					"city": "Roper Valley"
					},{
					    "name": "Roros",
					"code": "RRS",
					"kw": "",
					"city": "Roros"
					},{
					    "name": "Rosario",
					"code": "ROS",
					"kw": "",
					"city": "Rosario"
					},{
					    "name": "Roseires",
					"code": "RSS",
					"kw": "",
					"city": "Roseires"
					},{
					    "name": "Rosh Pina",
					"code": "RPN",
					"kw": "",
					"city": "Rosh Pina"
					},{
					    "name": "Rost",
					"code": "RET",
					"kw": "",
					"city": "Rost"
					},{
					    "name": "Rostov",
					"code": "ROV",
					"kw": "",
					"city": "Rostov"
					},{
					    "name": "Rota",
					"code": "ROP",
					"kw": "",
					"city": "Rota"
					},{
					    "name": "Rothesay",
					"code": "RAY",
					"kw": "",
					"city": "Rothesay"
					},{
					    "name": "Roti",
					"code": "RTI",
					"kw": "",
					"city": "Roti"
					},{
					    "name": "Rotorua",
					"code": "ROT",
					"kw": "",
					"city": "Rotorua"
					},{
					    "name": "Rotterdam ",
					"code": "RTM",
					"kw": "",
					"city": "Rotterdam"
					},{
					    "name": "Rotuma Island",
					"code": "RTA",
					"kw": "",
					"city": "Rotuma Island"
					},{
					    "name": "Rouen",
					"code": "URO",
					"kw": "",
					"city": "Rouen"
					},{
					    "name": "Rovaniemi",
					"code": "RVN",
					"kw": "",
					"city": "Rovaniemi"
					},{
					    "name": "Roxas",
					"code": "RXS",
					"kw": "",
					"city": "Roxas"
					},{
					    "name": "Royan",
					"code": "RYN",
					"kw": "",
					"city": "Royan"
					},{
					    "name": "Rundu",
					"code": "NDU",
					"kw": "",
					"city": "Rundu"
					},{
					    "name": "Rurrenabaque",
					"code": "RBQ",
					"kw": "",
					"city": "Rurrenabaque"
					},{
					    "name": "Rurutu",
					"code": "RUR",
					"kw": "",
					"city": "Rurutu"
					},{
					    "name": "Ruse",
					"code": "ROU",
					"kw": "",
					"city": "Ruse"
					},{
					    "name": "Ruteng",
					"code": "RTG",
					"kw": "",
					"city": "Ruteng"
					},{
					    "name": "Rzeszow",
					"code": "RZE",
					"kw": "",
					"city": "Rzeszow"
					},{
					    "name": "Sa Dah",
					"code": "SYE",
					"kw": "",
					"city": "Sa Dah"
					},{
					    "name": "Saarbruecken HBF Rail Station",
					"code": "QFZ",
					"kw": "",
					"city": "Saarbrucken"
					},{
					    "name": "Saarbrucken Ensheim Airport",
					"code": "SCN",
					"kw": "",
					"city": "Saarbrucken"
					},{
					    "name": "Saba",
					"code": "SAB",
					"kw": "",
					"city": "Saba"
					},{
					    "name": "Sabah",
					"code": "SBV",
					"kw": "",
					"city": "Sabah"
					},{
					    "name": "Sabang",
					"code": "SBG",
					"kw": "",
					"city": "Sabang"
					},{
					    "name": "Sachs Harbour",
					"code": "YSY",
					"kw": "",
					"city": "Sachs Harbour"
					},{
					    "name": "Sacramento Executive ",
					"code": "SAC",
					"kw": "",
					"city": "Sacramento"
					},{
					    "name": "Sacramento International ",
					"code": "SMF",
					"kw": "",
					"city": "Sacramento"
					},{
					    "name": "Saenz Pena",
					"code": "SZQ",
					"kw": "",
					"city": "Saenz Pena"
					},{
					    "name": "Safia",
					"code": "SFU",
					"kw": "",
					"city": "Safia"
					},{
					    "name": "Sahabat 16",
					"code": "SXS",
					"kw": "",
					"city": "Sahabat 16"
					},{
					    "name": "Saidor",
					"code": "SDI",
					"kw": "",
					"city": "Saidor"
					},{
					    "name": "Saidpur",
					"code": "SPD",
					"kw": "",
					"city": "Saidpur"
					},{
					    "name": "Saidu Sharif",
					"code": "SDT",
					"kw": "",
					"city": "Saidu Sharif"
					},{
					    "name": "Saipan",
					"code": "SPN",
					"kw": "",
					"city": "Saipan"
					},{
					    "name": "Sakon Nakhon",
					"code": "SNO",
					"kw": "",
					"city": "Sakon Nakhon"
					},{
					    "name": "Sal",
					"code": "SID",
					"kw": "",
					"city": "Sal"
					},{
					    "name": "Salida",
					"code": "SLT",
					"kw": "",
					"city": "Salida"
					},{
					    "name": "Salinas",
					"code": "SNS",
					"kw": "",
					"city": "Salinas"
					},{
					    "name": "Salt Cay",
					"code": "SLX",
					"kw": "",
					"city": "Salt Cay"
					},{
					    "name": "Salta",
					"code": "SLA",
					"kw": "",
					"city": "Salta"
					},{
					    "name": "Saltillo",
					"code": "SLW",
					"kw": "",
					"city": "Saltillo"
					},{
					    "name": "Salvador",
					"code": "SSA",
					"kw": "",
					"city": "Salvador"
					},{
					    "name": "Salzburg",
					"code": "SZG",
					"kw": "",
					"city": "Salzburg"
					},{
					    "name": "Sam Neua",
					"code": "NEU",
					"kw": "",
					"city": "Sam Neua"
					},{
					    "name": "Samara",
					"code": "KUF",
					"kw": "",
					"city": "Samara"
					},{
					    "name": "Samarinda",
					"code": "SRI",
					"kw": "",
					"city": "Samarinda"
					},{
					    "name": "Samarkand",
					"code": "SKD",
					"kw": "",
					"city": "Samarkand"
					},{
					    "name": "Sambava",
					"code": "SVB",
					"kw": "",
					"city": "Sambava"
					},{
					    "name": "Samburu",
					"code": "UAS",
					"kw": "",
					"city": "Samburu"
					},{
					    "name": "Samos",
					"code": "SMI",
					"kw": "",
					"city": "Samos"
					},{
					    "name": "Sampit",
					"code": "SMQ",
					"kw": "",
					"city": "Sampit"
					},{
					    "name": "Samsun Carsamba Airport",
					"code": "SZF",
					"kw": "",
					"city": "Samsun"
					},{
					    "name": "Samsun Airport",
					"code": "SSX",
					"kw": "",
					"city": "Samsun"
					},{
					    "name": "San Andres Island",
					"code": "ADZ",
					"kw": "",
					"city": "San Andres Island"
					},{
					    "name": "San Andros",
					"code": "SAQ",
					"kw": "",
					"city": "San Andros"
					},{
					    "name": "San Angelo Mathis Field",
					"code": "SJT",
					"kw": "",
					"city": "San Angelo"
					},{
					    "name": "San Borja",
					"code": "SRJ",
					"kw": "",
					"city": "San Borja"
					},{
					    "name": "San Diego International",
					"code": "SAN",
					"kw": "",
					"city": "San Diego"
					},{
					    "name": "San Diego Brown Municipal ",
					"code": "SDM",
					"kw": "",
					"city": "San Diego"
					},{
					    "name": "San Diego Montgomery Field",
					"code": "MYF",
					"kw": "",
					"city": "San Diego"
					},{
					    "name": "San Francisco Int'l ",
					"code": "SFO",
					"kw": "",
					"city": "San Francisco"
					},{
					    "name": "San Luis",
					"code": "LUQ",
					"kw": "",
					"city": "San Luis"
					},{
					    "name": "San Luis Obispo County ",
					"code": "SBP",
					"kw": "",
					"city": "San Luis Obispo"
					},{
					    "name": "San Luis Obispo O'Sullivan AAF",
					"code": "CSL",
					"kw": "",
					"city": "San Luis Obispo"
					},{
					    "name": "San Luis Potosi",
					"code": "SLP",
					"kw": "",
					"city": "San Luis Potosi"
					},{
					    "name": "San Martin de Los Andes",
					"code": "CPC",
					"kw": "",
					"city": "San Martin de Los Andes"
					},{
					    "name": "San Miguel",
					"code": "NMG",
					"kw": "",
					"city": "San Miguel"
					},{
					    "name": "San Pedro",
					"code": "SPR",
					"kw": "",
					"city": "San Pedro"
					},{
					    "name": "San Tome",
					"code": "SOM",
					"kw": "",
					"city": "San Tome"
					},{
					    "name": "Sanaa",
					"code": "SAH",
					"kw": "",
					"city": "Sanaa"
					},{
					    "name": "Sanandaj",
					"code": "SDG",
					"kw": "",
					"city": "Sanandaj"
					},{
					    "name": "Sandakan",
					"code": "SDK",
					"kw": "",
					"city": "Sandakan"
					},{
					    "name": "Sandane",
					"code": "SDN",
					"kw": "",
					"city": "Sandane"
					},{
					    "name": "Sanday",
					"code": "NDY",
					"kw": "",
					"city": "Sanday"
					},{
					    "name": "Sandnessjoen",
					"code": "SSJ",
					"kw": "",
					"city": "Sandnessjoen"
					},{
					    "name": "Sangapi",
					"code": "SGK",
					"kw": "",
					"city": "Sangapi"
					},{
					    "name": "Sanikiluaq",
					"code": "YSK",
					"kw": "",
					"city": "Sanikiluaq"
					},{
					    "name": "Santa Ana",
					"code": "SBL",
					"kw": "",
					"city": "Santa Ana"
					},{
					    "name": "Santa Ana John Wayne Intl ",
					"code": "SNA",
					"kw": "",
					"city": "Santa Ana"
					},{
					    "name": "Santa Ana Island",
					"code": "NNB",
					"kw": "",
					"city": "Santa Ana Island"
					},{
					    "name": "Santa Barbara Municipal ",
					"code": "SBA",
					"kw": "",
					"city": "Santa Barbara"
					},{
					    "name": "Santa Barbara Zulia",
					"code": "STB",
					"kw": "",
					"city": "Santa Barbara Zulia"
					},{
					    "name": "Santa Maria",
					"code": "SMA",
					"kw": "",
					"city": "Santa Maria"
					},{
					    "name": "Santa Maria",
					"code": "SMX",
					"kw": "",
					"city": "Santa Maria"
					},{
					    "name": "Santa Marta",
					"code": "SMR",
					"kw": "",
					"city": "Santa Marta"
					},{
					    "name": "Santa Rosa",
					"code": "STS",
					"kw": "",
					"city": "Santa Rosa"
					},{
					    "name": "Santa Rosalia",
					"code": "SSL",
					"kw": "",
					"city": "Santa Rosalia"
					},{
					    "name": "Santiago",
					"code": "SCU",
					"kw": "",
					"city": "Santiago"
					},{
					    "name": "Santiago Comodoro Arturo Merino Benitez",
					"code": "SCL",
					"kw": "",
					"city": "Santiago"
					},{
					    "name": "Santiago",
					"code": "STI",
					"kw": "",
					"city": "Santiago"
					},{
					    "name": "Santiago Del Estero",
					"code": "SDE",
					"kw": "",
					"city": "Santiago Del Estero"
					},{
					    "name": "Santiago de Compostela",
					"code": "SCQ",
					"kw": "",
					"city": "Santiago de Compostela"
					},{
					    "name": "Santo Antao",
					"code": "NTO",
					"kw": "",
					"city": "Santo Antao"
					},{
					    "name": "Santo Domingo",
					"code": "STD",
					"kw": "",
					"city": "Santo Domingo"
					},{
					    "name": "Sao Lourenco",
					"code": "SSO",
					"kw": "",
					"city": "Sao Lourenco"
					},{
					    "name": "Sao Luiz",
					"code": "SLZ",
					"kw": "",
					"city": "Sao Luiz"
					},{
					    "name": "Sao Nicolau",
					"code": "SNE",
					"kw": "",
					"city": "Sao Nicolau"
					},{
					    "name": "Sara",
					"code": "SSR",
					"kw": "",
					"city": "Sara"
					},{
					    "name": "Sarajevo",
					"code": "SJJ",
					"kw": "",
					"city": "Sarajevo"
					},{
					    "name": "Saranac Lake",
					"code": "SLK",
					"kw": "",
					"city": "Saranac Lake"
					},{
					    "name": "Saratov",
					"code": "RTW",
					"kw": "",
					"city": "Saratov"
					},{
					    "name": "Saravena",
					"code": "RVE",
					"kw": "",
					"city": "Saravena"
					},{
					    "name": "Sargodha ",
					"code": "SGI",
					"kw": "",
					"city": "Sargodha"
					},{
					    "name": "Sarh",
					"code": "SRH",
					"kw": "",
					"city": "Sarh"
					},{
					    "name": "Sarmi",
					"code": "ZRM",
					"kw": "",
					"city": "Sarmi"
					},{
					    "name": "Saskatoon",
					"code": "YXE",
					"kw": "",
					"city": "Saskatoon"
					},{
					    "name": "Sassandra",
					"code": "ZSS",
					"kw": "",
					"city": "Sassandra"
					},{
					    "name": "Sasstown",
					"code": "SAZ",
					"kw": "",
					"city": "Sasstown"
					},{
					    "name": "Satna",
					"code": "TNI",
					"kw": "",
					"city": "Satna"
					},{
					    "name": "Satu Mare",
					"code": "SUJ",
					"kw": "",
					"city": "Satu Mare"
					},{
					    "name": "Satwag",
					"code": "SWG",
					"kw": "",
					"city": "Satwag"
					},{
					    "name": "Saudarkrokur",
					"code": "SAK",
					"kw": "",
					"city": "Saudarkrokur"
					},{
					    "name": "Saumlaki",
					"code": "SXK",
					"kw": "",
					"city": "Saumlaki"
					},{
					    "name": "Saurimo",
					"code": "VHC",
					"kw": "",
					"city": "Saurimo"
					},{
					    "name": "Savannah International ",
					"code": "SAV",
					"kw": "",
					"city": "Savannah"
					},{
					    "name": "Savo",
					"code": "SVY",
					"kw": "",
					"city": "Savo"
					},{
					    "name": "Savonlinna",
					"code": "SVL",
					"kw": "",
					"city": "Savonlinna"
					},{
					    "name": "Savusavu",
					"code": "SVU",
					"kw": "",
					"city": "Savusavu"
					},{
					    "name": "Sawu",
					"code": "SAU",
					"kw": "",
					"city": "Sawu"
					},{
					    "name": "Sayaboury",
					"code": "ZBY",
					"kw": "",
					"city": "Sayaboury"
					},{
					    "name": "Sebba",
					"code": "XSE",
					"kw": "",
					"city": "Sebba"
					},{
					    "name": "Sebha",
					"code": "SEB",
					"kw": "",
					"city": "Sebha"
					},{
					    "name": "Sedom",
					"code": "SED",
					"kw": "",
					"city": "Sedom"
					},{
					    "name": "Sedona",
					"code": "SDX",
					"kw": "",
					"city": "Sedona"
					},{
					    "name": "Sege",
					"code": "EGM",
					"kw": "",
					"city": "Sege"
					},{
					    "name": "Segou",
					"code": "SZU",
					"kw": "",
					"city": "Segou"
					},{
					    "name": "Seguela",
					"code": "SEO",
					"kw": "",
					"city": "Seguela"
					},{
					    "name": "Sehonghong",
					"code": "SHK",
					"kw": "",
					"city": "Sehonghong"
					},{
					    "name": "Sehulea",
					"code": "SXH",
					"kw": "",
					"city": "Sehulea"
					},{
					    "name": "Seiyun",
					"code": "GXF",
					"kw": "",
					"city": "Seiyun"
					},{
					    "name": "Selebi-Phikwe",
					"code": "PKW",
					"kw": "",
					"city": "Selebi-Phikwe"
					},{
					    "name": "Selibaby",
					"code": "SEY",
					"kw": "",
					"city": "Selibaby"
					},{
					    "name": "Semarang",
					"code": "SRG",
					"kw": "",
					"city": "Semarang"
					},{
					    "name": "Semipalatinsk",
					"code": "PLX",
					"kw": "",
					"city": "Semipalatinsk"
					},{
					    "name": "Senanga",
					"code": "SXG",
					"kw": "",
					"city": "Senanga"
					},{
					    "name": "Sendai",
					"code": "SDJ",
					"kw": "",
					"city": "Sendai"
					},{
					    "name": "Senggeh",
					"code": "SEH",
					"kw": "",
					"city": "Senggeh"
					},{
					    "name": "Senggo",
					"code": "ZEG",
					"kw": "",
					"city": "Senggo"
					},{
					    "name": "Senhor Do Bonfim",
					"code": "SEI",
					"kw": "",
					"city": "Senhor Do Bonfim"
					},{
					    "name": "Seno",
					"code": "SND",
					"kw": "",
					"city": "Seno"
					},{
					    "name": "Seo De Urgel",
					"code": "LEU",
					"kw": "",
					"city": "Seo De Urgel"
					},{
					    "name": "Incheon International Airport",
					"code": "ICN",
					"kw": "",
					"city": "Seoul"
					},{
					    "name": "Seoul Kimpo Intl Airport",
					"code": "GMP",
					"kw": "",
					"city": "Seoul"
					},{
					    "name": "Seoul Kimpo International ",
					"code": "SEL",
					"kw": "",
					"city": "Seoul"
					},{
					    "name": "Sert",
					"code": "SRX",
					"kw": "",
					"city": "Sert"
					},{
					    "name": "Serui",
					"code": "ZRI",
					"kw": "",
					"city": "Serui"
					},{
					    "name": "Sesheke",
					"code": "SJQ",
					"kw": "",
					"city": "Sesheke"
					},{
					    "name": "Seshutes",
					"code": "SHZ",
					"kw": "",
					"city": "Seshutes"
					},{
					    "name": "Seville",
					"code": "SVQ",
					"kw": "",
					"city": "Seville"
					},{
					    "name": "Shakiso",
					"code": "SKR",
					"kw": "",
					"city": "Shakiso"
					},{
					    "name": "Shaktoolik",
					"code": "SKK",
					"kw": "",
					"city": "Shaktoolik"
					},{
					    "name": "Shamattawa",
					"code": "ZTM",
					"kw": "",
					"city": "Shamattawa"
					},{
					    "name": "Sharjah",
					"code": "SHJ",
					"kw": "",
					"city": "Sharjah"
					},{
					    "name": "Sharm El Sheikh",
					"code": "SSH",
					"kw": "",
					"city": "Sharm El Sheikh"
					},{
					    "name": "Sharurah",
					"code": "SHW",
					"kw": "",
					"city": "Sharurah"
					},{
					    "name": "Shetland Islands Sumburgh ",
					"code": "LSI",
					"kw": "",
					"city": "Shetland Islands"
					},{
					    "name": "Shetland Islands Lerwick/Tingwall ",
					"code": "LWK",
					"kw": "",
					"city": "Shetland Islands"
					},{
					    "name": "Shimkent",
					"code": "CIT",
					"kw": "",
					"city": "Shimkent"
					},{
					    "name": "Shiraz",
					"code": "SYZ",
					"kw": "",
					"city": "Shiraz"
					},{
					    "name": "Sholapur",
					"code": "SSE",
					"kw": "",
					"city": "Sholapur"
					},{
					    "name": "Sialum",
					"code": "SXA",
					"kw": "",
					"city": "Sialum"
					},{
					    "name": "Simanggang",
					"code": "SGG",
					"kw": "",
					"city": "Simanggang"
					},{
					    "name": "Singapore Seletar ",
					"code": "XSP",
					"kw": "",
					"city": "Singapore"
					},{
					    "name": "Singapore Changi ",
					"code": "SIN",
					"kw": "",
					"city": "Singapore"
					},{
					    "name": "Sishen",
					"code": "SIS",
					"kw": "",
					"city": "Sishen"
					},{
					    "name": "Sisimiut",
					"code": "JHS",
					"kw": "",
					"city": "Sisimiut"
					},{
					    "name": "Skovde",
					"code": "KVB",
					"kw": "",
					"city": "Skovde"
					},{
					    "name": "Soderhamn",
					"code": "SOO",
					"kw": "",
					"city": "Soderhamn"
					},{
					    "name": "Sodertalje",
					"code": "JSO",
					"kw": "",
					"city": "Sodertalje"
					},{
					    "name": "Sonderborg Airport",
					"code": "SGD",
					"kw": "",
					"city": "Sonderborg"
					},{
					    "name": "Sorkjosen",
					"code": "SOJ",
					"kw": "",
					"city": "Sorkjosen"
					},{
					    "name": "South Bend",
					"code": "SBN",
					"kw": "",
					"city": "South Bend"
					},{
					    "name": "South Caicos",
					"code": "XSC",
					"kw": "",
					"city": "South Caicos"
					},{
					    "name": "South Indian Lake",
					"code": "XSI",
					"kw": "",
					"city": "South Indian Lake"
					},{
					    "name": "South Naknek",
					"code": "WSN",
					"kw": "",
					"city": "South Naknek"
					},{
					    "name": "Southampton",
					"code": "SOU",
					"kw": "",
					"city": "Southampton"
					},{
					    "name": "Southend",
					"code": "SEN",
					"kw": "",
					"city": "Southend"
					},{
					    "name": "Southern Pines",
					"code": "SOP",
					"kw": "",
					"city": "Southern Pines"
					},{
					    "name": "St Anthony",
					"code": "YAY",
					"kw": "",
					"city": "St Anthony"
					},{
					    "name": "St Barthelemy",
					"code": "SBH",
					"kw": "",
					"city": "St Barthelemy"
					},{
					    "name": "St Brieuc",
					"code": "SBK",
					"kw": "",
					"city": "St Brieuc"
					},{
					    "name": "St Denis de la Reunion",
					"code": "RUN",
					"kw": "",
					"city": "St Denis de la Reunion"
					},{
					    "name": "St Etienne",
					"code": "EBU",
					"kw": "",
					"city": "St Etienne"
					},{
					    "name": "St Eustatius",
					"code": "EUX",
					"kw": "",
					"city": "St Eustatius"
					},{
					    "name": "St Louis Lambert Intl ",
					"code": "STL",
					"kw": "",
					"city": "St Louis"
					},{
					    "name": "St Martin Grand Case ",
					"code": "CCE",
					"kw": "",
					"city": "St Martin"
					},{
					    "name": "St Martin Esperance ",
					"code": "SFG",
					"kw": "",
					"city": "St Martin"
					},{
					    "name": "St Moritz",
					"code": "SMV",
					"kw": "",
					"city": "St Moritz"
					},{
					    "name": "St Nazaire",
					"code": "SNR",
					"kw": "",
					"city": "St Nazaire"
					},{
					    "name": "St Paul",
					"code": "ZSP",
					"kw": "",
					"city": "St Paul"
					},{
					    "name": "St Petersburg Pulkovo ",
					"code": "LED",
					"kw": "",
					"city": "St Petersburg"
					},{
					    "name": "St Petersburg Rzhevka",
					"code": "RVH",
					"kw": "",
					"city": "St Petersburg"
					},{
					    "name": "Stara Zagora",
					"code": "SZR",
					"kw": "",
					"city": "Stara Zagora"
					},{
					    "name": "Ste Marie",
					"code": "SMS",
					"kw": "",
					"city": "Ste Marie"
					},{
					    "name": "Stockholm Arlanda ",
					"code": "ARN",
					"kw": "",
					"city": "Stockholm"
					},{
					    "name": "Stockholm Bromma ",
					"code": "BMA",
					"kw": "",
					"city": "Stockholm"
					},{
					    "name": "Stockholm Skavsta Airport",
					"code": "NYO",
					"kw": "",
					"city": "Stockholm"
					},{
					    "name": "Sumter Shaw AFB",
					"code": "SSC",
					"kw": "",
					"city": "Sumter"
					},{
					    "name": "Sun City",
					"code": "NTY",
					"kw": "",
					"city": "Sun City"
					},{
					    "name": "Sun Valley Friedman Memorial ",
					"code": "SUN",
					"kw": "",
					"city": "Sun Valley"
					},{
					    "name": "Surabaya",
					"code": "SUB",
					"kw": "",
					"city": "Surabaya"
					},{
					    "name": "Sydney Palm Beach SPB",
					"code": "LBH",
					"kw": "",
					"city": "Sydney"
					},{
					    "name": "Sydney Kingsford Smith ",
					"code": "SYD",
					"kw": "",
					"city": "Sydney"
					},{
					    "name": "Sydney Au-Rose Bay ",
					"code": "RSE",
					"kw": "",
					"city": "Sydney"
					},{
					    "name": "Syktyvkar",
					"code": "SCW",
					"kw": "",
					"city": "Syktyvkar"
					},{
					    "name": "Tabriz",
					"code": "TBZ",
					"kw": "",
					"city": "Tabriz"
					},{
					    "name": "Tachilek",
					"code": "THL",
					"kw": "",
					"city": "Tachilek"
					},{
					    "name": "Taegu",
					"code": "TAE",
					"kw": "",
					"city": "Taegu"
					},{
					    "name": "Taichung Airport",
					"code": "RMQ",
					"kw": "",
					"city": "Taichung"
					},{
					    "name": "Taoyuan",
					    "code": "TPE",
					    "kw": "Taoyuan Airport",
					    "city": "Taibei"
					},{
					    "name": "Taisha",
					"code": "TSC",
					"kw": "",
					"city": "Taisha"
					},{
					    "name": "Tak",
					"code": "TKT",
					"kw": "",
					"city": "Tak"
					},{
					    "name": "Takamatsu",
					"code": "TAK",
					"kw": "",
					"city": "Takamatsu"
					},{
					    "name": "Tandag",
					"code": "TDG",
					"kw": "",
					"city": "Tandag"
					},{
					    "name": "Tanga",
					"code": "TGT",
					"kw": "",
					"city": "Tanga"
					},{
					    "name": "Tanjung Pandan",
					"code": "TJQ",
					"kw": "",
					"city": "Tanjung Pandan"
					},{
					    "name": "Tanjung Pinang",
					"code": "TNJ",
					"kw": "",
					"city": "Tanjung Pinang"
					},{
					    "name": "Tanjung Selor",
					"code": "TJS",
					"kw": "",
					"city": "Tanjung Selor"
					},{
					    "name": "Tapaktuan",
					"code": "TPK",
					"kw": "",
					"city": "Tapaktuan"
					},{
					    "name": "Tarakan",
					"code": "TRK",
					"kw": "",
					"city": "Tarakan"
					},{
					    "name": "Taramajima",
					"code": "TRA",
					"kw": "",
					"city": "Taramajima"
					},{
					    "name": "Tashkent",
					"code": "TAS",
					"kw": "",
					"city": "Tashkent"
					},{
					    "name": "Tasiilaq",
					"code": "AGM",
					"kw": "",
					"city": "Tasiilaq"
					},{
					    "name": "Tawau",
					"code": "TWU",
					"kw": "",
					"city": "Tawau"
					},{
					    "name": "Tbilisi",
					"code": "TBS",
					"kw": "",
					"city": "Tbilisi"
					},{
					    "name": "Tchibanga",
					"code": "TCH",
					"kw": "",
					"city": "Tchibanga"
					},{
					    "name": "Tchien",
					"code": "THC",
					"kw": "",
					"city": "Tchien"
					},{
					    "name": "Te Anau",
					"code": "TEU",
					"kw": "",
					"city": "Te Anau"
					},{
					    "name": "Teesside",
					"code": "MME",
					"kw": "",
					"city": "Teesside"
					},{
					    "name": "TEHRAN IMAM KHOMEINI INTERNATIONAL APT",
					"code": "IKA",
					"kw": "",
					"city": "Tehran"
					},{
					    "name": "Tehran",
					"code": "THR",
					"kw": "",
					"city": "Tehran"
					},{
					    "name": "Tekin",
					"code": "TKW",
					"kw": "",
					"city": "Tekin"
					},{
					    "name": "Teller Mission",
					"code": "KTS",
					"kw": "",
					"city": "Teller Mission"
					},{
					    "name": "Terre-de-Haut",
					"code": "LSS",
					"kw": "",
					"city": "Terre-de-Haut"
					},{
					    "name": "Tetuan",
					"code": "TTU",
					"kw": "",
					"city": "Tetuan"
					},{
					    "name": "Tezu",
					"code": "TEI",
					"kw": "",
					"city": "Tezu"
					},{
					    "name": "Thandwe",
					"code": "SNW",
					"kw": "",
					"city": "Thandwe"
					},{
					    "name": "The Pas",
					"code": "YQD",
					"kw": "",
					"city": "The Pas"
					},{
					    "name": "Thessaloniki",
					"code": "SKG",
					"kw": "",
					"city": "Thessaloniki"
					},{
					    "name": "Thisted",
					"code": "TED",
					"kw": "",
					"city": "Thisted"
					},{
					    "name": "Tiga",
					"code": "TGJ",
					"kw": "",
					"city": "Tiga"
					},{
					    "name": "Tignes",
					"code": "TGF",
					"kw": "",
					"city": "Tignes"
					},{
					    "name": "Tijuana",
					"code": "TIJ",
					"kw": "",
					"city": "Tijuana"
					},{
					    "name": "Tikal",
					"code": "TKM",
					"kw": "",
					"city": "Tikal"
					},{
					    "name": "Tikehau Atoll",
					"code": "TIH",
					"kw": "",
					"city": "Tikehau Atoll"
					},{
					    "name": "Tiko",
					"code": "TKC",
					"kw": "",
					"city": "Tiko"
					},{
					    "name": "Timaru",
					"code": "TIU",
					"kw": "",
					"city": "Timaru"
					},{
					    "name": "Timisoara",
					"code": "TSR",
					"kw": "",
					"city": "Timisoara"
					},{
					    "name": "Tioman",
					"code": "TOD",
					"kw": "",
					"city": "Tioman"
					},{
					    "name": "Tippi",
					"code": "TIE",
					"kw": "",
					"city": "Tippi"
					},{
					    "name": "Tiputini",
					"code": "TPN",
					"kw": "",
					"city": "Tiputini"
					},{
					    "name": "Tirana",
					"code": "TIA",
					"kw": "",
					"city": "Tirana"
					},{
					    "name": "Tiruchirapally",
					"code": "TRZ",
					"kw": "",
					"city": "Tiruchirapally"
					},{
					    "name": "Tirupati",
					"code": "TIR",
					"kw": "",
					"city": "Tirupati"
					},{
					    "name": "Tivat",
					"code": "TIV",
					"kw": "",
					"city": "Tivat"
					},{
					    "name": "Tobago",
					"code": "TAB",
					"kw": "",
					"city": "Tobago"
					},{
					    "name": "Tokunoshima",
					"code": "TKN",
					"kw": "",
					"city": "Tokunoshima"
					},{
					    "name": "Tokushima",
					"code": "TKS",
					"kw": "",
					"city": "Tokushima"
					},{
					    "name": "Tokyo Haneda ",
					"code": "HND",
					"kw": "",
					"city": "Tokyo"
					},{
					    "name": "Tokyo Narita ",
					"code": "NRT",
					"kw": "",
					"city": "Tokyo"
					},{
					    "name": "Toyama",
					"code": "TOY",
					"kw": "",
					"city": "Toyama"
					},{
					    "name": "Trang",
					"code": "TST",
					"kw": "",
					"city": "Trang"
					},{
					    "name": "Tripoli",
					"code": "KYE",
					"kw": "",
					"city": "Tripoli"
					},{
					    "name": "Truk",
					"code": "TKK",
					"kw": "",
					"city": "Truk"
					},{
					    "name": "Tsaratanana",
					"code": "TTS",
					"kw": "",
					"city": "Tsaratanana"
					},{
					    "name": "Tshikapa",
					"code": "TSH",
					"kw": "",
					"city": "Tshikapa"
					},{
					    "name": "Tshipise",
					"code": "TSD",
					"kw": "",
					"city": "Tshipise"
					},{
					    "name": "Tsiroanomandidy",
					"code": "WTS",
					"kw": "",
					"city": "Tsiroanomandidy"
					},{
					    "name": "Tsushima",
					"code": "TSJ",
					"kw": "",
					"city": "Tsushima"
					},{
					    "name": "Tulita Fort Norman",
					"code": "ZFN",
					"kw": "",
					"city": "Tulita Fort Norman"
					},{
					    "name": "Turbat",
					"code": "TUK",
					"kw": "",
					"city": "Turbat"
					},{
					    "name": "Turin Bus Station",
					"code": "ZTC",
					"kw": "",
					"city": "Turin"
					},{
					    "name": "Turin Citta di Torino Airport",
					"code": "TRN",
					"kw": "",
					"city": "Turin"
					},{
					    "name": "Turkmanbashi",
					"code": "KRW",
					"kw": "",
					"city": "Turkmanbashi"
					},{
					    "name": "Tyumen",
					"code": "TJM",
					"kw": "",
					"city": "Tyumen"
					},{
					    "name": "Tzaneen",
					"code": "LTA",
					"kw": "",
					"city": "Tzaneen"
					},{
					    "name": "Ulaanbaatar",
					"code": "ULN",
					"kw": "",
					"city": "Ulaanbaatar"
					},{
					    "name": "University",
					"code": "UOX",
					"kw": "",
					"city": "University"
					},{
					    "name": "Upington",
					"code": "UTN",
					"kw": "",
					"city": "Upington"
					},{
					    "name": "Valcheta",
					"code": "VCF",
					"kw": "",
					"city": "Valcheta"
					},{
					    "name": "Valle de Pascua",
					"code": "VDP",
					"kw": "",
					"city": "Valle de Pascua"
					},{
					    "name": "Valledupar",
					"code": "VUP",
					"kw": "",
					"city": "Valledupar"
					},{
					    "name": "Van",
					"code": "VAN",
					"kw": "",
					"city": "Van"
					},{
					    "name": "Vancouver Int'l ",
					"code": "YVR",
					"kw": "",
					"city": "Vancouver"
					},{
					    "name": "Vancouver Coal Harbour SPB",
					"code": "CXH",
					"kw": "",
					"city": "Vancouver"
					},{
					    "name": "Varadero Juan Gualberto Gomez ",
					"code": "VRA",
					"kw": "",
					"city": "Varadero"
					},{
					    "name": "Vichadero",
					"code": "VCH",
					"kw": "",
					"city": "Vichadero"
					},{
					    "name": "Viedma",
					"code": "VDM",
					"kw": "",
					"city": "Viedma"
					},{
					    "name": "Vientiane",
					"code": "VTE",
					"kw": "",
					"city": "Vientiane"
					},{
					    "name": "Vieques",
					"code": "VQS",
					"kw": "",
					"city": "Vieques"
					},{
					    "name": "Vila Real",
					"code": "VRL",
					"kw": "",
					"city": "Vila Real"
					},{
					    "name": "Villa Mercedes",
					"code": "VME",
					"kw": "",
					"city": "Villa Mercedes"
					},{
					    "name": "Villahermosa",
					"code": "VSA",
					"kw": "",
					"city": "Villahermosa"
					},{
					    "name": "Villamontes",
					"code": "VLM",
					"kw": "",
					"city": "Villamontes"
					},{
					    "name": "Villavicencio",
					"code": "VVC",
					"kw": "",
					"city": "Villavicencio"
					},{
					    "name": "Virac",
					"code": "VRC",
					"kw": "",
					"city": "Virac"
					},{
					    "name": "Vladikavkaz",
					"code": "OGZ",
					"kw": "",
					"city": "Vladikavkaz"
					},{
					    "name": "Vladivostok",
					"code": "VVO",
					"kw": "",
					"city": "Vladivostok"
					},{
					    "name": "Volgograd",
					"code": "VOG",
					"kw": "",
					"city": "Volgograd"
					},{
					    "name": "Vryheid",
					"code": "VYD",
					"kw": "",
					"city": "Vryheid"
					},{
					    "name": "Walvis Bay",
					"code": "WVB",
					"kw": "",
					"city": "Walvis Bay"
					},{
					    "name": "Warsaw",
					"code": "WAW",
					"kw": "",
					"city": "Warsaw"
					},{
					    "name": "Waterloo",
					"code": "ALO",
					"kw": "",
					"city": "Waterloo"
					},{
					    "name": "Wellington",
					"code": "WLG",
					"kw": "",
					"city": "Wellington"
					},{
					    "name": "Wha Ti  Lac la Martre",
					"code": "YLE",
					"kw": "",
					"city": "Wha Ti  Lac la Martre"
					},{
					    "name": "Whale Cove",
					"code": "YXN",
					"kw": "",
					"city": "Whale Cove"
					},{
					    "name": "Whyalla",
					"code": "WYA",
					"kw": "",
					"city": "Whyalla"
					},{
					    "name": "Wise",
					"code": "LNP",
					"kw": "",
					"city": "Wise"
					},{
					    "name": "Wrigley",
					"code": "YWY",
					"kw": "",
					"city": "Wrigley"
					},{
					    "name": "Wroclaw",
					"code": "WRO",
					"kw": "",
					"city": "Wroclaw"
					},{
					    "name": "Yamagata",
					"code": "GAJ",
					"kw": "",
					"city": "Yamagata"
					},{
					    "name": "Yangon",
					"code": "RGN",
					"kw": "",
					"city": "Yangon"
					},{
					    "name": "Yechon",
					"code": "YEC",
					"kw": "",
					"city": "Yechon"
					},{
					    "name": "Yogyakarta",
					"code": "JOG",
					"kw": "",
					"city": "Yogyakarta"
					},{
					    "name": "Yonago",
					"code": "YGJ",
					"kw": "",
					"city": "Yonago"
					},{
					    "name": "Yosu",
					"code": "RSU",
					"kw": "",
					"city": "Yosu"
					},{
					    "name": "Youngstown",
					"code": "YNG",
					"kw": "",
					"city": "Youngstown"
					},{
					    "name": "Yuzhno-Sakhalinsk",
					"code": "UUS",
					"kw": "",
					"city": "Yuzhno-Sakhalinsk"
					},{
					    "name": "Zachar Bay",
					"code": "KZB",
					"kw": "",
					"city": "Zachar Bay"
					},{
					    "name": "Zahedan",
					"code": "ZAH",
					"kw": "",
					"city": "Zahedan"
					},{
					    "name": "Zanzibar",
					"code": "ZNZ",
					"kw": "",
					"city": "Zanzibar"
					},{
					    "name": "Zapala",
					"code": "APZ",
					"kw": "",
					"city": "Zapala"
					},{
					    "name": "Zaragoza",
					"code": "ZAZ",
					"kw": "",
					"city": "Zaragoza"
					},{
					    "name": "Zero",
					"code": "ZER",
					"kw": "",
					"city": "Zero"
					},{
					    "name": "Zhambyl",
					"code": "DMB",
					"kw": "",
					"city": "Zhambyl"
					},{
					    "name": "Zhob",
					"code": "PZH",
					"kw": "",
					"city": "Zhob"
					},{
					    "name": "Zielona Gora",
					"code": "IEG",
					"kw": "",
					"city": "Zielona Gora"
					},{
					    "name": "Ziguinchor",
					"code": "ZIG",
					"kw": "",
					"city": "Ziguinchor"
					},{
					    "name": "Zilina",
					"code": "ILZ",
					"kw": "",
					"city": "Zilina"
					},{
					    "name": "Zinder",
					"code": "ZND",
					"kw": "",
					"city": "Zinder"
					},{
					    "name": "Zlin",
					"code": "GTW",
					"kw": "",
					"city": "Zlin"
					},{
						"name":"Zurich Unique Airport",
						"code":"ZRH",
						"kw":"",
						"city":"Zurich"
					}

			    ]
			},
			
			//西门子配置地址  TODO
			delivery:{
				//不需要配送地址的公司编码
				outDelivery:['SISW-SIEMENS','SSCX-SIEMENS','SNCL-SIEMENS','SHIL-SIEMENS','SHD-SIEMENS','MWB-SIEMENS','THVS-SIEMENS',
				             'SITH-SIEMENS','SMDT-SIEMENS','SSML-SIEMENS','STEZ-SIEMENS','SCPS-SIEMENS','SSAL-SIEMENS','SHVS-SIEMENS','SGTP-SIEMENS','SPEP-SIEMENS','SSME-SIEMENS'
				             ,'SSCX-SIEMENS','SWAS-SIEMENS','SEML-SIEMENS'],
				delivery_city:[
				               {
				                   "city": "A",
				                   "name": "A",
				                   "kw": "A",
				                   "code": "A"
				               },
				               {
				                   "city": "鞍山",
				                   "code": "AOG",
				                   "kw": "Anshan",
				                   "name": "鞍山"
				               },
				               {
				                   "city": "B",
				                   "name": "B",
				                   "kw": "B",
				                   "code": "B"
				               },
				               {
				                   "city": "包头",
				                   "code": "BAV",
				                   "kw": "Baotou",
				                   "name": "包头"
				               },
				               {
				                   "city": "北京",
				                   "code": "PEK",
				                   "kw": "Beijing",
				                   "name": "北京"
				               },
				               {
				                   "city": "C",
				                   "name": "C",
				                   "kw": "C",
				                   "code": "C"
				               },
				               {
				                   "city": "长治",
				                   "code": "CIH",
				                   "kw": "ChangZhi",
				                   "name": "长治"
				               },
				               {
				                   "city": "长春",
				                   "code": "CGQ",
				                   "kw": "Changchun",
				                   "name": "长春"
				               },
				               {
				                   "city": "长沙",
				                   "code": "CSX",
				                   "kw": "Changsha",
				                   "name": "长沙"
				               },
				               {
				                   "city": "成都",
				                   "code": "CTU",
				                   "kw": "Chengdu",
				                   "name": "成都"
				               },
				               {
				                   "city": "重庆",
				                   "code": "CKG",
				                   "kw": "Chongqing",
				                   "name": "重庆"
				               },
				               {
				                   "city": "滁州",
				                   "code": "XUZ",
				                   "kw": "Chuzhou",
				                   "name": "滁州"
				               },
				               {
				                   "city": "D",
				                   "name": "D",
				                   "kw": "D",
				                   "code": "D"
				               },
				               {
				                   "city": "大连",
				                   "code": "DLC",
				                   "kw": "Dalian",
				                   "name": "大连"
				               },
				               {
				                   "city": "大同",
				                   "code": "DAT",
				                   "kw": "Datong",
				                   "name": "大同"
				               },
				               {
				                   "city": "东莞",
				                   "code": "DGM",
				                   "kw": "Dongguan",
				                   "name": "东莞"
				               },
				               {
				                   "city": "F",
				                   "name": "F",
				                   "kw": "F",
				                   "code": "F"
				               },
				               {
				                   "city": "佛山",
				                   "code": "ZCP",
				                   "kw": "Foshan",
				                   "name": "佛山"
				               },
				               {
				                   "city": "福州",
				                   "code": "FOC",
				                   "kw": "Fuzhou",
				                   "name": "福州"
				               },
				               {
				                   "city": "G",
				                   "name": "G",
				                   "kw": "G",
				                   "code": "G"
				               },
				               {
				                   "city": "广州",
				                   "code": "CAN",
				                   "kw": "Guangzhou",
				                   "name": "广州"
				               },
				               {
				                   "city": "贵阳",
				                   "code": "KWE",
				                   "kw": "Guiyang",
				                   "name": "贵阳"
				               },
				               {
				                   "city": "H",
				                   "name": "H",
				                   "kw": "H",
				                   "code": "H"
				               },
				               {
				                   "city": "海口",
				                   "code": "HAK",
				                   "kw": "Haikou",
				                   "name": "海口"
				               },
				               {
				                   "city": "杭州",
				                   "code": "HGH",
				                   "kw": "Hangzhou",
				                   "name": "杭州"
				               },
				               {
				                   "city": "哈尔滨",
				                   "code": "HRB",
				                   "kw": "Harbin",
				                   "name": "哈尔滨"
				               },
				               {
				                   "city": "合肥",
				                   "code": "HFE",
				                   "kw": "Hefei",
				                   "name": "合肥"
				               },
				               {
				                   "city": "呼和浩特",
				                   "code": "HET",
				                   "kw": "Huhehot",
				                   "name": "呼和浩特"
				               },
				               {
				                   "city": "葫芦岛",
				                   "code": "LUD",
				                   "kw": "Huludao",
				                   "name": "葫芦岛"
				               },
				               {
				                   "city": "J",
				                   "name": "J",
				                   "kw": "J",
				                   "code": "J"
				               },
				               {
				                   "city": "济南",
				                   "code": "TNA",
				                   "kw": "Jinan",
				                   "name": "济南"
				               },
				               {
				                   "city": "K",
				                   "name": "K",
				                   "kw": "K",
				                   "code": "K"
				               },
				               {
				                   "city": "昆明",
				                   "code": "KMG",
				                   "kw": "Kunming",
				                   "name": "昆明"
				               },
				               {
				                   "city": "L",
				                   "name": "L",
				                   "kw": "L",
				                   "code": "L"
				               },
				               {
				                   "city": "兰州",
				                   "code": "LHW",
				                   "kw": "Lanzhou",
				                   "name": "兰州"
				               },
				               {
				                   "city": "洛阳",
				                   "code": "LYA",
				                   "kw": "Luoyang",
				                   "name": "洛阳"
				               },
				               {
				                   "city": "M",
				                   "name": "M",
				                   "kw": "M",
				                   "code": "M"
				               },
				               {
				                   "city": "绵阳",
				                   "code": "MIJ",
				                   "kw": "MianYang",
				                   "name": "绵阳"
				               },
				               {
				                   "city": "N",
				                   "name": "N",
				                   "kw": "N",
				                   "code": "N"
				               },
				               {
				                   "city": "南昌",
				                   "code": "KHN",
				                   "kw": "Nanchang",
				                   "name": "南昌"
				               },
				               {
				                   "city": "南京",
				                   "code": "NKG",
				                   "kw": "Nanjing",
				                   "name": "南京"
				               },
				               {
				                   "city": "南宁",
				                   "code": "NNG",
				                   "kw": "Nanning",
				                   "name": "南宁"
				               },
				               {
				                   "city": "宁波",
				                   "code": "NGB",
				                   "kw": "Ningbo",
				                   "name": "宁波"
				               },
				               {
				                   "city": "P",
				                   "name": "P",
				                   "kw": "P",
				                   "code": "P"
				               },
				               {
				                   "city": "番禺",
				                   "code": "FAY",
				                   "kw": "Panyu",
				                   "name": "番禺"
				               },
				               {
				                   "city": "Q",
				                   "name": "Q",
				                   "kw": "Q",
				                   "code": "Q"
				               },
				               {
				                   "city": "青岛",
				                   "code": "TAO",
				                   "kw": "Qingdao",
				                   "name": "青岛"
				               },
				               {
				                   "city": "泉州",
				                   "code": "JJN",
				                   "kw": "Quanzhou",
				                   "name": "泉州"
				               },
				               {
				                   "city": "S",
				                   "name": "S",
				                   "kw": "S",
				                   "code": "S"
				               },
				               {
				                   "city": "上海",
				                   "code": "SHA",
				                   "kw": "Shanghai",
				                   "name": "上海"
				               },
				               {
				                   "city": "汕头",
				                   "code": "SWA",
				                   "kw": "Shantou",
				                   "name": "汕头"
				               },
				               {
				                   "city": "沈阳",
				                   "code": "SHE",
				                   "kw": "Shenyang",
				                   "name": "沈阳"
				               },
				               {
				                   "city": "深圳",
				                   "code": "SZX",
				                   "kw": "Shenzhen",
				                   "name": "深圳"
				               },
				               {
				                   "city": "石家庄",
				                   "code": "SJW",
				                   "kw": "Shijiazhuang",
				                   "name": "石家庄"
				               },
				               {
				                   "city": "苏州",
				                   "code": "SZV",
				                   "kw": "Suzhou",
				                   "name": "苏州"
				               },
				               {
				                   "city": "T",
				                   "name": "T",
				                   "kw": "T",
				                   "code": "T"
				               },
				               {
				                   "city": "太仓",
				                   "code": "TAC",
				                   "kw": "Taicang",
				                   "name": "太仓"
				               },
				               {
				                   "city": "太原",
				                   "code": "TYN",
				                   "kw": "Taiyuan",
				                   "name": "太原"
				               },
				               {
				                   "city": "唐山",
				                   "code": "TAS",
				                   "kw": "Tangshan",
				                   "name": "唐山"
				               },
				               {
				                   "city": "天津",
				                   "code": "TSN",
				                   "kw": "Tianjin",
				                   "name": "天津"
				               },
				               {
				                   "city": "乌鲁木齐",
				                   "code": "URC",
				                   "kw": "Urumqi",
				                   "name": "乌鲁木齐"
				               },
				               {
				                   "city": "W",
				                   "name": "W",
				                   "kw": "W",
				                   "code": "W"
				               },
				               {
				                   "city": "潍坊",
				                   "code": "WEF",
				                   "kw": "Weifang",
				                   "name": "潍坊"
				               },
				               {
				                   "city": "温州",
				                   "code": "WNZ",
				                   "kw": "Wenzhou",
				                   "name": "温州"
				               },
				               {
				                   "city": "武汉",
				                   "code": "WUH",
				                   "kw": "Wuhan",
				                   "name": "武汉"
				               },
				               {
				                   "city": "无锡",
				                   "code": "WUX",
				                   "kw": "Wuxi",
				                   "name": "无锡"
				               },
				               {
				                   "city": "X",
				                   "name": "X",
				                   "kw": "X",
				                   "code": "X"
				               },
				               {
				                   "city": "西安",
				                   "code": "XIY",
				                   "kw": "Xi'an",
				                   "name": "西安"
				               },
				               {
				                   "city": "厦门",
				                   "code": "XMN",
				                   "kw": "Xiamen",
				                   "name": "厦门"
				               },
				               {
				                   "city": "Y",
				                   "name": "Y",
				                   "kw": "Y",
				                   "code": "Y"
				               },
				               {
				                   "city": "扬中",
				                   "code": "YAZ",
				                   "kw": "Yangzhong",
				                   "name": "扬中"
				               },
				               {
				                   "city": "烟台",
				                   "code": "YNT",
				                   "kw": "Yantai",
				                   "name": "烟台"
				               },
				               {
				                   "city": "银川",
				                   "code": "INC",
				                   "kw": "Yinchuan",
				                   "name": "银川"
				               },
				               {
				                   "city": "仪征",
				                   "code": "YIZ",
				                   "kw": "Yizheng",
				                   "name": "仪征"
				               },
				               {
				                   "city": "Z",
				                   "name": "Z",
				                   "kw": "Z",
				                   "code": "Z"
				               },
				               {
				                   "city": "湛江",
				                   "code": "ZHA",
				                   "kw": "Zhanjiang",
				                   "name": "湛江"
				               },
				               {
				                   "city": "郑州",
				                   "code": "CGO",
				                   "kw": "Zhengzhou",
				                   "name": "郑州"
				               },
				               {
				                   "city": "珠海",
				                   "code": "ZUH",
				                   "kw": "Zhuhai",
				                   "name": "珠海"
				               },
				               {
				                   "city": "株洲",
				                   "code": "ZHZ",
				                   "kw": "Zhuzhou",
				                   "name": "株洲"
				               },
				               {
				                   "city": "淄博",
				                   "code": "ZIB",
				                   "kw": "ZiBo",
				                   "name": "淄博"
				               }
				           ],
				           //TODO
				delivery_address:[
				                  {
				                      "code": "AOG",
				                      "enAddr": "SFAE-No. 452 Anqian road, Tiedong District,Anshan City, Liaoning.",
				                      "zhAddr": "SFAE-辽宁省鞍山市铁东区鞍千路452号"
				                  },
				                  {
				                      "code": "AOG",
				                      "enAddr": "SLC-No. 452 Anqian road, Tiedong District,Anshan City, Liaoning.",
				                      "zhAddr": "SLC-辽宁省鞍山市铁东区鞍千路452号"
				                  },
				                  {
				                      "code": "BAV",
				                      "enAddr": "SLC-Guomao Building 2107, No.66 Gangtie Street, Kun District Baotou, Inner Mongolia",
				                      "zhAddr": "SLC-内蒙古自治区 包头市 钢铁大街66号 国贸大厦 2107室"
				                  },
				                  {
				                      "code": "BAV",
				                      "enAddr": "SLC-Room 1905, 19 F, Fortune Center，No.74, Steel Street, Baotou, Inner Mongolia",
				                      "zhAddr": "SLC-包头市昆区钢铁大街74号财富中心1905室"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "ETGZ-No.26, Jungong Road, East Section of GETDD, Guangzhou P.R. China",
				                      "zhAddr": "ETGZ-广州经济技术开发区东区竣功路26号"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SLC-9f teemtower teemall 208 tianhe road ,Guang zhou (HONG LIAN)",
				                      "zhAddr": "SLC-广州市天河区天河路208号粤海天河城大厦9楼 (洪莲)"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SLC-9f teemtower teemall 208 tianhe road ,Guang zhou (LI BO CHAO)",
				                      "zhAddr": "SLC-广州市天河区天河路208号粤海天河城大厦9楼 (李博超)"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SBT-9f teemtower teemall 208 tianhe road ,Guang zhou",
				                      "zhAddr": "SBT-广州市天河区天河路208号粤海天河城大厦9楼"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SIAS-9f teemtower teemall 208 tianhe road ,Guang zhou",
				                      "zhAddr": "SIAS-广州市天河区天河路208号粤海天河城大厦9楼"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SLC-9f teemtower teemall 208 tianhe road ,Guang zhou",
				                      "zhAddr": "SLC-广州市天河区天河路208号粤海天河城大厦9楼"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SLC-9f teemtower teemall 208 tianhe road ,Guang zhou (Zou Lu lu)",
				                      "zhAddr": "SLC-广州市天河区天河路208号粤海天河城大厦9楼 (邹璐璐)"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SFAE-9f teemtower teemall 208 tianhe road ,Guang zhou (CAO JING)",
				                      "zhAddr": "SFAE-广州市天河区天河路208号粤海天河城大厦9楼 (曹晶)"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SLC-9f teemtower teemall 208 tianhe road ,Guang zhou (JIANG YAN)",
				                      "zhAddr": "SLC-广州市天河区天河路208号粤海天河城大厦9楼 (江艳)"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SLC-9f teemtower teemall 208 tianhe road ,Guang zhou (XU XIAO JUN)",
				                      "zhAddr": "SLC-广州市天河区天河路208号粤海天河城大厦9楼 (徐晓君)"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SLC-9f teemtower teemall 208 tianhe road ,Guang zhou (XU TENG)",
				                      "zhAddr": "SLC-广州市天河区天河路208号粤海天河城大厦9楼 (许腾)"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SLC-Siemens After Sales Service Office in Guangzhou EMU Depot, Gu Ba Xi Village, Sha Wan Town, Pan Yu District, Guangzhou",
				                      "zhAddr": "SLC-广州市番禺区沙湾镇古坝西村广州动车基地动车运用所西门子办公室"
				                  },
				                  {
				                      "code": "CAN",
				                      "enAddr": "SLC-No.26 Jungong Road,, East Section GETDD, Guangzhou 510530, P.R.China",
				                      "zhAddr": "SLC-广州经济技术开发区东区竣功路26号"
				                  },
				                  {
				                      "code": "CGO",
				                      "enAddr": "SLC-RM.2506 Zhengzhou Yuda International Trade Center No.220,Zhongyuan Zhong Road,Zhengzhou",
				                      "zhAddr": "SLC-河南省郑州市中原中路220号裕达国贸写字楼2506房间"
				                  },
				                  {
				                      "code": "CGQ",
				                      "enAddr": "SLC-F22, Tisco international Mansion, No.3218 Yatai Street Changchun, P.R.China",
				                      "zhAddr": "SLC-长春市南关区亚泰大街3218号A座22层"
				                  },
				                  {
				                      "code": "CGQ",
				                      "enAddr": "SLC-Jilin Province Changchun city Lv Yuan district He Xin town Jin Mai Lang street Chang Ke road chang chun railway company Siemens office",
				                      "zhAddr": "SLC-长春市绿园区合心镇今麦郎街长客路长春轨道客车厂西门子办公室"
				                  },
				                  {
				                      "code": "CIH",
				                      "enAddr": "SMEL-(reimburse from SLC) 191 Chengbeixi Street, Chang Zhi, Shanxi Province",
				                      "zhAddr": "SEML-(在SLC报销的员工)-山西省长治市城北西街191号"
				                  },
				                  {
				                      "code": "CIH",
				                      "enAddr": "SEML-E Itinerary",
				                      "zhAddr": "SEML-E Itinerary"
				                  },
				                  {
				                      "code": "CKG",
				                      "enAddr": "SBT-Rm.1807-11,18/F,Metropolitan business Mansion,68 Zourong Road,Yuzhong District,Chongqing",
				                      "zhAddr": "SBT-重庆市渝中区邹客容路68号大都会商厦18层"
				                  },
				                  {
				                      "code": "CKG",
				                      "enAddr": "SFAE-Rm.1807-11,18/F,Metropolitan business Mansion,68 Zourong Road,Yuzhong District,Chongqing",
				                      "zhAddr": "SFAE-重庆市渝中区邹客容路68号大都会商厦18层"
				                  },
				                  {
				                      "code": "CKG",
				                      "enAddr": "SIAS-Rm.1807-11,18/F,Metropolitan business Mansion,68 Zourong Road,Yuzhong District,Chongqing",
				                      "zhAddr": "SIAS-重庆市渝中区邹客容路68号大都会商厦18层"
				                  },
				                  {
				                      "code": "CKG",
				                      "enAddr": "SLC-Rm.1807-11,18/F,Metropolitan business Mansion,68 Zourong Road,Yuzhong District,Chongqing",
				                      "zhAddr": "SLC-重庆市渝中区邹客容路68号大都会商厦18层"
				                  },
				                  {
				                      "code": "CSX",
				                      "enAddr": "SLC-Room 2101, No.456, Wuyi AvenueChangsha, Hunan410011, P.R.China",
				                      "zhAddr": "SLC-中国湖南省长沙市五一大道456号亚大时代2101房"
				                  },
				                  {
				                      "code": "CSX",
				                      "enAddr": "SMSC-(reimburse from SLC)-No. 468 Tongzipo Road, Hi-Tech Park, CHANGSHA, HuNan Province",
				                      "zhAddr": "SMSC-(在SLC报销的员工)-湖南省长沙市国家高新技术产业开发区桐梓坡西路468号"
				                  },
				                  {
				                      "code": "CTU",
				                      "enAddr": "SBT-1F，C6 of Tianfu Software Park, Tianfu Avenue, Chengdu High-tech Development Zone, Chengdu, China",
				                      "zhAddr": "SBT-四川省成都市高新区拓新东街81号天府软件园 C区 C6号楼 北翼 1/2层"
				                  },
				                  {
				                      "code": "CTU",
				                      "enAddr": "EWC- Tianyuan road 99, Chengdu High Tech Zone",
				                      "zhAddr": "EWC-成都市高新西区天源路99号"
				                  },
				                  {
				                      "code": "CTU",
				                      "enAddr": "SFAE-1F，C6 of Tianfu Software Park, Tianfu Avenue, Chengdu High-tech Development Zone, Chengdu, China",
				                      "zhAddr": "SFAE-四川省成都市高新区拓新东街81号天府软件园 C区 C6号楼 北翼 1/2层"
				                  },
				                  {
				                      "code": "CTU",
				                      "enAddr": "SLC-north wing of 1-2F, building 6, district C of Tianfu Software Park, No. 219 Tianhua Er Lu, Chengdu, Sichuan Province",
				                      "zhAddr": "SLC-C6成都市天华二路219号天府软件园C区6栋1-2楼北翼"
				                  },
				                  {
				                      "code": "CTU",
				                      "enAddr": "SIAS-1F，C6 of Tianfu Software Park, Tianfu Avenue, Chengdu High-tech Development Zone, Chengdu, China",
				                      "zhAddr": "SIAS-四川省成都市高新区拓新东街81号天府软件园 C区 C6号楼 北翼 1/2层"
				                  },
				                  {
				                      "code": "CTU",
				                      "enAddr": "SLC-north wing of 1-2F, building 6, district C of Tianfu Software Park, No. 219 Tianhua Er Lu, Chengdu, Sichuan Province",
				                      "zhAddr": "SLC-C6成都市天华二路219号天府软件园C区6栋1-2楼北翼"
				                  },
				                  {
				                      "code": "CTU",
				                      "enAddr": "SLC-room 6023-6027, Building E1,  Tianfu Software Park, No. 1268 of Tianfu Middle Avenue, Chengdu, Sichuan",
				                      "zhAddr": "SLC-E1成都市高新区天府大道中段1268号天府软件园E区1栋6023-6027号房间"
				                  },
				                  {
				                      "code": "DAT",
				                      "enAddr": "SLC-Hu dong Siemens Power depot On-site office, Datong,Shanxi",
				                      "zhAddr": "SLC-山西省大同市湖东电力机务段西门子现场办公室"
				                  },
				                  {
				                      "code": "DGM",
				                      "enAddr": "SLC-Room1403-1405,Hongyuan BuildingNancheng Area,Dongguan, Guangdong,P.R.China",
				                      "zhAddr": "SLC-广东省东莞市南城区宏远路1号宏远大厦1403室"
				                  },
				                  {
				                      "code": "DLC",
				                      "enAddr": "SBT-No.117,Guang Xian Road, Qi Xian Ling, Hi-Tech,Industry Zone, Dalian",
				                      "zhAddr": "SBT-大连市高新园区广贤路117号"
				                  },
				                  {
				                      "code": "DLC",
				                      "enAddr": "SLC-No.117,Guang Xian Road, Qi Xian Ling, Hi-Tech,Industry Zone, Dalian",
				                      "zhAddr": "SLC-大连市高新园区广贤路117号"
				                  },
				                  {
				                      "code": "DLC",
				                      "enAddr": "SSCL-No.117,Guang Xian Road, Qi Xian Ling, Hi-Tech,Industry Zone, Dalian",
				                      "zhAddr": "SSCL-大连市高新园区广贤路117号"
				                  },
				                  {
				                      "code": "FOC",
				                      "enAddr": "SLC-Room04,05, 11/F, Landmark Plaza, No.89, Wu Si Road, Gulou District, Fuzhou, Fujian Province, P.R.China",
				                      "zhAddr": "SLC-福州市五四路89号置地广场11层04，05单元"
				                  },
				                  {
				                      "code": "HAK",
				                      "enAddr": "SLC-Room 803, Baohua Harbour View Hotel, No.69, Binhai Road, Haikou, Hainan Province",
				                      "zhAddr": "SLC-海南省海口市滨海大道69号宝华海景大酒店８层803房"
				                  },
				                  {
				                      "code": "HFE",
				                      "enAddr": "SLC-Rm.2701/2702,Fortune Plaza No.278,Suixi?Rd.HeFei. China",
				                      "zhAddr": "SLC-安徽省合肥市濉溪路278号财富广场27F 2701-2702室"
				                  },
				                  {
				                      "code": "HGH",
				                      "enAddr": "SBT-Rm.1505,15th Floor, Jiahua International Business Center, No. 15 Hangda, Xihu District Hangzhou, Zhejiang Province",
				                      "zhAddr": "SBT-杭州市西湖区杭大路15号嘉华国际商务中心1505室"
				                  },
				                  {
				                      "code": "HGH",
				                      "enAddr": "SHVC-No.128,18th Avenue(East) of Xiasha Industry AreaEconomical   Technical Development ZoneHangzhou 310018 P.R.China",
				                      "zhAddr": "SHVC-杭州下沙经济技术开发区18号路东128号"
				                  },
				                  {
				                      "code": "HGH",
				                      "enAddr": "SIAS-Rm.1505,15th Floor, Jiahua International Business Center, No. 15 Hangda, Xihu District Hangzhou, Zhejiang Province",
				                      "zhAddr": "SIAS-杭州市西湖区杭大路15号嘉华国际商务中心1505室"
				                  },
				                  {
				                      "code": "HGH",
				                      "enAddr": "SLC-Rm.1505,15th Floor, Jiahua International Business Center, No. 15 Hangda, Xihu District Hangzhou, Zhejiang Province",
				                      "zhAddr": "SLC-杭州市西湖区杭大路15号嘉华国际商务中心1505室"
				                  },
				                  {
				                      "code": "HGH",
				                      "enAddr": "SLC-128#，Avenue 18# (East), Xiasha Economical and Development Zone,Hangzhou, Zhejiang Province, P.R. China",
				                      "zhAddr": "SLC-杭州经济技术开发区下沙工业园18号路（东）128号"
				                  },
				                  {
				                      "code": "HGH",
				                      "enAddr": "SLC-No. 1002,Keda Investment Building, 555 Xincheng Road, Binjiang District, Hangzhou, Zhenjiang",
				                      "zhAddr": "SLC-杭州市滨江区信诚路555号科达投资大厦1002室"
				                  },
				                  {
				                      "code": "HRB",
				                      "enAddr": "SBT-Always Development Building, 30th Floor, Block A,No. 15 Red Army Street,Nangang District, Harbin, Heilongjiang Province",
				                      "zhAddr": "SBT-黑龙江省哈尔滨市南岗区红军街15号奥威斯发展大厦30层A座"
				                  },
				                  {
				                      "code": "HRB",
				                      "enAddr": "SFAE-Always Development Building, 30th Floor, Block A,No. 15 Red Army Street,Nangang District, Harbin, Heilongjiang Province",
				                      "zhAddr": "SFAE-黑龙江省哈尔滨市南岗区红军街15号奥威斯发展大厦30层A座"
				                  },
				                  {
				                      "code": "HRB",
				                      "enAddr": "SIAS-Always Development Building, 30th Floor, Block A,No. 15 Red Army Street,Nangang District, Harbin, Heilongjiang Province",
				                      "zhAddr": "SIAS-黑龙江省哈尔滨市南岗区红军街15号奥威斯发展大厦30层A座"
				                  },
				                  {
				                      "code": "HRB",
				                      "enAddr": "SLC-Always Development Building, 30th Floor, Block A,No. 15 Red Army Street,Nangang District, Harbin, Heilongjiang Province",
				                      "zhAddr": "SLC-黑龙江省哈尔滨市南岗区红军街15号奥威斯发展大厦30层A座"
				                  },
				                  {
				                      "code": "INC",
				                      "enAddr": "SLC-Rm.1418,Plaza A, ZhengYuanBeiJie,WanDaSquare,JinFengDistrict,YinChuan,NingXia",
				                      "zhAddr": "SLC-宁夏回族自治区银川市万达广场A座1418"
				                  },
				                  {
				                      "code": "INC",
				                      "enAddr": "SLC-Hanas East Thermal Power Plant Dalian Road East, XingQing District , Yinchuan City, NingXia",
				                      "zhAddr": "SLC-银川市兴庆区大连东路哈纳斯东部热电有限公司"
				                  },
				                  {
				                      "code": "JJN",
				                      "enAddr": "SIAS-SIAS-Siemens Industrial Automation Ltd. Shanghai",
				                      "zhAddr": "SIAS-上海西门子工业自动化有限公司"
				                  },
				                  {
				                      "code": "JNZ",
				                      "enAddr": "SITH-E Itinerary",
				                      "zhAddr": "SITH-E Itinerary"
				                  },
				                  {
				                      "code": "KHN",
				                      "enAddr": "SLC-R1403/1405,Jiangxin International?Mansion，Nanchang,Jiangxi，330046, P.R.China",
				                      "zhAddr": "SLC-江西省南昌市北京西路88号江信国际大厦14 楼1401/1403/1405 室"
				                  },
				                  {
				                      "code": "KHN",
				                      "enAddr": "SLC-Xiangtie Bei Street No.61, Xiangtang Depot, Nanchang City, Jiangxi Province 330201, P.R. China",
				                      "zhAddr": "SLC-江西省 南昌市 向塘镇向铁北大道61号 向塘机务段西门子现场办公室"
				                  },
				                  {
				                      "code": "KMG",
				                      "enAddr": "SBT-Room1204,HongTa MansionNo. 155 Beijing Road, Kunming,Yunnan, 650011, P.R.China",
				                      "zhAddr": "SBT-中国 云南 昆明市 北京路155号 红塔大厦 1204室"
				                  },
				                  {
				                      "code": "KMG",
				                      "enAddr": "SFAE-Room1204,HongTa MansionNo. 155 Beijing Road, Kunming,Yunnan, 650011, P.R.China",
				                      "zhAddr": "SFAE-中国 云南 昆明市 北京路155号 红塔大厦 1204室"
				                  },
				                  {
				                      "code": "KMG",
				                      "enAddr": "SLC-Room1204,HongTa MansionNo. 155 Beijing Road, Kunming,Yunnan, 650011, P.R.China",
				                      "zhAddr": "SLC-中国 云南 昆明市 北京路155号 红塔大厦 1204室"
				                  },
				                  {
				                      "code": "KWE",
				                      "enAddr": "SFAE-Zone C,15/F,Fuzhong International Plaza,No.126 Xinhua Road,Guiyang,Guizhou",
				                      "zhAddr": "SFAE-贵阳市新华路126号富中国际广场15层C座"
				                  },
				                  {
				                      "code": "KWE",
				                      "enAddr": "SLC-Zone C,15/F,Fuzhong International Plaza,No.126 Xinhua Road,Guiyang,Guizhou",
				                      "zhAddr": "SLC-贵阳市新华路126号富中国际广场15层C座"
				                  },
				                  {
				                      "code": "LHW",
				                      "enAddr": "SLC-Rm 2206 Lanzhou Jinjiang Sun Hotel No.589 Dongang Road West? Lanzhou City, Gansu Province, China",
				                      "zhAddr": "SLC-兰州市城关区东岗西路589号兰州锦江阳光酒店2206室"
				                  },
				                  {
				                      "code": "LYA",
				                      "enAddr": "SLC-2.Luoyang Peony Hotel room 4 floors,Room 414,415,Zhongzhou West Road,No.15,Luoyang",
				                      "zhAddr": "SLC-洛阳市中州西路15号洛阳牡丹大酒店4层414,415房间 "
				                  },
				                  {
				                      "code": "LYA",
				                      "enAddr": "SLC-2.Room516, Luoyang Companionship Hotel,No.6 XiYuan Road, Luoyang, China",
				                      "zhAddr": "SLC-洛阳市涧西区西苑路6号友谊宾馆516室"
				                  },
				                  {
				                      "code": "LUD",
				                      "enAddr": "SITH-E Itinerary",
				                      "zhAddr": "SITH-E Itinerary"
				                  },
				                  {
				                      "code": "LUD",
				                      "enAddr": "SITH-(reimburse from SLC)High-Tech 7 Road, No. 3 , Longgang High-tech Industrial Development Zone,Huludao City,Liaoning.",
				                      "zhAddr": "SITH-(在SLC报销的员工)辽宁省葫芦岛市龙港区高新技术产业开发区高新7路3号"
				                  },
				                  {
				                      "code": "MIJ",
				                      "enAddr": "SLC-A loop of YouXian district  of MianYang City No.8  ,SanHui green island area 10-2-2",
				                      "zhAddr": "SLC-绵阳市游仙区一环路东段8号,三汇绿岛小区,10-2-2 "
				                  },
				                  {
				                      "code": "NGB",
				                      "enAddr": "SLC-room 2511, 2nd building, shangdong international, no. 1926, canghai rd., jiangdong district, ningbo",
				                      "zhAddr": "SLC-宁波市江东区沧海路上东国际大厦2幢 2511 室"
				                  },
				                  {
				                      "code": "NKG",
				                      "enAddr": "SBT-18F, Metro BuildingNo.228, Zhongshan Rd, Xuanwu DistrictNanjing 210008, P.R.China",
				                      "zhAddr": "SBT-南京市玄武区中山路228号地铁大厦18F"
				                  },
				                  {
				                      "code": "NKG",
				                      "enAddr": "SLC-No.68 Puzhu Road, Pukou District, Nanjing （CSR NANJING PUZHEN CO.,LTD)",
				                      "zhAddr": "SLC-南京市浦口区浦珠北路68号南京浦镇车辆厂新厂区"
				                  },
				                  {
				                      "code": "NKG",
				                      "enAddr": "SLC-18F, Metro BuildingNo.228, Zhongshan Rd, Xuanwu DistrictNanjing 210008, P.R.China",
				                      "zhAddr": "SLC-南京市玄武区中山路228号地铁大厦18F"
				                  },
				                  {
				                      "code": "NKG",
				                      "enAddr": "SLC-4F Dongheng International BuildingNo.1700 Shuanglong AvenueJiangning Development ZoneNanjing 211100, P.R.China",
				                      "zhAddr": "SLC-南京市江宁经济技术开发区双龙大道1700号东恒国际大厦4F"
				                  },
				                  {
				                      "code": "NKG",
				                      "enAddr": "SLC-No.18 Siemens Road Jiangning，District Economic Technology Development Zone，Nanjing 211100, P.R.China",
				                      "zhAddr": "SLC-南京市江宁经济技术开发区西门子路18号"
				                  },
				                  {
				                      "code": "NKG",
				                      "enAddr": "SNCL-E Itinerary",
				                      "zhAddr": "SNCL-E Itinerary"
				                  },
				                  {
				                      "code": "NKG",
				                      "enAddr": "SPPA-No. 37, Yihuai Street, Jiangning Economic and Technology Development Zone, Nanjing, 211100, P. R. China",
				                      "zhAddr": "SPPA-南京市江宁经济技术开发区挹淮街37号"
				                  },
				                  {
				                      "code": "NKG",
				                      "enAddr": "SPA-Building 4, Hua Rui Industry Park, 88 Cheng Xin Avenue",
				                      "zhAddr": "SPA-南京市江宁区诚信大道88号4幢"
				                  },
				                  {
				                      "code": "NNG",
				                      "enAddr": "SLC-Jinyuan CBD Modern City, F9,Room 935,Jinhu Road No.63,Nanning",
				                      "zhAddr": "SLC-南宁市金湖路63号金源CBD现代城9层935室"
				                  },
				                  {
				                      "code": "NTG",
				                      "enAddr": "SLC-Room 1104,No.17,Zhongnan Century City, No.8 Taoyuan Road, Chongchuan District,Nantong Jiangsu,P.R.China.",
				                      "zhAddr": "SLC-江苏省南通市祟川区桃园路8号中南世纪城17号楼1104室"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "BSCE-No.1 Fengzhi East Road, Xi Beiwang,Haidian District, Beijing 100094 China",
				                      "zhAddr": "BSCE-北京市海淀区西北旺丰智东路1号"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SBT-7 Wangjing Zhong Huan Nanlu,Chaoyang District,Beijing",
				                      "zhAddr": "SBT-北京市朝阳区望京中环南路7号"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SFAE-8/F,A1 Building,No9 JiuqianqiaoRd,Chaoyang District,Beijing",
				                      "zhAddr": "SFAE-酒仙桥A1 8F"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SFAE-Building M8,No.1,JiuXianQiao East Rd.,Chaoyang District",
				                      "zhAddr": "SFAE-酒仙桥M8"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SFAE-Building M2,No.1,JiuXianQiao East Rd.,Chaoyang District",
				                      "zhAddr": "SFAE-酒仙桥M2"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SFLL-7 Wangjing Zhong Huan Nanlu,Chaoyang District,Beijing",
				                      "zhAddr": "SFLL-北京市朝阳区望京中环南路7号"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SFSL-7 Wangjing Zhong Huan Nanlu,Chaoyang District,Beijing",
				                      "zhAddr": "SFSL-北京市朝阳区望京中环南路7号"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SIAS-7 Wangjing Zhong Huan Nanlu,Chaoyang District,Beijing",
				                      "zhAddr": "SIAS-北京市朝阳区望京中环南路7号"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SIAS-7/F,A1 Building,No9 JiuqianqiaoRd,Chaoyang District,Beijing",
				                      "zhAddr": "SIAS-酒仙桥A1 7F"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SLC-7 Wangjing Zhong Huan Nanlu,Chaoyang District,Beijing",
				                      "zhAddr": "SLC-北京市朝阳区望京中环南路7号"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SLC-1115, Floor 11, No.12, Futong East St. Chaoyang District,Beijing",
				                      "zhAddr": "SLC-北京市朝阳区阜通东大街12号宝能中心A座11层"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SPA-7 Wangjing Zhong Huan Nanlu,Chaoyang District,Beijing",
				                      "zhAddr": "SPA-北京市朝阳区望京中环南路7号"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SPPA-7 Wangjing Zhong Huan Nanlu,Chaoyang District,Beijing",
				                      "zhAddr": "SPPA-北京市朝阳区望京中环南路7号"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "STDC-7 Wangjing Zhong Huan Nanlu,Chaoyang District,Beijing",
				                      "zhAddr": "STDC-北京市朝阳区望京中环南路7号"
				                  },
				                  {
				                      "code": "PEK",
				                      "enAddr": "SWTL-7 Wangjing Zhong Huan Nanlu,Chaoyang District,Beijing",
				                      "zhAddr": "SWTL-北京市朝阳区望京中环南路7号"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SMTS-No 369, Shen Fu Road, Xin Zhuang Industrial Zone, MinHang District,Shanghai, P.R China",
				                      "zhAddr": "SMTS-上海市闵行区申富路369号"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-No.48 Lan Ping Road, Min Hang Shanghai 200240, P.R.China （XIONG QI MOU）",
				                      "zhAddr": "SLC-上海闵行兰坪路48号(行程单接收人XIONG QI MOU）"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-No.48 Lan Ping Road, Min Hang Shanghai",
				                      "zhAddr": "SLC-上海闵行兰坪路48号"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC- 1F.No.48 Lan Ping Road, Min Hang Shanghai 200240, P.R.China",
				                      "zhAddr": "SLC-上海闵行兰坪路48号1层"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-SU 4F.No.48 Lan Ping Road, Min Hang Shanghai",
				                      "zhAddr": "SLC-上海闵行区兰坪路48号4楼SU"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SMVS-No.298, Tianning Road, Minhang Economic Technological Developing Zone，Shanghai",
				                      "zhAddr": "SMVS-上海市闵行开发区天宁路298号"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "APTSH-Rm 301,Tsidi Building No.55,Lane777,West Guangzhong Road,Zhabei District,Shangha",
				                      "zhAddr": "APTSH-上海市闸北区广中西路777弄55号启迪大厦301室"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SSME-E ltinerary",
				                      "zhAddr": "SSME-E ltinerary"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "MWB-E Itinerary",
				                      "zhAddr": "MWB-E Itinerary"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SCPS-E Itinerary",
				                      "zhAddr": "SCPS-E Itinerary"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SFAE-7F Xuhuiyuan Building, No. 1089 Zhongshan No.2Rd.",
				                      "zhAddr": "SFAE-上海市徐汇区中山南二路1089号徐汇苑大厦7层"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SGTP-E Itinerary",
				                      "zhAddr": "SGTP-E Itinerary"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SHD-E Itinerary",
				                      "zhAddr": "SHD-E Itinerary"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SHVS-E Itinerary",
				                      "zhAddr": "SHVS-E Itinerary"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SIAS-23/F., 1089, Zhongshang Nan Er Road Shanghai 200 030, P. R. China",
				                      "zhAddr": "SIAS-上海市中山南二路1089号徐汇苑大厦23楼"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SIAS-Yide building,5th Floor,Yan'an West Road No.1538,Shanghai",
				                      "zhAddr": "SIAS-上海市延安西路1538号怡德大厦5层"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SISW-E Itinerary",
				                      "zhAddr": "SISW-E Itinerary"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SITL-Room A107,1th Floor,Dalian Road No.500",
				                      "zhAddr": "SITL-大连路500号一楼A107室"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-Room A107,1th Floor,Dalian Road No.500",
				                      "zhAddr": "SLC-大连路500号一楼A107室"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-NO.3588 JinDu Road, Minhang District, Shanghai",
				                      "zhAddr": "SLC-上海闵行区莘庄工业区金都路3588号4号楼"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SWPT-2 floor NO.4 building Zizhu Science-Based Industrial Park,NO.555  Dongchuan Rd. Minhang district Shanghai , China",
				                      "zhAddr": "SWPT-上海市闵行区东川路555号紫竹科技园4号楼2楼 技术管理部"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-299 Tianning Road, Minhang District",
				                      "zhAddr": "SLC-上海市闵行开发区天宁路299号"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-7F Xuhuiyuan Building, No. 1089 Zhongshan No.2Rd.",
				                      "zhAddr": "SLC-上海市徐汇区中山南二路1089号徐汇苑大厦7层"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-21F Xuhuiyuan Building, No. 1089 Zhongshan No.2Rd.",
				                      "zhAddr": "SLC-上海市徐汇区中山南二路1089号徐汇苑大厦21层"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-23F Xuhuiyuan Building, No. 1089 Zhongshan No.2Rd.",
				                      "zhAddr": "SLC-上海市徐汇区中山南二路1089号徐汇苑大厦23层"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-C02# Siemens Office in Hongqiao EMU depot. West Jinsha Jiang Road and Xing Hua Road, Jiang Qiao Town, Jia Ding District, Shanghai City",
				                      "zhAddr": "SLC-上海市嘉定区江桥镇金沙江西路星华公路虹桥动车所C02门二楼西门子办公室"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SMEC-No.2128, Shi Tai Road 201908",
				                      "zhAddr": "SMEC-上海市宝山区石太路2128号"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-17F, Shanghai International Communication Trade Building 55 Jilong Road, Waigaoqiao Free Trade Zone, Shanghai, P. R. China",
				                      "zhAddr": "SLC-外高桥保税区基隆路55号国际信贸大厦17层"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SLC-Zhouzhu Rd. 278, Pudong, Shanghai",
				                      "zhAddr": "SLC-上海市周祝公路278号"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SBT-Siemens Building Technologies (Shanghai)Co., Ltd.No 369, Shen Fu Road, Xin Zhuang Industrial Zone, MinHang District,Shanghai, P.R China",
				                      "zhAddr": "SBT-上海闵行区申富路369号0号楼"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SSLS-No.298, Tianning Road, Minhang Economic Technological Developing Zone，Shanghai",
				                      "zhAddr": "SSLS-上海市闵行开发区天宁路298号"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SWPB-No.1333 Miao Xiang Rd.,Lingang New City,Shanghai",
				                      "zhAddr": "SWPB-上海市临港新城妙香路1333号"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SWPB-DALIANLU500HAOYILOU A107SHI",
				                      "zhAddr": "SWPB-大连路500号一楼A107室"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SWPT-No.186 Yitian Rd. Lingang New City",
				                      "zhAddr": "SWPT-上海市浦东新区临港倚天路186号1楼"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SEDS-460 Gaoxianghuan Road, Shanghai",
				                      "zhAddr": "SEDS-上海浦东新区高翔环路460号"
				                  },
				                  {
				                      "code": "SHE",
				                      "enAddr": "SFAE-12-14 F, Tower E, Fortune Plaza No.59 Beizhan Road, Shenhe District",
				                      "zhAddr": "SFAE-沈阳市沈河区北站路59号E座财富中心12-14层"
				                  },
				                  {
				                      "code": "SHE",
				                      "enAddr": "SIAS-12-14 F, Tower E, Fortune Plaza No.59 Beizhan Road, Shenhe District",
				                      "zhAddr": "SIAS-沈阳市沈河区北站路59号E座财富中心12-14层"
				                  },
				                  {
				                      "code": "SHE",
				                      "enAddr": "SLC-12-14 F, Tower E, Fortune Plaza No.59 Beizhan Road, Shenhe District",
				                      "zhAddr": "SLC-沈阳市 沈河区 北站路59号 财富中心E座 12 层"
				                  },
				                  {
				                      "code": "SHE",
				                      "enAddr": "THVS-E Itinerary",
				                      "zhAddr": "THVS-E Itinerary"
				                  },
				                  {
				                      "code": "SJW",
				                      "enAddr": "SFAE-Rm1309, World Trade Plaza Hotel, No.303 Zhongshan East Road, Shijiazhuang Hebei, P.R.China.",
				                      "zhAddr": "SFAE-石家庄市中山东路303号世贸广场酒店1309室"
				                  },
				                  {
				                      "code": "SJW",
				                      "enAddr": "SLC-Rm1309, World Trade Plaza Hotel, No.303 Zhongshan East Road, Shijiazhuang Hebei, P.R.China.",
				                      "zhAddr": "SLC-石家庄市中山东路303号世贸广场酒店1309室"
				                  },
				                  {
				                      "code": "SWA",
				                      "enAddr": "SLC-Room1920,Golden Gulf Hotel,ShanTou",
				                      "zhAddr": "SLC-汕头市金海湾大酒店1920"
				                  },
				                  {
				                      "code": "SZV",
				                      "enAddr": "SBT-Room 1117-1119 11F International Building,No.2 Suhua Road, Suzhou Industry Park, Suzhou",
				                      "zhAddr": "SBT-苏州市工业园区苏华路2号，国际大厦11F17-19室"
				                  },
				                  {
				                      "code": "SZV",
				                      "enAddr": "SFAE-Room 1117-1119 11F International Building,No.2 Suhua Road, Suzhou Industry Park, Suzhou",
				                      "zhAddr": "SFAE-苏州市工业园区苏华路2号，国际大厦11F17-19室"
				                  },
				                  {
				                      "code": "SZV",
				                      "enAddr": "SHIL-E Itinerary",
				                      "zhAddr": "SHIL-E Itinerary"
				                  },
				                  {
				                      "code": "SZV",
				                      "enAddr": "SLC-Room 1117-1119 11F International Building,No.2 Suhua Road, Suzhou Industry Park, Suzhou",
				                      "zhAddr": "SLC-苏州市工业园区苏华路2号，国际大厦11F17-19室"
				                  },
				                  {
				                      "code": "SZV",
				                      "enAddr": "SLC-No.455,Zhujiang Road,SND Suzhou,Jiangsu,215129,China",
				                      "zhAddr": "SLC-江苏省苏州市新区珠江路455号"
				                  },
				                  {
				                      "code": "SZV",
				                      "enAddr": "SEAL-No.455,Zhujiang Road,SND Suzhou,Jiangsu,215129,China(2)",
				                      "zhAddr": "SEAL-江苏省苏州市新区珠江路455号(西门子2号门)"
				                  },
				                  {
				                      "code": "SZX",
				                      "enAddr": "SBT-9F,1003B Hantang Building, Overseas Chinese Town Shenzhen",
				                      "zhAddr": "SBT-深圳市华侨城汉唐大厦9楼, 10楼02区 "
				                  },
				                  {
				                      "code": "SZX",
				                      "enAddr": "SFAE-9F,1003B Hantang Building, Overseas Chinese Town Shenzhen",
				                      "zhAddr": "SFAE-深圳市华侨城汉唐大厦9楼, 10楼02区 "
				                  },
				                  {
				                      "code": "SZX",
				                      "enAddr": "SIAS-9F,1003B Hantang Building, Overseas Chinese Town Shenzhen",
				                      "zhAddr": "SIAS-深圳市华侨城汉唐大厦9楼, 10楼02区 "
				                  },
				                  {
				                      "code": "SZX",
				                      "enAddr": "SLC-9F,1003B Hantang Building, Overseas Chinese Town Shenzhen",
				                      "zhAddr": "SLC-深圳市华侨城汉唐大厦9楼, 10楼02区 "
				                  },
				                  {
				                      "code": "TAC",
				                      "enAddr": "SMTSTC-No.18 Suzhou Road, Taicang , Jiangsu Province",
				                      "zhAddr": "SMTSTC-江苏省太仓市苏州路18号"
				                  },
				                  {
				                      "code": "TAO",
				                      "enAddr": "SIAS-Room405,Crowne Plaza Hotel,No.76 Xiang Gang Zhong Road,Shinan?District,Qingdao",
				                      "zhAddr": "SIAS-山东省青岛市香港中路76号颐中假日酒店4楼"
				                  },
				                  {
				                      "code": "TAO",
				                      "enAddr": "SLC-Room405,Crowne Plaza Hotel,No.76 Xiang Gang Zhong Road,Shinan?District,Qingdao",
				                      "zhAddr": "SLC-山东省青岛市香港中路76号颐中假日酒店4楼"
				                  },
				                  {
				                      "code": "TAS",
				                      "enAddr": "SFAE-Torch Building, Room 1308-1309,No. 99 Jianshe North Road,Tangshan",
				                      "zhAddr": "SFAE-唐山市建设北路99号火炬大厦1308,1309室 063020 "
				                  },
				                  {
				                      "code": "TAS",
				                      "enAddr": "SLC-Torch Building, Room 1308-1309,No. 99 Jianshe North Road,Tangshan",
				                      "zhAddr": "SLC-唐山市建设北路99号火炬大厦1308,1309室 063020 "
				                  },
				                  {
				                      "code": "TNA",
				                      "enAddr": "SFAE-5F, Shun Geng Shan Zhuang Commercial Club, No.28, Shun Geng Road, Jinan, Shandong Provice",
				                      "zhAddr": "SFAE-济南市舜耕路28号舜华园商务会所5楼"
				                  },
				                  {
				                      "code": "TNA",
				                      "enAddr": "SIAS-5F, Shun Geng Shan Zhuang Commercial Club, No.28, Shun Geng Road, Jinan, Shandong Provice",
				                      "zhAddr": "SIAS-济南市舜耕路28号舜华园商务会所5楼"
				                  },
				                  {
				                      "code": "TNA",
				                      "enAddr": "SLC-5F, Shun Geng Shan Zhuang Commercial Club, No.28, Shun Geng Road, Jinan, Shandong Provice",
				                      "zhAddr": "SLC-济南市舜耕路28号舜华园商务会所5楼"
				                  },
				                  {
				                      "code": "TNA",
				                      "enAddr": "SLC-Jinan city,Jing Shi west Road,south of jinan west railway station,Jinan depot,shift waiting building,East nine Room",
				                      "zhAddr": "SLC-济南市经十西路济南西站南动车运用所候班楼东九室"
				                  },
				                  {
				                      "code": "TNA",
				                      "enAddr": "STCL-No. 10, Weihua West Road Shizhong District, Jinan 250022 Shandong, P. R. China",
				                      "zhAddr": "STCL-山东省济南市市中区魏华西路10号"
				                  },
				                  {
				                      "code": "TSN",
				                      "enAddr": "SBT-Room. 1401, the Exchange BuildingNo.189, Nanjing Road, Heping DistrictTianjin 300051, P.R.China",
				                      "zhAddr": "SBT-天津市和平区南京路189号 津汇广场写字楼1401"
				                  },
				                  {
				                      "code": "TSN",
				                      "enAddr": "SEDL-No. 1 Haitai Chuangxin 5th Road,Huayuan Hi-tech Industry Zone,Tianjin 300384, P.R.China",
				                      "zhAddr": "SEDL-天津新技术产业园区华苑产业区海泰创新五路1号"
				                  },
				                  {
				                      "code": "TSN",
				                      "enAddr": "SFAE-Room. 1401, the Exchange BuildingNo.189, Nanjing Road, Heping DistrictTianjin 300051, P.R.China",
				                      "zhAddr": "SFAE-天津市和平区南京路189号 津汇广场写字楼1401"
				                  },
				                  {
				                      "code": "TSN",
				                      "enAddr": "SLC-Room. 1401, the Exchange BuildingNo.189, Nanjing Road, Heping DistrictTianjin 300051, P.R.China",
				                      "zhAddr": "SLC-天津市和平区南京路189号 津汇广场写字楼1401"
				                  },
				                  {
				                      "code": "TSN",
				                      "enAddr": "SLC-No. 20,Shuangchen Middle Rd.Beichen Economic Development Area(BEDA) Tianjin,P.R.China",
				                      "zhAddr": "SLC-天津市北辰经济开发区双辰中路20号"
				                  },
				                  {
				                      "code": "TSN",
				                      "enAddr": "SMDT-No. 20,Shuangchen Middle Rd.Beichen Economic Development Area(BEDA) Tianjin,P.R.China",
				                      "zhAddr": "SMDT-天津市北辰经济开发区双辰中路20号"
				                  },
				                  {
				                      "code": "TSN",
				                      "enAddr": "SWTE-Rm 413, No.19? Changshi Street, Hongqi South Road Nankai District Tianjin 300191 P.R.China",
				                      "zhAddr": "SWTE-天津市南开区红旗南路长实道19号413室"
				                  },
				                  {
				                      "code": "TYN",
				                      "enAddr": "SFAE-Shanxi World Trade Center West Tower, Room 1609B-1610,No.69 Fuxi Street,Taiyuan",
				                      "zhAddr": "SFAE-山西省太原市府西街69号国际贸易中心西塔1609B-1610室"
				                  },
				                  {
				                      "code": "TYN",
				                      "enAddr": "SLC-Shanxi World Trade Center West Tower, Room 1609B-1610,No.69 Fuxi Street,Taiyuan",
				                      "zhAddr": "SLC-山西省太原市府西街69号国际贸易中心西塔1609B-1610室"
				                  },
				                  {
				                      "code": "URC",
				                      "enAddr": "SBT-Xinjiang Hongfu Hotel VIP Building Room 918, No.160 Wuyi Road,Urumqi, Xinjiang Province",
				                      "zhAddr": "SBT-新疆省乌鲁木齐市五一路160号新疆鸿福大饭店贵宾楼918室"
				                  },
				                  {
				                      "code": "URC",
				                      "enAddr": "SLC-Xinjiang Hongfu Hotel VIP Building Room 918, No.160 Wuyi Road,Urumqi, Xinjiang Province",
				                      "zhAddr": "SLC-新疆省乌鲁木齐市五一路160号新疆鸿福大饭店贵宾楼918室"
				                  },
				                  {
				                      "code": "URC",
				                      "enAddr": "SLC-Room1002, Xinjiang Hongfu Hotel VIP Building,No.160 Wuyi Road,Urumqi, Xinjiang Province",
				                      "zhAddr": "SLC-乌鲁木齐市五一路160号鸿福大饭店贵宾楼1002室"
				                  },
				                  {
				                      "code": "WNZ",
				                      "enAddr": "SIAS-9FB1,? Union Building, Railway Station?Road,?WenZhou, ZheJiang 325000",
				                      "zhAddr": "SIAS-温州鹿城区车站大道高联大厦9FB1"
				                  },
				                  {
				                      "code": "WNZ",
				                      "enAddr": "SLC-9FB1,? Union Building, Railway Station?Road,?WenZhou, ZheJiang 325000",
				                      "zhAddr": "SLC-温州鹿城区车站大道高联大厦9FB1"
				                  },
				                  {
				                      "code": "WUH",
				                      "enAddr": "SBT-20/F, Jianyin TowerNo. 709, Jianshe AvenueWuhan Hubei 430015, P.R.China",
				                      "zhAddr": "SBT-湖北省武汉市汉口建设大道709号建设银行大厦20楼"
				                  },
				                  {
				                      "code": "WUH",
				                      "enAddr": "SFAE-20/F, Jianyin TowerNo. 709, Jianshe AvenueWuhan Hubei 430015, P.R.China",
				                      "zhAddr": "SFAE-湖北省武汉市汉口建设大道709号建设银行大厦20楼"
				                  },
				                  {
				                      "code": "WUH",
				                      "enAddr": "SIAS-20/F, Jianyin TowerNo. 709, Jianshe AvenueWuhan Hubei 430015, P.R.China",
				                      "zhAddr": "SIAS-湖北省武汉市汉口建设大道709号建设银行大厦20楼"
				                  },
				                  {
				                      "code": "WUH",
				                      "enAddr": "SLC-20/F, Jianyin TowerNo. 709, Jianshe AvenueWuhan Hubei 430015, P.R.China",
				                      "zhAddr": "SLC-湖北省武汉市汉口建设大道709号建设银行大厦20楼"
				                  },
				                  {
				                      "code": "WUH",
				                      "enAddr": "SLC-Room101,No.3 unit, Building 9, Lanse Xingcheng residential area, Hengdian Yilu Street, Huangpi District, Wuhan City",
				                      "zhAddr": "SLC-武汉市黄陂区横店街蓝色星城9栋3单元101室"
				                  },
				                  {
				                      "code": "WUH",
				                      "enAddr": "STWH-Yangluo Economic Development ZoneWuhan Hubei 430415, P.R.China",
				                      "zhAddr": "STWH-武汉市阳逻经济开发区金阳大道1号43041"
				                  },
				                  {
				                      "code": "WUX",
				                      "enAddr": "SLC-Room 2401, Jinling Hotel, No.1 Xianqian East Road,Wuxi",
				                      "zhAddr": "SLC-无锡市县前东街1号金陵大饭店2401"
				                  },
				                  {
				                      "code": "WUX",
				                      "enAddr": "SMVS-(reimburse from SLC)- No. 13, Hanjiang Road, Wuxi New District,Wuxi",
				                      "zhAddr": "SMVS-(在SLC报销的员工)- 无锡新区汉江路13号"
				                  },
				                  {
				                      "code": "WUX",
				                      "enAddr": "SSAL- ( reimburse from SLC)-Localization office , GIS  Building 1 , No 12 ,Hangjiang Road ,New district , Wuxi ,Jiangsu",
				                      "zhAddr": "SSAL-(在SLC报销的员工)-无锡市新技术开发区B22-A, 锡梅路43号B-2厂房 "
				                  },
				                  {
				                      "code": "WUX",
				                      "enAddr": "SXVT-Building 7, Land Lot 93,National Hi-Tech Industrial Development ZoneWuxi",
				                      "zhAddr": "SXVT-无锡国家高新技术开发区93号地块7号厂房"
				                  },
				                  {
				                      "code": "WUX",
				                      "enAddr": "SSAL-E Itinerary",
				                      "zhAddr": "SSAL-E Itinerary"
				                  },
				                  {
				                      "code": "XIY",
				                      "enAddr": "SFAE-F28,Hi-tech international Business Center, No.33,KeJi Road,GaoXin District,Xi'an710075",
				                      "zhAddr": "SFAE-陕西省西安市高新区科技路33号高新国际商务中心数码大厦28层"
				                  },
				                  {
				                      "code": "XIY",
				                      "enAddr": "SIAS-F28,Hi-tech international Business Center, No.33,KeJi Road,GaoXin District,Xi'an710075",
				                      "zhAddr": "SIAS-陕西省西安市高新区科技路33号高新国际商务中心数码大厦28层"
				                  },
				                  {
				                      "code": "XIY",
				                      "enAddr": "SLC-3/F , Building D, Section1 of the National Service Demonstration Base, No.11 Jin Ye 1 Road ,Gao Xin District, Xian, China",
				                      "zhAddr": "SLC-西安市高新区锦业一路11号西安国家服务示范基地一区D座3层"
				                  },
				                  {
				                      "code": "XIY",
				                      "enAddr": "SSCX-E ltinerary",
				                      "zhAddr": "SSCX-E ltinerary"
				                  },
				                  {
				                      "code": "XIY",
				                      "enAddr": "Address: Room 333, North Tower, Xi'an Shangri-la Golden Flower Hotel, No.8 Changle West Road, Xincheng District, Xi'an.",
				                      "zhAddr": "SLC-西安市长乐西路8号西安香格里拉金花大酒店329室"
				                  },
				                  {
				                      "code": "XMN",
				                      "enAddr": "SBT-11-12/21F, Bank Center Tower 189 Xiahe Road Xiamen",
				                      "zhAddr": "SBT-福建省厦门市厦禾路189号银行中心21楼"
				                  },
				                  {
				                      "code": "XMN",
				                      "enAddr": "SFAE-11-12/21F, Bank Center Tower 189 Xiahe Road Xiamen",
				                      "zhAddr": "SFAE-福建省厦门市厦禾路189号银行中心21楼"
				                  },
				                  {
				                      "code": "XMN",
				                      "enAddr": "SLC-11-12/21F, Bank Center Tower 189 Xiahe Road Xiamen",
				                      "zhAddr": "SLC-福建省厦门市厦禾路189号银行中心21楼"
				                  },
				                  {
				                      "code": "YAZ",
				                      "enAddr": "ZSB-South Side of Pearl Plaza,South Side,Zhenjaing Economic Development Zone,Yangzhong City, Jiangsu Province",
				                      "zhAddr": "ZSB-江苏省扬中市经济开发区明珠广场南侧镇江"
				                  },
				                  {
				                      "code": "YIH",
				                      "enAddr": "SLC-Room 2011 of 20F? ,Qingjiang Tower ,No.95 Dongshan Ave Xiling District Yichang? Hubei",
				                      "zhAddr": "SLC-湖北省宜昌市西陵区东山大道95号清江大厦2011室"
				                  },
				                  {
				                      "code": "YIZ",
				                      "enAddr": "SSML-E Itinerary",
				                      "zhAddr": "SSML-E Itinerary"
				                  },
				                  {
				                      "code": "YNT",
				                      "enAddr": "SFAE-South Street No.9, Yantai City, Shandong Province",
				                      "zhAddr": "SFAE-山东省烟台市南大街9号金都大厦16F1606室"
				                  },
				                  {
				                      "code": "YNT",
				                      "enAddr": "SLC-South Street No.9, Yantai City, Shandong Province",
				                      "zhAddr": "SLC-山东省烟台市南大街9号金都大厦16F1606室"
				                  },
				                  {
				                      "code": "ZHA",
				                      "enAddr": "SLC-Crowne Plaza Hotel Room1616,Leshan Road No.31,Zhanjiang Economic Development Zone,Guangdong Province",
				                      "zhAddr": "SLC-广东省湛江市经济开发区乐山大道31号 皇冠假日酒店1616室"
				                  },
				                  {
				                      "code": "ZHZ",
				                      "enAddr": "STEZ-Tianxin Industrial Park, Shifeng District,Zhuzhou ,Hunan 412001",
				                      "zhAddr": "SLC-株洲市石峰区田心北门西门子大楼5楼"
				                  },
				                  {
				                      "code": "ZHZ",
				                      "enAddr": "SLC-Tianxin Industrial Park, Shifeng District,Zhuzhou ,Hunan",
				                      "zhAddr": "STEZ-湖南省株洲市石峰区田心工业园"
				                  },
				                  {
				                      "code": "ZIB",
				                      "enAddr": "SWAS-E Itinerary",
				                      "zhAddr": "SWAS-E Itinerary"
				                  },
				                  {
				                      "code": "ZUH",
				                      "enAddr": "SLC-Room 229, Shijingshan Hotel,No.193 Jingshan Road, Zhuhai City, Guangdong Province",
				                      "zhAddr": "SLC-广东省珠海市景山路193号石景山酒店229房"
				                  },
				                  {
				                      "code": "SZX",
				                      "enAddr": "SSMR-Siemens MRI Center, Gaoxin C. Ave 2nd, Hi-Tech Indusrial Park",
				                      "zhAddr": "SSMR-中国深圳高新区中区高新中二道西门子磁共振园"
				                  },
				                  {
				                      "code": "HET",
				                      "enAddr": "SLC-RM.618,Inner Mongolia Hotel,Wulanchabu W.Road, Huhhot",
				                      "zhAddr": "SLC-呼和浩特市乌兰察布西路内蒙古饭店618房间"
				                  },
				                  {
				                      "code": "ZIB",
				                      "enAddr": "SWAS-(reimburse from SLC) No. 126, Yumin Road, Hi-tech district, Zibo, P. R. China",
				                      "zhAddr": "SWAS-(在SLC报销的员工)-Z-SLC-淄博高新区裕民路126号"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SPEP-4#No.48 Lan Ping Road, Min Hang Shanghai 200240, P.R.China",
				                      "zhAddr": "SPEP-上海市闵行区兰坪路48号4楼"
				                  },
				                  {
				                      "code": "SHA",
				                      "enAddr": "SMVS-E Itinerary",
				                      "zhAddr": "SMVS-E Itinerary"
				                  },
				                  {
				                      "code": "WUX",
				                      "enAddr": "SMVS-E Itinerary",
				                      "zhAddr": "SMVS-E Itinerary"
				                  }
				              ]
			
			},
	};
	
	return constant;
});