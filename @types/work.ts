export interface Image {
    id: string;
    url: string;
    width: number;
    height: number;
}

export interface IWork{
    _id: string;

    title: string;

    seo: { title: string; description: string }

    slug: string;

    coverImage: Image[];

    description: string;

}

