import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ImageService} from "../service/image.service";
import {Image} from "../model/user.model";
import { HttpRequest, HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.css']
})
export class ListImageComponent implements OnInit {

  images: Image[];

  constructor(private router: Router, private imageService: ImageService,private http: HttpClient) { }

  ngOnInit() {
    this.imageService.getImages()
      .subscribe( data => {
        debugger;
        this.images = data;
      });
  }

  viewUsers(image: Image): void {
    this.router.navigate(['list-user']);
  };

  deleteImage(image: Image): void {
    localStorage.removeItem("editImageId");
    localStorage.setItem("editImageId", image.id.toString());
    this.router.navigate(['edit-image']);
  };

  addImage(files): void {
    debugger;
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', 'http://localhost:27891/api/image/AddImage', formData, {
    });

    this.http.request(uploadReq).subscribe(event => {
      debugger;
    });
    // this.imageService.createImage(this.registerForm.value)
    // .subscribe( data => {
    //   debugger;
    //   this.router.navigate(['list-user']);
    // });
  };
}
