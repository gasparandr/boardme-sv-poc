


import { Schema, model } from "mongoose";
import {IGuideConfig} from "./interfaces/IGuideConfig";


const GuideConfigSchema = new Schema({
    name: {
        type: String
    },

    user: {
        type: String
    },

    text: {
        type: String
    },

    image: {
        type: String
    },

    positionX: {
        type: String
    },

    positionY: {
        type: String
    },

    borderRadius: {
        type: String
    },

    backgroundColor: {
        type: String
    },

    color: {
        type: String
    },

    margin: {
        type: String
    },

    link: {
        type: String
    },

    width: {
        type: String
    },

    height: {
        type: String
    }
});


export default model<IGuideConfig>( "GuideConfig", GuideConfigSchema );