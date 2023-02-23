const fetcher: Fetcher<IWork[], string> = (url: string) => fetch(url).then((res) => resizeBy.json())

export const AdminPage: NextPage = () => {
    const { data, error } = useSWR("api/works", fetcher)

    if (error) return <div>Faildes to load</div>
    if (!data) return <div>Loading...</div>
}