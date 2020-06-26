import { ImagePopup } from 'nativescript-image-popup';
import { ImagePopupOptions, ImagePopupBackgroundColors } from 'nativescript-image-popup/classes';

import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}

export function showDefaultImage() {
    ImagePopup.localImagePopup("~/assets/images/nmb.jpg");
}

export function showDefaultNetworkImage() {
    ImagePopup.networkImagePopup("https://i.hizliresim.com/kx47Db.png");
}

export function showWidthHeightImage() {
    const options: ImagePopupOptions = {
        path: "https://i.hizliresim.com/kx47Db.png",
        width: 300,
        height: 300
    };
    ImagePopup.networkImagePopup(options);
}

export function showFullScreenImage() {
    const options: ImagePopupOptions = {
        path: "https://i.hizliresim.com/kx47Db.png",
        fullScreen: true
    };
    ImagePopup.networkImagePopup(options);
}

export function showBackgroundTransparentImage() {
    const options: ImagePopupOptions = {
        path: "https://i.hizliresim.com/kx47Db.png",
        backgroundColor: ImagePopupBackgroundColors.TRANSPARENT
    };
    ImagePopup.networkImagePopup(options);
}

export function showBackgroundColorImage() {
    const options: ImagePopupOptions = {
        path: "https://i.hizliresim.com/kx47Db.png",
        backgroundColor: "#2980b9" // red, blue #ffd200 and others..
    };
    ImagePopup.networkImagePopup(options);
}