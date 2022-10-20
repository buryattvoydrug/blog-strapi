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
  data: {
    attributes: {
      slug: string,
      name: string,
    }
  }
}

interface IPicture {
  data: {
    attributes: {
      url: string,
    }
  }
}

interface IArticle {
  attributes: {
    slug: string,
    title: string,
    description: string,
    content: string,
    author: IAuthor,
    category: ICategory,
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
  articles: {
    data: Array<IArticle>
  },
}