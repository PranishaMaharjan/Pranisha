const { expect } = require("playwright/test");

exports.ContactPage = class ContactPage {
  constructor(page) {
    this.page = page;
    this.addContact = '//*[@id="addContact"]';
    this.firstName = '//*[@id="firstName"]';
    this.lastName = '//*[@id="lastName"]';
    this.firstName = '//*[@id="firstName"]';
  }
};
