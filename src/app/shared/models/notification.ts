export interface InterceptorNotification {
statusCode: NotificationType;
message: string
}

export enum NotificationType{
  Ok = 200,
  KO = 0,
  NotFound=404,
  Alessio = -1
}
