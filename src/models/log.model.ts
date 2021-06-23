import { Document, Model, model, Schema } from "mongoose";

export interface ILog extends Document {
  projectId: string;
  created: Date;
  data: object;
}

export let LogSchema: Schema = new Schema({
  projectId: {
    type: Schema.Types.String,
    require: true,
    enum: ["hr", "fintech", "mobile"],
  },
  created: {
    type: Schema.Types.String,
    default: Date.now(),
  },
  data: {
    type: Schema.Types.Mixed,
    require: true,
  },
});

export const Log: Model<ILog> = model<ILog>("Log", LogSchema);
