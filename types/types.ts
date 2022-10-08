export type VideogameType = {
   __typename:string,
   Price:number,
   Currency:string,
   Name:string,
   Date:string,
   Description:string,
   LargeImg:ImagesType,
   Screenshots: ImagesType
}

export type ImagesType = {
   __typename:string,
   data: Array<ImageType>
}

export type ImageType = {
   __typename: any,
   attributes: ImageAttributesType,
   id:string
}

export type ImageAttributesType = {
   __typename:string,
   name:string,
   url:string,
}