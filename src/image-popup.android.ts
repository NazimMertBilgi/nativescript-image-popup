import * as application from "tns-core-modules/application";
import * as types from "tns-core-modules/utils/types";
import * as fs from "tns-core-modules/file-system";
import { ImagePopupOptions } from "./classes";

declare const com;

export class ImagePopup {

    public static localImagePopup(options: ImagePopupOptions | string) {
        const context = application.android.foregroundActivity;

        const imagePopup = new com.ceylonlabs.imageviewpopup.ImagePopup(context);

        if (options instanceof Object) {

            if (options.width) {
                imagePopup.setWindowWidth(options.width);
            }
            if (options.height) {
                imagePopup.setWindowHeight(options.height);
            }
            if (options.backgroundColor) {
                imagePopup.setBackgroundColor(android.graphics.Color.parseColor(options.backgroundColor));
            }
            if (options.fullScreen) {
                imagePopup.setFullScreen(options.fullScreen);
            }
            if (options.hideCloseIcon) {
                imagePopup.setHideCloseIcon(options.hideCloseIcon);
            }
            if (options.imageOnClickClose) {
                imagePopup.setImageOnClickClose(options.imageOnClickClose);
            }

            const drawable = this.localImageProcess(options.path);

            imagePopup.initiatePopup(drawable);

        }
        else {
            const drawable = this.localImageProcess(options);
            imagePopup.initiatePopup(drawable);
        }
        imagePopup.viewPopup();
    }

    public static networkImagePopup(options: ImagePopupOptions | string) {
        const context = application.android.foregroundActivity;

        const imagePopup = new com.ceylonlabs.imageviewpopup.ImagePopup(context);

        if (options instanceof Object) {

            if (options.width) {
                imagePopup.setWindowWidth(options.width);
            }
            if (options.height) {
                imagePopup.setWindowHeight(options.height);
            }
            if (options.backgroundColor) {
                imagePopup.setBackgroundColor(android.graphics.Color.parseColor(options.backgroundColor));
            }
            if (options.fullScreen) {
                imagePopup.setFullScreen(options.fullScreen);
            }
            if (options.hideCloseIcon) {
                imagePopup.setHideCloseIcon(options.hideCloseIcon);
            }
            if (options.imageOnClickClose) {
                imagePopup.setImageOnClickClose(options.imageOnClickClose);
            }

            imagePopup.initiatePopupWithPicasso(options.path);

        }
        else {
            imagePopup.initiatePopupWithPicasso(options);
        }

        imagePopup.viewPopup();
    }

    private static localImageProcess(path: string): globalAndroid.graphics.drawable.Drawable {
        let fileName = types.isString(path) ? path.trim() : "";
        if (fileName.indexOf("~/") === 0) {
            fileName = fs.path.join(fs.knownFolders.currentApp().path, fileName.replace("~/", ""));
        }

        const drawable = android.graphics.drawable.Drawable.createFromPath(fileName);
        return drawable;
    }

}
