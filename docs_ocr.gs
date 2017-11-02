function extractTextOnOpen() {

    //ADD YOUR VALUES BELOW
    var folderName = "toOCR";
    var sheetId = "19bHk8ZziyPYavD29VeBwe6icsnr6GBpVXZL31iUSTho";

    //Define folders
    var folder = DriveApp.getFoldersByName(folderName).next();
    var folderId = folder.getId();
    var rootFolder = DriveApp.getRootFolder();

    //Find all jpegs in folder
    var images = folder.getFilesByType("image/jpeg");
    var docs = folder.getFilesByType("applications/vnd.google-apps.document");
    while (images.hasNext()) {
        var image = images.next();
        var imageName = image.getName();
        var fileName = imageName.split("\.")[0];
        var docName = fileName + "applications/vnd.google-apps.document";
        //Convert each jpeg to a Google Doc with OCR   
        var file = {
            title: fileName,
            mimeType: "image/jpeg"
        }
        Drive.Files.insert(file, image, { ocr: true });
        //Store newly-created Google Doc in project folder
        var newFile = DriveApp.getFilesByName(fileName).next();
        folder.addFile(newFile);
        folder.removeFile(image);
        rootFolder.removeFile(newFile);
        var docId = newFile.getId();
      }

    //Find all Google Docs in folder
    var docs = folder.getFilesByType("application/vnd.google-apps.document");
    //Set up spreadsheet
    var ss = SpreadsheetApp.openById(sheetId);
    SpreadsheetApp.setActiveSpreadsheet(ss);
    Logger.log('File name: ' + ss.getName());
    var sheet = SpreadsheetApp.getActiveSheet();
    sheet.appendRow(["Filename", "Text"]);

    //Populate spreadsheet with OCR text
    while (docs.hasNext()) {
        var file = docs.next();
        var docId = file.getId();
        var doc = DocumentApp.openById(docId);
        var name = doc.getName();
        var body = doc.getBody().getText();
        //Add item data to spreadsheet
        sheet.appendRow([name, body]);
    }
};