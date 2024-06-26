import { request, APIResponse } from "playwright";

export const apiEndpoints = {
  photos:
    "https://my-json-server.typicode.com/icedrone/json-demo-server/photos",
  images:
    "https://my-json-server.typicode.com/icedrone/json-demo-server/images",
};

export async function fetchPhotos(): Promise<APIResponse> {
  const context = await request.newContext();
  return context.get(apiEndpoints.photos);
}

export async function fetchImages(): Promise<APIResponse> {
  const context = await request.newContext();
  return context.get(apiEndpoints.images);
}
