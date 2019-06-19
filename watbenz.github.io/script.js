function createRowData(tname, data) {
    var tableRef = document.getElementById(tname).getElementsByTagName('tbody')[0];

    data.forEach(elem => {
        var newRow = tableRef.insertRow();
        var newCell = [ newRow.insertCell(0), newRow.insertCell(1) ];

        var newText = [ document.createTextNode(elem.title), document.createTextNode(elem.data) ];

        for (i=0; i<2; i++) {
            newCell[i].appendChild(newText[i]);
            newCell[i].style.backgroundColor = "rgba(255, 197, 161, 0.3)";
        }
    });
}

function addParagraph(id, data) {
    document.getElementById(id).getElementsByTagName('p')[0].innerHTML = data;
}

var table = [
    { title: "Name", data: 'Wachirawit Pothising' },
    { title: "Nickname", data: 'Benz' },
    { title: "Pen name", data: 'watbenz' },
    { title: "Occupation", data: 'student' },
    { title: "Birth Date", data: "18/07/1998" },
    { title: "Blood Type", data: 'B' }
];
createRowData('info-table', table);

var headStory = "ผมชื่อ เบ็นซ์ เรียกสั้นๆ ว่า เบ้น แล้วใช้ชื่อสำหรับทุกอย่างว่า watbenz";
addParagraph('header', headStory);

var info = "&emsp; &ensp; ผมและครอบครัวอยู่อาศัยอยู่ที่จังหวัดนครปฐมตั้งแต่จำความได้ ทุกอย่างก็ดูปกติดีและไม่มีอะไรพิเศษ" +
"จนกระทั่งขึ้นมหาวิทยาลัยและเรียนที่มหาวิทยาลัยเกษตรศาสตร์";
addParagraph('info-story', info);

var hobby = "&emsp; &ensp; กิจกรรมยามว่างของผม ส่วนใหญ่จะหมดเวลาไปกับการอ่านหนังสือ เดินออกไปข้างนอกหาอะไรกิน" +
"เดินเล่น ดูหนัง เล่นเกม ฟังเพลง เหมือนชีวิตวัยรุ่นคนอื่นปกติ (แต่อาจจะกินมากหน่อย 55)";
addParagraph('hobby-story', hobby);
