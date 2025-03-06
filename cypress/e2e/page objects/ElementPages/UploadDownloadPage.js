/// <reference types="cypress"/>

export class UploadDownloadPage{

uploadFile(file){
    cy.get('#uploadFile').attachFile(file);
}

downloadFile(){
    cy.get('#downloadButton').click()
}

}