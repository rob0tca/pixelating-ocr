# pixelating-ocr

### Related Presentations

- "Digital Himalaya, OCR, and Non-Latin Text". Workshop held with Laura Ferris at the [UBC Library's Pixelating Mixer](https://events.library.ubc.ca/series/118), November 2, 2017. [(Google Slides)](https://docs.google.com/presentation/d/1euANzVrodh9U2L69O2uEfU7NHyEW5zM_gA_Vh0HYxbA/edit?usp=sharing)
- "OCR Tools for Non-Latin text: Lessons from the Digital Himalaya Project". Lightning talk presented at [Code4Lib BC](https://wiki.code4lib.org/BC), December 1, 2017. [(Google Slides)](https://docs.google.com/presentation/d/12AtxABkYr9m2bJY6Pa3jEIViHAlt39lyrc1ZhvCakI8/edit?usp=sharing)

### Repository Contents
- [*docs_ocr.gs*](./docs_ocr.gs): Google Apps script for extracting text from a batch of JPEG files
- [*sample_items*](./sample_items): contains jpeg images from [Mother Tongue Pipal Pustak](http://www.digitalhimalaya.com/collections/journals/mtpp/) and [Nepali Aawaz](http://www.digitalhimalaya.com/collections/journals/nepaliaawaz/). Made available by the [Digital Himalaya Project](http://www.digitalhimalaya.com) under [Attribution-NonCommercial-NoDerivs 3.0 Unported](https://creativecommons.org/licenses/by-nc-nd/3.0/) license.

## Google Drive Batch OCR Script (docs_ocr.gs)

This script was created to generate transcripts from images featuring Nepali & Tibetan language text. Finds all JPEG files within the specified Google Drive folder, opens them as Google Docs, and exports their filenames and text contents to the specified Google Sheet. (Uploaded JPEGs are deleted from Drive in the process; Corresponding Google docs remain.)

### Setup

1. Create a new folder for your JPEG files. Keep track of the folder's name for step 6.
2. Create a new Google Sheet in the same folder. This will store your transcript text.
3. Copy the id found in the sheet's url (look for the the long string of letters and numbers between 'd/' and '/edit'). Hold onto it for step 7.
4. Under the 'Tools' menu, select 'Script Editor'.
5. Paste the contents of 'docs_ocr.gs' into the script editor.
6. Update 'folderName' with the name of your image folder (see step 1).
7. Update 'sheetId' with the id associated with your transcript sheet (see step 3).
8. Click the clock icon to add a trigger. Select options "extractTextOnOpen", "From Spreadsheet", and "on open". This will tell the script to run whenever someone opens the spreadsheet.

### Usage

1. Upload jpegs to the folder you set up.
2. Open up the spreadsheet.
3. Make a cup of coffee/tea and relax while Google converts the jpegs, extracts text, and populates the spreadsheet.

### Credits

Research: Laura Ferris, Digital Initiatives Assistant, UBC Library

Code: Rebecca Dickson, Digital Projects Student Librarian, UBC Library

Inspiration: http://blogs.bl.uk/digital-scholarship/2017/07/a-workshop-on-optical-character-recognition-for-bangla.html
