function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1"); // Change if different
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.email,
    data.ip,
    data.status,
    new Date()
  ]);

  return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
                        .setMimeType(ContentService.MimeType.JSON);
}