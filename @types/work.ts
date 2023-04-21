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

    coverImage: { id: string; url: string; width: number; height: number}

    galerieImage: Image[];

    description: string;

    published: boolean;

    link: string;

    category: string;

    github: string;

    figma: string;

}

