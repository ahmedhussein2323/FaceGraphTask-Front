import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Image} from "../model/user.model";

@Injectable()
export class ImageService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:27891/api/image/';

  getImages() {
    return this.http.get<Image[]>(this.baseUrl+'GetImageList');
  }

  getImageImagesById(id: number) {
    return this.http.get<Image>(this.baseUrl + '/' + id);
  }

  createImage(image: Image) {
    return this.http.post(this.baseUrl+'AddImage', image);
  }

  updateImage(image: Image) {
    return this.http.put(this.baseUrl + '/' + image.id, image);
  }

  deleteImage(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
