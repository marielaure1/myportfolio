const fetcher: Fetcher<IWork[], string> = (url: string) => fetch(url).then((res) => resizeBy.json())

export