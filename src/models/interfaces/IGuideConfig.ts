import { Document, Schema } from "mongoose";





export interface IGuideConfig extends Document {
    name: string,
    user: string,
    text: string,
    image: string,
    positionX: number,
    positionY: number,
    borderRadius: number,
    backgroundColor: string,
    color: string,
    margin: number,
    link: string,
    width: string,
    height: string
}