var adv4 = [];

var adv5 = [];

var oHolidays = {
    "1.1"   : { name: "����� ���", img: "" },
    "7.1": { name: "������������ ���������", img: "./img/ui/holidays/7_1.png" },
    "25.1": { name: "���� ��������� (�������� ����)", img: "./img/ui/holidays/25_1.png" },
    "14.2": { name: "���� ������� ��������� (���� ���� ����������)", img: "./img/ui/holidays/14_2.png" },
    "23.2": { name: "���� ��������� ���������", img: "./img/ui/holidays/23_2.png" },
    "8.3": { name: "������������� ������� ����", img: "./img/ui/holidays/8_3.png" },
    "1.4": { name: "���� ����� / ���� ������", img: "./img/ui/holidays/1_4.png" },
    "12.4": { name: "��������� ���� ������� � ������������", img: "./img/ui/holidays/12_4.png" },
    "22.4": { name: "���� ������ ����", img: "./img/ui/holidays/22_4.png" },
    "1.5": { name: "���� ����� � �����", img: "./img/ui/holidays/1_5.png" },
    "7.5": { name: "���� �����", img: "./img/ui/holidays/7_5.png" },
    "9.5": { name: "���� ������", img: "./img/ui/holidays/9_5.png" },
    "25.5": { name: "��������� ������", img: "./img/ui/holidays/25_5.png" },
    //"27.5": { name: "�����-��������� 309 ���", img: "./img/ui/holidays/27_5.png" },
    "1.6": { name: "��������� ���� ������ �����", img: "./img/ui/holidays/1_6.png" },
    "6.6": { name: "���������� ���� ������", img: "./img/ui/holidays/6_6.png" },
    "12.6": { name: "���� ������", img: "./img/ui/holidays/12_6.png" },
    "17.6": { name: "���� ������������ ���������", img: "./img/ui/holidays/17_6.png" },
    //"24.6": { name: "����������� 119 ���", img: "./img/ui/holidays/24_6.png" },
    "27.6": { name: "���� �������� ������", img: "./img/ui/holidays/27_6.png" },
    "3.7": { name: "���� �����", img: "./img/ui/holidays/3_7.png" },
    "8.7": { name: "������������� ���� �����, ����� � ��������", img: "./img/ui/holidays/8_7.png" },
    "9.7": { name: "���� ���������� �����", img: "./img/ui/holidays/9_7.png" },
    "29.7": { name: "���� ������-�������� �����", img: "./img/ui/holidays/29_7.png" },
    "2.8": { name: "���� ��������-��������� �����", img: "./img/ui/holidays/2_8.png" },
    //"5.8": { name: "���� 296 ���", img: "./img/ui/holidays/5_8.png" },
    "12.8": { name: "���� ������-��������� ���", img: "./img/ui/holidays/12_8.png" },
    "13.8": { name: "���� ���������", img: "./img/ui/holidays/13_8.png" },
    //"19.8": { name: "������������ 289 ���", img: "./img/ui/holidays/19_8.png" },
    "20.8": { name: "���� ���������� ����� ������", img: "./img/ui/holidays/20_8.png" },
    "27.8": { name: "���� ���� ������", img: "./img/ui/holidays/27_8.png" },
    //"30.8": { name: "������ 1007 ���", img: "./img/ui/holidays/30_8.png" },
    "1.9": { name: "���� ������", img: "./img/ui/holidays/1_9.png" },
    //"2.9": { name: "���� ������", img: "./img/ui/holidays/2_9.png" },
    //"9.9": { name: "��������� 276", img: "./img/ui/holidays/9_9.png" },
    "30.9": { name: "���� ��������� ������", img: "./img/ui/holidays/30_9.png" },
    "5.10": { name: "���� �������", img: "./img/ui/holidays/5_10.png" },
    "28.10": { name: "���� �������������", img: "./img/ui/holidays/28_10.png" },
    "4.11": { name: "���� ��������� ��������", img: "./img/ui/holidays/4_11.png" },
    "10.11": { name: "���� �������", img: "./img/ui/holidays/10_11.png" },
    "25.11": { name: "���� ������", img: "./img/ui/holidays/25_11.png" },
    "12.12": { name: "���� ����������� ���������� ���������", img: "./img/ui/holidays/12_12.png" },
    "20.12": { name: "���� ���", img: "./img/ui/holidays/20_12.png" }
}

function getBtmContent(sContentPlace) {
    var oHoliday = null;
    var flag = true;
    var oDate = new Date();
    var sDate = oDate.getDate().toString(10) + "." + (oDate.getMonth() + 1).toString(10);
    var oContentPlace = document.getElementById(sContentPlace);
    
    if (adv5.length > 0) {
        adv_array.push(adv5);
    }
    
    if (oContentPlace == null || oContentPlace == "undefined") {
        return;
    }
    
    for (var i = 0; i < adv_array.length; i++)
        if (adv_array[i][0] == 'index_page_8')
            flag = false;
    
    if (oHolidays !== null && oHolidays !== "undefined" && flag) {
        if (oHolidays.hasOwnProperty(sDate)) {
            oHoliday = oHolidays[sDate];
            if (oHoliday !== null && oHoliday !== "undefined" &&
                oHoliday.img !== null && oHoliday.img !== "undefined" &&
                oHoliday.img.toString().length > 0) {
                oContentPlace.innerHTML = '<img alt="" src="' + oHoliday.img + '" />';
                return;    
            }    
        }
    }
}