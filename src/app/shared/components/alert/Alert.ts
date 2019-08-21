export class Alert {
  constructor(public readonly alertType: AlertType, public readonly message: string) {
    this.alertType = alertType;
    this.message = message;
  }
}

export enum AlertType {

  SUCCESS,
  WARNING,
  DANGER,
  INFO
}
