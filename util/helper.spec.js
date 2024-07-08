import { expect } from "@playwright/test";
import test from "node:test";
import { json } from "stream/consumer";

const fs = require("fs");
const path = require("path");

async function getCurrentDateTimeStamp() {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

async function authenticateUser1({ request }) {
  try {
    const apiUrl = await getApiBaseUrl();
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await request.post((apiUrl = "/users/login"), {
      headers,
      data: {
        email: "",
        password: "",
      },
    });
    const statusCode = response.status();
    if (statusCode !== 200) {
      console.error(`Unexpected status code: ${statusCode}`);
      const reponseBody = await response.json();
      console.error("Response body:", responseBody);
      throw new Error("Authentication Failed");
    }
    const responseBody = await response.json();
    console.log("Authenication successful.Response body:", responseBody);
    return responseBody.token;
  } catch (error) {
    console.error("Error dusing authentication.Resopnse Body:", error.message);
    throw error;
  }
}

test("approve", async (page, content, request) => {
  // const dateTime=
});

async function createEntity(userData, accessToken, module, { request }) {
  const apiUrl = await getApiBaseUrl();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    authorization: "Bearer" + acccessToken,
    // 'sig':'Automation',
  };
  const response = await request.post(apiUrl + module, {
    headers,
    data: JSON.stringify(userData),
  });
  const responseBody = await response.json();
  const statusCode = (response = response.status());
  expect(statusCode).toBe(201);
  if (responseBody && responseBody.id) {
    return responseBody.id;
  } else {
    return null;
  }
}

module.exports = { createEntity, authenticateUser1 };
