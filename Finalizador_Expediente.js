function Finalizador_Expediente() {
  var now = new Date();
  var limit = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var spreadsheet = SpreadsheetApp.getActive();
  
  limit.setHours(16);
  limit.setMinutes(48);

  for (i = 3; i < 500; i++) {
  spreadsheet.getRange('F' + i).activate();
  var start = spreadsheet.getActiveRange().getValue();
  if (start == "")
  {
    i = 500;
  }

  if (start < limit && now >= limit) {
    spreadsheet.getRange('G' + i).activate();
    var end = spreadsheet.getActiveRange().getValue();
    if (start != "" && end == "") {
      spreadsheet.getActiveRange().setValue(limit);
    }
  } 
  }
};