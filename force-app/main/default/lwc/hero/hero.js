import { LightningElement } from "lwc";
import images from "@salesforce/resourceUrl/Images";

export default class Hero extends LightningElement {
  imageUrl = images + "/hero.png";
}
