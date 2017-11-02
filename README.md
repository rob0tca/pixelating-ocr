# pixelating-ocr
Materials for use in UBC Library Pixelating Workshop on OCR for the Digital Himalaya project, 11/02/2017

Slides available at https://docs.google.com/presentation/d/1euANzVrodh9U2L69O2uEfU7NHyEW5zM_gA_Vh0HYxbA/edit?usp=sharing

## Google Drive Batch OCR Script

Performs OCR on a batch of jpegs using Google Drive.
Outputs a Google sheet mapping OCR text to original file names.

### Setup

1. Create a new folder for your jpegs.
2. Create a new Google Sheet in that folder. Open it up.
3. Copy the id found in the sheet's url (the long string of letters and numbers between 'd/' and '/edit').
4. Open the Script Editor (under 'Tools' menu option).
5. Paste the provided JavaScript code into the editor.
6. Update the 'folderName' with your folder's name.
7. Update the 'sheetId' with the alphanumeric string found in the URL.
8. Click the clock icon to add a "trigger". Select options "extractTextOnOpen", "From Spreadsheet", and "on open".

### Usage

1. Upload jpegs to the folder you set up.
2. Open up the spreadsheet.
3. Make a cup of coffee and relax while the magic happens.

Behind the scenes, Google Drive will convert each pdf to a Google doc with OCR text. Then it will take that text, and add it to the specified sheet alongside the name of the file.

### Credits

Research: Laura Ferris, Digital Initiatives Assistant, UBC Library

Code: Rebecca Dickson, Digital Projects Student Librarian, UBC Library

Inspiration: http://blogs.bl.uk/digital-scholarship/2017/07/a-workshop-on-optical-character-recognition-for-bangla.html

### License
Copyright (c) 2017 The University of British Columbia
