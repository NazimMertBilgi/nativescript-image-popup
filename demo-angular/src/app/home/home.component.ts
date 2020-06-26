import { Component } from "@angular/core";
import { ImagePopup } from 'nativescript-image-popup';
import { ImagePopupOptions, ImagePopupBackgroundColors } from "nativescript-image-popup/classes";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {

    showDefaultImage() {
        ImagePopup.localImagePopup("~/assets/images/nmb.jpg");
    }

    showDefaultNetworkImage() {
        ImagePopup.networkImagePopup("https://i.hizliresim.com/kx47Db.png");
    }

    showWidthHeightImage() {
        const options: ImagePopupOptions = {
            path: "https://i.hizliresim.com/kx47Db.png",
            width: 300,
            height: 300
        };
        ImagePopup.networkImagePopup(options);
    }

    showFullScreenImage() {
        const options: ImagePopupOptions = {
            path: "https://i.hizliresim.com/kx47Db.png",
            fullScreen: true
        };
        ImagePopup.networkImagePopup(options);
    }

    showBackgroundTransparentImage() {
        const options: ImagePopupOptions = {
            path: "https://i.hizliresim.com/kx47Db.png",
            backgroundColor: ImagePopupBackgroundColors.TRANSPARENT
        };
        ImagePopup.networkImagePopup(options);
    }

    showBackgroundColorImage() {
        const options: ImagePopupOptions = {
            path: "https://i.hizliresim.com/kx47Db.png",
            backgroundColor: "#2980b9" // red, blue #ffd200 and others..
        };
        ImagePopup.networkImagePopup(options);
    }
}
