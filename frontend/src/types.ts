export interface IQuery {
  children: any,
  query: any,
  slug?: any,
  id?: number | null,
}

interface IAuthor {
  data: {
    attributes: {
      name: string,
      picture: IPicture,
    }
  }
}

interface ICategory {
  attributes: {
    slug: string,
    name: string,
    articles: {
      data: Array<IArticle>,
    },
  }
}

interface IPicture {
  data: {
    attributes: {
      url: string,
    }
  }
}

export interface IArticle {
  attributes: {
    slug: string,
    title: string,
    description: string,
    content: string,
    author: IAuthor,
    category: {
      data: ICategory
    },
    image: IPicture,
  }
}

export interface IArticles {
  attributes: {
    slug: string,
    title: string,
    category: {
      data: ICategory
    },
    image: IPicture,
  }
}

export interface IArticleResponse {
  data: {
    articles: {
      data: Array<IArticle>
    },
  }
}

export interface IArticlesResponse {
  data: {
    articles: {
      data: Array<IArticles>
    },
  }
}
export interface IListProps {
  title?: string, 
  items?: Array<IArticles> | undefined,
}
export interface ICardProps {
  article: IArticles,
}

export interface ICategoryResponse {
  data: {
    categories: {
      data: Array<ICategory>
    }
  },
}

export interface ICategoriesResponse {
  data: {
    categories: {
      data: Array<ICategory>
    }
  },
}