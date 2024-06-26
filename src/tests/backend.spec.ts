import { test, expect } from "@playwright/test";
import { fetchPhotos, fetchImages } from "../pages/backend";

test.describe("Backend API Tests", () => {
  test("Fetch Photos API", async () => {
    // Test to verify the fetchPhotos API endpoint
    const response = await fetchPhotos();

    // Assertion: Check if the API response is successful (status code 200)
    expect(response.ok()).toBeTruthy();

    // Assertion: Check if the response body is an array
    const photos = await response.json();
    expect(photos).toBeInstanceOf(Array);
  });

  test("Fetch Images API", async () => {
    // Test to verify the fetchImages API endpoint
    const response = await fetchImages();

    // Assertion: Check if the API response is successful (status code 200)
    expect(response.ok()).toBeTruthy();

    // Assertion: Check if the response body is an array
    const images = await response.json();
    expect(images).toBeInstanceOf(Array);
  });
});
