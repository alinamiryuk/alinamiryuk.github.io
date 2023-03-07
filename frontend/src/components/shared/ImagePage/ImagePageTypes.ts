export enum Image {
  AUTH = 'AUTH',
}

export interface IImagePageStateProps {
  image: Image
}

export interface IImagePageDispatchProps {}

export interface IImagePageProps
  extends IImagePageStateProps,
    IImagePageDispatchProps {}
